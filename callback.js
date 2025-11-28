function displayMessage(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}

function serverRequest(callback) {
    setTimeout(() => {
        const retrievedUsername = "Alice";
        const greetingText = "Hello";
        
        callback(greetingText, retrievedUsername);
    }, 1000);
}

serverRequest(displayMessage);