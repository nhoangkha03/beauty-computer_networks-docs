import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cloud,
  Code2,
  Database,
  DoorOpen,
  Eye,
  Globe2,
  HardDrive,
  Home,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Map,
  Network,
  PlugZap,
  RefreshCw,
  Route,
  Router,
  Search,
  Send,
  Server,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
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

const FileServer = Server;
const Tunnel = Route;

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

const vpnTypeRows = [
  ["Remote Access VPN", "Người dùng cá nhân/nhân viên", "Truy cập mạng công ty từ xa", "Nhân viên làm ở nhà vào file server", "cyan"],
  ["Site-to-Site VPN", "Hai hoặc nhiều văn phòng", "Nối các mạng LAN với nhau", "Chi nhánh Hà Nội nối TP.HCM", "purple"],
  ["Consumer VPN", "Người dùng phổ thông", "Tăng riêng tư, đổi IP public, bảo vệ WiFi công cộng", "App VPN cá nhân trên điện thoại/laptop", "green"],
];

const vpnHelpRows = [
  ["VPN giúp", "Mã hóa dữ liệu từ client đến VPN server", "cyan"],
  ["VPN giúp", "Truy cập tài nguyên nội bộ từ xa", "green"],
  ["VPN giúp", "Ẩn IP thật khỏi website đích trong một số trường hợp", "purple"],
  ["VPN giúp", "Giảm rủi ro khi dùng WiFi công cộng", "orange"],
  ["VPN giúp", "Kết nối các mạng chi nhánh", "blue"],
  ["VPN không tự động giúp", "Không làm website độc hại trở nên an toàn", "red"],
  ["VPN không tự động giúp", "Không diệt virus/malware trên máy", "red"],
  ["VPN không tự động giúp", "Không bảo vệ nếu tự nhập mật khẩu vào trang phishing", "orange"],
  ["VPN không tự động giúp", "Không thay thế MFA, firewall, antivirus", "yellow"],
  ["VPN không tự động giúp", "Không sửa lỗi cấu hình server", "purple"],
];

const protocolRows = [
  ["IPsec VPN", "Bộ giao thức bảo mật ở tầng mạng", "Site-to-Site, Remote Access doanh nghiệp", "Mạnh, phổ biến, cấu hình có thể phức tạp", "cyan"],
  ["SSL/TLS VPN", "Dùng TLS/SSL để bảo vệ kết nối", "Remote Access", "Dễ dùng, thường đi qua firewall tốt", "green"],
  ["WireGuard", "VPN hiện đại, thiết kế đơn giản", "Nhiều môi trường", "Nhanh, cấu hình gọn, mật mã hiện đại", "purple"],
  ["OpenVPN", "VPN mã nguồn mở phổ biến", "Remote Access, site tùy cấu hình", "Linh hoạt, chạy nhiều hệ điều hành", "blue"],
  ["PPTP", "Giao thức VPN cũ", "Hệ thống cũ", "Không nên dùng cho bảo mật nghiêm túc", "red"],
];

const vpnUserRules = [
  ["Nhân viên kế toán", "Server kế toán", "Server dev", "green"],
  ["Dev team", "Git server, staging server", "Database production trực tiếp", "cyan"],
  ["Admin", "Server quản trị", "Theo chính sách riêng", "purple"],
  ["Vendor", "Một server cụ thể", "Toàn bộ LAN", "orange"],
];

const errors = [
  ["Kết nối VPN thành công nhưng không vào được server nội bộ", "Route chưa đúng, DNS nội bộ sai, firewall chưa cho phép, user chưa đúng nhóm quyền, server không phản hồi, split tunnel thiếu mạng đích.", "red", <Server />],
  ["Kết nối VPN xong Internet bị chậm", "Có thể đang dùng full tunnel, VPN server quá tải, server ở xa, mã hóa tốn tài nguyên, băng thông công ty hạn chế.", "orange", <Globe2 />],
  ["Không phân giải được tên nội bộ", "Truy cập IP được nhưng intranet.company.local không được thường là lỗi DNS, DNS suffix, split DNS hoặc route đến DNS nội bộ.", "purple", <Search />],
  ["VPN bị ngắt liên tục", "WiFi không ổn định, đổi mạng liên tục, NAT/firewall timeout, client cũ, server quá tải, idle timeout.", "yellow", <RefreshCw />],
];

const commandTabs = {
  windows: {
    title: "Windows",
    color: "blue",
    icon: <Terminal />,
    commands: [
      ["Xem IP và adapter mạng", "ipconfig"],
      ["Xem route table", "route print"],
      ["Kiểm tra server nội bộ", "Test-NetConnection 10.0.1.20 -Port 443"],
      ["Kiểm tra DNS", "nslookup intranet.company.local"],
    ],
  },
  linux: {
    title: "Linux",
    color: "green",
    icon: <Code2 />,
    commands: [
      ["Xem interface mạng", "ip addr"],
      ["Xem bảng định tuyến", "ip route"],
      ["Ping server nội bộ", "ping 10.0.1.20"],
      ["Kiểm tra port", "nc -vz 10.0.1.20 443"],
    ],
  },
  macos: {
    title: "macOS",
    color: "purple",
    icon: <Laptop />,
    commands: [
      ["Xem interface", "ifconfig"],
      ["Xem route", "netstat -rn"],
      ["Xem default route", "route -n get default"],
      ["Kiểm tra DNS", "scutil --dns"],
    ],
  },
};

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
              <p className="text-xs text-slate-500">Phần 9: Bảo mật mạng — Network Security</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 9.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhatIsVpn />
        <WhyVirtualPrivate />
        <TunnelSection />
        <ClientServerSection />
        <EncryptionSection />
        <RealWorldExamples />
        <TechnicalExample />
        <RemoteAccessDiagram />
        <SiteToSiteDiagram />
        <VpnTypesTable />
        <VpnHelpsTable />
        <VpnProcess />
        <FullSplitTunnelSection />
        <VpnProtocolsSection />
        <VpnFirewallSection />
        <CommandPractice />
        <VpnDefenseSection />
        <VpnLimitsSection />
        <VpnErrorsSection />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> Network Security — VPN
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            VPN
            <span className="block text-cyan-400">Mạng riêng ảo</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            VPN tạo đường hầm bảo mật qua Internet để người dùng hoặc chi nhánh truy cập mạng riêng từ xa. VPN hữu ích, nhưng vẫn cần kết hợp MFA, firewall, phân quyền và HTTPS.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">VPN</span> = Virtual Private Network.</p>
            <p><span className="text-green-300">Tunnel</span> = đường hầm logic được bảo vệ.</p>
            <p><span className="text-orange-300">VPN không phải lá chắn toàn năng</span>.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroVpnVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu VPN là gì và vì sao gọi là mạng riêng ảo.",
    "Hiểu VPN tạo đường hầm mã hóa qua Internet như thế nào.",
    "Phân biệt Remote Access VPN, Site-to-Site VPN và Consumer VPN.",
    "Nắm tunnel, encryption, VPN server, VPN client, split tunneling và full tunneling.",
    "Biết VPN giúp gì và không giúp gì trong bảo mật mạng.",
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

function WhatIsVpn() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="VPN là gì?" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-cyan-300">VPN</strong> là viết tắt của <strong>Virtual Private Network</strong>, nghĩa là mạng riêng ảo.</p>
            <ConceptCard title="Kết nối riêng qua Internet công cộng" icon={<Route />} color="blue" text="VPN tạo một đường kết nối bảo mật qua Internet, giúp thiết bị truy cập mạng từ xa như thể đang nằm trong cùng mạng riêng." code="Nhân viên ở nhà
   |
Internet
   |
VPN bảo mật
   |
Mạng công ty" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <VpnSimpleVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyVirtualPrivate() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Vì sao gọi là mạng riêng ảo?" icon={<CircleHelp />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Riêng" icon={<Lock />} color="purple" text="Gọi là mạng riêng vì sau khi kết nối VPN, người dùng có thể truy cập tài nguyên nội bộ như đang ở trong mạng công ty." code="Laptop ở nhà → VPN → File Server nội bộ
Laptop ở nhà → VPN → Intranet công ty" />
        <ConceptCard title="Ảo" icon={<Globe2 />} color="cyan" text="Gọi là ảo vì dữ liệu vẫn đi qua Internet công cộng, không phải đường dây riêng vật lý. VPN tạo đường hầm logic được bảo vệ trên Internet." code="Không có VPN:
Laptop ---- Internet công cộng ---- Server công ty

Có VPN:
Laptop ==== Tunnel mã hóa ==== VPN Server ---- LAN công ty" />
      </div>
    </section>
  );
}

function TunnelSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Tunnel là gì?" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Đường hầm logic" icon={<Route />} color="emerald" text="Trong VPN, tunnel là kênh truyền dữ liệu bảo mật giữa VPN client và VPN server. Dữ liệu gốc được bọc bên trong gói VPN và thường được mã hóa." code="[VPN Client] ================= [VPN Server]
              Tunnel mã hóa

Gói gốc: Laptop → File Server công ty
Sau VPN: Gói gốc được bọc trong gói VPN mã hóa" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <TunnelVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientServerSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="VPN Client và VPN Server" icon={<Server />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="VPN Client" icon={<Laptop />} color="cyan" text="VPN client là thiết bị hoặc phần mềm bắt đầu kết nối VPN. Ví dụ: laptop của nhân viên chạy OpenVPN Client, WireGuard Client, FortiClient hoặc Windows VPN Client." code="VPN Client: laptop nhân viên
Nhiệm vụ: kết nối, xác thực, tạo tunnel" />
        <ConceptCard title="VPN Server / VPN Gateway" icon={<Server />} color="orange" text="VPN server là máy chủ hoặc gateway nhận kết nối VPN, xác thực người dùng và cấp quyền truy cập vào mạng riêng." code="VPN Server: firewall/VPN gateway công ty
Nhiệm vụ: xác thực, cấp IP VPN, áp policy" />
      </div>
    </section>
  );
}

function EncryptionSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="VPN dùng mã hóa để làm gì?" icon={<Lock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Bảo vệ đoạn Client → VPN Server" icon={<Lock />} color="green" text="VPN thường mã hóa dữ liệu trong tunnel để người ngoài khó đọc được nội dung khi dữ liệu đi qua Internet hoặc WiFi công cộng." code="Dữ liệu gốc:
username=hoangkha&password=abc123

Dữ liệu khi đi trong VPN:
x9A@Lkq82#... dữ liệu đã mã hóa ..." />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-3">
            <MiniFlowNode title="Không có VPN" desc="Laptop → WiFi công cộng → Internet" color="red" icon={<Wifi />} />
            <MiniFlowNode title="Có VPN" desc="Laptop → Tunnel mã hóa → VPN Server → Internet" color="green" icon={<Route />} />
            <div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">Người trong cùng WiFi khó đọc được lưu lượng giữa máy bạn và VPN server.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Ví dụ đời sống" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Đường hầm riêng trong thành phố" icon={<Route />} color="green" text="Internet giống đường phố công cộng có xe cá nhân, xe tải, xe buýt và người lạ. VPN giống đường hầm riêng có bảo vệ: người ngoài có thể thấy bạn đi vào hầm, nhưng khó biết bạn chở gì bên trong." code="Bạn đi vào cửa hầm
→ bảo vệ kiểm tra danh tính
→ xe đi trong đường hầm kín
→ ra ở khu vực công ty" />
        <ConceptCard title="Nhân viên làm việc từ xa" icon={<Home />} color="cyan" text="Nhân viên ở nhà cần truy cập file server công ty. Nếu không có VPN, laptop ở nhà không nên truy cập trực tiếp file server nội bộ. Sau VPN, laptop nhận IP VPN và truy cập tài nguyên được phép." code="File Server: 10.0.1.20
Laptop ở nhà: 192.168.1.25
IP VPN: 10.8.0.15

Laptop có một chân nằm trong mạng công ty." />
      </div>
    </section>
  );
}

function TechnicalExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="cyan" title="Ví dụ kỹ thuật: truy cập intranet công ty" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Luồng remote access" icon={<Laptop />} color="cyan" text="Laptop nhân viên kết nối VPN, xác thực bằng username/password/MFA, nhận IP VPN, sau đó truy cập intranet hoặc server nội bộ theo quyền." code="Laptop nhân viên
  → kết nối VPN
  → xác thực username/password/MFA
  → nhận IP VPN
  → truy cập intranet nội bộ" />
          <RemoteAccessVisual />
        </div>
      </div>
    </section>
  );
}

function RemoteAccessDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="blue" title="Sơ đồ VPN Remote Access" icon={<Laptop />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <RemoteAccessDetailedVisual />
      </div>
    </section>
  );
}

function SiteToSiteDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="Sơ đồ Site-to-Site VPN" icon={<Building2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <SiteToSiteVisual />
      </div>
    </section>
  );
}

function VpnTypesTable() {
  const [active, setActive] = useState("Remote Access VPN");
  const row = vpnTypeRows.find(([name]) => name === active) || vpnTypeRows[0];
  const [, user, purpose, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Bảng so sánh các kiểu VPN" icon={<BarChartIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {vpnTypeRows.map(([name, , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={active.includes("Remote") ? <Laptop /> : active.includes("Site") ? <Building2 /> : <Smartphone />} color={color} text={`Dùng cho: ${user}. Mục đích chính: ${purpose}.`} code={example} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Loại VPN</th><th className="p-4">Dùng cho ai?</th><th className="p-4">Mục đích chính</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>{vpnTypeRows.map(([name, u, p, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === vpnTypeRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{u}</td><td className="p-4 text-slate-300">{p}</td><td className="p-4 text-green-300">{ex}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VpnHelpsTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="green" title="VPN giúp gì và không giúp gì?" icon={<ShieldCheck />} />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-green-500/30 rounded-3xl overflow-hidden">
          <div className="bg-green-500/10 p-4 text-green-300 font-black border-b border-green-500/20">VPN giúp</div>
          {vpnHelpRows.filter(([type]) => type === "VPN giúp").map(([_, text, color], i) => <div key={text} className={`${i === 4 ? "" : "border-b border-slate-800"} p-4 text-sm text-slate-300 flex gap-3`}><CheckCircle2 className={colorClasses[color].text} size={18} />{text}</div>)}
        </div>
        <div className="bg-slate-900 border border-red-500/30 rounded-3xl overflow-hidden">
          <div className="bg-red-500/10 p-4 text-red-300 font-black border-b border-red-500/20">VPN không tự động giúp</div>
          {vpnHelpRows.filter(([type]) => type !== "VPN giúp").map(([_, text, color], i) => <div key={text} className={`${i === 4 ? "" : "border-b border-slate-800"} p-4 text-sm text-slate-300 flex gap-3`}><XCircle className={colorClasses[color].text} size={18} />{text}</div>)}
        </div>
      </div>
      <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-3xl p-6 text-yellow-300 font-mono text-sm">VPN là một lớp bảo vệ đường truyền, không phải “lá chắn toàn năng”.</div>
    </section>
  );
}

function VpnProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Người dùng mở VPN client", text: "Nhân viên mở phần mềm VPN và chọn profile công ty.", code: `OpenVPN Client
WireGuard Client
Cisco AnyConnect
FortiClient
GlobalProtect
Windows VPN Client

Profile: company-vpn.example.com`, color: "cyan", icon: <Laptop /> },
    { title: "VPN client kết nối đến VPN server", text: "Laptop gửi yêu cầu kết nối đến VPN server qua Internet.", code: `Laptop → Internet → VPN Server công ty

Thông tin có thể gồm:
VPN server
Giao thức VPN
Certificate/key
Username/password
MFA code`, color: "blue", icon: <Send /> },
    { title: "Xác thực người dùng", text: "VPN server kiểm tra người dùng có được phép vào không.", code: `Username: hoangkha
Password: ********
MFA Code: 123456

Fail → VPN connection denied
Success → tạo tunnel`, color: "orange", icon: <UserCheck /> },
    { title: "Tạo tunnel mã hóa", text: "VPN client và server thỏa thuận thuật toán, khóa phiên và thông số kết nối.", code: `VPN Client ================= VPN Server
            Tunnel mã hóa`, color: "green", icon: <Route /> },
    { title: "Client nhận địa chỉ IP VPN", text: "Laptop có thêm một interface mạng ảo với IP trong dải VPN.", code: `IP WiFi ở nhà: 192.168.1.25
IP VPN:        10.8.0.15

Wi-Fi Adapter: 192.168.1.25
VPN Adapter:  10.8.0.15`, color: "purple", icon: <Network /> },
    { title: "Định tuyến lưu lượng qua VPN", text: "Hệ điều hành cần biết traffic nào đi qua VPN và traffic nào đi thẳng Internet.", code: `Full tunnel: tất cả traffic qua VPN
Split tunnel: chỉ traffic mạng riêng qua VPN`, color: "emerald", icon: <Route /> },
  ];
  return <StepSection number="13" color="cyan" title="Cơ chế hoạt động của VPN" icon={<Route />} steps={steps} step={step} setStep={setStep} />;
}

function FullSplitTunnelSection() {
  const [mode, setMode] = useState("split");
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="purple" title="Full Tunnel và Split Tunnel" icon={<Split />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
          <ConceptCard title={mode === "full" ? "Full Tunnel" : "Split Tunnel"} icon={mode === "full" ? <Route /> : <Split />} color={mode === "full" ? "cyan" : "purple"} text={mode === "full" ? "Full tunnel nghĩa là toàn bộ lưu lượng Internet của máy sẽ đi qua VPN server trước. Công ty kiểm soát tập trung hơn, nhưng có thể chậm và tốn băng thông VPN." : "Split tunnel nghĩa là chỉ traffic cần vào mạng riêng đi qua VPN, traffic Internet thông thường đi thẳng ra Internet nhà/quán. Nhanh hơn nhưng cần route và chính sách chặt."} code={mode === "full" ? `google.com → qua VPN
youtube.com → qua VPN
intranet.company.local → qua VPN` : `intranet.company.local → qua VPN
file-server 10.0.1.20 → qua VPN
youtube.com → đi thẳng Internet
google.com → đi thẳng Internet`} />
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton active={mode === "full"} onClick={() => setMode("full")} color="cyan">Full Tunnel</ChoiceButton>
              <ChoiceButton active={mode === "split"} onClick={() => setMode("split")} color="purple">Split Tunnel</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "full" ? <FullTunnelVisual /> : <SplitTunnelVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function VpnProtocolsSection() {
  const [active, setActive] = useState("WireGuard");
  const row = protocolRows.find(([name]) => name === active) || protocolRows[2];
  const [, desc, use, note, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="blue" title="Các giao thức VPN phổ biến" icon={<Settings />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {protocolRows.map(([name, , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<Settings />} color={color} text={`${desc}. Thường dùng cho: ${use}.`} code={note} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[850px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Ý nghĩa</th><th className="p-4">Dùng cho</th><th className="p-4">Ghi chú</th></tr></thead>
                <tbody>{protocolRows.map(([name, d, u, n, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === protocolRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{d}</td><td className="p-4 text-slate-300">{u}</td><td className="p-4 text-green-300">{n}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300">Nên ưu tiên IPsec, SSL/TLS VPN, OpenVPN hoặc WireGuard; tránh dùng PPTP cho bảo mật nghiêm túc.</div>
      </div>
    </section>
  );
}

function VpnFirewallSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="emerald" title="VPN hoạt động cùng firewall như thế nào?" icon={<Shield />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <ConceptCard title="VPN không đồng nghĩa toàn quyền vào LAN" icon={<Shield />} color="emerald" text="Kết nối VPN chỉ là bước vào cổng. Sau đó firewall vẫn cần áp rule theo nhóm người dùng để bảo đảm nguyên tắc phân quyền tối thiểu." code={`Step 1 → Người dùng kết nối VPN
Step 2 → Firewall/VPN Gateway xác thực
Step 3 → Người dùng nhận IP VPN
Step 4 → Firewall áp rule theo nhóm
Step 5 → Chỉ truy cập tài nguyên được phép`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">User Group</th><th className="p-4">Được truy cập</th><th className="p-4">Không được truy cập</th></tr></thead>
              <tbody>{vpnUserRules.map(([group, allow, deny, color], i) => <tr key={group} className={`${i === vpnUserRules.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className={`p-4 font-black ${colorClasses[color].text}`}>{group}</td><td className="p-4 text-green-300">{allow}</td><td className="p-4 text-red-300">{deny}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandPractice() {
  const [tab, setTab] = useState("windows");
  const data = commandTabs[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="green" title="Một số lệnh kiểm tra VPN" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <ChoiceButton active={tab === "windows"} onClick={() => setTab("windows")} color="blue">Windows</ChoiceButton>
          <ChoiceButton active={tab === "linux"} onClick={() => setTab("linux")} color="green">Linux</ChoiceButton>
          <ChoiceButton active={tab === "macos"} onClick={() => setTab("macos")} color="purple">macOS</ChoiceButton>
        </div>
        <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
          <div className="flex items-center gap-3 mb-5"><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring}`}>{React.cloneElement(data.icon, { size: 24 })}</div><h3 className="text-xl font-bold text-white">{data.title}</h3></div>
          <div className="grid lg:grid-cols-2 gap-3">
            {data.commands.map(([label, cmd]) => <div key={label} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"><p className="text-xs text-slate-500 font-bold uppercase mb-2">{label}</p><pre className="text-green-300 font-mono text-sm whitespace-pre-wrap break-all">{cmd}</pre></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function VpnDefenseSection() {
  const items = [
    ["Nghe lén WiFi công cộng", "VPN mã hóa đoạn từ laptop đến VPN server, giảm rủi ro bị đọc lưu lượng trong cùng WiFi.", "cyan", <Wifi />],
    ["Truy cập nội bộ an toàn hơn", "Không mở thẳng SSH/RDP/database ra Internet; yêu cầu VPN + MFA + firewall rule.", "green", <ShieldCheck />],
    ["Làm việc từ xa", "Nhân viên từ nhà, khách sạn, quán cà phê truy cập hệ thống qua tunnel được kiểm soát.", "purple", <Home />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="cyan" title="VPN giúp phòng chống kiểu tấn công nào?" icon={<ShieldCheck />} />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
    </section>
  );
}

function VpnLimitsSection() {
  const items = [
    ["Không chống phishing nếu tự nhập mật khẩu", "Bạn vào trang giả và tự nhập tài khoản thì VPN không tự cứu được.", "red", <ShieldAlert />],
    ["Không diệt malware", "Keylogger ghi mật khẩu trước khi dữ liệu được VPN mã hóa.", "orange", <BugIcon />],
    ["Không làm website độc hại thành an toàn", "VPN chỉ thay đổi đường đi và mã hóa một đoạn kết nối.", "purple", <Globe2 />],
    ["Không thay thế HTTPS", "VPN bảo vệ bạn đến VPN server; HTTPS bảo vệ trình duyệt đến website.", "cyan", <Lock />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="red" title="VPN không bảo vệ được điều gì?" icon={<XCircle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm whitespace-pre-wrap">Bạn → VPN Server → Website

VPN bảo vệ: Bạn → VPN Server
HTTPS bảo vệ: Trình duyệt → Website</div>
    </section>
  );
}

function VpnErrorsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="20" color="yellow" title="Một số lỗi VPN thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {errors.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ kết nối VPN là được vào toàn bộ LAN", desc: "VPN chỉ là cổng vào. Sau đó vẫn cần firewall rule, nhóm quyền và least privilege.", fix: "VPN + MFA + firewall policy theo nhóm." },
    { title: "Mở file server/SSH/RDP trực tiếp ra Internet", desc: "Làm vậy tăng bề mặt tấn công và dễ bị scan/brute force/khai thác lỗ hổng.", fix: "Yêu cầu VPN trước rồi mới truy cập nội bộ." },
    { title: "Tưởng VPN thay thế HTTPS", desc: "VPN mã hóa đoạn đến VPN server; HTTPS mã hóa từ trình duyệt đến website.", fix: "Vẫn dùng HTTPS, nhất là khi đăng nhập/thanh toán." },
    { title: "Không hiểu route sau khi kết nối VPN", desc: "VPN kết nối thành công nhưng route/DNS sai thì vẫn không vào được server nội bộ.", fix: "Kiểm tra ipconfig/ip route/route print/DNS." },
    { title: "Dùng PPTP cho bảo mật nghiêm túc", desc: "PPTP là giao thức cũ, không nên dùng cho môi trường cần bảo mật.", fix: "Ưu tiên IPsec, SSL/TLS VPN, OpenVPN hoặc WireGuard." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="21" color="red" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">22</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>VPN = Virtual Private Network, mạng riêng ảo.</p>
              <p>VPN tạo kết nối riêng/bảo mật qua mạng công cộng như Internet.</p>
              <p>Tunnel là đường hầm logic giữa VPN client và VPN server.</p>
              <p>VPN client là bên kết nối; VPN server/gateway là bên tiếp nhận và cấp quyền.</p>
              <p>VPN mã hóa đoạn từ thiết bị đến VPN server.</p>
              <p>Remote Access VPN cho người dùng từ xa vào mạng công ty.</p>
              <p>Site-to-Site VPN nối các mạng chi nhánh với nhau.</p>
              <p>Consumer VPN phục vụ người dùng phổ thông, riêng tư và WiFi công cộng.</p>
              <p>Full tunnel đưa toàn bộ traffic qua VPN.</p>
              <p>Split tunnel chỉ đưa traffic mạng riêng qua VPN.</p>
              <p>VPN không thay thế HTTPS, MFA, firewall, antivirus hoặc nhận thức chống phishing.</p>
              <p>Kết nối VPN không có nghĩa là được vào toàn bộ LAN.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "VPN là gì?", options: ["Công nghệ tạo kết nối riêng/bảo mật qua mạng công cộng", "Công nghệ cấp phát IP tự động", "Giao thức phân giải tên miền", "Thiết bị phát WiFi"], correct: 0, explanation: "VPN tạo đường hầm bảo mật qua Internet để người dùng hoặc mạng từ xa truy cập mạng riêng." },
  { question: "Tunnel trong VPN nghĩa là gì?", options: ["Đường hầm logic giúp dữ liệu đi qua Internet trong dạng được bảo vệ", "Cổng DNS public", "Tên của một loại switch", "Port HTTPS"], correct: 0, explanation: "Tunnel là kênh truyền giữa VPN client và VPN server, thường mã hóa và bọc dữ liệu gốc bên trong gói VPN." },
  { question: "Full tunnel khác split tunnel thế nào?", options: ["Full tunnel đưa toàn bộ traffic qua VPN; split tunnel chỉ đưa traffic cần thiết qua VPN", "Full tunnel chỉ dùng Bluetooth; split tunnel chỉ dùng WiFi", "Full tunnel không mã hóa; split tunnel có mã hóa", "Không khác nhau"], correct: 0, explanation: "Full tunnel đi toàn bộ lưu lượng qua VPN server. Split tunnel chỉ route các mạng nội bộ/cần thiết qua VPN, còn Internet thường đi trực tiếp." },
  { question: "Kết nối VPN có nghĩa là được truy cập toàn bộ mạng công ty không?", options: ["Không, vẫn cần firewall rule và phân quyền theo nhóm", "Có, luôn có toàn quyền", "Có, nếu dùng WiFi công cộng", "Không liên quan đến firewall"], correct: 0, explanation: "VPN chỉ là bước kết nối vào. Doanh nghiệp vẫn cần firewall, MFA, group policy và least privilege." },
  { question: "VPN không tự động bảo vệ được điều gì?", options: ["Phishing khi người dùng tự nhập mật khẩu vào trang giả", "Mã hóa đoạn client đến VPN server", "Kết nối file server nội bộ từ xa", "Giảm rủi ro nghe lén WiFi công cộng"], correct: 0, explanation: "Nếu người dùng tự nhập mật khẩu vào website giả, VPN không thể tự phân biệt và cứu người dùng." },
  { question: "Nhân viên ở nhà cần truy cập file server nội bộ, không muốn mở file server ra Internet. Cách phù hợp là gì?", options: ["Dùng Remote Access VPN + MFA + firewall chỉ cho nhóm được phép truy cập file server", "Mở SMB/RDP trực tiếp ra Internet", "Gửi mật khẩu file server qua email", "Tắt firewall công ty"], correct: 0, explanation: "Mô hình an toàn hơn là yêu cầu VPN trước, xác thực MFA, sau đó firewall cho đúng nhóm truy cập đúng server." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài VPN!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo học về IDS & IPS — phát hiện và ngăn chặn xâm nhập.</p>
      <Link to="/phan-9-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 9.5 — IDS & IPS <ChevronRight size={20} />
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

function BarChartIcon() { return <Database />; }
function BugIcon() { return <ShieldAlert />; }

function HeroVpnVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="Client" value="laptop" color="cyan" icon={<Laptop />} /><MiniCard title="Tunnel" value="encrypted" color="green" icon={<Route />} /><MiniCard title="Server" value="gateway" color="orange" icon={<Server />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Home Laptop ==== VPN Tunnel ==== Company Gateway</p><p className="text-green-300">MFA + certificate/key + encryption</p><p className="text-purple-300">VPN IP: 10.8.0.15</p><p className="text-orange-300">Firewall policy still applies</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="Remote" value="user" color="cyan" icon={<UserCheck />} /><MiniCard title="Site-to-Site" value="branch" color="purple" icon={<Building2 />} /><MiniCard title="Consumer" value="privacy" color="green" icon={<Smartphone />} /></div></div>;
}

function VpnSimpleVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Nhân viên ở nhà" desc="VPN Client" color="cyan" icon={<Laptop />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Internet" desc="mạng công cộng" color="blue" icon={<Globe2 />} /><ArrowRight className="mx-auto text-green-300 rotate-90" /><MiniFlowNode title="VPN bảo mật" desc="tunnel mã hóa" color="green" icon={<Route />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Mạng công ty" desc="LAN / Server nội bộ" color="orange" icon={<Network />} /></div>;
}

function TunnelVisual() {
  return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><MiniFlowNode title="VPN Client" desc="Laptop nhân viên" color="cyan" icon={<Laptop />} /><MiniFlowNode title="VPN Server" desc="Gateway công ty" color="orange" icon={<Server />} /></div><div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-5 text-center"><Route className="mx-auto text-green-300 mb-2" size={40} /><p className="text-green-300 font-mono">================= Tunnel mã hóa =================</p></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">Gói dữ liệu gốc được bọc trong gói VPN mã hóa trước khi đi qua Internet.</div></div>;
}

function RemoteAccessVisual() {
  return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4"><MiniFlowNode title="Laptop ở nhà" desc="VPN Client" color="cyan" icon={<Laptop />} /><MiniFlowNode title="Tunnel mã hóa" desc="qua Internet" color="green" icon={<Route />} /><MiniFlowNode title="VPN Gateway công ty" desc="xác thực + cấp IP" color="orange" icon={<Server />} /><MiniFlowNode title="Internal Server" desc="10.0.1.20" color="purple" icon={<HardDrive />} /></div>;
}

function RemoteAccessDetailedVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Nhân viên ở nhà" desc="Laptop / VPN Client" color="cyan" icon={<Laptop />} /><ArrowRight className="mx-auto text-green-300 rotate-90" /><MiniFlowNode title="VPN Tunnel" desc="mã hóa qua Internet" color="green" icon={<Route />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="VPN Server công ty" desc="VPN Gateway" color="orange" icon={<Server />} /><div className="grid md:grid-cols-3 gap-3"><MiniCard title="File Server" value="10.0.1.20" color="blue" icon={<HardDrive />} /><MiniCard title="Intranet" value="web nội bộ" color="purple" icon={<Globe2 />} /><MiniCard title="Database" value="nội bộ" color="green" icon={<Database />} /></div></div>;
}

function SiteToSiteVisual() {
  return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><MiniFlowNode title="Văn phòng A" desc="LAN A: 10.1.0.0/16" color="cyan" icon={<Building2 />} /><MiniFlowNode title="VPN Gateway A" desc="router/firewall" color="blue" icon={<Router />} /></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><MiniFlowNode title="Văn phòng B" desc="LAN B: 10.2.0.0/16" color="purple" icon={<Building2 />} /><MiniFlowNode title="VPN Gateway B" desc="router/firewall" color="orange" icon={<Router />} /></div></div><div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-5 text-center"><p className="text-green-300 font-mono">[VPN Gateway A] ===== Internet ===== [VPN Gateway B]</p><p className="text-slate-400 text-sm mt-2">Tunnel mã hóa site-to-site nối hai mạng LAN với nhau</p></div></div>;
}

function FullTunnelVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Laptop" desc="mọi traffic" color="cyan" icon={<Laptop />} /><ArrowRight className="mx-auto text-cyan-300 rotate-90" /><MiniFlowNode title="VPN Server công ty" desc="điểm đi qua bắt buộc" color="orange" icon={<Server />} /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Google" value="qua VPN" color="green" icon={<Globe2 />} /><MiniCard title="Intranet" value="qua VPN" color="purple" icon={<Network />} /><MiniCard title="YouTube" value="qua VPN" color="red" icon={<Globe2 />} /><MiniCard title="File Server" value="qua VPN" color="blue" icon={<HardDrive />} /></div></div>;
}

function SplitTunnelVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Laptop" desc="chia route" color="purple" icon={<Laptop />} /><div className="grid md:grid-cols-2 gap-3"><MiniFlowNode title="Mạng công ty 10.0.0.0/16" desc="đi qua VPN" color="green" icon={<Route />} /><MiniFlowNode title="Internet thông thường" desc="đi thẳng mạng nhà" color="cyan" icon={<Globe2 />} /></div><div className="grid md:grid-cols-2 gap-3"><MiniCard title="File Server" value="qua VPN" color="green" icon={<HardDrive />} /><MiniCard title="Intranet" value="qua VPN" color="purple" icon={<Network />} /><MiniCard title="YouTube" value="không qua VPN" color="cyan" icon={<Globe2 />} /><MiniCard title="Google" value="không qua VPN" color="blue" icon={<Search />} /></div></div>;
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
