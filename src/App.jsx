import { useState } from 'react'
import './App.css'
import { Items, PaginatedItems } from "../pages/paginate"

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div id="container" > 
      <PaginatedItems itemsPerPage={4} />
    </div>
  </>)
}

export default App
