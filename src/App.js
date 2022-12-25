import React from 'react'
import Home from './Components/Home'
import { AppProvider } from './context'


   
function App() {
  return <div className='container'>
    <AppProvider>
   <Home />
    </AppProvider>
  </div>

}

export default App
