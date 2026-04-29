import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Binary,
  Building2,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cpu,
  EthernetPort,
  Eye,
  Gauge,
  Globe2,
  HardDrive,
  Home,
  Laptop,
  Layers,
  Lightbulb,
  Network,
  Radio,
  Router,
  Search,
  Server,
  ShieldCheck,
  Signal,
  Sparkles,
  TableProperties,
  Terminal,
  Wifi,
  Wrench,
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

const cableTypes = [
  {
    id: "coax",
    name: "Cáp đồng trục",
    en: "Coaxial Cable",
    signal: "Điện",
    material: "Lõi đồng ở giữa, lớp cách điện, lớp chống nhiễu, vỏ bảo vệ",
    summary: "Cáp có một lõi dẫn điện trung tâm, bọc quanh bởi lớp cách điện và lớp chống nhiễu. Từng phổ biến trong truyền hình cáp, camera analog và Ethernet đời cũ.",
    uses: ["Truyền hình cáp", "Camera analog", "Kết nối anten", "Một số mạng Ethernet đời cũ"],
    pros: ["Chống nhiễu khá tốt", "Cấu trúc bọc bảo vệ tốt", "Phù hợp một số hệ thống cũ"],
    cons: ["Cứng và khó uốn hơn cáp Ethernet", "Ít dùng trong LAN hiện đại", "Khó triển khai linh hoạt trong văn phòng"],
    color: "orange",
    icon: <Radio />,
  },
  {
    id: "twisted",
    name: "Cáp xoắn đôi",
    en: "Twisted Pair Cable",
    signal: "Điện",
    material: "4 cặp dây đồng xoắn, thường kết thúc bằng RJ45 trong mạng Ethernet",
    summary: "Loại cáp mạng phổ biến nhất trong LAN hiện nay. Các cặp dây đồng được xoắn lại để giảm nhiễu điện từ.",
    uses: ["LAN gia đình", "Văn phòng", "Trường học", "Kết nối PC — Switch — Router"],
    pros: ["Rẻ và phổ biến", "Dễ bấm đầu RJ45", "Phù hợp LAN", "Hỗ trợ tốc độ cao trong phạm vi ngắn"],
    cons: ["Khoảng cách thường khoảng 100m/đoạn", "Dễ bị nhiễu hơn cáp quang", "Chất lượng phụ thuộc loại Cat và thi công"],
    color: "emerald",
    icon: <EthernetPort />,
  },
  {
    id: "fiber",
    name: "Cáp quang",
    en: "Fiber Optic Cable",
    signal: "Ánh sáng",
    material: "Lõi thủy tinh hoặc nhựa đặc biệt dẫn ánh sáng",
    summary: "Cáp truyền dữ liệu bằng xung ánh sáng, rất nhanh, đi xa và gần như không bị nhiễu điện từ. Phù hợp ISP, backbone, data center và kết nối giữa tòa nhà.",
    uses: ["FTTH", "Backbone ISP", "Cáp quang biển", "Data center", "Kết nối giữa tòa nhà"],
    pros: ["Tốc độ rất cao", "Truyền rất xa", "Ít bị nhiễu điện từ", "Dung lượng lớn"],
    cons: ["Thiết bị đắt hơn", "Thi công cần kỹ thuật hơn", "Đầu nối/quang module cần phù hợp"],
    color: "cyan",
    icon: <Sparkles />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Cable className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 3: Tầng Vật Lý — Physical Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 3.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <TransmissionMediumIntro />
        <CableExplorer />
        <CableStructureDiagrams />
        <TwistedPairStandards />
        <FiberModes />
        <OfficeNetworkExample />
        <ComparisonTable />
        <CableChoiceSimulator />
        <OperationSimulator />
        <CliLab />
        <Misunderstandings />
        <PhysicalLayerSummary />
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
            <Cable size={16} /> Tín hiệu đi qua con đường vật lý nào?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Cáp đồng trục,
            <span className="block text-cyan-400">cáp xoắn đôi & cáp quang</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Sau khi học tín hiệu, băng thông, line encoding và ghép kênh, bài này trả lời câu hỏi: tín hiệu mạng thực sự đi qua loại dây/cáp nào trong đời thực?
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">Coaxial</span> = lõi đồng + chống nhiễu.</p>
            <p><span className="text-emerald-300">Twisted Pair</span> = LAN Ethernet phổ biến.</p>
            <p><span className="text-cyan-300">Fiber</span> = ánh sáng, xa, nhanh, ít nhiễu.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <CablePreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu môi trường truyền dẫn vật lý là gì.",
    "Phân biệt cáp đồng trục, cáp xoắn đôi và cáp quang.",
    "Biết vì sao LAN hiện nay thường dùng cáp xoắn đôi Ethernet.",
    "Biết vì sao đường truyền xa, tốc độ cao thường dùng cáp quang.",
    "Biết khi nào nên chọn từng loại cáp trong thực tế.",
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

function TransmissionMediumIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Môi trường truyền dẫn là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Tín hiệu mạng không tự “bay” trong máy tính. Nó cần một con đường vật lý để đi từ thiết bị gửi đến thiết bị nhận.</p>
            <p>Con đường đó gọi là <strong className="text-white">môi trường truyền dẫn</strong>, tiếng Anh là <strong className="text-white">Transmission Medium</strong>.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Cực ngắn:</p>
              <p>Môi trường truyền dẫn là “con đường vật lý” để tín hiệu mạng đi qua: dây đồng, cáp quang hoặc không gian không dây.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <MediumGroup title="Có dây" examples="Cáp đồng trục, cáp xoắn đôi, cáp quang" icon={<Cable />} color="cyan" />
            <MediumGroup title="Không dây" examples="WiFi, Bluetooth, 4G, 5G" icon={<Wifi />} color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CableExplorer() {
  const [activeId, setActiveId] = useState("twisted");
  const active = cableTypes.find((c) => c.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khám phá 3 loại cáp chính" icon={<Eye />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {cableTypes.map((type) => {
            const tc = colorClasses[type.color];
            const isActive = activeId === type.id;
            return (
              <button key={type.id} onClick={() => setActiveId(type.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">{React.cloneElement(type.icon, { size: 20 })}<span className="font-black text-lg">{type.name}</span></div>
                <p className="text-xs opacity-80">{type.en}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.en}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.summary}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300"><strong className={c.text}>Tín hiệu truyền:</strong> {active.signal}</div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Vật liệu / cấu trúc" value={active.material} icon={<Layers />} color={active.color} />
            <ChipPanel title="Ứng dụng thường gặp" items={active.uses} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CableStructureDiagrams() {
  const [view, setView] = useState("coax");
  const active = cableTypes.find((c) => c.id === view);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Sơ đồ cấu tạo cáp" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {cableTypes.map((type) => <button key={type.id} onClick={() => setView(type.id)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${view === type.id ? `${colorClasses[type.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(type.icon, { size: 16 })} {type.name}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <h3 className="text-2xl font-bold text-white mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.material}</p>
            <div className="font-mono text-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">{getCableAscii(view)}</div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {view === "coax" && <CoaxSvg />}
            {view === "twisted" && <TwistedPairSvg />}
            {view === "fiber" && <FiberSvg />}
          </div>
        </div>
      </div>
    </section>
  );
}

function TwistedPairStandards() {
  const rows = [
    ["Cat5e", "1 Gbps", "tối đa khoảng 100m", "Rẻ, phổ biến"],
    ["Cat6", "1 Gbps đến 10 Gbps ở khoảng cách ngắn", "khoảng 55–100m tùy tốc độ", "Phổ biến trong văn phòng"],
    ["Cat6a", "10 Gbps", "tối đa khoảng 100m", "Chống nhiễu tốt hơn Cat6"],
    ["Cat7/Cat8", "Tốc độ rất cao", "môi trường đặc thù", "Ít cần cho gia đình thông thường"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="Cáp xoắn đôi: UTP, STP, Cat5e, Cat6, Cat6a" icon={<EthernetPort />} />
      <div className="grid md:grid-cols-2 gap-4">
        <ConceptCard title="UTP" icon={<Cable />} color="emerald" text="Unshielded Twisted Pair: không có lớp chống nhiễu riêng, rẻ và phổ biến nhất trong LAN gia đình/văn phòng." code="UTP = phổ biến nhất" />
        <ConceptCard title="STP" icon={<ShieldCheck />} color="blue" text="Shielded Twisted Pair: có lớp chống nhiễu, phù hợp nơi có nhiều nhiễu điện từ hoặc yêu cầu chống nhiễu tốt hơn." code="STP = thêm lớp shield" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Loại cáp</th><th className="p-4">Tốc độ thường gặp</th><th className="p-4">Khoảng cách phổ biến</th><th className="p-4">Ghi chú</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([cat, speed, distance, note], index) => <tr key={cat} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}><td className="p-4 text-emerald-300 font-black">{cat}</td><td className="p-4 text-slate-300">{speed}</td><td className="p-4 text-slate-300">{distance}</td><td className="p-4 text-slate-400">{note}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <InfoBox title="RJ45" value="Đầu mạng Ethernet thường có 8 chân, tương ứng 8 sợi nhỏ trong cáp xoắn đôi." icon={<EthernetPort />} color="emerald" />
        <InfoBox title="T568A / T568B" value="Hai chuẩn bấm dây phổ biến. Trong thực tế, T568B được dùng rất nhiều ở Việt Nam." icon={<Wrench />} color="orange" />
      </div>
    </section>
  );
}

function FiberModes() {
  const [mode, setMode] = useState("smf");
  const data = {
    smf: { title: "Single-mode Fiber — SMF", text: "Lõi rất nhỏ, thường dùng laser, truyền xa. Phù hợp backbone, ISP, kết nối liên tỉnh/liên quốc gia.", code: "Một tia sáng chính đi gần như thẳng", color: "cyan", icon: <Sparkles /> },
    mmf: { title: "Multi-mode Fiber — MMF", text: "Lõi lớn hơn, nhiều tia sáng đi theo nhiều góc. Thường dùng khoảng cách ngắn hơn trong tòa nhà hoặc data center.", code: "Nhiều tia sáng đi theo nhiều góc", color: "purple", icon: <Signal /> },
  };
  const active = data[mode];
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="Cáp quang: Single-mode và Multi-mode" icon={<Sparkles />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("smf")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "smf" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Single-mode</button>
          <button onClick={() => setMode("mmf")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "mmf" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Multi-mode</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{active.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.text}</p>
            <div className="font-mono text-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">{active.code}</div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <FiberModeSvg mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeNetworkExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Ví dụ kỹ thuật: mạng trong văn phòng" icon={<Building2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <OfficeDiagram />
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <InfoBox title="ISP → Modem/ONT" value="Thường là cáp quang từ nhà mạng vào nhà/văn phòng." icon={<Sparkles />} color="cyan" />
          <InfoBox title="Router/Switch → PC" value="Thường là cáp xoắn đôi Ethernet Cat5e/Cat6." icon={<EthernetPort />} color="emerald" />
          <InfoBox title="Cáp đồng trục" value="Hiện ít dùng cho LAN hiện đại, nhưng còn gặp ở TV cáp/camera cũ." icon={<Radio />} color="orange" />
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["Tên tiếng Anh", "Coaxial Cable", "Twisted Pair Cable", "Fiber Optic Cable"],
    ["Tín hiệu truyền", "Điện", "Điện", "Ánh sáng"],
    ["Vật liệu chính", "Lõi đồng", "Các cặp dây đồng", "Lõi thủy tinh/nhựa"],
    ["Chống nhiễu", "Khá tốt", "Trung bình đến tốt", "Rất tốt"],
    ["Tốc độ", "Trung bình", "Cao trong LAN", "Rất cao"],
    ["Khoảng cách", "Trung bình", "Thường khoảng 100m/đoạn", "Rất xa"],
    ["Giá thiết bị", "Vừa", "Rẻ, phổ biến", "Cao hơn"],
    ["Dễ thi công", "Trung bình", "Dễ", "Cần kỹ thuật hơn"],
    ["Ứng dụng", "TV cáp, camera, mạng cũ", "LAN, văn phòng, gia đình", "ISP, backbone, data center"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="orange" title="Bảng so sánh 3 loại cáp" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[960px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">Cáp đồng trục</th><th className="p-4 text-emerald-300">Cáp xoắn đôi</th><th className="p-4 text-cyan-300">Cáp quang</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, coax, twisted, fiber], index) => <tr key={criteria} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{coax}</td><td className="p-4 text-slate-300">{twisted}</td><td className="p-4 text-slate-300">{fiber}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CableChoiceSimulator() {
  const [scenario, setScenario] = useState("office");
  const scenarios = {
    home: { title: "Nhà ở / phòng cá nhân", need: "Rẻ, dễ kéo dây, kết nối PC/TV/router trong phạm vi ngắn.", pick: "Cáp xoắn đôi Cat5e/Cat6", reason: "Dễ mua, dễ thi công, đủ tốt cho LAN gia đình.", color: "emerald", icon: <Home /> },
    office: { title: "Văn phòng nhỏ", need: "20 máy tính, 1 switch, 1 router, kéo dây trong tòa nhà.", pick: "Cáp xoắn đôi Cat6", reason: "Phổ biến cho LAN văn phòng, tốc độ tốt, chi phí hợp lý.", color: "emerald", icon: <Building2 /> },
    buildings: { title: "Hai tòa nhà cách xa", need: "Cần tốc độ cao, khoảng cách xa, ít bị nhiễu điện từ.", pick: "Cáp quang", reason: "Truyền xa, nhanh và chống nhiễu điện từ rất tốt.", color: "cyan", icon: <Sparkles /> },
    camera: { title: "Hệ thống camera analog cũ", need: "Tận dụng hệ thống cũ hoặc truyền tín hiệu analog/video cáp.", pick: "Cáp đồng trục", reason: "Cáp đồng trục vẫn thường gặp trong TV cáp, camera analog và hệ thống cũ.", color: "orange", icon: <Radio /> },
  };
  const active = scenarios[scenario];
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Chọn loại cáp theo tình huống" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(scenarios).map(([key, item]) => <button key={key} onClick={() => setScenario(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${scenario === key ? `${colorClasses[item.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.title}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{active.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.need}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"><p className={`${c.text} font-black`}>Nên chọn: {active.pick}</p><p className="text-sm text-slate-400 mt-2">{active.reason}</p></div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><ChoiceMatrix active={scenario} /></div>
        </div>
      </div>
    </section>
  );
}

function OperationSimulator() {
  const [type, setType] = useState("twisted");
  const [step, setStep] = useState(0);
  const active = cableTypes.find((c) => c.id === type);
  const steps = getOperationSteps(type);
  const current = steps[step];
  const c = colorClasses[active.color];
  const switchType = (next) => { setType(next); setStep(0); };
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="cyan" title="Cơ chế hoạt động từng loại cáp" icon={<Cpu />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {cableTypes.map((item) => <button key={item.id} onClick={() => switchType(item.id)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${type === item.id ? `${colorClasses[item.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.name}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[340px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 32 })}</div>
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={active.color} /></div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ipconfig");
  const commands = {
    ipconfig: { title: "Kiểm tra máy có nhận mạng không", cmd: "ipconfig\n# macOS/Linux:\nifconfig\nip addr", output: "Ethernet adapter Ethernet:\nIPv4 Address . . . : 192.168.1.25\nDefault Gateway . : 192.168.1.1", note: "Nếu card mạng có IP và gateway, máy đã nhận cấu hình mạng cơ bản." },
    ping: { title: "Kiểm tra thông mạng", cmd: "ping 8.8.8.8\nping 192.168.1.1", output: "Reply from 192.168.1.1: bytes=32 time=1ms TTL=64", note: "Ping router tốt nhưng không vào Internet được thì có thể lỗi đường ra ISP, DNS hoặc router." },
    status: { title: "Kiểm tra tốc độ link trên Windows", cmd: "Control Panel\n→ Network and Internet\n→ Network Connections\n→ Chọn Ethernet\n→ Status", output: "Speed: 1.0 Gbps", note: "Speed 1.0 Gbps là tốc độ liên kết giữa máy và switch/router, không chắc là tốc độ Internet thực tế." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="blue" title="Lệnh thực tế liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">physical media terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@physical</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="ipconfig / ip addr" desc="Xem card mạng, IP, gateway." />
            <ExplainRow term="ping gateway" desc="Kiểm tra kết nối đến router gần nhất." />
            <ExplainRow term="Speed: 1.0 Gbps" desc="Tốc độ link nội bộ, không phải tốc độ Internet." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Cáp quang truyền điện?", desc: "Không. Cáp quang truyền dữ liệu bằng ánh sáng, không phải bằng tín hiệu điện như dây đồng.", good: "Cáp đồng = điện; cáp quang = ánh sáng.", icon: <Sparkles /> },
    { title: "Cat càng cao lúc nào cũng cần mua?", desc: "Không. Gia đình/văn phòng phổ thông thường Cat5e/Cat6 đã đủ. Cat rất cao chỉ cần cho môi trường đặc thù.", good: "Chọn theo nhu cầu thực tế, không chỉ theo số Cat.", icon: <Gauge /> },
    { title: "Speed 1.0 Gbps nghĩa là Internet 1 Gbps?", desc: "Không. Đây chỉ là tốc độ liên kết giữa máy và switch/router. Internet thực tế còn phụ thuộc gói cước và ISP.", good: "Link speed khác Internet speed.", icon: <EthernetPort /> },
    { title: "Cáp xoắn đôi xoắn cho đẹp?", desc: "Không. Việc xoắn cặp dây giúp giảm nhiễu điện từ và hỗ trợ truyền tín hiệu vi sai.", good: "Xoắn dây là để giảm nhiễu.", icon: <Cable /> },
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

function PhysicalLayerSummary() {
  const lessons = [
    ["3.1", "Tín hiệu số & tín hiệu tương tự"],
    ["3.2", "Băng thông, thông lượng, độ trễ"],
    ["3.3", "Mã hóa đường truyền"],
    ["3.4", "Ghép kênh: FDM, TDM, WDM"],
    ["3.5", "Cáp đồng trục, cáp xoắn đôi, cáp quang"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="purple" title="Tổng kết Phần 3 — Physical Layer" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid md:grid-cols-5 gap-3 mb-6">
          {lessons.map(([n, title]) => <div key={n} className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="text-purple-300 font-black mb-2">Bài {n}</p><p className="text-sm text-slate-300 leading-relaxed">{title}</p></div>)}
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-slate-300 leading-relaxed">
          <strong className="text-purple-300">Một câu tổng kết:</strong> Tầng vật lý quan tâm đến việc biến dữ liệu thành tín hiệu và truyền tín hiệu đó qua môi trường vật lý như dây đồng, sóng hoặc ánh sáng.
        </div>
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
              <p><span className="text-orange-300">Coaxial</span> = lõi đồng, chống nhiễu khá tốt, TV/camera/mạng cũ.</p>
              <p><span className="text-emerald-300">Twisted Pair</span> = cáp Ethernet LAN phổ biến, 4 cặp dây xoắn.</p>
              <p><span className="text-cyan-300">Fiber</span> = ánh sáng, rất xa, rất nhanh, ít nhiễu.</p>
              <br />
              <p className="text-slate-500"># Chọn nhanh</p>
              <p>LAN nhà/văn phòng → Cat5e/Cat6</p>
              <p>Hai tòa nhà xa / backbone → Fiber</p>
              <p>TV cáp / camera cũ → Coaxial</p>
              <br />
              <p className="text-slate-500"># Lưu ý</p>
              <p>Ethernet đồng thường khoảng 100m/đoạn.</p>
              <p>Speed 1.0 Gbps ≠ tốc độ Internet thực tế.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Loại cáp nào truyền dữ liệu bằng ánh sáng?", options: ["Cáp đồng trục", "Cáp xoắn đôi", "Cáp quang", "Dây điện dân dụng"], correct: 2, explanation: "Cáp quang truyền dữ liệu bằng xung ánh sáng trong lõi quang." },
  { question: "Vì sao cáp xoắn đôi phải xoắn các cặp dây lại?", options: ["Để dây đẹp hơn", "Để giảm nhiễu điện từ", "Để tăng trọng lượng dây", "Để biến điện thành ánh sáng"], correct: 1, explanation: "Các cặp dây xoắn giúp giảm nhiễu điện từ và hỗ trợ truyền tín hiệu vi sai." },
  { question: "LAN gia đình/văn phòng hiện nay thường dùng loại nào?", options: ["Cáp xoắn đôi Ethernet", "Dây điện dân dụng", "Cáp đồng trục cho mọi PC", "Cáp quang biển"], correct: 0, explanation: "Cáp xoắn đôi Ethernet như Cat5e/Cat6 rất phổ biến trong LAN vì rẻ, dễ thi công và đủ tốc độ." },
  { question: "Kết nối hai tòa nhà khá xa, cần tốc độ cao và ít nhiễu điện từ, nên chọn gì?", options: ["Cáp đồng trục", "Cat5e kéo rất dài", "Cáp quang", "Dây điện thường"], correct: 2, explanation: "Cáp quang phù hợp truyền xa, tốc độ cao và gần như không bị nhiễu điện từ." },
  { question: "Speed: 1.0 Gbps trong Ethernet Status nghĩa là gì?", options: ["Tốc độ Internet chắc chắn là 1 Gbps", "Tốc độ liên kết giữa máy và switch/router", "Địa chỉ IP của máy", "Tốc độ WiFi của hàng xóm"], correct: 1, explanation: "Speed 1.0 Gbps là tốc độ link nội bộ giữa card mạng và thiết bị mạng, không đảm bảo Internet cũng đạt 1 Gbps." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 3!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Sau Physical Layer, bài tiếp theo chuyển lên Data Link Layer: cách gom các bit thô thành frame rõ ràng.</p>
      <Link to="/phan-4-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.1 — Framing: Đóng khung dữ liệu <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function CablePreview() {
  return <div className="space-y-4">{cableTypes.map((item) => { const c = colorClasses[item.color]; return <div key={item.id} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-3`}><div className={`${c.solid} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(item.icon, { size: 24 })}</div><div><p className={`${c.text} font-black`}>{item.name}</p><p className="text-xs text-slate-400 mt-1">{item.signal} • {item.en}</p></div></div>; })}</div>;
}

function MediumGroup({ title, examples, icon, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed">{examples}</p></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>; }
function ChipPanel({ title, items, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-white font-bold mb-3">{title}</h4><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}</div></div>; }
function ProsCons({ pros, cons }) { return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }

function getCableAscii(type) {
  if (type === "coax") return "+--------------------------+\n| Vỏ nhựa bảo vệ           |\n|  +--------------------+  |\n|  | Lớp chống nhiễu    |  |\n|  |  +--------------+  |  |\n|  |  | Cách điện    |  |  |\n|  |  |   [Lõi đồng] |  |  |\n|  |  +--------------+  |  |\n|  +--------------------+  |\n+--------------------------+";
  if (type === "twisted") return "Cặp 1: /\/\/\/\/\  Trắng cam - Cam\nCặp 2: /\/\/\/\/\  Trắng xanh lá - Xanh lá\nCặp 3: /\/\/\/\/\  Trắng xanh dương - Xanh dương\nCặp 4: /\/\/\/\/\  Trắng nâu - Nâu\n\nRJ45: | 1 2 3 4 5 6 7 8 |";
  return "+--------------------------+\n| Vỏ bảo vệ                |\n|  +--------------------+  |\n|  | Lớp gia cường      |  |\n|  |  +--------------+  |  |\n|  |  | Lớp phản xạ  |  |\n|  |  |   [Lõi quang]|  |\n|  |  +--------------+  |  |\n|  +--------------------+  |\n+--------------------------+";
}

function CoaxSvg() { return <svg viewBox="0 0 520 220" className="w-full h-64"><rect x="30" y="30" width="460" height="160" rx="80" fill="rgb(15 23 42)" stroke="rgb(251 146 60)" strokeWidth="4" /><rect x="70" y="55" width="380" height="110" rx="55" fill="rgb(30 41 59)" stroke="rgb(234 179 8)" strokeWidth="3" /><rect x="120" y="78" width="280" height="64" rx="32" fill="rgb(51 65 85)" stroke="rgb(148 163 184)" /><rect x="190" y="96" width="140" height="28" rx="14" fill="rgb(251 146 60)" /><text x="210" y="115" fill="white" fontSize="14" fontWeight="700">Lõi đồng</text><text x="330" y="58" fill="rgb(234 179 8)" fontSize="13" fontWeight="700">Chống nhiễu</text><text x="42" y="26" fill="rgb(251 146 60)" fontSize="14" fontWeight="700">Vỏ bảo vệ</text></svg>; }
function TwistedPairSvg() { const pairs = [["#fb923c", "#fed7aa"], ["#22c55e", "#bbf7d0"], ["#3b82f6", "#bfdbfe"], ["#a16207", "#fde68a"]]; return <svg viewBox="0 0 520 260" className="w-full h-72">{pairs.map((p, idx) => { const y = 35 + idx * 55; const path1 = `M40 ${y} C80 ${y - 22},120 ${y + 22},160 ${y} C200 ${y - 22},240 ${y + 22},280 ${y} C320 ${y - 22},360 ${y + 22},400 ${y} C440 ${y - 22},480 ${y + 22},510 ${y}`; const path2 = `M40 ${y + 20} C80 ${y + 42},120 ${y - 2},160 ${y + 20} C200 ${y + 42},240 ${y - 2},280 ${y + 20} C320 ${y + 42},360 ${y - 2},400 ${y + 20} C440 ${y + 42},480 ${y - 2},510 ${y + 20}`; return <g key={idx}><path d={path1} fill="none" stroke={p[0]} strokeWidth="5" strokeLinecap="round" /><path d={path2} fill="none" stroke={p[1]} strokeWidth="5" strokeLinecap="round" /><text x="15" y={y + 14} fill="rgb(148 163 184)" fontSize="12">Cặp {idx + 1}</text></g>; })}<rect x="360" y="15" width="120" height="230" rx="20" fill="none" stroke="rgb(51 65 85)" strokeDasharray="6 6" /><text x="365" y="240" fill="rgb(52 211 153)" fontSize="14" fontWeight="700">4 cặp dây xoắn</text></svg>; }
function FiberSvg() { return <svg viewBox="0 0 520 220" className="w-full h-64"><rect x="30" y="45" width="460" height="130" rx="65" fill="rgb(15 23 42)" stroke="rgb(34 211 238)" strokeWidth="4" /><rect x="75" y="70" width="370" height="80" rx="40" fill="rgb(8 47 73)" stroke="rgb(6 182 212)" strokeWidth="3" /><rect x="150" y="92" width="220" height="36" rx="18" fill="rgb(14 116 144)" /><path d="M155 110 C210 75,260 145,315 110 C340 95,360 100,370 110" fill="none" stroke="rgb(251 191 36)" strokeWidth="5" strokeLinecap="round" /><text x="196" y="116" fill="white" fontSize="14" fontWeight="700">Lõi quang</text><text x="305" y="65" fill="rgb(34 211 238)" fontSize="13" fontWeight="700">Lớp phản xạ</text><text x="40" y="38" fill="rgb(34 211 238)" fontSize="14" fontWeight="700">Vỏ bảo vệ</text></svg>; }
function FiberModeSvg({ mode }) { if (mode === "smf") return <svg viewBox="0 0 560 220" className="w-full h-64"><rect x="40" y="85" width="480" height="50" rx="25" fill="rgb(8 47 73)" stroke="rgb(34 211 238)" strokeWidth="3" /><path d="M60 110 H500" stroke="rgb(251 191 36)" strokeWidth="6" strokeLinecap="round" /><text x="60" y="60" fill="rgb(34 211 238)" fontSize="16" fontWeight="700">Single-mode: một tia chính, đi xa</text></svg>; return <svg viewBox="0 0 560 220" className="w-full h-64"><rect x="40" y="65" width="480" height="90" rx="45" fill="rgb(59 7 100)" stroke="rgb(216 180 254)" strokeWidth="3" /><path d="M60 110 L140 75 L220 145 L300 75 L380 145 L500 110" stroke="rgb(251 191 36)" strokeWidth="4" fill="none" /><path d="M60 95 L140 135 L220 85 L300 135 L380 85 L500 120" stroke="rgb(34 211 238)" strokeWidth="4" fill="none" /><text x="60" y="40" fill="rgb(216 180 254)" fontSize="16" fontWeight="700">Multi-mode: nhiều tia, nhiều góc</text></svg>; }

function OfficeDiagram() { return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto"><div className="min-w-[760px] flex items-center justify-center gap-5 font-mono text-sm"><Node label="Internet ISP" icon={<Globe2 />} color="cyan" /><Line label="Cáp quang" color="cyan" /><Node label="Modem/ONT" icon={<Router />} color="cyan" /><Line label="Ethernet" color="emerald" /><Node label="Router" icon={<Router />} color="emerald" /><Line label="Ethernet" color="emerald" /><Node label="Switch" icon={<Network />} color="emerald" /><Line label="Ethernet" color="emerald" /><Node label="PC / Printer" icon={<Laptop />} color="blue" /></div></div>; }
function Node({ label, icon, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center min-w-[100px]`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-xs">{label}</p></div>; }
function Line({ label, color }) { const c = colorClasses[color]; return <div className="flex flex-col items-center gap-1 min-w-[70px]"><ArrowRight className={c.text} /><span className={`${c.text} text-xs font-bold whitespace-nowrap`}>{label}</span></div>; }

function ChoiceMatrix({ active }) { const rows = [{ key: "home", label: "Nhà ở", cable: "Cat5e/Cat6" }, { key: "office", label: "Văn phòng", cable: "Cat6" }, { key: "buildings", label: "Xa/tốc độ cao", cable: "Fiber" }, { key: "camera", label: "Camera/TV cũ", cable: "Coaxial" }]; return <div className="space-y-3">{rows.map((r) => <div key={r.key} className={`rounded-2xl border p-4 flex justify-between ${active === r.key ? "bg-green-500/10 border-green-400/40" : "bg-slate-900 border-slate-800"}`}><span className="text-slate-300 font-bold">{r.label}</span><span className={active === r.key ? "text-green-300 font-black" : "text-slate-500"}>{r.cable}</span></div>)}</div>; }

function getOperationSteps(type) {
  if (type === "coax") return [
    { title: "Thiết bị tạo tín hiệu điện", text: "Thiết bị mạng, TV hoặc camera tạo tín hiệu điện.", code: "Thiết bị gửi → tín hiệu điện" },
    { title: "Tín hiệu đi qua lõi đồng", text: "Lõi đồng ở giữa dẫn tín hiệu chính.", code: "Tín hiệu điện → lõi đồng trục" },
    { title: "Lớp chống nhiễu bảo vệ", text: "Lớp kim loại bọc quanh giúp giảm nhiễu từ bên ngoài.", code: "Shield giảm nhiễu" },
    { title: "Thiết bị nhận đọc tín hiệu", text: "Đầu nhận đo tín hiệu điện và giải mã thành dữ liệu/hình ảnh/âm thanh.", code: "Tín hiệu điện → dữ liệu" },
  ];
  if (type === "twisted") return [
    { title: "Card mạng tạo tín hiệu điện", text: "Máy tính hoặc switch tạo tín hiệu điện tương ứng với bit dữ liệu.", code: "Bit → tín hiệu điện" },
    { title: "Tín hiệu đi qua cặp dây xoắn", text: "Các cặp dây đồng truyền tín hiệu theo từng cặp.", code: "Cặp dây 1/2/3/4" },
    { title: "Xoắn dây giúp giảm nhiễu", text: "Nhiễu tác động gần giống lên hai dây, thiết bị lấy phần chênh lệch để khôi phục tín hiệu.", code: "Differential Signaling" },
    { title: "Switch/máy tính khôi phục dữ liệu", text: "Thiết bị nhận chuyển tín hiệu điện về chuỗi bit ban đầu.", code: "Tín hiệu điện → bit → dữ liệu" },
  ];
  return [
    { title: "Thiết bị quang tạo xung ánh sáng", text: "Laser hoặc LED tạo xung ánh sáng từ dữ liệu.", code: "1 = có ánh sáng\n0 = không có ánh sáng" },
    { title: "Ánh sáng đi trong lõi quang", text: "Ánh sáng được dẫn trong lõi quang nhờ phản xạ bên trong.", code: "Xung sáng → lõi quang" },
    { title: "Truyền xa với suy hao thấp", text: "Cáp quang đi xa và ít bị nhiễu điện từ hơn dây đồng.", code: "Xa + nhanh + ít nhiễu" },
    { title: "Bộ thu quang khôi phục dữ liệu", text: "Đầu nhận biến ánh sáng thành tín hiệu điện rồi khôi phục dữ liệu số.", code: "Ánh sáng → điện → dữ liệu" },
  ];
}
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
