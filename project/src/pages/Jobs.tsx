import React, { useState } from "react";
import { Building2, MapPin, Clock } from "lucide-react";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      title: "موظف خدمة عملاء",
      company: "شركة التقدم",
      location: "سوهاج",
      type: "دوام كامل",
      description:
        "نبحث عن موظف خدمة عملاء للعمل في مكتبنا الرئيسي. المكتب مجهز بالكامل لذوي الإعاقة الحركية.",
      requirements: ["إجادة التواصل", "مهارات الحاسب الآلي", "خبرة سنة على الأقل"],
      benefits: ["تأمين صحي شامل", "مواصلات", "بيئة عمل مناسبة"],
    },
    {
      title: "مبرمج",
      company: "تقنية المستقبل",
      location: "القاهرة",
      type: "عن بعد",
      description:
        "فرصة للعمل كمبرمج من المنزل. نرحب بذوي الإعاقة السمعية والحركية.",
      requirements: ["خبرة في البرمجة", "معرفة بلغات البرمجة الحديثة", "القدرة على العمل ضمن فريق"],
      benefits: ["رواتب منافسة", "ساعات عمل مرنة", "تدريب مستمر"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newJob.title ||
      !newJob.company ||
      !newJob.location ||
      !newJob.type ||
      !newJob.description
    )
      return;

    const newJobData = {
      ...newJob,
      requirements: newJob.requirements.split(",").map((req) => req.trim()),
      benefits: newJob.benefits.split(",").map((ben) => ben.trim()),
    };

    setJobs([newJobData, ...jobs]); // إضافة الوظيفة الجديدة إلى القائمة
    setNewJob({ title: "", company: "", location: "", type: "", description: "", requirements: "", benefits: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">فرص العمل المتاحة</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {showForm ? "إلغاء" : "إضافة وظيفة"}
        </button>
      </div>

      {/* فورم إضافة وظيفة */}
      {showForm && (
        <form
          onSubmit={handleJobSubmit}
          className="bg-white p-4 shadow rounded-md mb-6"
        >
          <input
            type="text"
            placeholder="المسمى الوظيفي"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.title}
            onChange={(e) => setNewJob((prev) => ({ ...prev, title: e.target.value }))}
          />
          <input
            type="text"
            placeholder="اسم الشركة"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.company}
            onChange={(e) => setNewJob((prev) => ({ ...prev, company: e.target.value }))}
          />
          <input
            type="text"
            placeholder="الموقع"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.location}
            onChange={(e) => setNewJob((prev) => ({ ...prev, location: e.target.value }))}
          />
          <input
            type="text"
            placeholder="نوع العمل (دوام كامل/جزئي/عن بعد)"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.type}
            onChange={(e) => setNewJob((prev) => ({ ...prev, type: e.target.value }))}
          />
          <textarea
            className="w-full p-2 border rounded-md mb-2"
            rows={3}
            placeholder="وصف الوظيفة"
            value={newJob.description}
            onChange={(e) => setNewJob((prev) => ({ ...prev, description: e.target.value }))}
          ></textarea>
          <input
            type="text"
            placeholder="المتطلبات (افصل بينها بفاصلة)"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.requirements}
            onChange={(e) => setNewJob((prev) => ({ ...prev, requirements: e.target.value }))}
          />
          <input
            type="text"
            placeholder="المميزات (افصل بينها بفاصلة)"
            className="w-full p-2 border rounded-md mb-2"
            value={newJob.benefits}
            onChange={(e) => setNewJob((prev) => ({ ...prev, benefits: e.target.value }))}
          />
          <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">
            نشر
          </button>
        </form>
      )}

      {/* قائمة الوظائف */}
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <div className="flex items-center text-gray-600 mt-2">
                  <Building2 className="w-5 h-5 ml-2" />
                  <span>{job.company}</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                تقدم الآن
              </button>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 ml-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 ml-2" />
                <span>{job.type}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{job.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">المتطلبات:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">المميزات:</h3>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                    >
                      {benefit}
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

export default Jobs;
