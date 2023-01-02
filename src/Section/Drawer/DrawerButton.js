import React from "react";
import {useDrawer} from "../../Providers/DrawerProvider";
import DrawerLines from '../../Logos/DrawerLines';
import {ButtonSizeGenerator} from './ButtonSizeGenerator';

export default function DrawerButton() {
    const {toggleDrawer} = useDrawer();
    return (
            <div style={{
                zIndex: 1000,
                height:ButtonSizeGenerator(),
                display:'flex',
                justifyContent:'center',
                marginLeft:'5vw',
                alignItems:'center',
            }} onClick={toggleDrawer()}>
                <DrawerLines/>
            </div>
    )
}
