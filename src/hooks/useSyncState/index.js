import useSyncState from './useSyncState';
import createStorage from './createStorage';

const createSyncState = (key, initialValue = 0) => {
    const storage = createStorage(initialValue);

    return () => useSyncState(key, storage);
}

export default createSyncState;
