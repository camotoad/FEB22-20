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
            this.test = new objects.Button(config.Game.ASSETS.getResult("dice1"), 20, 20, false);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
            this.removeAllChildren(); //reset the dice
            this.addChild(this._rollButton);
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollButton);
            this.addChild(this.test);
            this._rollButton.on("click", function () {
                //rollfunction
                _this.Update();
                _this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 0, 0, false);
                _this.addChild(_this._dice1);
                console.log("in the click function");
                //this.roll1();
                //this.roll2();              
            });
        };
        Play.prototype.roll1 = function () {
            var tempR;
            switch (tempR) {
                case 1:
                    //dice 1 roll 1
                    this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 150, 200, false);
                    return tempR;
                    break;
                case 2:
                    return tempR;
                    break;
                case 2:
                    return tempR;
                    break;
                case 3:
                    return tempR;
                    break;
                case 4:
                    return tempR;
                    break;
                case 5:
                    return tempR;
                    break;
                case 6:
                    return tempR;
                    break;
            }
        };
        Play.prototype.roll2 = function () {
            var tempR;
            switch (tempR) {
                case 1:
                    //dice 2 roll 1
                    return tempR;
                    break;
                case 2:
                    return tempR;
                    break;
                case 2:
                    return tempR;
                    break;
                case 3:
                    return tempR;
                    break;
                case 4:
                    return tempR;
                    break;
                case 5:
                    return tempR;
                    break;
                case 6:
                    return tempR;
                    break;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map