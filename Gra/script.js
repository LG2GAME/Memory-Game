const renderGameBody = () => {

    // Generate Images
    const documentGameBody = document.getElementById("gameBody");
    let RNG = Math.floor(Math.random() * 10);
    let RNGArray = [16];

    for(let i = 0; i < 16;) {
        if(!RNGArray.includes(RNG)) {
            RNGArray[i] = RNG;
            i++;
        }
        RNG = Math.floor(Math.random() * 16)
    }

    const gameBodyItemsArr = [
        `<div class="flip-card card-1">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/1.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-2">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/2.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-3">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/3.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-4">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/4.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-5">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/5.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-6">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/6.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-7">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/7.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-8">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img src="./img/8.jpg">
                </div>
            </div>
        </div>
        `,
    ]

    for(let i = 0; i < RNGArray.length; i++) {
        if(RNGArray[i] >= 8) documentGameBody.innerHTML += `${gameBodyItemsArr[RNGArray[i] - 8]}`;
        else documentGameBody.innerHTML += `${gameBodyItemsArr[RNGArray[i]]}`;
    }

    
    // Flip Card on Click
    const flipCard = document.querySelectorAll(".flip-card");
        flipCard.forEach(FC => {
            FC.addEventListener("click", () => {
                FC.classList.add("fliped", "clickedCard");

                const cards = document.querySelectorAll(".clickedCard");
                if(cards.length >= 2) {
                    cards.forEach(element => {
                        if(cards[0].classList == cards[1].classList) {
                            console.log("true")
                        } else console.log("false")
                    })
                }
            });
        });

        

    // Game Rules
}

window.addEventListener("load", renderGameBody());
