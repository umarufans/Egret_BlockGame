/**
 * Created by Lawrence on 15/11/3.
 */
class TimerPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
        this.createTimer();

    }
    private textField:egret.TextField;
    private draw() {
        this.textField = new egret.TextField;
        this.textField.width = egret.MainContext.instance.stage.stageWidth;
        this.textField.y = 100;
        this.textField.textColor = 0xff0000;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.text = "20'00''";
        this.addChild(this.textField);
    }
    private _timer:egret.Timer;
    private _maxTime = 20;
    private createTimer() {
        this._timer = new egret.Timer(1000, this._maxTime);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    }
    private _timeLeft = 20;
    private onTimer() {
        this._timeLeft--;
        this.textField.text = this._timeLeft + "'00''";
    }
    private onTimerCom() {
        this.textField.text = "00'00''";
        this.dispatchEventWith("GameOver");
    }
    public start() {
        this.textField.text = "20'00''";
        this._timeLeft = 20;
        this._timer.reset();
        this._timer.start();
    }
    public stop() {
        this._timer.stop();
    }
}