import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Cookie,
  EthernetPort,
  Fingerprint,
  GitCompare,
  Globe2,
  KeyRound,
  Laptop,
  Layers,
  Lock,
  Network,
  Package,
  Router,
  Search,
  Server,
  ShieldCheck,
  Split,
  TableProperties,
  Terminal,
  Utensils,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const osiLayers = [
  { n: 7, name: "Application", tcp: "Application", note: "HTTP, DNS, SMTP", color: "purple", icon: <Globe2 /> },
  { n: 6, name: "Presentation", tcp: "Application", note: "TLS, mã hóa, nén, định dạng", color: "pink", icon: <Lock /> },
  { n: 5, name: "Session", tcp: "Application", note: "Phiên, token, cookie", color: "orange", icon: <Cookie /> },
  { n: 4, name: "Transport", tcp: "Transport", note: "TCP, UDP, port", color: "emerald", icon: <Split /> },
  { n: 3, name: "Network", tcp: "Internet", note: "IP, ICMP, router", color: "cyan", icon: <Router /> },
  { n: 2, name: "Data Link", tcp: "Network Access", note: "MAC, frame, switch", color: "blue", icon: <Fingerprint /> },
  { n: 1, name: "Physical", tcp: "Network Access", note: "Bit, dây, sóng", color: "slate", icon: <Cable /> },
];

const tcpLayers = [
  { n: 4, name: "Application", maps: "OSI 7 + 6 + 5", note: "HTTP, HTTPS, DNS, TLS, Session", color: "purple", icon: <Globe2 /> },
  { n: 3, name: "Transport", maps: "OSI 4", note: "TCP, UDP, Port", color: "emerald", icon: <Split /> },
  { n: 2, name: "Internet", maps: "OSI 3", note: "IP, ICMP, Router", color: "cyan", icon: <Router /> },
  { n: 1, name: "Network Access", maps: "OSI 2 + 1", note: "MAC, Ethernet, WiFi, Frame, Bit", color: "blue", icon: <EthernetPort /> },
];

const colorClasses = {
  purple: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/40", solid: "bg-purple-500", ring: "shadow-purple-500/20" },
  pink: { text: "text-pink-300", bg: "bg-pink-500/10", border: "border-pink-400/40", solid: "bg-pink-500", ring: "shadow-pink-500/20" },
  orange: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-400/40", solid: "bg-orange-500", ring: "shadow-orange-500/20" },
  emerald: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/40", solid: "bg-emerald-500", ring: "shadow-emerald-500/20" },
  cyan: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-400/40", solid: "bg-cyan-500", ring: "shadow-cyan-500/20" },
  blue: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-400/40", solid: "bg-blue-500", ring: "shadow-blue-500/20" },
  slate: { text: "text-slate-300", bg: "bg-slate-500/10", border: "border-slate-400/40", solid: "bg-slate-600", ring: "shadow-slate-500/20" },
  yellow: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-400/40", solid: "bg-yellow-500", ring: "shadow-yellow-500/20" },
  green: { text: "text-green-300", bg: "bg-green-500/10", border: "border-green-400/40", solid: "bg-green-500", ring: "shadow-green-500/20" },
  red: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-400/40", solid: "bg-red-500", ring: "shadow-red-500/20" },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <GitCompare className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 2: Mô hình mạng</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 2.4</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <CoreIdea />
        <MappingDiagram />
        <ComparisonExplorer />
        <MappingTable />
        <ProtocolTable />
        <RestaurantAndDeliveryExamples />
        <HttpsDualViewSimulator />
        <TroubleshootingDualModel />
        <CliLab />
        <Misunderstandings />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <GitCompare size={16} /> Nối hai mô hình lại với nhau
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            So sánh OSI và TCP/IP
            <span className="block text-cyan-400">7 tầng vs 4 tầng</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            OSI giúp học và phân tích chi tiết. TCP/IP mô tả cách Internet vận hành thực tế. Hai mô hình không mâu thuẫn, chúng chỉ là hai cách nhìn cùng một quá trình truyền dữ liệu.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">OSI</span> chia kỹ để học.</p>
            <p><span className="text-purple-300">TCP/IP</span> gom gọn để chạy Internet.</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <MiniMappingVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Biết OSI và TCP/IP giống nhau ở điểm nào.",
    "Biết OSI và TCP/IP khác nhau ở điểm nào.",
    "Hiểu cách ánh xạ 7 tầng OSI sang 4 tầng TCP/IP.",
    "Biết khi nào nên dùng OSI, khi nào nên dùng TCP/IP.",
    "Biết dùng cả hai mô hình để troubleshoot lỗi mạng.",
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

function CoreIdea() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Khái niệm cốt lõi" icon={<CircleHelp />} />
      <div className="grid lg:grid-cols-3 gap-4">
        <CoreCard
          title="OSI là gì?"
          icon={<Layers />}
          color="cyan"
          text="OSI là mô hình tham chiếu 7 tầng, rất tốt để học, phân tích và troubleshoot mạng theo từng lớp rõ ràng."
          code="Application → Presentation → Session → Transport → Network → Data Link → Physical"
        />
        <CoreCard
          title="TCP/IP là gì?"
          icon={<Network />}
          color="purple"
          text="TCP/IP là mô hình/bộ giao thức thực tế dùng nhiều trong Internet, thường được mô tả bằng 4 tầng."
          code="Application → Transport → Internet → Network Access"
        />
        <CoreCard
          title="Vì sao có cả hai?"
          icon={<BookOpen />}
          color="orange"
          text="OSI giống sách giáo khoa chi tiết; TCP/IP giống hệ thống giao thông thật đang chạy ngoài đời."
          code="OSI = học và phân tích\nTCP/IP = Internet thực tế"
        />
      </div>
    </section>
  );
}

function MappingDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Sơ đồ ánh xạ trực quan" icon={<GitCompare />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 overflow-x-auto">
        <div className="min-w-[860px] grid grid-cols-[1fr_160px_1fr] gap-6 items-stretch">
          <div className="space-y-2">
            <h3 className="text-white font-bold mb-4 text-center">OSI 7 tầng</h3>
            {osiLayers.map((layer) => <OsiLayerBox key={layer.n} layer={layer} />)}
          </div>

          <div className="flex flex-col justify-center gap-5 pt-12">
            <MapArrow label="7 + 6 + 5" color="purple" />
            <MapArrow label="4" color="emerald" />
            <MapArrow label="3" color="cyan" />
            <MapArrow label="2 + 1" color="blue" />
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4 text-center">TCP/IP 4 tầng</h3>
            <TcpGroupBox layer={tcpLayers[0]} height="h-[158px]" />
            <TcpGroupBox layer={tcpLayers[1]} height="h-[74px]" />
            <TcpGroupBox layer={tcpLayers[2]} height="h-[74px]" />
            <TcpGroupBox layer={tcpLayers[3]} height="h-[158px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonExplorer() {
  const [active, setActive] = useState("purpose");
  const items = {
    purpose: {
      title: "Mục đích",
      icon: <BookOpen />,
      osi: "Mô hình tham chiếu lý thuyết, giúp học và chuẩn hóa cách suy nghĩ.",
      tcp: "Mô hình/giao thức thực tế, mô tả cách Internet vận hành.",
    },
    detail: {
      title: "Mức độ chi tiết",
      icon: <Search />,
      osi: "Chi tiết hơn vì tách 7 tầng, đặc biệt tách rõ Presentation và Session.",
      tcp: "Gọn hơn vì gom một số tầng lại thành 4 nhóm chính.",
    },
    top: {
      title: "Tầng trên",
      icon: <Globe2 />,
      osi: "Tách Application, Presentation, Session thành 3 tầng riêng.",
      tcp: "Gộp Application + Presentation + Session vào Application.",
    },
    bottom: {
      title: "Tầng dưới",
      icon: <Cable />,
      osi: "Tách Data Link và Physical để phân tích MAC/frame và dây/sóng riêng.",
      tcp: "Gộp Data Link + Physical vào Network Access.",
    },
    troubleshooting: {
      title: "Troubleshooting",
      icon: <AlertTriangle />,
      osi: "Rất rõ ràng khi khoanh vùng lỗi theo từng tầng nhỏ.",
      tcp: "Nhanh, sát thực tế vận hành và gần với lệnh kiểm tra thường dùng.",
    },
  };
  const current = items[active];

  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="So sánh theo từng tiêu chí" icon={<TableProperties />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(items).map(([key, item]) => (
            <button key={key} onClick={() => setActive(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${active === key ? "bg-emerald-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>
              {React.cloneElement(item.icon, { size: 16 })} {item.title}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 24 })} {current.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ModelCard title="OSI" color="cyan" text={current.osi} layers="7 tầng" />
            <ModelCard title="TCP/IP" color="purple" text={current.tcp} layers="4 tầng" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MappingTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Bảng ánh xạ OSI và TCP/IP" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[850px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4">OSI</th>
                <th className="p-4">Tên tầng OSI</th>
                <th className="p-4">TCP/IP tương ứng</th>
                <th className="p-4">Ghi nhớ nhanh</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {osiLayers.map((layer, index) => {
                const c = colorClasses[layer.color];
                return (
                  <tr key={layer.n} className={`${index === osiLayers.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                    <td className={`p-4 font-black ${c.text}`}>{layer.n}</td>
                    <td className="p-4 text-white font-bold">{layer.name}</td>
                    <td className="p-4 text-slate-300">{layer.tcp}</td>
                    <td className="p-4 text-slate-400">{layer.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <QuickMap text="OSI 7,6,5 → TCP/IP Application" color="purple" />
        <QuickMap text="OSI 4 → TCP/IP Transport" color="emerald" />
        <QuickMap text="OSI 3 → TCP/IP Internet" color="cyan" />
        <QuickMap text="OSI 2,1 → TCP/IP Network Access" color="blue" />
      </div>
    </section>
  );
}

function ProtocolTable() {
  const rows = [
    ["HTTP/HTTPS", "Tầng 7", "Application"],
    ["DNS", "Tầng 7", "Application"],
    ["TLS/SSL", "Tầng 6", "Application"],
    ["Cookie/Session Token", "Tầng 5/7", "Application"],
    ["TCP/UDP", "Tầng 4", "Transport"],
    ["IP/ICMP", "Tầng 3", "Internet"],
    ["Ethernet/WiFi", "Tầng 1–2", "Network Access"],
    ["MAC Address", "Tầng 2", "Network Access"],
    ["Cáp mạng/Sóng WiFi", "Tầng 1", "Network Access"],
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Bảng giao thức theo từng mô hình" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4">Giao thức / Công nghệ</th>
                <th className="p-4">Theo OSI</th>
                <th className="p-4">Theo TCP/IP</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([name, osi, tcp], index) => (
                <tr key={name} className={`${index === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                  <td className="p-4 text-white font-bold">{name}</td>
                  <td className="p-4 text-slate-300">{osi}</td>
                  <td className="p-4 text-cyan-300 font-semibold">{tcp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RestaurantAndDeliveryExamples() {
  const [mode, setMode] = useState("restaurant");
  const examples = {
    restaurant: {
      title: "Nhà hàng",
      icon: <Utensils />,
      leftTitle: "OSI: quy trình chi tiết 7 bước",
      rightTitle: "TCP/IP: quy trình rút gọn 4 nhóm",
      osi: ["Chuẩn bị bàn ghế", "Nhận khách", "Ghi order", "Chuyển order xuống bếp", "Bếp nấu món", "Trang trí món ăn", "Phục vụ món cho khách"],
      tcp: ["Khách gọi món", "Nhà hàng xử lý đơn", "Chọn tuyến phục vụ", "Mang món đến bàn"],
    },
    delivery: {
      title: "Gửi hàng",
      icon: <Package />,
      leftTitle: "OSI 7 tầng",
      rightTitle: "TCP/IP 4 tầng",
      osi: ["Người gửi tạo yêu cầu", "Đóng gói/mã hóa/dán nhãn", "Tạo mã đơn, theo dõi phiên", "Chia kiện, đảm bảo đủ", "Chọn tuyến liên tỉnh/quốc tế", "Giao từng chặng gần", "Xe tải, đường sá, máy bay"],
      tcp: ["Application: tạo dữ liệu", "Transport: chia/theo dõi", "Internet: chọn tuyến", "Network Access: chạy trên đường thật"],
    },
  };
  const current = examples[mode];

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Ví dụ đời sống" icon={<Utensils />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          <button onClick={() => setMode("restaurant")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "restaurant" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><Utensils size={16} /> Nhà hàng</button>
          <button onClick={() => setMode("delivery")} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === "delivery" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}><Package size={16} /> Gửi hàng</button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">{React.cloneElement(current.icon, { size: 22 })} {current.title}</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <ExampleColumn title={current.leftTitle} items={current.osi} color="cyan" />
            <ExampleColumn title={current.rightTitle} items={current.tcp} color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsDualViewSimulator() {
  const steps = [
    { osi: "Application", tcp: "Application", osiText: "Trình duyệt tạo HTTP/HTTPS request.", tcpText: "Application xử lý HTTPS request, DNS nếu cần.", code: "GET / HTTP/1.1\nHost: example.com", color: "purple" },
    { osi: "Presentation", tcp: "Application", osiText: "Vì dùng HTTPS, dữ liệu được mã hóa bằng TLS.", tcpText: "TCP/IP vẫn xem TLS nằm trong Application.", code: "HTTP data → TLS encrypted data", color: "pink" },
    { osi: "Session", tcp: "Application", osiText: "Duy trì phiên truy cập, cookie/session nếu có.", tcpText: "Session/cookie cũng thường gom vào Application.", code: "TLS session / Cookie / Token", color: "orange" },
    { osi: "Transport", tcp: "Transport", osiText: "TCP port 443 xử lý truyền tin cậy.", tcpText: "Transport xử lý TCP/UDP và port.", code: "Laptop random port → Server port 443", color: "emerald" },
    { osi: "Network", tcp: "Internet", osiText: "Gắn IP nguồn và IP đích.", tcpText: "Internet Layer xử lý IP packet và định tuyến.", code: "192.168.1.10 → 93.184.216.34", color: "cyan" },
    { osi: "Data Link", tcp: "Network Access", osiText: "Gắn MAC nguồn và MAC đích cho chặng LAN.", tcpText: "Network Access xử lý MAC/frame.", code: "MAC laptop → MAC router", color: "blue" },
    { osi: "Physical", tcp: "Network Access", osiText: "Dữ liệu thành bit và truyền qua WiFi/cáp mạng.", tcpText: "Network Access cũng bao gồm tín hiệu vật lý.", code: "010101010...", color: "slate" },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Cùng một luồng dữ liệu, hai cách nhìn" icon={<Wifi />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[360px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}><Zap size={32} /></div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-4">Laptop truy cập https://example.com</h3>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ViewCard title="Theo OSI" label={current.osi} text={current.osiText} color="cyan" />
            <ViewCard title="Theo TCP/IP" label={current.tcp} text={current.tcpText} color="purple" />
            <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-5">
              <DualFlow active={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TroubleshootingDualModel() {
  const [caseId, setCaseId] = useState("dns");
  const cases = {
    physical: {
      title: "Không thấy WiFi, dây mạng không sáng đèn",
      osi: "Tầng 1 Physical",
      tcp: "Network Access",
      explain: "Thiết bị chưa có kết nối vật lý hoặc sóng mạng chưa ổn.",
      command: "Kiểm tra dây, đèn port, WiFi signal, card mạng",
    },
    gateway: {
      title: "Có WiFi nhưng không ping được gateway",
      osi: "Tầng 2 hoặc tầng 3",
      tcp: "Network Access hoặc Internet",
      explain: "Có thể lỗi ARP/VLAN/switch hoặc IP/subnet/gateway.",
      command: "ipconfig\narp -a\nping 192.168.1.1",
    },
    dns: {
      title: "Ping 8.8.8.8 được, ping google.com không được",
      osi: "Tầng 7 Application, cụ thể DNS",
      tcp: "Application",
      explain: "Đường IP ra Internet có vẻ ổn, nhưng phân giải tên miền thất bại.",
      command: "nslookup google.com\nipconfig /all",
    },
    web: {
      title: "Ping server được nhưng không mở được website",
      osi: "Tầng 4 Transport hoặc tầng 7 Application",
      tcp: "Transport hoặc Application",
      explain: "Có thể port 80/443 bị chặn hoặc web server/app bị lỗi.",
      command: "Test-NetConnection example.com -Port 443\ncurl -I https://example.com",
    },
    cert: {
      title: "Website mở được nhưng báo lỗi chứng chỉ",
      osi: "Tầng 6 Presentation",
      tcp: "Application",
      explain: "TLS/chứng chỉ được OSI gọi rõ ở Presentation, còn TCP/IP gom vào Application.",
      command: "curl -v https://example.com\nKiểm tra chứng chỉ TLS",
    },
  };
  const current = cases[caseId];

  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Troubleshoot bằng OSI và TCP/IP" icon={<AlertTriangle />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(cases).map(([key, item]) => (
            <button key={key} onClick={() => setCaseId(key)} className={`whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${caseId === key ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{item.title}</button>
          ))}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{current.explain}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.command}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <TroubleModelCard title="Theo OSI" text={current.osi} color="cyan" />
            <TroubleModelCard title="Theo TCP/IP" text={current.tcp} color="purple" />
            <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
              <strong className="text-yellow-300">Mẹo:</strong> OSI giúp gọi tên lỗi chính xác hơn theo từng lớp nhỏ. TCP/IP giúp kiểm tra nhanh theo nhóm thực tế: Network Access → Internet → Transport → Application.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("low");
  const commands = {
    low: { title: "Tầng thấp / Network Access", cmd: "ipconfig\nip addr\narp -a", note: "Kiểm tra card mạng, IP interface, ARP và kết nối LAN." },
    internet: { title: "Internet / Network", cmd: "ping 192.168.1.1\nping 8.8.8.8\ntracert google.com\ntraceroute google.com", note: "Kiểm tra gateway, kết nối Internet bằng IP và đường đi qua router." },
    transport: { title: "Transport", cmd: "Test-NetConnection google.com -Port 443\nnc -vz google.com 443", note: "Kiểm tra TCP port 443 có mở và kết nối được không." },
    app: { title: "Application", cmd: "nslookup google.com\ncurl -I https://example.com", note: "Kiểm tra DNS và phản hồi HTTP/HTTPS." },
  };
  const current = commands[tab];

  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="blue" title="Lệnh CLI liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">osi-vs-tcpip terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key, item]) => (
                <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{item.title}</button>
              ))}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[250px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@network</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="OSI" desc="Gọi lỗi chi tiết theo 7 tầng." />
            <ExplainRow term="TCP/IP" desc="Gom lỗi theo 4 tầng thực tế." />
            <ExplainRow term="Kết hợp" desc="Dùng TCP/IP để kiểm tra nhanh, dùng OSI để phân tích sâu." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "OSI và TCP/IP là hai hệ thống mạng khác nhau?", desc: "Không. Chúng là hai mô hình mô tả truyền thông mạng, không phải hai hệ thống mạng tách biệt.", good: "OSI = mô hình tham chiếu; TCP/IP = mô hình/giao thức thực tế của Internet.", icon: <GitCompare /> },
    { title: "OSI không còn giá trị vì Internet dùng TCP/IP?", desc: "Không đúng. OSI vẫn rất hữu ích khi học và xử lý lỗi, vì nó phân lớp chi tiết hơn.", good: "OSI rất mạnh khi troubleshoot theo từng tầng.", icon: <Layers /> },
    { title: "TCP/IP chỉ có TCP và IP?", desc: "Không. TCP/IP là tên của cả bộ giao thức, gồm HTTP, HTTPS, DNS, DHCP, SMTP, FTP, SSH, TCP, UDP, IP, ICMP, ARP, Ethernet...", good: "TCP và IP chỉ là hai giao thức đại diện rất quan trọng.", icon: <Package /> },
    { title: "Application TCP/IP giống đúng Application OSI?", desc: "Không hoàn toàn. TCP/IP Application thường gom cả OSI Application, Presentation và Session.", good: "TLS, encoding, session/cookie cũng thường nằm trong TCP/IP Application.", icon: <Globe2 /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">{React.cloneElement(item.icon, { size: 24 })}</div>
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {item.good}</div>
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">12</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-cyan-300">OSI</span> = 7 tầng, chi tiết, dễ học, dễ troubleshoot.</p>
              <p><span className="text-purple-300">TCP/IP</span> = 4 tầng, thực tế, dùng nhiều khi nói về Internet.</p>
              <br />
              <p className="text-slate-500"># Ánh xạ</p>
              <p>OSI 7 + 6 + 5 = TCP/IP Application</p>
              <p>OSI 4 = TCP/IP Transport</p>
              <p>OSI 3 = TCP/IP Internet</p>
              <p>OSI 2 + 1 = TCP/IP Network Access</p>
              <br />
              <p className="text-slate-500"># Câu nhớ</p>
              <p>OSI chia kỹ để học.</p>
              <p>TCP/IP gom gọn để chạy Internet.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Mô hình OSI có bao nhiêu tầng và TCP/IP phổ biến có bao nhiêu tầng?", options: ["OSI 4 tầng, TCP/IP 7 tầng", "OSI 7 tầng, TCP/IP 4 tầng", "Cả hai đều 7 tầng", "Cả hai đều 4 tầng"], correct: 1, explanation: "OSI có 7 tầng, còn TCP/IP phổ biến thường được mô tả bằng 4 tầng." },
  { question: "OSI tầng 7, 6, 5 thường ánh xạ sang tầng nào của TCP/IP?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 0, explanation: "TCP/IP Application thường gom OSI Application, Presentation và Session." },
  { question: "OSI tầng 3 Network tương ứng với tầng nào của TCP/IP?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 2, explanation: "OSI Network tương ứng với TCP/IP Internet, nơi xử lý IP, ICMP và router." },
  { question: "OSI tầng 2 và tầng 1 thường được TCP/IP gom vào tầng nào?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 3, explanation: "TCP/IP Network Access thường gom OSI Data Link và Physical." },
  { question: "Ping 8.8.8.8 được nhưng ping google.com không được. Theo TCP/IP, lỗi nhiều khả năng ở tầng nào?", options: ["Network Access", "Internet", "Transport", "Application"], correct: 3, explanation: "Vì đi bằng IP được nhưng tên miền không phân giải được, lỗi thường nằm ở DNS, thuộc TCP/IP Application." },
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
    } else setCurrentQ("finished");
  };
  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  if (finished) {
    return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
  }

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[380px]">
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
      <p className="text-slate-400 mb-4">Sau khi nối được OSI và TCP/IP, bài tiếp theo sẽ học cơ chế đóng gói và gỡ đóng gói dữ liệu qua từng tầng.</p>
      <Link to="/phan-2-5" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 2.5 — Encapsulation & Decapsulation <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function MiniMappingVisual() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
      <div className="space-y-2">
        {osiLayers.map((l) => <SmallLayer key={l.n} layer={l} />)}
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-slate-600"><ArrowRight /><ArrowRight /><ArrowRight /><ArrowRight /></div>
      <div className="space-y-3">
        {tcpLayers.map((l) => <SmallTcp key={l.n} layer={l} />)}
      </div>
    </div>
  );
}

function SmallLayer({ layer }) {
  const c = colorClasses[layer.color];
  return <div className={`${c.bg} ${c.border} border rounded-xl p-2 flex items-center gap-2`}><span className={`${c.solid} text-white w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs`}>{layer.n}</span><span className={`${c.text} text-xs font-bold truncate`}>{layer.name}</span></div>;
}

function SmallTcp({ layer }) {
  const c = colorClasses[layer.color];
  return <div className={`${c.bg} ${c.border} border rounded-xl p-3`}><p className={`${c.text} text-sm font-black`}>{layer.name}</p><p className="text-xs text-slate-500 mt-1">{layer.maps}</p></div>;
}

function CoreCard({ title, icon, color, text, code }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function OsiLayerBox({ layer }) {
  const c = colorClasses[layer.color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 flex items-center gap-3 h-[74px]`}><div className={`${c.solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0`}>{layer.n}</div><div className="flex-1"><p className={`${c.text} font-black text-sm`}>{layer.name}</p><p className="text-xs text-slate-500">{layer.note}</p></div></div>;
}

function MapArrow({ label, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} ${c.text} border rounded-full px-4 py-2 text-center font-black text-sm flex items-center justify-center gap-2`}><span>{label}</span><ArrowRight size={16} /></div>;
}

function TcpGroupBox({ layer, height }) {
  const c = colorClasses[layer.color];
  return <div className={`${height} ${c.bg} ${c.border} border rounded-3xl p-5 flex items-center gap-4`}><div className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0`}>{layer.n}</div><div><h4 className={`${c.text} font-black text-xl`}>{layer.name}</h4><p className="text-sm text-slate-400 mt-1">{layer.note}</p><p className="text-xs text-slate-500 mt-2">{layer.maps}</p></div></div>;
}

function ModelCard({ title, color, text, layers }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>{layers}</p><h4 className="text-2xl font-black text-white mb-3">{title}</h4><p className="text-slate-300 leading-relaxed">{text}</p></div>;
}

function QuickMap({ text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl p-4 font-bold text-sm`}>{text}</div>;
}

function ExampleColumn({ title, items, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><h4 className="text-white font-bold mb-5">{title}</h4><div className="space-y-3">{items.map((item, index) => <div key={`${item}-${index}`} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 flex gap-3 items-start"><span className={`${c.solid} text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0`}>{index + 1}</span><p className="text-sm text-slate-300 leading-relaxed">{item}</p></div>)}</div></div>;
}

function ViewCard({ title, label, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>{title}</p><h4 className="text-xl font-bold text-white mb-3">{label}</h4><p className="text-sm text-slate-300 leading-relaxed">{text}</p></div>;
}

function DualFlow({ active }) {
  return <div className="grid md:grid-cols-2 gap-4"><div><p className="text-cyan-300 font-bold mb-3">OSI</p>{osiLayers.map((l, i) => <FlowPill key={l.n} label={`${l.n}. ${l.name}`} color={l.color} active={i === active} />)}</div><div><p className="text-purple-300 font-bold mb-3">TCP/IP</p>{tcpLayers.map((l) => <FlowPill key={l.n} label={`${l.n}. ${l.name}`} color={l.color} active={l.name === (active <= 2 ? "Application" : active === 3 ? "Transport" : active === 4 ? "Internet" : "Network Access")} />)}</div></div>;
}

function FlowPill({ label, color, active }) {
  const c = colorClasses[color];
  return <div className={`${active ? `${c.bg} ${c.border} ${c.text}` : "bg-slate-900 border-slate-800 text-slate-500"} border rounded-xl p-2 mb-2 text-sm font-bold`}>{label}</div>;
}

function TroubleModelCard({ title, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><p className={`${c.text} font-black text-sm uppercase tracking-wider mb-2`}>{title}</p><p className="text-xl font-bold text-white">{text}</p></div>;
}

function ExplainRow({ term, desc }) {
  return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}
