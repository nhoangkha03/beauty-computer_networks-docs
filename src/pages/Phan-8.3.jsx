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
  FileKey,
  Globe2,
  Home,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Network,
  Radio,
  RefreshCw,
  Router,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Terminal,
  Unlock,
  UserCheck,
  Users,
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

const securityRows = [
  ["WEP", "Rất yếu", "RC4", "Không", "Dễ bị bẻ khóa", "red"],
  ["WPA", "Yếu / cũ", "TKIP", "Không nên", "Chỉ là bước chuyển tiếp", "orange"],
  ["WPA2", "Tốt", "AES/CCMP", "Có", "Nên dùng với AES và mật khẩu mạnh", "cyan"],
  ["WPA3", "Rất tốt", "SAE, mã hóa mạnh hơn", "Nên dùng nếu thiết bị hỗ trợ", "Bảo vệ tốt hơn trước dò mật khẩu", "emerald"],
];

const recommendedRows = [
  ["Security", "WPA2-Personal AES hoặc WPA3-Personal", "Bảo mật tốt", "emerald"],
  ["Password", "Mạnh, khó đoán", "Chống dò mật khẩu", "cyan"],
  ["WPS", "Tắt", "WPS từng có nhiều rủi ro bảo mật", "red"],
  ["Guest Network", "Bật nếu có khách", "Tách khách khỏi mạng chính", "purple"],
  ["Admin Password", "Đổi khỏi mặc định", "Tránh bị đăng nhập cấu hình", "orange"],
  ["Firmware", "Cập nhật định kỳ", "Vá lỗi bảo mật", "blue"],
];

const commandTabs = {
  windows: {
    title: "Windows",
    color: "blue",
    icon: <Terminal />,
    commands: [
      ["Xem WiFi đang kết nối", "netsh wlan show interfaces"],
      ["Xem mạng xung quanh và kiểu bảo mật", "netsh wlan show networks mode=bssid"],
      ["Thông tin cần nhìn", "Authentication : WPA2-Personal\nEncryption     : CCMP"],
    ],
  },
  linux: {
    title: "Linux",
    color: "green",
    icon: <Code2 />,
    commands: [
      ["Liệt kê mạng WiFi", "nmcli dev wifi list"],
      ["Ví dụ kết quả", "SSID          MODE   CHAN  RATE        SIGNAL  SECURITY\nKha_Home_5G   Infra  36    540 Mbit/s  85      WPA2\nCafe_Free     Infra  6     130 Mbit/s  60      --"],
    ],
  },
  macos: {
    title: "macOS",
    color: "purple",
    icon: <Laptop />,
    commands: [
      ["Xem WiFi hiện tại", "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I"],
      ["Quét mạng xung quanh", "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s"],
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
              <ShieldCheck className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 8: Mạng không dây — Wireless</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 8.3</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyWifiSecurity />
        <PasswordEncryptionSection />
        <WepSection />
        <WpaSection />
        <Wpa2Section />
        <Wpa3Section />
        <RealWorldExamples />
        <SecurityComparisonTable />
        <EncryptedWifiDiagram />
        <OpenVsEncryptedSection />
        <SecureConnectionProcess />
        <PersonalEnterpriseSection />
        <HomeConfigGuide />
        <SecurityMistakes />
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
            <Layers size={16} /> Wireless Security
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Bảo mật WiFi
            <span className="block text-cyan-400">WEP, WPA, WPA2, WPA3</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            WiFi cần bảo mật vì sóng radio lan ra môi trường xung quanh. Chuẩn bảo mật tốt giúp kiểm soát ai được vào mạng và mã hóa dữ liệu giữa thiết bị với router.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-red-300">WEP</span> = cũ, yếu, không dùng.</p>
            <p><span className="text-cyan-300">WPA2-AES</span> = phổ biến, vẫn tốt nếu mật khẩu mạnh.</p>
            <p><span className="text-emerald-300">WPA3</span> = mới hơn, chống dò mật khẩu tốt hơn.</p>
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
    "Hiểu vì sao WiFi cần bảo mật.",
    "Phân biệt WEP, WPA, WPA2 và WPA3.",
    "Biết vì sao WEP không còn an toàn và không nên dùng.",
    "Hiểu vì sao WPA2 vẫn phổ biến hiện nay.",
    "Hiểu vì sao WPA3 an toàn hơn, nhất là với mật khẩu yếu và mạng công cộng.",
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

function WhyWifiSecurity() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="red" title="Vì sao WiFi cần bảo mật?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>WiFi truyền dữ liệu bằng <strong className="text-cyan-300">sóng radio</strong>. Sóng này không nằm gọn trong dây cáp mà có thể lan ra ngoài phòng, ngoài nhà, thậm chí sang hàng xóm.</p>
            <ConceptCard title="Không bảo mật = rủi ro lớn" icon={<Unlock />} color="red" text="Người ngoài có thể kết nối trái phép, dùng ké Internet, nghe lén dữ liệu, tấn công thiết bị nội bộ hoặc giả mạo WiFi để lừa người dùng." code={`Kết nối trái phép
Dùng ké Internet
Nghe lén dữ liệu
Tấn công mạng nội bộ
Giả mạo WiFi`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <WifiSignalLeakVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PasswordEncryptionSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="cyan" title="Mật khẩu WiFi không chỉ để chặn người lạ" icon={<KeyRound />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mật khẩu còn liên quan đến mã hóa" icon={<FileKey />} color="cyan" text="Mật khẩu WiFi giúp kiểm soát truy cập và hỗ trợ tạo khóa mã hóa, để dữ liệu giữa thiết bị và router khó bị đọc trộm hơn." code="Điện thoại  ~~~ dữ liệu đã mã hóa ~~~  Router WiFi" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <EnvelopeVisual />
          <div className="mt-5 bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-sm text-cyan-300">
            Không mã hóa giống gửi bưu thiếp; có mã hóa giống bỏ thư vào phong bì khóa kín.
          </div>
        </div>
      </div>
    </section>
  );
}

function WepSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="red" title="WEP là chuẩn bảo mật WiFi đời cũ" icon={<Unlock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Wired Equivalent Privacy" icon={<XCircle />} color="red" text="WEP là chuẩn rất cũ và hiện nay không còn an toàn. Cơ chế mã hóa yếu và có thể bị bẻ khóa rất nhanh bằng công cụ phổ biến." code={`WEP = ổ khóa cũ
Nhìn vẫn là ổ khóa
Nhưng kẻ xấu có thể mở nhanh`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <MiniFlowNode title="Mã hóa yếu" desc="RC4, thiết kế cũ" color="red" icon={<Unlock />} />
          <MiniFlowNode title="Dễ bị bẻ khóa" desc="Không phù hợp mạng hiện đại" color="orange" icon={<ShieldAlert />} />
          <MiniFlowNode title="Khuyến nghị" desc="Không sử dụng" color="red" icon={<XCircle />} />
        </div>
      </div>
    </section>
  );
}

function WpaSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="WPA là bản thay thế tạm thời cho WEP" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Wi-Fi Protected Access" icon={<ShieldCheck />} color="orange" text="WPA ra đời để thay thế WEP khi WEP bị phát hiện quá yếu. WPA an toàn hơn WEP nhưng vẫn là chuẩn chuyển tiếp, hiện nay không nên ưu tiên nếu có WPA2 hoặc WPA3." code={`WPA > WEP
Nhưng WPA vẫn cũ
Nên thay bằng WPA2/WPA3`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <TimelineVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Wpa2Section() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="WPA2 là chuẩn phổ biến nhất trong nhiều năm" icon={<Lock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="WPA2-Personal / WPA2-PSK / AES" icon={<Lock />} color="cyan" text="WPA2 thường dùng AES/CCMP, an toàn hơn nhiều so với WEP và WPA cũ. WPA2 vẫn rất phổ biến và an toàn nếu dùng AES cùng mật khẩu đủ mạnh." code={`WPA2-Personal
WPA2-PSK
WPA2/WPA3-Personal
AES/CCMP`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
          <MiniFlowNode title="Personal" desc="Dùng mật khẩu chung" color="cyan" icon={<Users />} />
          <MiniFlowNode title="PSK" desc="Pre-Shared Key" color="blue" icon={<KeyRound />} />
          <MiniFlowNode title="AES/CCMP" desc="Mã hóa mạnh" color="emerald" icon={<ShieldCheck />} />
        </div>
      </div>
    </section>
  );
}

function Wpa3Section() {
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="emerald" title="WPA3 là chuẩn mới, an toàn hơn WPA2" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="WPA3-Personal và SAE" icon={<ShieldCheck />} color="emerald" text="WPA3 cải thiện bảo mật, đặc biệt chống dò mật khẩu ngoại tuyến và an toàn hơn trong nhiều tình huống. WPA3-Personal dùng SAE: Simultaneous Authentication of Equals." code={`SAE = bắt tay bảo mật hơn
Không chỉ hỏi mật khẩu đúng không
Mà còn chống thu thập rồi dò mật khẩu hàng loạt tốt hơn`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 grid md:grid-cols-2 gap-3">
            <MiniFlowNode title="Chống dò mật khẩu tốt hơn" desc="đặc biệt khi mật khẩu yếu" color="emerald" icon={<ShieldCheck />} />
            <MiniFlowNode title="Mạng công cộng an toàn hơn" desc="bảo vệ tốt hơn" color="green" icon={<Wifi />} />
            <MiniFlowNode title="SAE" desc="xác thực hiện đại hơn" color="cyan" icon={<FileKey />} />
            <MiniFlowNode title="Thiết bị phải hỗ trợ" desc="cần router + client" color="orange" icon={<Router />} />
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
        <ConceptCard title="Ổ khóa cửa nhà" icon={<Lock />} color="green" text="Các chuẩn bảo mật WiFi giống các đời ổ khóa: WEP là khóa cũ dễ mở, WPA là khóa cải tiến nhưng lỗi thời, WPA2 là khóa tốt phổ biến, WPA3 là khóa đời mới chống phá tốt hơn." code={`WEP  = ổ khóa cũ
WPA  = ổ khóa cải tiến nhưng cũ
WPA2 = ổ khóa tốt
WPA3 = khóa đời mới`} />
        <ConceptCard title="Gửi thư" icon={<FileKey />} color="purple" text="Open WiFi giống gửi thư không phong bì. WEP giống phong bì mỏng dễ bóc. WPA2 giống phong bì chắc có khóa tốt. WPA3 giống phong bì chắc hơn, chống thử khóa hàng loạt tốt hơn." code={`Open: ai thấy cũng đọc dễ hơn
WPA2/WPA3: dữ liệu đã mã hóa`} />
      </div>
    </section>
  );
}

function SecurityComparisonTable() {
  const [active, setActive] = useState("WPA3");
  const row = securityRows.find(([name]) => name === active) || securityRows[3];
  const [, level, tech, shouldUse, note, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="blue" title="Bảng so sánh WEP, WPA, WPA2, WPA3" icon={<Database />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {securityRows.map(([name, , , , , c]) => <ChoiceButton key={name} active={active === name} onClick={() => setActive(name)} color={c}>{name}</ChoiceButton>)}
            </div>
            <ConceptCard title={active} icon={active === "WEP" || active === "WPA" ? <Unlock /> : <Lock />} color={color} text={`Mức độ an toàn: ${level}. Công nghệ chính: ${tech}. Có nên dùng hiện nay: ${shouldUse}.`} code={note} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[820px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Chuẩn</th><th className="p-4">Mức độ an toàn</th><th className="p-4">Công nghệ chính</th><th className="p-4">Có nên dùng?</th><th className="p-4">Ghi chú</th></tr></thead>
                <tbody>
                  {securityRows.map(([name, lvl, tec, use, n, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === securityRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{lvl}</td><td className="p-4 text-green-300 font-mono">{tec}</td><td className="p-4 text-slate-300">{use}</td><td className="p-4 text-slate-300">{n}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EncryptedWifiDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="emerald" title="Sơ đồ WiFi có mã hóa" icon={<Lock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <EncryptedVisual />
        <div className="mt-6 bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-sm text-emerald-300">
          Người ngoài có thể bắt được sóng, nhưng nếu WPA2/WPA3 được cấu hình tốt thì nội dung sẽ khó đọc.
        </div>
      </div>
    </section>
  );
}

function OpenVsEncryptedSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="red" title="Mạng Open và mạng WPA2/WPA3" icon={<Unlock />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Mạng Open" icon={<Unlock />} color="red" text="Mạng mở không yêu cầu mật khẩu và dữ liệu WiFi dễ bị nghe lén hơn. Một số trang HTTPS vẫn mã hóa đầu cuối, nhưng lớp WiFi vẫn không bảo vệ tốt." code="Client ~~~~~ dữ liệu dễ bị nghe lén hơn ~~~~~ AP" />
        <ConceptCard title="Mạng WPA2/WPA3" icon={<Lock />} color="emerald" text="Mạng có WPA2/WPA3 mã hóa frame WiFi giữa client và AP. Bạn vẫn nên dùng website HTTPS để bảo vệ dữ liệu từ trình duyệt đến server." code={`Client ~~~~~ dữ liệu đã mã hóa ~~~~~ AP
Browser ===== HTTPS ===== Web Server`} />
      </div>
    </section>
  );
}

function SecureConnectionProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Router phát SSID và thông tin bảo mật", text: "AP phát thông tin mạng để thiết bị nhìn thấy trong danh sách WiFi.", code: `SSID: Kha_Home_5G
Security: WPA2-Personal AES
Band: 5GHz
Standard: 802.11ac/ax`, color: "cyan", icon: <Wifi /> },
    { title: "Thiết bị chọn mạng", text: "Người dùng chọn SSID muốn kết nối.", code: "Kha_Home_5G", color: "blue", icon: <Eye /> },
    { title: "Nhập mật khẩu WiFi", text: "Mật khẩu nên đủ dài và khó đoán. Tránh 12345678, password, khach123, 88888888.", code: `Kha@Wifi2026!
KhaHome@2026-Wifi!
CafeBlue_47@Secure`, color: "orange", icon: <KeyRound /> },
    { title: "Thiết bị và router xác thực", text: "Hai bên kiểm tra thiết bị có biết đúng mật khẩu không. Mật khẩu không nên được truyền thẳng dạng đọc được qua không khí.", code: `WPA2-Personal nổi bật với 4-Way Handshake
→ cùng chứng minh biết mật khẩu
→ cùng tạo khóa mã hóa`, color: "purple", icon: <RefreshCw /> },
    { title: "Tạo khóa mã hóa phiên", text: "Sau khi xác thực thành công, mỗi thiết bị có khóa mã hóa riêng cho phiên kết nối.", code: `Phone A: khóa riêng
Laptop B: khóa riêng
Smart TV C: khóa riêng`, color: "green", icon: <FileKey /> },
    { title: "Thiết bị nhận IP", text: "Bảo mật WiFi chỉ giúp vào lớp kết nối không dây. Muốn truy cập Internet, thiết bị vẫn cần IP, gateway và DNS.", code: `IP Address: 192.168.1.25
Gateway: 192.168.1.1
DNS: 8.8.8.8`, color: "cyan", icon: <Network /> },
    { title: "Dữ liệu truyền qua WiFi dưới dạng mã hóa", text: "Laptop mã hóa frame WiFi, gửi qua sóng radio. Router/AP nhận và giải mã lớp WiFi rồi gửi tiếp ra Internet.", code: "Laptop → encrypted WiFi frame → Router/AP → Internet", color: "emerald", icon: <Lock /> },
  ];
  return <StepSection number="12" color="cyan" title="Cơ chế kết nối WiFi có bảo mật" icon={<ShieldCheck />} steps={steps} step={step} setStep={setStep} />;
}

function PersonalEnterpriseSection() {
  const [mode, setMode] = useState("personal");
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="purple" title="WPA2/WPA3 Personal và Enterprise" icon={<Users />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "personal" ? "Personal" : "Enterprise"} icon={mode === "personal" ? <Users /> : <UserCheck />} color={mode === "personal" ? "cyan" : "emerald"} text={mode === "personal" ? "Dùng một mật khẩu chung cho nhiều người. Phù hợp gia đình, quán cà phê, văn phòng nhỏ." : "Mỗi người có tài khoản riêng. Phù hợp công ty, trường học, tổ chức lớn, thường dùng RADIUS."} code={mode === "personal" ? `SSID: Kha_Home_5G
Password: Kha@Wifi2026!

Ưu: dễ cấu hình
Nhược: nhiều người biết chung một mật khẩu` : `Username: hoangkha
Password: ********
Authentication Server: RADIUS

Ưu: thu hồi quyền từng người
Nhược: cấu hình phức tạp hơn`} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "personal"} onClick={() => setMode("personal")} color="cyan">Personal</ChoiceButton>
              <ChoiceButton active={mode === "enterprise"} onClick={() => setMode("enterprise")} color="emerald">Enterprise</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "personal" ? <PersonalVisual /> : <EnterpriseVisual />}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeConfigGuide() {
  const [active, setActive] = useState("Security");
  const row = recommendedRows.find(([name]) => name === active) || recommendedRows[0];
  const [, shouldDo, why, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="emerald" title="Cấu hình khuyến nghị cho WiFi gia đình" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title={active} icon={<ShieldCheck />} color={color} text={`Nên làm: ${shouldDo}. Vì sao: ${why}.`} code={`SSID: Kha_Home_5G
Security: WPA2-Personal AES hoặc WPA3-Personal
Password: KhaHome@2026-Wifi!
WPS: Off
Guest Network: On nếu có khách
Admin Password: đổi khỏi mặc định
Firmware: cập nhật định kỳ`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Mục</th><th className="p-4">Nên làm</th><th className="p-4">Vì sao</th></tr></thead>
                <tbody>
                  {recommendedRows.map(([name, doIt, reason, c], i) => <tr key={name} onClick={() => setActive(name)} className={`${i === recommendedRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{name}</td><td className="p-4 text-slate-300">{doIt}</td><td className="p-4 text-slate-300">{reason}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityMistakes() {
  const mistakes = [
    ["Mật khẩu quá yếu", "12345678, iloveyou, abcdefgh, wifi123456 dễ bị đoán hoặc dò.", "red", <KeyRound />],
    ["Dùng WEP vì thiết bị cũ", "Không nên hạ bảo mật cả mạng chỉ vì một thiết bị quá cũ.", "red", <Unlock />],
    ["Cho khách dùng WiFi chính", "Khách có thể nhìn thấy máy in, NAS, camera, máy tính chia sẻ file hoặc IoT.", "orange", <Users />],
    ["Không đổi mật khẩu quản trị router", "Đổi mật khẩu WiFi chưa đủ; tài khoản quản trị router cũng cần đổi khỏi mặc định.", "purple", <Router />],
    ["Bật WPS", "WPS tiện nhưng từng có nhiều rủi ro bảo mật; không cần thì nên tắt.", "yellow", <AlertTriangle />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="red" title="Các lỗi bảo mật WiFi phổ biến" icon={<ShieldAlert />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map(([title, desc, color, icon]) => <div key={title} className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}><div className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>{React.cloneElement(icon, { size: 24 })}</div><h3 className="text-white font-black mb-2">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{desc}</p></div>)}
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
      <SectionTitle number="16" color="green" title="Lệnh kiểm tra bảo mật WiFi" icon={<Terminal />} />
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

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ WEP vẫn ổn vì có mật khẩu", desc: "WEP có mật khẩu nhưng cơ chế bảo mật quá cũ và yếu, không còn phù hợp.", fix: "Không dùng WEP." },
    { title: "Chọn WPA/WPA2 Mixed với TKIP mà không cần thiết", desc: "TKIP là cơ chế cũ. Nếu có thể, ưu tiên WPA2-AES hoặc WPA3.", fix: "Dùng AES/CCMP." },
    { title: "Dùng WPA3 nhưng mật khẩu vẫn quá yếu", desc: "WPA3 cải thiện chống dò mật khẩu nhưng không thay thế hoàn toàn việc đặt mật khẩu tốt.", fix: "Mật khẩu dài, khó đoán, không dùng thông tin cá nhân." },
    { title: "Không tách mạng khách", desc: "Khách vào WiFi chính có thể tiếp cận thiết bị nội bộ nếu router không cách ly tốt.", fix: "Bật Guest Network và client isolation nếu có." },
    { title: "Tưởng WiFi có WPA2/WPA3 thì không cần HTTPS", desc: "WiFi bảo vệ đoạn client đến AP; HTTPS bảo vệ từ trình duyệt đến web server.", fix: "Vẫn ưu tiên HTTPS, nhất là ở WiFi công cộng." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">18</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>WiFi cần bảo mật vì sóng radio lan ra môi trường xung quanh.</p>
              <p>Mật khẩu WiFi giúp kiểm soát truy cập và hỗ trợ mã hóa.</p>
              <p>WEP là chuẩn cũ, yếu, không nên dùng.</p>
              <p>WPA an toàn hơn WEP nhưng vẫn cũ.</p>
              <p>WPA2 dùng AES/CCMP rất phổ biến và vẫn tốt nếu mật khẩu mạnh.</p>
              <p>WPA3 mới hơn, dùng SAE và chống dò mật khẩu tốt hơn.</p>
              <p>Personal dùng mật khẩu chung.</p>
              <p>Enterprise dùng tài khoản riêng và thường có RADIUS.</p>
              <p>Nên dùng WPA2-AES hoặc WPA3-Personal cho WiFi gia đình.</p>
              <p>Không nên dùng Open, WEP, WPA only hoặc TKIP.</p>
              <p>Nên tắt WPS nếu không cần.</p>
              <p>Nên bật Guest Network cho khách.</p>
              <p>Vẫn nên dùng HTTPS kể cả khi WiFi đã có WPA2/WPA3.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Chuẩn bảo mật WiFi nào không nên dùng vì quá yếu?", options: ["WEP", "WPA3", "WPA2-AES", "WPA2-Personal"], correct: 0, explanation: "WEP là chuẩn đời cũ, cơ chế bảo mật yếu và không nên dùng trong mạng hiện đại." },
  { question: "Mật khẩu WiFi ngoài việc chặn người lạ còn có vai trò gì?", options: ["Hỗ trợ tạo khóa mã hóa dữ liệu giữa client và router/AP", "Tự động tăng tốc độ Internet", "Thay thế địa chỉ IP", "Thay thế DNS"], correct: 0, explanation: "Mật khẩu WiFi không chỉ để kiểm soát ai được vào mạng mà còn tham gia quá trình xác thực và tạo khóa mã hóa phiên kết nối." },
  { question: "WPA2 nên dùng với công nghệ mã hóa nào?", options: ["AES/CCMP", "WEP/RC4", "TKIP cũ", "Không mã hóa"], correct: 0, explanation: "WPA2-AES/CCMP là lựa chọn phổ biến và an toàn hơn TKIP/WEP." },
  { question: "WPA3-Personal nổi bật với cơ chế nào?", options: ["SAE", "APIPA", "SNMP Trap", "DHCP Discover"], correct: 0, explanation: "WPA3-Personal dùng SAE — Simultaneous Authentication of Equals — giúp chống dò mật khẩu tốt hơn." },
  { question: "Personal và Enterprise khác nhau thế nào?", options: ["Personal dùng mật khẩu chung; Enterprise dùng tài khoản riêng", "Personal chỉ dùng dây; Enterprise chỉ dùng Bluetooth", "Personal không có mật khẩu; Enterprise không có xác thực", "Không khác nhau"], correct: 0, explanation: "Personal phù hợp mạng nhỏ với mật khẩu chung; Enterprise phù hợp tổ chức lớn với tài khoản riêng và thường dùng RADIUS." },
  { question: "Cấu hình nào phù hợp cho quán cà phê có cả thiết bị mới và cũ?", options: ["WPA2/WPA3 Mixed hoặc WPA2-AES, mật khẩu mạnh, Guest Network, tách mạng khách", "WEP vì dễ nhớ", "Open WiFi hoàn toàn", "WPA only với TKIP"], correct: 0, explanation: "Quán cà phê cần cân bằng tương thích và bảo mật: WPA2/WPA3 mixed hoặc WPA2-AES, mật khẩu tốt, mạng khách và cách ly khỏi mạng nội bộ." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài bảo mật WiFi!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang Bluetooth & Zigbee — các công nghệ không dây tầm ngắn dùng nhiều trong thiết bị cá nhân và IoT.</p>
      <Link to="/phan-8-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 8.4 — Bluetooth & Zigbee <ChevronRight size={20} />
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

function HeroSecurityVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-4 gap-2"><MiniCard title="WEP" value="yếu" color="red" icon={<Unlock />} /><MiniCard title="WPA" value="cũ" color="orange" icon={<ShieldAlert />} /><MiniCard title="WPA2" value="AES" color="cyan" icon={<Lock />} /><MiniCard title="WPA3" value="SAE" color="emerald" icon={<ShieldCheck />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Client ~~~ encrypted frame ~~~ AP</p><p className="text-green-300">Password → authentication + encryption keys</p><p className="text-red-300">Avoid: Open / WEP / WPA only / TKIP</p><p className="text-emerald-300">Prefer: WPA2-AES or WPA3</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="Guest" value="tách mạng" color="purple" icon={<Users />} /><MiniCard title="WPS" value="tắt" color="red" icon={<XCircle />} /><MiniCard title="HTTPS" value="vẫn cần" color="green" icon={<Globe2 />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function WifiSignalLeakVisual() {
  return <div className="space-y-4"><div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 text-center"><Router className="mx-auto text-cyan-300 mb-2" size={40} /><p className="text-white font-black">Router WiFi trong nhà</p><p className="text-cyan-300 font-mono text-sm">~~~~~ sóng lan ra xung quanh ~~~~~</p></div><div className="grid md:grid-cols-2 gap-3"><MiniCard title="Ngoài nhà" value="vẫn bắt được sóng" color="orange" icon={<Home />} /><MiniCard title="Hàng xóm" value="có thể thấy SSID" color="red" icon={<Eye />} /><MiniCard title="Nghe lén" value="rủi ro nếu yếu" color="red" icon={<ShieldAlert />} /><MiniCard title="Giả mạo" value="evil twin" color="purple" icon={<Wifi />} /></div></div>;
}

function EnvelopeVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Không mã hóa" desc="Bưu thiếp: ai thấy cũng dễ đọc" color="red" icon={<Unlock />} /><MiniFlowNode title="Có mã hóa" desc="Phong bì khóa kín: khó đọc nội dung" color="emerald" icon={<Lock />} /><div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">Phone ~~~ x7A@9qL... ~~~ Router</div></div>;
}

function TimelineVisual() {
  const steps = [["WEP", "yếu", "red"], ["WPA", "chuyển tiếp", "orange"], ["WPA2", "phổ biến", "cyan"], ["WPA3", "mới hơn", "emerald"]];
  return <div className="space-y-3">{steps.map(([name, desc, color], i) => <div key={name} className="flex items-center gap-3"><div className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex-1`}><p className={`${colorClasses[color].text} font-black`}>{name}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>{i < steps.length - 1 && <ArrowRight className="text-slate-600" />}</div>)}</div>;
}

function EncryptedVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Điện thoại" desc="mã hóa frame WiFi" color="cyan" icon={<Smartphone />} /><div className="text-center font-mono text-emerald-300 bg-slate-950 border border-slate-800 rounded-2xl p-4">Dữ liệu đã mã hóa: “x7A@9qL...”</div><MiniFlowNode title="Router WiFi" desc="giải mã lớp WiFi, gửi tiếp ra Internet" color="emerald" icon={<Router />} /><MiniFlowNode title="Internet" desc="nên dùng thêm HTTPS" color="green" icon={<Globe2 />} /></div>;
}

function PersonalVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Một mật khẩu chung" desc="Kha@Wifi2026!" color="cyan" icon={<KeyRound />} /><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Phone" value="cùng pass" color="green" icon={<Smartphone />} /><MiniCard title="Laptop" value="cùng pass" color="blue" icon={<Laptop />} /><MiniCard title="TV" value="cùng pass" color="purple" icon={<Wifi />} /></div><div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-cyan-300 text-sm">Dễ dùng, nhưng khi muốn thu hồi một người thường phải đổi mật khẩu cả mạng.</div></div>;
}

function EnterpriseVisual() {
  return <div className="space-y-4"><MiniFlowNode title="Mỗi người một tài khoản" desc="username/password riêng" color="emerald" icon={<UserCheck />} /><MiniFlowNode title="RADIUS Server" desc="xác thực tập trung" color="purple" icon={<Server />} /><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-emerald-300 text-sm">Phù hợp công ty/trường học vì có thể thu hồi quyền từng người mà không đổi mật khẩu chung.</div></div>;
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
