const API_HOST = "https://dicerollerapi-bgcgg6fwbzcebwdf.eastus-01.azurewebsites.net/";

//asynchronous function to roll dice through calling the api
async function rollDice() {
    try {
        const response = await fetch(`${API_HOST}/roll?count=5`);
        const data = await response.json();

        //loop through each die and update
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`die${i}`).value = data.rolls[i - 1];
        }
    } catch (error) {
        //catch for cors or an api failure
        console.error("CORS or nertwork error:", error);
        alert ("Eroor calling the API, check the console for details.");
    }

    //autofocus enter button to keep rolling
    document.getElementById("rollButton").focus();

}

//wake up the seerver
window.onload = async () => {
    try {
        await fetch(`${API_HOST}/wake`);
        rollDice();

    //catch for if the server fails to wake up
    } catch (e) {
        console.error("Wake failed", e);
    }
};