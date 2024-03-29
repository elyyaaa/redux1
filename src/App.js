import './App.css';
import UserPage from "./pages/userPage/UserPage";
import DetailUserPage from "./pages/detailUserPage/DetailUserPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<UserPage />} />
                    <Route path="/user/:userId" element={<DetailUserPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
