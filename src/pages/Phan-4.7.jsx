import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  BadgeCheck,
  Binary,
  Radio,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Database,
  DoorOpen,
  EthernetPort,
  Eye,
  Gauge,
  Globe2,
  HardDrive,
  Layers,
  Lock,
  Network,
  Package,
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
  Tags,
  Terminal,
  TrafficCone,
  GitBranch,
  UserRound,
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

const vlanData = [
  { id: 10, name: "KE_TOAN", subnet: "192.168.10.0/24", devices: "PC1, PC2", color: "cyan" },
  { id: 20, name: "NHAN_SU", subnet: "192.168.20.0/24", devices: "PC3, PC4", color: "emerald" },
  { id: 30, name: "GUEST", subnet: "192.168.30.0/24", devices: "WiFi khách", color: "orange" },
  { id: 99, name: "MANAGEMENT", subnet: "192.168.99.0/24", devices: "Quản trị switch", color: "purple" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Network className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.7</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <SwitchIntro />
        <HubVsSwitch />
        <MacTableSection />
        <SwitchHowItWorks />
        <VlanIntro />
        <BroadcastDomainSimulator />
        <AccessTrunkSection />
        <Dot1qTagging />
        <CompanyDesign />
        <NativeVlanSection />
        <VlanSecuritySection />
        <CommonMistakes />
        <CliLab />
        <Part4WrapUp />
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
            <Network size={16} /> Bài cuối Phần 4: Data Link Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Switch
            <span className="block text-cyan-400">& VLAN</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Switch chuyển Ethernet frame dựa trên MAC address. VLAN chia một LAN vật lý thành nhiều LAN logic để giảm broadcast, dễ quản lý và tăng kiểm soát bảo mật.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Switch</span> = học MAC nguồn, chuyển theo MAC đích.</p>
            <p><span className="text-emerald-300">VLAN</span> = broadcast domain riêng.</p>
            <p><span className="text-orange-300">Trunk</span> = mang nhiều VLAN bằng 802.1Q tag.</p>
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
    "Hiểu Switch là gì và khác Hub ra sao.",
    "Biết Switch dùng địa chỉ MAC để chuyển frame như thế nào.",
    "Hiểu MAC address table, Learn, Forward và Flood.",
    "Hiểu VLAN là gì và vì sao cần chia VLAN.",
    "Nắm access port, trunk port, 802.1Q tagging và native VLAN.",
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

function SwitchIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Switch là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">Switch</strong> là thiết bị mạng dùng để kết nối nhiều thiết bị trong cùng mạng LAN.</p>
            <p>Switch hoạt động chủ yếu ở <strong className="text-cyan-300">Layer 2 — Data Link Layer</strong>, nhận Ethernet frame, đọc MAC đích, rồi chuyển frame ra đúng cổng.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>Switch là thiết bị Layer 2 dùng MAC address để chuyển frame trong mạng LAN.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><SwitchLanDiagram /></div>
        </div>
      </div>
    </section>
  );
}

function HubVsSwitch() {
  const [mode, setMode] = useState("switch");
  const isSwitch = mode === "switch";
  const rows = [
    ["Tầng hoạt động", "Layer 1", "Layer 2"],
    ["Cách gửi dữ liệu", "Phát ra tất cả cổng", "Gửi theo MAC đích"],
    ["Hiệu suất", "Thấp", "Cao"],
    ["Collision", "Dễ xảy ra", "Ít hơn rất nhiều"],
    ["Bảo mật", "Kém hơn", "Tốt hơn"],
    ["Hiện nay", "Gần như không dùng", "Rất phổ biến"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Switch khác Hub như thế nào?" icon={<Shuffle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="flex gap-2">
              <button onClick={() => setMode("hub")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${!isSwitch ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Hub</button>
              <button onClick={() => setMode("switch")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${isSwitch ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Switch</button>
            </div>
            <ConceptCard title={isSwitch ? "Switch = lễ tân" : "Hub = hét to giữa phòng"} icon={isSwitch ? <Network /> : <RadioTower />} color={isSwitch ? "cyan" : "orange"} text={isSwitch ? "Switch nhìn địa chỉ MAC đích rồi chuyển frame đến đúng cổng." : "Hub nhận dữ liệu từ một cổng rồi phát ra tất cả cổng còn lại."} code={isSwitch ? "Frame gửi phòng 203 → chuyển đúng phòng 203" : "Ai cần thì nghe!"} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {isSwitch ? <SwitchForwardVisual /> : <HubFloodVisual />}
          </div>
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">Hub</th><th className="p-4 text-cyan-300">Switch</th></tr></thead>
            <tbody className="text-sm">
              {rows.map(([criteria, hub, sw], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{hub}</td><td className="p-4 text-slate-300">{sw}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function MacTableSection() {
  const [learned, setLearned] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="MAC Address Table" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="MAC Address Table" icon={<Database />} color="cyan" text="Bảng giúp switch ghi nhớ MAC address nào nằm ở cổng nào và thuộc VLAN nào." code="MAC → Port → VLAN" />
            <button onClick={() => setLearned(!learned)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${learned ? "bg-green-500 text-white" : "bg-cyan-500 text-white"}`}>{learned ? "Bảng đã học đủ MAC" : "Bảng mới chỉ biết PC1"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MacAddressTable learned={learned} />
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${learned ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"}`}>
              {learned ? "Switch biết từng MAC nằm ở port nào, nên có thể forward đúng cổng." : "Switch chưa biết MAC đích, nên có thể flood trong cùng VLAN."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SwitchHowItWorks() {
  const steps = [
    { title: "Switch nhận frame", text: "Frame đi vào cổng Fa0/1 từ PC1.", code: "Source MAC = AA:AA...\nDestination MAC = BB:BB...", color: "cyan", icon: <Package /> },
    { title: "Học MAC nguồn", text: "Switch ghi nhớ AA:AA... nằm ở Fa0/1. Đây là MAC learning.", code: "AA:AA:AA:AA:AA:AA → Fa0/1", color: "emerald", icon: <Database /> },
    { title: "Tra MAC đích", text: "Switch kiểm tra MAC đích BB:BB... nằm ở cổng nào.", code: "Lookup BB:BB:BB:BB:BB:BB", color: "purple", icon: <Search /> },
    { title: "Forward nếu đã biết", text: "Nếu biết BB:BB... ở Fa0/2, switch chuyển frame ra Fa0/2.", code: "Forward → Fa0/2", color: "green", icon: <ArrowRight /> },
    { title: "Flood nếu chưa biết", text: "Nếu chưa biết MAC đích, switch flood ra các cổng cùng VLAN, trừ cổng nhận frame.", code: "Flood trong cùng VLAN", color: "orange", icon: <Radio /> },
    { title: "Thiết bị đích phản hồi", text: "Khi PC2 trả lời, switch học được BB:BB... nằm ở Fa0/2.", code: "BB:BB:BB:BB:BB:BB → Fa0/2", color: "blue", icon: <CheckCircle2 /> },
  ];
  const [step, setStep] = useState(0);
  return <StepSection number="5" color="green" title="Switch xử lý frame như thế nào?" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function VlanIntro() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="emerald" title="VLAN là gì và vì sao cần VLAN?" icon={<Split />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="VLAN" icon={<Split />} color="emerald" text="Virtual Local Area Network là mạng LAN ảo, giúp chia một switch vật lý thành nhiều mạng logic riêng biệt." code="VLAN 10 = Kế toán\nVLAN 20 = Nhân sự\nVLAN 30 = Khách" />
        <ConceptCard title="Broadcast Domain" icon={<Radio />} color="orange" text="Mỗi VLAN là một broadcast domain riêng. Broadcast của VLAN nào chỉ lan trong VLAN đó." code="Broadcast VLAN 10 ≠ VLAN 20" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <h3 className="text-white font-bold text-xl mb-4">Lợi ích của VLAN</h3>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            ["Giảm broadcast", "Broadcast chỉ lan trong cùng VLAN", "orange"],
            ["Tăng bảo mật", "Tách phòng ban/nhóm người dùng", "red"],
            ["Dễ quản lý", "Mỗi phòng ban một VLAN", "cyan"],
            ["Linh hoạt", "Không phụ thuộc hoàn toàn vị trí vật lý", "emerald"],
            ["Rõ thiết kế", "Dễ kiểm soát luồng dữ liệu", "purple"],
          ].map(([title, text, color]) => <InfoBox key={title} title={title} value={text} icon={<CheckCircle2 />} color={color} />)}
        </div>
      </div>
    </section>
  );
}

function BroadcastDomainSimulator() {
  const [vlanMode, setVlanMode] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="Mô phỏng broadcast domain" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <button onClick={() => setVlanMode(!vlanMode)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${vlanMode ? "bg-emerald-500 text-white" : "bg-orange-500 text-white"}`}>{vlanMode ? "Đang bật VLAN" : "Không chia VLAN"}</button>
            <div className={`rounded-3xl border p-6 ${vlanMode ? "bg-emerald-500/10 border-emerald-400/40" : "bg-orange-500/10 border-orange-400/40"}`}>
              <h3 className="text-white font-bold text-xl mb-3">{vlanMode ? "Broadcast bị giới hạn" : "Broadcast lan toàn switch"}</h3>
              <p className="text-slate-300 leading-relaxed">{vlanMode ? "ARP Request từ PC1 trong VLAN 10 chỉ lan đến các port thuộc VLAN 10." : "Nếu tất cả cùng một LAN, broadcast từ PC1 có thể lan đến PC2, PC3, PC4."}</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><VlanBroadcastVisual vlanMode={vlanMode} /></div>
        </div>
      </div>
    </section>
  );
}

function AccessTrunkSection() {
  const [mode, setMode] = useState("trunk");
  const isTrunk = mode === "trunk";
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Access port và Trunk port" icon={<Cable />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("access")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${!isTrunk ? "bg-cyan-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Access Port</button>
          <button onClick={() => setMode("trunk")} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${isTrunk ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800"}`}>Trunk Port</button>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title={isTrunk ? "Trunk Port" : "Access Port"} icon={isTrunk ? <GitBranch /> : <DoorOpen />} color={isTrunk ? "purple" : "cyan"} text={isTrunk ? "Cổng có thể mang traffic của nhiều VLAN cùng lúc, thường dùng để nối switch-switch, switch-router, switch-firewall hoặc AP nhiều SSID." : "Cổng thuộc về một VLAN duy nhất, thường dùng cho PC, máy in, camera hoặc thiết bị đầu cuối."} code={isTrunk ? "Gi0/1 trunk: VLAN 10,20,30,99" : "Fa0/1 access VLAN 10"} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">{isTrunk ? <TrunkVisual /> : <AccessVisual />}</div>
        </div>
      </div>
    </section>
  );
}

function Dot1qTagging() {
  const [tagged, setTagged] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="802.1Q Tagging" icon={<Tags />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="IEEE 802.1Q" icon={<Tags />} color="green" text="Chuẩn gắn VLAN tag vào Ethernet frame khi nhiều VLAN đi chung trên trunk link." code="Frame thuộc VLAN 20 → Tag VLAN ID 20" />
            <button onClick={() => setTagged(!tagged)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${tagged ? "bg-green-500 text-white" : "bg-slate-700 text-white"}`}>{tagged ? "Frame có 802.1Q Tag" : "Frame thường không tag"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <Dot1qFrame tagged={tagged} />
            <div className={`rounded-2xl border p-4 text-sm ${tagged ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-slate-500/10 border-slate-400/40 text-slate-300"}`}>
              {tagged ? "Trên trunk, tag cho switch biết frame thuộc VLAN nào." : "Khi frame ra access port đến PC, VLAN tag thường được gỡ ra."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyDesign() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="emerald" title="Ví dụ tổng hợp: công ty có 3 phòng ban" icon={<Users />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <CompanyDiagram />
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[720px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Phòng ban</th><th className="p-4">VLAN</th><th className="p-4">Dải IP</th><th className="p-4">Ý nghĩa</th></tr></thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800"><td className="p-4 text-cyan-300 font-bold">Kế toán</td><td className="p-4 text-slate-300">10</td><td className="p-4 text-slate-300 font-mono">192.168.10.0/24</td><td className="p-4 text-slate-400">Tách khỏi khách và phòng ban khác</td></tr>
                <tr className="border-b border-slate-800"><td className="p-4 text-emerald-300 font-bold">Nhân sự</td><td className="p-4 text-slate-300">20</td><td className="p-4 text-slate-300 font-mono">192.168.20.0/24</td><td className="p-4 text-slate-400">Broadcast riêng</td></tr>
                <tr><td className="p-4 text-orange-300 font-bold">Khách</td><td className="p-4 text-slate-300">30</td><td className="p-4 text-slate-300 font-mono">192.168.30.0/24</td><td className="p-4 text-slate-400">Không tự do truy cập nội bộ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function NativeVlanSection() {
  const [mismatch, setMismatch] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="yellow" title="Native VLAN là gì?" icon={<BadgeCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Native VLAN" icon={<BadgeCheck />} color="yellow" text="Trên trunk port, frame thuộc native VLAN thường đi qua trunk không gắn 802.1Q tag." code="Native VLAN = 99\nFrame VLAN 99 → untagged" />
            <button onClick={() => setMismatch(!mismatch)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${mismatch ? "bg-red-500 text-white" : "bg-yellow-500 text-slate-950"}`}>{mismatch ? "Native VLAN mismatch" : "Native VLAN khớp"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <NativeVlanVisual mismatch={mismatch} />
            <div className={`rounded-2xl border p-4 text-sm ${mismatch ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-yellow-500/10 border-yellow-400/40 text-yellow-300"}`}>
              {mismatch ? "Nếu hai đầu trunk cấu hình native VLAN khác nhau, traffic không tag có thể bị hiểu sai VLAN." : "Thiết kế tốt: không dùng VLAN 1 làm native VLAN, dùng VLAN riêng như 99/999 và không gán người dùng cuối vào native VLAN."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VlanSecuritySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="red" title="VLAN có phải bảo mật tuyệt đối không?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <ConceptCard title="VLAN tách Layer 2" icon={<Split />} color="red" text="VLAN giúp chia broadcast domain, nhưng không thay thế firewall. Nếu có routing giữa VLAN, traffic vẫn có thể đi qua." code="VLAN 10 ↔ Router/L3 Switch ↔ VLAN 20" />
          <ConceptCard title="Cần policy" icon={<Lock />} color="green" text="Muốn kiểm soát truy cập thật sự, cần ACL, firewall rule, segmentation policy và monitoring." code="Guest VLAN không được truy cập Internal VLAN" />
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Gán nhầm VLAN cho port", desc: "PC kế toán đáng lẽ ở VLAN 10 nhưng port lại gán VLAN 20 → nhận sai IP hoặc không truy cập được tài nguyên.", fix: "Kiểm tra show vlan brief và cấu hình access vlan." },
    { title: "Trunk không cho VLAN đi qua", desc: "Allowed VLAN chỉ có 10 nhưng cần VLAN 20 → VLAN 20 không liên lạc qua trunk được.", fix: "Kiểm tra show interfaces trunk và allowed vlan." },
    { title: "Native VLAN mismatch", desc: "Switch A native VLAN 99, Switch B native VLAN 1 → traffic untagged bị hiểu sai VLAN.", fix: "Đồng bộ native VLAN hai đầu trunk." },
    { title: "Quên Inter-VLAN Routing", desc: "Tạo VLAN 10 và VLAN 20 nhưng không có router/L3 switch → khác VLAN không ping được nhau.", fix: "Cấu hình router-on-a-stick hoặc Layer 3 switch SVI." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="orange" title="Những lỗi cấu hình VLAN thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500/40 transition-colors"><div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div><h3 className="text-white font-bold text-lg mb-3">{m.title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p><div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div></div>)}
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("create");
  const commands = {
    create: { title: "Tạo VLAN", cmd: "Switch> enable\nSwitch# configure terminal\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name KE_TOAN\nSwitch(config-vlan)# exit\nSwitch(config)# vlan 20\nSwitch(config-vlan)# name NHAN_SU", output: "VLAN 10: KE_TOAN\nVLAN 20: NHAN_SU", note: "Tạo VLAN logic trên switch và đặt tên dễ quản lý." },
    access: { title: "Gán access port", cmd: "Switch(config)# interface fastEthernet 0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10\n\nSwitch(config)# interface fastEthernet 0/2\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 20", output: "Fa0/1 → VLAN 10\nFa0/2 → VLAN 20", note: "Access port thuộc một VLAN duy nhất, thường dùng cho PC/máy in/camera." },
    trunk: { title: "Cấu hình trunk", cmd: "Switch(config)# interface gigabitEthernet 0/1\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk allowed vlan 10,20,30", output: "Gi0/1 trunking\nAllowed VLANs: 10,20,30", note: "Trunk mang nhiều VLAN giữa switch-switch, switch-router hoặc switch-firewall." },
    verify: { title: "Kiểm tra VLAN/trunk/MAC table", cmd: "Switch# show vlan brief\nSwitch# show interfaces trunk\nSwitch# show mac address-table", output: "VLAN Name      Ports\n10   KE_TOAN   Fa0/1\n20   NHAN_SU   Fa0/2\n\nVlan Mac Address       Ports\n10   aaaa.aaaa.aaaa    Fa0/1\n20   bbbb.bbbb.bbbb    Fa0/2", note: "Các lệnh kiểm tra giúp phát hiện gán sai VLAN, trunk thiếu VLAN hoặc MAC table chưa học." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="blue" title="CLI Cisco cơ bản" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">switch vlan lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[340px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p className="text-green-300">{current.cmd}</p>
              <div className="mt-5 text-cyan-300">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="show vlan brief" desc="Xem VLAN và các port access thuộc VLAN." />
            <ExplainRow term="show interfaces trunk" desc="Xem trunk port, native VLAN và allowed VLAN." />
            <ExplainRow term="show mac address-table" desc="Xem switch đã học MAC nào ở port/VLAN nào." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Part4WrapUp() {
  const lessons = [
    ["4.1", "Framing", "Frame là đơn vị dữ liệu Layer 2."],
    ["4.2", "Error Control", "FCS/CRC kiểm tra frame có lỗi không."],
    ["4.3", "Flow Control", "Điều chỉnh tốc độ gửi frame."],
    ["4.4", "HDLC/PPP", "Các giao thức Data Link cụ thể."],
    ["4.5", "MAC & ARP", "MAC định danh trong LAN, ARP tìm MAC từ IPv4."],
    ["4.6", "Ethernet", "LAN có dây dùng frame, MAC, 802.3."],
    ["4.7", "Switch & VLAN", "Switch chuyển frame; VLAN chia LAN logic."],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="purple" title="Tổng kết Phần 4 — Data Link Layer" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid md:grid-cols-7 gap-3 mb-6">
          {lessons.map(([n, title, text]) => <div key={n} className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="text-purple-300 font-black mb-2">Bài {n}</p><p className="text-white font-bold text-sm">{title}</p><p className="text-xs text-slate-500 mt-2 leading-relaxed">{text}</p></div>)}
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-slate-300 leading-relaxed">
          <strong className="text-purple-300">Một câu tổng kết:</strong> Data Link Layer biến packet thành frame, dùng MAC để giao tiếp trong LAN, kiểm soát lỗi/luồng và dùng switch/VLAN để tổ chức mạng LAN hiệu quả.
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">16</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>Switch = thiết bị Layer 2 chuyển Ethernet frame.</p>
              <p>Switch học MAC nguồn để xây MAC address table.</p>
              <p>Switch chuyển frame dựa trên MAC đích.</p>
              <p>Không biết MAC đích → flood trong cùng VLAN.</p>
              <br />
              <p className="text-slate-500"># VLAN</p>
              <p>VLAN = mạng LAN ảo.</p>
              <p>Mỗi VLAN = một broadcast domain riêng.</p>
              <p>Access port = một VLAN.</p>
              <p>Trunk port = nhiều VLAN.</p>
              <p>802.1Q tag = đánh dấu VLAN ID trên trunk.</p>
              <p>Khác VLAN muốn giao tiếp → Inter-VLAN Routing.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Switch thường hoạt động chủ yếu ở tầng nào?", options: ["Layer 1 — Physical", "Layer 2 — Data Link", "Layer 3 — Network", "Layer 7 — Application"], correct: 1, explanation: "Switch Ethernet thông thường hoạt động chủ yếu ở Layer 2 và chuyển frame dựa trên MAC address." },
  { question: "Switch dùng bảng nào để biết MAC address nằm ở cổng nào?", options: ["Routing table", "ARP cache", "MAC address table", "DNS table"], correct: 2, explanation: "MAC address table là bảng switch dùng để ghi nhớ MAC nào nằm ở port nào và VLAN nào." },
  { question: "Nếu switch chưa biết MAC đích, nó thường làm gì?", options: ["Flood frame trong cùng VLAN, trừ cổng nhận", "Xóa frame ngay lập tức", "Gửi frame ra Internet", "Đổi MAC đích thành broadcast IP"], correct: 0, explanation: "Unknown unicast thường được flood trong cùng VLAN, nhưng không gửi ngược lại cổng nhận frame." },
  { question: "Access port là gì?", options: ["Cổng thuộc một VLAN duy nhất", "Cổng luôn mang tất cả VLAN", "Cổng chỉ dùng để cấp nguồn", "Cổng chỉ dành cho router Internet"], correct: 0, explanation: "Access port là cổng dành cho thiết bị đầu cuối và thường thuộc một VLAN duy nhất." },
  { question: "VLAN 10 và VLAN 20 muốn giao tiếp với nhau thì cần gì?", options: ["Chỉ cần switch Layer 2", "Inter-VLAN Routing qua router hoặc Layer 3 switch", "Chỉ cần ARP broadcast", "Chỉ cần đổi dây mạng"], correct: 1, explanation: "Khác VLAN là khác broadcast domain; muốn giao tiếp cần Layer 3 routing giữa VLAN." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành Phần 4!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bạn đã hoàn thành Phần 4. Bài tiếp theo chuyển lên Network Layer, nơi dữ liệu đi qua nhiều mạng bằng địa chỉ IP.</p>
      <Link to="/phan-5-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.1 — Địa chỉ IPv4: Cấu trúc & phân lớp <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function StepSection({ number, color, title, icon, steps, step, setStep }) {
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Source MAC → học vào MAC table\nDestination MAC → tra cổng để forward\nKhông biết đích → flood trong VLAN</div><div className="grid grid-cols-3 gap-3"><MiniCard title="Learn" value="MAC nguồn" color="cyan" icon={<Database />} /><MiniCard title="Forward" value="MAC đích" color="green" icon={<ArrowRight />} /><MiniCard title="Flood" value="Unknown" color="orange" icon={<Broadcast />} /></div><div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-emerald-300 font-mono text-sm">VLAN 10 ≠ VLAN 20</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function SwitchLanDiagram() { return <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC1" sub="Fa0/1" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="Switch" sub="Layer 2" color="purple" icon={<Network />} /><ArrowRight className="text-slate-500" /><Node label="PC3" sub="Fa0/3" color="emerald" icon={<Server />} /></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function SwitchForwardVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC1" sub="send" color="cyan" icon={<Server />} /><ArrowRight className="text-cyan-300" /><Node label="Switch" sub="MAC lookup" color="purple" icon={<Network />} /><ArrowRight className="text-green-300" /><Node label="PC3" sub="receive" color="emerald" icon={<Server />} /></div><div className="font-mono text-sm bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-green-300">Destination MAC = PC3\n→ Forward đúng cổng PC3</div></div>; }
function HubFloodVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC1" sub="send" color="cyan" icon={<Server />} /><ArrowRight className="text-orange-300" /><Node label="Hub" sub="repeat" color="orange" icon={<RadioTower />} /><ArrowRight className="text-orange-300" /><Node label="All PCs" sub="hear" color="red" icon={<Users />} /></div><div className="font-mono text-sm bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300">Hub nhận từ PC1\n→ phát ra tất cả cổng còn lại</div></div>; }
function MacAddressTable({ learned }) { const rows = learned ? [["AA:AA:AA:AA:AA:AA", "Fa0/1", "10"], ["BB:BB:BB:BB:BB:BB", "Fa0/2", "10"], ["CC:CC:CC:CC:CC:CC", "Fa0/3", "20"]] : [["AA:AA:AA:AA:AA:AA", "Fa0/1", "10"]]; return <div className="overflow-x-auto"><table className="w-full text-left min-w-[520px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">MAC Address</th><th className="p-3">Port</th><th className="p-3">VLAN</th></tr></thead><tbody>{rows.map(([mac, port, vlan]) => <tr key={mac} className="border-b border-slate-800 last:border-0"><td className="p-3 text-green-300 font-mono">{mac}</td><td className="p-3 text-slate-300 font-mono">{port}</td><td className="p-3 text-cyan-300 font-mono">{vlan}</td></tr>)}</tbody></table></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function VlanBroadcastVisual({ vlanMode }) { const pcs = vlanMode ? [["PC1", "VLAN 10", "cyan", true], ["PC2", "VLAN 10", "cyan", true], ["PC3", "VLAN 20", "emerald", false], ["PC4", "VLAN 20", "emerald", false]] : [["PC1", "LAN", "orange", true], ["PC2", "LAN", "orange", true], ["PC3", "LAN", "orange", true], ["PC4", "LAN", "orange", true]]; return <div className="space-y-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-3">{pcs.map(([name, vlan, color, hit]) => <div key={name} className={`${colorClasses[color].bg} ${hit ? colorClasses[color].border : "border-slate-800"} border rounded-2xl p-4 text-center opacity-${hit ? "100" : "45"}`}><Server className={`${colorClasses[color].text} mx-auto mb-2`} /><p className="text-white font-bold">{name}</p><p className="text-xs text-slate-500">{vlan}</p><p className={`text-xs mt-2 ${hit ? colorClasses[color].text : "text-slate-600"}`}>{hit ? "Nhận broadcast" : "Không nhận"}</p></div>)}</div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300">PC1 gửi ARP Broadcast\n{vlanMode ? "→ chỉ VLAN 10 nhận" : "→ toàn bộ LAN nhận"}</div></div>; }
function AccessVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="PC Kế toán" sub="untagged" color="cyan" icon={<Server />} /><ArrowRight className="text-cyan-300" /><Node label="Fa0/1" sub="Access VLAN 10" color="cyan" icon={<DoorOpen />} /></div><div className="font-mono text-sm bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300">switchport mode access\nswitchport access vlan 10</div></div>; }
function TrunkVisual() { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="Switch A" sub="VLAN 10/20/30" color="purple" icon={<Network />} /><ArrowRight className="text-purple-300" /><Node label="Switch B" sub="trunk" color="purple" icon={<Network />} /></div><div className="font-mono text-sm bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-purple-300">switchport mode trunk\nswitchport trunk allowed vlan 10,20,30</div></div>; }
function Dot1qFrame({ tagged }) { return <div className="overflow-x-auto"><div className={`min-w-[760px] grid gap-2 font-mono text-xs`} style={{ gridTemplateColumns: tagged ? "1.1fr 1.1fr 1fr 0.9fr 1.1fr 0.6fr" : "1.1fr 1.1fr 0.9fr 1.1fr 0.6fr" }}>{tagged ? ["MAC Đích", "MAC Nguồn", "802.1Q Tag\nVLAN 20", "Type", "Data", "FCS"].map((x, i) => <div key={i} className={`${i === 2 ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-slate-900 border-slate-800 text-slate-300"} border rounded-2xl p-4 text-center whitespace-pre-wrap`}>{x}</div>) : ["MAC Đích", "MAC Nguồn", "Type", "Data", "FCS"].map((x, i) => <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-slate-300">{x}</div>)}</div></div>; }
function CompanyDiagram() { return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto"><div className="min-w-[760px] grid grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-4 items-center"><Node label="Router / L3 Switch" sub="Inter-VLAN Routing" color="orange" icon={<Router />} /><ArrowRight className="text-purple-300" /><Node label="Switch" sub="Trunk uplink" color="purple" icon={<Network />} /><ArrowRight className="text-slate-500" /><div className="space-y-2"><MiniPort label="Fa0/1" vlan="VLAN 10 Kế toán" color="cyan" /><MiniPort label="Fa0/2" vlan="VLAN 10 Máy in" color="cyan" /><MiniPort label="Fa0/3" vlan="VLAN 20 Nhân sự" color="emerald" /><MiniPort label="Fa0/4" vlan="VLAN 30 WiFi Khách" color="orange" /></div></div></div>; }
function MiniPort({ label, vlan, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-xl px-3 py-2 text-sm`}><span className={`${c.text} font-mono font-bold`}>{label}</span><span className="text-slate-400 ml-2">{vlan}</span></div>; }
function NativeVlanVisual({ mismatch }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><Node label="Switch A" sub={mismatch ? "Native 99" : "Native 99"} color={mismatch ? "red" : "yellow"} icon={<Network />} /><ArrowRight className={mismatch ? "text-red-300" : "text-yellow-300"} /><Node label="Switch B" sub={mismatch ? "Native 1" : "Native 99"} color={mismatch ? "red" : "yellow"} icon={<Network />} /></div><div className={`font-mono text-sm rounded-2xl p-4 border ${mismatch ? "bg-red-500/10 border-red-400/40 text-red-300" : "bg-yellow-500/10 border-yellow-400/40 text-yellow-300"}`}>{mismatch ? "Native VLAN mismatch\nTraffic untagged có thể bị hiểu sai VLAN" : "Native VLAN khớp\nFrame native đi trunk không tag"}</div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
