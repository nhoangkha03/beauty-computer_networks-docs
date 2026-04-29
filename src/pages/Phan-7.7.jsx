import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  BellRing,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Cpu,
  Database,
  Eye,
  FileText,
  Gauge,
  Globe2,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  MemoryStick,
  Network,
  Printer,
  RefreshCw,
  Router,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Unlock,
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

const componentRows = [
  ["SNMP Manager", "Trung tâm giám sát", "Zabbix server", "cyan"],
  ["SNMP Agent", "Trả lời thông tin", "Agent trên switch/router", "emerald"],
  ["Managed Device", "Thiết bị được quản lý", "Router, switch, firewall", "orange"],
  ["MIB", "Danh mục thông tin", "Interface, CPU, memory", "purple"],
  ["OID", "Mã định danh từng chỉ số", "1.3.6.1.2.1.1.3.0", "blue"],
  ["Community String", "Mật khẩu đơn giản SNMPv1/v2c", "public, monitoring-read", "red"],
];

const operationRows = [
  ["GET", "Manager → Agent", "Hỏi một thông tin", "cyan"],
  ["GETNEXT", "Manager → Agent", "Hỏi thông tin tiếp theo trong cây OID", "blue"],
  ["GETBULK", "Manager → Agent", "Lấy nhiều thông tin một lúc", "purple"],
  ["SET", "Manager → Agent", "Thay đổi giá trị/cấu hình", "orange"],
  ["RESPONSE", "Agent → Manager", "Trả lời yêu cầu", "green"],
  ["TRAP", "Agent → Manager", "Cảnh báo chủ động, không cần hỏi trước", "red"],
  ["INFORM", "Agent → Manager", "Cảnh báo có xác nhận", "yellow"],
];

const versionRows = [
  ["SNMPv1", "Đời đầu, đơn giản", "Yếu", "red"],
  ["SNMPv2c", "Hiệu năng tốt hơn, hỗ trợ GETBULK", "Vẫn yếu vì dùng community string", "orange"],
  ["SNMPv3", "Có xác thực và mã hóa", "Tốt hơn nhiều", "emerald"],
];

const commandTabs = {
  install: {
    title: "Cài công cụ SNMP",
    color: "blue",
    icon: <Terminal />,
    commands: [["Ubuntu/Debian", "sudo apt install snmp"]],
  },
  get: {
    title: "SNMP GET",
    color: "cyan",
    icon: <Search />,
    commands: [
      ["Hỏi uptime bằng SNMPv2c", "snmpget -v2c -c monitoring-read 192.168.1.2 1.3.6.1.2.1.1.3.0"],
      ["Ý nghĩa", "snmpget            = lấy một giá trị OID\n-v2c               = dùng SNMP version 2c\n-c monitoring-read = community string\n192.168.1.2        = IP thiết bị\n1.3.6.1.2.1.1.3.0  = OID cần hỏi"],
    ],
  },
  walk: {
    title: "SNMP WALK",
    color: "purple",
    icon: <Database />,
    commands: [
      ["Lấy nhánh system", "snmpwalk -v2c -c monitoring-read 192.168.1.2 1.3.6.1.2.1.1"],
      ["Lấy thông tin interface", "snmpwalk -v2c -c monitoring-read 192.168.1.2 1.3.6.1.2.1.2.2.1"],
    ],
  },
  v3: {
    title: "SNMPv3 có xác thực và mã hóa",
    color: "emerald",
    icon: <Lock />,
    commands: [
      ["SNMPv3 authPriv", "snmpwalk -v3 \\\n  -l authPriv \\\n  -u monitorUser \\\n  -a SHA \\\n  -A 'AuthPassword123' \\\n  -x AES \\\n  -X 'PrivPassword123' \\\n  192.168.1.2 \\\n  1.3.6.1.2.1.1"],
      ["Ý nghĩa tham số", "-v3         = dùng SNMPv3\n-l authPriv = có xác thực và mã hóa\n-u          = username\n-a SHA      = thuật toán xác thực\n-A          = mật khẩu xác thực\n-x AES      = thuật toán mã hóa\n-X          = mật khẩu mã hóa"],
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
              <BarChart3 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.7</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhatIsSnmp />
        <WhyNeedSnmp />
        <ManagedDeviceSection />
        <ManagerAgentSection />
        <MibOidSection />
        <CommunityStringSection />
        <RealWorldExamples />
        <ArchitectureSection />
        <PortSection />
        <OperationsSection />
        <ComponentsTable />
        <PollingProcess />
        <TrapSection />
        <GetSetTrapSection />
        <VersionSection />
        <CommandPractice />
        <SecuritySection />
        <Part7Recap />
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
            <Layers size={16} /> Application Layer — Network Management
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            SNMP
            <span className="block text-cyan-400">Quản lý và giám sát mạng</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            SNMP giúp hệ thống giám sát tự động thu thập trạng thái, traffic, CPU, memory và cảnh báo từ router, switch, firewall, server, printer và nhiều thiết bị khác.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">SNMP</span> = Simple Network Management Protocol.</p>
            <p><span className="text-emerald-300">UDP 161</span> = Manager hỏi Agent.</p>
            <p><span className="text-red-300">UDP 162</span> = Agent gửi Trap về Manager.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroSnmpVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu SNMP là gì và dùng để làm gì trong quản trị mạng.",
    "Nắm Manager, Agent, Managed Device, MIB, OID.",
    "Biết cách SNMP giám sát router, switch, server, firewall, printer.",
    "Hiểu GET, SET, TRAP và các thao tác SNMP chính.",
    "Phân biệt SNMPv1, SNMPv2c và SNMPv3.",
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

function WhatIsSnmp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="SNMP là gì?" icon={<BarChart3 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-cyan-300">SNMP</strong> là viết tắt của <strong className="text-white">Simple Network Management Protocol</strong>, nghĩa là giao thức quản lý mạng đơn giản.</p>
            <p>SNMP dùng để giám sát và quản lý thiết bị mạng từ xa mà không cần SSH vào từng thiết bị để kiểm tra thủ công.</p>
            <ConceptCard title="SNMP giúp hỏi thiết bị tự động" icon={<Search />} color="blue" text="Hệ thống giám sát có thể hỏi router còn sống không, CPU switch bao nhiêu %, port nào up/down, traffic đang dùng bao nhiêu, printer còn mực không." code={`Router còn sống không?
CPU switch bao nhiêu?
Port Gi0/1 up hay down?
Firewall có bao nhiêu session?`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MonitoringQuestionsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNeedSnmp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Vì sao cần SNMP?" icon={<CircleHelp />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mạng lớn không thể kiểm tra thủ công" icon={<Network />} color="purple" text="Trong doanh nghiệp có thể có hàng chục switch/router/firewall, hàng trăm AP, server, printer, camera hoặc IP phone. SNMP giúp theo dõi tập trung." code={`50 switch
20 router
10 firewall
200 access point
100 server
500 printer/camera/IP phone`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ["Trạng thái thiết bị", "Có", "green", <CheckCircle2 />],
              ["Băng thông cổng", "Có", "cyan", <Activity />],
              ["Cảnh báo lỗi", "Có", "red", <BellRing />],
              ["Số liệu định kỳ", "Có", "blue", <Database />],
              ["Biểu đồ traffic", "Có", "purple", <BarChart3 />],
              ["Quản lý tập trung", "Có", "orange", <Server />],
            ].map(([a, b, color, icon]) => <MiniFlowNode key={a} title={a} desc={b} color={color} icon={icon} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagedDeviceSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Managed Device là gì?" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Thiết bị được SNMP theo dõi" icon={<Router />} color="orange" text="Managed Device là thiết bị được quản lý bằng SNMP. Thiết bị này phải bật hỗ trợ SNMP thì Manager mới đọc được thông tin." code={`Router
Switch
Firewall
Server
Access Point
Printer
UPS
Storage
Camera IP`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ManagedDeviceVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagerAgentSection() {
  const [active, setActive] = useState("manager");
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="SNMP Manager và SNMP Agent" icon={<Server />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={active === "manager" ? "SNMP Manager" : "SNMP Agent"} icon={active === "manager" ? <Server /> : <Cpu />} color={active === "manager" ? "cyan" : "emerald"} text={active === "manager" ? "Manager là máy chủ hoặc phần mềm trung tâm chuyên đi hỏi, lưu dữ liệu, hiển thị dashboard, vẽ biểu đồ và gửi cảnh báo." : "Agent là phần mềm/chức năng chạy trên thiết bị được quản lý, nhận yêu cầu, đọc thông tin nội bộ và trả lời Manager."} code={active === "manager" ? "Zabbix\nPRTG\nLibreNMS\nNagios\nSolarWinds\nCacti\nObservium" : "Manager <---- hỏi/trả lời ----> Agent\nAgent biết port up/down, traffic, CPU/memory"} />
            <div className="flex gap-2">
              <ChoiceButton active={active === "manager"} onClick={() => setActive("manager")} color="cyan">Manager</ChoiceButton>
              <ChoiceButton active={active === "agent"} onClick={() => setActive("agent")} color="emerald">Agent</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ManagerAgentVisual active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MibOidSection() {
  const [active, setActive] = useState("oid");
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="MIB và OID là gì?" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={active === "mib" ? "MIB — Management Information Base" : "OID — Object Identifier"} icon={active === "mib" ? <Database /> : <FileText />} color={active === "mib" ? "purple" : "blue"} text={active === "mib" ? "MIB là cơ sở dữ liệu mô tả/danh mục các thông tin mà thiết bị có thể cung cấp qua SNMP." : "OID là mã định danh cụ thể của từng thông tin trong MIB, giống địa chỉ của chỉ số cần hỏi."} code={active === "mib" ? "MIB = danh mục các chỉ số có thể giám sát\nTên thiết bị, uptime, interface, traffic, CPU, memory" : "1.3.6.1.2.1.1.3.0\n→ có thể đại diện cho uptime thiết bị\nMIB = danh bạ\nOID = số điện thoại của từng thông tin"} />
            <div className="flex gap-2">
              <ChoiceButton active={active === "mib"} onClick={() => setActive("mib")} color="purple">MIB</ChoiceButton>
              <ChoiceButton active={active === "oid"} onClick={() => setActive("oid")} color="blue">OID</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MibOidVisual active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityStringSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="red" title="Community String là gì?" icon={<KeyRound />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mật khẩu đơn giản của SNMPv1/v2c" icon={<Unlock />} color="red" text="Trong SNMPv1 và SNMPv2c, Manager muốn hỏi Agent thì phải gửi đúng community string. Nhưng community string thường truyền gần như dạng rõ nên bảo mật yếu." code={`public
private
monitoring-read`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="grid md:grid-cols-2 gap-3">
            <MiniFlowNode title="Read-only" desc="Chỉ được đọc thông tin" color="green" icon={<Eye />} />
            <MiniFlowNode title="Read-write" desc="Đọc và có thể thay đổi cấu hình" color="red" icon={<ShieldAlert />} />
          </div>
          <div className="mt-5 bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300">
            Không nên dùng community mặc định như public/private trong môi trường thật.
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
        <ConceptCard title="Bảo vệ đi kiểm tra từng phòng" icon={<Eye />} color="green" text="SNMP giống bảng điều khiển trung tâm của tòa nhà: không cần bảo vệ đi từng phòng, hệ thống vẫn biết phòng nào mất điện, thang máy nào lỗi, máy lạnh nào quá tải." code={`Tòa nhà → Hệ thống mạng
Bảng điều khiển → SNMP Manager
Cảm biến → SNMP Agent
Chỉ số → OID/MIB`} />
        <ConceptCard title="Bác sĩ theo dõi bệnh nhân" icon={<Activity />} color="cyan" text="Bác sĩ không thể hỏi từng bệnh nhân mỗi phút. Máy monitor tự đo và gửi số liệu về trung tâm. SNMP cũng giúp thiết bị tự cung cấp chỉ số và cảnh báo." code={`Router CPU: 80%
Switch Gi0/1: down
Firewall sessions: 12000
AP clients: 35`} />
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Kiến trúc SNMP cơ bản" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <ArchitectureVisual />
      </div>
    </section>
  );
}

function PortSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="purple" title="SNMP dùng port nào?" icon={<Network />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="UDP 161" icon={<Search />} color="cyan" text="Manager dùng UDP 161 để hỏi, đọc hoặc thay đổi thông tin trên Agent." code={`Manager → Agent
SNMP GET / SET
UDP 161`} />
        <ConceptCard title="UDP 162" icon={<BellRing />} color="red" text="Agent dùng UDP 162 để gửi Trap/cảnh báo chủ động về Manager." code={`Agent → Manager
SNMP Trap
UDP 162`} />
      </div>
    </section>
  );
}

function OperationsSection() {
  const [active, setActive] = useState("GET");
  const row = operationRows.find(([name]) => name === active) || operationRows[0];
  const [, from, meaning, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="Các thao tác SNMP chính" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {operationRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={active === "TRAP" ? <BellRing /> : active === "SET" ? <Send /> : <Search />} color={color} text={`${from}. Ý nghĩa: ${meaning}.`} code={active === "GET" ? `Manager → Agent: GET OID 1.3.6.1.2.1.1.3.0
Agent → Manager: RESPONSE = uptime` : active === "SET" ? `Manager gửi: đổi tên thiết bị thành Switch-Core-01
Lưu ý: SET có thể nguy hiểm nếu quyền read-write bị lộ` : active === "TRAP" ? `Agent tự báo: Port Gi0/1 vừa bị down
Manager gửi cảnh báo qua Email/Telegram/Slack/SMS` : `${active}: ${meaning}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thao tác</th><th className="p-4">Ai gửi?</th><th className="p-4">Ý nghĩa</th></tr></thead>
                <tbody>
                  {operationRows.map(([name, who, text, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === operationRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-white font-bold">{who}</td><td className="p-4 text-slate-300">{text}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentsTable() {
  const [active, setActive] = useState("OID");
  const row = componentRows.find(([name]) => name === active) || componentRows[4];
  const [, role, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="Bảng thành phần SNMP" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {componentRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<Database />} color={color} text={role} code={example} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thành phần</th><th className="p-4">Vai trò</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {componentRows.map(([name, r, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === componentRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{r}</td><td className="p-4 text-green-300 font-mono">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PollingProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Manager gửi GET", text: "SNMP Manager chủ động hỏi Agent theo chu kỳ, ví dụ mỗi 60 giây.", code: "Manager → Agent: GET OID\nUDP 161", color: "cyan", icon: <Search /> },
    { title: "Agent kiểm tra quyền", text: "Agent kiểm tra community string hoặc user SNMPv3.", code: "community/user valid?", color: "purple", icon: <KeyRound /> },
    { title: "Agent đọc giá trị OID", text: "Agent lấy giá trị nội bộ tương ứng OID được hỏi.", code: "OID interface traffic / CPU / memory", color: "blue", icon: <Database /> },
    { title: "Agent gửi RESPONSE", text: "Agent trả giá trị về Manager.", code: "Agent → Manager: RESPONSE", color: "green", icon: <Send /> },
    { title: "Manager lưu database", text: "Manager lưu số liệu để phân tích theo thời gian.", code: "Store time-series data", color: "orange", icon: <Database /> },
    { title: "Vẽ graph hoặc cảnh báo", text: "Manager vẽ biểu đồ traffic hoặc so sánh ngưỡng cảnh báo.", code: "Traffic Mbps = difference between counters", color: "emerald", icon: <BarChart3 /> },
  ];
  return <StepSection number="13" color="cyan" title="SNMP Polling là gì?" icon={<RefreshCw />} steps={steps} step={step} setStep={setStep} />;
}

function TrapSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="red" title="SNMP Trap là gì?" icon={<BellRing />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Thiết bị chủ động báo sự cố" icon={<BellRing />} color="red" text="Trap khác polling: Manager không cần hỏi trước, thiết bị tự gửi cảnh báo khi có sự kiện." code={`Polling: Manager hỏi thiết bị
Trap: Thiết bị tự báo khi có sự kiện

Switch ---- SNMP Trap UDP 162 ----> Zabbix`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <TrapEventsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function GetSetTrapSection() {
  const [mode, setMode] = useState("get");
  const data = {
    get: ["GET — đọc thông tin", "Manager hỏi uptime, CPU, memory, traffic hoặc trạng thái port.", "Manager → Agent: GET OID 1.3.6.1.2.1.1.3.0\nAgent → Manager: RESPONSE = uptime value", "cyan", <Search />],
    set: ["SET — thay đổi thông tin", "Manager yêu cầu Agent đổi giá trị/cấu hình nếu được phép. SET có thể nguy hiểm nếu quyền read-write bị lộ.", "Đổi tên thiết bị thành Switch-Core-01\nKhuyến nghị: nhiều hệ thống chỉ bật read-only", "orange", <Send />],
    trap: ["TRAP — cảnh báo chủ động", "Agent tự gửi cảnh báo khi có sự kiện như link down, fan lỗi, reboot hoặc CPU vượt ngưỡng.", "Agent → Manager: Port Gi0/1 down\nManager → Email/Telegram/Slack/SMS", "red", <BellRing />],
  }[mode];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="orange" title="GET, SET, TRAP hoạt động thế nào?" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={data[0]} icon={data[4]} color={data[3]} text={data[1]} code={data[2]} />
            <div className="grid grid-cols-3 gap-2">
              <ChoiceButton active={mode === "get"} onClick={() => setMode("get")} color="cyan">GET</ChoiceButton>
              <ChoiceButton active={mode === "set"} onClick={() => setMode("set")} color="orange">SET</ChoiceButton>
              <ChoiceButton active={mode === "trap"} onClick={() => setMode("trap")} color="red">TRAP</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <OperationVisual mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function VersionSection() {
  const [active, setActive] = useState("SNMPv3");
  const row = versionRows.find(([name]) => name === active) || versionRows[2];
  const [, desc, security, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="emerald" title="SNMPv1, SNMPv2c, SNMPv3" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {versionRows.map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={active === "SNMPv3" ? <Lock /> : <Unlock />} color={color} text={`${desc}. Bảo mật: ${security}.`} code={active === "SNMPv3" ? `Username
Authentication
Encryption
Access control

SNMPv3 an toàn hơn v1 /v2c vì có xác thực và mã hóa.` : active === "SNMPv2c" ? `Phổ biến vì dễ cấu hình và hiệu năng tốt hơn v1.
Nhược điểm: vẫn dùng community string.` : "Đơn giản, cũ, ít dùng trong hệ thống mới."} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm min-w-[680px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Phiên bản</th><th className="p-4">Đặc điểm</th><th className="p-4">Bảo mật</th></tr></thead>
              <tbody>
                {versionRows.map(([name, d, s, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === versionRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{d}</td><td className="p-4 text-slate-300">{s}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandPractice() {
  const [tab, setTab] = useState("get");
  const data = commandTabs[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="green" title="Ví dụ lệnh SNMP thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <ChoiceButton active={tab === "install"} onClick={() => setTab("install")} color="blue">Install</ChoiceButton>
          <ChoiceButton active={tab === "get"} onClick={() => setTab("get")} color="cyan">GET</ChoiceButton>
          <ChoiceButton active={tab === "walk"} onClick={() => setTab("walk")} color="purple">WALK</ChoiceButton>
          <ChoiceButton active={tab === "v3"} onClick={() => setTab("v3")} color="emerald">v3</ChoiceButton>
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

function SecuritySection() {
  const items = [
    ["Ưu tiên SNMPv3", "Có xác thực và mã hóa", "emerald"],
    ["Không dùng public/private", "Giá trị mặc định dễ đoán", "red"],
    ["Chỉ bật read-only", "Nếu chỉ cần giám sát", "green"],
    ["Giới hạn IP Manager", "Chỉ server giám sát được hỏi SNMP", "cyan"],
    ["Chặn SNMP từ Internet", "Không để UDP 161/162 lộ công khai", "orange"],
    ["Dùng firewall/ACL", "Kiểm soát nguồn truy cập", "blue"],
    ["Theo dõi log và trap", "Phát hiện bất thường", "purple"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="emerald" title="Cấu hình SNMP an toàn hơn" icon={<ShieldCheck />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(([title, desc, color]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}><ShieldCheck size={24} /></div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">Ý tưởng ACL:
        Chỉ cho phép Zabbix Server 192.168.1.10 hỏi SNMP đến switch/router.
        Chặn tất cả nguồn khác.</div>
    </section>
  );
}

function Part7Recap() {
  const rows = [
    ["7.1", "DNS", "Phân giải tên miền", "cyan"],
    ["7.2", "HTTP & HTTPS", "Giao tiếp web", "emerald"],
    ["7.3", "FTP & SFTP", "Truyền file", "orange"],
    ["7.4", "SMTP, POP3, IMAP", "Email", "purple"],
    ["7.5", "DHCP", "Cấp IP động", "blue"],
    ["7.6", "SSH & Telnet", "Truy cập thiết bị từ xa", "green"],
    ["7.7", "SNMP", "Giám sát và quản lý mạng", "red"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="cyan" title="Tổng kết Phần 7: Application Layer" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Bài</th><th className="p-4">Giao thức</th><th className="p-4">Nội dung chính</th></tr></thead>
          <tbody>
            {rows.map(([num, name, desc, color], i) => <tr key={num} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black ${colorClasses[color].text}`}>{num}</td><td className="p-4 text-white font-bold">{name}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">Application Layer: DNS, HTTP, FTP, SMTP, DHCP, SSH, SNMP
        Transport Layer:   TCP / UDP
        Network Layer:     IP</div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ SNMP chỉ để cảnh báo", desc: "SNMP vừa polling định kỳ, vừa có Trap cảnh báo chủ động.", fix: "Polling = hỏi định kỳ; Trap = thiết bị tự báo." },
    { title: "Dùng community public/private", desc: "Đây là community mặc định rất dễ đoán, đặc biệt nguy hiểm nếu có read-write.", fix: "Đổi community, giới hạn IP, ưu tiên SNMPv3." },
    { title: "Mở UDP 161/162 ra Internet", desc: "SNMP không nên lộ công khai. Kẻ xấu có thể dò thông tin hoặc khai thác cấu hình yếu.", fix: "Chặn từ Internet, dùng firewall/ACL." },
    { title: "Nhầm MIB với OID", desc: "MIB là danh mục/cấu trúc mô tả. OID là địa chỉ cụ thể của từng chỉ số.", fix: "MIB = danh bạ, OID = số điện thoại." },
    { title: "Bật SET không cần thiết", desc: "SET có thể thay đổi cấu hình nếu quyền bị lộ hoặc dùng sai.", fix: "Giám sát thường chỉ cần read-only." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="20" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">21</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>SNMP = Simple Network Management Protocol.</p>
              <p>SNMP dùng để giám sát và quản lý thiết bị mạng từ xa.</p>
              <p>SNMP Manager là trung tâm giám sát.</p>
              <p>SNMP Agent chạy trên thiết bị được quản lý.</p>
              <p>Managed Device là router, switch, firewall, server, printer...</p>
              <p>MIB là danh mục thông tin có thể hỏi.</p>
              <p>OID là mã định danh cụ thể của từng chỉ số.</p>
              <p>Community string là mật khẩu đơn giản của SNMPv1/v2c.</p>
              <p>UDP 161 dùng cho Manager hỏi Agent.</p>
              <p>UDP 162 dùng cho Trap từ Agent về Manager.</p>
              <p>Polling = Manager hỏi định kỳ.</p>
              <p>Trap = Agent tự gửi cảnh báo.</p>
              <p>SNMPv3 an toàn hơn v1/v2c vì có xác thực và mã hóa.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "SNMP dùng để làm gì trong quản trị mạng?", options: ["Giám sát và quản lý thiết bị mạng từ xa", "Cấp IP tự động", "Truy cập shell từ xa", "Gửi email"], correct: 0, explanation: "SNMP giúp hệ thống quản trị mạng theo dõi router, switch, firewall, server, printer... một cách tự động." },
  { question: "SNMP Manager là gì?", options: ["Trung tâm giám sát đi hỏi và thu thập dữ liệu", "Thiết bị được cấp IP", "Một loại DNS server", "Một cổng switch"], correct: 0, explanation: "SNMP Manager là phần mềm/server như Zabbix, PRTG, LibreNMS, Nagios dùng để thu thập dữ liệu, vẽ biểu đồ và cảnh báo." },
  { question: "MIB và OID khác nhau thế nào?", options: ["MIB là danh mục thông tin; OID là mã định danh cụ thể của từng chỉ số", "MIB là port; OID là password", "MIB là firewall; OID là router", "MIB và OID là một"], correct: 0, explanation: "MIB giống cuốn danh bạ; OID giống số điện thoại của từng thông tin trong danh bạ đó." },
  { question: "SNMP dùng UDP port nào cho GET/SET và Trap?", options: ["GET/SET UDP 161, Trap UDP 162", "GET/SET UDP 67, Trap UDP 68", "GET/SET TCP 22, Trap TCP 23", "GET/SET TCP 80, Trap TCP 443"], correct: 0, explanation: "Manager hỏi Agent bằng UDP 161. Agent gửi Trap về Manager bằng UDP 162." },
  { question: "Polling và Trap khác nhau thế nào?", options: ["Polling là Manager hỏi định kỳ; Trap là thiết bị tự báo sự kiện", "Polling là mã hóa; Trap là giải mã", "Polling chỉ dùng TCP; Trap chỉ dùng HTTP", "Không khác nhau"], correct: 0, explanation: "Polling chủ động từ Manager. Trap chủ động từ Agent/thiết bị khi có sự kiện." },
  { question: "Vì sao nên ưu tiên SNMPv3 trong doanh nghiệp?", options: ["Vì có xác thực và mã hóa tốt hơn SNMPv1/v2c", "Vì không cần bảo mật", "Vì dùng community public", "Vì không cần firewall"], correct: 0, explanation: "SNMPv3 hỗ trợ username, authentication, encryption và access control, an toàn hơn community string của v1/v2c." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài SNMP!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bạn đã học xong Phần 7. Bài tiếp theo chuyển sang mạng không dây: chuẩn WiFi 802.11.</p>
      <Link to="/phan-8-1" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 8.1 — Chuẩn WiFi 802.11 <ChevronRight size={20} />
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

function HeroSnmpVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-2 gap-3"><MiniCard title="GET/SET" value="UDP 161" color="cyan" icon={<Search />} /><MiniCard title="TRAP" value="UDP 162" color="red" icon={<BellRing />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Manager ---- GET OID ----&gt; Agent</p><p className="text-green-300">Manager &lt;--- RESPONSE ---- Agent</p><p className="text-red-300">Manager &lt;--- TRAP -------- Agent</p><p className="text-purple-300">MIB = catalog, OID = metric address</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="CPU" value="80%" color="orange" icon={<Cpu />} /><MiniCard title="Port" value="down" color="red" icon={<Network />} /><MiniCard title="Traffic" value="Mbps" color="green" icon={<Activity />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function MonitoringQuestionsVisual() {
  const items = [["Alive?", "Router còn sống không", "cyan", <Router />], ["CPU", "Switch đang bao nhiêu %", "orange", <Cpu />], ["Port", "Up/down?", "red", <Network />], ["Traffic", "Băng thông đang dùng", "green", <Activity />], ["Printer", "Còn mực không", "purple", <Printer />], ["Firewall", "Bao nhiêu kết nối", "blue", <ShieldCheck />]];
  return <div className="grid md:grid-cols-2 gap-3">{items.map(([title, desc, color, icon]) => <MiniFlowNode key={title} title={title} desc={desc} color={color} icon={icon} />)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function ManagedDeviceVisual() {
  const devices = [["Router", "orange", <Router />], ["Switch", "cyan", <Network />], ["Firewall", "red", <ShieldCheck />], ["Server", "blue", <Server />], ["Printer", "purple", <Printer />], ["Access Point", "green", <Wifi />]];
  return <div className="grid md:grid-cols-3 gap-3">{devices.map(([name, color, icon]) => <MiniCard key={name} title={name} value="Managed Device" color={color} icon={icon} />)}</div>;
}

function ManagerAgentVisual({ active }) {
  return <div className="space-y-4"><MiniFlowNode title="SNMP Manager" desc="Zabbix/PRTG/Nagios" color={active === "manager" ? "cyan" : "slate"} icon={<Server />} /><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2"><p className="text-cyan-300">Manager ---- GET/SET UDP 161 ----&gt; Agent</p><p className="text-green-300">Manager &lt;--- RESPONSE ------------ Agent</p><p className="text-red-300">Manager &lt;--- TRAP UDP 162 -------- Agent</p></div><MiniFlowNode title="SNMP Agent" desc="trên router/switch/server" color={active === "agent" ? "emerald" : "slate"} icon={<Cpu />} /></div>;
}

function MibOidVisual({ active }) {
  return <div className="space-y-4"><MiniFlowNode title="MIB" desc="Danh mục chỉ số" color={active === "mib" ? "purple" : "slate"} icon={<Database />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Uptime" value="1.3.6.1.2.1.1.3.0" color={active === "oid" ? "blue" : "slate"} icon={<Gauge />} /><MiniCard title="Interface" value="traffic/status" color="cyan" icon={<Activity />} /><MiniCard title="CPU" value="usage" color="orange" icon={<Cpu />} /><MiniCard title="Memory" value="usage" color="green" icon={<MemoryStick />} /></div></div>;
}

function ArchitectureVisual() {
  return <div className="space-y-4"><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-5 text-center"><Server className="mx-auto text-cyan-300 mb-2" size={40} /><p className="text-white font-black">SNMP Manager</p><p className="text-cyan-300 text-sm font-mono">Zabbix / PRTG / Nagios</p></div><div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm space-y-2"><p className="text-cyan-300">SNMP GET / SET → UDP 161</p><p className="text-red-300">SNMP Trap ← UDP 162</p></div><div className="bg-orange-500/10 border border-orange-400/40 rounded-3xl p-5 text-center"><Router className="mx-auto text-orange-300 mb-2" size={40} /><p className="text-white font-black">Managed Device</p><p className="text-orange-300 text-sm font-mono">Router / Switch / SNMP Agent</p></div></div>;
}

function TrapEventsVisual() {
  const events = [["Interface down/up", "red", <Network />], ["CPU vượt ngưỡng", "orange", <Cpu />], ["Nguồn điện lỗi", "yellow", <Zap />], ["Fan lỗi", "purple", <RefreshCw />], ["Thiết bị reboot", "blue", <Server />], ["Sai đăng nhập", "red", <ShieldAlert />]];
  return <div className="grid md:grid-cols-2 gap-3">{events.map(([name, color, icon]) => <MiniFlowNode key={name} title={name} desc="Trap event" color={color} icon={icon} />)}</div>;
}

function OperationVisual({ mode }) {
  if (mode === "get") return <div className="space-y-4"><MiniFlowNode title="Manager" desc="GET uptime OID" color="cyan" icon={<Server />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Agent" desc="RESPONSE = uptime" color="green" icon={<Cpu />} /></div>;
  if (mode === "set") return <div className="space-y-4"><MiniFlowNode title="Manager" desc="SET sysName" color="orange" icon={<Send />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Agent" desc="thay đổi nếu được phép" color="red" icon={<ShieldAlert />} /></div>;
  return <div className="space-y-4"><MiniFlowNode title="Agent" desc="Port Gi0/1 down" color="red" icon={<BellRing />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Manager" desc="nhận trap và cảnh báo" color="cyan" icon={<Server />} /></div>;
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
