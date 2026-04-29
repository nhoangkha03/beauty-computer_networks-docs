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
  Network,
  Package,
  PackageCheck,
  RadioTower,
  RefreshCw,
  Router,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
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

const routingRows = [
  ["192.168.1.0/24", "Connected", "G0/0", "LAN"],
  ["192.168.2.0/24", "Connected", "G0/1", "LAN B"],
  ["203.0.113.0/30", "Connected", "G0/2", "WAN"],
  ["0.0.0.0/0", "203.0.113.1", "G0/2", "Default route"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Router className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.8</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <RouterIntro />
        <SwitchVsRouter />
        <InterfaceSection />
        <RoutingTableSection />
        <MacIpSection />
        <PacketProcessing />
        <NoRouteSection />
        <TtlSection />
        <ArpNdpSection />
        <NatPatSection />
        <DefaultGatewaySection />
        <InterVlanSection />
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
            <Layers size={16} /> Bài cuối Phần 5 — Network Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Router:
            <span className="block text-cyan-400">Nguyên lý hoạt động</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Router nhận frame, bóc lấy IP packet, đọc IP đích, giảm TTL, tra routing table, xử lý NAT nếu cần, tìm MAC next-hop và đóng vào frame mới.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Router</span> = thiết bị Layer 3.</p>
            <p><span className="text-emerald-300">IP</span> thường giữ nguyên end-to-end.</p>
            <p><span className="text-orange-300">MAC</span> thay đổi theo từng chặng.</p>
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
    "Hiểu router là gì và nhiệm vụ chính của router.",
    "Phân biệt router và switch.",
    "Biết router xử lý packet từng bước.",
    "Hiểu routing table, ARP/NDP, TTL và NAT/PAT trong router.",
    "Biết vì sao MAC đổi theo hop nhưng IP thường giữ nguyên.",
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

function RouterIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Router là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">Router</strong> là thiết bị mạng dùng để kết nối các mạng khác nhau và chuyển IP packet giữa các mạng đó.</p>
            <p>Router hoạt động chủ yếu ở <strong className="text-cyan-300">Layer 3 — Network Layer</strong>. Nó đọc Destination IP, tra routing table, rồi chuyển packet sang mạng kế tiếp.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>Router là thiết bị Layer 3 dùng để chuyển packet giữa các mạng khác nhau.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><RouterPositionVisual /></div>
        </div>
      </div>
    </section>
  );
}

function SwitchVsRouter() {
  const rows = [
    ["Tầng chính", "Layer 2 — Data Link", "Layer 3 — Network"],
    ["Đơn vị xử lý", "Frame", "Packet"],
    ["Dựa vào địa chỉ", "MAC address", "IP address"],
    ["Bảng chính", "MAC address table", "Routing table"],
    ["Phạm vi", "Trong LAN/VLAN", "Giữa các mạng"],
    ["Câu hỏi chính", "MAC này nằm ở cổng nào?", "IP đích thuộc mạng nào, gửi qua đâu?"],
  ];
  return <ComparisonTable number="3" title="Router khác Switch như thế nào?" rows={rows} left="Switch" right="Router" leftColor="orange" rightColor="cyan" />;
}

function InterfaceSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Interface của router là gì?" icon={<Network />} />
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
        <ConceptCard title="Router Interface" icon={<Network />} color="purple" text="Router có nhiều interface. Mỗi interface thường thuộc về một mạng IP khác nhau." code="G0/0: 192.168.1.1/24 → LAN A\nG0/1: 192.168.2.1/24 → LAN B\nG0/2: 203.0.113.5/30 → ISP" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6"><InterfaceVisual /></div>
      </div>
    </section>
  );
}

function RoutingTableSection() {
  const [dst, setDst] = useState("8.8.8.8");
  const isInternet = !dst.startsWith("192.168.1.") && !dst.startsWith("192.168.2.");
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Routing Table và Longest Prefix Match" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Routing Table" icon={<Database />} color="cyan" text="Routing table là bản đồ đường đi mà router dùng để quyết định packet nên ra cổng nào hoặc gửi đến next-hop nào." code="Destination Network → Next-hop / Exit Interface" />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Destination IP</label>
              <input value={dst} onChange={(e) => setDst(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-cyan-400" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <RoutingTable dst={dst} />
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${isInternet ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {isInternet ? "Không khớp LAN cụ thể → router dùng default route 0.0.0.0/0 ra ISP." : "Khớp mạng connected cụ thể → router gửi ra interface LAN tương ứng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MacIpSection() {
  const [hop, setHop] = useState(0);
  const frames = [
    { label: "PC A → R1", mac: "MAC: PC A → R1 LAN", color: "cyan" },
    { label: "R1 → R2", mac: "MAC: R1 WAN → R2 WAN", color: "orange" },
    { label: "R2 → Server", mac: "MAC: R2 LAN → Server", color: "emerald" },
  ];
  const cur = frames[hop];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="orange" title="MAC thay đổi, IP thường giữ nguyên" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Layer 2 theo từng chặng" icon={<PackageCheck />} color="orange" text="Router bóc frame cũ và tạo frame mới cho chặng tiếp theo, nên MAC source/destination thay đổi theo từng hop." code="MAC đổi theo hop" />
            <Slider label="Chặng hiện tại" value={hop} setValue={setHop} min={0} max={2} suffix="" color="orange" display={cur.label} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <HopMacVisual active={hop} />
            <div className={`${colorClasses[cur.color].bg} ${colorClasses[cur.color].border} border rounded-2xl p-4 text-sm`}>
              <p className={`${colorClasses[cur.color].text} font-mono font-bold`}>{cur.mac}</p>
              <p className="text-green-300 font-mono mt-2">IP: 192.168.1.10 → 192.168.2.10</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 text-cyan-300 text-sm">
              IP nguồn/đích thường giữ nguyên từ đầu đến cuối, trừ khi có NAT, tunneling hoặc policy đặc biệt.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PacketProcessing() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "PC xác định đích khác mạng", text: "PC muốn đến 8.8.8.8, thấy không thuộc 192.168.1.0/24 nên gửi đến default gateway 192.168.1.1.", code: "Dst IP = 8.8.8.8\nGateway = 192.168.1.1", color: "cyan", icon: <Search /> },
    { title: "PC dùng ARP tìm MAC gateway", text: "Nếu chưa biết MAC của 192.168.1.1, PC gửi ARP Request.", code: "Who has 192.168.1.1?\nRouter replies: RR:RR:RR:RR:RR:RR", color: "orange", icon: <RadioTower /> },
    { title: "PC đóng packet vào frame", text: "IP đích là 8.8.8.8, nhưng MAC đích là MAC router LAN.", code: "Src MAC = MAC PC\nDst MAC = MAC Router LAN\nPayload = IP packet", color: "emerald", icon: <PackageCheck /> },
    { title: "Router nhận frame", text: "Router kiểm tra MAC đích, FCS, EtherType rồi bóc frame để lấy IP packet.", code: "Ethernet Frame → IP Packet", color: "purple", icon: <Package /> },
    { title: "Router kiểm tra IP và TTL", text: "Router đọc Destination IP, giảm TTL. Nếu TTL về 0 thì drop và có thể gửi ICMP Time Exceeded.", code: "TTL 64 → 63", color: "yellow", icon: <Timer /> },
    { title: "Router tra routing table", text: "Router tìm route đến 8.8.8.8. Không có route cụ thể nên dùng default route ra ISP.", code: "0.0.0.0/0 → 203.0.113.1 via G0/2", color: "blue", icon: <TableProperties /> },
    { title: "Router thực hiện NAT/PAT nếu có", text: "Với traffic LAN ra Internet, router có thể đổi Source IP/Port và lưu PAT table.", code: "192.168.1.10:51514\n→ 203.0.113.5:40001", color: "green", icon: <RefreshCw /> },
    { title: "Router tìm MAC next-hop", text: "Router ARP cho next-hop 203.0.113.1 nếu chưa biết MAC.", code: "Who has 203.0.113.1?", color: "orange", icon: <RadioTower /> },
    { title: "Router tạo frame mới", text: "Router tạo Ethernet header mới cho chặng WAN, payload là IP packet đã xử lý.", code: "Src MAC = MAC Router WAN\nDst MAC = MAC ISP next-hop", color: "cyan", icon: <PackageCheck /> },
    { title: "Packet tiếp tục qua Internet", text: "Các router tiếp theo cũng nhận frame, bóc packet, giảm TTL, tra route và đóng frame mới.", code: "Receive → Decapsulate → Route → Encapsulate → Forward", color: "emerald", icon: <ArrowRight /> },
  ];
  return <StepSection number="7" color="green" title="Router xử lý packet từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function NoRouteSection() {
  const [hasDefault, setHasDefault] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="red" title="Nếu router không có route thì sao?" icon={<XCircle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="No route = drop" icon={<XCircle />} color="red" text="Nếu routing table không có route phù hợp và cũng không có default route, router không biết gửi packet đi đâu nên drop packet." code="No matching route\nNo 0.0.0.0/0\n→ Drop" />
            <button onClick={() => setHasDefault(!hasDefault)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${hasDefault ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{hasDefault ? "Có default route" : "Không có default route"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <NoRouteVisual hasDefault={hasDefault} />
            <div className={`rounded-2xl border p-4 text-sm ${hasDefault ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>
              {hasDefault ? "Router dùng default route để gửi packet đến next-hop ISP." : "Router drop packet và có thể gửi ICMP Destination Unreachable về nguồn."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TtlSection() {
  const [ttl, setTtl] = useState(4);
  const hops = Math.min(4, ttl);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Router và TTL" icon={<Timer />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="TTL ngăn loop vô hạn" icon={<Timer />} color="yellow" text="Mỗi router giảm TTL đi 1. Nếu TTL về 0, router hủy packet và có thể gửi ICMP Time Exceeded." code="64 → 63 → 62 → ... → 0" />
            <Slider label="TTL ban đầu" value={ttl} setValue={setTtl} min={1} max={8} suffix="" color="yellow" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <TtlVisual ttl={ttl} />
            <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-2xl p-4 text-yellow-300 text-sm font-mono">
              Sau {hops} router: TTL còn {Math.max(0, ttl - hops)} {ttl <= 4 ? "→ nếu cần đi xa hơn, packet bị drop" : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArpNdpSection() {
  const [mode, setMode] = useState("next");
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="Router dùng ARP/NDP khi nào?" icon={<RadioTower />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="IPv4 dùng ARP, IPv6 dùng NDP" icon={<RadioTower />} color="orange" text="Router cần địa chỉ Layer 2 để đóng frame mới. Với IPv4 dùng ARP; với IPv6 dùng NDP." code="IPv4: ARP\nIPv6: Neighbor Discovery Protocol" />
            <div className="flex gap-2">
              <button onClick={() => setMode("host")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${mode === "host" ? "bg-emerald-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Đích connected</button>
              <button onClick={() => setMode("next")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${mode === "next" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Đích ở xa</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ArpChoiceVisual mode={mode} />
            <div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 text-sm">
              {mode === "host" ? "Nếu IP đích nằm trong mạng connected trực tiếp, router ARP cho chính host đích." : "Nếu IP đích ở mạng xa, router ARP cho next-hop, không ARP cho IP đích cuối cùng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NatPatSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="green" title="Router và NAT/PAT" icon={<RefreshCw />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Khi nào NAT xảy ra?" icon={<RefreshCw />} color="green" text="NAT thường xảy ra khi packet đi từ inside ra outside và khớp điều kiện NAT." code="Inside: 192.168.1.0/24\nOutside: Internet" />
        <ConceptCard title="Không NAT mọi packet" icon={<ShieldCheck />} color="cyan" text="Router chỉ NAT nếu có cấu hình NAT và packet khớp ACL/điều kiện NAT." code="ip nat inside\nip nat outside\nACL chọn mạng NAT" />
        <ConceptCard title="Checksum phải cập nhật" icon={<Code2 />} color="orange" text="Khi NAT đổi IP/port, router phải cập nhật IPv4/TCP/UDP checksum phù hợp." code="Đổi IP/port → tính lại checksum" />
      </div>
    </section>
  );
}

function DefaultGatewaySection() {
  const [same, setSame] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="cyan" title="Router và Default Gateway" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Default Gateway" icon={<Router />} color="cyan" text="Default gateway là router mà host gửi packet đến khi destination IP không nằm cùng mạng local." code="PC: 192.168.1.10/24\nGateway: 192.168.1.1" />
            <button onClick={() => setSame(!same)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${same ? "bg-emerald-500 text-white" : "bg-cyan-500 text-white"}`}>{same ? "Đích cùng LAN" : "Đích khác LAN"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <GatewayVisual same={same} />
            <div className={`rounded-2xl border p-4 text-sm ${same ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-cyan-500/10 border-cyan-400/40 text-cyan-300"}`}>
              {same ? "PC gửi trực tiếp trong LAN, không cần default gateway." : "PC gửi frame cho MAC của gateway, còn IP đích vẫn là IP cuối cùng."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterVlanSection() {
  const [mode, setMode] = useState("router");
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="purple" title="Router trong Inter-VLAN Routing" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("router")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "router" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Router-on-a-stick</button>
          <button onClick={() => setMode("l3")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${mode === "l3" ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Layer 3 Switch</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title={mode === "router" ? "Router-on-a-stick" : "Layer 3 Switch"} icon={mode === "router" ? <Router /> : <Network />} color={mode === "router" ? "purple" : "cyan"} text={mode === "router" ? "Router nối switch bằng trunk và tạo subinterface cho từng VLAN. Mỗi subinterface là gateway của VLAN." : "Layer 3 switch routing giữa VLAN bằng SVI và lệnh ip routing, rất phổ biến trong doanh nghiệp."} code={mode === "router" ? "G0/0.10 → VLAN 10 → 192.168.10.1\nG0/0.20 → VLAN 20 → 192.168.20.1" : "interface vlan 10\n ip address 192.168.10.1 255.255.255.0\ninterface vlan 20\n ip address 192.168.20.1 255.255.255.0\nip routing"} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><InterVlanVisual mode={mode} /></div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("interface");
  const commands = {
    interface: { title: "Cisco — xem trạng thái interface", cmd: "show ip interface brief", output: "Interface              IP-Address      OK? Method Status Protocol\nGigabitEthernet0/0     192.168.1.1     YES manual up     up\nGigabitEthernet0/1     203.0.113.5     YES manual up     up", note: "Nếu thấy administratively down, vào interface và dùng no shutdown." },
    route: { title: "Cisco — xem routing table", cmd: "show ip route", output: "C 192.168.1.0/24 is directly connected, GigabitEthernet0/0\nL 192.168.1.1/32 is directly connected, GigabitEthernet0/0\nS 0.0.0.0/0 [1/0] via 203.0.113.1", note: "C = connected, L = local, S = static, R = RIP, O = OSPF, B = BGP." },
    arp: { title: "Cisco — xem ARP table", cmd: "show ip arp", output: "Protocol  Address          Age  Hardware Addr   Type  Interface\nInternet  192.168.1.10      2   aaaa.bbbb.cccc  ARPA  GigabitEthernet0/0", note: "ARP table cho biết IP nào tương ứng MAC nào trong IPv4 Ethernet." },
    nat: { title: "Cisco — xem NAT translations", cmd: "show ip nat translations", output: "tcp 203.0.113.5:40001 192.168.1.10:51514 8.8.8.8:443 8.8.8.8:443", note: "Bảng NAT/PAT cho biết public IP:port ánh xạ về private IP:port nào." },
    host: { title: "Máy tính — kiểm tra gateway", cmd: "# Windows\nipconfig\n\n# Linux\nip route", output: "default via 192.168.1.1 dev eth0\n192.168.1.0/24 dev eth0", note: "Nếu thiếu default gateway, host vẫn nói chuyện LAN được nhưng khó ra mạng khác." },
    test: { title: "Kiểm tra kết nối", cmd: "ping 192.168.1.1\nping 8.8.8.8\nping google.com\ntracert 8.8.8.8\ntraceroute 8.8.8.8", output: "Ping gateway fail → LAN/IP/mask/cable/WiFi/VLAN\nPing gateway OK, 8.8.8.8 fail → route/NAT/ISP/firewall\nPing 8.8.8.8 OK, google.com fail → DNS", note: "Kiểm tra theo từng lớp giúp khoanh vùng lỗi nhanh." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">router operation lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[360px] whitespace-pre-wrap">
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
            <ExplainRow term="show ip route" desc="Xem router biết đường đi nào." />
            <ExplainRow term="show ip arp" desc="Xem IP ↔ MAC trong IPv4." />
            <ExplainRow term="traceroute/tracert" desc="Xem packet đi qua router nào." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ router chuyển theo MAC đích cuối cùng", desc: "Router chuyển packet dựa trên Destination IP. MAC chỉ dùng cho next-hop ở chặng hiện tại.", fix: "Nhìn IP để route, dùng MAC để đóng frame next-hop." },
    { title: "Nghĩ IP đổi ở mỗi router", desc: "Thông thường Source IP và Destination IP không đổi qua mỗi router. MAC và TTL mới thay đổi.", fix: "IP chỉ đổi nếu NAT, tunneling hoặc policy đặc biệt." },
    { title: "Nghĩ router cần route từng host", desc: "Router thường định tuyến theo network prefix, ví dụ 192.168.2.0/24, không cần từng IP host.", fix: "Route theo subnet/prefix." },
    { title: "Quên route chiều về", desc: "Packet đi được đến đích nhưng reply không có đường về thì kết nối vẫn thất bại.", fix: "Routing cần chiều đi và chiều về." },
    { title: "Nhầm router với modem", desc: "Thiết bị gia đình thường tích hợp modem, router, switch, access point, firewall, NAT và DHCP server.", fix: "Tách khái niệm theo chức năng." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">16</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>Router là thiết bị Layer 3 chuyển packet giữa các mạng.</p>
              <p>Router đọc Destination IP để quyết định đường đi.</p>
              <p>Router dùng routing table và Longest Prefix Match.</p>
              <p>Router bóc frame cũ và đóng frame mới cho từng chặng.</p>
              <p>MAC thay đổi qua từng chặng, IP thường giữ nguyên.</p>
              <p>Mỗi router giảm TTL đi 1.</p>
              <p>TTL về 0 → drop packet, có thể gửi ICMP Time Exceeded.</p>
              <p>IPv4 dùng ARP để tìm MAC next-hop.</p>
              <p>IPv6 dùng NDP.</p>
              <p>Router biên mạng thường làm NAT/PAT.</p>
              <p>Host cần default gateway để đi ra ngoài mạng local.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Router hoạt động chủ yếu ở tầng nào?", options: ["Layer 1 — Physical", "Layer 2 — Data Link", "Layer 3 — Network", "Layer 7 — Application"], correct: 2, explanation: "Router hoạt động chủ yếu ở Layer 3 — Network Layer và xử lý IP packet." },
  { question: "Khi packet đi qua nhiều router, thành phần nào thường thay đổi ở mỗi chặng?", options: ["Destination IP cuối cùng", "Source IP ban đầu", "MAC nguồn và MAC đích của frame", "Nội dung ứng dụng bên trong packet"], correct: 2, explanation: "Router tạo frame mới cho từng chặng, nên MAC source/destination thay đổi. IP thường giữ nguyên trừ NAT/tunneling/policy." },
  { question: "Router dùng gì để chọn route cụ thể nhất?", options: ["Longest Prefix Match", "Shortest MAC Match", "DNS Lookup", "Port Forwarding"], correct: 0, explanation: "Nếu nhiều route cùng khớp, router chọn route có prefix dài nhất/cụ thể nhất." },
  { question: "Nếu TTL về 0, router thường làm gì?", options: ["Tăng TTL lên", "Drop packet và có thể gửi ICMP Time Exceeded", "Đổi IP thành private", "Gửi broadcast ARP"], correct: 1, explanation: "TTL ngăn loop vô hạn. Khi TTL về 0, router hủy packet và có thể gửi ICMP Time Exceeded." },
  { question: "IPv6 dùng cơ chế nào thay ARP?", options: ["NDP", "PAT", "RIP", "DHCP only"], correct: 0, explanation: "IPv6 dùng Neighbor Discovery Protocol — NDP để tìm địa chỉ Layer 2 của neighbor trong cùng link." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 5!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bạn đã hoàn thành Phần 5 — Network Layer. Bài tiếp theo sẽ lên Transport Layer để học Port & Socket.</p>
      <Link to="/phan-6-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.1 — Cổng Port & Socket <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="Route" value="table" color="cyan" icon={<TableProperties />} /><MiniCard title="TTL" value="-1/hop" color="yellow" icon={<Timer />} /><MiniCard title="ARP" value="next-hop" color="orange" icon={<RadioTower />} /></div><ProcessMini /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Frame in → IP packet → route lookup → frame out</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function RouterPositionVisual() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="LAN" sub="192.168.1.0/24" color="cyan" icon={<Network />} /><ArrowRight className="text-slate-500" /><Node label="Router" sub="Layer 3" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="Internet" sub="many networks" color="emerald" icon={<Globe2 />} /></div><OsiStack /></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function OsiStack() { return <div className="space-y-2">{["Application", "Transport", "Network ← Router xử lý IP packet", "Data Link ← Frame thay đổi", "Physical"].map((l) => <div key={l} className={`${l.startsWith("Network") ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : l.startsWith("Data") ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-xl px-4 py-2 text-sm font-bold`}>{l}</div>)}</div>; }
function ComparisonTable({ number, title, rows, left, right, leftColor, rightColor }) { return <section className="space-y-6"><SectionTitle number={number} color="cyan" title={title} icon={<Shuffle />} /><div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-left min-w-[820px]"><thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className={`p-4 ${colorClasses[leftColor].text}`}>{left}</th><th className={`p-4 ${colorClasses[rightColor].text}`}>{right}</th></tr></thead><tbody className="text-sm">{rows.map(([criteria, a, b], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{a}</td><td className="p-4 text-slate-300">{b}</td></tr>)}</tbody></table></div></div></section>; }
function InterfaceVisual() { return <div className="relative min-h-[280px]"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><Node label="Router" sub="R1" color="purple" icon={<Router />} /></div><div className="absolute left-0 top-4"><Node label="LAN A" sub="G0/0 192.168.1.1" color="cyan" icon={<Network />} /></div><div className="absolute left-0 bottom-4"><Node label="LAN B" sub="G0/1 192.168.2.1" color="emerald" icon={<Network />} /></div><div className="absolute right-0 top-1/2 -translate-y-1/2"><Node label="ISP" sub="G0/2 203.0.113.5" color="orange" icon={<Globe2 />} /></div></div>; }
function RoutingTable({ dst }) { return <div className="overflow-x-auto"><table className="w-full text-left min-w-[640px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">Destination</th><th className="p-3">Next-hop</th><th className="p-3">Exit</th><th className="p-3">Note</th></tr></thead><tbody>{routingRows.map(([dest, next, exit, note]) => { const active = (dst.startsWith("192.168.1.") && dest === "192.168.1.0/24") || (dst.startsWith("192.168.2.") && dest === "192.168.2.0/24") || ((!dst.startsWith("192.168.1.") && !dst.startsWith("192.168.2.")) && dest === "0.0.0.0/0"); return <tr key={dest} className={`${active ? "bg-cyan-500/10" : ""} border-b border-slate-800 last:border-0`}><td className="p-3 text-cyan-300 font-mono">{dest}</td><td className="p-3 text-green-300 font-mono">{next}</td><td className="p-3 text-orange-300 font-mono">{exit}</td><td className="p-3 text-slate-400">{note}</td></tr>; })}</tbody></table></div>; }
function Slider({ label, value, setValue, min, max, suffix, color, display }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{display ?? value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function HopMacVisual({ active }) { const nodes = ["PC A", "R1", "R2", "Server"]; return <div className="grid grid-cols-4 gap-2">{nodes.map((n, i) => <div key={n} className={`${i === active || i === active + 1 ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-2xl p-3 text-center`}><Server className="mx-auto mb-2" size={20} /><p className="font-bold text-xs">{n}</p></div>)}</div>; }
function ProcessMini() { return <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold"><MiniStep t="Frame in" /><MiniStep t="IP packet" /><MiniStep t="Route" /><MiniStep t="ARP" /><MiniStep t="Frame out" /></div>; }
function MiniStep({ t }) { return <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-2 text-cyan-300">{t}</div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function NoRouteVisual({ hasDefault }) { return <div className="space-y-3"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-300 font-mono">Dst IP: 8.8.8.8</div>{hasDefault && <div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-green-300 font-mono">0.0.0.0/0 → 203.0.113.1</div>}<div className={`${hasDefault ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"} border rounded-2xl p-4 font-bold`}>{hasDefault ? "Forward packet" : "Drop packet"}</div></div>; }
function TtlVisual({ ttl }) { return <div className="grid grid-cols-4 gap-2">{[1, 2, 3, 4].map((r, i) => <div key={r} className={`${ttl - i > 0 ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-300" : "bg-red-500/10 border-red-400/40 text-red-300"} border rounded-2xl p-4 text-center`}><Router className="mx-auto mb-2" /><p className="font-bold">R{r}</p><p className="font-mono text-sm">TTL {Math.max(0, ttl - i)}</p></div>)}</div>; }
function ArpChoiceVisual({ mode }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="Router" sub="forwarding" color="orange" icon={<Router />} /><ArrowRight className="text-orange-300" /><Node label={mode === "host" ? "Host đích" : "Next-hop"} sub={mode === "host" ? "192.168.2.10" : "203.0.113.1"} color={mode === "host" ? "emerald" : "cyan"} icon={mode === "host" ? <Server /> : <Router />} /></div><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 font-mono text-sm">ARP for {mode === "host" ? "192.168.2.10" : "203.0.113.1"}</div></div>; }
function GatewayVisual({ same }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className={same ? "text-emerald-300" : "text-cyan-300"} /><Node label={same ? "PC cùng LAN" : "Gateway"} sub={same ? "192.168.1.20" : "192.168.1.1"} color={same ? "emerald" : "orange"} icon={same ? <Server /> : <Router />} /><ArrowRight className={same ? "text-slate-700" : "text-cyan-300"} /><Node label="Remote" sub="8.8.8.8" color={same ? "slate" : "emerald"} icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">{same ? "Cùng LAN → ARP trực tiếp cho host đích" : "Khác LAN → gửi frame đến MAC của gateway"}</div></div>; }
function InterVlanVisual({ mode }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><div className="space-y-2"><VlanChip vlan="VLAN 10" ip="192.168.10.0/24" color="cyan" /><VlanChip vlan="VLAN 20" ip="192.168.20.0/24" color="emerald" /><VlanChip vlan="VLAN 30" ip="192.168.30.0/24" color="purple" /></div><ArrowRight className="text-slate-500" /><Node label={mode === "router" ? "Router" : "L3 Switch"} sub={mode === "router" ? "Subinterfaces" : "SVI + ip routing"} color={mode === "router" ? "purple" : "cyan"} icon={mode === "router" ? <Router /> : <Network />} /></div><div className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-purple-300 text-sm">Khác VLAN muốn nói chuyện với nhau thì cần routing.</div></div>; }
function VlanChip({ vlan, ip, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-xl px-3 py-2 text-sm`}><span className={`${c.text} font-mono font-bold`}>{vlan}</span><span className="text-slate-400 ml-2">{ip}</span></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
