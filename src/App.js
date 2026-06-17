import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const [assignments, setAssignments] = useState([]);

  const totalAssignments = assignments.length;

  const submittedCount = assignments.filter(
    (assignment) => assignment.status === "Submitted"
  ).length;

  const pendingCount = assignments.filter(
    (assignment) => assignment.status === "Pending"
  ).length;

  const lateCount = assignments.filter(
    (assignment) => assignment.status === "Late"
  ).length;

  const addAssignment = () => {
    const newAssignment = {
      title,
      subject,
      date,
      status,
    };

    setAssignments([...assignments, newAssignment]);

    setTitle("");
    setSubject("");
    setDate("");
    setStatus("Pending");
  };

  const deleteAssignment = (index) => {
    const updatedAssignments = assignments.filter(
      (_, i) => i !== index
    );

    setAssignments(updatedAssignments);
  };

  return (
    <div>
      <h1>Assignment Submission Tracker</h1>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Submitted</option>
        <option>Late</option>
      </select>

      <br /><br />

      <button onClick={addAssignment}>
        Add Assignment
      </button>

      <h2>Dashboard Summary</h2>

      <p>Total Assignments: {totalAssignments}</p>
      <p>Submitted: {submittedCount}</p>
      <p>Pending: {pendingCount}</p>
      <p>Late: {lateCount}</p>

      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.title}</td>
              <td>{assignment.subject}</td>
              <td>{assignment.date}</td>
              <td>{assignment.status}</td>
              <td>
                <button onClick={() => deleteAssignment(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;