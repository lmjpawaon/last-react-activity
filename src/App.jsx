import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import UserProvider from './context/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <Component1/>
    </UserProvider>
  )
}

export default App
