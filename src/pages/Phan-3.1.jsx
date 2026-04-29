import React, { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Cpu,
  Gauge,
  Globe2,
  Laptop,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Radio,
  Router,
  Search,
  Server,
  Signal,
  Smartphone,
  Sparkles,
  TableProperties,
  Terminal,
  Volume2,
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

const signalTypes = [
  {
    id: "analog",
    label: "Tín hiệu tương tự",
    en: "Analog Signal",
    shape: "Liên tục như sóng",
    values: "Vô số giá trị",
    examples: ["Giọng nói trực tiếp", "Sóng radio", "Kim đồng hồ", "Sóng âm thanh"],
    pros: ["Mô tả tự nhiên các hiện tượng liên tục", "Phù hợp âm thanh, sóng radio, cảm biến analog"],
    cons: ["Dễ bị nhiễu", "Sao chép nhiều lần dễ giảm chất lượng", "Máy tính xử lý trực tiếp khó hơn"],
    summary: "Tín hiệu tương tự thay đổi liên tục theo thời gian, giống như sóng nước hoặc giọng nói ngoài đời.",
    color: "orange",
    icon: <Waves />,
  },
  {
    id: "digital",
    label: "Tín hiệu số",
    en: "Digital Signal",
    shape: "Rời rạc theo mức",
    values: "Thường là 0 và 1",
    examples: ["Bit trong máy tính", "Ethernet", "USB", "Dữ liệu nhị phân"],
    pros: ["Dễ xử lý bằng máy tính", "Dễ phát hiện 0 và 1", "Chống nhiễu tốt hơn", "Sao chép ít giảm chất lượng hơn"],
    cons: ["Cần mã hóa/giải mã dữ liệu thành bit", "Tín hiệu thực tế vẫn phải đi qua môi trường vật lý"],
    summary: "Tín hiệu số biểu diễn dữ liệu bằng các trạng thái rời rạc, thường là 0 và 1.",
    color: "cyan",
    icon: <Binary />,
  },
];

const media = [
  { id: "copper", name: "Cáp đồng", signal: "Điện áp", desc: "Bit được biểu diễn bằng mức điện áp cao/thấp.", color: "orange", icon: <Cable /> },
  { id: "wifi", name: "WiFi", signal: "Sóng điện từ", desc: "Bit được mã hóa vào sóng radio truyền qua không gian.", color: "purple", icon: <Wifi /> },
  { id: "fiber", name: "Cáp quang", signal: "Ánh sáng", desc: "Bit được biểu diễn bằng xung sáng trong sợi quang.", color: "cyan", icon: <Sparkles /> },
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
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 3.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <SignalConcept />
        <SignalTypeExplorer />
        <AnalogVsDigitalCompare />
        <RealWorldExamples />
        <DataToSignalFlow />
        <LetterASimulator />
        <NoiseSimulator />
        <MediaSignalSection />
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
            <Zap size={16} /> Dữ liệu biến thành tín hiệu như thế nào?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Tín hiệu số &
            <span className="block text-cyan-400">tín hiệu tương tự</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này đi xuống tầng Physical: nơi dữ liệu không còn là chữ, ảnh hay file, mà được biểu diễn thành điện áp, sóng điện từ hoặc ánh sáng để truyền qua mạng.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Dữ liệu</span> = nội dung.</p>
            <p><span className="text-orange-300">Tín hiệu</span> = hình dạng vật lý để mang nội dung đi.</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <WavePreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu tín hiệu là gì trong mạng máy tính.",
    "Phân biệt tín hiệu số và tín hiệu tương tự.",
    "Biết vì sao máy tính dùng 0 và 1 nhưng đường truyền có thể dùng điện, sóng hoặc ánh sáng.",
    "Hiểu cách chữ, hình ảnh, âm thanh được biến thành tín hiệu để truyền đi.",
    "Hiểu các khái niệm bit, 0 và 1, sóng liên tục, nhiễu tín hiệu.",
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

function SignalConcept() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Tín hiệu là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Trước khi máy tính A gửi dữ liệu cho máy tính B, dữ liệu không thể “bay” trực tiếp dưới dạng chữ, hình ảnh hoặc file.</p>
            <p>Nó phải được biến thành một dạng vật lý có thể truyền qua môi trường truyền dẫn. Dạng vật lý đó gọi là <strong className="text-white">tín hiệu</strong>.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-1">Định nghĩa ngắn:</p>
              <p className="text-sm text-slate-300">Tín hiệu là cách dữ liệu được biểu diễn để có thể truyền qua dây mạng, WiFi hoặc cáp quang.</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {media.map((m) => <MediaMiniCard key={m.id} item={m} />)}
            </div>
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Trong dây đồng là điện áp, trong WiFi là sóng điện từ, trong cáp quang là ánh sáng. Cùng là dữ liệu, nhưng cách “mang đi” khác nhau.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalTypeExplorer() {
  const [activeId, setActiveId] = useState("digital");
  const active = signalTypes.find((s) => s.id === activeId);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khám phá tín hiệu số và tín hiệu tương tự" icon={<Search />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {signalTypes.map((type) => {
            const tc = colorClasses[type.color];
            const activeTab = activeId === type.id;
            return (
              <button key={type.id} onClick={() => setActiveId(type.id)} className={`rounded-2xl p-4 text-left border transition-all ${activeTab ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2">{React.cloneElement(type.icon, { size: 20 })}<span className="font-black text-lg">{type.label}</span></div>
                <p className="text-xs opacity-80">{type.en}</p>
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
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
              {active.id === "analog" ? <AnalogWave /> : <DigitalWave bits="1011001" />}
            </div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Dạng biến đổi" value={active.shape} icon={<Activity />} color={active.color} />
            <InfoBox title="Giá trị" value={active.values} icon={<Gauge />} color={active.color} />
            <ChipPanel title="Ví dụ" items={active.examples} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalogVsDigitalCompare() {
  const rows = [
    ["Tiếng Anh", "Analog Signal", "Digital Signal"],
    ["Dạng tín hiệu", "Liên tục", "Rời rạc"],
    ["Giá trị", "Vô số giá trị", "Thường là 0 và 1"],
    ["Ví dụ đời sống", "Giọng nói, sóng radio", "Máy tính, dữ liệu nhị phân"],
    ["Khả năng chống nhiễu", "Kém hơn", "Tốt hơn"],
    ["Xử lý bởi máy tính", "Khó hơn", "Dễ hơn"],
    ["Sao chép dữ liệu", "Dễ giảm chất lượng", "Ít giảm chất lượng hơn"],
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="So sánh tín hiệu số và tín hiệu tương tự" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">Tín hiệu tương tự</th><th className="p-4 text-cyan-300">Tín hiệu số</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, analog, digital], index) => (
                <tr key={criteria} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                  <td className="p-4 text-white font-bold">{criteria}</td>
                  <td className="p-4 text-slate-400">{analog}</td>
                  <td className="p-4 text-slate-300">{digital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <VisualCompareCard title="Analog giống dốc trượt liên tục" color="orange"><AnalogWave /></VisualCompareCard>
        <VisualCompareCard title="Digital giống cầu thang rõ mức" color="cyan"><DigitalWave bits="10100110" /></VisualCompareCard>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("voice");
  const examples = {
    voice: {
      title: "Giọng nói và tin nhắn",
      icon: <Volume2 />,
      analog: "Khi bạn nói chuyện trực tiếp, giọng nói tạo ra sóng âm liên tục: lúc cao, lúc thấp, lúc mạnh, lúc yếu.",
      digital: "Khi gửi tin nhắn “Hi”, máy tính mã hóa thành bit: 01001000 01101001, rồi biến bit thành tín hiệu để truyền đi.",
    },
    clock: {
      title: "Đồng hồ kim và đồng hồ điện tử",
      icon: <Clock />,
      analog: "Đồng hồ kim quay liên tục, có thể nằm ở rất nhiều vị trí khác nhau.",
      digital: "Đồng hồ điện tử hiển thị các giá trị rời rạc như 10:30, 10:31, 10:32.",
    },
    computer: {
      title: "Máy tính gửi dữ liệu qua dây mạng",
      icon: <Laptop />,
      analog: "Đường truyền vật lý có thể dùng điện áp biến đổi theo thời gian để mang thông tin.",
      digital: "Chuỗi bit 10110010 có thể được biểu diễn bằng mức điện áp cao/thấp rồi máy nhận chuyển lại thành bit.",
    },
  };
  const current = examples[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Ví dụ thực tế" icon={<Lightbulb />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(examples).map(([key, item]) => (
            <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>
              {React.cloneElement(item.icon, { size: 16 })} {item.title}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 22 })} {current.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ExampleBox title="Góc nhìn Analog" text={current.analog} color="orange" icon={<Waves />} />
            <ExampleBox title="Góc nhìn Digital" text={current.digital} color="cyan" icon={<Binary />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DataToSignalFlow() {
  const steps = [
    { title: "Dữ liệu gốc", text: "Người dùng gửi nội dung “Hi”.", value: "Hi", color: "purple", icon: <MonitorSmartphone /> },
    { title: "Chuyển thành bit", text: "Máy tính mã hóa ký tự thành nhị phân.", value: "01001000 01101001", color: "cyan", icon: <Binary /> },
    { title: "Chuyển thành tín hiệu", text: "Bit được biểu diễn bằng điện, sóng hoặc ánh sáng.", value: "Điện / Sóng / Ánh sáng", color: "orange", icon: <Signal /> },
    { title: "Truyền qua môi trường", text: "Tín hiệu đi qua cáp mạng, WiFi hoặc cáp quang.", value: "Cáp đồng / WiFi / Cáp quang", color: "emerald", icon: <Network /> },
    { title: "Máy nhận khôi phục", text: "Máy nhận chuyển tín hiệu thành bit rồi khôi phục dữ liệu.", value: "Hi", color: "green", icon: <Server /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Sơ đồ truyền dữ liệu cơ bản" icon={<ArrowRight />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.value}</div>
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

function LetterASimulator() {
  const [step, setStep] = useState(0);
  const [medium, setMedium] = useState("copper");
  const bitString = "01000001";
  const mediumObj = media.find((m) => m.id === medium);
  const c = colorClasses[mediumObj.color];
  const steps = [
    { title: "Người dùng nhập dữ liệu", value: "A", text: "Bạn gõ chữ A trên bàn phím." },
    { title: "Máy tính mã hóa chữ thành số", value: "ASCII(A) = 65", text: "Theo bảng mã ASCII, chữ A có mã thập phân là 65." },
    { title: "Máy tính chuyển số thành nhị phân", value: bitString, text: "Số 65 ở dạng nhị phân 8 bit là 01000001." },
    { title: "Card mạng biến bit thành tín hiệu", value: mediumObj.signal, text: `Với ${mediumObj.name}, bit được biểu diễn bằng ${mediumObj.signal.toLowerCase()}.` },
    { title: "Máy nhận giải mã tín hiệu", value: "01000001 → A", text: "Máy nhận chuyển tín hiệu về bit rồi hiểu đó là chữ A." },
  ];
  const current = steps[step];

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Cơ chế hoạt động: Gửi chữ “A” qua mạng" icon={<Cpu />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {media.map((m) => {
            const mc = colorClasses[m.color];
            return <button key={m.id} onClick={() => setMedium(m.id)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${medium === m.id ? `${mc.solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(m.icon, { size: 16 })} {m.name}</button>;
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[350px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(mediumObj.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.value}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <h4 className="text-white font-bold mb-4">Bit 01000001 biểu diễn thành tín hiệu</h4>
            {medium === "copper" && <VoltageBits bits={bitString} />}
            {medium === "wifi" && <RadioWaveBits bits={bitString} />}
            {medium === "fiber" && <LightPulseBits bits={bitString} />}
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">{mediumObj.desc}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoiseSimulator() {
  const [noise, setNoise] = useState(30);
  const analogQuality = Math.max(0, 100 - noise);
  const digitalQuality = noise < 65 ? 92 : Math.max(40, 100 - noise);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="yellow" title="Nhiễu tín hiệu: vì sao digital dễ xử lý hơn?" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-5">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Mức nhiễu: {noise}%</h3>
              <input type="range" min="0" max="100" value={noise} onChange={(e) => setNoise(Number(e.target.value))} className="w-full accent-yellow-500" />
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Analog bị méo theo mức nhiễu. Digital thường chỉ cần phân biệt “cao” và “thấp”; nếu nhiễu chưa vượt ngưỡng, máy vẫn đọc được 0 và 1.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <QualityBox title="Analog" value={analogQuality} color="orange" />
              <QualityBox title="Digital" value={digitalQuality} color="cyan" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <VisualCompareCard title="Analog khi có nhiễu" color="orange"><NoisyAnalog noise={noise} /></VisualCompareCard>
            <VisualCompareCard title="Digital khi có nhiễu" color="cyan"><NoisyDigital noise={noise} /></VisualCompareCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaSignalSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="orange" title="Môi trường truyền dẫn và loại tín hiệu" icon={<Network />} />
      <div className="grid md:grid-cols-3 gap-4">
        {media.map((m) => {
          const c = colorClasses[m.color];
          return (
            <div key={m.id} className={`${c.bg} ${c.border} border rounded-3xl p-6 hover:-translate-y-1 transition-all`}>
              <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(m.icon, { size: 28 })}</div>
              <h3 className="text-2xl font-extrabold text-white mb-2">{m.name}</h3>
              <p className={`${c.text} font-bold mb-3`}>{m.signal}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: {
      title: "Kiểm tra dữ liệu đi và về",
      cmd: "ping google.com",
      output: "Reply from 142.250.190.14: bytes=32 time=25ms TTL=117",
      note: "ping không cho bạn nhìn trực tiếp điện áp/sóng/ánh sáng, nhưng cho biết dữ liệu đã đi qua mạng và có phản hồi.",
    },
    gateway: {
      title: "Kiểm tra đường tới router gần nhất",
      cmd: "ping 192.168.1.1",
      output: "Reply from 192.168.1.1: bytes=32 time=1ms TTL=64",
      note: "Nếu time rất thấp, máy đang giao tiếp tốt với router trong mạng nội bộ. Lỗi vật lý thường làm mất gói hoặc không phản hồi.",
    },
    interface: {
      title: "Xem interface đang dùng",
      cmd: "ipconfig\n# hoặc Linux/macOS:\nip addr",
      output: "Interface: Wi-Fi\nIPv4 Address: 192.168.1.25\nDefault Gateway: 192.168.1.1",
      note: "Bạn có thể biết máy đang dùng WiFi hay Ethernet, có IP hay chưa, gateway là gì.",
    },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Lệnh thực tế liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">physical terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key, item]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[250px] whitespace-pre-wrap">
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
            <ExplainRow term="bytes=32" desc="Kích thước dữ liệu ICMP được gửi." />
            <ExplainRow term="time=25ms" desc="Thời gian dữ liệu đi đến đích và phản hồi về." />
            <ExplainRow term="TTL" desc="Số chặng tối đa còn lại của gói tin." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Máy tính truyền chữ trực tiếp qua dây?", desc: "Không. Chữ, ảnh, âm thanh đều phải được mã hóa thành bit, rồi bit được biểu diễn thành tín hiệu vật lý.", good: "Dây/sóng/ánh sáng mang tín hiệu, không mang chữ theo nghĩa trực tiếp.", icon: <Cable /> },
    { title: "Digital không bị nhiễu bao giờ?", desc: "Không đúng. Digital chống nhiễu tốt hơn vì có mức rõ ràng, nhưng nhiễu quá mạnh vẫn có thể làm mất hoặc sai dữ liệu.", good: "Digital chống nhiễu tốt hơn, không phải miễn nhiễm tuyệt đối.", icon: <AlertTriangle /> },
    { title: "Analog là cũ, digital là mới nên analog vô dụng?", desc: "Không. Nhiều hiện tượng tự nhiên như âm thanh, ánh sáng, sóng radio vốn là liên tục; analog vẫn rất quan trọng trong truyền thông.", good: "Analog và digital thường chuyển đổi qua lại trong hệ thống thực tế.", icon: <Waves /> },
    { title: "Cáp quang truyền điện?", desc: "Không. Cáp quang truyền xung ánh sáng, không phải tín hiệu điện như cáp đồng.", good: "Cáp đồng = điện, cáp quang = ánh sáng, WiFi = sóng điện từ.", icon: <Sparkles /> },
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
              <p><span className="text-cyan-300">Tín hiệu</span> = cách dữ liệu được biểu diễn để truyền đi.</p>
              <p><span className="text-orange-300">Analog</span> = liên tục, vô số giá trị, dễ bị nhiễu hơn.</p>
              <p><span className="text-cyan-300">Digital</span> = rời rạc, thường là 0 và 1, dễ xử lý hơn.</p>
              <br />
              <p className="text-slate-500"># Ví dụ</p>
              <p>Cáp đồng = điện áp</p>
              <p>WiFi = sóng điện từ</p>
              <p>Cáp quang = ánh sáng</p>
              <br />
              <p className="text-slate-500"># Chữ A</p>
              <p>A → ASCII 65 → 01000001 → tín hiệu → 01000001 → A</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Tín hiệu số thường biểu diễn dữ liệu bằng hai giá trị nào?", options: ["Cao và thấp", "Đỏ và xanh", "0 và 1", "Trái và phải"], correct: 2, explanation: "Tín hiệu số thường biểu diễn dữ liệu bằng bit, mỗi bit có giá trị 0 hoặc 1." },
  { question: "Tín hiệu tương tự có đặc điểm chính nào?", options: ["Luôn chỉ có 0 và 1", "Thay đổi liên tục theo thời gian", "Không bao giờ bị nhiễu", "Chỉ dùng trong máy tính"], correct: 1, explanation: "Tín hiệu tương tự thay đổi liên tục, giống như sóng âm thanh hoặc sóng nước." },
  { question: "Trong cáp quang, dữ liệu được biểu diễn bằng gì?", options: ["Ánh sáng", "Mực in", "Âm thanh", "Bánh răng"], correct: 0, explanation: "Cáp quang truyền dữ liệu bằng xung ánh sáng trong sợi quang." },
  { question: "Chữ A theo ví dụ trong bài được biểu diễn nhị phân là gì?", options: ["11111111", "01000001", "00000000", "10101010"], correct: 1, explanation: "Theo ASCII, chữ A có mã thập phân 65, dạng nhị phân 8 bit là 01000001." },
  { question: "Vì sao tín hiệu số thường chống nhiễu tốt hơn tín hiệu tương tự?", options: ["Vì digital không cần môi trường truyền", "Vì digital chỉ cần phân biệt các mức rõ ràng như 0 và 1", "Vì analog luôn nhanh hơn", "Vì cáp quang dùng mực"], correct: 1, explanation: "Digital dùng các mức rời rạc; nếu nhiễu chưa làm tín hiệu vượt ngưỡng sai, máy vẫn khôi phục được 0 và 1." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu tín hiệu là gì, bài tiếp theo sẽ học băng thông, thông lượng và độ trễ — vì sao mạng nhanh/chậm/lag.</p>
      <Link to="/phan-3-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 3.2 — Băng thông, thông lượng, độ trễ <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function WavePreview() {
  return <div className="space-y-4"><div className="bg-orange-500/10 border border-orange-400/40 rounded-3xl p-5"><p className="text-orange-300 font-black mb-3 flex items-center gap-2"><Waves size={18} /> Analog</p><AnalogWave /></div><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-5"><p className="text-cyan-300 font-black mb-3 flex items-center gap-2"><Binary size={18} /> Digital</p><DigitalWave bits="1011001" /></div></div>;
}

function AnalogWave() {
  return <svg viewBox="0 0 420 120" className="w-full h-32"><line x1="0" y1="60" x2="420" y2="60" stroke="rgb(51 65 85)" strokeWidth="2" strokeDasharray="5 5" /><path d="M0,60 C30,10 60,10 90,60 C120,110 150,110 180,60 C210,10 240,10 270,60 C300,110 330,110 360,60 C380,30 400,30 420,60" fill="none" stroke="rgb(251 146 60)" strokeWidth="5" strokeLinecap="round" /><text x="12" y="24" fill="rgb(251 146 60)" fontSize="14" fontWeight="700">liên tục</text></svg>;
}

function DigitalWave({ bits }) {
  const width = 420;
  const height = 120;
  const step = width / bits.length;
  let d = `M0 ${bits[0] === "1" ? 30 : 90}`;
  for (let i = 0; i < bits.length; i++) {
    const y = bits[i] === "1" ? 30 : 90;
    const nextX = (i + 1) * step;
    d += ` H${nextX}`;
    if (i < bits.length - 1) {
      const nextY = bits[i + 1] === "1" ? 30 : 90;
      d += ` V${nextY}`;
    }
  }
  return <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32"><line x1="0" y1="30" x2="420" y2="30" stroke="rgb(51 65 85)" strokeWidth="1" strokeDasharray="4 6" /><line x1="0" y1="90" x2="420" y2="90" stroke="rgb(51 65 85)" strokeWidth="1" strokeDasharray="4 6" /><path d={d} fill="none" stroke="rgb(34 211 238)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />{bits.split("").map((b, i) => <text key={`${b}-${i}`} x={i * step + step / 2 - 4} y="115" fill="rgb(148 163 184)" fontSize="14" fontWeight="700">{b}</text>)}<text x="8" y="24" fill="rgb(34 211 238)" fontSize="14" fontWeight="700">1</text><text x="8" y="84" fill="rgb(34 211 238)" fontSize="14" fontWeight="700">0</text></svg>;
}

function MediaMiniCard({ item }) {
  const c = colorClasses[item.color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-3`}>{React.cloneElement(item.icon, { size: 28 })}</div><p className="text-white font-bold text-sm">{item.name}</p><p className={`${c.text} text-xs font-semibold mt-1`}>{item.signal}</p></div>;
}

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

function VisualCompareCard({ title, color, children }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><h4 className={`${c.text} font-bold mb-3`}>{title}</h4><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3">{children}</div></div>;
}

function ExampleBox({ title, text, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h4 className="text-white font-bold text-lg mb-3">{title}</h4><p className="text-slate-300 leading-relaxed">{text}</p></div>;
}

function VerticalFlow({ steps, active, setActive }) {
  return <div className="space-y-3">{steps.map((s, index) => { const c = colorClasses[s.color]; const isActive = active === index; return <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${isActive ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${isActive ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1">{s.value}</p></div></button>; })}</div>;
}

function VoltageBits({ bits }) {
  return <div><DigitalWave bits={bits} /><div className="grid grid-cols-8 gap-2 mt-4">{bits.split("").map((b, i) => <div key={i} className={`rounded-xl p-2 text-center border ${b === "1" ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-400"}`}><p className="font-black">{b}</p><p className="text-[10px] mt-1">{b === "1" ? "Cao" : "Thấp"}</p></div>)}</div></div>;
}

function RadioWaveBits({ bits }) {
  return <div><svg viewBox="0 0 420 130" className="w-full h-36"><path d="M0,65 C20,20 40,20 60,65 C80,110 100,110 120,65 C140,20 160,20 180,65 C200,110 220,110 240,65 C260,20 280,20 300,65 C320,110 340,110 360,65 C380,20 400,20 420,65" fill="none" stroke="rgb(216 180 254)" strokeWidth="4" strokeLinecap="round" />{bits.split("").map((b, i) => <text key={i} x={i * 52 + 18} y="122" fill="rgb(148 163 184)" fontSize="14" fontWeight="700">{b}</text>)}</svg><p className="text-sm text-slate-400 mt-2">Minh họa đơn giản: bit được mã hóa vào đặc tính của sóng radio như biên độ/tần số/pha.</p></div>;
}

function LightPulseBits({ bits }) {
  return <div className="space-y-4"><div className="grid grid-cols-8 gap-2">{bits.split("").map((b, i) => <div key={i} className={`h-24 rounded-2xl border flex items-center justify-center ${b === "1" ? "bg-cyan-400/30 border-cyan-300 shadow-lg shadow-cyan-500/20" : "bg-slate-900 border-slate-700"}`}><span className={`${b === "1" ? "text-cyan-100" : "text-slate-500"} font-black`}>{b}</span></div>)}</div><p className="text-sm text-slate-400">Minh họa đơn giản: 1 có xung sáng, 0 không có hoặc mức sáng thấp.</p></div>;
}

function NoisyAnalog({ noise }) {
  const amp = 10 + noise / 6;
  const points = Array.from({ length: 13 }, (_, i) => {
    const x = i * 35;
    const base = 60 + Math.sin(i * 1.1) * 35;
    const n = Math.sin(i * 2.7) * amp;
    return `${x},${Math.max(15, Math.min(105, base + n))}`;
  }).join(" ");
  return <svg viewBox="0 0 420 120" className="w-full h-32"><polyline points={points} fill="none" stroke="rgb(251 146 60)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><text x="12" y="24" fill="rgb(251 146 60)" fontSize="14" fontWeight="700">méo dần theo nhiễu</text></svg>;
}

function NoisyDigital({ noise }) {
  const bits = noise < 65 ? "10110010" : "10?1?010";
  return <div><DigitalWave bits={bits.replace(/\?/g, "0")} /><p className="text-sm text-slate-400 mt-2">{noise < 65 ? "Nhiễu chưa vượt ngưỡng, máy vẫn đọc được 0/1." : "Nhiễu quá mạnh, một số bit có thể đọc sai hoặc không chắc chắn."}</p></div>;
}

function QualityBox({ title, value, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-bold mb-2`}>{title}</p><div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800"><div className={`${c.solid} h-full`} style={{ width: `${value}%` }} /></div><p className="text-xs text-slate-400 mt-2">Khả năng khôi phục: {value}%</p></div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
