import React from "react";
import {useScrollDisplay} from "../../Providers/DisplayProvider";
import {FontSizeGenerator} from './FontSizeGenerator';

const TITLE_DICT = {
    0:"About Me",
    1:"Education",
    2:"Awards",
    3:"Conferences",
    4:"Journals",
    5:"Contact",
}
export default function SectionTitle() {
    const {displayState} = useScrollDisplay()
    const styleText = {
        color: "black",
        fontSize: FontSizeGenerator(),
        textAlign: "left",
        fontFamily: ["Times New Roman", "serif"],
    }
    return (
            <div style={{
                zIndex: 1000,
            }}>
                <div style={styleText}>0{displayState}.</div>
                <div style={styleText}>{TITLE_DICT[displayState]}</div>
            </div>
    )
}