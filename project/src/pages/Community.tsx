import React, { useState } from "react";
import { MessageCircle, ThumbsUp, Calendar } from "lucide-react";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "أحمد محمد",
      date: "2024-03-15",
      title: "تجربتي مع العمل عن بعد",
      content:
        "أود مشاركة تجربتي في العمل عن بعد كمبرمج. وجدت أن هذا النمط من العمل مناسب جداً لي كشخص من ذوي الإعاقة الحركية...",
      likes: 15,
      comments: 8,
      tags: ["العمل عن بعد", "تجارب", "برمجة"],
    },
    {
      id: 2,
      author: "سارة أحمد",
      date: "2024-03-14",
      title: "أفضل المطاعم المجهزة في القاهرة",
      content:
        "زرت عدة مطاعم في القاهرة وأود مشاركة قائمة بأفضل المطاعم المجهزة لذوي الإعاقة...",
      likes: 23,
      comments: 12,
      tags: ["مطاعم", "القاهرة", "تجهيزات"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim() === "" || newPost.content.trim() === "") return;

    const newPostData = {
      id: posts.length + 1,
      author: "مستخدم جديد", // لاحقًا يمكن استبدالها بالمستخدم الحالي
      date: new Date().toISOString().split("T")[0],
      title: newPost.title,
      content: newPost.content,
      likes: 0,
      comments: 0,
      tags: ["عام"],
    };

    setPosts([newPostData, ...posts]); // إضافة المنشور الجديد في الأعلى
    setNewPost({ title: "", content: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">المجتمع</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {showForm ? "إلغاء" : "إضافة منشور"}
        </button>
      </div>

      {/* فورم إضافة منشور */}
      {showForm && (
        <form
          onSubmit={handlePostSubmit}
          className="bg-white p-4 shadow rounded-md mb-6"
        >
          <input
            type="text"
            placeholder="عنوان المنشور"
            className="w-full p-2 border rounded-md mb-2"
            value={newPost.title}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="اكتب منشورك هنا..."
            value={newPost.content}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, content: e.target.value }))
            }
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            نشر
          </button>
        </form>
      )}

      {/* قائمة المنشورات */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <span className="ml-4">{post.author}</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 ml-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{post.content}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-6 space-x-reverse text-gray-600">
              <button className="flex items-center space-x-2 space-x-reverse hover:text-blue-600">
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 space-x-reverse hover:text-blue-600">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
