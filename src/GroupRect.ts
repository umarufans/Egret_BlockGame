/**
 * Created by Lawrence on 15/10/31.
 */
class GroupRect extends egret.Sprite {
    public constructor() {
        super();
        this.createRects();
    }
    private _rects:Array<Rect>;
    private createRects() {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect:Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    }
    public _currentRow:number = 0;
    private onClickRect(event:egret.TouchEvent) {
        event.target.onRectClick();
        if(event.target.type == RectType.NONCLICKABLE || this._currentRow != (Data.getRectRow() - 2)) {
            this.dispatchEventWith("GameOver");
        } else {
            this.dispatchEventWith("ClickRight");
        }
    }
    private _currentBlackRectIndex:number = 0;
    public createBlackRect() {
        var n:number = Math.random();
        if(n >= 0 && n < 0.25) {
            this._currentBlackRectIndex = 0;
        } else if(n >= 0.25 && n < 0.5) {
            this._currentBlackRectIndex = 1;
        } else if(n >= 0.5 && n < 0.75) {
            this._currentBlackRectIndex = 2;
        } else {
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    }
    public init() {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    }
    public move() {
        this._currentRow++;
        if(this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.init();
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth(); //Width == Height
    }

}