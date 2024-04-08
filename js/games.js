
function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();
    if (playerInput === "caillou" || playerInput === "papier" || playerInput === "ciseaux" || playerInput === "bomb") {
        return playerInput;
    } else {
        return "Please enter a valid choice";
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "caillou";
        case 1:
            return "papier";
        case 2:
            return "ciseaux";
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === "bomb") {
        return "Gagné";
    }
    if (playerChoice === computerChoice) {
        return "Egalité";
    }
    if (playerChoice === "caillou") {
        if (computerChoice === "papier") {
            return "Perdu";
        } else {
            return "Gagné";
        }
    }
    if (playerChoice === "papier") {
        if (computerChoice === "ciseaux") {
            return "Perdu";
        } else {
            return "Gagné";
        }
    }
    if (playerChoice === "ciseaux") {
        if (computerChoice === "caillou") {
            return "Perdu";
        } else {
            return "Gagné";
        }
    }
}


function playChifoumiGame() {

    const chifoumiImages = document.getElementsByClassName("chifoumiImg");

    const chifoumiGameBox = document.getElementById("chifoumiGameBox");
    chifoumiGameBox.style.display = "block";

    let uChoice = "";

    // const playerInput = prompt("Your choice ( caillou, papier, ciseaux) ?");
    for (const chifoumiImage of chifoumiImages) {
        chifoumiImage.addEventListener("click", ev => {
            const computerChoice = getComputerChoice();
            let myImg;
            switch (computerChoice) {
                case "papier" :
                    myImg = document.getElementById("papier1");
                    myImg.style.display = "block";
                    myImg = document.getElementById("caillou1");
                    myImg.style.display = "none";
                    myImg = document.getElementById("ciseaux1");
                    myImg.style.display = "none";
                    break ;
                case "caillou" :
                    myImg = document.getElementById("caillou1");
                    myImg.style.display = "block";
                    myImg = document.getElementById("papier1");
                    myImg.style.display = "none";
                    myImg = document.getElementById("ciseaux1");
                    myImg.style.display = "none";
                    break ;
                case "ciseaux" :
                    myImg = document.getElementById("ciseaux1");
                    myImg.style.display = "block";
                    myImg = document.getElementById("papier1");
                    myImg.style.display = "none";
                    myImg = document.getElementById("caillou1");
                    myImg.style.display = "none";
                    break ;
            }

            uChoice = ev.target.id;
            for (const img of chifoumiImages) {
                img.style.border = "none" ;
                img.style.padding = "5px" ;
            }
            ev.target.style.border = "5px solid green";
            ev.target.style.padding = "0";

            const resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = findWinner(uChoice, computerChoice);
            resultBox.style.display = "block";

            // ev.target.style.border = "none";
        }) ;
    }

}

const chifoumiButton = document.getElementById("chifoumi");
chifoumiButton.addEventListener("click", () => {
    playChifoumiGame();
});

// playGame();