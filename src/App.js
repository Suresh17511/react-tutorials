import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import ElementVariable from './ConditionalRendering/ElementVariable';
import IfElse from './ConditionalRendering/IfElse';
import ShortCircuit from './ConditionalRendering/ShortCircuit';
import TernaryOperator from './ConditionalRendering/TernaryOperator';
import ComponentC from './Context/ComponentC';
import {UserProvider} from './Context/createContext';
import DestructingProps from './DestructingPropsAndStates/DestructingProps';
import ApproachFour from './EventHandling/ApproachFour';
import ApproachOne from './EventHandling/ApproachOne';
import ApproachThree from './EventHandling/ApproachThree';
import ApproachTwo from './EventHandling/ApproachTwo';
import Form from './FormHandling/Form';
import {ClickCounter} from './HigherOrderComponents/ClickCounter';
import {HoverCounter} from './HigherOrderComponents/HoverCounter';
import HookCounter from './Hooks/Components/HookCounter';
import HookCounterTwo from './Hooks/Components/HookCounterTwo';
import HookFour from './Hooks/Components/HookFour';
import HookThree from './Hooks/Components/HookThree';
import ObjectRendering from './ListRendering/ObjectRendering';
import SimpleArrayList from './ListRendering/SimpleArrayList';
import StringArrayRender from './ListRendering/StringArrayRender';
import MemoParentComp from './MemoComponents/MemoParentComp';
import Parent from './MethodAsProps/Parent';
import ClassProps from './Props/ClassProps';
import FunctionalProps from './Props/FunctionalProps';
import ParentComp from './PureCompVsRegComp/ParentComp';
import CbRef from './Refs/CbRef';
import FRParentRef from './Refs/ForwardRefs/FRParentRef';
import InputRef from './Refs/InputRef';
import ClickCounterTwo from './RenderProps/ClickCounterTwo';
import HoverCounterTwo from './RenderProps/HoverCounterTwo';
import RenderPropCounter from './RenderProps/RenderPropCounter';
import SampleRender from './RenderProps/SampleRender';
import Counter from './States/Counter';
import Message from './States/Message';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <FunctionalProps name="Surya" heroName="Super-Man" />
      <FunctionalProps name="Viswanath" heroName="Mabbu-Man" /> */}
      {/* <ClassProps name="Surya" heroName="Super-Man" />
      <ClassProps name="John" heroName="Bat-Man" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <DestructingProps name="Surya" heroName="Super-Man" /> */}
      {/* <ApproachOne /> */}
      {/* <ApproachTwo /> */}
      {/* <ApproachThree /> */}
      {/* <ApproachFour /> */}
      {/* <Parent /> */}
      {/* <IfElse /> */}
      {/* <ElementVariable /> */}
      {/* <TernaryOperator /> */}
      {/* <ShortCircuit /> */}
      {/* <SimpleArrayList /> */}
      {/* <StringArrayRender /> */}
      {/* <ObjectRendering /> */}
      {/* <Form /> */}
      {/* <ParentComp /> */}
      {/* <MemoParentComp /> */}
      {/* <InputRef /> */}
      {/* <CbRef /> */}
      {/* <FRParentRef /> */}
      {/* <ClickCounter name="Surya" />
      <HoverCounter /> */}
      {/* <SampleRender
        name={(isLoggedIn) =>
          isLoggedIn ? <h2>Hello Surya</h2> : <h2>Hello Guest</h2>
        }
      /> */}
      {/* <RenderPropCounter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <RenderPropCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <UserProvider value="Surya">
        <ComponentC />
      </UserProvider> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookThree /> */}
      <HookFour />
    </div>
  );
}

export default App;
