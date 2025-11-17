import React from "react";

interface DrawerLinesProps {
    size: string; // clamp の値を文字列で受け取る
}

const calculateSize = (clampValue: string): number => {
    // clamp をパースして数値を計算する
    const match = /clamp\(([^,]+), ([^,]+), ([^)]+)\)/.exec(clampValue);
    if (!match) {
        throw new Error("Invalid clamp format");
    }

    const [min, preferred, max] = match.slice(1);

    // 現在のビュー幅で preferred を計算
    const vw = window.innerWidth / 100;
    const preferredValue = parseFloat(preferred.replace("vw", "")) * vw;

    return Math.min(Math.max(parseFloat(min), preferredValue), parseFloat(max));
};

const DrawerLines: React.FC<DrawerLinesProps> = ({ size }) => {
    const calculatedSize = calculateSize(size);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="drawer_lines"
            data-name="drawer_lines_data"
            viewBox="0 0 17.11 17.77"
            width={calculatedSize}
            height={calculatedSize}
        >
            <g id="layer_1" data-name="layer 1">
                <line
                    x1={0}
                    y1={0.5}
                    x2={17.11}
                    y2={0.5}
                    style={{
                        fill: "none",
                        stroke: "#25274f",
                        strokeMiterlimit: 10,
                    }}
                />
                <line
                    x1={0}
                    y1={8.89}
                    x2={17.11}
                    y2={8.89}
                    style={{
                        fill: "none",
                        stroke: "#25274f",
                        strokeMiterlimit: 10,
                    }}
                />
                <line
                    x1={0}
                    y1={17.27}
                    x2={17.11}
                    y2={17.27}
                    style={{
                        fill: "none",
                        stroke: "#25274f",
                        strokeMiterlimit: 10,
                    }}
                />
            </g>
        </svg>
    );
};

export default DrawerLines;