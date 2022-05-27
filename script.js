let fields = [];
let gameOver = false;
let currentPlayer = 'cross';

function fillShape(id) {
    if (!gameOver) {
        if (currentPlayer == 'cross') {
            currentPlayer = 'circle';
            document.getElementById('player1').classList.remove('inaktive_player');
            document.getElementById('player2').classList.add('inaktive_player');

        } else {
            currentPlayer = 'cross';
            document.getElementById('player2').classList.remove('inaktive_player');
            document.getElementById('player1').classList.add('inaktive_player');
        }
        fields[id] = currentPlayer;
        draw();
        checkForWin();
        console.log(fields);
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');
            document.getElementById('circle' + i).parentNode.classList.add('disabled');

        }
        if (fields[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');
            document.getElementById('circle' + i).parentNode.classList.add('disabled');

        }
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line2').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line3').style.transform = 'scaleY(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line4').style.transform = 'scaleY(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line5').style.transform = 'scaleY(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').style.transform = 'scaleX(1.2) rotate(-45deg)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
       document.getElementById('line7').style.transform = 'scaleX(1.2) rotate(45deg)';

    }
    if (winner) {
        endGame();
    }
}

function endGame() {
    gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
        }, 1000);
        setTimeout(function () {
            document.getElementById('restartButton').classList.remove('d-none');
        }, 1500);
        console.log('gewonnen:', winner);
}

function restartGame() {
    location.reload();
}


