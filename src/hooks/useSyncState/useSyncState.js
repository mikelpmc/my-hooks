import { useState, useEffect, useRef } from 'react';
import createGlobalState from './createGlobalState';
import useEventListener from '@use-it/event-listener';

const useSyncState = (key, initialValue = 0, storage) => {
    const globalState = useRef(null);
    const [state, setState] = useState(() => storage.get(key));

    useEventListener('storage', ({ key: newKey, newValue }) => {
        if (newKey === key) {
            const newState = JSON.parse(newValue);
            if (state !== newState) {
                setState(newState);
            }
        }
    });

    useEffect(() => {
        globalState.current = createGlobalState(key, setState, initialValue);
    }, [])

    useEffect(() => {
        storage.set(key, state);

        globalState.current.emit(state);
    }, [state])

    return [state, setState];
}

export default useSyncState;
