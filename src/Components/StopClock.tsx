type StopClockPropsType = {
    changeToggle: () => void
}

export const StopClock = (props: StopClockPropsType) => {
    return (
        <>
            <div className="stopClock">
                <span className="stopClockText">Stop clock</span>
                <button onClick={props.changeToggle} className="button resetButton">reset</button>
            </div >
        </>
    )
}