import './App.css';
import ContactListComponent from './Components/container/ContactListComponent';
import TaskListComponent from './Components/container/task_list';

function App() {
  return (
    <div>
      <TaskListComponent></TaskListComponent>
      <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
