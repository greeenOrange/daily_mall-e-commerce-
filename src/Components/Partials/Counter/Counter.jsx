import React, { useEffect, useState } from 'react'
import './Counter.css';
function Counter() {
    let [clockData, setClockData] = useState({
        dd: 0,
        hh: 0,
        mm: 0,
        ss: 0
    });

    useEffect(() => {
        const sec = 1000,
            min = sec * 60,
            hour = min * 60,
            day = hour * 24;

        let clockInterval = setInterval(() => {
            const end = new Date("Dec 05, 2023 12:00:00").getTime();
            const current = new Date().getTime();
            const remaining = end - current;

            if (remaining <= 0) {
                clearInterval(clockInterval);
                return;
            }

            let dd = Math.floor(remaining / day);
            let hh = Math.floor((remaining % day) / hour);
            let mm = Math.floor((remaining % hour) / min);
            let ss = Math.floor((remaining % min) / sec);

            setClockData(previous => {
                return { ...previous, dd, hh, mm, ss };
            });
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, []);
    return (
        <section className="conter">
                <div className="counter_clock">
                    <h4 className="counter_title">Flash Deal</h4>
                    <div className="coundown">
                        <div className="timer">{clockData.dd}<span className="unite">Day</span></div>
                        <div className="timer">{clockData.hh}<span className="unite">Hrs</span></div>
                        <div className="timer">{clockData.mm}<span className="unite">Min</span></div>
                        <div className="timer">{clockData.ss}<span className="unite">Sec</span></div>
                    </div>
                </div>
        </section>
    )
}

export default Counter