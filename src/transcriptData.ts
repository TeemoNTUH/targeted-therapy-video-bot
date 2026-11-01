export interface TranscriptSegment {
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
{
    id: "seg-1",
    title: "影片開場與治療旅程",
    startTime: 0,
    endTime: 79,
    formattedStart: "00:00",
    formattedEnd: "01:19",
    text: "嗨大家好，歡迎來到我們這次的突解解析，今天我們要聊一個很多人，尤其是病友跟家屬們都非常關心的話題，那就是頭頸癌的標靶治療，說真的面對疾病，尤其是聽到癌症治療這幾個字，心裡難免會有點慌對吧，但別擔心，知識就是我們最好的武器，今天我們要把那些聽起來很嚇人的醫學名詞，變成簡單好懂的概念，而且我們會把重點活力，集中在大家最關心的，治療期間的日常照護，希望看完這份解析，你們在接下來的旅程中，能覺得踏實很多，在很多醫療資料裡，有句話真的是說到心坎裡了，了解治療方式，是一起面對疾病的重要一步，這句話其實是在提醒我們，這條路上你絕對不是一個人，你的醫療團隊就是你最強的後盾，而理解這件事，就是你跟醫生建立默契的第一步，當你完全搞懂自己現在到底在打什麼仗，用什麼武器，你就能更好地掌握自己的身體狀況啦，好那我們今天會怎麼進行呢，大概分成五個部分，第一先簡單認識一下，什麼是標靶治療，接著看看它是怎麼精準鎖定I細胞的，再來我們會介紹兩種最常見的標靶藥物，第四部分，聊聊醫生怎麼幫你打造專屬的治療策略，最後也就是我們今天的重頭戲，治療期間的日常照護跟副作用管理，準備好了嗎，我們直接開始囉",
    summary: "影片開場與治療旅程",
    keywords: []
},
{
    id: "seg-2",
    title: "標靶治療概念與化療比較",
    startTime: 79,
    endTime: 114,
    formattedStart: "01:19",
    formattedEnd: "01:54",
    text: "首先第一部分，我們就來快速認識一下，頭頸癌的標靶治療，到底是怎麼一回事，其實啊，標靶治療可以說是這幾年來，癌症治療領域裡一個超級大的突破，它最大的特色就是走向個人化，醫生通常會針對中晚期，復發或者是已經轉移的頭頸癌患者，來仔細評估適不適合用這一招，你看它已經不再是那種，一種藥治百種人的傳統作法了，它是為你量身打造的專屬武器，也正因為它是為你量身打造的，所以等一下我們會特別強調，治療期間的自我照護到底有多重要，好有了基本概念後",
    summary: "標靶治療概念與化療比較",
    keywords: []
},
{
    id: "seg-3",
    title: "標靶治療作用機制",
    startTime: 114,
    endTime: 156,
    formattedStart: "01:54",
    formattedEnd: "02:36",
    text: "來到我們的第二部分，我們來看看這些藥物，到底是怎麼精準鎖定癌細胞的，很多人會問，標靶治療跟傳統的化學治療，到底差在哪裡，其實你可以把標靶治療，想像成是一枚裝了，高科技雷達的追蹤飛彈，它會先去掃描辨識癌細胞表面，那些特別的標記，然後啪的一下，實時鎖定那些有特定變異的，壞細胞進行攻擊，那傳統化療呢，它的作用範圍就比較廣一點，所以因為標靶治療專注在打擊癌細胞，它對我們身體裡正常細胞的傷害，相對就小很多，這也代表它有機會減輕一些副作用，這就是為什麼大家都說，精準是標靶治療最厲害的地方，懂了精準打擊的原理後，第三部分我們來具體認識一下",
    summary: "標靶治療作用機制",
    keywords: []
},
{
    id: "seg-4",
    title: "常見標靶藥物：EGFR 與 VEGF 抑制劑",
    startTime: 156,
    endTime: 204,
    formattedStart: "02:36",
    formattedEnd: "03:24",
    text: "醫生最常用的兩種標靶藥物，放心，我們把科學原理講的簡單一點，針對頭頸癌，最常見的有兩大類藥物，第一種是EGFRE之計，像是大家可能聽過的耳鼻德書，它的戰術很直接，就是跑去跟癌細胞表面的受體結合，這感覺就像是，直接剪斷了癌細胞的電話線，讓它接受不到長大的訊號，而且它還能幫我們的免疫系統指路，叫自身的免疫細胞趕快來攻擊癌細胞，那第二種叫做VEGFE之計，比如癌絲瓶，它的戰術就完全不一樣了，它玩的是切斷補給線，簡單來說，就是不讓腫瘤長出新的血管，沒有血管，腫瘤就吸不到氧氣跟氧分，等於是把它給餓死，讓它沒辦法繼續長大，你看這兩種戰術，是不是都非常聰明",
    summary: "常見標靶藥物：EGFR 與 VEGF 抑制劑",
    keywords: []
},
{
    id: "seg-5",
    title: "治療時機與搭配方式",
    startTime: 204,
    endTime: 236,
    formattedStart: "03:24",
    formattedEnd: "03:56",
    text: "接下來第四部分，我們來看看醫生，是怎麼運用這些聰明的藥物，幫你打造專屬的治療策略的，其實打這場抗癌大戰，標靶治療通常不會是單打獨鬥的，你的主治醫生，會根據你現在的身體狀況，把它跟其他療法搭配在一起，像是搭配放射線治療，傳統的化學治療，或者是現在也很熱門的免疫治療，這種打組合拳的概念，就是為了提供更多面向的方案，把治療效果拉到最高，這真的是一場需要精密佈局的團體戰，每一種武器，都在幫你爭取最後的勝利，好了",
    summary: "治療時機與搭配方式",
    keywords: []
},
{
    id: "seg-6",
    title: "治療期間日常照護與副作用管理",
    startTime: 236,
    endTime: 378.12,
    formattedStart: "03:56",
    formattedEnd: "06:18",
    text: "終於來到我們今天的第五部分，也是整份解析的最最最核心，日常照護跟副作用管理，這絕對是你能不能順利度過療程的關鍵，雖然我們剛剛說標靶治療相對精準，但老實說，是藥三分毒，它還是可能會帶來一些副作用，這也是病友們平常最擔心的，別怕，我們可以把日常照護分成兩大塊來看，第一塊是內在指標的追蹤，像是有些藥物可能會影響你的血壓，腎功能，或是讓傷口好得比較慢，這種我們肉眼看不到的，就需要你乖乖配合醫療團隊，定期回診抽血檢查，第二塊，就是你可以每天自己盯著的日常不適了，像是皮膚有沒有長紅疹，有沒有一直拉肚子，是不是覺得特別特別累，還有頭頸癌病友，因為治療位置最常遇到的口腔不舒服，如果你能把這些身體的小變化，每天記錄下來，這對醫生的幫助會超級大，請記住，面對這些不舒服，你絕對不需要自己咬牙死撐，所以為了把日常照護做到最好，我們幫大家整理了一個超好用的，黃金行動三步驟，第一步，每天都要密切觀察自己身體發出的訊號，第二步，時間到了，絕對要乖乖回診追蹤，一次都不能漏，第三步，也是最關鍵的一步，只要你發現任何剛剛說的那些不舒服，馬上立刻告訴你的醫療團隊，這真的太重要了，因為這樣，醫生才能及時幫你調整用藥，或是開藥幫你緩解症狀，你自己就是身體最好的偵查兵，只要你主動出擊，整趟抗癌之路絕對能走得更順，生活品質也會好很多，當然，講到這邊，還是要跟大家做個小小的貼心提醒，我們今天這份圖解指南聊的內容，主要是給大家做個健康教育的參考，畢竟每個人的體質跟實際病情都不一樣，這些資訊絕對不能取代專業醫生，親自幫你看診的計畫，有任何問題，一定要拿去跟你的主治醫生好好討論，好啦，我們今天的解析就到這邊，經過今天的整理，大家是不是對標靶治療的運作方式，還有最重要的日常照護，有了更清楚的輪廓呢，說真的，知識不僅能趕走恐懼，還能變成我們行動的力量，帶著今天學到的這些資訊，下次你走進診間的時候，你就不再只是個被動聽話的病人了，你可是能跟醫生並肩作戰的神隊友，那麼，你準備好在接下來的治療旅程中，拿回主控權，扮演更積極的角色了吧，感謝大家的陪伴，我們下次見囉，(謝謝)",
    summary: "治療期間日常照護與副作用管理",
    keywords: []
}
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
