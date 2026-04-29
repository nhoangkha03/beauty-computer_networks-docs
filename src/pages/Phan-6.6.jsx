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
  Download,
  FileCheck,
  Gamepad2,
  Globe2,
  KeyRound,
  Layers,
  Mail,
  Network,
  Package,
  RadioTower,
  Search,
  Send,
  Server,
  ShieldCheck,
  Shuffle,
  TableProperties,
  Terminal,
  Timer,
  Video,
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

const comparisonRows = [
  ["Tên đầy đủ", "Transmission Control Protocol", "User Datagram Protocol"],
  ["Tầng hoạt động", "Transport Layer", "Transport Layer"],
  ["Kết nối", "Có kết nối", "Không kết nối"],
  ["Handshake", "Có 3-Way Handshake", "Không có"],
  ["Độ tin cậy", "Cao", "Thấp hơn"],
  ["ACK", "Có", "Không mặc định"],
  ["Gửi lại khi mất gói", "Có", "Không mặc định"],
  ["Đảm bảo thứ tự", "Có", "Không"],
  ["Kiểm soát luồng", "Có", "Không"],
  ["Kiểm soát tắc nghẽn", "Có", "Không như TCP"],
  ["Tốc độ bắt đầu", "Chậm hơn", "Nhanh hơn"],
  ["Header", "Lớn hơn", "Nhỏ hơn"],
  ["Phù hợp với", "Dữ liệu cần chính xác", "Dữ liệu cần nhanh, trễ thấp"],
];

const quickChoices = [
  ["Tải file", "TCP", "Cần đủ dữ liệu, đúng thứ tự", "emerald", <Download />],
  ["Đăng nhập website", "TCP", "Không được mất dữ liệu", "emerald", <KeyRound />],
  ["Chuyển khoản ngân hàng", "TCP", "Cần chính xác tuyệt đối", "emerald", <ShieldCheck />],
  ["SSH vào server", "TCP", "Lệnh phải đúng và đầy đủ", "emerald", <Terminal />],
  ["Gửi email", "TCP", "Nội dung phải đầy đủ", "emerald", <Mail />],
  ["DNS query", "UDP", "Gói nhỏ, cần nhanh", "orange", <Search />],
  ["Game online", "UDP", "Cần độ trễ thấp", "orange", <Gamepad2 />],
  ["Video call", "UDP", "Trễ thấp quan trọng hơn hoàn hảo", "orange", <Video />],
  ["Livestream", "UDP", "Mất ít frame vẫn chấp nhận được", "orange", <Globe2 />],
  ["DHCP cấp IP", "UDP", "Máy mới kết nối chưa có IP ổn định", "orange", <Network />],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Shuffle className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.6</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <Similarities />
        <BiggestDifference />
        <ConnectionModel />
        <OrderingSection />
        <RetransmissionSection />
        <SpeedControlSection />
        <RealWorldExamples />
        <TechnicalExamples />
        <ComparisonTable />
        <TcpUdpDiagrams />
        <QuickChoiceTable />
        <TcpProcess />
        <UdpProcess />
        <WhyTcpSlower />
        <QuicSection />
        <Part6Summary />
        <CommonMistakes />
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
            <Layers size={16} /> Bài cuối Phần 6 — Transport Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            So sánh
            <span className="block text-cyan-400">TCP và UDP</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            TCP ưu tiên độ tin cậy: kết nối, ACK, gửi lại, đúng thứ tự. UDP ưu tiên tốc độ và độ trễ thấp: gửi ngay, header nhỏ, ít cơ chế mặc định.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-emerald-300">TCP</span> = reliable, ordered, connection-oriented.</p>
            <p><span className="text-orange-300">UDP</span> = fast, connectionless, low latency.</p>
            <p><span className="text-cyan-300">Cả hai</span> = Transport Layer + Port.</p>
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
    "Hiểu TCP và UDP khác nhau ở điểm nào.",
    "Biết khi nào nên dùng TCP.",
    "Biết khi nào nên dùng UDP.",
    "Hiểu vì sao TCP đáng tin cậy hơn nhưng thường chậm hơn.",
    "Hiểu vì sao UDP nhanh hơn nhưng không đảm bảo dữ liệu đầy đủ.",
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

function Similarities() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="TCP và UDP giống nhau ở đâu?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>TCP và UDP đều là giao thức ở <strong className="text-cyan-300">Transport Layer</strong>.</p>
            <p>Cả hai đều giúp dữ liệu đi từ ứng dụng này đến ứng dụng khác qua mạng, và đều dùng <strong className="text-white">IP + Port</strong>.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>IP giúp tìm đúng máy. Port giúp tìm đúng ứng dụng trên máy đó.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><SocketSimilarityVisual /></div>
        </div>
      </div>
    </section>
  );
}

function BiggestDifference() {
  const [choice, setChoice] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Khác biệt lớn nhất" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Tin cậy vs tốc độ" icon={<Shuffle />} color="purple" text="TCP ưu tiên độ tin cậy. UDP ưu tiên tốc độ và độ trễ thấp." code="TCP = ưu tiên độ tin cậy\nUDP = ưu tiên tốc độ/thời gian thực" />
            <div className="flex gap-2">
              <button onClick={() => setChoice("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${choice === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setChoice("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${choice === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <PriorityVisual choice={choice} />
            <div className={`${choice === "tcp" ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {choice === "tcp" ? "TCP hỏi kỹ: sẵn sàng chưa, nhận được chưa, có mất gói không, có cần gửi lại không?" : "UDP gửi luôn: nhận được thì tốt, nếu cần đảm bảo thêm thì ứng dụng tự xử lý."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectionModel() {
  const [protocol, setProtocol] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="TCP có kết nối, UDP không kết nối" icon={<RadioTower />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Connection-Oriented vs Connectionless" icon={<RadioTower />} color="orange" text="TCP cần 3-Way Handshake trước khi truyền dữ liệu. UDP không cần handshake, có dữ liệu thì gửi ngay." code="TCP: SYN → SYN-ACK → ACK\nUDP: Datagram → gửi luôn" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><ProtocolFlow protocol={protocol} /></div>
        </div>
      </div>
    </section>
  );
}

function OrderingSection() {
  const [protocol, setProtocol] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="TCP đảm bảo thứ tự, UDP thì không" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Sequence Number" icon={<TableProperties />} color="cyan" text="TCP có Sequence Number nên có thể sắp xếp lại dữ liệu đến sai thứ tự. UDP không có cơ chế này mặc định." code="TCP: Segment 1,3,2,4 → 1,2,3,4\nUDP: Datagram 1,3,2 → app tự xử lý" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <OrderingVisual protocol={protocol} />
            <div className={`${protocol === "tcp" ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {protocol === "tcp" ? "TCP đưa dữ liệu cho ứng dụng theo đúng thứ tự." : "UDP có thể đưa datagram theo thứ tự nhận được; ứng dụng tự quyết định xử lý."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RetransmissionSection() {
  const [protocol, setProtocol] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="red" title="TCP có gửi lại, UDP không tự gửi lại" icon={<Package />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="ACK + Retransmission" icon={<Package />} color="red" text="TCP phát hiện thiếu segment bằng ACK và gửi lại. UDP không tự làm vậy; ứng dụng phải tự quyết định nếu cần." code="TCP: Segment 2 lost → retransmit\nUDP: Datagram 2 lost → no auto retransmit" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <LossRecoveryVisual protocol={protocol} />
            <div className={`${protocol === "tcp" ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {protocol === "tcp" ? "TCP tự sửa lỗi mất segment bằng cơ chế gửi lại." : "UDP không tự gửi lại; nếu cần retry thì ứng dụng tự xây dựng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpeedControlSection() {
  const [protocol, setProtocol] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="blue" title="TCP có kiểm soát tốc độ, UDP thì rất ít" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Flow/Congestion Control" icon={<Database />} color="blue" text="TCP có Flow Control và Congestion Control. UDP gần như để ứng dụng tự lo việc kiểm soát tốc độ và tắc nghẽn." code="TCP: min(rwnd, cwnd)\nUDP: send quickly, app handles policy" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SpeedControlVisual protocol={protocol} />
            <div className={`${protocol === "tcp" ? "bg-blue-500/10 border-blue-400/40 text-blue-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {protocol === "tcp" ? "TCP tự điều chỉnh tốc độ theo receiver và network." : "UDP nhẹ hơn nhưng ứng dụng cần tự tránh gửi quá nhiều gây nghẽn."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="orange" title="Ví dụ đời thực" icon={<FileCheck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="TCP: gửi hợp đồng quan trọng" icon={<FileCheck />} color="emerald" text="Gửi đúng người, có ký nhận, không mất trang, đúng thứ tự trang, mất thì gửi lại. Phù hợp dữ liệu cần chính xác." code="Đăng nhập\nChuyển khoản\nTải file\nEmail\nSSH\nHTTPS" />
        <ConceptCard title="UDP: phát tờ rơi nhanh" icon={<Mail />} color="orange" text="Ưu tiên nhanh. Có thể vài người không nhận, nhưng không quay lại kiểm tra từng người. Phù hợp thời gian thực." code="Livestream\nVideo call\nGame online\nDNS\nDHCP\nVoIP" />
      </div>
    </section>
  );
}

function TechnicalExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Ví dụ kỹ thuật: HTTPS và DNS" icon={<Code2 />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="TCP HTTPS" icon={<Globe2 />} color="emerald" text="Web HTTPS cần dữ liệu đầy đủ, đúng thứ tự, không mất thông tin đăng nhập hoặc giao dịch." code="192.168.1.10:52000 ---- TCP ----> 203.0.113.10:443" />
        <ConceptCard title="UDP DNS" icon={<Search />} color="orange" text="DNS query thường nhỏ và cần nhanh. Nếu không phản hồi, client có thể hỏi lại." code="192.168.1.10:53000 ---- UDP ----> 8.8.8.8:53" />
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="cyan" title="Bảng so sánh tổng quát TCP và UDP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[880px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-emerald-300">TCP</th><th className="p-4 text-orange-300">UDP</th></tr></thead>
            <tbody className="text-sm">
              {comparisonRows.map(([criteria, tcp, udp], i) => <tr key={criteria} className={`${i === comparisonRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{tcp}</td><td className="p-4 text-slate-300">{udp}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TcpUdpDiagrams() {
  const [protocol, setProtocol] = useState("tcp");
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="Sơ đồ TCP và UDP" icon={<ArrowRight />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Nhìn vào luồng gói" icon={<ArrowRight />} color="purple" text="TCP có bắt tay, ACK và kiểm soát. UDP gửi datagram trực tiếp, không ACK mặc định." code="TCP: SYN, SYN-ACK, ACK, Data, ACK\nUDP: Datagram, Datagram, Datagram" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><ProtocolDiagram protocol={protocol} /></div>
        </div>
      </div>
    </section>
  );
}

function QuickChoiceTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="green" title="Bảng chọn nhanh TCP hay UDP" icon={<CheckCircle2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tình huống</th><th className="p-4">Nên dùng</th><th className="p-4">Lý do</th></tr></thead>
            <tbody className="text-sm">
              {quickChoices.map(([scenario, protocol, reason, color, icon], i) => <tr key={scenario} className={`${i === quickChoices.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold flex items-center gap-2">{React.cloneElement(icon, { size: 18, className: colorClasses[color].text })}{scenario}</td><td className={`p-4 ${colorClasses[color].text} font-black`}>{protocol}</td><td className="p-4 text-slate-300">{reason}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TcpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "DNS phân giải tên miền", text: "Client lấy IP của example.com trước khi kết nối.", code: "example.com → 203.0.113.10", color: "cyan", icon: <Search /> },
    { title: "Client tạo port tạm thời", text: "Client tạo socket phía mình, ví dụ port 52000.", code: "192.168.1.10:52000", color: "orange", icon: <DoorOpen /> },
    { title: "Gửi SYN", text: "Client bắt đầu TCP 3-Way Handshake đến server port 443.", code: "SYN → 203.0.113.10:443", color: "emerald", icon: <Send /> },
    { title: "Nhận SYN-ACK", text: "Server đồng ý và xác nhận SYN của client.", code: "← SYN-ACK", color: "green", icon: <RadioTower /> },
    { title: "Gửi ACK", text: "Client xác nhận lần cuối. TCP connection established.", code: "ACK → ESTABLISHED", color: "blue", icon: <CheckCircle2 /> },
    { title: "Gửi HTTPS request", text: "Sau khi kết nối xong, dữ liệu ứng dụng mới truyền.", code: "GET / HTTP/2 or HTTP/1.1", color: "purple", icon: <Globe2 /> },
    { title: "TCP đảm bảo dữ liệu", text: "TCP giữ đúng thứ tự, gửi lại khi mất và kiểm soát tốc độ.", code: "ACK + retransmission + ordering", color: "emerald", icon: <ShieldCheck /> },
    { title: "Đóng kết nối", text: "Khi xong, TCP đóng kết nối bằng FIN/ACK hoặc RST tùy trường hợp.", code: "FIN / ACK", color: "red", icon: <XCircle /> },
  ];
  return <StepSection number="13" color="emerald" title="Quy trình khi dùng TCP: HTTPS" icon={<Globe2 />} steps={steps} step={step} setStep={setStep} />;
}

function UdpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client tạo DNS query", text: "Ứng dụng cần hỏi google.com có IP là gì.", code: "Query: google.com", color: "cyan", icon: <Search /> },
    { title: "UDP thêm header", text: "UDP thêm source port, destination port, length, checksum.", code: "Src=53000, Dst=53", color: "purple", icon: <TableProperties /> },
    { title: "Gửi UDP datagram", text: "Client gửi datagram đến DNS server port 53 mà không handshake.", code: "192.168.1.10:53000 → 8.8.8.8:53", color: "orange", icon: <Send /> },
    { title: "DNS server nhận", text: "Server nhận datagram và đưa dữ liệu cho DNS service nhờ port 53.", code: "Dst port 53 → DNS", color: "emerald", icon: <Server /> },
    { title: "Server trả lời", text: "DNS server trả UDP datagram về client port 53000.", code: "8.8.8.8:53 → 192.168.1.10:53000", color: "green", icon: <ArrowRight /> },
    { title: "Nếu mất thì app tự xử lý", text: "Nếu client không nhận được phản hồi sau một thời gian, ứng dụng DNS có thể hỏi lại.", code: "timeout → retry query", color: "red", icon: <Timer /> },
  ];
  return <StepSection number="14" color="orange" title="Quy trình khi dùng UDP: DNS" icon={<Search />} steps={steps} step={step} setStep={setStep} />;
}

function WhyTcpSlower() {
  const extraWork = [
    ["3-Way Handshake", "Mất thêm thời gian trước khi gửi dữ liệu", "purple", <RadioTower />],
    ["ACK", "Tốn thêm gói xác nhận", "green", <CheckCircle2 />],
    ["Retransmission", "Phải gửi lại khi mất gói", "red", <Package />],
    ["Flow Control", "Điều chỉnh theo receiver", "blue", <Database />],
    ["Congestion Control", "Điều chỉnh theo tình trạng mạng", "cyan", <Network />],
    ["Ordering", "Lưu và sắp xếp dữ liệu", "orange", <TableProperties />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="red" title="Vì sao TCP thường chậm hơn UDP?" icon={<Timer />} />
      <div className="grid lg:grid-cols-3 gap-4">
        {extraWork.map(([title, text, color, icon]) => <ConceptCard key={title} title={title} icon={icon} color={color} text={text} code="TCP làm thêm để đổi lấy độ tin cậy" />)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-slate-300 leading-relaxed">
        TCP chậm hơn vì kiểm tra kỹ hơn. UDP nhanh hơn vì làm ít việc hơn, nhưng đổi lại UDP không tự đảm bảo dữ liệu đầy đủ.
      </div>
    </section>
  );
}

function QuicSection() {
  const [view, setView] = useState("simple");
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="cyan" title="UDP có luôn tốt hơn TCP cho tốc độ không?" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="UDP chỉ đơn giản ở tầng giao vận" icon={<Zap />} color="cyan" text="Nếu ứng dụng cần độ tin cậy, nó phải tự xây dựng cơ chế bổ sung phía trên UDP. Vì vậy toàn hệ thống có thể vẫn phức tạp." code="UDP transport: simple\nApplication protocol: can be complex" />
            <div className="flex gap-2">
              <button onClick={() => setView("simple")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${view === "simple" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP thuần</button>
              <button onClick={() => setView("quic")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${view === "quic" ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>QUIC/HTTP/3</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <QuicVisual view={view} />
            <div className={`${view === "quic" ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {view === "quic" ? "QUIC chạy trên UDP nhưng tự bổ sung thiết lập kết nối nhanh, mã hóa, kiểm soát tắc nghẽn, gửi lại khi cần và hỗ trợ HTTP/3." : "UDP thuần gửi datagram nhanh, nhưng không tự đảm bảo ACK, thứ tự, retransmission hoặc congestion control như TCP."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Part6Summary() {
  const lessons = [
    ["6.1", "Port & Socket"],
    ["6.2", "TCP — kết nối đáng tin cậy"],
    ["6.3", "3-Way Handshake"],
    ["6.4", "Flow Control & Congestion Control"],
    ["6.5", "UDP — nhanh, không kết nối"],
    ["6.6", "So sánh TCP và UDP"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="green" title="Bạn đã hoàn thành Phần 6" icon={<Award />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {lessons.map(([n, title]) => <div key={n} className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="text-cyan-300 font-black">Bài {n}</p><p className="text-slate-300 text-sm mt-1">{title}</p></div>)}
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 text-green-300 font-mono text-sm whitespace-pre-wrap">Network Layer  →  Transport Layer  →  Application Layer
          IP             →  TCP/UDP           →  HTTP, DNS, FTP, Email, DHCP...</div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ UDP luôn tốt hơn vì nhanh", desc: "UDP có thể có độ trễ thấp hơn, nhưng nếu cần tự xây dựng reliability thì ứng dụng phức tạp hơn.", fix: "Chọn theo yêu cầu: chính xác hay realtime." },
    { title: "Nghĩ TCP luôn chậm và không dùng cho web hiện đại", desc: "HTTPS truyền thống dùng TCP rất phổ biến vì cần độ tin cậy, đúng thứ tự và bảo vệ dữ liệu giao dịch.", fix: "TCP vẫn cực kỳ quan trọng." },
    { title: "Nghĩ UDP không dùng port", desc: "UDP vẫn dùng IP + Port để đưa dữ liệu đến đúng ứng dụng.", fix: "TCP và UDP đều dùng port." },
    { title: "Nghĩ UDP mất gói là ứng dụng chắc chắn lỗi", desc: "Nhiều ứng dụng realtime chấp nhận hoặc che lỗi mất gói để giảm delay.", fix: "Realtime ưu tiên dữ liệu mới hơn dữ liệu cũ." },
    { title: "Nhầm TCP handshake với TLS handshake", desc: "TCP handshake thiết lập kết nối transport. TLS handshake thiết lập bảo mật ở tầng cao hơn.", fix: "HTTPS thường có cả TCP handshake và TLS handshake." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">19</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>TCP và UDP đều ở Transport Layer.</p>
              <p>Cả hai đều dùng IP + Port.</p>
              <p>TCP ưu tiên độ tin cậy.</p>
              <p>UDP ưu tiên tốc độ và độ trễ thấp.</p>
              <p>TCP connection-oriented, UDP connectionless.</p>
              <p>TCP có 3-Way Handshake, UDP không.</p>
              <p>TCP có ACK và retransmission, UDP không mặc định.</p>
              <p>TCP đảm bảo thứ tự, UDP không mặc định.</p>
              <p>TCP có flow/congestion control, UDP không như TCP.</p>
              <p>TCP hợp tải file, HTTPS, SSH, email.</p>
              <p>UDP hợp DNS, DHCP, game, video call, livestream.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Khác biệt lớn nhất giữa TCP và UDP là gì?", options: ["TCP ưu tiên độ tin cậy, UDP ưu tiên tốc độ/độ trễ thấp", "TCP dùng IP, UDP không dùng IP", "TCP không dùng port, UDP dùng port", "TCP chỉ chạy trong LAN"], correct: 0, explanation: "TCP có handshake, ACK, retransmission, ordering và control; UDP nhẹ hơn, gửi nhanh hơn nhưng không đảm bảo mặc định." },
  { question: "Tải file .zip nên dùng TCP hay UDP?", options: ["TCP", "UDP", "ARP", "ICMP"], correct: 0, explanation: "File cần đủ dữ liệu và đúng thứ tự; chỉ cần mất một byte là có thể lỗi, nên phù hợp TCP." },
  { question: "Video call thường ưu tiên UDP vì sao?", options: ["Độ trễ thấp quan trọng hơn hoàn hảo tuyệt đối", "UDP đảm bảo đúng thứ tự hơn TCP", "UDP có 3-Way Handshake", "UDP không dùng port"], correct: 0, explanation: "Realtime chấp nhận mất ít dữ liệu để tránh trễ/khựng." },
  { question: "DNS query thường dùng giao thức và port nào?", options: ["UDP 53", "TCP 22", "UDP 443", "TCP 25"], correct: 0, explanation: "DNS query thường nhỏ và cần nhanh, nên thường dùng UDP port 53." },
  { question: "QUIC/HTTP/3 chạy trên UDP nhưng vì sao vẫn có thể đáng tin cậy?", options: ["Vì QUIC tự bổ sung cơ chế ở tầng trên UDP", "Vì UDP tự ACK mặc định", "Vì UDP có TCP header", "Vì DNS tự mã hóa TCP"], correct: 0, explanation: "UDP đơn giản ở transport layer; QUIC xây thêm connection setup, encryption, congestion control và retransmission khi cần." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 6!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bạn đã hoàn thành Transport Layer. Bài tiếp theo chuyển sang Application Layer với DNS — hệ thống phân giải tên miền.</p>
      <Link to="/phan-7-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.1 — DNS: Hệ thống phân giải tên miền <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="grid grid-cols-2 gap-3"><MiniCard title="TCP" value="reliable" color="emerald" icon={<ShieldCheck />} /><MiniCard title="UDP" value="low latency" color="orange" icon={<Zap />} /></div><ProtocolDiagram protocol="tcp" compact /><ProtocolDiagram protocol="udp" compact /></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function SocketSimilarityVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><SocketBox label="Client" value="192.168.1.10:52000" color="cyan" icon={<Send />} /><ArrowRight className="text-slate-500" /><SocketBox label="Server" value="8.8.8.8:53" color="emerald" icon={<Server />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">TCP hoặc UDP đều cần IP + Port để định danh ứng dụng.</div></div>; }
function SocketBox({ label, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-xs text-slate-500 font-bold uppercase">{label}</p><p className={`${c.text} font-mono font-black mt-2 break-all text-sm`}>{value}</p></div>; }
function PriorityVisual({ choice }) { return <div className="grid md:grid-cols-2 gap-3"><div className={`${choice === "tcp" ? "bg-emerald-500/10 border-emerald-400/40" : "bg-slate-900 border-slate-800"} border rounded-3xl p-5`}><ShieldCheck className={choice === "tcp" ? "text-emerald-300" : "text-slate-600"} size={30} /><h4 className="text-white font-bold mt-3">TCP</h4><p className="text-slate-400 text-sm mt-2">Ký nhận, gửi lại, đúng thứ tự.</p></div><div className={`${choice === "udp" ? "bg-orange-500/10 border-orange-400/40" : "bg-slate-900 border-slate-800"} border rounded-3xl p-5`}><Zap className={choice === "udp" ? "text-orange-300" : "text-slate-600"} size={30} /><h4 className="text-white font-bold mt-3">UDP</h4><p className="text-slate-400 text-sm mt-2">Gửi ngay, ít trễ, nhẹ.</p></div></div>; }
function ProtocolFlow({ protocol }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">{protocol === "tcp" ? <><p className="text-emerald-300">Client ---- SYN ----&gt; Server</p><p className="text-emerald-300">Client &lt;--- SYN-ACK ---- Server</p><p className="text-emerald-300">Client ---- ACK ----&gt; Server</p><p className="text-green-300">Client ---- Data ----&gt; Server</p></> : <><p className="text-orange-300">Client ---- UDP Datagram ----&gt; Server</p><p className="text-orange-300">Client ---- UDP Datagram ----&gt; Server</p><p className="text-slate-500">No connection setup.</p></>}</div>; }
function OrderingVisual({ protocol }) { const order = protocol === "tcp" ? [1, 2, 3, 4] : [1, 3, 2, 4]; return <div className="space-y-4"><div className="grid grid-cols-4 gap-3">{order.map((n, i) => <div key={`${n}-${i}`} className={`${protocol === "tcp" ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : n !== i + 1 ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-center`}><Package className="mx-auto mb-2" /><p className="font-mono font-black">{protocol === "tcp" ? "Segment" : "Datagram"} {n}</p></div>)}</div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">{protocol === "tcp" ? "App receives: 1,2,3,4" : "App may receive: 1,3,2,4"}</div></div>; }
function LossRecoveryVisual({ protocol }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">{protocol === "tcp" ? <><p className="text-green-300">Segment 1 ----&gt; received</p><p className="text-red-300">Segment 2 ----X lost</p><p className="text-green-300">Segment 3 ----&gt; received</p><p className="text-cyan-300">Retransmit Segment 2 ----&gt; received</p></> : <><p className="text-green-300">Datagram 1 ----&gt; received</p><p className="text-red-300">Datagram 2 ----X lost</p><p className="text-green-300">Datagram 3 ----&gt; received</p><p className="text-slate-500">UDP itself does not retransmit.</p></>}</div>; }
function SpeedControlVisual({ protocol }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><MiniNode label="Sender" color="cyan" icon={<Send />} /><ArrowRight className="text-slate-500" /><MiniNode label="Network" color="blue" icon={<Network />} /><ArrowRight className="text-slate-500" /><MiniNode label="Receiver" color="green" icon={<Server />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">{protocol === "tcp" ? "Send Window = min(rwnd, cwnd)" : "UDP sends datagrams; app controls pacing if needed"}</div></div>; }
function MiniNode({ label, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>; }
function ProtocolDiagram({ protocol, compact = false }) { return <div className={`font-mono ${compact ? "text-xs" : "text-sm"} bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2`}>{protocol === "tcp" ? <><p className="text-emerald-300">Client ---- SYN -----------------&gt; Server</p><p className="text-emerald-300">Client &lt;--- SYN-ACK -------------- Server</p><p className="text-emerald-300">Client ---- ACK -----------------&gt; Server</p><p className="text-cyan-300">Client ---- Data Segment --------&gt; Server</p><p className="text-green-300">Client &lt;--- ACK ------------------ Server</p></> : <><p className="text-orange-300">Client ---- UDP Datagram --------&gt; Server</p><p className="text-orange-300">Client ---- UDP Datagram --------&gt; Server</p><p className="text-orange-300">Client ---- UDP Datagram --------&gt; Server</p><p className="text-slate-500">No handshake / no ACK by default</p></>}</div>; }
function QuicVisual({ view }) { return <div className="space-y-3">{view === "simple" ? <><LayerBox title="Application" text="App tự xử lý nếu cần" color="slate" /><LayerBox title="UDP" text="Datagram, low overhead" color="orange" /><LayerBox title="IP" text="Routing" color="cyan" /></> : <><LayerBox title="HTTP/3" text="Web application protocol" color="purple" /><LayerBox title="QUIC" text="Reliability + encryption + congestion control" color="cyan" /><LayerBox title="UDP" text="Transport substrate" color="orange" /><LayerBox title="IP" text="Routing" color="green" /></>}</div>; }
function LayerBox({ title, text, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black`}>{title}</p><p className="text-slate-400 text-sm mt-1">{text}</p></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
