import './App.css';
import OnChange from './components/OnChange';
import OnClick from './components/OnClick';
import OnKeyDown from './components/OnKeyDown';
import Hover from './components/Hover';
import OnSubmit from './components/OnSubmit';
import Argument from './components/Argument';
import ArgumentFromProps from './components/ArgumentFromProps';

function App() {
  return (
    <>
      <OnClick />
      <OnChange />
      <OnSubmit />
      <OnKeyDown />
      <Hover/>
      <br />
      <Argument />
      <ArgumentFromProps argument="João" />
    </>
   );
}

export default App;
