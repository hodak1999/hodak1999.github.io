import React, { useEffect, useState } from 'react';
import './Fade.css';

const Fade = ({ show, children }) => {
    const [shouldRender, setRender] = useState(show);
    const [transitionClass, setTransitionClass] = useState('');

    useEffect(() => {
        if (show) {
            setRender(true);
            setTransitionClass('fade-in');
        } else {
            setTransitionClass('fade-out');
        }
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    return (
        shouldRender && (
            <div className={`fade ${transitionClass}`} onAnimationEnd={onAnimationEnd}>
                <section className='fade-main'>
                    {children}
                </section>
            </div>
        )
    );
};

export default Fade;
