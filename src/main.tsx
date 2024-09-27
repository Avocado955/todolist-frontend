import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoContextProvider from './contexts/TodoContextProvider.tsx'
import CategoryContextProvider from './contexts/CategoryContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <TodoContextProvider>
    <CategoryContextProvider>
        <App />
    </CategoryContextProvider>
    </TodoContextProvider>
    
)
