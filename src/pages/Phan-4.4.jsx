import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Boxes,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Cpu,
  Database,
  EthernetPort,
  Eye,
  FileText,
  Flag,
  Gauge,
  Globe2,
  Handshake,
  KeyRound,
  Layers,
  Link2,
  LockKeyhole,
  Network,
  Package,
  PackageCheck,
  PackageOpen,
  RadioTower,
  Router,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Shuffle,
  TableProperties,
  Terminal,
  UserCheck,
  Waypoints,
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

const protocols = [
  {
    id: "hdlc",
    name: "HDLC",
    full: "High-Level Data Link Control",
    vi: "Điều khiển liên kết dữ liệu mức cao",
    idea: "Giao thức Data Link dùng để truyền frame qua liên kết điểm-điểm hoặc đa điểm, đặc biệt thường gặp trong serial/WAN router-router.",
    uses: ["Serial WAN", "Router-router", "Point-to-point hoặc multipoint", "Hệ thống truyền dẫn cổ điển"],
    pros: ["Gọn", "Có framing", "Có FCS", "Có frame điều khiển như I/S/U frame"],
    cons: ["Kém linh hoạt hơn PPP trong nhiều môi trường", "Xác thực không phải điểm mạnh", "Hỗ trợ nhiều giao thức tầng mạng tùy triển khai"],
    color: "cyan",
    icon: <Router />,
  },
  {
    id: "ppp",
    name: "PPP",
    full: "Point-to-Point Protocol",
    vi: "Giao thức điểm-điểm",
    idea: "Giao thức Data Link cho kết nối trực tiếp giữa hai điểm, hỗ trợ thiết lập liên kết, xác thực và nhiều giao thức tầng mạng.",
    uses: ["Dial-up Internet", "WAN point-to-point", "Router-router", "PPP/PPPoE trong một số môi trường"],
    pros: ["Linh hoạt", "Có LCP/NCP", "Có thể xác thực PAP/CHAP", "Có trường Protocol rõ ràng"],
    cons: ["Phức tạp hơn HDLC", "Cần thương lượng liên kết", "Ít trực tiếp thấy trên PC hiện đại"],
    color: "emerald",
    icon: <Link2 />,
  },
];

const hdlcParts = [
  { id: "flag1", short: "Flag", name: "Flag", desc: "Đánh dấu bắt đầu frame. HDLC thường dùng bit flag 01111110.", color: "yellow", icon: <Flag /> },
  { id: "address", short: "Address", name: "Address", desc: "Địa chỉ hoặc nhận diện trạm trong liên kết.", color: "cyan", icon: <Router /> },
  { id: "control", short: "Control", name: "Control", desc: "Điều khiển loại frame, số thứ tự, ACK hoặc chức năng quản lý.", color: "purple", icon: <Settings /> },
  { id: "info", short: "Information", name: "Information", desc: "Dữ liệu thật, ví dụ IP packet được đóng gói bên trong frame.", color: "emerald", icon: <Package /> },
  { id: "fcs", short: "FCS", name: "FCS", desc: "Frame Check Sequence dùng để phát hiện lỗi frame.", color: "orange", icon: <ShieldCheck /> },
  { id: "flag2", short: "Flag", name: "Ending Flag", desc: "Đánh dấu kết thúc frame, thường cũng là 01111110.", color: "yellow", icon: <Flag /> },
];

const pppParts = [
  { id: "flag1", short: "Flag", name: "Flag", desc: "Đánh dấu bắt đầu PPP frame.", color: "yellow", icon: <Flag /> },
  { id: "address", short: "Address", name: "Address", desc: "Trong PPP thường có giá trị mặc định.", color: "cyan", icon: <Router /> },
  { id: "control", short: "Control", name: "Control", desc: "Trong PPP thường có giá trị mặc định.", color: "purple", icon: <Settings /> },
  { id: "protocol", short: "Protocol", name: "Protocol", desc: "Cho biết payload bên trong là IPv4, IPv6, LCP, NCP hoặc giao thức khác.", color: "blue", icon: <Code2 /> },
  { id: "info", short: "Information", name: "Information", desc: "Dữ liệu thật được PPP chở bên trong frame.", color: "emerald", icon: <Package /> },
  { id: "fcs", short: "FCS", name: "FCS", desc: "Kiểm tra lỗi frame PPP.", color: "orange", icon: <ShieldCheck /> },
  { id: "flag2", short: "Flag", name: "Ending Flag", desc: "Đánh dấu kết thúc PPP frame.", color: "yellow", icon: <Flag /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Waypoints className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyDataLinkProtocols />
        <ProtocolExplorer />
        <OsiAndEncapsulation />
        <FrameExplorer />
        <HdlcMechanism />
        <HdlcFrameTypes />
        <PppMechanism />
        <PppAuthSection />
        <ComparisonTable />
        <PreviousLessonsConnection />
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
            <Waypoints size={16} /> Giao thức cụ thể của tầng Data Link
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Giao thức
            <span className="block text-cyan-400">HDLC & PPP</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            HDLC và PPP là các giao thức Data Link quy định cách đóng gói, truyền, kiểm tra và quản lý frame trên liên kết trực tiếp giữa thiết bị mạng.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">HDLC</span> = gọn, serial/WAN, I/S/U frame.</p>
            <p><span className="text-emerald-300">PPP</span> = point-to-point, LCP, PAP/CHAP, NCP.</p>
            <p><span className="text-orange-300">Cả hai</span> = Data Link, frame, FCS.</p>
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
    "Hiểu HDLC là gì và dùng để làm gì.",
    "Hiểu PPP là gì và vì sao từng rất phổ biến.",
    "Nắm cấu trúc frame cơ bản của HDLC và PPP.",
    "Phân biệt HDLC và PPP.",
    "Liên hệ HDLC/PPP với Framing, Error Control và Flow Control.",
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

function WhyDataLinkProtocols() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần giao thức Data Link?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Ở các bài trước, bạn đã học frame là gì, kiểm tra lỗi bằng FCS/CRC, và điều chỉnh tốc độ gửi bằng flow control.</p>
            <p>Nhưng cần một bộ quy tắc cụ thể để quy định frame có trường nào, flag đặt ở đâu, kiểm tra lỗi ra sao, hai thiết bị bắt đầu và quản lý liên kết thế nào.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Định nghĩa:</p>
              <p>Giao thức Data Link quy định cách đóng gói, truyền, kiểm tra và quản lý frame giữa các thiết bị trên một liên kết.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <RuleCard title="Framing" text="Frame bắt đầu/kết thúc thế nào?" icon={<PackageCheck />} color="cyan" />
            <RuleCard title="Error Control" text="Kiểm tra lỗi bằng gì?" icon={<ShieldCheck />} color="orange" />
            <RuleCard title="Flow Control" text="Điều khiển truyền frame ra sao?" icon={<Gauge />} color="emerald" />
            <RuleCard title="Link Management" text="Thiết lập/quản lý liên kết thế nào?" icon={<Settings />} color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolExplorer() {
  const [activeId, setActiveId] = useState("ppp");
  const active = protocols.find((p) => p.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="HDLC và PPP là gì?" icon={<Search />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {protocols.map((proto) => {
            const pc = colorClasses[proto.color];
            const isActive = activeId === proto.id;
            return <button key={proto.id} onClick={() => setActiveId(proto.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${pc.bg} ${pc.border} ${pc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}><div className="flex items-center gap-2 mb-2">{React.cloneElement(proto.icon, { size: 20 })}<span className="font-black text-lg">{proto.name}</span></div><p className="text-xs opacity-80">{proto.full}</p></button>;
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.full}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-1">{active.name}</h3>
            <p className={`${c.text} font-bold mb-4`}>{active.vi}</p>
            <p className="text-slate-300 leading-relaxed mb-5">{active.idea}</p>
          </div>
          <div className="space-y-4">
            <ChipPanel title="Dùng trong" items={active.uses} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OsiAndEncapsulation() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Vị trí trong OSI và luồng đóng gói" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <OsiStack />
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <EncapsulationFlow />
        </div>
      </div>
    </section>
  );
}

function FrameExplorer() {
  const [type, setType] = useState("ppp");
  const [activeId, setActiveId] = useState(type === "ppp" ? "protocol" : "control");
  const parts = type === "ppp" ? pppParts : hdlcParts;
  const active = parts.find((p) => p.id === activeId) || parts[0];
  const c = colorClasses[active.color];
  const switchType = (next) => {
    setType(next);
    setActiveId(next === "ppp" ? "protocol" : "control");
  };
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Cấu trúc frame HDLC và PPP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => switchType("hdlc")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${type === "hdlc" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>HDLC Frame</button>
          <button onClick={() => switchType("ppp")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${type === "ppp" ? "bg-emerald-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>PPP Frame</button>
        </div>
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 overflow-x-auto">
          <FrameBar parts={parts} activeId={activeId} setActiveId={setActiveId} />
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{type.toUpperCase()} FIELD</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed">{active.desc}</p>
          </div>
          <div className="space-y-4">
            <InfoBox title="HDLC frame" value="Flag | Address | Control | Information | FCS | Flag" icon={<Router />} color="cyan" />
            <InfoBox title="PPP frame" value="Flag | Address | Control | Protocol | Information | FCS | Flag" icon={<Link2 />} color="emerald" />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">{type === "hdlc" ? "+-------+---------+---------+-------------+-----+-------+\n| Flag  | Address | Control | Information | FCS | Flag  |\n+-------+---------+---------+-------------+-----+-------+" : "+-------+---------+---------+----------+-------------+-----+-------+\n| Flag  | Address | Control | Protocol | Information | FCS | Flag  |\n+-------+---------+---------+----------+-------------+-----+-------+"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HdlcMechanism() {
  const steps = [
    { title: "Router A có IP packet", text: "Ví dụ Source IP 10.0.0.1, Destination IP 10.0.0.2.", code: "IP Packet", color: "cyan", icon: <Package /> },
    { title: "HDLC đóng gói packet", text: "HDLC thêm Flag, Address, Control, FCS và Flag kết thúc.", code: "Flag | Address | Control | IP Packet | FCS | Flag", color: "purple", icon: <PackageCheck /> },
    { title: "Truyền qua serial link", text: "Frame được biến thành bit và truyền qua liên kết vật lý.", code: "01111110 ...data... FCS 01111110", color: "orange", icon: <Cable /> },
    { title: "Router B kiểm tra frame", text: "Router B kiểm tra flag, control field và FCS.", code: "Flag hợp lệ? FCS đúng?", color: "yellow", icon: <ShieldCheck /> },
    { title: "Bóc frame", text: "Nếu hợp lệ, Router B lấy IP packet và chuyển lên Network Layer.", code: "HDLC Frame → IP Packet", color: "green", icon: <PackageOpen /> },
  ];
  return <MechanismSection number="6" color="cyan" title="Cơ chế hoạt động — HDLC" icon={<Router />} steps={steps} />;
}

function HdlcFrameTypes() {
  const items = [
    { title: "I-frame", full: "Information frame", text: "Mang dữ liệu thật, ví dụ packet tầng Network.", code: "I = Information = xe chở hàng", color: "emerald", icon: <Package /> },
    { title: "S-frame", full: "Supervisory frame", text: "Điều khiển luồng, ACK hoặc yêu cầu gửi lại.", code: "S = Supervisory = tín hiệu điều phối", color: "cyan", icon: <Gauge /> },
    { title: "U-frame", full: "Unnumbered frame", text: "Quản lý liên kết, thiết lập hoặc ngắt kết nối.", code: "U = Unnumbered = lệnh quản lý tuyến", color: "purple", icon: <Settings /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Ba loại frame trong HDLC" icon={<Boxes />} />
      <div className="grid lg:grid-cols-3 gap-4">
        {items.map((item) => <ConceptCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}

function PppMechanism() {
  const steps = [
    { title: "Thiết lập liên kết bằng LCP", text: "Hai đầu thương lượng tham số liên kết và kiểm tra chất lượng đường truyền.", code: "LCP = Link Control Protocol", color: "cyan", icon: <Handshake /> },
    { title: "Xác thực nếu cần", text: "PPP có thể dùng PAP hoặc CHAP để xác thực người kết nối.", code: "PAP / CHAP", color: "orange", icon: <UserCheck /> },
    { title: "Cấu hình giao thức mạng bằng NCP", text: "NCP chuẩn bị để chở IPv4, IPv6 hoặc giao thức tầng mạng khác.", code: "IPCP cho IPv4\nIPv6CP cho IPv6", color: "purple", icon: <Settings /> },
    { title: "Truyền dữ liệu", text: "PPP đóng packet vào frame và dùng trường Protocol để cho biết payload là gì.", code: "Protocol = IPv4 → payload là IPv4 packet", color: "emerald", icon: <PackageCheck /> },
  ];
  return <MechanismSection number="8" color="emerald" title="Cơ chế hoạt động — PPP" icon={<Link2 />} steps={steps} />;
}

function PppAuthSection() {
  const [mode, setMode] = useState("chap");
  const data = {
    pap: { title: "PAP", full: "Password Authentication Protocol", color: "orange", icon: <KeyRound />, text: "Client gửi username/password theo cách đơn giản để server kiểm tra. Dễ hiểu nhưng kém an toàn hơn CHAP.", code: "Client: username + password\nServer: đúng → cho kết nối" },
    chap: { title: "CHAP", full: "Challenge Handshake Authentication Protocol", color: "emerald", icon: <LockKeyhole />, text: "Server gửi thử thách, client dùng mật khẩu để tính câu trả lời. Password không bị gửi trực tiếp theo cách đơn giản.", code: "Server: challenge\nClient: response = f(password, challenge)\nServer: kiểm tra response" },
  };
  const active = data[mode];
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="orange" title="PPP: PAP và CHAP" icon={<UserCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("pap")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "pap" ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>PAP</button>
          <button onClick={() => setMode("chap")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "chap" ? "bg-emerald-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>CHAP</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 28 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.full}</p>
            <h3 className="text-3xl font-bold text-white mb-3 mt-2">{active.title}</h3>
            <p className="text-slate-300 leading-relaxed">{active.text}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">{active.code}</div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["Tên đầy đủ", "High-Level Data Link Control", "Point-to-Point Protocol"],
    ["Tầng hoạt động", "Data Link", "Data Link"],
    ["Kiểu kết nối", "Điểm-điểm hoặc đa điểm", "Chủ yếu điểm-điểm"],
    ["Hỗ trợ xác thực", "Không phải điểm mạnh chính", "Có: PAP/CHAP"],
    ["Hỗ trợ nhiều giao thức tầng mạng", "Tùy triển khai", "Có trường Protocol rõ ràng"],
    ["Dùng trong", "Serial WAN, router-router", "Dial-up, WAN point-to-point, router-router"],
    ["Độ linh hoạt", "Thấp hơn PPP trong nhiều môi trường", "Linh hoạt hơn"],
    ["Kiểm tra lỗi", "Có FCS", "Có FCS"],
    ["Framing", "Có", "Có"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="So sánh HDLC và PPP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">HDLC</th><th className="p-4 text-emerald-300">PPP</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, hdlc, ppp], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{hdlc}</td><td className="p-4 text-slate-300">{ppp}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PreviousLessonsConnection() {
  const items = [
    { title: "4.1 Framing", text: "HDLC và PPP đều định nghĩa frame cụ thể.", icon: <PackageCheck />, color: "cyan" },
    { title: "4.2 Error Control", text: "Cả hai đều có FCS để kiểm tra lỗi frame.", icon: <ShieldCheck />, color: "orange" },
    { title: "4.3 Flow Control", text: "HDLC có S-frame hỗ trợ điều khiển truyền dữ liệu; PPP thường dựa vào cơ chế khác ở tầng trên nếu cần tin cậy cao.", icon: <Gauge />, color: "emerald" },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="Liên hệ với 3 bài trước" icon={<Layers />} />
      <div className="grid lg:grid-cols-3 gap-4">
        {items.map((item) => <RuleCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ppp");
  const commands = {
    ppp: { title: "Cấu hình PPP trên serial interface", cmd: "Router(config)# interface serial 0/0/0\nRouter(config-if)# encapsulation ppp", output: "Interface Serial0/0/0\nEncapsulation PPP", note: "Ví dụ thường gặp trong Cisco Packet Tracer/GNS3 khi cấu hình kết nối WAN point-to-point." },
    hdlc: { title: "Cấu hình HDLC", cmd: "Router(config)# interface serial 0/0/0\nRouter(config-if)# encapsulation hdlc", output: "Interface Serial0/0/0\nEncapsulation HDLC", note: "HDLC có thể là encapsulation mặc định trên một số serial interface trong môi trường Cisco." },
    show: { title: "Kiểm tra interface", cmd: "Router# show interfaces serial 0/0/0", output: "Serial0/0/0 is up, line protocol is up\n  Encapsulation PPP\n  LCP Open\n  Open: IPCP", note: "LCP Open nghĩa là PPP đã thiết lập liên kết; IPCP Open nghĩa là IPv4 đã được cấu hình qua PPP." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / Packet Tracer: cấu hình encapsulation" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">hdlc ppp lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[280px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p className="text-green-300">{current.cmd}</p>
              <div className="mt-5 text-cyan-300">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="encapsulation ppp" desc="Chọn PPP làm giao thức đóng gói tầng Data Link." />
            <ExplainRow term="encapsulation hdlc" desc="Chọn HDLC làm giao thức đóng gói tầng Data Link." />
            <ExplainRow term="show interfaces" desc="Kiểm tra trạng thái interface và kiểu encapsulation." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "HDLC/PPP thay thế IP?", desc: "Không. Chúng đóng gói IP packet thành frame để truyền qua một liên kết cụ thể, không thay thế tầng Network.", good: "IP Packet nằm bên trong HDLC/PPP Frame.", icon: <Package /> },
    { title: "PPP chỉ là dial-up?", desc: "Không. PPP nổi tiếng trong dial-up nhưng cũng dùng trong các kết nối point-to-point khác, đặc biệt trong môi trường WAN/router.", good: "PPP = point-to-point, không chỉ dial-up.", icon: <Link2 /> },
    { title: "HDLC và PPP giống hệt nhau?", desc: "Không. Cả hai đều là Data Link protocol và có FCS, nhưng PPP linh hoạt hơn nhờ LCP/NCP, xác thực và trường Protocol.", good: "PPP linh hoạt hơn trong nhiều trường hợp.", icon: <Shuffle /> },
    { title: "FCS dùng để bảo mật?", desc: "Không. FCS dùng để phát hiện lỗi truyền dữ liệu, không mã hóa hoặc bảo mật nội dung.", good: "FCS = kiểm lỗi, không phải encryption.", icon: <ShieldCheck /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">14</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>HDLC và PPP đều thuộc Data Link Layer.</p>
              <p>Cả hai đều dùng frame và có FCS.</p>
              <p><span className="text-cyan-300">HDLC</span> = serial/WAN, gọn, có I/S/U frame.</p>
              <p><span className="text-emerald-300">PPP</span> = point-to-point, linh hoạt hơn.</p>
              <br />
              <p className="text-slate-500"># PPP đặc biệt vì</p>
              <p>LCP = thiết lập/quản lý liên kết.</p>
              <p>PAP/CHAP = xác thực.</p>
              <p>NCP = cấu hình giao thức mạng.</p>
              <p>Protocol field = chở IPv4/IPv6/giao thức khác.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "HDLC và PPP hoạt động ở tầng nào của mô hình OSI?", options: ["Physical Layer", "Data Link Layer", "Network Layer", "Application Layer"], correct: 1, explanation: "HDLC và PPP là giao thức tầng liên kết dữ liệu — Data Link Layer." },
  { question: "Trong PPP, LCP dùng để làm gì?", options: ["Phân giải tên miền thành IP", "Thiết lập, kiểm tra và quản lý liên kết PPP", "Mã hóa toàn bộ dữ liệu web", "Định tuyến packet qua nhiều router"], correct: 1, explanation: "LCP — Link Control Protocol — dùng để thiết lập, thương lượng, kiểm tra và quản lý liên kết PPP." },
  { question: "Điểm quan trọng của trường Protocol trong PPP là gì?", options: ["Cho biết payload bên trong là IPv4, IPv6, LCP hay giao thức khác", "Chỉ chứa mật khẩu", "Chỉ dùng để đổi MAC", "Chỉ dùng để đo độ dài cáp"], correct: 0, explanation: "Trường Protocol cho biết loại dữ liệu bên trong PPP frame, ví dụ IPv4 hoặc IPv6." },
  { question: "Vì sao PPP thường linh hoạt hơn HDLC?", options: ["Vì có LCP/NCP, xác thực PAP/CHAP và trường Protocol rõ ràng", "Vì PPP không cần frame", "Vì PPP thay thế hoàn toàn IP", "Vì PPP chỉ dùng cho WiFi"], correct: 0, explanation: "PPP linh hoạt nhờ thiết lập liên kết bằng LCP, cấu hình protocol bằng NCP, hỗ trợ xác thực và có trường Protocol." },
  { question: "FCS trong HDLC/PPP dùng để làm gì?", options: ["Phát hiện lỗi frame", "Mã hóa mật khẩu", "Chuyển tên miền thành IP", "Tăng sóng WiFi"], correct: 0, explanation: "FCS — Frame Check Sequence — dùng để kiểm tra và phát hiện lỗi frame." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu giao thức Data Link, bài tiếp theo học cách thiết bị LAN nhận diện nhau bằng MAC và cách ARP tìm MAC từ IP.</p>
      <Link to="/phan-4-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.5 — Địa chỉ MAC & ARP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function MechanismSection({ number, color, title, icon, steps }) {
  const [step, setStep] = useState(0);
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
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
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

function HeroPreview() { return <div className="space-y-4"><MiniProtocol item={protocols[0]} /><MiniProtocol item={protocols[1]} /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">IP Packet\n  ↓\nHDLC/PPP Frame\n  ↓\nBits / Signal</div></div>; }
function MiniProtocol({ item }) { const c = colorClasses[item.color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex gap-3 items-center`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(item.icon, { size: 22 })}</div><div><p className={`${c.text} font-black`}>{item.name}</p><p className="text-xs text-slate-400">{item.full}</p></div></div>; }
function RuleCard({ title, text, icon, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><div className={`${c.text} mb-3`}>{React.cloneElement(icon, { size: 28 })}</div><h4 className="text-white font-bold mb-2">{title}</h4><p className="text-sm text-slate-400 leading-relaxed">{text}</p></div>; }
function ChipPanel({ title, items, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-white font-bold mb-3">{title}</h4><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}</div></div>; }
function ProsCons({ pros, cons }) { return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>; }
function OsiStack() { const layers = ["Application Layer", "Transport Layer", "Network Layer ← IP Packet", "Data Link Layer ← HDLC / PPP Frame", "Physical Layer ← Bits / Signal"]; return <div className="space-y-3">{layers.map((l) => <div key={l} className={`rounded-2xl border p-4 font-bold ${l.startsWith("Data") ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : l.startsWith("Network") ? "bg-purple-500/10 border-purple-400/40 text-purple-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}>{l}</div>)}</div>; }
function EncapsulationFlow() { const items = ["Dữ liệu ứng dụng", "TCP/UDP Segment", "IP Packet", "HDLC hoặc PPP Frame", "Bits truyền trên đường vật lý"]; return <div className="space-y-3">{items.map((item, i) => <React.Fragment key={item}><div className={`rounded-2xl border p-4 text-center font-bold ${i === 3 ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-300"}`}>{item}</div>{i < items.length - 1 && <div className="flex justify-center"><ArrowDown className="text-slate-600" /></div>}</React.Fragment>)}</div>; }
function FrameBar({ parts, activeId, setActiveId }) { return <div className={`min-w-[860px] grid gap-2`} style={{ gridTemplateColumns: `repeat(${parts.length}, minmax(0, 1fr))` }}>{parts.map((part) => { const c = colorClasses[part.color]; const active = activeId === part.id; return <button key={part.id} onClick={() => setActiveId(part.id)} className={`${active ? `${c.bg} ${c.border} ${c.text}` : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center font-bold transition-colors`}><span>{part.short}</span></button>; })}</div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function ConceptCard({ title, full, text, code, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><p className={`${c.text} font-black text-sm uppercase tracking-wider mb-2`}>{full}</p><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
