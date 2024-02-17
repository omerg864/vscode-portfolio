import { useState, useEffect } from 'react';

function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick, fileData, delay = 250) {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // simple click
            if (click === 1) actionSimpleClick(fileData);
            setClick(0);
        }, delay);

        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) actionDoubleClick(fileData);

        return () => clearTimeout(timer);
        
    }, [click]);

    return () => setClick(prev => prev + 1);
}

export default useSingleAndDoubleClick;