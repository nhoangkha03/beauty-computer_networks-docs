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
  DoorOpen,
  EthernetPort,
  Eye,
  FileSearch,
  ShieldCheck,
  GitBranch,
  Globe2,
  Home,
  Info,
  KeyRound,
  Laptop,
  Lock,
  MapPin,
  MonitorSmartphone,
  Network,
  PlugZap,
  Printer,
  RadioTower,
  Router,
  SatelliteDish,
  Server,
  Settings,
  Share2,
  Shield,
  Smartphone,
  Split,
  TableProperties,
  Terminal,
  TowerControl,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const devices = [
  {
    id: "hub",
    label: "Hub",
    viName: "Bộ chia mạng thô sơ",
    role: "Kết nối nhiều thiết bị LAN nhưng gửi dữ liệu ra tất cả cổng.",
    basedOn: "Phát ra tất cả cổng",
    usedIn: "Mạng cũ, rất ít dùng hiện nay",
    simple: "Người hét thật to trong phòng: ai cần thì nghe.",
    pros: ["Rẻ", "Dễ dùng", "Cắm dây là chạy"],
    cons: ["Gửi dữ liệu lung tung", "Dễ nghẽn mạng", "Kém bảo mật", "Gần như không dùng trong mạng hiện đại"],
    color: "yellow",
    icon: <Share2 />,
  },
  {
    id: "switch",
    label: "Switch",
    viName: "Bộ chuyển mạch LAN",
    role: "Kết nối nhiều thiết bị trong cùng LAN và chuyển dữ liệu đúng cổng.",
    basedOn: "MAC address",
    usedIn: "LAN công ty, trường học, bệnh viện",
    simple: "Lễ tân thông minh biết người cần gặp đang ở phòng nào.",
    pros: ["Gửi đúng nơi", "Hiệu năng cao", "Bảo mật hơn Hub", "Rất phổ biến trong LAN"],
    cons: ["Đắt hơn Hub", "Switch quản lý cần cấu hình", "Muốn đi Internet vẫn cần Router"],
    color: "cyan",
    icon: <EthernetPort />,
  },
  {
    id: "router",
    label: "Router",
    viName: "Bộ định tuyến",
    role: "Kết nối các mạng khác nhau, ví dụ LAN nhà bạn với Internet.",
    basedOn: "IP address",
    usedIn: "LAN ra Internet, WAN, mạng doanh nghiệp",
    simple: "Trạm điều phối giữa nhiều thành phố.",
    pros: ["Kết nối được nhiều mạng", "Chọn đường đi cho dữ liệu", "Có NAT, DHCP, firewall cơ bản", "Rất quan trọng trong mạng hiện đại"],
    cons: ["Phức tạp hơn Switch", "Cần cấu hình đúng", "Router yếu có thể gây nghẽn"],
    color: "emerald",
    icon: <Router />,
  },
  {
    id: "modem",
    label: "Modem",
    viName: "Thiết bị nối nhà mạng",
    role: "Kết nối nhà bạn hoặc công ty với hạ tầng của nhà cung cấp Internet.",
    basedOn: "Tín hiệu đường truyền ISP",
    usedIn: "Nhà riêng, công ty, đường truyền Internet",
    simple: "Cửa nối tòa nhà với đường chính của thành phố.",
    pros: ["Nối được với nhà mạng", "Chuyển đổi tín hiệu đường truyền", "Là điểm vào Internet của đường truyền"],
    cons: ["Không thay thế vai trò Router đầy đủ", "Phụ thuộc loại đường truyền", "Dễ bị nhầm với Router WiFi tích hợp"],
    color: "orange",
    icon: <SatelliteDish />,
  },
  {
    id: "ap",
    label: "AP",
    viName: "Access Point / Điểm truy cập WiFi",
    role: "Phát WiFi để thiết bị không dây truy cập vào mạng LAN.",
    basedOn: "Sóng không dây 802.11",
    usedIn: "Nhà, văn phòng, trường học, khách sạn",
    simple: "Cửa không dây cho điện thoại/laptop đi vào mạng.",
    pros: ["Phát WiFi", "Nối thiết bị không dây vào LAN", "Mở rộng vùng phủ sóng", "Hỗ trợ roaming trong hệ thống lớn"],
    cons: ["Không nhất thiết là Router", "Cần đặt vị trí hợp lý", "Nhiễu sóng có thể làm mạng chậm"],
    color: "purple",
    icon: <Wifi />,
  },
];

const colorClasses = {
  yellow: {
    text: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/40",
    solid: "bg-yellow-500",
    ring: "shadow-yellow-500/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/40",
    solid: "bg-cyan-500",
    ring: "shadow-cyan-500/20",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/40",
    solid: "bg-emerald-500",
    ring: "shadow-emerald-500/20",
  },
  orange: {
    text: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-400/40",
    solid: "bg-orange-500",
    ring: "shadow-orange-500/20",
  },
  purple: {
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-400/40",
    solid: "bg-purple-500",
    ring: "shadow-purple-500/20",
  },
  blue: {
    text: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-400/40",
    solid: "bg-blue-500",
    ring: "shadow-blue-500/20",
  },
  red: {
    text: "text-red-300",
    bg: "bg-red-500/10",
    border: "border-red-400/40",
    solid: "bg-red-500",
    ring: "shadow-red-500/20",
  },
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
            Bài 1.4
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <DeviceOverview />
        <DeviceExplorer />
        <HubVsSwitch />
        <RouterModemAP />
        <HomeAndCompanyDiagrams />
        <DataFlowSimulator />
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
            <PlugZap size={16} /> Thiết bị nào làm nhiệm vụ gì?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hub, Switch, Router,
            <span className="block text-cyan-400">Modem và Access Point</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này giúp bạn đọc một sơ đồ mạng gia đình hoặc công ty và biết thiết bị nào chia mạng LAN, thiết bị nào phát WiFi, thiết bị nào đưa mạng ra Internet.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Switch</span> trong LAN, <span className="text-emerald-300">Router</span> ra mạng khác, <span className="text-orange-300">Modem</span> nối ISP, <span className="text-purple-300">AP</span> phát WiFi.</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <div className="space-y-3">
            <NetworkPathPreview />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {devices.map((device) => {
              const c = colorClasses[device.color];
              return (
                <div key={device.id} className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}>
                  <div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(device.icon, { size: 23 })}</div>
                  <p className="text-xs font-black text-white">{device.label}</p>
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
    "Hiểu Hub, Switch, Router, Modem, AP là gì.",
    "Biết thiết bị nào dùng trong LAN và thiết bị nào dùng để ra Internet.",
    "Phân biệt Hub và Switch.",
    "Phân biệt Router, Modem và Access Point.",
    "Hiểu cách các thiết bị phối hợp trong mạng gia đình hoặc công ty.",
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="1" color="cyan" title="Mục tiêu bài học" icon={<Award />} />
      <div className="grid md:grid-cols-5 gap-3">
        {goals.map((goal, index) => (
          <div key={goal} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{goal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DeviceOverview() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Bức tranh tổng quan" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <p className="text-slate-300 leading-relaxed mb-8">
          Trong bài trước, bạn đã học topology Star thường có thiết bị trung tâm. Bài này đi vào các thiết bị cụ thể: <strong className="text-white">Hub, Switch, Router, Modem, AP</strong>. Chúng có thể nằm riêng hoặc được tích hợp chung trong một thiết bị vật lý.
        </p>
        <div className="grid md:grid-cols-5 gap-4">
          {devices.map((device) => <DeviceSummaryCard key={device.id} device={device} />)}
        </div>
        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm text-slate-300">
          <strong className="text-blue-300">Điểm dễ nhầm:</strong> Một “cục WiFi” ở nhà thường không chỉ là một thiết bị đơn chức năng. Nó có thể tích hợp Router + Switch nhỏ + AP, thậm chí cả Modem/ONT.
        </div>
      </div>
    </section>
  );
}

function DeviceExplorer() {
  const [activeId, setActiveId] = useState("switch");
  const active = devices.find((item) => item.id === activeId);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khám phá từng thiết bị" icon={<CircleHelp />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {devices.map((device) => {
            const isActive = activeId === device.id;
            const dc = colorClasses[device.color];
            return (
              <button
                key={device.id}
                onClick={() => setActiveId(device.id)}
                className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${dc.bg} ${dc.border} ${dc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"
                  }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {React.cloneElement(device.icon, { size: 19 })}
                  <span className="font-black text-lg">{device.label}</span>
                </div>
                <p className="text-xs opacity-80">{device.viName}</p>
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
            <p className="text-slate-300 leading-relaxed mb-5">{active.role}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
              <strong className={c.text}>Ví dụ đời thường:</strong> {active.simple}
            </div>
          </div>

          <div className="space-y-4">
            <InfoBox title="Hoạt động dựa trên" value={active.basedOn} icon={<FileSearch />} color={active.color} />
            <InfoBox title="Thường dùng ở đâu?" value={active.usedIn} icon={<MapPin />} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HubVsSwitch() {
  const [mode, setMode] = useState("hub");
  const isHub = mode === "hub";

  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="yellow" title="Hub và Switch khác nhau thế nào?" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("hub")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isHub ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Hub gửi lung tung</button>
          <button onClick={() => setMode("switch")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${!isHub ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Switch gửi đúng cổng</button>
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
          <div className={`${isHub ? "bg-yellow-500/10 border-yellow-400/40" : "bg-cyan-500/10 border-cyan-400/40"} border rounded-3xl p-6`}>
            <h3 className="text-2xl font-bold text-white mb-3">PC1 gửi dữ liệu cho PC3</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {isHub
                ? "Hub không biết PC3 ở cổng nào, nên phát dữ liệu ra tất cả cổng còn lại. PC2 và PC4 vẫn nhận được rồi tự bỏ qua."
                : "Switch học địa chỉ MAC của từng thiết bị, nên chỉ chuyển dữ liệu ra đúng cổng nối với PC3."}
            </p>
            <HubSwitchDiagram mode={mode} />
          </div>

          <div className="space-y-4">
            <CompareCard title="Hub" icon={<Share2 />} color="yellow" lines={["Gửi dữ liệu ra tất cả cổng", "Dễ nghẽn và kém bảo mật", "Gần như không dùng trong mạng hiện đại"]} active={isHub} />
            <CompareCard title="Switch" icon={<EthernetPort />} color="cyan" lines={["Gửi dữ liệu đúng cổng", "Dựa vào MAC address", "Phổ biến trong LAN hiện đại"]} active={!isHub} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RouterModemAP() {
  const cards = [
    {
      title: "Modem",
      icon: <SatelliteDish />,
      color: "orange",
      main: "Nối với nhà mạng",
      detail: "Nhận tín hiệu từ đường truyền ISP và chuyển thành kết nối mạng cho thiết bị phía trong.",
    },
    {
      title: "Router",
      icon: <Router />,
      color: "emerald",
      main: "Nối các mạng khác nhau",
      detail: "Định tuyến, NAT, DHCP, firewall cơ bản; đưa LAN nhà bạn ra Internet.",
    },
    {
      title: "AP",
      icon: <Wifi />,
      color: "purple",
      main: "Phát WiFi",
      detail: "Cho điện thoại, laptop, tablet kết nối không dây vào mạng LAN.",
    },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Router, Modem và AP khác nhau thế nào?" icon={<CircleHelp />} />
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card) => {
          const c = colorClasses[card.color];
          return (
            <div key={card.title} className={`${c.bg} ${c.border} border rounded-3xl p-6 hover:-translate-y-1 transition-all`}>
              <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
                {React.cloneElement(card.icon, { size: 28 })}
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">{card.title}</h3>
              <p className={`${c.text} font-bold mb-3`}>{card.main}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{card.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-6">Thiết bị WiFi gia đình thường tích hợp nhiều vai trò</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <IntegratedRole icon={<Router />} title="Router" desc="Định tuyến, NAT, DHCP" color="emerald" />
          <IntegratedRole icon={<EthernetPort />} title="Switch nhỏ" desc="Có vài cổng LAN phía sau" color="cyan" />
          <IntegratedRole icon={<Wifi />} title="AP" desc="Phát WiFi 2.4GHz/5GHz" color="purple" />
          <IntegratedRole icon={<SatelliteDish />} title="Modem/ONT" desc="Có thể tích hợp tùy thiết bị nhà mạng" color="orange" />
        </div>
      </div>
    </section>
  );
}

function HomeAndCompanyDiagrams() {
  const [mode, setMode] = useState("home");

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Sơ đồ mạng gia đình và công ty" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("home")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "home" ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Mạng gia đình</button>
          <button onClick={() => setMode("company")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "company" ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Mạng công ty nhỏ</button>
        </div>

        <div className="p-6 md:p-8">
          {mode === "home" ? <HomeNetworkDiagram /> : <CompanyNetworkDiagram />}
        </div>
      </div>
    </section>
  );
}

function DataFlowSimulator() {
  const steps = [
    {
      title: "Laptop kết nối WiFi vào AP",
      device: "AP",
      desc: "Laptop không cắm dây mạng, nên gửi dữ liệu không dây đến Access Point. AP đưa dữ liệu vào LAN có dây.",
      icon: <Wifi />,
      color: "purple",
    },
    {
      title: "AP chuyển dữ liệu đến Switch",
      device: "Switch",
      desc: "Switch nhận frame từ AP, kiểm tra địa chỉ MAC và chuyển dữ liệu đến đúng hướng trong LAN.",
      icon: <EthernetPort />,
      color: "cyan",
    },
    {
      title: "Switch chuyển đến Router",
      device: "Default Gateway",
      desc: "Vì website nằm ngoài LAN, dữ liệu được gửi đến Router — thường là default gateway, ví dụ 192.168.1.1.",
      icon: <Router />,
      color: "emerald",
    },
    {
      title: "Router định tuyến ra Internet",
      device: "Router",
      desc: "Router kiểm tra chính sách, thực hiện NAT nếu cần, chọn đường đi và chuyển dữ liệu đến thiết bị WAN/Modem.",
      icon: <Shield />,
      color: "emerald",
    },
    {
      title: "Modem chuyển dữ liệu lên nhà mạng",
      device: "Modem / ISP",
      desc: "Modem chuyển dữ liệu từ mạng nội bộ sang đường truyền của nhà cung cấp Internet.",
      icon: <SatelliteDish />,
      color: "orange",
    },
    {
      title: "Server phản hồi ngược lại",
      device: "Internet → Laptop",
      desc: "Web Server trả dữ liệu về theo chiều ngược lại: Internet → Modem → Router → Switch → AP → Laptop.",
      icon: <Server />,
      color: "blue",
    },
  ];

  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="emerald" title="Dữ liệu đi qua các thiết bị như thế nào?" icon={<Activity />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[345px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
                {React.cloneElement(current.icon, { size: 32 })}
              </div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — {current.device}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed">{current.desc}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
              >
                Quay lại
              </button>
              <button
                onClick={() => setStep((s) => (s + 1) % steps.length)}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors inline-flex items-center gap-2"
              >
                {step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <DataFlowPath activeStep={step} />
            <div className="mt-6 space-y-3">
              {steps.map((item, index) => {
                const ic = colorClasses[item.color];
                return (
                  <button
                    key={item.title}
                    onClick={() => setStep(index)}
                    className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${step === index ? `${ic.bg} ${ic.border}` : index < step ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${step === index ? `${ic.solid} text-white` : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"}`}>
                      {index < step ? <CheckCircle2 size={16} /> : index + 1}
                    </div>
                    <div>
                      <p className="text-sm text-white font-bold">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.device}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ipconfig");
  const commands = {
    ipconfig: {
      title: "Xem IP và default gateway",
      command: "ipconfig",
      output: [
        "IPv4 Address . . . . . . . . . . : 192.168.1.50",
        "Default Gateway . . . . . . . . : 192.168.1.1",
        "DNS Servers . . . . . . . . . . : 8.8.8.8",
      ],
      note: "192.168.1.50 là IP của máy bạn. 192.168.1.1 thường là Router / default gateway.",
    },
    router: {
      title: "Kiểm tra kết nối đến Router",
      command: "ping 192.168.1.1",
      output: [
        "Reply from 192.168.1.1: bytes=32 time=2ms TTL=64",
        "Reply from 192.168.1.1: bytes=32 time=2ms TTL=64",
      ],
      note: "Nếu có phản hồi, máy bạn kết nối được đến Router trong LAN.",
    },
    internet: {
      title: "Kiểm tra kết nối Internet theo IP",
      command: "ping 8.8.8.8",
      output: [
        "Reply from 8.8.8.8: bytes=32 time=23ms TTL=117",
        "Reply from 8.8.8.8: bytes=32 time=22ms TTL=117",
      ],
      note: "Nếu ping 8.8.8.8 được, thường nghĩa là máy có đường ra Internet theo địa chỉ IP.",
    },
    dns: {
      title: "Kiểm tra phân giải tên miền",
      command: "ping google.com",
      output: [
        "Pinging google.com [142.250.190.14] with 32 bytes of data:",
        "Reply from 142.250.190.14: bytes=32 time=20ms TTL=117",
      ],
      note: "Nếu ping 8.8.8.8 được nhưng ping google.com không được, có thể lỗi DNS.",
    },
  };
  const current = commands[tab];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Thực hành CLI liên quan" icon={<Terminal />} />
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
              <TerminalButton active={tab === "ipconfig"} onClick={() => setTab("ipconfig")} text="ipconfig" />
              <TerminalButton active={tab === "router"} onClick={() => setTab("router")} text="ping router" />
              <TerminalButton active={tab === "internet"} onClick={() => setTab("internet")} text="ping 8.8.8.8" />
              <TerminalButton active={tab === "dns"} onClick={() => setTab("dns")} text="ping google.com" />
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p>
                <span className="text-green-400">student@network</span>
                <span className="text-slate-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$ </span>
                <span className="text-white">{current.command}</span>
              </p>
              <div className="mt-5 space-y-2">
                {current.output.map((line) => <p key={line} className="text-green-400">{line}</p>)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2"><Info size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3">
            <ExplainRow term="Default Gateway" desc="Cổng mặc định để thiết bị đi ra mạng khác, thường là Router." />
            <ExplainRow term="DNS" desc="Hệ thống biến tên miền như google.com thành địa chỉ IP." />
            <ExplainRow term="ISP" desc="Internet Service Provider — nhà cung cấp dịch vụ Internet." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    {
      title: "Router và Modem là một?",
      desc: "Không hẳn. Chúng có thể nằm trong cùng một thiết bị vật lý, nhưng vai trò khác nhau: Modem nối nhà mạng, Router chia mạng và định tuyến.",
      good: "Một hộp thiết bị có thể tích hợp nhiều vai trò.",
      icon: <Router />,
    },
    {
      title: "Switch và Router giống nhau?",
      desc: "Không giống. Switch kết nối thiết bị trong cùng LAN dựa vào MAC address; Router kết nối các mạng khác nhau dựa vào IP address.",
      good: "Switch = trong cùng khu. Router = sang khu khác.",
      icon: <EthernetPort />,
    },
    {
      title: "AP có phải Router không?",
      desc: "Không bắt buộc. AP chủ yếu phát WiFi và nối thiết bị không dây vào LAN. Router WiFi gia đình thường tích hợp AP nên dễ nhầm.",
      good: "AP = phát WiFi; Router = định tuyến.",
      icon: <Wifi />,
    },
    {
      title: "Hub còn nên dùng không?",
      desc: "Gần như không nên dùng trong mạng hiện đại vì chậm, kém bảo mật, dễ va chạm dữ liệu. Switch hiện nay rẻ và tốt hơn nhiều.",
      good: "Dùng Switch thay Hub trong hầu hết tình huống.",
      icon: <Share2 />,
    },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300">
              <CheckCircle2 size={16} className="inline mr-1" /> {item.good}
            </div>
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">10</span>
            Tóm tắt & Kiểm tra cuối bài
          </h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-yellow-300">Hub</span> = gửi dữ liệu ra tất cả cổng</p>
              <p><span className="text-cyan-300">Switch</span> = gửi đúng thiết bị trong LAN</p>
              <p><span className="text-emerald-300">Router</span> = nối các mạng khác nhau, đưa LAN ra Internet</p>
              <p><span className="text-orange-300">Modem</span> = nối nhà/công ty với nhà mạng</p>
              <p><span className="text-purple-300">AP</span> = phát WiFi cho thiết bị không dây</p>
              <br />
              <p className="text-slate-500"># Cặp dễ nhầm</p>
              <p className="text-slate-300">Switch dùng MAC, Router dùng IP.</p>
              <p className="text-slate-300">Modem nối ISP, Router định tuyến.</p>
              <p className="text-slate-300">AP phát WiFi, không nhất thiết là Router.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    question: "Thiết bị nào thường dùng để kết nối nhiều máy tính bằng dây trong cùng một mạng LAN?",
    options: ["Modem", "Switch", "AP", "Màn hình"],
    correct: 1,
    explanation: "Switch là thiết bị phổ biến để kết nối nhiều thiết bị có dây trong cùng mạng LAN.",
  },
  {
    question: "Router khác Switch chủ yếu ở điểm nào?",
    options: [
      "Router chỉ dùng để phát WiFi, Switch chỉ dùng để in tài liệu",
      "Router kết nối các mạng khác nhau, Switch kết nối thiết bị trong cùng LAN",
      "Router không dùng địa chỉ IP",
      "Switch luôn kết nối trực tiếp với nhà mạng",
    ],
    correct: 1,
    explanation: "Switch chuyển dữ liệu trong cùng LAN dựa vào MAC; Router kết nối các mạng khác nhau dựa vào IP.",
  },
  {
    question: "Trong sơ đồ Phone ))) AP ---- Switch ---- Router ---- Modem ---- Internet, thiết bị nào phát WiFi?",
    options: ["AP", "Switch", "Modem", "Server"],
    correct: 0,
    explanation: "AP là Access Point, nhiệm vụ chính là phát WiFi để thiết bị không dây truy cập vào LAN.",
  },
  {
    question: "Thiết bị nào kết nối nhà bạn/công ty với nhà cung cấp Internet?",
    options: ["Switch", "AP", "Modem", "Máy in"],
    correct: 2,
    explanation: "Modem/ONT là thiết bị kết nối đường truyền nhà mạng với mạng phía trong.",
  },
  {
    question: "Nếu ping 8.8.8.8 được nhưng ping google.com không được, khả năng cao lỗi ở đâu?",
    options: ["Màn hình", "DNS", "Bàn phím", "Dây sạc"],
    correct: 1,
    explanation: "Ping IP được nghĩa là có đường ra Internet theo IP. Ping tên miền không được thường gợi ý lỗi DNS.",
  },
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
    } else {
      setCurrentQ("finished");
    }
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
      <div className="flex justify-between items-center mb-4 text-sm font-medium">
        <span className="text-cyan-400">Câu hỏi {currentQ + 1}/{questions.length}</span>
        <span className="text-slate-500">Điểm: {score}</span>
      </div>
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
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}>
            <strong>Giải thích:</strong> {q.explanation}
          </div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">
            {currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
          </button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi biết thiết bị mạng làm gì, bài tiếp theo sẽ học dữ liệu đi qua môi trường truyền dẫn nào.</p>
      <Link to="/phan-1-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 1.5 — Đường truyền có dây, cáp quang và không dây <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    purple: "bg-purple-500/20 text-purple-300",
    green: "bg-green-500/20 text-green-300",
  };
  return (
    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
      <span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}>
        <span className="font-black">{number}</span>
        {React.cloneElement(icon, { size: 20 })}
      </span>
      {title}
    </h3>
  );
}

function NetworkPathPreview() {
  const items = [
    { label: "Laptop", icon: <Laptop />, color: "blue" },
    { label: "AP", icon: <Wifi />, color: "purple" },
    { label: "Switch", icon: <EthernetPort />, color: "cyan" },
    { label: "Router", icon: <Router />, color: "emerald" },
    { label: "Modem", icon: <SatelliteDish />, color: "orange" },
    { label: "Internet", icon: <Globe2 />, color: "blue" },
  ];
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const c = colorClasses[item.color];
        return (
          <div key={item.label} className="flex items-center gap-3">
            <div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl w-11 h-11 flex items-center justify-center shrink-0`}>{React.cloneElement(item.icon, { size: 22 })}</div>
            <div className="text-white font-bold text-sm flex-1">{item.label}</div>
            {index < items.length - 1 && <ArrowRight className="text-slate-600" size={18} />}
          </div>
        );
      })}
    </div>
  );
}

function DeviceSummaryCard({ device }) {
  const c = colorClasses[device.color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-3xl p-5 hover:-translate-y-1 transition-all`}>
      <div className={`${c.text} mb-4`}>{React.cloneElement(device.icon, { size: 30 })}</div>
      <h3 className="text-white font-black text-lg mb-1">{device.label}</h3>
      <p className={`${c.text} text-xs font-bold mb-3`}>{device.viName}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{device.role}</p>
    </div>
  );
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start">
      <div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function ProsCons({ pros, cons }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
        <h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4>
        <ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
        <h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4>
        <ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul>
      </div>
    </div>
  );
}

function HubSwitchDiagram({ mode }) {
  const isHub = mode === "hub";
  const centerColor = isHub ? "bg-yellow-500 text-slate-950 shadow-yellow-500/20" : "bg-cyan-500 text-white shadow-cyan-500/20";
  return (
    <div className="relative min-h-[280px] bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-hidden">
      <Node className="absolute top-4 left-1/2 -translate-x-1/2" label="PC2" />
      <Node className="absolute left-4 top-1/2 -translate-y-1/2" label="PC1" active />
      <Node className="absolute right-4 top-1/2 -translate-y-1/2" label="PC3" target />
      <Node className="absolute bottom-4 left-1/2 -translate-x-1/2" label="PC4" />
      <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-px h-52 bg-slate-700" />
      <div className="absolute left-[76px] right-[76px] top-1/2 -translate-y-1/2 h-px bg-slate-700" />
      {isHub ? (
        <>
          <PulseLine className="absolute top-[72px] left-1/2 -translate-x-1/2 w-px h-52 bg-yellow-400/70" />
          <PulseLine className="absolute left-[76px] right-[76px] top-1/2 -translate-y-1/2 h-px bg-yellow-400/70" />
        </>
      ) : (
        <PulseLine className="absolute left-[76px] right-[76px] top-1/2 -translate-y-1/2 h-px bg-cyan-400/70" />
      )}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl ${centerColor} flex items-center justify-center font-black shadow-lg z-10`}>
        {isHub ? "HUB" : "SW"}
      </div>
    </div>
  );
}

function Node({ label, active, target, className }) {
  return (
    <div className={`${className} z-20 w-16 h-16 rounded-2xl border flex flex-col items-center justify-center ${target ? "bg-green-500/10 border-green-400/40 text-green-300" : active ? "bg-blue-500/10 border-blue-400/40 text-blue-300" : "bg-slate-900 border-slate-700 text-slate-300"}`}>
      <Laptop size={20} />
      <span className="text-xs font-bold mt-1">{label}</span>
    </div>
  );
}

function PulseLine({ className }) {
  return <div className={`${className} rounded-full animate-pulse`} />;
}

function CompareCard({ title, icon, color, lines, active }) {
  const c = colorClasses[color];
  return (
    <div className={`${active ? `${c.bg} ${c.border}` : "bg-slate-950 border-slate-800"} border rounded-3xl p-5`}>
      <h4 className={`${active ? c.text : "text-slate-400"} font-black text-lg mb-4 flex items-center gap-2`}>{React.cloneElement(icon, { size: 20 })} {title}</h4>
      <ul className="space-y-3">
        {lines.map((line) => <li key={line} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 size={16} className={`${active ? c.text : "text-slate-500"} shrink-0 mt-0.5`} /> {line}</li>)}
      </ul>
    </div>
  );
}

function IntegratedRole({ icon, title, desc, color }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-2xl p-5`}>
      <div className={`${c.text} mb-3`}>{React.cloneElement(icon, { size: 25 })}</div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
}

function HomeNetworkDiagram() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Mạng gia đình phổ biến</h3>
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-[760px] justify-center">
          <DiagramBox icon={<Globe2 />} label="Internet" color="blue" />
          <ArrowRight className="text-slate-600" />
          <DiagramBox icon={<SatelliteDish />} label="Modem/ONT" color="orange" />
          <ArrowRight className="text-slate-600" />
          <DiagramBox icon={<Router />} label="Router WiFi" color="emerald" />
          <ArrowRight className="text-slate-600" />
          <div className="grid grid-cols-3 gap-3">
            <DiagramBox icon={<Laptop />} label="Laptop" color="blue" small />
            <DiagramBox icon={<Smartphone />} label="Phone" color="purple" small />
            <DiagramBox icon={<MonitorSmartphone />} label="Smart TV" color="cyan" small />
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-400">Trong nhiều trường hợp, Router WiFi ở nhà tích hợp Router + Switch nhỏ + Access Point + đôi khi cả Modem.</p>
    </div>
  );
}

function CompanyNetworkDiagram() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Mạng công ty nhỏ</h3>
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-[920px] justify-center">
          <DiagramBox icon={<Globe2 />} label="Internet" color="blue" />
          <ArrowRight className="text-slate-600" />
          <DiagramBox icon={<SatelliteDish />} label="Modem" color="orange" />
          <ArrowRight className="text-slate-600" />
          <DiagramBox icon={<Firewall />} label="Router/Firewall" color="emerald" />
          <ArrowRight className="text-slate-600" />
          <DiagramBox icon={<EthernetPort />} label="Switch" color="cyan" />
          <ArrowRight className="text-slate-600" />
          <div className="grid grid-cols-2 gap-3">
            <DiagramBox icon={<Laptop />} label="PC1" color="blue" small />
            <DiagramBox icon={<Server />} label="Server" color="emerald" small />
            <DiagramBox icon={<Printer />} label="Printer" color="yellow" small />
            <DiagramBox icon={<Wifi />} label="AP" color="purple" small />
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-400">Switch kết nối thiết bị trong LAN; Router/Firewall đưa LAN ra mạng ngoài; AP phát WiFi cho thiết bị không dây.</p>
    </div>
  );
}

function DiagramBox({ icon, label, color, small }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-2xl ${small ? "w-28 h-20" : "w-32 h-24"} flex flex-col items-center justify-center text-center`}>
      <div className={c.text}>{React.cloneElement(icon, { size: small ? 22 : 28 })}</div>
      <p className="text-xs font-bold text-white mt-2">{label}</p>
    </div>
  );
}

function DataFlowPath({ activeStep }) {
  const items = [
    { label: "Laptop", icon: <Laptop />, color: "blue" },
    { label: "AP", icon: <Wifi />, color: "purple" },
    { label: "Switch", icon: <EthernetPort />, color: "cyan" },
    { label: "Router", icon: <Router />, color: "emerald" },
    { label: "Modem", icon: <SatelliteDish />, color: "orange" },
    { label: "Server", icon: <Server />, color: "blue" },
  ];
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const c = colorClasses[item.color];
        const active = index <= activeStep;
        return (
          <div key={item.label} className={`flex items-center gap-3 p-3 rounded-2xl border ${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"}`}>
            <div className={`${active ? c.text : "text-slate-600"}`}>{React.cloneElement(item.icon, { size: 22 })}</div>
            <span className={`font-bold text-sm ${active ? "text-white" : "text-slate-500"}`}>{item.label}</span>
            <div className="ml-auto text-xs text-slate-600">{index + 1}</div>
          </div>
        );
      })}
    </div>
  );
}

function TerminalButton({ active, onClick, text }) {
  return <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${active ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{text}</button>;
}

function ExplainRow({ term, desc }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
      <p className="font-mono text-green-300 text-sm font-bold">{term}</p>
      <p className="text-slate-400 text-sm mt-1">{desc}</p>
    </div>
  );
}
