import { useEffect, useState } from "react";

type ClockPropsType = {
    changeToggle: () => void
}

export const Clock = (props: ClockPropsType) => {
    const displayFormatting = (num: number) => num < 10 ? "0" + num : num;

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick");
            setTime(new Date())
        }, 1000)

        return () => {
           clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="App">
            <div className="clockWrapper">
                <span className='time'>
                    {`${displayFormatting(time.getHours())}:${displayFormatting(time.getMinutes())}:${displayFormatting(time.getSeconds())}`}
                </span>
            </div>
            <div className="buttonWrapper">
                <button onClick={props.changeToggle} className="button stopButton">stop</button>
            </div>
        </div>
    );
}