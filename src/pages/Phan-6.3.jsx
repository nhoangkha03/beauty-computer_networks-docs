import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  DoorOpen,
  Globe2,
  Handshake,
  Layers,
  MailCheck,
  Network,
  Package,
  RadioTower,
  Search,
  Send,
  Server,
  ShieldCheck,
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

const handshakePackets = [
  { packet: "SYN", from: "Client", to: "Server", seq: "1000", ack: "—", meaning: "Client xin mở kết nối và gửi Initial Sequence Number của mình.", color: "cyan", icon: <Send /> },
  { packet: "SYN-ACK", from: "Server", to: "Client", seq: "5000", ack: "1001", meaning: "Server đồng ý, gửi ISN của server và xác nhận SYN của client.", color: "emerald", icon: <MailCheck /> },
  { packet: "ACK", from: "Client", to: "Server", seq: "1001", ack: "5001", meaning: "Client xác nhận SYN của server. Kết nối TCP được thiết lập.", color: "orange", icon: <CheckCircle2 /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Handshake className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyHandshake />
        <ThreeSteps />
        <SynSection />
        <SynAckSection />
        <FinalAckSection />
        <SeqAckSimulator />
        <TcpStates />
        <WhyThreeSteps />
        <RealWorldAnalogies />
        <HttpsExample />
        <WiresharkSection />
        <CliLab />
        <CommonMistakes />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> TCP connection setup
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Bắt tay 3 bước TCP
            <span className="block text-cyan-400">3-Way Handshake</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Trước khi truyền dữ liệu thật, TCP cần xác nhận hai chiều truyền đều hoạt động và đồng bộ Initial Sequence Number của cả client và server.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">SYN</span> = xin mở kết nối.</p>
            <p><span className="text-emerald-300">SYN-ACK</span> = đồng ý + xác nhận.</p>
            <p><span className="text-orange-300">ACK</span> = xác nhận cuối cùng.</p>
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
    "Hiểu 3-Way Handshake là gì.",
    "Biết vì sao TCP phải bắt tay trước khi truyền dữ liệu.",
    "Hiểu ý nghĩa của SYN, SYN-ACK và ACK.",
    "Biết cách client/server đồng bộ Sequence Number.",
    "Nhận biết handshake TCP trong Wireshark và CLI.",
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

function WhyHandshake() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao TCP cần bắt tay trước?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>TCP là giao thức đáng tin cậy, nên nó không gửi dữ liệu thật ngay lập tức. Trước tiên, hai bên phải xác nhận nhau đã sẵn sàng.</p>
            <p>3-Way Handshake giúp kiểm tra cả hai chiều truyền và đồng bộ số thứ tự ban đầu của hai bên.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>3-Way Handshake là quá trình TCP thiết lập kết nối trước khi gửi dữ liệu thật.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><HandshakeConversation /></div>
        </div>
      </div>
    </section>
  );
}

function ThreeSteps() {
  const [active, setActive] = useState(0);
  const item = handshakePackets[active];
  const c = colorClasses[item.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="3-Way Handshake gồm 3 bước nào?" icon={<Handshake />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {handshakePackets.map((p, idx) => <button key={p.packet} onClick={() => setActive(idx)} className={`rounded-2xl p-4 text-left border transition-all ${idx === active ? `${colorClasses[p.color].bg} ${colorClasses[p.color].border} ${colorClasses[p.color].text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}><div className="flex items-center gap-2 mb-1">{React.cloneElement(p.icon, { size: 18 })}<span className="font-black">Bước {idx + 1}: {p.packet}</span></div><p className="text-xs opacity-80">{p.from} → {p.to}</p></button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(item.icon, { size: 28 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Step {active + 1}</p>
            <h3 className="text-3xl font-bold text-white mb-3 mt-2">{item.packet}</h3>
            <p className="text-slate-300 leading-relaxed mb-4">{item.meaning}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Seq={item.seq} / ACK={item.ack}</div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><HandshakeTimeline active={active} /></div>
        </div>
      </div>
    </section>
  );
}

function SynSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="SYN là gì?" icon={<Send />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Synchronize" icon={<Send />} color="cyan" text="SYN là gói client gửi để yêu cầu mở kết nối TCP và đồng bộ Initial Sequence Number của client." code="Client → Server\nSYN, Seq=1000" />
        <ConceptCard title="Initial Sequence Number" icon={<Code2 />} color="purple" text="Seq=1000 là số thứ tự ban đầu của client. TCP dùng số này để đánh số dữ liệu sau đó." code="ISN client = 1000\nSYN chiếm 1 số thứ tự" />
      </div>
    </section>
  );
}

function SynAckSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="SYN-ACK là gì?" icon={<MailCheck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Đồng ý + xác nhận" icon={<MailCheck />} color="emerald" text="SYN-ACK gồm hai ý: server cũng đồng bộ số thứ tự của mình và xác nhận đã nhận SYN của client." code="Server → Client\nSYN-ACK, Seq=5000, ACK=1001" />
        <ConceptCard title="Vì sao ACK=1001?" icon={<TableProperties />} color="orange" text="SYN không chứa dữ liệu thật nhưng vẫn chiếm 1 số thứ tự, nên SYN Seq=1000 được xác nhận bằng ACK=1001." code="Client SYN Seq=1000\nServer ACK=1001" />
      </div>
    </section>
  );
}

function FinalAckSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="orange" title="ACK cuối cùng là gì?" icon={<CheckCircle2 />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Xác nhận lần cuối" icon={<CheckCircle2 />} color="orange" text="Client gửi ACK cuối cùng để xác nhận đã nhận SYN của server. Sau bước này, kết nối TCP được thiết lập." code="Client → Server\nACK, Seq=1001, ACK=5001" />
        <ConceptCard title="Vì sao ACK=5001?" icon={<MailCheck />} color="green" text="Server gửi SYN Seq=5000. SYN cũng chiếm 1 số thứ tự, nên client xác nhận bằng ACK=5001." code="Server SYN Seq=5000\nClient ACK=5001" />
      </div>
    </section>
  );
}

function SeqAckSimulator() {
  const [clientSeq, setClientSeq] = useState(1000);
  const [serverSeq, setServerSeq] = useState(5000);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Mô phỏng Seq/ACK trong 3-Way Handshake" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Client Initial Seq" value={clientSeq} setValue={setClientSeq} min={1000} max={9999} suffix="" color="cyan" />
            <Slider label="Server Initial Seq" value={serverSeq} setValue={setServerSeq} min={1000} max={9999} suffix="" color="emerald" />
            <InfoBox title="Quy tắc" value="SYN chiếm 1 số thứ tự. Vì vậy ACK luôn bằng Seq của SYN + 1." icon={<Code2 />} color="green" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="font-mono text-sm space-y-3">
              <PacketLine color="cyan" text={`Client → Server: SYN, Seq=${clientSeq}`} />
              <PacketLine color="emerald" text={`Server → Client: SYN-ACK, Seq=${serverSeq}, ACK=${clientSeq + 1}`} />
              <PacketLine color="orange" text={`Client → Server: ACK, Seq=${clientSeq + 1}, ACK=${serverSeq + 1}`} />
            </div>
            <div className="mt-5 grid md:grid-cols-2 gap-3">
              <StatBox title="Server ACK" value={clientSeq + 1} color="emerald" />
              <StatBox title="Client ACK" value={serverSeq + 1} color="orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TcpStates() {
  const [step, setStep] = useState(0);
  const states = [
    ["CLOSED", "LISTEN", "Trước khi client gửi SYN, server đang LISTEN."],
    ["SYN-SENT", "SYN-RECEIVED", "Client đã gửi SYN, server nhận SYN và gửi SYN-ACK."],
    ["ESTABLISHED", "SYN-RECEIVED", "Client nhận SYN-ACK và chuẩn bị gửi ACK cuối."],
    ["ESTABLISHED", "ESTABLISHED", "Server nhận ACK cuối. Kết nối đã thiết lập."],
  ];
  const cur = states[step];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="Trạng thái TCP khi bắt tay" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="TCP States" icon={<Database />} color="blue" text="Trong quá trình bắt tay, client và server chuyển qua các trạng thái như SYN-SENT, SYN-RECEIVED và ESTABLISHED." code="LISTEN\nSYN-SENT\nSYN-RECEIVED\nESTABLISHED" />
            <Slider label="Bước trạng thái" value={step} setValue={setStep} min={0} max={3} suffix="" color="blue" display={`Bước ${step + 1}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <StateBox who="Client" state={cur[0]} color="cyan" />
              <StateBox who="Server" state={cur[1]} color="emerald" />
            </div>
            <div className="bg-blue-500/10 border border-blue-400/40 rounded-2xl p-4 text-blue-300 text-sm">{cur[2]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyThreeSteps() {
  const [steps, setSteps] = useState(3);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="red" title="Vì sao cần đủ 3 bước?" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Xác nhận cả hai chiều" icon={<ShieldCheck />} color="red" text="3 bước giúp TCP xác nhận cả chiều Client → Server và Server → Client đều hoạt động, đồng thời server biết client đã nhận SYN-ACK." code="1. Client gửi được đến Server\n2. Server gửi ngược về Client\n3. Client xác nhận lại cho Server" />
            <div className="flex gap-2">
              <button onClick={() => setSteps(2)} className={`flex-1 px-4 py-3 rounded-xl font-bold ${steps === 2 ? "bg-red-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Chỉ 2 bước</button>
              <button onClick={() => setSteps(3)} className={`flex-1 px-4 py-3 rounded-xl font-bold ${steps === 3 ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Đủ 3 bước</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <TwoVsThreeVisual steps={steps} />
            <div className={`rounded-2xl border p-4 text-sm ${steps === 2 ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {steps === 2 ? "Nếu chỉ có SYN và SYN-ACK, server chưa chắc biết client đã nhận được SYN-ACK hay chưa." : "ACK cuối cùng giúp server chắc rằng client đã nhận phản hồi và kết nối sẵn sàng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldAnalogies() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="Ví dụ đời thực" icon={<RadioTower />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Gọi điện thoại" icon={<RadioTower />} color="orange" text="A hỏi B có nghe được không, B trả lời và hỏi lại, A xác nhận. Sau đó mới nói chuyện thật." code="A: Alo, bạn nghe được không?\nB: Tôi nghe được, bạn nghe tôi không?\nA: Tôi nghe được. Bắt đầu nhé." />
        <ConceptCard title="Giao hàng xác nhận hai chiều" icon={<PackageCheck />} color="purple" text="Shipper báo chuẩn bị giao, khách xác nhận có nhà, shipper xác nhận lại rồi mới giao." code="SYN = Tôi chuẩn bị giao\nSYN-ACK = Tôi có nhà\nACK = Ok, bắt đầu giao" />
      </div>
    </section>
  );
}

function HttpsExample() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Server mở port 443", text: "Web server HTTPS lắng nghe kết nối TCP đến port 443.", code: "Server: 203.0.113.10:443\nState: LISTEN", color: "emerald", icon: <DoorOpen /> },
    { title: "Client tạo port tạm thời", text: "Trình duyệt tạo client socket với ephemeral port, ví dụ 52000.", code: "Client: 192.168.1.10:52000", color: "cyan", icon: <Network /> },
    { title: "Client gửi SYN", text: "Client xin mở kết nối đến server port 443.", code: "52000 → 443 [SYN] Seq=1000", color: "cyan", icon: <Send /> },
    { title: "Server gửi SYN-ACK", text: "Server đồng ý và xác nhận SYN của client.", code: "443 → 52000 [SYN, ACK]\nSeq=5000 ACK=1001", color: "emerald", icon: <MailCheck /> },
    { title: "Client gửi ACK", text: "Client xác nhận SYN của server.", code: "52000 → 443 [ACK]\nSeq=1001 ACK=5001", color: "orange", icon: <CheckCircle2 /> },
    { title: "ESTABLISHED", text: "Cả hai bên đã thiết lập kết nối TCP. HTTPS request có thể bắt đầu.", code: "HTTP/HTTPS Request →\n← HTTP/HTTPS Response", color: "green", icon: <Globe2 /> },
  ];
  return <StepSection number="11" color="green" title="Ví dụ kỹ thuật: mở website HTTPS" icon={<Globe2 />} steps={steps} step={step} setStep={setStep} />;
}

function WiresharkSection() {
  const [filter, setFilter] = useState("syn");
  const filters = {
    syn: { title: "SYN packets", code: "tcp.flags.syn == 1", output: "Client → Server  TCP  52000 → 443 [SYN]\nServer → Client  TCP  443 → 52000 [SYN, ACK]", note: "Filter này thấy cả SYN và SYN-ACK vì cả hai đều bật cờ SYN." },
    port: { title: "Traffic port 443", code: "tcp.port == 443", output: "192.168.1.10 → 93.184.216.34  TCP  52000 → 443 [SYN]\n93.184.216.34 → 192.168.1.10  TCP  443 → 52000 [SYN, ACK]\n192.168.1.10 → 93.184.216.34  TCP  52000 → 443 [ACK]", note: "Dùng khi muốn xem toàn bộ traffic TCP liên quan HTTPS port 443." },
    ack: { title: "ACK packets", code: "tcp.flags.ack == 1", output: "Server → Client  [SYN, ACK]\nClient → Server  [ACK]\nClient/Server data packets with ACK", note: "Rất nhiều packet TCP bật ACK sau khi kết nối hoạt động." },
  };
  const cur = filters[filter];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="purple" title="Nhận biết 3-Way Handshake trong Wireshark" icon={<Search />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">wireshark display filter</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(filters).map(([key]) => <button key={key} onClick={() => setFilter(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${filter === key ? "bg-purple-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[300px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {cur.title}</p>
              <p className="text-cyan-300">{cur.code}</p>
              <div className="mt-5 text-green-400">{cur.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{cur.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="[SYN]" desc="Client xin mở kết nối." />
            <ExplainRow term="[SYN, ACK]" desc="Server đồng ý và xác nhận SYN." />
            <ExplainRow term="[ACK]" desc="Client xác nhận lần cuối." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Windows — kiểm tra TCP", cmd: "netstat -ano -p tcp\nnetstat -ano -p tcp | findstr :443", output: "TCP 192.168.1.10:52000 93.184.216.34:443 ESTABLISHED 1234", note: "Sau khi handshake hoàn tất, bạn thường thấy trạng thái ESTABLISHED." },
    linux: { title: "Linux/macOS — kiểm tra TCP", cmd: "ss -tan\nss -tan | grep ':443'", output: "ESTAB 0 0 192.168.1.10:52000 93.184.216.34:443", note: "ESTAB là viết tắt của ESTABLISHED." },
    server: { title: "Server đang LISTEN", cmd: "ss -tln\nnetstat -ano -p tcp", output: "LISTEN 0 511 0.0.0.0:443 0.0.0.0:*", note: "Server phải LISTEN trên port trước khi client có thể kết nối." },
    fail: { title: "Khi server không phản hồi SYN", cmd: "Test-NetConnection example.com -Port 443\nnc -vz example.com 443", output: "TCP connect failed / timeout", note: "Nếu server không trả SYN-ACK, client không coi kết nối là đã thiết lập." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">tcp handshake lab</span>
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
            <ExplainRow term="LISTEN" desc="Server đang chờ kết nối đến." />
            <ExplainRow term="SYN-SENT" desc="Client đã gửi SYN, đang chờ SYN-ACK." />
            <ExplainRow term="ESTABLISHED" desc="Handshake đã hoàn tất, kết nối TCP đã mở." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ handshake đã truyền dữ liệu ứng dụng", desc: "SYN, SYN-ACK, ACK chủ yếu dùng để thiết lập kết nối và đồng bộ sequence number. Dữ liệu thật thường bắt đầu sau đó.", fix: "Handshake trước, data sau." },
    { title: "Không hiểu vì sao ACK tăng thêm 1", desc: "SYN tuy không chứa data nhưng vẫn chiếm 1 sequence number.", fix: "SYN Seq=N → ACK=N+1." },
    { title: "Nghĩ chỉ cần 2 bước", desc: "Nếu bỏ ACK cuối, server chưa chắc biết client đã nhận SYN-ACK hay chưa.", fix: "Bước 3 xác nhận chiều Server → Client." },
    { title: "Nhầm SYN-ACK với ACK thường", desc: "SYN-ACK vừa bật SYN vừa bật ACK: vừa đồng bộ sequence của server, vừa xác nhận SYN của client.", fix: "SYN-ACK = SYN + ACK." },
    { title: "Thấy ESTABLISHED rồi nghĩ HTTPS đã xong", desc: "ESTABLISHED chỉ là TCP đã mở. HTTPS còn có TLS handshake và HTTP request/response ở tầng trên.", fix: "TCP handshake khác TLS handshake." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">15</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>3-Way Handshake = quá trình TCP thiết lập kết nối.</p>
              <p>Bước 1: SYN — client xin mở kết nối.</p>
              <p>Bước 2: SYN-ACK — server đồng ý và xác nhận.</p>
              <p>Bước 3: ACK — client xác nhận lần cuối.</p>
              <p>SYN dùng để đồng bộ Initial Sequence Number.</p>
              <p>SYN chiếm 1 sequence number.</p>
              <p>SYN Seq=1000 → ACK=1001.</p>
              <p>Server LISTEN trước khi nhận kết nối.</p>
              <p>Client qua SYN-SENT, server qua SYN-RECEIVED.</p>
              <p>Hoàn tất handshake → ESTABLISHED.</p>
              <p>Sau ESTABLISHED, dữ liệu ứng dụng mới truyền.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "3 gói chính trong 3-Way Handshake là gì?", options: ["ARP, DNS, DHCP", "SYN, SYN-ACK, ACK", "FIN, RST, PSH", "GET, POST, PUT"], correct: 1, explanation: "TCP 3-Way Handshake gồm SYN, SYN-ACK và ACK." },
  { question: "SYN dùng để làm gì?", options: ["Xin mở kết nối và đồng bộ sequence number ban đầu", "Đóng kết nối", "Phân giải tên miền", "Mã hóa dữ liệu HTTPS"], correct: 0, explanation: "SYN là yêu cầu mở kết nối TCP và mang Initial Sequence Number của bên gửi." },
  { question: "Client gửi SYN Seq=3000. Vì sao server trả ACK=3001?", options: ["Vì SYN chiếm 1 sequence number", "Vì port HTTPS là 3001", "Vì server tăng TTL", "Vì DNS trả về 3001"], correct: 0, explanation: "SYN không chứa dữ liệu thật nhưng vẫn chiếm 1 số thứ tự, nên ACK = Seq + 1." },
  { question: "Vì sao cần ACK cuối cùng từ client?", options: ["Để server biết client đã nhận SYN-ACK", "Để cấp IP cho client", "Để đổi MAC address", "Để tắt port 443"], correct: 0, explanation: "ACK cuối giúp server biết client đã nhận phản hồi SYN-ACK và hai chiều truyền hoạt động." },
  { question: "Sau 3-Way Handshake hoàn tất, trạng thái TCP thường là gì?", options: ["LISTEN", "SYN-SENT", "ESTABLISHED", "TIME_WAIT"], correct: 2, explanation: "Khi handshake hoàn tất, kết nối TCP chuyển sang ESTABLISHED và có thể truyền dữ liệu thật." },
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
      <p className="text-slate-400 mb-4">Sau khi TCP kết nối thành công, bài tiếp theo học cách TCP gửi nhanh vừa đủ: không làm quá tải bên nhận và không làm nghẽn mạng.</p>
      <Link to="/phan-6-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.4 — Flow Control & Congestion Control <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() {
  return <div className="space-y-4"><HandshakeTimeline active={3} /><div className="grid grid-cols-3 gap-3"><MiniCard title="SYN" value="Seq=1000" color="cyan" icon={<Send />} /><MiniCard title="SYN-ACK" value="ACK=1001" color="emerald" icon={<MailCheck />} /><MiniCard title="ACK" value="ACK=5001" color="orange" icon={<CheckCircle2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Client: 192.168.1.10:52000
    Server: 203.0.113.10:443
    State: ESTABLISHED</div></div>;
}
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function HandshakeConversation() { return <div className="space-y-3 font-mono text-sm"><Bubble who="Client" text="Tôi muốn kết nối với bạn." color="cyan" /><Bubble who="Server" text="Tôi đồng ý, tôi cũng sẵn sàng." color="emerald" right /><Bubble who="Client" text="Ok, tôi xác nhận. Bắt đầu truyền dữ liệu." color="orange" /></div>; }
function Bubble({ who, text, color, right = false }) { const c = colorClasses[color]; return <div className={`flex ${right ? "justify-end" : "justify-start"}`}><div className={`${c.bg} ${c.border} border rounded-2xl p-4 max-w-[85%]`}><p className={`${c.text} text-xs font-bold uppercase mb-1`}>{who}</p><p className="text-slate-200">{text}</p></div></div>; }
function HandshakeTimeline({ active }) { return <div className="space-y-3">{handshakePackets.map((p, idx) => <div key={p.packet} className={`${active >= idx ? `${colorClasses[p.color].bg} ${colorClasses[p.color].border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-4`}><div className="flex items-center justify-between gap-3"><div><p className={`${active >= idx ? colorClasses[p.color].text : "text-slate-500"} font-bold`}>{p.from} → {p.to}: {p.packet}</p><p className="font-mono text-xs text-slate-500 mt-1">Seq={p.seq}, ACK={p.ack}</p></div>{React.cloneElement(p.icon, { size: 22, className: active >= idx ? colorClasses[p.color].text : "text-slate-600" })}</div></div>)}<div className={`${active >= 2 ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-4 text-center font-bold`}>TCP Connection Established</div></div>; }
function Slider({ label, value, setValue, min, max, suffix, color, display }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{display ?? value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function PacketLine({ color, text }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 ${c.text}`}>{text}</div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-2xl font-black mt-2 font-mono`}>{value}</p></div>; }
function StateBox({ who, state, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6 text-center`}><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{who}</p><p className={`${c.text} text-2xl font-black mt-2 font-mono`}>{state}</p></div>; }
function TwoVsThreeVisual({ steps }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Client ---- SYN ----&gt; Server</p><p className="text-emerald-300">Client &lt;--- SYN-ACK ---- Server</p>{steps === 3 ? <p className="text-orange-300">Client ---- ACK ----&gt; Server</p> : <p className="text-red-300">Client ---- ??? missing final ACK</p>}<p className={steps === 3 ? "text-green-300" : "text-red-300"}>{steps === 3 ? "Server chắc chắn client đã nhận SYN-ACK" : "Server chưa chắc client đã nhận SYN-ACK"}</p></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
