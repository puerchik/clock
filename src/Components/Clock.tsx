import { useEffect, useState } from "react";
import { displayFormatting } from "./utilFunctions";
import { DigitalClock } from "./DigitalClock";
import { AnalogClock } from "./AnalogClock";

type ClockPropsType = {
    changeToggle: () => void
}

export const Clock: React.FC<ClockPropsType> = ({ changeToggle }) => {

    const [time, setTime] = useState(new Date());
    const [typeClock, setTypeClock] = useState(true)

    const hours = displayFormatting(time.getHours());
    const minutes = displayFormatting(time.getMinutes());
    const seconds = displayFormatting(time.getSeconds());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick");
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const changeTypeClockHandler = () => {
        setTypeClock(!typeClock)
    }

    return (
        <>
            {typeClock
                ? <DigitalClock
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds} />
                : <AnalogClock
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds} />}
            <div className="buttonWrapper">
                <button onClick={changeToggle} className="button stopButton">stop</button>
                <button onClick={changeTypeClockHandler} className="button typeClockButton">
                    {typeClock
                        ? "Analog clock"
                        : "Digital clock"}
                </button>
            </div>
        </>
    );
}