let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

let curPlay='';
let p1 = "X";
let p2 = "O";

let turn = 0;
let winner = false;

$('#alertingStart').hide();
$('#alertingWinner').hide();
$('#alertingDraw').hide();

const winningOutcomes = [
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8], 
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8], 
    [box0, box4, box8], [box2, box4, box6]
];

const endGame=()=>{
    $(".box").css("pointer-events", "none");
    $('#play2').removeClass("bg-info border border-primary");
    $('#play1').removeClass("bg-info border border-primary");
}



//.text() === currentPlayer && .text() === currentPlayer && .text() === currentPlayer
const checkForWin = (curPlay, a, b, c) => {
if(a.text() === curPlay && b.text() === curPlay && c.text() === curPlay){
    winner = true;
    a.removeClass('text-info bg-secondary')
    b.removeClass('text-info bg-secondary')
    c.removeClass('text-info bg-secondary')

    a.addClass('text-warning bg-warning')
    b.addClass('text-warning bg-warning')
    c.addClass('text-warning bg-warning')


    if(curPlay === 'X'){
        curPlay = "Player 1 Is the Winner!!!";
    } else {
        curPlay = 'Player 2 Is the Winner!!!';
    }
    
    $('#alertingWinner').text(`${curPlay}`)
    $('#alertingWinner').show();

    endGame();
}
}


const checkOutcome = () => {
    checkForWin(curPlay, ...winningOutcomes[0])
    checkForWin(curPlay, ...winningOutcomes[1])
    checkForWin(curPlay, ...winningOutcomes[2])
    checkForWin(curPlay, ...winningOutcomes[3])
    checkForWin(curPlay, ...winningOutcomes[4])
    checkForWin(curPlay, ...winningOutcomes[5])
    checkForWin(curPlay, ...winningOutcomes[6])
    checkForWin(curPlay, ...winningOutcomes[7])

    if(turn === 9 && winner === false){
        

        $('.box').removeClass('text-info bg-secondary')
        $('.box').addClass('text-primary bg-primary')
        $('#alertingDraw').show();
        endGame();

    }
}

const startGame = () => {
    console.log("Start Game!");
    console.log(turn++);
    curPlay = p1;
    console.log(curPlay);

    $('#play1').addClass("bg-info border border-primary");

    $('#alertingStart').show();

    $('.box').on('click', function(){
        $('#alertingStart').hide();
        $(this).text(curPlay);

        if(turn > 4){
            checkOutcome()
        }

        if(winner === false){
            if(curPlay === p1){
                curPlay = p2;
                turn++
                $('#play2').addClass("bg-info border border-primary");
                $('#play1').removeClass("bg-info border border-primary");
            } else {
                curPlay = p1;
                turn++
                $('#play1').addClass("bg-info border border-primary");
                $('#play2').removeClass("bg-info border border-primary");
            }
        }
        })
}

document.getElementById('startButton').addEventListener('click', ()=> startGame());
document.getElementById('resetButton').addEventListener('click', ()=> document.location.reload(true));