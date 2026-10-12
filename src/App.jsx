import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState(['', '', '', '', '']);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const subjects = [
    'English',
    'Maths',
    'Science',
    'Computer',
    'Social Studies',
  ];

  function handleMarksChange(index, value) {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  }

  function calculateResult() {
    if (!name.trim()) {
      setError('Please enter the student name.');
      setResult(null);
      return;
    }

    if (marks.some((mark) => mark.trim() === '')) {
      setError('Please enter marks for all five subjects.');
      setResult(null);
      return;
    }

    const numbers = marks.map(Number);

    if (
      numbers.some(
        (mark) =>
          !Number.isFinite(mark) ||
          mark < 0 ||
          mark > 100 ||
          !Number.isInteger(mark)
      )
    ) {
      setError('Marks must be whole numbers between 0 and 100.');
      setResult(null);
      return;
    }

    const total = numbers.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / subjects.length;

    let grade;

    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else grade = 'F';

    const passed = numbers.every((mark) => mark >= 35);

    setError('');
    setResult({ total, percentage, grade, passed });
  }

  function resetCalculator() {
    setName('');
    setMarks(['', '', '', '', '']);
    setResult(null);
    setError('');
  }

  return (
    <div className="container">
      <h1>Student Grade Calculator</h1>
      <p>Enter your details and marks below.</p>

      <label>Student Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
      />

      {subjects.map((subject, index) => (
        <div key={subject} className="subject">
          <label>{subject} (out of 100)</label>
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Enter marks"
            value={marks[index]}
            onChange={(e) => {
              handleMarksChange(index, e.target.value);
              setError('');
            }}
          />
        </div>
      ))}

      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      <button onClick={calculateResult}>Calculate Result</button>

      <button className="reset-button" onClick={resetCalculator}>
        Reset
      </button>

      {result && (
        <div className="result">
          <h2>Result for {name}</h2>
          <p>Total Marks: {result.total} / 500</p>
          <p>Percentage: {result.percentage.toFixed(2)}%</p>
          <p>Grade: {result.grade}</p>
          <p>Status: {result.passed ? 'PASS' : 'FAIL'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
