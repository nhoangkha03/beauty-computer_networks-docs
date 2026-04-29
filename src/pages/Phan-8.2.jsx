import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  Gauge,
  Globe2,
  HardDrive,
  Home,
  Laptop,
  Layers,
  Lock,
  Network,
  Radio,
  RefreshCw,
  Router,
  Search,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Timer,
  Tv,
  Wifi,
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

const componentRows = [
  ["SSID", "Tên mạng WiFi", "Kha_Home_5G", "cyan"],
  ["AP", "Điểm phát WiFi", "Router WiFi / Access Point", "orange"],
  ["Client", "Thiết bị kết nối WiFi", "Laptop, điện thoại", "green"],
  ["Band", "Băng tần", "2.4GHz, 5GHz", "purple"],
  ["Channel", "Kênh sóng", "Channel 1, 6, 11", "blue"],
  ["Signal Strength", "Độ mạnh tín hiệu", "Mạnh, trung bình, yếu", "yellow"],
  ["Encryption", "Mã hóa bảo mật", "WPA2, WPA3", "red"],
];

const bandRows = [
  ["Phạm vi phủ sóng", "Xa hơn", "Ngắn hơn"],
  ["Khả năng xuyên tường", "Tốt hơn", "Kém hơn"],
  ["Tốc độ", "Thường thấp hơn", "Thường cao hơn"],
  ["Nhiễu", "Dễ nhiễu hơn", "Ít nhiễu hơn"],
  ["Thiết bị hỗ trợ", "Rất phổ biến", "Phổ biến trên thiết bị mới hơn"],
];

const rssiRows = [
  ["-30 dBm", "Rất mạnh", "green"],
  ["-50 dBm", "Tốt", "cyan"],
  ["-67 dBm", "Chấp nhận tốt cho video/call", "blue"],
  ["-80 dBm", "Yếu", "orange"],
  ["-90 dBm", "Rất yếu", "red"],
];

const commandTabs = {
  windows: {
    title: "Windows",
    color: "blue",
    icon: <Terminal />,
    commands: [
      ["Xem WiFi đang kết nối", "netsh wlan show interfaces"],
      ["Thông tin thường thấy", "SSID                   : Kha_Home_5G\nRadio type             : 802.11ac\nSignal                 : 87%\nReceive rate           : 433.3 Mbps\nTransmit rate          : 433.3 Mbps"],
      ["Xem WiFi xung quanh", "netsh wlan show networks mode=bssid"],
    ],
  },
  linux: {
    title: "Linux",
    color: "green",
    icon: <Code2 />,
    commands: [
      ["Liệt kê WiFi gần đó", "nmcli dev wifi list"],
      ["Xem card WiFi", "iw dev"],
    ],
  },
  macos: {
    title: "macOS",
    color: "purple",
    icon: <Laptop />,
    commands: [
      ["Thông tin WiFi hiện tại", "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I"],
      ["Thông tin thường thấy", "agrCtlRSSI: -45\nSSID: Kha_Home_5G\nchannel: 36\nlastTxRate: 866"],
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
              <Wifi className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 8: Mạng không dây — Wireless</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 8.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <RadioWaveSection />
        <AccessPointSection />
        <SsidSection />
        <ChannelSection />
        <SharedMediumSection />
        <RealWorldExamples />
        <TechnicalExample />
        <OverviewDiagram />
        <ComponentTable />
        <BandComparison />
        <WifiConnectionProcess />
        <CsmaCaSection />
        <SlowWifiCauses />
        <CommandPractice />
        <RssiSection />
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
            <Layers size={16} /> Wireless — How WiFi Works
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Nguyên lý hoạt động
            <span className="block text-cyan-400">của WiFi</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            WiFi dùng sóng radio để thiết bị kết nối vào Access Point, xác thực, nhận IP qua DHCP rồi truyền dữ liệu qua router ra Internet.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">WiFi</span> = truyền dữ liệu bằng sóng radio.</p>
            <p><span className="text-orange-300">AP</span> = Access Point, điểm phát WiFi.</p>
            <p><span className="text-emerald-300">SSID → Auth → Association → DHCP → Data</span>.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroWifiWorkVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu WiFi hoạt động thế nào khi điện thoại/laptop kết nối router.",
    "Nắm vai trò Access Point, SSID, băng tần, channel và sóng radio.",
    "Hiểu quá trình tìm WiFi, xác thực mật khẩu, nhận IP và truy cập Internet.",
    "Biết vì sao WiFi yếu, chậm, nhiễu hoặc mất kết nối.",
    "Biết kiểm tra tình trạng WiFi bằng một số lệnh thực tế.",
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

function RadioWaveSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="WiFi truyền dữ liệu bằng sóng radio" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>WiFi không truyền dữ liệu bằng dây mạng. Nó dùng <strong className="text-cyan-300">sóng radio</strong>, tức sóng điện từ, để truyền dữ liệu giữa thiết bị và router/AP.</p>
            <ConceptCard title="Không dây nhưng vẫn là dữ liệu mạng" icon={<Radio />} color="blue" text="Khi mở YouTube, dữ liệu video đi từ Internet đến router, rồi từ router qua sóng WiFi đến điện thoại. Khi bạn tìm kiếm Google, dữ liệu đi ngược lại." code={`Internet → Router/AP → Sóng WiFi → Điện thoại
Điện thoại → Sóng WiFi → Router/AP → Internet`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <RadioDataVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessPointSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Access Point là điểm phát WiFi" icon={<Router />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="AP = điểm phát sóng WiFi" icon={<Wifi />} color="orange" text="Access Point, viết tắt là AP, là thiết bị phát sóng WiFi để các thiết bị không dây kết nối vào mạng." code="Client ---- WiFi ---- Access Point ---- LAN/Internet" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="grid md:grid-cols-2 gap-3">
            <MiniFlowNode title="Router" desc="Định tuyến ra Internet" color="cyan" icon={<Router />} />
            <MiniFlowNode title="Switch" desc="Kết nối mạng dây" color="blue" icon={<Network />} />
            <MiniFlowNode title="Access Point" desc="Phát WiFi" color="orange" icon={<Wifi />} />
            <MiniFlowNode title="DHCP Server" desc="Cấp IP tự động" color="green" icon={<Database />} />
          </div>
          <div className="mt-5 bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-sm text-orange-300">
            Cục WiFi trong gia đình thường tích hợp nhiều vai trò: router, switch, AP và DHCP server.
          </div>
        </div>
      </div>
    </section>
  );
}

function SsidSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="SSID là tên mạng WiFi" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="SSID = tên hiển thị của WiFi" icon={<Eye />} color="cyan" text="SSID là tên mạng WiFi mà bạn nhìn thấy khi mở danh sách WiFi. SSID chỉ là tên hiển thị, không phải mật khẩu và cũng không đảm bảo mạng đó an toàn." code={`Kha_Home_2.4G
Kha_Home_5G
Cafe_Free_WiFi
TP-Link_1234`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <SsidVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelSection() {
  const [active, setActive] = useState("6");
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Channel là kênh sóng WiFi" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={`Channel ${active}`} icon={<Radio />} color="purple" text="Trong cùng một băng tần, WiFi chia thành nhiều channel. Nếu nhiều router gần nhau dùng cùng channel, thiết bị có thể khó nghe tín hiệu rõ ràng." code={`Băng tần 2.4GHz
├── Channel 1
├── Channel 6
└── Channel 11`} />
            <div className="grid grid-cols-3 gap-2">
              {['1','6','11'].map((ch) => <ChoiceButton key={ch} active={active === ch} onClick={() => setActive(ch)} color="purple">Ch {ch}</ChoiceButton>)}
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ChannelVisual active={active} />
            <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
              Một người nói trong phòng thì dễ nghe. Mười người cùng nói một lúc thì khó nghe. WiFi trùng channel cũng tương tự.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SharedMediumSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="WiFi là môi trường chia sẻ" icon={<UsersIcon />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Nhiều thiết bị cùng dùng sóng" icon={<Wifi />} color="green" text="Ethernet có đường truyền dây rõ ràng hơn. WiFi thì nhiều thiết bị phải cùng chia sẻ môi trường sóng, nên phải chia lượt truyền." code={`1 điện thoại
1 laptop
1 smart TV
2 camera
1 máy in WiFi
1 loa thông minh
→ cùng tranh môi trường sóng`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <SharedMediumVisual />
          <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
            WiFi giống một phòng họp chung: nhiều thiết bị cùng nói thì phải có cơ chế xếp lượt.
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="emerald" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bộ đàm" icon={<Radio />} color="emerald" text="WiFi giống hai người dùng bộ đàm. Một người nói thì người kia nghe. Nếu cả hai cùng nói một lúc, tín hiệu bị lẫn." code={`Người A nói → Người B nghe
Người B nói → Người A nghe
Cùng nói → bị lẫn`} />
        <ConceptCard title="Nhà hàng đông khách" icon={<Home />} color="orange" text="Router/AP giống nhân viên phục vụ. Mỗi thiết bị là một khách, dữ liệu là món ăn. Càng đông khách, càng cần chia lượt và quản lý tốt hơn." code="WiFi 6/802.11ax = nhà hàng có hệ thống xếp hàng hiện đại hơn" />
      </div>
    </section>
  );
}

function TechnicalExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="cyan" title="Ví dụ kỹ thuật: laptop truy cập website" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Luồng dữ liệu qua WiFi" icon={<Send />} color="cyan" text="Laptop gửi dữ liệu qua sóng WiFi đến Router/AP. Router gửi ra Internet. Website phản hồi ngược về router, rồi router gửi lại qua WiFi cho laptop." code={`Laptop: 192.168.1.25
Router/AP: 192.168.1.1
Website: example.com`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <TechnicalFlowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="blue" title="Sơ đồ tổng quan WiFi hoạt động" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <OverviewWifiVisual />
      </div>
    </section>
  );
}

function ComponentTable() {
  const [active, setActive] = useState("SSID");
  const row = componentRows.find(([name]) => name === active) || componentRows[0];
  const [, meaning, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="Các thành phần chính trong WiFi" icon={<FileTextIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {componentRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<Wifi />} color={color} text={meaning} code={example} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thành phần</th><th className="p-4">Ý nghĩa</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {componentRows.map(([name, m, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === componentRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{m}</td><td className="p-4 text-green-300 font-mono">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BandComparison() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="So sánh 2.4GHz và 5GHz" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">2.4GHz</th><th className="p-4 text-cyan-300">5GHz</th></tr></thead>
            <tbody className="text-sm">
              {bandRows.map(([criteria, b24, b5], i) => <tr key={criteria} className={`${i === bandRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{b24}</td><td className="p-4 text-slate-300">{b5}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-orange-500/10 border border-orange-400/40 rounded-3xl p-6 text-orange-300 font-mono text-sm">
        2.4GHz phù hợp khi cần xa và xuyên tường; 5GHz phù hợp khi cần tốc độ cao ở khoảng cách gần.
      </div>
    </section>
  );
}

function WifiConnectionProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "AP phát Beacon Frame", text: "Router/AP liên tục phát gói beacon để thông báo mạng WiFi của mình.", code: `SSID: Kha_Home_5G
Standard: 802.11ac/ax
Security: WPA2/WPA3
Ai muốn kết nối thì gửi yêu cầu`, color: "cyan", icon: <Wifi /> },
    { title: "Thiết bị chọn SSID", text: "Bạn chọn tên WiFi muốn kết nối từ danh sách mạng xung quanh.", code: "Kha_Home_5G", color: "blue", icon: <Eye /> },
    { title: "Trao đổi khả năng hỗ trợ", text: "Thiết bị và AP trao đổi chuẩn WiFi, băng tần và cơ chế bảo mật mà hai bên hỗ trợ.", code: `Client: 802.11n/ac, 5GHz, WPA2
AP: 802.11n/ac/ax, 5GHz, WPA2/WPA3
→ chọn cấu hình chung`, color: "purple", icon: <RefreshCw /> },
    { title: "Xác thực và tạo khóa mã hóa", text: "Nếu WiFi có mật khẩu, thiết bị chứng minh biết mật khẩu đúng. Mật khẩu còn giúp tạo khóa mã hóa dữ liệu.", code: `Password: MatKhauWiFi@123
Đúng → tạo khóa mã hóa
Sai → từ chối`, color: "orange", icon: <Lock /> },
    { title: "Association", text: "Thiết bị chính thức trở thành thành viên của mạng WiFi đó. AP biết thiết bị này đang kết nối.", code: "Client associated with AP", color: "green", icon: <CheckCircle2 /> },
    { title: "Xin địa chỉ IP bằng DHCP", text: "Kết nối WiFi xong chưa chắc vào Internet được. Thiết bị còn cần IP, subnet, gateway và DNS.", code: `IP: 192.168.1.25
Subnet: 255.255.255.0
Gateway: 192.168.1.1
DNS: 8.8.8.8`, color: "emerald", icon: <Network /> },
    { title: "Truyền dữ liệu thật", text: "Khi mở website, laptop dùng DNS tìm IP, gửi request qua WiFi đến router, router gửi ra Internet và trả dữ liệu về.", code: "Browser → WiFi card → Router/AP → Internet → Web Server", color: "cyan", icon: <Globe2 /> },
    { title: "Chia lượt truyền trên sóng", text: "WiFi phải tránh nhiều thiết bị nói đè lên nhau. Cơ chế liên quan đến CSMA/CA.", code: "Nghe trước → kênh rảnh thì gửi → kênh bận thì chờ", color: "yellow", icon: <Timer /> },
  ];
  return <StepSection number="12" color="cyan" title="Cơ chế hoạt động của WiFi từng bước" icon={<Wifi />} steps={steps} step={step} setStep={setStep} />;
}

function CsmaCaSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="CSMA/CA: nghe trước khi nói" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Carrier Sense Multiple Access with Collision Avoidance" icon={<Radio />} color="yellow" text="CSMA/CA nghĩa là thiết bị cố gắng tránh va chạm dữ liệu trước khi truyền. Nó nghe môi trường sóng trước; nếu kênh rảnh thì gửi, nếu bận thì chờ." code={`Nghe trước
→ Nếu kênh rảnh thì gửi
→ Nếu bận thì chờ
→ Nếu va chạm/nghi ngờ lỗi thì thử lại`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <CsmaVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function SlowWifiCauses() {
  const causes = [
    ["Khoảng cách xa router", "Càng xa router, tín hiệu càng yếu.", "cyan", <Router />],
    ["Vật cản", "Tường bê tông, cửa kim loại, kính dày, thang máy, tủ sắt làm suy giảm sóng.", "orange", <Home />],
    ["Nhiễu sóng", "Lò vi sóng, Bluetooth, camera không dây, router hàng xóm, IoT giá rẻ.", "red", <AlertTriangle />],
    ["Quá nhiều thiết bị", "Router yếu mà có nhiều điện thoại, laptop, TV, camera sẽ dễ chậm.", "purple", <Smartphone />],
    ["Trùng channel", "Nhiều nhà cùng dùng channel giống nhau, đặc biệt trong chung cư.", "yellow", <Radio />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="red" title="Vì sao WiFi yếu hoặc chậm?" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {causes.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
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
      <SectionTitle number="15" color="green" title="Lệnh kiểm tra WiFi thực tế" icon={<Terminal />} />
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

function RssiSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="blue" title="RSSI: đọc độ mạnh tín hiệu" icon={<Gauge />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 border-b border-slate-800 text-slate-400"><tr><th className="p-4">RSSI</th><th className="p-4">Chất lượng tín hiệu</th></tr></thead>
          <tbody>
            {rssiRows.map(([rssi, quality, color], i) => <tr key={rssi} className={`${i === rssiRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black font-mono ${colorClasses[color].text}`}>{rssi}</td><td className="p-4 text-slate-300">{quality}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-500/10 border border-blue-400/40 rounded-3xl p-6 text-blue-300 font-mono text-sm">
        RSSI càng gần 0 thì tín hiệu càng mạnh. Ví dụ -45 dBm tốt hơn -80 dBm.
      </div>
    </section>
  );
}

function TroubleshootingSection() {
  const items = [
    ["WiFi đã kết nối nhưng không có Internet", "Kiểm tra IP, gateway, DNS, router và đường truyền nhà mạng.", "red"],
    ["Đứng xa thì chậm", "Tín hiệu yếu do khoảng cách/vật cản; thử đổi vị trí AP hoặc dùng mesh/AP phụ.", "orange"],
    ["Chung cư bị nhiễu", "Kiểm tra channel, ưu tiên 5GHz nếu khoảng cách gần.", "purple"],
    ["Một thiết bị chậm hơn thiết bị khác", "Kiểm tra chuẩn WiFi client hỗ trợ, signal, driver và vị trí.", "cyan"],
    ["WiFi mạnh nhưng web chậm", "Có thể do DNS, Internet WAN, server đích, router quá tải hoặc gói mạng.", "blue"],
    ["Tốc độ thấp hơn quảng cáo", "Tốc độ lý thuyết không bằng thực tế; phụ thuộc chuẩn, channel width, MIMO, signal, nhiễu.", "green"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="orange" title="Checklist xử lý lỗi WiFi" icon={<ShieldCheck />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(([title, desc, color]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}><Search size={24} /></div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ kết nối WiFi là đã chắc chắn có Internet", desc: "Thiết bị còn cần IP, gateway, DNS và router phải có đường ra Internet.", fix: "WiFi association xong thường đến DHCP và routing." },
    { title: "Nghĩ SSID là mật khẩu", desc: "SSID chỉ là tên mạng hiển thị. Mạng có SSID giống nhau chưa chắc là mạng an toàn.", fix: "SSID không chứng minh mạng đáng tin." },
    { title: "Chỉ nhìn vạch sóng để kết luận tốc độ", desc: "Tín hiệu mạnh chưa đủ; còn nhiễu, channel, chuẩn WiFi, số thiết bị và băng thông Internet.", fix: "Kiểm tra cả signal, rate, channel và tải mạng." },
    { title: "Dùng 2.4GHz cho mọi tình huống", desc: "2.4GHz phủ xa hơn nhưng dễ nhiễu hơn và thường chậm hơn 5GHz.", fix: "Gần router nên ưu tiên 5GHz nếu cần tốc độ." },
    { title: "Đặt AP sau tường dày/tủ kim loại", desc: "Vật cản làm suy giảm sóng mạnh, khiến WiFi yếu hoặc chập chờn.", fix: "Đặt AP thoáng, cao, trung tâm vùng phủ." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">19</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>WiFi truyền dữ liệu bằng sóng radio thay vì dây cáp.</p>
              <p>Access Point là điểm phát WiFi.</p>
              <p>SSID là tên mạng WiFi.</p>
              <p>Channel là kênh sóng nhỏ trong băng tần.</p>
              <p>WiFi là môi trường chia sẻ, nhiều thiết bị phải chia lượt truyền.</p>
              <p>Beacon Frame giúp thiết bị thấy mạng WiFi xung quanh.</p>
              <p>Thiết bị và AP trao đổi chuẩn/băng tần/bảo mật mà hai bên hỗ trợ.</p>
              <p>Mật khẩu WiFi giúp xác thực và tạo khóa mã hóa.</p>
              <p>Association nghĩa là thiết bị đã tham gia mạng WiFi.</p>
              <p>Sau WiFi, thiết bị thường dùng DHCP để nhận IP.</p>
              <p>CSMA/CA = nghe trước, rảnh thì gửi, bận thì chờ.</p>
              <p>WiFi yếu/chậm do khoảng cách, vật cản, nhiễu, quá nhiều thiết bị hoặc trùng channel.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "SSID là gì?", options: ["Tên mạng WiFi", "Địa chỉ IP của router", "Mật khẩu WiFi", "Chuẩn mã hóa HTTPS"], correct: 0, explanation: "SSID là tên mạng WiFi mà thiết bị nhìn thấy trong danh sách WiFi." },
  { question: "Access Point là gì?", options: ["Điểm phát WiFi để thiết bị không dây kết nối vào mạng", "Một loại địa chỉ IP", "Một loại DNS record", "Một giao thức email"], correct: 0, explanation: "Access Point, viết tắt AP, là thiết bị/chức năng phát sóng WiFi cho client kết nối." },
  { question: "Vì sao WiFi xa router hoặc qua nhiều tường thường chậm hơn?", options: ["Tín hiệu radio suy giảm do khoảng cách và vật cản", "SSID bị đổi thành IP", "DNS luôn bị tắt", "HTTPS làm WiFi yếu"], correct: 0, explanation: "Sóng WiFi bị suy giảm khi đi xa hoặc xuyên qua tường/vật cản, làm tốc độ và độ ổn định giảm." },
  { question: "Sau khi xác thực WiFi thành công, thiết bị thường cần gì để vào mạng IP?", options: ["Nhận IP, subnet, gateway, DNS qua DHCP", "Chỉ cần tên SSID", "Chỉ cần biết channel", "Chỉ cần bật Bluetooth"], correct: 0, explanation: "Kết nối WiFi là bước truy cập không dây; để giao tiếp IP, thiết bị thường cần DHCP cấp cấu hình mạng." },
  { question: "CSMA/CA trong WiFi nói đơn giản là gì?", options: ["Nghe trước; kênh rảnh thì gửi, kênh bận thì chờ", "Mã hóa website bằng HTTPS", "Cấp IP động", "Gửi email giữa mail server"], correct: 0, explanation: "WiFi dùng môi trường sóng chung nên thiết bị phải tránh nói đè lên nhau bằng cơ chế nghe trước và chờ lượt." },
  { question: "Một điện thoại đã kết nối WiFi nhưng không vào Internet. Nguyên nhân có thể là gì?", options: ["Không nhận được IP/gateway/DNS đúng, router mất Internet hoặc cấu hình router lỗi", "SSID quá ngắn", "Điện thoại dùng màn hình OLED", "Laptop khác đang dùng Chrome"], correct: 0, explanation: "WiFi connected chỉ nói rằng đã kết nối AP. Internet còn phụ thuộc DHCP, gateway, DNS, WAN và cấu hình router." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài nguyên lý WiFi!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo học về bảo mật WiFi: WEP, WPA, WPA2 và WPA3.</p>
      <Link to="/phan-8-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 8.3 — Bảo mật WiFi <ChevronRight size={20} />
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

function HeroWifiWorkVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="AP" value="phát WiFi" color="orange" icon={<Router />} /><MiniCard title="SSID" value="tên mạng" color="cyan" icon={<Wifi />} /><MiniCard title="Channel" value="kênh sóng" color="purple" icon={<Radio />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">AP ---- Beacon ----&gt; Client</p><p className="text-orange-300">Client ---- Auth ----&gt; AP</p><p className="text-green-300">Client ---- DHCP ----&gt; Router</p><p className="text-emerald-300">Client ⇄ WiFi ⇄ Internet</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="Radio" value="sóng" color="blue" icon={<Radio />} /><MiniCard title="CSMA/CA" value="chia lượt" color="yellow" icon={<Timer />} /><MiniCard title="RSSI" value="tín hiệu" color="green" icon={<Gauge />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function RadioDataVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Laptop" color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><MiniNode label="Router" color="orange" icon={<Router />} /></div><div className="text-center text-cyan-300 font-mono">~~~~~ sóng WiFi ~~~~~</div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">Internet → Modem/Router → Sóng WiFi → Thiết bị
Thiết bị → Sóng WiFi → Router → Internet</div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function SsidVisual() {
  const ssids = [["Kha_Home_2.4G", "orange"], ["Kha_Home_5G", "cyan"], ["Cafe_Free_WiFi", "red"], ["TP-Link_1234", "purple"]];
  return <div className="space-y-3">{ssids.map(([ssid, color]) => <div key={ssid} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex items-center gap-3`}><Wifi className={colorClasses[color].text} size={22} /><div><p className="text-white font-black">{ssid}</p><p className="text-slate-500 text-sm">SSID hiển thị trong danh sách WiFi</p></div></div>)}<div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-red-300 text-sm">Kẻ xấu có thể tạo SSID giống tên quen thuộc. SSID không tự chứng minh mạng an toàn.</div></div>;
}

function ChannelVisual({ active }) {
  return <div className="space-y-3">{['1','6','11'].map((ch) => <div key={ch} className={`${active === ch ? 'bg-purple-500/10 border-purple-400/40' : 'bg-slate-900 border-slate-800'} border rounded-2xl p-4`}><div className="flex items-center justify-between"><p className={`${active === ch ? 'text-purple-300' : 'text-slate-500'} font-black`}>Channel {ch}</p><Radio className={active === ch ? 'text-purple-300' : 'text-slate-600'} size={20} /></div><div className="mt-3 h-3 rounded-full bg-slate-950 overflow-hidden"><div className={`${active === ch ? 'bg-purple-500 w-full' : 'bg-slate-700 w-1/3'} h-full rounded-full`} /></div></div>)}</div>;
}

function UsersIcon() { return <Smartphone />; }
function FileTextIcon() { return <Database />; }

function SharedMediumVisual() {
  const devices = [["Phone", "cyan", <Smartphone />], ["Laptop", "blue", <Laptop />], ["Smart TV", "purple", <Tv />], ["Camera", "orange", <Eye />], ["Printer", "green", <HardDrive />], ["Speaker", "yellow", <Radio />]];
  return <div className="space-y-4"><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center"><Router className="mx-auto text-orange-300 mb-2" size={38} /><p className="text-white font-black">Router / AP</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{devices.map(([name, color, icon]) => <MiniCard key={name} title={name} value="cùng chia sẻ sóng" color={color} icon={icon} />)}</div></div>;
}

function TechnicalFlowVisual() {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">+----------+        WiFi        +-------------+       Internet       +-----------+</p><p className="text-cyan-300">| Laptop   | ~~~~~~~~~~~~~~~~~&gt; | Router/AP   | ------------------&gt; | Website   |</p><p className="text-green-300">| .1.25    | &lt;~~~~~~~~~~~~~~~~~ | .1.1        | &lt;------------------ | Server    |</p><p className="text-cyan-300">+----------+                    +-------------+                      +-----------+</p></div>;
}

function OverviewWifiVisual() {
  return <div className="space-y-4"><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center"><Globe2 className="mx-auto text-cyan-300 mb-2" size={36} /><p className="text-white font-black">Internet</p></div><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Modem" desc="Kết nối nhà bạn với nhà mạng" color="blue" icon={<Server />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Router / AP" desc="Định tuyến + phát WiFi" color="orange" icon={<Router />} /><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Laptop" value="WiFi client" color="cyan" icon={<Laptop />} /><MiniCard title="Điện thoại" value="WiFi client" color="green" icon={<Smartphone />} /><MiniCard title="Smart TV" value="WiFi client" color="purple" icon={<Tv />} /></div></div>;
}

function CsmaVisual() {
  return <div className="space-y-4"><MiniFlowNode title="1. Nghe trước" desc="Có ai đang truyền không?" color="cyan" icon={<Eye />} /><MiniFlowNode title="2. Nếu kênh rảnh" desc="Thiết bị bắt đầu gửi" color="green" icon={<Send />} /><MiniFlowNode title="3. Nếu kênh bận" desc="Chờ một khoảng rồi thử lại" color="orange" icon={<Timer />} /><MiniFlowNode title="4. Nếu lỗi/va chạm" desc="Dừng và truyền lại sau" color="red" icon={<RefreshCw />} /></div>;
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
