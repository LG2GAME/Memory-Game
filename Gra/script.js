const renderGameBody = () => {

    // Random element planning
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

    // Array with game items
    const gameBodyItemsArr = [
        `<div class="flip-card card-1">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/1.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-2">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/2.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-3">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/3.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-4">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/4.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-5">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/5.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-6">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/6.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-7">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/7.jpg">
                </div>
            </div>
        </div>
        `,
        `<div class="flip-card card-8">
            <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                    <img class="img-src" src="./img/8.jpg">
                </div>
            </div>
        </div>
        `,
    ]

    for(let i = 0; i < RNGArray.length; i++) {
        if(RNGArray[i] >= 8) documentGameBody.innerHTML += `${gameBodyItemsArr[RNGArray[i] - 8]}`;
        else documentGameBody.innerHTML += `${gameBodyItemsArr[RNGArray[i]]}`;
    }

    
    // Game rules
    const flipCard = document.querySelectorAll(".flip-card");
        flipCard.forEach(FC => {
            FC.addEventListener("click", () => {
                let cardImg = document.getElementsByClassName("img-src");
                let flippedItem = document.getElementsByClassName("flipped");

                // Adding flipped class
                FC.classList.add("flipped");
                
                if(flippedItem.length >= 1) {
                    if(flippedItem[0].querySelector(".img-src").getAttribute("src") == flippedItem[1].querySelector(".img-src").getAttribute("src")) {
                        for(let i = flippedItem.length; i > 0; i--) {
                            flippedItem[0].classList.add("correctAnswer");
                            flippedItem[0].classList.remove("flipped");
                        };
                    } else {
                        setTimeout(function() {
                            for(let i = flippedItem.length; i > 0; i--) {
                                flippedItem[0].classList.remove("flipped");
                            };
                        }, 1000);
                    }
                } else {
                    
                }
            });
        });
    // Game Rules
}

window.addEventListener("load", renderGameBody());