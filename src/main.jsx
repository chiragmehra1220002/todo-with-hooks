import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TodoApp from './TodoApp.jsx'
import { TodoProvider } from './components/TodoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TodoProvider>
        <TodoApp />
    </TodoProvider>,
  </StrictMode>,
)
