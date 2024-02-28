

function gGame() {
    let gameContainer = document.getElementById("gCotnainer");

    // 1 Game Image
    let gameElement1 = document.createElement("img");
    gameElement1.src = "./img/1.png";
    gameElement1.className = "game-glement-1";
    // 2 Game Image
    let gameElement2 = document.createElement("img");
    gameElement2.src = "./img/2.png";
    gameElement2.className = "game-glement-2";
    // 3 Game Image
    let gameElement3 = document.createElement("img");
    gameElement3.src = "./img/3.png";
    gameElement3.className = "game-glement-3";
    // 4 Game Image
    let gameElement4 = document.createElement("img");
    gameElement4.src = "./img/4.png";
    gameElement4.className = "game-glement-4";
    // 5 Game Image
    let gameElement5 = document.createElement("img");
    gameElement5.src = "./img/5.png";
    gameElement5.className = "game-glement-5";

    // gameContainer.appendChild(gameElement1);

    let random = Math.floor(Math.random() * 10);
    let generateTab = [10];

    for(let i = 0; i < 10;) {
        if(!generateTab.includes(random)) {
            generateTab[i] = random;
            i++;
        }
        random = Math.floor(Math.random() * 10)
    }

    for(let j = 0; j < 10; j++) {
        switch (generateTab[j]) {
            case 1:
                gameContainer.appendChild(gameElement1);
                break;
            case 2:
                gameContainer.appendChild(gameElement2);
                break;
            case 3:
                gameContainer.appendChild(gameElement3);
                break;
            case 4:
                gameContainer.appendChild(gameElement4);
                break;
            case 5:
                gameContainer.appendChild(gameElement5);
                break;
        }
    }
    
}

window.onload(gGame());