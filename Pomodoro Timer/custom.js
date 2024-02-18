let timeInterval;
let minutes = 25;
let seconds = 0;
let isBreak = false;

const timerDisplay = $('.display');
const startButton = $('#startTimer');
const resetButton = $('#resetTimer');

startButton.click(startTimer);
resetButton.click(resetTimer);

function startTimer() {
    startButton.prop('disabled', true);
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    if (!isBreak) {
        // If it's not a break time, start work timer
        timeInterval = setInterval(updateTimer, 1000);
    } else {
        // If it's break time, start break timer
        timeInterval = setInterval(breakTimer, 1000);
    }
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timeInterval);
            $('h2').text('Take a Break');
            timerDisplay.text('05:00');
            minutes = 5;
            seconds = 0;
            isBreak = true;
            startButton.prop('disabled', false); // Enable start button for the break
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    timerDisplay.text(`${padTime(minutes)}:${padTime(seconds)}`);
}

function breakTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timeInterval);
            timerDisplay.text('00:00');
            isBreak = false;
            startButton.prop('disabled', false); // Enable start button for the next work session
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    timerDisplay.text(`${padTime(minutes)}:${padTime(seconds)}`);
}

function resetTimer() {
    $('h2').text('Get Working');
    clearInterval(timeInterval);
    minutes = 25;
    seconds = 0;
    isBreak = false;
    startButton.prop('disabled', false);
    timerDisplay.text(`${padTime(minutes)}:${padTime(seconds)}`);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}
