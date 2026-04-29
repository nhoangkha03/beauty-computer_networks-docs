import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Filter,
  Gauge,
  GitBranch,
  Globe2,
  Layers,
  Lightbulb,
  Network,
  Radio,
  Router,
  Search,
  Server,
  Share2,
  Shuffle,
  Signal,
  Sparkles,
  Split,
  TableProperties,
  Terminal,
  TrafficCone,
  Users,
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

const muxTypes = [
  {
    id: "fdm",
    name: "FDM",
    full: "Frequency Division Multiplexing",
    vi: "Ghép kênh phân chia theo tần số",
    divideBy: "Tần số",
    idea: "Mỗi luồng dữ liệu dùng một dải tần riêng trên cùng một đường truyền.",
    analogy: "Nhiều đài radio cùng phát, mỗi đài một tần số khác nhau.",
    examples: ["Radio FM", "Truyền hình cáp", "Viễn thông analog", "Hệ thống dùng nhiều dải tần"],
    pros: ["Nhiều kênh truyền đồng thời", "Phù hợp tín hiệu analog", "Mỗi kênh độc lập theo tần số"],
    cons: ["Cần chia phổ tần cẩn thận", "Cần guard band", "Có thể nhiễu chéo nếu dải tần quá sát"],
    color: "cyan",
    icon: <Radio />,
  },
  {
    id: "tdm",
    name: "TDM",
    full: "Time Division Multiplexing",
    vi: "Ghép kênh phân chia theo thời gian",
    divideBy: "Thời gian",
    idea: "Các luồng dùng chung toàn bộ đường truyền nhưng thay phiên nhau theo từng khe thời gian.",
    analogy: "Nhiều người nói chuyện theo lượt: A nói, rồi B nói, rồi C nói.",
    examples: ["Điện thoại số truyền thống", "Hệ thống chia sẻ theo lượt", "Một số mạng truyền dữ liệu cũ"],
    pros: ["Phù hợp tín hiệu số", "Không cần chia dải tần riêng", "Dễ quản lý theo lượt"],
    cons: ["TDM cố định có thể lãng phí slot", "Cần đồng bộ thời gian tốt", "Độ trễ phụ thuộc chu kỳ slot"],
    color: "emerald",
    icon: <Clock />,
  },
  {
    id: "wdm",
    name: "WDM",
    full: "Wavelength Division Multiplexing",
    vi: "Ghép kênh phân chia theo bước sóng",
    divideBy: "Bước sóng ánh sáng",
    idea: "Nhiều luồng dữ liệu truyền đồng thời trong cùng một sợi quang, mỗi luồng dùng một bước sóng riêng.",
    analogy: "Nhiều màu ánh sáng đi chung trong một sợi cáp quang.",
    examples: ["Backbone ISP", "Cáp quang biển", "Kết nối trung tâm dữ liệu", "Hạ tầng viễn thông tốc độ cao"],
    pros: ["Tăng dung lượng cực lớn", "Các kênh truyền đồng thời", "Rất phù hợp mạng đường trục"],
    cons: ["Thiết bị đắt hơn", "Cần laser và bộ lọc quang", "Quản lý kỹ thuật phức tạp hơn"],
    color: "purple",
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
              <Share2 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 3: Tầng Vật Lý — Physical Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 3.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyMultiplexing />
        <ChannelMuxDemux />
        <MuxTypeExplorer />
        <FdmDiagram />
        <TdmDiagram />
        <WdmDiagram />
        <ComparisonTable />
        <RealWorldExamples />
        <MuxFlowSimulator />
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
            <Shuffle size={16} /> Nhiều luồng đi chung một đường truyền
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ghép kênh:
            <span className="block text-cyan-400">FDM, TDM, WDM</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Ghép kênh cho phép nhiều tín hiệu cùng sử dụng chung một đường truyền nhưng vẫn tách biệt được nhau bằng tần số, thời gian hoặc bước sóng ánh sáng.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">FDM</span> = chia theo tần số.</p>
            <p><span className="text-emerald-300">TDM</span> = chia theo thời gian.</p>
            <p><span className="text-purple-300">WDM</span> = chia theo bước sóng ánh sáng.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <MuxPreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu ghép kênh — Multiplexing là gì và vì sao cần dùng.",
    "Biết cách nhiều tín hiệu cùng chia sẻ một đường truyền.",
    "Phân biệt FDM, TDM và WDM.",
    "Biết ví dụ thực tế của từng kỹ thuật ghép kênh.",
    "Biết khi nào nên chia theo tần số, thời gian hoặc bước sóng ánh sáng.",
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

function WhyMultiplexing() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần ghép kênh?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Nếu mỗi cuộc gọi, mỗi máy tính hoặc mỗi luồng dữ liệu đều cần một đường dây riêng hoàn toàn, chi phí sẽ cực kỳ lớn.</p>
            <p>Ghép kênh cho phép nhiều luồng dữ liệu đi chung một “con đường”, nhưng được chia phần riêng để không bị lẫn vào nhau.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Định nghĩa:</p>
              <p>Multiplexing là kỹ thuật cho nhiều luồng tín hiệu cùng sử dụng chung một đường truyền và vẫn tách riêng được ở đầu nhận.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <BeforeAfterMux />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelMuxDemux() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Kênh, MUX và DEMUX" icon={<GitBranch />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Kênh — Channel" icon={<Layers />} color="cyan" text="Kênh là phần tài nguyên truyền thông được dành cho một luồng dữ liệu. Tài nguyên này có thể là tần số, thời gian, bước sóng hoặc mã." code="Kênh = phần riêng trong đường truyền chung" />
        <ConceptCard title="Bộ ghép — MUX" icon={<Shuffle />} color="emerald" text="Multiplexer gom nhiều tín hiệu đầu vào thành một tín hiệu tổng hợp để truyền trên một đường chung." code="A + B + C → [MUX] → đường chung" />
        <ConceptCard title="Bộ tách — DEMUX" icon={<Split />} color="orange" text="Demultiplexer tách tín hiệu chung ở đầu nhận thành lại các luồng riêng ban đầu." code="đường chung → [DEMUX] → A + B + C" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <MuxDemuxDiagram />
      </div>
    </section>
  );
}

function MuxTypeExplorer() {
  const [activeId, setActiveId] = useState("fdm");
  const active = muxTypes.find((m) => m.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Khám phá FDM, TDM, WDM" icon={<Search />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {muxTypes.map((type) => {
            const tc = colorClasses[type.color];
            const isActive = activeId === type.id;
            return (
              <button key={type.id} onClick={() => setActiveId(type.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">{React.cloneElement(type.icon, { size: 20 })}<span className="font-black text-lg">{type.name}</span></div>
                <p className="text-xs opacity-80">{type.full}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.full}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-1">{active.name}</h3>
            <p className={`${c.text} font-bold mb-4`}>{active.vi}</p>
            <p className="text-slate-300 leading-relaxed mb-5">{active.idea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300"><strong className={c.text}>Chia theo:</strong> {active.divideBy}</div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Ví dụ đời sống" value={active.analogy} icon={<Lightbulb />} color={active.color} />
            <ChipPanel title="Ví dụ thực tế" items={active.examples} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FdmDiagram() {
  const [guard, setGuard] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="FDM — chia theo tần số" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Dải tần 0–100 MHz</h3>
            <p className="text-sm text-slate-400">Mỗi kênh có một dải tần riêng. Guard band là khoảng trống tránh nhiễu chéo.</p>
          </div>
          <button onClick={() => setGuard(!guard)} className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${guard ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Guard band: {guard ? "Bật" : "Tắt"}</button>
        </div>
        <FrequencyBar guard={guard} />
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <InfoBox title="Điểm mạnh" value="Các kênh có thể truyền đồng thời trên các tần số khác nhau." icon={<CheckCircle2 />} color="green" />
          <InfoBox title="Điểm cần chú ý" value="Cần chia phổ tần cẩn thận và có khoảng bảo vệ giữa các kênh." icon={<AlertTriangle />} color="yellow" />
        </div>
      </div>
    </section>
  );
}

function TdmDiagram() {
  const [slotCount, setSlotCount] = useState(4);
  const [emptyB, setEmptyB] = useState(false);
  const sources = ["A", "B", "C", "D"].slice(0, slotCount);
  const slots = Array.from({ length: 12 }, (_, i) => sources[i % sources.length]);
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="emerald" title="TDM — chia theo thời gian" icon={<Clock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cấu hình slot</h3>
              <label className="text-sm text-slate-400">Số nguồn: {slotCount}</label>
              <input type="range" min="2" max="4" value={slotCount} onChange={(e) => setSlotCount(Number(e.target.value))} className="w-full accent-emerald-500 mt-2" />
              <button onClick={() => setEmptyB(!emptyB)} className={`mt-4 px-4 py-2 rounded-xl font-bold text-sm transition-colors ${emptyB ? "bg-yellow-500 text-slate-950" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Nguồn B không có dữ liệu: {emptyB ? "Có" : "Không"}</button>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Trong TDM cố định, nếu một nguồn không có dữ liệu, slot của nó vẫn có thể bị lãng phí.</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <TimeSlots slots={slots} emptyB={emptyB} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WdmDiagram() {
  const [channels, setChannels] = useState(4);
  const waves = ["λ1 đỏ", "λ2 xanh", "λ3 tím", "λ4 vàng", "λ5 lam", "λ6 lục"].slice(0, channels);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="WDM — chia theo bước sóng ánh sáng" icon={<Sparkles />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Số bước sóng: {channels}</h3>
              <input type="range" min="2" max="6" value={channels} onChange={(e) => setChannels(Number(e.target.value))} className="w-full accent-purple-500" />
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">Ký hiệu λ đọc là lambda, thường dùng để chỉ bước sóng.</p>
            </div>
            <InfoBox title="Ứng dụng chính" value="Backbone ISP, cáp quang biển, trung tâm dữ liệu, hạ tầng viễn thông tốc độ cao." icon={<Globe2 />} color="purple" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <WdmFiber waves={waves} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["Chia theo", "Tần số", "Thời gian", "Bước sóng ánh sáng"],
    ["Tiếng Anh", "Frequency Division Multiplexing", "Time Division Multiplexing", "Wavelength Division Multiplexing"],
    ["Môi trường thường gặp", "Sóng radio, cáp đồng, truyền hình cáp", "Hệ thống số", "Cáp quang"],
    ["Truyền đồng thời?", "Có", "Không hoàn toàn, thay phiên theo slot", "Có"],
    ["Ví dụ dễ hiểu", "Nhiều đài radio", "Nhiều người nói theo lượt", "Nhiều màu ánh sáng trong sợi quang"],
    ["Cần đồng bộ thời gian cao?", "Không bằng TDM", "Có", "Không giống TDM"],
    ["Ứng dụng chính", "Analog, viễn thông, broadcast", "Digital telecom", "Backbone quang tốc độ cao"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="orange" title="Bảng so sánh FDM, TDM, WDM" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[960px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">FDM</th><th className="p-4 text-emerald-300">TDM</th><th className="p-4 text-purple-300">WDM</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, fdm, tdm, wdm], index) => (
                <tr key={criteria} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                  <td className="p-4 text-white font-bold">{criteria}</td>
                  <td className="p-4 text-slate-300">{fdm}</td>
                  <td className="p-4 text-slate-300">{tdm}</td>
                  <td className="p-4 text-slate-300">{wdm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("highway");
  const examples = {
    highway: { title: "Đường cao tốc nhiều làn", icon: <TrafficCone />, text: "Một đường cao tốc lớn có nhiều làn. Xe con, xe tải, xe khách đi cùng một con đường nhưng được chia làn để tránh lẫn lộn. Đường lớn là đường truyền chung, mỗi làn là một kênh.", color: "cyan" },
    classroom: { title: "Lớp học phát biểu theo lượt", icon: <Users />, text: "Nếu 10 người nói cùng lúc, giáo viên không nghe được ai. Nếu A nói 10 giây, rồi B nói 10 giây, rồi C nói 10 giây, đó giống TDM chia theo thời gian.", color: "emerald" },
    radio: { title: "Đài radio FM", icon: <Radio />, text: "Nhiều đài cùng phát trong không khí nhưng mỗi đài dùng một tần số khác nhau như 90.0 MHz, 99.9 MHz, 104.5 MHz. Đây giống FDM.", color: "orange" },
    fiber: { title: "Cáp quang đường trục", icon: <Sparkles />, text: "Trong một sợi quang, nhiều bước sóng ánh sáng khác nhau có thể truyền đồng thời. Đây là ý tưởng của WDM, rất phù hợp mạng backbone tốc độ cao.", color: "purple" },
  };
  const current = examples[mode];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="purple" title="Ví dụ thực tế" icon={<Lightbulb />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(examples).map(([key, item]) => <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.title}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
            <p className="text-slate-300 leading-relaxed">{current.text}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><ExampleVisual mode={mode} /></div>
        </div>
      </div>
    </section>
  );
}

function MuxFlowSimulator() {
  const [type, setType] = useState("fdm");
  const [step, setStep] = useState(0);
  const currentType = muxTypes.find((t) => t.id === type);
  const c = colorClasses[currentType.color];
  const steps = getFlowSteps(type);
  const current = steps[step];
  const switchType = (next) => { setType(next); setStep(0); };
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="green" title="Mô phỏng cơ chế hoạt động" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {muxTypes.map((m) => <button key={m.id} onClick={() => switchType(m.id)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${type === m.id ? `${colorClasses[m.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(m.icon, { size: 16 })} {m.name}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[340px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(currentType.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — {currentType.name}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={currentType.color} /></div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: { title: "Kiểm tra độ trễ", cmd: "ping google.com", output: "Reply from 142.250.190.14: bytes=32 time=25ms TTL=117", note: "Không xem được FDM/TDM/WDM trực tiếp, nhưng quan sát được ảnh hưởng gián tiếp như độ trễ." },
    trace: { title: "Kiểm tra tuyến đường", cmd: "tracert google.com\n# macOS/Linux:\ntraceroute google.com", output: "1  192.168.1.1\n2  ISP Gateway\n3  Backbone Router\n4  google.com", note: "Giúp thấy dữ liệu đi qua các hop/router nào trên hạ tầng truyền dẫn." },
    iperf: { title: "Đo thông lượng LAN bằng iperf3", cmd: "# Máy nhận:\niperf3 -s\n\n# Máy gửi:\niperf3 -c 192.168.1.10", output: "[SUM]  0.00-10.00 sec  940 Mbits/sec", note: "iperf3 không hiển thị ghép kênh trực tiếp, nhưng đo được thông lượng thực tế của đường truyền." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="blue" title="CLI: quan sát gián tiếp hạ tầng truyền dẫn" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">multiplexing terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key, item]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
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
            <ExplainRow term="ping" desc="Đo độ trễ phản hồi." />
            <ExplainRow term="tracert/traceroute" desc="Xem tuyến đường qua các hop." />
            <ExplainRow term="iperf3" desc="Đo thông lượng giữa hai máy." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Ghép kênh là trộn dữ liệu lẫn vào nhau?", desc: "Không. Ghép kênh cho nhiều luồng dùng chung đường truyền nhưng vẫn có cách tách riêng ở đầu nhận.", good: "MUX gom lại, DEMUX tách ra.", icon: <Shuffle /> },
    { title: "FDM và WDM giống hệt nhau?", desc: "Không. FDM chia theo tần số nói chung; WDM chia theo bước sóng ánh sáng, thường dùng trong cáp quang.", good: "WDM có thể xem như họ hàng của FDM trong miền quang.", icon: <Sparkles /> },
    { title: "TDM truyền tất cả đồng thời?", desc: "Không hoàn toàn. TDM cho các nguồn thay phiên nhau dùng đường truyền theo time slot.", good: "TDM = nói theo lượt, không phải nói cùng lúc.", icon: <Clock /> },
    { title: "ping có thể hiện FDM/TDM/WDM?", desc: "Không. ping chỉ cho thấy phản hồi và độ trễ. Ghép kênh nằm ở tầng vật lý hoặc hạ tầng truyền dẫn thấp hơn.", good: "CLI phổ thông chỉ thấy ảnh hưởng gián tiếp.", icon: <Terminal /> },
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
              <p><span className="text-cyan-300">Multiplexing</span> = nhiều luồng dùng chung một đường truyền.</p>
              <p><span className="text-emerald-300">MUX</span> = gom nhiều luồng lại.</p>
              <p><span className="text-orange-300">DEMUX</span> = tách luồng chung ra lại.</p>
              <br />
              <p className="text-slate-500"># 3 kiểu chính</p>
              <p>FDM = Frequency = tần số</p>
              <p>TDM = Time = thời gian</p>
              <p>WDM = Wavelength = bước sóng ánh sáng</p>
              <br />
              <p className="text-slate-500"># Ví dụ</p>
              <p>FDM: radio FM</p>
              <p>TDM: phát biểu theo lượt</p>
              <p>WDM: nhiều màu ánh sáng trong cáp quang</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Ghép kênh — Multiplexing dùng để làm gì?", options: ["Chia một địa chỉ IP thành nhiều subnet", "Cho nhiều luồng dữ liệu dùng chung một đường truyền", "Mã hóa mật khẩu WiFi", "Kiểm tra lỗi dữ liệu"], correct: 1, explanation: "Multiplexing cho phép nhiều luồng dữ liệu cùng sử dụng chung một đường truyền và vẫn tách riêng được ở đầu nhận." },
  { question: "FDM chia đường truyền theo yếu tố nào?", options: ["Thời gian", "Bước sóng ánh sáng", "Tần số", "Địa chỉ IP"], correct: 2, explanation: "FDM là Frequency Division Multiplexing, nghĩa là chia theo tần số." },
  { question: "TDM hoạt động theo ý tưởng nào?", options: ["Mỗi luồng dùng một màu ánh sáng", "Các nguồn thay phiên nhau theo time slot", "Mỗi nguồn dùng một địa chỉ MAC", "Tất cả nguồn dùng chung một password"], correct: 1, explanation: "TDM chia thời gian thành các khe, mỗi nguồn dùng đường truyền trong slot của mình." },
  { question: "WDM đặc biệt phù hợp với môi trường nào?", options: ["Cáp quang", "Bàn phím", "Ổ cứng cơ", "Subnet mask"], correct: 0, explanation: "WDM dùng các bước sóng ánh sáng khác nhau, nên đặc biệt phù hợp với cáp quang." },
  { question: "Guard band trong FDM dùng để làm gì?", options: ["Làm địa chỉ IP nhanh hơn", "Tạo khoảng tần số trống giữa các kênh để tránh nhiễu chéo", "Tăng số lượng time slot", "Mã hóa HTTPS"], correct: 1, explanation: "Guard band là khoảng tần số trống giữa các kênh trong FDM để giảm nhiễu chéo." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu tín hiệu và ghép kênh, bài tiếp theo sẽ học các môi trường truyền dẫn vật lý thật sự dùng để chở tín hiệu.</p>
      <Link to="/phan-3-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 3.5 — Cáp đồng trục, cáp xoắn đôi, cáp quang <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function MuxPreview() {
  return <div className="space-y-4">{muxTypes.map((m) => { const c = colorClasses[m.color]; return <div key={m.id} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-3`}><div className={`${c.solid} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(m.icon, { size: 24 })}</div><div><p className={`${c.text} font-black`}>{m.name}</p><p className="text-xs text-slate-400 mt-1">Chia theo {m.divideBy.toLowerCase()}</p></div></div>; })}</div>;
}

function BeforeAfterMux() {
  return <div className="space-y-6"><div><p className="text-slate-400 font-bold mb-3">Không ghép kênh</p><div className="space-y-2 font-mono text-sm text-slate-300"><p>A ===== Đường 1 ===== A'</p><p>B ===== Đường 2 ===== B'</p><p>C ===== Đường 3 ===== C'</p></div></div><div><p className="text-cyan-300 font-bold mb-3">Có ghép kênh</p><div className="font-mono text-sm text-green-300 whitespace-pre-wrap">A --\nB ---&gt; [ MUX ] ===== Một đường chung ===== [ DEMUX ] ---&gt; A' / B' / C'\nC --/</div></div></div>;
}

function ConceptCard({ title, icon, color, text, code }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function MuxDemuxDiagram() {
  const inputs = ["Nguồn A", "Nguồn B", "Nguồn C", "Nguồn D"];
  return <div className="grid md:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-4 items-center"><div className="space-y-3">{inputs.map((i) => <SourcePill key={i} label={i} />)}</div><ArrowRight className="text-slate-600 hidden md:block" /><BigBox label="MUX" sub="Gộp tín hiệu" color="emerald" /><ArrowRight className="text-slate-600 hidden md:block" /><div className="space-y-3">{inputs.map((i) => <SourcePill key={i} label={i.replace("Nguồn", "Đích")} />)}</div><div className="md:col-span-5 bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 mt-4 text-center font-mono text-cyan-300">===== Đường truyền chung =====</div></div>;
}

function SourcePill({ label }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-center text-slate-300 font-bold text-sm">{label}</div>; }
function BigBox({ label, sub, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6 text-center`}><p className={`${c.text} text-2xl font-black`}>{label}</p><p className="text-sm text-slate-400 mt-2">{sub}</p></div>; }

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function ChipPanel({ title, items, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-white font-bold mb-3">{title}</h4><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}</div></div>;
}

function ProsCons({ pros, cons }) {
  return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>;
}

function FrequencyBar({ guard }) {
  const channels = ["A", "B", "C", "D", "E"];
  const colors = ["bg-cyan-500/70", "bg-blue-500/70", "bg-emerald-500/70", "bg-orange-500/70", "bg-purple-500/70"];
  return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><div className="flex h-24 rounded-2xl overflow-hidden border border-slate-800">{channels.map((ch, i) => <React.Fragment key={ch}><div className={`${colors[i]} flex-1 flex items-center justify-center text-white font-black`}>Kênh {ch}<br /><span className="text-xs font-normal">{i * 20}-{(i + 1) * 20} MHz</span></div>{guard && i < channels.length - 1 && <div className="w-3 bg-slate-950 border-x border-slate-700 flex items-center justify-center"><span className="rotate-90 text-[10px] text-yellow-300">guard</span></div>}</React.Fragment>)}</div><div className="flex justify-between text-xs text-slate-500 mt-3"><span>0 MHz</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100 MHz</span></div></div>;
}

function TimeSlots({ slots, emptyB }) {
  const colorMap = { A: "bg-cyan-500/70", B: "bg-emerald-500/70", C: "bg-orange-500/70", D: "bg-purple-500/70" };
  return <div><h4 className="text-white font-bold mb-4">Time slots</h4><div className="grid grid-cols-4 md:grid-cols-6 gap-2">{slots.map((s, i) => <div key={i} className={`${emptyB && s === "B" ? "bg-slate-800 text-slate-500 border-slate-700" : `${colorMap[s]} text-white border-white/10`} h-20 rounded-2xl border flex flex-col items-center justify-center font-black`}><span>Slot {i + 1}</span><span className="text-2xl">{emptyB && s === "B" ? "∅" : s}</span></div>)}</div><p className="text-sm text-slate-400 mt-4">Thời gian → | {slots.map((s) => emptyB && s === "B" ? "∅" : s).join(" | ")} |</p></div>;
}

function WdmFiber({ waves }) {
  const colors = ["bg-red-500", "bg-blue-500", "bg-purple-500", "bg-yellow-400", "bg-cyan-400", "bg-green-500"];
  return <div><h4 className="text-white font-bold mb-4">Một sợi quang chung mang nhiều λ</h4><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><div className="h-28 rounded-full border-4 border-slate-700 bg-slate-950 relative overflow-hidden flex flex-col justify-center gap-2 px-6">{waves.map((w, i) => <div key={w} className={`${colors[i]} h-2 rounded-full shadow-lg`} />)}</div><div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">{waves.map((w, i) => <div key={w} className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-center"><span className={`${i === 3 ? "text-yellow-300" : i === 4 ? "text-cyan-300" : i === 5 ? "text-green-300" : i === 0 ? "text-red-300" : i === 1 ? "text-blue-300" : "text-purple-300"} font-black`}>{w}</span></div>)}</div></div></div>;
}

function ExampleVisual({ mode }) {
  if (mode === "highway") return <div className="space-y-3">{["Làn xe con", "Làn xe tải", "Làn xe khách", "Làn xe máy"].map((l, i) => <div key={l} className="h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center px-4 text-slate-300"><span className="font-bold">{l}</span><span className="ml-auto">🚗</span></div>)}</div>;
  if (mode === "classroom") return <TimeSlots slots={["A", "B", "C", "A", "B", "C"]} emptyB={false} />;
  if (mode === "radio") return <FrequencyBar guard />;
  return <WdmFiber waves={["λ1 đỏ", "λ2 xanh", "λ3 tím", "λ4 vàng"]} />;
}

function getFlowSteps(type) {
  if (type === "fdm") return [
    { title: "Cấp dải tần riêng", text: "Mỗi nguồn được cấp một dải tần khác nhau.", code: "A = 10 MHz\nB = 20 MHz\nC = 30 MHz" },
    { title: "MUX gộp tín hiệu", text: "Bộ ghép cộng các tín hiệu khác tần số vào đường chung.", code: "A(10MHz) + B(20MHz) + C(30MHz)" },
    { title: "Truyền đồng thời", text: "Đường truyền chung mang nhiều tần số cùng lúc.", code: "Đường chung = 10MHz + 20MHz + 30MHz" },
    { title: "DEMUX tách theo tần số", text: "Đầu nhận lọc đúng dải tần để lấy từng kênh.", code: "10MHz → A\n20MHz → B\n30MHz → C" },
  ];
  if (type === "tdm") return [
    { title: "Chia thành khe thời gian", text: "Thời gian được chia thành các slot nhỏ.", code: "| Slot 1 | Slot 2 | Slot 3 | Slot 4 |" },
    { title: "Gán nguồn vào slot", text: "Mỗi nguồn dùng một slot cố định hoặc được cấp slot động.", code: "Slot 1 = A\nSlot 2 = B\nSlot 3 = C\nSlot 4 = D" },
    { title: "Gửi luân phiên", text: "Các nguồn thay phiên nhau dùng toàn bộ đường truyền.", code: "| A | B | C | D | A | B | C | D |" },
    { title: "DEMUX đọc đúng nhịp", text: "Đầu nhận đọc đúng slot để tách dữ liệu về từng nguồn.", code: "Slot 1 → A\nSlot 2 → B\nSlot 3 → C\nSlot 4 → D" },
  ];
  return [
    { title: "Mỗi nguồn dùng một bước sóng", text: "Mỗi luồng dữ liệu được gắn với một λ riêng.", code: "A = λ1\nB = λ2\nC = λ3\nD = λ4" },
    { title: "WDM MUX gộp ánh sáng", text: "Nhiều bước sóng được gộp vào cùng một sợi quang.", code: "λ1 + λ2 + λ3 + λ4 → một sợi quang" },
    { title: "Truyền đồng thời trong sợi quang", text: "Các màu/bước sóng ánh sáng cùng đi qua sợi quang chung.", code: "Sợi quang chung mang nhiều λ" },
    { title: "WDM DEMUX tách từng λ", text: "Đầu nhận dùng bộ lọc quang để tách từng bước sóng.", code: "λ1 → A\nλ2 → B\nλ3 → C\nλ4 → D" },
  ];
}

function StepFlow({ steps, active, setActive, color }) {
  const c = colorClasses[color];
  return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
