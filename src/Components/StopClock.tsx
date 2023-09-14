type StopClockPropsType = {
    changeToggle: () => void
}

export const StopClock: React.FC<StopClockPropsType> = ({changeToggle}) => {
    return (
        <>
            <div className="stopClock">
                <span className="stopClockText">Back to the clock press"return"</span>
                <button onClick={changeToggle} className="button resetButton">return</button>
            </div>
        </>
    )
}