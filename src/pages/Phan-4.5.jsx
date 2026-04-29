import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Radio,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Database,
  EthernetPort,
  Eye,
  Globe2,
  HardDrive,
  Home,
  Laptop,
  Layers,
  Lock,
  Network,
  Package,
  PackageCheck,
  Radar,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Shuffle,
  Smartphone,
  TableProperties,
  Terminal,
  Trash2,
  UserCheck,
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

const devices = {
  a: { name: "Máy A", ip: "192.168.1.10", mac: "AA:AA:AA:AA:AA:AA", color: "cyan", icon: <Laptop /> },
  b: { name: "Máy B", ip: "192.168.1.20", mac: "BB:BB:BB:BB:BB:BB", color: "emerald", icon: <Server /> },
  gw: { name: "Gateway", ip: "192.168.1.1", mac: "11:11:11:11:11:11", color: "orange", icon: <Router /> },
  internet: { name: "Server Internet", ip: "8.8.8.8", mac: "Không nằm trong LAN", color: "purple", icon: <Globe2 /> },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <EthernetPort className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyMac />
        <MacBasics />
        <MacVsIp />
        <ArpIntro />
        <ArpRequestReply />
        <LanHowItWorks />
        <InternetGatewayCase />
        <ArpCacheSection />
        <SecuritySection />
        <PracticeLab />
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
            <EthernetPort size={16} /> Frame trong LAN gửi cho ai?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Địa chỉ MAC
            <span className="block text-cyan-400">& ARP</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            MAC là địa chỉ dùng để giao frame trong mạng LAN. ARP giúp máy tính tìm MAC tương ứng với một địa chỉ IPv4 trước khi gửi Ethernet frame.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">MAC</span> = địa chỉ Data Link trong LAN.</p>
            <p><span className="text-emerald-300">ARP</span> = tìm MAC từ IPv4.</p>
            <p><span className="text-orange-300">Broadcast</span> = FF:FF:FF:FF:FF:FF.</p>
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
    "Hiểu địa chỉ MAC là gì và dùng để làm gì.",
    "Phân biệt MAC với địa chỉ IP.",
    "Biết vì sao Ethernet frame cần MAC đích.",
    "Hiểu ARP là gì và ARP Request/Reply hoạt động ra sao.",
    "Biết khi gửi ra Internet, máy tính ARP để tìm MAC của gateway.",
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

function WhyMac() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần địa chỉ MAC?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Trong mạng LAN, Data Link Layer gửi dữ liệu bằng <strong className="text-white">frame</strong>. Frame cần biết thiết bị gửi là ai và thiết bị nhận là ai.</p>
            <p>Để làm việc này, Ethernet dùng <strong className="text-cyan-300">MAC nguồn</strong> và <strong className="text-emerald-300">MAC đích</strong>.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>MAC là địa chỉ dùng để nhận diện thiết bị ở tầng Data Link trong mạng cục bộ.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <LanMiniDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function MacBasics() {
  const [spoof, setSpoof] = useState(false);
  const mac = spoof ? "66:77:88:99:AA:BB" : "AA:BB:CC:11:22:33";
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="Địa chỉ MAC là gì?" icon={<EthernetPort />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="MAC Address" icon={<EthernetPort />} color="cyan" text="MAC — Media Access Control Address — là địa chỉ vật lý gắn với card mạng Ethernet hoặc WiFi." code="Ví dụ: AA:BB:CC:11:22:33" />
            <ConceptCard title="48 bit" icon={<Binary />} color="purple" text="MAC thường dài 48 bit, viết thành 6 nhóm hex. Mỗi nhóm hex biểu diễn 8 bit." code="6 nhóm × 8 bit = 48 bit" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-bold mb-4">Tách địa chỉ MAC</h3>
            <MacSplit mac={mac} />
            <button onClick={() => setSpoof(!spoof)} className={`mt-6 w-full px-4 py-3 rounded-xl font-bold transition-colors ${spoof ? "bg-orange-500 text-white" : "bg-cyan-500 text-white"}`}>{spoof ? "Đang mô phỏng MAC spoofing" : "Mô phỏng đổi MAC bằng phần mềm"}</button>
            <div className="mt-5 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-sm text-orange-300">
              MAC thường gắn với phần cứng, nhưng có thể bị thay đổi bằng phần mềm hoặc được random hóa để tăng quyền riêng tư.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MacVsIp() {
  const rows = [
    ["Thuộc tầng", "Data Link Layer", "Network Layer"],
    ["Dùng để", "Gửi frame trong cùng mạng cục bộ", "Định tuyến packet giữa các mạng"],
    ["Phạm vi", "Local network / LAN", "Liên mạng / Internet"],
    ["Ví dụ", "AA:BB:CC:11:22:33", "192.168.1.10"],
    ["Thay đổi khi qua router?", "MAC thay đổi theo từng chặng", "IP đích thường giữ nguyên"],
    ["Thiết bị xử lý nhiều", "Switch, card mạng", "Router, hệ điều hành"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="MAC khác IP như thế nào?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">Địa chỉ MAC</th><th className="p-4 text-emerald-300">Địa chỉ IP</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, mac, ip], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{mac}</td><td className="p-4 text-slate-300">{ip}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <InfoBox title="Ví dụ dễ nhớ" value="IP giống địa chỉ chung cư; MAC giống số căn hộ/người nhận cụ thể trong tòa nhà." icon={<Home />} color="orange" />
        <InfoBox title="Kỹ thuật" value="IP giúp đi đến đúng mạng; MAC giúp frame đi đến đúng thiết bị trong LAN." icon={<Network />} color="cyan" />
      </div>
    </section>
  );
}

function ArpIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="ARP là gì?" icon={<Search />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="ARP" icon={<Search />} color="emerald" text="Address Resolution Protocol là giao thức dùng để tìm MAC tương ứng với một địa chỉ IPv4 trong cùng LAN." code="Ai có IP này?\nCho tôi biết MAC của bạn." />
        <ConceptCard title="IPv4 dùng ARP" icon={<Globe2 />} color="cyan" text="ARP được dùng cho IPv4. Khi đã biết IP nhưng chưa biết MAC, máy tính dùng ARP để hỏi trong LAN." code="IPv4 → ARP" />
        <ConceptCard title="IPv6 dùng NDP" icon={<Radar />} color="purple" text="IPv6 không dùng ARP. IPv6 dùng Neighbor Discovery Protocol — NDP." code="IPv6 → NDP" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">Máy A biết: IP đích = 192.168.1.20{"\n"}Máy A chưa biết: MAC đích = ?{"\n"}→ Dùng ARP để hỏi trong LAN.</div>
      </div>
    </section>
  );
}

function ArpRequestReply() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Máy A cần MAC của Máy B", text: "Máy A biết IP 192.168.1.20 nhưng chưa biết MAC tương ứng.", code: "Target IP = 192.168.1.20\nTarget MAC = ?", color: "cyan", icon: <Laptop /> },
    { title: "ARP Request — Broadcast", text: "Máy A gửi câu hỏi cho toàn bộ LAN vì chưa biết máy nào có IP đó.", code: "Destination MAC = FF:FF:FF:FF:FF:FF\nAi có 192.168.1.20?", color: "orange", icon: <Broadcast /> },
    { title: "Switch phát ra các cổng", text: "Switch lan truyền ARP Request đến các thiết bị trong cùng VLAN/LAN.", code: "Broadcast trong LAN", color: "yellow", icon: <Network /> },
    { title: "Máy B nhận ra IP của mình", text: "Các máy khác bỏ qua. Máy B thấy 192.168.1.20 là IP của mình nên trả lời.", code: "192.168.1.20 là tôi", color: "emerald", icon: <Server /> },
    { title: "ARP Reply — Unicast", text: "Máy B gửi trực tiếp về Máy A: MAC của tôi là BB:BB...", code: "Destination MAC = AA:AA...\nSource MAC = BB:BB...", color: "green", icon: <CheckCircle2 /> },
  ];
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="ARP Request và ARP Reply" icon={<Shuffle />} />
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><ArpDiagram step={step} /></div>
        </div>
      </div>
    </section>
  );
}

function LanHowItWorks() {
  const [cache, setCache] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Trường hợp 1: Gửi trong cùng LAN" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <DeviceCard dev={devices.a} />
            <DeviceCard dev={devices.b} />
            <button onClick={() => setCache(!cache)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${cache ? "bg-green-500 text-white" : "bg-cyan-500 text-white"}`}>{cache ? "ARP cache đã có MAC của B" : "ARP cache chưa có MAC của B"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <FrameView
              dstMac={cache ? devices.b.mac : "FF:FF:FF:FF:FF:FF"}
              srcMac={devices.a.mac}
              type={cache ? "IPv4" : "ARP"}
              payload={cache ? "IP Packet gửi cho 192.168.1.20" : "Ai có 192.168.1.20?"}
              color={cache ? "emerald" : "orange"}
            />
            <div className={`rounded-2xl border p-4 text-sm ${cache ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {cache ? "Máy A đã biết MAC của Máy B, nên gửi frame thật trực tiếp đến BB:BB..." : "Máy A chưa biết MAC của Máy B, nên gửi ARP Request broadcast."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InternetGatewayCase() {
  const [showFrame, setShowFrame] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Trường hợp 2: Gửi ra ngoài Internet" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <DeviceCard dev={devices.a} />
            <DeviceCard dev={devices.gw} />
            <DeviceCard dev={devices.internet} />
            <button onClick={() => setShowFrame(!showFrame)} className="w-full px-4 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold transition-colors">{showFrame ? "Ẩn frame" : "Hiện frame đầu tiên"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-slate-300 leading-relaxed">
              Khi Máy A truy cập <strong className="text-purple-300">8.8.8.8</strong>, nó không ARP tìm MAC của 8.8.8.8. Vì server đó nằm ngoài LAN, Máy A ARP tìm MAC của <strong className="text-orange-300">default gateway 192.168.1.1</strong>.
            </div>
            {showFrame && <FrameView dstMac={devices.gw.mac} srcMac={devices.a.mac} type="IPv4" payload="Source IP: 192.168.1.10 → Destination IP: 8.8.8.8" color="purple" />}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">MAC đích = MAC Gateway
              IP đích  = 8.8.8.8

              MAC thay đổi theo từng chặng.
              IP đích biểu diễn đích cuối cùng.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArpCacheSection() {
  const [hasEntry, setHasEntry] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="orange" title="ARP Cache" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="ARP Cache" icon={<Database />} color="orange" text="Bảng lưu tạm ánh xạ IP ↔ MAC để máy tính không phải broadcast ARP liên tục." code="192.168.1.20 → BB:BB:BB:BB:BB:BB" />
            <button onClick={() => setHasEntry(!hasEntry)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${hasEntry ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>{hasEntry ? "Xóa entry khỏi cache" : "Thêm entry vào cache"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ArpCacheTable hasEntry={hasEntry} />
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${hasEntry ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {hasEntry ? "Lần sau gửi cho 192.168.1.20, máy dùng luôn MAC đã lưu." : "Cache chưa có entry, máy phải gửi ARP Request lại."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const [poison, setPoison] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="red" title="Vấn đề bảo mật: ARP Spoofing" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className={`${poison ? "bg-red-500/10 border-red-500/30" : "bg-green-500/10 border-green-500/30"} border rounded-3xl p-6`}>
            <div className={`${poison ? "bg-red-500" : "bg-green-500"} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-5`}>{poison ? <ShieldAlert size={32} /> : <ShieldCheck size={32} />}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{poison ? "ARP cache bị đầu độc" : "ARP cache bình thường"}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{poison ? "Kẻ tấn công giả mạo gateway, khiến nạn nhân gửi traffic qua MAC của attacker." : "Máy A ánh xạ gateway 192.168.1.1 đến đúng MAC của router."}</p>
            <button onClick={() => setPoison(!poison)} className={`px-5 py-2 rounded-xl font-bold transition-colors ${poison ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}>{poison ? "Khôi phục bình thường" : "Mô phỏng ARP Spoofing"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ArpPoisonTable poison={poison} />
            <div className="grid md:grid-cols-2 gap-3">
              <InfoBox title="Nguy cơ" value="Nghe lén, chuyển hướng traffic, MITM, làm mất kết nối." icon={<AlertTriangle />} color="red" />
              <InfoBox title="Phòng chống" value="Dynamic ARP Inspection, static ARP, HTTPS/VPN, chia VLAN, giám sát ARP bất thường." icon={<Lock />} color="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeLab() {
  const [tab, setTab] = useState("view");
  const commands = {
    view: { title: "Xem ARP cache", cmd: "arp -a\n# Linux hiện đại:\nip neigh", output: "192.168.1.1 at 11:11:11:11:11:11\n192.168.1.20 at BB:BB:BB:BB:BB:BB", note: "Bảng này cho biết máy bạn đang biết IP nào tương ứng với MAC nào." },
    ping: { title: "Tạo ARP bằng ping gateway", cmd: "ipconfig\n# tìm Default Gateway\nping 192.168.1.1\narp -a", output: "192.168.1.1    11-11-11-11-11-11", note: "Sau khi ping gateway, ARP cache thường có ánh xạ IP gateway sang MAC của router." },
    clear: { title: "Xóa ARP cache", cmd: "# Windows Admin:\narp -d *\n\n# Linux:\nsudo ip neigh flush all", output: "ARP cache cleared\nNext ping will trigger ARP again", note: "Sau khi xóa cache, nếu ping lại một IP trong LAN, máy phải ARP lại." },
    wireshark: { title: "Lọc ARP trong Wireshark", cmd: "arp", output: "Who has 192.168.1.1? Tell 192.168.1.10\n192.168.1.1 is at 11:11:11:11:11:11", note: "Bạn sẽ thấy ARP Request dạng broadcast và ARP Reply thường là unicast." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="blue" title="Thực hành: ping và ARP" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">mac arp lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[290px] whitespace-pre-wrap">
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
            <ExplainRow term="arp -a" desc="Xem bảng ánh xạ IP ↔ MAC." />
            <ExplainRow term="ip neigh" desc="Lệnh Linux hiện đại để xem neighbor/ARP table." />
            <ExplainRow term="FF:FF:FF:FF:FF:FF" desc="Broadcast MAC, gửi cho tất cả thiết bị trong LAN." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "MAC và IP giống nhau?", desc: "Không. MAC thuộc Data Link và dùng trong LAN; IP thuộc Network và dùng để định tuyến giữa các mạng.", good: "MAC giao frame; IP định tuyến packet.", icon: <Shuffle /> },
    { title: "Gửi ra Internet thì ARP tìm MAC của server?", desc: "Không. Khi server ngoài LAN, máy tính ARP để tìm MAC của default gateway, không phải MAC của server Internet.", good: "Ngoài LAN → ARP gateway.", icon: <Router /> },
    { title: "ARP Request là unicast?", desc: "Không. ARP Request thường broadcast vì máy gửi chưa biết MAC đích.", good: "Request broadcast, Reply thường unicast.", icon: <Broadcast /> },
    { title: "MAC không thể thay đổi?", desc: "Không tuyệt đối. MAC thường gắn với phần cứng nhưng có thể spoof hoặc random hóa trong một số trường hợp.", good: "MAC thường là phần cứng, nhưng không bất biến tuyệt đối.", icon: <EthernetPort /> },
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
              <p><span className="text-cyan-300">MAC</span> = địa chỉ tầng Data Link.</p>
              <p>MAC thường dài 48 bit, viết dạng AA:BB:CC:11:22:33.</p>
              <p><span className="text-emerald-300">IP</span> = địa chỉ tầng Network.</p>
              <p><span className="text-orange-300">ARP</span> = tìm MAC từ IPv4 trong LAN.</p>
              <br />
              <p className="text-slate-500"># Quan trọng</p>
              <p>ARP Request = broadcast.</p>
              <p>ARP Reply = thường unicast.</p>
              <p>Gửi ngoài LAN → ARP tìm MAC gateway.</p>
              <p>ARP cache giúp giảm broadcast.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Địa chỉ MAC hoạt động chủ yếu ở tầng nào?", options: ["Application Layer", "Transport Layer", "Data Link Layer", "Network Layer"], correct: 2, explanation: "MAC address thuộc tầng Data Link và dùng để giao frame trong mạng LAN." },
  { question: "Máy A muốn gửi cho Máy B trong cùng LAN nhưng chưa biết MAC của B. Máy A dùng giao thức nào?", options: ["DNS", "ARP", "DHCP", "HTTP"], correct: 1, explanation: "ARP dùng để tìm MAC tương ứng với một địa chỉ IPv4 trong cùng mạng LAN." },
  { question: "ARP Request thường gửi kiểu gì?", options: ["Broadcast", "Unicast đến đúng MAC đích đã biết", "Multicast IPv6", "Không gửi qua mạng"], correct: 0, explanation: "ARP Request thường dùng broadcast vì máy gửi chưa biết MAC của thiết bị có IP cần tìm." },
  { question: "Máy 192.168.1.10 muốn truy cập 8.8.8.8, gateway là 192.168.1.1. Máy sẽ ARP tìm MAC của ai?", options: ["Server 8.8.8.8", "Gateway 192.168.1.1", "Chính nó", "DNS server bất kỳ"], correct: 1, explanation: "Khi đích nằm ngoài LAN, máy gửi frame đầu tiên cho default gateway, nên cần MAC của gateway." },
  { question: "ARP cache dùng để làm gì?", options: ["Lưu tạm ánh xạ IP ↔ MAC", "Lưu mật khẩu WiFi", "Đổi DNS thành IP", "Mã hóa frame"], correct: 0, explanation: "ARP cache lưu tạm kết quả ARP để giảm số lần broadcast ARP trong LAN." },
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
      <p className="text-slate-400 mb-4">Sau MAC và ARP, bài tiếp theo học Ethernet dùng frame như thế nào và chuẩn 802.3 quy định LAN có dây ra sao.</p>
      <Link to="/phan-4-6" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.6 — Ethernet & chuẩn 802.3 <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">IP 192.168.1.20\n   ↓ ARP\nMAC BB:BB:BB:BB:BB:BB</div><div className="grid grid-cols-2 gap-3"><MiniCard title="MAC" value="Data Link" color="cyan" icon={<EthernetPort />} /><MiniCard title="ARP" value="IPv4 → MAC" color="emerald" icon={<Search />} /></div><div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-orange-300 font-mono text-sm">Broadcast MAC:<br />FF:FF:FF:FF:FF:FF</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 22 })}</div><p className={`${c.text} font-black`}>{title}</p><p className="text-xs text-slate-400 mt-1">{value}</p></div>; }
function LanMiniDiagram() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Laptop A" sub="MAC AA:AA..." color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><Node label="Switch" sub="LAN" color="purple" icon={<Network />} /><ArrowRight className="text-slate-500" /><Node label="Laptop B" sub="MAC BB:BB..." color="emerald" icon={<Laptop />} /></div><FrameView dstMac="BB:BB:BB:BB:BB:BB" srcMac="AA:AA:AA:AA:AA:AA" type="IPv4" payload="IP Packet" color="cyan" compact /></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function MacSplit({ mac }) { return <div className="flex flex-wrap gap-2">{mac.split(":").map((part, i) => <div key={i} className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 min-w-[72px] text-center"><p className="text-cyan-300 text-2xl font-black font-mono">{part}</p><p className="text-xs text-slate-500 mt-2">8 bit</p></div>)}</div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function ArpDiagram({ step }) { const request = step >= 1 && step <= 3; const reply = step >= 4; return <div className="space-y-6"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Máy A" sub="192.168.1.10" color="cyan" icon={<Laptop />} /><ArrowRight className={request ? "text-orange-300" : "text-slate-600"} /><Node label="Switch" sub="Broadcast" color="purple" icon={<Network />} /><ArrowRight className={request ? "text-orange-300" : "text-slate-600"} /><Node label="Máy B" sub="192.168.1.20" color="emerald" icon={<Server />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 whitespace-pre-wrap">{request ? <span className="text-orange-300">ARP Request: Who has 192.168.1.20?</span> : reply ? <span className="text-green-300">ARP Reply: 192.168.1.20 is at BB:BB...</span> : <span className="text-slate-500">Chuẩn bị ARP...</span>}</div></div>; }
function DeviceCard({ dev }) { const c = colorClasses[dev.color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><div className="flex gap-3 items-start"><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center`}>{React.cloneElement(dev.icon, { size: 24 })}</div><div><h4 className="text-white font-bold text-lg">{dev.name}</h4><p className="font-mono text-sm text-slate-300 mt-2">IP: {dev.ip}</p><p className={`${c.text} font-mono text-sm mt-1`}>MAC: {dev.mac}</p></div></div></div>; }
function FrameView({ dstMac, srcMac, type, payload, color, compact = false }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 overflow-x-auto`}><p className={`${c.text} font-bold mb-3`}>Ethernet Frame</p><div className={`grid ${compact ? "grid-cols-2" : "grid-cols-1 md:grid-cols-4"} gap-2 font-mono text-xs`}><FrameCell label="Destination MAC" value={dstMac} color={color} /><FrameCell label="Source MAC" value={srcMac} color="cyan" /><FrameCell label="Type" value={type} color="purple" /><FrameCell label="Payload" value={payload} color="emerald" /></div></div>; }
function FrameCell({ label, value, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-xl p-3"><p className="text-slate-500 mb-1">{label}</p><p className={`${c.text} font-bold break-all`}>{value}</p></div>; }
function ArpCacheTable({ hasEntry }) { const rows = hasEntry ? [["192.168.1.1", "11:11:11:11:11:11"], ["192.168.1.20", "BB:BB:BB:BB:BB:BB"]] : [["192.168.1.1", "11:11:11:11:11:11"]]; return <div className="overflow-x-auto"><table className="w-full text-left min-w-[420px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">IP Address</th><th className="p-3">MAC Address</th></tr></thead><tbody>{rows.map(([ip, mac]) => <tr key={ip} className="border-b border-slate-800 last:border-0"><td className="p-3 text-slate-300 font-mono">{ip}</td><td className="p-3 text-green-300 font-mono">{mac}</td></tr>)}</tbody></table></div>; }
function ArpPoisonTable({ poison }) { return <div className="overflow-x-auto"><table className="w-full text-left min-w-[480px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">IP</th><th className="p-3">MAC đang tin</th><th className="p-3">Trạng thái</th></tr></thead><tbody><tr><td className="p-3 text-slate-300 font-mono">192.168.1.1</td><td className={`p-3 font-mono ${poison ? "text-red-300" : "text-green-300"}`}>{poison ? "66:66:66:66:66:66" : "11:11:11:11:11:11"}</td><td className={`p-3 font-bold ${poison ? "text-red-300" : "text-green-300"}`}>{poison ? "Giả mạo" : "Đúng gateway"}</td></tr></tbody></table></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
