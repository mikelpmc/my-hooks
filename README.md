## A collection of react custom hooks made for fun

### useSyncState

---

This hooks provides a persisted-synced state using localstorage and pub/sub pattern.

#### Features

💾 &nbsp; Persist state to `localstorage`

💻 &nbsp; Syncs data between tabs/browser windows

☁️ &nbsp; Share state between same key hooks

Example of use in a component:

```js
import createSyncState from './useSyncState';
const useCounterState = createSyncState('counter', 0);

const Display = () => {
    const [counter, setCounter] = useCounterState();

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(current => current + 1)}>
                Increment
            </button>
            <button onClick={() => setCounter(current => current - 1)}>
                Decrement
            </button>
        </div>
    );
};

export default Display;
```

### useMatchMedia

---

This hook will inform you when any given breakpoint is matched using the `window.matchMedia`.

Example of use:

```js
import useMatchMedia from './useMatchMedia';

const Display = () => {
    const matched = useMatchMedia([368, 768]);

    return <div>Matched breakpoint: {matched}</div>;
};
```

### useFieldValidator

A hook to validate form input fields.
It already includes a couple of simple rules and you can also pass in custom ones.

The hook would "listen" to value changes so you would have to control the component as you would usually do with react.

It returns:

-   isValid - boolean flag
-   state - an object with the state of each validation rule
-   registerField - a function to get the ref of the field

Example of use:

```js
import useFieldValidator, { RULES } from './useFieldValidator';

const customRule = value => value.length > 8;
const rules = [RULES.isNotEmpty, RULES.isValidEmail, customRule];

const Display = () => {
  const [email, setEmail] = useState('');
  const {isValid, state, registerField} = useFieldValidator(rules);

  return (
    <form>
      <p>State: {JSON.stringify(state, null, 4)}</p>
      <p>IsValid: {isValid}</p>
      <input type="email" ref={registerField} value={email} onChange(ev => setEmail(ev.target.value)) />
    </form>
  )
}

```
