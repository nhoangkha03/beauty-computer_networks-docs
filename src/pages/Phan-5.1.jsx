import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  Globe2,
  Home,
  Layers,
  ListChecks,
  Network,
  Package,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
  Split,
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

const classData = [
  { cls: "A", range: "1–126", purpose: "Mạng rất lớn", mask: "255.0.0.0", cidr: "/8", shape: "N.H.H.H", color: "cyan", example: "10.0.0.1" },
  { cls: "B", range: "128–191", purpose: "Mạng vừa/lớn", mask: "255.255.0.0", cidr: "/16", shape: "N.N.H.H", color: "emerald", example: "172.16.5.10" },
  { cls: "C", range: "192–223", purpose: "Mạng nhỏ", mask: "255.255.255.0", cidr: "/24", shape: "N.N.N.H", color: "orange", example: "192.168.1.10" },
  { cls: "D", range: "224–239", purpose: "Multicast", mask: "Không áp dụng", cidr: "Không áp dụng", shape: "Multicast", color: "purple", example: "224.0.0.1" },
  { cls: "E", range: "240–255", purpose: "Experimental", mask: "Không áp dụng", cidr: "Không áp dụng", shape: "Nghiên cứu", color: "red", example: "240.0.0.1" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Globe2 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyIp />
        <Ipv4Basics />
        <OctetSimulator />
        <NetworkHostSection />
        <SubnetMaskIntro />
        <Ipv4Flow />
        <ClassfulAddressing />
        <ClassFinder />
        <PrivateIpSection />
        <SpecialAddresses />
        <CliLab />
        <CommonMisunderstanding />
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
            <Layers size={16} /> Mở đầu Phần 5: Network Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Địa chỉ IPv4:
            <span className="block text-cyan-400">Cấu trúc & phân lớp</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            IPv4 là địa chỉ logic ở tầng Network, giúp định danh thiết bị và định tuyến packet qua nhiều mạng khác nhau.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">IPv4</span> = 32 bit = 4 octet.</p>
            <p><span className="text-emerald-300">Network ID</span> = mạng nào.</p>
            <p><span className="text-orange-300">Host ID</span> = thiết bị nào trong mạng đó.</p>
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
    "Hiểu địa chỉ IPv4 là gì và dùng để làm gì.",
    "Nắm cấu trúc IPv4 gồm 32 bit, chia thành 4 octet.",
    "Biết cách đọc IPv4 dạng thập phân như 192.168.1.10.",
    "Hiểu Network ID và Host ID.",
    "Biết cách phân lớp IPv4: Class A, B, C, D, E.",
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

function WhyIp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần địa chỉ IP?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Ở phần trước, bạn đã học rằng trong LAN, thiết bị dùng <strong className="text-white">MAC address</strong> để gửi Ethernet frame.</p>
            <p>Nhưng MAC chỉ phù hợp trong mạng cục bộ. Khi dữ liệu phải đi qua nhiều mạng khác nhau, router cần một địa chỉ logic để biết packet cần đi đến mạng nào.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>MAC dùng trong LAN; IP dùng để đi qua nhiều mạng khác nhau.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><PathDiagram /></div>
        </div>
      </div>
    </section>
  );
}

function Ipv4Basics() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="IPv4 là gì?" icon={<Globe2 />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="IPv4" icon={<Globe2 />} color="cyan" text="Internet Protocol version 4 là phiên bản địa chỉ IP phổ biến trong nhiều hệ thống mạng." code="192.168.1.10" />
        <ConceptCard title="32 bit" icon={<Binary />} color="purple" text="Một địa chỉ IPv4 dài 32 bit, thường viết thành 4 số thập phân ngăn cách bằng dấu chấm." code="4 octet × 8 bit = 32 bit" />
        <ConceptCard title="Octet" icon={<TableProperties />} color="emerald" text="Mỗi phần giữa hai dấu chấm là một octet, tức nhóm 8 bit, có giá trị từ 0 đến 255." code="192 . 168 . 1 . 10" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><Ipv4Structure ip="192.168.1.10" /></div>
    </section>
  );
}

function OctetSimulator() {
  const [value, setValue] = useState(192);
  const safe = Math.max(0, Math.min(255, value));
  const binary = safe.toString(2).padStart(8, "0");
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Mô phỏng Octet: thập phân ↔ nhị phân" icon={<Calculator />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Giá trị octet</label>
              <input type="number" value={value} min={0} max={255} onChange={(e) => setValue(Number(e.target.value))} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-purple-300 font-mono outline-none focus:border-purple-400" />
              <input type="range" min={0} max={255} value={safe} onChange={(e) => setValue(Number(e.target.value))} className="w-full mt-5" />
            </div>
            <div className={`rounded-2xl border p-5 ${value >= 0 && value <= 255 ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-red-500/10 border-red-500/30 text-red-300"}`}>
              {value >= 0 && value <= 255 ? "Octet hợp lệ: nằm trong 0–255." : "Octet không hợp lệ: mỗi octet chỉ được từ 0 đến 255."}
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid grid-cols-8 gap-2 mb-4">
              {binary.split("").map((bit, i) => <div key={i} className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-center"><p className="text-purple-300 text-2xl font-black font-mono">{bit}</p><p className="text-[10px] text-slate-500 mt-1">bit {i + 1}</p></div>)}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300">
              {safe} = {binary}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkHostSection() {
  const [prefix, setPrefix] = useState(24);
  const ip = "192.168.1.10";
  const info = calcNetwork(ip, prefix);
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Network ID và Host ID" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Network ID" icon={<Network />} color="emerald" text="Cho biết thiết bị thuộc mạng nào." code="192.168.1.0" />
            <ConceptCard title="Host ID" icon={<Server />} color="orange" text="Cho biết thiết bị cụ thể nào trong mạng đó." code="Host = 10" />
            <Slider label="Prefix" value={prefix} setValue={setPrefix} min={8} max={30} suffix=" bit network" color="cyan" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <Ipv4PrefixVisual ip={ip} prefix={prefix} />
            <div className="grid md:grid-cols-2 gap-4">
              <StatBox title="IP" value={`${ip}/${prefix}`} color="cyan" />
              <StatBox title="Network ID" value={info.network} color="emerald" />
              <StatBox title="Broadcast" value={info.broadcast} color="orange" />
              <StatBox title="Usable host" value={info.usable} color="purple" />
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-sm text-orange-300">
              Không thể biết chính xác Network ID và Host ID nếu không biết subnet mask hoặc prefix.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubnetMaskIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Subnet mask là gì? — Giới thiệu nhanh" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Subnet Mask" icon={<TableProperties />} color="green" text="Subnet mask xác định phần nào của IP là Network ID và phần nào là Host ID." code="IP:   192.168.1.10\nMask: 255.255.255.0" />
        <ConceptCard title="CIDR Prefix" icon={<Code2 />} color="cyan" text="Dạng /24 nghĩa là 24 bit đầu là phần network. Bài 5.2 sẽ học kỹ subnetting và CIDR." code="192.168.1.10/24" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 text-green-300 whitespace-pre-wrap">IP:          192.168.1.10
          Subnet mask: 255.255.255.0

          192.168.1 = phần mạng
          10        = phần host</div>
      </div>
    </section>
  );
}

function Ipv4Flow() {
  const [sameNetwork, setSameNetwork] = useState(true);
  const steps = sameNetwork ? [
    { title: "Máy A kiểm tra IP đích", text: "Đích là 192.168.1.20.", code: "Destination IP = 192.168.1.20", color: "cyan", icon: <Search /> },
    { title: "So sánh với subnet của mình", text: "Máy A thấy đích cùng mạng 192.168.1.0/24.", code: "192.168.1.10/24\n192.168.1.20/24\n→ cùng network", color: "emerald", icon: <Network /> },
    { title: "ARP tìm MAC máy đích", text: "Nếu chưa biết MAC của Máy B, Máy A gửi ARP Request.", code: "Who has 192.168.1.20?", color: "orange", icon: <RadioTower /> },
    { title: "Gửi frame trực tiếp", text: "Ethernet frame có MAC đích là MAC của Máy B.", code: "Dst MAC = MAC Máy B\nIP đích = 192.168.1.20", color: "green", icon: <PackageCheck /> },
  ] : [
    { title: "Máy A kiểm tra IP đích", text: "Đích là 8.8.8.8.", code: "Destination IP = 8.8.8.8", color: "purple", icon: <Search /> },
    { title: "So sánh với subnet của mình", text: "Máy A thấy 8.8.8.8 không thuộc mạng 192.168.1.0/24.", code: "192.168.1.10/24\n8.8.8.8\n→ khác network", color: "red", icon: <Shuffle /> },
    { title: "ARP tìm MAC gateway", text: "Máy A cần MAC của default gateway 192.168.1.1.", code: "Who has 192.168.1.1?", color: "orange", icon: <Router /> },
    { title: "Gửi frame cho gateway", text: "MAC đích là MAC gateway, nhưng IP đích trong packet vẫn là 8.8.8.8.", code: "Dst MAC = MAC Gateway\nIP đích = 8.8.8.8", color: "green", icon: <PackageCheck /> },
  ];
  const [step, setStep] = useState(0);
  const currentStep = Math.min(step, steps.length - 1);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="blue" title="IPv4 dùng để gửi dữ liệu như thế nào?" icon={<Zap />} />
      <div className="flex gap-2">
        <button onClick={() => { setSameNetwork(true); setStep(0); }} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${sameNetwork ? "bg-emerald-500 text-white" : "bg-slate-900 border border-slate-800 text-slate-400"}`}>Cùng mạng</button>
        <button onClick={() => { setSameNetwork(false); setStep(0); }} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${!sameNetwork ? "bg-purple-500 text-white" : "bg-slate-900 border border-slate-800 text-slate-400"}`}>Khác mạng</button>
      </div>
      <StepSection steps={steps} step={currentStep} setStep={setStep} />
    </section>
  );
}

function ClassfulAddressing() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Phân lớp IPv4 — Class A, B, C, D, E" icon={<ListChecks />} />
      <div className="grid md:grid-cols-5 gap-3">
        {classData.map((item) => <ClassCard key={item.cls} item={item} />)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[960px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Class</th><th className="p-4">Octet đầu tiên</th><th className="p-4">Mục đích</th><th className="p-4">Mask mặc định</th><th className="p-4">CIDR</th><th className="p-4">Dạng</th></tr>
            </thead>
            <tbody className="text-sm">
              {classData.map((item, i) => <tr key={item.cls} className={`${i === classData.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 ${colorClasses[item.color].text} font-black`}>Class {item.cls}</td><td className="p-4 text-slate-300">{item.range}</td><td className="p-4 text-slate-300">{item.purpose}</td><td className="p-4 text-slate-300 font-mono">{item.mask}</td><td className="p-4 text-slate-300 font-mono">{item.cidr}</td><td className="p-4 text-slate-300 font-mono">{item.shape}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 text-yellow-300 text-sm">
        Lưu ý: 127.x.x.x dành cho loopback, ví dụ 127.0.0.1 là localhost, không dùng làm host thông thường.
      </div>
    </section>
  );
}

function ClassFinder() {
  const [ip, setIp] = useState("172.16.5.10");
  const first = Number((ip.split(".")[0] || "").replace(/[^0-9]/g, ""));
  const info = getClassInfo(first);
  const c = colorClasses[info.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Cách nhận biết class nhanh" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Nhập IPv4</label>
              <input value={ip} onChange={(e) => setIp(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-cyan-400" />
            </div>
            <InfoBox title="Quy tắc" value="Chỉ cần nhìn octet đầu tiên để biết class theo phân lớp cổ điển." icon={<Eye />} color="cyan" />
          </div>
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Octet đầu tiên</p>
            <p className={`${c.text} text-6xl font-black font-mono my-4`}>{Number.isFinite(first) ? first : "?"}</p>
            <h3 className="text-3xl font-bold text-white mb-3">{info.label}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{info.desc}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{info.rule}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivateIpSection() {
  const rows = [
    ["10.0.0.0/8", "Class A", "10.0.0.0 đến 10.255.255.255", "Doanh nghiệp, lab, mạng lớn"],
    ["172.16.0.0/12", "Class B", "172.16.0.0 đến 172.31.255.255", "Doanh nghiệp"],
    ["192.168.0.0/16", "Class C", "192.168.0.0 đến 192.168.255.255", "Gia đình, văn phòng nhỏ"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="emerald" title="Địa chỉ private IPv4" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Dải private</th><th className="p-4">Thuộc class cũ</th><th className="p-4">Phạm vi</th><th className="p-4">Thường gặp</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([range, cls, scope, use], i) => <tr key={range} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-emerald-300 font-mono font-bold">{range}</td><td className="p-4 text-slate-300">{cls}</td><td className="p-4 text-slate-300 font-mono">{scope}</td><td className="p-4 text-slate-400">{use}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-emerald-300 text-sm">
        Private IP không được định tuyến trực tiếp trên Internet công cộng. Muốn truy cập Internet, thiết bị private thường đi qua NAT.
      </div>
    </section>
  );
}

function SpecialAddresses() {
  const rows = [
    ["127.0.0.1", "Loopback / localhost"],
    ["0.0.0.0", "Địa chỉ không xác định hoặc default route trong một số ngữ cảnh"],
    ["255.255.255.255", "Limited broadcast"],
    ["169.254.x.x", "APIPA, máy tự gán khi không nhận được DHCP"],
    ["Network address", "Địa chỉ mạng, không gán cho host"],
    ["Broadcast address", "Địa chỉ broadcast của subnet, không gán cho host"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Địa chỉ đặc biệt cần nhớ" icon={<AlertTriangle />} />
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[620px]">
              <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Địa chỉ / Dải</th><th className="p-4">Ý nghĩa</th></tr></thead>
              <tbody className="text-sm">
                {rows.map(([addr, desc], i) => <tr key={addr} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-orange-300 font-mono font-bold">{addr}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-white font-bold text-xl mb-4">Ví dụ 192.168.1.0/24</h3>
          <div className="space-y-3">
            <InfoBox title="Network address" value="192.168.1.0" icon={<Network />} color="emerald" />
            <InfoBox title="Usable host range" value="192.168.1.1 đến 192.168.1.254" icon={<Server />} color="cyan" />
            <InfoBox title="Broadcast address" value="192.168.1.255" icon={<RadioTower />} color="orange" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Xem IPv4 trên Windows", cmd: "ipconfig\nipconfig /all", output: "IPv4 Address . . . . . . . . . . : 192.168.1.10\nSubnet Mask . . . . . . . . . . : 255.255.255.0\nDefault Gateway . . . . . . . . : 192.168.1.1", note: "ipconfig cho biết IPv4, subnet mask và default gateway hiện tại." },
    linux: { title: "Xem IPv4 trên Linux", cmd: "ip addr\nifconfig", output: "inet 192.168.1.10/24", note: "Dòng inet cho biết IPv4 và prefix, ví dụ /24." },
    ping: { title: "Kiểm tra kết nối bằng ping", cmd: "ping 192.168.1.1\nping 8.8.8.8", output: "Reply from 192.168.1.1: bytes=32 time<1ms TTL=64\nReply from 8.8.8.8: bytes=32 time=25ms TTL=117", note: "Nếu ping gateway được nhưng ping Internet không được, vấn đề có thể nằm ở routing, DNS, NAT hoặc firewall." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / công cụ liên quan IPv4" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">ipv4 lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[300px] whitespace-pre-wrap">
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
            <ExplainRow term="IPv4 Address" desc="Địa chỉ IPv4 của máy." />
            <ExplainRow term="Subnet Mask / Prefix" desc="Ranh giới giữa Network ID và Host ID." />
            <ExplainRow term="Default Gateway" desc="Router mà máy gửi đến khi đích nằm ngoài mạng local." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMisunderstanding() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Một hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <ConceptCard title="Sai: nhìn class là đủ" icon={<XCircle />} color="red" text="192.168.1.10 thuộc Class C theo lịch sử, nhưng không có nghĩa mạng thật luôn là /24." code="192.168.1.10/25\n192.168.1.10/26\n192.168.1.10/23" />
          <ConceptCard title="Đúng: nhìn subnet mask/CIDR" icon={<CheckCircle2 />} color="green" text="Class giúp hiểu nền tảng lịch sử, nhưng khi cấu hình thật phải nhìn subnet mask hoặc prefix." code="Hãy nhìn /24, /25, /26..." />
        </div>
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
              <p>IPv4 = địa chỉ logic ở tầng Network.</p>
              <p>IPv4 dài 32 bit = 4 octet.</p>
              <p>Mỗi octet có giá trị 0–255.</p>
              <p>IP gồm Network ID + Host ID.</p>
              <p>Subnet mask/prefix xác định ranh giới network/host.</p>
              <br />
              <p className="text-slate-500"># Classful</p>
              <p>Class A: 1–126, mặc định /8.</p>
              <p>Class B: 128–191, mặc định /16.</p>
              <p>Class C: 192–223, mặc định /24.</p>
              <p>Class D: 224–239, multicast.</p>
              <p>Class E: 240–255, experimental.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "IPv4 dài bao nhiêu bit?", options: ["8 bit", "16 bit", "32 bit", "48 bit"], correct: 2, explanation: "IPv4 dài 32 bit, thường viết thành 4 octet dạng thập phân." },
  { question: "Địa chỉ 172.16.5.10 thuộc class nào theo phân lớp cổ điển?", options: ["Class A", "Class B", "Class C", "Class D"], correct: 1, explanation: "Octet đầu tiên là 172, nằm trong 128–191, nên thuộc Class B." },
  { question: "Mỗi octet IPv4 có giá trị hợp lệ trong khoảng nào?", options: ["0–127", "0–255", "1–1024", "0–999"], correct: 1, explanation: "Một octet là 8 bit, từ 00000000 đến 11111111, tương ứng 0–255." },
  { question: "Với 192.168.1.10/24, Network ID là gì?", options: ["192.168.1.0", "192.168.1.10", "192.168.0.0", "192.0.0.0"], correct: 0, explanation: "/24 nghĩa là 3 octet đầu là phần network, nên Network ID là 192.168.1.0." },
  { question: "Private IP muốn ra Internet thường cần cơ chế nào?", options: ["ARP", "NAT", "Loopback", "Class D"], correct: 1, explanation: "Private IP không được định tuyến trực tiếp trên Internet công cộng, thường cần NAT để truy cập Internet." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu IPv4 có Network ID và Host ID, bài tiếp theo sẽ học cách chia mạng lớn thành nhiều mạng nhỏ hơn.</p>
      <Link to="/phan-5-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.2 — Subnetting & CIDR <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><Ipv4Structure ip="192.168.1.10" compact /><div className="grid grid-cols-2 gap-3"><MiniCard title="MAC" value="LAN" color="orange" icon={<Network />} /><MiniCard title="IP" value="Multi-network" color="cyan" icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">192.168.1.10\n= 11000000.10101000.00000001.00001010</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 22 })}</div><p className={`${c.text} font-black`}>{title}</p><p className="text-xs text-slate-400 mt-1">{value}</p></div>; }
function PathDiagram() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Laptop" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="Router" sub="Gateway" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="Internet Server" sub="8.8.8.8" color="purple" icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Router đọc IP đích để chọn đường đi.</div></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function Ipv4Structure({ ip, compact = false }) { const octets = ip.split(".").map(Number); return <div className="space-y-4"><div className="grid grid-cols-4 gap-2">{octets.map((oct, i) => <div key={i} className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-center"><p className="text-cyan-300 text-2xl font-black font-mono">{oct}</p><p className="text-xs text-slate-500 mt-1">Octet {i + 1}</p></div>)}</div>{!compact && <div className="grid grid-cols-4 gap-2">{octets.map((oct, i) => <div key={i} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center"><p className="text-green-300 font-mono text-sm">{oct.toString(2).padStart(8, "0")}</p><p className="text-xs text-slate-500 mt-1">8 bit</p></div>)}</div>}</div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>/{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function Ipv4PrefixVisual({ ip, prefix }) { const bits = ip.split(".").map(n => Number(n).toString(2).padStart(8, "0")).join(""); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4"><p className="text-sm text-slate-400 mb-3">32 bit của {ip}/{prefix}</p><div className="grid grid-cols-8 gap-1 font-mono text-xs">{bits.split("").map((b, i) => <span key={i} className={`${i < prefix ? "bg-emerald-500/20 text-emerald-300" : "bg-orange-500/20 text-orange-300"} rounded p-1 text-center`}>{b}</span>)}</div><div className="flex gap-3 mt-4 text-xs"><span className="text-emerald-300">■ Network bits</span><span className="text-orange-300">■ Host bits</span></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-lg font-black mt-2 font-mono break-all`}>{value}</p></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function StepSection({ steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ClassCard({ item }) { const c = colorClasses[item.color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><p className={`${c.text} text-4xl font-black`}>{item.cls}</p><h3 className="text-white font-bold mt-2">Class {item.cls}</h3><p className="text-xs text-slate-400 mt-2">{item.range}</p><p className="text-xs text-slate-500 mt-2">{item.purpose}</p><div className="mt-4 bg-slate-950/70 border border-slate-800 rounded-xl p-3 font-mono text-xs text-green-300">{item.example}</div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }

function ipToInt(ip) { return ip.split(".").reduce((acc, n) => ((acc << 8) + Number(n)) >>> 0, 0); }
function intToIp(n) { return [24, 16, 8, 0].map(s => (n >>> s) & 255).join("."); }
function calcNetwork(ip, prefix) { const int = ipToInt(ip); const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0; const network = int & mask; const broadcast = network | (~mask >>> 0); const usableCount = prefix >= 31 ? 0 : Math.max(0, broadcast - network - 1); return { network: intToIp(network), broadcast: intToIp(broadcast >>> 0), usable: usableCount > 65534 ? `${usableCount.toLocaleString()} hosts` : `${usableCount} hosts` }; }
function getClassInfo(first) { if (!Number.isFinite(first) || first < 0 || first > 255) return { label: "IPv4 không hợp lệ", desc: "Octet đầu tiên phải nằm trong 0–255.", rule: "Mỗi octet chỉ có 8 bit.", color: "red" }; if (first === 0) return { label: "Đặc biệt", desc: "0.x.x.x có ý nghĩa đặc biệt, không dùng như class host thông thường.", rule: "0.0.0.0 thường biểu diễn địa chỉ không xác định/default route trong một số ngữ cảnh.", color: "slate" }; if (first >= 1 && first <= 126) return { label: "Class A", desc: "Dành cho mạng rất lớn theo phân lớp cổ điển.", rule: "1–126 → Class A, mặc định /8", color: "cyan" }; if (first === 127) return { label: "Loopback", desc: "127.x.x.x dành cho loopback/localhost.", rule: "127.0.0.1 = localhost", color: "yellow" }; if (first >= 128 && first <= 191) return { label: "Class B", desc: "Dành cho mạng vừa đến lớn theo phân lớp cổ điển.", rule: "128–191 → Class B, mặc định /16", color: "emerald" }; if (first >= 192 && first <= 223) return { label: "Class C", desc: "Dành cho mạng nhỏ theo phân lớp cổ điển.", rule: "192–223 → Class C, mặc định /24", color: "orange" }; if (first >= 224 && first <= 239) return { label: "Class D", desc: "Dùng cho multicast, không gán cho host thông thường.", rule: "224–239 → Class D", color: "purple" }; return { label: "Class E", desc: "Dành cho experimental/research, không dùng phổ biến cho host.", rule: "240–255 → Class E", color: "red" }; }
