import {useCallback, useMemo, useState} from 'react'

export const useFadeInOut = (durationSec,init) => {
    const [display, setDisplay] = useState(init)

    const handleClose = useCallback(() => {
        setDisplay(false)
    }, [setDisplay])

    const handleOpen = useCallback(() => {
        setDisplay(true)
    }, [setDisplay])

    const toggleDisplay = useCallback(() => {
        setDisplay((prev) => !prev)
    }, [setDisplay])

    const boxStyle = useMemo(() => {
        if (display) {
            return {
                opacity: 1,
                visibility: 'visible',
                transition: `opacity ${durationSec}s`,
            }
        }

        return {
            opacity: 0,
            visibility: 'hidden',
            transition: `opacity ${durationSec}s, visibility 0s ${durationSec}s`,
        }
    }, [durationSec, display])

    return {display, handleOpen, handleClose, toggleDisplay, boxStyle}
}

export const useFadeInOutList = (d) => {
    const {toggleDisplay, boxStyle, handleClose, handleOpen} = useFadeInOut(1, d === 0);
    return {toggleDisplay: toggleDisplay, boxStyle: boxStyle, handleClose: handleClose, handleOpen: handleOpen}
}