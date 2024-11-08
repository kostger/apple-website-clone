import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </main>
  );
};

export default App;
