import json
import re
from pathlib import Path

project_dir = Path(__file__).resolve().parent
srt_path = project_dir / "掌握治療旅程：頭頸癌標靶治療.srt"
output_path = project_dir / "src" / "transcriptData.ts"
logical_splits = [
    (0, 79, "影片開場與治療旅程"),
    (79, 114, "標靶治療概念與化療比較"),
    (114, 156, "標靶治療作用機制"),
    (156, 204, "常見標靶藥物：EGFR 與 VEGF 抑制劑"),
    (204, 236, "治療時機與搭配方式"),
    (236, None, "治療期間日常照護與副作用管理"),
]
cue_pattern = re.compile(
    r"^\[(\d{2}):(\d{2}):(\d{2})[.,](\d{3}) --> "
    r"(\d{2}):(\d{2}):(\d{2})[.,](\d{3})\]\s*(.*)$"
)


def to_seconds(hours, minutes, seconds, milliseconds):
    return int(hours) * 3600 + int(minutes) * 60 + int(seconds) + int(milliseconds) / 1000


def format_time(value):
    total_seconds = round(value)
    minutes, seconds = divmod(total_seconds, 60)
    return f"{minutes:02d}:{seconds:02d}"


cues = []
for line in srt_path.read_text(encoding="utf-8-sig").splitlines():
    match = cue_pattern.match(line.strip())
    if match:
        start = to_seconds(*match.groups()[:4])
        end = to_seconds(*match.groups()[4:8])
        text = match.group(9).strip()
        if text:
            cues.append((start, end, text))

if not cues:
    raise SystemExit(f"No subtitle cues found in {srt_path}")

video_end = max(end for _, end, _ in cues)
segments = []
for index, (start, configured_end, title) in enumerate(logical_splits, start=1):
    end = min(configured_end, video_end) if configured_end is not None else video_end
    text = "，".join(cue_text for cue_start, _, cue_text in cues if start <= cue_start < end)
    if text:
        segments.append({
            "id": f"seg-{index}",
            "title": title,
            "startTime": start,
            "endTime": end,
            "formattedStart": format_time(start),
            "formattedEnd": format_time(end),
            "text": text,
            "summary": title,
            "keywords": [],
        })

segment_lines = []
for segment in segments:
    segment_lines.append("{\n" + ",\n".join(
        f"    {key}: {json.dumps(value, ensure_ascii=False)}"
        for key, value in segment.items()
    ) + "\n}")

out_content = '''export interface TranscriptSegment {
	id: string;
	title: string;
	startTime: number;
	endTime: number;
	formattedStart: string;
	formattedEnd: string;
	text: string;
	keywords: string[];
	summary: string;
}

export const TRANSCRIPT_SEGMENTS: TranscriptSegment[] = [
__SEGMENTS__
];

export interface SearchResult {
	query: string;
	topSegments: TranscriptSegment[];
	primaryTime: number;
	formattedPrimaryTime: string;
}

export function searchTranscript(query: string): SearchResult {
	const q = query.toLowerCase().trim();
	let matches: TranscriptSegment[] = [];

	if (q.includes("副作用") || q.includes("腹瀉") || q.includes("皮膚") || q.includes("不適") || q.includes("皮疹")) {
		matches = TRANSCRIPT_SEGMENTS.filter(s => s.title.includes("副作用"));
	} else if (q.includes("egfr") || q.includes("vegf") || q.includes("受體") || q.includes("新生血管") || q.includes("藥物") || q.includes("爾必得舒") || q.includes("癌思停")) {
		matches = TRANSCRIPT_SEGMENTS.filter(s => s.title.includes("標靶藥物"));
	} else if (q.includes("階段") || q.includes("中晚期") || q.includes("時機") || q.includes("搭配")) {
		matches = TRANSCRIPT_SEGMENTS.filter(s => s.title.includes("時機"));
	} else if (q.includes("什麼是") || q.includes("化療")) {
        matches = TRANSCRIPT_SEGMENTS.filter(s => s.title.includes("化療比較"));
    }
    
	if (matches.length === 0) {
		matches = TRANSCRIPT_SEGMENTS.filter(s => s.text.includes(q) || s.title.includes(q));
	}
    
	if (matches.length === 0) {
        matches = TRANSCRIPT_SEGMENTS.filter(s => s.title.includes("化療比較"));
    }
    
	const topSegments = matches.slice(0, 2);
	return {
		query,
		topSegments: topSegments,
		primaryTime: topSegments[0] ? topSegments[0].startTime : 0,
		formattedPrimaryTime: topSegments[0] ? topSegments[0].formattedStart : "00:00"
	};
}
'''

output_path.write_text(out_content.replace("__SEGMENTS__", ",\n".join(segment_lines)), encoding="utf-8")
