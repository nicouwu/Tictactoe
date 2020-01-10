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

var count = 0
var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

var message = document.querySelector('#message')
//variable for 'is there a winner?'

//click events
//to change the class of each square when it is clicked
allSquares.forEach(function(square) {
    // if(.textContent === '' && (message.textContent !== 'Player 1 wins' || message.textContent !== 'Player 2 wins')){
        square.addEventListener('click', function(){
            // check not a valid move
            if (this.textContent !== '' ) {
                return
            } if (message.textContent !== '') {
                return
            }

            var id = this.getAttribute('data-id')
            //data-id 
            this.classList.add('clicked')
            //preventing further clicks when winner is declared

            
            //setting turn count and assigning X and O
            // console.log(id) //track position of target 
            count++
            if (count%2 == 0 && this.textContent == '') {
                this.textContent = 'X';
                
                player2.combo.push(Number(id)) //to push the position number into player 2 array
                player2.combo.sort()
                // console.log(player2)
            } else if (event.target.textContent == '') {
                event.target.textContent = 'O';
                player1.combo.push(Number(id)) //to push the position number into player 1 array
                player1.combo.sort()
                // console.log(player1)
                // console.log(count)
            }    
            
            for(i=0; i<winCombos.length; i++) {
                //to filter elements of player combos to match winCombo elements
                var intersection1 = player1.combo.filter(function(x) {
                    if(winCombos[i].indexOf(x) != -1) {
                        return true 
                    }else {
                        return false
                    }
                })
                console.log(intersection1)
                var intersection2 = player2.combo.filter(function(x) {
                    if(winCombos[i].indexOf(x) != -1) {
                        return true 
                    }else {
                        return false
                    }
                })
                console.log(intersection2)
                var checkWin = function() {
                    if(intersection1.length === 3) {
                        message.textContent = 'Player 1 wins'
                    } else if(intersection2.length === 3) { 
                        message.textContent = 'Player 2 wins'
                    } else if (count === 9 && intersection1.length !== 3 && intersection2.length !== 3) {
                        message.textContent =  'Draw'
                    }
                }
                console.log(checkWin())
                
                
            }      
        })  
    // } 
})

//Reset button to refresh the page
var resetGame = document.querySelector('.resetButton')
var newGame = function() {
   document.location.reload();
}
resetGame.addEventListener('click', newGame)
