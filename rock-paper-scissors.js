const prompt = require('prompt-sync')({sigint: true});

let player_1_input = prompt('Player 1, enter your choice: ');
console.log(player_1_input)

let player_2_input = prompt('Player 2, enter your choice: ');
console.log(player_2_input)


player_1_input = player_1_input.toLowerCase()
player_2_input = player_2_input.toLowerCase()

if(player_1_input === 'rock'){
    if(player_2_input === 'rock'){
        console.log('Draw')
    } else if(player_2_input === 'paper'){
        console.log('Player 2 wins!')
    } else {
        console.log('Player 1 wins!')
    }
} else if(player_1_input === 'paper'){
    if(player_2_input === 'paper'){
        console.log('Draw')
    } else if(player_2_input === 'scissors'){
        console.log('Player 2 wins!')
    } else {
        console.log('Player 1 wins!')
    }
} else if(player_1_input === 'scissors'){
    if(player_2_input === 'scissors'){
        console.log('Draw')
    } else if(player_2_input === 'rock'){
        console.log('Player 2 wins!')
    } else {
        console.log('Player 1 wins!')
    }
}