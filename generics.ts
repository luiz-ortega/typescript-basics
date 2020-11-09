// S => State,
// T => Type
// K => Key
// V => Value
// E => Element

function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<string>();

newState.setState("foo");
console.log(newState.getState());

// newState.setState(126);
// console.log(newState.getState());
