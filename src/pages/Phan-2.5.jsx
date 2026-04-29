import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  Binary,
  Box,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  EthernetPort,
  FileText,
  Fingerprint,
  Globe2,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Network,
  Package,
  PackageCheck,
  PackageOpen,
  Router,
  Search,
  Server,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
  Truck,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const colorClasses = {
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-400/40", solid: "bg-slate-600", ring: "shadow-slate-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
  red: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-400/40", solid: "bg-red-500", ring: "shadow-red-500/20" },
};

const pduLayers = [
  {
    id: "data",
    order: 1,
    layer: "Application",
    tcpip: "Application",
    pdu: "Data",
    component: "Nội dung ứng dụng",
    example: "GET / HTTP/1.1\nHost: example.com",
    color: "purple",
    icon: <Globe2 />,
  },
  {
    id: "segment",
    order: 2,
    layer: "Transport",
    tcpip: "Transport",
    pdu: "Segment / Datagram",
    component: "TCP/UDP header + Data",
    example: "TCP Header: Src Port 51524, Dst Port 443",
    color: "emerald",
    icon: <Split />,
  },
  {
    id: "packet",
    order: 3,
    layer: "Network / Internet",
    tcpip: "Internet",
    pdu: "Packet",
    component: "IP header + Segment",
    example: "IP Header: 192.168.1.10 → 93.184.216.34",
    color: "cyan",
    icon: <Router />,
  },
  {
    id: "frame",
    order: 4,
    layer: "Data Link / Network Access",
    tcpip: "Network Access",
    pdu: "Frame",
    component: "MAC header + Packet + Trailer/FCS",
    example: "MAC Header: Laptop MAC → Router MAC\nTrailer: FCS",
    color: "blue",
    icon: <EthernetPort />,
  },
  {
    id: "bits",
    order: 5,
    layer: "Physical",
    tcpip: "Network Access",
    pdu: "Bits",
    component: "0 và 1 truyền qua dây/sóng",
    example: "010101010101010...",
    color: "slate",
    icon: <Binary />,
  },
];

const encapsulationSteps = [
  {
    title: "Application tạo dữ liệu",
    pdu: "Data",
    layer: "Application",
    color: "purple",
    icon: <Globe2 />,
    body: "Trình duyệt tạo HTTP request. Ở tầng này, dữ liệu vẫn là nội dung ứng dụng.",
    visual: "[Data: GET / HTTP/1.1, Host: example.com]",
  },
  {
    title: "Transport thêm TCP header",
    pdu: "Segment",
    layer: "Transport",
    color: "emerald",
    icon: <Split />,
    body: "Vì HTTPS dùng TCP port 443, máy thêm port nguồn và port đích. Dữ liệu trở thành Segment.",
    visual: "[TCP Header: 51524 → 443][Data]",
  },
  {
    title: "Network thêm IP header",
    pdu: "Packet",
    layer: "Network / Internet",
    color: "cyan",
    icon: <Router />,
    body: "Máy thêm IP nguồn và IP đích để packet có thể đi qua nhiều mạng đến server.",
    visual: "[IP Header: 192.168.1.10 → 93.184.216.34][TCP Header][Data]",
  },
  {
    title: "Data Link thêm MAC header và trailer",
    pdu: "Frame",
    layer: "Data Link / Network Access",
    color: "blue",
    icon: <EthernetPort />,
    body: "Vì server nằm ngoài LAN, laptop gửi frame đến router trước. MAC đích của chặng đầu là MAC router.",
    visual: "[MAC Header: AA → BB][IP Header][TCP Header][Data][Trailer/FCS]",
  },
  {
    title: "Physical chuyển thành bits",
    pdu: "Bits",
    layer: "Physical",
    color: "slate",
    icon: <Binary />,
    body: "Frame được chuyển thành chuỗi bit 0/1 rồi truyền qua WiFi hoặc dây mạng.",
    visual: "010101010101010101010...  ))) WiFi",
  },
];

const decapsulationSteps = [...encapsulationSteps].reverse().map((step, index) => ({
  ...step,
  body: [
    "Máy nhận lấy tín hiệu vật lý và chuyển thành bit để xử lý tiếp.",
    "Data Link đọc frame, kiểm tra MAC và FCS, rồi gỡ MAC header/trailer để lấy packet.",
    "Network đọc IP header, xác nhận IP đích, rồi gỡ IP header để lấy segment.",
    "Transport đọc TCP/UDP header, kiểm tra port và thứ tự dữ liệu, rồi đưa data lên ứng dụng.",
    "Application nhận dữ liệu gốc và hiển thị hoặc xử lý nội dung cho người dùng.",
  ][index],
  visual: [
    "010101010101010... → Bits",
    "Frame → bỏ MAC header + Trailer/FCS → Packet",
    "Packet → bỏ IP header → Segment",
    "Segment → bỏ TCP/UDP header → Data",
    "Data → ứng dụng xử lý nội dung",
  ][index],
}));

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Package className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 2: Mô hình mạng</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 2.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <CoreConcepts />
        <PduExplorer />
        <EncapsulationDiagram />
        <DecapsulationDiagram />
        <HeaderTrailerSection />
        <RealWorldExamples />
        <HttpsEncapsulationSimulator />
        <RouterHopSimulator />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <PackageCheck size={16} /> Đóng gói và gỡ đóng gói dữ liệu
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Encapsulation & Decapsulation
            <span className="block text-cyan-400">Data → Segment → Packet → Frame → Bits</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này giải thích dữ liệu được thêm header/trailer qua từng tầng khi gửi đi, và được bóc từng lớp ra như thế nào khi máy nhận xử lý.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-green-300">Encapsulation</span> = đóng gói khi gửi.</p>
            <p><span className="text-cyan-300">Decapsulation</span> = gỡ đóng gói khi nhận.</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <PacketStackPreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu Encapsulation là gì.",
    "Hiểu Decapsulation là gì.",
    "Biết header và trailer được thêm qua từng tầng như thế nào.",
    "Phân biệt Data, Segment, Packet, Frame, Bits.",
    "Hiểu luồng dữ liệu khi truy cập website, gửi tin nhắn hoặc gọi API.",
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

function CoreConcepts() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Khái niệm cốt lõi" icon={<CircleHelp />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard
          title="Encapsulation là gì?"
          icon={<PackageCheck />}
          color="green"
          text="Encapsulation là quá trình đóng gói dữ liệu khi gửi. Mỗi tầng thêm thông tin điều khiển riêng như TCP/UDP header, IP header, MAC header và trailer."
          code="Data → Segment → Packet → Frame → Bits"
        />
        <ConceptCard
          title="Decapsulation là gì?"
          icon={<PackageOpen />}
          color="cyan"
          text="Decapsulation là quá trình máy nhận bóc từng lớp thông tin. Mỗi tầng đọc phần của mình, gỡ bỏ header/trailer rồi đưa dữ liệu lên tầng trên."
          code="Bits → Frame → Packet → Segment → Data"
        />
        <ConceptCard
          title="Header là gì?"
          icon={<FileText />}
          color="purple"
          text="Header là phần thông tin được thêm phía trước dữ liệu. Mỗi tầng dùng header để biết dữ liệu cần được xử lý như thế nào."
          code="[Header][Data]"
        />
        <ConceptCard
          title="Trailer là gì?"
          icon={<ShieldCheck />}
          color="orange"
          text="Trailer là phần thông tin đặt phía sau dữ liệu. Tầng Data Link thường thêm trailer/FCS để kiểm tra lỗi frame."
          code="[MAC Header][Packet][Trailer/FCS]"
        />
      </div>
    </section>
  );
}

function PduExplorer() {
  const [activeId, setActiveId] = useState("data");
  const active = pduLayers.find((item) => item.id === activeId);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Data, Segment, Packet, Frame, Bits" icon={<TableProperties />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {pduLayers.map((item) => {
            const ic = colorClasses[item.color];
            const activeTab = activeId === item.id;
            return (
              <button key={item.id} onClick={() => setActiveId(item.id)} className={`rounded-2xl p-4 text-left border transition-all ${activeTab ? `${ic.bg} ${ic.border} ${ic.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">{React.cloneElement(item.icon, { size: 18 })}<span className="font-black">{item.pdu}</span></div>
                <p className="text-xs opacity-80">{item.layer}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.layer}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-2">{active.pdu}</h3>
            <p className="text-slate-300 leading-relaxed">{active.component}</p>
          </div>
          <div className="space-y-4">
            <InfoBox title="Theo TCP/IP" value={active.tcpip} icon={<Layers />} color={active.color} />
            <InfoBox title="Ví dụ minh họa" value={active.example} icon={<Code2 />} color={active.color} mono />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-4">Thứ tự khi gửi</h4>
              <div className="flex flex-wrap gap-2 items-center">
                {pduLayers.map((p, index) => (
                  <React.Fragment key={p.id}>
                    <span className={`${activeId === p.id ? `${colorClasses[p.color].bg} ${colorClasses[p.color].border} ${colorClasses[p.color].text}` : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-full px-3 py-1 text-sm font-bold`}>{p.pdu}</span>
                    {index < pduLayers.length - 1 && <ArrowRight size={16} className="text-slate-600" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EncapsulationDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="green" title="Sơ đồ Encapsulation" icon={<PackageCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <LayeredPacket direction="send" />
      </div>
    </section>
  );
}

function DecapsulationDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Sơ đồ Decapsulation" icon={<PackageOpen />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <LayeredPacket direction="receive" />
      </div>
    </section>
  );
}

function HeaderTrailerSection() {
  const rows = [
    ["Transport", "TCP/UDP header", "Port nguồn, port đích, số thứ tự TCP, kiểm soát truyền dữ liệu"],
    ["Network / Internet", "IP header", "IP nguồn, IP đích, TTL, thông tin định tuyến"],
    ["Data Link", "Ethernet/WiFi header", "MAC nguồn, MAC đích cho từng chặng LAN"],
    ["Data Link", "Trailer/FCS", "Kiểm tra frame có bị lỗi trong quá trình truyền không"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="orange" title="Header và Trailer theo từng tầng" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tầng</th><th className="p-4">Thông tin thêm vào</th><th className="p-4">Dùng để làm gì?</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([layer, header, purpose], index) => (
                <tr key={header} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                  <td className="p-4 text-white font-bold">{layer}</td>
                  <td className="p-4 text-cyan-300 font-semibold">{header}</td>
                  <td className="p-4 text-slate-400">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
        <div className="min-w-[760px] flex items-center justify-center gap-2 font-mono text-sm">
          <PacketPart text="Ethernet/WiFi Header" color="blue" />
          <PacketPart text="IP Header" color="cyan" />
          <PacketPart text="TCP Header" color="emerald" />
          <PacketPart text="Data" color="purple" />
          <PacketPart text="Trailer/FCS" color="orange" />
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("letter");
  const examples = {
    letter: {
      title: "Gửi thư qua bưu điện",
      icon: <FileText />,
      send: ["Nội dung thư", "Bỏ vào phong bì nhỏ", "Ghi người nhận/số phòng", "Ghi địa chỉ nhà", "Đưa cho bưu điện/xe vận chuyển"],
      net: ["Data", "TCP/UDP header = Port", "IP header = IP address", "MAC header = chặng gần", "Physical medium = dây/sóng"],
      receive: ["Nhận phong bì", "Kiểm tra địa chỉ", "Mở phong bì", "Lấy thư", "Đọc nội dung"],
    },
    package: {
      title: "Gửi hàng online",
      icon: <Truck />,
      send: ["Sản phẩm", "Bọc chống sốc", "Cho vào hộp", "Dán mã vận đơn/tuyến giao", "Đưa lên xe"],
      net: ["Data ứng dụng", "Thêm port", "Thêm IP", "Thêm MAC + trailer", "Chuyển thành bit"],
      receive: ["Nhận kiện", "Kiểm tra mã vận đơn", "Bóc hộp", "Bóc chống sốc", "Lấy sản phẩm"],
    },
  };
  const current = examples[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Ví dụ đời sống" icon={<Truck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("letter")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "letter" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><FileText size={16} /> Gửi thư</button>
          <button onClick={() => setMode("package")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "package" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><Truck size={16} /> Gửi hàng</button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 22 })} {current.title}</h3>
          <div className="grid lg:grid-cols-3 gap-4">
            <ExampleColumn title="Đóng gói ngoài đời" items={current.send} color="green" />
            <ExampleColumn title="Tương ứng trong mạng" items={current.net} color="cyan" />
            <ExampleColumn title="Gỡ đóng gói ngoài đời" items={current.receive} color="orange" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsEncapsulationSimulator() {
  const [mode, setMode] = useState("send");
  const [step, setStep] = useState(0);
  const steps = mode === "send" ? encapsulationSteps : decapsulationSteps;
  const current = steps[step];
  const c = colorClasses[current.color];

  const switchMode = (next) => {
    setMode(next);
    setStep(0);
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Mô phỏng: Laptop truy cập HTTPS qua WiFi" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => switchMode("send")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "send" ? "bg-green-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><ArrowDown size={16} /> Encapsulation</button>
          <button onClick={() => switchMode("receive")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "receive" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><ArrowUp size={16} /> Decapsulation</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[370px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — {current.layer}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.body}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.visual}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <PduProgress active={current.pdu} mode={mode} />
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className="text-cyan-300">Tình huống:</strong> Laptop IP 192.168.1.10, Router IP 192.168.1.1, Server IP 93.184.216.34. Laptop MAC AA:AA..., Router MAC BB:BB...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouterHopSimulator() {
  const hops = [
    {
      title: "Chặng 1: Laptop → Router nhà",
      mac: "MAC Laptop AA:AA → MAC Router BB:BB",
      ip: "IP Laptop 192.168.1.10 → IP Server 93.184.216.34",
      note: "Laptop dùng MAC của router làm đích vì server nằm ngoài LAN.",
    },
    {
      title: "Chặng 2: Router nhà → Router ISP",
      mac: "MAC Router nhà → MAC Router ISP",
      ip: "IP Public NAT → IP Server 93.184.216.34",
      note: "Router gỡ frame cũ, đọc packet IP, NAT nếu cần, rồi đóng frame mới cho chặng tiếp theo.",
    },
    {
      title: "Chặng 3: Router ISP → Router tiếp theo",
      mac: "MAC Router ISP → MAC Router kế tiếp",
      ip: "IP Public NAT → IP Server 93.184.216.34",
      note: "MAC thay đổi theo từng chặng; IP thường giữ nguyên sau NAT.",
    },
    {
      title: "Chặng cuối: Router gần server → Server",
      mac: "MAC Router gần server → MAC Server",
      ip: "IP Public NAT → IP Server 93.184.216.34",
      note: "Server nhận packet, đọc port 443 và đưa data lên dịch vụ HTTPS.",
    },
  ];
  const [hop, setHop] = useState(0);
  const current = hops[hop];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Router xử lý: MAC thay đổi, IP thường giữ nguyên" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
            <div>
              <div className="bg-yellow-500 text-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 mb-5"><Router size={32} /></div>
              <p className="text-yellow-300 text-sm font-black uppercase tracking-wider mb-2">Chặng {hop + 1}/{hops.length}</p>
              <h3 className="text-2xl font-bold text-white mb-4">{current.title}</h3>
              <div className="space-y-3">
                <AddressLine label="MAC" value={current.mac} color="blue" />
                <AddressLine label="IP" value={current.ip} color="cyan" />
              </div>
              <p className="text-slate-300 leading-relaxed mt-5">{current.note}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setHop((s) => Math.max(0, s - 1))} disabled={hop === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setHop((s) => (s + 1) % hops.length)} className="px-5 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold transition-colors inline-flex items-center gap-2">{hop === hops.length - 1 ? "Xem lại" : "Chặng tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <HopPath active={hop} />
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <RuleCard title="MAC" text="Dùng cho từng chặng gần. Khi qua router, MAC nguồn/đích thường thay đổi." color="blue" />
              <RuleCard title="IP" text="Dùng cho hành trình end-to-end qua nhiều mạng. Có thể đổi khi NAT." color="cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ip");
  const commands = {
    ip: { title: "Xem IP và gateway", cmd: "ipconfig\n# hoặc Linux/macOS:\nip addr", output: "IPv4 Address . . . . . : 192.168.1.10\nDefault Gateway . . . : 192.168.1.1", note: "IP liên quan đến tầng Network / Internet." },
    mac: { title: "Xem MAC address", cmd: "ipconfig /all", output: "Physical Address . . . : AA-AA-AA-AA-AA-AA", note: "Physical Address ở đây chính là MAC address, dùng ở Data Link." },
    arp: { title: "Xem bảng ARP", cmd: "arp -a", output: "192.168.1.1    bb-bb-bb-bb-bb-bb    dynamic", note: "ARP giúp máy biết IP router tương ứng với MAC nào để đóng gói frame." },
    trace: { title: "Kiểm tra đường đi packet", cmd: "tracert google.com\n# hoặc macOS/Linux:\ntraceroute google.com", output: "1  192.168.1.1\n2  ISP gateway\n3  router tiếp theo\n4  google.com", note: "Lệnh này giúp thấy packet đi qua các router nào." },
    port: { title: "Kiểm tra port Transport", cmd: "Test-NetConnection google.com -Port 443\n# hoặc:\nnc -vz google.com 443", output: "TcpTestSucceeded: True\nConnection to google.com port 443 succeeded", note: "Kiểm tra máy có thể kết nối đến dịch vụ HTTPS port 443 không." },
    http: { title: "Kiểm tra HTTP Application", cmd: "curl -I https://example.com", output: "HTTP/2 200\ncontent-type: text/html", note: "Nếu server phản hồi header, tầng Application đã nhận được phản hồi HTTP/HTTPS." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Lệnh CLI liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">encapsulation terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key, item]) => (
                <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>
              ))}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[270px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@network</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="Port" desc="Nằm trong TCP/UDP header." />
            <ExplainRow term="IP" desc="Nằm trong IP header." />
            <ExplainRow term="MAC" desc="Nằm trong Ethernet/WiFi header." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Dữ liệu chỉ được gửi nguyên khối qua mạng?", desc: "Không. Dữ liệu thường được chia nhỏ và đóng gói qua nhiều tầng thành segment, packet, frame rồi bit.", good: "File lớn có thể trở thành nhiều segment, packet và frame.", icon: <Box /> },
    { title: "Header chỉ có một loại?", desc: "Không. Transport có TCP/UDP header, Network có IP header, Data Link có Ethernet/WiFi header.", good: "Mỗi tầng có header phục vụ mục đích riêng.", icon: <FileText /> },
    { title: "IP và MAC cùng đi từ đầu đến cuối?", desc: "Không hoàn toàn. IP dùng cho hành trình qua nhiều mạng; MAC dùng cho từng chặng gần và thường thay đổi khi qua router.", good: "MAC thay đổi từng chặng; IP thường end-to-end, trừ NAT.", icon: <Fingerprint /> },
    { title: "Router chuyển nguyên frame cũ đi tiếp?", desc: "Không. Router nhận frame, gỡ frame để lấy packet IP, rồi đóng packet vào frame mới cho chặng tiếp theo.", good: "Router chuyển packet sang frame mới.", icon: <Router /> },
    { title: "Decapsulation chỉ xảy ra ở máy cuối?", desc: "Không hoàn toàn. Máy cuối gỡ đầy đủ lên ứng dụng, nhưng switch/router/firewall cũng có thể gỡ hoặc đọc một phần.", good: "Thiết bị trung gian cũng xử lý theo tầng của nó.", icon: <PackageOpen /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">12</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-green-300">Encapsulation</span> = đóng gói khi gửi</p>
              <p><span className="text-cyan-300">Decapsulation</span> = gỡ đóng gói khi nhận</p>
              <br />
              <p className="text-slate-500"># Khi gửi</p>
              <p>Data → Segment → Packet → Frame → Bits</p>
              <br />
              <p className="text-slate-500"># Khi nhận</p>
              <p>Bits → Frame → Packet → Segment → Data</p>
              <br />
              <p className="text-slate-500"># Header quan trọng</p>
              <p>TCP/UDP header = port</p>
              <p>IP header = IP nguồn, IP đích</p>
              <p>MAC header = MAC nguồn, MAC đích</p>
              <p>Trailer/FCS = kiểm tra lỗi frame</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Encapsulation là gì?", options: ["Quá trình xóa dữ liệu khỏi máy tính", "Quá trình đóng gói dữ liệu qua từng tầng trước khi gửi đi", "Quá trình đổi mật khẩu WiFi", "Quá trình tăng tốc Internet"], correct: 1, explanation: "Encapsulation là quá trình dữ liệu được thêm header/trailer qua từng tầng trước khi truyền đi." },
  { question: "Thứ tự dữ liệu khi gửi đi là gì?", options: ["Bits → Frame → Packet → Segment → Data", "Data → Segment → Packet → Frame → Bits", "Packet → Data → Bits → Frame → Segment", "Frame → Packet → Data → Segment → Bits"], correct: 1, explanation: "Khi gửi: Data được thêm TCP/UDP thành Segment, thêm IP thành Packet, thêm MAC/trailer thành Frame, rồi thành Bits." },
  { question: "TCP header chứa thông tin quan trọng nào?", options: ["MAC nguồn và MAC đích", "IP nguồn và IP đích", "Port nguồn và port đích", "Tín hiệu WiFi"], correct: 2, explanation: "TCP/UDP header chứa port nguồn, port đích và thông tin điều khiển truyền dữ liệu." },
  { question: "IP header chứa thông tin quan trọng nào?", options: ["IP nguồn và IP đích", "MAC nguồn và MAC đích", "Tên WiFi", "FCS"], correct: 0, explanation: "IP header chứa IP nguồn, IP đích và các thông tin phục vụ định tuyến." },
  { question: "Khi packet đi qua router, điều gì thường xảy ra với MAC?", options: ["MAC luôn giữ nguyên từ đầu đến cuối", "MAC thường thay đổi theo từng chặng", "MAC biến thành IP", "MAC bị xóa vĩnh viễn"], correct: 1, explanation: "Router gỡ frame cũ và đóng packet vào frame mới, nên MAC nguồn/đích thay đổi theo từng chặng." },
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
    return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 2!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      {showResult && <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2"><div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div><button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button></div>}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Bạn đã hoàn thành Phần 2. Bài tiếp theo sẽ đi sâu xuống tầng Physical: tín hiệu số và tín hiệu tương tự.</p>
      <Link to="/phan-3-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 3.1 — Tín hiệu số & tín hiệu tương tự <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function PacketStackPreview() {
  return <div className="space-y-3">{pduLayers.map((p, index) => { const c = colorClasses[p.color]; return <div key={p.id} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-3`}><div className={`${c.solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0`}>{index + 1}</div><div className="flex-1"><p className={`${c.text} font-black`}>{p.pdu}</p><p className="text-xs text-slate-400 mt-1">{p.component}</p></div>{React.cloneElement(p.icon, { size: 22, className: c.text })}</div>; })}</div>;
}

function ConceptCard({ title, icon, color, text, code }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function InfoBox({ title, value, icon, color, mono }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className={`text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap ${mono ? "font-mono" : ""}`}>{value}</p></div></div>;
}

function LayeredPacket({ direction }) {
  const send = direction === "send";
  const rows = send ? encapsulationSteps : decapsulationSteps;
  return <div className="space-y-4">{rows.map((step, index) => { const c = colorClasses[step.color]; return <div key={`${direction}-${step.pdu}`} className={`${c.bg} ${c.border} border rounded-3xl p-5`}><div className="flex items-start gap-4"><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0`}>{index + 1}</div><div className="flex-1 min-w-0"><div className="flex flex-wrap items-center gap-2 mb-2"><h4 className="text-white font-bold">{step.layer}</h4><span className={`${c.text} text-sm font-black`}>= {step.pdu}</span></div><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">{step.visual}</div></div></div>{index < rows.length - 1 && <div className="flex justify-center pt-4">{send ? <ArrowDown className="text-slate-600" /> : <ArrowUp className="text-slate-600" />}</div>}</div>; })}</div>;
}

function PacketPart({ text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl px-4 py-5 text-center font-bold min-w-[130px]`}>{text}</div>;
}

function ExampleColumn({ title, items, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><h4 className="text-white font-bold mb-5">{title}</h4><div className="space-y-3">{items.map((item, index) => <div key={`${item}-${index}`} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 flex gap-3 items-start"><span className={`${c.solid} text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0`}>{index + 1}</span><p className="text-sm text-slate-300 leading-relaxed">{item}</p></div>)}</div></div>;
}

function PduProgress({ active, mode }) {
  const order = mode === "send" ? pduLayers : [...pduLayers].reverse();
  return <div className="space-y-3">{order.map((p, index) => { const c = colorClasses[p.color]; const isActive = active.includes(p.pdu.split(" ")[0]) || (active === "Segment" && p.id === "segment") || (active === "Bits" && p.id === "bits"); return <div key={p.id} className={`${isActive ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-3 flex items-center gap-3 transition-all`}><div className={`${isActive ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0`}>{index + 1}</div><div className="flex-1"><p className={`${isActive ? c.text : "text-slate-400"} font-bold text-sm`}>{p.pdu}</p><p className="text-xs text-slate-500">{p.layer}</p></div>{isActive && <Zap className={c.text} size={18} />}</div>; })}</div>;
}

function AddressLine({ label, value, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black text-xs uppercase tracking-wider mb-1`}>{label}</p><p className="font-mono text-sm text-slate-200">{value}</p></div>;
}

function HopPath({ active }) {
  const nodes = ["Laptop", "Router nhà", "Router ISP", "Router kế tiếp", "Server"];
  return <div className="space-y-4">{nodes.map((node, index) => { const isActive = index === active || index === active + 1; return <div key={node} className={`flex items-center gap-3 p-3 rounded-2xl border ${isActive ? "bg-yellow-500/10 border-yellow-400/40" : "bg-slate-900 border-slate-800"}`}><div className={`${isActive ? "bg-yellow-500 text-slate-950" : "bg-slate-950 text-slate-500"} w-10 h-10 rounded-xl flex items-center justify-center font-black`}>{index + 1}</div><p className={`${isActive ? "text-white" : "text-slate-500"} font-bold`}>{node}</p>{index < nodes.length - 1 && <ArrowRight className="ml-auto text-slate-600" size={18} />}</div>; })}</div>;
}

function RuleCard({ title, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black mb-2`}>{title}</p><p className="text-sm text-slate-300 leading-relaxed">{text}</p></div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
