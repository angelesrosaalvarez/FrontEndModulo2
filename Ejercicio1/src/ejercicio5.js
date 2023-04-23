class SlothMachine 
{
    coins = 0;
    
    constructor () {
        this.coins = 0;
    }

    play()
    {
        this.coins++;
        const ruleta1 = Math.random()>0.5;
        const ruleta2 = Math.random()>0.5;
        const ruleta3 = Math.random()>0.5;
        if(ruleta1 && ruleta2 && ruleta3)
        {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        }
        else
        {
            console.log("Good luck next time!!");
        }
    }

  }
  
  const machine1 = new SlothMachine();
  machine1.play(); 
  machine1.play(); 
  machine1.play();  