import { useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    places: 10,
    jobs: 5,
    users: 20,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">لوحة التحكم</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">عدد الأماكن</h2>
          <p className="text-2xl">{stats.places}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">عدد الوظائف</h2>
          <p className="text-2xl">{stats.jobs}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">عدد المستخدمين</h2>
          <p className="text-2xl">{stats.users}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">إدارة المحتوى</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><a href="/places" className="text-blue-600">إدارة الأماكن</a></li>
          <li><a href="/jobs" className="text-blue-600">إدارة الوظائف</a></li>
          <li><a href="/community" className="text-blue-600">إدارة المجتمع</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
