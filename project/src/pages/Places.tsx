import { useState } from "react";
import { MapPin, Phone, Clock, PlusCircle, X } from "lucide-react";

const Places = () => {
  const [places, setPlaces] = useState([
    {
      name: "مستشفى الأمل",
      type: "مستشفى",
      address: "شارع المستشفى، حي الصحة",
      phone: "0123456789",
      hours: "24 ساعة",
      features: ["منحدرات للكراسي المتحركة", "مواقف خاصة", "مترجم لغة إشارة"],
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "مطعم السعادة",
      type: "مطعم",
      address: "شارع الطعام، حي المطاعم",
      phone: "0123456788",
      hours: "10:00 - 22:00",
      features: ["منحدرات للكراسي المتحركة", "قوائم برايل", "طاولات مناسبة"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPlace, setNewPlace] = useState({
    name: "",
    type: "",
    address: "",
    phone: "",
    hours: "",
    features: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const addPlace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlace.name || !newPlace.address || !newPlace.phone) return;

    setPlaces([
      ...places,
      { ...newPlace, features: newPlace.features.split(","), image: newPlace.image || "https://via.placeholder.com/500" },
    ]);
    setNewPlace({ name: "", type: "", address: "", phone: "", hours: "", features: "", image: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">دليل الأماكن الصديقة لذوي الإعاقة</h1>

      {/* زر إضافة مكان */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors"
      >
        <PlusCircle className="w-5 h-5" />
        إضافة مكان
      </button>

      {/* فورم إضافة مكان */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">إضافة مكان جديد</h2>
            <form onSubmit={addPlace} className="space-y-4">
              <input type="text" name="name" value={newPlace.name} onChange={handleChange} placeholder="اسم المكان" required className="w-full p-2 border rounded" />
              <input type="text" name="type" value={newPlace.type} onChange={handleChange} placeholder="نوع المكان (مطعم، مستشفى...)" className="w-full p-2 border rounded" />
              <input type="text" name="address" value={newPlace.address} onChange={handleChange} placeholder="العنوان" required className="w-full p-2 border rounded" />
              <input type="tel" name="phone" value={newPlace.phone} onChange={handleChange} placeholder="رقم الهاتف" required className="w-full p-2 border rounded" />
              <input type="text" name="hours" value={newPlace.hours} onChange={handleChange} placeholder="ساعات العمل (مثال: 9:00 - 17:00)" className="w-full p-2 border rounded" />
              <textarea name="features" value={newPlace.features} onChange={handleChange} placeholder="المميزات (افصلها بفاصلة)" className="w-full p-2 border rounded"></textarea>
              <input type="text" name="image" value={newPlace.image} onChange={handleChange} placeholder="رابط الصورة (اختياري)" className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                إضافة المكان
              </button>
            </form>
          </div>
        </div>
      )}

      {/* عرض الأماكن */}
      <div className="grid md:grid-cols-2 gap-6">
        {places.map((place, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>
                  <p className="text-gray-600">{place.type}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 ml-2" />
                  <span>{place.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 ml-2" />
                  <span>{place.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 ml-2" />
                  <span>{place.hours}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">المميزات المتوفرة:</h4>
                <div className="flex flex-wrap gap-2">
                  {place.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
