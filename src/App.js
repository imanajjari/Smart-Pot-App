import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  let router = useRoutes(routes);
  return (
    <Provider store={store}>
      <div className="lg:w-[700px] lg:justify-self-center">
        <Navbar />
        {router}
      </div>
    </Provider>
  );
}

export default App;
