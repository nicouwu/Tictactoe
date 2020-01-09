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

//click events
//to change the class of each square when it is clicked

allSquares.forEach(function(square) {
    square.addEventListener('click', function(event){
        var id = event.target.getAttribute('data-id')
        event.target.classList.add('clicked')
        //I need get an ID of the position of square that was clicked and then push it into player 1 array
        //how do i track of the POSITION of what was clicked
        //setting turn count and assigning X and O
        console.log(id) //track position of target 
        count++
        if (count%2 == 0 && event.target.textContent == '' && event.target.textContent !== 'O') {
            event.target.textContent = 'X';
            player2.combo.push(Number(id)) //to push the position number into player 2 array
            player2.combo.sort()
            console.log(player2)
        } else if (event.target.textContent == '' && event.target.textContent !== 'X') {
            event.target.textContent = 'O';
            player1.combo.push(Number(id)) //to push the position number into player 1 array
            player1.combo.sort()
            console.log(player1)
            console.log(count)
            
            var checkwin = function() {
                for(i=0; i<player1.combo.length; i++) {//im trying to loop through each index in player combo and match with 0&1&2
                   if(player1.combo[i] == '0' || player1.combo[i] || '1' && player1.combo[i] == '2') {
                       return 'player 1 wins' 
                   }
                }
            }
            console.log(checkwin())
        }
    })   
})
//now to set conditions for player 1 and player 2 
//set win conditions
//how do I grab the numeric values of each array in wincombo and compare numeric values in p1&2





//Reset button to refresh the page

//var resetGame = document.querySelector('.resetButton')

//var newGame = function() {
  //  document.location.reload();
//}

//resetGame.addEventListener('click', newGame)


