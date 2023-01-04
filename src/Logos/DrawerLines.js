import React from 'react';

const DrawerLines = ({size}) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="drawer_lines"
        data-name="drawer_lines_data"
        viewBox="0 0 17.11 17.77"
        width={size}
        height={size}
    >
        <defs>
            <style>{'.line{fill:none;stroke:#25274f;stroke-miterlimit:10;}'}</style>
        </defs>
        <g id="layer_1" data-name="layer 1">
            <line className="line" y1={0.5} x2={17.11} y2={0.5}/>
            <line className="line" y1={8.89} x2={17.11} y2={8.89}/>
            <line className="line" y1={17.27} x2={17.11} y2={17.27}/>
        </g>
    </svg>;

export default DrawerLines;