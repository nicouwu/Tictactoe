var storage = [];
var winner = 0 ;
var winnner =function(){
    for( i = 0 ; i < storage.length ; i++){
        var counterrr = 0;
        for(j=0 ; j<storage.length ; j++){
            if(storage[i] === storage [j]){
                counterrr++;
                if(counterrr === 3){
                    return (i);
                    
                }
                
            }
        }counterrr = 0;
    }
}

if(count > 4){
    for (i = 0; i < player1.combo.length; i++) {
        for (j = 0; j < 8; j++) {
            for (k = 0; k < 3 ; k++){
                if(player1.combo[i] == winCombos[j][k]){
                    storage.push(j);
                }
            }
        }
    }winner = winnner();
    console.log("combo len" + player1.combo.length)
    console.log("player move" + player1.combo)
    console.log("Storage: " + storage);
}

console.log("winner " + winner);
})
