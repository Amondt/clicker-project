window.onload = () => {

    var game = new Game(0);
    gameFlow();
    // Main Function 
    function gameFlow(){
        // 
        // INSERT CLICK FUNCTION HERE
        // 
        multBtn = document.querySelector('#hMultiplier')
        multObject = game.multiplier
        multBtn.addEventListener("click",() => {
            if (game.isBuyable(game.score,multObject.price) == true) { 
                game.score = game.payForUpgrade(game.score,multObject.price)
                multObject.price = multObject.evolPrice(multObject.price)
                multObject.level = multObject.evolLevel(multObject.level)
                multObject.increase = multObject.evolIncrease(multObject.increase)
                multObject.updateAffichageMultiple();
            }
        })
    }
    function Game(score){
        this.score = score
        this.multiplier = new Multiple(50,1)
        // Check if possible buy (score > 0)
        // return false if too expensive, true else
        this.isBuyable = function(score,price){
            if ((score - price) < 0) {
                return false;
            } else {
                return true;
            }
        }
        // Update score display on index.html
        this.updateAffichageScore = function () {
            document.querySelector('#score').innerHTML(this.score)
        }

        // Increase score by multiplier
        this.increaseScore = function(){
            this.score += this.multiplier.increase;
        }
        // Decreases user score to pay for an upgrade
        this.payForUpgrade() = function(score,price){      
            return (score - price)      
        }
    }

    function Multiple(price, level, increase){
        this.price = price;
        this.level = level;
        this.increase = increase;
        this.evolPrice = function(price){
            return price*1.15;
        }
        this.evolLevel = function(level){
            return level+1;
        }
        this.evolIncrease = function(increase){
            return increase*2
        }
        // Update multiple display on index.html
        this.updateAffichageMultiple = function () {
            document.querySelector('#hMultiplier').innerHTML(this.increase);
        }
    }
}