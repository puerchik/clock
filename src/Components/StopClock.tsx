type StopClockPropsType = {
    changeToggle: () => void
}

export const StopClock: React.FC<StopClockPropsType> = ({ changeToggle }) => {
    return (
        <>
            <div className="stopClock">
                <span className="stopClockText">
                    In the console you can see that the "setInterval" method stops when you click the "stop" button on the previous page.
                    To return to the clock, click "return" and the "setInterval" method will work again.
                </span>
                <button onClick={changeToggle} className="button resetButton">return</button>
            </div>
        </>
    )
}