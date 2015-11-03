/**
 * Created by Lawrence on 15/10/31.
 */
var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        _super.call(this);
        this._currentRow = 0;
        this._currentBlackRectIndex = 0;
        this.createRects();
    }
    var d = __define,c=GroupRect;p=c.prototype;
    p.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    p.onClickRect = function (event) {
        event.target.onRectClick();
        if (event.target.type == RectType.NONCLICKABLE || this._currentRow != (Data.getRectRow() - 2)) {
            this.dispatchEventWith("GameOver");
        }
        else {
            this.dispatchEventWith("ClickRight");
        }
    };
    p.createBlackRect = function () {
        var n = Math.random();
        if (n >= 0 && n < 0.25) {
            this._currentBlackRectIndex = 0;
        }
        else if (n >= 0.25 && n < 0.5) {
            this._currentBlackRectIndex = 1;
        }
        else if (n >= 0.5 && n < 0.75) {
            this._currentBlackRectIndex = 2;
        }
        else {
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    };
    p.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    };
    p.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.init();
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth(); //Width == Height
    };
    return GroupRect;
})(egret.Sprite);
egret.registerClass(GroupRect,"GroupRect");
