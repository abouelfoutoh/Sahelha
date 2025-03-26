import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AccessibilityMenu from "./components/AccessibilityMenu";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Jobs from "./pages/Jobs";
import Help from "./pages/Help";
import Community from "./pages/Community";
import Profile from "./pages/Profile"; // ✅ استيراد صفحة الحساب الشخصي


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col dark:bg-gray-900" dir="rtl">
        <Navbar />
        <AccessibilityMenu />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} /> {/* ✅ مسار الحساب الشخصي */}
          </Routes>
        </main>
        <footer className="bg-white shadow-inner dark:bg-gray-800">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600 dark:text-gray-300">
              © 2024 سهّلها - جميع الحقوق محفوظة<br></br>
              Made with 💙 By Mohamed Abouelfoutoh
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
