import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Database,
  FileText,
  Globe2,
  HardDrive,
  Home,
  KeyRound,
  Layers,
  Laptop,
  Network,
  RefreshCw,
  Router,
  Search,
  Send,
  Server,
  ShieldAlert,
  Smartphone,
  Terminal,
  Timer,
  Tv,
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

const configRows = [
  ["IP Address", "Địa chỉ của thiết bị trong mạng", "192.168.1.50", "cyan"],
  ["Subnet Mask", "Cho biết thiết bị thuộc mạng con nào", "255.255.255.0", "blue"],
  ["Default Gateway", "Router để đi ra mạng khác/Internet", "192.168.1.1", "orange"],
  ["DNS Server", "Máy chủ phân giải tên miền", "8.8.8.8", "purple"],
  ["Lease Time", "Thời gian được mượn địa chỉ IP", "24 hours", "green"],
];

const dynamicStaticRows = [
  ["Cách cấp", "Tự động", "Nhập thủ công"],
  ["Dễ quản lý nhiều máy", "Có", "Khó hơn"],
  ["Nguy cơ trùng IP", "Thấp nếu DHCP đúng", "Cao nếu nhập sai"],
  ["Phù hợp với", "Laptop, điện thoại, máy người dùng", "Server, router, printer quan trọng"],
  ["Có thể thay đổi không?", "Có thể đổi sau khi lease hết", "Thường cố định"],
];

const doraSteps = [
  { key: "D", name: "Discover", from: "Client", to: "Broadcast / DHCP Server", meaning: "Ai có thể cấp IP cho tôi?", color: "cyan", icon: <Search /> },
  { key: "O", name: "Offer", from: "DHCP Server", to: "Client", meaning: "Tôi có thể cấp IP này cho bạn.", color: "orange", icon: <Send /> },
  { key: "R", name: "Request", from: "Client", to: "Broadcast / DHCP Server", meaning: "Tôi chọn IP/server này.", color: "purple", icon: <CheckCircle2 /> },
  { key: "A", name: "ACK", from: "DHCP Server", to: "Client", meaning: "Được, IP này là của bạn trong lease time.", color: "green", icon: <Award /> },
];

const commandTabs = {
  windows: {
    title: "Windows",
    color: "blue",
    icon: <Terminal />,
    commands: [
      ["Xem IP hiện tại", "ipconfig"],
      ["Xem chi tiết IP, DHCP Server, DNS", "ipconfig /all"],
      ["Nhả IP hiện tại", "ipconfig /release"],
      ["Xin cấp lại IP", "ipconfig /renew"],
      ["Xóa DNS cache", "ipconfig /flushdns"],
    ],
  },
  linux: {
    title: "Linux",
    color: "green",
    icon: <Code2 />,
    commands: [
      ["Xem địa chỉ IP", "ip addr"],
      ["Nhả DHCP lease", "sudo dhclient -r"],
      ["Xin DHCP mới", "sudo dhclient"],
      ["Xem log NetworkManager", "journalctl -u NetworkManager"],
      ["Tìm log DHCP", "journalctl | grep -i dhcp"],
    ],
  },
  macos: {
    title: "macOS",
    color: "purple",
    icon: <Laptop />,
    commands: [
      ["Xem IP", "ifconfig"],
      ["Renew DHCP qua GUI", "System Settings → Network → Wi-Fi/Ethernet → Details → TCP/IP → Renew DHCP Lease"],
      ["Renew DHCP qua lệnh", "sudo ipconfig set en0 DHCP"],
    ],
  },
  wireshark: {
    title: "Wireshark",
    color: "cyan",
    icon: <Search />,
    commands: [
      ["Filter DHCP", "dhcp"],
      ["Filter BOOTP", "bootp"],
      ["Các gói cần thấy", "DHCP Discover\nDHCP Offer\nDHCP Request\nDHCP ACK"],
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
              <Network className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.5</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyDhcp />
        <DhcpProvides />
        <DhcpServerSection />
        <DhcpClientSection />
        <LeaseTimeSection />
        <DhcpPortsSection />
        <RealWorldExamples />
        <HomeNetworkDiagram />
        <DynamicVsStatic />
        <DoraOverview />
        <DoraStepDetail />
        <ApipaSection />
        <CommandPractice />
        <TroubleshootingSection />
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
            <Layers size={16} /> Application Layer — Network Configuration
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            DHCP
            <span className="block text-cyan-400">Cấp phát địa chỉ IP động</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            DHCP giúp thiết bị tự động nhận IP address, subnet mask, default gateway, DNS server và lease time để tham gia mạng mà không cần cấu hình thủ công.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">DHCP</span> = Dynamic Host Configuration Protocol.</p>
            <p><span className="text-emerald-300">DORA</span> = Discover → Offer → Request → ACK.</p>
            <p><span className="text-orange-300">UDP</span> server 67, client 68.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroDhcpVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu DHCP là gì và vì sao mạng cần DHCP.",
    "Biết DHCP cấp IP address, subnet mask, default gateway, DNS server.",
    "Nắm quy trình cấp IP tự động DORA.",
    "Biết DHCP dùng UDP port 67 và 68.",
    "Phân biệt IP động và IP tĩnh.",
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

function WhyDhcp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần DHCP?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi laptop hoặc điện thoại kết nối vào mạng, thiết bị cần biết mình dùng IP nào, thuộc subnet nào, ra Internet qua router nào và hỏi DNS server nào.</p>
            <p>Nếu cấu hình từng máy bằng tay, rất dễ nhập sai hoặc bị trùng IP, đặc biệt trong công ty có hàng trăm thiết bị.</p>
            <ConceptCard title="DHCP tự động hóa việc này" icon={<Zap />} color="blue" text="DHCP cấp cấu hình mạng tự động cho thiết bị mới vào mạng, giảm lỗi thủ công và dễ quản lý số lượng lớn thiết bị." code={`Máy 1: 192.168.1.10
Máy 2: 192.168.1.11
Máy 3: 192.168.1.12
...
→ DHCP cấp tự động`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <NeedNetworkConfigVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function DhcpProvides() {
  const [active, setActive] = useState("IP Address");
  const row = configRows.find(([name]) => name === active) || configRows[0];
  const [, meaning, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="DHCP cấp những gì?" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Bộ hồ sơ mạng" icon={<FileText />} color="emerald" text="DHCP không chỉ cấp mỗi IP. Nó thường cấp cả subnet mask, default gateway, DNS server và lease time." code={`IP Address:      192.168.1.50
Subnet Mask:     255.255.255.0
Default Gateway: 192.168.1.1
DNS Server:      8.8.8.8
Lease Time:      24 hours`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {configRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<Database />} color={color} text={meaning} code={example} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[720px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thông tin</th><th className="p-4">Ý nghĩa</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {configRows.map(([name, text, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === configRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{text}</td><td className="p-4 text-green-300 font-mono">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DhcpServerSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="DHCP Server là gì?" icon={<Server />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Nơi phát IP tự động" icon={<Server />} color="orange" text="DHCP Server là thiết bị hoặc dịch vụ chịu trách nhiệm quản lý danh sách IP và cấp IP tự động cho client." code={`Mạng gia đình: Router WiFi
Doanh nghiệp: Windows/Linux Server, Firewall, Router, L3 Switch`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <PoolVisual />
          <div className="mt-5 bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-sm text-orange-300">
            DHCP Pool / Scope là vùng IP mà server được phép cấp, ví dụ 192.168.1.100 → 192.168.1.200.
          </div>
        </div>
      </div>
    </section>
  );
}

function DhcpClientSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="DHCP Client là gì?" icon={<Laptop />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Thiết bị đi xin IP" icon={<Laptop />} color="cyan" text="DHCP Client là thiết bị cần xin cấu hình mạng từ DHCP Server. Khi mới vào mạng, nó thường chưa có IP hợp lệ." code={`Có DHCP Server nào ở đây không?
Tôi cần một địa chỉ IP.`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ClientDevicesVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeaseTimeSection() {
  const [hours, setHours] = useState(24);
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Lease Time là gì?" icon={<Clock3 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Thời gian thuê IP" icon={<Timer />} color="green" text="DHCP thường không cấp IP vĩnh viễn. Nó cho thiết bị mượn IP trong một khoảng thời gian. Trước khi hết hạn, thiết bị sẽ xin gia hạn." code={`Lease Time = 24 hours
Thiết bị được dùng IP này trong 24 giờ`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <input type="range" min="1" max="168" step="1" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-green-400" />
            <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-5 text-center">
              <Timer className="mx-auto text-green-300 mb-3" size={40} />
              <p className="text-slate-500 text-xs font-bold uppercase">Lease Time</p>
              <p className="text-green-300 font-black text-4xl mt-1">{hours} giờ</p>
              <p className="text-slate-400 text-sm mt-3">Nếu thiết bị rời mạng lâu, DHCP Server có thể thu hồi IP này để cấp cho thiết bị khác.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DhcpPortsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="DHCP dùng UDP port nào?" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="UDP 67 và UDP 68" icon={<Wifi />} color="purple" text="DHCP dùng UDP trong quy trình cấp IP thông thường. Server dùng UDP 67, client dùng UDP 68. Vì client ban đầu chưa có IP, DHCP thường dùng broadcast trong LAN." code={`DHCP Server: UDP 67
DHCP Client: UDP 68
Client UDP 68 <----> Server UDP 67`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <PortsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Khách sạn phát số phòng" icon={<Home />} color="green" text="Bạn đến khách sạn và hỏi lễ tân phòng trống. Lễ tân cấp phòng 305 trong 2 ngày, chỉ lối ra và thông tin dịch vụ. DHCP cũng cấp IP, lease time, gateway và DNS." code={`Khách mới đến → DHCP Client
Lễ tân → DHCP Server
Số phòng → IP Address
Thời gian ở → Lease Time`} />
        <ConceptCard title="Bãi giữ xe" icon={<Database />} color="orange" text="Bãi xe không bán đứt vị trí cho khách. Khi khách rời đi, vị trí đó lại dùng cho người khác. DHCP cũng tái sử dụng IP sau khi lease hết hoặc thiết bị rời mạng." code={`IP được cấp tạm thời
IP có thể tái sử dụng`} />
      </div>
    </section>
  );
}

function HomeNetworkDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Sơ đồ DHCP trong mạng gia đình" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <HomeNetworkVisual />
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          <MiniCard title="Default Gateway" value="Router ra Internet" color="orange" icon={<Router />} />
          <MiniCard title="DHCP Server" value="Phát IP tự động" color="cyan" icon={<Server />} />
          <MiniCard title="DNS Forwarder" value="Tùy cấu hình" color="purple" icon={<Globe2 />} />
        </div>
      </div>
    </section>
  );
}

function DynamicVsStatic() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="yellow" title="IP động và IP tĩnh" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-emerald-300">IP động qua DHCP</th><th className="p-4 text-orange-300">IP tĩnh cấu hình tay</th></tr></thead>
            <tbody className="text-sm">
              {dynamicStaticRows.map(([criteria, dynamic, statik], i) => <tr key={criteria} className={`${i === dynamicStaticRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{dynamic}</td><td className="p-4 text-slate-300">{statik}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DoraOverview() {
  const [active, setActive] = useState("D");
  const step = doraSteps.find((s) => s.key === active) || doraSteps[0];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="emerald" title="Quy trình DHCP DORA" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={`${step.key} = ${step.name}`} icon={step.icon} color={step.color} text={`${step.from} gửi đến ${step.to}. Ý nghĩa: ${step.meaning}`} code="DORA = Discover → Offer → Request → ACK" />
            <div className="grid grid-cols-4 gap-2">
              {doraSteps.map((s) => <ChoiceButton key={s.key} active={active === s.key} onClick={() => setActive(s.key)} color={s.color}>{s.key}</ChoiceButton>)}
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <DoraVisual active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DoraStepDetail() {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "DHCP Discover", text: "Client mới vào mạng chưa biết DHCP Server ở đâu. Nó gửi broadcast hỏi toàn mạng.", code: "Source IP:      0.0.0.0\nDestination IP: 255.255.255.255\nSource Port: UDP 68\nDest Port: UDP 67", color: "cyan", icon: <Search />
    },
    {
      title: "DHCP Offer", text: "DHCP Server nhận Discover và đề nghị một cấu hình mạng cho client.", code: "IP đề xuất: 192.168.1.100\nSubnet: 255.255.255.0\nGateway: 192.168.1.1\nDNS: 8.8.8.8\nLease: 24 hours", color: "orange", icon: <Send />
    },
    { title: "DHCP Request", text: "Client chọn một Offer và broadcast để thông báo nó đồng ý dùng IP/server đó.", code: "Tôi chọn IP 192.168.1.100 từ DHCP Server 192.168.1.1", color: "purple", icon: <CheckCircle2 /> },
    {
      title: "DHCP ACK", text: "DHCP Server xác nhận chính thức. Sau ACK, client cấu hình card mạng và có thể giao tiếp bình thường.", code: `IP Address
Subnet Mask
Default Gateway
DNS Server
Lease Time`, color: "green", icon: <Award /> },
  ];
  return <StepSection number="12" color="cyan" title="DORA hoạt động từng bước" icon={<Route />} steps={steps} step={step} setStep={setStep} />;
}

function ApipaSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="red" title="Nếu DHCP lỗi thì sao?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="APIPA: 169.254.x.x" icon={<AlertTriangle />} color="red" text="Nếu thiết bị không nhận được IP từ DHCP Server, Windows đôi khi tự nhận địa chỉ APIPA 169.254.x.x. Đây thường là dấu hiệu lỗi DHCP." code={`IP Address: 169.254.12.34
Subnet:     255.255.0.0
Gateway:    trống`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniCard title="Không vào mạng" value="không có IP hợp lệ" color="red" icon={<XCircle />} />
            <MiniCard title="Không ping gateway" value="gateway trống" color="orange" icon={<Router />} />
            <MiniCard title="Không ra Internet" value="thiếu gateway/DNS" color="yellow" icon={<Globe2 />} />
            <div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-red-300 text-sm">
              Máy có thể nói chuyện hạn chế với máy khác cùng dải 169.254.x.x, nhưng thường không ra Internet được.
            </div>
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
      <SectionTitle number="14" color="green" title="Lệnh kiểm tra DHCP thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <ChoiceButton active={tab === "windows"} onClick={() => setTab("windows")} color="blue">Windows</ChoiceButton>
          <ChoiceButton active={tab === "linux"} onClick={() => setTab("linux")} color="green">Linux</ChoiceButton>
          <ChoiceButton active={tab === "macos"} onClick={() => setTab("macos")} color="purple">macOS</ChoiceButton>
          <ChoiceButton active={tab === "wireshark"} onClick={() => setTab("wireshark")} color="cyan">Wireshark</ChoiceButton>
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

function TroubleshootingSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="orange" title="Checklist xử lý lỗi DHCP" icon={<ShieldAlert />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TroubleCard title="Kiểm tra IP" text="IP có phải 169.254.x.x không? Có subnet/gateway/DNS không?" code="ipconfig /all" color="red" />
        <TroubleCard title="Renew lease" text="Nhả IP cũ và xin DHCP mới." code={`ipconfig /release
ipconfig /renew`} color="blue" />
        <TroubleCard title="Kiểm tra DHCP Server" text="Router/DHCP Server có bật DHCP không? Pool còn IP trống không?" code="DHCP pool/scope" color="orange" />
        <TroubleCard title="Kiểm tra VLAN/WiFi" text="Client có vào đúng mạng/VLAN không? DHCP broadcast có đến server không?" code="SSID / VLAN / relay" color="purple" />
        <TroubleCard title="Kiểm tra gateway" text="Có default gateway không? Ping gateway được không?" code="ping 192.168.1.1" color="green" />
        <TroubleCard title="Bắt gói" text="Dùng Wireshark xem có đủ Discover, Offer, Request, ACK không." code="dhcp hoặc bootp" color="cyan" />
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ DHCP chỉ cấp IP", desc: "DHCP thường cấp cả subnet mask, default gateway, DNS server và lease time.", fix: "DHCP cấp cả bộ cấu hình mạng." },
    { title: "Nhầm DHCP với DNS", desc: "DHCP cấp cấu hình mạng. DNS phân giải tên miền thành IP.", fix: "DHCP có thể cấp địa chỉ DNS server cho client." },
    { title: "Quên DHCP dùng UDP", desc: "DHCP dùng UDP 67 phía server và UDP 68 phía client, không dùng TCP trong cấp IP thông thường.", fix: "Server 67, client 68." },
    { title: "Thấy 169.254.x.x mà tưởng mạng ổn", desc: "169.254.x.x thường là APIPA, dấu hiệu máy không lấy được IP từ DHCP.", fix: "Nghi DHCP lỗi hoặc không thấy server." },
    { title: "Gán IP tĩnh trùng với DHCP pool", desc: "Nếu đặt IP tĩnh nằm trong vùng DHCP cấp phát, có thể gây trùng IP.", fix: "Server/router quan trọng nên đặt ngoài pool hoặc dùng reservation." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">17</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>DHCP = Dynamic Host Configuration Protocol.</p>
              <p>DHCP cấp cấu hình mạng tự động.</p>
              <p>DHCP thường cấp IP, subnet mask, default gateway, DNS server, lease time.</p>
              <p>DHCP Server giữ pool/scope IP.</p>
              <p>DHCP Client là thiết bị đi xin IP.</p>
              <p>Lease Time là thời gian thuê IP.</p>
              <p>DHCP dùng UDP server port 67 và client port 68.</p>
              <p>DORA = Discover, Offer, Request, ACK.</p>
              <p>Discover thường dùng source IP 0.0.0.0 và destination 255.255.255.255.</p>
              <p>IP động dễ quản lý nhiều máy hơn IP tĩnh.</p>
              <p>IP tĩnh phù hợp server, router, printer quan trọng.</p>
              <p>169.254.x.x thường là APIPA, dấu hiệu không lấy được IP từ DHCP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "DHCP dùng để làm gì?", options: ["Cấp cấu hình mạng tự động cho thiết bị", "Mã hóa website", "Gửi email", "Phân giải tên miền thành IP"], correct: 0, explanation: "DHCP cấp IP address, subnet mask, default gateway, DNS server và lease time cho thiết bị một cách tự động." },
  { question: "DORA gồm những bước nào?", options: ["Discover → Offer → Request → ACK", "DNS → Open → Route → Access", "Download → Output → Retry → Auth", "Discover → Order → Relay → Accept"], correct: 0, explanation: "DORA là quy trình DHCP cấp IP: client Discover, server Offer, client Request, server ACK." },
  { question: "DHCP Server và DHCP Client dùng port nào?", options: ["Server UDP 67, Client UDP 68", "Server TCP 80, Client TCP 443", "Server UDP 53, Client UDP 25", "Server TCP 22, Client TCP 21"], correct: 0, explanation: "DHCP dùng UDP. Server dùng port 67, client dùng port 68." },
  { question: "DHCP cấp thông tin nào sau đây?", options: ["IP, subnet mask, default gateway, DNS server", "Chỉ username và password", "Chỉ file HTML", "Chỉ email mailbox"], correct: 0, explanation: "DHCP cấp bộ cấu hình mạng, không chỉ mỗi địa chỉ IP." },
  { question: "IP 169.254.20.15 thường gợi ý điều gì?", options: ["Máy không lấy được IP từ DHCP và tự nhận APIPA", "Máy chắc chắn đã ra Internet", "DNS đang chạy hoàn hảo", "Đây là IP public của ISP"], correct: 0, explanation: "169.254.x.x là APIPA, thường xuất hiện khi client không nhận được IP từ DHCP Server." },
  { question: "IP tĩnh thường phù hợp với thiết bị nào hơn?", options: ["Server, router, printer quan trọng", "Điện thoại khách vãng lai", "Laptop nhân viên di chuyển liên tục", "Thiết bị mới chưa biết mạng"], correct: 0, explanation: "Thiết bị hạ tầng quan trọng thường cần IP ổn định; người dùng thông thường phù hợp DHCP hơn." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài DHCP!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang SSH & Telnet — cách quản trị viên truy cập và cấu hình thiết bị mạng từ xa sau khi thiết bị đã có IP.</p>
      <Link to="/phan-7-6" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.6 — SSH & Telnet <ChevronRight size={20} />
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

function HeroDhcpVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-2 gap-3"><MiniCard title="Server" value="UDP 67" color="orange" icon={<Server />} /><MiniCard title="Client" value="UDP 68" color="cyan" icon={<Laptop />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Client ---- Discover ----&gt; Broadcast</p><p className="text-orange-300">Client &lt;--- Offer -------- Server</p><p className="text-purple-300">Client ---- Request -----&gt; Server</p><p className="text-green-300">Client &lt;--- ACK ---------- Server</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="IP" value="192.168.1.50" color="green" icon={<Network />} /><MiniCard title="Gateway" value="192.168.1.1" color="orange" icon={<Router />} /><MiniCard title="DNS" value="8.8.8.8" color="purple" icon={<Globe2 />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function NeedNetworkConfigVisual() {
  const items = [["Mình là ai?", "IP Address", "cyan", <Network />], ["Mạng nội bộ nào?", "Subnet Mask", "blue", <Layers />], ["Ra Internet qua đâu?", "Default Gateway", "orange", <Router />], ["Hỏi tên miền ở đâu?", "DNS Server", "purple", <Globe2 />]];
  return <div className="grid md:grid-cols-2 gap-3">{items.map(([q, a, color, icon]) => <MiniFlowNode key={q} title={q} desc={a} color={color} icon={icon} />)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono`}>{desc}</p></div></div>;
}

function PoolVisual() {
  const ips = ["100", "101", "102", "103", "104", "...", "200"];
  return <div className="space-y-4"><MiniFlowNode title="DHCP Pool" desc="192.168.1.100 → 192.168.1.200" color="orange" icon={<Database />} /><div className="grid grid-cols-4 md:grid-cols-7 gap-2">{ips.map((ip, i) => <div key={`${ip}-${i}`} className={`${i < 3 ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-slate-950 border-slate-800 text-slate-500"} border rounded-xl p-3 text-center font-mono text-sm`}>{ip}</div>)}</div></div>;
}

function ClientDevicesVisual() {
  const devices = [["Laptop", "cyan", <Laptop />], ["Phone", "blue", <Smartphone />], ["Printer", "orange", <HardDrive />], ["Camera IP", "purple", <Wifi />], ["Smart TV", "green", <Tv />], ["Desktop", "yellow", <HardDrive />]];
  return <div className="grid md:grid-cols-3 gap-3">{devices.map(([name, color, icon]) => <MiniCard key={name} title={name} value="DHCP Client" color={color} icon={icon} />)}</div>;
}

function PortsVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="DHCP Client" color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><MiniNode label="DHCP Server" color="orange" icon={<Server />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-2"><p className="text-cyan-300">Source Port: UDP 68</p><p className="text-orange-300">Destination Port: UDP 67</p><p className="text-slate-500">Broadcast when client does not have IP yet.</p></div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function HomeNetworkVisual() {
  return <div className="space-y-4"><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center"><Globe2 className="mx-auto text-cyan-300 mb-2" size={36} /><p className="text-white font-black">Internet</p></div><ArrowRight className="mx-auto text-slate-500 rotate-90" /><div className="bg-orange-500/10 border border-orange-400/40 rounded-3xl p-5 text-center"><Router className="mx-auto text-orange-300 mb-2" size={40} /><p className="text-white font-black">Router WiFi</p><p className="text-orange-300 font-mono text-sm mt-1">LAN IP: 192.168.1.1</p><p className="text-slate-500 text-sm">DHCP Pool: 192.168.1.100-200</p></div><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Laptop" value="192.168.1.101" color="cyan" icon={<Laptop />} /><MiniCard title="Phone" value="192.168.1.102" color="blue" icon={<Smartphone />} /><MiniCard title="Smart TV" value="192.168.1.103" color="green" icon={<Tv />} /></div></div>;
}

function DoraVisual({ active, setActive }) {
  return <div className="space-y-3">{doraSteps.map((s, index) => { const c = colorClasses[s.color]; const on = active === s.key; return <button key={s.key} onClick={() => setActive(s.key)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${on ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${on ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-12 h-12 rounded-2xl flex items-center justify-center font-black`}>{s.key}</div><div><p className="text-white font-black">{s.name}</p><p className="text-slate-500 text-sm mt-1">{s.from} → {s.to}</p><p className={`${c.text} text-sm mt-1`}>{s.meaning}</p></div></button>; })}</div>;
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

function TroubleCard({ title, text, code, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-5`}><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}><ShieldAlert size={24} /></div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed mb-4">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}
