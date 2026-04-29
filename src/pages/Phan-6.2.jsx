import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  FileDown,
  Gauge,
  Globe2,
  Layers,
  MailCheck,
  Network,
  Package,
  PackageCheck,
  RadioTower,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  Shuffle,
  TableProperties,
  Terminal,
  Timer,
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

const headerFields = [
  ["Source Port", "Port nguồn của ứng dụng gửi.", "52000", "cyan", <Send />],
  ["Destination Port", "Port đích của dịch vụ nhận.", "443", "emerald", <Server />],
  ["Sequence Number", "Số thứ tự byte/segment dữ liệu.", "Seq=1000", "orange", <TableProperties />],
  ["Acknowledgment Number", "Số xác nhận dữ liệu đã nhận và đang chờ tiếp theo.", "ACK=1500", "green", <MailCheck />],
  ["Flags", "Cờ điều khiển như SYN, ACK, FIN, RST.", "SYN ACK FIN", "purple", <Code2 />],
  ["Window Size", "Bên nhận báo còn nhận được bao nhiêu dữ liệu.", "Win=5000", "blue", <Gauge />],
  ["Checksum", "Kiểm tra lỗi TCP segment.", "checksum", "yellow", <ShieldCheck />],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <ShieldCheck className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <TcpIntro />
        <WhyTcp />
        <ConnectionOriented />
        <ReliabilityMechanisms />
        <SequenceNumber />
        <AckSection />
        <RetransmissionSection />
        <FlowControlSection />
        <RealWorldAnalogies />
        <HttpsTcpFlow />
        <TcpHeaderExplorer />
        <TcpStatesLab />
        <CommonMistakes />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> Transport Layer — đáng tin cậy
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Giao thức TCP:
            <span className="block text-cyan-400">Kết nối đáng tin cậy</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            TCP giúp hai ứng dụng truyền dữ liệu có kiểm soát: thiết lập kết nối, đánh số dữ liệu, xác nhận ACK, gửi lại khi mất và điều chỉnh tốc độ gửi.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">TCP</span> = Transmission Control Protocol.</p>
            <p><span className="text-emerald-300">Reliable</span> = ACK + retransmission + ordering.</p>
            <p><span className="text-orange-300">Flow control</span> = gửi vừa sức bên nhận.</p>
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
    "Hiểu TCP là gì và vì sao gọi là giao thức đáng tin cậy.",
    "Biết TCP khác gì với gửi dữ liệu bình thường.",
    "Hiểu cách TCP đảm bảo đúng thứ tự, không mất, không trùng.",
    "Nắm sequence number, ACK, retransmission và window.",
    "Biết vì sao TCP phù hợp cho web, email, truyền file, SSH.",
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

function TcpIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="TCP là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">TCP — Transmission Control Protocol</strong> là giao thức tầng giao vận giúp hai ứng dụng trên hai máy khác nhau truyền dữ liệu với độ tin cậy cao.</p>
            <p>TCP không chỉ gửi dữ liệu đi. Nó còn kiểm tra dữ liệu có đến nơi không, có bị mất không, có sai thứ tự không, có cần gửi lại không và bên nhận có quá tải không.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>TCP là giao thức giúp gửi dữ liệu đáng tin cậy giữa hai ứng dụng.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><TcpBetweenAppsVisual /></div>
        </div>
      </div>
    </section>
  );
}

function WhyTcp() {
  const [lost, setLost] = useState(2);
  const segments = ["AB", "CD", "EF", "GH", "IJ"];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Vì sao cần TCP?" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Dữ liệu lớn không đi nguyên một cục. Ở tầng TCP, dữ liệu được chia thành nhiều phần nhỏ gọi là <strong className="text-white">segment</strong>.</p>
            <p>Trên mạng, segment có thể mất, trễ, trùng hoặc đến sai thứ tự. TCP sinh ra để xử lý những vấn đề đó.</p>
            <Slider label="Segment bị mất" value={lost} setValue={setLost} min={0} max={4} suffix="" color="orange" display={`Segment ${lost + 1}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-green-300">File gốc: ABCDEFGHIJ</div>
            <div className="grid grid-cols-5 gap-2">
              {segments.map((s, i) => <div key={s} className={`${i === lost ? "bg-red-500/10 border-red-400/40 text-red-300 line-through" : "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"} border rounded-2xl p-4 text-center`}><Package className="mx-auto mb-2" size={20} /><p className="font-mono font-black">{s}</p><p className="text-xs mt-1">Seq {i + 1}</p></div>)}
            </div>
            <div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-red-300 text-sm">
              Nếu không có TCP, bên nhận có thể nhận thiếu hoặc sai thứ tự. TCP dùng sequence number, ACK và retransmission để sửa lỗi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectionOriented() {
  const [phase, setPhase] = useState("handshake");
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="TCP là Connection-Oriented" icon={<RadioTower />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setPhase("handshake")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${phase === "handshake" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Thiết lập kết nối</button>
          <button onClick={() => setPhase("data")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${phase === "data" ? "bg-emerald-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Truyền dữ liệu</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Có kết nối trước khi truyền" icon={<RadioTower />} color={phase === "handshake" ? "purple" : "emerald"} text="Trước khi gửi dữ liệu thật, TCP phải thiết lập kết nối bằng 3-Way Handshake. Bài 6.3 sẽ học kỹ cơ chế này." code={phase === "handshake" ? "Client → SYN → Server\nClient ← SYN-ACK ← Server\nClient → ACK → Server" : "Sau khi kết nối established:\nHTTP Request →\n← HTTP Response"} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><HandshakePreview phase={phase} /></div>
        </div>
      </div>
    </section>
  );
}

function ReliabilityMechanisms() {
  const mechanisms = [
    ["Sequence Number", "Đánh số dữ liệu", "Seq=1, Seq=2, Seq=3", "orange", <TableProperties />],
    ["ACK", "Xác nhận đã nhận", "ACK=2 nghĩa là đang chờ số 2", "green", <MailCheck />],
    ["Retransmission", "Gửi lại khi mất", "Không có ACK → gửi lại", "red", <RefreshCw />],
    ["Flow Control", "Điều chỉnh tốc độ gửi", "Window Size", "blue", <Gauge />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="green" title="TCP đáng tin cậy nhờ cơ chế nào?" icon={<ShieldCheck />} />
      <div className="grid lg:grid-cols-4 gap-4">
        {mechanisms.map(([title, text, code, color, icon]) => <ConceptCard key={title} title={title} icon={icon} color={color} text={text} code={code} />)}
      </div>
    </section>
  );
}

function SequenceNumber() {
  const [order, setOrder] = useState("bad");
  const seqs = order === "bad" ? [1, 3, 2, 4] : [1, 2, 3, 4];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="orange" title="Sequence Number là gì?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Sequence Number" icon={<TableProperties />} color="orange" text="Sequence Number giúp TCP biết dữ liệu nào đến trước, dữ liệu nào đến sau và dữ liệu nào bị thiếu." code="Seq=1\nSeq=2\nSeq=3" />
            <button onClick={() => setOrder(order === "bad" ? "good" : "bad")} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${order === "bad" ? "bg-orange-500 text-white" : "bg-green-500 text-white"}`}>{order === "bad" ? "Dữ liệu đến sai thứ tự" : "Đã sắp xếp đúng thứ tự"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid grid-cols-4 gap-3">
              {seqs.map((n, i) => <div key={`${n}-${i}`} className={`${order === "bad" && i === 1 ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-center`}><Package className="mx-auto mb-2" /><p className="font-mono font-black">Seq={n}</p></div>)}
            </div>
            <div className={`rounded-2xl border p-4 text-sm ${order === "bad" ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {order === "bad" ? "TCP biết Seq=3 đến trước Seq=2, nên có thể buffer và sắp xếp lại đúng thứ tự." : "Bên nhận ghép dữ liệu theo sequence number để tạo lại dữ liệu gốc."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AckSection() {
  const [seq, setSeq] = useState(1);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="ACK là gì?" icon={<MailCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Acknowledgment" icon={<MailCheck />} color="green" text="ACK là xác nhận đã nhận. ACK=N thường nghĩa là: tôi đã nhận dữ liệu trước N và đang chờ dữ liệu số N." code="Seq=1 → ACK=2\nSeq=2 → ACK=3" />
            <Slider label="Segment vừa nhận" value={seq} setValue={setSeq} min={1} max={4} suffix="" color="green" display={`Seq=${seq}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ClientServerLine top={`Client gửi Segment Seq=${seq}`} bottom={`Server trả ACK=${seq + 1}`} color="green" />
            <div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-green-300 text-sm font-mono">
              ACK={seq + 1} = Đã nhận đến trước {seq + 1}, bây giờ đang chờ Seq={seq + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RetransmissionSection() {
  const [lost, setLost] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="red" title="Retransmission là gì?" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Gửi lại dữ liệu bị mất" icon={<RefreshCw />} color="red" text="Nếu segment bị mất hoặc bên gửi không nhận được ACK sau một khoảng thời gian, TCP sẽ gửi lại segment đó." code="Seq=2 lost\nACK vẫn = 2\n→ retransmit Seq=2" />
            <button onClick={() => setLost(!lost)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${lost ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>{lost ? "Seq=2 bị mất" : "Seq=2 đã gửi lại"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <RetransmissionVisual fixed={!lost} />
            <div className={`rounded-2xl border p-4 text-sm ${lost ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {lost ? "Server vẫn ACK=2 vì đang chờ Segment 2. Client hiểu cần gửi lại Seq=2." : "Sau khi Seq=2 được gửi lại, server có thể xác nhận tiếp và dữ liệu được ghép đúng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowControlSection() {
  const [window, setWindow] = useState(5000);
  const level = window >= 6000 ? "fast" : window >= 3000 ? "normal" : "slow";
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="blue" title="Flow Control và Window Size" icon={<Gauge />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Flow Control" icon={<Gauge />} color="blue" text="Flow Control giúp bên gửi không gửi quá nhanh khiến bên nhận xử lý không kịp. Bên nhận báo khả năng nhận bằng Window Size." code="Window Size = còn nhận được bao nhiêu byte" />
            <Slider label="Receiver Window Size" value={window} setValue={setWindow} min={0} max={10000} suffix=" bytes" color="blue" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <WindowVisual window={window} />
            <div className={`rounded-2xl border p-4 text-sm ${level === "fast" ? "bg-green-500/10 border-green-400/40 text-green-300" : level === "normal" ? "bg-blue-500/10 border-blue-400/40 text-blue-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>
              {level === "fast" ? "Bên nhận còn nhiều buffer, bên gửi có thể gửi nhanh hơn." : level === "normal" ? "Bên nhận còn đủ buffer, gửi ở mức bình thường." : window === 0 ? "Window = 0: bên nhận báo tạm dừng gửi dữ liệu." : "Buffer gần đầy, bên gửi cần gửi chậm lại."}
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
      <SectionTitle number="10" color="orange" title="Ví dụ đời thực" icon={<Truck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Gửi bưu kiện có ký nhận" icon={<Truck />} color="orange" text="Mỗi kiện hàng có số thứ tự. Người nhận ký nhận từng kiện. Kiện mất thì gửi lại." code="Kiện hàng = Segment\nSố kiện = Sequence Number\nKý nhận = ACK\nGửi lại = Retransmission" />
        <ConceptCard title="Gọi điện thoại" icon={<RadioTower />} color="purple" text="Trước khi nói chuyện phải kết nối. Nếu nghe thiếu đoạn nào, người nhận yêu cầu nói lại." code="Alo, nghe rõ không?\nCó, tôi nghe rõ.\nOk, bắt đầu truyền dữ liệu." />
      </div>
    </section>
  );
}

function HttpsTcpFlow() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Trình duyệt lấy IP bằng DNS", text: "example.com cần được phân giải thành IP server.", code: "example.com → 203.0.113.10", color: "cyan", icon: <Search /> },
    { title: "Tạo client socket", text: "Client chọn port tạm thời để tạo socket phía client.", code: "192.168.1.10:52000", color: "orange", icon: <Network /> },
    { title: "Kết nối đến server socket", text: "HTTPS server thường lắng nghe trên TCP port 443.", code: "203.0.113.10:443", color: "emerald", icon: <Server /> },
    { title: "TCP 3-Way Handshake", text: "TCP thiết lập kết nối trước khi truyền dữ liệu thật.", code: "SYN →\n← SYN-ACK\nACK →", color: "purple", icon: <RadioTower /> },
    { title: "Truyền HTTP Request/Response", text: "Dữ liệu ứng dụng được chia thành TCP segments và xác nhận bằng ACK.", code: "HTTP Request →\n← HTTP Response", color: "green", icon: <Globe2 /> },
    { title: "Gửi lại nếu mất segment", text: "Nếu mất segment hoặc thiếu ACK, TCP retransmit phần cần thiết.", code: "Lost segment → retransmission", color: "red", icon: <RefreshCw /> },
    { title: "Đóng kết nối khi xong", text: "Khi truyền xong, TCP đóng kết nối bằng cơ chế FIN/ACK hoặc RST tùy trường hợp.", code: "FIN / ACK", color: "blue", icon: <XCircle /> },
  ];
  return <StepSection number="11" color="green" title="Khi truy cập HTTPS bằng TCP" icon={<Globe2 />} steps={steps} step={step} setStep={setStep} />;
}

function TcpHeaderExplorer() {
  const [active, setActive] = useState(0);
  const item = headerFields[active];
  const c = colorClasses[item[3]];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="cyan" title="TCP Header có gì?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {headerFields.map(([title, , value, color, icon], idx) => <button key={title} onClick={() => setActive(idx)} className={`rounded-2xl p-3 text-left border transition-all ${idx === active ? `${colorClasses[color].bg} ${colorClasses[color].border} ${colorClasses[color].text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}><div className="flex items-center gap-2 mb-1">{React.cloneElement(icon, { size: 16 })}<span className="font-black text-xs">{title}</span></div><p className="text-[11px] font-mono opacity-80">{value}</p></button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(item[4], { size: 28 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>TCP Header Field</p>
            <h3 className="text-3xl font-bold text-white mb-3 mt-2">{item[0]}</h3>
            <p className="text-slate-300 leading-relaxed">{item[1]}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><TcpHeaderDiagram active={item[0]} /></div>
        </div>
      </div>
    </section>
  );
}

function TcpStatesLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Windows — xem kết nối TCP", cmd: "netstat -ano -p tcp\nnetstat -ano -p tcp | findstr :443", output: "TCP 192.168.1.10:52000 142.250.190.14:443 ESTABLISHED 1234", note: "-p tcp lọc kết nối TCP. PID giúp tìm tiến trình đang dùng kết nối." },
    linux: { title: "Linux/macOS — xem TCP", cmd: "ss -tan\nss -tln\nss -tlnp", output: "State  Local Address:Port      Peer Address:Port\nLISTEN 0.0.0.0:80              0.0.0.0:*\nESTAB  192.168.1.10:52000      142.250.190.14:443", note: "ss -tan xem TCP socket; ss -tln xem TCP port đang lắng nghe." },
    states: { title: "Trạng thái TCP thường gặp", cmd: "LISTEN\nESTABLISHED\nTIME_WAIT\nCLOSE_WAIT", output: "LISTEN      = đang chờ kết nối\nESTABLISHED = kết nối đã thiết lập\nTIME_WAIT   = đã đóng nhưng còn chờ an toàn\nCLOSE_WAIT  = bên kia đã đóng, máy này chưa đóng hoàn toàn", note: "Trạng thái TCP giúp chẩn đoán service đang mở, kết nối đang chạy hay ứng dụng đóng kết nối lỗi." },
    wireshark: { title: "Wireshark filter", cmd: "tcp\ntcp.port == 443\ntcp.flags.syn == 1\ntcp.analysis.retransmission", output: "SYN\nSYN, ACK\nACK\nTCP Retransmission", note: "Wireshark giúp nhìn rõ handshake, ACK, sequence number và retransmission." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="blue" title="CLI / công cụ kiểm tra TCP" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">tcp lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[350px] whitespace-pre-wrap">
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
            <ExplainRow term="LISTEN" desc="Server đang chờ kết nối TCP đến." />
            <ExplainRow term="ESTABLISHED" desc="Kết nối TCP đã thiết lập." />
            <ExplainRow term="Retransmission" desc="TCP gửi lại segment vì nghi ngờ mất dữ liệu." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ TCP không bao giờ mất dữ liệu", desc: "Mạng vẫn có thể mất segment. TCP đáng tin cậy vì phát hiện và gửi lại, không phải vì mạng không mất gói.", fix: "Reliable = có cơ chế sửa lỗi truyền tải." },
    { title: "Nhầm ACK là đã nhận toàn bộ file", desc: "ACK xác nhận đến một số thứ tự dữ liệu, không nhất thiết là toàn bộ file đã xong.", fix: "Đọc ACK theo sequence number." },
    { title: "Nghĩ Sequence Number luôn tăng 1 theo segment", desc: "Trong TCP thật, sequence number thường tính theo byte, không chỉ theo segment đơn giản.", fix: "Bài nhập môn dùng Seq=1,2,3 để dễ hiểu." },
    { title: "Nghĩ TCP luôn nhanh hơn UDP", desc: "TCP có handshake, ACK, retransmission, flow control nên thường nhiều overhead hơn UDP.", fix: "TCP ưu tiên độ tin cậy, UDP ưu tiên đơn giản/tốc độ." },
    { title: "Nhầm Flow Control với Congestion Control", desc: "Flow Control bảo vệ bên nhận khỏi quá tải. Congestion Control bảo vệ mạng khỏi tắc nghẽn.", fix: "Bài 6.4 sẽ học kỹ cả hai." },
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
              <p>TCP = Transmission Control Protocol.</p>
              <p>TCP nằm ở Transport Layer.</p>
              <p>TCP là connection-oriented.</p>
              <p>TCP cần handshake trước khi truyền dữ liệu.</p>
              <p>TCP chia dữ liệu thành segment.</p>
              <p>Sequence Number giúp đánh số dữ liệu.</p>
              <p>ACK xác nhận đã nhận và báo dữ liệu đang chờ tiếp theo.</p>
              <p>Retransmission gửi lại khi mất segment.</p>
              <p>Flow Control dùng Window Size để tránh làm bên nhận quá tải.</p>
              <p>TCP phù hợp cho web HTTPS, email, SSH, truyền file.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "TCP là gì?", options: ["Giao thức tầng giao vận giúp truyền dữ liệu đáng tin cậy", "Giao thức phân giải tên miền", "Giao thức cấp IP tự động", "Công nghệ mã hóa WiFi"], correct: 0, explanation: "TCP là Transmission Control Protocol, hoạt động ở Transport Layer và cung cấp truyền dữ liệu đáng tin cậy giữa ứng dụng." },
  { question: "Sequence Number dùng để làm gì?", options: ["Đánh số dữ liệu để biết thứ tự và phần bị thiếu", "Đặt địa chỉ MAC", "Tìm tên miền", "Chọn default gateway"], correct: 0, explanation: "Sequence Number giúp TCP biết dữ liệu nào đến trước, đến sau và dữ liệu nào bị thiếu." },
  { question: "ACK=2 thường có nghĩa gì trong ví dụ đơn giản?", options: ["Tôi đang chờ dữ liệu số 2", "Tôi đã nhận sai toàn bộ dữ liệu", "Port server là 2", "TTL còn 2"], correct: 0, explanation: "ACK=2 nghĩa là bên nhận đã nhận dữ liệu trước số 2 và đang chờ dữ liệu số 2." },
  { question: "Nếu TCP gửi Seq=1,2,3,4 nhưng bên nhận nhận 1,2,4, TCP phát hiện gì?", options: ["Seq=3 bị thiếu", "Server đổi IP", "DNS sai", "Port 443 bị đóng"], correct: 0, explanation: "Dựa vào sequence number, TCP biết Seq=3 bị thiếu và cần gửi lại hoặc yêu cầu gửi lại." },
  { question: "Vì sao TCP thường chậm hơn UDP nhưng phù hợp HTTPS, email, SSH, truyền file?", options: ["Vì TCP có độ tin cậy, đúng thứ tự và gửi lại khi mất", "Vì TCP không dùng port", "Vì TCP chỉ chạy trong LAN", "Vì TCP bỏ qua ACK"], correct: 0, explanation: "Các ứng dụng này cần dữ liệu đúng và đầy đủ, nên chấp nhận overhead của TCP để đổi lấy độ tin cậy." },
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
      <p className="text-slate-400 mb-4">Sau TCP tổng quan, bài tiếp theo học kỹ cách TCP thiết lập kết nối bằng 3-Way Handshake.</p>
      <Link to="/phan-6-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.3 — Bắt tay 3 bước <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><ReliableFlowMini /><div className="grid grid-cols-3 gap-3"><MiniCard title="SEQ" value="order" color="orange" icon={<TableProperties />} /><MiniCard title="ACK" value="confirm" color="green" icon={<MailCheck />} /><MiniCard title="WIN" value="flow" color="blue" icon={<Gauge />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Client: 192.168.1.10:52000
Server: 203.0.113.10:443
TCP = reliable byte stream</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function ReliableFlowMini() { return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-2 font-mono text-xs"><p className="text-cyan-300">Client ---- Seq=1 ----&gt; Server</p><p className="text-green-300">Client &lt;--- ACK=2 ----- Server</p><p className="text-cyan-300">Client ---- Seq=2 ----&gt; Server</p><p className="text-green-300">Client &lt;--- ACK=3 ----- Server</p></div>; }
function TcpBetweenAppsVisual() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="Ứng dụng A" sub="192.168.1.10:52000" color="cyan" icon={<Server />} /><ArrowRight className="text-emerald-300" /><Node label="Ứng dụng B" sub="203.0.113.10:443" color="emerald" icon={<Globe2 />} /></div><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-emerald-300 font-mono text-sm">TCP đảm bảo dữ liệu đúng thứ tự, có ACK, gửi lại khi mất.</div></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function Slider({ label, value, setValue, min, max, suffix, color, display }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{display ?? value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function HandshakePreview({ phase }) { return <div className="space-y-4"><ClientServerLine top="SYN" bottom="SYN-ACK" color="purple" /><ClientServerLine top="ACK" bottom={phase === "data" ? "HTTP Response" : "Connection established"} color={phase === "data" ? "green" : "purple"} /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">{phase === "handshake" ? "TCP giống gọi điện thoại: phải kết nối trước rồi mới nói chuyện." : "Sau handshake, dữ liệu ứng dụng mới bắt đầu truyền."}</div></div>; }
function ClientServerLine({ top, bottom, color }) { const c = colorClasses[color]; return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm space-y-2"><p className={c.text}>Client ---- {top} ----&gt; Server</p><p className={c.text}>Client &lt;--- {bottom} ---- Server</p></div>; }
function RetransmissionVisual({ fixed }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-green-300">Client ---- Seq=1 ----&gt; Server</p><p className="text-green-300">Client &lt;--- ACK=2 ---- Server</p><p className={fixed ? "text-green-300" : "text-red-300"}>Client ---- Seq=2 {fixed ? "----> Server" : "---X lost"}</p><p className="text-green-300">Client ---- Seq=3 ----&gt; Server</p><p className="text-yellow-300">Client &lt;--- ACK=2 ---- Server</p>{fixed && <><p className="text-cyan-300">Client ---- Seq=2 retransmit ----&gt; Server</p><p className="text-green-300">Client &lt;--- ACK=4 ---- Server</p></>}</div>; }
function WindowVisual({ window }) { const percent = Math.max(0, Math.min(100, window / 100)); return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-5"><div className="flex justify-between text-sm mb-2"><span className="text-slate-400">Receiver Buffer</span><span className="text-blue-300 font-mono">{window} bytes</span></div><div className="h-5 bg-slate-950 rounded-full border border-slate-800 overflow-hidden"><div className="h-full bg-blue-500 transition-all" style={{ width: `${percent}%` }} /></div></div><div className="bg-blue-500/10 border border-blue-400/40 rounded-2xl p-4 text-blue-300 font-mono text-sm">Receiver advertises Window={window}</div></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function TcpHeaderDiagram({ active }) { const fields = ["Source Port", "Destination Port", "Sequence Number", "Acknowledgment Number", "Flags", "Window Size", "Checksum", "Data"]; return <div className="grid md:grid-cols-2 gap-3">{fields.map((f) => <div key={f} className={`${active === f ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-900 border-slate-800 text-slate-400"} border rounded-2xl p-4 font-mono text-sm`}>{f}</div>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
