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
  Gauge,
  Globe2,
  Layers,
  Map,
  Network,
  Package,
  PackageCheck,
  RadioTower,
  Route,
  Router,
  Search,
  Send,
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

const routeRows = [
  ["C", "192.168.1.0/24", "Directly connected", "G0/0", "Connected route"],
  ["C", "10.0.0.0/30", "Directly connected", "G0/1", "WAN link"],
  ["S", "192.168.2.0/24", "10.0.0.2", "G0/1", "Static route"],
  ["S*", "0.0.0.0/0", "203.0.113.1", "G0/2", "Default route"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Route className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <RoutingIntro />
        <SwitchVsRouter />
        <RoutingTableSection />
        <StaticRoutingIntro />
        <NextHopSection />
        <TwoRouterModel />
        <HowItWorks />
        <CiscoConfig />
        <DefaultRouteSection />
        <LongestPrefixMatch />
        <FloatingStaticRoute />
        <ProsCons />
        <StaticVsDynamic />
        <CommonMistakes />
        <CliLab />
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
            <Router size={16} /> Router chọn đường đi cho packet
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Định tuyến tĩnh:
            <span className="block text-cyan-400">Static Routing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Static routing là cách người quản trị tự cấu hình đường đi cho router. Nó đơn giản, dễ kiểm soát nhưng không tự thích nghi khi mạng thay đổi.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Routing</span> = chọn đường cho packet.</p>
            <p><span className="text-emerald-300">Static route</span> = admin cấu hình thủ công.</p>
            <p><span className="text-orange-300">Next-hop</span> = router kế tiếp.</p>
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
    "Hiểu Routing — định tuyến là gì.",
    "Hiểu Static Routing hoạt động như thế nào.",
    "Biết router dùng routing table để chuyển packet ra sao.",
    "Biết cấu hình static route cơ bản trên Cisco.",
    "Nắm ưu điểm, nhược điểm và trường hợp nên dùng static routing.",
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

function RoutingIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Định tuyến là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Router nhìn vào <strong className="text-cyan-300">Destination IP</strong> của packet để quyết định gửi packet đi đâu tiếp.</p>
            <p>Quá trình chọn đường đi cho packet dựa trên địa chỉ IP đích được gọi là <strong className="text-white">Routing — định tuyến</strong>.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>Routing là quá trình router chọn đường đi cho packet dựa trên địa chỉ IP đích.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><RoutingPathVisual /></div>
        </div>
      </div>
    </section>
  );
}

function SwitchVsRouter() {
  const rows = [
    ["Tầng chính", "Layer 2 — Data Link", "Layer 3 — Network"],
    ["Dựa vào", "MAC address", "IP address"],
    ["Đơn vị dữ liệu", "Frame", "Packet"],
    ["Phạm vi", "Trong LAN/VLAN", "Giữa các mạng/subnet"],
    ["Bảng sử dụng", "MAC address table", "Routing table"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Router khác Switch ở điểm nào?" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">Switch</th><th className="p-4 text-cyan-300">Router</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([criteria, sw, rt], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{sw}</td><td className="p-4 text-slate-300">{rt}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <InfoBox title="Switch" value="Chuyển frame trong LAN bằng MAC address." icon={<Network />} color="orange" />
        <InfoBox title="Router" value="Chuyển packet giữa các mạng bằng IP address." icon={<Router />} color="cyan" />
      </div>
    </section>
  );
}

function RoutingTableSection() {
  const [selected, setSelected] = useState(2);
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="Routing table là gì?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Routing Table" icon={<Database />} color="cyan" text="Bảng định tuyến là bản đồ đường đi mà router dùng để quyết định packet nên ra cổng nào hoặc gửi đến next-hop nào." code="Destination Network → Next-hop / Exit Interface" />
            <InfoBox title="Route Type" value="C = connected\nL = local\nS = static\nR = RIP\nO = OSPF\nB = BGP" icon={<Code2 />} color="purple" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <RoutingTable selected={selected} setSelected={setSelected} />
            <div className="mt-5 bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 text-sm">
              Click một dòng route để xem router sẽ dùng next-hop hoặc exit interface nào.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticRoutingIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="Static Routing là gì?" icon={<Route />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Static Routing" icon={<Route />} color="emerald" text="Định tuyến tĩnh là cách người quản trị cấu hình route thủ công trên router." code="Muốn đến mạng A → đi qua router B" />
        <ConceptCard title="Cisco syntax" icon={<Terminal />} color="cyan" text="Trên Cisco, static route thường dùng lệnh ip route với mạng đích, subnet mask và next-hop hoặc exit interface." code="ip route <network> <mask> <next-hop>" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">ip route 192.168.2.0 255.255.255.0 10.0.0.2

          Nghĩa là:
          Đến mạng 192.168.2.0/24 thì gửi packet đến next-hop 10.0.0.2.</div>
      </div>
    </section>
  );
}

function NextHopSection() {
  const [hop, setHop] = useState(1);
  const nodes = ["PC A", "R1", "R2", "R3", "Server"];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="purple" title="Next-hop là gì?" icon={<ArrowRight />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Next-hop" icon={<ArrowRight />} color="purple" text="Next-hop là router kế tiếp mà packet cần được gửi đến trên đường tới đích cuối cùng." code="R1 không cần biết toàn bộ đường đi; R1 chỉ cần biết gửi cho R2 trước." />
            <Slider label="Router đang quyết định" value={hop} setValue={setHop} min={1} max={3} suffix="" color="purple" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <PathHopVisual active={hop} />
            <div className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-purple-300 text-sm font-mono">
              {nodes[hop]} chọn next-hop = {nodes[hop + 1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TwoRouterModel() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Mô hình 2 router" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <TwoRouterVisual />
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          <RouteTableSmall title="R1 cần có" rows={[["192.168.1.0/24", "Connected"], ["10.0.0.0/30", "Connected"], ["192.168.2.0/24", "10.0.0.2"]]} color="cyan" />
          <RouteTableSmall title="R2 cần có" rows={[["192.168.2.0/24", "Connected"], ["10.0.0.0/30", "Connected"], ["192.168.1.0/24", "10.0.0.1"]]} color="emerald" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "PC A kiểm tra IP đích", text: "PC B là 192.168.2.10, khác subnet với PC A 192.168.1.10/24.", code: "PC A → Destination IP 192.168.2.10\nKhác mạng → gửi default gateway 192.168.1.1", color: "cyan", icon: <Search /> },
    { title: "PC A gửi frame cho R1", text: "IP đích là PC B, nhưng MAC đích là MAC LAN của R1 vì PC B khác mạng.", code: "Src IP = 192.168.1.10\nDst IP = 192.168.2.10\nDst MAC = MAC R1 LAN", color: "orange", icon: <PackageCheck /> },
    { title: "R1 tra routing table", text: "R1 nhìn Destination IP và thấy mạng 192.168.2.0/24 đi qua next-hop 10.0.0.2.", code: "192.168.2.0/24 → 10.0.0.2", color: "emerald", icon: <TableProperties /> },
    { title: "R1 tạo frame mới gửi R2", text: "IP nguồn/đích giữ nguyên, MAC nguồn/đích đổi theo chặng WAN R1-R2.", code: "MAC R1 WAN → MAC R2 WAN\nIP PC A → IP PC B", color: "purple", icon: <Shuffle /> },
    { title: "R2 thấy LAN B connected", text: "R2 nhìn Destination IP 192.168.2.10 và biết mạng 192.168.2.0/24 nối trực tiếp.", code: "192.168.2.0/24 connected", color: "blue", icon: <Router /> },
    { title: "R2 gửi frame đến PC B", text: "Nếu chưa biết MAC của PC B, R2 dùng ARP rồi gửi frame đến PC B.", code: "Who has 192.168.2.10?\nDst MAC = MAC PC B", color: "green", icon: <Send /> },
    { title: "PC B trả lời PC A", text: "Chiều về cũng cần route. Nếu R2 không biết 192.168.1.0/24 qua 10.0.0.1, reply không về được.", code: "Routing phải có đường đi và đường về", color: "red", icon: <AlertTriangle /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="Cơ chế hoạt động của static routing" icon={<Zap />} />
      <StepSection steps={steps} step={step} setStep={setStep} />
    </section>
  );
}

function CiscoConfig() {
  const [router, setRouter] = useState("r1");
  const data = {
    r1: {
      title: "Cấu hình trên R1",
      desc: "R1 cần biết đường đến LAN B 192.168.2.0/24 qua R2 10.0.0.2.",
      code: "R1> enable\nR1# configure terminal\nR1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2\nR1(config)# end",
      output: "S 192.168.2.0/24 [1/0] via 10.0.0.2",
      color: "cyan"
    },
    r2: {
      title: "Cấu hình trên R2",
      desc: "R2 cần biết đường quay về LAN A 192.168.1.0/24 qua R1 10.0.0.1.",
      code: "R2> enable\nR2# configure terminal\nR2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1\nR2(config)# end",
      output: "S 192.168.1.0/24 [1/0] via 10.0.0.1",
      color: "emerald"
    }
  };
  const cur = data[router];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Cấu hình static route trên Cisco" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setRouter("r1")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${router === "r1" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>R1</button>
          <button onClick={() => setRouter("r2")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${router === "r2" ? "bg-emerald-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>R2</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <ConceptCard title={cur.title} icon={<Terminal />} color={cur.color} text={cur.desc} code="ip route <mạng_đích> <subnet_mask> <next-hop>" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="font-mono text-sm text-green-300 whitespace-pre-wrap bg-slate-900 border border-slate-800 rounded-2xl p-5">{cur.code}</div>
            <div className="mt-4 font-mono text-sm text-cyan-300 whitespace-pre-wrap bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-5">show ip route
              {cur.output}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DefaultRouteSection() {
  const [hasSpecific, setHasSpecific] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="Default Route" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="0.0.0.0/0" icon={<Globe2 />} color="orange" text="Default route là route dùng khi router không tìm thấy route cụ thể hơn trong routing table." code="ip route 0.0.0.0 0.0.0.0 203.0.113.1" />
            <button onClick={() => setHasSpecific(!hasSpecific)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${hasSpecific ? "bg-cyan-500 text-white" : "bg-orange-500 text-white"}`}>{hasSpecific ? "Có route cụ thể" : "Không có route cụ thể"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <DefaultRouteVisual hasSpecific={hasSpecific} />
            <div className={`rounded-2xl border p-4 text-sm ${hasSpecific ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {hasSpecific ? "Router ưu tiên route cụ thể hơn trước default route." : "Không biết mạng đích cụ thể → gửi theo default route."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LongestPrefixMatch() {
  const [dst, setDst] = useState("192.168.1.150");
  const routes = [
    { net: "0.0.0.0/0", next: "ISP", match: true, color: "slate" },
    { net: "192.168.0.0/16", next: "R-A", match: true, color: "orange" },
    { net: "192.168.1.0/24", next: "R-B", match: true, color: "cyan" },
    { net: "192.168.1.128/25", next: "R-C", match: true, color: "emerald" },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="green" title="Longest Prefix Match" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Route cụ thể nhất thắng" icon={<Search />} color="green" text="Nếu nhiều route cùng khớp, router chọn route có prefix dài nhất, tức cụ thể nhất." code="/25 thắng /24\n/24 thắng /16\n/16 thắng /0" />
            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Destination IP</label>
              <input value={dst} onChange={(e) => setDst(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-green-400" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="space-y-3">
              {routes.map((r, idx) => {
                const chosen = idx === routes.length - 1;
                const c = colorClasses[r.color];
                return <div key={r.net} className={`${chosen ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-4 flex items-center justify-between`}><div><p className={`${chosen ? c.text : "text-slate-300"} font-mono font-bold`}>{r.net}</p><p className="text-xs text-slate-500 mt-1">Next-hop: {r.next}</p></div><span className={`${chosen ? "bg-green-500 text-white" : "bg-slate-800 text-slate-500"} rounded-full px-3 py-1 text-xs font-bold`}>{chosen ? "CHỌN" : "khớp"}</span></div>;
              })}
            </div>
            <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-green-300 text-sm">
              Với {dst}, route được chọn là <span className="font-mono font-bold">192.168.1.128/25</span> vì cụ thể nhất.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingStaticRoute() {
  const [primaryUp, setPrimaryUp] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="purple" title="Floating Static Route" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Route dự phòng" icon={<ShieldCheck />} color="purple" text="Floating static route có Administrative Distance cao hơn route chính, nên chỉ hoạt động khi route chính mất." code="ip route 0.0.0.0 0.0.0.0 203.0.113.1\nip route 0.0.0.0 0.0.0.0 198.51.100.1 10" />
            <button onClick={() => setPrimaryUp(!primaryUp)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${primaryUp ? "bg-green-500 text-white" : "bg-purple-500 text-white"}`}>{primaryUp ? "Đường chính đang UP" : "Đường chính DOWN"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <FloatingVisual primaryUp={primaryUp} />
            <div className={`rounded-2xl border p-4 text-sm ${primaryUp ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-purple-500/10 border-purple-400/40 text-purple-300"}`}>
              {primaryUp ? "Router dùng route chính AD=1. Route dự phòng AD=10 chưa được dùng." : "Route chính mất, floating static route qua ISP 2 được kích hoạt."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProsCons() {
  const pros = ["Đơn giản trong mạng nhỏ", "Dễ kiểm soát đường đi", "Ít tốn tài nguyên", "Không cần routing protocol", "Ổn định nếu topology cố định"];
  const cons = ["Không tự động thích nghi", "Khó mở rộng", "Dễ sai sót khi nhập lệnh", "Tốn công quản trị", "Không phù hợp mạng lớn phức tạp"];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Ưu điểm và nhược điểm của Static Routing" icon={<Gauge />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ListPanel title="Ưu điểm" items={pros} color="green" icon={<CheckCircle2 />} />
        <ListPanel title="Nhược điểm" items={cons} color="red" icon={<XCircle />} />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-4">
        <InfoBox title="Nên dùng" value="Mạng nhỏ, ít router, đường đi ít thay đổi, default route ra Internet, route đặc biệt, floating static dự phòng." icon={<CheckCircle2 />} color="green" />
        <InfoBox title="Không nên dùng chính" value="Mạng lớn, nhiều router, topology thay đổi thường xuyên, cần tự động hội tụ khi đường hỏng." icon={<XCircle />} color="red" />
      </div>
    </section>
  );
}

function StaticVsDynamic() {
  const rows = [
    ["Cách học route", "Admin cấu hình thủ công", "Router tự trao đổi route"],
    ["Tự cập nhật khi mạng đổi", "Không", "Có"],
    ["Độ phức tạp", "Đơn giản trong mạng nhỏ", "Phức tạp hơn"],
    ["Khả năng mở rộng", "Kém hơn", "Tốt hơn"],
    ["Tốn tài nguyên", "Ít", "Nhiều hơn"],
    ["Ví dụ", "ip route ...", "RIP, OSPF, BGP"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="cyan" title="Static Routing vs Dynamic Routing" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">Static Routing</th><th className="p-4 text-purple-300">Dynamic Routing</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([criteria, s, d], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{s}</td><td className="p-4 text-slate-300">{d}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Chỉ cấu hình một chiều", desc: "R1 biết đường đến LAN B nhưng R2 không biết đường về LAN A, nên reply không về được.", fix: "Cần route chiều đi và chiều về." },
    { title: "Sai subnet mask", desc: "Cần route /24 nhưng nhập nhầm /30 hoặc mask quá hẹp khiến route không khớp đúng LAN.", fix: "Kiểm tra network và mask/prefix thật kỹ." },
    { title: "Sai next-hop", desc: "Next-hop không tồn tại hoặc không reachable thì route không hoạt động đúng.", fix: "Ping next-hop và kiểm tra interface WAN." },
    { title: "Interface bị shutdown", desc: "Static route đúng nhưng interface router đang administratively down.", fix: "show ip interface brief rồi no shutdown." },
    { title: "PC thiếu default gateway", desc: "Router đúng nhưng PC không biết gửi traffic khác mạng cho router nào.", fix: "Cấu hình default gateway trên PC." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="red" title="Lỗi cấu hình static route thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-red-500/40 transition-colors"><div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div><h3 className="text-white font-bold text-lg mb-3">{m.title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p><div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div></div>)}
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("interfaces");
  const commands = {
    interfaces: { title: "Cisco — xem interface", cmd: "show ip interface brief", output: "Interface              IP-Address      Status      Protocol\nGigabitEthernet0/0     192.168.1.1     up          up\nGigabitEthernet0/1     10.0.0.1        up          up", note: "Dùng để kiểm tra IP và trạng thái cổng. Nếu administratively down thì cần no shutdown." },
    route: { title: "Cisco — xem routing table", cmd: "show ip route", output: "C 192.168.1.0/24 is directly connected, GigabitEthernet0/0\nC 10.0.0.0/30 is directly connected, GigabitEthernet0/1\nS 192.168.2.0/24 [1/0] via 10.0.0.2", note: "S là static route, C là connected route, L là local route." },
    add: { title: "Cisco — thêm static route", cmd: "configure terminal\nip route 192.168.2.0 255.255.255.0 10.0.0.2\nend", output: "Static route added", note: "Lệnh này nói router gửi packet đến 192.168.2.0/24 qua next-hop 10.0.0.2." },
    delete: { title: "Cisco — xóa static route", cmd: "configure terminal\nno ip route 192.168.2.0 255.255.255.0 10.0.0.2\nend", output: "Static route removed", note: "Muốn xóa, thêm no phía trước đúng câu lệnh cũ." },
    test: { title: "Máy tính — kiểm tra kết nối", cmd: "ping 192.168.2.10\ntracert 192.168.2.10\ntraceroute 192.168.2.10", output: "1 192.168.1.1\n2 10.0.0.2\n3 192.168.2.10", note: "Ping kiểm tra kết nối, traceroute/tracert xem đường đi qua router nào." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">static routing lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[330px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">Router# </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="show ip route" desc="Xem routing table và ký hiệu route." />
            <ExplainRow term="show ip interface brief" desc="Xem IP và trạng thái interface." />
            <ExplainRow term="ip route" desc="Thêm static route trên Cisco." />
          </div>
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">17</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>Routing = router chọn đường đi cho packet.</p>
              <p>Router dùng Destination IP để tra routing table.</p>
              <p>Routing table chứa route đến mạng đích.</p>
              <p>Static route = route được cấu hình thủ công.</p>
              <p>Next-hop = router kế tiếp.</p>
              <p>Muốn giao tiếp hai chiều cần route đi và route về.</p>
              <p>Default route = 0.0.0.0/0.</p>
              <p>Router chọn route theo Longest Prefix Match.</p>
              <p>Static routing đơn giản nhưng khó mở rộng.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Static Routing là gì?", options: ["Router tự động học đường đi từ router khác", "Người quản trị cấu hình đường đi thủ công", "Máy chủ DNS phân giải tên miền", "Switch học MAC address"], correct: 1, explanation: "Static routing là định tuyến do admin cấu hình thủ công bằng các lệnh như ip route." },
  { question: "Lệnh ip route 192.168.2.0 255.255.255.0 10.0.0.2 có ý nghĩa gì?", options: ["Gán IP cho interface", "Tạo VLAN mới", "Cấu hình route đến 192.168.2.0/24 qua 10.0.0.2", "Xóa bảng định tuyến"], correct: 2, explanation: "Lệnh này tạo static route đến mạng 192.168.2.0/24 với next-hop 10.0.0.2." },
  { question: "Nếu R1 có route đến LAN B nhưng R2 chưa có route về LAN A, ping hai chiều có thành công không?", options: ["Có, vì chỉ cần route chiều đi", "Không chắc thành công, vì reply không biết đường về", "Có, vì switch sẽ tự route", "Có, vì ARP thay thế routing"], correct: 1, explanation: "Ping cần Echo Request đi và Echo Reply về. Nếu R2 không có route về LAN A, gói reply không về được." },
  { question: "Default route có dạng nào?", options: ["255.255.255.255/32", "0.0.0.0/0", "127.0.0.1/8", "224.0.0.0/4"], correct: 1, explanation: "Default route là 0.0.0.0/0, dùng khi không có route cụ thể hơn." },
  { question: "Longest Prefix Match nghĩa là gì?", options: ["Router chọn route xuất hiện đầu tiên", "Router chọn route có prefix cụ thể nhất", "Router chọn route có tên ngắn nhất", "Router luôn chọn default route"], correct: 1, explanation: "Nếu nhiều route khớp, router chọn route có prefix dài nhất/cụ thể nhất." },
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
      <p className="text-slate-400 mb-4">Sau static routing, bài tiếp theo học cách router tự trao đổi route và tự cập nhật khi mạng thay đổi.</p>
      <Link to="/phan-5-6" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.6 — Định tuyến động: RIP, OSPF, BGP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">ip route 192.168.2.0 255.255.255.0 10.0.0.2\n\nS 192.168.2.0/24 [1/0] via 10.0.0.2</div><div className="grid grid-cols-3 gap-3"><MiniCard title="RIB" value="route table" color="cyan" icon={<TableProperties />} /><MiniCard title="Next-hop" value="10.0.0.2" color="emerald" icon={<ArrowRight />} /><MiniCard title="Default" value="0.0.0.0/0" color="orange" icon={<Globe2 />} /></div><TwoRouterVisual compact /></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function RoutingPathVisual() { return <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-center"><Node label="PC A" sub="Source" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="R1" sub="route" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="R2" sub="route" color="purple" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="Server" sub="Destination" color="emerald" icon={<Globe2 />} /></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function RoutingTable({ selected, setSelected }) { return <div className="overflow-x-auto"><table className="w-full text-left min-w-[640px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">Type</th><th className="p-3">Destination</th><th className="p-3">Next-hop</th><th className="p-3">Exit</th></tr></thead><tbody>{routeRows.map(([type, dest, next, exit], idx) => <tr key={dest} onClick={() => setSelected(idx)} className={`${selected === idx ? "bg-cyan-500/10" : ""} border-b border-slate-800 last:border-0 cursor-pointer hover:bg-slate-800/40`}><td className="p-3 text-cyan-300 font-mono font-bold">{type}</td><td className="p-3 text-slate-300 font-mono">{dest}</td><td className="p-3 text-green-300 font-mono">{next}</td><td className="p-3 text-orange-300 font-mono">{exit}</td></tr>)}</tbody></table></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function PathHopVisual({ active }) { const nodes = ["PC A", "R1", "R2", "R3", "Server"]; return <div className="grid grid-cols-5 gap-2">{nodes.map((n, i) => <div key={n} className={`${i === active ? "bg-purple-500/20 border-purple-400/50 text-purple-300" : i === active + 1 ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center`}><Router className="mx-auto mb-2" size={20} /><p className="font-bold text-xs">{n}</p></div>)}</div>; }
function TwoRouterVisual({ compact = false }) { return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 overflow-x-auto"><div className="min-w-[760px] grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC A" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="R1" sub="LAN .1 / WAN 10.0.0.1" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="R2" sub="WAN 10.0.0.2 / LAN .1" color="purple" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="PC B" sub="192.168.2.10" color="emerald" icon={<Server />} /></div>{!compact && <div className="mt-5 grid md:grid-cols-3 gap-3 font-mono text-sm"><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300">LAN A: 192.168.1.0/24</div><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300">WAN: 10.0.0.0/30</div><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-emerald-300">LAN B: 192.168.2.0/24</div></div>}</div>; }
function RouteTableSmall({ title, rows, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><h3 className={`${c.text} font-bold text-lg mb-4`}>{title}</h3><table className="w-full text-left text-sm"><thead><tr className="text-slate-500 border-b border-slate-800"><th className="p-2">Destination</th><th className="p-2">Next-hop</th></tr></thead><tbody>{rows.map(([d, n]) => <tr key={d} className="border-b border-slate-800 last:border-0"><td className="p-2 text-slate-300 font-mono">{d}</td><td className="p-2 text-green-300 font-mono">{n}</td></tr>)}</tbody></table></div>; }
function StepSection({ steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function DefaultRouteVisual({ hasSpecific }) { return <div className="space-y-3">{hasSpecific && <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 font-mono">192.168.2.0/24 → 10.0.0.2</div>}<div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 font-mono">0.0.0.0/0 → ISP Router</div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300">Destination: {hasSpecific ? "192.168.2.10" : "8.8.8.8"}</div></div>; }
function FloatingVisual({ primaryUp }) { return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><div className={`${primaryUp ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"} border rounded-2xl p-4 text-center`}><Router className="mx-auto mb-2" /><p className="font-bold">ISP 1</p><p className="font-mono text-xs">AD 1</p><p className="text-xs mt-2">{primaryUp ? "ACTIVE" : "DOWN"}</p></div><div className={`${primaryUp ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-purple-500/10 border-purple-400/40 text-purple-300"} border rounded-2xl p-4 text-center`}><Router className="mx-auto mb-2" /><p className="font-bold">ISP 2</p><p className="font-mono text-xs">AD 10</p><p className="text-xs mt-2">{primaryUp ? "standby" : "ACTIVE"}</p></div></div></div>; }
function ListPanel({ title, items, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><h3 className={`${c.text} font-bold text-xl mb-4 flex items-center gap-2`}>{React.cloneElement(icon, { size: 20 })}{title}</h3><ul className="space-y-3">{items.map((x) => <li key={x} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className={`${c.text} shrink-0 mt-0.5`} />{x}</li>)}</ul></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
