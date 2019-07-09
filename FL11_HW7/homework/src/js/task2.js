let play = confirm('Do you want to play a game?');
let multiplier = 2;
let rangeStep = 4;
let divider = 2;
let atemptsLeft = 3;
let atemMax = 3;
let minPrise = 25;

if (play) {
    while (play) {
        let playCircle = true;
        let range = 8;
        let currentPrizePossible = 100;
        let totalPrize = 0;
                
        while (playCircle) {
            let random = Math.floor(Math.random() * (range + 1));
            let stepUp = false;

            for (let atempts = 1; atempts < atemptsLeft + 1; atempts++) {
                let msg = prompt(`Choose a roulette pocket number from 0 to ${range}
                Attempts left: ${atemptsLeft - atempts + 1}
                Total prize: ${totalPrize}$
                Possible prize on current attempt: ${currentPrizePossible}$`);

                if (msg !== random || msg < 0 || isNaN(msg) || msg > range) {
                    currentPrizePossible /= divider;
                } else if (msg === random) {
                    totalPrize += currentPrizePossible;                   
                    break;
                } else {
                    if (atempts === atemMax) {
                        stepUp = true;
                        break;
                    }

                }
                
            } //end For loop

            if (stepUp) {
                break;
            }
            playCircle = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$.
            Do you want to continue?`);
            if (playCircle) {
                range += rangeStep;
            } else {
                break;
            }
             
        }        
        
        alert(`Thank you for participating! Your prize is: ${totalPrize}$`);        
             
    }

} else {
    alert('You did not become a billionaire, but can.');
}