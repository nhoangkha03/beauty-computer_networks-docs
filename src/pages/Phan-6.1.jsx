import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
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
  MonitorCog,
  Network,
  Package,
  RadioTower,
  Search,
  Server,
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

const commonPorts = [
  [80, "HTTP", "Web không mã hóa", "orange"],
  [443, "HTTPS", "Web có mã hóa", "emerald"],
  [53, "DNS", "Phân giải tên miền", "cyan"],
  [22, "SSH", "Điều khiển máy từ xa an toàn", "purple"],
  [25, "SMTP", "Gửi email", "yellow"],
  [110, "POP3", "Nhận email kiểu tải về", "blue"],
  [143, "IMAP", "Nhận email kiểu đồng bộ", "green"],
  [3306, "MySQL", "Cơ sở dữ liệu MySQL", "red"],
];

const portGroups = [
  ["Well-known Ports", "0–1023", "Port chuẩn cho dịch vụ phổ biến", "cyan"],
  ["Registered Ports", "1024–49151", "Port cho ứng dụng cụ thể", "purple"],
  ["Dynamic / Private Ports", "49152–65535", "Port tạm thời do máy khách dùng", "orange"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <DoorOpen className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 6: Tầng Giao Vận — Transport Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 6.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyPort />
        <PortDefinition />
        <PortGroups />
        <CommonPorts />
        <SocketDefinition />
        <ApartmentAnalogy />
        <SocketPair />
        <HttpsFlow />
        <MultipleTabs />
        <ListeningPort />
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
            <Layers size={16} /> Bắt đầu Phần 6 — Transport Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Cổng Port
            <span className="block text-cyan-400">& Socket</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            IP giúp tìm đúng máy. Port giúp tìm đúng ứng dụng trong máy đó. Socket là địa chỉ đầy đủ gồm IP + Port.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">IP</span> = địa chỉ máy.</p>
            <p><span className="text-orange-300">Port</span> = số cổng/số phòng của ứng dụng.</p>
            <p><span className="text-emerald-300">Socket</span> = IP + Port.</p>
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
    "Hiểu Port là gì và tại sao máy tính cần port.",
    "Hiểu Socket là gì và socket khác gì port.",
    "Biết cách máy tính đưa dữ liệu mạng về đúng ứng dụng.",
    "Nhớ ý nghĩa các port phổ biến như 80, 443, 53, 22.",
    "Biết xem port đang mở bằng lệnh thực tế.",
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

function WhyPort() {
  const [app, setApp] = useState("web");
  const apps = {
    web: { name: "Trình duyệt Web", port: 443, color: "emerald", icon: <Globe2 /> },
    game: { name: "Game Online", port: 27015, color: "orange", icon: <Zap /> },
    dns: { name: "DNS Client", port: 53, color: "cyan", icon: <Search /> },
    ssh: { name: "SSH Client", port: 22, color: "purple", icon: <Terminal /> },
  };
  const cur = apps[app];
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Tại sao cần Port?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Một máy tính có thể chạy nhiều ứng dụng mạng cùng lúc: web, game, DNS, SSH, email, chat.</p>
            <p>Nếu chỉ có IP, máy biết packet đến đúng máy, nhưng không biết phải đưa dữ liệu cho ứng dụng nào.</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Tóm tắt:</p>
              <p>IP giúp tìm đúng máy, Port giúp tìm đúng ứng dụng trong máy đó.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(apps).map(([key, item]) => <button key={key} onClick={() => setApp(key)} className={`px-3 py-2 rounded-xl text-sm font-bold border ${app === key ? `${colorClasses[item.color].bg} ${colorClasses[item.color].border} ${colorClasses[item.color].text}` : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`}>{item.name}</button>)}
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ComputerPortsVisual active={app} />
            <div className={`${colorClasses[cur.color].bg} ${colorClasses[cur.color].border} border rounded-2xl p-4 mt-5 text-sm`}>
              <p className={`${colorClasses[cur.color].text} font-bold flex items-center gap-2`}>{React.cloneElement(cur.icon, { size: 18 })}{cur.name}</p>
              <p className="font-mono text-green-300 mt-2">192.168.1.10:{cur.port}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortDefinition() {
  const [port, setPort] = useState(443);
  const info = getPortInfo(port);
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="Port là gì?" icon={<DoorOpen />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Port" icon={<DoorOpen />} color="cyan" text="Port là một con số dùng để xác định dịch vụ hoặc ứng dụng mạng trên một thiết bị. Port nằm ở Transport Layer." code="Port range: 0 → 65535\nVí dụ: 192.168.1.10:80" />
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Nhập port</label>
              <input type="number" min="0" max="65535" value={port} onChange={(e) => setPort(Number(e.target.value))} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-cyan-300 font-mono outline-none focus:border-cyan-400" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className={`${info.valid ? colorClasses[info.color].bg : colorClasses.red.bg} ${info.valid ? colorClasses[info.color].border : colorClasses.red.border} border rounded-3xl p-6 text-center`}>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Port đang xem</p>
              <p className={`${info.valid ? colorClasses[info.color].text : colorClasses.red.text} text-6xl font-black font-mono my-3`}>{port}</p>
              <p className="text-white font-bold text-xl">{info.name}</p>
              <p className="text-slate-400 text-sm mt-2">{info.desc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {portGroups.map(([name, range, desc, color]) => <MiniGroup key={name} name={name} range={range} desc={desc} color={color} active={info.group === name} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortGroups() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="purple" title="Chia nhóm Port" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-3 gap-4">
        {portGroups.map(([name, range, desc, color]) => <ConceptCard key={name} title={name} icon={<DoorOpen />} color={color} text={desc} code={range} />)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 text-green-300 whitespace-pre-wrap">Client: 192.168.1.10:51524
          Server: 142.250.190.14:443

          51524 = dynamic/private port của client
          443   = well-known port HTTPS của server</div>
      </div>
    </section>
  );
}

function CommonPorts() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="green" title="Các port phổ biến cần nhớ" icon={<KeyRound />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Port</th><th className="p-4">Giao thức / Dịch vụ</th><th className="p-4">Ý nghĩa</th></tr>
            </thead>
            <tbody className="text-sm">
              {commonPorts.map(([port, service, desc, color], i) => <tr key={port} className={`${i === commonPorts.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 ${colorClasses[color].text} font-mono font-black`}>{port}</td><td className="p-4 text-white font-bold">{service}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SocketDefinition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="emerald" title="Socket là gì?" icon={<Network />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Port" icon={<DoorOpen />} color="orange" text="Port chỉ là một con số dùng để xác định ứng dụng/dịch vụ." code="443" />
        <ConceptCard title="IP Address" icon={<Globe2 />} color="cyan" text="IP giúp xác định đúng thiết bị trong mạng." code="192.168.1.10" />
        <ConceptCard title="Socket" icon={<Network />} color="emerald" text="Socket là sự kết hợp giữa địa chỉ IP và port." code="192.168.1.10:51524" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <SocketBuildVisual />
      </div>
    </section>
  );
}

function ApartmentAnalogy() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="Ví dụ trực quan: tòa chung cư & nhà hàng" icon={<Home />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Tòa chung cư" icon={<Home />} color="orange" text="IP là địa chỉ tòa nhà, Port là số phòng, ứng dụng là người ở trong phòng." code="IP Address = Địa chỉ tòa nhà\nPort = Số phòng\nỨng dụng = Người nhận" />
        <ConceptCard title="Nhà hàng nhiều quầy" icon={<Users />} color="purple" text="Mỗi dịch vụ giống một quầy riêng. Khách phải nói đúng quầy cần đến." code="Quầy 80  = HTTP\nQuầy 443 = HTTPS\nQuầy 53  = DNS\nQuầy 22  = SSH" />
      </div>
    </section>
  );
}

function SocketPair() {
  const [clientPort, setClientPort] = useState(51524);
  const serverIp = "142.250.190.14";
  const serverPort = 443;
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="cyan" title="Một kết nối cần 2 socket" icon={<ArrowRight />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Socket Pair" icon={<ArrowRight />} color="cyan" text="Một kết nối đầy đủ thường được xác định bằng socket phía client và socket phía server." code="Client Socket ↔ Server Socket" />
            <Slider label="Client ephemeral port" value={clientPort} setValue={setClientPort} min={49152} max={65535} suffix="" color="cyan" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SocketPairVisual clientPort={clientPort} serverIp={serverIp} serverPort={serverPort} />
            <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 text-sm font-mono whitespace-pre-wrap">Source IP:        192.168.1.10
              Source Port:      {clientPort}
              Destination IP:   {serverIp}
              Destination Port: {serverPort}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsFlow() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Bạn mở website HTTPS", text: "Trình duyệt muốn kết nối đến example.com bằng HTTPS.", code: "https://example.com", color: "cyan", icon: <Globe2 /> },
    { title: "DNS đổi tên miền thành IP", text: "Máy cần biết IP của server trước khi tạo kết nối.", code: "example.com → 93.184.216.34", color: "purple", icon: <Search /> },
    { title: "Client tạo port tạm thời", text: "Trình duyệt chọn một ephemeral port, ví dụ 51524.", code: "Client socket = 192.168.1.10:51524", color: "orange", icon: <DoorOpen /> },
    { title: "Gửi dữ liệu đến server port 443", text: "Server HTTPS lắng nghe ở port 443.", code: "192.168.1.10:51524 → 93.184.216.34:443", color: "emerald", icon: <ArrowRight /> },
    { title: "Server trả dữ liệu về client port", text: "Dữ liệu trả về đúng port tạm thời của trình duyệt.", code: "93.184.216.34:443 → 192.168.1.10:51524", color: "green", icon: <Package /> },
    { title: "Máy đưa dữ liệu về đúng ứng dụng", text: "Hệ điều hành nhìn destination port 51524 và đưa dữ liệu cho đúng tiến trình trình duyệt.", code: "Port 51524 → Browser tab/process", color: "blue", icon: <MonitorCog /> },
  ];
  return <StepSection number="9" color="green" title="Cơ chế hoạt động khi truy cập HTTPS" icon={<Zap />} steps={steps} step={step} setStep={setStep} />;
}

function MultipleTabs() {
  const rows = [
    ["Tab 1", "192.168.1.10:51524", "142.250.190.14:443", "google.com"],
    ["Tab 2", "192.168.1.10:51525", "142.250.190.14:443", "google.com"],
    ["Tab 3", "192.168.1.10:51526", "93.184.216.34:443", "example.com"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="Vì sao nhiều tab HTTPS không bị nhầm?" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <ConceptCard title="4 thông tin phân biệt kết nối" icon={<TableProperties />} color="purple" text="Hệ điều hành phân biệt kết nối bằng Source IP, Source Port, Destination IP và Destination Port." code="Source IP + Source Port\nDestination IP + Destination Port" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[720px]">
                <thead className="bg-slate-900 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tab</th><th className="p-4">Client socket</th><th className="p-4">Server socket</th><th className="p-4">Website</th></tr></thead>
                <tbody className="text-sm">
                  {rows.map(([tab, client, server, site], i) => <tr key={tab} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{tab}</td><td className="p-4 text-cyan-300 font-mono">{client}</td><td className="p-4 text-emerald-300 font-mono">{server}</td><td className="p-4 text-slate-300">{site}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5 text-purple-300 text-sm">
          Cùng truy cập port 443 của server nhưng mỗi kết nối có client port khác nhau, nên dữ liệu không bị nhầm.
        </div>
      </div>
    </section>
  );
}

function ListeningPort() {
  const [listen, setListen] = useState(true);
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Listening Port nghĩa là gì?" icon={<RadioTower />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="LISTENING" icon={<RadioTower />} color="orange" text="Nếu ứng dụng đang listening trên port, nghĩa là ứng dụng đang chờ kết nối đến." code="0.0.0.0:80 LISTENING" />
            <button onClick={() => setListen(!listen)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${listen ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{listen ? "Port 80 đang mở" : "Port 80 đang đóng"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ListeningVisual listen={listen} />
            <div className={`rounded-2xl border p-4 text-sm ${listen ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>
              {listen ? "Có service đang chờ kết nối ở port 80." : "Không có ứng dụng lắng nghe port 80, kết nối đến port này sẽ thất bại hoặc bị từ chối."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("windows");
  const commands = {
    windows: { title: "Windows — xem kết nối", cmd: "netstat -ano\nnetstat -ano | findstr :443\ntasklist | findstr <PID>", output: "TCP 192.168.1.10:51524 142.250.190.14:443 ESTABLISHED 1234\nchrome.exe                  1234 Console", note: "PID giúp tìm tiến trình nào đang dùng kết nối/port đó." },
    linux: { title: "Linux/macOS — xem port", cmd: "ss -tulnp\nss -tulnp | grep :80\nnetstat -tulnp", output: "tcp LISTEN 0 511 0.0.0.0:80 0.0.0.0:* users:((\"nginx\",pid=1234))", note: "ss là lệnh hiện đại để xem socket/port trên Linux." },
    client: { title: "Xem kết nối HTTPS", cmd: "ss -tnp | grep :443\nnetstat -ano | findstr :443", output: "ESTAB 0 0 192.168.1.10:51524 142.250.190.14:443", note: "Client port thường là port tạm thời, còn server HTTPS thường là 443." },
    test: { title: "Kiểm tra port từ xa", cmd: "# Linux/macOS\nnc -vz example.com 443\n\n# Windows PowerShell\nTest-NetConnection example.com -Port 443", output: "Connection to example.com 443 port [tcp/https] succeeded", note: "Dùng để kiểm tra service ở host/port có nhận kết nối không." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / công cụ thực hành" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">port socket lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[330px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@transport</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="LISTEN" desc="Ứng dụng đang chờ kết nối đến port." />
            <ExplainRow term="ESTABLISHED" desc="Kết nối đang hoạt động." />
            <ExplainRow term="PID" desc="Mã tiến trình đang dùng port/kết nối." />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ IP đủ để xác định ứng dụng", desc: "IP chỉ đưa dữ liệu đến đúng máy. Port mới giúp hệ điều hành đưa dữ liệu đến đúng ứng dụng.", fix: "Nhớ: IP = máy, Port = ứng dụng." },
    { title: "Nhầm port với socket", desc: "Port chỉ là số. Socket là IP + Port, ví dụ 192.168.1.10:51524.", fix: "Socket = IP Address + Port Number." },
    { title: "Nghĩ client cũng luôn dùng port 443", desc: "Client thường dùng ephemeral port, còn server HTTPS lắng nghe ở 443.", fix: "Client: 51524 → Server: 443." },
    { title: "Thấy port open là chắc chắn an toàn", desc: "Port mở chỉ nói có service đang lắng nghe. Service vẫn cần cập nhật, cấu hình đúng và bảo mật.", fix: "Port open cần firewall, auth và hardening." },
    { title: "Nhầm Listening với Established", desc: "Listening là chờ kết nối. Established là kết nối đã hình thành.", fix: "Đọc trạng thái kết nối trong netstat/ss." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">14</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>IP giúp tìm đúng máy.</p>
              <p>Port giúp tìm đúng ứng dụng trong máy.</p>
              <p>Port nằm ở Transport Layer.</p>
              <p>Port range: 0–65535.</p>
              <p>Well-known ports: 0–1023.</p>
              <p>Dynamic/private ports: 49152–65535.</p>
              <p>Socket = IP + Port.</p>
              <p>Kết nối thường có client socket và server socket.</p>
              <p>Server thường dùng port cố định.</p>
              <p>Client thường dùng port tạm thời.</p>
              <p>Listening port là port đang chờ kết nối.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "IP và Port khác nhau thế nào?", options: ["IP tìm đúng máy, Port tìm đúng ứng dụng", "IP là số phòng, Port là địa chỉ tòa nhà", "IP chỉ dùng cho DNS, Port chỉ dùng cho WiFi", "Không khác nhau"], correct: 0, explanation: "IP đưa packet đến đúng thiết bị; port giúp hệ điều hành đưa dữ liệu đến đúng ứng dụng/dịch vụ trong thiết bị đó." },
  { question: "Socket là gì?", options: ["Chỉ là số port", "IP Address + Port Number", "Tên miền + DNS", "MAC Address + VLAN"], correct: 1, explanation: "Socket là sự kết hợp giữa IP address và port number, ví dụ 192.168.1.10:51524." },
  { question: "Trong 192.168.1.20:52000 → 8.8.8.8:53, port server là gì?", options: ["192.168.1.20", "52000", "8.8.8.8", "53"], correct: 3, explanation: "Server socket là 8.8.8.8:53, nên port server là 53, thường dùng cho DNS." },
  { question: "HTTPS thường dùng port nào?", options: ["22", "53", "80", "443"], correct: 3, explanation: "HTTPS dùng well-known port 443." },
  { question: "Listening port nghĩa là gì?", options: ["Port đang chờ kết nối đến", "Port đã bị xóa", "Port là địa chỉ IP", "Port chỉ dùng cho router"], correct: 0, explanation: "Listening nghĩa là ứng dụng/service đang mở port và chờ kết nối đến." },
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
      <p className="text-slate-400 mb-4">Sau khi hiểu port và socket, bài tiếp theo sẽ học TCP: cách tạo kết nối đáng tin cậy giữa hai ứng dụng.</p>
      <Link to="/phan-6-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 6.2 — Giao thức TCP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroPreview() {
  return <div className="space-y-4"><SocketPairVisual clientPort={51524} serverIp="142.250.190.14" serverPort={443} compact /><div className="grid grid-cols-3 gap-3"><MiniCard title="80" value="HTTP" color="orange" icon={<DoorOpen />} /><MiniCard title="443" value="HTTPS" color="emerald" icon={<ShieldCheck />} /><MiniCard title="53" value="DNS" color="cyan" icon={<Search />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">Socket = IP + Port
    192.168.1.10:51524</div></div>;
}
function MiniCard({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1">{value}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function ComputerPortsVisual({ active }) {
  const items = [
    ["web", "443", "Web", "emerald", <Globe2 />],
    ["game", "27015", "Game", "orange", <Zap />],
    ["dns", "53", "DNS", "cyan", <Search />],
    ["ssh", "22", "SSH", "purple", <Terminal />],
  ]; return <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5"><div className="text-center mb-5"><Server className="mx-auto text-cyan-300 mb-2" size={42} /><p className="font-mono text-cyan-300 font-bold">IP: 192.168.1.10</p></div><div className="grid grid-cols-2 gap-3">{items.map(([key, port, label, color, icon]) => { const c = colorClasses[color]; const on = active === key; return <div key={key} className={`${on ? `${c.bg} ${c.border}` : "bg-slate-950 border-slate-800"} border rounded-2xl p-4 text-center`}><div className={`${on ? c.text : "text-slate-600"} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 22 })}</div><p className={`${on ? c.text : "text-slate-400"} font-mono font-black`}>:{port}</p><p className="text-xs text-slate-500 mt-1">{label}</p></div>; })}</div></div>;
}
function getPortInfo(port) { if (!Number.isFinite(port) || port < 0 || port > 65535) return { valid: false, color: "red", name: "Port không hợp lệ", desc: "Port phải nằm trong 0–65535", group: "" }; const known = commonPorts.find(([p]) => p === port); const group = port <= 1023 ? "Well-known Ports" : port <= 49151 ? "Registered Ports" : "Dynamic / Private Ports"; if (known) return { valid: true, color: known[3], name: `${known[1]} — ${known[2]}`, desc: group, group }; return { valid: true, color: port <= 1023 ? "cyan" : port <= 49151 ? "purple" : "orange", name: group, desc: port <= 1023 ? "Thường dành cho dịch vụ chuẩn." : port <= 49151 ? "Thường dành cho ứng dụng đã đăng ký." : "Thường là port tạm thời phía client.", group }; }
function MiniGroup({ name, range, desc, color, active }) { const c = colorClasses[color]; return <div className={`${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"} border rounded-2xl p-4`}><p className={`${active ? c.text : "text-slate-400"} font-bold text-sm`}>{name}</p><p className="font-mono text-xs text-slate-500 mt-1">{range}</p><p className="text-xs text-slate-500 mt-2">{desc}</p></div>; }
function SocketBuildVisual() { return <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center"><BuildBox title="IP Address" value="192.168.1.10" color="cyan" icon={<Globe2 />} /><span className="text-3xl text-slate-600 font-black">+</span><BuildBox title="Port" value="51524" color="orange" icon={<DoorOpen />} /><span className="text-3xl text-slate-600 font-black">=</span><BuildBox title="Socket" value="192.168.1.10:51524" color="emerald" icon={<Network />} /></div>; }
function BuildBox({ title, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-5 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 28 })}</div><p className="text-xs text-slate-500 uppercase font-bold">{title}</p><p className={`${c.text} font-mono font-black mt-2 break-all`}>{value}</p></div>; }
function Slider({ label, value, setValue, min, max, suffix, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><p className="text-white font-bold text-sm">{label}</p><p className={`${c.text} font-mono font-black`}>{value} {suffix}</p></div><input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full" /></div>; }
function SocketPairVisual({ clientPort, serverIp, serverPort, compact = false }) { return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><SocketBox label="Client Socket" value={`192.168.1.10:${clientPort}`} color="cyan" icon={<MonitorCog />} /><ArrowRight className="text-slate-500" /><SocketBox label="Server Socket" value={`${serverIp}:${serverPort}`} color="emerald" icon={<Server />} /></div>{!compact && <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center font-mono text-green-300">Client Socket ↔ Server Socket</div>}</div>; }
function SocketBox({ label, value, color, icon }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><div className={`${c.text} flex justify-center mb-2`}>{React.cloneElement(icon, { size: 24 })}</div><p className="text-xs text-slate-500 font-bold uppercase">{label}</p><p className={`${c.text} font-mono font-black mt-2 break-all text-sm`}>{value}</p></div>; }
function StepSection({ number, color, title, icon, steps, step, setStep }) { const current = steps[step]; const c = colorClasses[current.color]; return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[340px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ListeningVisual({ listen }) { return <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><SocketBox label="Client" value="Internet user" color="cyan" icon={<Globe2 />} /><ArrowRight className={listen ? "text-green-300" : "text-red-300"} /><div className={`${listen ? "bg-green-500/10 border-green-400/40" : "bg-red-500/10 border-red-400/40"} border rounded-2xl p-5 text-center`}><RadioTower className={`${listen ? "text-green-300" : "text-red-300"} mx-auto mb-2`} size={28} /><p className="text-white font-bold">Server</p><p className={`${listen ? "text-green-300" : "text-red-300"} font-mono font-black mt-2`}>0.0.0.0:80 {listen ? "LISTENING" : "CLOSED"}</p></div></div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }
