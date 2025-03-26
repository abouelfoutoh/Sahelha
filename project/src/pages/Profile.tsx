import { useState, useEffect } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("isLoggedIn") === "true"; // استرجاع حالة تسجيل الدخول
  });

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("userData") || "{}") || {
      name: "",
      email: "",
      phone: "",
      location: "",
      bio: "",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Jack",
    };
  });

  // ✅ حفظ بيانات المستخدم في Local Storage عند أي تعديل
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [isLoggedIn, userData]);

  // 🔹 تحديث بيانات المستخدم
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // 🔹 التبديل بين وضع التعديل والعرض
  const toggleEdit = () => setIsEditing(!isEditing);

  // ✅ تسجيل الدخول
  const handleLogin = () => {
    setUserData({
      name: "محمد ابوالفتوح",
      email: "mohamed@example.com",
      phone: "0123456789",
      location: "سوهاج، مصر",
      bio: "مطوّر ويب مهتم بتسهيل الوصول للجميع!",
      avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Jack",
    });
    setIsLoggedIn(true);
  };

  // ✅ تسجيل الخروج
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoggedIn ? (
        <div className="text-center">
          <img
            src={userData.avatar}
            alt="الصورة الشخصية"
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500"
          />

          {isEditing ? (
            <div className="mt-4 text-right">
              <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded-lg" />
              <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded-lg" />
              <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded-lg" />
              <input type="text" name="location" value={userData.location} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded-lg" />
              <textarea name="bio" value={userData.bio} onChange={handleInputChange} className="w-full p-2 mb-3 border rounded-lg" />
              <button onClick={toggleEdit} className="w-full bg-green-500 text-white py-2 rounded-lg">حفظ التعديلات</button>
            </div>
          ) : (
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.phone}</p>
              <p className="text-gray-600">{userData.location}</p>
              <p className="text-gray-600 italic">{userData.bio}</p>

              <button onClick={toggleEdit} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">تعديل البيانات الشخصية</button>
              <button onClick={handleLogout} className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg">تسجيل الخروج</button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">يُرجى تسجيل الدخول</h2>
          <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg">تسجيل الدخول</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
