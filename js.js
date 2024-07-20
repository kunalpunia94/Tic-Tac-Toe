console.log("Welcome to Tic Tac Toe");
let audioturn = new Audio("ting ringtonr.mp3");
let gameover = new Audio("finishing ringtone.mp3");
let turn = "X";
let isgameover = false;

//function to change the turn
const changeturn=()=>{
    return turn ==="X" ? "O" : "X";
}

//function to chack for a win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText)  && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won";
            isgameover= true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}

//main lofic for the game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = changeturn();   //we are returning in the function so onlyy we are writing like this
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML= "Turn for" + turn;
            }
        }
    });
});

//add onlcick listiner to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn = "X"
    isgameover= false
    document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px";
})