import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/others/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Ejemplo",
    "Ejemplo description",
    true,
    LEVELS.URGENTE
  );

  /*
  const changeState = (id) => {
    console.log('TODO: Cambiar estado de tarea')
  }
  */

  return (
    <div>
      <div>Your Task:</div>
      {/* {Aplicar un map} */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

TaskListComponent.propTypes = {}

export default TaskListComponent;
