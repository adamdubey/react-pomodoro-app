import React, { useState, useEffect } from 'react';

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    // break time logic
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds])

    // timer logic to display two digits for seconds
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <div className="pomodoro">
            <div className="message">
                {displayMessage && <div>Break time - New Session starts in:</div>}
            </div>
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
        </div>
    );
}
