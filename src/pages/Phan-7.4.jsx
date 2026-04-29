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
  FileText,
  Globe2,
  HardDrive,
  Inbox,
  KeyRound,
  Layers,
  Lock,
  Mail,
  MailCheck,
  MailOpen,
  MailPlus,
  Network,
  RefreshCw,
  Route,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Tablet,
  Terminal,
  Unlock,
  Upload,
  Wifi,
  XCircle,
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

const protocolRows = [
  ["SMTP", "Gửi email", "Client → Server, Server → Server", "Không", "Có", "Gửi thư", "orange"],
  ["POP3", "Nhận/tải email", "Server → Client", "Có", "Không", "Tải thư về một máy", "blue"],
  ["IMAP", "Nhận/đồng bộ email", "Server ↔ Client", "Có", "Không", "Dùng nhiều thiết bị", "emerald"],
];

const portRows = [
  ["SMTP", "25", "Thường server-to-server", "Chuyển mail giữa mail server", "orange"],
  ["SMTP Submission", "587", "STARTTLS thường dùng", "Client gửi mail có đăng nhập", "green"],
  ["SMTPS", "465", "TLS trực tiếp", "Client gửi mail an toàn", "emerald"],
  ["POP3", "110", "Không mã hóa hoặc STARTTLS", "Tải email về client", "blue"],
  ["POP3S", "995", "TLS trực tiếp", "Tải email an toàn", "cyan"],
  ["IMAP", "143", "Không mã hóa hoặc STARTTLS", "Đồng bộ email", "purple"],
  ["IMAPS", "993", "TLS trực tiếp", "Đồng bộ email an toàn", "emerald"],
];

const popImapRows = [
  ["Cách dùng chính", "Tải email về máy", "Đồng bộ email với server"],
  ["Email lưu ở đâu?", "Thường lưu trên thiết bị", "Chủ yếu lưu trên server"],
  ["Dùng nhiều thiết bị", "Không tốt bằng", "Rất phù hợp"],
  ["Đồng bộ trạng thái đã đọc", "Hạn chế", "Có"],
  ["Đồng bộ thư mục", "Hạn chế", "Có"],
  ["Đọc offline", "Tốt sau khi tải về", "Có thể, tùy client cache"],
  ["Phù hợp hiện nay", "Ít phổ biến hơn", "Phổ biến hơn"],
];

const commandTabs = {
  mx: {
    title: "Tra MX record",
    color: "cyan",
    icon: <Search />,
    commands: [
      ["Windows", "nslookup -type=mx gmail.com"],
      ["Linux/macOS", "dig gmail.com MX"],
      ["host", "host -t MX gmail.com"],
    ],
  },
  ports: {
    title: "Kiểm tra port email",
    color: "green",
    icon: <Network />,
    commands: [
      ["SMTP 587 bằng telnet", "telnet smtp.example.com 587"],
      ["SMTP 587 bằng nc", "nc -vz smtp.example.com 587"],
      ["IMAPS 993", "nc -vz imap.example.com 993"],
      ["POP3S 995", "nc -vz pop.example.com 995"],
    ],
  },
  tls: {
    title: "Kiểm tra TLS bằng OpenSSL",
    color: "emerald",
    icon: <Lock />,
    commands: [
      ["SMTP TLS trực tiếp 465", "openssl s_client -connect smtp.example.com:465"],
      ["SMTP STARTTLS 587", "openssl s_client -starttls smtp -connect smtp.example.com:587"],
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
              <Mail className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyMultipleProtocols />
        <SmtpSection />
        <Pop3Section />
        <ImapSection />
        <Pop3VsImap />
        <ClientServerSection />
        <RealWorldExamples />
        <EmailFlowOverview />
        <PortTable />
        <ProtocolComparison />
        <PopImapVisualSection />
        <SmtpProcess />
        <MxRecordSection />
        <Pop3Process />
        <ImapProcess />
        <TlsSecuritySection />
        <CommandPractice />
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
            <Layers size={16} /> Application Layer — Email Protocols
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            SMTP, POP3, IMAP
            <span className="block text-cyan-400">Các giao thức Email</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            SMTP dùng để gửi mail. POP3 và IMAP dùng để nhận mail, nhưng POP3 thiên về tải về một máy còn IMAP thiên về đồng bộ nhiều thiết bị.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">SMTP</span> = gửi email.</p>
            <p><span className="text-blue-300">POP3</span> = tải email về thiết bị.</p>
            <p><span className="text-emerald-300">IMAP</span> = đồng bộ email với server.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroEmailVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu SMTP, POP3, IMAP là gì trong hệ thống email.",
    "Biết giao thức gửi mail và giao thức nhận mail.",
    "Phân biệt POP3 và IMAP.",
    "Nắm các port email phổ biến: 25, 465, 587, 110, 995, 143, 993.",
    "Hiểu quy trình một email đi từ người gửi đến người nhận.",
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

function WhyMultipleProtocols() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="purple" title="Vì sao email cần nhiều giao thức?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi bạn gửi một email, hệ thống cần xử lý nhiều việc: client gửi mail lên server, server chuyển mail sang domain khác, rồi người nhận đọc hoặc đồng bộ mail về thiết bị.</p>
            <ConceptCard title="Ba nhóm việc chính" icon={<Mail />} color="purple" text="SMTP xử lý chiều gửi. POP3/IMAP xử lý chiều nhận, nhưng cách nhận khác nhau." code="SMTP = gửi mail
POP3 = lấy mail về máy
IMAP = xem/đồng bộ mail trên server" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <ThreeProtocolVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function SmtpSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="SMTP là gì?" icon={<Send />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Simple Mail Transfer Protocol" icon={<MailPlus />} color="orange" text="SMTP là giao thức chuyên dùng để gửi email đi: từ email client lên mail server, và từ mail server này sang mail server khác." code="Gmail app ---- SMTP ----> Gmail server
Gmail server ---- SMTP ----> Company mail server" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <PortCards rows={portRows.filter((r) => r[0].startsWith("SMTP") || r[0] === "SMTPS")} />
        </div>
      </div>
    </section>
  );
}

function Pop3Section() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="blue" title="POP3 là gì?" icon={<Download />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Post Office Protocol version 3" icon={<Inbox />} color="blue" text="POP3 dùng để lấy email từ mail server về thiết bị. Cách dùng cổ điển là tải mail về máy, rồi mail có thể bị xóa khỏi server tùy cấu hình." code="Mail Server ---- POP3 ----> Laptop
Download mail to device" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <Pop3Visual />
            <PortCards rows={portRows.filter((r) => r[0].startsWith("POP3"))} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImapSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="IMAP là gì?" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Internet Message Access Protocol" icon={<RefreshCw />} color="emerald" text="IMAP dùng để đọc và đồng bộ email trực tiếp với mail server. Khi đọc/xóa/chuyển thư mục trên một thiết bị, thiết bị khác cũng thấy trạng thái mới." code="Phone ---- IMAP ---- Mail Server
Laptop ---- IMAP ---- Mail Server
Tablet ---- IMAP ---- Mail Server" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <ImapVisual />
            <PortCards rows={portRows.filter((r) => r[0].startsWith("IMAP"))} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pop3VsImap() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="POP3 và IMAP khác nhau thế nào?" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-blue-300">POP3</th><th className="p-4 text-emerald-300">IMAP</th></tr></thead>
            <tbody className="text-sm">
              {popImapRows.map(([criteria, pop, imap], i) => <tr key={criteria} className={`${i === popImapRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{pop}</td><td className="p-4 text-slate-300">{imap}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm">
        POP3 = tải mail về thiết bị. IMAP = đồng bộ mail với server.
      </div>
    </section>
  );
}

function ClientServerSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Email Client và Mail Server" icon={<Server />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Email Client" icon={<HardDrive />} color="cyan" text="Email client là ứng dụng người dùng dùng để gửi/đọc mail: Gmail app, Outlook, Apple Mail, Thunderbird hoặc webmail." code="Gmail app
Outlook
Apple Mail
Thunderbird
Webmail" />
        <ConceptCard title="Mail Server" icon={<Server />} color="orange" text="Mail server là hệ thống máy chủ lưu trữ, gửi và nhận email: Gmail server, Microsoft 365, Yahoo Mail hoặc mail server nội bộ." code="Email Client ---- SMTP/IMAP/POP3 ---- Mail Server" />
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Bưu điện truyền thống" icon={<Mail />} color="green" text="SMTP giống đưa thư đi gửi. POP3 giống lấy thư về nhà. IMAP giống xem thư trong hộp thư trung tâm, nhiều thiết bị cùng xem được." code="SMTP = đưa thư đi gửi
POP3 = lấy thư về nhà
IMAP = xem thư tại hộp thư trung tâm" />
        <ConceptCard title="Một tài khoản trên nhiều thiết bị" icon={<Smartphone />} color="emerald" text="Nếu bạn đọc email trên điện thoại, laptop cũng hiện đã đọc. Nếu xóa email trên laptop, điện thoại cũng thấy email đã xóa. Đây là kiểu IMAP." code="Phone reads mail
Laptop sees read status
Tablet syncs same mailbox" />
      </div>
    </section>
  );
}

function EmailFlowOverview() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="cyan" title="Sơ đồ tổng quan gửi và nhận email" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <EmailFlowDiagram />
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">
          SMTP: gửi/chuyển email. IMAP/POP3: nhận/đọc email.
        </div>
      </div>
    </section>
  );
}

function PortTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Bảng port email phổ biến" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Giao thức</th><th className="p-4">Port</th><th className="p-4">Mã hóa</th><th className="p-4">Công dụng</th></tr></thead>
            <tbody className="text-sm">
              {portRows.map(([proto, port, tls, use, color], i) => <tr key={`${proto}-${port}`} className={`${i === portRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black ${colorClasses[color].text}`}>{proto}</td><td className="p-4 text-white font-mono font-bold">{port}</td><td className="p-4 text-slate-300">{tls}</td><td className="p-4 text-slate-300">{use}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProtocolComparison() {
  const [active, setActive] = useState("IMAP");
  const row = protocolRows.find(([name]) => name === active) || protocolRows[2];
  const [, main, direction, canRead, canSend, fit, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="SMTP vs POP3 vs IMAP" icon={<MailCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {protocolRows.map(([name, , , , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${main}`} icon={active === "SMTP" ? <Send /> : active === "POP3" ? <Download /> : <RefreshCw />} color={color} text={`Hướng dữ liệu: ${direction}. Phù hợp: ${fit}.`} code={`Dùng để đọc mail? ${canRead}
Dùng để gửi mail? ${canSend}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4">SMTP</th><th className="p-4">POP3</th><th className="p-4">IMAP</th></tr></thead>
                <tbody>
                  {[
                    ["Chức năng", "Gửi email", "Nhận/tải email", "Nhận/đồng bộ email"],
                    ["Hướng dữ liệu", "Client → Server, Server → Server", "Server → Client", "Server ↔ Client"],
                    ["Dùng để đọc mail?", "Không", "Có", "Có"],
                    ["Dùng để gửi mail?", "Có", "Không", "Không"],
                    ["Phù hợp", "Gửi thư", "Tải thư về một máy", "Dùng nhiều thiết bị"],
                  ].map(([a, b, c, d], i) => <tr key={a} className={`${i === 4 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className="p-4 text-white font-bold">{a}</td><td className="p-4 text-orange-300">{b}</td><td className="p-4 text-blue-300">{c}</td><td className="p-4 text-emerald-300">{d}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopImapVisualSection() {
  const [mode, setMode] = useState("imap");
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="emerald" title="POP3 và IMAP trực quan" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "pop3" ? "POP3: tải về" : "IMAP: đồng bộ"} icon={mode === "pop3" ? <Download /> : <RefreshCw />} color={mode === "pop3" ? "blue" : "emerald"} text={mode === "pop3" ? "Email chủ yếu nằm trên laptop sau khi tải, tùy cấu hình có thể xóa khỏi server." : "Email nằm trên server, các thiết bị đồng bộ trạng thái đọc/xóa/thư mục."} code={mode === "pop3" ? "Mail Server → Download → Laptop" : "Phone ↔ Mail Server ↔ Laptop / Tablet / Webmail"} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "pop3"} onClick={() => setMode("pop3")} color="blue">POP3</ChoiceButton>
              <ChoiceButton active={mode === "imap"} onClick={() => setMode("imap")} color="emerald">IMAP</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "pop3" ? <Pop3LargeVisual /> : <ImapLargeVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function SmtpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Bạn soạn email và bấm Send", text: "Email client chuẩn bị người gửi, người nhận, subject, body và file đính kèm nếu có.", code: "Compose → Send", color: "cyan", icon: <MailPlus /> },
    { title: "Client kết nối SMTP server", text: "Ứng dụng mail kết nối SMTP server, thường qua port 587 hoặc 465.", code: "Client → SMTP server", color: "orange", icon: <Network /> },
    { title: "Client xác thực", text: "Client đăng nhập để chứng minh được phép gửi mail qua server này.", code: "AUTH username/password", color: "purple", icon: <KeyRound /> },
    { title: "Gửi thông tin người gửi", text: "SMTP server nhận địa chỉ sender.", code: "MAIL FROM:<kha@gmail.com>", color: "blue", icon: <Send /> },
    { title: "Gửi thông tin người nhận", text: "SMTP server nhận địa chỉ recipient.", code: "RCPT TO:<user@company.com>", color: "green", icon: <Inbox /> },
    { title: "Gửi nội dung email", text: "Client gửi subject, header, body và attachment nếu có.", code: "DATA ...", color: "cyan", icon: <FileText /> },
    { title: "Server đưa email vào hàng đợi", text: "SMTP server người gửi lưu email vào queue để chuyển đi.", code: "Mail queue", color: "yellow", icon: <Database /> },
    { title: "Tìm mail server nhận bằng DNS MX", text: "Server dùng MX record để biết domain người nhận nhận mail ở server nào.", code: "company.com MX → mail.company.com", color: "purple", icon: <Search /> },
    { title: "Chuyển mail sang server người nhận", text: "SMTP server người gửi chuyển email sang SMTP server người nhận, thường server-to-server port 25.", code: "Sender SMTP → Receiver SMTP", color: "orange", icon: <ArrowRight /> },
    { title: "Lưu email vào mailbox", text: "Mail server người nhận lưu email vào mailbox của người nhận.", code: "Mailbox: user@company.com", color: "emerald", icon: <MailCheck /> },
  ];
  return <StepSection number="13" color="orange" title="Quy trình gửi email bằng SMTP" icon={<Send />} steps={steps} step={step} setStep={setStep} />;
}

function MxRecordSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="purple" title="DNS MX Record trong email" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="MX = Mail Exchange" icon={<Search />} color="purple" text="Khi gửi email đến user@company.com, mail server cần biết server nào chịu trách nhiệm nhận email cho company.com. Nó tra DNS MX record." code="company.com MX 10 mail.company.com
mail.company.com A 203.0.113.50" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MxRecordVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pop3Process() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client kết nối POP3 server", text: "Email client mở kết nối đến POP3 server.", code: "Client → POP3 server", color: "blue", icon: <Network /> },
    { title: "Client đăng nhập", text: "Client xác thực bằng username/password.", code: "USER / PASS", color: "purple", icon: <KeyRound /> },
    { title: "Hỏi danh sách email", text: "Client hỏi mailbox hiện có những thư nào.", code: "LIST", color: "cyan", icon: <Inbox /> },
    { title: "Tải email về máy", text: "Client download email từ server về thiết bị.", code: "RETR message", color: "green", icon: <Download /> },
    { title: "Có thể xóa khỏi server", text: "Tùy cấu hình, email có thể bị xóa khỏi server sau khi tải.", code: "DELE optional", color: "orange", icon: <XCircle /> },
    { title: "Đóng kết nối", text: "Client kết thúc phiên POP3.", code: "QUIT", color: "red", icon: <XCircle /> },
  ];
  return <StepSection number="15" color="blue" title="Quy trình nhận email bằng POP3" icon={<Download />} steps={steps} step={step} setStep={setStep} />;
}

function ImapProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client kết nối IMAP server", text: "Email client kết nối đến IMAP server, thường dùng port 993 nếu mã hóa TLS trực tiếp.", code: "Client ↔ IMAP server", color: "emerald", icon: <Network /> },
    { title: "Client đăng nhập", text: "Client xác thực tài khoản email.", code: "LOGIN / AUTH", color: "purple", icon: <KeyRound /> },
    { title: "Đồng bộ thư mục", text: "Client đồng bộ Inbox, Sent, Drafts, Trash và các folder khác.", code: "Sync folders", color: "cyan", icon: <RefreshCw /> },
    { title: "Tải tiêu đề trước", text: "Client có thể tải danh sách thư hoặc tiêu đề trước để tiết kiệm băng thông.", code: "Fetch headers", color: "blue", icon: <FileText /> },
    { title: "Mở thư thì tải nội dung", text: "Khi người dùng mở email, client tải nội dung chi tiết.", code: "Fetch body", color: "green", icon: <MailOpen /> },
    { title: "Cập nhật trạng thái lên server", text: "Nếu đọc, xóa hoặc di chuyển email, trạng thái được cập nhật lên server.", code: "Seen / Deleted / Moved", color: "orange", icon: <CheckCircle2 /> },
    { title: "Thiết bị khác đồng bộ lại", text: "Phone, laptop, tablet và webmail cùng thấy trạng thái mới.", code: "Multi-device sync", color: "emerald", icon: <Smartphone /> },
  ];
  return <StepSection number="16" color="emerald" title="Quy trình nhận email bằng IMAP" icon={<RefreshCw />} steps={steps} step={step} setStep={setStep} />;
}

function TlsSecuritySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="red" title="Bảo mật email: vì sao nên dùng TLS?" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <ConceptCard title="Không mã hóa = dễ lộ dữ liệu" icon={<ShieldAlert />} color="red" text="Nếu SMTP/POP3/IMAP không mã hóa, username, password, tiêu đề, nội dung và file đính kèm có thể bị lộ khi truyền qua mạng." code="Username
Password
Subject
Email body
Attachments" />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-3">
              <MiniCard title="SMTP" value="587 STARTTLS / 465 TLS" color="emerald" icon={<Send />} />
              <MiniCard title="POP3" value="995 TLS" color="cyan" icon={<Download />} />
              <MiniCard title="IMAP" value="993 TLS" color="green" icon={<RefreshCw />} />
            </div>
            <div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
              Có TLS giống gửi thư trong phong bì khóa: người ngoài biết có kết nối, nhưng không đọc được nội dung bên trong.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandPractice() {
  const [tab, setTab] = useState("mx");
  const data = commandTabs[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="green" title="Lệnh kiểm tra thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <ChoiceButton active={tab === "mx"} onClick={() => setTab("mx")} color="cyan">MX Record</ChoiceButton>
          <ChoiceButton active={tab === "ports"} onClick={() => setTab("ports")} color="green">Port</ChoiceButton>
          <ChoiceButton active={tab === "tls"} onClick={() => setTab("tls")} color="emerald">OpenSSL</ChoiceButton>
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

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ SMTP dùng để đọc mail", desc: "SMTP dùng để gửi/chuyển email. POP3 và IMAP mới dùng để nhận/đọc email.", fix: "SMTP gửi, POP3/IMAP nhận." },
    { title: "Nghĩ POP3 và IMAP giống nhau", desc: "POP3 thiên về tải thư về thiết bị. IMAP thiên về đồng bộ mailbox trên server.", fix: "Nhiều thiết bị nên dùng IMAP." },
    { title: "Bỏ qua DNS MX record", desc: "Mail server cần MX record để biết server nào nhận mail cho domain người nhận.", fix: "Email liên quan trực tiếp đến DNS MX." },
    { title: "Dùng port không mã hóa cho đăng nhập", desc: "POP3 110 hoặc IMAP 143 không mã hóa có thể làm lộ username/password nếu không dùng STARTTLS.", fix: "Ưu tiên 993, 995, 587 STARTTLS hoặc 465 TLS." },
    { title: "Nhầm webmail với giao thức mail client", desc: "Webmail trên trình duyệt dùng HTTP/HTTPS ở phía người dùng, nhưng hệ thống email phía sau vẫn có SMTP/IMAP/POP3.", fix: "Webmail không xóa vai trò của SMTP/IMAP." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">20</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>SMTP = Simple Mail Transfer Protocol.</p>
              <p>SMTP dùng để gửi/chuyển email.</p>
              <p>POP3 = Post Office Protocol version 3.</p>
              <p>POP3 dùng để tải email về thiết bị.</p>
              <p>IMAP = Internet Message Access Protocol.</p>
              <p>IMAP dùng để đồng bộ email với server.</p>
              <p>SMTP server-to-server thường dùng port 25.</p>
              <p>SMTP submission thường dùng port 587 STARTTLS.</p>
              <p>SMTPS dùng port 465 TLS trực tiếp.</p>
              <p>POP3S dùng port 995; IMAPS dùng port 993.</p>
              <p>MX record cho biết mail server nào nhận email cho domain.</p>
              <p>Nhiều thiết bị nên dùng IMAP hơn POP3.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "SMTP, POP3, IMAP lần lượt dùng để làm gì?", options: ["SMTP gửi mail; POP3 tải mail; IMAP đồng bộ mail", "SMTP đồng bộ; POP3 gửi; IMAP tải file", "SMTP phân giải DNS; POP3 gửi HTTP; IMAP truyền FTP", "Cả ba đều chỉ dùng để gửi email"], correct: 0, explanation: "SMTP dùng để gửi/chuyển email. POP3 dùng để lấy/tải mail về thiết bị. IMAP dùng để đọc và đồng bộ mailbox với server." },
  { question: "Bạn dùng email trên điện thoại, laptop và webmail, muốn trạng thái đã đọc đồng bộ. Nên dùng gì?", options: ["IMAP", "POP3 cổ điển", "Chỉ SMTP", "DNS A record"], correct: 0, explanation: "IMAP giữ mailbox trên server và đồng bộ trạng thái đọc/xóa/thư mục giữa nhiều thiết bị." },
  { question: "Port 587 thường dùng cho việc gì?", options: ["SMTP submission, client gửi mail có xác thực", "IMAP bảo mật", "POP3 bảo mật", "DNS query"], correct: 0, explanation: "Port 587 thường dùng cho SMTP submission, tức client gửi mail lên server có đăng nhập, thường dùng STARTTLS." },
  { question: "Port nào thường dùng cho IMAPS?", options: ["993", "995", "25", "110"], correct: 0, explanation: "IMAPS là IMAP qua TLS trực tiếp, thường dùng port 993." },
  { question: "Mail server dùng bản ghi DNS nào để tìm server nhận mail cho domain?", options: ["MX", "A duy nhất", "CNAME duy nhất", "PTR duy nhất"], correct: 0, explanation: "MX — Mail Exchange — cho biết mail server nào chịu trách nhiệm nhận email cho một domain." },
  { question: "SMTP có dùng để đọc email không?", options: ["Không, SMTP dùng để gửi/chuyển email", "Có, SMTP đọc mail tốt nhất", "Có, SMTP thay thế IMAP", "Chỉ đọc được khi port 25 đóng"], correct: 0, explanation: "SMTP không dùng để đọc email. Email client dùng POP3 hoặc IMAP để nhận/đọc email." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài Email Protocols!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang DHCP — giao thức giúp thiết bị tự động nhận IP, gateway và DNS khi kết nối mạng.</p>
      <Link to="/phan-7-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.5 — DHCP <ChevronRight size={20} />
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

function HeroEmailVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="SMTP" value="send" color="orange" icon={<Send />} /><MiniCard title="POP3" value="download" color="blue" icon={<Download />} /><MiniCard title="IMAP" value="sync" color="emerald" icon={<RefreshCw />} /></div><EmailFlowDiagram compact /><div className="grid grid-cols-3 gap-3"><MiniCard title="587" value="submission" color="green" icon={<MailPlus />} /><MiniCard title="995" value="POP3S" color="cyan" icon={<Inbox />} /><MiniCard title="993" value="IMAPS" color="purple" icon={<MailOpen />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function ThreeProtocolVisual() {
  const items = [["Gửi email đi", "SMTP", "orange", <Send />], ["Nhận kiểu tải về", "POP3", "blue", <Download />], ["Nhận kiểu đồng bộ", "IMAP", "emerald", <RefreshCw />]];
  return <div className="space-y-3">{items.map(([a, b, color, icon]) => <MiniFlowNode key={b} title={a} desc={b} color={color} icon={icon} />)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono`}>{desc}</p></div></div>;
}

function PortCards({ rows }) {
  return <div className="grid md:grid-cols-3 gap-3">{rows.map(([proto, port, tls, use, color]) => <div key={`${proto}-${port}`} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4`}><p className={`${colorClasses[color].text} font-black`}>{proto}</p><p className="text-white font-mono text-2xl font-black mt-1">{port}</p><p className="text-slate-400 text-xs mt-2">{tls}</p><p className="text-slate-500 text-xs mt-1">{use}</p></div>)}</div>;
}

function Pop3Visual() {
  return <div className="space-y-4"><MiniFlowNode title="Mail Server" desc="mailbox" color="orange" icon={<Server />} /><div className="flex justify-center"><ArrowRight className="text-blue-300 rotate-90" /></div><MiniFlowNode title="Laptop" desc="download mail" color="blue" icon={<HardDrive />} /><div className="bg-blue-500/10 border border-blue-400/40 rounded-2xl p-4 text-blue-300 text-sm">Email chủ yếu nằm trên thiết bị sau khi tải.</div></div>;
}

function ImapVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniNode label="Phone" color="cyan" icon={<Smartphone />} /><MiniNode label="Laptop" color="blue" icon={<HardDrive />} /><MiniNode label="Tablet" color="purple" icon={<Tablet />} /></div><div className="flex justify-center"><RefreshCw className="text-emerald-300" /></div><MiniFlowNode title="Mail Server" desc="central mailbox" color="emerald" icon={<Server />} /><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-emerald-300 text-sm">Nhiều thiết bị đồng bộ cùng một trạng thái.</div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function EmailFlowDiagram({ compact = false }) {
  const cls = compact ? "text-xs p-4" : "text-sm p-5";
  return <div className={`font-mono bg-slate-950 border border-slate-800 rounded-2xl ${cls} space-y-3 overflow-x-auto`}><p className="text-cyan-300">[Sender Mail Client]</p><p className="text-orange-300">        | SMTP port 587</p><p className="text-cyan-300">        v</p><p className="text-orange-300">[Sender Mail Server]</p><p className="text-yellow-300">        | SMTP port 25</p><p className="text-orange-300">        v</p><p className="text-emerald-300">[Receiver Mail Server]</p><p className="text-green-300">        | IMAP 993 hoặc POP3 995</p><p className="text-emerald-300">        v</p><p className="text-cyan-300">[Receiver Mail Client]</p></div>;
}

function Pop3LargeVisual() {
  return <div className="space-y-4 text-center"><MiniFlowNode title="Mail Server" desc="Inbox trên server" color="orange" icon={<Server />} /><ArrowRight className="mx-auto text-blue-300 rotate-90" /><MiniFlowNode title="Laptop" desc="Download về máy" color="blue" icon={<HardDrive />} /><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-blue-300 font-mono text-sm">Email chủ yếu nằm trên Laptop sau khi tải.</div></div>;
}

function ImapLargeVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniNode label="Phone" color="cyan" icon={<Smartphone />} /><MiniNode label="Laptop" color="blue" icon={<HardDrive />} /><MiniNode label="Tablet" color="purple" icon={<Tablet />} /></div><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-3xl p-5 text-center"><Server className="mx-auto text-emerald-300 mb-2" size={36} /><p className="text-white font-black">Mail Server</p><p className="text-emerald-300 font-mono text-sm mt-1">Inbox / Sent / Draft / Trash</p></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">Email nằm trên server, các thiết bị đồng bộ trạng thái.</div></div>;
}

function MxRecordVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Email gửi đến" desc="user@company.com" color="cyan" icon={<Mail />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Tra DNS MX" desc="company.com MX ?" color="purple" icon={<Search />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Mail server nhận" desc="mail.company.com → 203.0.113.50" color="emerald" icon={<Server />} /></div>;
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
