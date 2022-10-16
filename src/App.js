import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesObjects from "./routes";
function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Router>
        <Routes>
          {
            
            RoutesObjects.map((route) => 
              <Route path={route.path} element={route.element} key={route.id}/>
              )        
           }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
