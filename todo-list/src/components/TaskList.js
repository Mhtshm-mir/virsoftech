import React from 'react';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
