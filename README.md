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
import createSyncState from './syncState';
const useCounterState = createSyncState('counter', 0);

const Display = () => {
    const [counter, setCounter] = useCounterState();

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(current => current + 1)}>Increment</button>
            <button onClick={() => setCounter(current => current - 1)}>Decrement</button>
        </div>
    );
}

export default Display;

```

### useMatchMedia
---

This hook will inform you when any given breakpoint is matched using the `window.matchMedia`.

Example of use:

```js
import { useMatchMedia } from './hooks/';

const Display = () => {
  const matched = useMatchMedia([368, 768]);

  return (
    <div>
      Matched breakpoint: {matched}
    </div>
  );
}
```