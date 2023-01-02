import React from 'react';
import './styles.css';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import BeginningProvider from './Providers/BiginningProvider';
import DrawerProvider from './Providers/DrawerProvider';
import DisplayProvider from './Providers/DisplayProvider';
import App from './App';
import LanguageProvider from './Providers/LanguageProvider';

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <DisplayProvider>
            <BeginningProvider>
                <LanguageProvider>
                    <DrawerProvider>
                        <App/>
                    </DrawerProvider>
                </LanguageProvider>
            </BeginningProvider>
        </DisplayProvider>
    </BrowserRouter>,
);
