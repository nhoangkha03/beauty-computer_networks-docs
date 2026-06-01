import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Box,
  Braces,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Container,
  Cpu,
  EthernetPort,
  Eye,
  FileText,
  Flag,
  Globe2,
  HardDrive,
  Laptop,
  Layers,
  Lamp,
  Mail,
  Network,
  Package,
  PackageCheck,
  PackageOpen,
  Radar,
  Router,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
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

const frameParts = [
  { id: "start", name: "Start Flag", short: "Start", desc: "Báo hiệu điểm bắt đầu của frame trong một số giao thức.", color: "yellow", icon: <Flag /> },
  { id: "header", name: "Header", short: "Header", desc: "Phần đầu frame, chứa thông tin điều khiển, loại dữ liệu và địa chỉ.", color: "cyan", icon: <FileText /> },
  { id: "dst", name: "Destination Address", short: "MAC Đích", desc: "Địa chỉ thiết bị nhận frame, thường là MAC đích trong Ethernet.", color: "purple", icon: <Router /> },
  { id: "src", name: "Source Address", short: "MAC Nguồn", desc: "Địa chỉ thiết bị gửi frame, thường là MAC nguồn trong Ethernet.", color: "blue", icon: <Laptop /> },
  { id: "data", name: "Data / Payload", short: "Data", desc: "Dữ liệu thật được chở bên trong frame, thường là packet từ tầng Network.", color: "emerald", icon: <Package /> },
  { id: "trailer", name: "Trailer / FCS", short: "FCS", desc: "Phần cuối frame, thường chứa mã kiểm tra lỗi như FCS/CRC.", color: "orange", icon: <ShieldCheck /> },
  { id: "end", name: "End Flag", short: "End", desc: "Báo hiệu điểm kết thúc frame trong một số kỹ thuật framing.", color: "red", icon: <Flag /> },
];

const boundaryTechniques = [
  {
    id: "length",
    title: "Character Count / Length Field",
    vi: "Đếm số ký tự/byte",
    idea: "Frame có trường độ dài cho biết phải đọc bao nhiêu byte tiếp theo.",
    example: "[Length = 5][HELLO]",
    problem: "Nếu trường Length bị lỗi, máy nhận có thể đọc lệch toàn bộ frame.",
    color: "cyan",
    icon: <Binary />,
  },
  {
    id: "flag",
    title: "Flag Bytes",
    vi: "Dùng byte/cờ đánh dấu",
    idea: "Frame có cờ bắt đầu/kết thúc như 01111110 để báo ranh giới.",
    example: "01111110  DATA  01111110",
    problem: "Nếu dữ liệu thật chứa chuỗi giống FLAG thì có thể bị hiểu nhầm.",
    color: "yellow",
    icon: <Flag />,
  },
  {
    id: "byte",
    title: "Byte Stuffing",
    vi: "Chèn byte đặc biệt",
    idea: "Nếu dữ liệu chứa ký hiệu giống cờ, máy gửi chèn ESC để báo đó là dữ liệu thật.",
    example: "A END B → A ESC END B",
    problem: "Cần thêm byte ESC, làm dữ liệu truyền dài hơn một chút.",
    color: "emerald",
    icon: <Braces />,
  },
  {
    id: "bit",
    title: "Bit Stuffing",
    vi: "Chèn bit",
    idea: "Máy gửi chèn thêm bit 0 sau một chuỗi bit 1 liên tiếp để tránh trùng với flag.",
    example: "01111110 → 011111010",
    problem: "Bên nhận phải biết luật để bỏ bit chèn ra và khôi phục dữ liệu gốc.",
    color: "purple",
    icon: <Code2 />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <PackageCheck className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyFraming />
        <WhatIsFraming />
        <FrameStructureExplorer />
        <LayerFlow />
        <RealWorldExamples />
        <LanFrameExample />
        <HowItWorksSimulator />
        <BoundaryTechniques />
        <ErrorFrameSection />
        <WiresharkLab />
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
            <PackageCheck size={16} /> Từ bit thô đến frame rõ ràng
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Framing:
            <span className="block text-cyan-400">Đóng khung dữ liệu</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Sau Physical Layer, dữ liệu chỉ là dòng bit. Data Link Layer phải gom các bit đó thành từng frame có ranh giới, địa chỉ và thông tin kiểm tra lỗi.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Packet</span> đi xuống Data Link.</p>
            <p><span className="text-emerald-300">Frame</span> = Header + Packet/Data + Trailer.</p>
            <p><span className="text-orange-300">FCS</span> giúp phát hiện lỗi frame.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner min-w-0">
          <HeroFramePreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu Framing là gì trong mạng máy tính.",
    "Biết vì sao dữ liệu cần được đóng thành frame trước khi truyền qua mạng.",
    "Nắm cấu trúc cơ bản của một frame.",
    "Biết cách máy nhận xác định điểm bắt đầu và kết thúc của frame.",
    "Hiểu Framing liên quan thế nào đến Data Link Layer.",
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

function WhyFraming() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần Framing?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi gửi dữ liệu qua đường truyền, máy tính không gửi nguyên một file hoặc một câu theo cách con người nhìn thấy. Dữ liệu được chia nhỏ và biến thành chuỗi bit.</p>
            <p>Máy nhận cần biết: đoạn nào là một đơn vị hoàn chỉnh, đâu là đầu, đâu là cuối, gửi cho ai, từ ai, và frame có lỗi không.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Cực ngắn:</p>
              <p>Framing giúp chia dữ liệu thành từng khung rõ ràng để máy nhận biết và xử lý.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <BeforeAfterFraming />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsFraming() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Framing là gì?" icon={<PackageCheck />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Framing" icon={<PackageCheck />} color="emerald" text="Quá trình đóng gói dữ liệu thành frame ở tầng Data Link." code="Packet + thông tin Data Link = Frame" />
        <ConceptCard title="Frame" icon={<Box />} color="cyan" text="Đơn vị dữ liệu chính của tầng liên kết dữ liệu, dùng để truyền trong cùng một liên kết mạng." code="Frame = khung dữ liệu" />
        <ConceptCard title="Data Link Layer" icon={<EthernetPort />} color="purple" text="Tầng xử lý truyền dữ liệu giữa các thiết bị trong cùng liên kết, thường dùng địa chỉ MAC." code="MAC nguồn → MAC đích" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <OsiFramePosition />
      </div>
    </section>
  );
}

function FrameStructureExplorer() {
  const [activeId, setActiveId] = useState("dst");
  const active = frameParts.find((p) => p.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Frame gồm những phần nào?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 overflow-x-auto">
          <FrameBar activeId={activeId} setActiveId={setActiveId} />
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Thành phần frame</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed">{active.desc}</p>
          </div>
          <div className="space-y-4">
            <InfoBox title="Ví dụ Ethernet đơn giản" value="Preamble | MAC Đích | MAC Nguồn | Type | Data | FCS" icon={<EthernetPort />} color="cyan" />
            <InfoBox title="Ý tưởng đời thường" value="Frame giống phong bì: có người nhận, người gửi, nội dung và phần kiểm tra." icon={<Mail />} color="orange" />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 overflow-x-auto whitespace-pre">
              {`+----------+----------+----------+------+-----+
| Preamble | MAC Đích | MAC Nguồn| Data | FCS |
+----------+----------+----------+------+-----+`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerFlow() {
  const rows = [
    ["Application", "Data", "Dữ liệu ứng dụng"],
    ["Transport", "Segment", "TCP/UDP header"],
    ["Network", "Packet", "IP header"],
    ["Data Link", "Frame", "MAC header + Trailer/FCS"],
    ["Physical", "Bits", "Tín hiệu điện/ánh sáng/sóng"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Dữ liệu đi qua các tầng" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <VerticalPduFlow />
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tầng OSI</th><th className="p-4">Đơn vị dữ liệu</th><th className="p-4">Ý nghĩa</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([layer, pdu, note], i) => <tr key={layer} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{layer}</td><td className={pdu === "Frame" ? "p-4 text-cyan-300 font-black" : "p-4 text-slate-300"}>{pdu}</td><td className="p-4 text-slate-400">{note}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("mail");
  const examples = {
    mail: { title: "Gửi thư qua bưu điện", icon: <Mail />, color: "orange", text: "Nội dung thư cần phong bì có người nhận, người gửi và thông tin cần thiết. Frame cũng giống phong bì cho dữ liệu mạng.", code: "Dữ liệu thật = nội dung thư\nFrame = phong bì + nội dung + kiểm tra" },
    container: { title: "Xe container chở hàng", icon: <Container />, color: "cyan", text: "Hàng hóa được đóng vào container để vận chuyển theo từng đơn vị rõ ràng. Frame giúp dữ liệu không bị lộn xộn trên đường truyền.", code: "Hàng hóa → Container\nData → Frame" },
    stream: { title: "Dòng bit liên tục", icon: <Binary />, color: "purple", text: "Physical Layer chỉ thấy dòng bit. Data Link Layer phải chia dòng bit đó thành các frame có ranh giới rõ ràng.", code: "010101... → [Frame 1][Frame 2][Frame 3]" },
  };
  const current = examples[mode];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="purple" title="Ví dụ đời sống" icon={<Lamp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(examples).map(([key, item]) => <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? `${colorClasses[item.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.title}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
            <p className="text-slate-300 leading-relaxed">{current.text}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
        </div>
      </div>
    </section>
  );
}

function LanFrameExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Ví dụ kỹ thuật: Máy A gửi cho Máy B trong LAN" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <DeviceCard title="Máy A" ip="192.168.1.10" mac="AA:AA:AA:AA:AA:AA" color="blue" />
            <DeviceCard title="Máy B" ip="192.168.1.20" mac="BB:BB:BB:BB:BB:BB" color="emerald" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
            <div className="min-w-[760px] font-mono text-sm">
              <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1.2fr_0.7fr] gap-2 mb-2 text-center text-slate-500">
                <span>MAC Đích</span><span>MAC Nguồn</span><span>Type</span><span>Data</span><span>FCS</span>
              </div>
              <div className="grid grid-cols-[1.5fr_1.5fr_1fr_1.2fr_0.7fr] gap-2">
                <FrameCell text="BB:BB:BB:BB:BB:BB" color="purple" />
                <FrameCell text="AA:AA:AA:AA:AA:AA" color="blue" />
                <FrameCell text="IPv4" color="cyan" />
                <FrameCell text="Packet" color="emerald" />
                <FrameCell text="CRC" color="orange" />
              </div>
            </div>
            <div className="mt-5 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-sm text-green-300">
              Máy B thấy MAC Đích = BB:BB:BB:BB:BB:BB nên biết frame này gửi cho mình.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSimulator() {
  const steps = [
    { title: "Máy gửi có dữ liệu", text: "Ví dụ trình duyệt truy cập https://example.com và tạo dữ liệu cần gửi.", code: "GET / HTTP/1.1\nHost: example.com", color: "purple", icon: <Globe2 /> },
    { title: "Dữ liệu đi xuống các tầng", text: "Application → Transport → Network → Data Link. Khi đến Network, dữ liệu là IP Packet.", code: "IP Packet\nSource IP: 192.168.1.10\nDestination IP: 8.8.8.8", color: "cyan", icon: <Layers /> },
    { title: "Data Link thêm Header và Trailer", text: "Packet được đóng thành frame với MAC nguồn, MAC đích và FCS.", code: "Frame = Header + Packet + Trailer", color: "emerald", icon: <PackageCheck /> },
    { title: "Frame chuyển thành bits", text: "Physical Layer biến frame thành tín hiệu điện, ánh sáng hoặc sóng radio.", code: "Frame → 010101010101 → tín hiệu", color: "orange", icon: <Binary /> },
    { title: "Máy nhận đọc frame", text: "Máy nhận kiểm tra MAC đích, kiểm tra lỗi và lấy Data đưa lên tầng Network.", code: "MAC đích đúng?\nFCS đúng?\nType = IPv4?", color: "green", icon: <PackageOpen /> },
    { title: "Nếu frame bị lỗi", text: "Frame sai FCS có thể bị loại bỏ. Ethernet chủ yếu phát hiện lỗi, không tự sửa lỗi phức tạp.", code: "Sai FCS → bỏ frame", color: "red", icon: <ShieldAlert /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="cyan" title="Cơ chế hoạt động — How It Works" icon={<Zap />} />
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

function BoundaryTechniques() {
  const [activeId, setActiveId] = useState("flag");
  const active = boundaryTechniques.find((t) => t.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Kỹ thuật xác định ranh giới frame" icon={<Flag />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {boundaryTechniques.map((tech) => {
            const tc = colorClasses[tech.color];
            const isActive = activeId === tech.id;
            return <button key={tech.id} onClick={() => setActiveId(tech.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}><div className="flex items-center gap-2 mb-2">{React.cloneElement(tech.icon, { size: 20 })}<span className="font-black text-sm">{tech.vi}</span></div><p className="text-xs opacity-80">{tech.title}</p></button>;
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.title}</p>
            <h3 className="text-2xl font-extrabold text-white mt-2 mb-3">{active.vi}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.idea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{active.example}</div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Vấn đề cần xử lý" value={active.problem} icon={<AlertTriangle />} color={active.color} />
            <BoundaryVisual active={activeId} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorFrameSection() {
  const [bad, setBad] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="red" title="Nếu frame bị lỗi thì sao?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className={`${bad ? "bg-red-500/10 border-red-500/30" : "bg-green-500/10 border-green-500/30"} border rounded-3xl p-6`}>
            <div className={`${bad ? "bg-red-500" : "bg-green-500"} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-5`}>{bad ? <XCircle size={32} /> : <CheckCircle2 size={32} />}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{bad ? "Frame sai FCS" : "Frame đúng FCS"}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{bad ? "Máy nhận phát hiện frame có thể đã bị lỗi và loại bỏ frame." : "Máy nhận chấp nhận frame, lấy dữ liệu bên trong và chuyển lên tầng trên."}</p>
            <button onClick={() => setBad(!bad)} className={`px-5 py-2 rounded-xl font-bold transition-colors ${bad ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}>{bad ? "Chuyển sang frame đúng" : "Mô phỏng frame lỗi"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-w-0">
            <FrameErrorVisual bad={bad} />
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Ở Ethernet, Data Link Layer chủ yếu phát hiện lỗi bằng FCS/CRC. Việc gửi lại thường do tầng trên hoặc giao thức khác đảm nhiệm.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WiresharkLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: { title: "Tạo lưu lượng ICMP", cmd: "ping 8.8.8.8", output: "Reply from 8.8.8.8: bytes=32 time=25ms TTL=117", note: "Dùng ping để tạo gói ICMP, sau đó quan sát frame bằng Wireshark." },
    filter: { title: "Lọc trong Wireshark", cmd: "icmp", output: "Frame 1: 98 bytes on wire\nEthernet II\n  Destination: ...\n  Source: ...\n  Type: IPv4\nInternet Protocol Version 4\nInternet Control Message Protocol", note: "Wireshark cho thấy Ethernet Frame chứa IP Packet, IP Packet chứa ICMP Message." },
    ethernet: { title: "Các trường cần nhìn", cmd: "Ethernet II\nDestination\nSource\nType\nFrame Check Sequence", output: "Destination = MAC đích\nSource = MAC nguồn\nType = IPv4/IPv6/ARP\nFCS = kiểm tra lỗi", note: "Không phải mọi capture đều hiển thị FCS vì một số card mạng/driver bỏ FCS trước khi đưa lên hệ điều hành." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="blue" title="CLI / Wireshark: quan sát frame thực tế" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">framing lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[280px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@datalink</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="Frame" desc="Đơn vị dữ liệu của tầng Data Link." />
            <ExplainRow term="Ethernet II" desc="Một dạng frame Ethernet phổ biến." />
            <ExplainRow term="Type: IPv4" desc="Cho biết payload bên trong là IP Packet IPv4." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Frame giống packet hoàn toàn?", desc: "Không. Packet là đơn vị tầng Network, còn Frame là đơn vị tầng Data Link. Frame thường chứa packet bên trong.", good: "Packet đi xuống Data Link sẽ được đóng thành Frame.", icon: <Package /> },
    { title: "Data Link dùng địa chỉ IP để chuyển frame?", desc: "Không chính xác. Trong LAN, frame Ethernet chủ yếu dùng MAC nguồn và MAC đích.", good: "IP thuộc Network Layer, MAC thuộc Data Link Layer.", icon: <EthernetPort /> },
    { title: "Frame không cần kiểm tra lỗi?", desc: "Sai. Frame thường có phần kiểm tra lỗi như FCS/CRC để phát hiện dữ liệu bị hỏng khi truyền.", good: "FCS giúp phát hiện lỗi frame.", icon: <ShieldCheck /> },
    { title: "Nếu có flag thì dữ liệu không bao giờ bị nhầm?", desc: "Không. Nếu dữ liệu thật trùng với flag, cần byte stuffing hoặc bit stuffing để tránh nhầm ranh giới frame.", good: "Flag thường cần cơ chế escape/stuffing đi kèm.", icon: <Flag /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">13</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-cyan-300">Framing</span> = đóng dữ liệu thành frame ở Data Link.</p>
              <p><span className="text-emerald-300">Frame</span> = Header + Data/Packet + Trailer.</p>
              <p><span className="text-purple-300">MAC Đích</span> = thiết bị nhận frame.</p>
              <p><span className="text-blue-300">MAC Nguồn</span> = thiết bị gửi frame.</p>
              <p><span className="text-orange-300">FCS/CRC</span> = kiểm tra lỗi frame.</p>
              <br />
              <p className="text-slate-500"># Ranh giới frame</p>
              <p>Length field, Flag bytes, Byte stuffing, Bit stuffing.</p>
              <br />
              <p className="text-slate-500"># Wireshark</p>
              <p>Ethernet Frame chứa IP Packet.</p>
              <p>IP Packet có thể chứa ICMP/TCP/UDP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Framing là gì?", options: ["Quá trình mã hóa mật khẩu", "Quá trình đóng dữ liệu thành frame ở tầng Data Link", "Quá trình định tuyến qua Internet", "Quá trình cấp phát địa chỉ IP"], correct: 1, explanation: "Framing là quá trình đóng dữ liệu thành frame ở Data Link Layer." },
  { question: "Một frame thường cần chứa thông tin nào?", options: ["Địa chỉ nguồn, địa chỉ đích, dữ liệu, thông tin kiểm tra lỗi", "Chỉ có dữ liệu, không cần địa chỉ", "Chỉ có địa chỉ IP của website", "Chỉ có mật khẩu người dùng"], correct: 0, explanation: "Frame thường có địa chỉ nguồn, địa chỉ đích, dữ liệu và phần kiểm tra lỗi như FCS/CRC." },
  { question: "Trong Ethernet, địa chỉ nào thường nằm trong frame?", options: ["MAC nguồn và MAC đích", "Chỉ domain website", "Mật khẩu WiFi", "Số căn cước công dân"], correct: 0, explanation: "Ethernet frame dùng MAC nguồn và MAC đích để truyền trong liên kết/mạng cục bộ." },
  { question: "Vì sao cần byte stuffing hoặc bit stuffing?", options: ["Để tránh dữ liệu thật bị nhầm với ký hiệu bắt đầu/kết thúc frame", "Để tăng độ sáng cáp quang", "Để đổi IP thành MAC", "Để xóa toàn bộ dữ liệu"], correct: 0, explanation: "Nếu dữ liệu bên trong trùng với flag/marker, stuffing giúp máy nhận không hiểu nhầm đó là ranh giới frame." },
  { question: "Nếu frame sai FCS thì thường xảy ra điều gì?", options: ["Frame được chấp nhận chắc chắn", "Frame có thể bị loại bỏ", "Frame biến thành địa chỉ IP", "Máy nhận bỏ qua MAC đích"], correct: 1, explanation: "Sai FCS cho thấy frame có thể bị lỗi, nên frame thường bị loại bỏ." },
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
      <p className="text-slate-400 mb-4">Sau khi dữ liệu được đóng thành frame, câu hỏi tiếp theo là: làm sao biết frame truyền đi có bị lỗi hay không?</p>
      <Link to="/phan-4-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.2 — Kiểm soát lỗi: Parity, CRC, Checksum <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroFramePreview() { return <div className="space-y-4"><div className="font-mono text-xs bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 overflow-x-auto whitespace-pre">Packet + Data Link Header + Trailer = Frame</div><div className="overflow-x-auto pb-2"><FrameBar activeId="data" setActiveId={() => { }} compact /></div><div className="grid grid-cols-3 gap-3"><MiniCard label="MAC" value="Địa chỉ" color="purple" /><MiniCard label="Data" value="Payload" color="emerald" /><MiniCard label="FCS" value="Kiểm lỗi" color="orange" /></div></div>; }
function MiniCard({ label, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><p className={`${c.text} font-black`}>{label}</p><p className="text-xs text-slate-400 mt-1">{value}</p></div>; }

function BeforeAfterFraming() { return <div className="space-y-5"><div><p className="text-red-300 font-bold mb-2">Không có framing</p><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-400 break-all">0101100001101001011011100110001101101000011000010110111100100000...</div><p className="text-xs text-slate-500 mt-2">Máy nhận khó biết đầu/cuối từng đơn vị dữ liệu.</p></div><div><p className="text-green-300 font-bold mb-2">Có framing</p><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300">[Frame 1] [Frame 2] [Frame 3]</div><p className="text-xs text-slate-500 mt-2">Mỗi frame có ranh giới, địa chỉ và kiểm tra lỗi.</p></div></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function OsiFramePosition() { const layers = ["Application", "Transport", "Network", "Data Link ← Frame nằm ở đây", "Physical"]; return <div className="grid gap-3">{layers.map((l) => <div key={l} className={`rounded-2xl border p-4 font-bold ${l.startsWith("Data") ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}>{l}</div>)}</div>; }

function FrameBar({ activeId, setActiveId, compact = false }) { return <div className={`min-w-[760px] grid grid-cols-[0.8fr_1fr_1.2fr_1.2fr_1.5fr_0.8fr_0.8fr] gap-2 ${compact ? "text-xs" : "text-sm"}`}>{frameParts.map((part) => { const c = colorClasses[part.color]; const active = activeId === part.id; return <button key={part.id} onClick={() => setActiveId(part.id)} className={`${active ? `${c.bg} ${c.border} ${c.text}` : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center font-bold transition-colors`}><span>{part.short}</span></button>; })}</div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }

function VerticalPduFlow() { const items = [{ p: "Data", c: "purple" }, { p: "Segment", c: "emerald" }, { p: "Packet", c: "cyan" }, { p: "Frame", c: "orange" }, { p: "Bits", c: "slate" }]; return <div className="space-y-3">{items.map((item, i) => { const c = colorClasses[item.c]; return <React.Fragment key={item.p}><div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl p-4 text-center font-black`}>{item.p}</div>{i < items.length - 1 && <div className="flex justify-center"><ArrowDown className="text-slate-600" /></div>}</React.Fragment>; })}</div>; }
function DeviceCard({ title, ip, mac, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><h4 className="text-white font-bold text-xl mb-3">{title}</h4><p className="font-mono text-sm text-slate-300">IP: {ip}</p><p className={`${c.text} font-mono text-sm mt-1`}>MAC: {mac}</p></div>; }
function FrameCell({ text, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl p-4 text-center font-bold`}>{text}</div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }

function BoundaryVisual({ active }) { if (active === "length") return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300">[ Length: 5 ][ H E L L O ]</div>; if (active === "flag") return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-yellow-300">01111110&nbsp;&nbsp; DATA &nbsp;&nbsp;01111110</div>; if (active === "byte") return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">FLAG = END{"\n"}Data: A END B{"\n"}Send: A ESC END B</div>; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-purple-300 whitespace-pre-wrap">Flag: 01111110{"\n"}Data chứa chuỗi nguy hiểm{"\n"}Chèn 0 để tránh nhầm flag</div>; }
function FrameErrorVisual({ bad }) { return <div className="space-y-3"><div className="overflow-x-auto pb-2"><FrameBar activeId={bad ? "trailer" : "data"} setActiveId={() => { }} compact /></div><div className={`rounded-2xl border p-4 font-mono text-sm ${bad ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>{bad ? "Computed CRC ≠ Received FCS → Drop frame" : "Computed CRC = Received FCS → Accept frame"}</div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
