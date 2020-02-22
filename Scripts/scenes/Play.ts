module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;
        private _roll1:number;
        private _roll2:number;
        private _label1:objects.Label;
        private _label2:objects.Label;
        private _dice1: objects.Button;
        private _dice2: objects.Button;
        private _background:objects.Button;


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            
            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {


            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._background = new objects.Button(config.Game.ASSETS.getResult("diceBackground"),0,0,false);
            
            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._background);
            this.addChild(this._rollButton);

            this._rollButton.on("click", ()=>{
                //rollfunction
                this.removeAllChildren(); //reset the dice
                this.addChild(this._background);
                this.addChild(this._rollButton);
                console.log("in the click function");
                this.roll1();
                this.roll2();              
            });

        }

        public roll1():void
        {
            let tempR:number;
            tempR = Math.floor(util.Mathf.RandomRange(1,6));
            //console.log(tempR);
            switch (tempR)
                {
                    case 1:
                        //dice 1 roll 1
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("1", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                    case 2:
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice2"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("2", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                    case 3:
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice3"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("3", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                    case 4:
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice4"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("4", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                    case 5:
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice5"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("5", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                    case 6:
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice6"), 100 , 100 ,false);
                        this.addChild(this._dice1);
                        this._label1 = new objects.Label("1", "20px", "aerial", "#FFFFFF", 190, 320);
                        this.addChild(this._label1);
                        break;
                }

        }

        public roll2():void
        {
            let tempR:number;
            tempR = Math.floor(util.Mathf.RandomRange(1,6));
            switch (tempR)
                {
                    case 1:
                        //dice 2 roll 1
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("1", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;
                    case 2:
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice2"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("2", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;
                    case 3:
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice3"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("3", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;
                    case 4:
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice4"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("4", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;
                    case 5:
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice5"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("5", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;
                    case 6:
                        this._dice2 = new objects.Button(config.Game.ASSETS.getResult("dice6"), 320 , 100 ,false);
                        this.addChild(this._dice2);
                        this._label2 = new objects.Label("6 ", "20px", "aerial", "#FFFFFF", 410, 319);
                        this.addChild(this._label2);
                        break;

                }

        }

        
    }
}