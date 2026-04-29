import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Database,
  Gauge,
  Globe2,
  Layers,
  MailCheck,
  Network,
  Package,
  RadioTower,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  TableProperties,
  Terminal,
  Timer,
  TrendingDown,
  TrendingUp,
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

const compareRows = [
  ["Mục tiêu", "Không làm quá tải bên nhận", "Không làm nghẽn mạng"],
  ["Quan tâm đến", "Receiver buffer", "Router, đường truyền, mất gói, RTT"],
  ["Biến chính", "rwnd", "cwnd"],
  ["Ai thông báo/tính?", "Receiver thông báo", "Sender tự tính"],
  ["Khi có vấn đề", "Receiver báo window nhỏ lại", "Sender giảm tốc do nghi ngờ nghẽn mạng"],
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
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <ProblemSection />
        <FlowControlSection />
        <RwndSection />
        <CongestionControlSection />
        <CwndSection />
        <EffectiveWindow />
        <CompareSection />
        <FlowSteps />
        <CongestionSteps />
        <SlowStartSection />
        <CongestionAvoidanceSection />
        <LossDetectionSection />
        <RealWorldExamples />
        <ObservationLab />
        <CommonMistakes />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> TCP gửi nhanh vừa đủ
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Flow Control
            <span className="block text-cyan-400">& Congestion Control</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Sau khi TCP bắt tay thành công, câu hỏi lớn là: gửi nhanh bao nhiêu là hợp lý để không làm quá tải bên nhận và không làm nghẽn mạng?
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-emerald-300">Flow Control</span> = bảo vệ receiver.</p>
            <p><span className="text-cyan-300">Congestion Control</span> = bảo vệ network.</p>
            <p><span className="text-orange-300">Send Window</span> = min(rwnd, cwnd).</p>
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
    "Hiểu Congestion Control là gì.",
    "Phân biệt receiver quá tải và network quá tải.",
    "Nắm vai trò của rwnd và cwnd.",
    "Hiểu vì sao TCP không gửi hết tốc lực ngay từ đầu.",
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

function ProblemSection() {
  const [speed, setSpeed] = useState(70);
  const state = speed < 30 ? "slow" : speed < 75 ? "ok" : "fast";
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="TCP phải giải quyết vấn đề gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Sau handshake, TCP bắt đầu truyền dữ liệu. Nhưng nếu gửi quá chậm thì lãng phí mạng; gửi quá nhanh thì receiver hoặc network có thể quá tải.</p>
            <p>Vì vậy TCP phải điều chỉnh tốc độ gửi dựa trên hai giới hạn: khả năng nhận của bên nhận và tình trạng mạng ở giữa.</p>
            <Slider label="Tốc độ gửi giả lập" value={speed} setValue={setSpeed} min={0} max={100} suffix="%" color={state === "fast" ? "red" : state === "ok" ? "green" : "yellow"} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SendSpeedVisual speed={speed} />
            <div className={`rounded-2xl border p-4 text-sm ${state === "fast" ? "bg-red-500/10 border-red-400/40 text-red-300" : state === "ok" ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-yellow-500/10 border-yellow-400/40 text-yellow-300"}`}>
              {state === "fast" ? "Gửi quá nhanh: receiver hoặc network có thể bị quá tải." : state === "ok" ? "Tốc độ hợp lý: tận dụng mạng mà vẫn giữ ổn định." : "Gửi quá chậm: mạng bị lãng phí, tải file lâu."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowControlSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Flow Control là gì?" icon={<ShieldCheck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bảo vệ bên nhận" icon={<ShieldCheck />} color="emerald" text="Flow Control kiểm soát luồng dữ liệu để bên gửi không gửi nhanh hơn khả năng xử lý của bên nhận." code="Receiver yếu/chậm/buffer gần đầy\n→ sender phải gửi chậm lại" />
        <ConceptCard title="Dựa vào Receive Window" icon={<MailCheck />} color="green" text="Receiver thông báo còn nhận được bao nhiêu byte thông qua trường Receive Window — rwnd trong ACK." code="ACK + rwnd=8000\nACK + rwnd=1000\nACK + rwnd=0" />
      </div>
    </section>
  );
}

function RwndSection() {
  const [rwnd, setRwnd] = useState(8000);
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="green" title="Receive Window — rwnd" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="rwnd = sức chứa còn lại" icon={<Database />} color="green" text="Receive Window là lượng dữ liệu receiver báo rằng nó còn có thể nhận thêm." code="rwnd=8000 bytes\n→ còn nhận thêm 8000 byte" />
            <Slider label="rwnd" value={rwnd} setValue={setRwnd} min={0} max={16000} suffix=" bytes" color="green" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ReceiverBuffer rwnd={rwnd} />
            <div className={`rounded-2xl border p-4 text-sm ${rwnd === 0 ? "bg-red-500/10 border-red-400/40 text-red-300" : rwnd < 3000 ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {rwnd === 0 ? "rwnd = 0: receiver hết chỗ, sender tạm dừng gửi data." : rwnd < 3000 ? "Buffer gần đầy: receiver báo window nhỏ để sender gửi ít lại." : "Receiver còn nhiều buffer: sender có thể gửi nhiều hơn trong giới hạn cho phép."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CongestionControlSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Congestion Control là gì?" icon={<Network />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bảo vệ mạng" icon={<Network />} color="cyan" text="Congestion Control kiểm soát lượng dữ liệu đưa vào mạng để tránh làm nghẽn router, hàng đợi và đường truyền." code="Mạng ổn → tăng tốc\nMất gói/timeout → giảm tốc" />
        <ConceptCard title="Sender tự tính cwnd" icon={<Gauge />} color="blue" text="Congestion Window — cwnd là giới hạn do sender tự tính dựa trên ACK, RTT, timeout, duplicate ACK và dấu hiệu mất gói." code="cwnd nhỏ → gửi ít\ncwnd lớn → gửi nhiều" />
      </div>
    </section>
  );
}

function CwndSection() {
  const [cwnd, setCwnd] = useState(4000);
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Congestion Window — cwnd" icon={<Gauge />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="cwnd = khả năng mạng" icon={<Gauge />} color="blue" text="cwnd giới hạn lượng dữ liệu sender được phép đưa vào mạng tại một thời điểm, dựa trên tình trạng mạng." code="cwnd=4000 bytes\n→ mạng đang cho phép 4000 byte" />
            <Slider label="cwnd" value={cwnd} setValue={setCwnd} min={1000} max={16000} suffix=" bytes" color="blue" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <NetworkPipe cwnd={cwnd} />
            <div className={`rounded-2xl border p-4 text-sm ${cwnd < 3000 ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : cwnd > 12000 ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-blue-500/10 border-blue-400/40 text-blue-300"}`}>
              {cwnd < 3000 ? "cwnd nhỏ: sender đang thận trọng hoặc vừa phát hiện nghẽn." : cwnd > 12000 ? "cwnd lớn: sender đang đưa nhiều dữ liệu vào mạng, cần theo dõi mất gói/RTT." : "cwnd vừa phải: sender đang tăng tốc trong giới hạn mạng ước lượng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EffectiveWindow() {
  const [rwnd, setRwnd] = useState(16000);
  const [cwnd, setCwnd] = useState(4000);
  const allowed = Math.min(rwnd, cwnd);
  const bottleneck = rwnd < cwnd ? "rwnd" : cwnd < rwnd ? "cwnd" : "equal";
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="Effective Send Window = min(rwnd, cwnd)" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="rwnd" value={rwnd} setValue={setRwnd} min={0} max={20000} suffix=" bytes" color="green" />
            <Slider label="cwnd" value={cwnd} setValue={setCwnd} min={0} max={20000} suffix=" bytes" color="blue" />
            <ConceptCard title="Lấy số nhỏ hơn" icon={<TableProperties />} color="orange" text="TCP không được gửi vượt quá khả năng receiver hoặc khả năng network. Vì vậy lượng gửi tối đa là min(rwnd, cwnd)." code="Effective Send Window = min(rwnd, cwnd)" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-3">
              <StatBox title="rwnd" value={rwnd} color="green" />
              <StatBox title="cwnd" value={cwnd} color="blue" />
              <StatBox title="Được gửi" value={allowed} color="orange" />
            </div>
            <div className={`rounded-2xl border p-5 text-sm ${bottleneck === "rwnd" ? "bg-green-500/10 border-green-400/40 text-green-300" : bottleneck === "cwnd" ? "bg-blue-500/10 border-blue-400/40 text-blue-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {bottleneck === "rwnd" ? "Giới hạn hiện tại là receiver: bên nhận chỉ còn nhận được ít hơn khả năng mạng." : bottleneck === "cwnd" ? "Giới hạn hiện tại là network: mạng chỉ cho phép ít hơn khả năng receiver." : "rwnd và cwnd bằng nhau: cả receiver và network đang cùng giới hạn ở mức này."}
            </div>
            <FormulaBar rwnd={rwnd} cwnd={cwnd} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Flow Control vs Congestion Control" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-emerald-300">Flow Control</th><th className="p-4 text-cyan-300">Congestion Control</th></tr></thead>
            <tbody className="text-sm">
              {compareRows.map(([criteria, flow, cong], i) => <tr key={criteria} className={`${i === compareRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{flow}</td><td className="p-4 text-slate-300">{cong}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FlowSteps() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client có receive buffer", text: "Receiver dùng buffer để chứa dữ liệu TCP nhận được trước khi ứng dụng đọc.", code: "Receiver buffer: used + free", color: "green", icon: <Database /> },
    { title: "Server gửi dữ liệu", text: "Sender gửi TCP segments đến receiver.", code: "Server → TCP Data → Client", color: "cyan", icon: <Send /> },
    { title: "Ứng dụng đọc dữ liệu", text: "Ứng dụng client đọc dữ liệu từ buffer. Nếu đọc chậm, buffer đầy dần.", code: "App read slow → buffer fills", color: "orange", icon: <Server /> },
    { title: "Client báo rwnd nhỏ hơn", text: "Client gửi ACK kèm window còn trống nhỏ hơn.", code: "ACK, rwnd=2000", color: "yellow", icon: <MailCheck /> },
    { title: "Server gửi chậm lại", text: "Sender giảm lượng dữ liệu đang gửi để không làm receiver tràn buffer.", code: "Send window decreases", color: "blue", icon: <Gauge /> },
    { title: "rwnd = 0 thì tạm dừng", text: "Nếu receiver hết chỗ, sender tạm dừng gửi data cho đến khi window mở lại.", code: "ACK, rwnd=0\n→ pause sending", color: "red", icon: <XCircle /> },
    { title: "Receiver có chỗ trống trở lại", text: "Khi ứng dụng đọc bớt dữ liệu, receiver báo rwnd tăng, sender tiếp tục gửi.", code: "ACK, rwnd=16000\n→ resume", color: "emerald", icon: <CheckCircle2 /> },
  ];
  return <StepSection number="9" color="green" title="Flow Control hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function CongestionSteps() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "TCP bắt đầu thận trọng", text: "Sender không biết mạng chịu được bao nhiêu nên bắt đầu với cwnd nhỏ.", code: "cwnd starts small", color: "cyan", icon: <Gauge /> },
    { title: "ACK về đều", text: "Nếu ACK về đều và không thấy mất gói, sender hiểu mạng đang ổn.", code: "ACK, ACK, ACK", color: "green", icon: <MailCheck /> },
    { title: "Tăng cwnd", text: "Sender tăng cwnd để đưa thêm dữ liệu vào mạng.", code: "cwnd grows", color: "emerald", icon: <TrendingUp /> },
    { title: "Dấu hiệu nghẽn", text: "Nếu timeout, duplicate ACK, mất gói hoặc RTT tăng mạnh, sender nghi ngờ mạng đang nghẽn.", code: "loss / timeout / duplicate ACK", color: "yellow", icon: <AlertTriangle /> },
    { title: "Giảm cwnd", text: "Sender giảm cwnd để hạ tải lên mạng.", code: "cwnd decreases", color: "red", icon: <TrendingDown /> },
    { title: "Tăng dần trở lại", text: "Sau khi giảm, TCP lại tăng dần để tìm tốc độ phù hợp mới.", code: "probe network capacity", color: "blue", icon: <RefreshCw /> },
  ];
  return <StepSection number="10" color="cyan" title="Congestion Control hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function SlowStartSection() {
  const [round, setRound] = useState(1);
  const cwnd = Math.pow(2, round - 1);
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Slow Start là gì?" icon={<TrendingUp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Bắt đầu chậm, tăng nhanh" icon={<TrendingUp />} color="orange" text="Slow Start giúp TCP thăm dò khả năng mạng. Ban đầu gửi ít, nếu ACK tốt thì cwnd tăng nhanh theo từng vòng RTT." code="1 → 2 → 4 → 8 → 16" />
            <Slider label="Vòng RTT" value={round} setValue={setRound} min={1} max={6} suffix="" color="orange" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <CwndBars values={[1, 2, 4, 8, 16, 32]} active={round - 1} color="orange" />
            <div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 text-sm font-mono">
              Vòng {round}: cwnd ≈ {cwnd} segment{cwnd > 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CongestionAvoidanceSection() {
  const [phase, setPhase] = useState("slow");
  const values = phase === "slow" ? [1, 2, 4, 8, 16] : [16, 17, 18, 19, 20];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="purple" title="Congestion Avoidance là gì?" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Tăng tốc cẩn thận" icon={<ShieldCheck />} color="purple" text="Sau khi cwnd đã lên mức cao, TCP không tăng quá nhanh nữa. Nó chuyển sang tăng chậm để tránh gây nghẽn mạng." code="Slow Start: 1,2,4,8,16\nCongestion Avoidance: 16,17,18,19,20" />
            <div className="flex gap-2">
              <button onClick={() => setPhase("slow")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${phase === "slow" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Slow Start</button>
              <button onClick={() => setPhase("avoid")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${phase === "avoid" ? "bg-purple-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Avoidance</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <CwndBars values={values} active={values.length - 1} color={phase === "slow" ? "orange" : "purple"} />
            <div className={`${phase === "slow" ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-purple-500/10 border-purple-400/40 text-purple-300"} border rounded-2xl p-4 text-sm`}>
              {phase === "slow" ? "Slow Start tăng nhanh để thăm dò mạng." : "Congestion Avoidance tăng chậm hơn để tránh vượt quá giới hạn an toàn."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LossDetectionSection() {
  const [mode, setMode] = useState("timeout");
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="red" title="Khi TCP phát hiện mất gói" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("timeout")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "timeout" ? "bg-red-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Timeout</button>
          <button onClick={() => setMode("dup")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "dup" ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:bg-slate-800"}`}>Duplicate ACK</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title={mode === "timeout" ? "Timeout" : "Duplicate ACK / Fast Retransmit"} icon={mode === "timeout" ? <Timer /> : <MailCheck />} color={mode === "timeout" ? "red" : "yellow"} text={mode === "timeout" ? "Nếu quá lâu không nhận ACK, TCP xem đây là dấu hiệu nghẽn nặng và giảm cwnd mạnh." : "Nếu nhận nhiều ACK lặp lại, TCP đoán một segment bị mất nhưng mạng vẫn còn hoạt động, nên có thể gửi lại nhanh."} code={mode === "timeout" ? "No ACK before RTO\n→ reduce cwnd strongly" : "ACK=3001\nACK=3001\nACK=3001\n→ Fast Retransmit"} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><LossVisual mode={mode} /></div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="orange" title="Ví dụ đời thực" icon={<Truck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Rót nước vào ly" icon={<Database />} color="green" text="Flow Control giống như rót nước vào ly. Ly gần đầy thì người nhận báo còn ít chỗ, người rót phải chậm lại." code="Ly = receiver buffer\nNước = data\nrwnd = chỗ còn trống" />
        <ConceptCard title="Đường cao tốc bị kẹt" icon={<Truck />} color="cyan" text="Congestion Control giống điều tiết xe trên cao tốc. Đường thông thì tăng tốc, đường kẹt thì giảm tốc." code="Xe = packet\nĐường = network\nRouter = nút giao/hàng đợi" />
      </div>
    </section>
  );
}

function ObservationLab() {
  const [tab, setTab] = useState("ss");
  const commands = {
    ss: { title: "Linux — xem thông tin TCP socket", cmd: "ss -ti", output: "cubic wscale:7,7 rto:204 rtt:12.5/2.1 ato:40 mss:1448 cwnd:10 bytes_acked:124320", note: "ss -ti có thể hiển thị cwnd, rtt, rto, mss tùy hệ thống và kết nối." },
    retrans: { title: "Wireshark — retransmission", cmd: "tcp.analysis.retransmission", output: "TCP Retransmission\nPrevious segment not captured\nSpurious Retransmission", note: "Filter này lọc các gói TCP được gửi lại." },
    dupack: { title: "Wireshark — duplicate ACK", cmd: "tcp.analysis.duplicate_ack", output: "TCP Dup ACK 123#1\nTCP Dup ACK 123#2\nTCP Dup ACK 123#3", note: "Nhiều duplicate ACK có thể là dấu hiệu segment bị thiếu." },
    window: { title: "Wireshark — window size", cmd: "tcp.window_size\ntcp.window_size_value", output: "Window size value: 64240\nCalculated window size: 131584", note: "Window Size giúp quan sát receiver advertise còn nhận được bao nhiêu dữ liệu." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="blue" title="Lệnh quan sát TCP" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">tcp control lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[330px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@transport</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="cwnd" desc="Congestion Window — sender tự tính." />
            <ExplainRow term="rtt" desc="Round Trip Time — thời gian đi và về." />
            <ExplainRow term="rto" desc="Retransmission Timeout — thời gian chờ trước khi gửi lại." />
            <ExplainRow term="mss" desc="Maximum Segment Size — dữ liệu tối đa trong TCP segment." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nhầm Flow Control với Congestion Control", desc: "Flow Control bảo vệ receiver. Congestion Control bảo vệ network.", fix: "rwnd = receiver, cwnd = network." },
    { title: "Nghĩ rwnd và cwnd là một", desc: "rwnd do receiver advertise. cwnd do sender tự tính dựa trên tình trạng mạng.", fix: "Được gửi tối đa = min(rwnd, cwnd)." },
    { title: "Nghĩ TCP gửi hết tốc lực sau handshake", desc: "TCP phải thăm dò mạng bằng Slow Start để tránh làm nghẽn mạng ngay từ đầu.", fix: "Bắt đầu nhỏ, ACK tốt thì tăng." },
    { title: "Nghĩ mất gói chỉ do receiver yếu", desc: "Mất gói có thể do congestion ở router/đường truyền, không nhất thiết do receiver.", fix: "Mất gói thường là tín hiệu congestion." },
    { title: "Nghĩ UDP cũng có các cơ chế này mặc định", desc: "UDP không có flow/congestion control built-in như TCP. Ứng dụng phải tự xử lý nếu cần.", fix: "TCP kiểm soát kỹ hơn nên overhead lớn hơn." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors"><div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div><h3 className="text-white font-bold text-lg mb-3">{m.title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p><div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div></div>)}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">17</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>TCP phải gửi với tốc độ hợp lý.</p>
              <p>Flow Control bảo vệ bên nhận.</p>
              <p>Congestion Control bảo vệ mạng.</p>
              <p>rwnd = Receive Window, do receiver thông báo.</p>
              <p>cwnd = Congestion Window, do sender tự tính.</p>
              <p>Effective Send Window = min(rwnd, cwnd).</p>
              <p>rwnd=0 → tạm dừng gửi dữ liệu.</p>
              <p>Slow Start bắt đầu nhỏ rồi tăng nhanh.</p>
              <p>Congestion Avoidance tăng chậm để tránh nghẽn.</p>
              <p>Timeout thường làm TCP giảm cwnd mạnh.</p>
              <p>Duplicate ACK có thể kích hoạt Fast Retransmit.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Flow Control bảo vệ ai?", options: ["Bên nhận", "DNS server", "Địa chỉ MAC", "Tên miền"], correct: 0, explanation: "Flow Control dùng rwnd để không làm receiver bị ngập dữ liệu." },
  { question: "Congestion Control bảo vệ gì?", options: ["Mạng ở giữa như router/đường truyền", "Bàn phím người dùng", "File hệ thống", "ARP table"], correct: 0, explanation: "Congestion Control điều chỉnh cwnd để tránh làm nghẽn network." },
  { question: "rwnd = 20000 bytes, cwnd = 6000 bytes. TCP được gửi tối đa bao nhiêu?", options: ["20000", "6000", "26000", "14000"], correct: 1, explanation: "TCP lấy min(rwnd, cwnd), nên min(20000, 6000) = 6000 bytes." },
  { question: "Slow Start có ý nghĩa gì?", options: ["Bắt đầu nhỏ để thăm dò khả năng mạng rồi tăng dần", "Luôn gửi chậm mãi mãi", "Tắt TCP checksum", "Chỉ dùng cho UDP"], correct: 0, explanation: "TCP không biết mạng chịu được bao nhiêu, nên bắt đầu với cwnd nhỏ và tăng khi ACK về tốt." },
  { question: "Duplicate ACK thường gợi ý điều gì?", options: ["Có thể có segment bị mất", "DNS đổi IP", "Port không hợp lệ", "Client thiếu địa chỉ MAC"], correct: 0, explanation: "Nhiều ACK lặp lại có thể báo receiver vẫn đang chờ một phần dữ liệu bị thiếu, giúp TCP gửi lại nhanh." },
];

function InteractiveQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const finished = currentQ === "finished";
  const q = !finished ? questions[currentQ] : null;
  const handleSelect = (index) => { if (showResult) return; setSelected(index); setShowResult(true); if (index === q.correct) setScore((s) => s + 1); };
  const handleNext = () => { if (currentQ < questions.length - 1) { setCurrentQ((c) => c + 1); setSelected(null); setShowResult(false); } else setCurrentQ("finished"); };
  const resetQuiz = () => { setCurrentQ(0); setSelected(null); setShowResult(false); setScore(0); };
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
      <p className="text-slate-400 mb-4">Sau khi hiểu TCP kiểm soát kỹ như thế nào, bài tiếp theo sẽ học UDP: nhanh hơn, đơn giản hơn nhưng ít đảm bảo hơn.</p>
      <Link to="/phan-6-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.5 — UDP: Nhanh & không kết nối <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="rwnd" value="receiver" color="green" icon={<Database />} /><MiniCard title="cwnd" value="network" color="blue" icon={<Gauge />} /><MiniCard title="min" value="send" color="orange" icon={<TableProperties />} /></div><FormulaBar rwnd={12000} cwnd={5000} /><CwndBars values={[1, 2, 4, 8, 16]} active={4} color="orange" /></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function SendSpeedVisual({ speed }) { const count = Math.max(1, Math.round(speed / 12)); return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Sender" color="cyan" icon={<Send />} /><ArrowRight className="text-slate-500" /><Node label="Network" color="blue" icon={<Network />} /><ArrowRight className="text-slate-500" /><Node label="Receiver" color="green" icon={<Server />} /></div><div className="flex gap-2 flex-wrap">{Array.from({ length: count }).map((_, i) => <span key={i} className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 flex items-center justify-center"><Package size={16} /></span>)}</div></div>; }
function Node({ label, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p></div>; }
function ReceiverBuffer({ rwnd }) { const percent = Math.max(0, Math.min(100, rwnd / 160)); const used = 100 - percent; return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><div className="flex justify-between mb-2 text-sm"><span className="text-slate-400">Receiver Buffer</span><span className="text-green-300 font-mono">rwnd={rwnd}</span></div><div className="h-10 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex"><div className="h-full bg-red-500/70 transition-all" style={{ width: `${used}%` }} /><div className="h-full bg-green-500/70 transition-all" style={{ width: `${percent}%` }} /></div><div className="flex justify-between text-xs mt-2"><span className="text-red-300">used</span><span className="text-green-300">free / rwnd</span></div></div>; }
function NetworkPipe({ cwnd }) { const percent = Math.max(0, Math.min(100, cwnd / 160)); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><div className="flex justify-between mb-2 text-sm"><span className="text-slate-400">Network capacity estimate</span><span className="text-blue-300 font-mono">cwnd={cwnd}</span></div><div className="h-10 bg-slate-950 rounded-full border border-slate-800 overflow-hidden"><div className="h-full bg-blue-500/80 transition-all" style={{ width: `${percent}%` }} /></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-2xl font-black mt-2 font-mono`}>{value}</p></div>; }
function FormulaBar({ rwnd, cwnd }) {
  const allowed = Math.min(rwnd, cwnd); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">Effective Send Window = min(rwnd, cwnd)
    = min({rwnd}, {cwnd})
    = {allowed} bytes</div>;
}
function CwndBars({ values, active, color }) { const c = colorClasses[color]; const max = Math.max(...values); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><div className="flex items-end gap-3 h-40">{values.map((v, i) => <div key={`${v}-${i}`} className="flex-1 flex flex-col items-center justify-end gap-2"><div className={`${i <= active ? c.solid : "bg-slate-700"} rounded-t-xl w-full transition-all`} style={{ height: `${(v / max) * 120}px` }} /><p className={`${i <= active ? c.text : "text-slate-600"} text-xs font-mono`}>{v}</p></div>)}</div></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function LossVisual({ mode }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">{mode === "timeout" ? <><p className="text-cyan-300">Sender ---- Data ----&gt; Receiver</p><p className="text-red-300">ACK missing ... wait ... timeout</p><p className="text-red-300">cwnd reduced strongly</p></> : <><p className="text-cyan-300">Sender ---- Seq=3000 ----X lost</p><p className="text-yellow-300">Receiver ---- ACK=3001 ----&gt; Sender</p><p className="text-yellow-300">Receiver ---- ACK=3001 ----&gt; Sender</p><p className="text-yellow-300">Receiver ---- ACK=3001 ----&gt; Sender</p><p className="text-green-300">Fast Retransmit missing segment</p></>}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
