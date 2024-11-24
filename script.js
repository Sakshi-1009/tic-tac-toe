let turn = 'X';
let gameState = 'playing';
let boxes = document.querySelectorAll('.box');

// let player1 = ''

// let players = function() {
//     let player1 = 
//     if ()
// }

let getBoard = function() {
    let boxA1 = document.querySelector('#box-A1');
    let boxA2 = document.querySelector("#box-A2");
    let boxA3 = document.querySelector("#box-A3");
    let boxB1 = document.querySelector("#box-B1");
    let boxB2 = document.querySelector("#box-B2");
    let boxB3 = document.querySelector("#box-B3");
    let boxC1 = document.querySelector("#box-C1");
    let boxC2 = document.querySelector("#box-C2");
    let boxC3 = document.querySelector("#box-C3");
    
    let row1 = [
        boxA1.textContent,
        boxA2.textContent,
        boxA3.textContent
    ];
    let row2 = [
        boxB1.textContent,
        boxB2.textContent,
        boxB3.textContent
    ];
    let row3 = [
        boxC1.textContent,
        boxC2.textContent,
        boxC3.textContent
    ];

    let board = [
        row1,
        row2,
        row3
    ]

    return board;
}

let showWinMessage = function() {
    let content = document.querySelector('.content');
    content.textContent = 'Player Win: ' + turn;
    gameState = 'finished';
}

let showDrawMessage = function() {
    let content = document.querySelector('.content');
    content.textContent = 'Game Draw!';
    gameState = 'finished';
}

let checkAntiDigonalEqual = function(board) {
    if (board[0][2] == '') {
        return false;
    }

    if (board[0][2] != board[1][1]) {
        return false;
    }

    if (board[1][1] != board[2][0]) {
        return false;
    }

    return true;
}

let checkDigonalEqual = function(board) {
    if (board[0][0] == '') {
        return false;
    }

    if (board[0][0] != board[1][1]) {
        return false;
    }

    if (board[1][1] != board[2][2]) {
        return false;
    }

    return true;
}

let checkColumnEqual = function(board, columnIdx) {
    if (board[0][columnIdx] == '') {
        return false;
    }

    if (board[0][columnIdx] != board[1][columnIdx]) {
        return false;
    }

    if (board[1][columnIdx] != board[2][columnIdx]) {
        return false;
    }

    return true;
}

let checkRowEqual = function(board, rowIdx) {
    if (board[rowIdx][0] == '') {
        return false;
    }

    if (board[rowIdx][0] != board[rowIdx][1]) {
        return false;
    }

    if (board[rowIdx][1] != board[rowIdx][2]) {
        return false;
    }

    return true;

    // if (board[rowIdx][0] != '' && board[rowIdx][0] == board[rowIdx][1] && board[rowIdx][1] == board[rowIdx][2]) {
    //     return true;
    // } else {
    //     return false;
    // }
}

let checkDraw = function(board) {
    for (let row of board) {
        for (let box of row) {
            if (box == '') {
                return false;
            }
        }
    }

    return true;
}

let checkGameWin = function(board) {
    if (checkRowEqual(board, 0) || checkRowEqual(board, 1) || checkRowEqual(board, 2)) {
        showWinMessage();
    } else if (checkColumnEqual(board, 0) || checkColumnEqual(board, 1) || checkColumnEqual(board, 2)) {
        showWinMessage();
    } else if (checkDigonalEqual(board)) {
        showWinMessage();
    } else if (checkAntiDigonalEqual(board)) {
        showWinMessage();
    } else if (checkDraw(board)) {
        showDrawMessage();
    }
}

boxes.forEach(box => {
    box.addEventListener('click', function() {
        if (gameState == 'playing') {
            if (box.textContent == '') {
                box.textContent = turn;
                
                let currentBoard = getBoard()
                checkGameWin(currentBoard);

                if (turn == 'X') {
                    turn = 'O';
                } else {
                    turn = 'X';
                }
            }
        }
    })
})