import React, { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  CloudDownload,
  Gauge,
  Globe2,
  HardDriveDownload,
  Laptop,
  Network,
  Router,
  Search,
  Server,
  Signal,
  SlidersHorizontal,
  TableProperties,
  Terminal,
  Timer,
  TrafficCone,
  Truck,
  Waves,
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

const concepts = [
  {
    id: "bandwidth",
    label: "Băng thông",
    en: "Bandwidth",
    question: "Đường truyền tối đa rộng bao nhiêu?",
    unit: "bps, Kbps, Mbps, Gbps",
    summary: "Lượng dữ liệu tối đa mà đường truyền có thể truyền trong một giây, thường là con số lý thuyết hoặc trên hợp đồng.",
    analogy: "Số làn đường cao tốc hoặc đường kính ống nước.",
    color: "cyan",
    icon: <Gauge />,
  },
  {
    id: "throughput",
    label: "Thông lượng",
    en: "Throughput",
    question: "Thực tế truyền được bao nhiêu dữ liệu?",
    unit: "bps, Mbps, MB/s",
    summary: "Lượng dữ liệu thực tế truyền được trong một giây sau khi chịu ảnh hưởng bởi WiFi, router, server, nhiễu và overhead.",
    analogy: "Số xe thực tế chạy qua mỗi phút hoặc lượng nước thực tế chảy qua ống.",
    color: "emerald",
    icon: <CloudDownload />,
  },
  {
    id: "latency",
    label: "Độ trễ",
    en: "Latency",
    question: "Dữ liệu mất bao lâu để tới nơi?",
    unit: "ms",
    summary: "Thời gian dữ liệu mất để đi từ nguồn đến đích. Lệnh ping thường hiển thị RTT, tức thời gian đi và về.",
    analogy: "Thời gian xe đi từ A đến B, dù đường có rộng hay hẹp.",
    color: "orange",
    icon: <Timer />,
  },
  {
    id: "jitter",
    label: "Jitter",
    en: "Jitter",
    question: "Độ trễ có ổn định không?",
    unit: "ms",
    summary: "Sự dao động của độ trễ giữa các gói tin. Jitter cao làm video call, gọi thoại và game dễ giật.",
    analogy: "Xe lúc nhanh lúc chậm thất thường, không đều tốc độ.",
    color: "purple",
    icon: <Waves />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Gauge className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 3: Tầng Vật Lý — Physical Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 3.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyNeedTheseConcepts />
        <ConceptExplorer />
        <BitByteCalculator />
        <RealWorldExamples />
        <BandwidthThroughputSimulator />
        <LatencyAndJitterSimulator />
        <WebsiteFlow />
        <FileDownloadCalculator />
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
            <Signal size={16} /> Mạng nhanh hay chậm do yếu tố nào?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Băng thông, thông lượng,
            <span className="block text-cyan-400">độ trễ & jitter</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Không phải cứ gói mạng ghi 100 Mbps là bạn luôn tải được đúng 100 Mbps. Bài này giúp bạn phân biệt tốc độ lý thuyết, tốc độ thực tế và thời gian chờ khi dữ liệu đi qua mạng.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Bandwidth</span> = khả năng tối đa.</p>
            <p><span className="text-emerald-300">Throughput</span> = tốc độ thực tế.</p>
            <p><span className="text-orange-300">Latency</span> = thời gian chờ.</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroMeters />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu băng thông — bandwidth là gì.",
    "Hiểu thông lượng — throughput là gì.",
    "Hiểu độ trễ — latency là gì.",
    "Biết vì sao mạng 100 Mbps không tải thực tế đúng 100 Mbps.",
    "Biết dùng lệnh cơ bản để kiểm tra tốc độ và độ trễ mạng.",
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

function WhyNeedTheseConcepts() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần hiểu 3 khái niệm này?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi nói “mạng nhanh hay chậm”, nhiều người chỉ nhìn vào tốc độ gói mạng như <strong className="text-white">100 Mbps, 300 Mbps, 1 Gbps</strong>.</p>
            <p>Nhưng trải nghiệm thật còn phụ thuộc vào tốc độ thực tế, độ trễ, jitter, thiết bị mạng, WiFi, server bên kia và overhead của giao thức.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Cực ngắn:</p>
              <p>Băng thông là khả năng tối đa, thông lượng là tốc độ thực tế, độ trễ là thời gian chờ.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {concepts.map((cpt) => <ConceptMiniCard key={cpt.id} concept={cpt} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConceptExplorer() {
  const [activeId, setActiveId] = useState("bandwidth");
  const active = concepts.find((c) => c.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khám phá từng khái niệm" icon={<Search />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {concepts.map((concept) => {
            const cc = colorClasses[concept.color];
            const isActive = activeId === concept.id;
            return (
              <button key={concept.id} onClick={() => setActiveId(concept.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${cc.bg} ${cc.border} ${cc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">{React.cloneElement(concept.icon, { size: 19 })}<span className="font-black text-lg">{concept.label}</span></div>
                <p className="text-xs opacity-80">{concept.en}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.en}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.label}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.summary}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">
              <strong className={c.text}>Câu hỏi nó trả lời:</strong> {active.question}
            </div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Đơn vị thường gặp" value={active.unit} icon={<TableProperties />} color={active.color} />
            <InfoBox title="Ví dụ đời sống" value={active.analogy} icon={<LightbulbIcon />} color={active.color} />
            <ConceptVisual concept={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BitByteCalculator() {
  const [mbps, setMbps] = useState(100);
  const mbpsNum = Number(mbps) || 0;
  const mbs = mbpsNum / 8;
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Mbps không phải MB/s" icon={<CalculatorIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Nhập băng thông Mbps</h3>
              <input type="number" value={mbps} onChange={(e) => setMbps(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 text-white font-mono text-lg outline-none focus:border-orange-400" />
              <div className="mt-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm">
                <p><span className="text-orange-300">{mbpsNum.toLocaleString()} Mbps</span> ÷ 8 = <span className="text-green-300">{mbs.toLocaleString(undefined, { maximumFractionDigits: 2 })} MB/s</span></p>
              </div>
            </div>
            <div className="text-sm text-slate-400 leading-relaxed">
              <strong className="text-white">b</strong> thường là bit. <strong className="text-white">B</strong> hoa là Byte. 1 Byte = 8 bit. Vì vậy mạng 100 Mbps lý tưởng chỉ khoảng 12.5 MB/s, chưa tính hao hụt thực tế.
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <UnitCard title="b" desc="bit" note="chữ b thường" color="cyan" />
            <UnitCard title="B" desc="Byte" note="chữ B hoa" color="orange" />
            <UnitCard title="1B" desc="8 bit" note="công thức đổi" color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("highway");
  const examples = {
    highway: {
      title: "Đường cao tốc",
      icon: <TrafficCone />,
      rows: [
        ["Số làn đường", "Băng thông"],
        ["Số xe thực tế chạy qua mỗi phút", "Thông lượng"],
        ["Thời gian xe đi từ A đến B", "Độ trễ"],
        ["Xe lúc nhanh lúc chậm thất thường", "Jitter"],
      ],
      note: "Đường có 10 làn nhưng đang kẹt xe thì số xe qua thực tế vẫn thấp. Đó giống mạng có băng thông cao nhưng thông lượng thấp.",
    },
    water: {
      title: "Ống nước",
      icon: <Waves />,
      rows: [
        ["Đường kính ống", "Băng thông"],
        ["Lượng nước thực tế chảy mỗi giây", "Thông lượng"],
        ["Thời gian nước bắt đầu tới đầu ra", "Độ trễ"],
        ["Dòng nước lúc mạnh lúc yếu", "Jitter"],
      ],
      note: "Ống lớn có thể chảy nhiều nước, nhưng nếu áp lực yếu hoặc bị tắc, lượng nước thực tế vẫn thấp.",
    },
  };
  const current = examples[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Ví dụ đời sống" icon={<Truck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("highway")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "highway" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><TrafficCone size={16} /> Đường cao tốc</button>
          <button onClick={() => setMode("water")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "water" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><Waves size={16} /> Ống nước</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6">
            <div className="bg-purple-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5">{React.cloneElement(current.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
            <p className="text-slate-300 leading-relaxed">{current.note}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {current.rows.map(([life, network]) => <MapPair key={life} life={life} network={network} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function BandwidthThroughputSimulator() {
  const [bandwidth, setBandwidth] = useState(100);
  const [wifi, setWifi] = useState(85);
  const [router, setRouter] = useState(90);
  const [server, setServer] = useState(80);
  const [overhead, setOverhead] = useState(10);
  const throughput = Math.max(0, bandwidth * (wifi / 100) * (router / 100) * (server / 100) * (1 - overhead / 100));
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Mô phỏng: từ băng thông lý thuyết đến thông lượng thực tế" icon={<SlidersHorizontal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Băng thông lý thuyết" value={bandwidth} setValue={setBandwidth} min={10} max={1000} suffix=" Mbps" color="cyan" />
            <Slider label="Chất lượng WiFi" value={wifi} setValue={setWifi} min={20} max={100} suffix="%" color="purple" />
            <Slider label="Khả năng router" value={router} setValue={setRouter} min={20} max={100} suffix="%" color="orange" />
            <Slider label="Tốc độ server bên kia" value={server} setValue={setServer} min={20} max={100} suffix="%" color="emerald" />
            <Slider label="Overhead giao thức" value={overhead} setValue={setOverhead} min={0} max={35} suffix="%" color="yellow" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-5">Kết quả ước lượng</h3>
            <div className="space-y-5">
              <Meter label="Bandwidth" value={bandwidth} max={1000} color="cyan" suffix="Mbps" />
              <Meter label="Throughput" value={throughput} max={1000} color="green" suffix="Mbps" />
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 font-mono text-sm text-green-300">
                Thông lượng thực tế ≈ {throughput.toFixed(1)} Mbps ≈ {(throughput / 8).toFixed(2)} MB/s
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Đây là mô phỏng đơn giản để thấy vì sao tốc độ thực tế thường thấp hơn con số lý thuyết trên hợp đồng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LatencyAndJitterSimulator() {
  const [distance, setDistance] = useState(30);
  const [congestion, setCongestion] = useState(20);
  const [unstable, setUnstable] = useState(15);
  const latency = Math.round(8 + distance * 1.2 + congestion * 0.7);
  const jitter = Math.round(unstable * 0.6 + congestion * 0.2);
  const samples = useMemo(() => Array.from({ length: 8 }, (_, i) => Math.max(1, latency + Math.round(Math.sin(i * 1.7) * jitter))), [latency, jitter]);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="yellow" title="Mô phỏng: độ trễ và jitter" icon={<Timer />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Khoảng cách đến server" value={distance} setValue={setDistance} min={1} max={100} suffix="%" color="orange" />
            <Slider label="Mức nghẽn mạng" value={congestion} setValue={setCongestion} min={0} max={100} suffix="%" color="red" />
            <Slider label="Độ không ổn định" value={unstable} setValue={setUnstable} min={0} max={100} suffix="%" color="purple" />
            <div className="grid grid-cols-2 gap-4">
              <QualityBox title="Latency" value={latency} unit="ms" color="orange" />
              <QualityBox title="Jitter" value={jitter} unit="ms" color="purple" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-5">Ping sample</h3>
            <div className="space-y-2 font-mono text-sm">
              {samples.map((ms, i) => <p key={i} className="text-green-300">Reply from server: bytes=32 time={ms}ms TTL=117</p>)}
            </div>
            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 text-sm text-slate-300">
              Latency là trễ bao nhiêu. Jitter là độ trễ có ổn định hay không. Video call và game cần jitter thấp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteFlow() {
  const steps = [
    { title: "Máy bạn gửi yêu cầu", text: "Client gửi request đến server chứa website.", icon: <Laptop />, color: "blue" },
    { title: "Gói tin đi qua nhiều thiết bị", text: "Máy bạn → Router nhà → ISP → Router trung gian → Server.", icon: <Router />, color: "cyan" },
    { title: "Server xử lý và phản hồi", text: "Server xử lý request rồi gửi response về client.", icon: <Server />, color: "emerald" },
    { title: "Bandwidth quyết định tải nhiều dữ liệu", text: "Ảnh, video, JavaScript, CSS cần băng thông để tải nhanh.", icon: <CloudDownload />, color: "purple" },
    { title: "Latency quyết định phản hồi ban đầu", text: "Server xa hoặc tuyến mạng vòng vèo làm bạn chờ lâu trước khi thấy phản hồi.", icon: <Timer />, color: "orange" },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="cyan" title="Khi bạn mở một website, chuyện gì xảy ra?" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[320px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed">{current.text}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <WebPath active={step} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FileDownloadCalculator() {
  const [bandwidth, setBandwidth] = useState(100);
  const [efficiency, setEfficiency] = useState(80);
  const [size, setSize] = useState(1024);
  const idealMBs = bandwidth / 8;
  const realMBs = idealMBs * (efficiency / 100);
  const idealSec = size / idealMBs;
  const realSec = size / realMBs;
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Tính thử: tải file 1 GB mất bao lâu?" icon={<HardDriveDownload />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Băng thông" value={bandwidth} setValue={setBandwidth} min={10} max={1000} suffix=" Mbps" color="cyan" />
            <Slider label="Hiệu suất thực tế" value={efficiency} setValue={setEfficiency} min={30} max={100} suffix="%" color="green" />
            <Slider label="Dung lượng file" value={size} setValue={setSize} min={100} max={5000} suffix=" MB" color="purple" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-5">Kết quả</h3>
            <div className="space-y-4 font-mono text-sm">
              <ResultLine label="Tốc độ lý tưởng" value={`${idealMBs.toFixed(2)} MB/s`} color="cyan" />
              <ResultLine label="Tốc độ thực tế" value={`${realMBs.toFixed(2)} MB/s`} color="green" />
              <ResultLine label="Thời gian lý tưởng" value={`${idealSec.toFixed(1)} giây`} color="cyan" />
              <ResultLine label="Thời gian thực tế" value={`${realSec.toFixed(1)} giây`} color="orange" />
            </div>
            <p className="text-sm text-slate-400 mt-5 leading-relaxed">Ví dụ chuẩn trong bài: 100 Mbps ÷ 8 = 12.5 MB/s. File 1024 MB lý tưởng mất khoảng 81.92 giây, thực tế có thể lâu hơn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: { title: "Kiểm tra độ trễ bằng ping", cmd: "ping google.com", output: "Reply from 142.250.190.14: bytes=32 time=25ms TTL=117", note: "time=25ms là RTT — thời gian đi và về của gói tin." },
    trace: { title: "Kiểm tra đường đi", cmd: "tracert google.com\n# macOS/Linux:\ntraceroute google.com", output: "1   192.168.1.1       1 ms\n2   ISP Gateway       8 ms\n3   Router trung gian 15 ms\n4   Google Server     25 ms", note: "Hop 1 thường là router nhà bạn; các hop sau là thiết bị trung gian; hop cuối là server đích." },
    speed: { title: "Speed test", cmd: "Dùng trang/ứng dụng speed test", output: "Download: 92 Mbps\nUpload: 35 Mbps\nPing: 18 ms\nJitter: 4 ms", note: "Speed test cho biết download, upload, ping và jitter ở thời điểm đo." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Lệnh kiểm tra thực tế" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">network performance terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key, item]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[250px] whitespace-pre-wrap">
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
            <ExplainRow term="bytes=32" desc="Kích thước gói tin ping." />
            <ExplainRow term="time=25ms" desc="Độ trễ đi-về, thường gọi là RTT." />
            <ExplainRow term="TTL" desc="Số bước nhảy còn lại của gói tin." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "100 Mbps nghĩa là tải 100 MB/s?", desc: "Sai. Mbps là megabit/giây. Muốn đổi gần đúng sang MB/s thì chia cho 8. 100 Mbps lý tưởng khoảng 12.5 MB/s.", good: "b thường = bit, B hoa = Byte.", icon: <Gauge /> },
    { title: "Băng thông cao luôn làm game hết lag?", desc: "Không. Game phụ thuộc nhiều vào latency và jitter. Băng thông cao giúp tải nhiều dữ liệu, nhưng không đảm bảo độ trễ thấp.", good: "Game/video call cần latency và jitter thấp.", icon: <Timer /> },
    { title: "Thông lượng phải bằng băng thông?", desc: "Không. Thông lượng thực tế thường thấp hơn do WiFi, router, server, nhiễu, chia sẻ mạng và overhead.", good: "Bandwidth là trần lý thuyết; throughput là thực tế.", icon: <CloudDownload /> },
    { title: "Ping đo tốc độ tải file?", desc: "Không. Ping chủ yếu đo độ trễ và khả năng phản hồi, không đo trực tiếp download/upload throughput.", good: "Ping đo delay; speed test đo throughput gần đúng.", icon: <Terminal /> },
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
              <p><span className="text-cyan-300">Bandwidth</span> = mức tối đa lý thuyết</p>
              <p><span className="text-emerald-300">Throughput</span> = tốc độ thực tế</p>
              <p><span className="text-orange-300">Latency</span> = thời gian dữ liệu đi tới nơi</p>
              <p><span className="text-purple-300">Jitter</span> = độ trễ dao động có ổn định không</p>
              <br />
              <p className="text-slate-500"># Đổi đơn vị</p>
              <p>100 Mbps ÷ 8 = 12.5 MB/s</p>
              <br />
              <p className="text-slate-500"># Lệnh</p>
              <p>ping = đo latency/RTT</p>
              <p>tracert/traceroute = xem các hop</p>
              <p>speed test = đo download/upload/ping/jitter</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Băng thông là gì?", options: ["Thời gian dữ liệu đi từ máy này sang máy khác", "Lượng dữ liệu tối đa đường truyền có thể truyền trong một giây", "Sự dao động của độ trễ", "Địa chỉ của máy tính trong mạng"], correct: 1, explanation: "Bandwidth là khả năng tối đa của đường truyền, thường đo bằng bps, Mbps hoặc Gbps." },
  { question: "Thông lượng khác băng thông ở điểm nào?", options: ["Thông lượng là tốc độ thực tế đạt được", "Thông lượng là địa chỉ IP", "Thông lượng luôn lớn hơn băng thông", "Thông lượng là tên WiFi"], correct: 0, explanation: "Throughput là lượng dữ liệu thực tế truyền được, thường thấp hơn bandwidth do nhiều yếu tố." },
  { question: "Latency thường dùng đơn vị nào?", options: ["MB/s", "ms", "GB", "Volt"], correct: 1, explanation: "Latency thường đo bằng millisecond, viết tắt là ms." },
  { question: "100 Mbps lý tưởng tương đương bao nhiêu MB/s?", options: ["100 MB/s", "80 MB/s", "12.5 MB/s", "1.25 MB/s"], correct: 2, explanation: "1 Byte = 8 bit, nên 100 Mbps ÷ 8 = 12.5 MB/s." },
  { question: "Một đường truyền 200 Mbps nhưng tải thực tế khoảng 20 MB/s. 200 Mbps lý thuyết là bao nhiêu MB/s và kết quả 20 MB/s có bất thường không?", options: ["25 MB/s; không quá bất thường vì thực tế thường thấp hơn lý thuyết", "200 MB/s; rất bất thường", "2.5 MB/s; quá cao", "1600 MB/s; quá thấp"], correct: 0, explanation: "200 Mbps ÷ 8 = 25 MB/s. Nếu thực tế 20 MB/s, có thể là bình thường do overhead, WiFi, server, router và môi trường." },
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
    return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Sau khi hiểu tín hiệu và tốc độ truyền, bài tiếp theo sẽ học cách biểu diễn bit 0/1 thành dạng tín hiệu cụ thể trên đường truyền.</p>
      <Link to="/phan-3-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 3.3 — Mã hóa đường truyền / Line Encoding <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroMeters() {
  return <div className="space-y-4">{concepts.map((cpt, idx) => <ConceptMiniCard key={cpt.id} concept={cpt} />)}</div>;
}

function ConceptMiniCard({ concept }) {
  const c = colorClasses[concept.color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex gap-3 items-start`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(concept.icon, { size: 22 })}</div><div><p className={`${c.text} font-black`}>{concept.label}</p><p className="text-xs text-slate-400 mt-1">{concept.question}</p></div></div>;
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function LightbulbIcon() { return <Zap />; }
function CalculatorIcon() { return <Gauge />; }

function ConceptVisual({ concept }) {
  if (concept.id === "bandwidth") return <RoadVisual lanes={6} cars={3} title="Đường rộng: sức chứa tối đa lớn" color="cyan" />;
  if (concept.id === "throughput") return <RoadVisual lanes={6} cars={5} title="Xe thực tế chạy qua: thông lượng" color="emerald" />;
  if (concept.id === "latency") return <LatencyVisual />;
  return <JitterVisual />;
}

function RoadVisual({ lanes, cars, title, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className={`${c.text} font-bold mb-4`}>{title}</h4><div className="space-y-2">{Array.from({ length: lanes }, (_, i) => <div key={i} className="h-8 bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden">{i < cars && <div className={`${c.solid} absolute top-1 left-${i % 2 === 0 ? "6" : "20"} h-6 w-12 rounded-lg`} style={{ left: `${12 + i * 9}%` }} />}</div>)}</div></div>;
}

function LatencyVisual() {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-orange-300 font-bold mb-4">RTT = đi + về</h4><div className="flex items-center gap-3"><Laptop className="text-blue-300" /><div className="flex-1"><div className="h-2 bg-orange-500 rounded-full mb-3" /><div className="h-2 bg-orange-500 rounded-full" /></div><Server className="text-emerald-300" /></div><p className="text-sm text-slate-400 mt-4">ping thường đo thời gian gói tin đi đến server và phản hồi về.</p></div>;
}

function JitterVisual() {
  const vals = [20, 22, 80, 25, 45, 21];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-purple-300 font-bold mb-4">Độ trễ dao động</h4><div className="flex items-end gap-3 h-28">{vals.map((v, i) => <div key={i} className="flex-1 bg-purple-500/70 rounded-t-xl" style={{ height: `${v}%` }} />)}</div><p className="text-sm text-slate-400 mt-4">Các gói tin có thời gian khác nhau quá nhiều → jitter cao.</p></div>;
}

function UnitCard({ title, desc, note, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6 text-center`}><p className={`${c.text} text-4xl font-black mb-2`}>{title}</p><p className="text-white font-bold">{desc}</p><p className="text-sm text-slate-400 mt-2">{note}</p></div>;
}

function MapPair({ life, network }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="text-slate-400 text-sm mb-2">{life}</p><p className="text-purple-300 font-black">{network}</p></div>;
}

function Slider({ label, value, setValue, min, max, suffix, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value}{suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>;
}

function Meter({ label, value, max, color, suffix }) {
  const c = colorClasses[color];
  const pct = Math.min(100, (value / max) * 100);
  return <div><div className="flex justify-between mb-2 text-sm"><span className="text-slate-400">{label}</span><span className={`${c.text} font-mono font-bold`}>{value.toFixed ? value.toFixed(1) : value} {suffix}</span></div><div className="h-4 bg-slate-900 border border-slate-800 rounded-full overflow-hidden"><div className={`${c.solid} h-full`} style={{ width: `${pct}%` }} /></div></div>;
}

function QualityBox({ title, value, unit, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className={`${c.text} font-bold mb-2`}>{title}</p><p className="text-3xl font-black text-white">{value}<span className="text-sm text-slate-400 ml-1">{unit}</span></p></div>;
}

function WebPath({ active }) {
  const nodes = [
    { label: "Máy bạn", icon: <Laptop /> },
    { label: "Router nhà", icon: <Router /> },
    { label: "ISP", icon: <Network /> },
    { label: "Router trung gian", icon: <Router /> },
    { label: "Server", icon: <Server /> },
  ];
  return <div className="space-y-3">{nodes.map((n, i) => <div key={n.label} className={`flex items-center gap-3 p-3 rounded-2xl border ${i <= active ? "bg-cyan-500/10 border-cyan-400/40" : "bg-slate-900 border-slate-800"}`}><div className={`${i <= active ? "text-cyan-300" : "text-slate-600"}`}>{React.cloneElement(n.icon, { size: 22 })}</div><p className={`${i <= active ? "text-white" : "text-slate-500"} font-bold`}>{n.label}</p>{i < nodes.length - 1 && <ArrowRight className="ml-auto text-slate-600" />}</div>)}</div>;
}

function ResultLine({ label, value, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex justify-between gap-4"><span className="text-slate-400">{label}</span><span className={`${c.text} font-black`}>{value}</span></div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
