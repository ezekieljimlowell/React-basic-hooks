import './App.css';
import { ContextParent } from './Context/ContextParent';
import Difference from './LayoutEffect/Difference';
import Effect from './LayoutEffect/Effect';
import LayoutEffect from './LayoutEffect/LayoutEffect';
import Memo from './Memoization/Memo';
import WithoutMemo from './Memoization/WithoutMemo';
import ReactMemo from './MemoizationByReactMemo/ReactMemo';
import WithoutReactMemo from './MemoizationByReactMemo/WithoutReactMemo';
import Parent from './PropDrilling/Parent';
import { Reference } from './Reference/Reference';
import StateAndEffect from './StateAndEffect';
import { ParentCounter } from './UseCallback/ParentCounter';
import useCustom from './DebugValue/DebugValue';
import { useAnother } from './DebugValue/DebugValue';
import ParentImperative from './ImperativeHandle/ParentImperative';
import ArrayRef from './Reference/ArrayRef';
import { useReference } from './Reference/Reference';

function App() {
  useCustom();
  var jim = useAnother();
  console.log(jim)
  const customHooks = useReference()
  return (
    <div className="App">
      <div>{jim}</div>
      <div>{[1,2,3]}</div>
      <div>{customHooks}</div>
      <StateAndEffect />
      <Parent />
      <ContextParent />
      <WithoutMemo />
      <Memo />
      <WithoutReactMemo />
      <ReactMemo />
      <ParentCounter />
      <Effect />
      <LayoutEffect />
      <Difference />
      <ParentImperative />
      <ArrayRef />
    </div>
  );
}

export default App;
