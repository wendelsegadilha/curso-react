import FirstComponent from "./components/FirstComponent"

//styles
import './App.css';
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions/>
      <Events />
      <Challenge/>
    </div>
  );
}

export default App;
