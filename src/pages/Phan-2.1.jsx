import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  Binary,
  BookOpen,
  Boxes,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  FileText,
  Fingerprint,
  Globe2,
  KeyRound,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Package,
  Radio,
  Router,
  Server,
  ShieldCheck,
  Split,
  SwitchCamera,
  TableProperties,
  Terminal,
  UserRound,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const osiLayers = [
  {
    number: 7,
    id: "application",
    en: "Application",
    vi: "Ứng dụng",
    keywords: "HTTP, DNS, Email, SSH",
    short: "Tầng gần người dùng nhất, nơi các ứng dụng mạng hoạt động.",
    detail: "Cung cấp dịch vụ mạng cho trình duyệt, email, Zalo, YouTube, DNS, ChatGPT, game online hoặc các ứng dụng cần giao tiếp qua mạng.",
    examples: ["HTTP/HTTPS", "DNS", "SMTP", "IMAP/POP3", "FTP/SFTP", "SSH"],
    pdu: "Data",
    color: "purple",
    icon: <MessageCircle />,
  },
  {
    number: 6,
    id: "presentation",
    en: "Presentation",
    vi: "Trình diễn",
    keywords: "Mã hóa, nén, định dạng",
    short: "Xử lý cách dữ liệu được biểu diễn, mã hóa, nén hoặc chuyển đổi.",
    detail: "Giúp dữ liệu có đúng định dạng để bên nhận hiểu được. Ví dụ: mã hóa TLS, nén dữ liệu, chuyển đổi ký tự UTF-8, định dạng ảnh JPEG/PNG, video MP4.",
    examples: ["TLS/SSL", "UTF-8", "JPEG", "PNG", "MP4", "Nén dữ liệu"],
    pdu: "Data",
    color: "pink",
    icon: <Lock />,
  },
  {
    number: 5,
    id: "session",
    en: "Session",
    vi: "Phiên",
    keywords: "Tạo, giữ, kết thúc phiên",
    short: "Quản lý phiên giao tiếp giữa hai bên.",
    detail: "Theo dõi khi nào giao tiếp bắt đầu, được duy trì, kết thúc hoặc cần khôi phục. Ví dụ phiên đăng nhập website ngân hàng hoặc phiên chat đang còn hiệu lực.",
    examples: ["Phiên đăng nhập", "Phiên chat", "Duy trì kết nối", "Kết thúc phiên"],
    pdu: "Data",
    color: "orange",
    icon: <UserRound />,
  },
  {
    number: 4,
    id: "transport",
    en: "Transport",
    vi: "Giao vận",
    keywords: "TCP, UDP, Port",
    short: "Truyền dữ liệu giữa hai chương trình trên hai thiết bị.",
    detail: "Dùng port để xác định ứng dụng/dịch vụ nhận dữ liệu. TCP ưu tiên tin cậy; UDP ưu tiên nhanh, ít kiểm soát hơn.",
    examples: ["TCP", "UDP", "Port 80", "Port 443", "Port 53", "Port 22"],
    pdu: "Segment / Datagram",
    color: "emerald",
    icon: <Split />,
  },
  {
    number: 3,
    id: "network",
    en: "Network",
    vi: "Mạng",
    keywords: "IP, Router, Routing",
    short: "Đưa dữ liệu từ mạng này sang mạng khác bằng địa chỉ IP.",
    detail: "Tầng Network xử lý địa chỉ IP và định tuyến. Router dùng IP để quyết định dữ liệu nên đi đường nào khi ra ngoài LAN.",
    examples: ["IP address", "Router", "Routing", "ICMP", "ping", "tracert/traceroute"],
    pdu: "Packet",
    color: "cyan",
    icon: <Router />,
  },
  {
    number: 2,
    id: "data-link",
    en: "Data Link",
    vi: "Liên kết dữ liệu",
    keywords: "MAC, Frame, Switch",
    short: "Giúp thiết bị trong cùng LAN giao tiếp bằng địa chỉ MAC.",
    detail: "Tầng Data Link đóng dữ liệu thành frame, thêm MAC nguồn/MAC đích và hỗ trợ chuyển frame trong mạng cục bộ. Switch hoạt động chủ yếu ở tầng này.",
    examples: ["MAC address", "Frame", "Switch", "Ethernet", "WiFi LAN"],
    pdu: "Frame",
    color: "blue",
    icon: <Fingerprint />,
  },
  {
    number: 1,
    id: "physical",
    en: "Physical",
    vi: "Vật lý",
    keywords: "Bit, cáp, sóng, tín hiệu",
    short: "Truyền bit 0 và 1 qua dây, cáp quang hoặc sóng không dây.",
    detail: "Tầng Physical không quan tâm nội dung là gì. Nó chỉ quan tâm cách biểu diễn và truyền bit qua cáp đồng, cáp quang, WiFi, Bluetooth, 4G/5G.",
    examples: ["Bit 0/1", "Cáp đồng", "Cáp quang", "WiFi signal", "RJ45", "Card mạng"],
    pdu: "Bits",
    color: "slate",
    icon: <Cable />,
  },
];

const colorClasses = {
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  pink: { text: "text-pink-300", bg: "bg-pink-500/10", border: "border-pink-400/40", solid: "bg-pink-500", ring: "shadow-pink-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-400/40", solid: "bg-slate-600", ring: "shadow-slate-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
  red: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-400/40", solid: "bg-red-500", ring: "shadow-red-500/20" },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Layers className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 2: Mô hình mạng</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 2.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyOsi />
        <SevenLayerMap />
        <LayerExplorer />
        <RealWorldExamples />
        <WebsiteExample />
        <EncapsulationSimulator />
        <CliMapping />
        <Misunderstandings />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <BookOpen size={16} /> Từ thiết bị vật lý sang mô hình logic
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Mô hình OSI:
            <span className="block text-cyan-400">7 tầng tổng quan</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            OSI là bản đồ 7 lớp giúp bạn hiểu dữ liệu đi từ ứng dụng như trình duyệt, Zalo, YouTube xuống dây mạng/WiFi và đến máy đích như thế nào.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Từ trên xuống</p>
            <p><span className="text-purple-300">Application</span> → <span className="text-pink-300">Presentation</span> → <span className="text-orange-300">Session</span> → <span className="text-emerald-300">Transport</span> → <span className="text-cyan-300">Network</span> → <span className="text-blue-300">Data Link</span> → <span className="text-slate-300">Physical</span></p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <OsiStack compact />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu mô hình OSI là gì và vì sao cần chia mạng thành nhiều tầng.",
    "Biết tên và vai trò tổng quan của 7 tầng OSI.",
    "Hiểu dữ liệu đi từ ứng dụng xuống đường truyền mạng như thế nào.",
    "Biết tầng nào liên quan đến ứng dụng, TCP/UDP, IP, MAC, dây mạng/WiFi.",
    "Có nền tảng để học sâu từng tầng ở bài sau.",
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="1" color="cyan" title="Mục tiêu bài học" icon={<Award />} />
      <div className="grid md:grid-cols-5 gap-3">
        {goals.map((goal, index) => (
          <div key={goal} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">{index + 1}</div>
            <p className="text-sm text-slate-300 leading-relaxed">{goal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyOsi() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần mô hình OSI?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi bạn gửi một tin nhắn <strong className="text-white">“Xin chào”</strong>, bên ngoài trông rất đơn giản. Nhưng bên trong, mạng phải làm rất nhiều việc.</p>
            <p>Ứng dụng tạo dữ liệu, dữ liệu có thể được mã hóa, chia nhỏ, gắn port, gắn IP, gắn MAC, rồi chuyển thành tín hiệu điện/sóng WiFi để truyền đi.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-1">OSI = Open Systems Interconnection</p>
              <p className="text-sm text-slate-300">Mô hình tham chiếu chia quá trình truyền thông mạng thành 7 tầng để dễ học, dễ thiết kế và dễ xử lý lỗi.</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="space-y-3 font-mono text-sm">
              <FlowLine text="Ứng dụng Zalo tạo tin nhắn" color="purple" />
              <FlowLine text="Mã hóa / định dạng dữ liệu" color="pink" />
              <FlowLine text="Quản lý phiên giao tiếp" color="orange" />
              <FlowLine text="Chia dữ liệu, thêm TCP/UDP + port" color="emerald" />
              <FlowLine text="Gắn địa chỉ IP người nhận" color="cyan" />
              <FlowLine text="Gắn địa chỉ MAC trong LAN" color="blue" />
              <FlowLine text="Chuyển thành bit và tín hiệu" color="slate" last />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SevenLayerMap() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Sơ đồ 7 tầng OSI" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <OsiStack />
        </div>
        <div className="space-y-4">
          <DirectionCard
            icon={<ArrowDown />}
            title="Khi gửi dữ liệu"
            subtitle="Đi từ tầng 7 xuống tầng 1"
            body="Ứng dụng tạo dữ liệu, các tầng bên dưới lần lượt thêm thông tin điều khiển, rồi chuyển thành bit để truyền qua dây hoặc sóng."
            color="cyan"
          />
          <DirectionCard
            icon={<ArrowUp />}
            title="Khi nhận dữ liệu"
            subtitle="Đi từ tầng 1 lên tầng 7"
            body="Máy nhận lấy tín hiệu, đọc từng lớp thông tin, gỡ đóng gói và đưa nội dung cuối cùng lên ứng dụng."
            color="emerald"
          />
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
            <h3 className="text-white font-bold mb-3">Câu nhớ nhanh</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-slate-500 mb-2">Từ trên xuống</p>
                <p className="text-cyan-300 font-bold">Anh Phải Sống Tốt Nếu Đời Phức</p>
                <p className="text-slate-400 mt-2">A P S T N D P</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-slate-500 mb-2">Từ dưới lên</p>
                <p className="text-emerald-300 font-bold">Please Do Not Throw Sausage Pizza Away</p>
                <p className="text-slate-400 mt-2">P D N T S P A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerExplorer() {
  const [activeNumber, setActiveNumber] = useState(7);
  const active = osiLayers.find((layer) => layer.number === activeNumber);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Khám phá từng tầng" icon={<Eye />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {osiLayers.map((layer) => {
            const isActive = activeNumber === layer.number;
            const lc = colorClasses[layer.color];
            return (
              <button key={layer.number} onClick={() => setActiveNumber(layer.number)} className={`rounded-2xl p-3 text-left border transition-all ${isActive ? `${lc.bg} ${lc.border} ${lc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-black text-lg">{layer.number}</span>
                  {React.cloneElement(layer.icon, { size: 16 })}
                </div>
                <p className="text-xs font-bold">{layer.en}</p>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
              {React.cloneElement(active.icon, { size: 34 })}
            </div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Tầng {active.number}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-2">{active.en}</h3>
            <p className={`${c.text} font-bold mb-4`}>{active.vi}</p>
            <p className="text-slate-300 leading-relaxed">{active.detail}</p>
          </div>

          <div className="space-y-4">
            <InfoBox title="Từ khóa chính" value={active.keywords} icon={<KeyRound />} color={active.color} />
            <InfoBox title="Đơn vị dữ liệu" value={active.pdu} icon={<Package />} color={active.color} />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-3">Ví dụ liên quan</h4>
              <div className="flex flex-wrap gap-2">
                {active.examples.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className={c.text}>Tóm tắt:</strong> {active.short}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("parcel");
  const data = {
    parcel: {
      title: "Gửi bưu phẩm",
      icon: <Mail />,
      rows: [
        ["Application", "Người viết nội dung thư"],
        ["Presentation", "Dịch ngôn ngữ, đóng gói nội dung dễ đọc"],
        ["Session", "Tạo phiên trao đổi giữa người gửi và người nhận"],
        ["Transport", "Chia thư thành nhiều kiện, đảm bảo đủ kiện"],
        ["Network", "Ghi địa chỉ tỉnh/thành, chọn tuyến vận chuyển"],
        ["Data Link", "Chuyển giữa các bưu cục gần nhau"],
        ["Physical", "Xe tải, máy bay, đường sá vận chuyển thật"],
      ],
    },
    restaurant: {
      title: "Gọi món qua app",
      icon: <Boxes />,
      rows: [
        ["Application", "Bạn chọn món trên app"],
        ["Presentation", "App hiển thị món, giá, hình ảnh đúng định dạng"],
        ["Session", "Phiên đặt hàng của bạn được tạo"],
        ["Transport", "Đơn hàng được theo dõi để không thiếu thông tin"],
        ["Network", "Hệ thống chọn nhà hàng và tuyến giao"],
        ["Data Link", "Shipper di chuyển qua từng đoạn đường cụ thể"],
        ["Physical", "Xe máy, đường phố, tín hiệu điện thoại"],
      ],
    },
  };
  const current = data[mode];

  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Ví dụ đời sống dễ hiểu" icon={<Mail />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(data).map(([key, item]) => (
            <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>
              {React.cloneElement(item.icon, { size: 16 })} {item.title}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 22 })} {current.title}</h3>
          <div className="grid md:grid-cols-7 gap-3">
            {current.rows.map(([layerName, desc]) => {
              const layer = osiLayers.find((l) => l.en === layerName);
              const c = colorClasses[layer.color];
              return (
                <div key={layerName} className={`${c.bg} ${c.border} border rounded-2xl p-4`}>
                  <div className={`${c.text} font-black mb-2`}>{layer.number}. {layer.en}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteExample() {
  const rows = [
    ["Application", "Trình duyệt tạo yêu cầu HTTPS"],
    ["Presentation", "Dữ liệu có thể được mã hóa bằng TLS"],
    ["Session", "Duy trì phiên kết nối với website"],
    ["Transport", "TCP chia dữ liệu, dùng port 443"],
    ["Network", "IP xác định địa chỉ server"],
    ["Data Link", "MAC giúp chuyển frame trong LAN"],
    ["Physical", "Bit truyền qua WiFi/cáp mạng"],
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="Ví dụ kỹ thuật: truy cập website" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm mb-6">
          <span className="text-green-400">browser</span><span className="text-slate-400">$ </span><span className="text-white">https://example.com</span>
        </div>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm space-y-2">
            <p><span className="text-purple-300">Chrome</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-purple-300">HTTPS</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-pink-300">TLS</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-emerald-300">TCP port 443</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-cyan-300">IP server</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-blue-300">MAC gateway/router</span></p>
            <p className="text-slate-600">↓</p>
            <p><span className="text-slate-300">WiFi hoặc dây mạng</span></p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {rows.map(([layerName, desc]) => {
              const layer = osiLayers.find((l) => l.en === layerName);
              const c = colorClasses[layer.color];
              return (
                <div key={layerName} className={`${c.bg} ${c.border} border rounded-2xl p-4`}>
                  <p className={`${c.text} font-black text-sm mb-1`}>Tầng {layer.number} — {layer.en}</p>
                  <p className="text-sm text-slate-300">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EncapsulationSimulator() {
  const steps = [
    { layer: 7, title: "Application", desc: "Ứng dụng chat tạo nội dung: Hello", visual: "Data: Hello" },
    { layer: 6, title: "Presentation", desc: "Chuyển định dạng, có thể mã hóa/nén dữ liệu.", visual: "Data: bytes / encrypted" },
    { layer: 5, title: "Session", desc: "Gắn dữ liệu vào phiên giao tiếp đang còn hiệu lực.", visual: "Session + Data" },
    { layer: 4, title: "Transport", desc: "Thêm TCP/UDP header, port nguồn và port đích.", visual: "Segment = TCP/UDP header + Data" },
    { layer: 3, title: "Network", desc: "Thêm IP nguồn và IP đích để định tuyến.", visual: "Packet = IP header + Segment" },
    { layer: 2, title: "Data Link", desc: "Thêm MAC nguồn, MAC đích và trailer kiểm tra lỗi.", visual: "Frame = MAC header + Packet + Trailer" },
    { layer: 1, title: "Physical", desc: "Chuyển frame thành bit 0 và 1, rồi truyền qua dây/sóng.", visual: "Bits = 01001000..." },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const layer = osiLayers.find((l) => l.number === current.layer);
  const c = colorClasses[layer.color];
  const [direction, setDirection] = useState("send");

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Cơ chế: Encapsulation & Decapsulation" icon={<Package />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => { setDirection("send"); setStep(0); }} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${direction === "send" ? "bg-green-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><ArrowDown size={16} /> Gửi: tầng 7 xuống 1</button>
          <button onClick={() => { setDirection("receive"); setStep(0); }} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${direction === "receive" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><ArrowUp size={16} /> Nhận: tầng 1 lên 7</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(layer.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — Tầng {layer.number}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{direction === "send" ? current.desc : reverseDesc(current.layer)}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">{direction === "send" ? current.visual : reverseVisual(current.layer)}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <EncapStack activeLayer={layer.number} direction={direction} />
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className="text-green-300">Encapsulation</strong> là đóng gói dữ liệu khi gửi. <strong className="text-cyan-300">Decapsulation</strong> là gỡ từng lớp khi nhận.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliMapping() {
  const commands = [
    { cmd: "ping google.com", layer: 3, desc: "Dùng ICMP để kiểm tra kết nối ở tầng Network." },
    { cmd: "tracert google.com / traceroute google.com", layer: 3, desc: "Cho biết dữ liệu đi qua các router nào." },
    { cmd: "ipconfig", layer: 3, desc: "Xem IP, gateway; DNS server có liên hệ đến tầng Application." },
    { cmd: "netstat -ano", layer: 4, desc: "Xem kết nối và port đang mở, liên quan tầng Transport." },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="Liên hệ CLI với tầng OSI" icon={<Terminal />} />
      <div className="grid md:grid-cols-2 gap-4">
        {commands.map((item) => {
          const layer = osiLayers.find((l) => l.number === item.layer);
          const c = colorClasses[layer.color];
          return (
            <div key={item.cmd} className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm mb-4 text-green-300">{item.cmd}</div>
              <div className={`${c.bg} ${c.border} border rounded-2xl p-4 mb-4`}>
                <p className={`${c.text} font-black`}>Tầng {layer.number} — {layer.en}</p>
                <p className="text-sm text-slate-400 mt-1">{layer.vi}</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "OSI là phần mềm phải cài vào máy?", desc: "Không. OSI là mô hình tham chiếu để học, thiết kế và phân tích mạng, không phải chương trình cài đặt.", good: "OSI = bản đồ lý thuyết, không phải phần mềm.", icon: <Layers /> },
    { title: "Dữ liệu luôn đi đúng 7 tầng riêng biệt?", desc: "Không hoàn toàn. Trong thực tế TCP/IP được dùng phổ biến hơn và một số tầng OSI có thể được gộp lại.", good: "OSI giúp học và phân tích rõ ràng, dù triển khai thực tế có thể gộp tầng.", icon: <GitCompareIcon /> },
    { title: "Switch và Router giống nhau?", desc: "Không. Switch thường hoạt động tầng 2, dùng MAC trong LAN. Router thường hoạt động tầng 3, dùng IP giữa các mạng.", good: "Switch = tầng 2; Router = tầng 3.", icon: <Router /> },
    { title: "IP và MAC là một?", desc: "Không. MAC ở tầng 2, dùng trong LAN. IP ở tầng 3, dùng để định tuyến giữa các mạng.", good: "MAC = LAN; IP = định tuyến qua mạng.", icon: <Fingerprint /> },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">{React.cloneElement(item.icon, { size: 24 })}</div>
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {item.good}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">10</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-purple-300">Tầng 7 Application</span> = ứng dụng mạng</p>
              <p><span className="text-pink-300">Tầng 6 Presentation</span> = định dạng, mã hóa, nén</p>
              <p><span className="text-orange-300">Tầng 5 Session</span> = phiên giao tiếp</p>
              <p><span className="text-emerald-300">Tầng 4 Transport</span> = TCP/UDP, port</p>
              <p><span className="text-cyan-300">Tầng 3 Network</span> = IP, router</p>
              <p><span className="text-blue-300">Tầng 2 Data Link</span> = MAC, switch</p>
              <p><span className="text-slate-300">Tầng 1 Physical</span> = bit, cáp, sóng</p>
              <br />
              <p className="text-slate-500"># Cực ngắn</p>
              <p className="text-slate-300">Ứng dụng → Định dạng → Phiên → TCP/UDP → IP → MAC → Dây/Sóng</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Mô hình OSI có bao nhiêu tầng?", options: ["3 tầng", "4 tầng", "7 tầng", "10 tầng"], correct: 2, explanation: "Mô hình OSI có 7 tầng: Application, Presentation, Session, Transport, Network, Data Link, Physical." },
  { question: "Router thường liên quan nhiều nhất đến tầng nào trong mô hình OSI?", options: ["Tầng 1 — Physical", "Tầng 2 — Data Link", "Tầng 3 — Network", "Tầng 7 — Application"], correct: 2, explanation: "Router dùng địa chỉ IP để định tuyến giữa các mạng, nên liên quan chủ yếu đến tầng 3 — Network." },
  { question: "Địa chỉ MAC thuộc tầng nào?", options: ["Tầng 1 — Physical", "Tầng 2 — Data Link", "Tầng 4 — Transport", "Tầng 7 — Application"], correct: 1, explanation: "MAC address dùng trong mạng LAN và thuộc tầng 2 — Data Link." },
  { question: "TCP port 443 thuộc tầng nào?", options: ["Tầng 2 — Data Link", "Tầng 3 — Network", "Tầng 4 — Transport", "Tầng 6 — Presentation"], correct: 2, explanation: "Port thuộc tầng Transport. HTTPS thường dùng TCP port 443." },
  { question: "HTTPS thuộc tầng nào trong cách phân loại OSI cơ bản?", options: ["Tầng 1 — Physical", "Tầng 3 — Network", "Tầng 5 — Session", "Tầng 7 — Application"], correct: 3, explanation: "HTTPS là giao thức ứng dụng để truy cập web bảo mật, nên thuộc tầng 7 — Application; phần mã hóa TLS thường liên hệ tầng 6." },
];

function InteractiveQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const finished = currentQ === "finished";
  const q = !finished ? questions[currentQ] : null;

  const handleSelect = (index) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === q.correct) setScore((s) => s + 1);
  };
  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else setCurrentQ("finished");
  };
  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  if (finished) {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]">
        <div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div>
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4>
        <p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p>
        <button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[380px]">
      <div className="flex justify-between items-center mb-4 text-sm font-medium"><span className="text-cyan-400">Câu hỏi {currentQ + 1}/{questions.length}</span><span className="text-slate-500">Điểm: {score}</span></div>
      <h4 className="text-lg font-bold text-white mb-6 leading-snug">{q.question}</h4>
      <div className="space-y-3 flex-grow">
        {q.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-4 rounded-xl border text-sm transition-all ";
          if (!showResult) btnClass += "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
          else if (idx === q.correct) btnClass += "border-green-500 bg-green-500/10 text-green-400";
          else if (idx === selected) btnClass += "border-red-500 bg-red-500/10 text-red-400";
          else btnClass += "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
          return <button key={idx} onClick={() => handleSelect(idx)} disabled={showResult} className={btnClass}>{opt}</button>;
        })}
      </div>
      {showResult && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Bài 2.1 là tổng quan. Bài tiếp theo sẽ đi kỹ từng tầng hơn, từ Physical đến Application.</p>
      <Link to="/phan-2-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 2.2 — Chi tiết từng tầng OSI <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    purple: "bg-purple-500/20 text-purple-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
  };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function OsiStack({ compact }) {
  return (
    <div className="space-y-2">
      {osiLayers.map((layer) => {
        const c = colorClasses[layer.color];
        return (
          <div key={layer.number} className={`${c.bg} ${c.border} border rounded-2xl ${compact ? "p-3" : "p-4"} flex items-center gap-3`}>
            <div className={`${c.solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`${c.text} font-black`}>{layer.en}</span>
                {!compact && <span className="text-slate-600">—</span>}
                {!compact && <span className="text-white font-bold">{layer.vi}</span>}
              </div>
              <p className="text-xs text-slate-400 mt-1 truncate">{layer.keywords}</p>
            </div>
            <div className={c.text}>{React.cloneElement(layer.icon, { size: 22 })}</div>
          </div>
        );
      })}
    </div>
  );
}

function FlowLine({ text, color, last }) {
  const c = colorClasses[color];
  return (
    <div>
      <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-slate-300`}>{text}</div>
      {!last && <div className="flex justify-center py-1"><ArrowDown size={16} className="text-slate-600" /></div>}
    </div>
  );
}

function DirectionCard({ icon, title, subtitle, body, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-xl font-bold text-white mb-1">{title}</h3><p className={`${c.text} font-bold mb-3`}>{subtitle}</p><p className="text-sm text-slate-300 leading-relaxed">{body}</p></div>;
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function EncapStack({ activeLayer, direction }) {
  const layers = direction === "send" ? osiLayers : [...osiLayers].reverse();
  return <div className="space-y-2">{layers.map((layer) => { const c = colorClasses[layer.color]; const active = layer.number === activeLayer; return <div key={layer.number} className={`${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-3 flex items-center gap-3 transition-all`}><div className={`${active ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div><div className="flex-1"><p className={`${active ? c.text : "text-slate-400"} font-bold text-sm`}>{layer.en}</p><p className="text-xs text-slate-500">{layer.pdu}</p></div>{active && <Zap className={c.text} size={18} />}</div>; })}</div>;
}

function reverseDesc(layerNumber) {
  const map = {
    7: "Ứng dụng nhận nội dung cuối cùng và hiển thị cho người dùng.",
    6: "Dữ liệu được giải mã, giải nén hoặc chuyển về định dạng ứng dụng hiểu được.",
    5: "Dữ liệu được gắn vào phiên giao tiếp phù hợp.",
    4: "Đọc TCP/UDP, kiểm tra port và chuyển dữ liệu đến đúng ứng dụng.",
    3: "Đọc thông tin IP để xác định packet có đúng máy đích không.",
    2: "Đọc frame, kiểm tra MAC và lỗi truyền trong LAN.",
    1: "Nhận tín hiệu vật lý từ dây hoặc sóng và chuyển thành bit.",
  };
  return map[layerNumber];
}

function reverseVisual(layerNumber) {
  const map = {
    7: "Hello hiển thị trong app",
    6: "Data decoded / decrypted",
    5: "Session matched",
    4: "Data extracted from Segment",
    3: "Segment extracted from Packet",
    2: "Packet extracted from Frame",
    1: "Signals → Bits",
  };
  return map[layerNumber];
}

function GitCompareIcon() {
  return <SwitchCamera />;
}
