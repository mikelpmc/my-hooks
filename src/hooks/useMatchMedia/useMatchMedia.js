import { useState, useEffect } from 'react';

const useMatchMedia = (breakpoints = [368, 720, 1200]) => {
    const [matched, setMatched] = useState('');

    useEffect(() => {
        registerMatchMediaEvents();
    }, [])

    const registerMatchMediaEvents = () => {
        breakpoints.forEach(breakpoint => {
            window.matchMedia(`(min-width: ${breakpoint}px)`).addListener(event => handleMatch(event, breakpoint));
        });
    };

    const handleMatch = (event, breakpoint) => {
        if (event.matches) {
            setMatched(breakpoint)
        }
    };

    return matched;
}

export default useMatchMedia;
