import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Binary,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Cpu,
  Eye,
  Gauge,
  Lightbulb,
  Lock,
  Network,
  Radio,
  Search,
  Signal,
  SlidersHorizontal,
  Sparkles,
  TableProperties,
  Terminal,
  Timer,
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

const encodingTypes = [
  {
    id: "nrz",
    name: "NRZ",
    full: "Non-Return-to-Zero",
    rule: "1 = mức cao, 0 = mức thấp",
    idea: "Tín hiệu không quay về mức 0 giữa mỗi bit. Bit 1 giữ mức cao, bit 0 giữ mức thấp.",
    pros: ["Dễ hiểu", "Dễ triển khai", "Ít chuyển mức", "Tiết kiệm hơn Manchester"],
    cons: ["Dễ mất đồng bộ khi nhiều bit giống nhau", "Có thể có DC Component", "Chuỗi 00000000 hoặc 11111111 khó giữ nhịp"],
    color: "cyan",
    icon: <Signal />,
  },
  {
    id: "manchester",
    name: "Manchester",
    full: "Manchester Encoding",
    rule: "0 = cao xuống thấp, 1 = thấp lên cao",
    idea: "Mỗi bit đều có chuyển mức ở giữa bit, giúp bên nhận giữ nhịp tốt hơn.",
    pros: ["Đồng bộ tốt", "Mỗi bit đều có chuyển mức", "Ít bị mất nhịp khi bit lặp lại", "Không giữ nguyên mức quá lâu"],
    cons: ["Cần nhiều chuyển mức hơn", "Tốn băng thông hơn NRZ", "Tín hiệu phức tạp hơn"],
    color: "emerald",
    icon: <Waves />,
  },
  {
    id: "diff",
    name: "Differential Manchester",
    full: "Differential Manchester Encoding",
    rule: "0 = có chuyển mức ở đầu bit, 1 = không chuyển mức ở đầu bit; luôn đổi mức giữa bit",
    idea: "Dữ liệu được mã hóa bằng sự thay đổi tín hiệu, không chỉ bằng mức cao/thấp tuyệt đối.",
    pros: ["Đồng bộ tốt", "Chống lỗi đảo cực tốt hơn", "Ít phụ thuộc vào mức cao/thấp tuyệt đối", "Có chuyển mức giữa mỗi bit"],
    cons: ["Phức tạp hơn NRZ", "Cần nhiều chuyển mức", "Cũng tốn băng thông hơn NRZ"],
    color: "purple",
    icon: <SlidersHorizontal />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Signal className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 3: Tầng Vật Lý — Physical Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 3.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyLineEncoding />
        <HighLowSignal />
        <SyncAndDcComponent />
        <EncodingExplorer />
        <EncodingComparison />
        <RealWorldExamples />
        <BitEncodingSimulator />
        <SyncProblemSimulator />
        <PhysicalMedia />
        <CliAndTools />
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
            <Binary size={16} /> Bit 0/1 biến thành tín hiệu như thế nào?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Mã hóa đường truyền
            <span className="block text-cyan-400">Line Encoding</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Line Encoding là quy ước biến chuỗi bit 0 và 1 thành tín hiệu vật lý như điện áp, sóng điện từ hoặc ánh sáng để truyền qua đường truyền.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Line Encoding</span> = bảng quy ước biến bit thành tín hiệu.</p>
            <p><span className="text-orange-300">Vấn đề chính</span> = đồng bộ, nhiễu, DC component.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroWavePreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu Line Encoding là gì và vì sao cần nó.",
    "Biết cách bit 0 và 1 được biến thành tín hiệu điện, sóng hoặc ánh sáng.",
    "Hiểu NRZ, Manchester và Differential Manchester ở mức cơ bản.",
    "Hiểu vì sao tín hiệu cần đồng bộ giữa bên gửi và bên nhận.",
    "Biết ưu, nhược điểm cơ bản của từng kiểu mã hóa.",
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

function WhyLineEncoding() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần mã hóa đường truyền?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Máy tính lưu dữ liệu bằng bit <strong className="text-white">0 và 1</strong>, nhưng dây mạng, WiFi và cáp quang không nhìn thấy con số 0/1 như con người.</p>
            <p>Chúng chỉ truyền được các dạng vật lý: điện áp, sóng điện từ hoặc xung ánh sáng. Vì vậy, cần một quy ước để nói: bit 0 là tín hiệu nào, bit 1 là tín hiệu nào.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Định nghĩa:</p>
              <p>Line Encoding là cách biến chuỗi bit 0 và 1 thành dạng tín hiệu vật lý để truyền qua đường truyền.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <MediumCard title="Cáp đồng" signal="Điện áp" icon={<Cable />} color="orange" />
            <MediumCard title="Cáp quang" signal="Ánh sáng" icon={<Sparkles />} color="cyan" />
            <MediumCard title="WiFi" signal="Sóng điện từ" icon={<Wifi />} color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HighLowSignal() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Tín hiệu mức cao và mức thấp" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Cách đơn giản nhất là quy ước: <strong className="text-cyan-300">1 = mức cao</strong>, <strong className="text-orange-300">0 = mức thấp</strong>.</p>
            <p>Ví dụ chuỗi bit <span className="font-mono text-green-300">10110</span> có thể được truyền thành: cao - thấp - cao - cao - thấp.</p>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm">
              <p className="text-orange-300 font-bold mb-2">Vấn đề:</p>
              <p>Nếu có nhiều bit giống nhau liên tiếp như 00000000, tín hiệu giữ nguyên mức quá lâu, bên nhận có thể mất nhịp.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <BitWave bits="10110" type="nrz" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SyncAndDcComponent() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="yellow" title="Đồng bộ và DC Component" icon={<Clock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard
          title="Đồng bộ — Synchronization"
          icon={<Timer />}
          color="yellow"
          text="Đồng bộ nghĩa là bên gửi và bên nhận phải cùng hiểu khi nào một bit bắt đầu và khi nào một bit kết thúc. Nếu lệch nhịp, dữ liệu có thể sai."
          code="Bên gửi: mỗi 1ms gửi 1 bit\nBên nhận: phải đọc đúng mỗi 1ms"
        />
        <ConceptCard
          title="DC Component"
          icon={<Gauge />}
          color="orange"
          text="Nếu tín hiệu giữ ở mức cao hoặc thấp quá lâu, nó tạo ra thành phần điện một chiều, gây bất lợi cho một số hệ thống truyền dẫn."
          code="11111111 → mức cao rất lâu\n00000000 → mức thấp rất lâu"
        />
      </div>
    </section>
  );
}

function EncodingExplorer() {
  const [activeId, setActiveId] = useState("nrz");
  const [bits, setBits] = useState("10110010");
  const active = encodingTypes.find((e) => e.id === activeId);
  const c = colorClasses[active.color];
  const cleanBits = bits.replace(/[^01]/g, "").slice(0, 12) || "10110010";
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="Khám phá các kiểu mã hóa" icon={<Eye />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {encodingTypes.map((type) => {
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
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed mb-4">{active.idea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300"><strong className={c.text}>Quy ước:</strong> {active.rule}</div>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chuỗi bit mẫu</label>
              <input value={bits} onChange={(e) => setBits(e.target.value)} className="mt-2 w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-cyan-400" />
              <p className="text-xs text-slate-500 mt-2">Chỉ nhập 0 và 1, tối đa 12 bit.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><BitWave bits={cleanBits} type={activeId} /></div>
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EncodingComparison() {
  const rows = [
    ["NRZ", "1 = cao, 0 = thấp", "Đơn giản, tiết kiệm", "Dễ mất đồng bộ, có DC Component"],
    ["Manchester", "Mỗi bit đổi mức ở giữa", "Đồng bộ tốt", "Tốn băng thông hơn"],
    ["Differential Manchester", "Dựa vào có/không đổi mức ở đầu bit", "Đồng bộ tốt, ít phụ thuộc cực tính", "Phức tạp hơn"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="orange" title="Bảng so sánh nhanh" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Kiểu mã hóa</th><th className="p-4">Ý tưởng chính</th><th className="p-4">Ưu điểm</th><th className="p-4">Nhược điểm</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([name, idea, pros, cons], index) => (
                <tr key={name} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                  <td className="p-4 text-white font-bold">{name}</td>
                  <td className="p-4 text-slate-300">{idea}</td>
                  <td className="p-4 text-green-300">{pros}</td>
                  <td className="p-4 text-orange-300">{cons}</td>
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
  const [mode, setMode] = useState("flashlight");
  const examples = {
    flashlight: {
      title: "Đèn pin gửi tín hiệu",
      icon: <Lightbulb />,
      text: "Bật đèn = 1, tắt đèn = 0. Gửi 10110 nghĩa là bật - tắt - bật - bật - tắt. Nhưng nếu gửi 00000000, đèn tắt quá lâu, người nhận có thể không biết bạn gửi 8 số 0 hay đã ngừng gửi.",
      code: "1 = bật đèn\n0 = tắt đèn\n10110 = bật - tắt - bật - bật - tắt",
      color: "yellow",
    },
    drum: {
      title: "Nhịp trống",
      icon: <Radio />,
      text: "Trống mạnh = 1, trống nhẹ = 0. Nếu đánh liên tục một kiểu quá lâu, người nghe dễ mất nhịp. Manchester giống ý tưởng mỗi bit đều có thay đổi ở giữa nhịp để giữ đồng bộ.",
      code: "Mỗi bit có một nhịp giữa\n→ người nghe dễ giữ nhịp hơn",
      color: "orange",
    },
    cable: {
      title: "Cáp mạng",
      icon: <Cable />,
      text: "Card mạng không gửi chữ 1 hoặc 0 trực tiếp. Nó tạo tín hiệu điện, ánh sáng hoặc sóng theo kiểu mã hóa mà hai bên đã hiểu chung.",
      code: "10110010\n→ H L H H L L H L\n→ tín hiệu vật lý",
      color: "cyan",
    },
  };
  const current = examples[mode];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Ví dụ thực tế" icon={<Lightbulb />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(examples).map(([key, item]) => (
            <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.title}</button>
          ))}
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

function BitEncodingSimulator() {
  const steps = [
    { title: "Dữ liệu thành bit", text: "Ký tự, ảnh hoặc file đã được máy tính biến thành chuỗi bit.", code: "10110010", color: "cyan", icon: <Binary /> },
    { title: "Card mạng chọn kiểu mã hóa", text: "Bên gửi và bên nhận phải hiểu cùng chuẩn mã hóa.", code: "NRZ / Manchester / Differential Manchester", color: "purple", icon: <Cpu /> },
    { title: "Bit biến thành tín hiệu", text: "Ví dụ NRZ: 1 = High, 0 = Low.", code: "H L H H L L H L", color: "orange", icon: <Signal /> },
    { title: "Tín hiệu chạy trên đường truyền", text: "Tín hiệu có thể qua cáp đồng, cáp quang hoặc sóng không dây.", code: "Cáp đồng / Cáp quang / WiFi", color: "emerald", icon: <Network /> },
    { title: "Bên nhận lấy mẫu", text: "Sampling là đo tín hiệu tại những thời điểm nhất định để đọc bit.", code: "High → 1\nLow → 0", color: "yellow", icon: <Timer /> },
    { title: "Khôi phục bit ban đầu", text: "Nếu đồng bộ tốt, bên nhận khôi phục đúng chuỗi bit.", code: "10110010", color: "green", icon: <CheckCircle2 /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Cơ chế: gửi chuỗi bit 10110010" icon={<ArrowRight />} />
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <VerticalFlow steps={steps} active={step} setActive={setStep} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SyncProblemSimulator() {
  const [bits, setBits] = useState("11111111");
  const [drift, setDrift] = useState(35);
  const cleanBits = bits.replace(/[^01]/g, "").slice(0, 12) || "11111111";
  const readCount = Math.max(1, cleanBits.length + Math.round((drift - 30) / 25));
  const guessed = cleanBits[0].repeat(readCount);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Vấn đề mất đồng bộ khi bit lặp lại" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chuỗi bit dài cùng giá trị</label>
              <input value={bits} onChange={(e) => setBits(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-yellow-400" />
              <div className="mt-5">
                <div className="flex justify-between text-sm mb-2"><span className="text-white font-bold">Độ lệch nhịp bên nhận</span><span className="text-yellow-300 font-mono">{drift}%</span></div>
                <input type="range" min="0" max="100" value={drift} onChange={(e) => setDrift(Number(e.target.value))} className="w-full accent-yellow-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ResultBox title="Bên gửi" value={cleanBits} color="green" />
              <ResultBox title="Bên nhận có thể đọc" value={guessed} color={drift > 60 ? "red" : "yellow"} />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <h4 className="text-white font-bold mb-4">NRZ với chuỗi lặp lại</h4>
            <BitWave bits={cleanBits} type="nrz" />
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Khi tín hiệu giữ nguyên mức quá lâu, bên nhận khó biết chính xác có bao nhiêu bit nếu đồng hồ lấy mẫu bị lệch. Manchester giảm vấn đề này vì mỗi bit đều có chuyển mức ở giữa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhysicalMedia() {
  const items = [
    { title: "Cáp đồng", signal: "Điện áp cao/thấp", icon: <Cable />, color: "orange" },
    { title: "Cáp quang", signal: "Xung ánh sáng", icon: <Sparkles />, color: "cyan" },
    { title: "WiFi", signal: "Sóng điện từ được điều chế", icon: <Wifi />, color: "purple" },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="Line Encoding nằm ở tầng vật lý" icon={<Network />} />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => {
          const c = colorClasses[item.color];
          return <div key={item.title} className={`${c.bg} ${c.border} border rounded-3xl p-6 hover:-translate-y-1 transition-all`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(item.icon, { size: 28 })}</div><h3 className="text-2xl font-extrabold text-white mb-2">{item.title}</h3><p className={`${c.text} font-bold mb-3`}>{item.signal}</p><p className="text-sm text-slate-300 leading-relaxed">Bit không đi trực tiếp dưới dạng chữ 0/1; nó được biểu diễn thành tín hiệu phù hợp với môi trường truyền.</p></div>;
        })}
      </div>
    </section>
  );
}

function CliAndTools() {
  const [tab, setTab] = useState("cli");
  const content = {
    cli: {
      title: "Có xem được line encoding bằng ping không?",
      code: "ping google.com\ntracert google.com\ntraceroute google.com",
      text: "Không. Các lệnh thông thường như ping, tracert/traceroute giúp kiểm tra kết nối, độ trễ và đường đi, nhưng không hiển thị trực tiếp dạng sóng line encoding ở tầng vật lý.",
    },
    tools: {
      title: "Muốn quan sát tín hiệu thật cần gì?",
      code: "Oscilloscope\nLogic Analyzer\nNetwork Analyzer chuyên sâu",
      text: "Line encoding nằm rất sát phần cứng. Muốn nhìn dạng sóng điện hoặc tín hiệu số thật, cần thiết bị chuyên dụng như oscilloscope hoặc logic analyzer.",
    },
  };
  const current = content[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="blue" title="CLI và công cụ quan sát tín hiệu" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">physical layer tools</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setTab("cli")} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === "cli" ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>CLI thông thường</button>
              <button onClick={() => setTab("tools")} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === "tools" ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>Thiết bị chuyên dụng</button>
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[230px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p className="text-green-300">{current.code}</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách hiểu</h3>
          <p className="text-slate-300 leading-relaxed">{current.text}</p>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Line Encoding là mã hóa bảo mật?", desc: "Không. Line Encoding không phải encryption. Nó chỉ biến bit thành tín hiệu vật lý để truyền đi.", good: "Line Encoding ≠ mã hóa bảo mật.", icon: <Lock /> },
    { title: "NRZ luôn tốt nhất vì đơn giản?", desc: "Không. NRZ đơn giản nhưng có thể mất đồng bộ khi chuỗi 0 hoặc 1 kéo dài và có thể sinh DC Component.", good: "Đơn giản không đồng nghĩa luôn tối ưu.", icon: <Signal /> },
    { title: "Manchester không có nhược điểm?", desc: "Không. Manchester đồng bộ tốt nhưng cần nhiều chuyển mức hơn, nên tốn băng thông hơn NRZ.", good: "Đồng bộ tốt hơn nhưng chi phí tín hiệu cao hơn.", icon: <Waves /> },
    { title: "ping có thể hiển thị dạng sóng?", desc: "Không. ping chỉ kiểm tra phản hồi mạng và độ trễ. Muốn xem dạng sóng cần thiết bị vật lý chuyên dụng.", good: "Line encoding nằm rất sát phần cứng.", icon: <Terminal /> },
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
              <p><span className="text-cyan-300">Line Encoding</span> = biến bit 0/1 thành tín hiệu vật lý.</p>
              <p><span className="text-cyan-300">NRZ</span> = 1 cao, 0 thấp; đơn giản nhưng dễ mất nhịp.</p>
              <p><span className="text-emerald-300">Manchester</span> = mỗi bit đổi mức ở giữa; đồng bộ tốt hơn.</p>
              <p><span className="text-purple-300">Differential Manchester</span> = dựa vào sự thay đổi ở đầu bit; ít phụ thuộc cực tính.</p>
              <br />
              <p className="text-slate-500"># Vấn đề quan trọng</p>
              <p>Synchronization = giữ nhịp đọc bit.</p>
              <p>DC Component = tín hiệu nghiêng lâu về một mức.</p>
              <p>Sampling = bên nhận đo tín hiệu theo thời điểm.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Line Encoding dùng để làm gì?", options: ["Đặt địa chỉ IP cho máy tính", "Biến bit 0 và 1 thành tín hiệu vật lý để truyền đi", "Mã hóa mật khẩu WiFi", "Chia mạng thành nhiều subnet"], correct: 1, explanation: "Line Encoding là quy ước biến chuỗi bit 0 và 1 thành dạng tín hiệu vật lý như điện áp, sóng hoặc ánh sáng." },
  { question: "NRZ có ý tưởng đơn giản nào?", options: ["Mỗi bit luôn có hai lần đổi mức", "1 = mức cao, 0 = mức thấp", "Chỉ dùng ánh sáng", "Không cần đồng bộ"], correct: 1, explanation: "Một dạng NRZ đơn giản quy ước 1 là mức cao, 0 là mức thấp và không quay về 0 giữa mỗi bit." },
  { question: "Vì sao NRZ có thể gặp vấn đề với 00000000 hoặc 11111111?", options: ["Vì tín hiệu giữ nguyên mức quá lâu làm bên nhận dễ mất nhịp", "Vì không thể truyền bit 0", "Vì IP bị đổi", "Vì DNS lỗi"], correct: 0, explanation: "Chuỗi bit giống nhau kéo dài làm tín hiệu ít chuyển mức, khiến bên nhận khó giữ nhịp và có thể đếm sai số bit." },
  { question: "Manchester giúp đồng bộ tốt hơn vì sao?", options: ["Vì mỗi bit đều có chuyển mức ở giữa", "Vì bỏ qua tầng vật lý", "Vì không truyền tín hiệu", "Vì biến WiFi thành cáp quang"], correct: 0, explanation: "Manchester có chuyển mức ở giữa mỗi bit, giúp bên nhận lấy nhịp tốt hơn." },
  { question: "Nhược điểm chính của Manchester so với NRZ là gì?", options: ["Không thể truyền bit 1", "Tốn băng thông hơn vì cần nhiều chuyển mức hơn", "Không thể đồng bộ", "Không dùng được trong mạng"], correct: 1, explanation: "Manchester đồng bộ tốt hơn nhưng cần nhiều thay đổi tín hiệu hơn, nên tốn băng thông hơn NRZ." },
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
      <p className="text-slate-400 mb-4">Sau khi biết cách một luồng bit được truyền, bài tiếp theo sẽ học cách nhiều luồng dữ liệu chia sẻ cùng một đường truyền.</p>
      <Link to="/phan-3-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 3.4 — Ghép kênh: FDM, TDM, WDM <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroWavePreview() {
  return <div className="space-y-4"><PreviewWave title="NRZ" type="nrz" bits="10110010" color="cyan" /><PreviewWave title="Manchester" type="manchester" bits="10110010" color="emerald" /><PreviewWave title="Differential Manchester" type="diff" bits="10110010" color="purple" /></div>;
}

function PreviewWave({ title, type, bits, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black mb-2`}>{title}</p><BitWave bits={bits} type={type} compact /></div>;
}

function MediumCard({ title, signal, icon, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6 text-center`}><div className={`${c.text} flex justify-center mb-4`}>{React.cloneElement(icon, { size: 36 })}</div><h3 className="text-white font-bold text-lg mb-2">{title}</h3><p className={`${c.text} font-bold`}>{signal}</p></div>;
}

function ConceptCard({ title, icon, color, text, code }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function BitWave({ bits, type, compact = false }) {
  const width = 560;
  const height = compact ? 100 : 150;
  const top = compact ? 25 : 35;
  const bottom = compact ? 70 : 105;
  const step = width / bits.length;
  const half = step / 2;
  const stroke = type === "nrz" ? "rgb(34 211 238)" : type === "manchester" ? "rgb(52 211 153)" : "rgb(216 180 254)";
  const d = useMemo(() => buildWavePath(bits, type, step, half, top, bottom), [bits, type, step, half, top, bottom]);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={compact ? "w-full h-24" : "w-full h-40"}>
      <line x1="0" y1={top} x2={width} y2={top} stroke="rgb(51 65 85)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="0" y1={bottom} x2={width} y2={bottom} stroke="rgb(51 65 85)" strokeWidth="1" strokeDasharray="4 6" />
      {!compact && bits.split("").map((b, i) => <React.Fragment key={i}><line x1={i * step} y1="12" x2={i * step} y2={height - 24} stroke="rgb(30 41 59)" strokeWidth="1" /><text x={i * step + step / 2 - 5} y={height - 8} fill="rgb(148 163 184)" fontSize="14" fontWeight="700">{b}</text></React.Fragment>)}
      <path d={d} fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {!compact && <><text x="8" y={top - 8} fill="rgb(148 163 184)" fontSize="12">High</text><text x="8" y={bottom - 8} fill="rgb(148 163 184)" fontSize="12">Low</text></>}
    </svg>
  );
}

function buildWavePath(bits, type, step, half, top, bottom) {
  if (!bits) return "";
  if (type === "nrz") {
    let y = bits[0] === "1" ? top : bottom;
    let d = `M0 ${y}`;
    for (let i = 0; i < bits.length; i++) {
      const xEnd = (i + 1) * step;
      d += ` H${xEnd}`;
      if (i < bits.length - 1) {
        const nextY = bits[i + 1] === "1" ? top : bottom;
        if (nextY !== y) d += ` V${nextY}`;
        y = nextY;
      }
    }
    return d;
  }
  if (type === "manchester") {
    let d = "";
    for (let i = 0; i < bits.length; i++) {
      const x0 = i * step;
      const xm = x0 + half;
      const x1 = x0 + step;
      const first = bits[i] === "1" ? bottom : top;
      const second = bits[i] === "1" ? top : bottom;
      if (i === 0) d += `M${x0} ${first}`;
      else d += ` V${first}`;
      d += ` H${xm} V${second} H${x1}`;
    }
    return d;
  }
  let level = top;
  let d = `M0 ${level}`;
  for (let i = 0; i < bits.length; i++) {
    const x0 = i * step;
    const xm = x0 + half;
    const x1 = x0 + step;
    if (i > 0) d += ` H${x0}`;
    if (bits[i] === "0") {
      level = level === top ? bottom : top;
      d += ` V${level}`;
    }
    d += ` H${xm}`;
    level = level === top ? bottom : top;
    d += ` V${level} H${x1}`;
  }
  return d;
}

function ProsCons({ pros, cons }) {
  return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>;
}

function VerticalFlow({ steps, active, setActive }) {
  return <div className="space-y-3">{steps.map((s, index) => { const c = colorClasses[s.color]; const isActive = active === index; return <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${isActive ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${isActive ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1">{s.code}</p></div></button>; })}</div>;
}

function ResultBox({ title, value, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-bold mb-2`}>{title}</p><p className="font-mono text-lg text-white break-all">{value}</p></div>;
}
