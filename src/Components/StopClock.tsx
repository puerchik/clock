type StopClockPropsType = {
    changeToggle: () => void
}

export const StopClock: React.FC<StopClockPropsType> = ({changeToggle}) => {
    return (
        <>
            <div className="stopClock">
                <span className="stopClockText">Stop clock</span>
                <button onClick={changeToggle} className="button resetButton">return</button>
            </div>
        </>
    )
}