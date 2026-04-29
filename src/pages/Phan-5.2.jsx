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
  Gauge,
  Globe2,
  Home,
  Layers,
  ListChecks,
  Network,
  PackageCheck,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
  Split,
  TableProperties,
  Terminal,
  Users,
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

const cidrRows = [
  [24, "255.255.255.0", 8, 256, 254, 256],
  [25, "255.255.255.128", 7, 128, 126, 128],
  [26, "255.255.255.192", 6, 64, 62, 64],
  [27, "255.255.255.224", 5, 32, 30, 32],
  [28, "255.255.255.240", 4, 16, 14, 16],
  [29, "255.255.255.248", 3, 8, 6, 8],
  [30, "255.255.255.252", 2, 4, 2, 4],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Split className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhySubnetting />
        <CidrIntro />
        <MaskCidrTable />
        <AddressConcepts />
        <SubnetCalculator />
        <BlockSizeExplorer />
        <SplitNetworkDemo />
        <CompanyDesign />
        <QuickMethod />
        <SubnettingVsCidr />
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
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Split size={16} /> Chia mạng lớn thành nhiều mạng con
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Subnetting
            <span className="block text-cyan-400">& CIDR</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Subnetting giúp chia một mạng IP lớn thành nhiều subnet nhỏ hơn. CIDR dùng dạng <span className="font-mono text-cyan-300">/x</span> để biểu diễn số bit network.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Host bits</span> = 32 - CIDR.</p>
            <p><span className="text-emerald-300">Tổng địa chỉ</span> = 2^(host bits).</p>
            <p><span className="text-orange-300">Host dùng được</span> = 2^(host bits) - 2.</p>
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
    "Hiểu Subnetting là gì và vì sao cần chia mạng con.",
    "Hiểu CIDR là gì, ví dụ /24, /25, /26.",
    "Biết tính Network Address, Broadcast Address và Usable Host Range.",
    "Biết xác định số lượng host trong một subnet.",
    "Biết chia một mạng lớn thành nhiều mạng nhỏ hơn.",
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

function WhySubnetting() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần Subnetting?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Giả sử công ty có mạng <strong className="text-white font-mono">192.168.1.0/24</strong> với khoảng 254 host dùng được.</p>
            <p>Nếu tất cả phòng ban dùng chung một mạng, broadcast sẽ lan rộng, khó quản lý, khó bảo mật và khó xử lý sự cố.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Định nghĩa:</p>
              <p>Subnetting là kỹ thuật chia một mạng IP lớn thành nhiều mạng con nhỏ hơn.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><SubnetSplitVisual /></div>
        </div>
      </div>
    </section>
  );
}

function CidrIntro() {
  const [prefix, setPrefix] = useState(24);
  const hostBits = 32 - prefix;
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="CIDR là gì?" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="CIDR" icon={<Code2 />} color="cyan" text="Classless Inter-Domain Routing là cách viết địa chỉ mạng hiện đại bằng dấu /, ví dụ /24, /25, /26." code="192.168.1.0/24" />
            <Slider label="Prefix Length" value={prefix} setValue={setPrefix} min={8} max={30} suffix=" network bits" color="cyan" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <BitBar prefix={prefix} />
            <div className="grid md:grid-cols-3 gap-4">
              <StatBox title="Network bits" value={prefix} color="cyan" />
              <StatBox title="Host bits" value={hostBits} color="orange" />
              <StatBox title="Host dùng được" value={Math.max(0, 2 ** hostBits - 2)} color="emerald" />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">Network bits + Host bits = 32
              {prefix} + {hostBits} = 32</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaskCidrTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Subnet mask và CIDR liên hệ thế nào?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">CIDR</th><th className="p-4">Subnet Mask</th><th className="p-4">Host bits</th><th className="p-4">Tổng địa chỉ</th><th className="p-4">Host dùng được</th><th className="p-4">Block size</th></tr>
            </thead>
            <tbody className="text-sm">
              {cidrRows.map(([cidr, mask, hostBits, total, usable, block], i) => <tr key={cidr} className={`${i === cidrRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-cyan-300 font-mono font-bold">/{cidr}</td><td className="p-4 text-slate-300 font-mono">{mask}</td><td className="p-4 text-slate-300">{hostBits}</td><td className="p-4 text-slate-300">{total}</td><td className="p-4 text-emerald-300 font-bold">{usable}</td><td className="p-4 text-orange-300 font-bold">{block}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AddressConcepts() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Network, Broadcast và Usable Host Range" icon={<Network />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Network Address" icon={<Network />} color="emerald" text="Địa chỉ đại diện cho cả subnet. Không gán cho host thông thường." code="192.168.1.0/24" />
        <ConceptCard title="Broadcast Address" icon={<RadioTower />} color="orange" text="Địa chỉ cuối subnet, dùng để gửi đến tất cả host trong subnet. Không gán cho host." code="192.168.1.255" />
        <ConceptCard title="Usable Host Range" icon={<Server />} color="cyan" text="Khoảng địa chỉ có thể gán cho thiết bị trong subnet." code="192.168.1.1 → 192.168.1.254" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <SubnetRangeBar network="192.168.1.0" first="192.168.1.1" last="192.168.1.254" broadcast="192.168.1.255" />
      </div>
    </section>
  );
}

function SubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.70");
  const [prefix, setPrefix] = useState(26);
  const info = useMemo(() => calcSubnet(ip, prefix), [ip, prefix]);
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Máy tính subnet tương tác" icon={<Calculator />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">IP Address</label>
              <input value={ip} onChange={(e) => setIp(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-green-400" />
            </div>
            <Slider label="CIDR" value={prefix} setValue={setPrefix} min={8} max={30} suffix="" color="green" />
            <InfoBox title="Công thức" value="Host bits = 32 - CIDR\nTổng địa chỉ = 2^(host bits)\nHost dùng được = 2^(host bits) - 2" icon={<Calculator />} color="green" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            {!info.valid ? <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-red-300">IPv4 không hợp lệ. Mỗi octet phải nằm trong 0–255.</div> : <>
              <BitBar prefix={prefix} />
              <div className="grid md:grid-cols-2 gap-4">
                <StatBox title="IP/CIDR" value={`${ip}/${prefix}`} color="cyan" />
                <StatBox title="Subnet Mask" value={info.mask} color="purple" />
                <StatBox title="Network Address" value={info.network} color="emerald" />
                <StatBox title="Broadcast Address" value={info.broadcast} color="orange" />
                <StatBox title="Usable Host Range" value={`${info.firstHost} – ${info.lastHost}`} color="green" />
                <StatBox title="Host dùng được" value={info.usableHosts} color="blue" />
              </div>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockSizeExplorer() {
  const [prefix, setPrefix] = useState(26);
  const info = prefixInfo(prefix);
  const blocks = makeLastOctetBlocks(info.blockSize);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="Block size: bước nhảy giữa các subnet" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="CIDR" value={prefix} setValue={setPrefix} min={24} max={30} suffix="" color="orange" />
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Block size</p>
              <p className="text-orange-300 text-6xl font-black my-3">{info.blockSize}</p>
              <p className="text-slate-300 font-mono text-sm">256 - {info.interestingOctetValue} = {info.blockSize}</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-bold mb-4">Các block trong 192.168.1.0/{prefix}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {blocks.map(([start, end]) => <div key={start} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm"><span className="text-cyan-300">192.168.1.{start}</span><span className="text-slate-500"> → </span><span className="text-orange-300">192.168.1.{end}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitNetworkDemo() {
  const subnets = [
    ["1", "192.168.1.0/26", "192.168.1.1 – 192.168.1.62", "192.168.1.63"],
    ["2", "192.168.1.64/26", "192.168.1.65 – 192.168.1.126", "192.168.1.127"],
    ["3", "192.168.1.128/26", "192.168.1.129 – 192.168.1.190", "192.168.1.191"],
    ["4", "192.168.1.192/26", "192.168.1.193 – 192.168.1.254", "192.168.1.255"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Chia 192.168.1.0/24 thành 4 subnet" icon={<Split />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Cần 4 subnet" icon={<ListChecks />} color="purple" text="Tìm số bit cần mượn: 2^n >= 4. Vậy n = 2." code="2^2 = 4 subnet" />
        <ConceptCard title="Prefix mới" icon={<Binary />} color="cyan" text="Mạng ban đầu /24, mượn thêm 2 bit host để tạo subnet." code="/24 + 2 = /26" />
        <ConceptCard title="Block size" icon={<Shuffle />} color="orange" text="/26 có mask 255.255.255.192 nên block size là 64." code="256 - 192 = 64" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Subnet</th><th className="p-4">Network Address</th><th className="p-4">Usable Host Range</th><th className="p-4">Broadcast</th></tr></thead>
            <tbody className="text-sm">
              {subnets.map(([n, net, usable, broadcast], i) => <tr key={n} className={`${i === subnets.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-purple-300 font-bold">{n}</td><td className="p-4 text-cyan-300 font-mono font-bold">{net}</td><td className="p-4 text-emerald-300 font-mono">{usable}</td><td className="p-4 text-orange-300 font-mono">{broadcast}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CompanyDesign() {
  const rows = [
    ["Kế toán", "50", "192.168.10.0/26", "62", "cyan"],
    ["Nhân sự", "30", "192.168.10.64/26", "62", "emerald"],
    ["Kỹ thuật", "50", "192.168.10.128/26", "62", "purple"],
    ["Khách", "30", "192.168.10.192/26", "62", "orange"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Thiết kế subnet cho công ty" icon={<Users />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <CompanyDiagram />
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[780px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Nhóm</th><th className="p-4">Số thiết bị cần</th><th className="p-4">Subnet</th><th className="p-4">Host dùng được</th></tr></thead>
              <tbody className="text-sm">
                {rows.map(([group, need, subnet, usable, color], i) => <tr key={group} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"}`}><td className={`p-4 ${colorClasses[color].text} font-bold`}>{group}</td><td className="p-4 text-slate-300">{need}</td><td className="p-4 text-slate-300 font-mono">{subnet}</td><td className="p-4 text-emerald-300 font-bold">{usable}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 bg-green-500/10 border border-green-500/20 rounded-2xl p-5 text-green-300 text-sm">
          Liên hệ bài 4.7: VLAN chia mạng ở Layer 2, subnet chia mạng ở Layer 3. Trong thực tế, mỗi VLAN thường tương ứng với một subnet riêng.
        </div>
      </div>
    </section>
  );
}

function QuickMethod() {
  const steps = [
    { title: "Tính host bits", text: "Lấy 32 trừ CIDR.", code: "32 - 27 = 5", color: "cyan", icon: <Binary /> },
    { title: "Tính tổng địa chỉ", text: "Lấy 2 lũy thừa host bits.", code: "2^5 = 32", color: "purple", icon: <Calculator /> },
    { title: "Tính host dùng được", text: "Trừ 2 cho network và broadcast.", code: "32 - 2 = 30", color: "emerald", icon: <Server /> },
    { title: "Tính block size", text: "Với /27, mask octet cuối là 224.", code: "256 - 224 = 32", color: "orange", icon: <Shuffle /> },
    { title: "Xác định IP nằm trong block nào", text: "IP 150 nằm trong block 128–159.", code: "Network = 192.168.1.128\nBroadcast = 192.168.1.159", color: "green", icon: <Search /> },
  ];
  const [step, setStep] = useState(0);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="cyan" title="Cách tính nhanh subnet: ví dụ 192.168.1.150/27" icon={<Zap />} />
      <StepSection steps={steps} step={step} setStep={setStep} />
    </section>
  );
}

function SubnettingVsCidr() {
  const rows = [
    ["Subnetting", "Kỹ thuật chia một mạng lớn thành nhiều mạng con"],
    ["CIDR", "Cách viết prefix /x, không phụ thuộc class A/B/C cổ điển"],
    ["Subnet Mask", "Dạng thập phân của phần network"],
    ["Prefix Length", "Số bit network, ví dụ /24, /26"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="Phân biệt Subnetting và CIDR" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Khái niệm</th><th className="p-4">Ý nghĩa</th></tr></thead>
          <tbody className="text-sm">
            {rows.map(([term, desc], i) => <tr key={term} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-cyan-300 font-bold">{term}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-purple-300 text-sm">
        Subnetting là hành động chia mạng; CIDR là cách biểu diễn mạng bằng prefix /x.
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Xem IP và prefix trên Windows", cmd: "ipconfig\nipconfig /all", output: "IPv4 Address . . . . . . . . . . : 192.168.1.10\nSubnet Mask . . . . . . . . . . : 255.255.255.0\nDefault Gateway . . . . . . . . : 192.168.1.1", note: "Subnet Mask cho biết ranh giới giữa Network ID và Host ID." },
    linux: { title: "Xem IP và prefix trên Linux", cmd: "ip addr", output: "inet 192.168.1.10/24", note: "Dòng inet cho biết IP và CIDR prefix, ví dụ /24." },
    route: { title: "Xem route table", cmd: "# Windows\nroute print\n\n# Linux/macOS\nip route", output: "default via 192.168.1.1 dev eth0\n192.168.1.0/24 dev eth0", note: "Route table cho biết mạng nào nằm trực tiếp và mạng khác đi qua gateway nào." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / công cụ liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">subnet lab</span>
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
            <ExplainRow term="ip addr" desc="Xem IP/prefix trên Linux." />
            <ExplainRow term="ip route" desc="Xem mạng local và default gateway." />
            <ExplainRow term="route print" desc="Xem route table trên Windows." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ /24 lúc nào cũng là Class C", desc: "10.1.2.0/24 có octet đầu là 10 thuộc Class A theo lịch sử, nhưng mạng thực tế là /24.", fix: "Luôn nhìn prefix/subnet mask." },
    { title: "Gán Network Address cho máy", desc: "192.168.1.0/24 không nên gán 192.168.1.0 cho host.", fix: "Địa chỉ đầu subnet là network address." },
    { title: "Gán Broadcast Address cho máy", desc: "192.168.1.0/24 không nên gán 192.168.1.255 cho host.", fix: "Địa chỉ cuối subnet là broadcast address." },
    { title: "Quên trừ 2 khi tính host", desc: "/26 có 64 địa chỉ nhưng chỉ có 62 host dùng được.", fix: "Host dùng được = 2^(host bits) - 2." },
    { title: "Nhầm VLAN với subnet", desc: "VLAN là Layer 2, subnet là Layer 3. Chúng thường đi cùng nhau nhưng không phải một khái niệm.", fix: "Mỗi VLAN thường có một subnet riêng." },
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
              <p>Subnetting = chia mạng lớn thành nhiều mạng con.</p>
              <p>CIDR = cách viết /x để biểu diễn số bit network.</p>
              <p>IPv4 có tổng cộng 32 bit.</p>
              <p>Host bits = 32 - CIDR.</p>
              <p>Tổng địa chỉ = 2^(host bits).</p>
              <p>Host dùng được = 2^(host bits) - 2.</p>
              <br />
              <p className="text-slate-500"># Địa chỉ trong subnet</p>
              <p>Network Address = địa chỉ đầu subnet.</p>
              <p>Broadcast Address = địa chỉ cuối subnet.</p>
              <p>Usable Host Range = nằm giữa network và broadcast.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "CIDR /24 có bao nhiêu bit host?", options: ["4", "8", "16", "24"], correct: 1, explanation: "IPv4 có 32 bit. /24 nghĩa là 24 bit network, vậy host bits = 32 - 24 = 8." },
  { question: "Subnet 192.168.1.0/26 có bao nhiêu host dùng được?", options: ["30", "62", "126", "254"], correct: 1, explanation: "/26 có 6 host bits, tổng địa chỉ = 2^6 = 64, host dùng được = 64 - 2 = 62." },
  { question: "Với 192.168.1.150/27, Network Address là gì?", options: ["192.168.1.96", "192.168.1.128", "192.168.1.150", "192.168.1.160"], correct: 1, explanation: "/27 có block size 32. 150 nằm trong block 128–159, nên network address là 192.168.1.128." },
  { question: "Broadcast Address của 192.168.1.150/27 là gì?", options: ["192.168.1.127", "192.168.1.158", "192.168.1.159", "192.168.1.160"], correct: 2, explanation: "Block chứa 150 là 128–159, địa chỉ cuối block là broadcast: 192.168.1.159." },
  { question: "Subnetting và VLAN khác nhau thế nào?", options: ["Subnetting là Layer 3, VLAN là Layer 2", "Subnetting là WiFi, VLAN là DNS", "Hai khái niệm giống hệt nhau", "VLAN chỉ dùng cho IPv6"], correct: 0, explanation: "Subnet chia mạng ở Layer 3 bằng IP; VLAN chia mạng logic ở Layer 2." },
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
      <p className="text-slate-400 mb-4">Sau IPv4 và subnetting, bài tiếp theo sẽ học IPv6: vì sao cần IPv6, cấu trúc 128 bit và khác IPv4 ra sao.</p>
      <Link to="/phan-5-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.3 — Địa chỉ IPv6: Cấu trúc & so sánh IPv4 <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">192.168.1.0/24\n↓ chia /26\n192.168.1.0/26\n192.168.1.64/26\n192.168.1.128/26\n192.168.1.192/26</div><div className="grid grid-cols-3 gap-3"><MiniCard title="/24" value="254 host" color="cyan" icon={<Network />} /><MiniCard title="/26" value="62 host" color="emerald" icon={<Split />} /><MiniCard title="Block" value="64" color="orange" icon={<Shuffle />} /></div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function SubnetSplitVisual() { return <div className="space-y-4"><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-center font-mono text-cyan-300">192.168.1.0/24<br />254 usable hosts</div><ArrowDown className="mx-auto text-slate-600" /><div className="grid grid-cols-2 gap-3">{["192.168.1.0/26", "192.168.1.64/26", "192.168.1.128/26", "192.168.1.192/26"].map((s, i) => <div key={s} className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-3 text-center font-mono text-xs text-emerald-300">Subnet {i + 1}<br />{s}</div>)}</div></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>/{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function BitBar({ prefix }) { const bits = Array.from({ length: 32 }, (_, i) => i < prefix ? "N" : "H"); return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4"><p className="text-sm text-slate-400 mb-3">IPv4 32 bit: Network bits và Host bits</p><div className="grid grid-cols-8 gap-1 font-mono text-xs">{bits.map((b, i) => <span key={i} className={`${b === "N" ? "bg-cyan-500/20 text-cyan-300" : "bg-orange-500/20 text-orange-300"} rounded p-1 text-center`}>{b}</span>)}</div><div className="flex gap-3 mt-4 text-xs"><span className="text-cyan-300">■ Network</span><span className="text-orange-300">■ Host</span></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-lg font-black mt-2 font-mono break-all`}>{value}</p></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function SubnetRangeBar({ network, first, last, broadcast }) { return <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-3"><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-5 text-center"><p className="text-emerald-300 font-bold">Network</p><p className="font-mono text-sm mt-2">{network}</p></div><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-5 text-center"><p className="text-cyan-300 font-bold">Usable Host Range</p><p className="font-mono text-sm mt-2">{first} → {last}</p></div><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-5 text-center"><p className="text-orange-300 font-bold">Broadcast</p><p className="font-mono text-sm mt-2">{broadcast}</p></div></div>; }
function StepSection({ steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function CompanyDiagram() { return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto"><div className="min-w-[720px] grid grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-4 items-center"><Node label="Router / L3 Switch" sub="Inter-VLAN Routing" color="orange" icon={<Router />} /><ArrowRight className="text-purple-300" /><Node label="Switch" sub="Trunk" color="purple" icon={<Network />} /><ArrowRight className="text-slate-500" /><div className="space-y-2"><MiniSubnet label="VLAN 10" subnet="192.168.10.0/26" color="cyan" /><MiniSubnet label="VLAN 20" subnet="192.168.10.64/26" color="emerald" /><MiniSubnet label="VLAN 30" subnet="192.168.10.128/26" color="purple" /><MiniSubnet label="VLAN 40" subnet="192.168.10.192/26" color="orange" /></div></div></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function MiniSubnet({ label, subnet, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-xl px-3 py-2 text-sm`}><span className={`${c.text} font-mono font-bold`}>{label}</span><span className="text-slate-400 ml-2">{subnet}</span></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }

function isValidIp(ip) { const parts = ip.split("."); return parts.length === 4 && parts.every(p => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255); }
function ipToInt(ip) { return ip.split(".").reduce((acc, n) => ((acc << 8) + Number(n)) >>> 0, 0); }
function intToIp(n) { return [24, 16, 8, 0].map(s => (n >>> s) & 255).join("."); }
function maskFromPrefix(prefix) { const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0; return intToIp(mask); }
function calcSubnet(ip, prefix) { if (!isValidIp(ip)) return { valid: false }; const int = ipToInt(ip); const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0; const network = int & mask; const broadcast = (network | (~mask >>> 0)) >>> 0; const hostBits = 32 - prefix; const total = 2 ** hostBits; const usable = prefix >= 31 ? 0 : total - 2; return { valid: true, mask: maskFromPrefix(prefix), network: intToIp(network), broadcast: intToIp(broadcast), firstHost: prefix >= 31 ? "N/A" : intToIp(network + 1), lastHost: prefix >= 31 ? "N/A" : intToIp(broadcast - 1), usableHosts: usable, totalAddresses: total }; }
function prefixInfo(prefix) { const mask = maskFromPrefix(prefix).split(".").map(Number); const interesting = mask.find(v => v !== 255 && v !== 0) || mask[3]; const oct = prefix <= 8 ? 0 : prefix <= 16 ? 1 : prefix <= 24 ? 2 : 3; return { mask: mask.join("."), interestingOctetValue: mask[oct] || mask[3], blockSize: 256 - (mask[oct] || mask[3]) }; }
function makeLastOctetBlocks(blockSize) { const blocks = []; for (let start = 0; start < 256; start += blockSize) blocks.push([start, Math.min(255, start + blockSize - 1)]); return blocks; }
