/**
 * Created by Lawrence on 15/11/2.
 */
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.createGroupRect();
        this.createTimer();
        this.startGame();
    }
    var d = __define,c=Game;p=c.prototype;
    p.createGroupRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.addEventListener("GameOver", this.gameOver, this);
            groupRect.addEventListener("ClickRight", this.nextRow, this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getRectWidth() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    p.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].move();
        }
        Data.score++;
    };
    p.gameOver = function () {
        this._timerPanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener("StartGame", this.startGame, this);
        }
        this._root.addChild(this.gameOverPanel);
    };
    p.createTimer = function () {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("GameOver", this.gameOver, this);
        this._root.addChild(this._timerPanel);
    };
    p.startGame = function () {
        Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getRectWidth() * i;
            this._rectGroups[i]._currentRow = i;
            if (i != (this._row - 1)) {
                this._rectGroups[i].createBlackRect();
            }
        }
        this._timerPanel.start();
    };
    return Game;
})();
egret.registerClass(Game,"Game");
