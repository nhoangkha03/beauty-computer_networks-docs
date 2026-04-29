import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Cpu,
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
  Sparkles,
  Tablet,
  Terminal,
  TowerControl,
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

const standardRows = [
  ["802.11a", "WiFi đời cũ", "5GHz", "54 Mbps", "Ít nhiễu hơn 2.4GHz nhưng phạm vi ngắn", "blue"],
  ["802.11b", "WiFi đời cũ", "2.4GHz", "11 Mbps", "Chậm, phủ khá xa", "red"],
  ["802.11g", "WiFi đời cũ", "2.4GHz", "54 Mbps", "Nhanh hơn b, vẫn dễ nhiễu", "orange"],
  ["802.11n", "WiFi 4", "2.4GHz / 5GHz", "600 Mbps", "Có MIMO, tốc độ tốt hơn nhiều", "green"],
  ["802.11ac", "WiFi 5", "5GHz", "Vài Gbps", "Rất phổ biến, tốc độ cao", "cyan"],
  ["802.11ax", "WiFi 6 / 6E", "2.4GHz / 5GHz / 6GHz", "Vài Gbps", "Tối ưu cho nhiều thiết bị, hiệu quả cao", "emerald"],
];

const bandRows = [
  ["2.4GHz", "Đi xa hơn, xuyên tường tốt hơn", "Dễ nhiễu và chậm hơn", "Xe máy đi được nhiều ngõ nhỏ nhưng dễ kẹt xe", "orange"],
  ["5GHz", "Nhanh hơn, ít nhiễu hơn", "Phạm vi ngắn hơn", "Đường cao tốc nhanh nhưng phủ không xa bằng", "cyan"],
  ["6GHz", "Rộng, mới, ít nhiễu", "Thiết bị phải hỗ trợ; phạm vi ngắn hơn", "Cao tốc mới xây, rộng và ít xe", "purple"],
];

const deviceExamples = [
  ["Laptop", "802.11ac", "ac", "cyan", <Laptop />],
  ["Điện thoại mới", "802.11ax", "ax", "emerald", <Smartphone />],
  ["Điện thoại cũ", "802.11n", "n", "green", <Smartphone />],
  ["Smart TV", "802.11n", "n", "orange", <Tv />],
];

const commandTabs = {
  windows: {
    title: "Windows",
    color: "blue",
    icon: <Terminal />,
    commands: [
      ["Xem WiFi đang kết nối", "netsh wlan show interfaces"],
      ["Xem các mạng WiFi xung quanh", "netsh wlan show networks mode=bssid"],
    ],
  },
  linux: {
    title: "Linux",
    color: "green",
    icon: <Code2 />,
    commands: [
      ["Xem thiết bị WiFi", "iw dev"],
      ["Liệt kê WiFi xung quanh", "nmcli dev wifi list"],
    ],
  },
  macos: {
    title: "macOS",
    color: "purple",
    icon: <Laptop />,
    commands: [
      ["Thông tin WiFi", "airport -I"],
      ["Đường dẫn đầy đủ trên một số máy", "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I"],
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
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 8.1</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhatIs80211 />
        <WhyManyStandards />
        <FrequencyBands />
        <RealWorldAnalogies />
        <TechnicalExample />
        <StandardsTable />
        <SimpleWifiDiagram />
        <NegotiationSimulator />
        <ConnectionProcess />
        <CommandPractice />
        <ChoosingGuide />
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
            <Layers size={16} /> Wireless — IEEE 802.11
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            WiFi 802.11
            <span className="block text-cyan-400">a / b / g / n / ac / ax</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            802.11 là họ tiêu chuẩn quy định cách thiết bị truyền dữ liệu qua WiFi. Chuẩn càng mới thường càng nhanh, ổn định và xử lý nhiều thiết bị tốt hơn.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">802.11</span> = họ chuẩn WiFi.</p>
            <p><span className="text-orange-300">2.4GHz</span> = phủ xa hơn, dễ nhiễu hơn.</p>
            <p><span className="text-emerald-300">802.11ax</span> = WiFi 6/6E, hiệu quả hơn khi đông thiết bị.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroWifiVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu WiFi 802.11 là gì và vì sao có nhiều chuẩn.",
    "Phân biệt 802.11a, b, g, n, ac, ax.",
    "Biết vì sao WiFi đời mới nhanh hơn đời cũ.",
    "Nắm băng tần 2.4GHz, 5GHz, 6GHz, tốc độ, độ phủ và nhiễu.",
    "Biết chọn chuẩn WiFi phù hợp khi dùng router, laptop, điện thoại hoặc thiết kế mạng.",
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

function WhatIs80211() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="WiFi 802.11 là gì?" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-cyan-300">802.11</strong> là một nhóm tiêu chuẩn kỹ thuật dùng cho mạng không dây WiFi.</p>
            <p>Nói đơn giản, 802.11 là “bộ luật giao thông” giúp điện thoại, laptop và router WiFi hiểu nhau khi truyền dữ liệu qua sóng radio.</p>
            <ConceptCard title="802.11 = ngôn ngữ WiFi" icon={<Radio />} color="blue" text="Khi điện thoại kết nối vào WiFi ở nhà, nó phải nói cùng một ngôn ngữ mạng không dây với router. Ngôn ngữ đó chính là các chuẩn trong họ IEEE 802.11." code="Điện thoại ---- sóng WiFi 802.11 ---- Router" compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <WifiLanguageVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyManyStandards() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Vì sao có nhiều chuẩn a/b/g/n/ac/ax?" icon={<RefreshCw />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="WiFi phát triển theo thế hệ" icon={<Sparkles />} color="purple" text="Giống như điện thoại có 3G, 4G, 5G, WiFi cũng có nhiều đời. Mỗi đời cải thiện tốc độ, vùng phủ, độ ổn định hoặc khả năng phục vụ nhiều thiết bị." code="802.11b → 802.11g → 802.11n → 802.11ac → 802.11ax" />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <GenerationVisual />
          <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
            Chuẩn mới không làm thiết bị cũ tự nhiên nhanh lên. Thiết bị phải hỗ trợ chuẩn mới thì mới dùng được tốc độ/hiệu quả của chuẩn đó.
          </div>
        </div>
      </div>
    </section>
  );
}

function FrequencyBands() {
  const [active, setActive] = useState("5GHz");
  const row = bandRows.find(([band]) => band === active) || bandRows[1];
  const [, strength, weakness, analogy, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Băng tần 2.4GHz, 5GHz, 6GHz" icon={<Radio />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <ConceptCard title={active} icon={<Radio />} color={color} text={`${strength}. Điểm hạn chế: ${weakness}.`} code={analogy} />
            <div className="grid grid-cols-3 gap-2">
              {bandRows.map(([band, , , , c]) => <ChoiceButton key={band} active={active === band} onClick={() => setActive(band)} color={c}>{band}</ChoiceButton>)}
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[760px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Băng tần</th><th className="p-4">Ưu điểm</th><th className="p-4">Hạn chế</th><th className="p-4">Ví dụ</th></tr></thead>
                <tbody>
                  {bandRows.map(([band, good, bad, ex, c], i) => <tr key={band} onClick={() => setActive(band)} className={`${i === bandRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === band ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{band}</td><td className="p-4 text-slate-300">{good}</td><td className="p-4 text-slate-300">{bad}</td><td className="p-4 text-green-300">{ex}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealWorldAnalogies() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="green" title="Ví dụ đời sống" icon={<BookOpen />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="WiFi giống hệ thống đường phố" icon={<TowerControl />} color="green" text="Router giống bến xe/trạm điều phối, thiết bị giống xe cộ, sóng WiFi giống đường đi, chuẩn 802.11 giống luật giao thông." code={`802.11b = đường nhỏ, xe chậm
802.11ax = đường hiện đại, nhiều làn, quản lý thông minh`} />
        <ConceptCard title="Router giống nhà hàng" icon={<Home />} color="orange" text="Chuẩn cũ phục vụ từng khách chậm hơn. 802.11n/ac có nhiều nhân viên hơn. 802.11ax có hệ thống xếp hàng thông minh, đông khách vẫn đỡ rối hơn." code={`WiFi 6 không chỉ nhanh hơn
mà còn phục vụ nhiều thiết bị tốt hơn`} />
      </div>
    </section>
  );
}

function TechnicalExample() {
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="Ví dụ kỹ thuật: router mới, thiết bị cũ" icon={<Router />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
          <ConceptCard title="Router WiFi 6 không ép mọi thiết bị chạy WiFi 6" icon={<Router />} color="cyan" text="Router mới vẫn hỗ trợ thiết bị cũ, nhưng mỗi thiết bị sẽ kết nối theo chuẩn cao nhất mà chính nó hỗ trợ và router cũng hỗ trợ." code={`Router WiFi 6: hỗ trợ 802.11ax
Laptop: 802.11ac → chạy ac
Phone mới: 802.11ax → chạy ax
Phone cũ: 802.11n → chạy n`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Thiết bị</th><th className="p-4">Chuẩn tối đa</th><th className="p-4">Khi kết nối router WiFi 6</th></tr></thead>
              <tbody>
                {deviceExamples.slice(0, 3).map(([device, max, actual, color, icon], i) => <tr key={device} className={`${i === 2 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className="p-4 text-white font-bold flex items-center gap-2">{React.cloneElement(icon, { size: 18, className: colorClasses[color].text })}{device}</td><td className={`p-4 font-mono ${colorClasses[color].text}`}>{max}</td><td className="p-4 text-green-300 font-mono">{actual}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function StandardsTable() {
  const [active, setActive] = useState("802.11ax");
  const row = standardRows.find(([std]) => std === active) || standardRows[5];
  const [, name, band, speed, feature, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="blue" title="Bảng so sánh các chuẩn WiFi phổ biến" icon={<BarChart3 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {standardRows.map(([std, , , , , c]) => <ChoiceButton key={std} active={active === std} onClick={() => setActive(std)} color={c}>{std}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${name}`} icon={<Wifi />} color={color} text={`Băng tần chính: ${band}. Tốc độ lý thuyết tối đa: ${speed}.`} code={feature} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[840px] text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Chuẩn</th><th className="p-4">Tên phổ biến</th><th className="p-4">Băng tần</th><th className="p-4">Tốc độ lý thuyết</th><th className="p-4">Đặc điểm</th></tr></thead>
                <tbody>
                  {standardRows.map(([std, common, b, s, f, c], i) => <tr key={std} onClick={() => setActive(std)} className={`${i === standardRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === std ? "bg-slate-900" : ""}`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{std}</td><td className="p-4 text-white font-bold">{common}</td><td className="p-4 text-slate-300">{b}</td><td className="p-4 text-green-300 font-mono">{s}</td><td className="p-4 text-slate-300">{f}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-yellow-500/10 border border-yellow-400/40 rounded-2xl p-4 text-sm text-yellow-300">
          Tốc độ trong bảng là tốc độ lý thuyết. Thực tế thường thấp hơn do khoảng cách, vật cản, nhiễu sóng, thiết bị đầu cuối và cấu hình router.
        </div>
      </div>
    </section>
  );
}

function SimpleWifiDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="emerald" title="Sơ đồ WiFi đơn giản" icon={<Network />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <WifiNetworkDiagram />
      </div>
    </section>
  );
}

function NegotiationSimulator() {
  const [router, setRouter] = useState("b/g/n/ac/ax");
  const [client, setClient] = useState("n/ac");
  const order = ["b", "g", "n", "ac", "ax"];
  const supportedRouter = router.split("/");
  const supportedClient = client.split("/");
  const negotiated = [...order].reverse().find((x) => supportedRouter.includes(x) && supportedClient.includes(x)) || "không tương thích";
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="purple" title="Mô phỏng thỏa thuận chuẩn WiFi" icon={<RefreshCw />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Nguyên tắc tương thích" icon={<CheckCircle2 />} color="purple" text="Hai thiết bị sẽ dùng chuẩn cao nhất mà cả hai cùng hiểu." code={`Router hỗ trợ b/g/n/ac/ax
Client hỗ trợ n/ac
→ dùng ac`} />
            <div className="grid md:grid-cols-2 gap-3">
              <SelectBox label="Router hỗ trợ" value={router} onChange={setRouter} options={["b/g/n", "b/g/n/ac", "b/g/n/ac/ax"]} color="cyan" />
              <SelectBox label="Client hỗ trợ" value={client} onChange={setClient} options={["b/g/n", "n/ac", "ax", "b"]} color="emerald" />
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-center">
            <RefreshCw className="mx-auto text-purple-300 mb-4" size={44} />
            <p className="text-slate-500 text-xs font-bold uppercase">Chuẩn dùng thực tế</p>
            <p className="text-5xl font-black text-purple-300 mt-2">{negotiated}</p>
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">
              Router: {router}
              <br />
              Client: {client}
              <br />
              Kết quả: {negotiated}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectionProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Router phát WiFi", text: "Router phát tên mạng, gọi là SSID, kèm thông tin security, standard và band.", code: `SSID: Home_Kha_5G
Security: WPA2/WPA3
Standard: 802.11ax
Band: 5GHz`, color: "cyan", icon: <Router /> },
    { title: "Thiết bị quét mạng", text: "Điện thoại hoặc laptop tìm các WiFi xung quanh.", code: `Home_Kha_2.4G
Home_Kha_5G
Cafe_Free_WiFi
Printer_WiFi`, color: "blue", icon: <Search /> },
    { title: "Thiết bị và router thỏa thuận chuẩn", text: "Hai bên chọn chuẩn tốt nhất mà cả hai cùng hỗ trợ.", code: `Client: Tôi hỗ trợ 802.11n/ac/ax
Router: Tôi hỗ trợ b/g/n/ac/ax
→ chọn ax nếu cả hai cùng hỗ trợ`, color: "purple", icon: <RefreshCw /> },
    { title: "Xác thực mật khẩu", text: "Thiết bị nhập mật khẩu WiFi. Nếu đúng, router cho phép kết nối; nếu sai, bị từ chối.", code: `Password OK → associated/authenticated
Password wrong → reject`, color: "orange", icon: <Lock /> },
    { title: "Thiết bị nhận IP qua DHCP", text: "Sau khi kết nối WiFi thành công, thiết bị thường nhận IP, subnet, gateway và DNS từ DHCP.", code: `IP Address: 192.168.1.25
Subnet Mask: 255.255.255.0
Gateway: 192.168.1.1
DNS: 8.8.8.8`, color: "green", icon: <Network /> },
    { title: "Truy cập mạng hoặc Internet", text: "Từ đây thiết bị có thể giao tiếp trong LAN hoặc đi ra Internet qua gateway.", code: "Phone/Laptop → Router WiFi → Internet", color: "emerald", icon: <Globe2 /> },
  ];
  return <StepSection number="10" color="cyan" title="Khi thiết bị kết nối WiFi" icon={<Wifi />} steps={steps} step={step} setStep={setStep} />;
}

function CommandPractice() {
  const [tab, setTab] = useState("windows");
  const data = commandTabs[tab];
  const c = colorClasses[data.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="green" title="Lệnh kiểm tra WiFi" icon={<Terminal />} />
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

function ChoosingGuide() {
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="emerald" title="Chọn chuẩn WiFi phù hợp" icon={<CheckCircle2 />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <ConceptCard title="Nhà ít thiết bị" icon={<Home />} color="green" text="WiFi 5 hoặc WiFi 6 đều ổn. Ưu tiên 5GHz cho laptop/TV nếu khoảng cách gần router." code={`Router WiFi 5/6
2.4GHz cho xa
5GHz cho nhanh`} />
        <ConceptCard title="Nhà nhiều thiết bị IoT" icon={<Smartphone />} color="cyan" text="WiFi 6 xử lý đông thiết bị tốt hơn WiFi 4/5 nhờ các cải tiến hiệu quả hơn." code={`Phone, TV, camera, loa, laptop
→ WiFi 6 phù hợp hơn`} />
        <ConceptCard title="Thiết kế mạng mới" icon={<Router />} color="emerald" text="Nên chọn WiFi 6/6E hoặc mới hơn nếu thiết bị hỗ trợ, nhưng vẫn kiểm tra client có hỗ trợ chuẩn mới hay không." code={`Router hỗ trợ ax
Client hỗ trợ ac → chỉ chạy ac`} />
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ router WiFi 6 làm mọi thiết bị chạy WiFi 6", desc: "Thiết bị cũ chỉ chạy chuẩn cao nhất mà nó hỗ trợ và router cũng hỗ trợ.", fix: "Cần cả router và client cùng hỗ trợ chuẩn mới." },
    { title: "Nhầm tốc độ lý thuyết với tốc độ thực tế", desc: "Tốc độ thực tế thấp hơn vì vật cản, khoảng cách, nhiễu, số thiết bị và cấu hình.", fix: "Đừng lấy tốc độ bảng làm tốc độ chắc chắn." },
    { title: "Nghĩ 5GHz luôn tốt hơn 2.4GHz", desc: "5GHz nhanh hơn nhưng phạm vi ngắn hơn. 2.4GHz vẫn hữu ích cho xa và xuyên tường.", fix: "Chọn băng tần theo vị trí và nhu cầu." },
    { title: "Nghĩ 6GHz thiết bị nào cũng dùng được", desc: "6GHz cần router và client hỗ trợ WiFi 6E/WiFi 7 phù hợp.", fix: "Kiểm tra thông số thiết bị trước." },
    { title: "Quên DHCP sau khi kết nối WiFi", desc: "Kết nối WiFi thành công chưa đủ; thiết bị còn cần IP, gateway và DNS để truy cập mạng.", fix: "WiFi association xong thường đến DHCP." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">14</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>802.11 là họ tiêu chuẩn WiFi.</p>
              <p>Chuẩn WiFi càng mới thường càng nhanh, ổn định và hiệu quả hơn.</p>
              <p>802.11b/g dùng 2.4GHz; 802.11a dùng 5GHz.</p>
              <p>802.11n là WiFi 4, hỗ trợ 2.4GHz/5GHz và MIMO.</p>
              <p>802.11ac là WiFi 5, chủ yếu 5GHz, tốc độ cao.</p>
              <p>802.11ax là WiFi 6/6E, tối ưu cho nhiều thiết bị.</p>
              <p>2.4GHz phủ xa hơn nhưng dễ nhiễu và chậm hơn.</p>
              <p>5GHz nhanh hơn, ít nhiễu hơn nhưng phạm vi ngắn hơn.</p>
              <p>6GHz mới, rộng, ít nhiễu, nhưng cần thiết bị hỗ trợ.</p>
              <p>Router và client dùng chuẩn cao nhất mà cả hai cùng hỗ trợ.</p>
              <p>Sau khi kết nối WiFi, thiết bị thường nhận IP qua DHCP.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Chuẩn 802.11 dùng để làm gì?", options: ["Quy định cách truyền dữ liệu qua WiFi", "Quy định cách cấp địa chỉ IP", "Quy định cách gửi email", "Quy định cách mã hóa HTTPS"], correct: 0, explanation: "802.11 là họ tiêu chuẩn quy định cách thiết bị truyền dữ liệu qua mạng không dây WiFi." },
  { question: "Vì sao có nhiều chuẩn WiFi như b/g/n/ac/ax?", options: ["Vì WiFi phát triển theo thời gian, chuẩn mới cải thiện tốc độ và hiệu quả", "Vì mỗi hãng tự đặt tên ngẫu nhiên", "Vì mỗi chuẩn chỉ dành cho một quốc gia", "Vì WiFi không cần tương thích ngược"], correct: 0, explanation: "Công nghệ WiFi phát triển qua nhiều thế hệ. Chuẩn mới thường nhanh hơn, ổn định hơn và phục vụ nhiều thiết bị tốt hơn." },
  { question: "2.4GHz thường có đặc điểm nào?", options: ["Phủ xa hơn, xuyên tường tốt hơn nhưng dễ nhiễu và thường chậm hơn", "Luôn nhanh nhất và ít nhiễu nhất", "Chỉ dùng cho WiFi 6E", "Không xuyên được tường"], correct: 0, explanation: "2.4GHz có vùng phủ tốt hơn nhưng dễ bị nhiễu vì nhiều thiết bị dùng cùng dải tần." },
  { question: "Router hỗ trợ 802.11ax, laptop chỉ hỗ trợ 802.11ac. Laptop sẽ chạy chuẩn nào?", options: ["802.11ac", "802.11ax", "802.11b", "Không thể kết nối"], correct: 0, explanation: "Hai bên dùng chuẩn cao nhất mà cả router và laptop cùng hỗ trợ. Laptop không hỗ trợ ax nên chạy ac." },
  { question: "802.11n thường được gọi là gì?", options: ["WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"], correct: 0, explanation: "802.11n thường được gọi là WiFi 4." },
  { question: "Sau khi kết nối WiFi thành công, thiết bị thường cần gì để truy cập mạng?", options: ["Nhận IP, subnet, gateway, DNS qua DHCP", "Chỉ cần tên SSID", "Chỉ cần biết chuẩn 802.11", "Chỉ cần đổi MAC address"], correct: 0, explanation: "WiFi connection là tầng truy cập không dây; để giao tiếp IP, thiết bị thường cần DHCP cấp IP, gateway và DNS." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài WiFi 802.11!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Bài tiếp theo học sâu hơn về cách WiFi truyền dữ liệu, kênh sóng, nhiễu và roaming.</p>
      <Link to="/phan-8-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 8.2 — Nguyên lý hoạt động của WiFi <ChevronRight size={20} />
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

function HeroWifiVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-3 gap-3"><MiniCard title="2.4GHz" value="xa hơn" color="orange" icon={<Radio />} /><MiniCard title="5GHz" value="nhanh hơn" color="cyan" icon={<Zap />} /><MiniCard title="6GHz" value="mới hơn" color="purple" icon={<Sparkles />} /></div><div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2"><p className="text-cyan-300">Router WiFi 6 ---- SSID ----&gt; Devices</p><p className="text-green-300">Client + Router negotiate standard</p><p className="text-emerald-300">ax if both support ax</p><p className="text-orange-300">old client stays on older standard</p></div><div className="grid grid-cols-3 gap-3"><MiniCard title="n" value="WiFi 4" color="green" icon={<Wifi />} /><MiniCard title="ac" value="WiFi 5" color="cyan" icon={<Wifi />} /><MiniCard title="ax" value="WiFi 6" color="emerald" icon={<Wifi />} /></div></div>;
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function WifiLanguageVisual() {
  return <div className="space-y-4"><div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"><MiniNode label="Phone" color="cyan" icon={<Smartphone />} /><ArrowRight className="text-slate-500" /><MiniNode label="Router" color="orange" icon={<Router />} /></div><div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">Cùng nói “802.11”
→ thiết bị hiểu nhau
→ truyền dữ liệu qua sóng radio</div><div className="grid grid-cols-2 gap-3"><MiniCard title="SSID" value="tên WiFi" color="blue" icon={<Wifi />} /><MiniCard title="Standard" value="a/b/g/n/ac/ax" color="purple" icon={<Layers />} /></div></div>;
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function GenerationVisual() {
  const gens = [["802.11b", "chậm", "red"], ["802.11g", "nhanh hơn", "orange"], ["802.11n", "MIMO", "green"], ["802.11ac", "5GHz nhanh", "cyan"], ["802.11ax", "đông thiết bị", "emerald"]];
  return <div className="space-y-3">{gens.map(([std, desc, color], i) => <div key={std} className="flex items-center gap-3"><div className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex-1`}><p className={`${colorClasses[color].text} font-black`}>{std}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>{i < gens.length - 1 && <ArrowRight className="text-slate-600" />}</div>)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1 font-mono break-all`}>{desc}</p></div></div>;
}

function WifiNetworkDiagram() {
  return <div className="space-y-4"><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center"><Globe2 className="mx-auto text-cyan-300 mb-2" size={36} /><p className="text-white font-black">Internet</p></div><ArrowRight className="mx-auto text-slate-500 rotate-90" /><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center"><Server className="mx-auto text-blue-300 mb-2" size={36} /><p className="text-white font-black">Modem</p></div><ArrowRight className="mx-auto text-slate-500 rotate-90" /><div className="bg-emerald-500/10 border border-emerald-400/40 rounded-3xl p-5 text-center"><Router className="mx-auto text-emerald-300 mb-2" size={42} /><p className="text-white font-black">Router WiFi 802.11ax</p><p className="text-emerald-300 font-mono text-sm">2.4GHz / 5GHz</p></div><div className="text-center text-cyan-300 font-mono text-sm">~~~~~ Sóng WiFi ~~~~~</div><div className="grid md:grid-cols-3 gap-3"><MiniCard title="Điện thoại" value="802.11ax" color="emerald" icon={<Smartphone />} /><MiniCard title="Laptop" value="802.11ac" color="cyan" icon={<Laptop />} /><MiniCard title="Smart TV" value="802.11n" color="green" icon={<Tv />} /></div></div>;
}

function SelectBox({ label, value, onChange, options, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><label className="text-xs text-slate-500 font-bold uppercase">{label}</label><select value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-white outline-none focus:border-cyan-400">{options.map((o) => <option key={o} value={o}>{o}</option>)}</select></div>;
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
