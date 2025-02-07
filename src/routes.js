import Home from "./pages/Home/Home";
import PlantsList from "./pages/plantsList/PlantsList";
import Profile from "./pages/profile/Profile";

let routes =[
    {path : '/', element:<Home />},
    {path : '/plants-list', element:<PlantsList />},
    {path : '/profile', element:<Profile />},
]

export default routes;