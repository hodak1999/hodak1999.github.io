import './styles.css';

import {useScrollDisplay} from './Providers/DisplayProvider';
import {useBeginning} from './Providers/BiginningProvider';
import {useState} from 'react';
import BeginningPage from './Beginning/Beginning';
import DrawerMenu from './Section/Drawer/DrawerMenu';
import SectionsPage from './Section/SectionsPage';
import JapanesePage from './Japanese/JapanesePage';
import {useLanguage} from './Providers/LanguageProvider';
import EnglishPage from './English/EnglishPage';

function App() {
    const {scrollAction, touchStart, touchEnd} = useScrollDisplay();
    const {isBeginning} = useBeginning();
    const {isJapanese} = useLanguage();
    const [color, setColor] = useState({backgroundColor: '#25274F'});
    return (
        <div style={{height: '100%', width: '100%',...color}}>
            {isBeginning ? <BeginningPage setColor={setColor}/> : <div/>}
            <div onWheel={scrollAction} onTouchStart={touchStart}
                 onTouchEnd={touchEnd}
                 style={{
                     height: '100%',
                     width: '100%',
                     opacity: isBeginning ? 0 : 1,
                     zIndex:1000,
                 }}>
                {isJapanese? <JapanesePage/>:<EnglishPage/>}
                <SectionsPage/>
                <DrawerMenu/>
            </div>
        </div>
    );
}

export default App;
