console.log('tictac')


var player1 = {
    userName: "player1",
    score: 0,
    combo: []
}

var player2 = {
    userName: "player2",
    score: 0,
    combo: []
}


var allSquares = document.querySelectorAll('.square') //this is now an array
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var box9 = document.querySelector('#box9')
var msg = document.querySelector('#message')
var count = 0
var declareWinner = false
var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

//click events
//to change the class of each square when it is clicked

var checkWinner = function() {
    
    if (box1.textContent !== '' && box1.textContent ===  box2.textContent && box1.textContent === box3.textContent){
        if (count%2 === 0) {
            msg.textContent = 'X Wins'
        } else {
            msg.textContent = 'O Wins'
        }
    } else if (box4.textContent !== '' && box4.textContent ===  box5.textContent && box4.textContent === box5.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box7.textContent !== '' && box7.textContent ===  box8.textContent && box7.textContent === box9.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box1.textContent !== '' && box1.textContent ===  box4.textContent && box1.textContent === box7.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box2.textContent !== '' && box2.textContent ===  box5.textContent && box2.textContent === box8.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box3.textContent !== '' && box3.textContent ===  box6.textContent && box3.textContent === box9.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box1.textContent !== '' && box1.textContent ===  box5.textContent && box1.textContent === box9.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    } else if (box3.textContent !== '' && box3.textContent ===  box5.textContent && box3.textContent === box7.textContent){
        if (count%2 === 0) {
            return 'X wins'
        } else {
            return 'O wins'
        }
    }
}


// marker();

allSquares.forEach(function(square) {
    square.addEventListener('click', function(){
        var id = this.getAttribute('data-id')
        //data-id 
        //I need get an ID of the position of square that was clicked and then push it into player 1 array
        //how do i track of the POSITION of what was clicked
        //setting turn count and assigning X and O
        console.log(id) //track position of target 
        // console.log(`${count} iiii`)
        
        // console.log(`${count} hihi `)
        if(this.textContent !== 'X' && this.textContent !== 'O') {
            if (count%2 == 0) {
                this.classList.add('markX')
                this.textContent = 'X';
                
                player2.combo.push(Number(id)) //to push the position number into player 2 array
                
                player2.combo.sort()
                console.log(checkWinner())
                msg.textContent = 'O Turn'
                
                count += 1
            } else {
                this.classList.add('mark0')
                this.textContent = 'O';
                player1.combo.push(Number(id)) //to push the position number into player 1 array
                player1.combo.sort()
                // console.log(player1)
                // console.log(count)
                console.log(checkWinner())
                msg.textContent = 'X Turn'
                count += 1
                //set win conditions
                // console.log(checkwin         
            }

        }
    })   
})
//now to set conditions for player 1 and player 2 
//how do I grab the numeric values of each array in wincombo and compare numeric values in p1&2


//if(player1.combo.join() === winCombos[0].join()){
  //  console.log(player1.combo.join())
    //console.log(winCombos[0].join())
    
    //return 'winner'
//}


//Reset button to refresh the page

//var resetGame = document.querySelector('.resetButton')

//var newGame = function() {
  //  document.location.reload();
//}

//resetGame.addEventListener('click', newGame)


