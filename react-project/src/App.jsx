import Create from './components/Create'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
