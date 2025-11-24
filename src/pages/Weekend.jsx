import { ArrowRight, ChevronDown, Cloud, CloudRain, MapPin, Navigation, Sun, Wind } from 'lucide-react';
import { useMemo, useState } from 'react';

// --- 1. Sub-components & Helpers (Phần bổ trợ) ---

// Helper: Xác định màu sắc dựa trên AQI
const getAQITheme = (aqi) => {
  if (aqi <= 50) return { color: "text-green-600", bg: "bg-green-100", border: "border-green-200", label: "Tốt", indicator: "bg-green-500" };
  if (aqi <= 100) return { color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-200", label: "Trung bình", indicator: "bg-yellow-500" };
  if (aqi <= 150) return { color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200", label: "Kém", indicator: "bg-orange-500" };
  return { color: "text-red-600", bg: "bg-red-100", border: "border-red-200", label: "Xấu", indicator: "bg-red-600" };
};

// Helper: Icon thời tiết
const WeatherIcon = ({ type, className }) => {
  switch(type) {
    case 'rain': return <CloudRain size={16} className={`text-blue-500 ${className}`} />;
    case 'cloud': return <Cloud size={16} className={`text-gray-500 ${className}`} />;
    default: return <Sun size={16} className={`text-orange-500 ${className}`} />;
  }
};

// Helper: Lấy URL ảnh theo tên địa điểm
const getLocationImage = (name) => {
  const imageMap = {
    "Ecopark, Hưng Yên": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    "Công viên Yên Sở": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    "Làng cổ Đường Lâm": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    "Khu du lịch Sơn Tây": "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    "Vườn Vua Resort": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    "Ba Vì, Hà Nội": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "Chùa Hương, Mỹ Đức": "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    "Đại Lải, Vĩnh Phúc": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    "Tam Đảo, Vĩnh Phúc": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "Thung Nham, Ninh Bình": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    "Tràng An, Ninh Bình": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    "Pù Luông, Thanh Hóa": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
    "Bái Đính, Ninh Bình": "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    "Mù Cang Chải, Yên Bái": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
    "Cúc Phương, Ninh Bình": "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    "Cát Bà, Hải Phòng": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    "Sapa, Lào Cai": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    "Hạ Long, Quảng Ninh": "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    "Đồ Sơn, Hải Phòng": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    "Yên Tử, Quảng Ninh": "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"
  };
  
  return imageMap[name] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
};

// --- 2. Main Component ---

const WeekendGetaway = ({ 
  currentLocation = { name: "Vị trí của bạn", aqi: 150 }, // Default prop
  destinations = [] // Danh sách địa điểm gợi ý
}) => {

  // State: Bán kính được chọn
  const [selectedRadius, setSelectedRadius] = useState(100);
  const [showRadiusMenu, setShowRadiusMenu] = useState(false);
  const radiusOptions = [50, 100, 150, 200];

  // Logic: Lọc địa điểm theo bán kính được chọn và sắp xếp theo AQI
  const sortedDestinations = useMemo(() => {
    const filtered = destinations.filter(dest => dest.distance <= selectedRadius);
    return filtered.sort((a, b) => a.aqi - b.aqi);
  }, [destinations, selectedRadius]);

  // Logic: Lấy địa điểm tốt nhất để so sánh
  const bestDestination = sortedDestinations[0];

  if (!bestDestination) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-xl font-sans border border-gray-100">
      
      {/* SECTION 1: HEADER */}
      <div className="bg-white p-5 pb-6 rounded-b-3xl shadow-sm z-10">
        <div className="flex justify-between items-start mb-3">
            <div>
                <h2 className="text-lg font-bold text-gray-800">Trốn bụi cuối tuần 🌿</h2>
                <p className="text-xs text-gray-500">Dựa trên dự báo 48h tới</p>
            </div>
            
            {/* Dropdown Bán kính */}
            <div className="relative">
              <button 
                onClick={() => setShowRadiusMenu(!showRadiusMenu)}
                className="flex items-center gap-1 text-[10px] bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-lg text-gray-700 font-semibold border border-blue-200 hover:shadow-md transition-all active:scale-95"
              >
                <Navigation size={11} className="text-blue-600" />
                {selectedRadius}km
                <ChevronDown size={12} className={`transition-transform ${showRadiusMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Menu dropdown */}
              {showRadiusMenu && (
                <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-20 min-w-[100px]">
                  {radiusOptions.map(radius => (
                    <button
                      key={radius}
                      onClick={() => {
                        setSelectedRadius(radius);
                        setShowRadiusMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-blue-50 transition-colors ${
                        selectedRadius === radius ? 'bg-blue-100 text-blue-700 font-bold' : 'text-gray-700'
                      }`}
                    >
                      {radius} km
                    </button>
                  ))}
                </div>
              )}
            </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <MapPin size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-600">Vị trí hiện tại</p>
                <p className="text-sm font-bold text-gray-800">{currentLocation.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-600">AQI hiện tại</p>
              <p className="text-lg font-bold text-red-600">{currentLocation.aqi}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: LIST SUGGESTIONS */}
      <div className="p-4 space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Gợi ý hàng đầu</h3>
        
        {sortedDestinations.map((dest) => {
          const theme = getAQITheme(dest.aqi);
          const cleanRatio = (currentLocation.aqi / dest.aqi).toFixed(1);
          const reductionPercentage = Math.round((1 - (dest.aqi / currentLocation.aqi)) * 100);

          return (
            <div key={dest.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer active:scale-[0.98] relative overflow-hidden group">
              {/* Background Image với overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={getLocationImage(dest.name)} 
                  alt={dest.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                />
                <div className="absolute inset-0  from-white/90 via-white/95 to-white/98"></div>
              </div>

              {/* Content wrapper */}
              <div className="relative z-10 p-3">
                {/* Badge % giảm bụi */}
                {reductionPercentage > 0 && (
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold text-green-700 bg-green-100/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md border border-green-200 flex items-center gap-1">
                      <ArrowRight size={10} className="rotate-[-45deg]" />
                      Giảm {reductionPercentage}%
                    </span>
                  </div>
                )}

                {/* Header của Card con */}
                <div className="flex justify-between items-start mb-2 pr-20">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${theme.bg} flex items-center justify-center shadow-md`}>
                       <Sun size={20} className={theme.color} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{dest.name}</h4>
                      <div className="flex items-center text-[10px] text-gray-600 gap-1">
                         <MapPin size={10} /> {dest.distance}km • {dest.driveTime}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${theme.bg} ${theme.color} ${theme.border} shadow-sm`}>
                    AQI {dest.aqi}
                  </span>
                </div>

                {/* Thông số chi tiết */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                   <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2 shadow-sm border border-gray-100">
                      <Wind size={14} className="text-blue-500"/>
                      <div>
                          <p className="text-[10px] text-gray-600">Độ sạch</p>
                          <p className="text-xs font-bold text-blue-600">Gấp {cleanRatio} lần</p>
                      </div>
                   </div>
                   <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2 shadow-sm border border-gray-100">
                      <WeatherIcon type={dest.weatherType} />
                      <div>
                          <p className="text-[10px] text-gray-600">Thời tiết</p>
                          <p className="text-xs font-bold text-gray-700">{dest.temp}°C</p>
                      </div>
                   </div>
                </div>
                
                {/* Footer & CTA */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-1">
                    <span className="text-[10px] text-gray-600 italic">💡 {dest.recommendation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekendGetaway;