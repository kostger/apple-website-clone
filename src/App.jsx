import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import CartScreen from "./pages/CartScreen";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import IsPrivate from "./components/IsPrivate";
const App = () => {
  return (
    <main className="bg-black">
      <div style={{ zIndex: 11 }}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route
          path="/cart"
          element={
            <IsPrivate>
              <CartScreen />
            </IsPrivate>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
