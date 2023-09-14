
type DigitalClockPropsType = {
    hours: string | number
    minutes: string | number
    seconds: string | number
}

export const DigitalClock: React.FC<DigitalClockPropsType> = (
    {
        hours,
        minutes,
        seconds
    }
) => {
    return (
        <>
            <div className="clockWrapper">
                <span className='time'>
                    {`${hours}:${minutes}:${seconds}`}
                </span>
            </div>            
        </>
    )
}