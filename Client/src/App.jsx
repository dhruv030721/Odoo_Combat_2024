import { Outlet } from "react-router-dom"
import Header from "./pages/Header/Header"


function App() {


  return (
    <div className="font-poppins h-full bg-no-repeat bg-cover min-h-screen">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App
