import './App.css';
import MyApp from "./functionalComponent_ReactHooks";
import MyFirstClassComponent from "./classComponent_LyfCycleMethods"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is My First Project</h1>
      </header>
    <MyFirstClassComponent />
      <MyApp a="Veda" />
    </div>
  );
}

export default App;
