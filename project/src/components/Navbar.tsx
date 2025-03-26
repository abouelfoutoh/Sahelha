import { Link, useLocation } from "react-router-dom";
import { MapPin, Briefcase, HelpCircle, Users, Home, UserCircle } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "الرئيسية", icon: Home },
    { path: "/places", label: "الأماكن", icon: MapPin },
    { path: "/jobs", label: "الوظائف", icon: Briefcase },
    { path: "/help", label: "طلب المساعدة", icon: HelpCircle },
    { path: "/community", label: "المجتمع", icon: Users },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              سهّلها
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            {/* أيقونة الحساب الشخصي */}
            <Link
              to="/profile"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/profile"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <UserCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
