import { useState } from 'react';
import Collapsible from '../collapsible/Collapsible';
import { initialTasks } from '../../data/tasks';

export default function Tasks() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [taskTitle, setTaskTitle] = useState('');
  const [dateTime, setDateTime] = useState('');

  function onSaveClick() {
    if (!taskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      taskTitle,
      dateTime,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setDateTime('');
    setIsNewTaskOpen(false);
  }

  function onCancelClick() {
    setIsNewTaskOpen(false);
  }

  function onDeleteClick(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>
          {!isNewTaskOpen && (
            <div className="create-button-container">
              <button
                className="button create-button"
                onClick={() => setIsNewTaskOpen(true)}
              >
                <i className="fas fa-calendar" /> &nbsp; Create
              </button>
            </div>
          )}
        </div>

        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h2>New Task</h2>
            <div className="form-group">
              <label>Task Title</label>
              <div className="form-input">
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Task Date and Time</label>
              <div className="form-input">
                <input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </div>
            </div>
            <div className="button-group">
              <button className="button save-button" onClick={onSaveClick}>
                <i className="fas fa-save" /> &nbsp; Save Task
              </button>
              <button className="button cancel-button" onClick={onCancelClick}>
                <i className="fas fa-times" /> &nbsp; Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="content-body">
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <div className="task-body">
                <div className="task-title">
                  <i className="fas fa-tasks" />
                  <span>{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">{task.dateTime}</div>
              </div>
              <div className="task-options">
                <button
                  className="icon-button"
                  onClick={() => onDeleteClick(task.id)}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
