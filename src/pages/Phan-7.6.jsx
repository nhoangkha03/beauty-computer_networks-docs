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
  Download,
  Eye,
  FileKey,
  FileText,
  Globe2,
  HardDrive,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Network,
  RefreshCw,
  Router,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Unlock,
  Upload,
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

const sshTelnetRows = [
  ["Port mặc định", "TCP 22", "TCP 23"],
  ["Mã hóa", "Có", "Không"],
  ["Bảo mật password", "Có", "Không"],
  ["Dùng để quản trị từ xa", "Có", "Có"],
  ["Nên dùng qua Internet", "Có, nếu cấu hình đúng", "Không nên"],
  ["Tình trạng hiện nay", "Phổ biến", "Hầu như chỉ dùng lab/thiết bị cũ"],
];

const protocolRows = [
  ["Telnet", "23", "Remote shell", "Không", "red"],
  ["SSH", "22", "Remote shell an toàn", "Có", "emerald"],
  ["SFTP", "22", "Truyền file qua SSH", "Có", "cyan"],
  ["SCP", "22", "Copy file qua SSH", "Có", "blue"],
];

const secureConfigRows = [
  ["Dùng SSH key", "An toàn hơn password nếu quản lý đúng", "emerald"],
  ["Tắt đăng nhập root trực tiếp", "Giảm rủi ro bị chiếm root", "red"],
  ["Giới hạn IP bằng firewall", "Chỉ cho IP tin cậy truy cập", "cyan"],
  ["Cập nhật hệ thống", "Vá lỗi bảo mật", "blue"],
  ["Dùng fail2ban", "Chặn brute-force", "purple"],
  ["Không dùng Telnet qua mạng thật", "Tránh lộ thông tin đăng nhập", "orange"],
];

const commandTabs = {
  ssh: {
    title: "Lệnh SSH cơ bản",
    color: "emerald",
    icon: <Terminal />,
    commands: [
      ["Đăng nhập SSH", "ssh user@server_ip"],
      ["Ví dụ", "ssh admin@192.168.1.10"],
      ["SSH với port khác", "ssh -p 2222 admin@203.0.113.10"],
      ["Chạy một lệnh rồi thoát", "ssh admin@203.0.113.10 \"df -h\""],
    ],
  },
  keys: {
    title: "SSH key",
    color: "purple",
    icon: <KeyRound />,
    commands: [
      ["Tạo key", "ssh-keygen"],
      ["Copy public key lên server", "ssh-copy-id user@203.0.113.10"],
      ["Đăng nhập sau khi cấu hình key", "ssh user@203.0.113.10"],
      ["Ghi nhớ", "Private key phải giữ bí mật\nCó thể đặt passphrase\nKhông chia sẻ private key"],
    ],
  },
  scp: {
    title: "SCP / SFTP",
    color: "blue",
    icon: <Upload />,
    commands: [
      ["SCP upload", "scp localfile.txt user@server_ip:/home/user/"],
      ["SCP download", "scp user@server_ip:/var/log/syslog ."],
      ["SCP port khác", "scp -P 2222 localfile.txt user@server_ip:/tmp/"],
      ["Mở SFTP", "sftp user@server_ip"],
      ["Trong SFTP", "ls\npwd\ncd /var/www\nput index.html\nget backup.zip\nexit"],
    ],
  },
  check: {
    title: "Kiểm tra port và service",
    color: "cyan",
    icon: <Search />,
    commands: [
      ["Kiểm tra SSH port 22", "nc -vz 203.0.113.10 22"],
      ["Windows PowerShell", "Test-NetConnection 203.0.113.10 -Port 22"],
      ["Kiểm tra Telnet port 23", "nc -vz 192.168.1.1 23"],
      ["Dùng telnet client", "telnet 192.168.1.1 23"],
      ["Xem SSH server", "sudo systemctl status ssh\nsudo systemctl status sshd"],
      ["Start/enable SSH", "sudo systemctl start ssh\nsudo systemctl enable ssh"],
    ],
  },
  config: {
    title: "Cấu hình SSH an toàn hơn",
    color: "green",
    icon: <ShieldCheck />,
    commands: [
      ["File cấu hình thường gặp", "/etc/ssh/sshd_config"],
      ["Không cho root login", "PermitRootLogin no"],
      ["Tắt password nếu dùng key", "PasswordAuthentication no"],
      ["Port SSH", "Port 22"],
      ["Reload SSH", "sudo systemctl reload ssh\nsudo systemctl reload sshd"],
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
              <Terminal className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.6</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyRemoteAccess />
        <TelnetSection />
        <SshSection />
        <SshVsTelnet />
        <RemoteShellSection />
        <SshAuthSection />
        <RealWorldExamples />
        <ConnectionDiagrams />
        <ProtocolTable />
        <LayerModel />
        <TelnetProcess />
        <SshProcess />
        <HostKeySection />
        <SshKeySection />
        <CommandPractice />
        <SecureConfigSection />
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
            <Layers size={16} /> Application Layer — Remote Access
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            SSH & Telnet
            <span className="block text-cyan-400">Truy cập dòng lệnh từ xa</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            SSH và Telnet đều cho phép quản trị thiết bị từ xa qua dòng lệnh, nhưng SSH mã hóa toàn bộ phiên làm việc còn Telnet truyền dữ liệu dạng rõ.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-emerald-300">SSH</span> = Secure Shell, TCP port 22, có mã hóa.</p>
            <p><span className="text-red-300">Telnet</span> = remote shell cũ, TCP port 23, không mã hóa.</p>
            <p><span className="text-cyan-300">SFTP/SCP</span> cũng thường dùng SSH port 22.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroRemoteVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu SSH là gì và dùng để làm gì.",
    "Hiểu Telnet là gì và vì sao hiện nay ít nên dùng.",
    "Phân biệt SSH và Telnet theo góc nhìn bảo mật.",
    "Biết port mặc định của SSH/Telnet/SFTP/SCP.",
    "Biết dùng lệnh SSH để truy cập máy chủ hoặc thiết bị mạng từ xa.",
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

function WhyRemoteAccess() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần SSH hoặc Telnet?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Quản trị viên không phải lúc nào cũng ngồi trực tiếp trước server, router hoặc switch. Thiết bị có thể nằm ở data center, phòng server, cloud hoặc chi nhánh khác.</p>
            <ConceptCard title="Remote login" icon={<Terminal />} color="blue" text="SSH và Telnet cho phép đăng nhập từ xa vào dòng lệnh của thiết bị để kiểm tra, cấu hình và xử lý sự cố." code="Admin Laptop ---- SSH/Telnet ----> Server hoặc Router" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <RemoteAccessVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function TelnetSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="red" title="Telnet là gì?" icon={<Unlock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Remote shell không mã hóa" icon={<ShieldAlert />} color="red" text="Telnet là giao thức truy cập thiết bị từ xa qua dòng lệnh, thường dùng TCP port 23. Vấn đề lớn là Telnet không mã hóa dữ liệu." code="telnet 192.168.1.1
Username: admin
Password: 123456" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <PlainTextRiskVisual />
          <div className="mt-5 bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300">
            Telnet từng phổ biến trong quản trị router/switch/server, nhưng hiện nay không nên dùng trên mạng thật hoặc Internet.
          </div>
        </div>
      </div>
    </section>
  );
}

function SshSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="SSH là gì?" icon={<Lock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Secure Shell" icon={<ShieldCheck />} color="emerald" text="SSH cũng dùng để truy cập dòng lệnh từ xa, nhưng toàn bộ phiên làm việc được mã hóa. SSH thường dùng TCP port 22." code="ssh user@192.168.1.10
SSH = Telnet + mã hóa + xác thực an toàn hơn" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <SshProtectsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function SshVsTelnet() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="SSH và Telnet khác nhau lớn nhất ở đâu?" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-emerald-300">SSH</th><th className="p-4 text-red-300">Telnet</th></tr></thead>
            <tbody className="text-sm">
              {sshTelnetRows.map(([criteria, ssh, telnet], i) => <tr key={criteria} className={`${i === sshTelnetRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{ssh}</td><td className="p-4 text-slate-300">{telnet}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm">
        Khác biệt quan trọng nhất: SSH có mã hóa, Telnet không mã hóa.
      </div>
    </section>
  );
}

function RemoteShellSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="purple" title="Remote Shell là gì?" icon={<Terminal />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Shell từ xa" icon={<Terminal />} color="purple" text="Shell là môi trường dòng lệnh. Remote shell nghĩa là bạn đang ngồi ở laptop cá nhân nhưng gõ lệnh chạy trên server khác qua mạng." code="ssh admin@203.0.113.10
admin@server:~$ uptime
admin@server:~$ df -h" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <RemoteShellVisual />
          <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
            Sau khi đăng nhập SSH, lệnh bạn gõ chạy trên server, không phải trên laptop của bạn.
          </div>
        </div>
      </div>
    </section>
  );
}

function SshAuthSection() {
  const [auth, setAuth] = useState("key");
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="SSH xác thực bằng gì?" icon={<KeyRound />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={auth === "password" ? "Password authentication" : "SSH key authentication"} icon={auth === "password" ? <KeyRound /> : <FileKey />} color={auth === "password" ? "orange" : "emerald"} text={auth === "password" ? "Người dùng nhập mật khẩu tài khoản server. Cách này đơn giản nhưng dễ bị brute-force nếu cấu hình yếu." : "SSH key dùng cặp khóa public/private. Server chỉ cần public key, private key không rời khỏi máy client."} code={auth === "password" ? "ssh user@server.example.com\nuser@server.example.com's password:" : "Private key: giữ bí mật trên client\nPublic key: đặt trên server\nssh-keygen\nssh-copy-id user@server"} />
            <div className="flex gap-2">
              <ChoiceButton active={auth === "password"} onClick={() => setAuth("password")} color="orange">Password</ChoiceButton>
              <ChoiceButton active={auth === "key"} onClick={() => setAuth("key")} color="emerald">SSH Key</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {auth === "password" ? <PasswordAuthVisual /> : <SshKeyAuthVisual />}
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
        <ConceptCard title="Điều khiển nhà từ xa" icon={<HomeIcon />} color="green" text="Bạn không cần về tận nhà để bật/tắt thiết bị thông minh. SSH cũng vậy: bạn không cần ngồi trước server mà vẫn điều khiển qua mạng." code="Laptop admin ---- SSH ----> Server" />
        <ConceptCard title="Mật khẩu trên giấy trong suốt" icon={<Eye />} color="red" text="Telnet giống viết username/password lên giấy trong suốt. SSH giống bỏ giấy vào hộp khóa: người ngoài thấy có dữ liệu truyền, nhưng không đọc được nội dung." code="Telnet: plain text
SSH: encrypted session" />
      </div>
    </section>
  );
}

function ConnectionDiagrams() {
  const [mode, setMode] = useState("ssh");
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Sơ đồ Telnet và SSH" icon={<RouteIcon />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "ssh" ? "SSH encrypted TCP 22" : "Telnet plain TCP 23"} icon={mode === "ssh" ? <Lock /> : <Unlock />} color={mode === "ssh" ? "emerald" : "red"} text={mode === "ssh" ? "Người nghe lén chỉ thấy dữ liệu đã mã hóa." : "Người nghe lén có thể đọc username, password và lệnh quản trị."} code={mode === "ssh" ? "Admin Laptop ==== SSH Encrypted TCP 22 ====> Router/Server" : "Admin Laptop ---- Telnet TCP 23 ----> Router/Server"} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "telnet"} onClick={() => setMode("telnet")} color="red">Telnet</ChoiceButton>
              <ChoiceButton active={mode === "ssh"} onClick={() => setMode("ssh")} color="emerald">SSH</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "ssh" ? <SshDiagram /> : <TelnetDiagram />}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolTable() {
  const [active, setActive] = useState("SSH");
  const row = protocolRows.find(([name]) => name === active) || protocolRows[1];
  const [, port, purpose, encrypted, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="SSH, Telnet, SFTP, SCP" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {protocolRows.map(([name, , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — port ${port}`} icon={active === "Telnet" ? <Unlock /> : <Lock />} color={color} text={`Mục đích: ${purpose}. Mã hóa: ${encrypted}.`} code={active === "SFTP" || active === "SCP" ? "SFTP/SCP chạy qua SSH nên thường cùng port 22." : active === "SSH" ? "ssh user@server_ip" : "telnet 192.168.1.1"} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm min-w-[680px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Port</th><th className="p-4">Mục đích</th><th className="p-4">Mã hóa</th></tr></thead>
              <tbody>
                {protocolRows.map(([name, p, purposeText, enc, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === protocolRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-white font-mono font-bold">{p}</td><td className="p-4 text-slate-300">{purposeText}</td><td className="p-4 text-slate-300">{enc}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerModel() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="SSH/Telnet nằm ở đâu trong mô hình mạng?" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Application Layer trên TCP" icon={<Layers />} color="purple" text="SSH và Telnet đều là giao thức tầng ứng dụng, thường chạy trên TCP vì phiên lệnh cần ổn định và đúng thứ tự." code="Application Layer: SSH / Telnet
Transport Layer:   TCP
Network Layer:     IP
Data Link Layer:   Ethernet / WiFi
Physical Layer:    Cáp / Sóng" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-3">
            <LayerBox title="Application Layer" text="SSH / Telnet" color="cyan" />
            <LayerBox title="Transport Layer" text="TCP" color="emerald" />
            <LayerBox title="Network Layer" text="IP" color="orange" />
            <LayerBox title="Data Link Layer" text="Ethernet / WiFi" color="purple" />
            <LayerBox title="Physical Layer" text="Cáp / Sóng" color="slate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TelnetProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client mở TCP đến port 23", text: "Telnet client kết nối đến server/router/switch qua TCP port 23.", code: "telnet 192.168.1.1 23", color: "red", icon: <Network /> },
    { title: "Server hiển thị đăng nhập", text: "Thiết bị yêu cầu username và password.", code: "Username:\nPassword:", color: "orange", icon: <Terminal /> },
    { title: "Client gửi username/password", text: "Thông tin đăng nhập có thể đi qua mạng dạng rõ.", code: "Username: admin\nPassword: 123456", color: "red", icon: <ShieldAlert /> },
    { title: "Server xác thực", text: "Server kiểm tra tài khoản.", code: "Login success / failed", color: "purple", icon: <CheckCircle2 /> },
    { title: "Client gõ lệnh", text: "Người dùng gõ lệnh cấu hình hoặc kiểm tra thiết bị.", code: "show running-config\nshow ip interface brief", color: "blue", icon: <Code2 /> },
    { title: "Server trả output", text: "Kết quả lệnh trả về cũng không được mã hóa.", code: "Command output plain text", color: "red", icon: <Eye /> },
    { title: "Đóng phiên Telnet", text: "Người dùng thoát phiên làm việc.", code: "exit", color: "slate", icon: <XCircle /> },
  ];
  return <StepSection number="12" color="red" title="Telnet hoạt động như thế nào?" icon={<Unlock />} steps={steps} step={step} setStep={setStep} />;
}

function SshProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client mở TCP đến port 22", text: "SSH client kết nối đến SSH server qua TCP port 22 hoặc port tùy chỉnh.", code: "ssh admin@203.0.113.10", color: "cyan", icon: <Network /> },
    { title: "Thương lượng phiên bản SSH", text: "Client và server thống nhất phiên bản/gói thuật toán hỗ trợ.", code: "SSH protocol negotiation", color: "blue", icon: <RefreshCw /> },
    { title: "Server gửi host key", text: "Client dùng host key để nhận diện server và phát hiện giả mạo.", code: "Server host key", color: "purple", icon: <FileKey /> },
    { title: "Thiết lập kênh mã hóa", text: "Hai bên thiết lập kênh bảo mật để bảo vệ dữ liệu.", code: "Encrypted channel established", color: "emerald", icon: <Lock /> },
    { title: "Client xác thực user", text: "Client xác thực bằng password hoặc SSH key.", code: "Password / SSH key", color: "orange", icon: <KeyRound /> },
    { title: "Server mở remote shell", text: "Nếu xác thực thành công, server mở shell từ xa cho người dùng.", code: "admin@server:~$", color: "green", icon: <Terminal /> },
    { title: "Lệnh và output đều mã hóa", text: "Người dùng gõ lệnh; lệnh và kết quả đều đi trong kênh mã hóa.", code: "uptime\ndf -h\ntail -f /var/log/nginx/access.log", color: "emerald", icon: <ShieldCheck /> },
    { title: "Đóng phiên", text: "Khi xong, người dùng gõ exit để đóng phiên SSH.", code: "exit", color: "slate", icon: <XCircle /> },
  ];
  return <StepSection number="13" color="emerald" title="SSH hoạt động như thế nào?" icon={<Lock />} steps={steps} step={step} setStep={setStep} />;
}

function HostKeySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="purple" title="Host Key trong SSH là gì?" icon={<FileKey />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Khóa định danh server SSH" icon={<FileKey />} color="purple" text="Host key giúp client kiểm tra mình có đang kết nối đúng server không, hay có ai giả mạo server ở giữa." code="The authenticity of host '203.0.113.10' can't be established.
Are you sure you want to continue connecting?" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode title="Lần đầu kết nối" desc="Client hỏi có tin host key không" color="cyan" icon={<Search />} />
            <MiniFlowNode title="Chấp nhận" desc="Lưu vào known_hosts" color="emerald" icon={<CheckCircle2 />} />
            <MiniFlowNode title="Lần sau thay đổi" desc="SSH cảnh báo nguy cơ giả mạo" color="red" icon={<ShieldAlert />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SshKeySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="emerald" title="SSH Key hoạt động đơn giản thế nào?" icon={<KeyRound />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Private key và Public key" icon={<KeyRound />} color="emerald" text="Private key giữ bí mật trên máy bạn. Public key đặt trên server. Khi đăng nhập, SSH chứng minh bạn có private key mà không gửi private key qua mạng." code="ssh-keygen
ssh-copy-id user@203.0.113.10
ssh user@203.0.113.10" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <SshKeyPairVisual />
            <div className="mt-5 bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-sm text-emerald-300">
              Private key phải được bảo vệ cẩn thận, có thể đặt passphrase và không chia sẻ cho người khác.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandPractice() {
  const [tab, setTab] = useState("ssh");
  const data = commandTabs[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="green" title="Một số lệnh SSH/Telnet thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <ChoiceButton active={tab === "ssh"} onClick={() => setTab("ssh")} color="emerald">SSH</ChoiceButton>
          <ChoiceButton active={tab === "keys"} onClick={() => setTab("keys")} color="purple">Keys</ChoiceButton>
          <ChoiceButton active={tab === "scp"} onClick={() => setTab("scp")} color="blue">SCP/SFTP</ChoiceButton>
          <ChoiceButton active={tab === "check"} onClick={() => setTab("check")} color="cyan">Check</ChoiceButton>
          <ChoiceButton active={tab === "config"} onClick={() => setTab("config")} color="green">Config</ChoiceButton>
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

function SecureConfigSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="emerald" title="Cấu hình SSH an toàn hơn" icon={<ShieldCheck />} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {secureConfigRows.map(([title, desc, color]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}><ShieldCheck size={24} /></div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">/etc/ssh/sshd_config

        PermitRootLogin no
        PasswordAuthentication no
        Port 22

        sudo systemctl reload ssh</div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Dùng Telnet để quản trị qua Internet", desc: "Telnet không mã hóa username, password và lệnh. Người nghe lén có thể đọc được.", fix: "Dùng SSH thay Telnet." },
    { title: "Nhầm host key với SSH key đăng nhập", desc: "Host key định danh server. SSH key đăng nhập định danh user/client.", fix: "Host key kiểm tra server; user key xác thực người dùng." },
    { title: "Chia sẻ private key", desc: "Private key là bí mật cá nhân. Ai có private key có thể đăng nhập nếu server tin key đó.", fix: "Không chia sẻ private key, đặt passphrase nếu cần." },
    { title: "Mở SSH cho toàn Internet không kiểm soát", desc: "SSH mạnh nhưng vẫn có thể bị brute-force hoặc khai thác nếu cấu hình yếu.", fix: "Giới hạn IP bằng firewall, dùng key, cập nhật hệ thống." },
    { title: "Tưởng SFTP là FTP có TLS", desc: "SFTP chạy trên SSH. FTP có TLS là FTPS.", fix: "SFTP/SCP thường đi cùng SSH port 22." },
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
              <p>SSH = Secure Shell.</p>
              <p>Telnet và SSH đều dùng để truy cập dòng lệnh từ xa.</p>
              <p>SSH mặc định dùng TCP port 22.</p>
              <p>Telnet mặc định dùng TCP port 23.</p>
              <p>SSH có mã hóa, Telnet không mã hóa.</p>
              <p>Telnet có thể lộ username/password/lệnh quản trị.</p>
              <p>Remote shell nghĩa là gõ lệnh trên máy khác qua mạng.</p>
              <p>SSH có thể xác thực bằng password hoặc SSH key.</p>
              <p>Host key giúp nhận diện server SSH.</p>
              <p>Private key phải giữ bí mật trên client.</p>
              <p>SFTP và SCP thường chạy qua SSH port 22.</p>
              <p>Không dùng Telnet qua mạng thật nếu có thể tránh.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "SSH và Telnet dùng để làm gì?", options: ["Truy cập dòng lệnh của thiết bị từ xa", "Phân giải tên miền", "Cấp IP tự động", "Gửi email"], correct: 0, explanation: "SSH và Telnet đều dùng để đăng nhập remote shell, quản trị server/router/switch từ xa." },
  { question: "Khác nhau chính giữa SSH và Telnet là gì?", options: ["SSH có mã hóa, Telnet không mã hóa", "Telnet dùng mã hóa mạnh hơn", "SSH chỉ dùng để gửi email", "Telnet chỉ dùng UDP"], correct: 0, explanation: "SSH mã hóa phiên làm việc; Telnet truyền username, password và lệnh dạng rõ." },
  { question: "Port mặc định của SSH và Telnet là gì?", options: ["SSH 22, Telnet 23", "SSH 23, Telnet 22", "SSH 80, Telnet 443", "SSH 53, Telnet 25"], correct: 0, explanation: "SSH mặc định TCP 22; Telnet mặc định TCP 23." },
  { question: "Vì sao SFTP/SCP thường cùng port với SSH?", options: ["Vì SFTP/SCP chạy qua SSH", "Vì chúng là DNS record", "Vì chúng dùng UDP 67", "Vì chúng không dùng TCP"], correct: 0, explanation: "SFTP và SCP truyền file thông qua SSH nên thường dùng cùng port 22." },
  { question: "Host key trong SSH dùng để làm gì?", options: ["Định danh server SSH và giúp phát hiện giả mạo", "Là mật khẩu của user", "Là file log", "Là port Telnet"], correct: 0, explanation: "Host key giúp client xác minh server mà mình đang kết nối có đúng là server đã biết trước đó không." },
  { question: "Private key trong SSH key nên xử lý thế nào?", options: ["Giữ bí mật, không chia sẻ, có thể đặt passphrase", "Gửi cho mọi server qua email", "Đặt công khai trên website", "Xóa public key và chỉ dùng private key trên server"], correct: 0, explanation: "Private key là bí mật. Server chỉ cần public key; private key phải ở client và được bảo vệ." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài SSH & Telnet!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang SNMP — giao thức giúp hệ thống giám sát lấy thông tin từ router, switch và server một cách tự động.</p>
      <Link to="/phan-7-7" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.7 — SNMP <ChevronRight size={20} />
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

function HeroRemoteVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-2 gap-3"><MiniCard title="SSH" value="TCP 22" color="emerald" icon={<Lock />} /><MiniCard title="Telnet" value="TCP 23" color="red" icon={<Unlock />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Admin Laptop ---- command ----&gt; Server</p><p className="text-green-300">Admin Laptop &lt;--- output ----- Server</p><p className="text-emerald-300">SSH: encrypted remote shell</p><p className="text-red-300">Telnet: plain text remote shell</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="ssh" value="login" color="cyan" icon={<Terminal />} /><MiniCard title="sftp" value="file" color="blue" icon={<Upload />} /><MiniCard title="scp" value="copy" color="purple" icon={<Download />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function RemoteAccessVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Admin Laptop" desc="nơi quản trị viên ngồi" color="cyan" icon={<Laptop />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="SSH/Telnet" desc="remote command line" color="purple" icon={<Terminal />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Server" value="data center/cloud" color="orange" icon={<Server />} /><MiniCard title="Router/Switch" value="network device" color="green" icon={<Router />} /></div></div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono`}>{desc}</p></div></div>;
}

function PlainTextRiskVisual() {
  return <div className="space-y-3"><MiniFlowNode title="Username" desc="admin" color="red" icon={<Eye />} /><MiniFlowNode title="Password" desc="123456" color="red" icon={<ShieldAlert />} /><MiniFlowNode title="Commands" desc="show config / sudo ..." color="orange" icon={<Terminal />} /></div>;
}

function SshProtectsVisual() {
  const items = [["Username/password", "Có mã hóa", "emerald", <KeyRound />], ["Lệnh terminal", "Có mã hóa", "cyan", <Terminal />], ["Kết quả trả về", "Có mã hóa", "blue", <FileText />], ["SFTP/SCP file", "Có mã hóa", "purple", <Upload />]];
  return <div className="grid md:grid-cols-2 gap-3">{items.map(([title, desc, color, icon]) => <MiniFlowNode key={title} title={title} desc={desc} color={color} icon={icon} />)}</div>;
}

function RemoteShellVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Laptop" color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><MiniNode label="Server" color="orange" icon={<Server />} /></div><div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">admin@server:~$ uptime
    admin@server:~$ df -h
    admin@server:~$ systemctl status nginx</div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function PasswordAuthVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Client" desc="ssh user@server" color="cyan" icon={<Laptop />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Server hỏi password" desc="user@server's password:" color="orange" icon={<KeyRound />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Login" desc="nếu mật khẩu đúng" color="green" icon={<CheckCircle2 />} /></div>;
}

function SshKeyAuthVisual() {
  return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><MiniFlowNode title="Private key" desc="ở client, giữ bí mật" color="red" icon={<FileKey />} /><MiniFlowNode title="Public key" desc="ở server" color="emerald" icon={<KeyRound />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">SSH chứng minh client có private key mà không gửi private key qua mạng.</div></div>;
}

function HomeIcon() { return <Router />; }
function RouteIcon() { return <Network />; }

function TelnetDiagram() {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mb-4"><MiniNode label="Admin Laptop" color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><MiniNode label="Router/Server" color="orange" icon={<Server />} /></div><p className="text-red-300">Admin ---- Telnet TCP 23 ----&gt; Server</p><p className="text-red-300">username/password dạng rõ</p><p className="text-red-300">lệnh quản trị dạng rõ</p><p className="text-slate-500">Attacker can read the session.</p></div>;
}

function SshDiagram() {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mb-4"><MiniNode label="Admin Laptop" color="cyan" icon={<Laptop />} /><ArrowRight className="text-slate-500" /><MiniNode label="Router/Server" color="emerald" icon={<Server />} /></div><p className="text-emerald-300">Admin ==== SSH Encrypted TCP 22 ====&gt; Server</p><p className="text-green-300">username/password protected</p><p className="text-green-300">commands encrypted</p><p className="text-green-300">output encrypted</p></div>;
}

function LayerBox({ title, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black`}>{title}</p><p className="text-slate-400 text-sm mt-1">{text}</p></div>;
}

function SshKeyPairVisual() {
  return <div className="space-y-4"><div className="grid md:grid-cols-2 gap-3"><MiniFlowNode title="Private key" desc="~/.ssh/id_* trên client" color="red" icon={<FileKey />} /><MiniFlowNode title="Public key" desc="authorized_keys trên server" color="green" icon={<KeyRound />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">ssh-keygen
    ssh-copy-id user@server
    ssh user@server</div></div>;
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
