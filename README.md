This is my portfolio and is being updated with new features and projects.  




















































<!-- # React Interview Questions & Answers (Q31–Q60)

A concise reference covering core and intermediate React concepts, hooks, routing, performance, and patterns.

---

## Q31. What is React and what problem does it solve?

**Answer:** React is a JavaScript library for building user interfaces, created by Meta. It solves the problem of keeping the UI in sync with application data in a predictable, maintainable way.

Before component-based libraries, developers often manipulated the DOM directly and kept UI state scattered across the page. That led to bugs, duplicated logic, and hard-to-maintain code as apps grew.

React addresses this by:

- **Component-based architecture** — UI is split into reusable, isolated pieces.
- **Declarative rendering** — You describe what the UI should look like for a given state; React updates the DOM when state changes.
- **Unidirectional data flow** — Data flows down via props; events flow up, making behavior easier to trace.
- **Efficient updates** — The virtual DOM and reconciliation minimize expensive direct DOM operations.

React works well for single-page applications (SPAs), complex interactive UIs, and large teams that need reusable UI patterns.

---

## Q32. What is JSX and why is it used in React?

**Answer:** JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript. It is not required by React, but it is the most common way to describe UI.

Example:

```jsx
const element = <h1 className="title">Hello, React!</h1>;
```

Under the hood, JSX is compiled (by Babel or similar) into `React.createElement()` calls:

```jsx
const element = React.createElement("h1", { className: "title" }, "Hello, React!");
```

**Why JSX is used:**

- **Readability** — UI structure looks similar to HTML and is easy to scan.
- **Co-location** — Markup, logic, and styles can live together in a component.
- **Type safety** — With TypeScript, JSX catches many UI-related errors at compile time.
- **Expressiveness** — You can embed JavaScript expressions with `{ }` directly in markup.

---

## Q33. What is the difference between functional and class components?

**Answer:**

| Aspect | Functional Component | Class Component |
|--------|---------------------|-----------------|
| Syntax | Function that returns JSX | ES6 class extending `React.Component` |
| State | `useState`, `useReducer` hooks | `this.state` and `this.setState()` |
| Lifecycle | `useEffect` and other hooks | `componentDidMount`, `componentDidUpdate`, etc. |
| `this` binding | Not needed | Required; methods often need binding |
| Modern usage | Preferred in current React | Legacy; still supported but rarely used in new code |

**Functional component example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**Class component example:**

```jsx
class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
```

Since React 16.8 (Hooks), functional components can handle state, side effects, and context, so they are the standard choice today.

---

## Q34. What is the virtual DOM and how does React use it?

**Answer:** The **virtual DOM** is a lightweight in-memory representation of the real DOM. React keeps a virtual tree that mirrors your component structure.

**How React uses it:**

1. When state or props change, React re-renders components and builds a **new** virtual DOM tree.
2. React **diffs** the new tree against the previous one (reconciliation).
3. React computes the **minimal set of changes** needed in the real DOM.
4. React **batches** and applies those updates efficiently.

**Benefits:**

- Avoids rewriting the entire DOM on every change.
- Makes updates predictable and fast for complex UIs.
- Lets developers write declarative code without manually optimizing DOM operations.

The virtual DOM is not always faster than direct DOM manipulation for tiny updates, but it scales well for large, dynamic applications.

---

## Q35. Explain the useState hook with an example.

**Answer:** `useState` is a Hook that adds local state to a functional component. It returns a state value and a function to update it.

```jsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Key points:**

- Initial state is passed to `useState(initialValue)`.
- Updates trigger a re-render.
- State updates may be asynchronous; use the functional form `setCount(prev => prev + 1)` when the next value depends on the previous one.

---

## Q36. What is the useEffect hook and what are its use cases?

**Answer:** `useEffect` runs **side effects** after render — code that touches something outside the component’s render output.

**Common use cases:**

- Fetching data from an API
- Subscribing to events or WebSockets
- Manually updating the DOM
- Setting up timers
- Syncing with browser APIs (localStorage, document title)

```jsx
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setUser(data);
      });

    return () => {
      cancelled = true; // cleanup on unmount or before re-run
    };
  }, [userId]); // re-run when userId changes

  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
```

**Dependency array:**

- `[]` — run once after mount (and cleanup on unmount).
- `[dep1, dep2]` — run when dependencies change.
- Omitted — run after every render (rarely desired).

---

## Q37. What is the difference between controlled and uncontrolled components?

**Answer:**

| | Controlled Component | Uncontrolled Component |
|---|---------------------|------------------------|
| **Who owns the value?** | React state | The DOM |
| **Getting value** | From state (`value={state}`) | Ref (`ref.current.value`) |
| **Updating value** | `onChange` updates state | DOM handles it natively |

**Controlled example:**

```jsx
function ControlledInput() {
  const [name, setName] = useState("");
  return (
    <input value={name} onChange={(e) => setName(e.target.value)} />
  );
}
```

**Uncontrolled example:**

```jsx
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} defaultValue="" />;
}
```

**When to use which:**

- **Controlled** — Most forms in React; enables validation, conditional UI, and single source of truth.
- **Uncontrolled** — Simple forms, file inputs, or integrating with non-React libraries.

---

## Q38. What are props in React and how are they passed?

**Answer:** **Props** (properties) are read-only inputs passed from a parent component to a child. They let components stay reusable and configurable.

```jsx
function Greeting({ name, role }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Role: {role}</p>
    </div>
  );
}

function App() {
  return <Greeting name="Asraf" role="MERN Developer" />;
}
```

**How props are passed:**

- As attributes on JSX elements: `<Component title="Hello" count={5} />`
- Spread operator for object props: `<Component {...user} />`
- Children as a special prop: `<Card>Content here</Card>`

**Rules:**

- Props flow **one way** (parent → child).
- Props are **immutable** inside the child — do not modify them.
- Default values can be set with default parameters or `defaultProps` (legacy).

---

## Q39. What is prop drilling and how can it be avoided?

**Answer:** **Prop drilling** is passing props through many intermediate components that do not need the data themselves, just to reach a deeply nested child.

Example problem:

```
App → Layout → Sidebar → UserMenu → Avatar (needs user)
```

Every layer must accept and forward `user`, even if only `Avatar` uses it.

**How to avoid prop drilling:**

1. **Context API** — Share global or semi-global data (theme, auth, locale).
2. **Component composition** — Pass components as `children` or render props so intermediate layers do not need the data.
3. **State management libraries** — Redux, Zustand, Jotai for complex shared state.
4. **Custom hooks** — Encapsulate logic; combine with Context for cleaner access.

```jsx
// Composition: App passes Avatar directly as child
<Layout sidebar={<UserMenu avatar={<Avatar user={user} />} />} />
```

Use Context or a state library when many unrelated components need the same data.

---

## Q40. Explain the useContext hook with an example.

**Answer:** `useContext` lets a component **subscribe** to a React Context value without prop drilling.

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

**When to use:**

- Theme, language, authentication, or other app-wide settings.
- Data needed by many components at different nesting levels.

**Caution:** Changing context value re-renders all consuming components; split contexts or memoize values when performance matters.

---

## Q41. What is the useRef hook and when would you use it?

**Answer:** `useRef` returns a mutable object `{ current: value }` that **persists across renders** without causing re-renders when updated.

**Common use cases:**

1. **DOM access** — Focus an input, measure an element, scroll into view.
2. **Storing mutable values** — Timers, previous values, instance variables.
3. **Avoiding stale closures** — Hold latest callback/value without adding dependencies.

```jsx
import { useRef, useEffect } from "react";

function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
}
```

**Difference from state:** Updating a ref does **not** trigger a re-render. Use state when the UI must reflect the change; use ref when you need a stable box that survives renders.

---

## Q42. What are React keys and why are they important in lists?

**Answer:** **Keys** are special string/number attributes (`key`) on elements in a list. They help React identify which items changed, were added, or removed.

```jsx
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build portfolio" },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

**Why keys matter:**

- Stable keys improve reconciliation accuracy.
- Wrong or missing keys can cause incorrect DOM reuse, lost input focus, and buggy animations.
- **Use stable, unique IDs** — not array index when the list can reorder, filter, or insert items.

**Avoid:** `key={index}` for dynamic lists where order or content changes frequently.

---

## Q43. What is the difference between state and props?

**Answer:**

| | State | Props |
|---|-------|-------|
| **Owned by** | The component itself | Parent component |
| **Mutable?** | Yes (via `setState` / `useState`) | No (read-only in child) |
| **Purpose** | Internal, changing data | Configuration / input from parent |
| **Triggers re-render** | When updated | When parent re-renders and passes new props |

**Analogy:** Props are like function arguments; state is like local variables inside the function.

Both can change over time and cause re-renders, but only state is controlled by the component that owns it.

---

## Q44. How does conditional rendering work in React?

**Answer:** Conditional rendering means showing different UI based on state, props, or other conditions. React has no special syntax — you use JavaScript expressions inside JSX.

**1. if / early return**

```jsx
function Dashboard({ user }) {
  if (!user) return <LoginPrompt />;
  return <Welcome user={user} />;
}
```

**2. Ternary operator**

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

**3. Logical AND (`&&`)**

```jsx
{error && <p className="error">{error}</p>}
```

**4. Switch or object map**

```jsx
const views = { home: <Home />, about: <About /> };
return views[page] ?? <NotFound />;
```

Choose the pattern that keeps JSX readable for your team.

---

## Q45. What is React.memo and when should you use it?

**Answer:** `React.memo` is a higher-order component that **memoizes** a functional component. If props are unchanged (shallow comparison), React skips re-rendering that component.

```jsx
import { memo } from "react";

const ExpensiveList = memo(function ExpensiveList({ items }) {
  console.log("Rendering list");
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});
```

**When to use:**

- Component re-renders often with the **same props**
- Rendering is **expensive**
- Parent re-renders frequently but child props rarely change

**When not to use:**

- Cheap components (memo adds comparison overhead)
- Props change on every render anyway
- Premature optimization before measuring

For custom prop comparison, pass a second argument: `memo(Component, arePropsEqual)`.

---

## Q46. What is the useReducer hook and when is it preferred over useState?

**Answer:** `useReducer` manages complex state with a **reducer function** `(state, action) => newState`, similar to Redux patterns.

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

**Prefer `useReducer` over `useState` when:**

- State logic is complex or has many sub-values
- Next state depends on previous state in multiple ways
- You want predictable, testable state transitions
- Multiple actions update the same state object

---

## Q47. Explain the useMemo hook and give a use case.

**Answer:** `useMemo` **memoizes the result of a computation** and recalculates only when dependencies change.

```jsx
import { useMemo, useState } from "react";

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

**Use case:** Expensive filtering, sorting, or derived data that should not re-run on every render when inputs are unchanged.

**Note:** `useMemo` is for **values**. For memoizing **functions**, use `useCallback`. Do not overuse — profile first.

---

## Q48. What is the useCallback hook and when do you use it?

**Answer:** `useCallback` returns a **memoized version of a callback function** that only changes when its dependencies change.

```jsx
import { useCallback, useState, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}
```

**When to use:**

- Passing callbacks to **memoized child components** (`React.memo`)
- Dependencies of `useEffect` that should stay stable
- Preventing unnecessary re-renders caused by new function references each render

**When not needed:** If the child is not memoized or the callback is not a dependency bottleneck.

---

## Q49. What is React Router and how do you set up client-side routing?

**Answer:** **React Router** is the standard library for client-side routing in React. It maps URLs to components without full page reloads.

**Setup (React Router v6):**

```jsx
// npm install react-router-dom

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Key pieces:**

- `BrowserRouter` — Uses HTML5 history API
- `Routes` / `Route` — Declares URL-to-component mapping
- `Link` — Client-side navigation without refresh
- Nested routes, layouts, and loaders are supported for larger apps

---

## Q50. What is the difference between useNavigate and Link in React Router?

**Answer:**

| | `Link` | `useNavigate` |
|---|--------|-----------------|
| **Type** | Declarative component | Imperative hook |
| **Usage** | `<Link to="/about">About</Link>` | `navigate("/about")` |
| **Typical context** | User clicks a navigation element | Programmatic navigation after an action |
| **Renders anchor** | Yes (`<a>`) | No — call a function |

**Link example:**

```jsx
<Link to="/dashboard">Go to Dashboard</Link>
```

**useNavigate example:**

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginUser();
    navigate("/dashboard", { replace: true });
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

**Use `Link`** for standard navigation in the UI. **Use `useNavigate`** after form submit, login success, logout, or conditional redirects.

---

## Q51. What are custom hooks in React? Write a simple example.

**Answer:** **Custom hooks** are reusable functions that start with `use` and can call other hooks. They extract and share stateful logic between components.

**Rules:**

- Name must start with `use`
- Can only be called at the top level of React functions or other custom hooks

**Example — `useLocalStorage`:**

```jsx
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme: {theme}
    </button>
  );
}
```

Other common custom hooks: `useFetch`, `useDebounce`, `useMediaQuery`, `useAuth`.

---

## Q52. What is lazy loading in React and how is it implemented?

**Answer:** **Lazy loading** defers loading a component’s JavaScript until it is needed, reducing initial bundle size and improving load time.

**Implementation with `React.lazy` and `Suspense`:**

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

**How it works:**

- `React.lazy()` takes a dynamic `import()` and returns a component.
- `Suspense` shows a fallback UI while the chunk loads.
- Bundlers (Webpack, Vite) automatically split code into separate chunks.

**Best for:** Route-level pages, heavy modals, charts, or admin panels not needed on first paint.

---

## Q53. What are React error boundaries and why are they useful?

**Answer:** **Error boundaries** are React components that catch JavaScript errors in their **child component tree** during rendering, in lifecycle methods, or in constructors of child components. They display a fallback UI instead of crashing the whole app.

```jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Why useful:**

- Prevent white screen of death
- Isolate failures to part of the UI
- Log errors for monitoring

**Limitations:** Error boundaries do **not** catch errors in event handlers, async code, SSR, or themselves. For events, use `try/catch`.

*(Note: As of current React, error boundaries still require a class component; libraries like `react-error-boundary` wrap this pattern.)*

---

## Q54. What is the Context API and when should you use Redux instead?

**Answer:**

**Context API** provides a way to pass data through the component tree without prop drilling. It is built into React and works well for moderate global state.

**Use Context when:**

- Theme, locale, auth user, or UI preferences
- Data is read often but changes infrequently
- App size is small to medium
- You want zero extra dependencies

**Use Redux (or Zustand, Jotai, etc.) instead when:**

- State updates are **frequent and complex**
- You need **time-travel debugging**, middleware, or structured action logs
- Many unrelated parts of the app read/write the same state
- You need **normalized server/cache state** (e.g., RTK Query)
- Performance tuning requires selective subscriptions beyond Context’s re-render model

**Summary:** Context is great for dependency injection-style shared values. Redux shines for large apps with complex, predictable global state management.

---

## Q55. Explain the concept of reconciliation in React.

**Answer:** **Reconciliation** is the process React uses to compare the new virtual DOM with the previous one and determine the minimal updates to apply to the real DOM.

**Steps:**

1. Component state/props change → React re-renders and produces a new element tree.
2. React **diffs** the new tree with the previous tree.
3. React applies **heuristics** (same component type at same position, keys in lists) to decide whether to update in place or replace.
4. React commits the calculated changes to the DOM.

**Key ideas:**

- **Elements vs components** — Different element types replace the entire subtree.
- **Keys** — Help match list items correctly across updates.
- **Batching** — Multiple state updates may be batched for efficiency.

Reconciliation is what makes React’s declarative model practical: you describe the full UI for each state, and React figures out efficient DOM patches.

---

## Q56. What is the difference between React.Fragment and empty tags (`<>`)?

**Answer:** Both let you **group multiple children without adding an extra DOM node**.

```jsx
// React.Fragment — full syntax
return (
  <React.Fragment>
    <td>Hello</td>
    <td>World</td>
  </React.Fragment>
);

// Shorthand
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

**Differences:**

| | `React.Fragment` | `<>` |
|---|------------------|------|
| Syntax | Verbose | Short |
| `key` prop | Supported: `<React.Fragment key={id}>` | **Not supported** |
| Attributes | Only `key` and `children` | None |

**Use `React.Fragment` with `key`** when mapping fragments in a list. Otherwise `<>` is fine and more common.

---

## Q57. How do you handle forms in React? Explain with Formik or react-hook-form.

**Answer:** Form libraries reduce boilerplate for validation, submission, and field state. Two popular options:

### react-hook-form (performance-focused, minimal re-renders)

```jsx
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea {...register("message", { required: true })} />
      <button type="submit">Send</button>
    </form>
  );
}
```

### Formik (schema-friendly, popular in larger forms)

```jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

function ContactForm() {
  return (
    <Formik
      initialValues={{ email: "", message: "" }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <Field name="message" as="textarea" />
        <ErrorMessage name="message" component="div" />

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}
```

**Choose react-hook-form** for performance and simple API. **Choose Formik + Yup** when you want declarative validation schemas and familiar form state objects.

---

## Q58. What is code splitting in React and how does it improve performance?

**Answer:** **Code splitting** breaks the JavaScript bundle into smaller chunks loaded on demand instead of shipping one large file upfront.

**How it improves performance:**

- **Faster initial load** — Users download only what they need first.
- **Better caching** — Vendor and route chunks cache independently.
- **Lower memory use** — Unused features are not parsed or executed immediately.

**Techniques in React:**

1. **Route-based splitting** — `React.lazy()` per page/route
2. **Component-based splitting** — Lazy load heavy widgets (charts, editors)
3. **Bundler dynamic imports** — `import("./module")` creates separate chunks

```jsx
const AdminPanel = lazy(() => import("./AdminPanel"));
```

Combined with `Suspense`, code splitting is a core strategy for scaling React apps without sacrificing first-load speed.

---

## Q59. What are portals in React and when are they useful?

**Answer:** **Portals** let you render children into a DOM node that exists **outside** the parent component’s DOM hierarchy, while keeping the same React tree and context.

```jsx
import { createPortal } from "react-dom";

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
```

**When useful:**

- **Modals and dialogs** — Escape `overflow: hidden` on parents
- **Tooltips and popovers** — Avoid z-index and clipping issues
- **Notifications / toasts** — Render at document body level

Events still bubble through the React tree (not the DOM tree), so event handling and Context continue to work as expected.

---

## Q60. Explain the lifecycle of a React functional component with hooks.

**Answer:** Functional components do not have class lifecycle methods, but **`useEffect` and other hooks map to similar phases**:

### 1. Mount (component added to DOM)

- Function body runs (render phase).
- React commits DOM updates.
- `useEffect(() => { ... }, [])` runs **after** paint (like `componentDidMount`).

### 2. Update (state or props change)

- Function re-runs with new props/state.
- React reconciles and updates DOM if needed.
- `useEffect` runs after paint if dependencies changed (like `componentDidUpdate`).
- Cleanup from previous effect runs first if dependencies changed.

### 3. Unmount (component removed)

- `useEffect` **cleanup function** runs (like `componentWillUnmount`).

```jsx
function Profile({ userId }) {
  const [user, setUser] = useState(null);

  // Mount + update when userId changes
  useEffect(() => {
    fetchUser(userId).then(setUser);

    return () => {
      // Cleanup on unmount or before next effect run
      cancelRequest();
    };
  }, [userId]);

  return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
}
```

**Render phase vs commit phase:**

- **Render** — Pure; computes JSX (must not mutate DOM or cause side effects).
- **Commit** — React applies DOM changes; effects run after.

Understanding this flow helps place data fetching, subscriptions, and cleanup in the right hook with the correct dependency array.

---

## Quick Reference

| Topic | Key API / Concept |
|-------|-------------------|
| State | `useState`, `useReducer` |
| Side effects | `useEffect` |
| Shared data | Context, Redux |
| Performance | `memo`, `useMemo`, `useCallback`, lazy, code splitting |
| Routing | React Router — `Routes`, `Link`, `useNavigate` |
| Forms | react-hook-form, Formik |
| Resilience | Error boundaries |
| DOM escape hatch | Portals, `useRef` | -->
