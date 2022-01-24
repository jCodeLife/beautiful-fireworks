var words = [
    "变美",
    "变帅",
    "快乐",
    "发财",
    "暴富",
    "爱情",
    "桃花",
    "幸福",
    "健康",
    "进步",
    "好运",
    "必过",
    "平安",
    "升职",
    "和睦",
    "有猫",
    "痊愈",
    "脱单",
    "考研上岸"
];

function Blessing(pos, hu) {
    this.content = words[Math.floor(random() * 100) % words.length];
    this.hu = hu;
    this.show = function () {
        stroke(255);
        fill(this.hu, 255, 255);
        textFont("华文彩云");
        textStyle("bold");
        textSize(40);
        text(this.content, pos.x, pos.y);
    };
}
