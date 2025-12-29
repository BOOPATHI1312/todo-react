import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Card */}
          <div className="card shadow-lg border-0 rounded-4">
            {/* Header */}
            <div
              className="card-header text-white text-center rounded-top-4"
              style={{
                background: "linear-gradient(135deg, #0d6efd, #6610f2)"
              }}
            >
              <h3 className="mb-0 fw-bold">📝 My To-Do List</h3>
              <small className="opacity-75">
                Stay organized & productive
              </small>
            </div>
            {/* Body */}
            <div className="card-body p-4">
              {/* Input */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="What do you want to do today?"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button
                  className="btn btn-primary btn-lg"
                  onClick={addTask}
                >
                ➕ Add
                </button>
              </div>
              {/* Task Counter */}
              <p className="text-muted mb-2">
                Total Tasks: <strong>{tasks.length}</strong>
              </p>
              {/* Task List */}
              <ul className="list-group list-group-flush">
                {tasks.length === 0 && (
                  <li className="list-group-item text-center text-muted">
                    No tasks yet. Start adding 🚀
                  </li>
                )}
                {tasks.map((t, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center py-3"
                  >
                    <span className="fw-medium">{t}</span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteTask(index)}
                    >
                      🗑 Delete
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          {/* Footer */}
          <p className="text-center mt-3 text-muted small">
            Built with ❤️ using React & Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;