import { Link } from 'react-router-dom';
import { MapPin, Briefcase, HelpCircle, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'دليل الأماكن',
      description: 'اكتشف الأماكن المجهزة لذوي الإعاقة في محيطك',
      link: '/places'
    },
    {
      icon: Briefcase,
      title: 'فرص العمل',
      description: 'ابحث عن وظائف مناسبة وقدم عليها بسهولة',
      link: '/jobs'
    },
    {
      icon: HelpCircle,
      title: 'طلب المساعدة',
      description: 'تواصل مع متطوعين ومنظمات للحصول على المساعدة',
      link: '/help'
    },
    {
      icon: Users,
      title: 'المجتمع',
      description: 'شارك تجاربك وتواصل مع الآخرين',
      link: '/community'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          منصة سهّلها - نسهل حياة ذوي الإعاقة
        </h1>
        <p className="text-xl text-gray-600">
          خدمات بسيطة وسهلة الاستخدام للوصول إلى كل ما تحتاجه
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link
              key={index}
              to={feature.link}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          مميزات المنصة
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-center">✅ تصميم بسيط وسهل التصفح</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-center">✅ دعم اللغة العربية والقراءة الصوتية</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-center">✅ متوافق مع جميع الأجهزة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home