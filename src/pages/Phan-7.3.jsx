import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Box,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Download,
  FileArchive,
  FileText,
  Folder,
  Globe2,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Network,
  Package,
  RefreshCw,
  Route,
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

const ftpCommands = [
  ["USER", "Gửi username", "USER kha", "cyan"],
  ["PASS", "Gửi password", "PASS 123456", "red"],
  ["LIST", "Liệt kê file/thư mục", "LIST", "green"],
  ["RETR", "Download file", "RETR report.pdf", "blue"],
  ["STOR", "Upload file", "STOR image.png", "orange"],
  ["DELE", "Xóa file", "DELE old.txt", "red"],
  ["PWD", "Xem thư mục hiện tại", "PWD", "purple"],
  ["CWD", "Chuyển thư mục", "CWD /public_html", "yellow"],
];

const protocolRows = [
  ["FTP", "FTP thường", "21, 20/port động", "Không", "red"],
  ["FTPS", "FTP + TLS/SSL", "21 hoặc 990", "Có", "yellow"],
  ["SFTP", "File transfer qua SSH", "22", "Có", "emerald"],
];

const ftpSftpRows = [
  ["Tên đầy đủ", "File Transfer Protocol", "SSH File Transfer Protocol"],
  ["Chạy trên", "FTP protocol riêng", "SSH"],
  ["Port thường dùng", "21, 20 hoặc port động", "22"],
  ["Mã hóa mặc định", "Không", "Có"],
  ["Số kết nối", "Thường 2 kết nối", "Thường 1 kết nối"],
  ["Dễ qua firewall/NAT", "Khó hơn", "Dễ hơn"],
  ["Nên dùng hiện nay?", "Chỉ khi môi trường tin cậy", "Nên dùng hơn"],
];

const guiTools = [
  ["FileZilla", "FTP, FTPS, SFTP", "orange"],
  ["WinSCP", "SFTP, SCP, FTP, FTPS", "blue"],
  ["Cyberduck", "FTP, SFTP, WebDAV, cloud storage", "purple"],
  ["VS Code Remote SSH", "Làm việc qua SSH/SFTP-like workflow", "emerald"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <FileArchive className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <FtpDefinition />
        <FtpPorts />
        <ControlConnection />
        <DataConnection />
        <FtpSecurityRisk />
        <SftpDefinition />
        <FtpVsSftp />
        <RealWorldExamples />
        <ConnectionDiagrams />
        <ProtocolComparison />
        <ActivePassiveSection />
        <FtpProcess />
        <ActiveModeProcess />
        <PassiveModeProcess />
        <SftpProcess />
        <CommandPractice />
        <GuiToolsSection />
        <WhenToUse />
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
            <Layers size={16} /> Application Layer — File Transfer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            FTP & SFTP
            <span className="block text-cyan-400">Truyền file qua mạng</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            FTP là giao thức truyền file truyền thống, thường dùng control channel và data channel riêng. SFTP truyền file an toàn qua SSH, thường dùng port 22.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">FTP</span> = File Transfer Protocol, port 21/20 hoặc port động.</p>
            <p><span className="text-emerald-300">SFTP</span> = SSH File Transfer Protocol, port 22.</p>
            <p><span className="text-red-300">FTP thường</span> không mã hóa; <span className="text-green-300">SFTP</span> mã hóa qua SSH.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroTransferVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu FTP là gì và dùng để làm gì.",
    "Hiểu SFTP là gì và vì sao an toàn hơn FTP.",
    "Nắm các port quan trọng: FTP 21/20, SFTP 22.",
    "Phân biệt FTP Active Mode và Passive Mode.",
    "Biết khi nào dùng FTP, SFTP hoặc phương án hiện đại hơn.",
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

function FtpDefinition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="orange" title="FTP là gì?" icon={<FileArchive />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-orange-300">FTP</strong> là viết tắt của <strong className="text-white">File Transfer Protocol</strong>, nghĩa là giao thức truyền tệp tin.</p>
            <p>FTP dùng để <strong className="text-cyan-300">upload</strong>, <strong className="text-emerald-300">download</strong> và quản lý file trên server từ xa.</p>
            <ConceptCard title="FTP chuyên dùng cho file" icon={<Upload />} color="orange" text="Bạn có thể dùng FTP để đưa file website lên hosting, tải file từ server, xóa file, đổi tên hoặc tạo thư mục." code="Client ---- upload file ----> FTP Server
Client <--- download file --- FTP Server" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <UploadDownloadVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function FtpPorts() {
  const [active, setActive] = useState("control");
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="blue" title="FTP dùng port nào?" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="FTP thường dùng 2 kênh" icon={<Network />} color="blue" text="Điểm đặc biệt của FTP là tách kênh điều khiển và kênh truyền dữ liệu. Control connection thường dùng TCP 21." code="1. Control connection: gửi lệnh
2. Data connection: truyền file/danh sách thư mục" />
            <div className="flex gap-2">
              <ChoiceButton active={active === "control"} onClick={() => setActive("control")} color="cyan">Control 21</ChoiceButton>
              <ChoiceButton active={active === "data"} onClick={() => setActive("data")} color="orange">Data 20/động</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <FtpTwoChannelVisual active={active} />
            <div className={`${active === "control" ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-orange-500/10 border-orange-400/40 text-orange-300"} border rounded-2xl p-4 text-sm`}>
              {active === "control" ? "Control connection dùng để gửi lệnh như USER, PASS, LIST, RETR, STOR qua TCP port 21." : "Data connection dùng để truyền file hoặc directory listing. Active Mode thường liên quan TCP 20; Passive Mode dùng port server báo cho client."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlConnection() {
  const [active, setActive] = useState("USER");
  const row = ftpCommands.find(([cmd]) => cmd === active) || ftpCommands[0];
  const [, meaning, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="Control Connection là gì?" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title="Kênh ra lệnh" icon={<Terminal />} color="cyan" text="Control connection là kết nối dùng để gửi lệnh FTP. Nó thường chạy qua TCP port 21." code="USER kha
PASS 123456
LIST
RETR report.pdf
STOR image.png" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {ftpCommands.map(([cmd, , , c]) => <ChoiceButton key={cmd} active={active === cmd} onClick={() => setActive(cmd)} color={c}>{cmd}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${meaning}`} icon={<Code2 />} color={color} text="Lệnh này đi qua control connection, không phải data connection." code={example} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Lệnh</th><th className="p-4">Ý nghĩa</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {ftpCommands.map(([cmd, text, ex, c], i) => <tr key={cmd} onClick={() => setActive(cmd)} className={`${i === ftpCommands.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === cmd ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{cmd}</td><td className="p-4 text-white font-bold">{text}</td><td className="p-4 text-green-300 font-mono">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataConnection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="green" title="Data Connection là gì?" icon={<Package />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Kênh chuyên chở dữ liệu" icon={<Package />} color="green" text="Data connection là kết nối dùng để truyền dữ liệu thật: file upload, file download hoặc danh sách thư mục khi dùng LIST." code="Control: Tôi muốn tải report.pdf
Data: Nội dung report.pdf được truyền" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <DataConnectionVisual />
          <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
            FTP không truyền file trực tiếp trên cùng kênh điều khiển; nó mở kênh dữ liệu riêng.
          </div>
        </div>
      </div>
    </section>
  );
}

function FtpSecurityRisk() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="red" title="FTP không an toàn ở điểm nào?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <ConceptCard title="FTP thường không mã hóa" icon={<Unlock />} color="red" text="FTP truyền thống có thể gửi username, password, tên file, lệnh FTP và nội dung file ở dạng dễ đọc nếu bị nghe lén." code="USER admin
PASS 123456
RETR secret.pdf" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid md:grid-cols-2 gap-3">
              {["Username", "Password", "Tên file", "Nội dung file", "Lệnh FTP", "Danh sách thư mục"].map((item) => <div key={item} className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4"><EyeIcon /><p className="text-red-300 font-black mt-2">{item}</p><p className="text-slate-500 text-sm mt-1">Có thể bị đọc nếu dùng FTP thường</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SftpDefinition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="emerald" title="SFTP là gì?" icon={<Lock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="SFTP = SSH File Transfer Protocol" icon={<ShieldCheck />} color="emerald" text="SFTP là giao thức truyền file chạy bên trong kết nối SSH. Nó thường dùng TCP port 22 và mã hóa toàn bộ phiên làm việc." code="SFTP = truyền file an toàn thông qua SSH
TCP port 22" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <SftpEncryptedVisual />
            <div className="grid md:grid-cols-2 gap-3">
              <MiniCard title="SSH" value="encrypted channel" color="emerald" icon={<Lock />} />
              <MiniCard title="SFTP" value="file transfer" color="cyan" icon={<FileArchive />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FtpVsSftp() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="FTP và SFTP có giống nhau không?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">FTP</th><th className="p-4 text-emerald-300">SFTP</th></tr></thead>
            <tbody className="text-sm">
              {ftpSftpRows.map(([criteria, ftp, sftp], i) => <tr key={criteria} className={`${i === ftpSftpRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{ftp}</td><td className="p-4 text-slate-300">{sftp}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-purple-500/10 border border-purple-400/40 rounded-3xl p-6 text-purple-300 font-mono text-sm">
        FTP và SFTP không phải cùng một giao thức. SFTP không phải “FTP thêm chữ S”; SFTP chạy trên SSH.
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="green" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Gửi hồ sơ qua bưu điện" icon={<Package />} color="green" text="FTP giống gửi hồ sơ không bỏ vào phong bì kín. SFTP giống gửi hồ sơ trong hộp khóa: người ngoài thấy có gói hàng, nhưng không đọc được nội dung." code="Không phong bì → FTP
Hộp khóa      → SFTP" />
        <ConceptCard title="Quản lý kho hàng từ xa" icon={<Box />} color="orange" text="FTP server giống kho hàng từ xa. Client có thể xem danh sách, lấy file, đưa file mới vào, xóa hoặc đổi thư mục." code="LIST → xem danh sách
RETR → lấy file
STOR → gửi file
DELE → xóa file" />
      </div>
    </section>
  );
}

function ConnectionDiagrams() {
  const [mode, setMode] = useState("ftp");
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="cyan" title="Sơ đồ FTP và SFTP" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Nhìn vào số kết nối" icon={<Route />} color="cyan" text="FTP thường tách control connection và data connection. SFTP thường truyền login, command và file data trong một kênh SSH mã hóa." code="FTP: control + data
SFTP: SSH encrypted channel" />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "ftp"} onClick={() => setMode("ftp")} color="orange">FTP</ChoiceButton>
              <ChoiceButton active={mode === "sftp"} onClick={() => setMode("sftp")} color="emerald">SFTP</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "ftp" ? <FtpDiagram /> : <SftpDiagram />}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolComparison() {
  const [active, setActive] = useState("SFTP");
  const row = protocolRows.find(([name]) => name === active) || protocolRows[2];
  const [, desc, port, encrypted, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="yellow" title="FTP, FTPS và SFTP" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {protocolRows.map(([name, , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${desc}`} icon={active === "FTP" ? <Unlock /> : <Lock />} color={color} text={`Port thường gặp: ${port}. Mã hóa: ${encrypted}.`} code={active === "FTPS" ? "FTPS ≠ SFTP\nFTPS= FTP + TLS/SSL" : active === "SFTP" ? "SFTP = SSH File Transfer Protocol\nRuns over SSH" : "FTP traditional\nNo encryption by default"} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm min-w-[680px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Giải thích</th><th className="p-4">Port</th><th className="p-4">Mã hóa</th></tr></thead>
              <tbody>
                {protocolRows.map(([name, explanation, p, enc, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === protocolRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-white font-bold">{explanation}</td><td className="p-4 text-green-300 font-mono">{p}</td><td className="p-4 text-slate-300">{enc}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivePassiveSection() {
  const [mode, setMode] = useState("passive");
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="purple" title="FTP Active Mode và Passive Mode" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "active" ? "Active Mode" : "Passive Mode"} icon={<RefreshCw />} color={mode === "active" ? "orange" : "emerald"} text={mode === "active" ? "Active Mode: server mở data connection ngược về client. Cách này dễ gặp lỗi khi client nằm sau NAT/firewall." : "Passive Mode: server báo port dữ liệu, client chủ động kết nối đến port đó. Cách này thường thân thiện hơn với NAT/firewall phía client."} code={mode === "active" ? "Server gọi lại client" : "Client chủ động cả hai kết nối"} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "active"} onClick={() => setMode("active")} color="orange">Active</ChoiceButton>
              <ChoiceButton active={mode === "passive"} onClick={() => setMode("passive")} color="emerald">Passive</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ActivePassiveVisual mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FtpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client mở TCP đến port 21", text: "Client kết nối đến FTP server qua control connection.", code: "192.168.1.10 → 203.0.113.10:21", color: "cyan", icon: <Network /> },
    { title: "Server chờ lệnh", text: "Server giữ control connection để nhận lệnh FTP.", code: "Control channel ready", color: "blue", icon: <Server /> },
    { title: "Client gửi USER", text: "Client gửi username qua control connection.", code: "USER kha", color: "purple", icon: <Terminal /> },
    { title: "Client gửi PASS", text: "Client gửi password qua control connection.", code: "PASS 123456", color: "red", icon: <KeyRound /> },
    { title: "Server xác thực", text: "Server kiểm tra thông tin đăng nhập.", code: "Login success / failed", color: "green", icon: <CheckCircle2 /> },
    {
      title: "Client gửi LIST hoặc RETR", text: "Client yêu cầu xem thư mục hoặc tải file.", code: "LIST\nRETR report.pdf", color: "orange", icon: <FileText />
    },
    { title: "FTP tạo data connection riêng", text: "FTP mở kênh dữ liệu riêng để truyền file hoặc directory listing.", code: "Open data connection", color: "cyan", icon: <Package /> },
    { title: "Truyền file/danh sách thư mục", text: "Dữ liệu thật đi qua data connection.", code: "File bytes / directory listing", color: "emerald", icon: <Download /> },
    { title: "Đóng data connection", text: "Khi truyền xong, kênh dữ liệu đóng.", code: "Close data channel", color: "yellow", icon: <XCircle /> },
    { title: "Control connection tiếp tục", text: "Client vẫn có thể gửi lệnh khác trên control connection.", code: "LIST / STOR / DELE / bye", color: "green", icon: <RefreshCw /> },
  ];
  return <StepSection number="13" color="orange" title="FTP hoạt động cơ bản" icon={<FileArchive />} steps={steps} step={step} setStep={setStep} />;
}

function ActiveModeProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client kết nối server port 21", text: "Control connection luôn bắt đầu từ client đến server.", code: "Client → Server:21", color: "cyan", icon: <Network /> },
    { title: "Client báo port của mình", text: "Client cho server biết port phía client để server kết nối ngược.", code: "PORT command", color: "blue", icon: <Terminal /> },
    { title: "Server kết nối ngược về client", text: "Data connection được mở từ server về client.", code: "Server → Client:data-port", color: "orange", icon: <ArrowRight /> },
    { title: "Truyền dữ liệu", text: "File hoặc directory listing đi qua data connection này.", code: "Data transfer", color: "green", icon: <Package /> },
    { title: "Có thể bị NAT/firewall chặn", text: "Nếu client ở sau router NAT, kết nối ngược từ server vào client có thể bị chặn.", code: "NAT/Firewall blocks inbound", color: "red", icon: <ShieldAlert /> },
  ];
  return <StepSection number="14" color="red" title="FTP Active Mode" icon={<ShieldAlert />} steps={steps} step={step} setStep={setStep} />;
}

function PassiveModeProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client kết nối server port 21", text: "Client mở control connection như bình thường.", code: "Client → Server:21", color: "cyan", icon: <Network /> },
    { title: "Client yêu cầu passive mode", text: "Client yêu cầu server chuẩn bị một port dữ liệu.", code: "PASV command", color: "purple", icon: <Terminal /> },
    { title: "Server báo port dữ liệu", text: "Server trả về port mà client cần kết nối đến.", code: "Server: use port 50000", color: "orange", icon: <Server /> },
    { title: "Client kết nối đến port đó", text: "Client chủ động mở data connection ra ngoài đến server.", code: "Client → Server:50000", color: "emerald", icon: <ArrowRight /> },
    { title: "Truyền dữ liệu", text: "File hoặc directory listing được truyền qua kênh dữ liệu này.", code: "Data transfer", color: "green", icon: <Package /> },
    { title: "Thân thiện hơn với NAT/firewall", text: "Vì client chủ động mở kết nối ra ngoài, cách này thường dễ hoạt động hơn.", code: "Client initiates both connections", color: "green", icon: <ShieldCheck /> },
  ];
  return <StepSection number="15" color="emerald" title="FTP Passive Mode" icon={<ShieldCheck />} steps={steps} step={step} setStep={setStep} />;
}

function SftpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client kết nối port 22", text: "SFTP chạy trên SSH, nên client kết nối đến server TCP port 22.", code: "Client → Server:22", color: "cyan", icon: <Network /> },
    { title: "Thiết lập phiên SSH mã hóa", text: "Hai bên thiết lập kênh SSH an toàn.", code: "SSH encrypted session", color: "emerald", icon: <Lock /> },
    { title: "Xác thực bằng password hoặc key", text: "Client xác thực bằng mật khẩu hoặc SSH private key.", code: "Password / SSH key", color: "purple", icon: <KeyRound /> },
    { title: "Dùng SFTP subsystem", text: "Sau khi xác thực, client dùng SFTP subsystem để thao tác file.", code: "sftp subsystem", color: "blue", icon: <Terminal /> },
    { title: "Gửi lệnh file qua SSH", text: "Lệnh ls, get, put, mkdir, rm được gửi trong kênh mã hóa.", code: "ls / get / put / rm", color: "orange", icon: <FileText /> },
    { title: "Server trả dữ liệu qua cùng kênh", text: "File data cũng đi qua cùng kết nối SSH đã mã hóa.", code: "Encrypted file data", color: "green", icon: <Package /> },
    { title: "Đóng phiên SSH", text: "Khi xong, client thoát và phiên SSH đóng.", code: "exit", color: "red", icon: <XCircle /> },
  ];
  return <StepSection number="16" color="emerald" title="SFTP hoạt động như thế nào?" icon={<Lock />} steps={steps} step={step} setStep={setStep} />;
}

function CommandPractice() {
  const [tab, setTab] = useState("sftp");
  const data = {
    ftp: {
      title: "FTP command line",
      color: "orange",
      icon: <Terminal />,
      commands: [["Kết nối FTP", "ftp example.com"], ["Xem file", "ls"], ["Thư mục hiện tại", "pwd"], ["Chuyển thư mục", "cd folder"], ["Download", "get file.txt"], ["Upload", "put image.png"], ["Xóa file", "delete old.txt"], ["Thoát", "bye"]],
    },
    sftp: {
      title: "SFTP command line",
      color: "emerald",
      icon: <Lock />,
      commands: [["Kết nối SFTP", "sftp user@example.com"], ["Port khác", "sftp -P 2222 user@example.com"], ["Xem file", "ls"], ["Chuyển thư mục", "cd /var/www"], ["Download", "get report.pdf"], ["Upload", "put index.html"], ["Tạo thư mục", "mkdir backup"], ["Xóa file", "rm old.txt"], ["Thoát", "exit"]],
    },
    scp: {
      title: "SCP qua SSH",
      color: "blue",
      icon: <Send />,
      commands: [["Upload file", "scp index.html user@example.com:/var/www/html/"], ["Download file", "scp user@example.com:/var/log/app.log ."], ["Chỉ định port SSH khác", "scp -P 2222 app.log user@example.com:/tmp/"], ["Ghi nhớ", "sftp -P, scp -P dùng P hoa; ssh -p thường dùng p thường"]],
    },
  }[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="green" title="Lệnh thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <ChoiceButton active={tab === "ftp"} onClick={() => setTab("ftp")} color="orange">FTP</ChoiceButton>
          <ChoiceButton active={tab === "sftp"} onClick={() => setTab("sftp")} color="emerald">SFTP</ChoiceButton>
          <ChoiceButton active={tab === "scp"} onClick={() => setTab("scp")} color="blue">SCP</ChoiceButton>
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

function GuiToolsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="blue" title="Client giao diện phổ biến" icon={<HardDrive />} />
      <div className="grid md:grid-cols-4 gap-3">
        {guiTools.map(([name, support, color]) => <div key={name} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}><HardDrive size={24} /></div><h3 className="text-white font-black mb-2">{name}</h3><p className="text-slate-400 text-sm leading-relaxed">{support}</p></div>)}
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">Host: địa chỉ server
        Port: 22
        Username: tài khoản
        Password hoặc SSH private key
        Remote path: thư mục trên server</div>
    </section>
  );
}

function WhenToUse() {
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="emerald" title="Khi nào nên dùng FTP, FTPS, SFTP?" icon={<CheckCircle2 />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="FTP" icon={<Unlock />} color="red" text="Chỉ nên dùng trong môi trường tin cậy, lab nội bộ, hoặc hệ thống cũ bắt buộc phải tương thích." code="Không phù hợp cho password/file nhạy cảm qua Internet" />
        <ConceptCard title="FTPS" icon={<ShieldCheck />} color="yellow" text="Dùng khi hệ thống bắt buộc dùng FTP nhưng cần mã hóa bằng TLS/SSL. Có thể phức tạp hơn với firewall." code="FTP + TLS/SSL
FTPS ≠ SFTP" />
        <ConceptCard title="SFTP" icon={<Lock />} color="emerald" text="Nên dùng hơn cho truyền file an toàn qua Internet, triển khai server, upload website qua SSH." code="SSH port 22
1 encrypted connection" />
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ SFTP là FTP thêm TLS", desc: "SFTP chạy trên SSH. FTP thêm TLS/SSL là FTPS, không phải SFTP.", fix: "SFTP ≠ FTPS." },
    { title: "Chỉ mở port 21 là FTP chắc chắn chạy", desc: "FTP còn cần data connection. Passive Mode có thể cần mở thêm dải port dữ liệu trên server.", fix: "Nhớ control channel và data channel." },
    { title: "Dùng FTP thường để gửi password qua Internet", desc: "FTP truyền thống không mã hóa username/password và dữ liệu.", fix: "Dùng SFTP hoặc FTPS cho dữ liệu nhạy cảm." },
    { title: "Nhầm Active và Passive Mode", desc: "Active: server kết nối ngược về client. Passive: client kết nối đến port dữ liệu của server.", fix: "Passive thường dễ qua NAT/firewall phía client hơn." },
    { title: "Nhầm chữ P trong lệnh port", desc: "sftp -P và scp -P dùng P hoa; ssh -p thường dùng p thường.", fix: "Ghi nhớ đúng option khi thực hành." },
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
              <p>FTP = File Transfer Protocol.</p>
              <p>FTP dùng để upload/download/quản lý file từ xa.</p>
              <p>FTP control connection thường dùng TCP port 21.</p>
              <p>FTP data connection truyền file hoặc directory listing.</p>
              <p>FTP truyền thống không mã hóa username/password/file.</p>
              <p>SFTP = SSH File Transfer Protocol.</p>
              <p>SFTP chạy trên SSH, thường dùng TCP port 22.</p>
              <p>FTPS = FTP + TLS/SSL, không phải SFTP.</p>
              <p>Active Mode: server kết nối ngược về client.</p>
              <p>Passive Mode: client kết nối đến port dữ liệu của server.</p>
              <p>Passive Mode thường dễ hoạt động hơn sau NAT/firewall phía client.</p>
              <p>SFTP thường dễ cấu hình firewall hơn vì dùng một kênh SSH mã hóa.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "FTP dùng để làm gì?", options: ["Upload/download và quản lý file qua mạng", "Phân giải tên miền thành IP", "Mã hóa website HTTPS", "Gửi email giữa mail server"], correct: 0, explanation: "FTP là File Transfer Protocol, chuyên dùng để truyền và quản lý file giữa client và server." },
  { question: "SFTP khác FTP ở điểm quan trọng nào?", options: ["SFTP chạy trên SSH và được mã hóa", "SFTP luôn dùng port 80", "SFTP không truyền file", "SFTP là FTP không có đăng nhập"], correct: 0, explanation: "SFTP là SSH File Transfer Protocol, chạy trong kết nối SSH mã hóa, thường dùng port 22." },
  { question: "FTP control connection thường dùng port nào?", options: ["TCP 21", "TCP 22", "TCP 80", "UDP 53"], correct: 0, explanation: "FTP control connection thường dùng TCP port 21 để gửi lệnh như USER, PASS, LIST, RETR, STOR." },
  { question: "FTPS là gì?", options: ["FTP có thêm TLS/SSL", "SFTP chạy trên SSH", "FTP không dùng port", "Giao thức gửi email"], correct: 0, explanation: "FTPS là FTP được bảo vệ bằng TLS/SSL. FTPS không phải SFTP." },
  { question: "Active Mode khác Passive Mode ở điểm nào?", options: ["Active: server kết nối ngược về client; Passive: client kết nối đến port dữ liệu của server", "Active dùng SSH; Passive dùng DNS", "Active không cần data connection", "Passive không cần control connection"], correct: 0, explanation: "Active Mode yêu cầu server mở data connection ngược về client. Passive Mode để client chủ động mở data connection đến server." },
  { question: "Vì sao Passive Mode thường dễ chạy hơn khi client sau NAT/firewall?", options: ["Vì client chủ động mở cả control và data connection ra ngoài", "Vì Passive Mode không truyền file", "Vì Passive Mode dùng UDP", "Vì server không cần port nào"], correct: 0, explanation: "Firewall/NAT phía client thường cho phép kết nối outbound, nên Passive Mode dễ hoạt động hơn Active Mode." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài FTP & SFTP!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang SMTP, POP3, IMAP — nhóm giao thức tầng ứng dụng dùng cho hệ thống email.</p>
      <Link to="/phan-7-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.4 — SMTP, POP3, IMAP <ChevronRight size={20} />
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

function HeroTransferVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <MiniCard title="FTP" value="21 + data" color="orange" icon={<Unlock />} />
        <MiniCard title="SFTP" value="SSH 22" color="emerald" icon={<Lock />} />
      </div>
      <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
        <p className="text-cyan-300">Client ---- upload ----&gt; File Server</p>
        <p className="text-green-300">Client &lt;--- download --- File Server</p>
        <p className="text-orange-300">FTP: commands + separate data channel</p>
        <p className="text-emerald-300">SFTP: one encrypted SSH channel</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <MiniCard title="LIST" value="dir" color="cyan" icon={<Folder />} />
        <MiniCard title="RETR" value="get" color="blue" icon={<Download />} />
        <MiniCard title="STOR" value="put" color="purple" icon={<Upload />} />
      </div>
    </div>
  );
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function UploadDownloadVisual() {
  return <div className="space-y-4"><TransferLine icon={<Upload />} color="cyan" text="Upload index.html lên hosting" /><TransferLine icon={<Download />} color="emerald" text="Download report.pdf từ server" /><TransferLine icon={<Folder />} color="orange" text="Quản lý file: xóa, đổi tên, tạo thư mục" /></div>;
}

function TransferLine({ icon, color, text }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><p className="text-white font-bold">{text}</p></div>;
}

function FtpTwoChannelVisual({ active }) {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><p className={active === "control" ? "text-cyan-300" : "text-slate-500"}>Client ---- Control TCP:21 ----&gt; FTP Server</p><p className="text-slate-400 pl-4">USER, PASS, LIST, RETR, STOR</p><p className={active === "data" ? "text-orange-300" : "text-slate-500"}>Client &lt;==== Data Connection ==== FTP Server</p><p className="text-slate-400 pl-4">File data / directory listing</p></div>;
}

function DataConnectionVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Control" color="cyan" icon={<Terminal />} /><ArrowRight className="text-slate-500" /><MiniNode label="Command" color="purple" icon={<FileText />} /></div><div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">RETR report.pdf</div><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Data" color="green" icon={<Package />} /><ArrowRight className="text-slate-500" /><MiniNode label="File bytes" color="orange" icon={<Download />} /></div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function EyeIcon() { return <ShieldAlert className="text-red-300" size={24} />; }

function SftpEncryptedVisual() {
  return <div className="space-y-3"><LayerBox title="SFTP commands" text="ls, get, put, mkdir, rm" color="cyan" /><LayerBox title="SSH encrypted channel" text="Login, command, filename, file content all encrypted" color="emerald" /><LayerBox title="TCP port 22" text="One secure connection" color="blue" /></div>;
}

function LayerBox({ title, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black`}>{title}</p><p className="text-slate-400 text-sm mt-1">{text}</p></div>;
}

function FtpDiagram() {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mb-4"><MiniNode label="FTP Client" color="cyan" icon={<HardDrive />} /><ArrowRight className="text-slate-500" /><MiniNode label="FTP Server" color="orange" icon={<Server />} /></div><p className="text-cyan-300">Client ---- Control TCP:21 ------------&gt; Server</p><p className="text-slate-400">          USER, PASS, LIST, RETR, STOR</p><p className="text-orange-300">Client &lt;==== Data Connection ==========&gt; Server</p><p className="text-slate-400">          File data / directory listing</p></div>;
}

function SftpDiagram() {
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mb-4"><MiniNode label="SFTP Client" color="cyan" icon={<HardDrive />} /><ArrowRight className="text-slate-500" /><MiniNode label="SSH Server" color="emerald" icon={<Server />} /></div><p className="text-emerald-300">Client ===== SSH Encrypted TCP:22 ===== Server</p><p className="text-slate-400">          login + command + file data encrypted</p><p className="text-green-300">          one secure channel</p></div>;
}

function ActivePassiveVisual({ mode }) {
  if (mode === "active") {
    return <div className="space-y-4"><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><p className="text-cyan-300">Client ---- Control TCP:21 ----&gt; Server</p><p className="text-orange-300">Client &lt;--- Data connection ---- Server</p><p className="text-red-300">Problem: NAT/firewall may block inbound connection.</p></div><MiniCard title="Ghi nhớ" value="Server gọi lại client" color="orange" icon={<ArrowRight />} /></div>;
  }
  return <div className="space-y-4"><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><p className="text-cyan-300">Client ---- Control TCP:21 ----&gt; Server</p><p className="text-yellow-300">Client &lt;--- Server báo data port</p><p className="text-emerald-300">Client ---- Data connection ----&gt; Server:data-port</p><p className="text-green-300">Better for client behind NAT/firewall.</p></div><MiniCard title="Ghi nhớ" value="Client chủ động cả hai" color="emerald" icon={<ShieldCheck />} /></div>;
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
