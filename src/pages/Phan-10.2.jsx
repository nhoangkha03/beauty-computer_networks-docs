import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Binary,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCheck2,
  FileText,
  Globe2,
  Home,
  Info,
  KeyRound,
  Layers,
  ListChecks,
  Lock,
  Monitor,
  Network,
  Plug,
  Router,
  Save,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Terminal,
  Unlock,
  Wrench,
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

const cliModes = [
  ["User EXEC", "Router>", "Mặc định", "Kiểm tra đơn giản", "cyan", <Eye />],
  ["Privileged EXEC", "Router#", "enable", "Xem/lưu cấu hình", "blue", <Unlock />],
  ["Global Config", "Router(config)#", "configure terminal", "Cấu hình toàn cục", "purple", <Settings />],
  ["Interface Config", "Router(config-if)#", "interface g0/0", "Cấu hình cổng mạng", "orange", <Plug />],
  ["Line Config", "Router(config-line)#", "line console 0", "Cấu hình console/SSH/Telnet", "green", <Terminal />],
];

const commandRows = [
  ["enable", "Vào chế độ đặc quyền", "blue"],
  ["configure terminal", "Vào chế độ cấu hình", "purple"],
  ["hostname R1", "Đổi tên thiết bị", "cyan"],
  ["interface g0/0", "Vào cấu hình interface", "orange"],
  ["ip address IP MASK", "Gán IP cho interface", "green"],
  ["no shutdown", "Bật interface", "emerald"],
  ["shutdown", "Tắt interface", "red"],
  ["exit", "Thoát một cấp", "slate"],
  ["end", "Thoát về privileged mode", "yellow"],
  ["show running-config", "Xem cấu hình đang chạy", "blue"],
  ["show startup-config", "Xem cấu hình đã lưu", "purple"],
  ["show ip interface brief", "Xem nhanh IP/interface", "cyan"],
  ["copy run start", "Lưu cấu hình", "green"],
  ["ping IP", "Kiểm tra kết nối", "emerald"],
];

const showStatusRows = [
  ["up up", "Cổng hoạt động tốt", "green"],
  ["administratively down down", "Cổng bị tắt bằng lệnh shutdown", "red"],
  ["down down", "Chưa có tín hiệu vật lý hoặc dây chưa cắm", "orange"],
];

const quizQuestions = [
  {
    question: "Trong Cisco CLI, lệnh nào dùng để vào chế độ đặc quyền?",
    options: ["configure terminal", "enable", "interface g0/0", "copy run start"],
    correct: 1,
    explanation: "Lệnh enable đưa bạn từ User EXEC Mode Router> sang Privileged EXEC Mode Router#.",
  },
  {
    question: "Lệnh no shutdown dùng để làm gì?",
    options: ["Tắt cổng mạng", "Xóa cấu hình cổng", "Bật cổng mạng", "Lưu cấu hình"],
    correct: 2,
    explanation: "Trên Router/Switch Cisco, nhiều interface có thể đang tắt. no shutdown dùng để bật interface lên.",
  },
  {
    question: "Switch Layer 2 thường cấu hình IP quản trị ở đâu?",
    options: ["Cổng vật lý FastEthernet0/1", "interface vlan 1 hoặc SVI", "enable secret", "banner motd"],
    correct: 1,
    explanation: "Switch Layer 2 dùng SVI như interface vlan 1 để có IP quản trị. IP này không phải IP định tuyến như interface Router.",
  },
  {
    question: "running-config khác startup-config ở điểm nào?",
    options: ["running-config ở RAM, startup-config lưu trong NVRAM", "running-config chỉ dùng cho Switch", "startup-config mất khi reboot", "Không khác gì nhau"],
    correct: 0,
    explanation: "running-config là cấu hình đang chạy trong RAM. startup-config là cấu hình đã lưu để dùng khi thiết bị khởi động lại.",
  },
  {
    question: "Lệnh nào kiểm tra nhanh IP và trạng thái các interface?",
    options: ["show ip interface brief", "show vlan brief", "hostname R1", "line console 0"],
    correct: 0,
    explanation: "show ip interface brief là lệnh rất hay dùng để xem IP, Status và Protocol của interface.",
  },
  {
    question: "Router và Switch khác nhau cơ bản ở đâu?",
    options: ["Router nối các mạng bằng IP, Switch nối thiết bị trong LAN bằng MAC", "Router chỉ dùng dây đồng, Switch chỉ dùng WiFi", "Switch luôn định tuyến Internet", "Router không cần địa chỉ IP"],
    correct: 0,
    explanation: "Switch chủ yếu chuyển frame dựa vào MAC trong LAN. Router định tuyến giữa các mạng dựa vào IP.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 shrink-0">
              <Terminal className="text-cyan-400" size={24} />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-white tracking-tight truncate">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500 truncate">Phần 10: Thực hành & Nâng cao</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 whitespace-nowrap">Bài 10.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhatIsCli />
        <RouterVsSwitch />
        <CliModesSection />
        <LabTopologySection />
        <RouterConfigSection />
        <SwitchConfigSection />
        <CompleteConfigSection />
        <ShowCommandsSection />
        <ConnectivityTestSection />
        <TroubleshootingChecklist />
        <CommandCheatSheet />
        <CommonMistakes />
        <ConnectionSection />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Code2 size={16} /> Cisco CLI — Router & Switch Basic Config
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Cấu hình Router/Switch
            <span className="block text-cyan-400">bằng Cisco CLI</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này giúp bạn vào đúng chế độ lệnh, đặt hostname/password, gán IP, bật interface, cấu hình IP quản trị cho switch và lưu cấu hình bằng lệnh Cisco CLI.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl space-y-1">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Router</span> = IP trên interface để định tuyến.</p>
            <p><span className="text-purple-300">Switch L2</span> = IP trên VLAN/SVI để quản trị.</p>
            <p><span className="text-emerald-300">copy run start</span> = lưu cấu hình để reboot không mất.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroCliVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    ["CLI mode", "Biết các chế độ lệnh chính trong Cisco CLI.", <Terminal />],
    ["Router", "Biết cấu hình cơ bản cho Router Cisco.", <Router />],
    ["Switch", "Biết cấu hình cơ bản cho Switch Cisco.", <Network />],
    ["Thông số", "Biết đặt hostname, password, IP, default gateway.", <Settings />],
    ["Kiểm tra", "Biết lưu cấu hình và dùng các lệnh show.", <Search />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="1" color="cyan" title="Mục tiêu bài học" icon={<Award />} />
      <div className="grid md:grid-cols-5 gap-3">
        {goals.map(([title, text, icon], index) => (
          <div key={title} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {React.cloneElement(icon, { size: 20 })}
            </div>
            <p className="text-white font-black mb-2">{index + 1}. {title}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatIsCli() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Cisco CLI là gì?" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <ConceptCard
            title="Nói chuyện trực tiếp với thiết bị bằng lệnh"
            icon={<Terminal />}
            color="blue"
            text="CLI là Command Line Interface. Thay vì bấm nút trên giao diện đồ họa, bạn nhập lệnh để cấu hình Router, Switch hoặc thiết bị mô phỏng như Packet Tracer, GNS3, EVE-NG."
            code={`enable\nconfigure terminal\nhostname R1`}
          />
          <TerminalWindow title="Cisco IOS CLI" lines={["Router> enable", "Router# configure terminal", "Router(config)# hostname R1", "R1(config)# enable secret 123456"]} />
        </div>
      </div>
    </section>
  );
}

function RouterVsSwitch() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Router và Switch khác nhau thế nào?" icon={<Network />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard
          title="Switch — nối thiết bị trong cùng LAN"
          icon={<Network />}
          color="cyan"
          text="Switch chuyển frame trong mạng LAN, chủ yếu dựa vào địa chỉ MAC. PC trong cùng LAN thường nói chuyện qua switch."
          code={`PC1 ─┐\nPC2 ─┼── Switch\nPC3 ─┘\n\nSwitch xem MAC đích → chuyển đúng cổng.`}
        />
        <ConceptCard
          title="Router — nối các mạng khác nhau"
          icon={<Router />}
          color="purple"
          text="Router định tuyến giữa các mạng khác nhau, chủ yếu dựa vào địa chỉ IP. Muốn đi từ LAN này sang LAN khác thường cần router."
          code={`LAN 1 ── Router ── LAN 2\n\n192.168.1.0/24 → 192.168.2.0/24`}
        />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[650px] text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
              <tr><th className="p-4">Thiết bị</th><th className="p-4">Dùng để làm gì?</th><th className="p-4">Dựa vào địa chỉ nào?</th></tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800 hover:bg-slate-800/40"><td className="p-4 text-cyan-300 font-black">Switch</td><td className="p-4 text-slate-300">Kết nối thiết bị trong cùng LAN</td><td className="p-4 text-slate-300">MAC</td></tr>
              <tr className="hover:bg-slate-800/40"><td className="p-4 text-purple-300 font-black">Router</td><td className="p-4 text-slate-300">Kết nối các mạng khác nhau</td><td className="p-4 text-slate-300">IP</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CliModesSection() {
  const [active, setActive] = useState(0);
  const current = cliModes[active];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Các chế độ lệnh trong Cisco CLI" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="space-y-3">
            {cliModes.map(([mode, prompt, command, desc, color, icon], index) => (
              <button key={mode} onClick={() => setActive(index)} className={`w-full text-left rounded-2xl border p-4 transition-all ${active === index ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}>
                <div className="flex items-center gap-3">
                  <div className={`${active === index ? colorClasses[color].solid : "bg-slate-900"} text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                    {React.cloneElement(icon, { size: 22 })}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-black">{mode}</p>
                    <p className={`${colorClasses[color].text} font-mono text-xs mt-1 break-all`}>{prompt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className={`${colorClasses[current[4]].bg} ${colorClasses[current[4]].border} border rounded-3xl p-5 mb-5`}>
              <div className={`${colorClasses[current[4]].solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                {React.cloneElement(current[5], { size: 28 })}
              </div>
              <p className={`${colorClasses[current[4]].text} text-sm uppercase font-black tracking-wider mb-2`}>Đang chọn</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current[0]}</h3>
              <div className="font-mono bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-green-300 mb-4">{current[1]}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong>Lệnh vào:</strong> {current[2]}</p>
              <p className="text-slate-400 text-sm leading-relaxed"><strong>Dùng để:</strong> {current[3]}</p>
            </div>
            <ModeFlowVisual active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LabTopologySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Sơ đồ lab cơ bản" icon={<Monitor />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <LabTopologyVisual />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[680px] text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
              <tr><th className="p-4">Thiết bị</th><th className="p-4">Interface</th><th className="p-4">IP</th><th className="p-4">Vai trò</th></tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800 hover:bg-slate-800/40"><td className="p-4 text-white font-bold">PC1</td><td className="p-4 text-slate-300">NIC</td><td className="p-4 text-cyan-300 font-mono">192.168.1.10/24</td><td className="p-4 text-slate-300">Máy người dùng</td></tr>
              <tr className="border-b border-slate-800 hover:bg-slate-800/40"><td className="p-4 text-white font-bold">SW1</td><td className="p-4 text-slate-300">VLAN 1</td><td className="p-4 text-purple-300 font-mono">192.168.1.2/24</td><td className="p-4 text-slate-300">IP quản trị</td></tr>
              <tr className="hover:bg-slate-800/40"><td className="p-4 text-white font-bold">R1</td><td className="p-4 text-slate-300">G0/0</td><td className="p-4 text-emerald-300 font-mono">192.168.1.1/24</td><td className="p-4 text-slate-300">Default gateway</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RouterConfigSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Vào chế độ đặc quyền", text: "Từ dấu nhắc Router>, dùng enable để vào Router#.", code: "Router> enable\nRouter#", color: "blue", icon: <Unlock /> },
    { title: "Vào cấu hình toàn cục", text: "configure terminal hoặc conf t để vào Global Configuration Mode.", code: "Router# configure terminal\nRouter(config)#", color: "purple", icon: <Settings /> },
    { title: "Đổi tên Router", text: "Hostname giúp nhận diện thiết bị khi có nhiều router/switch.", code: "Router(config)# hostname R1\nR1(config)#", color: "cyan", icon: <FileText /> },
    { title: "Đặt mật khẩu enable", text: "enable secret an toàn hơn enable password vì được mã hóa tốt hơn.", code: "R1(config)# enable secret 123456", color: "green", icon: <KeyRound /> },
    { title: "Cấu hình cổng G0/0", text: "Gán IP cho interface Router và bật cổng bằng no shutdown.", code: "R1(config)# interface gigabitEthernet 0/0\nR1(config-if)# ip address 192.168.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit", color: "orange", icon: <Plug /> },
    { title: "Cấu hình banner", text: "Banner MOTD hiển thị cảnh báo khi có người truy cập thiết bị.", code: "R1(config)# banner motd #Unauthorized access is prohibited#", color: "yellow", icon: <ShieldCheck /> },
    { title: "Lưu cấu hình", text: "Nếu không lưu, reboot thiết bị có thể mất cấu hình.", code: "R1# copy running-config startup-config\nR1# copy run start", color: "emerald", icon: <Save /> },
  ];
  return <StepSection number="6" color="emerald" title="Cơ chế hoạt động — Cấu hình Router cơ bản" icon={<Router />} steps={steps} step={step} setStep={setStep} />;
}

function SwitchConfigSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Vào enable và cấu hình", text: "Switch cũng dùng các chế độ CLI tương tự Router.", code: "Switch> enable\nSwitch# configure terminal", color: "blue", icon: <Unlock /> },
    { title: "Đổi tên Switch", text: "Đặt tên SW1 để dễ quản lý trong mô hình lab.", code: "Switch(config)# hostname SW1\nSW1(config)#", color: "cyan", icon: <FileText /> },
    { title: "Đặt mật khẩu enable", text: "Bảo vệ chế độ đặc quyền bằng enable secret.", code: "SW1(config)# enable secret 123456", color: "green", icon: <KeyRound /> },
    { title: "Cấu hình IP quản trị trên SVI", text: "Switch Layer 2 thường đặt IP trên interface vlan 1 hoặc SVI, không đặt trực tiếp lên port vật lý để định tuyến.", code: "SW1(config)# interface vlan 1\nSW1(config-if)# ip address 192.168.1.2 255.255.255.0\nSW1(config-if)# no shutdown\nSW1(config-if)# exit", color: "purple", icon: <Network /> },
    { title: "Đặt default gateway cho Switch", text: "Switch cần default gateway để trả lời hoặc quản trị từ mạng khác.", code: "SW1(config)# ip default-gateway 192.168.1.1", color: "orange", icon: <Router /> },
    { title: "Cấu hình cổng access cho PC", text: "Cổng PC thường là access port. Có thể gán vào VLAN 1 trong bài cơ bản.", code: "SW1(config)# interface fastEthernet 0/1\nSW1(config-if)# switchport mode access\nSW1(config-if)# switchport access vlan 1\nSW1(config-if)# no shutdown\nSW1(config-if)# exit", color: "yellow", icon: <Plug /> },
    { title: "Lưu cấu hình Switch", text: "copy run start hoặc wr để ghi cấu hình vào startup-config.", code: "SW1# copy running-config startup-config\nSW1# wr", color: "emerald", icon: <Save /> },
  ];
  return <StepSection number="7" color="purple" title="Cơ chế hoạt động — Cấu hình Switch cơ bản" icon={<Network />} steps={steps} step={step} setStep={setStep} />;
}

function CompleteConfigSection() {
  const [device, setDevice] = useState("Router R1");
  const configs = {
    "Router R1": `enable\nconfigure terminal\n\nhostname R1\nenable secret 123456\n\ninterface gigabitEthernet 0/0\nip address 192.168.1.1 255.255.255.0\nno shutdown\nexit\n\nbanner motd #Unauthorized access is prohibited#\n\nend\ncopy running-config startup-config`,
    "Switch SW1": `enable\nconfigure terminal\n\nhostname SW1\nenable secret 123456\n\ninterface vlan 1\nip address 192.168.1.2 255.255.255.0\nno shutdown\nexit\n\nip default-gateway 192.168.1.1\n\ninterface fastEthernet 0/1\nswitchport mode access\nswitchport access vlan 1\nno shutdown\nexit\n\nend\ncopy running-config startup-config`,
  };
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="blue" title="Cấu hình hoàn chỉnh mẫu" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-5">
          {Object.keys(configs).map((name) => (
            <button key={name} onClick={() => setDevice(name)} className={`px-4 py-3 rounded-xl font-bold transition-all ${device === name ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}>{name}</button>
          ))}
        </div>
        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <Terminal size={18} className="text-blue-300" />
            <p className="text-white font-black">{device}</p>
          </div>
          <pre className="p-5 overflow-x-auto text-sm text-green-300 font-mono whitespace-pre-wrap">{configs[device]}</pre>
        </div>
      </div>
    </section>
  );
}

function ShowCommandsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Lệnh kiểm tra cấu hình" icon={<Search />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard
          title="Trên Router"
          icon={<Router />}
          color="green"
          text="show ip interface brief là lệnh kiểm tra nhanh IP, trạng thái vật lý và trạng thái giao thức của từng interface."
          code={`show ip interface brief\nshow running-config\nshow startup-config`}
        />
        <ConceptCard
          title="Trên Switch"
          icon={<Network />}
          color="cyan"
          text="Switch thường kiểm tra VLAN, IP quản trị, running-config và startup-config."
          code={`show vlan brief\nshow ip interface brief\nshow running-config\nshow startup-config`}
        />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <TerminalWindow title="show ip interface brief" lines={["Interface              IP-Address      OK? Method Status                Protocol", "GigabitEthernet0/0     192.168.1.1     YES manual up                    up", "GigabitEthernet0/1     unassigned      YES unset  administratively down down"]} />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {showStatusRows.map(([status, meaning, color]) => (
          <div key={status} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4`}>
            <p className={`${colorClasses[color].text} font-mono font-black text-sm mb-2 break-all`}>{status}</p>
            <p className="text-slate-400 text-sm">{meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConnectivityTestSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="emerald" title="Kiểm tra kết nối sau cấu hình" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard
            title="Kiểm tra từ PC"
            icon={<Monitor />}
            color="emerald"
            text="Sau khi cấu hình, đặt IP cho PC rồi ping Router và Switch để xác nhận kết nối trong LAN hoạt động."
            code={`PC IP: 192.168.1.10\nMask: 255.255.255.0\nGateway: 192.168.1.1\n\nping 192.168.1.1\nping 192.168.1.2`}
          />
          <div className="space-y-3">
            <MiniFlowNode title="Ping Router" desc="ping 192.168.1.1 → default gateway" color="green" icon={<Router />} />
            <MiniFlowNode title="Ping Switch" desc="ping 192.168.1.2 → IP quản trị" color="cyan" icon={<Network />} />
            <MiniFlowNode title="Nếu thành công" desc="PC liên lạc được thiết bị trong LAN" color="emerald" icon={<CheckCircle2 />} />
            <MiniFlowNode title="Nếu thất bại" desc="kiểm tra IP, no shutdown, dây, subnet" color="red" icon={<AlertTriangle />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TroubleshootingChecklist() {
  const [checked, setChecked] = useState({});
  const items = [
    ["Đúng IP chưa?", "show ip interface brief", "Router G0/0 .1, Switch VLAN1 .2, PC .10 cùng mạng /24", "cyan"],
    ["Interface đã bật chưa?", "no shutdown", "Nếu administratively down thì vào interface và bật lên", "green"],
    ["Dây cắm đúng chưa?", "kiểm tra sơ đồ", "PC → Switch, Switch → Router; nếu sai có thể down down", "orange"],
    ["Cùng subnet chưa?", "192.168.1.0/24", "Router .1, Switch .2, PC .10 phải cùng subnet trong lab này", "purple"],
    ["Đã lưu cấu hình chưa?", "copy run start", "Nếu chưa lưu, reboot có thể mất cấu hình", "emerald"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="red" title="Checklist xử lý lỗi cấu hình" icon={<ListChecks />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="space-y-3">
          {items.map(([title, command, desc, color], idx) => {
            const done = checked[idx];
            return (
              <button key={title} onClick={() => setChecked((s) => ({ ...s, [idx]: !s[idx] }))} className={`w-full text-left rounded-2xl border p-4 transition-all ${done ? "bg-green-500/10 border-green-400/40" : `${colorClasses[color].bg} ${colorClasses[color].border}`}`}>
                <div className="flex gap-4 items-start">
                  <div className={`${done ? "bg-green-500" : colorClasses[color].solid} text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
                    {done ? <CheckCircle2 size={20} /> : idx + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-black">{title}</p>
                    <p className={`${done ? "text-green-300" : colorClasses[color].text} font-mono text-sm mt-1 break-all`}>{command}</p>
                    <p className="text-slate-400 text-sm mt-2">{desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CommandCheatSheet() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="Một số lệnh Cisco CLI rất hay dùng" icon={<Terminal />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {commandRows.map(([cmd, meaning, color]) => (
          <div key={cmd} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4`}>
            <p className={`${colorClasses[color].text} font-mono font-black text-sm mb-2 break-all`}>{cmd}</p>
            <p className="text-slate-400 text-sm">{meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    ["Quên no shutdown", "Interface có IP nhưng vẫn administratively down vì chưa bật cổng.", "Vào đúng interface và chạy no shutdown.", "red", <Plug />],
    ["Quên lưu cấu hình", "Cấu hình chạy được nhưng reboot xong mất vì chỉ nằm trong running-config.", "copy running-config startup-config hoặc copy run start.", "orange", <Save />],
    ["Nhầm IP Router và IP Switch", "Router G0/0 là gateway .1, Switch VLAN1 là IP quản trị .2.", "Phân biệt IP định tuyến của Router và IP quản trị của Switch L2.", "purple", <Router />],
    ["Đặt PC khác subnet", "PC 192.168.2.10/24 sẽ không cùng mạng với Router 192.168.1.1/24 trong lab này.", "Đặt PC về 192.168.1.10/24 và gateway 192.168.1.1.", "yellow", <Monitor />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map(([title, desc, fix, color, icon]) => (
          <div key={title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className={`${colorClasses[color].bg} ${colorClasses[color].text} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
              {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {fix}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConnectionSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="emerald" title="Bài này liên quan đến phần nào đã học?" icon={<Layers />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
        <MiniFlowNode title="1.4 Thiết bị mạng" desc="Router và Switch" color="cyan" icon={<Network />} />
        <MiniFlowNode title="4.7 Switch & VLAN" desc="VLAN, access port, SVI" color="purple" icon={<Layers />} />
        <MiniFlowNode title="5.1 IPv4" desc="IP và subnet mask" color="green" icon={<Binary />} />
        <MiniFlowNode title="5.8 Router" desc="interface IP định tuyến" color="orange" icon={<Router />} />
        <MiniFlowNode title="10.1 Tools" desc="ping, show, kiểm tra lỗi" color="blue" icon={<Search />} />
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">15</span>
            Tóm tắt & Kiểm tra cuối bài
          </h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>CLI = nơi nhập lệnh cấu hình Router/Switch.</p>
              <p>{`Router> → User EXEC.`}</p>
              <p>{`Router# → Privileged EXEC.`}</p>
              <p>{`Router(config)# → Global Config.`}</p>
              <p>{`Router(config-if)# → Interface Config.`}</p>
              <p>Router cần IP trên interface để định tuyến.</p>
              <p>Switch Layer 2 cần IP trên VLAN/SVI để quản trị.</p>
              <p>no shutdown dùng để bật interface.</p>
              <p>copy run start dùng để lưu cấu hình.</p>
              <p>show ip interface brief dùng để kiểm tra nhanh trạng thái IP/interface.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

function InteractiveQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const finished = currentQ === "finished";
  const q = !finished ? quizQuestions[currentQ] : null;

  const handleSelect = (index) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === q.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
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
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[430px]">
        <div className="text-6xl mb-4">{score === quizQuestions.length ? "🏆" : "👏"}</div>
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài Cisco CLI cơ bản!</h4>
        <p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{quizQuestions.length}</strong> câu hỏi.</p>
        <button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[430px]">
      <div className="flex justify-between items-center mb-4 text-sm font-medium">
        <span className="text-cyan-400">Câu hỏi {currentQ + 1}/{quizQuestions.length}</span>
        <span className="text-slate-500">Điểm: {score}</span>
      </div>
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
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}>
            <strong>Giải thích:</strong> {q.explanation}
          </div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">
            {currentQ < quizQuestions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
          </button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Bạn đã học xong Bài 10.2. Bài tiếp theo chuyển sang thiết kế mạng doanh nghiệp.</p>
      <Link to="/phan-10-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 10.3 — Thiết kế mạng doanh nghiệp <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function HeroCliVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <MiniCard title="CLI" value="command" color="cyan" icon={<Terminal />} />
        <MiniCard title="Router" value="gateway" color="purple" icon={<Router />} />
        <MiniCard title="Switch" value="LAN" color="emerald" icon={<Network />} />
      </div>
      <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
        <p className="text-slate-500">R1(config)#</p>
        <p className="text-cyan-300">interface g0/0</p>
        <p className="text-green-300">ip address 192.168.1.1 255.255.255.0</p>
        <p className="text-orange-300">no shutdown</p>
        <p className="text-emerald-300">copy run start</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <MiniCard title="Hostname" value="R1/SW1" color="blue" icon={<FileText />} />
        <MiniCard title="Secret" value="password" color="orange" icon={<KeyRound />} />
        <MiniCard title="Show" value="verify" color="green" icon={<Search />} />
      </div>
    </div>
  );
}

function ModeFlowVisual({ active, setActive }) {
  return (
    <div className="space-y-3">
      {cliModes.slice(0, 4).map(([mode, prompt, command, desc, color, icon], idx) => (
        <React.Fragment key={mode}>
          <button onClick={() => setActive(idx)} className={`w-full flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${active === idx ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
            <div className={`${active === idx ? colorClasses[color].solid : "bg-slate-950"} text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div>
            <div className="min-w-0">
              <p className="text-white font-bold">{mode}</p>
              <p className={`${colorClasses[color].text} font-mono text-xs break-all`}>{prompt}</p>
              <p className="text-slate-500 text-xs">{idx === 0 ? "start" : command}</p>
            </div>
          </button>
          {idx < 3 && <ArrowRight className="mx-auto text-slate-500 rotate-90" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function LabTopologyVisual() {
  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
        <DeviceCard title="PC1" ip="192.168.1.10/24" color="cyan" icon={<Monitor />} />
        <ArrowRight className="hidden md:block text-slate-500" />
        <DeviceCard title="SW1" ip="VLAN1: 192.168.1.2/24" color="purple" icon={<Network />} />
        <ArrowRight className="hidden md:block text-slate-500" />
        <DeviceCard title="R1" ip="G0/0: 192.168.1.1/24" color="emerald" icon={<Router />} />
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 text-sm font-mono text-center">
        Network: 192.168.1.0/24 — Default gateway: 192.168.1.1
      </div>
    </div>
  );
}

function DeviceCard({ title, ip, color, icon }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-3xl p-5 text-center`}>
      <div className={`${c.solid} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${c.ring}`}>{React.cloneElement(icon, { size: 30 })}</div>
      <p className="text-white font-black text-lg">{title}</p>
      <p className={`${c.text} font-mono text-sm mt-2 break-all`}>{ip}</p>
    </div>
  );
}

function TerminalWindow({ title, lines }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950">
      <div className="bg-slate-900 border-b border-slate-800 p-3 flex items-center gap-3">
        <div className="flex gap-1"><span className="w-3 h-3 rounded-full bg-red-500/70" /><span className="w-3 h-3 rounded-full bg-yellow-500/70" /><span className="w-3 h-3 rounded-full bg-green-500/70" /></div>
        <p className="text-slate-300 text-sm font-bold">{title}</p>
      </div>
      <pre className="p-5 overflow-x-auto text-sm text-green-300 font-mono whitespace-pre-wrap">{lines.join("\n")}</pre>
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
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[420px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <StepFlow steps={steps} active={step} setActive={setStep} color={current.color} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepFlow({ steps, active, setActive, color }) {
  const c = colorClasses[color];
  return (
    <div className="space-y-3 max-h-[720px] overflow-y-auto pr-1">
      {steps.map((s, index) => (
        <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
          <div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div>
          <div className="min-w-0">
            <p className="text-sm text-white font-bold">{s.title}</p>
            <p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap font-mono break-all">{s.code}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    purple: "bg-purple-500/20 text-purple-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    red: "bg-red-500/20 text-red-300",
  };
  return (
    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
      <span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>
      {title}
    </h3>
  );
}

function ConceptCard({ title, icon, color, text, code }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
      <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p>
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">{code}</div>
    </div>
  );
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}>
      <div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div>
      <p className={`${c.text} font-black text-sm`}>{title}</p>
      <p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p>
    </div>
  );
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}>
      <div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 22 })}</div>
      <div className="min-w-0">
        <p className="text-white font-black">{title}</p>
        <p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p>
      </div>
    </div>
  );
}
