import React, { useState } from 'react';
import { useFieldValidator } from './hooks';
import { RULES } from './hooks/useFieldValidator';

const checkLenghtGreaterThan = value => {
    return value.length > 8;
};

const rulesEmail = [RULES.isNotEmpty, RULES.isValidEmail];
const rulesPassword = [RULES.isNotEmpty, checkLenghtGreaterThan];

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        isValid: isValidEmail,
        state: emailState,
        registerField: registerEmail
    } = useFieldValidator(rulesEmail);
    const {
        isValid: isValidPassword,
        state: passwordState,
        registerField: registerPassword
    } = useFieldValidator(rulesPassword);

    const handleChangeEmail = event => {
        const value = event.target.value;

        setEmail(value);
    };

    const handleChangePassword = event => {
        const value = event.target.value;

        setPassword(value);
    };

    return (
        <form>
            <div>
                <p>Email</p>
                <p>Email is valid: {isValidEmail ? 'true' : 'false'}</p>
                <p>{JSON.stringify(emailState, null, 4)}</p>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    ref={registerEmail}
                    style={{
                        outline: `1px solid ${isValidEmail ? 'green' : 'red'}`
                    }}
                />
            </div>

            <div>
                <p>Password</p>
                <p>Password is valid: {isValidPassword ? 'true' : 'false'}</p>
                <p>{JSON.stringify(passwordState, null, 4)}</p>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    ref={registerPassword}
                    style={{
                        outline: `1px solid ${
                            isValidPassword ? 'green' : 'red'
                        }`
                    }}
                />
            </div>
        </form>
    );
}

export default App;
