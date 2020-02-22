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
        private test:objects.Button;

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
            this.test = new objects.Button(config.Game.ASSETS.getResult("dice1"), 20 , 20 ,false);

            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            
            this.Main();
        }        
        
        public Update(): void 
        {
            this.removeAllChildren(); //reset the dice
            this.addChild(this._rollButton);
        }
        
        public Main(): void 
        {
            this.addChild(this._rollButton);
            

            this.addChild(this.test);

            this._rollButton.on("click", ()=>{
                //rollfunction
                this.Update();
                this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 0,0, false);
                this.addChild(this._dice1);
                console.log("in the click function");
                //this.roll1();
                //this.roll2();              
            });

        }

        public roll1():number
        {
            let tempR:number;
            switch (tempR)
                {
                    case 1:
                        //dice 1 roll 1
                        this._dice1 = new objects.Button(config.Game.ASSETS.getResult("dice1"), 150,200, false);
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

        }

        public roll2():number
        {
            let tempR:number;
            switch (tempR)
                {
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

        }

        
    }
}