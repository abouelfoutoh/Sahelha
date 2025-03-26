import React, { useState } from 'react';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'medical',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">طلب المساعدة</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
              نوع المساعدة
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="medical">مساعدة طبية</option>
              <option value="transport">مساعدة في التنقل</option>
              <option value="daily">مساعدة في الأمور اليومية</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              وصف المساعدة المطلوبة
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              إرسال الطلب
            </button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">ملاحظات مهمة:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>سيتم التواصل معك خلال 24 ساعة من تقديم الطلب</li>
            <li>في الحالات الطارئة، يرجى الاتصال بالرقم المجاني 1234</li>
            <li>جميع البيانات المقدمة سرية ولن يتم مشاركتها مع أي جهة خارجية</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help