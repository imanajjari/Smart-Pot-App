import CreatePlant from "./pages/CreatePlant/CreatePlant";
import EditPlant from "./pages/EditPlant/EditPlant";
import EditProfile from "./pages/EditProfile/EditProfile";
import Home from "./pages/Home/Home";
import PlantsList from "./pages/plantsList/PlantsList";
import Profile from "./pages/profile/Profile";

let routes =[
    {path : '/', element:<Home />},
    {path : '/plants-list', element:<PlantsList />},
    {path : '/profile', element:<Profile />},
    {path : '/createP-plant', element:<CreatePlant />},
    {path : '/edit-profile', element:<EditProfile />},
    {path : '/edit-plant', element:<EditPlant />},
]

export default routes;