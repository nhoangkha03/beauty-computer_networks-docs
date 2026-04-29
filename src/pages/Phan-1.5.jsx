import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  Bluetooth,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cloud,
  Cpu,
  Database,
  EthernetPort,
  Eye,
  Circle,
  Gauge,
  GitCompare,
  Globe2,
  Home,
  Info,
  Laptop,
  Lightbulb,
  MapPin,
  MonitorSmartphone,
  Network,
  Radio,
  RadioTower,
  Router,
  SatelliteDish,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  TableProperties,
  Terminal,
  TowerControl,
  Wifi,
  Wind,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const mediaTypes = [
  {
    id: "copper",
    label: "Cáp đồng",
    viName: "Copper / Ethernet",
    signal: "Tín hiệu điện",
    scope: "LAN gia đình, văn phòng, PC, camera, máy in",
    bestFor: "Kết nối gần, ổn định, chi phí thấp",
    summary: "Cáp đồng dùng lõi kim loại đồng để truyền tín hiệu điện, phổ biến nhất là dây mạng Ethernet đầu RJ45.",
    pros: ["Giá rẻ", "Dễ mua, dễ bấm đầu", "Phù hợp LAN", "Độ trễ thấp"],
    cons: ["Khoảng cách thường giới hạn khoảng 100m", "Có thể bị nhiễu điện", "Không phù hợp khoảng cách rất xa"],
    color: "orange",
    icon: <Cable />,
  },
  {
    id: "fiber",
    label: "Cáp quang",
    viName: "Fiber optic",
    signal: "Xung ánh sáng",
    scope: "ISP, data center, backbone, liên tòa nhà, liên tỉnh/quốc tế",
    bestFor: "Đường xa, tốc độ cao, chống nhiễu tốt",
    summary: "Cáp quang truyền dữ liệu bằng ánh sáng trong sợi thủy tinh hoặc nhựa rất nhỏ.",
    pros: ["Tốc độ rất cao", "Đi xa tốt", "Ít bị nhiễu điện từ", "Phù hợp mạng lõi"],
    cons: ["Thi công khó hơn", "Dễ gãy nếu uốn cong quá mức", "Thiết bị quang có thể đắt hơn", "Sửa chữa phức tạp hơn"],
    color: "cyan",
    icon: <Sparkles />,
  },
  {
    id: "wifi",
    label: "WiFi",
    viName: "Wireless LAN",
    signal: "Sóng radio",
    scope: "Nhà, văn phòng, quán cà phê, trường học",
    bestFor: "Laptop, điện thoại, tablet cần di chuyển linh hoạt",
    summary: "WiFi dùng sóng không dây để đưa thiết bị vào mạng LAN hoặc Internet thông qua router/AP.",
    pros: ["Linh hoạt", "Không cần kéo dây", "Phù hợp thiết bị di động", "Dễ mở rộng vùng sử dụng"],
    cons: ["Dễ bị nhiễu", "Tốc độ dao động", "Bị ảnh hưởng bởi tường/khoảng cách", "Cần cấu hình bảo mật tốt"],
    color: "purple",
    icon: <Wifi />,
  },
  {
    id: "bluetooth",
    label: "Bluetooth",
    viName: "Không dây cá nhân",
    signal: "Sóng radio phạm vi ngắn",
    scope: "Tai nghe, chuột, bàn phím, đồng hồ thông minh",
    bestFor: "Thiết bị cá nhân gần nhau, ít dữ liệu",
    summary: "Bluetooth phù hợp cho kết nối cá nhân phạm vi rất gần, không dùng để thay WiFi tốc độ cao.",
    pros: ["Tiện cho thiết bị cá nhân", "Tiêu thụ điện thấp", "Không cần router", "Ghép nối nhanh"],
    cons: ["Phạm vi ngắn", "Tốc độ thấp hơn WiFi", "Không phù hợp truyền dữ liệu lớn", "Dễ nhiễu nếu môi trường đông thiết bị"],
    color: "blue",
    icon: <Bluetooth />,
  },
  {
    id: "cellular",
    label: "4G/5G",
    viName: "Mạng di động",
    signal: "Sóng di động qua trạm BTS",
    scope: "Ngoài đường, khu vực có vùng phủ sóng nhà mạng",
    bestFor: "Internet di động diện rộng",
    summary: "4G/5G là mạng di động do nhà mạng cung cấp, giúp điện thoại truy cập Internet khi không có WiFi.",
    pros: ["Phủ sóng rộng", "Dùng được khi di chuyển", "Không cần WiFi cố định", "5G có thể rất nhanh ở vùng tốt"],
    cons: ["Cần nhà mạng", "Phụ thuộc vùng phủ sóng", "Có thể giới hạn dung lượng", "Độ trễ/tốc độ dao động"],
    color: "emerald",
    icon: <RadioTower />,
  },
];

const colorClasses = {
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Network className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 1: Nền tảng mạng máy tính</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Bài 1.5
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <TransmissionConcept />
        <MediaExplorer />
        <WiredVsWireless />
        <CopperVsFiber />
        <WirelessCompare />
        <NetworkDiagrams />
        <SignalSimulator />
        <CliLab />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Cable size={16} /> Con đường cho dữ liệu di chuyển
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Đường truyền mạng:
            <span className="block text-cyan-400">có dây, cáp quang & không dây</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Sau khi biết thiết bị mạng làm gì, bài này giúp bạn hiểu dữ liệu đi qua môi trường nào: cáp đồng, cáp quang, WiFi, Bluetooth hay 4G/5G.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ý tưởng chính</p>
            <p><span className="text-cyan-300">Đường truyền</span> = môi trường vận chuyển dữ liệu giữa các thiết bị mạng</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <TransmissionPreview />
          <div className="mt-5 grid grid-cols-5 gap-2">
            {mediaTypes.map((item) => {
              const c = colorClasses[item.color];
              return (
                <div key={item.id} className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}>
                  <div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(item.icon, { size: 23 })}</div>
                  <p className="text-xs font-black text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu đường truyền mạng là gì.",
    "Phân biệt đường truyền có dây và không dây.",
    "Hiểu cáp đồng, cáp quang, WiFi, Bluetooth, 4G/5G.",
    "Biết ưu điểm và nhược điểm của từng loại đường truyền.",
    "Biết khi nào nên dùng cáp mạng, WiFi hoặc cáp quang.",
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

function TransmissionConcept() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Đường truyền mạng là gì?" icon={<Activity />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Ở các bài trước, bạn đã học mạng gồm thiết bị như Switch, Router, Modem, AP. Nhưng dữ liệu cần một <strong className="text-white">con đường</strong> để đi từ thiết bị này sang thiết bị khác.
            </p>
            <p>
              <strong className="text-white">Đường truyền mạng</strong> là môi trường giúp dữ liệu di chuyển. Nó có thể là dây mạng, cáp quang, sóng WiFi, Bluetooth hoặc sóng di động 4G/5G.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-1">Ví dụ:</p>
              <p className="text-sm text-slate-300">Laptop → Router → Internet → Server. Giữa mỗi thiết bị đều cần một đường truyền.</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-center gap-4 overflow-x-auto min-w-0">
              <DeviceBox icon={<Laptop />} label="Laptop" color="blue" />
              <MediumLine label="WiFi" color="purple" />
              <DeviceBox icon={<Router />} label="Router" color="emerald" />
              <MediumLine label="Cáp quang" color="cyan" />
              <DeviceBox icon={<Server />} label="Server" color="orange" />
            </div>
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Thiết bị là “trạm”, đường truyền là “con đường”, dữ liệu là “xe” chạy trên con đường đó.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaExplorer() {
  const [activeId, setActiveId] = useState("copper");
  const active = mediaTypes.find((item) => item.id === activeId);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khám phá từng loại đường truyền" icon={<CircleHelp />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {mediaTypes.map((item) => {
            const isActive = activeId === item.id;
            const ic = colorClasses[item.color];
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${ic.bg} ${ic.border} ${ic.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {React.cloneElement(item.icon, { size: 19 })}
                  <span className="font-black text-lg">{item.label}</span>
                </div>
                <p className="text-xs opacity-80">{item.viName}</p>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
              {React.cloneElement(active.icon, { size: 34 })}
            </div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.viName}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.label}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.summary}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
              <strong className={c.text}>Tín hiệu truyền:</strong> {active.signal}
            </div>
          </div>

          <div className="space-y-4">
            <InfoBox title="Thường dùng ở đâu?" value={active.scope} icon={<MapPin />} color={active.color} />
            <InfoBox title="Phù hợp nhất khi" value={active.bestFor} icon={<Gauge />} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WiredVsWireless() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Có dây và không dây khác nhau thế nào?" icon={<GitCompare />} />
      <div className="grid md:grid-cols-2 gap-6">
        <ComparePanel
          color="cyan"
          icon={<Cable />}
          title="Đường truyền có dây"
          subtitle="Cáp vật lý: cáp đồng, cáp quang"
          bullets={["Ổn định cao", "Ít bị nhiễu hơn WiFi", "Độ trễ thấp", "Phù hợp PC, server, camera, backbone"]}
          warning="Nhược điểm: cần kéo dây, kém linh hoạt, khó triển khai ở nơi không thể đi dây."
        />
        <ComparePanel
          color="purple"
          icon={<Wind />}
          title="Đường truyền không dây"
          subtitle="Sóng điện từ: WiFi, Bluetooth, 4G/5G"
          bullets={["Linh hoạt", "Không cần kéo dây", "Phù hợp thiết bị di động", "Dễ mở rộng vùng sử dụng"]}
          warning="Nhược điểm: dễ bị nhiễu, tốc độ dao động, bảo mật cần cấu hình tốt."
        />
      </div>
    </section>
  );
}

function CopperVsFiber() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Cáp đồng và cáp quang" icon={<Cable />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[780px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4 font-semibold">Tiêu chí</th>
                <th className="p-4 font-black text-orange-300">Cáp đồng</th>
                <th className="p-4 font-black text-cyan-300">Cáp quang</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <TableRow title="Tín hiệu truyền" values={["Điện", "Ánh sáng"]} />
              <TableRow title="Khoảng cách" values={["Ngắn hơn", "Xa hơn"]} />
              <TableRow title="Tốc độ" values={["Tốt trong LAN", "Rất cao"]} />
              <TableRow title="Chống nhiễu" values={["Trung bình", "Rất tốt"]} />
              <TableRow title="Chi phí triển khai nhỏ" values={["Rẻ hơn", "Đắt hơn"]} />
              <TableRow title="Thi công" values={["Dễ hơn", "Khó hơn"]} />
              <TableRow title="Dùng phổ biến ở" values={["Nhà, văn phòng, LAN", "ISP, data center, đường trục"]} last />
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <CableStandard name="Cat5e" speed="1 Gbps" desc="Phổ biến, đủ cho nhiều mạng gia đình/văn phòng" />
        <CableStandard name="Cat6" speed="1–10 Gbps tùy khoảng cách" desc="Tốt hơn Cat5e, thường dùng cho văn phòng mới" />
        <CableStandard name="Cat6a" speed="10 Gbps" desc="Chống nhiễu tốt hơn, dùng cho mạng cao hơn" />
      </div>
    </section>
  );
}

function WirelessCompare() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="WiFi, Bluetooth, 4G/5G khác nhau thế nào?" icon={<Radio />} />
      <div className="grid md:grid-cols-3 gap-4">
        <WirelessCard type={mediaTypes.find((m) => m.id === "bluetooth")} range="Rất gần" use="Tai nghe, chuột, bàn phím, đồng hồ" needCarrier="Không" />
        <WirelessCard type={mediaTypes.find((m) => m.id === "wifi")} range="Trong nhà/văn phòng" use="Kết nối thiết bị vào LAN/Internet" needCarrier="Không trực tiếp" />
        <WirelessCard type={mediaTypes.find((m) => m.id === "cellular")} range="Rộng theo vùng phủ sóng" use="Internet di động ngoài đường" needCarrier="Có" />
      </div>
    </section>
  );
}

function NetworkDiagrams() {
  const [mode, setMode] = useState("home");
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Sơ đồ thực tế" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("home")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "home" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Mạng gia đình</button>
          <button onClick={() => setMode("company")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "company" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Mạng công ty</button>
        </div>
        <div className="p-6 md:p-8">{mode === "home" ? <HomeDiagram /> : <CompanyDiagram />}</div>
      </div>
    </section>
  );
}

function SignalSimulator() {
  const scenarios = {
    copper: {
      title: "PC dùng cáp đồng truy cập Internet",
      color: "orange",
      icon: <Cable />,
      steps: [
        "PC tạo yêu cầu truy cập website.",
        "Card mạng Ethernet chuyển dữ liệu số thành tín hiệu điện.",
        "Tín hiệu điện chạy trong cáp đồng đến Router/Switch.",
        "Router xử lý IP, NAT, định tuyến rồi gửi ra Modem/ONT.",
        "Server phản hồi ngược lại qua Internet → Modem → Router → cáp đồng → PC.",
      ],
    },
    wifi: {
      title: "Laptop dùng WiFi",
      color: "purple",
      icon: <Wifi />,
      steps: [
        "Laptop tạo dữ liệu cần gửi, ví dụ mở website hoặc gửi tin nhắn.",
        "Card WiFi chuyển dữ liệu số thành sóng radio.",
        "Sóng WiFi truyền qua không gian đến Router WiFi hoặc AP.",
        "Router/AP nhận sóng và giải mã lại thành dữ liệu mạng.",
        "Dữ liệu tiếp tục đi ra Internet qua Router → Modem/ONT → ISP.",
      ],
    },
    fiber: {
      title: "Nhà mạng dùng cáp quang",
      color: "cyan",
      icon: <Sparkles />,
      steps: [
        "Thiết bị nhà mạng chuyển dữ liệu thành xung ánh sáng.",
        "Ánh sáng truyền trong lõi sợi quang rất nhỏ.",
        "Tín hiệu đi xa đến ONT/Modem quang nhà bạn.",
        "ONT chuyển ánh sáng thành dữ liệu mạng Ethernet.",
        "Router trong nhà tiếp tục chia mạng cho thiết bị dùng dây hoặc WiFi.",
      ],
    },
  };

  const [scenario, setScenario] = useState("copper");
  const [step, setStep] = useState(0);
  const current = scenarios[scenario];
  const c = colorClasses[current.color];

  const selectScenario = (key) => {
    setScenario(key);
    setStep(0);
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="emerald" title="Dữ liệu truyền qua đường truyền như thế nào?" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(scenarios).map(([key, item]) => (
            <button key={key} onClick={() => selectScenario(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${scenario === key ? `${colorClasses[item.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>
              {React.cloneElement(item.icon, { size: 16 })} {item.title}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[345px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{current.steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed">{current.steps[step]}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % current.steps.length)} className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors inline-flex items-center gap-2">
                {step === current.steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <SignalVisual scenario={scenario} activeStep={step} />
            <div className="mt-6 space-y-3">
              {current.steps.map((item, index) => (
                <button key={item} onClick={() => setStep(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${step === index ? `${c.bg} ${c.border}` : index < step ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${step === index ? `${c.solid} text-white` : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"}`}>{index < step ? <CheckCircle2 size={16} /> : index + 1}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("latency");
  const commands = {
    latency: {
      title: "Kiểm tra độ trễ đến router",
      command: "ping 192.168.1.1",
      output: ["Reply from 192.168.1.1: bytes=32 time<1ms TTL=64", "Reply from 192.168.1.1: bytes=32 time=1ms TTL=64"],
      note: "Nếu dùng dây mạng, thời gian đến router thường rất thấp. Nếu WiFi xa router, time có thể cao hoặc dao động hơn.",
    },
    route: {
      title: "Kiểm tra đường đi ra Internet",
      command: "tracert google.com  # Windows\ntraceroute google.com  # macOS/Linux",
      output: ["1   192.168.1.1      router nhà bạn", "2   10.20.0.1       nhà mạng / ISP", "3   203.113.x.x     hạ tầng Internet", "4   google.com      server đích"],
      note: "Lệnh này cho thấy dữ liệu đi qua các điểm trung gian nào, nhưng không cho biết trực tiếp đoạn nào là đồng hay quang.",
    },
    ip: {
      title: "Kiểm tra cấu hình IP",
      command: "ipconfig  # Windows\nip addr   # macOS/Linux",
      output: ["IPv4 Address . . . . . . . . . . : 192.168.1.25", "Default Gateway . . . . . . . . : 192.168.1.1", "Interface . . . . . . . . . . . : Wi-Fi"],
      note: "Bạn có thể xem máy đang dùng interface nào, địa chỉ IP là gì và gateway là gì.",
    },
  };
  const current = commands[tab];

  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Thực hành CLI liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">network terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <TerminalButton active={tab === "latency"} onClick={() => setTab("latency")} text="ping router" />
              <TerminalButton active={tab === "route"} onClick={() => setTab("route")} text="tracert / traceroute" />
              <TerminalButton active={tab === "ip"} onClick={() => setTab("ip")} text="ipconfig / ip addr" />
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@network</span><span className="text-slate-400">:</span><span className="text-blue-400">~</span><span className="text-slate-400">$ </span><span className="text-white">{current.command}</span></p>
              <div className="mt-5 space-y-2">{current.output.map((line) => <p key={line} className="text-green-400">{line}</p>)}</div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2"><Info size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3">
            <ExplainRow term="time<1ms" desc="Độ trễ rất thấp, thường gặp khi kết nối dây hoặc rất gần router." />
            <ExplainRow term="Interface" desc="Card mạng/interface đang dùng: Wi-Fi, Ethernet, v.v." />
            <ExplainRow term="Gateway" desc="Thiết bị trung gian để đi ra mạng khác, thường là router." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "WiFi nhanh bằng dây trong mọi trường hợp?", desc: "Không đúng. WiFi có thể nhanh, nhưng dễ bị ảnh hưởng bởi tường, khoảng cách, nhiều người dùng và nhiễu từ mạng hàng xóm.", good: "Thiết bị cần ổn định nên ưu tiên dây mạng.", icon: <Wifi /> },
    { title: "Cáp quang luôn cần cho mọi thiết bị?", desc: "Không cần. PC cách switch 10m dùng cáp đồng là hợp lý. Cáp quang phù hợp hơn cho khoảng cách xa hoặc đường trục.", good: "Gần dùng cáp đồng, xa hoặc tải lớn dùng cáp quang.", icon: <Sparkles /> },
    { title: "Có WiFi là chắc chắn có Internet?", desc: "Không chắc. WiFi chỉ là kết nối từ thiết bị đến router/AP. Router vẫn có thể mất kết nối Internet phía ngoài.", good: "WiFi OK không đồng nghĩa Internet OK.", icon: <Router /> },
    { title: "Bluetooth, WiFi và 4G/5G giống nhau?", desc: "Chúng đều không dây nhưng khác mục đích: Bluetooth cho phạm vi gần, WiFi cho LAN, 4G/5G cho Internet di động diện rộng.", good: "Cùng không dây, nhưng khác phạm vi và mục đích.", icon: <Bluetooth /> },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">11</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-orange-300">Cáp đồng</span> = tín hiệu điện, rẻ, phổ biến trong LAN</p>
              <p><span className="text-cyan-300">Cáp quang</span> = ánh sáng, rất nhanh, đi xa, ít nhiễu</p>
              <p><span className="text-purple-300">WiFi</span> = không dây cho nhà/văn phòng</p>
              <p><span className="text-blue-300">Bluetooth</span> = không dây cá nhân phạm vi ngắn</p>
              <p><span className="text-emerald-300">4G/5G</span> = Internet di động qua nhà mạng</p>
              <br />
              <p className="text-slate-500"># Chọn nhanh</p>
              <p className="text-slate-300">- Server/PC quan trọng: ưu tiên dây.</p>
              <p className="text-slate-300">- Đi xa/tải lớn: cân nhắc cáp quang.</p>
              <p className="text-slate-300">- Di động/linh hoạt: WiFi hoặc 4G/5G.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Đường truyền mạng là gì?", options: ["Mật khẩu WiFi", "Môi trường giúp dữ liệu di chuyển giữa các thiết bị", "Tên của máy tính", "Màn hình hiển thị mạng"], correct: 1, explanation: "Đường truyền là môi trường vận chuyển dữ liệu giữa các thiết bị, ví dụ cáp đồng, cáp quang, WiFi, Bluetooth, 4G/5G." },
  { question: "Cáp quang khác cáp đồng chủ yếu ở điểm nào?", options: ["Cáp quang truyền bằng ánh sáng, cáp đồng truyền bằng tín hiệu điện", "Cáp quang chỉ dùng cho chuột máy tính", "Cáp đồng không thể truyền dữ liệu", "Cáp đồng luôn nhanh hơn cáp quang ở mọi khoảng cách"], correct: 0, explanation: "Cáp đồng truyền tín hiệu điện qua lõi đồng; cáp quang truyền xung ánh sáng trong sợi quang." },
  { question: "Trong mạng gia đình, đoạn Router WiFi → Desktop thường dùng gì?", options: ["Bluetooth", "Cáp đồng Ethernet", "Sóng vệ tinh", "Không dùng đường truyền"], correct: 1, explanation: "Desktop nối dây với Router thường dùng cáp đồng Ethernet đầu RJ45." },
  { question: "Tai nghe kết nối với điện thoại thường dùng công nghệ nào?", options: ["Cáp quang", "Bluetooth", "WAN riêng", "Cáp đồng trục"], correct: 1, explanation: "Bluetooth phù hợp cho thiết bị cá nhân phạm vi gần như tai nghe, chuột, bàn phím, đồng hồ." },
  { question: "Vì sao Desktop dùng dây mạng thường ổn định hơn Phone dùng WiFi?", options: ["Vì dây ít bị ảnh hưởng bởi tường, khoảng cách và nhiễu sóng hơn WiFi", "Vì WiFi không truyền được dữ liệu", "Vì Desktop không cần IP", "Vì Bluetooth nhanh hơn cáp quang"], correct: 0, explanation: "Kết nối dây thường ít nhiễu, độ trễ thấp và ổn định hơn WiFi trong môi trường thực tế." },
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
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 1!</h4>
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
      <p className="text-slate-400 mb-4">Bạn đã hoàn thành Phần 1. Bài tiếp theo sẽ chuyển sang mô hình tầng logic của mạng.</p>
      <Link to="/phan-2-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 2.1 — Mô hình OSI 7 tầng tổng quan <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    purple: "bg-purple-500/20 text-purple-300",
    orange: "bg-orange-500/20 text-orange-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
  };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function TransmissionPreview() {
  const items = [
    { label: "PC", icon: <Laptop />, color: "blue" },
    { label: "Cáp đồng", icon: <Cable />, color: "orange" },
    { label: "Router", icon: <Router />, color: "emerald" },
    { label: "Cáp quang", icon: <Sparkles />, color: "cyan" },
    { label: "Internet", icon: <Globe2 />, color: "blue" },
  ];
  return <div className="space-y-3">{items.map((item, index) => <PathItem key={item.label} item={item} showArrow={index < items.length - 1} />)}</div>;
}

function PathItem({ item, showArrow }) {
  const c = colorClasses[item.color];
  return <div className="flex items-center gap-3"><div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl w-11 h-11 flex items-center justify-center shrink-0`}>{React.cloneElement(item.icon, { size: 22 })}</div><div className="text-white font-bold text-sm flex-1">{item.label}</div>{showArrow && <ArrowRight className="text-slate-600" size={18} />}</div>;
}

function DeviceBox({ icon, label, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl w-24 h-24 flex flex-col items-center justify-center text-center shrink-0`}><div className={c.text}>{React.cloneElement(icon, { size: 28 })}</div><p className="text-xs font-bold text-white mt-2">{label}</p></div>;
}

function MediumLine({ label, color }) {
  const c = colorClasses[color];
  return <div className="flex flex-col items-center shrink-0"><div className={`h-2 w-24 rounded-full ${c.solid} shadow-lg ${c.ring}`} /><p className={`${c.text} text-xs font-bold mt-2`}>{label}</p></div>;
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function ProsCons({ pros, cons }) {
  return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>;
}

function ComparePanel({ color, icon, title, subtitle, bullets, warning }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-2xl font-extrabold text-white mb-2">{title}</h3><p className={`${c.text} font-bold mb-5`}>{subtitle}</p><ul className="space-y-3 mb-5">{bullets.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 size={16} className={`${c.text} shrink-0 mt-0.5`} /> {item}</li>)}</ul><div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">{warning}</div></div>;
}

function TableRow({ title, values, last }) {
  return <tr className={`${last ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}><td className="p-4 font-bold text-slate-300">{title}</td>{values.map((v, i) => <td key={`${title}-${i}`} className="p-4 text-slate-400 leading-relaxed">{v}</td>)}</tr>;
}

function CableStandard({ name, speed, desc }) {
  return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-orange-500/40 transition-colors"><div className="text-orange-300 font-black text-xl mb-2">{name}</div><p className="text-white font-bold mb-2">{speed}</p><p className="text-sm text-slate-400 leading-relaxed">{desc}</p></div>;
}

function WirelessCard({ type, range, use, needCarrier }) {
  const c = colorClasses[type.color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6 hover:-translate-y-1 transition-all`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(type.icon, { size: 28 })}</div><h3 className="text-2xl font-extrabold text-white mb-2">{type.label}</h3><div className="space-y-3 text-sm"><InfoLine label="Phạm vi" value={range} /><InfoLine label="Dùng cho" value={use} /><InfoLine label="Cần nhà mạng?" value={needCarrier} /></div></div>;
}

function InfoLine({ label, value }) {
  return <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3"><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</p><p className="text-slate-300 mt-1">{value}</p></div>;
}

function HomeDiagram() {
  return <div className="space-y-6"><h3 className="text-xl font-bold text-white">Mạng gia đình</h3><div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto"><div className="flex items-center gap-4 min-w-[820px] justify-center"><DiagramBox icon={<Globe2 />} label="Internet nhà mạng" color="blue" /><MediumTag label="Cáp quang" color="cyan" /><DiagramBox icon={<SatelliteDish />} label="Modem/ONT" color="cyan" /><ArrowRight className="text-slate-600" /><DiagramBox icon={<Router />} label="Router WiFi" color="emerald" /><div className="grid grid-cols-2 gap-3"><DiagramBox icon={<MonitorSmartphone />} label="Desktop" color="orange" small /><DiagramBox icon={<Smartphone />} label="Phone/Laptop" color="purple" small /></div></div></div><p className="text-sm text-slate-400">Nhà mạng đến Modem/ONT thường dùng cáp quang; Router đến Desktop dùng cáp đồng; Router đến Phone/Laptop dùng WiFi.</p></div>;
}

function CompanyDiagram() {
  return <div className="space-y-6"><h3 className="text-xl font-bold text-white">Mạng công ty</h3><div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto"><div className="flex items-center gap-4 min-w-[920px] justify-center"><DiagramBox icon={<Globe2 />} label="Internet" color="blue" /><MediumTag label="Cáp quang" color="cyan" /><DiagramBox icon={<Router />} label="Router/Firewall" color="emerald" /><ArrowRight className="text-slate-600" /><DiagramBox icon={<EthernetPort />} label="Core Switch" color="orange" /><div className="grid grid-cols-3 gap-3"><DiagramBox icon={<Laptop />} label="PC" color="orange" small /><DiagramBox icon={<Server />} label="Server" color="orange" small /><DiagramBox icon={<EthernetPort />} label="Switch tầng khác" color="cyan" small /></div></div></div><p className="text-sm text-slate-400">Máy gần switch dùng cáp đồng; kết nối giữa tầng hoặc tòa nhà có thể dùng cáp quang; laptop/điện thoại dùng WiFi qua AP.</p></div>;
}

function DiagramBox({ icon, label, color, small }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl ${small ? "w-28 h-20" : "w-32 h-24"} flex flex-col items-center justify-center text-center shrink-0`}><div className={c.text}>{React.cloneElement(icon, { size: small ? 22 : 28 })}</div><p className="text-xs font-bold text-white mt-2">{label}</p></div>;
}

function MediumTag({ label, color }) {
  const c = colorClasses[color];
  return <div className="flex flex-col items-center shrink-0"><ArrowRight className={`${c.text} mb-1`} /><span className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-xs font-bold`}>{label}</span></div>;
}

function SignalVisual({ scenario, activeStep }) {
  const map = {
    copper: [
      { label: "PC", icon: <Laptop />, color: "blue" },
      { label: "Tín hiệu điện", icon: <Zap />, color: "orange" },
      { label: "Cáp đồng", icon: <Cable />, color: "orange" },
      { label: "Router", icon: <Router />, color: "emerald" },
      { label: "Internet", icon: <Globe2 />, color: "blue" },
    ],
    wifi: [
      { label: "Laptop", icon: <Laptop />, color: "blue" },
      { label: "Sóng WiFi", icon: <Wifi />, color: "purple" },
      { label: "AP/Router", icon: <Router />, color: "emerald" },
      { label: "Modem", icon: <SatelliteDish />, color: "cyan" },
      { label: "Internet", icon: <Globe2 />, color: "blue" },
    ],
    fiber: [
      { label: "Nhà mạng", icon: <TowerControl />, color: "emerald" },
      { label: "Ánh sáng", icon: <Sparkles />, color: "cyan" },
      { label: "Cáp quang", icon: <Cable />, color: "cyan" },
      { label: "ONT", icon: <SatelliteDish />, color: "orange" },
      { label: "Router", icon: <Router />, color: "emerald" },
    ],
  };
  const items = map[scenario];
  return <div className="space-y-3">{items.map((item, index) => { const c = colorClasses[item.color]; const active = index <= activeStep; return <div key={item.label} className={`flex items-center gap-3 p-3 rounded-2xl border ${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"}`}><div className={`${active ? c.text : "text-slate-600"}`}>{React.cloneElement(item.icon, { size: 22 })}</div><span className={`font-bold text-sm ${active ? "text-white" : "text-slate-500"}`}>{item.label}</span><div className="ml-auto text-xs text-slate-600">{index + 1}</div></div>; })}</div>;
}

function TerminalButton({ active, onClick, text }) {
  return <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${active ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{text}</button>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-green-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
