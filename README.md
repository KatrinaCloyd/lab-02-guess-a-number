# EDIT-THIS-README
<!--
HTML set up:
    -number input 
        so user can select guess
        min 1 / max 20
    -button 
        to submit guess 
        trigger listener to change state
    -guesses remaining div
        to show guesses left 
    -Too High Too Low Correct div
        to show user how they are doing 

JS set up:
    -get DOM elements
    -initialize state 
        random number generator
        guesses left: 4
    -event listener to button 
        guess decrement by 1 -- 
        store user guess in a varialble
             ( 'Number(someinput.value') )
        deterine if low, high or correct
            compare use guess with random number 
            if = to # - textContent YOU WIN! and disable input
            if no guesses left disable input - textContent LOSER! 
            if greater than # - textContent Too high
            if less than # - textContent Too low
    
stretch : try agan after loosing 
reset button  (not just refresh page) 
    reset remaining guesses to 4 
    generate new rando # 
    re-enable inputs if disabled 
    reset textContent 

THEN YOU CAN PLAY WITH CSS! 
-->