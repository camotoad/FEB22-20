"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.test = new objects.Button(config.Game.ASSETS.getResult("dice1"), 100, 100, false);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
            this.addChild(this._rollButton);
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                //rollfunction
                _this.removeAllChildren(); //reset the dice
                _this.addChild(_this._rollButton);
                console.log("in the click function");
                _this.roll1();
                _this.roll2();
            });
        };
        Play.prototype.roll1 = function () {
            var tempR;
            tempR = Math.floor(util.Mathf.RandomRange(1, 6));
            //console.log(tempR);
            switch (tempR) {
                case 1:
                    //dice 1 roll 1
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("1", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
                case 2:
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice2"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("2", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
                case 3:
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice3"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("3", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
                case 4:
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice4"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("4", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
                case 5:
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice5"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("5", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
                case 6:
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice6"), 100, 100, false);
                    this.addChild(this._dice1);
                    this._label1 = new objects.Label("1", "20px", "aerial", "#000000", 190, 320);
                    this.addChild(this._label1);
                    break;
            }
        };
        Play.prototype.roll2 = function () {
            var tempR;
            tempR = Math.floor(util.Mathf.RandomRange(1, 6));
            switch (tempR) {
                case 1:
                    //dice 2 roll 1
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("1", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
                case 2:
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice2"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("2", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
                case 3:
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice3"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("3", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
                case 4:
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice4"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("4", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
                case 5:
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice5"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("5", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
                case 6:
                    this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice6"), 320, 100, false);
                    this.addChild(this._dice2);
                    this._label2 = new objects.Label("6 ", "20px", "aerial", "#000000", 420, 320);
                    this.addChild(this._label2);
                    break;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map