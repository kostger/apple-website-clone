import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import CartScreen from "./pages/CartScreen";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import IsPrivate from "./components/IsPrivate";
import IpadScreen from "./pages/IpadScreen";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <main>
      <div style={{ zIndex: 11 }}>
        <Navbar />
      </div>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/ipad" element={<IpadScreen />} />
        <Route
          path="/cart"
          element={
            <IsPrivate>
              <CartScreen />
            </IsPrivate>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
