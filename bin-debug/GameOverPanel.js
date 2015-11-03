/**
 * Created by Lawrence on 15/11/3.
 */
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        _super.call(this);
        this.draw();
        this.addEventListener(egret.Event.ADDED, this.showText, this);
    }
    var d = __define,c=GameOverPanel;p=c.prototype;
    p.draw = function () {
        var width = egret.MainContext.instance.stage.stageWidth;
        var height = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
        this.textField = new egret.TextField();
        this.textField.width = width;
        this.textField.y = 100;
        this.textField.textColor = 0xff0000;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.textField);
        var button = new egret.Sprite();
        button.graphics.beginFill(0x0000ff);
        button.graphics.drawRect(0, 0, 200, 100);
        button.graphics.endFill();
        button.width = 200;
        button.height = 100;
        button.x = (width - 200) / 2;
        button.y = (height - 100) / 2;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    p.showText = function () {
        this.textField.text = "I've Finished " + Data.score + " Steps";
    };
    p.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("StartGame");
    };
    return GameOverPanel;
})(egret.Sprite);
egret.registerClass(GameOverPanel,"GameOverPanel");
