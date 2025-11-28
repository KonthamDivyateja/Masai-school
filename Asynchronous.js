function timer(duration, onComplete) {
    const finishMessage = `Timer of ${duration} ms finished!`;

    setTimeout(() => {
        onComplete(finishMessage);
    }, duration);
}