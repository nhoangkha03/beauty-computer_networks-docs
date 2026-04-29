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
  Gauge,
  GitBranch,
  Globe2,
  Layers,
  Map,
  Network,
  RadioTower,
  Route,
  Router,
  Search,
  Server,
  ShieldCheck,
  Shuffle,
  TableProperties,
  Terminal,
  Users,
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

const compareRows = [
  ["Loại", "Distance-vector", "Link-state", "Path-vector"],
  ["Nhóm", "IGP", "IGP", "EGP"],
  ["Metric", "Hop count", "Cost", "Path attributes / policy"],
  ["Phạm vi", "Mạng nhỏ/lab", "Doanh nghiệp/campus", "Internet / giữa AS"],
  ["Hội tụ", "Chậm", "Nhanh hơn RIP", "Thận trọng theo chính sách"],
  ["Độ khó", "Dễ", "Trung bình", "Khó"],
  ["Giới hạn", "15 hop", "Cần thiết kế area", "Policy phức tạp"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <GitBranch className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.6</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyDynamic />
        <RoutingProtocolIntro />
        <StaticVsDynamic />
        <MetricAndAS />
        <NetworkTopology />
        <RipSection />
        <RipHowItWorks />
        <OspfSection />
        <OspfHowItWorks />
        <BgpSection />
        <BgpHowItWorks />
        <IgpEgpSection />
        <ProtocolCompare />
        <ChooseProtocol />
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
            <GitBranch size={16} /> Router tự học và tự cập nhật route
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Định tuyến động:
            <span className="block text-cyan-400">RIP, OSPF, BGP</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Dynamic routing cho phép router tự trao đổi thông tin định tuyến, tự học mạng mới và tự cập nhật khi đường đi thay đổi.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">RIP</span> = hop count.</p>
            <p><span className="text-emerald-300">OSPF</span> = link-state + cost.</p>
            <p><span className="text-cyan-300">BGP</span> = AS_PATH + policy.</p>
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
    "Hiểu Dynamic Routing là gì.",
    "Biết vì sao mạng lớn không thể chỉ dùng static route.",
    "Hiểu RIP chọn đường theo hop count.",
    "Hiểu OSPF chọn đường theo link-state và cost.",
    "Hiểu BGP định tuyến giữa các AS bằng policy/path attributes.",
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

function WhyDynamic() {
  const [broken, setBroken] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần định tuyến động?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Static routing ổn khi mạng nhỏ. Nhưng khi có nhiều router, nhiều đường dự phòng và topology thay đổi, việc sửa route thủ công rất dễ sai.</p>
            <p><strong className="text-white">Dynamic Routing</strong> giúp router tự trao đổi route, tự học mạng mới và tự cập nhật khi đường đi thay đổi.</p>
            <button onClick={() => setBroken(!broken)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${broken ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}>{broken ? "Đường R2-R4 đang hỏng" : "Mạng bình thường"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <DiamondTopology broken={broken} />
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${broken ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-green-500/10 border-green-400/40 text-green-300"}`}>
              {broken ? "Dynamic routing có thể giúp R1 học đường thay thế qua R3 mà không cần admin sửa từng static route." : "R1 có thể đi đến R4 qua R2 hoặc R3, tùy metric của giao thức định tuyến."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoutingProtocolIntro() {
  const protocols = ["RIP", "OSPF", "EIGRP", "IS-IS", "BGP"];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Routing Protocol là gì?" icon={<RadioTower />} />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <ConceptCard title="Routing Protocol" icon={<RadioTower />} color="purple" text="Routing protocol là bộ quy tắc giúp router trao đổi thông tin đường đi với nhau để xây dựng routing table." code="R1: Tôi biết 192.168.1.0/24\nR2: Tôi biết 192.168.2.0/24" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-white font-bold text-xl mb-4">Một số routing protocol phổ biến</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {protocols.map((p, i) => <div key={p} className={`${i === 0 ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : i === 1 ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : i === 4 ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-950 border-slate-800 text-slate-400"} border rounded-2xl p-4 text-center font-black`}>{p}</div>)}
          </div>
          <p className="text-slate-400 text-sm mt-5">Bài này tập trung vào RIP, OSPF và BGP.</p>
        </div>
      </div>
    </section>
  );
}

function StaticVsDynamic() {
  const rows = [
    ["Ai tạo route?", "Admin cấu hình thủ công", "Router tự học qua routing protocol"],
    ["Tự cập nhật khi mạng đổi?", "Không", "Có"],
    ["Phù hợp", "Mạng nhỏ, ít thay đổi", "Mạng vừa/lớn, nhiều router"],
    ["Độ phức tạp", "Đơn giản", "Phức tạp hơn"],
    ["Tài nguyên CPU/RAM", "Ít", "Nhiều hơn"],
    ["Ví dụ", "ip route ...", "RIP, OSPF, BGP"],
  ];
  return <ComparisonTable number="4" title="Dynamic Routing khác Static Routing thế nào?" rows={rows} left="Static Routing" right="Dynamic Routing" leftColor="orange" rightColor="cyan" />;
}

function MetricAndAS() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="Metric và Autonomous System" icon={<Gauge />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Metric" icon={<Gauge />} color="emerald" text="Metric là điểm số giúp router so sánh nhiều đường đến cùng một mạng và chọn đường tốt hơn." code="RIP: hop count\nOSPF: cost\nBGP: path attributes / policy" />
        <ConceptCard title="Autonomous System — AS" icon={<Globe2 />} color="cyan" text="AS là một hệ thống mạng lớn thuộc cùng một tổ chức quản lý và có chính sách định tuyến chung. Mỗi AS có ASN." code="AS100 = ISP A\nAS200 = ISP B\nBGP chạy giữa các AS" />
      </div>
    </section>
  );
}

function NetworkTopology() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Mạng nhiều router và route tự học" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <DiamondTopology />
        <div className="mt-6 grid md:grid-cols-4 gap-3">
          {[
            ["R1", "biết mạng sau R2/R3/R4"],
            ["R2", "biết mạng sau R1/R3/R4"],
            ["R3", "biết mạng sau R1/R2/R4"],
            ["R4", "biết mạng sau R1/R2/R3"],
          ].map(([r, text]) => <InfoBox key={r} title={r} value={text} icon={<Router />} color="blue" />)}
        </div>
      </div>
    </section>
  );
}

function RipSection() {
  const [path, setPath] = useState("a");
  const isA = path === "a";
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="RIP — Routing Information Protocol" icon={<Route />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Distance-vector" icon={<ArrowRight />} color="orange" text="RIP biết đường đi dựa trên distance và vector: khoảng cách là số hop, hướng đi là next-hop." code="Distance = hop count\nVector = next-hop" />
        <ConceptCard title="Hop count" icon={<Gauge />} color="yellow" text="RIP chọn đường có số hop thấp nhất. Link nhanh hay chậm không phải metric chính của RIP." code="2 hop thắng 4 hop" />
        <ConceptCard title="Giới hạn 15 hop" icon={<AlertTriangle />} color="red" text="Route có metric 16 được xem là unreachable, nên RIP không phù hợp mạng lớn." code="16 hop = unreachable" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <button onClick={() => setPath(isA ? "b" : "a")} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${isA ? "bg-orange-500 text-white" : "bg-yellow-500 text-slate-950"}`}>{isA ? "Đường A: 2 hop" : "Đường B: 4 hop"}</button>
            <InfoBox title="RIP chọn gì?" value="RIP chọn đường ít hop hơn, không nhất thiết là đường có băng thông tốt hơn." icon={<Gauge />} color="orange" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><RipVisual path={path} /></div>
        </div>
      </div>
    </section>
  );
}

function RipHowItWorks() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Mỗi router biết mạng connected", text: "R1 biết LAN1, R2 biết các link, R3 biết LAN3.", code: "R1: LAN1\nR2: link R1/R3\nR3: LAN3", color: "cyan", icon: <Database /> },
    { title: "Gửi bảng định tuyến cho hàng xóm", text: "RIP gửi cập nhật định kỳ cho router láng giềng.", code: "R1 → R2: Tôi biết LAN1\nR3 → R2: Tôi biết LAN3", color: "orange", icon: <RadioTower /> },
    { title: "Router cộng thêm hop", text: "Khi học route qua hàng xóm, router tăng metric hop count.", code: "R1 học LAN3 qua R2 = 2 hop", color: "yellow", icon: <Gauge /> },
    { title: "Chọn đường ít hop nhất", text: "Nếu có nhiều đường, RIP chọn route có hop count thấp nhất.", code: "2 hop thắng 4 hop", color: "green", icon: <CheckCircle2 /> },
    { title: "Đưa route vào routing table", text: "Route tốt nhất được đưa vào bảng định tuyến.", code: "R 192.168.3.0/24 [120/2] via R2", color: "blue", icon: <TableProperties /> },
  ];
  return <StepSection number="8" color="orange" title="RIP hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function OspfSection() {
  const [costMode, setCostMode] = useState("low");
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="emerald" title="OSPF — Open Shortest Path First" icon={<Map />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Link-state" icon={<Map />} color="emerald" text="OSPF quảng bá trạng thái liên kết để mỗi router xây dựng bản đồ topology mạng." code="R1 nối R2 cost 10\nR1 nối R3 cost 50" />
        <ConceptCard title="Cost" icon={<Gauge />} color="cyan" text="OSPF chọn đường có tổng cost thấp nhất, thường dựa trên băng thông liên kết." code="10 + 10 = 20\n50 + 10 = 60" />
        <ConceptCard title="Area" icon={<Layers />} color="purple" text="OSPF dùng area để chia mạng lớn thành vùng nhỏ hơn. Area 0 là backbone area." code="Area 1 — Area 0 — Area 2" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <button onClick={() => setCostMode(costMode === "low" ? "high" : "low")} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${costMode === "low" ? "bg-emerald-500 text-white" : "bg-cyan-500 text-white"}`}>{costMode === "low" ? "Đường R1-R2-R4 cost 20" : "Đường R1-R3-R4 cost 60"}</button>
            <InfoBox title="OSPF chọn gì?" value="OSPF không chỉ đếm số router. Nó tính tổng cost theo topology." icon={<Map />} color="emerald" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><OspfCostVisual mode={costMode} /></div>
        </div>
      </div>
    </section>
  );
}

function OspfHowItWorks() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Tìm neighbor bằng Hello", text: "Router gửi Hello để phát hiện router OSPF láng giềng.", code: "R1: Hello, tôi chạy OSPF\nR2: Tôi cũng chạy OSPF", color: "cyan", icon: <RadioTower /> },
    { title: "Trao đổi link-state", text: "Router chia sẻ trạng thái liên kết và cost với nhau.", code: "R1-R2 cost 10\nR2-R4 cost 10", color: "emerald", icon: <Network /> },
    { title: "Xây LSDB", text: "Mỗi router trong area có Link-State Database giống bản đồ mạng.", code: "LSDB = topology map", color: "purple", icon: <Database /> },
    { title: "Chạy SPF/Dijkstra", text: "Mỗi router tự tính đường có tổng cost thấp nhất từ chính nó.", code: "Shortest Path First", color: "orange", icon: <Map /> },
    { title: "Đưa route tốt nhất vào routing table", text: "Route OSPF tốt nhất được thêm vào bảng định tuyến.", code: "O 192.168.4.0/24 [110/20] via ...", color: "green", icon: <TableProperties /> },
  ];
  return <StepSection number="10" color="emerald" title="OSPF hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function BgpSection() {
  const [policy, setPolicy] = useState("a");
  const isA = policy === "a";
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="cyan" title="BGP — Border Gateway Protocol" icon={<Globe2 />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="EGP cho Internet" icon={<Globe2 />} color="cyan" text="BGP dùng để trao đổi route giữa các Autonomous System, như ISP, cloud provider, doanh nghiệp lớn." code="AS100 ---- BGP ---- AS200" />
        <ConceptCard title="Path-vector" icon={<Route />} color="purple" text="BGP quảng bá prefix kèm đường đi qua các AS, ví dụ AS_PATH." code="203.0.113.0/24\nAS_PATH: 100 200 300" />
        <ConceptCard title="Policy-based" icon={<ShieldCheck />} color="orange" text="BGP chọn đường dựa nhiều vào chính sách, không đơn giản là ngắn nhất hay nhanh nhất." code="Ưu tiên ISP rẻ hơn\nTránh AS không mong muốn" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <button onClick={() => setPolicy(isA ? "b" : "a")} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${isA ? "bg-cyan-500 text-white" : "bg-orange-500 text-white"}`}>{isA ? "Policy ưu tiên ISP A" : "Policy ưu tiên ISP B"}</button>
            <InfoBox title="BGP chọn gì?" value="BGP có thể chọn đường theo LOCAL_PREF, AS_PATH, MED, community và policy kinh doanh/kỹ thuật." icon={<ShieldCheck />} color="cyan" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><BgpPolicyVisual policy={policy} /></div>
        </div>
      </div>
    </section>
  );
}

function BgpHowItWorks() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Thiết lập BGP session", text: "Hai router BGP cấu hình neighbor và thiết lập phiên TCP port 179.", code: "neighbor 10.0.0.2 remote-as 200\nTCP port 179", color: "cyan", icon: <RadioTower /> },
    { title: "Trao đổi prefix", text: "Mỗi AS quảng bá các prefix mà nó muốn công bố.", code: "AS100: 203.0.113.0/24\nAS200: 198.51.100.0/24", color: "emerald", icon: <Globe2 /> },
    { title: "Gắn path attributes", text: "Route BGP có AS_PATH, NEXT_HOP, LOCAL_PREF, MED, COMMUNITY...", code: "AS_PATH: 100 200 300", color: "purple", icon: <Code2 /> },
    { title: "Chọn best path", text: "BGP chọn đường tốt nhất theo quy trình và chính sách, không chỉ một metric đơn giản.", code: "Policy > AS_PATH trong nhiều thiết kế", color: "orange", icon: <ShieldCheck /> },
    { title: "Đưa route vào routing table", text: "Nếu route hợp lệ và được chọn, router có thể cài vào routing table.", code: "B 203.0.113.0/24 [20/0] via 10.0.0.2", color: "green", icon: <TableProperties /> },
  ];
  return <StepSection number="12" color="cyan" title="BGP hoạt động từng bước" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function IgpEgpSection() {
  const rows = [
    ["IGP", "Trong một AS/tổ chức", "RIP, OSPF, EIGRP, IS-IS", "Doanh nghiệp, campus, data center nội bộ"],
    ["EGP", "Giữa các AS", "BGP", "Internet, ISP, multi-homing, cloud network lớn"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="purple" title="IGP và EGP" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Nhóm</th><th className="p-4">Phạm vi</th><th className="p-4">Ví dụ</th><th className="p-4">Dùng trong</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([group, scope, examples, use], i) => <tr key={group} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black ${group === "IGP" ? "text-emerald-300" : "text-cyan-300"}`}>{group}</td><td className="p-4 text-slate-300">{scope}</td><td className="p-4 text-slate-300 font-mono">{examples}</td><td className="p-4 text-slate-400">{use}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProtocolCompare() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="blue" title="So sánh RIP, OSPF, BGP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[920px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">RIP</th><th className="p-4 text-emerald-300">OSPF</th><th className="p-4 text-cyan-300">BGP</th></tr></thead>
            <tbody className="text-sm">
              {compareRows.map(([c, rip, ospf, bgp], i) => <tr key={c} className={`${i === compareRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{c}</td><td className="p-4 text-slate-300">{rip}</td><td className="p-4 text-slate-300">{ospf}</td><td className="p-4 text-slate-300">{bgp}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <InfoBox title="RIP nghĩ" value="Tới đích cần đi qua bao nhiêu router?" icon={<Gauge />} color="orange" />
        <InfoBox title="OSPF nghĩ" value="Bản đồ mạng ra sao, đường nào có cost thấp nhất?" icon={<Map />} color="emerald" />
        <InfoBox title="BGP nghĩ" value="Đường nào phù hợp policy giữa các AS?" icon={<ShieldCheck />} color="cyan" />
      </div>
    </section>
  );
}

function ChooseProtocol() {
  const [caseId, setCaseId] = useState("lab");
  const cases = {
    lab: { title: "Mạng lab nhỏ 3 router", answer: "RIP", desc: "Dễ cấu hình, dễ quan sát route, phù hợp học/lab. Production hiện đại ít dùng RIP.", color: "orange", icon: <Gauge /> },
    enterprise: { title: "Doanh nghiệp nhiều chi nhánh", answer: "OSPF", desc: "Hội tụ nhanh, mở rộng tốt, chọn đường theo cost, phù hợp định tuyến nội bộ.", color: "emerald", icon: <Map /> },
    isp: { title: "Công ty kết nối hai ISP", answer: "BGP", desc: "Cần quảng bá prefix public, dự phòng multi-homing và điều khiển route theo policy.", color: "cyan", icon: <Globe2 /> },
  };
  const cur = cases[caseId];
  const c = colorClasses[cur.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="green" title="Tình huống chọn giao thức" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(cases).map(([key, val]) => <button key={key} onClick={() => setCaseId(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${caseId === key ? `${colorClasses[val.color].solid} text-white` : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{val.title}</button>)}
        </div>
        <div className={`${c.bg} ${c.border} border rounded-3xl p-6 grid md:grid-cols-[auto_1fr] gap-5 items-center`}>
          <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring}`}>{React.cloneElement(cur.icon, { size: 32 })}</div>
          <div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Nên dùng</p>
            <h3 className="text-3xl font-bold text-white mb-2">{cur.answer}</h3>
            <p className="text-slate-300 leading-relaxed">{cur.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("route");
  const commands = {
    route: { title: "Xem routing table", cmd: "show ip route", output: "R    192.168.2.0/24 [120/1] via 10.0.12.2\nO    192.168.3.0/24 [110/20] via 10.0.13.2\nB    203.0.113.0/24 [20/0] via 10.0.0.2", note: "R = RIP, O = OSPF, B = BGP, S = Static, C = Connected, L = Local." },
    rip: { title: "Kiểm tra RIP", cmd: "show ip protocols\nshow ip route rip\ndebug ip rip", output: "Routing Protocol is \"rip\"\nSending updates every 30 seconds\nR 192.168.2.0/24 [120/1] via 10.0.12.2", note: "debug có thể gây tải trên thiết bị thật, chỉ dùng cẩn thận trong lab." },
    ospf: { title: "Kiểm tra OSPF", cmd: "show ip ospf neighbor\nshow ip route ospf\nshow ip ospf database", output: "Neighbor ID     Pri   State      Address\n2.2.2.2           1   FULL/DR    10.0.12.2\n\nO 192.168.3.0/24 [110/20] via 10.0.13.2", note: "Neighbor FULL là dấu hiệu OSPF adjacency đã hình thành." },
    bgp: { title: "Kiểm tra BGP", cmd: "show ip bgp summary\nshow ip bgp\nshow ip route bgp", output: "Neighbor        V    AS MsgRcvd MsgSent State/PfxRcd\n10.0.0.2        4   200     120     118       5\n\nB 203.0.113.0/24 [20/0] via 10.0.0.2", note: "show ip bgp summary giúp xem trạng thái BGP neighbor và số prefix nhận được." },
    config: { title: "Cấu hình mẫu", cmd: "# RIP\nrouter rip\n version 2\n network 192.168.1.0\n no auto-summary\n\n# OSPF\nrouter ospf 1\n network 192.168.1.0 0.0.0.255 area 0\n\n# BGP\nrouter bgp 100\n neighbor 10.0.0.2 remote-as 200", output: "RIP / OSPF / BGP basic config examples", note: "Ba giao thức có cách cấu hình và phạm vi sử dụng rất khác nhau." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">dynamic routing lab</span>
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
            <ExplainRow term="show ip route" desc="Xem route đã được cài vào routing table." />
            <ExplainRow term="show ip protocols" desc="Xem routing protocol đang chạy." />
            <ExplainRow term="show ip bgp summary" desc="Xem trạng thái BGP neighbor." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ RIP chọn đường nhanh nhất", desc: "RIP chọn đường ít hop nhất, kể cả đường đó có link chậm hơn.", fix: "RIP metric = hop count." },
    { title: "Nghĩ OSPF chỉ là ít router hơn", desc: "OSPF chọn theo tổng cost, một đường nhiều router nhưng link nhanh vẫn có thể tốt hơn.", fix: "OSPF metric = cost." },
    { title: "Nghĩ BGP luôn chọn đường ngắn nhất", desc: "BGP chọn theo path attributes và policy; AS_PATH ngắn không phải lúc nào cũng thắng.", fix: "BGP là policy-based routing." },
    { title: "Dùng BGP cho mạng nhỏ khi không cần", desc: "Nếu chỉ có vài router nội bộ, BGP thường quá phức tạp.", fix: "Mạng nội bộ thường dùng OSPF hoặc static route." },
    { title: "Quên bảo mật neighbor", desc: "Router lạ có thể tham gia routing domain hoặc quảng bá route sai nếu cấu hình lỏng lẻo.", fix: "Dùng authentication, passive interface, route filtering khi cần." },
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
              <p>Dynamic Routing giúp router tự học và tự cập nhật route.</p>
              <p>Routing Protocol là giao thức để router trao đổi route.</p>
              <p>Metric giúp router chọn đường tốt nhất.</p>
              <p>RIP = distance-vector, dùng hop count.</p>
              <p>RIP giới hạn 15 hop, 16 = unreachable.</p>
              <p>OSPF = link-state, dùng cost và LSDB.</p>
              <p>OSPF phù hợp mạng doanh nghiệp, cần thiết kế area.</p>
              <p>BGP = path-vector, dùng giữa các AS.</p>
              <p>BGP là policy-based, nền tảng Internet.</p>
              <p>RIP/OSPF là IGP; BGP là EGP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Dynamic Routing khác Static Routing ở điểm nào chính?", options: ["Dynamic Routing dùng MAC address thay vì IP", "Router tự học và cập nhật route", "Chỉ dùng trong WiFi", "Không cần routing table"], correct: 1, explanation: "Dynamic routing cho phép router trao đổi thông tin định tuyến, tự học route và tự cập nhật khi mạng thay đổi." },
  { question: "RIP dùng metric nào để chọn đường?", options: ["Băng thông", "Độ trễ", "Hop count", "AS_PATH"], correct: 2, explanation: "RIP dùng hop count, tức số router/hop phải đi qua." },
  { question: "OSPF thuộc loại giao thức nào?", options: ["Distance-vector", "Link-state", "Path-vector", "Name resolution"], correct: 1, explanation: "OSPF là link-state, xây LSDB và chạy SPF/Dijkstra để chọn đường cost thấp nhất." },
  { question: "BGP thường dùng trong phạm vi nào?", options: ["Giữa các AS / Internet", "Chỉ trong một switch", "Chỉ trong Bluetooth", "Chỉ để cấp IP bằng DHCP"], correct: 0, explanation: "BGP là EGP dùng để trao đổi route giữa các Autonomous System, đặc biệt trên Internet." },
  { question: "IGP và EGP khác nhau thế nào?", options: ["IGP dùng trong AS, EGP dùng giữa các AS", "IGP dùng MAC, EGP dùng DNS", "IGP là IPv4, EGP là IPv6", "Không khác nhau"], correct: 0, explanation: "RIP/OSPF là IGP dùng trong một AS/tổ chức; BGP là EGP dùng giữa các AS." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu router chọn đường, bài tiếp theo học NAT & PAT: vì sao private IP vẫn truy cập được Internet.</p>
      <Link to="/phan-5-7" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.7 — NAT & PAT <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="RIP" value="hop count" color="orange" icon={<Gauge />} /><MiniCard title="OSPF" value="cost" color="emerald" icon={<Map />} /><MiniCard title="BGP" value="policy" color="cyan" icon={<Globe2 />} /></div><DiamondTopology compact /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">R 192.168.2.0/24 [120/1]\nO 192.168.3.0/24 [110/20]\nB 203.0.113.0/24 [20/0]</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function DiamondTopology({ broken = false, compact = false }) { return <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[280px]"><div className="absolute left-[8%] top-[42%]"><TopoNode label="R1" color="cyan" /></div><div className="absolute left-[42%] top-[8%]"><TopoNode label="R2" color="orange" /></div><div className="absolute left-[42%] bottom-[8%]"><TopoNode label="R3" color="emerald" /></div><div className="absolute right-[8%] top-[42%]"><TopoNode label="R4" color="purple" /></div><Line x1="18%" y1="48%" x2="43%" y2="20%" color="border-orange-400/60" /><Line x1="18%" y1="58%" x2="43%" y2="78%" color="border-emerald-400/60" /><Line x1="54%" y1="20%" x2="80%" y2="48%" color={broken ? "border-red-500/80 border-dashed" : "border-orange-400/60"} /><Line x1="54%" y1="78%" x2="80%" y2="58%" color="border-emerald-400/60" />{!compact && <><div className="absolute left-[40%] top-[38%] text-xs text-orange-300 font-mono">cost/hop A</div><div className="absolute left-[40%] bottom-[34%] text-xs text-emerald-300 font-mono">cost/hop B</div></>}</div>; }
function TopoNode({ label, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl w-16 h-16 flex flex-col items-center justify-center`}><Router className={c.text} size={22} /><p className="text-white font-bold text-sm mt-1">{label}</p></div>; }
function Line({ x1, y1, x2, y2, color }) { return <div className={`absolute border-t-2 ${color}`} style={{ left: x1, top: y1, width: `calc(${x2} - ${x1})`, transform: `rotate(${parseInt(y2) - parseInt(y1)}deg)`, transformOrigin: "left center" }} />; }
function ComparisonTable({ number, title, rows, left, right, leftColor, rightColor }) { return <section className="space-y-6"><SectionTitle number={number} color="cyan" title={title} icon={<Shuffle />} /><div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-left min-w-[820px]"><thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className={`p-4 ${colorClasses[leftColor].text}`}>{left}</th><th className={`p-4 ${colorClasses[rightColor].text}`}>{right}</th></tr></thead><tbody className="text-sm">{rows.map(([criteria, a, b], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{a}</td><td className="p-4 text-slate-300">{b}</td></tr>)}</tbody></table></div></div></section>; }
function RipVisual({ path }) { const isA = path === "a"; return <div className="space-y-4"><div className="grid grid-cols-5 gap-2 items-center"><TopoNode label="R1" color="cyan" /><ArrowRight className={isA ? "text-orange-300" : "text-slate-600"} /><TopoNode label={isA ? "R2" : "R3"} color={isA ? "orange" : "emerald"} /><ArrowRight className={isA ? "text-orange-300" : "text-emerald-300"} /><TopoNode label="LAN" color="purple" /></div><div className={`${isA ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-yellow-500/10 border-yellow-400/40 text-yellow-300"} border rounded-2xl p-4 font-mono text-sm`}>{isA ? "Đường A: 2 hop → RIP chọn" : "Đường B: 4 hop → RIP không chọn nếu A còn tốt"}</div></div>; }
function OspfCostVisual({ mode }) { const low = mode === "low"; return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><TopoNode label="R1" color="cyan" /><ArrowRight className={low ? "text-emerald-300" : "text-slate-600"} /><TopoNode label={low ? "R2" : "R3"} color={low ? "emerald" : "orange"} /><ArrowRight className={low ? "text-emerald-300" : "text-orange-300"} /><TopoNode label="R4" color="purple" /></div><div className={`${low ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 font-mono text-sm`}>{low ? "R1-R2-R4: 10 + 10 = 20 → OSPF chọn" : "R1-R3-R4: 50 + 10 = 60 → cost cao hơn"}</div></div>; }
function BgpPolicyVisual({ policy }) { const isA = policy === "a"; return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><TopoNode label="Company" color="purple" /><ArrowRight className={isA ? "text-cyan-300" : "text-orange-300"} /><TopoNode label={isA ? "ISP A" : "ISP B"} color={isA ? "cyan" : "orange"} /><ArrowRight className="text-slate-500" /><TopoNode label="Internet" color="emerald" /></div><div className={`${isA ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 font-mono text-sm`}>{isA ? "LOCAL_PREF ưu tiên ISP A\nTraffic chính đi ISP A" : "Policy chuyển ưu tiên sang ISP B\nDùng cho dự phòng/chi phí"}</div></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[340px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
