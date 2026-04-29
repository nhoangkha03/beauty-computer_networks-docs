import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  EthernetPort,
  Fingerprint,
  Globe2,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Mail,
  Network,
  Package,
  RadioTower,
  Router,
  Search,
  Server,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
  Truck,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const tcpIpLayers = [
  {
    number: 4,
    id: "application",
    en: "Application",
    vi: "Ứng dụng",
    osi: "OSI 7, 6, 5",
    keywords: "HTTP, HTTPS, DNS, DHCP, TLS, SMTP, SSH",
    pdu: "Data",
    main: "Chứa các giao thức mà ứng dụng dùng để giao tiếp qua mạng.",
    detail:
      "Application Layer trong TCP/IP gom nhiều việc của 3 tầng trên OSI: giao thức ứng dụng, định dạng dữ liệu, mã hóa, nén và quản lý phiên. Khi bạn nhập https://example.com, tầng này có thể xử lý HTTPS, TLS, DNS, cookie/session.",
    protocols: ["HTTP", "HTTPS", "DNS", "DHCP", "SMTP", "IMAP/POP3", "FTP/SFTP", "SSH", "SNMP"],
    checks: ["nslookup google.com", "curl -I https://example.com", "ipconfig /all", "Kiểm tra HTTP status"],
    color: "purple",
    icon: <Globe2 />,
  },
  {
    number: 3,
    id: "transport",
    en: "Transport",
    vi: "Giao vận",
    osi: "OSI 4",
    keywords: "TCP, UDP, Port",
    pdu: "Segment / Datagram",
    main: "Đưa dữ liệu đến đúng ứng dụng trên máy đích bằng port.",
    detail:
      "Transport Layer dùng TCP/UDP và port. IP giúp tìm đúng máy, còn port giúp tìm đúng dịch vụ trong máy đó. TCP tin cậy, có kết nối và gửi lại khi mất; UDP nhanh, ít kiểm soát hơn, phù hợp video call, game, livestream, DNS.",
    protocols: ["TCP", "UDP", "Port 80", "Port 443", "Port 53", "Port 22", "Port 3306"],
    checks: ["Test-NetConnection google.com -Port 443", "nc -vz google.com 443", "netstat -ano"],
    color: "emerald",
    icon: <Split />,
  },
  {
    number: 2,
    id: "internet",
    en: "Internet",
    vi: "Internet / Liên mạng",
    osi: "OSI 3",
    keywords: "IP, ICMP, Router, Routing, NAT",
    pdu: "Packet",
    main: "Định địa chỉ IP và đưa packet qua nhiều mạng khác nhau.",
    detail:
      "Internet Layer dùng IP address để xác định nguồn/đích và định tuyến dữ liệu qua nhiều mạng. Router hoạt động ở tầng này. ICMP phục vụ kiểm tra kết nối như ping. NAT có thể đổi IP private thành IP public khi ra Internet.",
    protocols: ["IPv4", "IPv6", "ICMP", "Router", "Routing", "NAT", "Default Gateway"],
    checks: ["ping 8.8.8.8", "tracert google.com", "traceroute google.com", "ipconfig"],
    color: "cyan",
    icon: <Router />,
  },
  {
    number: 1,
    id: "network-access",
    en: "Network Access",
    vi: "Truy cập mạng",
    osi: "OSI 2, 1",
    keywords: "Ethernet, WiFi, MAC, ARP, Frame, Bit",
    pdu: "Frame / Bit",
    main: "Đưa dữ liệu vào môi trường truyền thật: dây, WiFi, cáp quang, sóng.",
    detail:
      "Network Access Layer gần tương ứng với OSI tầng 1 và 2. Nó xử lý Ethernet/WiFi, MAC address, ARP, frame, switch, card mạng và tín hiệu vật lý. Nói ngắn: MAC + Frame + dây/sóng.",
    protocols: ["Ethernet", "WiFi / 802.11", "MAC address", "ARP", "Frame", "Switch", "Bit"],
    checks: ["Kiểm tra WiFi/dây", "ip addr", "arp -a", "Kiểm tra đèn cổng mạng"],
    color: "blue",
    icon: <EthernetPort />,
  },
];

const colorClasses = {
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
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
              <Network className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 2: Mô hình mạng</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 2.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhatIsTcpIp />
        <FourLayerMap />
        <LayerExplorer />
        <OsiMapping />
        <ProtocolTables />
        <RealWorldExamples />
        <HttpsFlowSimulator />
        <Troubleshooting />
        <CliLab />
        <Misunderstandings />
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
            <Globe2 size={16} /> Mô hình thực tế của Internet
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Mô hình TCP/IP:
            <span className="block text-cyan-400">4 tầng nền tảng Internet</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            TCP/IP là bộ giao thức giúp Windows, macOS, Android, iPhone và server Linux giao tiếp được với nhau trên Internet.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Cực ngắn</p>
            <p><span className="text-purple-300">App</span> → <span className="text-emerald-300">Port</span> → <span className="text-cyan-300">IP</span> → <span className="text-blue-300">MAC + tín hiệu</span></p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <TcpIpStack />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu mô hình TCP/IP là gì.",
    "Biết vì sao TCP/IP thường được xem là mô hình thực tế của Internet.",
    "Biết 4 tầng trong mô hình TCP/IP.",
    "Hiểu TCP/IP liên hệ với OSI như thế nào.",
    "Biết dữ liệu đi qua 4 tầng khi truy cập website, gửi email hoặc dùng ứng dụng mạng.",
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

function WhatIsTcpIp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="TCP/IP là gì?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-white">TCP/IP</strong> là bộ giao thức nền tảng của Internet. Tên này đến từ hai giao thức rất quan trọng: TCP và IP.</p>
            <p>Nhưng TCP/IP không chỉ có TCP và IP. Nó là cả một bộ giao thức gồm HTTP, HTTPS, DNS, DHCP, FTP, SMTP, TCP, UDP, IP, ICMP, ARP, Ethernet và nhiều thành phần khác.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Cách hiểu đời thường:</p>
              <p>TCP/IP là “bộ luật giao thông” giúp các thiết bị trên Internet hiểu nhau và trao đổi dữ liệu được.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ProtocolHeroCard title="TCP" subtitle="Transmission Control Protocol" desc="Truyền dữ liệu tin cậy giữa các ứng dụng." color="emerald" icon={<ShieldCheck />} />
            <ProtocolHeroCard title="IP" subtitle="Internet Protocol" desc="Định địa chỉ và đưa dữ liệu đi qua nhiều mạng." color="cyan" icon={<Router />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FourLayerMap() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="4 tầng của TCP/IP" icon={<Layers />} />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <TcpIpStack />
        </div>
        <div className="space-y-4">
          <DirectionCard icon={<ArrowDown />} title="Khi gửi dữ liệu" subtitle="Application → Transport → Internet → Network Access" body="Ứng dụng tạo dữ liệu, TCP/UDP thêm port, IP thêm địa chỉ, Network Access chuyển thành frame/bit để truyền qua dây hoặc WiFi." color="cyan" />
          <DirectionCard icon={<ArrowUp />} title="Khi nhận dữ liệu" subtitle="Network Access → Internet → Transport → Application" body="Máy nhận đọc dữ liệu từ môi trường truyền, kiểm tra IP, kiểm tra port, rồi đưa nội dung lên ứng dụng phù hợp." color="emerald" />
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
            <h3 className="text-white font-bold mb-3">Ghi nhớ cực ngắn</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm">
              <p><span className="text-purple-300">Ứng dụng</span></p>
              <p className="text-slate-600">↓</p>
              <p><span className="text-emerald-300">TCP/UDP</span></p>
              <p className="text-slate-600">↓</p>
              <p><span className="text-cyan-300">IP</span></p>
              <p className="text-slate-600">↓</p>
              <p><span className="text-blue-300">Dây/WiFi</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerExplorer() {
  const [activeId, setActiveId] = useState("application");
  const active = tcpIpLayers.find((l) => l.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Khám phá từng tầng TCP/IP" icon={<Search />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {tcpIpLayers.map((layer) => {
            const lc = colorClasses[layer.color];
            const isActive = activeId === layer.id;
            return (
              <button key={layer.id} onClick={() => setActiveId(layer.id)} className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${lc.bg} ${lc.border} ${lc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}>
                <div className="flex items-center gap-2 mb-2"><span className="font-black text-lg">{layer.number}</span>{React.cloneElement(layer.icon, { size: 18 })}</div>
                <p className="text-sm font-bold">{layer.en}</p>
              </button>
            );
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>Tầng {active.number}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-1">{active.en}</h3>
            <p className={`${c.text} font-bold mb-4`}>{active.vi}</p>
            <p className="text-slate-300 leading-relaxed mb-5">{active.detail}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm">
              <p className="text-slate-500">// PDU</p>
              <p className={c.text}>{active.pdu}</p>
            </div>
          </div>
          <div className="space-y-4">
            <InfoBox title="Ý chính" value={active.main} icon={<CircleHelp />} color={active.color} />
            <InfoBox title="Tương ứng OSI" value={active.osi} icon={<Layers />} color={active.color} />
            <ChipPanel title="Giao thức / thành phần liên quan" items={active.protocols} color={active.color} />
            <ChipPanel title="Lệnh kiểm tra thường dùng" items={active.checks} color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function OsiMapping() {
  const rows = [
    ["Application", "OSI 7, 6, 5", "HTTP, DNS, TLS, Session"],
    ["Transport", "OSI 4", "TCP, UDP, Port"],
    ["Internet", "OSI 3", "IP, ICMP, Router"],
    ["Network Access", "OSI 2, 1", "MAC, Ethernet, WiFi, Frame, Bit"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="TCP/IP liên hệ với OSI như thế nào?" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[720px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">TCP/IP</th><th className="p-4">Tương ứng OSI</th><th className="p-4">Từ khóa</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([tcp, osi, keyword], idx) => {
                const layer = tcpIpLayers.find((l) => l.en === tcp);
                const c = colorClasses[layer.color];
                return <tr key={tcp} className={`${idx === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}><td className={`p-4 font-black ${c.text}`}>{tcp}</td><td className="p-4 text-slate-300">{osi}</td><td className="p-4 text-slate-400">{keyword}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-sm text-slate-300">
        <strong className="text-orange-300">Điểm cần nhớ:</strong> TCP/IP Application thường gom cả OSI Application, Presentation và Session. TCP/IP Network Access thường gom cả OSI Data Link và Physical.
      </div>
    </section>
  );
}

function ProtocolTables() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Bảng giao thức và đơn vị dữ liệu" icon={<Package />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 p-4 font-bold text-white">Đơn vị dữ liệu theo TCP/IP</div>
          <div className="p-5 space-y-3">
            {tcpIpLayers.map((layer) => <MiniLayerRow key={layer.id} layer={layer} right={layer.pdu} />)}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 p-4 font-bold text-white">Giao thức/công nghệ thường gặp</div>
          <div className="p-5 space-y-3">
            <MiniLayerRow layer={tcpIpLayers[0]} right="HTTP/HTTPS, DNS, DHCP, SMTP, SSH" />
            <MiniLayerRow layer={tcpIpLayers[1]} right="TCP, UDP, Port" />
            <MiniLayerRow layer={tcpIpLayers[2]} right="IP, ICMP, Router, NAT" />
            <MiniLayerRow layer={tcpIpLayers[3]} right="Ethernet, WiFi, ARP, MAC" />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 font-mono text-sm">
        <p><span className="text-purple-300">Application:</span> Data</p>
        <p><span className="text-emerald-300">Transport:</span> TCP/UDP Header + Data</p>
        <p><span className="text-cyan-300">Internet:</span> IP Header + TCP/UDP Data</p>
        <p><span className="text-blue-300">Network Access:</span> MAC Header + IP Packet + Trailer</p>
        <p><span className="text-slate-400">Physical truyền:</span> 010101010...</p>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("delivery");
  const examples = {
    delivery: {
      title: "Gửi hàng qua dịch vụ giao hàng",
      icon: <Truck />,
      rows: [
        ["Application", "Bạn tạo đơn hàng trên app", "Ứng dụng tạo dữ liệu"],
        ["Transport", "Chọn giao nhanh, theo dõi kiện hàng", "TCP/UDP, port"],
        ["Internet", "Chọn tuyến giao qua tỉnh/thành", "IP, router"],
        ["Network Access", "Shipper chạy trên từng đoạn đường cụ thể", "Ethernet/WiFi, MAC, frame, bit"],
      ],
    },
    call: {
      title: "Gọi video call qua điện thoại",
      icon: <RadioTower />,
      rows: [
        ["Application", "App tạo âm thanh/hình ảnh", "Codec, session, giao thức app"],
        ["Transport", "UDP truyền nhanh để giảm độ trễ", "UDP/port"],
        ["Internet", "IP đưa dữ liệu đến máy người nhận", "IP, routing"],
        ["Network Access", "WiFi hoặc 4G/5G truyền tín hiệu", "Sóng, frame, bit"],
      ],
    },
  };
  const current = examples[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Ví dụ đời sống" icon={<Truck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("delivery")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "delivery" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><Truck size={16} /> Gửi hàng</button>
          <button onClick={() => setMode("call")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "call" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><RadioTower size={16} /> Video call</button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 22 })} {current.title}</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {current.rows.map(([layerName, life, net]) => {
              const layer = tcpIpLayers.find((l) => l.en === layerName);
              const c = colorClasses[layer.color];
              return <div key={layerName} className={`${c.bg} ${c.border} border rounded-2xl p-5`}><p className={`${c.text} font-black mb-2`}>{layer.en}</p><p className="text-sm text-white font-bold mb-2">{life}</p><p className="text-sm text-slate-400 leading-relaxed">{net}</p></div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsFlowSimulator() {
  const steps = [
    { layer: "application", title: "Application", text: "Trình duyệt tạo HTTPS request. Nếu chưa biết IP của example.com, máy dùng DNS để hỏi tên miền. Vì là HTTPS, dữ liệu cũng được mã hóa bằng TLS.", code: "GET / HTTP/1.1\nHost: example.com\nDNS: example.com → 93.184.216.34\nTLS: encrypted" },
    { layer: "transport", title: "Transport", text: "Dữ liệu được đưa xuống TCP. HTTPS thường dùng port 443. TCP đảm bảo dữ liệu đến đủ, đúng thứ tự và gửi lại nếu bị mất.", code: "192.168.1.10:51524 → 93.184.216.34:443\nProtocol: TCP" },
    { layer: "internet", title: "Internet", text: "Tầng Internet thêm IP nguồn và IP đích. Nếu IP đích không nằm trong LAN, máy gửi packet đến default gateway 192.168.1.1.", code: "IP src: 192.168.1.10\nIP dst: 93.184.216.34\nGateway: 192.168.1.1" },
    { layer: "network-access", title: "Network Access", text: "Máy dùng ARP để tìm MAC của router, tạo frame và chuyển thành tín hiệu WiFi để gửi đến router.", code: "ARP: Who has 192.168.1.1?\nMAC laptop → MAC router\n010101010... ))) WiFi" },
    { layer: "router", title: "Router chuyển tiếp", text: "Router gỡ frame, đọc IP packet, định tuyến ra Internet, có thể NAT IP private thành public, rồi đóng frame mới cho chặng tiếp theo.", code: "MAC thay đổi theo từng chặng\nIP thường giữ nguyên, trừ NAT\nPort giúp server biết dịch vụ" },
    { layer: "server", title: "Server nhận dữ liệu", text: "Server nhận từ dưới lên: Network Access nhận frame/bit, Internet kiểm tra IP, Transport kiểm tra port 443, Application xử lý HTTPS request.", code: "Frame → Packet → TCP 443 → HTTPS request" },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const layer = tcpIpLayers.find((l) => l.id === current.layer) || { color: "orange", icon: <Router />, number: "↔" };
  const c = colorClasses[layer.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Mô phỏng: Laptop truy cập HTTPS qua WiFi" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[370px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(layer.icon, { size: 32 })}</div>
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
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <TcpIpFlow active={current.layer} />
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className="text-cyan-300">Lưu ý:</strong> MAC thay đổi theo từng chặng. IP thường giữ nguyên từ nguồn đến đích, trừ khi NAT. Port giúp server biết dữ liệu gửi đến dịch vụ nào.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Troubleshooting() {
  const cases = [
    ["Không bắt được WiFi", "Network Access", "Thiết bị chưa kết nối được vào môi trường mạng."],
    ["Bắt được WiFi nhưng không có IP", "Application / Network Access", "DHCP cấp IP tự động có thể lỗi; cũng cần kiểm tra kết nối nền."],
    ["Có IP nhưng không ping được gateway", "Network Access / Internet", "Có thể sai VLAN, sai IP, gateway lỗi hoặc client isolation."],
    ["Ping 8.8.8.8 được, ping google.com không được", "Application: DNS", "Đi Internet bằng IP được nhưng phân giải tên miền thất bại."],
    ["Ping server được nhưng không mở web được", "Transport / Application", "Có thể port 80/443 bị chặn hoặc web server lỗi."],
    ["Website mở được nhưng báo lỗi chứng chỉ", "Application trong TCP/IP", "Đối chiếu OSI thì liên quan Presentation vì TLS/chứng chỉ."],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Suy luận lỗi theo TCP/IP" icon={<Search />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map(([symptom, layer, reason]) => (
          <div key={symptom} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div>
            <h3 className="text-white font-bold text-lg mb-3">{symptom}</h3>
            <p className="text-yellow-300 text-sm font-bold mb-2">Khả năng: {layer}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("internet");
  const commands = {
    network: { title: "Network Access / Internet cơ bản", command: "ipconfig\nip addr", output: ["IPv4 Address : 192.168.1.10", "Default Gateway : 192.168.1.1", "Interface : Wi-Fi"], note: "Xem máy có IP, gateway và interface mạng hay chưa." },
    internet: { title: "Internet Layer", command: "ping 8.8.8.8\ntracert google.com", output: ["Reply from 8.8.8.8: bytes=32 time=23ms", "1  192.168.1.1", "2  ISP gateway", "3  google.com"], note: "Ping IP kiểm tra khả năng đi Internet bằng IP; tracert/traceroute xem đường đi qua router." },
    dns: { title: "Application Layer: DNS", command: "nslookup google.com", output: ["Name: google.com", "Address: 142.250.x.x"], note: "Nếu nslookup lỗi, có thể DNS đang gặp vấn đề." },
    port: { title: "Transport Layer: Port", command: "Test-NetConnection google.com -Port 443\nnc -vz google.com 443", output: ["TcpTestSucceeded: True", "Connection to google.com port 443 succeeded"], note: "Kiểm tra có kết nối được đến port dịch vụ hay không." },
    http: { title: "Application Layer: HTTP/HTTPS", command: "curl -I https://example.com", output: ["HTTP/2 200", "content-type: text/html"], note: "Nếu thành công, ứng dụng nhận được phản hồi HTTP/HTTPS từ server." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Lệnh CLI liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">tcp/ip terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.keys(commands).map((key) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@tcpip</span><span className="text-slate-400">$ </span><span className="text-white">{current.command}</span></p>
              <div className="mt-5 space-y-2">{current.output.map((line) => <p key={line} className="text-green-400">{line}</p>)}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="ping IP" desc="Kiểm tra Internet Layer theo địa chỉ IP." />
            <ExplainRow term="nslookup" desc="Kiểm tra DNS ở Application Layer." />
            <ExplainRow term="Port 443" desc="Kiểm tra Transport Layer và dịch vụ HTTPS." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "TCP/IP chỉ có TCP và IP?", desc: "Không. TCP/IP là tên gọi của cả bộ giao thức Internet: HTTP, HTTPS, DNS, DHCP, SMTP, SSH, FTP, TCP, UDP, IP, ICMP, ARP...", good: "TCP và IP là hai giao thức đại diện rất quan trọng, không phải toàn bộ.", icon: <Package /> },
    { title: "TCP/IP thay thế OSI nên không cần học OSI?", desc: "Không nên hiểu vậy. OSI rất hữu ích để học và troubleshoot. TCP/IP gần với cách Internet thực tế hoạt động hơn.", good: "OSI = học thuật/phân tích; TCP/IP = thực tế/Internet.", icon: <Layers /> },
    { title: "TCP/IP Application chỉ là OSI tầng 7?", desc: "Không hoàn toàn. TCP/IP Application thường gom OSI tầng 7, 6, 5: HTTP, DNS, TLS, Session, Encoding.", good: "TCP/IP Application rộng hơn OSI Application.", icon: <Globe2 /> },
    { title: "Network Access chỉ là dây mạng?", desc: "Không. Nó bao gồm Ethernet, WiFi, MAC address, Frame, ARP, Switch và tín hiệu vật lý.", good: "Network Access ≈ OSI tầng 2 + tầng 1.", icon: <EthernetPort /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">{React.cloneElement(item.icon, { size: 24 })}</div>
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {item.good}</div>
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">12</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-purple-300">Application</span> = HTTP, DNS, DHCP, TLS, Email, SSH</p>
              <p><span className="text-emerald-300">Transport</span> = TCP, UDP, Port</p>
              <p><span className="text-cyan-300">Internet</span> = IP, ICMP, Router, Routing</p>
              <p><span className="text-blue-300">Network Access</span> = Ethernet, WiFi, MAC, Frame, Bit</p>
              <br />
              <p className="text-slate-500"># Công thức</p>
              <p className="text-slate-300">App → Port → IP → MAC + tín hiệu</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Mô hình TCP/IP phổ biến có bao nhiêu tầng?", options: ["3 tầng", "4 tầng", "7 tầng", "10 tầng"], correct: 1, explanation: "Mô hình TCP/IP phổ biến có 4 tầng: Application, Transport, Internet, Network Access." },
  { question: "HTTP/HTTPS/DNS thuộc tầng TCP/IP nào?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 0, explanation: "HTTP/HTTPS/DNS là các giao thức tầng Application trong TCP/IP." },
  { question: "TCP/UDP/Port thuộc tầng nào?", options: ["Network Access", "Internet", "Transport", "Application"], correct: 2, explanation: "TCP/UDP và port thuộc Transport Layer." },
  { question: "IP/Router/ICMP thuộc tầng nào?", options: ["Network Access", "Internet", "Transport", "Application"], correct: 1, explanation: "IP, router, ICMP và routing thuộc Internet Layer." },
  { question: "Máy bắt được WiFi, ping 8.8.8.8 được nhưng ping google.com thất bại. Lỗi nhiều khả năng ở đâu?", options: ["Network Access chắc chắn lỗi", "Internet Layer chắc chắn lỗi", "Application Layer: DNS", "Transport Layer: port 443"], correct: 2, explanation: "Ping IP được nghĩa là Internet Layer cơ bản có thể ổn. Ping tên miền lỗi thường liên quan DNS ở Application Layer." },
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
    return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      {showResult && <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2"><div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div><button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button></div>}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi đã học riêng OSI và TCP/IP, bài tiếp theo sẽ so sánh hai mô hình và ánh xạ từng tầng.</p>
      <Link to="/phan-2-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 2.4 — So sánh OSI và TCP/IP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function TcpIpStack() {
  return <div className="space-y-3">{tcpIpLayers.map((layer) => { const c = colorClasses[layer.color]; return <div key={layer.id} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-3`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div><div className="flex-1 min-w-0"><p className={`${c.text} font-black`}>{layer.en}</p><p className="text-xs text-slate-400 mt-1 truncate">{layer.keywords}</p></div><div className={c.text}>{React.cloneElement(layer.icon, { size: 22 })}</div></div>; })}</div>;
}

function ProtocolHeroCard({ title, subtitle, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-3xl font-black text-white mb-1">{title}</h3><p className={`${c.text} font-bold text-sm mb-4`}>{subtitle}</p><p className="text-sm text-slate-300 leading-relaxed">{desc}</p></div>;
}

function DirectionCard({ icon, title, subtitle, body, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-xl font-bold text-white mb-1">{title}</h3><p className={`${c.text} font-bold mb-3`}>{subtitle}</p><p className="text-sm text-slate-300 leading-relaxed">{body}</p></div>;
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p></div></div>;
}

function ChipPanel({ title, items, color }) {
  const c = colorClasses[color];
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><h4 className="text-white font-bold mb-3">{title}</h4><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className={`${c.bg} ${c.border} ${c.text} border rounded-full px-3 py-1 text-sm font-medium`}>{item}</span>)}</div></div>;
}

function MiniLayerRow({ layer, right }) {
  const c = colorClasses[layer.color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex gap-3 items-center`}><div className={`${c.solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div><div className="flex-1"><p className={`${c.text} font-bold`}>{layer.en}</p><p className="text-sm text-slate-400 mt-1">{right}</p></div></div>;
}

function TcpIpFlow({ active }) {
  const extra = [
    ...tcpIpLayers,
    { id: "router", en: "Router", number: "↔", color: "orange", icon: <Router />, pdu: "Forward/NAT" },
    { id: "server", en: "Server", number: "✓", color: "green", icon: <Server />, pdu: "Response" },
  ];
  return <div className="space-y-2">{extra.map((layer) => { const c = colorClasses[layer.color]; const isActive = layer.id === active; return <div key={layer.id} className={`${isActive ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-3 flex items-center gap-3 transition-all`}><div className={`${isActive ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.number}</div><div className="flex-1"><p className={`${isActive ? c.text : "text-slate-400"} font-bold text-sm`}>{layer.en}</p><p className="text-xs text-slate-500">{layer.pdu}</p></div>{isActive && <Zap className={c.text} size={18} />}</div>; })}</div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
