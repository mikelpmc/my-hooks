const globalState = {};

const createGlobalState = (key, thiscallback, initialValue) => {
    if (!globalState[key]) {
        globalState[key] = { callbacks: [], value: initialValue };
    }

    globalState[key].callbacks.push(thiscallback);

    return {
        emit(value) {
            if (globalState[key].value !== value) {
                globalState[key].callbacks.forEach(callback => {
                    if (callback !== thiscallback) {
                        callback(value);
                    }
                });
            }
        }
    }
}

export default createGlobalState;
