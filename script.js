
const cardId = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3')];

const previous = document.getElementById('previous');
const next = document.getElementById('next');

function cardDisplay(cardId, previous, next) {
    let i = 0;
    let count = 0;
    let constantCard = cardId[i];
    constantCard.style.display = "block";

    previous.addEventListener('click', function (ckeck) {
        if (ckeck.target) {

            if (count === 0 || i === 0) {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i = cardId.length - 1;
                count = i + 1;
                let currentCard = cardId[i];
                currentCard.style.display = "block";
            }
            else if (count === cardId.length) {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i -= 1;
                count = i + 1;
                let currentCard = cardId[i];
                currentCard.style.display = "block";
            }
            else {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i -= 1;
                count = i + 1;
                let currentCard = cardId[i];
                currentCard.style.display = "block";
            }
        }
    });

    next.addEventListener('click', function (check) {
        if (check.target) {

            if (count === cardId.length) {
                constantCard = cardId[i];
                constantCard.style.display = "none";
                
                i = 0;
                let currentCard = cardId[i];
                currentCard.style.display = "block";
            }
            else {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i += 1;
                let currentCard = cardId[i];
                currentCard.style.display = "block";
                count = i + 1;
            }
        }
    });

}

cardDisplay(cardId, previous, next);
