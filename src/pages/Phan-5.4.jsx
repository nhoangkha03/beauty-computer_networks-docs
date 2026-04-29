import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Bug,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Code2,
  Database,
  Eye,
  Gauge,
  Globe2,
  Layers,
  MailWarning,
  Network,
  Package,
  PackageCheck,
  RadioTower,
  Route,
  Router,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
  Timer,
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

const ipHeaderFields = [
  { title: "Source IP", desc: "Địa chỉ IP nguồn gửi packet.", value: "192.168.1.10", color: "cyan", icon: <Server /> },
  { title: "Destination IP", desc: "Địa chỉ IP đích mà packet cần đến.", value: "8.8.8.8", color: "emerald", icon: <Globe2 /> },
  { title: "TTL", desc: "Giới hạn số hop/router packet có thể đi qua. Mỗi router giảm 1.", value: "64", color: "orange", icon: <Timer /> },
  { title: "Protocol", desc: "Cho biết payload bên trong là TCP, UDP hay ICMP.", value: "1 = ICMP", color: "purple", icon: <Code2 /> },
  { title: "Header Checksum", desc: "Kiểm tra lỗi phần IPv4 header.", value: "Checksum", color: "yellow", icon: <ShieldCheck /> },
  { title: "Total Length", desc: "Tổng chiều dài IP packet.", value: "Header + Payload", color: "blue", icon: <Gauge /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Package className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <IpIntro />
        <PacketIntro />
        <BestEffort />
        <IcmpIntro />
        <OsiAndEncapsulation />
        <IpPacketExplorer />
        <IpForwarding />
        <PingSection />
        <TracerouteSection />
        <IcmpMessages />
        <FragmentationSection />
        <Icmpv4v6Section />
        <ProtocolCompare />
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
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Package size={16} /> Packet, TTL, Ping, Traceroute
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Giao thức IP
            <span className="block text-cyan-400">& ICMP</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            IP chuyển packet qua nhiều mạng theo kiểu best-effort. ICMP hỗ trợ IP bằng cách báo lỗi, kiểm tra kết nối và giúp chẩn đoán đường đi của packet.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">IP</span> = định địa chỉ và chuyển packet.</p>
            <p><span className="text-emerald-300">ICMP</span> = báo lỗi / chẩn đoán.</p>
            <p><span className="text-orange-300">TTL</span> = số hop tối đa, không phải số giây.</p>
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
    "Hiểu IP — Internet Protocol là gì và nhiệm vụ chính.",
    "Biết IP packet gồm header và payload.",
    "Hiểu vì sao IP là giao thức best-effort.",
    "Hiểu ICMP là gì và dùng để làm gì.",
    "Biết ping và traceroute/tracert hoạt động dựa trên ICMP như thế nào.",
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

function IpIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="IP là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">IP — Internet Protocol</strong> là giao thức tầng Network dùng để đưa packet từ nguồn đến đích qua một hoặc nhiều mạng.</p>
            <p>Router nhìn <strong className="text-cyan-300">Destination IP</strong>, tra bảng định tuyến và chuyển packet sang next hop phù hợp.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>IP là giao thức Layer 3 dùng để định địa chỉ và chuyển packet qua nhiều mạng.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><IpPathVisual /></div>
        </div>
      </div>
    </section>
  );
}

function PacketIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="Packet là gì?" icon={<Package />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Frame" icon={<PackageCheck />} color="orange" text="Ở tầng Data Link, đơn vị dữ liệu được gọi là frame." code="Ethernet Frame" />
        <ConceptCard title="Packet" icon={<Package />} color="cyan" text="Ở tầng Network, đơn vị dữ liệu được gọi là packet." code="IP Packet" />
        <ConceptCard title="Payload" icon={<Database />} color="emerald" text="Dữ liệu bên trong IP packet, thường là TCP, UDP hoặc ICMP." code="TCP / UDP / ICMP" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><PacketBox /></div>
    </section>
  );
}

function BestEffort() {
  const bad = ["Không đảm bảo packet đến nơi", "Không đảm bảo đúng thứ tự", "Không tự gửi lại packet mất", "Không đảm bảo độ trễ", "Không đảm bảo packet không bị trùng"];
  const tcp = ["Đánh số thứ tự", "ACK", "Gửi lại dữ liệu mất", "Kiểm soát luồng", "Kiểm soát tắc nghẽn"];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="IP là best-effort nghĩa là gì?" icon={<AlertTriangle />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6">
          <h3 className="text-orange-300 font-bold text-xl mb-4">IP chỉ cố gắng chuyển packet</h3>
          <ul className="space-y-3">{bad.map((x) => <li key={x} className="flex gap-2 text-sm text-slate-300"><XCircle size={16} className="text-orange-300 shrink-0 mt-0.5" />{x}</li>)}</ul>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-green-300 font-bold text-xl mb-4">Tầng trên như TCP có thể xử lý độ tin cậy</h3>
          <ul className="space-y-3">{tcp.map((x) => <li key={x} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-green-300 shrink-0 mt-0.5" />{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function IcmpIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="ICMP là gì?" icon={<MailWarning />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="ICMP" icon={<MailWarning />} color="emerald" text="Internet Control Message Protocol dùng để gửi thông báo điều khiển, báo lỗi và chẩn đoán mạng." code="ping 8.8.8.8" />
        <ConceptCard title="Không phải TCP/UDP" icon={<XCircle />} color="orange" text="ICMP không dùng port TCP/UDP. Nó được đóng trực tiếp bên trong IP packet." code="IP Packet → ICMP Message" />
        <ConceptCard title="Protocol number" icon={<Code2 />} color="purple" text="Trong IPv4 header, Protocol = 1 nghĩa là payload bên trong là ICMP." code="1 = ICMP\n6 = TCP\n17 = UDP" />
      </div>
    </section>
  );
}

function OsiAndEncapsulation() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="purple" title="IP/ICMP nằm ở đâu trong OSI?" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><OsiStack /></div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><EncapsulationVisual /></div>
      </div>
    </section>
  );
}

function IpPacketExplorer() {
  const [active, setActive] = useState(0);
  const item = ipHeaderFields[active];
  const c = colorClasses[item.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Một số trường quan trọng trong IPv4 Header" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-6 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {ipHeaderFields.map((x, idx) => <button key={x.title} onClick={() => setActive(idx)} className={`rounded-2xl p-3 text-left border transition-all ${idx === active ? `${colorClasses[x.color].bg} ${colorClasses[x.color].border} ${colorClasses[x.color].text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}><div className="flex items-center gap-2 mb-1">{React.cloneElement(x.icon, { size: 16 })}<span className="font-black text-sm">{x.title}</span></div><p className="text-[11px] font-mono opacity-80">{x.value}</p></button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(item.icon, { size: 28 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>IPv4 Header Field</p>
            <h3 className="text-3xl font-bold text-white mb-3 mt-2">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><HeaderDiagram active={item.title} /></div>
        </div>
      </div>
    </section>
  );
}

function IpForwarding() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Ứng dụng tạo dữ liệu", text: "Ví dụ bạn chạy ping 8.8.8.8, máy tạo ICMP Echo Request.", code: "ping 8.8.8.8", color: "purple", icon: <Terminal /> },
    { title: "Network Layer tạo IP packet", text: "Packet có Source IP, Destination IP, Protocol và TTL.", code: "Src IP = 192.168.1.10\nDst IP = 8.8.8.8\nProtocol = ICMP\nTTL = 64", color: "cyan", icon: <Package /> },
    { title: "Máy kiểm tra cùng mạng hay khác mạng", text: "8.8.8.8 khác mạng 192.168.1.0/24, nên máy gửi đến gateway 192.168.1.1.", code: "Next hop = Default Gateway", color: "orange", icon: <Router /> },
    { title: "Đóng vào Ethernet frame", text: "MAC đích là MAC gateway, nhưng IP đích vẫn là 8.8.8.8.", code: "Dst MAC = MAC Gateway\nDst IP = 8.8.8.8", color: "emerald", icon: <PackageCheck /> },
    { title: "Router nhận và tra route", text: "Router bóc frame, lấy IP packet, nhìn Destination IP rồi tra bảng định tuyến.", code: "Lookup route to 8.8.8.8", color: "blue", icon: <Search /> },
    { title: "Router giảm TTL", text: "Mỗi router giảm TTL đi 1. TTL về 0 thì hủy packet và gửi ICMP Time Exceeded.", code: "64 → 63 → 62", color: "yellow", icon: <Timer /> },
    { title: "Router tạo frame mới", text: "IP nguồn/đích thường giữ nguyên; MAC nguồn/đích thay đổi theo từng chặng.", code: "MAC changes per hop\nIP usually stays end-to-end", color: "green", icon: <Shuffle /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Cơ chế hoạt động của IP" icon={<Zap />} />
      <StepSection steps={steps} step={step} setStep={setStep} />
    </section>
  );
}

function PingSection() {
  const [reply, setReply] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="emerald" title="Ping hoạt động như thế nào?" icon={<RadioTower />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Echo Request / Echo Reply" icon={<Send />} color="emerald" text="ping gửi ICMP Echo Request. Nếu đích nhận được và cho phép phản hồi, nó gửi Echo Reply." code="Client → Echo Request → Server\nClient ← Echo Reply ← Server" />
            <button onClick={() => setReply(!reply)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${reply ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{reply ? "Server phản hồi ICMP" : "Ping không phản hồi"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <PingVisual reply={reply} />
            <div className={`rounded-2xl border p-4 text-sm ${reply ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>
              {reply ? "Reply from 8.8.8.8: bytes=32 time=20ms TTL=117" : "Ping fail không luôn luôn có nghĩa server chết. Có thể do firewall chặn ICMP, không có route, DNS sai hoặc mạng lỗi."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TracerouteSection() {
  const [ttl, setTtl] = useState(1);
  const hops = ["R1", "R2", "R3", "Server"];
  const current = Math.min(ttl - 1, hops.length - 1);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="Traceroute / tracert hoạt động như thế nào?" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <Slider label="TTL gửi thử" value={ttl} setValue={setTtl} min={1} max={4} suffix="" color="purple" />
            <ConceptCard title="TTL + ICMP Time Exceeded" icon={<Timer />} color="purple" text="Traceroute gửi packet với TTL tăng dần. Router làm TTL về 0 sẽ gửi ICMP Time Exceeded về máy nguồn." code="TTL=1 → R1 trả lời\nTTL=2 → R2 trả lời\nTTL=3 → R3 trả lời" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <TracerouteVisual current={current} />
            <div className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-purple-300 text-sm font-mono">
              TTL={ttl} → {hops[current]} {current < hops.length - 1 ? "gửi ICMP Time Exceeded" : "nhận packet / phản hồi đích"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IcmpMessages() {
  const messages = [
    { title: "Echo Request / Reply", desc: "Dùng bởi ping để kiểm tra host có phản hồi không.", code: "Bạn có đó không? / Tôi có đây.", color: "emerald", icon: <RadioTower /> },
    { title: "Destination Unreachable", desc: "Báo không tới được đích: không có route, host không tồn tại, port unreachable, fragmentation needed.", code: "Không tới được đích", color: "orange", icon: <MailWarning /> },
    { title: "Time Exceeded", desc: "TTL về 0, router hủy packet và báo về nguồn. Đây là cơ sở của traceroute.", code: "TTL expired", color: "purple", icon: <Timer /> },
    { title: "Redirect", desc: "Báo host rằng có đường đi tốt hơn qua router khác. Thường bị hạn chế vì lý do bảo mật.", code: "Hãy đi qua Router B", color: "yellow", icon: <Route /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Các loại ICMP message phổ biến" icon={<MailWarning />} />
      <div className="grid lg:grid-cols-4 gap-4">
        {messages.map((m) => <ConceptCard key={m.title} {...m} text={m.desc} />)}
      </div>
    </section>
  );
}

function FragmentationSection() {
  const [size, setSize] = useState(4000);
  const mtu = 1500;
  const fragments = Math.ceil(size / mtu);
  const [version, setVersion] = useState("ipv4");
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="red" title="IP Fragmentation — phân mảnh IP" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="IP packet size" value={size} setValue={setSize} min={500} max={5000} suffix=" bytes" color="red" />
            <div className="flex gap-2">
              <button onClick={() => setVersion("ipv4")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${version === "ipv4" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>IPv4</button>
              <button onClick={() => setVersion("ipv6")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${version === "ipv6" ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>IPv6</button>
            </div>
            <InfoBox title="MTU phổ biến" value="Ethernet phổ biến có MTU 1500 bytes. Packet lớn hơn MTU có thể cần xử lý phân mảnh hoặc Path MTU Discovery." icon={<Gauge />} color="red" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <StatBox title="Packet" value={`${size} B`} color="red" />
              <StatBox title="MTU" value={`${mtu} B`} color="orange" />
              <StatBox title="Số mảnh xấp xỉ" value={size > mtu ? fragments : 1} color="purple" />
            </div>
            <FragmentVisual fragments={size > mtu ? fragments : 1} />
            <div className={`rounded-2xl border p-4 text-sm ${version === "ipv4" ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-cyan-500/10 border-cyan-400/40 text-cyan-300"}`}>
              {version === "ipv4" ? "IPv4: router có thể phân mảnh nếu cần, trừ khi packet bật cờ DF — Don't Fragment. Nếu DF bật và packet quá lớn, router gửi ICMP Fragmentation Needed." : "IPv6: router trung gian không phân mảnh. Máy nguồn phải điều chỉnh kích thước; router gửi ICMPv6 Packet Too Big nếu packet quá lớn."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Icmpv4v6Section() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="cyan" title="ICMPv4 và ICMPv6" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Dùng với</th><th className="p-4">Ghi chú</th></tr></thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-800"><td className="p-4 text-orange-300 font-bold">ICMPv4</td><td className="p-4 text-slate-300">IPv4</td><td className="p-4 text-slate-300">Dùng cho ping, báo lỗi IPv4, traceroute.</td></tr>
              <tr><td className="p-4 text-cyan-300 font-bold">ICMPv6</td><td className="p-4 text-slate-300">IPv6</td><td className="p-4 text-slate-300">Quan trọng hơn trong IPv6: NDP, Router Advertisement, Packet Too Big, Echo Request/Reply.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-red-300 text-sm">
        Chặn toàn bộ ICMPv6 có thể làm IPv6 hoạt động lỗi, vì ICMPv6 không chỉ dùng cho ping mà còn là thành phần thiết yếu của IPv6.
      </div>
    </section>
  );
}

function ProtocolCompare() {
  const rows = [
    ["IP", "Network", "Định địa chỉ và chuyển packet"],
    ["ICMP", "Network", "Báo lỗi, điều khiển, chẩn đoán"],
    ["TCP", "Transport", "Truyền tin tin cậy, có kết nối"],
    ["UDP", "Transport", "Truyền nhanh, đơn giản, không kết nối"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="purple" title="Phân biệt IP, ICMP, TCP, UDP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Tầng</th><th className="p-4">Vai trò</th></tr></thead>
          <tbody className="text-sm">
            {rows.map(([p, layer, role], i) => <tr key={p} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-cyan-300 font-bold">{p}</td><td className="p-4 text-slate-300">{layer}</td><td className="p-4 text-slate-300">{role}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-purple-300 font-mono text-sm whitespace-pre-wrap">IP   = người vận chuyển packet
        ICMP = người báo lỗi/trạng thái
        TCP  = dịch vụ giao hàng có ký nhận
        UDP  = dịch vụ gửi nhanh, không đảm bảo</div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ping4");
  const commands = {
    ping4: { title: "Ping IPv4", cmd: "ping 8.8.8.8\nping 192.168.1.1", output: "Reply from 8.8.8.8: bytes=32 time=20ms TTL=117", note: "ping dùng ICMP Echo Request/Echo Reply để kiểm tra phản hồi." },
    ping6: { title: "Ping IPv6", cmd: "# Windows\nping -6 ::1\n\n# Linux/macOS\nping6 ::1\nping -6 2001:4860:4860::8888", output: "Reply from ::1: time<1ms", note: "::1 là loopback IPv6. ICMPv6 cũng hỗ trợ Echo Request/Reply." },
    trace: { title: "Traceroute / Tracert", cmd: "# Windows\ntracert 8.8.8.8\n\n# Linux/macOS\ntraceroute 8.8.8.8", output: "1  192.168.1.1  <1 ms\n2  10.0.0.1     5 ms\n3  8.8.8.8      20 ms", note: "Traceroute dựa vào TTL tăng dần và ICMP Time Exceeded từ router trung gian." },
    route: { title: "Xem route table", cmd: "# Windows\nroute print\n\n# Linux\nip route\n\n# macOS\nnetstat -rn", output: "default via 192.168.1.1 dev eth0\n192.168.1.0/24 dev eth0", note: "Route table cho biết router/host sẽ gửi packet đến next hop nào." },
    wireshark: { title: "Bắt ICMP bằng Wireshark", cmd: "icmp\nicmpv6", output: "Echo Request\nEcho Reply\nTime Exceeded\nDestination Unreachable", note: "Filter icmp cho IPv4 và icmpv6 cho IPv6." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">ip icmp lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[320px] whitespace-pre-wrap">
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
            <ExplainRow term="time=20ms" desc="Round Trip Time: thời gian đi và về." />
            <ExplainRow term="TTL" desc="Số hop còn lại, không phải giây." />
            <ExplainRow term="icmp / icmpv6" desc="Wireshark filter để xem ICMP." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ ping fail là chắc chắn mất mạng", desc: "Ping có thể bị firewall hoặc server chặn ICMP, trong khi HTTPS vẫn hoạt động bình thường.", fix: "Kiểm tra thêm DNS, route, firewall, TCP port và gateway." },
    { title: "Nghĩ ICMP dùng port", desc: "ICMP không dùng TCP/UDP port. Không có ICMP port 80 hay ICMP port 7.", fix: "ICMP nằm trực tiếp trong IP packet." },
    { title: "Chặn toàn bộ ICMP là luôn tốt", desc: "Chặn ICMP có thể làm hỏng Path MTU Discovery, traceroute và một số chức năng IPv6.", fix: "Chặn có chọn lọc, đặc biệt cẩn trọng với ICMPv6." },
    { title: "Nghĩ TTL là số giây", desc: "TTL là Time To Live nhưng trong routing chủ yếu là số hop tối đa.", fix: "Mỗi router giảm TTL đi 1." },
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
              <p>IP = giao thức Network dùng để chuyển packet qua nhiều mạng.</p>
              <p>IP packet = IP Header + Payload.</p>
              <p>IP là best-effort, không đảm bảo packet đến nơi.</p>
              <p>ICMP = báo lỗi, điều khiển, chẩn đoán mạng.</p>
              <p>ping = ICMP Echo Request / Echo Reply.</p>
              <p>traceroute = TTL + ICMP Time Exceeded.</p>
              <p>TTL giảm 1 mỗi khi qua router.</p>
              <p>ICMP không dùng TCP/UDP port.</p>
              <p>ICMPv6 rất quan trọng trong IPv6.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "IP hoạt động chủ yếu ở tầng nào?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"], correct: 1, explanation: "IP là giao thức tầng Network dùng để định địa chỉ và chuyển packet." },
  { question: "Lệnh ping thường dùng loại ICMP message nào?", options: ["Echo Request và Echo Reply", "TCP SYN và SYN-ACK", "ARP Request và ARP Reply", "DHCP Discover và DHCP Offer"], correct: 0, explanation: "ping gửi ICMP Echo Request và nhận ICMP Echo Reply nếu đích phản hồi." },
  { question: "ICMP có dùng TCP/UDP port không?", options: ["Có, port 7", "Có, port 80", "Không, ICMP nằm trực tiếp trong IP", "Có, port 443"], correct: 2, explanation: "ICMP không dùng TCP/UDP port; trong IPv4 header, Protocol = 1 cho biết payload là ICMP." },
  { question: "Trong traceroute, router trung gian gửi Time Exceeded khi nào?", options: ["Khi TTL giảm về 0", "Khi TCP port đóng", "Khi DNS sai", "Khi MAC address thay đổi"], correct: 0, explanation: "Traceroute cố ý gửi packet với TTL tăng dần; router làm TTL về 0 sẽ gửi ICMP Time Exceeded." },
  { question: "TTL = 64 có nghĩa là gì trong routing?", options: ["Packet sống 64 giây", "Packet đi tối đa khoảng 64 hop", "Packet dài 64 bytes", "Packet dùng port 64"], correct: 1, explanation: "TTL trong routing chủ yếu là số hop tối đa; mỗi router giảm TTL đi 1." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu IP packet và ICMP, bài tiếp theo học router biết đường đi bằng cách nào và tự cấu hình static route ra sao.</p>
      <Link to="/phan-5-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.5 — Định tuyến tĩnh: Static Routing <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><PacketBox compact /><div className="grid grid-cols-3 gap-3"><MiniCard title="IP" value="Packet" color="cyan" icon={<Package />} /><MiniCard title="ICMP" value="Ping" color="emerald" icon={<RadioTower />} /><MiniCard title="TTL" value="Hop" color="orange" icon={<Timer />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">ICMP Message\n  ↓\nIP Packet\n  ↓\nEthernet Frame</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function IpPathVisual() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Laptop" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="Router" sub="Tra route" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="Server" sub="8.8.8.8" color="emerald" icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Router nhìn Destination IP để chọn next hop.</div></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function PacketBox({ compact = false }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_1.2fr] gap-3"><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-5"><p className="text-cyan-300 font-bold mb-2">IP Header</p><p className="text-xs text-slate-400 font-mono whitespace-pre-wrap">Source IP\nDestination IP\nTTL\nProtocol</p></div><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-5"><p className="text-emerald-300 font-bold mb-2">Payload</p><p className="text-xs text-slate-400 font-mono whitespace-pre-wrap">TCP Segment\nUDP Datagram\nICMP Message</p></div></div>{!compact && <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">IP Packet = IP Header + Payload</div>}</div>; }
function OsiStack() { const layers = ["Application Layer", "Transport Layer ← TCP / UDP", "Network Layer ← IP / ICMP", "Data Link Layer ← Ethernet / MAC / Frame", "Physical Layer ← Bits / Signal"]; return <div className="space-y-3">{layers.map((l) => <div key={l} className={`rounded-2xl border p-4 font-bold ${l.startsWith("Network") ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : l.startsWith("Transport") ? "bg-purple-500/10 border-purple-400/40 text-purple-300" : "bg-slate-950 border-slate-800 text-slate-400"}`}>{l}</div>)}</div>; }
function EncapsulationVisual() { return <div className="space-y-3">{["ICMP Message", "IP Packet", "Ethernet Frame", "Bits"].map((x, i) => <React.Fragment key={x}><div className={`rounded-2xl border p-4 text-center font-bold ${i === 1 ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : i === 0 ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-300"}`}>{x}</div>{i < 3 && <ArrowDown className="mx-auto text-slate-600" />}</React.Fragment>)}</div>; }
function HeaderDiagram({ active }) { const fields = ["Source IP", "Destination IP", "TTL", "Protocol", "Header Checksum", "Total Length"]; return <div className="grid md:grid-cols-2 gap-3">{fields.map((f) => <div key={f} className={`${active === f ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-900 border-slate-800 text-slate-400"} border rounded-2xl p-4 font-mono text-sm`}>{f}</div>)}</div>; }
function StepSection({ steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[340px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function PingVisual({ reply }) {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="Client" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className="text-emerald-300" /><Node label="Server" sub="8.8.8.8" color="emerald" icon={<Globe2 />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">Client ---- Echo Request ----&gt; Server
    {reply ? "Client <---- Echo Reply ------ Server" : "Client <---- no reply -------- Server"}</div></div>;
}
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function TracerouteVisual({ current }) { const nodes = ["Client", "R1", "R2", "R3", "Server"]; return <div className="space-y-4"><div className="grid grid-cols-5 gap-2">{nodes.map((n, i) => <div key={n} className={`${i === current + 1 ? "bg-purple-500/20 border-purple-400/50 text-purple-300" : i <= current ? "bg-green-500/10 border-green-400/30 text-green-300" : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center`}><Router className="mx-auto mb-2" size={20} /><p className="font-bold text-sm">{n}</p></div>)}</div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Client → R1 → R2 → R3 → Server</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-lg font-black mt-2 font-mono break-all`}>{value}</p></div>; }
function FragmentVisual({ fragments }) { return <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(fragments, 5)}, minmax(0, 1fr))` }}>{Array.from({ length: Math.min(fragments, 5) }, (_, i) => <div key={i} className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-center text-red-300 font-mono text-sm">Fragment {i + 1}</div>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
