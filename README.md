# DevStack 

DevStack is an interactive web application designed for developers to explore modern frontend, backend, database, and DevOps technologies, compare them side-by-side, and build their custom tech stack seamlessly.

## 🛠️ Technologies Used
- **Frontend Framework:** React.js (Vite)
- **Styling & UI Components:** Tailwind CSS, DaisyUI
- **Type Checking:** TypeScript
- **Notifications:** React-Toastify
- **Data Source:** Local JSON

## ✨ Core Features
1. **Interactive Tech Catalog:** Browse popular development tools with details like difficulty level, ratings, categories, and badges.
2. **Custom Stack Builder:** Dynamically add technologies to a personalized sidebar panel with duplicate protection and one-click removal options.
3. **Responsive & Modern Theme:** Fully optimized across mobile, tablet, and desktop viewports featuring a unified orange-pink-violet brand gradient.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML like code inside JavaScript. It makes writing and understanding React UI components much easier and faster.

### 2. What is the difference between props and state?
- **Props:** Data passed from a parent component to a child component (Read-Only).
- **State:** Data managed locally inside a component that can change over time based on user actions.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a functional component to hold and update its own state. In this project, `useState` was used in `technology.tsx` to store and update the selected items in the `stack` array.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects in React components. It is used to fetch external or local JSON data when the component loads without blocking the UI rendering.

### 5. Why does every item in a `.map()` list need a unique key prop?
React needs a unique `key` prop to identify each list item individually, allowing it to efficiently update, re-order or remove items during re-renders.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on a condition or state value.

*Example from this project:*
```tsx
{stack.length === 0 ? <NoSelection/> : <Selected stack={stack}/>}
````
(If the stack is empty, it displays <NoSelection />, otherwise it displays <Selected />)

### 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent to a child component using props (e.g., <TechCard tech={tech} />). To send something back from the child to the parent, the parent passes a callback function via props, and the child calls that function with data when an event occurs (e.g., <button onClick={() => onAddToStack(tech)}>Add to Stack</button>).
