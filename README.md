# Student Grade Calculator

A beginner-friendly ReactJS project that calculates a student's total marks, percentage, grade, and Pass/Fail status based on marks entered for five subjects.

## 1. About the Project

I built this project to practise the fundamentals of React, JavaScript, and CSS.

The application allows a user to enter a student's name and marks in five subjects. After clicking **Calculate Result**, it validates the inputs and displays the calculated result.

## 2. Features

- Enter the student's name.
- Enter marks for five subjects.
- Calculate total marks out of 500.
- Calculate percentage.
- Assign a grade based on the percentage.
- Display Pass or Fail status.
- Validate empty fields and invalid marks.
- Display error messages when inputs are invalid.
- Reset the form to calculate another student's result.

## 3. Technologies Used

- **ReactJS:** Builds the user interface and manages changing data.
- **JavaScript:** Performs calculations, validation, and grade assignment.
- **CSS:** Styles the page, form, buttons, and result section.
- **Vite:** Runs the development server and builds the project for deployment.

## 4. Project Structure

```text
Student-Grade-Calculator/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### What does each file do?

| File | Purpose |
|---|---|
| `App.jsx` | Contains the main React component, input fields, calculations, validation, and result display. |
| `App.css` | Contains the styling of the application. |
| `main.jsx` | Loads the React application into the webpage. |
| `index.html` | Provides the HTML page where React is displayed. |
| `package.json` | Contains project details, dependencies, and commands such as `npm run dev`. |
| `vite.config.js` | Contains Vite configuration. |
| `public/` | Stores static assets used by the application. |
| `README.md` | Explains the project and how to use it. |

## 5. How the Application Works

The application follows this sequence:

1. The user enters their name.
2. The user enters marks for English, Maths, Science, Computer, and Social Studies.
3. The user clicks **Calculate Result**.
4. The application checks whether the name and all marks have been entered.
5. It checks whether the marks are valid whole numbers between 0 and 100.
6. It calculates the total marks and percentage.
7. It determines the grade based on the percentage.
8. It checks whether the student scored at least 35 in every subject.
9. It displays the total, percentage, grade, and Pass/Fail status.

## 6. Important React Concepts Used

### 6.1 `useState()`

`useState()` stores information that can change while the user interacts with the application.

The project uses state to store:

- `name` — the student's name.
- `marks` — the marks entered for the five subjects.
- `result` — the calculated result.
- `error` — the validation error message, if any.

When state changes, React updates the relevant part of the user interface.

### 6.2 `handleMarksChange()`

This function updates the mark entered for a particular subject.

It creates a copy of the existing marks array, changes the selected subject's value, and updates the state using `setMarks()`.

Creating a copy helps avoid directly modifying the existing React state.

### 6.3 `calculateResult()`

This is the main function of the application.

It performs the following operations:

- Validates the student's name.
- Checks that all five marks are entered.
- Ensures marks are whole numbers between 0 and 100.
- Calculates total marks and percentage.
- Determines the grade.
- Checks the Pass/Fail condition.
- Stores the result using `setResult()`.

If the input is invalid, it displays an error instead of calculating the result.

### 6.4 `resetCalculator()`

This function clears the student's name, all five marks, the displayed result, and any error message.

It allows the user to start a new calculation without refreshing the page.

### 6.5 Conditional Rendering

Conditional rendering means displaying something only when a particular condition is true.

This project uses it to:

- Display the result only after a successful calculation.
- Display an error message only when validation fails.
- Display Pass or Fail based on the student's marks.

### 6.6 Event Handling

The application uses events such as:

- `onChange` — runs when the user changes an input.
- `onClick` — runs when the user clicks a button.

These events connect the user's actions to the React functions.

## 7. Calculation Logic

### Total Marks

There are five subjects, each with a maximum of 100 marks.

**Formula:**

Total Marks = Sum of marks in all five subjects

Maximum Total = 500

### Percentage

**Formula:**

Percentage = (Total Marks / 500) × 100

For five subjects with a maximum of 100 marks each, dividing the total by 5 also gives the percentage.

### Grade Criteria

| Percentage | Grade |
|---|---|
| 90 and above | A+ |
| 80 to below 90 | A |
| 70 to below 80 | B |
| 60 to below 70 | C |
| 50 to below 60 | D |
| Below 50 | F |

The application checks the percentage from the highest grade threshold to the lowest.

### Pass/Fail Criteria

A student passes only if they score **at least 35 marks in every subject**.

For example, a student with marks of `90, 85, 80, 75, 30` fails under this rule, even though their overall percentage is above 50%.

## 8. Input Validation

The application checks for the following errors:

| Condition | Expected behaviour |
|---|---|
| Student name is empty | Displays a validation message. |
| One or more marks are empty | Requests marks for all subjects. |
| Marks are below 0 or above 100 | Displays an invalid-marks message. |
| Marks contain decimal values | Requests whole numbers. |
| All inputs are valid | Calculates and displays the result. |

## 9. How to Run the Project Locally

### Prerequisites

- Node.js and npm installed.
- Git installed if cloning the repository.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Gopiverse/Student-Grade-Calculator.git
```

### Step 2: Open the Project Folder

```bash
cd Student-Grade-Calculator
```

### Step 3: Install Dependencies

```bash
npm install
```

This installs the packages required by the project.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173/`.

### Step 5: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 10. Deployment

The project can be deployed as a static site using Render.

Typical Render settings:

- **Branch:** `main`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

After deployment, Render provides a public URL for accessing the application.

React: Builds the user interface.

Vite: Provides the development server and generates the production build.

Render: Hosts the production build and makes the application publicly accessible.

GitHub: Stores the source code and tracks changes.

## 11. What I Learned

By building this project, I practised:

- Creating React components.
- Managing state with `useState()`.
- Handling user input and button clicks.
- Working with arrays and JavaScript functions.
- Implementing input validation.
- Using conditional rendering.
- Applying CSS to style a responsive form.
- Running a Vite development server.
- Building and deploying a React application.

## 12. Future Improvements

- Add more subjects dynamically.
- Display individual subject grades.
- Save previous student results.
- Add a printable marksheet.
- Improve the mobile layout and accessibility.

---

**Project:** Student Grade Calculator  
**Built with:** ReactJS, JavaScript, CSS, and Vite  
**Purpose:** Practising React fundamentals through a simple, interactive project.
