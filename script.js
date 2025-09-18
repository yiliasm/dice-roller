function rollDice() {
    for (let i = 1; i <= 5; i++) {
        //random roll 1-6
        let roll = Math.floor(Math.random() *6) +1;
        document.getElementById("die" + i).value = roll;
    }

    //autofocus the enter button to keep rolling
    document.getElementById("rollButton").focus();
}