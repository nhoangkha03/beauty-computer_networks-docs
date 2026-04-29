import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Bot,
  Bug,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  FileCode2,
  FileSearch,
  Filter,
  Fingerprint,
  Globe2,
  HardDrive,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Network,
  Radar,
  RefreshCw,
  Route,
  Router,
  Search,
  Server,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Skull,
  Split,
  Terminal,
  TrafficCone,
  UserCheck,
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

const idsIpsRows = [
  ["Tên đầy đủ", "Intrusion Detection System", "Intrusion Prevention System"],
  ["Mục tiêu chính", "Phát hiện, cảnh báo", "Phát hiện và chặn"],
  ["Vị trí xử lý", "Thường quan sát thụ động", "Thường đặt inline trên luồng mạng"],
  ["Ảnh hưởng traffic", "Ít ảnh hưởng trực tiếp", "Có thể làm chậm/chặn traffic"],
  ["Khi phát hiện tấn công", "Gửi alert/log", "Drop packet, reset connection, block source"],
  ["Rủi ro nếu cấu hình sai", "Cảnh báo nhiễu", "Có thể chặn nhầm traffic hợp lệ"],
];

const actionRows = [
  ["Ghi log", "Có", "Có", "blue"],
  ["Gửi alert", "Có", "Có", "cyan"],
  ["Drop packet", "Thường không", "Có", "red"],
  ["Reset connection", "Thường không", "Có", "orange"],
  ["Block source IP", "Gián tiếp/tích hợp", "Có", "purple"],
  ["Cô lập host", "Qua tích hợp hệ thống khác", "Có thể", "green"],
];

const toolRows = [
  ["Snort", "IDS/IPS mã nguồn mở nổi tiếng", "Dùng rule/signature, chạy IDS hoặc IPS tùy cấu hình", "orange"],
  ["Suricata", "IDS/IPS mã nguồn mở hiện đại", "Multi-thread tốt, phân tích nhiều giao thức, log JSON/EVE", "cyan"],
  ["Zeek", "Network security monitoring", "Ghi log HTTP, DNS, TLS, connection; mạnh cho điều tra", "purple"],
  ["Wazuh / OSSEC", "HIDS/SIEM agent", "Log hệ thống, file integrity, rootkit, policy compliance", "green"],
];

const placementRows = [
  ["Sau firewall biên", "Phân tích traffic đã được firewall cho qua, phát hiện tấn công dịch vụ public", "cyan"],
  ["Giữa DMZ và LAN", "Nếu web server bị chiếm, phát hiện/chặn truy cập sâu vào LAN/database", "purple"],
  ["Trong mạng nội bộ", "Phát hiện lateral movement, malware nội bộ, quét port nội bộ", "orange"],
  ["Trên host quan trọng", "Giám sát file, process, đăng nhập và thay đổi cấu hình trên server nhạy cảm", "green"],
];

const compareSecurityRows = [
  ["Firewall", "Cho phép/chặn dựa trên rule IP, port, protocol, app", "Chỉ cho Internet vào Web Server port 443", "cyan"],
  ["IDS", "Phát hiện và cảnh báo hành vi đáng ngờ", "Cảnh báo port scan", "orange"],
  ["IPS", "Phát hiện và chặn hành vi đáng ngờ", "Drop request SQL Injection", "red"],
  ["WAF", "Bảo vệ ứng dụng web ở tầng HTTP", "Chặn XSS, SQL Injection trong form", "purple"],
];

const deploymentNotes = [
  ["Cập nhật signature", "Signature cũ dễ bỏ sót tấn công mới; signature mới nhận diện tốt hơn.", "cyan", <Fingerprint />],
  ["Tuning giảm alert nhiễu", "Không thể bật mọi rule mức cao rồi mong không có cảnh báo giả.", "orange", <Settings />],
  ["IPS có thể chặn nhầm", "Nên chạy monitor trước, phân tích false positive rồi mới bật block cho rule chắc chắn.", "red", <ShieldAlert />],
  ["Traffic mã hóa là thách thức", "HTTPS/TLS làm NIDS khó thấy payload nếu không có giải pháp phù hợp.", "purple", <Lock />],
  ["Kết hợp SIEM/SOC", "Gom IDS, firewall, server log, EDR để tạo incident rõ hơn.", "green", <Database />],
  ["Vẫn cần con người điều tra", "Alert không đồng nghĩa 100% là tấn công thật; cần xác minh ngữ cảnh.", "blue", <UserCheck />],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Radar className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 9: Bảo mật mạng — Network Security</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 9.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <IdsSection />
        <IpsSection />
        <IdsVsIpsSection />
        <PassiveInlineSection />
        <SignatureSection />
        <AnomalySection />
        <RealWorldExamples />
        <TechnicalExample />
        <PassiveDiagram />
        <InlineDiagram />
        <FirewallIdsIpsWafTable />
        <IdsIpsProcess />
        <FalsePositiveNegativeSection />
        <NetworkHostSection />
        <PlacementSection />
        <FirewallRelationshipSection />
        <ToolsSection />
        <DeploymentNotesSection />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> Network Security — Detection & Prevention
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            IDS & IPS
            <span className="block text-cyan-400">Phát hiện & ngăn chặn xâm nhập</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            IDS quan sát và cảnh báo khi có dấu hiệu xâm nhập. IPS có thể đứng inline để chặn lưu lượng nguy hiểm trước khi nó đến hệ thống đích.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">IDS</span> = phát hiện và cảnh báo.</p>
            <p><span className="text-red-300">IPS</span> = phát hiện và có thể chặn.</p>
            <p><span className="text-cyan-300">Signature</span> = mẫu tấn công đã biết; <span className="text-purple-300">Anomaly</span> = hành vi bất thường.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroIdsIpsVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu IDS là gì và dùng để phát hiện tấn công mạng như thế nào.",
    "Hiểu IPS là gì và khác IDS ở điểm nào.",
    "Phân biệt Network IDS/IPS và Host IDS/IPS.",
    "Nắm signature, anomaly detection, false positive, false negative, inline mode, passive mode.",
    "Biết IDS/IPS nằm ở đâu trong kiến trúc mạng và phối hợp với firewall ra sao.",
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

function IdsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="orange" title="IDS là gì?" icon={<Radar />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-orange-300">IDS</strong> là viết tắt của <strong>Intrusion Detection System</strong>, nghĩa là hệ thống phát hiện xâm nhập.</p>
            <ConceptCard title="Quan sát → Phân tích → Cảnh báo" icon={<Bell />} color="orange" text="IDS giống camera an ninh hoặc chuông báo động. Nó quan sát lưu lượng mạng hoặc hành vi hệ thống để phát hiện dấu hiệu bất thường/tấn công, nhưng thường không chặn trực tiếp." code="Một máy trong mạng bị quét port liên tục
→ IDS phát hiện dấu hiệu scan
→ IDS gửi cảnh báo cho quản trị viên" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <IdsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function IpsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="red" title="IPS là gì?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Quan sát → Phân tích → Chặn" icon={<ShieldAlert />} color="red" text="IPS là viết tắt của Intrusion Prevention System. IPS không chỉ phát hiện, mà còn có thể tự động chặn lưu lượng nguy hiểm." code="Attacker gửi request có dấu hiệu SQL Injection
→ IPS nhận diện
→ IPS chặn request trước khi đến web server" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <IpsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function IdsVsIpsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="IDS khác IPS như thế nào?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[780px] text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">IDS</th><th className="p-4 text-red-300">IPS</th></tr></thead>
            <tbody>{idsIpsRows.map(([criteria, ids, ips], i) => <tr key={criteria} className={`${i === idsIpsRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{ids}</td><td className="p-4 text-slate-300">{ips}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm">IDS báo động; IPS vừa báo động vừa có thể chặn.</div>
    </section>
  );
}

function PassiveInlineSection() {
  const [mode, setMode] = useState("passive");
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Passive mode và Inline mode" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "passive" ? "Passive mode" : "Inline mode"} icon={mode === "passive" ? <Eye /> : <ShieldAlert />} color={mode === "passive" ? "orange" : "red"} text={mode === "passive" ? "Thiết bị chỉ nghe bản sao lưu lượng, không nằm trực tiếp trên đường đi chính. Phù hợp với IDS vì quan sát mà không làm gián đoạn đường truyền." : "Thiết bị nằm trực tiếp trên đường truyền. Traffic phải đi qua nó. Phù hợp với IPS vì có thể can thiệp trực tiếp vào luồng traffic."} code={mode === "passive" ? `Client ---- Firewall ---- Server
              |
              | bản sao traffic
              v
             IDS` : `Client ---- Firewall ---- IPS ---- Server`} />
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton active={mode === "passive"} onClick={() => setMode("passive")} color="orange">Passive</ChoiceButton>
              <ChoiceButton active={mode === "inline"} onClick={() => setMode("inline")} color="red">Inline</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "passive" ? <PassiveVisual /> : <InlineVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Signature là gì?" icon={<Fingerprint />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mẫu nhận diện tấn công đã biết" icon={<Fingerprint />} color="blue" text="Signature là dấu hiệu/mẫu giúp IDS/IPS nhận ra tấn công đã biết. Giống camera có danh sách biển số xe bị truy nã: thấy khớp thì báo động." code="Nếu request có mẫu giống SQL Injection
Nếu packet giống malware callback
Nếu traffic giống port scan
Nếu payload giống exploit đã biết
→ cảnh báo hoặc chặn" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <MiniFlowNode title="SQL Injection" desc="' OR '1'='1" color="red" icon={<Database />} />
          <MiniFlowNode title="XSS" desc="<script>" color="orange" icon={<FileCode2 />} />
          <MiniFlowNode title="Path traversal" desc="../../etc/passwd" color="purple" icon={<FileSearch />} />
          <MiniFlowNode title="Port scan" desc="nhiều port trong thời gian ngắn" color="cyan" icon={<Search />} />
        </div>
      </div>
    </section>
  );
}

function AnomalySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Anomaly Detection là gì?" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Phát hiện hành vi bất thường" icon={<AlertTriangle />} color="purple" text="Anomaly Detection học hoặc cấu hình bình thường là gì, rồi cảnh báo khi hành vi lệch khỏi bình thường. Nó có thể phát hiện hành vi mới chưa có signature cụ thể." code="Bình thường: máy kế toán truy cập 5 website/giờ
Bất thường: máy đó gửi hàng nghìn kết nối ra ngoài trong 1 phút

Bình thường: server chỉ nhận HTTPS 443
Bất thường: server gửi dữ liệu lớn đến IP lạ" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <AnomalyVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Ví dụ đời sống" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Camera an ninh và bảo vệ" icon={<Camera />} color="green" text="IDS giống camera an ninh: thấy người leo rào thì phát cảnh báo. IPS giống bảo vệ đứng ngay cổng: người lạ cố vào thì có thể chặn lại ngay." code="Camera thấy người leo rào → cảnh báo = IDS
Bảo vệ chặn tại cổng → ngăn lại = IPS" />
        <ConceptCard title="Máy soi hành lý sân bay" icon={<Search />} color="orange" text="IDS/IPS soi hành lý mạng, tức packet/request. Nếu chỉ báo động cho nhân viên là IDS; nếu cổng tự khóa không cho hành lý đi tiếp là IPS." code="Packet bình thường → cho qua hoặc không cảnh báo
Packet có dấu hiệu exploit → cảnh báo/chặn" />
      </div>
    </section>
  );
}

function TechnicalExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Ví dụ kỹ thuật: request SQL Injection" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Request bình thường và request đáng ngờ" icon={<Code2 />} color="cyan" text="Một web server nhận request bình thường. Nếu request chứa mẫu đáng ngờ như OR 1=1, IDS/IPS có thể nhận diện đây là dấu hiệu SQL Injection." code="Bình thường:
GET /product?id=10 HTTP/1.1
Host: shop.example.com

Đáng ngờ:
GET /product?id=10%20OR%201=1 HTTP/1.1
Host: shop.example.com

IDS → ghi log và cảnh báo
IPS → chặn request trước khi đến web server" />
          <SqlInjectionVisual />
        </div>
      </div>
    </section>
  );
}

function PassiveDiagram() {
  return <DiagramSection number="10" color="orange" title="Sơ đồ IDS ở chế độ quan sát" icon={<Eye />} diagram={<PassiveVisual />} note="IDS thường nhận bản sao lưu lượng qua SPAN port, TAP hoặc mirror traffic. IDS phát hiện và cảnh báo nhưng không chặn trực tiếp packet đang đi." />;
}

function InlineDiagram() {
  return <DiagramSection number="11" color="red" title="Sơ đồ IPS đặt inline" icon={<ShieldAlert />} diagram={<InlineVisual />} note="Vì IPS nằm trực tiếp trên đường đi, nếu IPS lỗi hoặc cấu hình sai có thể ảnh hưởng kết nối. Đổi lại, IPS có thể chặn ngay traffic nguy hiểm." />;
}

function DiagramSection({ number, color, title, icon, diagram, note }) {
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        {diagram}
        <div className={`mt-6 ${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 text-sm ${colorClasses[color].text}`}>{note}</div>
      </div>
    </section>
  );
}

function FirewallIdsIpsWafTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="Bảng so sánh Firewall, IDS, IPS, WAF" icon={<Shield />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px] text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thành phần</th><th className="p-4">Vai trò chính</th><th className="p-4">Ví dụ</th></tr></thead>
            <tbody>{compareSecurityRows.map(([name, role, ex, color], i) => <tr key={name} className={`${i === compareSecurityRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black ${colorClasses[color].text}`}>{name}</td><td className="p-4 text-slate-300">{role}</td><td className="p-4 text-green-300">{ex}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm">Firewall kiểm soát cửa ra vào; IDS phát hiện bất thường; IPS chủ động chặn tấn công.</div>
    </section>
  );
}

function IdsIpsProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Thu thập dữ liệu", text: "IDS/IPS cần dữ liệu để phân tích: packet, flow, log hệ thống, log ứng dụng, sự kiện đăng nhập, DNS query, HTTP request.", code: `Source IP
Destination IP
Port
Protocol
Payload
Tần suất kết nối
Dung lượng truyền`, color: "cyan", icon: <Database /> },
    { title: "Phân tích theo signature", text: "So sánh traffic với bộ mẫu tấn công đã biết. Nếu khớp signature, IDS alert còn IPS block/drop/reset và alert.", code: `Apache Struts exploit
Malware beaconing
SQL Injection payload
Path traversal ../../`, color: "blue", icon: <Fingerprint /> },
    { title: "Phân tích bất thường", text: "So sánh hành vi hiện tại với baseline bình thường để phát hiện hành vi lạ.", code: `Máy A thường gửi 100MB/ngày
Hôm nay gửi 20GB ra IP lạ

Máy A quét port toàn LAN
Máy A truy cập nhiều domain mới tạo`, color: "purple", icon: <AlertTriangle /> },
    { title: "Sinh cảnh báo hoặc hành động", text: "IDS/IPS có thể ghi log, gửi alert, drop packet, reset connection, block source IP hoặc cô lập host tùy hệ thống.", code: `Alert: Possible SQL Injection
Source: 203.0.113.50
Destination: 10.0.1.10
Port: 443
Severity: High
Action: Blocked`, color: "red", icon: <Siren /> },
    { title: "Quản trị viên điều tra", text: "Alert không phải lúc nào cũng chắc chắn là tấn công thật. Admin/SOC cần kiểm tra log, nguồn, đích, request và hành động xử lý.", code: `Alert này có chính xác không?
Nguồn tấn công là ai?
Đích là server nào?
Có request nào lọt qua không?
Cần vá lỗi hoặc chặn IP không?`, color: "green", icon: <UserCheck /> },
  ];
  return <StepSection number="13" color="cyan" title="Cơ chế hoạt động của IDS/IPS" icon={<Radar />} steps={steps} step={step} setStep={setStep} />;
}

function FalsePositiveNegativeSection() {
  const [mode, setMode] = useState("positive");
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="yellow" title="False Positive và False Negative" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "positive" ? "False Positive" : "False Negative"} icon={mode === "positive" ? <Bell /> : <XCircle />} color={mode === "positive" ? "yellow" : "red"} text={mode === "positive" ? "False positive là cảnh báo nhầm: tưởng có tấn công nhưng thực tế không phải. Nó làm đội vận hành mệt vì quá nhiều cảnh báo và có thể khiến IPS chặn nhầm người dùng thật." : "False negative là bỏ sót tấn công: có nguy hiểm thật nhưng hệ thống không phát hiện. Đây thường nguy hiểm hơn vì attacker có thể âm thầm tồn tại trong mạng."} code={mode === "positive" ? `Một request hợp lệ bị báo SQL Injection
Admin scan mạng để kiểm kê tài sản nhưng IDS báo attacker` : `Attacker khai thác lỗ hổng mới
IDS không có signature
Không có cảnh báo nào được sinh ra`} />
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton active={mode === "positive"} onClick={() => setMode("positive")} color="yellow">False Positive</ChoiceButton>
              <ChoiceButton active={mode === "negative"} onClick={() => setMode("negative")} color="red">False Negative</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "positive" ? <FalsePositiveVisual /> : <FalseNegativeVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkHostSection() {
  const [mode, setMode] = useState("nids");
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="emerald" title="Network IDS/IPS và Host IDS/IPS" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "nids" ? "Network IDS/IPS — NIDS/NIPS" : "Host IDS/IPS — HIDS/HIPS"} icon={mode === "nids" ? <Network /> : <HardDrive />} color={mode === "nids" ? "cyan" : "green"} text={mode === "nids" ? "NIDS/NIPS quan sát lưu lượng trên mạng: giữa Internet và DMZ, giữa DMZ và LAN, trước server quan trọng, trong core network hoặc cloud VPC/VNet." : "HIDS/HIPS chạy trực tiếp trên máy chủ hoặc máy trạm, quan sát file hệ thống, process, registry, log đăng nhập, hành vi chương trình và thay đổi cấu hình."} code={mode === "nids" ? `Ưu: quan sát nhiều thiết bị cùng lúc
Phát hiện scan, exploit, malware traffic

Nhược: traffic mã hóa khó thấy payload
Có thể bỏ sót hành vi bên trong máy
Cần đặt đúng vị trí` : `Ưu: thấy hành vi bên trong máy
Hữu ích khi traffic mã hóa
Phát hiện file/process/privilege escalation

Nhược: cần agent trên từng host
Có thể bị attacker cố tắt
Cần quản lý tài nguyên/agent`} />
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton active={mode === "nids"} onClick={() => setMode("nids")} color="cyan">NIDS/NIPS</ChoiceButton>
              <ChoiceButton active={mode === "hids"} onClick={() => setMode("hids")} color="green">HIDS/HIPS</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "nids" ? <NidsVisual /> : <HidsVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlacementSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="blue" title="IDS/IPS nên đặt ở đâu?" icon={<MapIcon />} />
      <div className="grid md:grid-cols-2 gap-4">
        {placementRows.map(([title, desc, color]) => <ConceptCard key={title} title={title} icon={title.includes("host") || title.includes("Host") ? <HardDrive /> : title.includes("DMZ") ? <Split /> : title.includes("nội bộ") ? <Network /> : <Shield />} color={color} text={desc} code={getPlacementCode(title)} />)}
      </div>
    </section>
  );
}

function FirewallRelationshipSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="orange" title="IDS/IPS có thay thế firewall không?" icon={<Shield />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Không. Vai trò khác nhau." icon={<Shield />} color="orange" text="Firewall kiểm soát truy cập; IDS/IPS phát hiện và phản ứng với hành vi tấn công. Port 443 phải mở vì website cần hoạt động, nhưng attacker vẫn có thể gửi SQL Injection qua chính port 443." code="Firewall:
Chỉ cho phép Internet vào Web Server qua TCP 443.

IDS:
Phát hiện request đáng ngờ đi qua TCP 443.

IPS:
Chặn request đáng ngờ nếu thấy nguy hiểm." />
          <FirewallRelationshipVisual />
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const [active, setActive] = useState("Suricata");
  const row = toolRows.find(([name]) => name === active) || toolRows[1];
  const [, role, note, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="purple" title="Một số công cụ IDS/IPS phổ biến" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {toolRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<Terminal />} color={color} text={role} code={note} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Công cụ</th><th className="p-4">Loại</th><th className="p-4">Đặc điểm</th></tr></thead>
              <tbody>{toolRows.map(([name, role, note, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === toolRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{role}</td><td className="p-4 text-green-300">{note}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploymentNotesSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="yellow" title="Lưu ý khi triển khai IDS/IPS" icon={<Settings />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deploymentNotes.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ IDS/IPS thay thế firewall", desc: "Firewall kiểm soát truy cập theo rule; IDS/IPS phân tích hành vi tấn công sâu hơn. Hai lớp này bổ sung nhau.", fix: "Dùng firewall + IDS/IPS/WAF theo đúng vai trò." },
    { title: "Bật IPS block ngay cho mọi rule", desc: "IPS chặn trực tiếp nên false positive có thể làm gián đoạn người dùng thật hoặc dịch vụ thật.", fix: "Chạy monitor trước, tune rule, rồi bật block chọn lọc." },
    { title: "Không cập nhật signature", desc: "Signature cũ khiến hệ thống kém nhận diện tấn công mới và exploit mới.", fix: "Cập nhật rule/signature thường xuyên." },
    { title: "Không xử lý alert", desc: "IDS/IPS chỉ sinh tín hiệu. Không có quy trình điều tra thì cảnh báo sẽ bị bỏ qua.", fix: "Đưa alert vào SIEM/SOC hoặc quy trình phản ứng sự cố." },
    { title: "Quên traffic mã hóa", desc: "NIDS khó thấy payload trong HTTPS/TLS nếu không có WAF, TLS inspection, HIDS/EDR hoặc log server phù hợp.", fix: "Kết hợp network + host + app logs." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="20" color="red" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-red-500/40 transition-colors"><div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div><h3 className="text-white font-bold text-lg mb-3">{m.title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p><div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div></div>)}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">21</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>IDS = Intrusion Detection System, phát hiện và cảnh báo xâm nhập.</p>
              <p>IPS = Intrusion Prevention System, phát hiện và có thể chặn xâm nhập.</p>
              <p>IDS thường passive; IPS thường inline.</p>
              <p>Signature là mẫu tấn công đã biết.</p>
              <p>Anomaly detection phát hiện hành vi bất thường so với baseline.</p>
              <p>False positive là cảnh báo nhầm.</p>
              <p>False negative là bỏ sót tấn công.</p>
              <p>NIDS/NIPS quan sát lưu lượng mạng.</p>
              <p>HIDS/HIPS quan sát hành vi bên trong host.</p>
              <p>Firewall kiểm soát truy cập; IDS/IPS phát hiện và phản ứng với tấn công.</p>
              <p>Traffic mã hóa làm NIDS khó nhìn payload.</p>
              <p>IDS/IPS cần tuning, cập nhật signature và quy trình điều tra.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "IDS khác IPS ở điểm chính nào?", options: ["IDS chủ yếu phát hiện/cảnh báo, IPS có thể phát hiện và chặn", "IDS cấp IP, IPS phân giải DNS", "IDS chỉ dùng WiFi, IPS chỉ dùng mạng dây", "IDS là router, IPS là switch"], correct: 0, explanation: "IDS tập trung phát hiện và cảnh báo; IPS có thêm khả năng chặn/drop/reset lưu lượng nguy hiểm." },
  { question: "Passive mode thường phù hợp với gì?", options: ["IDS quan sát bản sao traffic", "IPS chặn trực tiếp mọi gói", "DHCP server", "DNS resolver"], correct: 0, explanation: "Passive mode không nằm trực tiếp trên đường đi chính, thường dùng cho IDS để quan sát và cảnh báo." },
  { question: "Signature trong IDS/IPS là gì?", options: ["Mẫu nhận diện tấn công đã biết", "Địa chỉ IP của gateway", "Tên WiFi", "Bảng định tuyến"], correct: 0, explanation: "Signature là dấu hiệu/pattern giúp hệ thống nhận ra tấn công đã biết như SQLi, XSS, malware callback hoặc exploit cụ thể." },
  { question: "False positive là gì?", options: ["Cảnh báo nhầm: tưởng có tấn công nhưng thực tế không phải", "Bỏ sót tấn công thật", "Chặn đúng attacker", "Firewall mở port 443"], correct: 0, explanation: "False positive là báo động giả. Trong IPS, false positive có thể gây chặn nhầm traffic hợp lệ." },
  { question: "Vì sao firewall truyền thống có thể vẫn cho SQL Injection qua HTTPS port 443?", options: ["Vì firewall thấy port 443 hợp lệ, nhưng không phân tích sâu payload HTTP như WAF/IDS/IPS", "Vì firewall luôn tắt khi có HTTPS", "Vì SQL Injection là DNS", "Vì port 443 là port database"], correct: 0, explanation: "Firewall truyền thống thường lọc theo IP/port/protocol. Nếu website cần mở 443, traffic đi qua; IDS/IPS/WAF mới phân tích sâu request." },
  { question: "Traffic HTTPS/TLS gây thách thức gì cho NIDS?", options: ["NIDS khó nhìn thấy payload bên trong nếu không giải mã hoặc không có log/tích hợp khác", "NIDS không thấy IP nguồn", "NIDS không thể ghi log bất kỳ thứ gì", "NIDS tự động thành HIDS"], correct: 0, explanation: "TLS mã hóa payload nên NIDS mạng có thể chỉ thấy metadata nếu không có TLS inspection/WAF/HIDS/log server hỗ trợ." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài IDS & IPS!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[420px]">
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
      <p className="text-slate-400 mb-4">Bài tiếp theo học về DMZ & kiến trúc mạng an toàn.</p>
      <Link to="/phan-9-6" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 9.6 — DMZ & kiến trúc mạng an toàn <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function ConceptCard({ title, icon, color, text, code, compact = false }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl ${compact ? "p-5" : "p-6"}`}><div className={`${c.solid} text-white ${compact ? "w-12 h-12" : "w-14 h-14"} rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: compact ? 24 : 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function ChoiceButton({ active, onClick, color, children }) {
  const c = colorClasses[color] || colorClasses.cyan;
  return <button onClick={onClick} className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${active ? `${c.solid} text-white shadow-lg ${c.ring}` : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}>{children}</button>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function MapIcon() { return <Network />; }

function HeroIdsIpsVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="IDS" value="alert" color="orange" icon={<Bell />} /><MiniCard title="IPS" value="block" color="red" icon={<ShieldAlert />} /><MiniCard title="SIEM" value="correlate" color="purple" icon={<Database />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-orange-300">IDS: observe → analyze → alert</p><p className="text-red-300">IPS: observe → analyze → drop/reset/block</p><p className="text-cyan-300">Signature: known attack pattern</p><p className="text-purple-300">Anomaly: behavior differs from baseline</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="Passive" value="mirror" color="orange" icon={<Eye />} /><MiniCard title="Inline" value="in path" color="red" icon={<Route />} /><MiniCard title="Host" value="agent" color="green" icon={<HardDrive />} /></div></div>;
}

function IdsVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Quan sát" desc="traffic/log/hành vi" color="cyan" icon={<Eye />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Phân tích" desc="signature/anomaly" color="purple" icon={<Search />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Cảnh báo" desc="alert/log cho admin" color="orange" icon={<Bell />} /></div>;
}

function IpsVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Quan sát" desc="traffic đi qua IPS" color="cyan" icon={<Eye />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Phân tích" desc="signature/anomaly" color="purple" icon={<Search />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Chặn" desc="drop/reset/block + alert" color="red" icon={<ShieldAlert />} /></div>;
}

function PassiveVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Internet" desc="traffic chính" color="cyan" icon={<Globe2 />} /><MiniFlowNode title="Firewall → Server" desc="đường đi chính" color="green" icon={<Route />} /><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 font-mono text-sm text-center">SPAN/TAP/Mirror copy ↓</div><MiniFlowNode title="IDS" desc="nhận bản sao traffic" color="orange" icon={<Radar />} /></div>;
}

function InlineVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Internet" desc="nguồn traffic" color="cyan" icon={<Globe2 />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Firewall" desc="lọc rule truy cập" color="blue" icon={<Shield />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="IPS" desc="inline: phân tích và chặn" color="red" icon={<ShieldAlert />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Web Server / LAN" desc="hệ thống đích" color="green" icon={<Server />} /></div>;
}

function AnomalyVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Baseline bình thường" desc="100MB/ngày, vài kết nối/giờ" color="green" icon={<CheckCircle2 />} /><MiniFlowNode title="Hành vi bất thường" desc="20GB ra IP lạ, quét port LAN" color="red" icon={<AlertTriangle />} /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Ưu" value="phát hiện mới" color="cyan" icon={<Zap />} /><MiniCard title="Nhược" value="cảnh báo nhầm" color="orange" icon={<Bell />} /></div></div>;
}

function SqlInjectionVisual() {
  return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4"><MiniFlowNode title="Attacker" desc="gửi request đáng ngờ" color="red" icon={<Skull />} /><MiniFlowNode title="IDS/IPS/WAF" desc="phân tích payload HTTP" color="purple" icon={<Search />} /><MiniFlowNode title="Web Server" desc="nhận nếu không bị chặn" color="green" icon={<Server />} /><div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 font-mono text-sm text-red-300">GET /product?id=10 OR 1=1</div></div>;
}

function FalsePositiveVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Traffic hợp lệ" desc="admin scan inventory" color="green" icon={<UserCheck />} /><ArrowRight className="mx-auto text-yellow-300 rotate-90" /><MiniFlowNode title="IDS/IPS báo động" desc="nhầm là attacker" color="yellow" icon={<Bell />} /><MiniFlowNode title="Tác hại" desc="nhiễu alert / chặn nhầm" color="orange" icon={<AlertTriangle />} /></div>;
}

function FalseNegativeVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Tấn công thật" desc="exploit mới chưa có signature" color="red" icon={<Skull />} /><ArrowRight className="mx-auto text-red-300 rotate-90" /><MiniFlowNode title="IDS không cảnh báo" desc="bỏ sót" color="red" icon={<XCircle />} /><MiniFlowNode title="Tác hại" desc="attacker âm thầm tồn tại" color="purple" icon={<Eye />} /></div>;
}

function NidsVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Network IDS/IPS" desc="nhìn traffic giữa thiết bị" color="cyan" icon={<Network />} /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Internet↔DMZ" value="public attacks" color="cyan" icon={<Globe2 />} /><MiniCard title="DMZ↔LAN" value="pivot/lateral" color="purple" icon={<Split />} /><MiniCard title="Core" value="east-west" color="orange" icon={<Network />} /><MiniCard title="Cloud VPC" value="flow/log" color="blue" icon={<Cloud />} /></div></div>;
}

function HidsVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Host IDS/IPS" desc="agent trên server/máy trạm" color="green" icon={<HardDrive />} /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="File" value="integrity" color="cyan" icon={<FileSearch />} /><MiniCard title="Process" value="hành vi" color="purple" icon={<Code2 />} /><MiniCard title="Login" value="failed/success" color="orange" icon={<KeyRound />} /><MiniCard title="Config" value="thay đổi" color="blue" icon={<Settings />} /></div></div>;
}

function FirewallRelationshipVisual() {
  return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4"><MiniFlowNode title="Firewall" desc="Allow TCP 443 đến Web Server" color="cyan" icon={<Shield />} /><MiniFlowNode title="Attacker" desc="SQL Injection cũng đi qua 443" color="red" icon={<Skull />} /><MiniFlowNode title="IDS/IPS hoặc WAF" desc="phân tích sâu request" color="purple" icon={<Search />} /><MiniFlowNode title="Web Server" desc="được bảo vệ thêm" color="green" icon={<Server />} /></div>;
}

function getPlacementCode(title) {
  if (title.includes("Sau firewall")) return `Internet
   |
Firewall
   |
IDS/IPS
   |
DMZ / LAN`;
  if (title.includes("DMZ")) return `Internet
   |
Firewall
   |
DMZ Web Server
   |
IDS/IPS
   |
LAN / Database`;
  if (title.includes("nội bộ")) return `LAN Users ---- IDS/IPS ---- Server Zone

Phát hiện lateral movement và malware nội bộ.`;
  return `Domain Controller
Database Server
Web Server
File Server
Server chứa dữ liệu nhạy cảm`;
}

function StepSection({ number, color, title, icon, steps, step, setStep }) {
  const current = steps[step];
  const c = colorClasses[current.color];
  return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[390px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>;
}

function StepFlow({ steps, active, setActive, color }) {
  const c = colorClasses[color];
  return <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>;
}
