/**
 * Created by Lawrence on 15/11/3.
 */
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this._maxTime = 20;
        this._timeLeft = 20;
        this.draw();
        this.createTimer();
    }
    var d = __define,c=TimerPanel;p=c.prototype;
    p.draw = function () {
        this.textField = new egret.TextField;
        this.textField.width = egret.MainContext.instance.stage.stageWidth;
        this.textField.y = 100;
        this.textField.textColor = 0xff0000;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.text = "20'00''";
        this.addChild(this.textField);
    };
    p.createTimer = function () {
        this._timer = new egret.Timer(1000, this._maxTime);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    p.onTimer = function () {
        this._timeLeft--;
        this.textField.text = this._timeLeft + "'00''";
    };
    p.onTimerCom = function () {
        this.textField.text = "00'00''";
        this.dispatchEventWith("GameOver");
    };
    p.start = function () {
        this.textField.text = "20'00''";
        this._timeLeft = 20;
        this._timer.reset();
        this._timer.start();
    };
    p.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
})(egret.Sprite);
egret.registerClass(TimerPanel,"TimerPanel");
