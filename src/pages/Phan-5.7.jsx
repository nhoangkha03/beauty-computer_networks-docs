import React, { useMemo, useState } from "react";
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
  DoorOpen,
  Globe2,
  Home,
  KeyRound,
  Layers,
  Lock,
  Network,
  Package,
  PackageCheck,
  RadioTower,
  RefreshCw,
  Router,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Shuffle,
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

const patRows = [
  ["tcp", "192.168.1.10:51514", "203.0.113.5:40001", "142.250.190.14:443"],
  ["tcp", "192.168.1.11:51515", "203.0.113.5:40002", "1.1.1.1:443"],
  ["tcp", "192.168.1.12:51516", "203.0.113.5:40003", "8.8.8.8:443"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <RefreshCw className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 5: Tầng Mạng — Network Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 5.7</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyNat />
        <NatConcept />
        <NatTerms />
        <PatConcept />
        <NatHowItWorks />
        <NatTypes />
        <PortForwarding />
        <NatVsFirewall />
        <NatSecurity />
        <NatIpv4Ipv6 />
        <CiscoPatConfig />
        <StaticNatConfig />
        <PortForwardConfig />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <RefreshCw size={16} /> Private IP ra Internet bằng public IP
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            NAT & PAT
            <span className="block text-cyan-400">Network Address Translation</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            NAT dịch địa chỉ private thành public khi ra Internet. PAT mở rộng NAT bằng cách dùng port để nhiều thiết bị cùng chia sẻ một public IP.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">NAT</span> = dịch địa chỉ IP.</p>
            <p><span className="text-emerald-300">PAT</span> = dịch IP + port.</p>
            <p><span className="text-orange-300">NAT Overload</span> = PAT trên Cisco.</p>
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
    "Hiểu NAT là gì và vì sao cần NAT.",
    "Hiểu private IP truy cập Internet qua public IP như thế nào.",
    "Biết PAT/NAT Overload hoạt động bằng port ra sao.",
    "Phân biệt Static NAT, Dynamic NAT và PAT.",
    "Biết cấu hình NAT/PAT cơ bản và lỗi thường gặp.",
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

function WhyNat() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần NAT?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Private IPv4 như <strong className="text-white font-mono">192.168.x.x</strong>, <strong className="text-white font-mono">10.x.x.x</strong> dùng trong mạng nội bộ nhưng không được định tuyến trực tiếp trên Internet.</p>
            <p>NAT giúp máy private IP truy cập Internet thông qua public IP của router.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>NAT là cầu nối giữa mạng private bên trong và Internet public bên ngoài.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><HomeNatVisual /></div>
        </div>
      </div>
    </section>
  );
}

function NatConcept() {
  const [direction, setDirection] = useState("out");
  const out = direction === "out";
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="NAT là gì?" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Network Address Translation" icon={<RefreshCw />} color="cyan" text="Router NAT thay đổi địa chỉ IP trong packet khi packet đi qua ranh giới inside/outside." code="Before NAT: 192.168.1.10 → 8.8.8.8\nAfter NAT:  203.0.113.5 → 8.8.8.8" />
            <button onClick={() => setDirection(out ? "in" : "out")} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${out ? "bg-cyan-500 text-white" : "bg-emerald-500 text-white"}`}>{out ? "Packet đi ra Internet" : "Packet quay về LAN"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <NatDirectionVisual direction={direction} />
            <div className={`rounded-2xl border p-4 text-sm ${out ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"}`}>
              {out ? "Khi đi ra ngoài, router đổi Source IP từ private thành public." : "Khi dữ liệu quay về, router đổi Destination IP từ public về private đúng máy trong LAN."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NatTerms() {
  const terms = [
    ["Inside Local", "Địa chỉ private của máy bên trong", "192.168.1.10", "cyan", <Home />],
    ["Inside Global", "Địa chỉ public đại diện máy bên trong sau NAT", "203.0.113.5", "emerald", <Globe2 />],
    ["Outside Global", "Địa chỉ public thật của máy ngoài Internet", "8.8.8.8", "orange", <Server />],
    ["Outside Local", "Cách mạng nội bộ nhìn địa chỉ bên ngoài, thường giống Outside Global", "8.8.8.8", "purple", <Network />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Inside Local, Inside Global là gì?" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-4 gap-4">
        {terms.map(([title, text, code, color, icon]) => <ConceptCard key={title} title={title} text={text} code={code} color={color} icon={icon} />)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 text-green-300 whitespace-pre-wrap">Inside Local  = IP private bên trong
          Inside Global = IP public sau khi NAT

          192.168.1.10  →  203.0.113.5</div>
      </div>
    </section>
  );
}

function PatConcept() {
  const [device, setDevice] = useState(0);
  const row = patRows[device];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="PAT là gì?" icon={<KeyRound />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Port Address Translation" icon={<KeyRound />} color="emerald" text="PAT cho phép nhiều private host dùng chung một public IP nhờ phân biệt từng kết nối bằng port." code="Private IP:Port → Public IP:Port" />
        <ConceptCard title="NAT Overload" icon={<Layers />} color="orange" text="Trên Cisco, PAT thường được gọi là NAT Overload với từ khóa overload." code="ip nat inside source list 1 interface g0/1 overload" />
        <ConceptCard title="Bảng PAT" icon={<Database />} color="cyan" text="Router lưu bảng ánh xạ để biết packet trả về public IP:port nào thì chuyển cho private IP:port nào." code="203.0.113.5:40001 ↔ 192.168.1.10:51514" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <Slider label="Thiết bị trong LAN" value={device} setValue={setDevice} min={0} max={2} suffix="" color="emerald" display={["Laptop", "Phone", "TV"][device]} />
            <InfoBox title="Ánh xạ đang chọn" value={`${row[1]} → ${row[2]}\nĐích: ${row[3]}`} icon={<ArrowRight />} color="emerald" />
          </div>
          <PatTable active={device} />
        </div>
      </div>
    </section>
  );
}

function NatHowItWorks() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Laptop tạo kết nối TCP", text: "Laptop muốn truy cập website HTTPS bên ngoài Internet.", code: "Src: 192.168.1.10:51514\nDst: 142.250.190.14:443", color: "cyan", icon: <Package /> },
    { title: "Packet đi đến default gateway", text: "Server không cùng LAN, nên laptop gửi frame đến router.", code: "Layer 2 Dst MAC = MAC Router\nLayer 3 Dst IP = 142.250.190.14", color: "orange", icon: <Router /> },
    { title: "Router thực hiện PAT", text: "Router đổi Source IP và Source Port, rồi lưu bảng PAT.", code: "192.168.1.10:51514\n→ 203.0.113.5:40001", color: "emerald", icon: <RefreshCw /> },
    { title: "Server nhận request", text: "Server thấy request đến từ public IP và port của router.", code: "Src: 203.0.113.5:40001\nDst: 142.250.190.14:443", color: "purple", icon: <Globe2 /> },
    { title: "Server trả lời", text: "Packet trả về public IP:port đã được router dùng khi PAT.", code: "Src: 142.250.190.14:443\nDst: 203.0.113.5:40001", color: "blue", icon: <ArrowDown /> },
    { title: "Router tra bảng PAT", text: "Router thấy 203.0.113.5:40001 tương ứng với 192.168.1.10:51514.", code: "203.0.113.5:40001 ↔ 192.168.1.10:51514", color: "yellow", icon: <Database /> },
    { title: "Router dịch ngược", text: "Router đổi Destination IP/Port về laptop và gửi vào LAN.", code: "Dst: 203.0.113.5:40001\n→ 192.168.1.10:51514", color: "green", icon: <CheckCircle2 /> },
  ];
  return <StepSection number="6" color="green" title="Cơ chế hoạt động của PAT" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function NatTypes() {
  const [type, setType] = useState("pat");
  const types = {
    static: { title: "Static NAT", color: "cyan", icon: <Lock />, text: "Ánh xạ cố định 1 private IP với 1 public IP. Dùng khi server nội bộ cần public IP ổn định.", code: "192.168.1.100 ↔ 203.0.113.100" },
    dynamic: { title: "Dynamic NAT", color: "purple", icon: <Shuffle />, text: "Dùng pool public IP để cấp tạm thời cho private host. Số host đồng thời bị giới hạn bởi số public IP trong pool.", code: "192.168.1.10 → 203.0.113.10\n192.168.1.11 → 203.0.113.11" },
    pat: { title: "PAT / NAT Overload", color: "emerald", icon: <Users />, text: "Nhiều private host dùng chung một public IP bằng cách phân biệt port. Đây là kiểu phổ biến nhất trong gia đình/văn phòng.", code: "192.168.1.10:50001 → 203.0.113.5:40001" },
  };
  const cur = types[type];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Các loại NAT phổ biến" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(types).map(([key, val]) => <button key={key} onClick={() => setType(key)} className={`px-4 py-2.5 rounded-xl font-bold text-sm ${type === key ? `${colorClasses[val.color].solid} text-white` : "text-slate-400 hover:bg-slate-800"}`}>{val.title}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title={cur.title} icon={cur.icon} color={cur.color} text={cur.text} code={cur.code} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6"><NatTypeVisual type={type} /></div>
        </div>
      </div>
    </section>
  );
}

function PortForwarding() {
  const [port, setPort] = useState("web");
  const isWeb = port === "web";
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="orange" title="Port Forwarding" icon={<DoorOpen />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Port Forwarding" icon={<DoorOpen />} color="orange" text="Cho phép người ngoài Internet truy cập dịch vụ nội bộ thông qua public IP và port của router." code="203.0.113.5:80 → 192.168.1.100:80" />
            <div className="flex gap-2">
              <button onClick={() => setPort("web")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${isWeb ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Web</button>
              <button onClick={() => setPort("ssh")} className={`flex-1 px-4 py-3 rounded-xl font-bold ${!isWeb ? "bg-purple-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>SSH</button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <PortForwardVisual type={port} />
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-red-300 text-sm">
              Mở port ra Internet có rủi ro. Nên dùng firewall, mật khẩu mạnh, SSH key, giới hạn IP hoặc VPN.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NatVsFirewall() {
  const rows = [
    ["Mục đích chính", "Dịch địa chỉ IP/port", "Cho phép hoặc chặn traffic"],
    ["Chức năng bảo mật chính?", "Không", "Có"],
    ["Ví dụ", "192.168.1.10 → 203.0.113.5", "Chặn port 23 Telnet từ Internet"],
    ["Có thể đi cùng nhau?", "Có", "Có"],
  ];
  return <ComparisonTable number="9" title="NAT và Firewall có giống nhau không?" rows={rows} left="NAT" right="Firewall" leftColor="cyan" rightColor="red" />;
}

function NatSecurity() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="red" title="NAT có phải là bảo mật không?" icon={<ShieldAlert />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="NAT không thay thế firewall" icon={<XCircle />} color="red" text="NAT có thể che địa chỉ nội bộ, nhưng không kiểm tra malware, không mã hóa dữ liệu và không tự bảo vệ server nội bộ." code="NAT ≠ Firewall\nNAT ≠ Encryption" />
        <ConceptCard title="Cần chính sách bảo mật" icon={<ShieldCheck />} color="green" text="Bảo mật thật sự cần firewall rule, ACL, VPN, IDS/IPS, patch hệ thống và kiểm soát port mở." code="Firewall + ACL + VPN + Monitoring" />
      </div>
    </section>
  );
}

function NatIpv4Ipv6() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="NAT trong IPv4 và IPv6" icon={<Globe2 />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="IPv4" icon={<Network />} color="orange" text="NAT/PAT cực kỳ phổ biến trong IPv4 vì thiếu public IPv4. Gia đình và doanh nghiệp thường dùng private IP bên trong, public IP ở router." code="192.168.1.10 → 203.0.113.5" />
        <ConceptCard title="IPv6" icon={<Globe2 />} color="cyan" text="IPv6 có không gian địa chỉ rất lớn nên giảm nhu cầu NAT để tiết kiệm địa chỉ, nhưng vẫn cần firewall và security policy." code="Global IPv6 không đồng nghĩa tự động an toàn" />
      </div>
    </section>
  );
}

function CiscoPatConfig() {
  const [tab, setTab] = useState("inside");
  const tabs = {
    inside: { title: "Đánh dấu inside/outside", code: "Router(config)# interface g0/0\nRouter(config-if)# ip nat inside\nRouter(config-if)# exit\n\nRouter(config)# interface g0/1\nRouter(config-if)# ip nat outside\nRouter(config-if)# exit", note: "G0/0 là phía LAN, G0/1 là phía Internet." },
    acl: { title: "Tạo ACL chọn mạng được NAT", code: "Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255", note: "ACL 1 chọn mạng LAN 192.168.1.0/24 được phép NAT." },
    overload: { title: "Cấu hình PAT / NAT Overload", code: "Router(config)# ip nat inside source list 1 interface g0/1 overload", note: "Các IP khớp ACL 1 sẽ dùng IP interface g0/1 để ra Internet, nhiều host dùng chung bằng port." },
    verify: { title: "Kiểm tra NAT", code: "Router# show ip nat translations\nRouter# show ip nat statistics\nRouter# clear ip nat translation *", note: "show ip nat translations xem bảng NAT/PAT hiện tại." },
  };
  const cur = tabs[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="Cấu hình PAT / NAT Overload trên Cisco" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">nat overload lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.keys(tabs).map((key) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[320px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {cur.title}</p>
              <p className="text-green-300">{cur.code}</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{cur.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="ip nat inside" desc="Đánh dấu interface phía mạng trong." />
            <ExplainRow term="ip nat outside" desc="Đánh dấu interface phía Internet/WAN." />
            <ExplainRow term="overload" desc="Bật PAT, cho nhiều host dùng chung public IP bằng port." />
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticNatConfig() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="cyan" title="Cấu hình Static NAT cơ bản" icon={<Lock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mô hình" icon={<Server />} color="cyan" text="Web server nội bộ cần public IP cố định để bên ngoài truy cập." code="Inside local:  192.168.1.100\nInside global: 203.0.113.100" />
        <ConceptCard title="Lệnh Cisco" icon={<Terminal />} color="green" text="Ánh xạ cố định private IP 192.168.1.100 thành public IP 203.0.113.100." code="ip nat inside source static 192.168.1.100 203.0.113.100" />
      </div>
    </section>
  );
}

function PortForwardConfig() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="orange" title="Cấu hình Port Forwarding cơ bản" icon={<DoorOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mô hình SSH" icon={<Server />} color="orange" text="Người ngoài kết nối public IP port 2222, router chuyển vào server nội bộ port 22." code="203.0.113.5:2222 → 192.168.1.50:22" />
        <ConceptCard title="Lệnh Cisco" icon={<Terminal />} color="purple" text="Static PAT cho TCP port cụ thể." code="ip nat inside source static tcp 192.168.1.50 22 203.0.113.5 2222" />
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Quên inside/outside", desc: "Không cấu hình ip nat inside/outside thì router không biết chiều nào cần NAT.", fix: "Đánh dấu đúng interface LAN và WAN." },
    { title: "ACL NAT sai", desc: "LAN là 192.168.1.0/24 nhưng ACL permit 192.168.2.0/24, máy sẽ không được NAT.", fix: "Kiểm tra ACL và wildcard mask." },
    { title: "Thiếu default route", desc: "Router NAT xong nhưng không biết gửi packet ra Internet ở đâu.", fix: "Cấu hình default route ra ISP." },
    { title: "Client thiếu default gateway", desc: "Client không biết gửi traffic khác mạng LAN cho router nào.", fix: "Gateway của client nên là IP LAN router." },
    { title: "Port forwarding bị firewall chặn", desc: "NAT chuyển đúng nhưng firewall router/server chặn port dịch vụ.", fix: "Kiểm tra rule firewall và service đang listen." },
    { title: "Nhầm NAT với DNS", desc: "Ping 8.8.8.8 được nhưng google.com không được thường là lỗi DNS, không phải NAT.", fix: "Kiểm tra DNS resolver." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="yellow" title="Lỗi NAT/PAT thường gặp" icon={<AlertTriangle />} />
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
              <p>NAT = dịch địa chỉ IP.</p>
              <p>NAT giúp private IP truy cập Internet qua public IP.</p>
              <p>PAT = dịch IP + port.</p>
              <p>PAT cho nhiều thiết bị dùng chung một public IP.</p>
              <p>NAT Overload là PAT trên Cisco.</p>
              <p>Static NAT = ánh xạ 1-1 cố định.</p>
              <p>Dynamic NAT = dùng pool public IP.</p>
              <p>Port Forwarding = public port → private server.</p>
              <p>NAT không thay thế firewall.</p>
              <p>IPv6 giảm nhu cầu NAT nhưng vẫn cần bảo mật.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "NAT dùng để làm gì?", options: ["Phân giải tên miền thành IP", "Dịch địa chỉ IP private sang public khi ra Internet", "Mã hóa dữ liệu WiFi", "Chia VLAN trên switch"], correct: 1, explanation: "NAT dịch địa chỉ private bên trong thành địa chỉ public khi truy cập Internet." },
  { question: "PAT khác NAT cơ bản ở điểm nào?", options: ["PAT dùng địa chỉ MAC", "PAT dịch cả IP và port, cho nhiều host dùng chung một public IP", "PAT chỉ dùng cho IPv6", "PAT thay thế hoàn toàn routing table"], correct: 1, explanation: "PAT dùng port để phân biệt nhiều kết nối từ nhiều private host khi chia sẻ một public IP." },
  { question: "Trên Cisco, PAT thường được gọi là gì?", options: ["NAT Overload", "VLAN Trunk", "OSPF Area", "ARP Cache"], correct: 0, explanation: "Cisco thường gọi PAT là NAT Overload, dùng từ khóa overload." },
  { question: "Inside Local là gì?", options: ["IP public của router", "IP private của host bên trong", "IP của server Internet", "Port HTTPS"], correct: 1, explanation: "Inside Local là địa chỉ private của thiết bị bên trong mạng, ví dụ 192.168.1.10." },
  { question: "Port Forwarding dùng để làm gì?", options: ["Cho người ngoài truy cập dịch vụ nội bộ qua public IP/port", "Tắt NAT", "Phân giải DNS", "Tăng hop count RIP"], correct: 0, explanation: "Port forwarding ánh xạ public IP:port đến private IP:port của server nội bộ." },
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
      <p className="text-slate-400 mb-4">Sau NAT/PAT, bài tiếp theo tổng hợp cách router nhận packet, tra route, xử lý TTL, NAT, ARP và tạo frame mới.</p>
      <Link to="/phan-5-8" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 5.8 — Router: Nguyên lý hoạt động <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() { return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="Private" value="192.168.1.10" color="cyan" icon={<Home />} /><MiniCard title="Public" value="203.0.113.5" color="emerald" icon={<Globe2 />} /><MiniCard title="Port" value="40001" color="orange" icon={<KeyRound />} /></div><PatTable compact active={0} /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">192.168.1.10:51514\n→ 203.0.113.5:40001</div></div>; }
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function HomeNatVisual() { return <div className="space-y-5"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Laptop" sub="192.168.1.10" color="cyan" icon={<Server />} /><ArrowRight className="text-slate-500" /><Node label="Router NAT" sub="203.0.113.5" color="orange" icon={<Router />} /><ArrowRight className="text-slate-500" /><Node label="Internet" sub="8.8.8.8" color="emerald" icon={<Globe2 />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Private IP không route trực tiếp trên Internet → NAT thành public IP.</div></div>; }
function Node({ label, sub, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-white font-bold text-sm">{label}</p><p className="text-xs text-slate-500 mt-1">{sub}</p></div>; }
function NatDirectionVisual({ direction }) { const out = direction === "out"; return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="PC" sub={out ? "Src 192.168.1.10" : "Dst 192.168.1.10"} color="cyan" icon={<Server />} /><ArrowRight className={out ? "text-cyan-300" : "text-slate-600"} /><Node label="NAT" sub="203.0.113.5" color="orange" icon={<RefreshCw />} /><ArrowRight className={out ? "text-cyan-300" : "text-emerald-300 rotate-180"} /><Node label="Server" sub="8.8.8.8" color="emerald" icon={<Globe2 />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 whitespace-pre-wrap">{out ? "Before: Src 192.168.1.10 → Dst 8.8.8.8\nAfter:  Src 203.0.113.5 → Dst 8.8.8.8" : "Before: Src 8.8.8.8 → Dst 203.0.113.5\nAfter:  Src 8.8.8.8 → Dst 192.168.1.10"}</div></div>; }
function Slider({ label, value, setValue, min, max, suffix, color, display }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{display ?? value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function PatTable({ active = 0, compact = false }) { return <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 overflow-x-auto"><table className="w-full text-left min-w-[620px]"><thead><tr className="text-sm text-slate-500 border-b border-slate-800"><th className="p-3">Pro</th><th className="p-3">Inside Local</th><th className="p-3">Inside Global</th><th className="p-3">Destination</th></tr></thead><tbody>{patRows.map(([pro, local, global, dst], idx) => <tr key={local} className={`${idx === active ? "bg-emerald-500/10" : ""} border-b border-slate-800 last:border-0`}><td className="p-3 text-slate-400 font-mono">{pro}</td><td className="p-3 text-cyan-300 font-mono">{local}</td><td className="p-3 text-emerald-300 font-mono">{global}</td><td className="p-3 text-orange-300 font-mono">{dst}</td></tr>)}</tbody></table></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function NatTypeVisual({ type }) { if (type === "static") return <div className="space-y-4"><MapLine a="192.168.1.100" b="203.0.113.100" color="cyan" /><div className="text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 font-mono text-sm">1 private IP ↔ 1 public IP cố định</div></div>; if (type === "dynamic") return <div className="space-y-3">{["203.0.113.10", "203.0.113.11", "203.0.113.12"].map((ip, i) => <MapLine key={ip} a={`192.168.1.${10 + i}`} b={ip} color="purple" />)}<div className="text-purple-300 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 font-mono text-sm">Public IP lấy từ pool tạm thời</div></div>; return <PatTable active={0} />; }
function MapLine({ a, b, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center justify-between gap-3 font-mono text-sm`}><span className="text-cyan-300">{a}</span><ArrowRight className={c.text} /><span className="text-emerald-300">{b}</span></div>; }
function PortForwardVisual({ type }) { const web = type === "web"; return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><Node label="Internet User" sub="outside" color="cyan" icon={<Globe2 />} /><ArrowRight className="text-orange-300" /><Node label="Router" sub={web ? "203.0.113.5:80" : "203.0.113.5:2222"} color="orange" icon={<Router />} /><ArrowRight className="text-orange-300" /><Node label="Server LAN" sub={web ? "192.168.1.100:80" : "192.168.1.50:22"} color="purple" icon={<Server />} /></div><div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 font-mono text-sm">{web ? "203.0.113.5:80 → 192.168.1.100:80" : "203.0.113.5:2222 → 192.168.1.50:22"}</div></div>; }
function ComparisonTable({ number, title, rows, left, right, leftColor, rightColor }) { return <section className="space-y-6"><SectionTitle number={number} color="cyan" title={title} icon={<TableProperties />} /><div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-left min-w-[820px]"><thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className={`p-4 ${colorClasses[leftColor].text}`}>{left}</th><th className={`p-4 ${colorClasses[rightColor].text}`}>{right}</th></tr></thead><tbody className="text-sm">{rows.map(([criteria, a, b], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{a}</td><td className="p-4 text-slate-300">{b}</td></tr>)}</tbody></table></div></div></section>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
