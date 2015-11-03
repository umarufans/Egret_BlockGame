/**
 * Created by Lawrence on 15/11/3.
 */
class GameOverPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED, this.showText, this);
    }
    private textField:egret.TextField;
    private draw() {
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
        button.y = (height - 100) /2;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    }
    private showText() {
        this.textField.text = "I've Finished " + Data.score + " Steps";
    }
    private startGame() {
        this.parent.removeChild(this);
        this.dispatchEventWith("StartGame");

    }
}