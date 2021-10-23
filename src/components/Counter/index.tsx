import {useAppState} from "../../store";
import {setCount} from "../../store/actions/countAction";

const Counter = () => {
  const [state, dispatch] = useAppState()
  const { count } = state.count;
  return <div className="counter">
    <div onClick={() => {
      setCount(dispatch, count + 1);
    }}>Increment</div>
    <div>{count}</div>
    <div onClick={() => {
      setCount(dispatch, count - 1);
    }}>Decrement</div>
  </div>
}

export default Counter;