
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
            console.log("previous btn is clicked");

            if (count === 0 || i === 0) {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i = cardId.length - 1;
                console.log(i);
                count = i + 1;
                console.log(count);
                let currentCard = cardId[i];
                console.log(currentCard);
                currentCard.style.display = "block";
            }
            else if (count === cardId.length) {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i -= 1;
                console.log(i);
                count = i + 1;
                console.log(count);
                let currentCard = cardId[i];
                console.log(currentCard);
                currentCard.style.display = "block";
            }
            else {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i -= 1;
                console.log(i);
                count = i + 1;
                console.log(count);
                let currentCard = cardId[i];
                console.log(currentCard);
                currentCard.style.display = "block";
            }
        }
    });

    next.addEventListener('click', function (check) {
        if (check.target) {
            console.log("next btn is clicked");

            if (count === cardId.length) {
                constantCard = cardId[i];
                constantCard.style.display = "none";
                i = 0;
                count = 0;

                console.log(i);
                let currentCard = cardId[i];
                console.log(currentCard);
                currentCard.style.display = "block";
                console.log(count);
            }
            else {
                constantCard = cardId[i];
                constantCard.style.display = "none";

                i += 1;
                console.log(i);
                let currentCard = cardId[i];
                console.log(currentCard);
                currentCard.style.display = "block";
                count = i + 1;
                console.log(count);
            }
        }
    });

}

cardDisplay(cardId, previous, next);