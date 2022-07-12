import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_TEXT: "newText",
  TOGGLE_COLOR: "toggleColor",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.NEW_TEXT:
      return { ...state, text: action.payload };
    case ACTIONS.TOGGLE_COLOR:
      return { ...state, color: !state.color };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "",
    color: false,
  });

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={state.text}
          onChange={(e) =>
            dispatch({ type: ACTIONS.NEW_TEXT, payload: e.target.value })
          }
        />
      </div>
      <p style={{ color: state.color ? "gold" : "white" }}>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_COLOR })}>
        Color
      </button>
      <p style={{ color: state.color ? "gold" : "white" }}>{state.text}</p>
    </>
  );
}

export default App;
