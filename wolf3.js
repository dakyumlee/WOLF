const introTitle = document.getElementsByClassName("intro__title")[0];

const title = "W O L F";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
    let character = title[cnt++];

    if (character === "\n") {
        introTitle.innerHTML = introTitle.innerHTML + "<br/>";
    } else {
        introTitle.innerHTML = introTitle.innerHTML + character;
    }

    if (cnt === title.length) {
        clearInterval(timer);
        
        return;
    }
}

window.onload = function() {
    timer = setInterval(typingIntroTitle, 200);
}

const cards =document.querySelectorAll(".cards li");

        let cardOne, cardTwo; // 선택한 카드
        let disableDeck = false;

        function flipCard(e) {
            let clickedCard = e.target;
            
            if(clickedCard !== cardOne && !disableDeck){ 
                clickedCard.classList.add("flip");

                if(!cardOne){
                    return cardOne = clickedCard
                }
                cardTwo =clickedCard;
                disableDeck = true;

                let cardOneImg = cardOne.querySelector(".back img").src;
                let cardTwoImg = cardTwo.querySelector(".back img").src;

                matchCards(cardOneImg, cardTwoImg);
            }
        }
        //두개의 이미지 비교하기
        function matchCards(img1, img2){
            if(img1 == img2){
                cardOne.removeEventListener("click", flipCard);
                cardTwo.removeEventListener("click", flipCard);
                cardOne = cardTwo = "";
                return disableDeck =false;
            }else{
                //틀린 이미지 애니메이션 효과 주기
                setTimeout(() => {
                    cardOne.classList.add("shake");
                    cardTwo.classList.add("shake");
                }, 400);

                setTimeout(() => {
                    cardOne.classList.remove("shake", "flip");
                    cardTwo.classList.remove("shake", "flip");
                    cardOne = cardTwo = "";
                    return disableDeck =false;
                }, 1200);
            }
        }

        cards.forEach(card => {
            card.addEventListener("click", flipCard);
        });