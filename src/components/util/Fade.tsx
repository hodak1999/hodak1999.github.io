import React, {useEffect, useState} from 'react';
import styles from './Fade.module.css';

interface FadeProps {
    show: boolean;
    children: React.ReactNode;
}

const Fade: React.FC<FadeProps> = ({ show, children }) => {
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
            <div
                className={`${styles.fade} ${styles[transitionClass]}`}
                onAnimationEnd={onAnimationEnd}
            >
                <section className={styles["fade-main"]}>
                    {children}
                </section>
            </div>
        )
    );
};

export default Fade;