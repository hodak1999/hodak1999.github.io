import React, { useEffect } from 'react';

const DisableScroll: React.FC<{ disable: boolean }> = ({ disable }) => {
    useEffect(() => {
        if (disable) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // クリーンアップ
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [disable]);

    return null;
};

export default DisableScroll;