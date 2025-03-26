import { useState, useRef, useEffect } from "react";
import { Settings, ZoomIn, ZoomOut, Sun, Moon } from "lucide-react";

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const buttonRef = useRef(null);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches.length) return;
      const touch = e.touches[0];
      setPosition({ x: touch.clientX - offset.current.x, y: touch.clientY - offset.current.y });
    };

    const stopDragging = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", stopDragging);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", stopDragging);
    };
  }, []);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if ("touches" in e) {
      offset.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    } else {
      offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
      document.documentElement.style.fontSize = `${fontSize + 10}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
      document.documentElement.style.fontSize = `${fontSize - 10}%`;
    }
  };

  return (
    <div
      className="fixed z-50 cursor-move"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ref={buttonRef}
      onMouseDown={startDragging}
      onTouchStart={startDragging}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="قائمة إمكانية الوصول"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-4 w-48 bg-white rounded-lg shadow-xl p-4 dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            إعدادات سهولة الوصول
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">حجم الخط</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="تصغير حجم الخط"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-sm">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="تكبير حجم الخط"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">الوضع المظلم</p>
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="تبديل الوضع المظلم"
              >
                {isDarkMode ? (
                  <>
                    <span>الوضع المضيء</span>
                    <Sun className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>الوضع المظلم</span>
                    <Moon className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
