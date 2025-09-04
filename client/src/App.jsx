import Register from './Register'
import Login from './Login'
import HomePage from './HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReportLost from './ReportLost'
import ReportFound from './ReportFound'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportLost />} />
        <Route path="/found" element={<ReportFound />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
