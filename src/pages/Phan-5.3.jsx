import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  Globe2,
  Home,
  Layers,
  Lock,
  Network,
  PackageCheck,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldAlert,
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

const ipv6Types = [
  { title: "Global Unicast", prefix: "2000::/3", example: "2001:db8::1", desc: "Giống public IPv4, dùng để giao tiếp trên Internet.", color: "cyan", icon: <Globe2 /> },
  { title: "Link-local", prefix: "fe80::/10", example: "fe80::1", desc: "Chỉ dùng trong cùng một link/local segment, không route ra Internet.", color: "emerald", icon: <Network /> },
  { title: "Multicast", prefix: "ff00::/8", example: "ff02::1", desc: "IPv6 không dùng broadcast kiểu IPv4; multicast thay thế nhiều tác vụ nhóm.", color: "purple", icon: <RadioTower /> },
  { title: "Loopback", prefix: "::1/128", example: "::1", desc: "Máy tự gọi chính nó, tương đương 127.0.0.1 trong IPv4.", color: "orange", icon: <Home /> },
  { title: "Unspecified", prefix: "::/128", example: "::", desc: "Địa chỉ chưa xác định, tương tự 0.0.0.0 trong một số ngữ cảnh IPv4.", color: "slate", icon: <CircleHelp /> },
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
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyIpv6 />
        <Ipv6Basics />
        <HexWhy />
        <ShorteningRules />
        <Ipv6Shortener />
        <AddressTypes />
        <Ipv6HowItWorks />
        <Ipv6Prefix />
        <Ipv4VsIpv6 />
        <NatAndDualStack />
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
            <Globe2 size={16} /> IP thế hệ mới, 128 bit
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Địa chỉ IPv6:
            <span className="block text-cyan-400">Cấu trúc & so sánh IPv4</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            IPv6 ra đời vì IPv4 không đủ địa chỉ. IPv6 dài 128 bit, viết bằng hệ hex, có quy tắc rút gọn, dùng NDP thay ARP và không dùng broadcast kiểu IPv4.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">IPv6</span> = 128 bit = 8 hextet.</p>
            <p><span className="text-emerald-300">::</span> = rút gọn chuỗi nhóm 0, chỉ dùng một lần.</p>
            <p><span className="text-orange-300">NDP</span> = thay vai trò ARP trong IPv6.</p>
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
    "Hiểu IPv6 là gì và vì sao cần IPv6.",
    "Nắm cấu trúc IPv6 dài 128 bit.",
    "Biết cách viết, rút gọn và đọc địa chỉ IPv6.",
    "Nhận biết Global Unicast, Link-local, Multicast, Loopback.",
    "Phân biệt IPv6 và IPv4 ở các điểm quan trọng.",
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

function WhyIpv6() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần IPv6?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>IPv4 dài 32 bit, nên tổng số địa chỉ lý thuyết là <strong className="text-white">2^32 = 4,294,967,296</strong>.</p>
            <p>Con số này không đủ cho thế giới hiện đại với điện thoại, camera, IoT, router, server, cloud service và thiết bị công nghiệp.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>IPv6 ra đời chủ yếu vì IPv4 không đủ địa chỉ cho số lượng thiết bị ngày càng lớn.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><AddressSpaceVisual /></div>
        </div>
      </div>
    </section>
  );
}

function Ipv6Basics() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="IPv6 là gì và được viết như thế nào?" icon={<Globe2 />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="IPv6" icon={<Globe2 />} color="cyan" text="Internet Protocol version 6 là phiên bản IP mới hơn IPv4, cung cấp không gian địa chỉ cực lớn." code="2001:db8::1" />
        <ConceptCard title="128 bit" icon={<Binary />} color="purple" text="Một địa chỉ IPv6 dài 128 bit, gấp 4 lần độ dài bit của IPv4." code="IPv4 = 32 bit\nIPv6 = 128 bit" />
        <ConceptCard title="8 hextet" icon={<TableProperties />} color="emerald" text="IPv6 gồm 8 nhóm hex, mỗi nhóm có 4 ký tự hex = 16 bit." code="8 nhóm × 16 bit = 128 bit" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><Ipv6Structure /></div>
    </section>
  );
}

function HexWhy() {
  const [nibble, setNibble] = useState("0010");
  const hex = parseInt(nibble || "0", 2).toString(16).toUpperCase();
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Vì sao IPv6 dùng hex?" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>IPv6 dài 128 bit. Nếu viết toàn bộ bằng nhị phân sẽ quá dài và khó đọc.</p>
            <p>Hệ hex giúp gom mỗi 4 bit thành 1 ký tự, nên địa chỉ 128 bit trở nên ngắn hơn nhiều.</p>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-sm text-purple-300">
              4 bit = 1 ký tự hex. Một hextet 16 bit = 4 ký tự hex.
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {nibble.padEnd(4, "0").slice(0, 4).split("").map((b, i) => <button key={i} onClick={() => setNibble((cur) => cur.split("").map((x, idx) => idx === i ? (x === "1" ? "0" : "1") : x).join(""))} className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-5 text-center text-purple-300 text-3xl font-black font-mono">{b}</button>)}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-green-300 text-center text-2xl">{nibble} = {hex}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShorteningRules() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Hai quy tắc rút gọn IPv6" icon={<Shuffle />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Quy tắc 1: bỏ số 0 đầu nhóm" icon={<CheckCircle2 />} color="emerald" text="Trong mỗi nhóm, có thể bỏ các số 0 đứng đầu. Không bỏ số 0 ở giữa hoặc cuối nếu làm đổi giá trị." code="0db8 → db8\n0000 → 0\n0042 → 42" />
        <ConceptCard title="Quy tắc 2: dùng :: một lần" icon={<AlertTriangle />} color="orange" text="Một chuỗi nhóm toàn 0 liên tiếp có thể thay bằng ::, nhưng chỉ được dùng :: một lần trong một địa chỉ." code="2001:db8:0:0:0:ff00:42:8329\n→ 2001:db8::ff00:42:8329" />
      </div>
    </section>
  );
}

function Ipv6Shortener() {
  const original = "2001:0db8:0000:0000:0000:ff00:0042:8329";
  const step1 = "2001:db8:0:0:0:ff00:42:8329";
  const step2 = "2001:db8::ff00:42:8329";
  const [stage, setStage] = useState(0);
  const data = [
    { title: "Địa chỉ đầy đủ", value: original, color: "cyan", desc: "8 nhóm, mỗi nhóm 4 ký tự hex." },
    { title: "Bỏ số 0 đầu nhóm", value: step1, color: "emerald", desc: "0db8 → db8, 0000 → 0, 0042 → 42." },
    { title: "Dùng :: cho chuỗi 0", value: step2, color: "orange", desc: "Chuỗi 0:0:0 được rút gọn thành ::." },
  ];
  const cur = data[stage];
  const c = colorClasses[cur.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Mô phỏng rút gọn IPv6" icon={<CalculatorIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[260px] flex flex-col justify-between`}>
            <div>
              <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Bước {stage + 1}/3</p>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">{cur.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-5">{cur.desc}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 break-all">{cur.value}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStage((s) => Math.max(0, s - 1))} disabled={stage === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button>
              <button onClick={() => setStage((s) => (s + 1) % data.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{stage === 2 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <CompareLine label="Full" value={original} color="cyan" />
            <CompareLine label="Trim zeros" value={step1} color="emerald" />
            <CompareLine label="Compressed" value={step2} color="orange" />
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-red-300 text-sm">
              Sai: <span className="font-mono">2001::ff00::8329</span> vì có hai lần <span className="font-mono">::</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddressTypes() {
  const [active, setActive] = useState(0);
  const item = ipv6Types[active];
  const c = colorClasses[item.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Các loại địa chỉ IPv6 quan trọng" icon={<ListChecksIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {ipv6Types.map((x, idx) => <button key={x.title} onClick={() => setActive(idx)} className={`rounded-2xl p-3 text-left border transition-all ${idx === active ? `${colorClasses[x.color].bg} ${colorClasses[x.color].border} ${colorClasses[x.color].text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`}><div className="flex items-center gap-2 mb-1">{React.cloneElement(x.icon, { size: 16 })}<span className="font-black text-sm">{x.title}</span></div><p className="text-[11px] font-mono opacity-80">{x.prefix}</p></button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(item.icon, { size: 28 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{item.prefix}</p>
            <h3 className="text-3xl font-bold text-white mb-3 mt-2">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-3">Ví dụ</p>
            <div className={`${c.text} font-mono text-3xl font-black break-all`}>{item.example}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ipv6HowItWorks() {
  const steps = [
    { title: "Ứng dụng tạo dữ liệu", text: "Ví dụ trình duyệt truy cập server hỗ trợ IPv6.", code: "Application Data", color: "purple", icon: <Server /> },
    { title: "Network Layer tạo IPv6 packet", text: "Packet có Source IPv6 và Destination IPv6.", code: "Source = 2001:db8:1::10\nDestination = 2001:db8:1::20", color: "cyan", icon: <Globe2 /> },
    { title: "Tìm địa chỉ Layer 2 bằng NDP", text: "IPv6 không dùng ARP. Nó dùng Neighbor Discovery Protocol để tìm MAC tương ứng với IPv6 trong cùng link.", code: "IPv4: ARP\nIPv6: NDP", color: "orange", icon: <Search /> },
    { title: "Đóng vào Ethernet frame", text: "IPv6 packet trở thành payload của Ethernet frame. EtherType IPv6 là 0x86DD.", code: "Dst MAC | Src MAC | 0x86DD | IPv6 Packet | FCS", color: "emerald", icon: <PackageCheck /> },
    { title: "Switch chuyển frame", text: "Switch đọc Destination MAC và chuyển frame ở Layer 2 như bình thường.", code: "Switch không cần hiểu sâu IPv6 để forward L2 frame", color: "blue", icon: <Network /> },
    { title: "Máy B nhận packet", text: "Máy B kiểm tra frame, bóc Ethernet và xử lý IPv6 packet ở tầng Network.", code: "Ethernet Frame → IPv6 Packet → TCP/UDP → Application", color: "green", icon: <CheckCircle2 /> },
  ];
  const [step, setStep] = useState(0);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="IPv6 gửi dữ liệu như thế nào?" icon={<Zap />} />
      <StepSection steps={steps} step={step} setStep={setStep} />
    </section>
  );
}

function Ipv6Prefix() {
  const [prefix, setPrefix] = useState(64);
  const hostBits = 128 - prefix;
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="emerald" title="IPv6 Prefix" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="IPv6 /64" icon={<Split />} color="emerald" text="IPv6 cũng dùng prefix giống CIDR. Trong LAN, /64 là prefix rất phổ biến." code="2001:db8:abcd:12::/64" />
            <Slider label="IPv6 Prefix" value={prefix} setValue={setPrefix} min={32} max={96} suffix=" network bits" color="emerald" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <Ipv6PrefixBar prefix={prefix} />
            <div className="grid md:grid-cols-2 gap-4">
              <StatBox title="Network prefix bits" value={prefix} color="emerald" />
              <StatBox title="Interface ID bits" value={hostBits} color="orange" />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">Network prefix: 2001:db8:abcd:12::/64
              Host/interface:
              2001:db8:abcd:12::1
              2001:db8:abcd:12::abcd</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ipv4VsIpv6() {
  const rows = [
    ["Độ dài địa chỉ", "32 bit", "128 bit"],
    ["Cách viết", "192.168.1.10", "2001:db8::1"],
    ["Số nhóm", "4 octet", "8 hextet"],
    ["Ký tự ngăn cách", "Dấu chấm .", "Dấu hai chấm :"],
    ["Broadcast", "Có", "Không dùng broadcast kiểu IPv4"],
    ["ARP", "Có ARP", "Không ARP, dùng NDP"],
    ["NAT", "Rất phổ biến", "Thường ít cần hơn theo mục tiêu thiết kế"],
    ["Private address", "10/8, 172.16/12, 192.168/16", "Unique Local Address fc00::/7"],
    ["Loopback", "127.0.0.1", "::1"],
    ["Unspecified", "0.0.0.0", "::"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="So sánh IPv4 và IPv6" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">IPv4</th><th className="p-4 text-cyan-300">IPv6</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([criteria, ipv4, ipv6], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300 font-mono">{ipv4}</td><td className="p-4 text-slate-300 font-mono">{ipv6}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function NatAndDualStack() {
  const [mode, setMode] = useState("dual");
  const isDual = mode === "dual";
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="IPv6 có cần NAT không? IPv6 đã thay IPv4 chưa?" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("nat")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${!isDual ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>NAT & bảo mật</button>
          <button onClick={() => setMode("dual")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${isDual ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Dual Stack</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          {isDual ? <ConceptCard title="Dual Stack" icon={<Layers />} color="cyan" text="Nhiều hệ thống hiện nay chạy song song IPv4 và IPv6. Khi dịch vụ hỗ trợ IPv6, máy có thể dùng IPv6; nếu chỉ có IPv4, máy dùng IPv4." code="IPv4: 192.168.1.10\nIPv6: 2001:db8:abcd:12::10" /> : <ConceptCard title="Không NAT ≠ không cần bảo mật" icon={<ShieldAlert />} color="orange" text="IPv6 có không gian địa chỉ lớn nên ít cần NAT để tiết kiệm địa chỉ. Nhưng bảo mật vẫn cần firewall, ACL, router policy và monitoring." code="IPv6 vẫn cần firewall" />}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {isDual ? <DualStackVisual /> : <SecurityVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Xem IPv6 trên Windows", cmd: "ipconfig\nipconfig /all", output: "IPv6 Address . . . . . . . . . . : 2001:db8:abcd:12::10\nLink-local IPv6 Address . . . . : fe80::a1b2:3c4d:5e6f", note: "Bạn thường thấy cả Global IPv6 và Link-local IPv6." },
    linux: { title: "Xem IPv6 trên Linux", cmd: "ip addr", output: "inet6 2001:db8:abcd:12::10/64\ninet6 fe80::a1b2:3c4d:5e6f/64", note: "Dòng inet6 cho biết IPv6 và prefix, ví dụ /64." },
    ping: { title: "Ping IPv6", cmd: "ping ::1\n# Windows:\nping -6 ::1\nping -6 2001:db8::1", output: "Reply from ::1: time<1ms", note: "::1 là loopback IPv6. Ping thành công nghĩa là IPv6 stack hoạt động trên máy." },
    neighbor: { title: "Xem neighbor table IPv6", cmd: "# Windows\nnetsh interface ipv6 show neighbors\n\n# Linux\nip -6 neigh", output: "fe80::1 dev eth0 lladdr 11:22:33:44:55:66 REACHABLE", note: "Neighbor table tương tự ARP cache, nhưng dùng cho IPv6/NDP." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / công cụ liên quan IPv6" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">ipv6 lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[310px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@ipv6</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="inet6" desc="Địa chỉ IPv6 trên Linux." />
            <ExplainRow term="fe80::/10" desc="Link-local IPv6, chỉ dùng trong cùng link." />
            <ExplainRow term="ip -6 neigh" desc="Xem neighbor table IPv6/NDP." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ IPv6 chỉ là IPv4 dài hơn", desc: "IPv6 còn thay đổi nhiều cơ chế: không ARP, không broadcast kiểu IPv4, dùng NDP và multicast nhiều hơn.", fix: "IPv6 là thiết kế mới, không chỉ là địa chỉ dài hơn." },
    { title: "Dùng :: nhiều lần", desc: "Ví dụ 2001::abcd::1 là sai vì có hai lần ::.", fix: "Trong một địa chỉ IPv6, :: chỉ được xuất hiện một lần." },
    { title: "Nhầm :: và ::1", desc: ":: là unspecified address, còn ::1 là loopback address.", fix: ":: ≠ ::1." },
    { title: "Nghĩ không NAT thì không cần bảo mật", desc: "IPv6 ít cần NAT để tiết kiệm địa chỉ, nhưng vẫn cần firewall và policy bảo mật.", fix: "Không NAT không đồng nghĩa an toàn." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">14</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>IPv6 ra đời chủ yếu vì IPv4 thiếu địa chỉ.</p>
              <p>IPv6 dài 128 bit.</p>
              <p>IPv6 viết bằng hexadecimal.</p>
              <p>IPv6 gồm 8 nhóm, mỗi nhóm 16 bit.</p>
              <p>Có thể bỏ số 0 ở đầu nhóm.</p>
              <p>Có thể dùng :: để rút gọn chuỗi nhóm 0, nhưng chỉ một lần.</p>
              <br />
              <p className="text-slate-500"># Địa chỉ quan trọng</p>
              <p>::1 = loopback IPv6.</p>
              <p>fe80::/10 = link-local.</p>
              <p>ff00::/8 = multicast.</p>
              <p>IPv6 dùng NDP thay ARP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "IPv6 dài bao nhiêu bit?", options: ["32 bit", "48 bit", "64 bit", "128 bit"], correct: 3, explanation: "IPv6 dài 128 bit, gồm 8 hextet, mỗi hextet 16 bit." },
  { question: "Địa chỉ 2001:0db8:0000:0000:0000:ff00:0042:8329 rút gọn đúng là gì?", options: ["2001:db8::ff00:42:8329", "2001::db8::ff00:42:8329", "2001:db8:ff00:42:8329", "2001:0db8:ff00::0042::8329"], correct: 0, explanation: "Bỏ số 0 đầu nhóm rồi thay chuỗi 0:0:0 bằng ::, chỉ dùng :: một lần." },
  { question: "IPv6 dùng giao thức nào để thay vai trò tìm MAC của ARP trong IPv4?", options: ["DNS", "DHCP", "NDP — Neighbor Discovery Protocol", "FTP"], correct: 2, explanation: "IPv6 không dùng ARP; nó dùng Neighbor Discovery Protocol — NDP." },
  { question: "Địa chỉ IPv6 loopback là gì?", options: ["::", "::1", "fe80::1", "ff02::1"], correct: 1, explanation: "::1 là loopback IPv6, tương đương 127.0.0.1 trong IPv4." },
  { question: "Địa chỉ link-local IPv6 thường bắt đầu bằng gì?", options: ["2000::/3", "fe80::/10", "ff00::/8", "127.0.0.0/8"], correct: 1, explanation: "Link-local IPv6 thường thuộc fe80::/10." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu địa chỉ IPv4 và IPv6, bài tiếp theo học IP packet, ICMP, ping và traceroute hoạt động như thế nào.</p>
      <Link to="/phan-5-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.4 — Giao thức IP & ICMP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><Ipv6Structure compact /><div className="grid grid-cols-2 gap-3"><MiniCard title="IPv4" value="32 bit" color="orange" icon={<Network />} /><MiniCard title="IPv6" value="128 bit" color="cyan" icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Full: 2001:0db8:0000:0000:0000:ff00:0042:8329\nShort: 2001:db8::ff00:42:8329</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 22 })}</div><p className={`${c.text} font-black`}>{title}</p><p className="text-xs text-slate-400 mt-1">{value}</p></div>; }
function AddressSpaceVisual() { return <div className="space-y-4"><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-5"><p className="text-orange-300 font-black text-xl">IPv4</p><p className="font-mono text-slate-300 mt-2">2^32 ≈ 4.3 tỷ</p></div><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-5"><p className="text-cyan-300 font-black text-xl">IPv6</p><p className="font-mono text-slate-300 mt-2">2^128 địa chỉ</p></div><div className="text-sm text-slate-400 bg-slate-900 border border-slate-800 rounded-2xl p-4">IPv6 không gian địa chỉ lớn hơn IPv4 rất nhiều.</div></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function Ipv6Structure({ compact = false }) { const groups = ["2001", "0db8", "0000", "0000", "0000", "ff00", "0042", "8329"]; return <div className="space-y-4"><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">{groups.map((g, i) => <div key={i} className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-center"><p className="text-cyan-300 text-xl font-black font-mono">{g}</p><p className="text-xs text-slate-500 mt-1">Hextet {i + 1}</p></div>)}</div>{!compact && <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 text-center">8 hextet × 16 bit = 128 bit</div>}</div>; }
function CompareLine({ label, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} text-xs font-bold uppercase tracking-wider mb-2`}>{label}</p><p className="font-mono text-sm text-slate-300 break-all">{value}</p></div>; }
function ListChecksIcon() { return <CheckCircle2 />; }
function CalculatorIcon() { return <Code2 />; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>/{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function Ipv6PrefixBar({ prefix }) { const blocks = Array.from({ length: 16 }, (_, i) => i * 8 < prefix ? "N" : "I"); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4"><p className="text-sm text-slate-400 mb-3">IPv6 128 bit: Network Prefix và Interface ID</p><div className="grid grid-cols-8 gap-1 font-mono text-xs">{blocks.map((b, i) => <span key={i} className={`${b === "N" ? "bg-emerald-500/20 text-emerald-300" : "bg-orange-500/20 text-orange-300"} rounded p-2 text-center`}>{b}</span>)}</div><div className="flex gap-3 mt-4 text-xs"><span className="text-emerald-300">■ Prefix</span><span className="text-orange-300">■ Interface ID</span></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-lg font-black mt-2 font-mono break-all`}>{value}</p></div>; }
function StepSection({ steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function DualStackVisual() { return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><MiniCard title="IPv4" value="192.168.1.10" color="orange" icon={<Network />} /><MiniCard title="IPv6" value="2001:db8::10" color="cyan" icon={<Globe2 />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">Website có AAAA record → dùng IPv6\nWebsite chỉ có A record → dùng IPv4</div></div>; }
function SecurityVisual() { return <div className="space-y-4"><MiniCard title="Firewall" value="vẫn cần" color="red" icon={<ShieldCheck />} /><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-orange-300 whitespace-pre-wrap">IPv6 global address ≠ tự động an toàn\nCần ACL / firewall / monitoring</div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
