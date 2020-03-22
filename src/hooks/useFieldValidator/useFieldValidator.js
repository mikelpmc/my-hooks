import { useState, useRef, useEffect } from 'react';
import validators, { RULES } from './validators';

const getRuleKeyValue = rule => {
    let key = rule;
    if (typeof rule === 'function') key = rule.name;

    return key;
};

const setInitialState = rules => {
    const initialState = rules.reduce((accum, curr) => {
        const key = getRuleKeyValue(curr);

        return { ...accum, [key]: false };
    }, {});

    return initialState;
};

const useFieldValidator = rules => {
    const inputRef = useRef('');
    const prevValueInputRef = useRef({ value: '' });
    const [state, setState] = useState(setInitialState(rules));

    const registerField = ref => {
        if (ref) {
            inputRef.current = ref;
        }
    };

    const isValidRule = rule => {
        if (rule in RULES) return true;

        return false;
    };

    const checkIsValid = () => {
        return Object.values(state).every(Boolean);
    };

    const validateInputField = value => {
        rules.forEach(rule => {
            let isValid = true;

            if (typeof rule === 'function') {
                isValid = rule(value);
            } else {
                if (isValidRule(rule)) {
                    isValid = validators[rule](value);
                }
            }

            handleSetState(rule, isValid);
        });
    };

    const handleSetState = (rule, isValid) => {
        const key = getRuleKeyValue(rule);

        setState(state => ({
            ...state,
            [key]: isValid
        }));
    };

    useEffect(() => {
        const currentValue = inputRef.current.value;
        const prevValue = prevValueInputRef.current.value;

        if (currentValue !== prevValue) {
            prevValueInputRef.current.value = currentValue;

            validateInputField(currentValue);
        }
    }, [inputRef.current.value]);

    return { isValid: checkIsValid(), state, registerField };
};

export default useFieldValidator;
