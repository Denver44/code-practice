import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Collapsible from '../collapsible/Collapsible';
import actions from '../../actions';
import { toDisplayDateFormat } from '../../utils';

export default function Tasks() {
  const tasks        = useSelector((state) => state.tasks);
  const dispatch     = useDispatch();

  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [taskTitle,     setTaskTitle]     = useState('');
  const [dateTime,      setDateTime]      = useState('');
  const [search,        setSearch]        = useState('');

  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  function onSaveClick() {
    if (!taskTitle.trim()) return;
    const newTask = { taskTitle, dateTime };
    dispatch(actions.createTaskAsync(newTask));
    setTaskTitle('');
    setDateTime('');
    setIsNewTaskOpen(false);
  }

  function onDeleteClick(id) {
    dispatch(actions.deleteTaskAsync(id));
  }

  const filteredTasks = (tasks.data || []).filter((task) =>
    task.taskTitle.toLowerCase().includes(search.toLowerCase())
  );

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
              <label>Date and Time</label>
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
              <button className="button cancel-button" onClick={() => setIsNewTaskOpen(false)}>
                <i className="fas fa-times" /> &nbsp; Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="search-box">
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {tasks.loading && <i className="fas fa-spinner fa-spin" />}
        {tasks.error   && <p className="error-message">{tasks.error}</p>}

        <div className="content-body">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task">
              <div className="task-body">
                <div className="task-title">
                  <i className="fas fa-tasks" />
                  <span>{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  {toDisplayDateFormat(task.dateTime)}
                </div>
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
