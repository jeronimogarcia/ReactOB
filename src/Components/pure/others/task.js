import React from "react";
import { Task } from "../../../models/task.class";
import PropTypes from "prop-types";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5>This task is: {task.completed ? "Completed" : "Pending"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
