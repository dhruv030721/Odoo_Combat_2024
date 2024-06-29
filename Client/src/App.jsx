import { Outlet } from "react-router-dom"
import Header from "./pages/Header/Header"
import { useEffect } from 'react';
import fitnessGoal from "./services/operations/fitness.js"
import { set_fitnessData } from './slices/fitness.slice.js';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fitnessGoal.get_fitness(userData.fitnessgoal);
      dispatch(set_fitnessData(response.data.data));
    })();
  }, [])


  return (
    <div className="font-poppins h-full bg-no-repeat bg-cover min-h-screen">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App
