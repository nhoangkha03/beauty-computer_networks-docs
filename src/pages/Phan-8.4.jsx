import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Battery,
  Bluetooth,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cpu,
  DoorOpen,
  Gamepad2,
  Globe2,
  Headphones,
  Home,
  KeyRound,
  Laptop,
  Layers,
  Lightbulb,
  Lock,
  MousePointer2,
  Network,
  PlugZap,
  Radio,
  RefreshCw,
  Router,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Speaker,
  Tablet,
  Thermometer,
  Tv,
  User,
  Watch,
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

const compareRows = [
  ["Mục tiêu chính", "Truy cập mạng tốc độ cao", "Kết nối thiết bị cá nhân", "IoT, nhà thông minh"],
  ["Phạm vi", "Trung bình", "Ngắn", "Ngắn đến trung bình, mở rộng bằng mesh"],
  ["Tốc độ", "Cao", "Thấp đến trung bình", "Thấp"],
  ["Tiêu thụ điện", "Cao hơn", "Thấp", "Rất thấp"],
  ["Ví dụ dùng", "Laptop, điện thoại, TV", "Tai nghe, chuột, loa", "Cảm biến, bóng đèn, công tắc"],
  ["Có cần router Internet?", "Thường có", "Không nhất thiết", "Thường cần hub để ra Internet"],
  ["Phù hợp chạy pin lâu", "Không tối ưu", "Có", "Rất phù hợp"],
];

const chooseRows = [
  ["Bluetooth", "Thiết bị cá nhân, khoảng cách gần, ghép đôi nhanh, dữ liệu không quá lớn", "Điện thoại + tai nghe, laptop + chuột, tay cầm + máy chơi game", "blue"],
  ["Zigbee", "Nhiều thiết bị IoT, cần tiết kiệm pin, cần mesh, không cần tốc độ cao", "Cảm biến cửa, bóng đèn, công tắc, ổ cắm thông minh", "emerald"],
  ["WiFi", "Cần tốc độ cao, thiết bị có nguồn điện ổn định, cần kết nối IP trực tiếp", "Laptop, Smart TV, camera IP, điện thoại", "cyan"],
];

const bluetoothDevices = [
  ["Tai nghe", "âm thanh cá nhân", "blue", <Headphones />],
  ["Chuột", "điều khiển con trỏ", "cyan", <MousePointer2 />],
  ["Bàn phím", "nhập liệu", "purple", <Laptop />],
  ["Loa", "phát nhạc", "orange", <Speaker />],
  ["Đồng hồ", "thông báo/sức khỏe", "green", <Watch />],
  ["Tay cầm", "chơi game", "red", <Gamepad2 />],
];

const zigbeeDevices = [
  ["Bóng đèn", "bật/tắt/đổi sáng", "yellow", <Lightbulb />],
  ["Cảm biến cửa", "mở/đóng", "orange", <DoorOpen />],
  ["Cảm biến chuyển động", "phát hiện người", "cyan", <Radio />],
  ["Công tắc", "điều khiển đèn", "purple", <Zap />],
  ["Ổ cắm", "điều khiển nguồn", "green", <PlugZap />],
  ["Nhiệt độ/độ ẩm", "đo môi trường", "blue", <Thermometer />],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Bluetooth className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 8: Mạng không dây — Wireless</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 8.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <BluetoothSection />
        <PanSection />
        <ZigbeeSection />
        <ZigbeeHubSection />
        <MeshSection />
        <RealWorldExamples />
        <TechnicalSmartHomeExample />
        <ComparisonTable />
        <DiagramsSection />
        <BluetoothProcess />
        <ZigbeeProcess />
        <WhenToUseSection />
        <SecurityNotes />
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
            <Layers size={16} /> Wireless — PAN & IoT
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Bluetooth & Zigbee
            <span className="block text-cyan-400">Thiết bị cá nhân và IoT</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bluetooth phù hợp kết nối thiết bị cá nhân tầm gần. Zigbee phù hợp nhà thông minh vì tiết kiệm điện, hỗ trợ mesh và không cần tốc độ cao.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-blue-300">Bluetooth</span> = tầm ngắn, thiết bị cá nhân.</p>
            <p><span className="text-emerald-300">Zigbee</span> = IoT, pin lâu, mesh.</p>
            <p><span className="text-purple-300">Hub</span> = cầu nối Zigbee với WiFi/Ethernet/IP.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroWirelessVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu Bluetooth là gì và thường dùng trong trường hợp nào.",
    "Hiểu Zigbee là gì và vì sao hay dùng trong nhà thông minh.",
    "Phân biệt WiFi, Bluetooth và Zigbee.",
    "Nắm khái niệm PAN, IoT và mesh network.",
    "Biết chọn công nghệ phù hợp cho từng tình huống thực tế.",
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

function BluetoothSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Bluetooth là gì?" icon={<Bluetooth />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-blue-300">Bluetooth</strong> là công nghệ truyền dữ liệu không dây ở khoảng cách ngắn, thường dùng để kết nối các thiết bị cá nhân gần nhau.</p>
            <ConceptCard title="Bluetooth không thay thế WiFi" icon={<Bluetooth />} color="blue" text="Bluetooth được thiết kế để ghép đôi đơn giản, tiêu thụ ít điện hơn và kết nối thiết bị gần nhau như tai nghe, chuột, loa, đồng hồ hoặc ô tô." code={`Điện thoại  ~~~ Bluetooth ~~~  Tai nghe
Laptop      ~~~ Bluetooth ~~~  Chuột`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <BluetoothDevicesVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PanSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="PAN là gì?" icon={<User />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Personal Area Network" icon={<User />} color="purple" text="PAN là mạng cá nhân trong phạm vi rất gần quanh một người. Bluetooth là công nghệ phổ biến để tạo PAN." code={`Tai nghe
Đồng hồ thông minh
Điện thoại
Laptop
Chuột không dây
Bàn phím không dây`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <PanVisual />
          <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
            PAN không hướng đến phủ toàn nhà như WiFi, mà tập trung vào vùng rất gần quanh cá nhân.
          </div>
        </div>
      </div>
    </section>
  );
}

function ZigbeeSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Zigbee là gì?" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Không dây tiết kiệm điện cho IoT" icon={<Battery />} color="emerald" text="Zigbee là công nghệ truyền thông không dây tầm ngắn, tiêu thụ điện rất thấp, thường dùng cho IoT và nhà thông minh." code={`Cảm biến cửa  ~~~ Zigbee ~~~  Zigbee Hub  ~~~ Router ~~~ Internet

IoT = Internet of Things = Internet vạn vật`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ZigbeeDevicesVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ZigbeeHubSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Zigbee Hub là gì?" icon={<Server />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Cầu nối giữa Zigbee và mạng IP" icon={<Server />} color="orange" text="Nhiều thiết bị Zigbee không kết nối trực tiếp vào router WiFi. Chúng thường cần Zigbee Hub hoặc Zigbee Coordinator để quản lý và kết nối ra mạng IP/Internet." code={`Bóng đèn Zigbee
Cảm biến cửa Zigbee  ~~~ Zigbee ~~~  Hub  --- Ethernet/WiFi --- Router
Công tắc Zigbee`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <MiniFlowNode title="Quản lý thiết bị" desc="hub biết các thiết bị Zigbee trong nhà" color="orange" icon={<DatabaseIcon />} />
          <MiniFlowNode title="Nhận dữ liệu cảm biến" desc="cửa mở, chuyển động, nhiệt độ" color="cyan" icon={<Search />} />
          <MiniFlowNode title="Gửi lệnh điều khiển" desc="bật đèn, tắt ổ cắm" color="green" icon={<Send />} />
          <MiniFlowNode title="Kết nối ra router" desc="WiFi/Ethernet/IP" color="purple" icon={<Router />} />
        </div>
      </div>
    </section>
  );
}

function MeshSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Mesh network là gì?" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Mạng dạng lưới" icon={<Network />} color="green" text="Trong mesh network, một số thiết bị có thể chuyển tiếp dữ liệu cho nhau để mở rộng vùng phủ. Zigbee rất hay dùng mesh trong nhà thông minh." code={`[Hub] --- [Bóng đèn 1] --- [Bóng đèn 2] --- [Cảm biến]

Cảm biến ở xa có thể gửi qua thiết bị trung gian để về hub.`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MeshVisual />
            <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
              Trong Zigbee, thiết bị cắm điện như bóng đèn/ổ cắm thường có thể chuyển tiếp. Thiết bị chạy pin như cảm biến thường không chuyển tiếp để tiết kiệm pin.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="cyan" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bluetooth giống dây nối vô hình" icon={<Headphones />} color="blue" text="Tai nghe có dây cần dây nối từ điện thoại đến tai. Tai nghe Bluetooth thay sợi dây đó bằng sóng không dây." code={`Điện thoại -------- dây -------- Tai nghe
Điện thoại ~~~~~ Bluetooth ~~~~~ Tai nghe`} />
        <ConceptCard title="Zigbee giống người đưa tin trong nhà" icon={<Home />} color="emerald" text="Nếu cảm biến ở xa hub, dữ liệu có thể đi qua bóng đèn hoặc ổ cắm trung gian, giống nhiều người đưa tin nối tiếp nhau." code="Cảm biến cửa → Bóng đèn hành lang → Ổ cắm thông minh → Hub" />
      </div>
    </section>
  );
}

function TechnicalSmartHomeExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="emerald" title="Ví dụ kỹ thuật: hệ thống nhà thông minh" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Luồng điều khiển và cảm biến" icon={<Home />} color="emerald" text="Khi bạn mở app để bật đèn, lệnh đi từ điện thoại qua router, vào hub, rồi đến bóng đèn Zigbee. Khi cảm biến phát hiện cửa mở, tín hiệu đi ngược lại về app." code={`Bật đèn:
Điện thoại → Router WiFi → Zigbee Hub → Bóng đèn Zigbee

Cửa mở:
Cảm biến cửa → Zigbee Hub → Router → App điện thoại`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <SmartHomeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const [active, setActive] = useState("Zigbee");
  const summary = {
    WiFi: ["WiFi", "Tốc độ cao, phù hợp laptop, điện thoại, TV, camera IP, thiết bị cần IP trực tiếp.", "cyan", <Wifi />],
    Bluetooth: ["Bluetooth", "Thiết bị cá nhân tầm gần như tai nghe, chuột, loa, đồng hồ, tay cầm.", "blue", <Bluetooth />],
    Zigbee: ["Zigbee", "IoT và nhà thông minh: tiết kiệm pin, tốc độ thấp, hỗ trợ mesh.", "emerald", <Radio />],
  }[active];
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="blue" title="Bảng so sánh WiFi, Bluetooth và Zigbee" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {['WiFi','Bluetooth','Zigbee'].map((name) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={name === 'WiFi' ? 'cyan' : name === 'Bluetooth' ? 'blue' : 'emerald'}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={summary[0]} icon={summary[3]} color={summary[2]} text={summary[1]} code={`WiFi ưu tiên tốc độ.
Bluetooth ưu tiên thiết bị cá nhân gần.
Zigbee ưu tiên tiết kiệm pin và IoT.`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[820px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">WiFi</th><th className="p-4 text-blue-300">Bluetooth</th><th className="p-4 text-emerald-300">Zigbee</th></tr></thead>
                <tbody>
                  {compareRows.map(([criteria, wifi, bt, zigbee], i) => <tr key={criteria} className={`${i === compareRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{wifi}</td><td className="p-4 text-slate-300">{bt}</td><td className="p-4 text-slate-300">{zigbee}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramsSection() {
  const [mode, setMode] = useState("zigbeeMesh");
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="Sơ đồ Bluetooth, Zigbee Hub và Zigbee Mesh" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === 'bluetooth' ? 'Bluetooth trực tiếp' : mode === 'zigbeeHub' ? 'Zigbee với Hub' : 'Zigbee Mesh'} icon={mode === 'bluetooth' ? <Bluetooth /> : <Radio />} color={mode === 'bluetooth' ? 'blue' : 'emerald'} text={mode === 'bluetooth' ? 'Thường là kết nối trực tiếp giữa hai thiết bị gần nhau.' : mode === 'zigbeeHub' ? 'Các thiết bị Zigbee thường đi qua hub để kết nối vào router và Internet.' : 'Một số thiết bị Zigbee chuyển tiếp dữ liệu cho nhau để mở rộng phạm vi.'} code={mode === 'bluetooth' ? '[Điện thoại] ~~~~~ Bluetooth ~~~~~ [Tai nghe]' : mode === 'zigbeeHub' ? `[Bóng đèn] [Cảm biến] [Công tắc]
       \\        |        /
          [Zigbee Hub] --- [Router]` : '[Hub] --- [Bóng đèn 1] --- [Bóng đèn 2] --- [Cảm biến]'} />
            <div className="grid grid-cols-3 gap-2">
              <ChoiceButton active={mode === 'bluetooth'} onClick={() => setMode('bluetooth')} color="blue">Bluetooth</ChoiceButton>
              <ChoiceButton active={mode === 'zigbeeHub'} onClick={() => setMode('zigbeeHub')} color="emerald">Hub</ChoiceButton>
              <ChoiceButton active={mode === 'zigbeeMesh'} onClick={() => setMode('zigbeeMesh')} color="green">Mesh</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === 'bluetooth' ? <BluetoothDiagram /> : mode === 'zigbeeHub' ? <ZigbeeHubDiagram /> : <MeshVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function BluetoothProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Bật Bluetooth", text: "Điện thoại bật Bluetooth, tai nghe vào Pairing Mode để sẵn sàng ghép đôi.", code: `Điện thoại: Bluetooth On
Tai nghe: Pairing Mode`, color: "blue", icon: <Bluetooth /> },
    { title: "Quét thiết bị gần đó", text: "Điện thoại tìm các thiết bị Bluetooth xung quanh.", code: `Kha AirBuds
BT Speaker
MX Master Mouse
Car Audio`, color: "cyan", icon: <Search /> },
    { title: "Pairing — ghép đôi", text: "Bạn chọn thiết bị. Hai bên trao đổi thông tin để tạo kết nối tin cậy.", code: `Chọn: Kha AirBuds
Pairing successful`, color: "purple", icon: <KeyRound /> },
    { title: "Tự kết nối lại", text: "Sau khi ghép đôi thành công, lần sau thường chỉ cần bật Bluetooth là có thể tự kết nối lại.", code: "Known device → auto reconnect", color: "green", icon: <RefreshCw /> },
    { title: "Truyền dữ liệu", text: "Nếu là tai nghe, điện thoại gửi âm thanh. Nếu là chuột, chuột gửi tín hiệu di chuyển/click.", code: `Điện thoại → audio → Bluetooth → Tai nghe
Chuột → move/click → Bluetooth → Laptop`, color: "blue", icon: <Send /> },
  ];
  return <StepSection number="11" color="blue" title="Bluetooth hoạt động như thế nào?" icon={<Bluetooth />} steps={steps} step={step} setStep={setStep} />;
}

function ZigbeeProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Có Zigbee Hub / Coordinator", text: "Mạng Zigbee thường có một coordinator trung tâm, trong nhà thông minh thường chính là Zigbee Hub.", code: "[Zigbee Hub / Coordinator]", color: "orange", icon: <Server /> },
    { title: "Thiết bị join vào mạng", text: "Khi thêm cảm biến vào app, hub mở chế độ cho thiết bị mới tham gia.", code: `Hub: cho phép thiết bị join
Cảm biến cửa: xin tham gia mạng`, color: "cyan", icon: <UserCheckIcon /> },
    { title: "Thiết bị gửi dữ liệu khi có sự kiện", text: "Thiết bị Zigbee chạy pin thường không gửi liên tục. Nó gửi khi có sự kiện để tiết kiệm pin.", code: `Cửa đóng → im lặng
Cửa mở → gửi tín hiệu door opened`, color: "green", icon: <DoorOpen /> },
    { title: "Mesh chuyển tiếp nếu cần", text: "Nếu cảm biến xa hub, dữ liệu có thể đi qua bóng đèn hoặc ổ cắm Zigbee trung gian.", code: "Cảm biến cửa → Bóng đèn Zigbee → Ổ cắm Zigbee → Hub", color: "purple", icon: <Network /> },
    { title: "Hub kết nối đến app/hệ thống", text: "Hub gửi dữ liệu đến app hoặc hệ thống nhà thông minh để hiển thị hoặc kích hoạt rule.", code: `Cảm biến phát hiện chuyển động
→ Hub nhận tín hiệu
→ App kích hoạt rule
→ Bật đèn hành lang`, color: "emerald", icon: <Smartphone /> },
  ];
  return <StepSection number="12" color="emerald" title="Zigbee hoạt động như thế nào?" icon={<Radio />} steps={steps} step={step} setStep={setStep} />;
}

function WhenToUseSection() {
  const [active, setActive] = useState("Zigbee");
  const row = chooseRows.find(([name]) => name === active) || chooseRows[1];
  const [, when, examples, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="cyan" title="Khi nào dùng Bluetooth, Zigbee hoặc WiFi?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {chooseRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={`Dùng ${active} khi...`} icon={active === "Bluetooth" ? <Bluetooth /> : active === "Zigbee" ? <Radio /> : <Wifi />} color={color} text={when} code={examples} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Công nghệ</th><th className="p-4">Dùng khi</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {chooseRows.map(([name, w, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === chooseRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{w}</td><td className="p-4 text-green-300">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityNotes() {
  const [mode, setMode] = useState("zigbee");
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="red" title="Một số lưu ý bảo mật" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title={mode === "bluetooth" ? "Bảo mật Bluetooth" : "Bảo mật Zigbee/IoT"} icon={<ShieldCheck />} color={mode === "bluetooth" ? "blue" : "emerald"} text={mode === "bluetooth" ? "Bluetooth có rủi ro ghép đôi nhầm thiết bị lạ, discoverable quá lâu, thiết bị cũ bảo mật kém hoặc nhận file/yêu cầu lạ." : "Zigbee/IoT có rủi ro hub bị chiếm quyền, thiết bị giá rẻ bảo mật kém, không cập nhật firmware hoặc IoT nằm chung mạng chính."} code={mode === "bluetooth" ? `Nên làm:
Tắt discoverable khi không cần
Không pair thiết bị lạ
Xóa thiết bị đã pair nếu không dùng
Cập nhật firmware` : `Nên làm:
Dùng hub uy tín
Cập nhật firmware
Tách mạng IoT nếu router hỗ trợ
Mật khẩu mạnh cho app nhà thông minh
Không thêm thiết bị không rõ nguồn gốc`} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "bluetooth"} onClick={() => setMode("bluetooth")} color="blue">Bluetooth</ChoiceButton>
              <ChoiceButton active={mode === "zigbee"} onClick={() => setMode("zigbee")} color="emerald">Zigbee</ChoiceButton>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {(mode === "bluetooth" ? [
              ["Không pair thiết bị lạ", "tránh kết nối nhầm", "red", <XCircle />],
              ["Tắt discoverable", "khi không cần", "orange", <EyeIcon />],
              ["Xóa thiết bị cũ", "nếu không dùng nữa", "blue", <RefreshCw />],
              ["Cập nhật firmware", "nếu có", "green", <ShieldCheck />],
            ] : [
              ["Hub uy tín", "trung tâm điều khiển quan trọng", "emerald", <Server />],
              ["Tách mạng IoT", "giảm rủi ro lan sang mạng chính", "cyan", <Network />],
              ["Firmware", "vá lỗi bảo mật", "green", <ShieldCheck />],
              ["Không thêm đồ lạ", "thiết bị không rõ nguồn gốc", "red", <ShieldAlert />],
            ]).map(([title, desc, color, icon]) => <MiniFlowNode key={title} title={title} desc={desc} color={color} icon={icon} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ Bluetooth là WiFi mini", desc: "Bluetooth không được thiết kế chủ yếu để truy cập Internet tốc độ cao, mà để kết nối thiết bị cá nhân tầm gần.", fix: "Bluetooth = thiết bị cá nhân; WiFi = mạng tốc độ cao." },
    { title: "Dùng WiFi cho mọi cảm biến IoT chạy pin", desc: "WiFi thường tiêu thụ điện cao hơn, không tối ưu cho cảm biến pin lâu dài.", fix: "Cảm biến pin nên cân nhắc Zigbee." },
    { title: "Nghĩ Zigbee tự ra Internet", desc: "Nhiều thiết bị Zigbee cần hub/coordinator để nối sang mạng IP/Internet.", fix: "Zigbee Hub là cầu nối." },
    { title: "Tưởng mọi thiết bị Zigbee đều chuyển tiếp mesh", desc: "Thiết bị chạy pin thường không chuyển tiếp để tiết kiệm năng lượng; thiết bị cắm điện thường có thể làm router mesh.", fix: "Cắm điện thường route; pin thường end device." },
    { title: "Không tách mạng IoT", desc: "Thiết bị IoT giá rẻ có thể bảo mật yếu. Nếu nằm chung mạng chính, rủi ro lan rộng hơn.", fix: "Tách mạng IoT/guest/VLAN nếu router hỗ trợ." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
              <p>Bluetooth là công nghệ không dây tầm ngắn cho thiết bị cá nhân.</p>
              <p>PAN = Personal Area Network, mạng cá nhân quanh một người.</p>
              <p>Zigbee là công nghệ không dây tiết kiệm pin cho IoT và nhà thông minh.</p>
              <p>IoT = Internet of Things, thiết bị thông minh có thể kết nối và trao đổi dữ liệu.</p>
              <p>Zigbee Hub/Coordinator là cầu nối giữa Zigbee và WiFi/Ethernet/IP.</p>
              <p>Mesh network cho phép một số thiết bị chuyển tiếp dữ liệu cho nhau.</p>
              <p>Bluetooth phù hợp tai nghe, chuột, loa, đồng hồ, tay cầm.</p>
              <p>Zigbee phù hợp cảm biến, bóng đèn, công tắc, ổ cắm thông minh.</p>
              <p>WiFi phù hợp tốc độ cao, laptop, điện thoại, TV, camera IP.</p>
              <p>Thiết bị Zigbee cắm điện thường có thể chuyển tiếp; thiết bị pin thường không.</p>
              <p>Bluetooth cần tránh pair thiết bị lạ và tắt discoverable khi không cần.</p>
              <p>Zigbee/IoT nên dùng hub uy tín, cập nhật firmware và tách mạng IoT nếu có thể.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Bluetooth thường dùng để làm gì?", options: ["Kết nối thiết bị cá nhân ở khoảng cách gần", "Định tuyến WAN giữa chi nhánh", "Cấp IP cho máy tính", "Thay thế router Internet cho cả văn phòng"], correct: 0, explanation: "Bluetooth phù hợp kết nối thiết bị cá nhân tầm gần như tai nghe, chuột, loa, đồng hồ hoặc tay cầm." },
  { question: "PAN là gì?", options: ["Mạng cá nhân phạm vi gần quanh một người", "Mạng nhà mạng 5G", "Một kiểu DNS server", "Một chuẩn bảo mật WiFi"], correct: 0, explanation: "PAN = Personal Area Network, mạng cá nhân rất gần quanh người dùng, thường có điện thoại, tai nghe, đồng hồ, chuột, bàn phím." },
  { question: "Zigbee phù hợp với cảm biến cửa/chuyển động chạy pin vì sao?", options: ["Tiêu thụ điện rất thấp và không cần tốc độ cao", "Tốc độ cao hơn WiFi nhiều lần", "Luôn kết nối trực tiếp Internet không cần hub", "Dùng để xem video 4K"], correct: 0, explanation: "Zigbee được thiết kế cho IoT tiết kiệm pin, dữ liệu nhỏ, gửi theo sự kiện nên phù hợp cảm biến chạy pin." },
  { question: "Zigbee Hub có vai trò gì?", options: ["Cầu nối giữa mạng Zigbee và mạng IP/Internet", "Thay thế tai nghe Bluetooth", "Cấp sóng 5G ngoài trời", "Mã hóa HTTPS cho website"], correct: 0, explanation: "Hub/coordinator quản lý thiết bị Zigbee và nối hệ Zigbee sang router, app hoặc Internet." },
  { question: "Mesh network trong Zigbee nghĩa là gì?", options: ["Một số thiết bị có thể chuyển tiếp dữ liệu cho nhau", "Mọi thiết bị bắt buộc kết nối thẳng Internet", "Chỉ có một thiết bị được phép nói", "Chỉ dùng dây cáp Ethernet"], correct: 0, explanation: "Mesh giúp mở rộng phạm vi vì dữ liệu có thể đi qua bóng đèn/ổ cắm trung gian về hub." },
  { question: "Nhà có 20 thiết bị thông minh gồm bóng đèn, cảm biến cửa, cảm biến chuyển động và ổ cắm nên ưu tiên gì?", options: ["Zigbee là chính, vì tiết kiệm pin, hỗ trợ mesh và phù hợp IoT", "Bluetooth là chính cho mọi thiết bị", "Chỉ dùng WiFi vì cảm biến cần tốc độ cao", "Không dùng hub hay router"], correct: 0, explanation: "Với nhiều thiết bị IoT, Zigbee phù hợp vì tiết kiệm pin, hỗ trợ mesh, ổn định cho cảm biến và không cần tốc độ cao." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài Bluetooth & Zigbee!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang mạng di động: 3G, 4G LTE và 5G.</p>
      <Link to="/phan-8-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 8.5 — Mạng di động 3G/4G/5G <ChevronRight size={20} />
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

function HeroWirelessVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="WiFi" value="speed" color="cyan" icon={<Wifi />} /><MiniCard title="Bluetooth" value="PAN" color="blue" icon={<Bluetooth />} /><MiniCard title="Zigbee" value="IoT" color="emerald" icon={<Radio />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-blue-300">Phone ~~~ Bluetooth ~~~ AirBuds</p><p className="text-emerald-300">Sensor ~~~ Zigbee Mesh ~~~ Hub</p><p className="text-cyan-300">Laptop ~~~ WiFi ~~~ Router ~~~ Internet</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="Low Power" value="Zigbee" color="green" icon={<Battery />} /><MiniCard title="Pairing" value="Bluetooth" color="blue" icon={<KeyRound />} /><MiniCard title="Hub" value="Zigbee" color="orange" icon={<Server />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function BluetoothDevicesVisual() {
  return <div className="grid md:grid-cols-3 gap-3">{bluetoothDevices.map(([name, desc, color, icon]) => <MiniCard key={name} title={name} value={desc} color={color} icon={icon} />)}</div>;
}

function PanVisual() {
  return <div className="space-y-4"><div className="bg-purple-500/10 border border-purple-400/40 rounded-3xl p-5 text-center"><User className="mx-auto text-purple-300 mb-2" size={42} /><p className="text-white font-black">Bạn</p><p className="text-purple-300 font-mono text-sm">Personal Area Network</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3"><MiniCard title="Tai nghe" value="Bluetooth" color="blue" icon={<Headphones />} /><MiniCard title="Đồng hồ" value="Bluetooth" color="green" icon={<Watch />} /><MiniCard title="Điện thoại" value="Bluetooth" color="cyan" icon={<Smartphone />} /><MiniCard title="Laptop" value="Bluetooth" color="purple" icon={<Laptop />} /><MiniCard title="Chuột" value="Bluetooth" color="orange" icon={<MousePointer2 />} /><MiniCard title="Bàn phím" value="Bluetooth" color="yellow" icon={<Laptop />} /></div></div>;
}

function ZigbeeDevicesVisual() {
  return <div className="grid md:grid-cols-3 gap-3">{zigbeeDevices.map(([name, desc, color, icon]) => <MiniCard key={name} title={name} value={desc} color={color} icon={icon} />)}</div>;
}

function DatabaseIcon() { return <Cpu />; }
function EyeIcon() { return <Search />; }
function UserCheckIcon() { return <CheckCircle2 />; }

function MeshVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Zigbee Hub" desc="coordinator" color="orange" icon={<Server />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Bóng đèn 1" desc="router chuyển tiếp" color="yellow" icon={<Lightbulb />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Ổ cắm thông minh" desc="router chuyển tiếp" color="green" icon={<PlugZap />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Cảm biến cửa" desc="end device chạy pin" color="cyan" icon={<DoorOpen />} /></div>;
}

function SmartHomeVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Internet" desc="cloud/app" color="cyan" icon={<Globe2 />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Router WiFi" desc="mạng IP trong nhà" color="blue" icon={<Router />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Zigbee Hub" desc="cầu nối Zigbee" color="orange" icon={<Server />} /><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Bóng đèn" value="Zigbee" color="yellow" icon={<Lightbulb />} /><MiniCard title="Cảm biến" value="Zigbee" color="cyan" icon={<DoorOpen />} /><MiniCard title="Công tắc" value="Zigbee" color="purple" icon={<Zap />} /></div></div>;
}

function BluetoothDiagram() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Điện thoại" color="cyan" icon={<Smartphone />} /><ArrowRight className="text-blue-300" /><MiniNode label="Tai nghe" color="blue" icon={<Headphones />} /></div><div className="text-center text-blue-300 font-mono bg-slate-900 border border-slate-800 rounded-2xl p-4">~~~~~ Bluetooth ~~~~~</div></div>;
}

function ZigbeeHubDiagram() {
  return <div className="space-y-4"><MiniFlowNode title="Router WiFi" desc="mạng IP/Internet" color="cyan" icon={<Router />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Zigbee Hub" desc="coordinator" color="orange" icon={<Server />} /><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Bóng đèn" value="Zigbee" color="yellow" icon={<Lightbulb />} /><MiniCard title="Cảm biến" value="Zigbee" color="green" icon={<DoorOpen />} /><MiniCard title="Công tắc" value="Zigbee" color="purple" icon={<Zap />} /></div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
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
