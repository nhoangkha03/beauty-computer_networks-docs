import React, { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Cpu,
  Database,
  Eye,
  FastForward,
  Gauge,
  Hourglass,
  Layers,
  ListChecks,
  MessageCircle,
  Network,
  Package,
  PackageCheck,
  PackageX,
  Pause,
  Play,
  RadioTower,
  RefreshCcw,
  RotateCcw,
  Search,
  Server,
  ShieldAlert,
  Shuffle,
  SlidersHorizontal,
  TableProperties,
  Terminal,
  Timer,
  TrafficCone,
  Truck,
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

const protocols = [
  {
    id: "stop",
    name: "Stop-and-Wait",
    vi: "Dừng và chờ",
    idea: "Gửi 1 frame, sau đó dừng lại chờ ACK. Có ACK mới gửi frame tiếp theo.",
    strength: "Đơn giản nhưng chậm",
    pros: ["Rất dễ hiểu", "Dễ cài đặt", "Ít cần bộ nhớ", "Dễ kiểm soát thứ tự frame"],
    cons: ["Hiệu suất thấp nếu độ trễ cao", "Đường truyền rảnh nhiều lúc chờ ACK", "Không phù hợp đường truyền tốc độ cao/đường dài"],
    color: "cyan",
    icon: <Pause />,
  },
  {
    id: "sliding",
    name: "Sliding Window",
    vi: "Cửa sổ trượt",
    idea: "Cho phép gửi nhiều frame liên tiếp trong phạm vi cửa sổ trước khi phải chờ đủ ACK.",
    strength: "Nhanh hơn nhưng phức tạp hơn",
    pros: ["Tận dụng đường truyền tốt hơn", "Hiệu quả khi độ trễ cao", "Cho phép nhiều frame đang bay trên đường truyền", "Có thể điều chỉnh theo khả năng nhận"],
    cons: ["Phức tạp hơn", "Cần quản lý sequence number", "Cần buffer nhiều hơn", "Xử lý ACK/lost frame khó hơn"],
    color: "emerald",
    icon: <Shuffle />,
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
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyFlowControl />
        <ErrorVsFlow />
        <AckSection />
        <NoFlowSimulator />
        <ProtocolExplorer />
        <StopAndWaitSimulator />
        <SlidingWindowSimulator />
        <EfficiencyCalculator />
        <FlowVsCongestion />
        <RealWorldExamples />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Gauge size={16} /> Gửi nhanh quá thì máy nhận có chịu nổi không?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Kiểm soát luồng:
            <span className="block text-cyan-400">Stop-and-Wait, Sliding Window</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Flow Control điều chỉnh tốc độ gửi frame để máy nhận xử lý kịp. Stop-and-Wait đơn giản nhưng chậm, còn Sliding Window tận dụng đường truyền tốt hơn.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Flow Control</span> = bảo vệ máy nhận.</p>
            <p><span className="text-orange-300">ACK</span> = “tôi nhận được rồi”.</p>
            <p><span className="text-emerald-300">Window</span> = số frame tối đa được gửi chưa ACK.</p>
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
    "Hiểu Flow Control là gì.",
    "Biết vì sao máy gửi không được gửi dữ liệu quá nhanh.",
    "Hiểu ACK là gì và dùng để xác nhận frame.",
    "Nắm cơ chế Stop-and-Wait.",
    "Nắm cơ chế Sliding Window và vì sao hiệu quả hơn.",
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

function WhyFlowControl() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần kiểm soát luồng?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Máy gửi và máy nhận không phải lúc nào cũng có cùng tốc độ xử lý. Máy gửi có thể gửi rất nhanh, nhưng máy nhận chỉ xử lý được ít frame mỗi giây.</p>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm">
              <p><span className="text-cyan-300">Máy gửi:</span> 100 frame/giây</p>
              <p><span className="text-orange-300">Máy nhận:</span> 20 frame/giây</p>
              <p className="text-red-300 mt-2">→ buffer đầy → frame bị rơi → phải gửi lại</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Định nghĩa:</p>
              <p>Flow Control là cơ chế điều chỉnh tốc độ gửi dữ liệu để máy nhận có thể xử lý kịp.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <BufferVisual sendRate={100} receiveRate={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorVsFlow() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Flow Control khác Error Control thế nào?" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Error Control" icon={<ShieldIcon />} color="orange" text="Trả lời câu hỏi: dữ liệu/frame có bị sai trong quá trình truyền không?" code="Mục tiêu: phát hiện/sửa lỗi" />
        <ConceptCard title="Flow Control" icon={<Gauge />} color="cyan" text="Trả lời câu hỏi: tốc độ gửi như vậy máy nhận có xử lý kịp không?" code="Mục tiêu: điều chỉnh tốc độ gửi" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Khái niệm</th><th className="p-4">Câu hỏi chính</th><th className="p-4">Mục tiêu</th><th className="p-4">Ví dụ đời thường</th></tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-800"><td className="p-4 text-orange-300 font-black">Error Control</td><td className="p-4 text-slate-300">Dữ liệu có bị sai không?</td><td className="p-4 text-slate-300">Phát hiện/sửa lỗi</td><td className="p-4 text-slate-400">Kiểm hàng có bị hỏng không</td></tr>
              <tr><td className="p-4 text-cyan-300 font-black">Flow Control</td><td className="p-4 text-slate-300">Máy nhận chịu nổi tốc độ này không?</td><td className="p-4 text-slate-300">Điều chỉnh tốc độ gửi</td><td className="p-4 text-slate-400">Điều phối xe giao hàng cho kho</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AckSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="yellow" title="ACK là gì?" icon={<MessageCircle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">ACK — Acknowledgment</strong> là tín hiệu xác nhận rằng máy nhận đã nhận được frame thành công.</p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-sm">
              <p className="text-yellow-300 font-bold mb-2">Dịch nôm na:</p>
              <p>“Tôi nhận được rồi, bạn gửi tiếp đi.”</p>
            </div>
            <p>Nếu máy gửi không nhận được ACK sau một khoảng thời gian, nó có thể hiểu rằng frame bị mất hoặc ACK bị mất.</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <AckDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function NoFlowSimulator() {
  const [sendRate, setSendRate] = useState(80);
  const [processRate, setProcessRate] = useState(30);
  const overflow = Math.max(0, sendRate - processRate);
  const bufferFill = Math.min(100, Math.round((sendRate / Math.max(processRate, 1)) * 35));
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="red" title="Mô phỏng không có Flow Control" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-4">
            <Slider label="Tốc độ máy gửi" value={sendRate} setValue={setSendRate} min={10} max={120} suffix=" frame/s" color="cyan" />
            <Slider label="Khả năng máy nhận" value={processRate} setValue={setProcessRate} min={10} max={120} suffix=" frame/s" color="orange" />
            <div className={`rounded-2xl border p-5 ${overflow > 0 ? "bg-red-500/10 border-red-500/30 text-red-300" : "bg-green-500/10 border-green-500/30 text-green-300"}`}>
              <p className="font-bold">{overflow > 0 ? `Quá tải khoảng ${overflow} frame/s` : "Máy nhận xử lý kịp"}</p>
              <p className="text-sm mt-2 text-slate-400">Nếu tốc độ gửi vượt khả năng xử lý, buffer sẽ đầy và frame có thể bị rơi.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <BufferGauge fill={bufferFill} overflow={overflow > 0} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolExplorer() {
  const [activeId, setActiveId] = useState("sliding");
  const active = protocols.find((p) => p.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="emerald" title="Hai cơ chế Flow Control chính" icon={<ListChecks />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {protocols.map((proto) => {
            const pc = colorClasses[proto.color];
            const isActive = activeId === proto.id;
            return <button key={proto.id} onClick={() => setActiveId(proto.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${pc.bg} ${pc.border} ${pc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}><div className="flex items-center gap-2 mb-2">{React.cloneElement(proto.icon, { size: 20 })}<span className="font-black text-lg">{proto.name}</span></div><p className="text-xs opacity-80">{proto.vi}</p></button>;
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.vi}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.idea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm"><span className={c.text + " font-black"}>Đặc điểm:</span> <span className="text-slate-300">{active.strength}</span></div>
          </div>
          <ProsCons pros={active.pros} cons={active.cons} />
        </div>
      </div>
    </section>
  );
}

function StopAndWaitSimulator() {
  const steps = [
    { title: "Gửi Frame 1", text: "Máy A gửi Frame 1 sang Máy B.", left: "Frame 1 →", right: "Nhận Frame 1", color: "cyan", icon: <Package /> },
    { title: "Dừng lại", text: "Máy A chưa gửi Frame 2 ngay. Nó chờ ACK.", left: "Chờ ACK...", right: "Xử lý frame", color: "yellow", icon: <Hourglass /> },
    { title: "Máy B gửi ACK 1", text: "Máy B xác nhận đã nhận Frame 1.", left: "← ACK 1", right: "ACK 1", color: "orange", icon: <MessageCircle /> },
    { title: "Gửi Frame 2", text: "Máy A nhận ACK 1 rồi mới gửi frame tiếp theo.", left: "Frame 2 →", right: "Nhận Frame 2", color: "green", icon: <PackageCheck /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Cơ chế Stop-and-Wait" icon={<Pause />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}>
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <StopWaitDiagram step={step} steps={steps} />
          </div>
        </div>
      </div>
      <LostFrameMini />
    </section>
  );
}

function SlidingWindowSimulator() {
  const [windowSize, setWindowSize] = useState(4);
  const [acked, setAcked] = useState(0);
  const total = 10;
  const windowStart = acked + 1;
  const windowEnd = Math.min(total, acked + windowSize);
  const sendable = Array.from({ length: windowEnd - windowStart + 1 }, (_, i) => windowStart + i);
  const nextFrames = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="emerald" title="Cơ chế Sliding Window" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Window size" value={windowSize} setValue={(v) => { setWindowSize(v); setAcked(0); }} min={1} max={6} suffix=" frame" color="emerald" />
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-5">
              <p className="text-white font-bold mb-2">Window hiện tại</p>
              <p className="font-mono text-green-300">[{sendable.join(" ")}]</p>
              <p className="text-sm text-slate-400 mt-3">Máy gửi được phép gửi tối đa {windowSize} frame chưa được xác nhận.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setAcked((a) => Math.min(total, a + 1))} disabled={acked >= total} className="flex-1 px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold transition-colors">Nhận ACK tiếp</button>
              <button onClick={() => setAcked(0)} className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold transition-colors"><RotateCcw size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-bold mb-4">Danh sách frame</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {nextFrames.map((n) => {
                const done = n <= acked;
                const inWindow = n >= windowStart && n <= windowEnd;
                return <div key={n} className={`h-20 rounded-2xl border flex flex-col items-center justify-center font-black ${done ? "bg-green-500/10 border-green-400/40 text-green-300" : inWindow ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-slate-900 border-slate-800 text-slate-500"}`}><span>F{n}</span><span className="text-[10px] mt-1">{done ? "ACK" : inWindow ? "Window" : "Wait"}</span></div>;
              })}
            </div>
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Khi ACK về, cửa sổ trượt sang phải và mở chỗ cho frame mới được gửi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EfficiencyCalculator() {
  const [tx, setTx] = useState(1);
  const [ack, setAck] = useState(100);
  const [windowSize, setWindowSize] = useState(10);
  const stopTime = tx + ack;
  const stopEff = tx / stopTime;
  const slideEff = Math.min(1, (windowSize * tx) / stopTime);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="purple" title="Vì sao Sliding Window hiệu quả hơn?" icon={<Gauge />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Thời gian truyền 1 frame" value={tx} setValue={setTx} min={1} max={50} suffix=" ms" color="cyan" />
            <Slider label="Thời gian ACK quay về" value={ack} setValue={setAck} min={1} max={300} suffix=" ms" color="orange" />
            <Slider label="Window size" value={windowSize} setValue={setWindowSize} min={1} max={50} suffix=" frame" color="emerald" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5">
            <Meter label="Stop-and-Wait utilization" value={stopEff * 100} color="cyan" />
            <Meter label="Sliding Window utilization" value={slideEff * 100} color="emerald" />
            <div className="grid md:grid-cols-2 gap-4">
              <StatBox title="Stop-and-Wait" value={`${stopTime} ms/frame`} color="cyan" />
              <StatBox title="Window đang dùng" value={`${windowSize} frame`} color="emerald" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Ví dụ trong bài: truyền 1 frame mất 1 ms nhưng chờ ACK 100 ms. Stop-and-Wait làm đường truyền rảnh rất nhiều, còn Sliding Window cho phép gửi nhiều frame trong lúc chờ ACK.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowVsCongestion() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="yellow" title="Flow Control khác Congestion Control" icon={<TrafficCone />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Flow Control" icon={<Server />} color="cyan" text="Bảo vệ máy nhận khỏi việc bị gửi dữ liệu quá nhanh." code="Vấn đề: receiver xử lý không kịp" />
        <ConceptCard title="Congestion Control" icon={<Network />} color="yellow" text="Bảo vệ toàn mạng khỏi tắc nghẽn ở router, đường truyền hoặc mạng trung gian." code="Vấn đề: mạng ở giữa quá tải" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-4">
          <InfoBox title="Flow Control" value="Máy B yếu, không nhận kịp dữ liệu từ Máy A." icon={<Gauge />} color="cyan" />
          <InfoBox title="Congestion Control" value="Đường mạng ở giữa quá đông, nhiều gói tin chen nhau." icon={<TrafficCone />} color="yellow" />
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("teacher");
  const examples = {
    teacher: { title: "Giáo viên phát bài", icon: <Package />, color: "cyan", text: "Giáo viên đưa bài cho học sinh 1, học sinh nói “em nhận rồi”, rồi giáo viên mới đưa tiếp. Đây giống Stop-and-Wait.", code: "Phát 1 bài → nghe “em nhận rồi” → phát tiếp" },
    kitchen: { title: "Nhà hàng nhận đơn", icon: <Truck />, color: "emerald", text: "Bếp chỉ nấu được 3 món cùng lúc. Phục vụ gửi 3 đơn trước, khi bếp xong 1 đơn thì gửi thêm 1 đơn mới. Đây giống Sliding Window.", code: "Window size = 3\nGửi 3 đơn\nXong 1 đơn → gửi thêm 1 đơn" },
    chat: { title: "Nhắn tin", icon: <MessageCircle />, color: "purple", text: "Stop-and-Wait giống hỏi một câu rồi chờ trả lời. Sliding Window giống gửi nhiều câu hỏi trước rồi nhận trả lời dần.", code: "Stop: Q1 → A1 → Q2\nWindow: Q1 Q2 Q3 Q4 → A1 → Q5" },
  };
  const current = examples[mode];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="Ví dụ cực dễ nhớ" icon={<Search />} />
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

function WiresharkLab() {
  const [tab, setTab] = useState("tcp");
  const commands = {
    ping: { title: "Tạo lưu lượng đơn giản", cmd: "ping 8.8.8.8", output: "Reply from 8.8.8.8: bytes=32 time=25ms TTL=117", note: "ping giúp tạo traffic, nhưng ACK/window rõ hơn khi quan sát TCP." },
    tcp: { title: "Lọc TCP trong Wireshark", cmd: "tcp", output: "Transmission Control Protocol\nSequence Number\nAcknowledgment Number\nWindow Size", note: "TCP nằm ở Transport Layer, nhưng thể hiện rất rõ ý tưởng ACK và Sliding Window." },
    fields: { title: "Các trường cần quan sát", cmd: "tcp.seq\ntcp.ack\ntcp.window_size_value", output: "Sequence Number = số thứ tự dữ liệu\nAcknowledgment Number = xác nhận đã nhận\nWindow Size = lượng dữ liệu còn có thể nhận", note: "Ở Data Link, HDLC cũng có thể dùng ý tưởng ACK/window; trong thực hành phổ thông, TCP dễ quan sát hơn bằng Wireshark." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / Wireshark: quan sát ACK và Window" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">flow control lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
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
            <ExplainRow term="ACK" desc="Xác nhận đã nhận dữ liệu." />
            <ExplainRow term="Sequence Number" desc="Đánh số dữ liệu/frame/segment để theo dõi thứ tự." />
            <ExplainRow term="Window Size" desc="Khả năng nhận thêm dữ liệu tại thời điểm đó." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Flow Control là kiểm tra lỗi?", desc: "Không. Error Control kiểm tra đúng/sai; Flow Control điều chỉnh tốc độ gửi để máy nhận không quá tải.", good: "Error = đúng/sai; Flow = nhanh/chậm.", icon: <ShieldIcon /> },
    { title: "Stop-and-Wait luôn đủ tốt?", desc: "Không. Nó đơn giản nhưng rất chậm nếu độ trễ cao hoặc đường truyền xa.", good: "Đơn giản nhưng hiệu suất thấp.", icon: <Pause /> },
    { title: "Sliding Window gửi vô hạn frame?", desc: "Không. Nó chỉ gửi tối đa theo window size khi chưa nhận ACK.", good: "Window size là giới hạn số frame chưa ACK.", icon: <Shuffle /> },
    { title: "Flow Control giống Congestion Control?", desc: "Không. Flow Control bảo vệ máy nhận; Congestion Control bảo vệ mạng trung gian khỏi tắc nghẽn.", good: "Receiver khác network core.", icon: <TrafficCone /> },
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
              <p><span className="text-cyan-300">Flow Control</span> = điều chỉnh tốc độ gửi frame.</p>
              <p><span className="text-orange-300">ACK</span> = xác nhận đã nhận.</p>
              <p><span className="text-cyan-300">Stop-and-Wait</span> = gửi 1 frame rồi chờ ACK.</p>
              <p><span className="text-emerald-300">Sliding Window</span> = gửi nhiều frame trong cửa sổ.</p>
              <br />
              <p className="text-slate-500"># Phân biệt</p>
              <p>Error Control = frame có sai không?</p>
              <p>Flow Control = gửi nhanh vậy máy nhận chịu nổi không?</p>
              <p>Congestion Control = mạng ở giữa có tắc không?</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Flow Control dùng để làm gì?", options: ["Mã hóa dữ liệu", "Điều chỉnh tốc độ gửi để máy nhận xử lý kịp", "Tìm đường đi qua Internet", "Chuyển tên miền thành địa chỉ IP"], correct: 1, explanation: "Flow Control điều chỉnh tốc độ gửi dữ liệu/frame để máy nhận không bị quá tải." },
  { question: "Stop-and-Wait hoạt động như thế nào?", options: ["Gửi tất cả frame cùng lúc", "Gửi 1 frame, chờ ACK rồi mới gửi frame tiếp theo", "Không cần ACK", "Chỉ dùng trong DNS"], correct: 1, explanation: "Stop-and-Wait gửi từng frame một, sau đó dừng lại chờ ACK trước khi gửi frame tiếp theo." },
  { question: "Window size = 4. Máy gửi đã gửi Frame 1,2,3,4. Sau đó nhận ACK 1 và ACK 2. Máy gửi được phép gửi thêm frame nào?", options: ["Frame 5 và Frame 6", "Frame 1 và Frame 2", "Frame 9 và Frame 10", "Không được gửi thêm"], correct: 0, explanation: "ACK 1 và ACK 2 làm cửa sổ trượt qua hai vị trí, mở chỗ cho Frame 5 và Frame 6." },
  { question: "Vì sao Sliding Window hiệu quả hơn Stop-and-Wait?", options: ["Vì không cần dữ liệu", "Vì gửi được nhiều frame trước khi chờ đủ ACK", "Vì bỏ qua máy nhận", "Vì chỉ dùng DNS"], correct: 1, explanation: "Sliding Window cho phép nhiều frame đang truyền cùng lúc, giúp đường truyền không rảnh quá nhiều khi chờ ACK." },
  { question: "Flow Control khác Congestion Control ở điểm nào?", options: ["Flow bảo vệ máy nhận; Congestion bảo vệ mạng trung gian", "Hai khái niệm giống hệt nhau", "Flow dùng DNS; Congestion dùng IP", "Flow chỉ dùng cho bàn phím"], correct: 0, explanation: "Flow Control xử lý tốc độ giữa sender/receiver, còn Congestion Control xử lý tắc nghẽn trong mạng trung gian." },
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
      <p className="text-slate-400 mb-4">Sau khi học frame, error control và flow control, bài tiếp theo sẽ đi vào các giao thức Data Link cụ thể.</p>
      <Link to="/phan-4-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.4 — Giao thức HDLC, PPP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><MiniFlow title="Stop-and-Wait" lines={["Frame 1 →", "← ACK 1", "Frame 2 →", "← ACK 2"]} color="cyan" /><MiniFlow title="Sliding Window" lines={["Frame 1 → Frame 2 → Frame 3 → Frame 4 →", "← ACK 1     Frame 5 →", "← ACK 2     Frame 6 →"]} color="emerald" /></div>; }
function MiniFlow({ title, lines, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black mb-3`}>{title}</p><div className="font-mono text-xs text-slate-300 space-y-1">{lines.map((l) => <p key={l}>{l}</p>)}</div></div>; }
function BufferVisual({ sendRate, receiveRate }) { return <div className="space-y-4"><div className="grid grid-cols-2 gap-4"><StatBox title="Gửi" value={sendRate} color="cyan" /><StatBox title="Xử lý" value={receiveRate} color="orange" /></div><BufferGauge fill={90} overflow /></div>; }
function ShieldIcon() { return <ShieldAlert />; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function AckDiagram() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Device label="Máy A" color="cyan" /><ArrowRight className="text-cyan-300" /><Device label="Máy B" color="emerald" /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">Máy A ---- Frame 1 ----&gt; Máy B{"\n"}Máy A &lt;--- ACK 1 ------ Máy B</div></div>; }
function Device({ label, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}><Server size={24} /></div><p className="text-white font-bold">{label}</p></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value}{suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function BufferGauge({ fill, overflow }) { return <div><h4 className="text-white font-bold mb-4">Receiver Buffer</h4><div className="h-64 bg-slate-900 border border-slate-800 rounded-3xl p-4 flex flex-col justify-end overflow-hidden"><div className={`${overflow ? "bg-red-500" : "bg-green-500"} rounded-2xl transition-all`} style={{ height: `${Math.min(100, fill)}%` }} /></div><div className={`mt-4 rounded-2xl border p-4 text-sm ${overflow ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>{overflow ? "Buffer đầy: frame có thể bị rơi" : "Buffer ổn: máy nhận xử lý kịp"}</div></div>; }
function ProsCons({ pros, cons }) { return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>; }
function StopWaitDiagram({ step, steps }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Device label="Máy gửi" color="cyan" /><div className="text-center"><ArrowRight className="text-slate-500" /><p className="text-xs text-slate-500 mt-1">link</p></div><Device label="Máy nhận" color="emerald" /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">{steps.slice(0, step + 1).map((s, i) => `${i + 1}. ${s.left}`).join("\n")}</div></div>; }
function LostFrameMini() { const [lost, setLost] = useState(false); return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><div className="flex flex-col md:flex-row md:items-center justify-between gap-4"><div><h4 className="text-white font-bold text-xl mb-2">Nếu frame bị mất thì sao?</h4><p className="text-sm text-slate-400">Máy gửi chờ ACK. Nếu quá thời gian timeout mà không có ACK, nó gửi lại frame.</p></div><button onClick={() => setLost(!lost)} className={`px-5 py-3 rounded-xl font-bold ${lost ? "bg-red-500 text-white" : "bg-cyan-500 text-white"}`}>{lost ? "Đang mô phỏng mất Frame 2" : "Mô phỏng mất Frame 2"}</button></div><div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm whitespace-pre-wrap">{lost ? <span className="text-red-300">Frame 2 ----X{"\n"}chờ ACK... timeout{"\n"}Gửi lại Frame 2 ----&gt;</span> : <span className="text-green-300">Frame 2 ----&gt;{"\n"}&lt;---- ACK 2</span>}</div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-2xl font-black mt-2`}>{value}</p></div>; }
function Meter({ label, value, color }) { const c = colorClasses[color]; const pct = Math.min(100, Math.max(0, value)); return <div><div className="flex justify-between mb-2 text-sm"><span className="text-slate-400">{label}</span><span className={`${c.text} font-mono font-bold`}>{pct.toFixed(1)}%</span></div><div className="h-4 bg-slate-900 border border-slate-800 rounded-full overflow-hidden"><div className={`${c.solid} h-full`} style={{ width: `${pct}%` }} /></div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
