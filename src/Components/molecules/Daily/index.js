import React from 'react';
import './index.css';
import BackButton from '../../atoms/BackButton/index.js';
import DailyBox from '../../atoms/DailyBox/index.js';

const dailyData = [
    {
        key: 1,
        img: "https://imgur.com/SU69GVK.jpg",
        text: <div>必須發文紀念一下<br/>輔大-台大-輔大 腳踏車36k<br/>沒錯，我又瘋了www<br/>在台北以來從事的第一次長距離運動<br/>體感上還好<br/>沒有想像中累<br/>可能因為很休閒的騎<br/>沒有全程在拉速度<br/>這次我再次感覺到台北市跟新北市對腳踏車友善度的差距<br/>在新北夜騎強烈建議配個後燈<br/>在沒有專用車道騎真的恐怖<br/>附圖是在新月橋上跟河濱公園的酷地方<br/>未來約會地點get(x<br/>---<br/>我目前從事過的運動體感疲累程度：<br/>半馬&gt;10k跑&gt;5k跑=36k腳踏車&gt;3k跑<br/>看來只剩長泳沒試過了，下次瘋了再試</div>,
        time: "04, 23, 2022"
    },
    {
        key: 2,
        img: "https://imgur.com/E7Wkt6B.jpg",
        text: <div>年末回顧<br/>我覺得今年是心態變化最大的一年<br/>我放下了很多以前執著的事<br/>或許沒有以前那麼鑽牛角尖<br/>（但我希望該堅持的仍然要繼續堅持）<br/>也嘗試了過去列在待辦的事情<br/>像是玩嵌入式開發、網頁設計、爬蟲等等的<br/>還有之前提到的底片攝影<br/>誤打誤撞修到了重訓課<br/>學到一些自由重量訓練技巧等<br/>技能樹越點越亂（？<br/>真心考慮雙或輔個資工<br/>感覺會很好玩（作死中<br/>至於目標嘛<br/>一如往常的變來變去<br/>目前想走的路應該是量子元件研究<br/>會不會變再說<br/><br/>還有一件我有感的事<br/>我在嘗試了很久之後<br/>成功稍稍打開了我的社交圈<br/>再次試過跟長輩交朋友<br/>失敗<br/>不管，再接再厲<br/><br/>除此之外<br/>在事情突然變多的大二上<br/>我意識到我的時間天秤逐漸失衡<br/>到期中才覺得我事情那麼多又修一堆課是不是過頭了<br/>當然也可能是我以大一上為模板來估時間<br/>卻忽略了變因差了十萬八千里<br/>光是公演挪到冬至就有得我受了<br/>更別說是比賽跟大大小小的報告<br/>及我的想學清單<br/>看來如何正確的分配時間仍然是個大課題<br/><br/>至於期望<br/>這學期被班導點醒之後<br/>我希望我能在下學期找到主業跟副業的平衡<br/>或是更現實些<br/>這件事所帶來的效益到底值不值得我花這麼多時間做<br/>還有排時間出來運動<br/>在這下半年裡我的運動量少的可憐<br/>總得來說<br/>時間規劃得當會是我2022的目標之一<br/>另一個目標則是交到不太是我生活圈內的朋友吧<br/>感覺我現在的朋友都靠在我的舒適圈內<br/><br/>發一張那卷裡少數沒被洗壞的底片<br/>我覺得2021上半年好糟<br/>但下半年過得還算可以吧<br/>882021</div>,
        time: "12, 31, 2021"
    },
    {
        key: 3,
        img: "https://imgur.com/dqw34A3.jpg",
        text: <div>本來在梳理瑣事的<br/>但打一打自己就想通了<br/>結論就是選擇真的很重要<br/>只好全部刪掉當廢文<br/>外加一張帥照（x）</div>,
        time: "12,14,2021"
    },
    {
        key: 4,
        img: "https://imgur.com/n8Rltd5.jpg",
        text: <div>好久沒發文了<br/>也好久沒剪頭髮了<br/>宅在家這段時間意外的學了許多新（ㄨˊ）的（ㄩㄥˋ）小技能哈哈<br/>也因為這段時間沒了本來應該有的活動<br/>而能把晚了一年的考駕照排進來<br/>但之前列表出來想學的好像都半途而廢了<br/>（或許也不是那麼想學啦<br/>不過這週有點越來越頹的趨勢<br/>——————————————<br/>話說這學期gpa比預料之中好很多<br/>跟轉考改書審有很大的關係吧<br/>原本以為非考科會被當光光<br/>但出乎意料的好<br/>不過主科只有低空飛過而已<br/>——————————————<br/>其實我在準備考試的過程是迷惘的<br/>我在嘴上的表現其實也跟心裡想的不太一樣<br/>（我是笨蛋死要面子<br/>有時候甚至覺得我不是那麼想要做這件事<br/>或許老天爺知道了吧<br/>於是今年就書審了<br/>—————————————<br/>好像原本想做的事後來做了之後發現跟想像的有些差距<br/>或許是不夠努力啦<br/>但發現沒興趣或沒有動力的機率好像更多<br/>半夜想跟自己和解一下順便整理一下想法<br/>這時候就覺得怎麼好像我越長大越不了解自己啊<br/>（自己好像才是那個最難懂的人<br/>（因為我們只能從鏡子裡認識自己<br/>—————————————<br/>不過至少我在還沒遠距的時候做了蠻多好玩的事<br/>也更了解台北了<br/>還開發了一些新興趣XD<br/>程式好玩不過我討厭手刻數值分析<br/>（如果可以的話我會想把整套電腦科學學完<br/>電學跟近物也不像力學那麼難啃<br/>除了自我懷疑其他事這學期都比上學期好太多了<br/>—————————————<br/>以上半夜牢騷</div>,
        time: "07, 22, 2021"
    },
    {
        key: 5,
        img: "https://imgur.com/wdAMvCy.jpg",
        text:<div>大一上 log out！<br/>好久沒發長文了，這篇應該以自檢居多啦，因為我覺得有很多沒做好的地方<br/><br/>暑假<br/>國中升高中的暑假因為沒經驗<br/>基本上整天在家玩電腦看電影<br/>補習班試聽只有去了一次<br/>暑期課程也都退掉<br/>那個暑假基本上沒有看書<br/>我想因為這樣上了高中實力差了別人一大截<br/>高中升大學的暑假有了前車之鑑<br/>充實了些<br/>暑假的前半段都給了暑訓<br/>後半段是一些上大學的準備、計畫轉考跟瘋狂出去玩<br/>人生第一次不在台灣本島也是這個暑假<br/><br/>開學<br/>學期前半段我算認真吧（？<br/>至少那時候的生活是充實的<br/>上課念書運動跟在台北晃<br/>那時候對這個城市還不是很熟悉<br/>大概是新鮮感<br/>讓我每個週末都會出去走走<br/>課業上都還是高中的東西所以也沒怎麼讀書<br/>這為後面埋下了伏筆<br/><br/>考台大團<br/>一半是意外一半是計畫之內<br/>我有想考但原本的計畫是大二的事<br/>但看到招生就忍不住了呵呵呵<br/>也成了這學期的精神支柱<br/>：「好累」<br/>：「再撐一天明天練唱」<br/>：「讚啦」<br/>（以上是內心兩個我的對話<br/><br/>期中<br/>學期初那種萬物皆新的衝勁消失<br/>取而代之的是怠惰<br/>睡眠時間逐漸失調<br/>有時候睡到曠課<br/>學期初的規律運動沒了<br/>娛樂被youtobe綁架<br/>很容易就看到忘記做該做的事<br/>「好累，再休息一下」大概是我說過最多次的話吧<br/><br/>期中考<br/>不出意料之外的下去了<br/>原本都會的東西居然都做不出來<br/>但這並沒有敲醒我<br/>好強如我<br/>沒有找其他人幫忙<br/>：「你還行吼」<br/>：「沒事沒事」<br/><br/>學期中後半<br/>怠惰加上期中的挫折<br/>我翹了兩週的普物吧<br/>甚至本來想停修化學後來直接懶得停<br/>想說算了就放給他爛<br/>睡眠失調也越來越嚴重<br/>一切的生活都變得不規律<br/>什麼事情都積到最後一刻做<br/>普物微積分作業寫都沒寫直接放棄<br/>總而言之<br/>就是消極到不能消極<br/>廢到不能再廢的一段時間<br/><br/>學期末<br/>生活上有拿回了一點主導權<br/>開始逼自己沒事去圖書館<br/>限制休息時間<br/>等等等等的<br/>但<br/><br/>期末考<br/>好不容易建立的規矩在這週消失殆盡<br/>因為有了「努力好久了該放鬆一下」的心態<br/>讓我回到那個耍廢的日子<br/>考普物前天因為一直睡不著<br/>早上啥都沒讀就去考試<br/>我想這學期要被當光光了<br/><br/>final<br/>這學期有幾點做不好的地方<br/>時間被各種無生產力行為綁架<br/>逃避本來應該完成的事物<br/>拖延症（還是拖到後面直接不想做那種）生活規律被打亂<br/>（想到再補）<br/>也有做得不錯的地方啦，像是<br/>每個月固定有三本書的閱讀量<br/>聲音進步了<br/>但這學期的表現壞大於好啦<br/>生活總覺得不太充實<br/><br/>矮額打出這些東西好赤裸<br/>希望沒幾個人會看（誤）<br/>這篇就只是我個人的自檢啦<br/>避免自己繼續騙自己而已<br/>我總把不好的那一面藏著<br/>騙自己也騙別人<br/>是時候逼自己面對現實了<br/>希望下學期回顧時<br/>少些打出來會覺得不堪的東西<br/>附上彩虹@板橋</div>,
        time: "01, 05, 2021"
    },
    {
        key: 6,
        img: "https://imgur.com/9MCw813.jpg",
        text: "第一次坐飛機，也是第一次離開台灣本島。在剛考完大學指考的暑假與朋友出遊，坐船離開澎湖本島浪好大好刺激，晚上喝酒玩遊戲有人醉了好好笑。懷念那些天的一切，期待以後再次相聚能跟這時一樣無所顧忌",
        time: "10, 13, 2020"
    }
]

const Daily = () =>{

    return(
    <div className="Daily">
        <BackButton/>
        {dailyData.map((el, key) => 
            <DailyBox img={el.img} text={el.text} time={el.time} key={el.key}/>
        )}
    </div>
    )
}

export default Daily;