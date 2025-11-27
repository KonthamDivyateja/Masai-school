function startCountdown() {
    const input = prompt("Enter the number of seconds for the countdown:");
    let seconds = parseInt(input);

    if (isNaN(seconds) || seconds <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    console.log(`Starting countdown from ${seconds} seconds...`);
    
    let intervalId;

    const checkForKeyPress = () => {
        const keyPress = prompt("Press 's' to stop the countdown. Press any other key to continue.");
        
        if (keyPress && keyPress.toLowerCase() === 's') {
            clearInterval(intervalId);
            console.log("Countdown stopped by user input.");
        } else if (seconds > 0) {
            setTimeout(checkForKeyPress, 100); 
        }
    };

    intervalId = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(intervalId);
            console.log("Countdown Complete!");
            return;
        }

        console.log(`Time remaining: ${seconds} seconds`);
        seconds--;
    }, 1000);
}

startCountdown();