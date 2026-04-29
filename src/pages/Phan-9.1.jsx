import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Bug,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  FileCode2,
  FileWarning,
  Fish,
  Globe2,
  HardDrive,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  MailWarning,
  Network,
  Router,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Skull,
  Terminal,
  UserRound,
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

const attackRows = [
  ["Malware", "Cài mã độc vào máy", "File crack có virus", "red"],
  ["Phishing", "Lừa người dùng cung cấp thông tin", "Email giả ngân hàng", "orange"],
  ["DoS/DDoS", "Làm dịch vụ quá tải", "Dội request vào server", "purple"],
  ["Man-in-the-Middle", "Nghe lén/chèn giữa kết nối", "WiFi giả ở quán cà phê", "cyan"],
  ["Password Attack", "Đoán hoặc đánh cắp mật khẩu", "Brute force tài khoản", "yellow"],
  ["SQL Injection", "Tấn công database qua input", "Chèn lệnh SQL vào form", "blue"],
  ["XSS", "Chèn script vào web", "Mã JavaScript độc hại", "green"],
  ["ARP Spoofing", "Giả mạo trong mạng LAN", "Đánh lừa máy gửi dữ liệu qua attacker", "emerald"],
  ["Ransomware", "Mã hóa dữ liệu để tống tiền", "Máy bị khóa file", "red"],
  ["DNS Spoofing", "Điều hướng sai tên miền", "Gõ đúng domain nhưng vào site giả", "purple"],
];

const vulnerabilityRows = [
  ["Phần mềm", "Website bị lỗi SQL Injection", "blue"],
  ["Hệ điều hành", "Windows/Linux chưa cập nhật bản vá", "orange"],
  ["Cấu hình", "Router dùng mật khẩu mặc định", "purple"],
  ["Con người", "Nhân viên bị lừa nhập mật khẩu", "red"],
  ["Mạng", "WiFi dùng WEP hoặc mật khẩu yếu", "cyan"],
];

const malwareRows = [
  ["Virus", "Lây nhiễm vào file/chương trình", "red"],
  ["Worm", "Tự lan truyền qua mạng", "orange"],
  ["Trojan", "Giả dạng phần mềm bình thường", "purple"],
  ["Spyware", "Theo dõi, đánh cắp thông tin", "cyan"],
  ["Ransomware", "Mã hóa dữ liệu để tống tiền", "red"],
  ["Keylogger", "Ghi lại phím người dùng gõ", "yellow"],
];

const passwordAttackRows = [
  ["Brute Force", "Thử rất nhiều mật khẩu", "red"],
  ["Dictionary Attack", "Thử theo danh sách mật khẩu phổ biến", "orange"],
  ["Credential Stuffing", "Dùng mật khẩu rò rỉ từ dịch vụ khác", "purple"],
  ["Password Spraying", "Thử vài mật khẩu phổ biến trên nhiều tài khoản", "cyan"],
  ["Keylogging", "Ghi lại phím người dùng gõ", "yellow"],
];

const preventionRows = [
  ["Cập nhật hệ thống", "Vá lỗ hổng đã biết trên OS, browser, router, app, plugin", "cyan"],
  ["Mật khẩu mạnh + MFA", "Giảm rủi ro password attack và credential stuffing", "emerald"],
  ["Cẩn thận link/file lạ", "Giảm rủi ro phishing và malware", "orange"],
  ["HTTPS/VPN khi cần", "Giảm nguy cơ nghe lén trên mạng không tin cậy", "blue"],
  ["Phân quyền tối thiểu", "Tài khoản/ứng dụng chỉ có quyền vừa đủ", "purple"],
  ["Sao lưu dữ liệu", "Giảm thiệt hại khi ransomware hoặc phá hoại", "green"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <ShieldAlert className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 9: Bảo mật mạng — Network Security</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 9.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <CyberAttackSection />
        <VulnerabilitySection />
        <ExploitSection />
        <AttackSurfaceSection />
        <RealWorldExamples />
        <OverviewAttackTable />
        <PhishingDiagramSection />
        <MitmDiagramSection />
        <DdosDiagramSection />
        <MalwareSection />
        <PhishingSection />
        <DosDdosSection />
        <MitmSection />
        <PasswordAttackSection />
        <SqlInjectionSection />
        <XssSection />
        <ArpSpoofingSection />
        <PreventionSection />
        <CommonMistakes />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/30 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Layers size={16} /> Network Security — Threats
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Các loại tấn công mạng
            <span className="block text-cyan-400">phổ biến</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Tấn công mạng có thể nhắm vào phần mềm, hệ thống, mạng hoặc con người. Muốn phòng thủ tốt, trước hết cần hiểu kiểu tấn công, điểm yếu bị khai thác và cách giảm rủi ro.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-red-300">Cyber Attack</span> = lợi dụng điểm yếu để gây hại.</p>
            <p><span className="text-orange-300">Vulnerability</span> = lỗ hổng.</p>
            <p><span className="text-cyan-300">Exploit</span> = cách khai thác lỗ hổng.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroSecurityVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu tấn công mạng là gì và vì sao nó xảy ra.",
    "Nhận biết Malware, Phishing, DoS/DDoS, MITM, Password Attack, SQL Injection, XSS, ARP Spoofing.",
    "Hiểu ví dụ thực tế của từng kiểu tấn công.",
    "Nắm tác hại đối với cá nhân, doanh nghiệp và hệ thống mạng.",
    "Biết các nguyên tắc phòng tránh cơ bản.",
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

function CyberAttackSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="red" title="Tấn công mạng là gì?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-red-300">Tấn công mạng</strong> là hành động cố ý khai thác điểm yếu của hệ thống, thiết bị, phần mềm, con người hoặc mạng để gây hại.</p>
            <ConceptCard title="Mục tiêu của attacker" icon={<Skull />} color="red" text="Kẻ tấn công có thể muốn đánh cắp dữ liệu, chiếm tài khoản, làm tê liệt dịch vụ, cài mã độc, tống tiền, theo dõi người dùng hoặc phá hoại hệ thống." code={`Email giả ngân hàng
→ bấm link
→ nhập tài khoản/mật khẩu
→ attacker lấy thông tin đăng nhập`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 grid md:grid-cols-2 gap-3">
            <MiniFlowNode title="Đánh cắp dữ liệu" desc="data theft" color="red" icon={<Database />} />
            <MiniFlowNode title="Chiếm tài khoản" desc="account takeover" color="orange" icon={<KeyRound />} />
            <MiniFlowNode title="Tê liệt dịch vụ" desc="DoS/DDoS" color="purple" icon={<Server />} />
            <MiniFlowNode title="Cài mã độc" desc="malware" color="yellow" icon={<Bug />} />
            <MiniFlowNode title="Tống tiền" desc="ransomware" color="red" icon={<FileWarning />} />
            <MiniFlowNode title="Theo dõi" desc="spyware" color="cyan" icon={<Eye />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function VulnerabilitySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Lỗ hổng là gì?" icon={<AlertTriangle />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Vulnerability = điểm yếu" icon={<AlertTriangle />} color="orange" text="Lỗ hổng là điểm yếu trong hệ thống có thể bị khai thác. Nó có thể nằm ở phần mềm, hệ điều hành, cấu hình, con người hoặc mạng." code={`Nhà có cửa nhưng ổ khóa quá yếu
→ ổ khóa yếu chính là lỗ hổng`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Nơi có lỗ hổng</th><th className="p-4">Ví dụ</th></tr></thead>
            <tbody>
              {vulnerabilityRows.map(([place, example, color], i) => <tr key={place} className={`${i === vulnerabilityRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className={`p-4 font-black ${colorClasses[color].text}`}>{place}</td><td className="p-4 text-slate-300">{example}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ExploitSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="cyan" title="Khai thác lỗ hổng là gì?" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Exploit = tận dụng điểm yếu" icon={<Zap />} color="cyan" text="Exploit là hành động dùng lỗ hổng để thực hiện tấn công. Lỗ hổng là cửa sau không khóa; exploit là hành động đi vào bằng cửa sau." code={`Lỗ hổng: Website không kiểm tra dữ liệu nhập vào
Khai thác: Chèn câu lệnh SQL độc hại
Kết quả: Database bị lộ`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode title="1. Có lỗ hổng" desc="input không kiểm tra" color="orange" icon={<AlertTriangle />} />
            <MiniFlowNode title="2. Attacker khai thác" desc="gửi payload độc hại" color="red" icon={<Skull />} />
            <MiniFlowNode title="3. Hệ thống bị ảnh hưởng" desc="lộ dữ liệu / chiếm quyền" color="purple" icon={<Database />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AttackSurfaceSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Bề mặt tấn công là gì?" icon={<Network />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Attack Surface" icon={<Network />} color="purple" text="Attack Surface là toàn bộ những điểm mà kẻ tấn công có thể thử khai thác. Càng nhiều hệ thống kết nối mạng, bề mặt tấn công càng lớn." code={`Website công khai
Email nhân viên
VPN
WiFi nội bộ
Database server
Laptop nhân viên
Tài khoản cloud
Camera IP
Router`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <AttackSurfaceVisual />
          <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
            Giống căn nhà có nhiều cửa ra vào, cửa sổ, ban công và cổng phụ: càng nhiều điểm mở thì càng cần bảo vệ kỹ.
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Ví dụ thực tế" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Lừa đảo qua điện thoại" icon={<Fish />} color="orange" text="Một người giả danh ngân hàng yêu cầu đọc OTP. Đây là social engineering/phishing: không cần phá hệ thống, chỉ cần lừa con người." code={`“Tài khoản bị khóa, vui lòng đọc mã OTP để xác minh.”
→ Nạn nhân đọc OTP
→ Attacker đăng nhập/giao dịch`} />
        <ConceptCard title="Kẹt xe do quá nhiều xe" icon={<Users />} color="purple" text="Một đường xử lý 1.000 xe/giờ nhưng bị 100.000 xe đổ vào cùng lúc sẽ tắc. DDoS cũng tương tự với server." code={`Rất nhiều máy gửi request
→ server quá tải
→ người dùng thật không truy cập được`} />
      </div>
    </section>
  );
}

function OverviewAttackTable() {
  const [active, setActive] = useState("Phishing");
  const row = attackRows.find(([name]) => name === active) || attackRows[1];
  const [, goal, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="blue" title="Bảng tổng quan các loại tấn công phổ biến" icon={<BarChart3 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {attackRows.slice(0, 8).map(([name, , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={getAttackIcon(active)} color={color} text={`Mục tiêu chính: ${goal}.`} code={`Ví dụ: ${example}`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[820px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Loại tấn công</th><th className="p-4">Mục tiêu chính</th><th className="p-4">Ví dụ dễ hiểu</th></tr></thead>
                <tbody>
                  {attackRows.map(([name, g, ex, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === attackRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{g}</td><td className="p-4 text-green-300">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhishingDiagramSection() {
  return <DiagramSection number="8" color="orange" title="Sơ đồ tấn công Phishing" icon={<Fish />} diagram={<PhishingVisual />} text="Phishing lừa người dùng bấm link, vào website giả và nhập thông tin đăng nhập." />;
}

function MitmDiagramSection() {
  return <DiagramSection number="9" color="cyan" title="Sơ đồ tấn công Man-in-the-Middle" icon={<Eye />} diagram={<MitmVisual />} text="MITM là khi attacker chen vào giữa client và server để nghe lén, sửa đổi hoặc chuyển tiếp dữ liệu." />;
}

function DdosDiagramSection() {
  return <DiagramSection number="10" color="purple" title="Sơ đồ DDoS" icon={<Bot />} diagram={<DdosVisual />} text="DDoS dùng nhiều nguồn phân tán cùng gửi lưu lượng đến mục tiêu khiến server, băng thông hoặc firewall quá tải." />;
}

function DiagramSection({ number, color, title, icon, diagram, text }) {
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        {diagram}
        <div className={`mt-6 ${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 text-sm ${colorClasses[color].text}`}>{text}</div>
      </div>
    </section>
  );
}

function MalwareSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Người dùng tải/mở file lạ", text: "Malware thường bắt đầu từ file đính kèm, phần mềm crack, link lạ hoặc USB nhiễm mã độc.", code: `HoaDon_Thang4.pdf.exe
Game_Crack.zip
Update_Flash_Player.exe`, color: "orange", icon: <FileWarning /> },
    { title: "Malware được chạy", text: "Khi người dùng mở file, chương trình độc hại bắt đầu chạy trên máy.", code: `Process started
Persistence installed`, color: "red", icon: <Bug /> },
    { title: "Chiếm quyền hoặc đánh cắp dữ liệu", text: "Malware có thể đọc file, ghi phím, chụp màn hình, lan truyền hoặc kết nối về máy chủ điều khiển.", code: `Steal browser cookies
Read documents
Keylogging
Connect to C2`, color: "purple", icon: <Eye /> },
    { title: "Phá hoại hoặc tống tiền", text: "Một số mã độc như ransomware mã hóa file rồi đòi tiền chuộc.", code: `Your files are encrypted
Pay ransom to recover`, color: "red", icon: <Skull /> },
  ];
  return <AttackProcessSection number="11" color="red" title="Malware — Mã độc" icon={<Bug />} intro="Malware là phần mềm độc hại có thể đánh cắp, phá hoại hoặc kiểm soát thiết bị." table={malwareRows} steps={steps} step={step} setStep={setStep} />;
}

function PhishingSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Tạo email/tin nhắn giả mạo", text: "Attacker giả danh ngân hàng, công ty, sàn thương mại hoặc bộ phận IT.", code: `Tài khoản của bạn sắp bị khóa
Bấm link để xác minh ngay`, color: "orange", icon: <MailWarning /> },
    { title: "Gửi cho nạn nhân", text: "Thông điệp thường tạo cảm giác gấp, sợ hãi hoặc có lợi ích hấp dẫn.", code: "Urgent / verify now / prize / locked account", color: "yellow", icon: <Fish /> },
    { title: "Nạn nhân bấm link hoặc mở file", text: "Link có thể dẫn đến website giả; file có thể chứa mã độc.", code: `bank-login-secure.example.net
invoice.pdf.exe`, color: "red", icon: <Globe2 /> },
    { title: "Nạn nhân nhập thông tin", text: "Attacker lấy username, password, OTP, session hoặc dữ liệu cá nhân.", code: `username: user@company.com
password: ********
OTP: 123456`, color: "purple", icon: <KeyRound /> },
  ];
  return <AttackProcessOnly number="12" color="orange" title="Phishing — Lừa đảo giả mạo" icon={<Fish />} intro="Phishing đánh vào con người bằng cách giả mạo và gây áp lực tâm lý." steps={steps} step={step} setStep={setStep} extras={<PhishingSigns />} />;
}

function DosDdosSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Điều khiển nhiều bot", text: "DDoS thường dùng nhiều máy bị nhiễm mã độc hoặc thiết bị bị chiếm quyền.", code: "Botnet = nhiều thiết bị bị điều khiển", color: "purple", icon: <Bot /> },
    { title: "Bot gửi request hàng loạt", text: "Các nguồn phân tán cùng gửi lưu lượng đến mục tiêu.", code: `Bot1 → request
Bot2 → request
Bot3 → request`, color: "orange", icon: <Users /> },
    { title: "Server/firewall/băng thông quá tải", text: "Dịch vụ không đủ tài nguyên xử lý lưu lượng bất thường.", code: `CPU high
Bandwidth saturated
Connection table full`, color: "red", icon: <Server /> },
    { title: "Người dùng thật không truy cập được", text: "Mục tiêu là làm dịch vụ chậm hoặc ngừng hoạt động.", code: `Timeout
503 Service Unavailable
Connection reset`, color: "red", icon: <XCircle /> },
  ];
  return <AttackProcessOnly number="13" color="purple" title="DoS/DDoS — Từ chối dịch vụ" icon={<Bot />} intro="DoS/DDoS làm nghẽn dịch vụ bằng cách tạo lượng truy cập khổng lồ. DDoS khác DoS ở chỗ lưu lượng đến từ nhiều nguồn phân tán." steps={steps} step={step} setStep={setStep} />;
}

function MitmSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Attacker đặt mình vào giữa", text: "Ví dụ tạo WiFi giả ở quán cà phê hoặc lừa thiết bị trong LAN gửi dữ liệu qua attacker.", code: "Client → Attacker → Server", color: "cyan", icon: <Eye /> },
    { title: "Client gửi dữ liệu qua attacker", text: "Nạn nhân tưởng đang kết nối trực tiếp đến server.", code: "Client sends request", color: "blue", icon: <Laptop /> },
    { title: "Attacker chuyển tiếp dữ liệu", text: "Attacker có thể chỉ chuyển tiếp để tránh bị phát hiện.", code: "Forward to real server", color: "purple", icon: <ArrowRight /> },
    { title: "Nghe lén hoặc sửa đổi nếu không được bảo vệ", text: "Nếu không có HTTPS/TLS/VPN đúng cách, dữ liệu có thể bị xem hoặc sửa.", code: `Read cookies
Modify content
Capture credentials`, color: "red", icon: <ShieldAlert /> },
  ];
  return <AttackProcessOnly number="14" color="cyan" title="Man-in-the-Middle — Tấn công đứng giữa" icon={<Eye />} intro="MITM là tấn công chen giữa kết nối để nghe lén hoặc sửa dữ liệu." steps={steps} step={step} setStep={setStep} extras={<MitmPrevention />} />;
}

function PasswordAttackSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Chọn tài khoản mục tiêu", text: "Attacker có thể nhắm vào một tài khoản hoặc hàng nghìn tài khoản cùng lúc.", code: `admin@company.com
support@company.com
user list`, color: "yellow", icon: <UserRound /> },
    { title: "Thử mật khẩu", text: "Brute force thử nhiều mật khẩu; dictionary dùng danh sách phổ biến; credential stuffing dùng mật khẩu rò rỉ.", code: `123456
password
admin123
qwerty
ngaysinh`, color: "orange", icon: <KeyRound /> },
    { title: "Nếu không bị giới hạn, thử rất lâu", text: "Không có rate limit, CAPTCHA, MFA hoặc lockout sẽ tăng rủi ro.", code: `No rate limit
No MFA
No alert`, color: "red", icon: <AlertTriangle /> },
    { title: "Đăng nhập được nếu đúng", text: "Khi mật khẩu đúng, attacker chiếm tài khoản.", code: `Login success
Session created`, color: "red", icon: <XCircle /> },
  ];
  return <AttackProcessSection number="15" color="yellow" title="Password Attack — Tấn công mật khẩu" icon={<KeyRound />} intro="Password Attack nhắm vào điểm yếu mật khẩu hoặc thói quen dùng mật khẩu của con người." table={passwordAttackRows} steps={steps} step={step} setStep={setStep} />;
}

function SqlInjectionSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Website nhận dữ liệu từ người dùng", text: "Dữ liệu có thể đến từ form login, ô search, URL parameter hoặc API body.", code: `Username: admin
Password: 123456
Search: laptop`, color: "blue", icon: <Code2 /> },
    { title: "Website đưa input vào truy vấn database", text: "Nếu ghép chuỗi SQL trực tiếp, input có thể làm thay đổi câu truy vấn.", code: "SELECT * FROM users WHERE username = 'input'", color: "purple", icon: <Database /> },
    { title: "Input độc hại thay đổi logic truy vấn", text: "Attacker có thể cố vượt xác thực, đọc dữ liệu hoặc sửa/xóa dữ liệu nếu app yếu.", code: "Không ghép chuỗi SQL trực tiếp với input", color: "red", icon: <ShieldAlert /> },
    { title: "Phòng tránh bằng parameterized queries", text: "Prepared statements tách dữ liệu khỏi câu lệnh SQL.", code: `Use prepared statements
Validate input
Least privilege DB user
Hide detailed DB errors`, color: "green", icon: <ShieldCheck /> },
  ];
  return <AttackProcessOnly number="16" color="blue" title="SQL Injection — Chèn lệnh SQL" icon={<Database />} intro="SQL Injection xảy ra khi dữ liệu đầu vào không an toàn làm thay đổi truy vấn database." steps={steps} step={step} setStep={setStep} />;
}

function XssSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Website cho phép nhập nội dung", text: "Ví dụ phần bình luận, hồ sơ cá nhân, tên sản phẩm hoặc ô tìm kiếm.", code: "Comment: Nội dung người dùng nhập", color: "green", icon: <FileCode2 /> },
    { title: "Attacker nhập script độc hại", text: "Nếu website không xử lý đúng, nội dung độc hại có thể được lưu hoặc phản chiếu lại.", code: "Malicious JavaScript payload", color: "red", icon: <Code2 /> },
    { title: "Người dùng khác mở trang", text: "Trình duyệt nạn nhân tải trang chứa script độc hại.", code: "Victim visits comments page", color: "orange", icon: <UserRound /> },
    { title: "Trình duyệt chạy script", text: "Script có thể đánh cắp session, chuyển hướng, giả giao diện hoặc thao tác thay người dùng.", code: `Steal session
Redirect
Fake login UI`, color: "red", icon: <Skull /> },
    { title: "Phòng tránh", text: "Escape output, sanitize input, CSP, HttpOnly/Secure/SameSite cookies.", code: `Escape output
Sanitize input
Content Security Policy
HttpOnly cookies`, color: "green", icon: <ShieldCheck /> },
  ];
  return <AttackProcessOnly number="17" color="green" title="XSS — Cross-Site Scripting" icon={<FileCode2 />} intro="XSS là tấn công khiến trình duyệt nạn nhân chạy mã độc từ website." steps={steps} step={step} setStep={setStep} />;
}

function ArpSpoofingSection() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Attacker ở cùng LAN/WiFi", text: "ARP Spoofing thường yêu cầu attacker nằm trong cùng mạng cục bộ với nạn nhân.", code: "Victim and attacker on same WiFi/LAN", color: "cyan", icon: <Wifi /> },
    { title: "Attacker gửi ARP giả", text: "Attacker đánh lừa nạn nhân rằng MAC của attacker là MAC của router/gateway.", code: `IP router: 192.168.1.1
Fake MAC: attacker MAC`, color: "orange", icon: <Network /> },
    { title: "Máy nạn nhân cập nhật ARP sai", text: "Bảng ARP bị đầu độc, traffic ra gateway có thể đi qua attacker.", code: "Victim ARP cache poisoned", color: "red", icon: <Database /> },
    { title: "Attacker nghe lén/chuyển tiếp/chặn dữ liệu", text: "Nếu dữ liệu không được mã hóa tốt, rủi ro bị lộ tăng lên.", code: "Victim → Attacker → Router", color: "purple", icon: <Eye /> },
    { title: "Phòng tránh", text: "Dùng HTTPS/VPN, Dynamic ARP Inspection, VLAN, tránh WiFi công cộng cho tác vụ nhạy cảm.", code: `HTTPS
VPN
Dynamic ARP Inspection
VLAN segmentation`, color: "green", icon: <ShieldCheck /> },
  ];
  return <AttackProcessOnly number="18" color="emerald" title="ARP Spoofing — Giả mạo ARP trong LAN" icon={<Router />} intro="ARP Spoofing là tấn công giả mạo trong mạng LAN để chen vào luồng dữ liệu." steps={steps} step={step} setStep={setStep} />;
}

function PreventionSection() {
  const [active, setActive] = useState("Mật khẩu mạnh + MFA");
  const row = preventionRows.find(([name]) => name === active) || preventionRows[1];
  const [, desc, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="emerald" title="Nguyên tắc phòng tránh cơ bản" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {preventionRows.map(([name, , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={<ShieldCheck />} color={color} text={desc} code={getPreventionCode(active)} />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {preventionRows.map(([name, d, c]) => <MiniFlowNode key={name} title={name} desc={d} color={c} icon={<ShieldCheck />} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ bảo mật chỉ là cài antivirus", desc: "Antivirus chỉ là một lớp. Phòng thủ còn cần cập nhật, MFA, backup, phân quyền, kiểm tra cấu hình và đào tạo người dùng.", fix: "Dùng phòng thủ nhiều lớp." },
    { title: "Chỉ bảo vệ server mà bỏ qua con người", desc: "Phishing và social engineering thường đánh vào người dùng thay vì phá kỹ thuật phức tạp.", fix: "Đào tạo nhận diện link/file/email lạ." },
    { title: "Dùng lại mật khẩu", desc: "Credential stuffing tận dụng mật khẩu rò rỉ từ dịch vụ khác để thử đăng nhập dịch vụ mới.", fix: "Mỗi dịch vụ một mật khẩu, dùng password manager." },
    { title: "Bỏ qua cảnh báo HTTPS/certificate", desc: "Cảnh báo chứng chỉ có thể là dấu hiệu MITM hoặc website giả.", fix: "Không bỏ qua cảnh báo khi đăng nhập/tài chính." },
    { title: "Cho database user quá nhiều quyền", desc: "Nếu SQL Injection xảy ra, quyền database quá rộng sẽ làm thiệt hại lớn hơn.", fix: "Áp dụng nguyên tắc least privilege." },
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
              <p>Cyber Attack = hành vi lợi dụng điểm yếu để truy cập, phá hoại hoặc đánh cắp trái phép.</p>
              <p>Vulnerability = lỗ hổng; Exploit = cách khai thác lỗ hổng.</p>
              <p>Attack Surface = toàn bộ điểm có thể bị kẻ xấu nhắm tới.</p>
              <p>Malware = phần mềm độc hại.</p>
              <p>Phishing = giả mạo để lừa người dùng cung cấp thông tin.</p>
              <p>DoS/DDoS = làm dịch vụ quá tải; DDoS đến từ nhiều nguồn.</p>
              <p>MITM = attacker chen giữa client và server.</p>
              <p>Password Attack = đoán, đánh cắp hoặc bẻ khóa mật khẩu.</p>
              <p>SQL Injection = input độc hại làm thay đổi truy vấn database.</p>
              <p>XSS = khiến trình duyệt nạn nhân chạy JavaScript độc hại.</p>
              <p>ARP Spoofing = giả mạo ARP trong LAN để chen vào traffic.</p>
              <p>Phòng tránh: cập nhật, MFA, cẩn thận link/file, HTTPS/VPN, least privilege, backup.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Phishing là gì?", options: ["Lừa người dùng cung cấp thông tin bằng cách giả mạo", "Tấn công làm server quá tải", "Mã hóa dữ liệu để tống tiền", "Chia mạng thành nhiều VLAN"], correct: 0, explanation: "Phishing giả mạo tổ chức/người đáng tin để lừa nạn nhân bấm link, nhập mật khẩu/OTP hoặc mở file độc hại." },
  { question: "DoS và DDoS khác nhau ở điểm nào?", options: ["DoS thường từ một nguồn; DDoS từ nhiều nguồn phân tán", "DoS là malware; DDoS là phishing", "DoS chỉ dùng trong WiFi; DDoS chỉ dùng trong Bluetooth", "Không khác nhau"], correct: 0, explanation: "DoS là từ chối dịch vụ; DDoS là distributed denial of service, tức lưu lượng tấn công đến từ nhiều nguồn." },
  { question: "Lỗ hổng và exploit khác nhau thế nào?", options: ["Lỗ hổng là điểm yếu; exploit là cách tận dụng điểm yếu đó", "Lỗ hổng là firewall; exploit là DNS", "Hai khái niệm hoàn toàn giống nhau", "Exploit là bản vá bảo mật"], correct: 0, explanation: "Vulnerability là điểm yếu có thể bị khai thác. Exploit là kỹ thuật/hành động dùng điểm yếu đó để đạt mục đích tấn công." },
  { question: "MITM là gì?", options: ["Attacker chen giữa hai bên giao tiếp để nghe lén/sửa/chuyển tiếp dữ liệu", "Dùng nhiều bot làm server quá tải", "Chèn SQL vào form", "Mã hóa file để tống tiền"], correct: 0, explanation: "Man-in-the-Middle xảy ra khi attacker đứng giữa client và server, đặc biệt nguy hiểm nếu dữ liệu không được mã hóa đúng." },
  { question: "Cách phòng tránh SQL Injection quan trọng nhất là gì?", options: ["Dùng prepared statements/parameterized queries", "Tắt màn hình máy chủ", "Đổi SSID WiFi", "Dùng mật khẩu WiFi dài hơn"], correct: 0, explanation: "Prepared statements tách câu lệnh SQL khỏi dữ liệu người dùng nhập vào, giúp giảm rủi ro input độc hại thay đổi truy vấn." },
  { question: "Email: “Tài khoản công ty sẽ bị khóa trong 10 phút, bấm link xác minh mật khẩu” có dấu hiệu gì?", options: ["Phishing: tạo áp lực gấp, yêu cầu bấm link và nhập mật khẩu", "DDoS: server bị quá tải", "ARP Spoofing: giả MAC router", "Zigbee mesh"], correct: 0, explanation: "Đây là kịch bản phishing điển hình: tạo cảm giác khẩn cấp, link đáng ngờ, yêu cầu nhập thông tin nhạy cảm." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài tấn công mạng!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo học về mã hóa: symmetric, asymmetric và SSL/TLS — nền tảng để bảo vệ dữ liệu khỏi nghe lén.</p>
      <Link to="/phan-9-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 9.2 — Mã hóa: Symmetric, Asymmetric, SSL/TLS <ChevronRight size={20} />
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

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function HeroSecurityVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="Malware" value="mã độc" color="red" icon={<Bug />} /><MiniCard title="Phishing" value="giả mạo" color="orange" icon={<Fish />} /><MiniCard title="DDoS" value="quá tải" color="purple" icon={<Bot />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-red-300">Vulnerability → Exploit → Impact</p><p className="text-orange-300">Human weakness → Phishing</p><p className="text-cyan-300">Network weakness → MITM/ARP spoof</p><p className="text-green-300">Defense → patch + MFA + least privilege</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="SQLi" value="database" color="blue" icon={<Database />} /><MiniCard title="XSS" value="script" color="green" icon={<FileCode2 />} /><MiniCard title="MITM" value="đứng giữa" color="cyan" icon={<Eye />} /></div></div>;
}

function AttackSurfaceVisual() {
  const items = [["Website", "public", "cyan", <Globe2 />], ["Email", "users", "orange", <MailWarning />], ["VPN", "remote", "purple", <Network />], ["WiFi", "internal", "blue", <Wifi />], ["Database", "data", "green", <Database />], ["Laptop", "endpoint", "red", <Laptop />], ["Cloud", "accounts", "cyan", <Server />], ["Router", "gateway", "yellow", <Router />]];
  return <div className="grid md:grid-cols-2 gap-3">{items.map(([title, value, color, icon]) => <MiniCard key={title} title={title} value={value} color={color} icon={icon} />)}</div>;
}

function getAttackIcon(name) {
  if (name.includes("Malware")) return <Bug />;
  if (name.includes("Phishing")) return <Fish />;
  if (name.includes("DoS")) return <Bot />;
  if (name.includes("Man")) return <Eye />;
  if (name.includes("Password")) return <KeyRound />;
  if (name.includes("SQL")) return <Database />;
  if (name.includes("XSS")) return <FileCode2 />;
  if (name.includes("ARP")) return <Router />;
  if (name.includes("Ransomware")) return <FileWarning />;
  return <ShieldAlert />;
}

function PhishingVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Người dùng" desc="nhận email giả" color="cyan" icon={<UserRound />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Website giả mạo" desc="form đăng nhập giả" color="orange" icon={<Globe2 />} /><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Attacker" desc="lấy username/password" color="red" icon={<Skull />} /></div>;
}

function MitmVisual() {
  return <div className="space-y-4"><div className="grid md:grid-cols-3 gap-3 items-center"><MiniCard title="Client" value="nạn nhân" color="cyan" icon={<Laptop />} /><MiniCard title="Attacker" value="đứng giữa" color="red" icon={<Eye />} /><MiniCard title="Server" value="đích thật" color="green" icon={<Server />} /></div><div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-4 text-cyan-300 whitespace-pre-wrap">Bình thường:
[Client] ---------------- [Server]

Bị MITM:
[Client] ---- [Attacker] ---- [Server]</div></div>;
}

function DdosVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-2 md:grid-cols-5 gap-3">{[1,2,3,4,5].map((n) => <MiniCard key={n} title={`Bot ${n}`} value="request" color="purple" icon={<Bot />} />)}</div><ArrowRight className="mx-auto text-slate-500 rotate-90" /><MiniFlowNode title="Server mục tiêu" desc="quá tải" color="red" icon={<Server />} /></div>;
}

function AttackProcessSection({ number, color, title, icon, intro, table, steps, step, setStep }) {
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8">
        <p className="text-slate-300 leading-relaxed">{intro}</p>
        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Loại</th><th className="p-4">Ý nghĩa</th></tr></thead>
            <tbody>{table.map(([name, desc, c], i) => <tr key={name} className={`${i === table.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}</tbody>
          </table>
        </div>
        <StepPanel steps={steps} step={step} setStep={setStep} />
      </div>
    </section>
  );
}

function AttackProcessOnly({ number, color, title, icon, intro, steps, step, setStep, extras }) {
  return (
    <section className="space-y-6">
      <SectionTitle number={number} color={color} title={title} icon={icon} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8">
        <p className="text-slate-300 leading-relaxed">{intro}</p>
        <StepPanel steps={steps} step={step} setStep={setStep} />
        {extras}
      </div>
    </section>
  );
}

function StepPanel({ steps, step, setStep }) {
  const current = steps[step];
  const c = colorClasses[current.color];
  return <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">{steps.map((s, index) => <button key={s.title} onClick={() => setStep(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${step === index ? `${c.bg} ${c.border}` : index < step ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${step === index ? `${c.solid} text-white` : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < step ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div></div></div>;
}

function PhishingSigns() {
  const signs = [["Thúc ép gấp", "xác minh ngay", "red"], ["Link lạ", "domain gần giống", "orange"], ["Lỗi chính tả", "nội dung bất thường", "yellow"], ["Yêu cầu OTP", "không cung cấp", "red"], ["File đáng ngờ", ".exe/.js/.scr", "purple"], ["Sender lạ", "không đúng domain", "cyan"]];
  return <div className="grid md:grid-cols-3 gap-3">{signs.map(([a,b,c]) => <MiniCard key={a} title={a} value={b} color={c} icon={<AlertTriangle />} />)}</div>;
}

function MitmPrevention() {
  const items = [["Dùng HTTPS", "không bỏ qua cảnh báo certificate", "green"], ["Tránh WiFi lạ", "nhất là tài chính/công việc", "orange"], ["VPN khi cần", "mạng không tin cậy", "cyan"], ["Kiểm tra domain", "đúng website thật", "purple"]];
  return <div className="grid md:grid-cols-2 gap-3">{items.map(([a,b,c]) => <MiniFlowNode key={a} title={a} desc={b} color={c} icon={<ShieldCheck />} />)}</div>;
}

function getPreventionCode(name) {
  const map = {
    "Cập nhật hệ thống": "Windows/macOS/Linux\nTrình duyệt\nRouter\nĐiện thoại\nỨng dụng\nPlugin website",
    "Mật khẩu mạnh + MFA": "Mật khẩu dài\nKhông dùng lại\nKhông chứa thông tin cá nhân\nBật 2FA/MFA",
    "Cẩn thận link/file lạ": "Không vội bấm link rút gọn lạ\nKhông mở .exe/.scr/.bat/.js đáng ngờ\nKhông nhập OTP vào trang lạ",
    "HTTPS/VPN khi cần": "HTTPS bảo vệ browser ↔ website\nVPN hỗ trợ khi dùng mạng không tin cậy\nKhông bỏ qua cảnh báo chứng chỉ",
    "Phân quyền tối thiểu": "User không cần admin toàn hệ thống\nApp chỉ xin quyền cần thiết\nDB user không nên có quyền DROP toàn bộ database",
    "Sao lưu dữ liệu": "Backup định kỳ\nKiểm tra khả năng restore\nKhông để backup luôn online cùng máy chính",
  };
  return map[name] || "Defense in depth";
}
