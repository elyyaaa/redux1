import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<UserRegisterPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
