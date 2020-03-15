const createStorage = initialValue => {
    return {
        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },

        get(key) {
            try {
                const value = localStorage.getItem(key);

                if (!value) {
                    return initialValue;
                }

                return JSON.parse(value);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default createStorage;
