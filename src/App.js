import "./App.css";
import ContactListComponent from "./Components/container/ContactListComponent";
import TaskListComponent from "./Components/container/TaskListComponent";
import EjemploDeHooks from "./hooks/EjemploDeHooks";
import EjemploDeUseState from "./hooks/EjemploDeUseState";
import EjemploPropsChildren from "./hooks/EjemploPropsChildren";
import { MiComponenteConContexto } from "./hooks/EjemploUseContext";

function App() {
  return (
    <div>
      <TaskListComponent></TaskListComponent>
      <ContactListComponent></ContactListComponent>
      <EjemploDeUseState></EjemploDeUseState>
      <EjemploDeHooks></EjemploDeHooks>
      <MiComponenteConContexto></MiComponenteConContexto>
      <EjemploPropsChildren nombre="Martin">
        {/* Todo lo que esta aqui dentro es tratado como props.children */}
        <h3>Contenido del Children</h3>
      </EjemploPropsChildren>
    </div>
  );
}

export default App;
