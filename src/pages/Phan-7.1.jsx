import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Database,
  FileText,
  Globe2,
  HardDrive,
  Layers,
  Mail,
  Network,
  RefreshCw,
  Route,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
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

const recordRows = [
  ["A", "Address Record", "Trỏ domain đến IPv4", "example.com → 93.184.216.34", "emerald"],
  ["AAAA", "IPv6 Address Record", "Trỏ domain đến IPv6", "example.com → 2606:...", "cyan"],
  ["CNAME", "Canonical Name", "Tạo bí danh cho domain", "www → example.com", "purple"],
  ["MX", "Mail Exchange", "Chỉ định mail server", "Email của domain", "orange"],
  ["TXT", "Text Record", "Lưu text, xác minh domain, SPF/DKIM", "Chống giả mạo email", "yellow"],
  ["NS", "Name Server", "Chỉ định DNS server của domain", "ns1.example.com", "blue"],
  ["PTR", "Pointer Record", "Reverse DNS: IP → domain", "93.184.216.34 → example.com", "green"],
];

const resolverRows = [
  ["DNS của nhà mạng", "Do ISP cung cấp", "Router hoặc modem thường dùng mặc định"],
  ["Google DNS", "8.8.8.8 / 8.8.4.4", "Resolver public phổ biến"],
  ["Cloudflare DNS", "1.1.1.1 / 1.0.0.1", "Resolver public ưu tiên tốc độ và riêng tư"],
  ["DNS nội bộ", "Do công ty/trường cấu hình", "Dùng cho hệ thống nội bộ"],
];

const commandTabs = {
  windows: {
    title: "Windows — nslookup & ipconfig",
    icon: <Terminal />,
    color: "blue",
    commands: [
      ["Tra IP cơ bản", "nslookup google.com"],
      ["Chỉ định DNS server", "nslookup google.com 8.8.8.8"],
      ["Tra bản ghi MX", "nslookup -type=mx google.com"],
      ["Tra bản ghi TXT", "nslookup -type=txt google.com"],
      ["Xem DNS cache", "ipconfig /displaydns"],
      ["Xóa DNS cache", "ipconfig /flushdns"],
    ],
  },
  maclinux: {
    title: "Linux/macOS — dig & host",
    icon: <Code2 />,
    color: "green",
    commands: [
      ["Tra bản ghi A", "dig google.com A"],
      ["Tra bản ghi AAAA", "dig google.com AAAA"],
      ["Tra mail server", "dig google.com MX"],
      ["Tra TXT", "dig google.com TXT"],
      ["Xem đường đi từ root", "dig +trace example.com"],
      ["Dùng host", "host -t MX google.com"],
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
              <Globe2 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyDns />
        <DomainNameSection />
        <ResolverSection />
        <DnsHierarchy />
        <RealWorldAnalogies />
        <DnsLookupInteractive />
        <DnsFlowDiagramSection />
        <RecordTypes />
        <CacheAndTtl />
        <UdpTcpDns />
        <CommandPractice />
        <TechnicalWalkthrough />
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
            <Layers size={16} /> Mở đầu Phần 7 — Application Layer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            DNS
            <span className="block text-cyan-400">Hệ thống phân giải tên miền</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            DNS giúp biến tên dễ nhớ như <strong className="text-white">google.com</strong> thành địa chỉ IP để máy tính có thể gửi dữ liệu qua mạng.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">DNS</span> = Domain Name System.</p>
            <p><span className="text-emerald-300">Tên miền</span> → <span className="text-orange-300">địa chỉ IP</span>.</p>
            <p><span className="text-purple-300">Thường dùng</span> UDP port 53, có thể dùng TCP port 53.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroDnsVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu DNS là gì và vì sao Internet cần DNS.",
    "Biết DNS biến tên miền thành địa chỉ IP như thế nào.",
    "Nhận diện client, resolver, root, TLD và authoritative DNS server.",
    "Phân biệt các record phổ biến: A, AAAA, CNAME, MX, TXT, NS, PTR.",
    "Hiểu vì sao DNS thường dùng UDP 53 nhưng vẫn có lúc dùng TCP 53.",
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

function WhyDns() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần DNS?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Máy tính giao tiếp bằng <strong className="text-orange-300">địa chỉ IP</strong>, ví dụ <code className="text-green-300 bg-slate-950 px-2 py-1 rounded">142.250.190.14</code>.</p>
            <p>Con người lại dễ nhớ <strong className="text-cyan-300">tên miền</strong>, ví dụ <code className="text-green-300 bg-slate-950 px-2 py-1 rounded">google.com</code>.</p>
            <ConceptCard title="DNS giải quyết khoảng cách này" icon={<Search />} color="blue" text="Trình duyệt biết tên miền, nhưng mạng cần IP. DNS là hệ thống tra cứu giúp đổi tên miền thành IP." code="google.com → 142.250.190.14" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <NameToIpVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainNameSection() {
  const [domain, setDomain] = useState("www.example.com");
  const parts = domain.split(".");
  const tld = parts[parts.length - 1] || "com";
  const main = parts[parts.length - 2] || "example";
  const sub = parts.slice(0, -2).join(".") || "www";
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Tên miền là gì?" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Domain name" icon={<Globe2 />} color="purple" text="Tên miền là tên dễ nhớ đại diện cho một máy chủ hoặc dịch vụ trên Internet." code="google.com
vnexpress.net
openai.com" />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
              <label className="text-xs text-slate-500 font-bold uppercase">Thử nhập domain</label>
              <input value={domain} onChange={(e) => setDomain(e.target.value)} className="mt-2 w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-400" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <DomainBreakdown sub={sub} main={main} tld={tld} />
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <InfoPill label="TLD" value={tld} color="cyan" />
              <InfoPill label="Domain chính" value={main} color="emerald" />
              <InfoPill label="Subdomain" value={sub} color="orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResolverSection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="DNS Resolver là gì?" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Resolver = người đi tra cứu giúp" icon={<Search />} color="emerald" text="Máy của bạn thường không tự hỏi toàn bộ hệ thống DNS. Nó gửi câu hỏi cho DNS resolver, resolver sẽ kiểm tra cache hoặc đi hỏi các server DNS khác." code="Client hỏi: google.com có IP là gì?
Resolver trả: 142.250.190.14" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                <tr><th className="p-4">Resolver</th><th className="p-4">Ví dụ</th><th className="p-4">Ghi chú</th></tr>
              </thead>
              <tbody>
                {resolverRows.map(([name, example, note], i) => (
                  <tr key={name} className={`${i === resolverRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}>
                    <td className="p-4 text-white font-bold">{name}</td>
                    <td className="p-4 text-emerald-300 font-mono">{example}</td>
                    <td className="p-4 text-slate-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function DnsHierarchy() {
  const [selected, setSelected] = useState("root");
  const detail = {
    root: ["Root DNS Server", "Cấp cao nhất. Không thường trả IP cuối cùng, mà chỉ đường đến TLD server phù hợp.", "Hỏi .com ở đâu? → Hỏi TLD server của .com", "cyan", <Server />],
    tld: ["TLD Server", "Quản lý nhóm đuôi tên miền như .com, .net, .org, .vn. Chỉ đến authoritative server của domain.", "example.com ở đâu? → Hỏi authoritative DNS của example.com", "purple", <Route />],
    auth: ["Authoritative DNS Server", "Nơi giữ câu trả lời chính thức cho domain: A, AAAA, MX, TXT, NS...", "www.example.com → 93.184.216.34", "emerald", <Database />],
  }[selected];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Root, TLD và Authoritative DNS Server" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <ChoiceButton active={selected === "root"} onClick={() => setSelected("root")} color="cyan">Root</ChoiceButton>
              <ChoiceButton active={selected === "tld"} onClick={() => setSelected("tld")} color="purple">TLD</ChoiceButton>
              <ChoiceButton active={selected === "auth"} onClick={() => setSelected("auth")} color="emerald">Auth DNS</ChoiceButton>
            </div>
            <ConceptCard title={detail[0]} icon={detail[4]} color={detail[3]} text={detail[1]} code={detail[2]} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <HierarchyVisual selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldAnalogies() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Ví dụ đời thực" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="DNS giống danh bạ điện thoại" icon={<BookOpen />} color="green" text="Bạn nhớ tên người, nhưng điện thoại cần số. Tương tự, bạn nhớ tên miền, nhưng mạng cần địa chỉ IP." code="Anh Nam → 0909.xxx.xxx
google.com → 142.250.190.14" />
        <ConceptCard title="DNS giống hỏi đường nhiều tầng" icon={<Route />} color="orange" text="Resolver hỏi từng nơi: root chỉ đến TLD, TLD chỉ đến authoritative, authoritative trả địa chỉ cuối cùng." code="Bạn → Resolver → Root → TLD → Authoritative → IP" />
      </div>
    </section>
  );
}

function DnsLookupInteractive() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Trình duyệt kiểm tra cache", text: "Browser có thể đã lưu kết quả DNS trước đó.", code: "Browser cache?", color: "cyan", icon: <Globe2 /> },
    { title: "Hệ điều hành kiểm tra cache", text: "Nếu browser chưa có, OS kiểm tra DNS cache cục bộ.", code: "OS DNS cache?", color: "blue", icon: <HardDrive /> },
    { title: "Client hỏi DNS resolver", text: "Nếu chưa có cache, máy gửi DNS query đến resolver.", code: "Client → Resolver: www.example.com?", color: "emerald", icon: <Send /> },
    { title: "Resolver kiểm tra cache", text: "Resolver cũng có cache. Nếu còn hạn TTL, nó trả lời ngay.", code: "Resolver cache?", color: "green", icon: <RefreshCw /> },
    { title: "Resolver hỏi Root Server", text: "Nếu chưa có, resolver hỏi root để biết nên hỏi TLD nào.", code: "Resolver → Root", color: "cyan", icon: <Server /> },
    { title: "Root chỉ đến .com TLD", text: "Root không trả IP cuối, nó chỉ đến server quản lý .com.", code: "Root → ask .com TLD", color: "purple", icon: <Route /> },
    { title: "Resolver hỏi .com TLD", text: "TLD server cho biết authoritative DNS của example.com.", code: "Resolver → .com TLD", color: "orange", icon: <Network /> },
    { title: "TLD chỉ đến Authoritative DNS", text: "TLD trả về name server chịu trách nhiệm cho example.com.", code: ".com TLD → Auth DNS", color: "yellow", icon: <Database /> },
    { title: "Resolver hỏi Authoritative DNS", text: "Đây là nơi có record chính thức của domain.", code: "Resolver → Auth DNS", color: "emerald", icon: <Search /> },
    { title: "Authoritative DNS trả IP", text: "Authoritative DNS trả bản ghi A/AAAA cho www.example.com.", code: "www.example.com → 93.184.216.34", color: "green", icon: <CheckCircle2 /> },
    { title: "Resolver gửi IP về client", text: "Resolver trả kết quả về máy bạn và có thể cache theo TTL.", code: "Resolver → Client: 93.184.216.34", color: "blue", icon: <ArrowRight /> },
    { title: "Trình duyệt kết nối web server", text: "Sau khi có IP, trình duyệt mới tạo kết nối TCP/TLS/HTTPS.", code: "192.168.1.10:52000 → 93.184.216.34:443", color: "purple", icon: <ShieldCheck /> },
  ];
  return <StepSection number="7" color="cyan" title="DNS Lookup hoạt động từng bước" icon={<Search />} steps={steps} step={step} setStep={setStep} />;
}

function DnsFlowDiagramSection() {
  const [mode, setMode] = useState("basic");
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="purple" title="Sơ đồ phân giải DNS" icon={<ArrowRight />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Nhìn vào luồng hỏi đáp" icon={<ArrowRight />} color="purple" text="DNS lookup có thể được hiểu ở mức đơn giản hoặc mức chi tiết theo từng gói hỏi đáp." code="Tên miền → Resolver → Root → TLD → Auth DNS → IP" />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "basic"} onClick={() => setMode("basic")} color="cyan">Cơ bản</ChoiceButton>
              <ChoiceButton active={mode === "detailed"} onClick={() => setMode("detailed")} color="purple">Chi tiết</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            {mode === "basic" ? <BasicDnsDiagram /> : <DetailedDnsTimeline />}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecordTypes() {
  const [active, setActive] = useState("A");
  const row = recordRows.find(([record]) => record === active) || recordRows[0];
  const [, full, purpose, example, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="emerald" title="Các loại bản ghi DNS phổ biến" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {recordRows.map(([record, , , , c]) => (
                <ChoiceButton key={record} active={active === record} onClick={() => setActive(record)} color={c}>{record}</ChoiceButton>
              ))}
            </div>
            <ConceptCard title={`${active} — ${full}`} icon={<FileText />} color={color} text={purpose} code={example} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                  <tr><th className="p-4">Record</th><th className="p-4">Tên đầy đủ</th><th className="p-4">Dùng để làm gì?</th><th className="p-4">Ví dụ</th></tr>
                </thead>
                <tbody>
                  {recordRows.map(([record, fullName, use, ex, c], i) => (
                    <tr key={record} onClick={() => setActive(record)} className={`${i === recordRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === record ? "bg-slate-900" : ""}`}>
                      <td className={`p-4 font-black ${colorClasses[c].text}`}>{record}</td>
                      <td className="p-4 text-white font-bold">{fullName}</td>
                      <td className="p-4 text-slate-300">{use}</td>
                      <td className="p-4 text-green-300 font-mono">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CacheAndTtl() {
  const [ttl, setTtl] = useState(300);
  const minutes = Math.floor(ttl / 60);
  const seconds = ttl % 60;
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="yellow" title="DNS Cache và TTL" icon={<Clock3 />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="DNS Cache" icon={<RefreshCw />} color="green" text="DNS cache là bộ nhớ tạm lưu kết quả phân giải DNS để lần sau truy cập nhanh hơn và giảm số lần hỏi DNS." code="google.com → 142.250.190.14
Lần sau dùng lại nếu cache còn hạn" />
        <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-3xl p-6">
          <div className="bg-yellow-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 mb-5">
            <Timer size={28} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">TTL — Time To Live</h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">TTL quyết định kết quả DNS được phép nằm trong cache bao lâu.</p>
          <input type="range" min="60" max="3600" step="60" value={ttl} onChange={(e) => setTtl(Number(e.target.value))} className="w-full accent-yellow-400" />
          <div className="mt-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">
            TTL = {ttl} seconds
            <br />
            Cache giữ khoảng: {minutes} phút {seconds > 0 ? `${seconds} giây` : ""}
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4"><strong className="text-red-300">TTL cao:</strong><p className="text-slate-400 mt-1">Đổi IP có thể lan chậm hơn.</p></div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4"><strong className="text-cyan-300">TTL thấp:</strong><p className="text-slate-400 mt-1">Hỏi lại thường xuyên hơn.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UdpTcpDns() {
  const [protocol, setProtocol] = useState("udp");
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="orange" title="DNS dùng UDP hay TCP?" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="DNS port 53" icon={<Wifi />} color="orange" text="DNS thường dùng UDP port 53 vì query thường nhỏ và cần nhanh. Nhưng DNS vẫn có thể dùng TCP port 53 khi cần ổn định hoặc dữ liệu lớn hơn." code="UDP 53: query nhỏ, nhanh
TCP 53: response lớn, zone transfer, fallback" />
            <div className="flex gap-2">
              <ChoiceButton active={protocol === "udp"} onClick={() => setProtocol("udp")} color="orange">UDP 53</ChoiceButton>
              <ChoiceButton active={protocol === "tcp"} onClick={() => setProtocol("tcp")} color="emerald">TCP 53</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <DnsTransportVisual protocol={protocol} />
            <div className={`${protocol === "udp" ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"} border rounded-2xl p-4 text-sm`}>
              {protocol === "udp" ? "UDP 53 là lựa chọn thường gặp cho truy vấn DNS nhỏ, vì không cần handshake và phản hồi nhanh." : "TCP 53 dùng khi cần truyền ổn định hơn, ví dụ response quá lớn, zone transfer hoặc fallback khi UDP không phù hợp."}
            </div>
          </div>
        </div>
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
      <SectionTitle number="12" color="green" title="Lệnh kiểm tra DNS thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <ChoiceButton active={tab === "windows"} onClick={() => setTab("windows")} color="blue">Windows</ChoiceButton>
          <ChoiceButton active={tab === "maclinux"} onClick={() => setTab("maclinux")} color="green">Linux/macOS</ChoiceButton>
        </div>
        <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
          <div className="flex items-center gap-3 mb-5">
            <div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring}`}>{React.cloneElement(data.icon, { size: 24 })}</div>
            <h3 className="text-xl font-bold text-white">{data.title}</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            {data.commands.map(([label, cmd]) => (
              <div key={cmd} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                <p className="text-xs text-slate-500 font-bold uppercase mb-2">{label}</p>
                <code className="text-green-300 font-mono text-sm break-all">{cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalWalkthrough() {
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="cyan" title="Ví dụ kỹ thuật: vào website bằng HTTPS" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <ConceptCard title="1. DNS xảy ra trước" icon={<Search />} color="cyan" text="Khi nhập https://www.example.com, trình duyệt cần biết IP của www.example.com trước khi kết nối web server." code="www.example.com → DNS lookup → 93.184.216.34" />
          <ConceptCard title="2. Sau DNS mới kết nối HTTPS" icon={<ShieldCheck />} color="emerald" text="Khi có IP, trình duyệt tạo kết nối TCP/TLS đến server port 443 để trao đổi dữ liệu HTTPS." code="192.168.1.10:52000 ---- TCP/TLS ----> 93.184.216.34:443" />
        </div>
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-3xl p-5 font-mono text-sm text-green-300 overflow-x-auto">
          <p>User nhập URL</p>
          <p>→ DNS phân giải tên miền thành IP</p>
          <p>→ TCP kết nối đến port 443</p>
          <p>→ TLS mã hóa kết nối</p>
          <p>→ HTTP/HTTPS request-response</p>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ DNS chính là website", desc: "DNS chỉ giúp tìm IP. Nội dung website được trao đổi qua HTTP/HTTPS sau đó.", fix: "DNS là bước tra cứu trước khi kết nối web." },
    { title: "Nghĩ Root Server biết IP của mọi domain", desc: "Root thường không trả IP cuối cùng. Nó chỉ hướng resolver đến TLD server.", fix: "Root chỉ đường, authoritative mới trả lời chính thức." },
    { title: "Nghĩ DNS chỉ dùng UDP", desc: "DNS thường dùng UDP 53, nhưng có thể dùng TCP 53 trong một số trường hợp.", fix: "Ghi nhớ: DNS chủ yếu UDP 53, không phải chỉ UDP." },
    { title: "Nghĩ đổi DNS record là có hiệu lực ngay", desc: "Cache và TTL có thể khiến người dùng vẫn thấy kết quả cũ một thời gian.", fix: "TTL quyết định thời gian cache hợp lệ." },
    { title: "Nhầm CNAME với A record", desc: "A trỏ tới IPv4. CNAME trỏ alias đến tên miền khác.", fix: "A → IP, CNAME → domain khác." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="14" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => (
          <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div>
            <h3 className="text-white font-bold text-lg mb-3">{m.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">15</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>DNS = Domain Name System.</p>
              <p>DNS đổi tên miền thành địa chỉ IP.</p>
              <p>DNS giống danh bạ điện thoại của Internet.</p>
              <p>Client thường hỏi DNS resolver trước.</p>
              <p>Resolver có thể hỏi Root → TLD → Authoritative.</p>
              <p>Authoritative DNS Server giữ câu trả lời chính thức.</p>
              <p>A record trỏ domain đến IPv4.</p>
              <p>AAAA record trỏ domain đến IPv6.</p>
              <p>CNAME tạo bí danh cho domain.</p>
              <p>MX dùng cho mail server.</p>
              <p>TXT dùng cho text/xác minh/SPF/DKIM.</p>
              <p>DNS cache giúp nhanh hơn; TTL quyết định cache giữ bao lâu.</p>
              <p>DNS thường dùng UDP 53, nhưng cũng có thể dùng TCP 53.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "DNS dùng để làm gì?", options: ["Đổi tên miền thành địa chỉ IP", "Mã hóa toàn bộ website", "Chia nhỏ packet ở tầng IP", "Cấp nguồn cho router"], correct: 0, explanation: "DNS phân giải tên miền như google.com thành địa chỉ IP để máy tính có thể kết nối." },
  { question: "Thứ tự tra cứu DNS đầy đủ thường là gì?", options: ["Client → Resolver → Root → TLD → Authoritative", "Client → Root → Browser → HTTP → TLS", "TLD → Client → Resolver → Root", "Authoritative → TCP → UDP → IP"], correct: 0, explanation: "Client hỏi resolver; resolver có thể hỏi root, sau đó TLD, sau đó authoritative DNS server." },
  { question: "Authoritative DNS Server là gì?", options: ["Server giữ câu trả lời DNS chính thức cho domain", "Server luôn nằm trong máy người dùng", "Server dùng để mở cổng 443", "Server chỉ dùng để xóa cache"], correct: 0, explanation: "Authoritative DNS Server lưu các record thật sự của domain như A, AAAA, MX, TXT, NS." },
  { question: "A record dùng để làm gì?", options: ["Trỏ domain đến IPv4", "Trỏ domain đến IPv6", "Chỉ định mail server", "Reverse DNS từ IP về domain"], correct: 0, explanation: "A record là Address Record, dùng để trỏ tên miền đến địa chỉ IPv4." },
  { question: "Vì sao DNS thường dùng UDP port 53?", options: ["Query thường nhỏ và cần nhanh", "UDP đảm bảo thứ tự tốt hơn TCP", "DNS không bao giờ cần TCP", "Port 53 chỉ dành cho HTTPS"], correct: 0, explanation: "DNS query thường nhỏ, nên UDP 53 giúp giảm overhead và phản hồi nhanh. DNS vẫn có thể dùng TCP 53 khi cần." },
  { question: "TTL trong DNS nghĩa là gì?", options: ["Thời gian record được phép lưu trong cache", "Tên của root server", "Loại record dành cho email", "Cổng mặc định của HTTPS"], correct: 0, explanation: "TTL — Time To Live — quyết định cache được giữ trong bao lâu trước khi phải hỏi lại." },
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
    } else {
      setCurrentQ("finished");
    }
  };
  const resetQuiz = () => { setCurrentQ(0); setSelected(null); setShowResult(false); setScore(0); };
  if (finished) {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]">
        <div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div>
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài DNS!</h4>
        <p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p>
        <button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button>
      </div>
    );
  }
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
      {showResult && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}><strong>Giải thích:</strong> {q.explanation}</div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">{currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi DNS tìm ra IP của website, trình duyệt sẽ dùng HTTP hoặc HTTPS để trao đổi dữ liệu với web server.</p>
      <Link to="/phan-7-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.2 — HTTP & HTTPS <ChevronRight size={20} />
      </Link>
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
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function ConceptCard({ title, icon, color, text, code, compact = false }) {
  const c = colorClasses[color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-3xl ${compact ? "p-5" : "p-6"}`}>
      <div className={`${c.solid} text-white ${compact ? "w-12 h-12" : "w-14 h-14"} rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: compact ? 24 : 28 })}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p>
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div>
    </div>
  );
}

function ChoiceButton({ active, onClick, color, children }) {
  const c = colorClasses[color] || colorClasses.cyan;
  return <button onClick={onClick} className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${active ? `${c.solid} text-white shadow-lg ${c.ring}` : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}>{children}</button>;
}

function HeroDnsVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
        <MiniCard title="Tên miền" value="google.com" color="cyan" icon={<Globe2 />} />
        <ArrowRight className="text-slate-500" />
        <MiniCard title="IP" value="142.250.190.14" color="orange" icon={<Server />} />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-2">
        <p className="text-cyan-300">Client ---- query ----&gt; DNS Resolver</p>
        <p className="text-green-300">Client &lt;--- IP reply ---- DNS Resolver</p>
        <p className="text-orange-300">Browser ---- HTTPS ----&gt; Web Server</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <MiniCard title="UDP" value="port 53" color="orange" icon={<Zap />} />
        <MiniCard title="Cache" value="faster" color="green" icon={<RefreshCw />} />
        <MiniCard title="TTL" value="expires" color="yellow" icon={<Timer />} />
      </div>
    </div>
  );
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function NameToIpVisual() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
        <Globe2 className="mx-auto text-cyan-300 mb-2" size={36} />
        <p className="text-white font-black text-lg">google.com</p>
        <p className="text-slate-500 text-sm">Tên dễ nhớ cho con người</p>
      </div>
      <div className="flex justify-center"><ArrowRight className="text-slate-500 rotate-90" /></div>
      <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-center">
        <Search className="mx-auto text-cyan-300 mb-2" size={36} />
        <p className="text-cyan-300 font-black">DNS Lookup</p>
        <p className="text-slate-500 text-sm">Tra cứu tên miền</p>
      </div>
      <div className="flex justify-center"><ArrowRight className="text-slate-500 rotate-90" /></div>
      <div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-center">
        <Server className="mx-auto text-orange-300 mb-2" size={36} />
        <p className="text-orange-300 font-black font-mono">142.250.190.14</p>
        <p className="text-slate-500 text-sm">Địa chỉ để mạng gửi dữ liệu</p>
      </div>
    </div>
  );
}

function DomainBreakdown({ sub, main, tld }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center">
        <DomainPart label="Subdomain" value={sub} color="orange" />
        <span className="text-slate-600 text-2xl font-black">.</span>
        <DomainPart label="Domain" value={main} color="emerald" />
        <span className="text-slate-600 text-2xl font-black">.</span>
        <DomainPart label="TLD" value={tld} color="cyan" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-green-300 font-mono text-sm">
        Đọc từ phải sang trái: TLD → domain chính → subdomain
      </div>
    </div>
  );
}

function DomainPart({ label, value, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center min-w-0`}><p className="text-xs text-slate-500 font-bold uppercase">{label}</p><p className={`${c.text} font-black font-mono mt-2 truncate`}>{value}</p></div>;
}

function InfoPill({ label, value, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className="text-xs text-slate-500 font-bold uppercase">{label}</p><p className={`${c.text} font-mono font-black mt-1 break-all`}>{value}</p></div>;
}

function HierarchyVisual({ selected, setSelected }) {
  const nodes = [
    ["root", "Root Server", "Chỉ đến TLD", "cyan", <Server />],
    ["tld", ".com TLD", "Chỉ đến Auth DNS", "purple", <Route />],
    ["auth", "Authoritative", "Trả record chính thức", "emerald", <Database />],
  ];
  return (
    <div className="space-y-3">
      {nodes.map(([id, title, desc, color, icon], index) => {
        const c = colorClasses[color];
        const active = selected === id;
        return (
          <React.Fragment key={id}>
            <button onClick={() => setSelected(id)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}>
              <div className={`${active ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-12 h-12 rounded-2xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 24 })}</div>
              <div>
                <p className="text-white font-black">{title}</p>
                <p className="text-slate-500 text-sm mt-1">{desc}</p>
              </div>
            </button>
            {index < nodes.length - 1 && <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>}
          </React.Fragment>
        );
      })}
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
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[390px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
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
  return <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>;
}

function BasicDnsDiagram() {
  const items = [
    ["User nhập", "www.example.com", "cyan", <Globe2 />],
    ["Máy của bạn", "DNS Client", "blue", <HardDrive />],
    ["DNS Resolver", "người đi tra cứu", "emerald", <Search />],
    ["Root Server", "chỉ đến TLD", "purple", <Server />],
    [".com TLD", "chỉ đến Auth DNS", "orange", <Route />],
    ["Authoritative", "trả IP chính thức", "green", <Database />],
    ["Kết quả", "93.184.216.34", "cyan", <CheckCircle2 />],
  ];
  return <div className="space-y-3">{items.map(([title, desc, color, icon], index) => <React.Fragment key={title}><MiniFlowNode title={title} desc={desc} color={color} icon={icon} />{index < items.length - 1 && <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>}</React.Fragment>)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm font-mono mt-1`}>{desc}</p></div></div>;
}

function DetailedDnsTimeline() {
  const rows = [
    ["Client", "Resolver", "hỏi www.example.com"],
    ["Resolver", "Root", "hỏi Root"],
    ["Root", "Resolver", "hãy hỏi .com TLD"],
    ["Resolver", ".com TLD", "hỏi example.com"],
    [".com TLD", "Resolver", "hãy hỏi Auth DNS"],
    ["Resolver", "Auth DNS", "hỏi www.example.com"],
    ["Auth DNS", "Resolver", "IP = 93.184.216.34"],
    ["Resolver", "Client", "trả IP"],
  ];
  return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-sm space-y-3 overflow-x-auto">{rows.map(([from, to, msg], index) => <div key={`${from}-${to}-${index}`} className="grid grid-cols-[120px_40px_120px_1fr] gap-2 items-center min-w-[560px]"><span className="text-cyan-300">{from}</span><ArrowRight className="text-slate-500" size={18} /><span className="text-orange-300">{to}</span><span className="text-slate-300">// {msg}</span></div>)}</div>;
}

function DnsTransportVisual({ protocol }) {
  return (
    <div className="space-y-4">
      {protocol === "udp" ? (
        <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
          <p className="text-orange-300">192.168.1.10:53000 ---- UDP Query ----&gt; 8.8.8.8:53</p>
          <p className="text-orange-300">192.168.1.10:53000 &lt;--- UDP Reply ---- 8.8.8.8:53</p>
          <p className="text-slate-500">No TCP handshake.</p>
        </div>
      ) : (
        <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
          <p className="text-emerald-300">Client ---- SYN ----&gt; DNS Server:53</p>
          <p className="text-emerald-300">Client &lt;--- SYN-ACK ---- DNS Server</p>
          <p className="text-emerald-300">Client ---- ACK ----&gt; DNS Server</p>
          <p className="text-green-300">Client ---- DNS over TCP ----&gt; DNS Server</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-3">
        <MiniCard title="UDP" value="nhanh, nhẹ" color="orange" icon={<Zap />} />
        <MiniCard title="TCP" value="ổn định hơn" color="emerald" icon={<ShieldCheck />} />
      </div>
    </div>
  );
}
