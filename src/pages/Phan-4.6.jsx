import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Radio,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Cpu,
  EthernetPort,
  Eye,
  Gauge,
  Globe2,
  HardDrive,
  Layers,
  Lamp,
  Network,
  Package,
  PackageCheck,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
  Smartphone,
  TableProperties,
  Terminal,
  TrafficCone,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const colorClasses = {
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
  red: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-400/40", solid: "bg-red-500", ring: "shadow-red-500/20" },
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-400/40", solid: "bg-slate-600", ring: "shadow-slate-500/20" },
};

const frameFields = [
  { id: "preamble", short: "Preamble", name: "Preamble", desc: "Chuỗi bit giúp thiết bị nhận đồng bộ tín hiệu trước khi đọc frame.", color: "yellow", icon: <Binary /> },
  { id: "dst", short: "Destination MAC", name: "Destination MAC", desc: "Địa chỉ MAC của thiết bị nhận frame trong LAN.", color: "purple", icon: <EthernetPort /> },
  { id: "src", short: "Source MAC", name: "Source MAC", desc: "Địa chỉ MAC của thiết bị gửi frame.", color: "cyan", icon: <EthernetPort /> },
  { id: "type", short: "EtherType", name: "EtherType / Length", desc: "Cho biết payload bên trong là IPv4, ARP, IPv6 hoặc biểu diễn độ dài theo chuẩn 802.3.", color: "blue", icon: <TableProperties /> },
  { id: "payload", short: "Payload", name: "Payload / Data", desc: "Dữ liệu thật được chở bên trong frame, thường là IP packet hoặc ARP message.", color: "emerald", icon: <Package /> },
  { id: "fcs", short: "FCS", name: "Frame Check Sequence", desc: "Giá trị kiểm tra lỗi, thường dựa trên CRC để phát hiện frame bị hỏng.", color: "orange", icon: <ShieldCheck /> },
];

const speeds = [
  { name: "Ethernet", speed: "10 Mbps", note: "Đời cũ", color: "slate" },
  { name: "Fast Ethernet", speed: "100 Mbps", note: "Từng rất phổ biến", color: "blue" },
  { name: "Gigabit Ethernet", speed: "1 Gbps", note: "Rất phổ biến hiện nay", color: "emerald" },
  { name: "10 Gigabit Ethernet", speed: "10 Gbps", note: "Server, data center, doanh nghiệp", color: "cyan" },
  { name: "40/100 Gigabit Ethernet", speed: "40/100 Gbps", note: "Data center, mạng lõi", color: "purple" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <EthernetPort className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.6</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <EthernetIntro />
        <IeeeSection />
        <OsiPosition />
        <EthernetFrameExplorer />
        <HowItWorks />
        <SwitchMacLearning />
        <CsmaCdSection />
        <EthernetSpeeds />
        <CableAndMtu />
        <BroadcastSection />
        <EthernetVsWifi />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <EthernetPort size={16} /> Công nghệ LAN có dây phổ biến nhất
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ethernet
            <span className="block text-cyan-400">& chuẩn IEEE 802.3</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Ethernet là công nghệ mạng LAN có dây dùng frame và địa chỉ MAC để truyền dữ liệu. IEEE 802.3 là bộ chuẩn kỹ thuật định nghĩa Ethernet.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Ethernet</span> = LAN có dây.</p>
            <p><span className="text-emerald-300">802.3</span> = chuẩn định nghĩa Ethernet.</p>
            <p><span className="text-orange-300">Frame</span> = MAC đích + MAC nguồn + Type + Payload + FCS.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu Ethernet là gì và vì sao phổ biến trong LAN.",
    "Biết IEEE 802.3 quy định điều gì.",
    "Nắm cấu trúc cơ bản của Ethernet frame.",
    "Hiểu Ethernet dùng MAC để chuyển frame trong LAN.",
    "Biết vai trò của CSMA/CD, tốc độ Ethernet, MTU và broadcast.",
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

function EthernetIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Ethernet là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">Ethernet</strong> là công nghệ mạng LAN có dây phổ biến nhất hiện nay.</p>
            <p>Khi bạn cắm dây mạng từ PC vào switch, router hoặc modem, rất có thể bạn đang dùng Ethernet.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>Ethernet là công nghệ mạng LAN có dây dùng frame và địa chỉ MAC để truyền dữ liệu giữa các thiết bị.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <LanDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function IeeeSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="IEEE 802.3 là gì?" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="IEEE" icon={<Award />} color="cyan" text="Tổ chức tiêu chuẩn kỹ thuật, ban hành nhiều chuẩn công nghệ." code="IEEE = tổ chức tiêu chuẩn" />
        <ConceptCard title="802" icon={<Network />} color="purple" text="Nhóm chuẩn liên quan đến mạng LAN/MAN." code="802 = LAN/MAN standards" />
        <ConceptCard title="802.3" icon={<EthernetPort />} color="emerald" text="Nhóm chuẩn dành cho Ethernet." code="802.3 = Ethernet" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-4">
        <InfoBox title="Ví dụ đời thường" value="Ethernet giống xe máy; IEEE 802.3 giống luật/quy chuẩn kỹ thuật để xe vận hành đúng cách." icon={<Lamp />} color="orange" />
        <InfoBox title="Kỹ thuật" value="Ethernet là công nghệ; IEEE 802.3 là bộ quy tắc chuẩn hóa Ethernet hoạt động ra sao." icon={<CheckCircle2 />} color="green" />
      </div>
    </section>
  );
}

function OsiPosition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Ethernet nằm ở đâu trong OSI?" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><OsiStack /></div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-white font-bold text-xl mb-4">Ethernet bao phủ 2 phần</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ConceptCard title="Data Link" icon={<PackageCheck />} color="cyan" text="Frame, địa chỉ MAC, EtherType, FCS/CRC." code="Ethernet Frame" />
            <ConceptCard title="Physical" icon={<Cable />} color="orange" text="Cáp mạng, tín hiệu điện/quang, tốc độ truyền." code="Bits / Signal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EthernetFrameExplorer() {
  const [activeId, setActiveId] = useState("dst");
  const active = frameFields.find((f) => f.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Cấu trúc Ethernet frame" icon={<Package />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 overflow-x-auto">
          <FrameBar activeId={activeId} setActiveId={setActiveId} />
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Ethernet field</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed">{active.desc}</p>
          </div>
          <div className="space-y-4">
            <InfoBox title="EtherType phổ biến" value="0x0800 = IPv4\n0x0806 = ARP\n0x86DD = IPv6" icon={<TableProperties />} color="blue" />
            <InfoBox title="MTU phổ biến" value="Ethernet payload thường tối đa 1500 bytes; frame chuẩn thường 64–1518 bytes." icon={<Gauge />} color="emerald" />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">+----------+------------------+------------------+-----------+-------------+------+\n| Preamble | Destination MAC  | Source MAC       | EtherType | Payload     | FCS  |\n+----------+------------------+------------------+-----------+-------------+------+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Ứng dụng tạo dữ liệu", text: "Ví dụ Máy A muốn gửi dữ liệu đến Máy B.", code: "Application Data", color: "purple", icon: <Cpu /> },
    { title: "Network Layer tạo IP packet", text: "Packet có Source IP và Destination IP.", code: "Source IP = 192.168.1.10\nDestination IP = 192.168.1.20", color: "cyan", icon: <Globe2 /> },
    { title: "Máy A cần MAC của Máy B", text: "Nếu chưa biết MAC, Máy A dùng ARP để tìm MAC của IP 192.168.1.20.", code: "ARP: Who has 192.168.1.20?", color: "orange", icon: <Search /> },
    { title: "Tạo Ethernet frame", text: "Data Link đóng IP packet vào Ethernet frame.", code: "Dst MAC = BB:BB...\nSrc MAC = AA:AA...\nEtherType = IPv4\nPayload = IP Packet", color: "emerald", icon: <PackageCheck /> },
    { title: "Physical Layer truyền tín hiệu", text: "Frame thành bit, bit thành tín hiệu điện/quang qua cáp.", code: "Frame → 101010... → Signal", color: "yellow", icon: <Cable /> },
    { title: "Switch chuyển frame", text: "Switch đọc Destination MAC và chuyển frame ra đúng cổng.", code: "Destination MAC = BB:BB...", color: "blue", icon: <Network /> },
    { title: "Máy B nhận frame", text: "Máy B kiểm tra MAC đích, FCS, EtherType rồi đưa payload lên tầng trên.", code: "FCS đúng? EtherType IPv4?", color: "green", icon: <CheckCircle2 /> },
  ];
  const [step, setStep] = useState(0);
  return <StepSection number="6" color="green" title="Cơ chế hoạt động Ethernet" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function SwitchMacLearning() {
  const [learned, setLearned] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Switch đọc MAC và chuyển frame" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Switch học MAC" icon={<Network />} color="cyan" text="Switch đọc Source MAC để học thiết bị nào nằm ở cổng nào." code="Source MAC AA:AA... nằm ở port 1" />
            <button onClick={() => setLearned(!learned)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${learned ? "bg-green-500 text-white" : "bg-cyan-500 text-white"}`}>{learned ? "MAC table đã biết Máy B" : "MAC table chưa biết Máy B"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SwitchDiagram learned={learned} />
            <MacTable learned={learned} />
            <div className={`rounded-2xl border p-4 text-sm ${learned ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {learned ? "Switch biết MAC B nằm ở port 2, nên chuyển frame đúng cổng." : "Switch chưa biết MAC B nằm ở đâu, nên có thể flood frame ra nhiều cổng trong cùng VLAN."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CsmaCdSection() {
  const [modern, setModern] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="yellow" title="Ethernet và CSMA/CD" icon={<TrafficCone />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="CSMA/CD" icon={<RadioTower />} color="yellow" text="Carrier Sense Multiple Access with Collision Detection: lắng nghe đường truyền, nhiều thiết bị cùng truy cập, phát hiện va chạm." code="Listen → Send → Detect collision → Backoff → Retry" />
            <button onClick={() => setModern(!modern)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${modern ? "bg-green-500 text-white" : "bg-yellow-500 text-slate-950"}`}>{modern ? "Ethernet hiện đại: Switch Full-duplex" : "Ethernet cũ: Hub Half-duplex"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {modern ? <ModernEthernetVisual /> : <HubCollisionVisual />}
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${modern ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-yellow-500/10 border-yellow-400/40 text-yellow-300"}`}>
              {modern ? "Switch full-duplex hiện đại gần như không còn collision kiểu hub cũ." : "Hub/half-duplex dùng chung môi trường truyền nên có thể collision, CSMA/CD từng rất quan trọng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EthernetSpeeds() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="purple" title="Các tốc độ Ethernet phổ biến" icon={<Gauge />} />
      <div className="grid md:grid-cols-5 gap-3">
        {speeds.map((item) => {
          const c = colorClasses[item.color];
          return <div key={item.name} className={`${c.bg} ${c.border} border rounded-3xl p-5`}><p className={`${c.text} font-black text-lg`}>{item.speed}</p><h3 className="text-white font-bold mt-2">{item.name}</h3><p className="text-xs text-slate-400 mt-3 leading-relaxed">{item.note}</p></div>;
        })}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <NameDecoder />
      </div>
    </section>
  );
}

function CableAndMtu() {
  const [mtu, setMtu] = useState(1500);
  const frameSize = mtu + 18;
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="Cáp Ethernet và kích thước frame" icon={<Cable />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Ethernet dùng loại cáp nào?</h3>
          <div className="space-y-4">
            <InfoBox title="Twisted Pair" value="RJ45 Ethernet cable: Cat5e, Cat6, Cat6a, Cat7/Cat8." icon={<EthernetPort />} color="emerald" />
            <InfoBox title="Fiber Optic" value="Dùng cho khoảng cách xa, tốc độ cao, data center và backbone." icon={<Cable />} color="cyan" />
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">MTU và frame size</h3>
          <Slider label="Payload / MTU" value={mtu} setValue={setMtu} min={64} max={9000} suffix=" bytes" color="orange" />
          <div className="grid grid-cols-2 gap-4 mt-5">
            <StatBox title="Payload" value={`${mtu} B`} color="emerald" />
            <StatBox title="Frame xấp xỉ" value={`${frameSize} B`} color="orange" />
          </div>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">Ethernet phổ biến có MTU 1500 bytes. Frame chuẩn thường tối thiểu 64 bytes và tối đa 1518 bytes, chưa tính một số phần mở rộng.</p>
        </div>
      </div>
    </section>
  );
}

function BroadcastSection() {
  const [mode, setMode] = useState("arp");
  const isArp = mode === "arp";
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="red" title="Ethernet và Broadcast" icon={<Broadcast />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Broadcast MAC" icon={<Broadcast />} color="red" text="Địa chỉ MAC đặc biệt dùng để gửi frame đến tất cả thiết bị trong cùng LAN/VLAN." code="FF:FF:FF:FF:FF:FF" />
            <div className="flex gap-2">
              <button onClick={() => setMode("arp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${isArp ? "bg-red-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>ARP Broadcast</button>
              <button onClick={() => setMode("unicast")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${!isArp ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Unicast</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <FrameView dstMac={isArp ? "FF:FF:FF:FF:FF:FF" : "BB:BB:BB:BB:BB:BB"} srcMac="AA:AA:AA:AA:AA:AA" type={isArp ? "ARP" : "IPv4"} payload={isArp ? "Who has 192.168.1.20?" : "IP Packet"} color={isArp ? "red" : "green"} />
            <div className={`rounded-2xl border p-4 text-sm ${isArp ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>{isArp ? "Switch sẽ flood broadcast frame ra các cổng trong cùng VLAN." : "Switch chuyển frame trực tiếp đến cổng có MAC đích nếu đã biết."}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EthernetVsWifi() {
  const rows = [
    ["Môi trường truyền", "Dây mạng", "Sóng vô tuyến"],
    ["Chuẩn phổ biến", "IEEE 802.3", "IEEE 802.11"],
    ["Độ ổn định", "Thường ổn định hơn", "Dễ bị nhiễu hơn"],
    ["Tốc độ thực tế", "Thường cao và ổn định", "Phụ thuộc sóng, khoảng cách, vật cản"],
    ["Bảo mật vật lý", "Phải cắm dây", "Có thể bị bắt sóng từ xa"],
    ["Dùng trong", "LAN có dây", "LAN không dây"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="cyan" title="So sánh Ethernet với WiFi" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">Ethernet</th><th className="p-4 text-purple-300">WiFi</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([criteria, eth, wifi], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{eth}</td><td className="p-4 text-slate-300">{wifi}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("mac");
  const commands = {
    mac: { title: "Xem MAC address", cmd: "# Windows\nipconfig /all\n\n# Linux/macOS\nifconfig\n# hoặc Linux\nip link", output: "Physical Address . . . : AA-BB-CC-11-22-33\nlink/ether aa:bb:cc:11:22:33", note: "Tìm Physical Address hoặc link/ether để xem MAC của card mạng." },
    speed: { title: "Xem tốc độ card mạng", cmd: "# Windows PowerShell\nGet-NetAdapter\n\n# Linux\nethtool eth0", output: "Speed: 1000Mb/s\nDuplex: Full", note: "1000Mb/s = 1 Gbps. Full duplex nghĩa là gửi và nhận đồng thời." },
    wireshark: { title: "Quan sát Ethernet frame", cmd: "arp\neth.addr == aa:bb:cc:11:22:33", output: "Ethernet II\n  Destination: ...\n  Source: ...\n  Type: IPv4 / ARP / IPv6", note: "Wireshark hiển thị rõ Destination, Source và Type của Ethernet frame." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="blue" title="CLI / Wireshark liên quan Ethernet" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">ethernet lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[290px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@ethernet</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="Ethernet II" desc="Dạng Ethernet frame phổ biến trong Wireshark." />
            <ExplainRow term="Type: IPv4/ARP/IPv6" desc="Cho biết payload bên trong frame là gì." />
            <ExplainRow term="Full duplex" desc="Thiết bị có thể gửi và nhận đồng thời." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Ethernet là WiFi?", desc: "Không. Ethernet là LAN có dây theo IEEE 802.3; WiFi là LAN không dây theo IEEE 802.11.", good: "802.3 = Ethernet; 802.11 = WiFi.", icon: <Wifi /> },
    { title: "Ethernet chỉ thuộc Layer 2?", desc: "Không hoàn toàn. Ethernet liên quan cả Data Link và Physical: frame/MAC ở Layer 2, cáp/tín hiệu ở Layer 1.", good: "Ethernet chạm cả L1 và L2.", icon: <Layers /> },
    { title: "CSMA/CD vẫn rất quan trọng trong switch hiện đại?", desc: "Về lịch sử thì quan trọng, nhưng trong switch full-duplex hiện đại, collision kiểu hub gần như không còn.", good: "Hub cũ cần CSMA/CD; switch full-duplex thì gần như không.", icon: <TrafficCone /> },
    { title: "Destination MAC luôn là MAC của server cuối cùng?", desc: "Không. Nếu gửi ra ngoài LAN, Destination MAC trong frame đầu tiên là MAC của gateway, không phải server Internet.", good: "MAC là theo từng chặng LAN.", icon: <Router /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">15</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>Ethernet = công nghệ LAN có dây phổ biến nhất.</p>
              <p>IEEE 802.3 = chuẩn định nghĩa Ethernet.</p>
              <p>Ethernet hoạt động ở Data Link + Physical.</p>
              <p>Ethernet dùng frame và MAC address.</p>
              <p>FCS/CRC giúp kiểm tra lỗi frame.</p>
              <br />
              <p className="text-slate-500"># Quan trọng</p>
              <p>EtherType 0x0800 = IPv4.</p>
              <p>EtherType 0x0806 = ARP.</p>
              <p>EtherType 0x86DD = IPv6.</p>
              <p>Broadcast MAC = FF:FF:FF:FF:FF:FF.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Ethernet chủ yếu dùng trong loại mạng nào?", options: ["Mạng LAN có dây", "Mạng vệ tinh", "Mạng Bluetooth cá nhân", "Mạng điện thoại 5G"], correct: 0, explanation: "Ethernet là công nghệ LAN có dây phổ biến nhất hiện nay." },
  { question: "IEEE 802.3 là gì?", options: ["Chuẩn WiFi", "Chuẩn định nghĩa Ethernet", "Giao thức định tuyến Internet", "Ứng dụng web"], correct: 1, explanation: "IEEE 802.3 là bộ chuẩn kỹ thuật định nghĩa Ethernet." },
  { question: "Trong Ethernet frame, Destination MAC dùng để làm gì?", options: ["Cho biết địa chỉ IP đích", "Cho biết thiết bị nhận frame trong LAN", "Cho biết số port TCP", "Cho biết tên miền website"], correct: 1, explanation: "Destination MAC cho biết thiết bị nhận frame trong mạng LAN." },
  { question: "EtherType 0x0806 thường biểu diễn payload nào?", options: ["IPv4", "ARP", "IPv6", "DNS"], correct: 1, explanation: "0x0806 là EtherType cho ARP." },
  { question: "Máy A gửi đến 8.8.8.8 qua gateway 192.168.1.1. Destination MAC trong frame đầu tiên là MAC của ai?", options: ["Server 8.8.8.8", "Router/default gateway", "Broadcast", "DNS server bất kỳ"], correct: 1, explanation: "Khi gửi ra ngoài LAN, frame đầu tiên được gửi đến gateway, nên Destination MAC là MAC của router/default gateway." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      {showResult && <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2"><div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div><button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button></div>}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi hiểu Ethernet frame và MAC, bài tiếp theo sẽ học Switch học địa chỉ MAC như thế nào và VLAN chia LAN thành nhiều mạng logic ra sao.</p>
      <Link to="/phan-4-7" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.7 — Switch & VLAN <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function StepSection({ number, color, title, icon, steps, step, setStep }) {
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[350px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">IP Packet\n  ↓\nEthernet Frame\n  ↓\nBits trên dây mạng</div><FrameView dstMac="BB:BB:BB:BB:BB:BB" srcMac="AA:AA:AA:AA:AA:AA" type="IPv4" payload="IP Packet" color="cyan" compact /><div className="grid grid-cols-2 gap-3"><MiniCard title="802.3" value="Ethernet" color="emerald" icon={<Award />} /><MiniCard title="FCS" value="CRC" color="orange" icon={<ShieldCheck />} /></div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 22 })}</div><p className={`${c.text} font-black`}>{title}</p><p className="text-xs text-slate-400 mt-1">{value}</p></div>; }
function LanDiagram() { return <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC" sub="Ethernet" color="cyan" icon={<LaptopIcon />} /><ArrowRight className="text-slate-500" /><Node label="Switch" sub="MAC table" color="purple" icon={<Network />} /><ArrowRight className="text-slate-500" /><Node label="Router" sub="Gateway" color="orange" icon={<Router />} /></div>; }
function LaptopIcon() { return <Server />; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function OsiStack() { const layers = ["Application Layer", "Transport Layer", "Network Layer ← IP Packet", "Data Link Layer ← Ethernet Frame, MAC", "Physical Layer ← Cáp mạng, tín hiệu"]; return <div className="space-y-3">{layers.map((l) => <div key={l} className={`rounded-2xl border p-4 font-bold ${l.startsWith("Data") ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : l.startsWith("Physical") ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}>{l}</div>)}</div>; }
function FrameBar({ activeId, setActiveId }) { return <div className="min-w-[920px] grid grid-cols-6 gap-2">{frameFields.map((field) => { const c = colorClasses[field.color]; const active = activeId === field.id; return <button key={field.id} onClick={() => setActiveId(field.id)} className={`${active ? `${c.bg} ${c.border} ${c.text}` : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center font-bold transition-colors`}><span>{field.short}</span></button>; })}</div>; }
function FrameView({ dstMac, srcMac, type, payload, color, compact = false }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 overflow-x-auto`}><p className={`${c.text} font-bold mb-3`}>Ethernet Frame</p><div className={`grid ${compact ? "grid-cols-2" : "grid-cols-1 md:grid-cols-4"} gap-2 font-mono text-xs`}><FrameCell label="Destination MAC" value={dstMac} color={color} /><FrameCell label="Source MAC" value={srcMac} color="cyan" /><FrameCell label="EtherType" value={type} color="blue" /><FrameCell label="Payload" value={payload} color="emerald" /></div></div>; }
function FrameCell({ label, value, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-xl p-3"><p className="text-slate-500 mb-1">{label}</p><p className={`${c.text} font-bold break-all`}>{value}</p></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function SwitchDiagram({ learned }) { return <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Máy A" sub="Port 1" color="cyan" icon={<Server />} /><ArrowRight className="text-cyan-300" /><Node label="Switch" sub={learned ? "Known unicast" : "Flood"} color="purple" icon={<Network />} /><ArrowRight className={learned ? "text-green-300" : "text-orange-300"} /><Node label="Máy B" sub="Port 2" color="emerald" icon={<Server />} /></div>; }
function MacTable({ learned }) { const rows = learned ? [["AA:AA:AA:AA:AA:AA", "Port 1"], ["BB:BB:BB:BB:BB:BB", "Port 2"]] : [["AA:AA:AA:AA:AA:AA", "Port 1"]]; return <div className="overflow-x-auto"><table className="w-full text-left min-w-[420px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">MAC</th><th className="p-3">Port</th></tr></thead><tbody>{rows.map(([mac, port]) => <tr key={mac} className="border-b border-slate-800 last:border-0"><td className="p-3 text-green-300 font-mono">{mac}</td><td className="p-3 text-slate-300 font-mono">{port}</td></tr>)}</tbody></table></div>; }
function HubCollisionVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC1" sub="send" color="cyan" icon={<Server />} /><ArrowRight className="text-red-300" /><Node label="Hub" sub="collision" color="red" icon={<Network />} /><ArrowRight className="text-red-300" /><Node label="PC2" sub="send" color="orange" icon={<Server />} /></div><div className="font-mono text-sm bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-red-300">PC1 gửi + PC2 gửi = collision\n→ dừng → chờ ngẫu nhiên → gửi lại</div></div>; }
function ModernEthernetVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC1" sub="full-duplex" color="cyan" icon={<Server />} /><ArrowRight className="text-green-300" /><Node label="Switch" sub="port riêng" color="green" icon={<Network />} /><ArrowRight className="text-green-300" /><Node label="PC2" sub="full-duplex" color="emerald" icon={<Server />} /></div><div className="font-mono text-sm bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-green-300">Mỗi cổng switch là liên kết riêng\nFull-duplex = gửi và nhận đồng thời</div></div>; }
function NameDecoder() { return <div><h3 className="text-xl font-bold text-white mb-4">Giải mã tên chuẩn: 1000BASE-T</h3><div className="grid md:grid-cols-3 gap-3"><InfoBox title="1000" value="Tốc độ 1000 Mbps = 1 Gbps." icon={<Gauge />} color="cyan" /><InfoBox title="BASE" value="Baseband, truyền tín hiệu trực tiếp." icon={<RadioTower />} color="orange" /><InfoBox title="T" value="Twisted pair, cáp xoắn đôi." icon={<Cable />} color="emerald" /></div></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value}{suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-2xl font-black mt-2`}>{value}</p></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
