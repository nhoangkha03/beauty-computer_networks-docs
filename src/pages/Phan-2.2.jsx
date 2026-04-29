import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  Binary,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  EthernetPort,
  Eye,
  FileJson,
  Fingerprint,
  Globe2,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  MapPin,
  Network,
  Package,
  Radio,
  Router,
  Search,
  Server,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
  UserRound,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const osiLayers = [
  {
    number: 1,
    id: "physical",
    en: "Physical",
    vi: "Vật lý",
    pdu: "Bit",
    keywords: "Bit, cáp, sóng, tín hiệu",
    main: "Truyền bit 0 và 1 qua môi trường vật lý.",
    detail:
      "Tầng Physical phụ trách truyền dữ liệu ở dạng tín hiệu thật: điện trong cáp đồng, ánh sáng trong cáp quang, sóng radio trong WiFi/Bluetooth/4G/5G. Ở tầng này, máy không quan tâm dữ liệu là ảnh, video hay website; nó chỉ quan tâm làm sao gửi bit từ điểm A đến điểm B.",
    devices: ["Cáp mạng", "Cáp quang", "Card mạng", "Repeater", "Hub", "Sóng WiFi"],
    errors: ["Đứt dây mạng", "Dây lỏng", "Cáp kém chất lượng", "Sóng WiFi yếu", "Cổng mạng hỏng", "Module quang lỗi"],
    checks: ["Kiểm tra đèn cổng mạng", "Kiểm tra dây/cáp", "Kiểm tra WiFi đã kết nối chưa", "ping 192.168.1.1"],
    color: "slate",
    icon: <Cable />,
  },
  {
    number: 2,
    id: "data-link",
    en: "Data Link",
    vi: "Liên kết dữ liệu",
    pdu: "Frame",
    keywords: "MAC, Frame, Switch, ARP, VLAN",
    main: "Truyền dữ liệu giữa các thiết bị trong cùng LAN.",
    detail:
      "Tầng Data Link dùng MAC address để chuyển dữ liệu trong mạng cục bộ. Đơn vị dữ liệu là frame, gồm MAC nguồn, MAC đích, dữ liệu và phần kiểm tra lỗi. Switch dùng MAC table để biết thiết bị nằm ở cổng nào.",
    devices: ["Switch", "Bridge", "Card mạng", "VLAN", "Ethernet", "ARP"],
    errors: ["Sai VLAN", "Switch lỗi", "Loop tầng 2", "Broadcast storm", "MAC table lỗi", "ARP lỗi"],
    checks: ["arp -a", "Kiểm tra VLAN", "Kiểm tra switch port", "Kiểm tra ARP gateway"],
    color: "blue",
    icon: <Fingerprint />,
  },
  {
    number: 3,
    id: "network",
    en: "Network",
    vi: "Mạng",
    pdu: "Packet",
    keywords: "IP, Router, Routing, ICMP, NAT",
    main: "Đưa dữ liệu từ mạng này sang mạng khác.",
    detail:
      "Tầng Network dùng địa chỉ IP để định danh thiết bị/mạng và giúp định tuyến dữ liệu. Router xem IP đích của packet để quyết định gửi đi đâu. Default gateway là cổng mặc định để máy đi ra mạng khác.",
    devices: ["Router", "Layer 3 Switch", "IP", "ICMP", "OSPF/RIP/BGP", "NAT"],
    errors: ["Sai IP", "Sai subnet mask", "Sai default gateway", "Route lỗi", "NAT lỗi", "IP conflict"],
    checks: ["ipconfig", "ping 192.168.1.1", "ping 8.8.8.8", "tracert/traceroute"],
    color: "cyan",
    icon: <Router />,
  },
  {
    number: 4,
    id: "transport",
    en: "Transport",
    vi: "Giao vận",
    pdu: "Segment / Datagram",
    keywords: "TCP, UDP, Port",
    main: "Đưa dữ liệu đến đúng tiến trình ứng dụng bằng port.",
    detail:
      "Tầng Transport dùng TCP/UDP và port. IP giúp tìm đúng máy, còn port giúp tìm đúng ứng dụng/dịch vụ trong máy. TCP tin cậy, có kiểm tra và sắp xếp dữ liệu; UDP nhanh, ít kiểm soát hơn, phù hợp video call, game, livestream.",
    devices: ["TCP", "UDP", "Port 80", "Port 443", "Port 53", "Firewall"],
    errors: ["Port bị chặn", "Firewall chặn TCP/UDP", "Dịch vụ không listen port", "TCP handshake lỗi", "UDP bị chặn"],
    checks: ["netstat -ano", "Test-NetConnection google.com -Port 443", "nc -vz google.com 443"],
    color: "emerald",
    icon: <Split />,
  },
  {
    number: 5,
    id: "session",
    en: "Session",
    vi: "Phiên",
    pdu: "Data",
    keywords: "Session, token, cookie, login",
    main: "Quản lý bắt đầu, duy trì và kết thúc phiên giao tiếp.",
    detail:
      "Tầng Session quản lý phiên làm việc giữa hai bên. Ví dụ: bạn đăng nhập website, server tạo session/token, các request sau dùng session/token đó để nhận ra bạn. Trong Internet hiện đại, nhiều chức năng session được xử lý ở tầng ứng dụng.",
    devices: ["Session ID", "Token", "Cookie", "WebSocket session", "Login session"],
    errors: ["Session hết hạn", "Cookie lỗi", "Token hết hạn", "401 Unauthorized", "Mất trạng thái phiên"],
    checks: ["Kiểm tra cookie/token", "Kiểm tra 401 Unauthorized", "Đăng nhập lại", "Kiểm tra WebSocket/session"],
    color: "orange",
    icon: <UserRound />,
  },
  {
    number: 6,
    id: "presentation",
    en: "Presentation",
    vi: "Trình diễn",
    pdu: "Data",
    keywords: "TLS, mã hóa, nén, định dạng, UTF-8, JSON",
    main: "Xử lý cách dữ liệu được biểu diễn để hai bên hiểu nhau.",
    detail:
      "Tầng Presentation xử lý mã hóa/giải mã, nén/giải nén, định dạng dữ liệu và mã hóa ký tự. Ví dụ: TLS trong HTTPS, JSON/XML cho API, UTF-8 cho văn bản, JPEG/PNG cho ảnh.",
    devices: ["TLS/SSL", "UTF-8", "JSON", "XML", "JPEG/PNG", "gzip/Brotli"],
    errors: ["Lỗi chứng chỉ SSL/TLS", "JSON sai cấu trúc", "Tiếng Việt lỗi font", "Không giải nén được", "TLS handshake lỗi"],
    checks: ["Kiểm tra ổ khóa HTTPS", "curl -v https://example.com", "Kiểm tra encoding", "Kiểm tra JSON/XML"],
    color: "pink",
    icon: <Lock />,
  },
  {
    number: 7,
    id: "application",
    en: "Application",
    vi: "Ứng dụng",
    pdu: "Data",
    keywords: "HTTP, DNS, SMTP, FTP, SSH, DHCP",
    main: "Cung cấp giao thức mạng cho ứng dụng sử dụng.",
    detail:
      "Application Layer là tầng gần người dùng nhất, nhưng không phải giao diện app. Nó là các giao thức ứng dụng mạng như HTTP/HTTPS, DNS, SMTP, FTP/SFTP, SSH, SNMP, DHCP. Chrome là ứng dụng; HTTP/HTTPS là giao thức tầng Application.",
    devices: ["HTTP/HTTPS", "DNS", "SMTP", "FTP/SFTP", "SSH", "DHCP"],
    errors: ["DNS lỗi", "HTTP 404/500/403", "App server lỗi", "Sai API endpoint", "Sai tài khoản/mật khẩu", "Dịch vụ bị tắt"],
    checks: ["nslookup google.com", "curl -I https://example.com", "ipconfig /all", "Kiểm tra log ứng dụng"],
    color: "purple",
    icon: <Globe2 />,
  },
];

const colorClasses = {
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-400/40", solid: "bg-slate-600", ring: "shadow-slate-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  pink: { text: "text-pink-300", bg: "bg-pink-500/10", border: "border-pink-400/40", solid: "bg-pink-500", ring: "shadow-pink-500/20" },
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
  red: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-400/40", solid: "bg-red-500", ring: "shadow-red-500/20" },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Layers className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 2: Mô hình mạng</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 2.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <BottomUpConcept />
        <LayerDeepDive />
        <PduAndAddressTables />
        <RealWorldExamples />
        <HttpsFlowSimulator />
        <TroubleshootingByOsi />
        <CliByLayer />
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
            <ArrowUp size={16} /> Học OSI từ Physical lên Application
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Chi tiết từng tầng OSI:
            <span className="block text-cyan-400">Physical → Application</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này đi sâu từng tầng OSI: tầng nào dùng bit, frame, packet, segment, data; tầng nào liên quan đến cáp, switch, router, IP, TCP/UDP, port, HTTP và DNS.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Học từ dưới lên</p>
            <p><span className="text-slate-300">Physical</span> → <span className="text-blue-300">Data Link</span> → <span className="text-cyan-300">Network</span> → <span className="text-emerald-300">Transport</span> → <span className="text-orange-300">Session</span> → <span className="text-pink-300">Presentation</span> → <span className="text-purple-300">Application</span></p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <OsiStack />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu vai trò chi tiết của từng tầng OSI từ Physical đến Application.",
    "Biết tầng nào dùng bit, frame, packet, segment, data.",
    "Biết tầng nào liên quan đến cáp mạng, switch, router, IP, TCP/UDP, port, HTTP, DNS.",
    "Hiểu cách dữ liệu đi từ máy gửi sang máy nhận qua từng tầng.",
    "Biết dùng mô hình OSI để suy luận khi mạng bị lỗi.",
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

function BottomUpConcept() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao học từ dưới lên?" icon={<ArrowUp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Ở bài 2.1, bạn đã học tổng quan 7 tầng OSI. Bài này học kỹ hơn theo chiều <strong className="text-white">Physical → Application</strong>.</p>
            <p>Lý do: mạng thật bắt đầu từ thứ rất cơ bản như tín hiệu, dây, sóng, bit; rồi mới dần lên đến IP, TCP/UDP, port, HTTP, DNS và ứng dụng.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tư duy xử lý lỗi:</p>
              <p>Không vào được website? Đừng đoán mò. Hãy kiểm tra từ dưới lên: dây/WiFi → MAC/ARP/VLAN → IP/gateway → port/firewall → DNS/HTTP/HTTPS/app.</p>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="space-y-3">
              {osiLayers.map((layer) => {
                const c = colorClasses[layer.color];
                return (
                  <div key={layer.number} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-3`}>
                    <div className={`${c.solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black`}>{layer.number}</div>
                    <div className="flex-1">
                      <p className={`${c.text} font-bold`}>{layer.en}</p>
                      <p className="text-xs text-slate-400">{layer.keywords}</p>
                    </div>
                    {React.cloneElement(layer.icon, { size: 22, className: c.text })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerDeepDive() {
  const [activeNumber, setActiveNumber] = useState(1);
  const active = osiLayers.find((l) => l.number === activeNumber);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Chi tiết từng tầng OSI" icon={<Eye />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {osiLayers.map((layer) => {
            const lc = colorClasses[layer.color];
            const activeTab = layer.number === activeNumber;
            return (
              <button key={layer.number} onClick={() => setActiveNumber(layer.number)} className={`rounded-2xl p-3 text-left border transition-all ${activeTab ? `${lc.bg} ${lc.border} ${lc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2"><span className="font-black text-lg">{layer.number}</span>{React.cloneElement(layer.icon, { size: 16 })}</div>
                <p className="text-xs font-bold">{layer.en}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Tầng {active.number}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-1">{active.en}</h3>
            <p className={`${c.text} font-bold mb-4`}>{active.vi}</p>
            <p className="text-slate-300 leading-relaxed mb-5">{active.detail}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm">
              <p className="text-slate-500">// Đơn vị dữ liệu</p>
              <p className={c.text}>{active.pdu}</p>
            </div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Ý chính" value={active.main} icon={<CircleHelp />} color={active.color} />
            <ChipPanel title="Thiết bị / giao thức / thành phần liên quan" items={active.devices} color={active.color} />
            <ChipPanel title="Lỗi thường gặp" items={active.errors} color="red" />
            <ChipPanel title="Cách kiểm tra" items={active.checks} color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PduAndAddressTables() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Bảng tổng hợp: PDU, địa chỉ, thiết bị" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4">Tầng</th>
                <th className="p-4">Tên</th>
                <th className="p-4">Đơn vị dữ liệu</th>
                <th className="p-4">Từ khóa</th>
                <th className="p-4">Thiết bị/giao thức</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[...osiLayers].reverse().map((layer, index) => {
                const c = colorClasses[layer.color];
                return (
                  <tr key={layer.number} className={`${index === osiLayers.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                    <td className={`p-4 font-black ${c.text}`}>{layer.number}</td>
                    <td className="p-4 text-white font-bold">{layer.en}</td>
                    <td className="p-4 text-slate-300">{layer.pdu}</td>
                    <td className="p-4 text-slate-400">{layer.keywords}</td>
                    <td className="p-4 text-slate-400">{layer.devices.slice(0, 4).join(", ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <AddressCard title="MAC" layer="Tầng 2" example="A4:5E:60:12:AB:9F" desc="Tìm thiết bị trong LAN" color="blue" />
        <AddressCard title="IP" layer="Tầng 3" example="192.168.1.10" desc="Tìm thiết bị/mạng để định tuyến" color="cyan" />
        <AddressCard title="Port" layer="Tầng 4" example="443" desc="Tìm đúng ứng dụng/dịch vụ" color="emerald" />
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("parcel");
  const data = {
    parcel: {
      title: "Gửi hàng qua bưu điện",
      rows: [
        [7, "Bạn quyết định gửi món gì"],
        [6, "Đóng gói, ghi nhãn, chống sốc"],
        [5, "Tạo đơn hàng, mã vận đơn"],
        [4, "Chia hàng thành kiện, theo dõi đủ kiện"],
        [3, "Chọn tuyến thành phố/quốc gia"],
        [2, "Chuyển giữa các bưu cục gần nhau"],
        [1, "Xe tải, máy bay, đường sá"],
      ],
    },
    call: {
      title: "Gọi điện thoại",
      rows: [
        [7, "Bạn mở app gọi điện"],
        [6, "Âm thanh được mã hóa/nén"],
        [5, "Cuộc gọi được thiết lập và duy trì"],
        [4, "Âm thanh được chia thành các gói nhỏ"],
        [3, "Gói tin đi qua mạng đến người nhận"],
        [2, "Dữ liệu đi qua từng chặng mạng gần"],
        [1, "Sóng điện thoại/WiFi truyền tín hiệu"],
      ],
    },
  };
  const current = data[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Ví dụ đời sống" icon={<Package />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("parcel")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "parcel" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Gửi hàng</button>
          <button onClick={() => setMode("call")} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "call" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>Gọi điện</button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">{current.title}</h3>
          <div className="grid md:grid-cols-7 gap-3">
            {current.rows.map(([num, text]) => {
              const layer = osiLayers.find((l) => l.number === num);
              const c = colorClasses[layer.color];
              return (
                <div key={num} className={`${c.bg} ${c.border} border rounded-2xl p-4`}>
                  <p className={`${c.text} font-black mb-2`}>{num}. {layer.en}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsFlowSimulator() {
  const steps = [
    { layer: 7, title: "Application", text: "Trình duyệt tạo HTTP request: GET / HTTP/1.1, Host: example.com", code: "GET / HTTP/1.1\nHost: example.com" },
    { layer: 6, title: "Presentation", text: "Dữ liệu được mã hóa bằng TLS vì dùng HTTPS.", code: "HTTP data → TLS encrypted data" },
    { layer: 5, title: "Session", text: "Máy duy trì phiên giao tiếp với server: TLS session, login session, cookie/token nếu có.", code: "session/token/cookie" },
    { layer: 4, title: "Transport", text: "Dữ liệu được đưa vào TCP, port đích là 443.", code: "192.168.1.10:51524 → 93.184.216.34:443" },
    { layer: 3, title: "Network", text: "Máy thêm IP nguồn và IP đích; nếu IP đích ngoài LAN thì gửi đến default gateway.", code: "IP src 192.168.1.10 → IP dst 93.184.216.34" },
    { layer: 2, title: "Data Link", text: "Laptop dùng ARP để tìm MAC của router rồi tạo frame gửi đến gateway.", code: "MAC laptop → MAC router" },
    { layer: 1, title: "Physical", text: "Frame được chuyển thành bit và sóng WiFi rồi truyền đến Router/AP.", code: "010101010... ))) WiFi" },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const layer = osiLayers.find((l) => l.number === current.layer);
  const c = colorClasses[layer.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Mô phỏng: Laptop truy cập HTTPS qua WiFi" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[355px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(layer.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — Tầng {layer.number}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <FlowStack activeLayer={layer.number} />
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className="text-cyan-300">Điểm quan trọng:</strong> Khi đi qua router, MAC thay đổi theo từng chặng. IP nguồn/đích thường giữ nguyên, trừ khi có NAT.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TroubleshootingByOsi() {
  const symptoms = [
    { text: "Không thấy WiFi", layer: 1, reason: "Có thể lỗi sóng, card WiFi, AP hoặc môi trường vật lý." },
    { text: "Cắm dây nhưng không có link", layer: 1, reason: "Có thể dây/cổng mạng/cáp lỗi." },
    { text: "Có IP nhưng không ping được gateway", layer: "2/3", reason: "Có thể lỗi VLAN/ARP/switch hoặc IP/subnet/gateway." },
    { text: "Ping 8.8.8.8 được, ping google.com không được", layer: 7, reason: "Khả năng cao lỗi DNS ở tầng Application." },
    { text: "Ping được server nhưng không mở web được", layer: "4/7", reason: "Có thể port 80/443 bị chặn hoặc web/app lỗi." },
    { text: "Web báo lỗi chứng chỉ", layer: 6, reason: "Liên quan TLS/SSL certificate." },
    { text: "Đăng nhập xong bị văng ra", layer: "5/7", reason: "Có thể session/cookie/token hoặc ứng dụng lỗi." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="yellow" title="Suy luận lỗi mạng bằng OSI" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quy tắc kiểm tra từ dưới lên</h3>
            <div className="space-y-3 text-sm">
              <TroubleStep n="1" title="Tầng 1" text="Dây có cắm không? WiFi có kết nối không? Đèn cổng mạng có sáng không?" />
              <TroubleStep n="2" title="Tầng 2" text="ARP gateway có thấy không? VLAN đúng không? Switch port hoạt động không?" />
              <TroubleStep n="3" title="Tầng 3" text="Máy có IP không? Gateway đúng không? Ping gateway/8.8.8.8 được không?" />
              <TroubleStep n="4" title="Tầng 4" text="Port 80/443 có bị chặn không? Firewall có chặn không?" />
              <TroubleStep n="5-7" title="Tầng cao" text="DNS, HTTPS certificate, HTTP status, app login/session có lỗi không?" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s) => (
              <div key={s.text} className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-white font-bold mb-2">{s.text}</p>
                <p className="text-yellow-300 text-sm font-bold mb-1">Có thể lỗi tầng {s.layer}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{s.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CliByLayer() {
  const checks = [
    { title: "Tầng 1–2", cmd: "ipconfig\nip addr\narp -a", desc: "Kiểm tra card mạng, IP interface, ARP gateway, trạng thái kết nối." },
    { title: "Tầng 3", cmd: "ping 192.168.1.1\nping 8.8.8.8\ntracert google.com", desc: "Kiểm tra gateway, Internet theo IP và đường đi qua router." },
    { title: "Tầng 4", cmd: "Test-NetConnection google.com -Port 443\nnc -vz google.com 443", desc: "Kiểm tra port TCP/UDP, firewall hoặc dịch vụ có lắng nghe không." },
    { title: "Tầng 7", cmd: "nslookup google.com\ncurl -I https://example.com", desc: "Kiểm tra DNS và HTTP/HTTPS header." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="Lệnh CLI thực hành theo từng tầng" icon={<Terminal />} />
      <div className="grid md:grid-cols-2 gap-4">
        {checks.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap mb-4">{item.cmd}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">9</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-slate-300">Physical</span> = bit, dây, sóng</p>
              <p><span className="text-blue-300">Data Link</span> = frame, MAC, switch</p>
              <p><span className="text-cyan-300">Network</span> = packet, IP, router</p>
              <p><span className="text-emerald-300">Transport</span> = TCP/UDP, port</p>
              <p><span className="text-orange-300">Session</span> = phiên giao tiếp</p>
              <p><span className="text-pink-300">Presentation</span> = mã hóa, nén, định dạng</p>
              <p><span className="text-purple-300">Application</span> = HTTP, DNS, email, SSH</p>
              <br />
              <p className="text-slate-500"># PDU</p>
              <p className="text-slate-300">Data → Segment/Datagram → Packet → Frame → Bits</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Tầng nào trong OSI phụ trách truyền bit qua dây, cáp quang hoặc sóng WiFi?", options: ["Application", "Network", "Physical", "Transport"], correct: 2, explanation: "Physical Layer truyền bit 0 và 1 qua môi trường vật lý như dây, cáp quang hoặc sóng WiFi." },
  { question: "MAC address thuộc tầng nào?", options: ["Tầng 2 — Data Link", "Tầng 3 — Network", "Tầng 4 — Transport", "Tầng 7 — Application"], correct: 0, explanation: "MAC address dùng trong LAN và thuộc tầng 2 — Data Link." },
  { question: "IP address thuộc tầng nào?", options: ["Tầng 1 — Physical", "Tầng 2 — Data Link", "Tầng 3 — Network", "Tầng 5 — Session"], correct: 2, explanation: "IP address dùng để định danh thiết bị/mạng và định tuyến packet, thuộc tầng 3 — Network." },
  { question: "TCP/UDP port thuộc tầng nào?", options: ["Tầng 2", "Tầng 4", "Tầng 6", "Tầng 7"], correct: 1, explanation: "Port thuộc tầng Transport. Nó giúp dữ liệu đến đúng ứng dụng/dịch vụ trên máy." },
  { question: "ping 8.8.8.8 thành công nhưng ping google.com thất bại. Lỗi nhiều khả năng nằm ở đâu?", options: ["Tầng 1 dây mạng chắc chắn đứt", "Tầng 7 DNS", "Tầng 2 MAC chắc chắn lỗi", "Tầng 4 TCP port 443"], correct: 1, explanation: "Ping IP được nghĩa là đường mạng theo IP có thể ổn. Ping tên miền không được thường gợi ý lỗi DNS ở tầng Application." },
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
  if (finished) {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]">
        <div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div>
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4>
        <p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p>
        <button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button>
      </div>
    );
  }
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
      {showResult && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi hiểu OSI 7 tầng, bài tiếp theo sẽ học mô hình TCP/IP 4 tầng — mô hình thực tế dùng nhiều trong Internet.</p>
      <Link to="/phan-2-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 2.3 — Mô hình TCP/IP 4 tầng <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    purple: "bg-purple-500/20 text-purple-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
  };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function OsiStack() {
  return (
    <div className="space-y-2">
      {[...osiLayers].reverse().map((layer) => {
        const c = colorClasses[layer.color];
        return (
          <div key={layer.number} className={`${c.bg} ${c.border} border rounded-2xl p-3 flex items-center gap-3`}>
            <div className={`${c.solid} text-white w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div>
            <div className="flex-1 min-w-0">
              <p className={`${c.text} font-black text-sm`}>{layer.en}</p>
              <p className="text-xs text-slate-400 truncate">{layer.pdu} • {layer.keywords}</p>
            </div>
            <div className={c.text}>{React.cloneElement(layer.icon, { size: 20 })}</div>
          </div>
        );
      })}
    </div>
  );
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function ChipPanel({ title, items, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-white font-bold mb-3">{title}</h4><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}</div></div>;
}

function AddressCard({ title, layer, example, desc, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><p className={`${c.text} font-black text-2xl mb-1`}>{title}</p><p className="text-white font-bold mb-3">{layer}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 font-mono text-sm text-green-300 mb-3">{example}</div><p className="text-sm text-slate-300">{desc}</p></div>;
}

function FlowStack({ activeLayer }) {
  return <div className="space-y-2">{[...osiLayers].reverse().map((layer) => { const c = colorClasses[layer.color]; const active = layer.number === activeLayer; return <div key={layer.number} className={`${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-3 flex items-center gap-3 transition-all`}><div className={`${active ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div><div className="flex-1"><p className={`${active ? c.text : "text-slate-400"} font-bold text-sm`}>{layer.en}</p><p className="text-xs text-slate-500">{layer.pdu}</p></div>{active && <Zap className={c.text} size={18} />}</div>; })}</div>;
}

function TroubleStep({ n, title, text }) {
  return <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"><p className="text-yellow-300 font-black mb-1">Step {n} — {title}</p><p className="text-slate-300 leading-relaxed">{text}</p></div>;
}
