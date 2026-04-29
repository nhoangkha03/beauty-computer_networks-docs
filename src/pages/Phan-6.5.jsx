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
  Gamepad2,
  Globe2,
  Layers,
  Mail,
  Network,
  Package,
  RadioTower,
  Search,
  Send,
  Server,
  ShieldCheck,
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

const udpNoGuarantees = [
  ["Kiểm tra dữ liệu đã đến chưa", "Không"],
  ["Gửi lại gói bị mất", "Không"],
  ["Sắp xếp lại đúng thứ tự", "Không"],
  ["Kiểm soát luồng", "Không"],
  ["Kiểm soát tắc nghẽn như TCP", "Không"],
  ["Thiết lập kết nối trước", "Không"],
];

const udpApps = [
  ["DNS", "53", "Query nhỏ, cần phản hồi nhanh", "cyan", <Search />],
  ["DHCP", "67, 68", "Cấp IP khi máy chưa có địa chỉ IP", "blue", <Network />],
  ["VoIP", "Thường thay đổi", "Cần độ trễ thấp", "green", <RadioTower />],
  ["Video call", "Thường thay đổi", "Trễ thấp quan trọng hơn hoàn hảo", "purple", <Video />],
  ["Game online", "Thường thay đổi", "Cần phản hồi nhanh", "orange", <Gamepad2 />],
  ["Streaming", "Thường thay đổi", "Chấp nhận mất ít dữ liệu", "emerald", <Globe2 />],
  ["NTP", "123", "Đồng bộ thời gian nhanh, gói nhỏ", "yellow", <Timer />],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Zap className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <UdpIntro />
        <ConnectionlessSection />
        <UnreliableSection />
        <DatagramSection />
        <UdpPorts />
        <PostcardExample />
        <LivestreamExample />
        <DnsExample />
        <UdpPacketLoss />
        <UdpHeader />
        <AppTable />
        <UdpSteps />
        <AppResponsibility />
        <ChecksumSection />
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
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> Transport Layer — nhanh và đơn giản
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Giao thức UDP:
            <span className="block text-cyan-400">Nhanh & không kết nối</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            UDP gửi datagram thật nhanh, không bắt tay trước, không ACK mặc định, không tự gửi lại và phù hợp khi độ trễ thấp quan trọng hơn độ hoàn hảo tuyệt đối.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">UDP</span> = User Datagram Protocol.</p>
            <p><span className="text-orange-300">Connectionless</span> = không bắt tay.</p>
            <p><span className="text-emerald-300">Fast</span> = header nhỏ, ít kiểm soát.</p>
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
    "Hiểu UDP là gì và UDP hoạt động ở tầng nào.",
    "Biết vì sao UDP nhanh và không kết nối.",
    "Hiểu UDP khác TCP ở điểm quan trọng nào.",
    "Biết khi nào nên dùng UDP thay vì TCP.",
    "Nhận biết ứng dụng thực tế dùng UDP như DNS, VoIP, video call, game online, streaming.",
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

function UdpIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="UDP là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">UDP — User Datagram Protocol</strong> là giao thức ở <strong className="text-cyan-300">Transport Layer</strong>, giống TCP.</p>
            <p>UDP chọn hướng đơn giản: gửi dữ liệu đi nhanh, không thiết lập kết nối trước, không tự xác nhận, không tự gửi lại khi mất.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>UDP là giao thức truyền dữ liệu nhanh, đơn giản, không thiết lập kết nối trước.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><UdpVsTcpMini /></div>
        </div>
      </div>
    </section>
  );
}

function ConnectionlessSection() {
  const [protocol, setProtocol] = useState("udp");
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="UDP là Connectionless nghĩa là gì?" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Không bắt tay trước" icon={<Zap />} color="orange" text="UDP không cần 3-Way Handshake như TCP. Ứng dụng có dữ liệu thì UDP đóng datagram và gửi luôn." code="Client ---- UDP Data ----&gt; Server" />
            <div className="flex gap-2">
              <button onClick={() => setProtocol("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setProtocol("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${protocol === "udp" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ConnectionVisual protocol={protocol} />
            <div className={`${protocol === "udp" ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"} border rounded-2xl p-4 text-sm`}>
              {protocol === "udp" ? "UDP gửi luôn, không có SYN/SYN-ACK/ACK để thiết lập kết nối." : "TCP cần handshake trước khi truyền dữ liệu thật."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnreliableSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="red" title="UDP không đáng tin cậy nghĩa là gì?" icon={<AlertTriangle />} />
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
        <ConceptCard title="Không phải UDP tệ" icon={<ShieldCheck />} color="red" text="Không đáng tin cậy nghĩa là UDP không tự đảm bảo đầy đủ như TCP. Nếu ứng dụng cần đảm bảo, ứng dụng phải tự xử lý." code="No ACK by default\nNo retransmission by default\nNo ordering by default" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Việc cần đảm bảo</th><th className="p-4">UDP tự làm?</th></tr></thead>
            <tbody className="text-sm">
              {udpNoGuarantees.map(([task, yes], i) => <tr key={task} className={`${i === udpNoGuarantees.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-slate-300">{task}</td><td className="p-4 text-red-300 font-black">{yes}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DatagramSection() {
  const [lost, setLost] = useState(1);
  const datagrams = ["Xin", "chào", "bạn"];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Datagram là gì?" icon={<Package />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="UDP Datagram" icon={<Package />} color="purple" text="Dữ liệu trong UDP được gọi là datagram. Mỗi datagram độc lập, UDP không quản lý luồng dữ liệu chặt như TCP." code="Datagram 1: Xin\nDatagram 2: chào\nDatagram 3: bạn" />
            <Slider label="Datagram bị mất" value={lost} setValue={setLost} min={0} max={2} suffix="" color="purple" display={`Datagram ${lost + 1}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {datagrams.map((d, i) => <div key={d} className={`${i === lost ? "bg-red-500/10 border-red-400/40 text-red-300 line-through" : "bg-purple-500/10 border-purple-400/40 text-purple-300"} border rounded-2xl p-5 text-center`}><Package className="mx-auto mb-2" /><p className="font-mono font-black">{d}</p></div>)}
            </div>
            <div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-red-300 text-sm">
              Nếu một datagram bị mất, UDP không tự gửi lại. Bên nhận có thể nhận thiếu: <span className="font-mono text-white">{datagrams.filter((_, i) => i !== lost).join(" ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UdpPorts() {
  const [clientPort, setClientPort] = useState(53000);
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="UDP vẫn dùng Port và Socket" icon={<DoorOpen />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Port vẫn rất quan trọng" icon={<DoorOpen />} color="cyan" text="UDP không có kết nối như TCP, nhưng vẫn dùng port để giao dữ liệu đúng ứng dụng trên máy nhận." code="Client: 192.168.1.10:53000\nServer DNS: 8.8.8.8:53" />
            <Slider label="Client UDP port" value={clientPort} setValue={setClientPort} min={49152} max={65535} suffix="" color="cyan" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SocketPair clientPort={clientPort} />
            <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 text-sm font-mono whitespace-pre-wrap">Source:      192.168.1.10:{clientPort}
              Destination: 8.8.8.8:53
              Protocol:    UDP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostcardExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="Ví dụ đời thực: gửi bưu thiếp" icon={<Mail />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bưu thiếp" icon={<Mail />} color="orange" text="Bạn gửi bưu thiếp đi mà không yêu cầu người nhận ký nhận, không yêu cầu báo đã nhận và không tự gửi lại nếu thất lạc." code="Bưu thiếp = Datagram\nĐịa chỉ nhà = IP\nSố phòng/người nhận = Port" />
        <ConceptCard title="UDP tương ứng" icon={<Package />} color="purple" text="UDP gửi datagram đi. Nếu đến thì tốt, nếu mất thì UDP không tự biết và không tự gửi lại." code="Không ACK\nKhông retransmission\nKhông đảm bảo thứ tự" />
      </div>
    </section>
  );
}

function LivestreamExample() {
  const [mode, setMode] = useState("udp");
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Ví dụ: livestream, video call, game online" icon={<Video />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Độ trễ thấp quan trọng" icon={<Video />} color="green" text="Với video call, livestream hoặc game online, mất một ít dữ liệu thường tốt hơn bị trễ nhiều." code="Mất frame 100\n→ bỏ qua\n→ tiếp tục frame 101,102,103" />
            <div className="flex gap-2">
              <button onClick={() => setMode("tcp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${mode === "tcp" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>TCP</button>
              <button onClick={() => setMode("udp")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${mode === "udp" ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>UDP</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <FrameLossVisual mode={mode} />
            <div className={`${mode === "udp" ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"} border rounded-2xl p-4 text-sm`}>
              {mode === "udp" ? "UDP có thể bỏ qua frame cũ để giữ cuộc gọi/game mượt và ít trễ." : "TCP sẽ ưu tiên gửi lại phần bị mất, có thể làm video/game bị khựng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DnsExample() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Ứng dụng cần IP của tên miền", text: "Bạn truy cập google.com, máy cần hỏi DNS để lấy IP.", code: "google.com → ?", color: "cyan", icon: <Search /> },
    { title: "DNS client tạo UDP query", text: "Client chọn port tạm thời, ví dụ 53000, gửi đến DNS server port 53.", code: "192.168.1.10:53000 → 8.8.8.8:53", color: "orange", icon: <Send /> },
    { title: "UDP thêm header", text: "UDP header gồm Source Port, Destination Port, Length và Checksum.", code: "Src Port=53000\nDst Port=53", color: "purple", icon: <TableProperties /> },
    { title: "IP đưa packet qua mạng", text: "UDP datagram được đặt vào IP packet và chuyển qua mạng đến DNS server.", code: "IP dst = 8.8.8.8", color: "blue", icon: <Network /> },
    { title: "Server nhìn port 53", text: "UDP trên server dùng destination port 53 để chuyển dữ liệu cho DNS service.", code: "Dst port 53 → DNS service", color: "emerald", icon: <Server /> },
    { title: "DNS reply về client", text: "DNS server trả kết quả về socket UDP của client.", code: "8.8.8.8:53 → 192.168.1.10:53000", color: "green", icon: <ArrowRight /> },
  ];
  return <StepSection number="9" color="cyan" title="Ví dụ kỹ thuật: DNS Query bằng UDP" icon={<Search />} steps={steps} step={step} setStep={setStep} />;
}

function UdpPacketLoss() {
  const [lost, setLost] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="red" title="UDP khi mất gói" icon={<XCircle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Không tự gửi lại" icon={<XCircle />} color="red" text="Nếu một UDP datagram bị mất, UDP không tự retransmit như TCP. Ứng dụng phải quyết định có gửi lại hay bỏ qua." code="Datagram 2 lost\nUDP does nothing by itself" />
            <button onClick={() => setLost(!lost)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${lost ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>{lost ? "Datagram 2 bị mất" : "Ứng dụng gửi lại query"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <UdpLossVisual recovered={!lost} />
            <div className={`${lost ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"} border rounded-2xl p-4 text-sm`}>
              {lost ? "UDP không tự sửa. Datagram 2 mất thì mất." : "Nếu cần, tầng ứng dụng có thể tự timeout và gửi lại request/query."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UdpHeader() {
  const [field, setField] = useState(0);
  const fields = [
    ["Source Port", "Port nguồn của ứng dụng gửi.", "53000", "cyan", <Send />],
    ["Destination Port", "Port đích của dịch vụ nhận.", "53", "emerald", <Server />],
    ["Length", "Độ dài UDP datagram gồm header và data.", "Length", "orange", <TableProperties />],
    ["Checksum", "Kiểm tra lỗi cơ bản của datagram.", "Checksum", "yellow", <ShieldCheck />],
  ];
  const cur = fields[field];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="UDP Header" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {fields.map(([title, , value, color, icon], idx) => <button key={title} onClick={() => setField(idx)} className={`rounded-2xl p-3 text-left border transition-all ${field === idx ? `${colorClasses[color].bg} ${colorClasses[color].border} ${colorClasses[color].text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}><div className="flex items-center gap-2 mb-1">{React.cloneElement(icon, { size: 16 })}<span className="font-black text-xs">{title}</span></div><p className="text-[11px] font-mono opacity-80">{value}</p></button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title={cur[0]} icon={cur[4]} color={cur[3]} text={cur[1]} code={cur[2]} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <UdpHeaderDiagram active={cur[0]} />
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 text-purple-300 text-sm">
              UDP header chỉ có 4 trường chính, đơn giản hơn TCP header vì không có Sequence Number, ACK Number, Flags, Window Size.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="green" title="Ứng dụng thường dùng UDP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Ứng dụng / Giao thức</th><th className="p-4">Port thường gặp</th><th className="p-4">Vì sao dùng UDP?</th></tr></thead>
            <tbody className="text-sm">
              {udpApps.map(([name, port, reason, color, icon], i) => <tr key={name} className={`${i === udpApps.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 ${colorClasses[color].text} font-bold flex items-center gap-2`}>{React.cloneElement(icon, { size: 18 })}{name}</td><td className="p-4 text-white font-mono">{port}</td><td className="p-4 text-slate-300">{reason}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function UdpSteps() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Ứng dụng tạo dữ liệu", text: "DNS client tạo câu hỏi: google.com có IP là gì?", code: "Query: google.com A record", color: "cyan", icon: <Search /> },
    { title: "UDP thêm header", text: "UDP thêm Source Port, Destination Port, Length và Checksum.", code: "Src=53000\nDst=53\nLength\nChecksum", color: "purple", icon: <TableProperties /> },
    { title: "Đưa xuống IP", text: "UDP datagram được đóng vào IP packet để gửi qua mạng.", code: "UDP Datagram → IP Packet", color: "blue", icon: <Network /> },
    { title: "IP chuyển đến server", text: "Các router chuyển packet dựa trên IP đích 8.8.8.8.", code: "Dst IP = 8.8.8.8", color: "orange", icon: <Globe2 /> },
    { title: "Server nhận packet", text: "Server bóc IP packet và chuyển UDP datagram lên UDP layer.", code: "IP → UDP", color: "green", icon: <Server /> },
    { title: "UDP nhìn port đích", text: "Destination Port 53 cho biết dữ liệu thuộc DNS service.", code: "Dst port 53 → DNS", color: "emerald", icon: <DoorOpen /> },
    { title: "DNS xử lý và trả lời", text: "DNS server trả UDP reply về client port 53000.", code: "8.8.8.8:53 → 192.168.1.10:53000", color: "cyan", icon: <ArrowRight /> },
  ];
  return <StepSection number="13" color="cyan" title="UDP hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function AppResponsibility() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="orange" title="Nếu UDP không gửi lại, tại sao vẫn dùng được?" icon={<CircleHelp />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="DNS" icon={<Search />} color="cyan" text="Nếu không nhận được DNS reply, DNS client có thể tự gửi lại query hoặc hỏi DNS server khác." code="timeout → retry query" />
        <ConceptCard title="Game online" icon={<Gamepad2 />} color="orange" text="Nếu mất vị trí nhân vật ở thời điểm cũ, game thường bỏ qua và dùng vị trí mới hơn." code="lost old position\nuse latest position" />
        <ConceptCard title="Video call" icon={<Video />} color="purple" text="Nếu mất một mẩu âm thanh/hình nhỏ, ứng dụng có thể che lỗi hoặc bỏ qua để giữ độ trễ thấp." code="skip / conceal loss\navoid delay" />
      </div>
    </section>
  );
}

function ChecksumSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="yellow" title="UDP có kiểm tra lỗi không?" icon={<ShieldCheck />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Có Checksum" icon={<ShieldCheck />} color="yellow" text="UDP có trường Checksum để phát hiện lỗi cơ bản trong quá trình truyền." code="Checksum detects corruption" />
        <ConceptCard title="Nhưng không tự sửa" icon={<XCircle />} color="red" text="UDP có thể phát hiện lỗi, nhưng không tự sửa, không tự gửi lại gói mất và không tự sắp xếp lại thứ tự." code="Detect basic error: yes\nAuto repair: no\nAuto retransmit: no" />
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Windows — xem UDP", cmd: "netstat -ano -p udp\nnetstat -ano -p udp | findstr :53", output: "UDP    0.0.0.0:5353     *:*      1234\nUDP    192.168.1.10:53000  *:*   4321", note: "UDP không có ESTABLISHED như TCP vì UDP không tạo kết nối." },
    linux: { title: "Linux/macOS — xem UDP socket", cmd: "ss -uan\nss -uln\nss -ulnp", output: "UNCONN 0 0 0.0.0.0:53 0.0.0.0:* users:((\"dnsmasq\",pid=1234))", note: "UNCONN thường xuất hiện với UDP vì UDP connectionless." },
    wireshark: { title: "Wireshark — UDP", cmd: "udp\nudp.port == 53\nudp.port == 67 or udp.port == 68", output: "UDP 53000 → 53 DNS query\nUDP 53 → 53000 DNS response\nUDP 68 → 67 DHCP Discover", note: "udp.port == 53 dùng để lọc DNS qua UDP." },
    dns: { title: "Tạo DNS UDP traffic", cmd: "nslookup google.com 8.8.8.8\ndig @8.8.8.8 google.com", output: "Server: 8.8.8.8\nAddress: 8.8.8.8#53\nName: google.com\nAddress: 142.250.x.x", note: "DNS query thường nhỏ và dùng UDP port 53." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="blue" title="Lệnh kiểm tra UDP thực tế" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">udp lab</span>
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
            <ExplainRow term="UDP" desc="Giao thức connectionless, không có trạng thái kết nối như TCP." />
            <ExplainRow term="UNCONN" desc="Socket UDP không kết nối cố định đến peer cụ thể." />
            <ExplainRow term="udp.port == 53" desc="Wireshark filter cho DNS UDP." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ UDP là giao thức tệ", desc: "UDP không tự đảm bảo như TCP, nhưng rất hữu ích khi cần độ trễ thấp hoặc ứng dụng tự kiểm soát lỗi.", fix: "UDP = đơn giản, nhanh, ít overhead." },
    { title: "Nghĩ UDP không dùng port", desc: "UDP vẫn dùng source port và destination port để giao dữ liệu đúng ứng dụng.", fix: "UDP socket vẫn là IP + Port." },
    { title: "Nghĩ UDP không kiểm tra lỗi gì cả", desc: "UDP có checksum để phát hiện lỗi cơ bản, nhưng không tự sửa hoặc gửi lại.", fix: "Checksum có, retransmission không." },
    { title: "Nghĩ DNS luôn dùng TCP", desc: "DNS query thông thường hay dùng UDP port 53; TCP cũng có thể dùng trong một số trường hợp.", fix: "DNS thường UDP/53." },
    { title: "Nghĩ game/video cần dữ liệu hoàn hảo tuyệt đối", desc: "Trong realtime, dữ liệu mới thường quan trọng hơn dữ liệu cũ bị mất.", fix: "Realtime ưu tiên latency thấp." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">18</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>UDP = User Datagram Protocol.</p>
              <p>UDP nằm ở Transport Layer.</p>
              <p>UDP là connectionless.</p>
              <p>UDP không có 3-Way Handshake.</p>
              <p>UDP gửi dữ liệu dưới dạng datagram độc lập.</p>
              <p>UDP không ACK mặc định.</p>
              <p>UDP không tự retransmit khi mất gói.</p>
              <p>UDP không tự sắp xếp lại thứ tự.</p>
              <p>UDP vẫn dùng port và socket.</p>
              <p>UDP header có Source Port, Destination Port, Length, Checksum.</p>
              <p>DNS, DHCP, VoIP, video call, game online, streaming thường dùng UDP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "UDP là gì?", options: ["Giao thức Transport Layer nhanh, không kết nối", "Giao thức định tuyến Layer 3", "Cơ chế mã hóa HTTPS", "Công cụ cấp IP"], correct: 0, explanation: "UDP là User Datagram Protocol, hoạt động ở Transport Layer, không cần thiết lập kết nối trước." },
  { question: "Vì sao UDP thường nhanh hơn TCP?", options: ["UDP không handshake, không ACK/gửi lại mặc định và header đơn giản", "UDP luôn dùng cáp quang", "UDP không dùng IP", "UDP mã hóa ít hơn HTTPS"], correct: 0, explanation: "UDP bỏ qua nhiều cơ chế phức tạp của TCP nên overhead thấp và bắt đầu truyền nhanh." },
  { question: "Trong 192.168.1.10:53000 → 8.8.8.8:53, port server là gì?", options: ["192.168.1.10", "53000", "8.8.8.8", "53"], correct: 3, explanation: "Server socket là 8.8.8.8:53, nên server port là 53, thường là DNS." },
  { question: "UDP datagram bị mất thì UDP tự làm gì?", options: ["Tự gửi lại giống TCP", "Không tự gửi lại", "Tự sắp xếp lại", "Tự mở 3-Way Handshake"], correct: 1, explanation: "UDP không tự retransmit; nếu cần gửi lại thì ứng dụng phải xử lý." },
  { question: "Ứng dụng nào thường phù hợp UDP?", options: ["Video call/game online cần độ trễ thấp", "Tải file cần đúng từng byte tuyệt đối", "SSH terminal cần tin cậy", "Gửi email SMTP truyền thống"], correct: 0, explanation: "Realtime như video call và game online thường ưu tiên độ trễ thấp, chấp nhận mất ít dữ liệu." },
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
      <p className="text-slate-400 mb-4">Sau khi học riêng TCP và UDP, bài tiếp theo sẽ tổng hợp cách chọn TCP hay UDP theo từng tình huống.</p>
      <Link to="/phan-6-6" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.6 — So sánh TCP và UDP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() {
  return <div className="space-y-4"><UdpSendMini /><div className="grid grid-cols-3 gap-3"><MiniCard title="No SYN" value="send now" color="orange" icon={<Zap />} /><MiniCard title="No ACK" value="default" color="red" icon={<XCircle />} /><MiniCard title="Port" value="53" color="cyan" icon={<DoorOpen />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">{'192.168.1.10:53000\n---- UDP ---->\n    8.8.8.8:53'}</div></div>;
}
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function UdpVsTcpMini() { return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4"><p className="text-emerald-300 font-bold">TCP</p><p className="text-sm text-slate-400 mt-2">Có kết nối, ACK, gửi lại, kiểm soát tốc độ.</p></div><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4"><p className="text-orange-300 font-bold">UDP</p><p className="text-sm text-slate-400 mt-2">Không kết nối, gửi nhanh, ít kiểm soát.</p></div></div><UdpSendMini /></div>; }
function UdpSendMini() { return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm space-y-2"><p className="text-cyan-300">Client ---- UDP Datagram ----&gt; Server</p><p className="text-cyan-300">Client ---- UDP Datagram ----&gt; Server</p><p className="text-slate-500">No SYN / No SYN-ACK / No connection state</p></div>; }
function ConnectionVisual({ protocol }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">{protocol === "tcp" ? <><p className="text-emerald-300">Client ---- SYN ----&gt; Server</p><p className="text-emerald-300">Client &lt;--- SYN-ACK ---- Server</p><p className="text-emerald-300">Client ---- ACK ----&gt; Server</p><p className="text-green-300">Client ---- Data ----&gt; Server</p></> : <><p className="text-orange-300">Client ---- UDP Data ----&gt; Server</p><p className="text-orange-300">Client ---- UDP Data ----&gt; Server</p><p className="text-slate-500">Gửi luôn, không bắt tay.</p></>}</div>; }
function Slider({ label, value, setValue, min, max, suffix, color, display }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{display ?? value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function SocketPair({ clientPort }) { return <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><SocketBox label="Client UDP Socket" value={`192.168.1.10:${clientPort}`} color="cyan" icon={<Send />} /><ArrowRight className="text-orange-300" /><SocketBox label="Server UDP Socket" value="8.8.8.8:53" color="emerald" icon={<Server />} /></div>; }
function SocketBox({ label, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-xs text-slate-500 font-bold uppercase">{label}</p><p className={`${c.text} font-mono font-black mt-2 break-all text-sm`}>{value}</p></div>; }
function FrameLossVisual({ mode }) { return <div className="space-y-4"><div className="grid grid-cols-5 gap-2">{[99, 100, 101, 102, 103].map((n) => <div key={n} className={`${n === 100 ? "bg-red-500/10 border-red-400/40 text-red-300 line-through" : "bg-green-500/10 border-green-400/40 text-green-300"} border rounded-2xl p-3 text-center`}><Video className="mx-auto mb-1" size={18} /><p className="font-mono text-xs">F{n}</p></div>)}</div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">{mode === "udp" ? "UDP: skip F100 → continue F101, F102..." : "TCP: retransmit F100 → possible pause/stutter"}</div></div>; }
function UdpLossVisual({ recovered }) { return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-green-300">Client ---- Datagram 1 ----&gt; Server</p><p className={recovered ? "text-cyan-300" : "text-red-300"}>Client ---- Datagram 2 {recovered ? "retry ----&gt; Server" : "---X lost"}</p><p className="text-green-300">Client ---- Datagram 3 ----&gt; Server</p><p className="text-slate-500">UDP itself: no ACK, no retransmission</p></div>; }
function UdpHeaderDiagram({ active }) { const fields = ["Source Port", "Destination Port", "Length", "Checksum", "Data"]; return <div className="grid md:grid-cols-2 gap-3">{fields.map((f) => <div key={f} className={`${active === f ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-900 border-slate-800 text-slate-400"} border rounded-2xl p-4 font-mono text-sm ${f === "Data" ? "md:col-span-2" : ""}`}>{f}</div>)}</div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
