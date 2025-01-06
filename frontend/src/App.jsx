import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { AuthProvider } from "../context/AuthContext";
function App() {
  const location = useLocation();

  return (
    <>
      <AuthProvider>
        <div className="body">
          <Navbar />
          {/* Show LandingPage only on the Home route */}
          {location.pathname === "/" && <LandingPage />}
          {/* <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-6 font-primary"> */}
          <main className="min-h-screen min-w-full px-4 md:px-10 lg:px-36 py-6 font-primary my-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
