# 🌿 SmartAir UI - Ứng dụng Giám sát Chất lượng Không khí

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css)


Ứng dụng web hiện đại giúp người dùng theo dõi chất lượng không khí, dự báo AQI, và nhận lời khuyên sức khỏe dựa trên vị trí và lộ trình di chuyển.

## ✨ Tính năng chính

### 🗺️ Bản đồ Tương tác
- **OpenStreetMap** với heatmap overlay thể hiện chất lượng không khí
- **9 trạm quan trắc** tự động trên khu vực Hà Nội và lân cận
- **Custom markers** với mã màu theo AQI
- **Click-to-view** xem chi tiết AQI tại bất kỳ vị trí nào
- **Heatmap gradient** hiển thị phân bố ô nhiễm theo khu vực

### 📊 Phân tích & Dự báo
- **Biểu đồ 14 ngày**: 7 ngày qua + hôm nay + 6 ngày tới
- **Dự báo thông minh** dựa trên lộ trình di chuyển thường ngày
- **Thống kê phơi nhiễm PM2.5** chi tiết
- **So sánh xu hướng** giữa quá khứ và tương lai
- **Tính toán tương đương** mức độ hít phải thuốc lá

### 📰 Tin tức & Cập nhật
- **8 bài viết** về chất lượng không khí, sức khỏe, chính sách
- **8 danh mục**: Thời tiết, Cảnh báo, Sống xanh, Sức khỏe, Công nghệ, v.v.
- **Bookmark** lưu bài yêu thích
- **Filter & Search** theo danh mục
- **Metadata chi tiết**: thời gian đọc, lượt xem, nguồn

### 🤖 Trợ lý AI
- **Chat bot thông minh** tư vấn về chất lượng không khí
- **Quick suggestions** với 4 câu hỏi phổ biến
- **Typing indicator** hiển thị trạng thái bot
- **Avatar động** cho user và bot
- **5+ mẫu câu trả lời** về AQI, sức khỏe, dự báo

### 🏞️ Gợi ý Cuối tuần
- **5 địa điểm** du lịch với không khí trong lành
- **Thông tin chi tiết**: AQI, nhiệt độ, khoảng cách, thời gian di chuyển
- **So sánh mức độ sạch** với vị trí hiện tại
- **Gợi ý hoạt động** phù hợp với từng địa điểm

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & Dev server

### UI/UX
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Recharts** - Biểu đồ tương tác
- **Shadcn UI** - Component library

### Maps & Visualization
- **React Leaflet** - OpenStreetMap integration
- **Leaflet.js** - Interactive maps
- **Custom Heatmap** - Hiển thị phân bố ô nhiễm

### Data Visualization
- **Recharts** - Area charts, Bar charts
- **Custom gradients** - Màu sắc theo AQI
- **Interactive tooltips** - Hiển thị thông tin chi tiết

## 📁 Cấu trúc dự án

```
smartair_ui/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── HeatmapOverlay.jsx
│   │   └── MapClickHandler.jsx
│   ├── pages/            # Main page components
│   │   ├── AirGuardApp.jsx    # Main app & Map view
│   │   ├── Analytics.jsx      # Analytics & Forecasts
│   │   ├── News.jsx          # News feed
│   │   ├── AIchat.jsx        # AI Chatbot
│   │   └── Weekend.jsx       # Weekend getaway suggestions
│   ├── utils/            # Utility functions
│   │   └── aqiCalculator.js
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Cài đặt & Chạy

### Yêu cầu
- **Node.js** >= 16.0.0
- **npm** hoặc **yarn** hoặc **pnpm**

### Cài đặt dependencies

```bash
# Clone repository
git clone https://github.com/nvnhat04/SmartAir-UI.git
cd smartair_ui

# Cài đặt packages
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Chạy Development Server

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Build cho Production

```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

### Preview Production Build

```bash
npm run preview
# hoặc
yarn preview
# hoặc
pnpm preview
```

## 📊 Dữ liệu & API

### Mock Data
Hiện tại ứng dụng sử dụng mock data cho:
- **9 trạm quan trắc** trên khu vực Hà Nội
- **14 ngày** dữ liệu lịch sử và dự báo
- **8 bài tin tức** về môi trường
- **5 địa điểm** du lịch

### Tích hợp API Backend (Tương lai)
```javascript
// Ví dụ API endpoints
GET /api/stations          // Danh sách trạm quan trắc
GET /api/aqi/current       // AQI hiện tại theo vị trí
GET /api/forecast          // Dự báo 7 ngày
GET /api/news              // Tin tức môi trường
POST /api/ai/chat          // AI chatbot
```

## 🎨 UI/UX Features

### Design System
- **Color Palette**: 
  - Good (0-50): Green `#22c55e`
  - Moderate (51-100): Yellow `#eab308`
  - Unhealthy (101-150): Orange `#f97316`
  - Very Unhealthy (151-200): Red `#ef4444`
  - Hazardous (200+): Purple `#7f1d1d`

### Responsive Design
- Mobile-first approach
- Max-width: 448px (iPhone 14 Pro Max size)
- Smooth animations & transitions
- Touch-friendly interactions

### Animations
- Fade-in effects
- Slide-up transitions
- Hover scale effects
- Bounce animations
- Gradient transitions



## 📱 Tabs & Navigation

- **🗺️ Dự báo** - Map view với heatmap overlay
- **📊 Phơi nhiễm** - Analytics & exposure tracking
- **📰 Tin tức** - News feed về môi trường
- **🤖 AI Chat** - Trợ lý AI tư vấn

## 🔮 Tính năng sắp tới

- Tích hợp API backend thực
- Push notifications cho cảnh báo AQI
- Lưu lịch sử vị trí người dùng
- Xuất báo cáo phơi nhiễm PDF
- Multi-language support (EN/VI)
- Offline mode
- Social sharing
- User authentication

## 🤝 Đóng góp

Contributions, issues và feature requests đều được chào đón!

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request


## 👥 Tác giả

- **nvnhat04** - [GitHub](https://github.com/nvnhat04)

## 🙏 Acknowledgments

- [OpenStreetMap](https://www.openstreetmap.org/) - Map data
- [AirVisual](https://www.iqair.com/) - AQI standards reference
- [Recharts](https://recharts.org/) - Chart library
- [Lucide](https://lucide.dev/) - Icon library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Leaflet](https://leafletjs.com/) - Interactive maps

## 📞 Liên hệ

- GitHub: [@nvnhat04](https://github.com/nvnhat04)
- Project Link: [https://github.com/nvnhat04/SmartAir-UI](https://github.com/nvnhat04/SmartAir-UI)

---

**Made with ❤️ for clean air and healthy living**
