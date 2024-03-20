import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ChangeTitle from "./components/ChangeTitle";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import CountPage from "./pages/countPage/CountPage";
import UserPage from "./pages/userPage/UserPage";
import CalculatorPage from "./pages/calculatorPage/CalculatorPage";


function App() {
  return (
    <div className="App">
        {/*<MainPage />*/}
        {/*<AboutPage/>*/}
        {/*<ChangeTitle/>*/}
        {/*<ContactsPage/>*/}
        {/*<CountPage/>*/}
        <UserPage/>
        <CalculatorPage/>




    </div>
  );
}

export default App;
