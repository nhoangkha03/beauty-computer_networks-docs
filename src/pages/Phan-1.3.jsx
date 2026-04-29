import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Boxes,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  CircleHelp,
  Cpu,
  GitBranch,
  GitFork,
  Grid3X3,
  Home,
  Info,
  Laptop,
  LayoutDashboard,
  Network,
  Printer,
  RefreshCcw,
  Router,
  Server,
  Share2,
  ShieldCheck,
  Shuffle,
  Star,
  TableProperties,
  Terminal,
  Waypoints,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const topologies = [
  {
    id: "bus",
    label: "Bus",
    viName: "Đường truyền chung",
    shape: "Một đường chính",
    popularity: "Thấp",
    mainIdea: "Tất cả thiết bị dùng chung một đường truyền chính.",
    analogy: "Một tuyến đường chính, nhiều nhà nằm dọc hai bên.",
    pros: ["Ít tốn dây", "Chi phí thấp", "Dễ triển khai ở mạng rất nhỏ"],
    cons: ["Dễ nghẽn", "Khó mở rộng", "Khó tìm lỗi", "Không phổ biến hiện nay"],
    color: "yellow",
    icon: <GitBranch />,
  },
  {
    id: "star",
    label: "Star",
    viName: "Hình sao",
    shape: "Thiết bị nối về trung tâm",
    popularity: "Rất cao",
    mainIdea: "Mỗi thiết bị nối về switch hoặc router trung tâm.",
    analogy: "Nhiều con đường đổ về một vòng xoay trung tâm.",
    pros: ["Dễ quản lý", "Dễ tìm lỗi", "Dễ mở rộng", "Hiệu năng tốt"],
    cons: ["Phụ thuộc switch/router trung tâm", "Tốn dây hơn Bus", "Cần thiết bị trung tâm"],
    color: "cyan",
    icon: <Star />,
  },
  {
    id: "ring",
    label: "Ring",
    viName: "Vòng tròn",
    shape: "Nối thành vòng",
    popularity: "Thấp đến trung bình",
    mainIdea: "Dữ liệu đi theo vòng từ thiết bị này sang thiết bị kế tiếp.",
    analogy: "Một vòng chuyền thư trong lớp học.",
    pros: ["Dữ liệu đi có trật tự", "Phù hợp một số hệ thống chuyên dụng"],
    cons: ["Đứt vòng dễ ảnh hưởng mạng", "Khó thêm/bớt thiết bị", "Ít phổ biến trong LAN hiện đại"],
    color: "purple",
    icon: <CircleDot />,
  },
  {
    id: "mesh",
    label: "Mesh",
    viName: "Lưới",
    shape: "Nhiều đường kết nối",
    popularity: "Cao ở mạng lõi",
    mainIdea: "Thiết bị có nhiều đường kết nối dự phòng với nhau.",
    analogy: "Thành phố có nhiều đường nối chéo, tắc đường này còn đường khác.",
    pros: ["Độ tin cậy cao", "Chịu lỗi tốt", "Phù hợp mạng quan trọng"],
    cons: ["Tốn dây/cổng kết nối", "Cấu hình phức tạp", "Chi phí cao"],
    color: "emerald",
    icon: <Grid3X3 />,
  },
  {
    id: "hybrid",
    label: "Hybrid",
    viName: "Kết hợp",
    shape: "Kết hợp nhiều kiểu",
    popularity: "Rất cao",
    mainIdea: "Mạng thực tế thường kết hợp Star, Mesh, Ring, Bus tùy khu vực.",
    analogy: "Thành phố thật có đường chính, vòng xoay, vành đai, cao tốc.",
    pros: ["Linh hoạt", "Dễ mở rộng", "Tối ưu hiệu năng", "Phù hợp mạng hiện đại"],
    cons: ["Thiết kế phức tạp", "Chi phí có thể cao", "Cần tài liệu sơ đồ rõ ràng"],
    color: "orange",
    icon: <Shuffle />,
  },
];

const colorClasses = {
  yellow: {
    text: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/40",
    solid: "bg-yellow-500",
    ring: "shadow-yellow-500/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/40",
    solid: "bg-cyan-500",
    ring: "shadow-cyan-500/20",
  },
  purple: {
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    border: "border-purple-400/40",
    solid: "bg-purple-500",
    ring: "shadow-purple-500/20",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/40",
    solid: "bg-emerald-500",
    ring: "shadow-emerald-500/20",
  },
  orange: {
    text: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-400/40",
    solid: "bg-orange-500",
    ring: "shadow-orange-500/20",
  },
  blue: {
    text: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-400/40",
    solid: "bg-blue-500",
    ring: "shadow-blue-500/20",
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Network className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 1: Nền tảng mạng máy tính</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Bài 1.3
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <TopologyConcept />
        <PhysicalLogical />
        <TopologyExplorer />
        <ComparisonTable />
        <RealWorldAnalogies />
        <DataFlowSimulator />
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
            <Waypoints size={16} /> Hình dạng kết nối của mạng
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Topology mạng:
            <span className="block text-cyan-400">Bus, Star, Ring, Mesh, Hybrid</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Bài này giúp bạn nhìn vào một sơ đồ mạng và hiểu thiết bị nào nối với thiết bị nào, dữ liệu đi qua đâu, điểm yếu nằm ở đâu và mạng có dễ mở rộng không.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ một dòng</p>
            <p><span className="text-cyan-300">Topology</span> = hình dạng kết nối của mạng</p>
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <div className="grid grid-cols-2 gap-3">
            {topologies.map((topo) => {
              const c = colorClasses[topo.color];
              return (
                <div key={topo.id} className={`${c.bg} ${c.border} border rounded-2xl p-4 min-h-[118px]`}>
                  <div className={`${c.text} mb-3 flex items-center gap-2 font-black text-lg`}>
                    {React.cloneElement(topo.icon, { size: 22 })} {topo.label}
                  </div>
                  <TopologyMiniDiagram type={topo.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu topology mạng là gì.",
    "Phân biệt Bus, Star, Ring, Mesh, Hybrid.",
    "Biết ưu điểm và nhược điểm của từng kiểu.",
    "Biết topology nào thường gặp trong mạng thực tế.",
    "Hiểu vì sao mạng hiện đại thường dùng Star hoặc Hybrid.",
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="1" color="cyan" title="Mục tiêu bài học" icon={<Award />} />
      <div className="grid md:grid-cols-5 gap-3">
        {goals.map((goal, index) => (
          <div key={goal} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{goal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TopologyConcept() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Topology mạng là gì?" icon={<LayoutDashboard />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">Topology mạng</strong> là cách các thiết bị trong mạng được sắp xếp và kết nối với nhau.
            </p>
            <p>
              Thiết bị có thể là máy tính, laptop, switch, router, server, máy in hoặc access point WiFi. Nhìn vào topology, ta biết mạng đang nối theo kiểu đường thẳng, hình sao, vòng tròn, lưới hay kết hợp.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-1">Câu hỏi cốt lõi:</p>
              <p className="text-sm text-slate-300">Máy 1 nối với Máy 2? Máy 2 nối với Máy 3? Hay tất cả cùng nối vào Switch?</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid grid-cols-3 gap-4 items-center text-center">
              <Device icon={<Laptop />} label="PC1" />
              <LineLabel text="?" />
              <Device icon={<Laptop />} label="PC2" />
              <LineLabel text="?" />
              <Device icon={<Router />} label="Switch" highlight />
              <LineLabel text="?" />
              <Device icon={<Printer />} label="Printer" />
              <LineLabel text="?" />
              <Device icon={<Server />} label="Server" />
            </div>
            <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              Topology giúp biến dấu hỏi thành một sơ đồ rõ ràng: ai nối với ai, dữ liệu đi qua đâu, khi lỗi thì ảnh hưởng vùng nào.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhysicalLogical() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="purple" title="Physical topology và Logical topology" icon={<GitFork />} />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-300 flex items-center justify-center mb-4">
            <Cable size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Physical topology</h3>
          <p className="text-slate-400 leading-relaxed mb-5">
            Là cách dây cáp và thiết bị được nối thật ngoài đời. Ví dụ: các máy tính trong phòng cùng cắm dây về một switch.
          </p>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-purple-300">
            PC → dây mạng → Switch
          </div>
        </div>

        <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center mb-4">
            <Share2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Logical topology</h3>
          <p className="text-slate-400 leading-relaxed mb-5">
            Là cách dữ liệu thật sự di chuyển trong mạng. Có lúc dây nối nhìn một kiểu, nhưng luồng dữ liệu được xử lý theo logic khác.
          </p>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-cyan-300">
            Data → thiết bị trung gian → đích
          </div>
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-sm text-slate-300">
        Trong bài cơ bản này, ta tập trung vào <strong className="text-white">physical topology</strong>: nhìn vào cách thiết bị được nối với nhau.
      </div>
    </section>
  );
}

function TopologyExplorer() {
  const [activeId, setActiveId] = useState("star");
  const active = topologies.find((item) => item.id === activeId);
  const c = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Khám phá từng topology" icon={<CircleHelp />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {topologies.map((topo) => {
            const isActive = activeId === topo.id;
            const tc = colorClasses[topo.color];
            return (
              <button
                key={topo.id}
                onClick={() => setActiveId(topo.id)}
                className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"
                  }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {React.cloneElement(topo.icon, { size: 19 })}
                  <span className="font-black text-lg">{topo.label}</span>
                </div>
                <p className="text-xs opacity-80">{topo.viName}</p>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
              {React.cloneElement(active.icon, { size: 34 })}
            </div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.shape}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.label} — {active.viName}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.mainIdea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
              <TopologyLargeDiagram type={active.id} />
            </div>
          </div>

          <div className="space-y-4">
            <InfoBox title="Ví dụ đời thường" value={active.analogy} icon={<Home />} color={active.color} />
            <InfoBox title="Mức độ phổ biến hiện nay" value={active.popularity} icon={<Zap />} color={active.color} />
            <ProsCons pros={active.pros} cons={active.cons} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Bảng so sánh các topology" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[850px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4 font-semibold">Topology</th>
                <th className="p-4 font-semibold">Hình dạng</th>
                <th className="p-4 font-semibold">Ưu điểm chính</th>
                <th className="p-4 font-semibold">Nhược điểm chính</th>
                <th className="p-4 font-semibold">Mức độ phổ biến</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {topologies.map((topo, index) => {
                const c = colorClasses[topo.color];
                return (
                  <tr key={topo.id} className={`${index === topologies.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
                    <td className={`p-4 font-black ${c.text}`}>{topo.label}</td>
                    <td className="p-4 text-slate-300">{topo.shape}</td>
                    <td className="p-4 text-slate-400">{topo.pros[0]}</td>
                    <td className="p-4 text-slate-400">{topo.cons[0]}</td>
                    <td className="p-4 text-slate-400">{topo.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RealWorldAnalogies() {
  const [mode, setMode] = useState("traffic");
  const data = {
    traffic: {
      title: "Hệ thống giao thông",
      icon: <Waypoints />,
      rows: [
        ["Bus", "Một tuyến đường chính, nhiều nhà nằm dọc hai bên"],
        ["Star", "Nhiều con đường đổ về một vòng xoay trung tâm"],
        ["Ring", "Đường vành đai chạy thành vòng"],
        ["Mesh", "Thành phố có nhiều đường nối chéo nhau"],
        ["Hybrid", "Thành phố thật có đường chính, vòng xoay, vành đai, cao tốc"],
      ],
    },
    restaurant: {
      title: "Nhà hàng và hệ thống phục vụ",
      icon: <Boxes />,
      rows: [
        ["Bus", "Tất cả nhân viên dùng chung một quầy, đông khách dễ nghẽn"],
        ["Star", "Mọi yêu cầu đi về bếp trung tâm"],
        ["Ring", "Món ăn đi qua từng trạm: chuẩn bị → nấu → kiểm tra → phục vụ"],
        ["Mesh", "Nhiều khu bếp và nhiều lối vận chuyển dự phòng"],
        ["Hybrid", "Nhà hàng lớn kết hợp bếp trung tâm, khu phụ và nhiều lối giao món"],
      ],
    },
    company: {
      title: "Ví dụ kỹ thuật trong công ty",
      icon: <Cpu />,
      rows: [
        ["Star", "Công ty nhỏ: PC, printer, server cùng cắm vào switch trung tâm"],
        ["Hybrid", "Công ty nhiều tầng: mỗi tầng là Star, các switch tầng nối về core switch"],
        ["Mesh", "Mạng lõi hoặc router dự phòng có nhiều đường kết nối"],
        ["Bus", "Ít gặp trong LAN hiện đại"],
        ["Ring", "Ít gặp trong văn phòng phổ thông, có thể xuất hiện trong hệ thống chuyên dụng"],
      ],
    },
  };

  const current = data[mode];

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="blue" title="Ví dụ thực tế dễ nhớ" icon={<Home />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(data).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${mode === key ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
            >
              {React.cloneElement(item.icon, { size: 16 })} {item.title}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            {React.cloneElement(current.icon, { size: 22 })} {current.title}
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {current.rows.map(([label, text]) => {
              const topo = topologies.find((t) => t.label === label);
              const c = colorClasses[topo.color];
              return (
                <div key={label} className={`${c.bg} ${c.border} border rounded-2xl p-5`}>
                  <div className={`${c.text} flex items-center gap-2 mb-3 font-black text-lg`}>
                    {React.cloneElement(topo.icon, { size: 20 })} {label}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DataFlowSimulator() {
  const flows = {
    bus: {
      title: "Bus: PC1 gửi cho PC4",
      color: "yellow",
      steps: [
        "PC1 đặt dữ liệu lên đường truyền chính.",
        "Dữ liệu chạy trên đường bus dùng chung.",
        "PC2 và PC3 kiểm tra địa chỉ, thấy không phải của mình thì bỏ qua.",
        "PC4 thấy đúng địa chỉ nên nhận dữ liệu.",
        "Nếu nhiều máy cùng gửi, đường bus có thể nghẽn hoặc va chạm.",
      ],
    },
    star: {
      title: "Star: PC1 gửi cho PC4",
      color: "cyan",
      steps: [
        "PC1 gửi dữ liệu đến switch trung tâm.",
        "Switch kiểm tra đích đến là PC4.",
        "Switch chuyển dữ liệu đúng cổng nối với PC4.",
        "PC2 và PC3 không cần nhận dữ liệu nếu switch đã học đúng cổng.",
        "Nếu dây của PC2 hỏng, thường chỉ PC2 bị ảnh hưởng.",
      ],
    },
    ring: {
      title: "Ring: PC1 gửi cho PC4",
      color: "purple",
      steps: [
        "PC1 gửi dữ liệu vào vòng.",
        "Dữ liệu đi qua PC2.",
        "Dữ liệu tiếp tục đi qua PC3.",
        "PC4 thấy đúng địa chỉ nên nhận dữ liệu.",
        "Nếu vòng bị đứt mà không có dự phòng, dữ liệu có thể không đi được.",
      ],
    },
    mesh: {
      title: "Mesh: A gửi cho D",
      color: "emerald",
      steps: [
        "A kiểm tra các đường có thể đi: A→D, A→B→D, A→C→D.",
        "Mạng chọn đường phù hợp nhất.",
        "Nếu đường trực tiếp A→D tốt, dữ liệu đi thẳng.",
        "Nếu A→D lỗi, dữ liệu có thể đi vòng qua B hoặc C.",
        "Mesh có khả năng dự phòng rất tốt.",
      ],
    },
    hybrid: {
      title: "Hybrid: PC đi ra Internet",
      color: "orange",
      steps: [
        "PC gửi dữ liệu đến switch gần nhất ở tầng/phòng.",
        "Switch tầng chuyển dữ liệu lên core switch.",
        "Core switch hoặc router chuyển tiếp đến mạng khác.",
        "Router đưa dữ liệu ra Internet.",
        "Trong mạng lớn, dữ liệu có thể đi qua nhiều đường dự phòng.",
      ],
    },
  };

  const [flowId, setFlowId] = useState("star");
  const [step, setStep] = useState(0);
  const flow = flows[flowId];
  const c = colorClasses[flow.color];

  const selectFlow = (id) => {
    setFlowId(id);
    setStep(0);
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Dữ liệu đi như thế nào trong từng topology?" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.keys(flows).map((id) => {
            const topo = topologies.find((t) => t.id === id);
            return (
              <button
                key={id}
                onClick={() => selectFlow(id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${flowId === id ? `${colorClasses[topo.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
              >
                {React.cloneElement(topo.icon, { size: 16 })} {topo.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[345px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
                <span className="font-black text-xl">{step + 1}</span>
              </div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{flow.steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{flow.title}</h3>
              <p className="text-slate-300 leading-relaxed">{flow.steps[step]}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
              >
                Quay lại
              </button>
              <button
                onClick={() => setStep((s) => (s + 1) % flow.steps.length)}
                className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold transition-colors inline-flex items-center gap-2"
              >
                {step === flow.steps.length - 1 ? "Xem lại" : "Bước tiếp"}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <div className="mb-5">
              <TopologyLargeDiagram type={flowId} activeStep={step} />
            </div>
            <div className="space-y-3">
              {flow.steps.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setStep(index)}
                  className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${step === index ? `${c.bg} ${c.border}` : index < step ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"
                    }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${step === index ? `${c.solid} text-white` : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"}`}>
                    {index < step ? <CheckCircle2 size={16} /> : index + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CliLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: {
      title: "Kiểm tra kết nối đến router",
      command: "ping 192.168.1.1",
      output: [
        "Reply from 192.168.1.1: bytes=32 time=2ms TTL=64",
        "Reply from 192.168.1.1: bytes=32 time=2ms TTL=64",
        "Reply from 192.168.1.1: bytes=32 time=3ms TTL=64",
      ],
      note: "Nếu có phản hồi, máy bạn kết nối được đến router trong mạng nội bộ.",
    },
    trace: {
      title: "Xem đường đi đến website",
      command: "tracert google.com  # Windows\ntraceroute google.com  # macOS/Linux",
      output: [
        "1   192.168.1.1      router nhà bạn",
        "2   10.20.0.1       nhà mạng / ISP",
        "3   203.113.x.x     hạ tầng Internet",
        "4   72.14.x.x       server đích",
      ],
      note: "Lệnh này không cho biết toàn bộ topology, nhưng giúp thấy dữ liệu đi qua các điểm trung gian nào.",
    },
    ip: {
      title: "Xem địa chỉ IP của máy",
      command: "ipconfig  # Windows\nip addr   # Linux\nifconfig  # macOS/Linux cũ",
      output: [
        "IPv4 Address . . . . . . . . . . : 192.168.1.25",
        "Default Gateway . . . . . . . . : 192.168.1.1",
        "DNS Servers . . . . . . . . . . : 8.8.8.8",
      ],
      note: "Địa chỉ IP giúp xác định máy của bạn trong mạng; gateway thường là router.",
    },
  };
  const current = commands[tab];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Thực hành CLI liên quan" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">network terminal</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <TerminalButton active={tab === "ping"} onClick={() => setTab("ping")} text="ping" />
              <TerminalButton active={tab === "trace"} onClick={() => setTab("trace")} text="tracert / traceroute" />
              <TerminalButton active={tab === "ip"} onClick={() => setTab("ip")} text="ipconfig / ip addr" />
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p>
                <span className="text-green-400">student@network</span>
                <span className="text-slate-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$ </span>
                <span className="text-white">{current.command}</span>
              </p>
              <div className="mt-5 space-y-2">
                {current.output.map((line) => (
                  <p key={line} className="text-green-400">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2"><Info size={22} /> Ghi chú</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-sm text-slate-400">
            Các lệnh này giúp quan sát mạng, nhưng topology đầy đủ thường cần sơ đồ mạng, cấu hình switch/router hoặc công cụ quản trị mạng chuyên dụng.
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    {
      title: "Mạng WiFi là topology gì?",
      desc: "WiFi gia đình thường nhìn logic đơn giản giống Star: điện thoại, laptop, TV đều kết nối về router hoặc access point trung tâm.",
      good: "WiFi gia đình thường gần với Star.",
      icon: <Wifi />,
    },
    {
      title: "Topology chỉ là hình vẽ dây mạng?",
      desc: "Không hoàn toàn. Topology còn giúp hiểu dữ liệu đi qua đâu, điểm nào là điểm yếu, mạng có dễ mở rộng không và khi lỗi thì vùng nào bị ảnh hưởng.",
      good: "Topology là công cụ phân tích mạng, không chỉ là hình vẽ.",
      icon: <LayoutDashboard />,
    },
    {
      title: "Mesh lúc nào cũng tốt nhất?",
      desc: "Không hẳn. Mesh rất bền nhưng tốn cáp, tốn cổng, cấu hình phức tạp và chi phí cao. Mạng nhỏ thường dùng Star là đủ.",
      good: "Mesh phù hợp phần lõi hoặc mạng quan trọng, không phải mọi nơi.",
      icon: <Grid3X3 />,
    },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300">
              <CheckCircle2 size={16} className="inline mr-1" /> {item.good}
            </div>
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">10</span>
            Tóm tắt & Kiểm tra cuối bài
          </h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-yellow-300">Bus</span> = một đường chính dùng chung</p>
              <p><span className="text-cyan-300">Star</span> = nối về thiết bị trung tâm</p>
              <p><span className="text-purple-300">Ring</span> = nối thành vòng</p>
              <p><span className="text-emerald-300">Mesh</span> = nhiều đường kết nối dự phòng</p>
              <p><span className="text-orange-300">Hybrid</span> = kết hợp nhiều kiểu</p>
              <br />
              <p className="text-slate-500"># Thực tế hiện nay</p>
              <p className="text-slate-300">- LAN văn phòng thường dùng Star.</p>
              <p className="text-slate-300">- Mạng lớn thường là Hybrid.</p>
              <p className="text-slate-300">- Mesh dùng nhiều ở phần lõi/dự phòng.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    question: "Topology mạng là gì?",
    options: ["Tốc độ Internet", "Cách các thiết bị trong mạng được sắp xếp và kết nối", "Tên của nhà mạng", "Mật khẩu WiFi"],
    correct: 1,
    explanation: "Topology là hình dạng kết nối của mạng: thiết bị nào nối với thiết bị nào, dữ liệu có thể đi qua đâu.",
  },
  {
    question: "Mạng văn phòng nhỏ có nhiều máy tính cùng cắm vào một switch trung tâm thường là topology nào?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    correct: 2,
    explanation: "Khi các thiết bị đều nối về switch/router trung tâm, đó là Star topology.",
  },
  {
    question: "Topology nào có nhiều đường dự phòng và chịu lỗi tốt nhất?",
    options: ["Bus", "Mesh", "Ring", "Star"],
    correct: 1,
    explanation: "Mesh có nhiều đường kết nối giữa các thiết bị. Nếu một đường lỗi, dữ liệu có thể đi đường khác.",
  },
  {
    question: "Nhược điểm lớn nhất của Star là gì?",
    options: ["Không cần switch", "Phụ thuộc thiết bị trung tâm", "Không thể thêm máy mới", "Không dùng được trong LAN"],
    correct: 1,
    explanation: "Star dễ quản lý, nhưng nếu switch/router trung tâm hỏng thì nhiều kết nối có thể bị ảnh hưởng.",
  },
  {
    question: "Một công ty nhiều tầng: mỗi tầng dùng switch riêng, các switch nối về core switch, thêm router dự phòng. Toàn bộ mạng thường gọi là gì?",
    options: ["Bus", "Ring", "Hybrid", "PAN"],
    correct: 2,
    explanation: "Đó là Hybrid vì kết hợp nhiều Star nhỏ, thiết bị lõi và đường dự phòng.",
  },
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

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  if (finished) {
    return (
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]">
        <div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div>
        <h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4>
        <p className="text-slate-400 mb-6">
          Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.
        </p>
        <button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[380px]">
      <div className="flex justify-between items-center mb-4 text-sm font-medium">
        <span className="text-cyan-400">Câu hỏi {currentQ + 1}/{questions.length}</span>
        <span className="text-slate-500">Điểm: {score}</span>
      </div>

      <h4 className="text-lg font-bold text-white mb-6 leading-snug">{q.question}</h4>

      <div className="space-y-3 flex-grow">
        {q.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-4 rounded-xl border text-sm transition-all ";
          if (!showResult) {
            btnClass += "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
          } else if (idx === q.correct) {
            btnClass += "border-green-500 bg-green-500/10 text-green-400";
          } else if (idx === selected) {
            btnClass += "border-red-500 bg-red-500/10 text-red-400";
          } else {
            btnClass += "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} disabled={showResult} className={btnClass}>
              {opt}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <div className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}>
            <strong>Giải thích:</strong> {q.explanation}
          </div>
          <button onClick={handleNext} className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors">
            {currentQ < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
          </button>
        </div>
      )}
    </div>
  );
}

function NextLesson() {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">Sau khi hiểu topology, bước tiếp theo là học vai trò của từng thiết bị trong sơ đồ mạng.</p>
      <Link to="/phan-1-4" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 1.4 — Hub, Switch, Router, Modem, AP <ChevronRight size={20} />
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
  };

  return (
    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
      <span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}>
        <span className="font-black">{number}</span>
        {React.cloneElement(icon, { size: 20 })}
      </span>
      {title}
    </h3>
  );
}

function Device({ icon, label, highlight }) {
  return (
    <div className={`${highlight ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-300" : "bg-slate-900 border-slate-800 text-slate-300"} border rounded-2xl p-4 flex flex-col items-center justify-center min-h-[95px]`}>
      {React.cloneElement(icon, { size: 26 })}
      <span className="text-xs font-bold mt-2">{label}</span>
    </div>
  );
}

function LineLabel({ text }) {
  return <div className="text-slate-600 font-black text-2xl">{text}</div>;
}

function TopologyMiniDiagram({ type }) {
  if (type === "bus") {
    return <div className="font-mono text-xs text-slate-300">PC1──PC2──PC3<br /><span className="text-yellow-300">──── BUS ────</span></div>;
  }
  if (type === "star") {
    return <div className="font-mono text-xs text-slate-300 text-center">PC1<br /> │<br />PC2─SW─PC3</div>;
  }
  if (type === "ring") {
    return <div className="font-mono text-xs text-slate-300 text-center">PC1──PC2<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br />PC4──PC3</div>;
  }
  if (type === "mesh") {
    return <div className="font-mono text-xs text-slate-300 text-center">A╲╱B<br />╳<br />C╱╲D</div>;
  }
  return <div className="font-mono text-xs text-slate-300 text-center">Core<br />╱ ╲<br />SW A&nbsp;&nbsp;SW B</div>;
}

function TopologyLargeDiagram({ type }) {
  const node = "w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold shadow-lg";
  const line = "bg-slate-700";

  if (type === "bus") {
    return (
      <div className="py-8">
        <div className="grid grid-cols-4 gap-4 text-center mb-4">
          {["PC1", "PC2", "PC3", "PC4"].map((x) => <div key={x} className="flex flex-col items-center"><div className={node}>{x}</div><div className={`w-px h-8 ${line}`} /></div>)}
        </div>
        <div className="h-3 rounded-full bg-yellow-500/60 border border-yellow-400/60" />
        <p className="text-center text-xs text-yellow-300 mt-3 font-bold">Đường truyền chính dùng chung</p>
      </div>
    );
  }

  if (type === "star") {
    return (
      <div className="relative min-h-[260px] flex items-center justify-center">
        <div className="absolute top-4 left-1/2 -translate-x-1/2"><div className={node}>PC1</div></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2"><div className={node}>PC4</div></div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2"><div className={node}>PC2</div></div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2"><div className={node}>PC3</div></div>
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-px h-14 bg-slate-700" />
        <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-px h-14 bg-slate-700" />
        <div className="absolute left-[75px] top-1/2 -translate-y-1/2 h-px w-24 bg-slate-700" />
        <div className="absolute right-[75px] top-1/2 -translate-y-1/2 h-px w-24 bg-slate-700" />
        <div className="w-20 h-20 rounded-3xl bg-cyan-500 text-white flex items-center justify-center font-black shadow-lg shadow-cyan-500/20">SW</div>
      </div>
    );
  }

  if (type === "ring") {
    return (
      <div className="relative min-h-[260px] max-w-sm mx-auto">
        <div className="absolute top-4 left-4"><div className={node}>PC1</div></div>
        <div className="absolute top-4 right-4"><div className={node}>PC2</div></div>
        <div className="absolute bottom-4 right-4"><div className={node}>PC3</div></div>
        <div className="absolute bottom-4 left-4"><div className={node}>PC4</div></div>
        <div className="absolute top-[42px] left-[72px] right-[72px] h-px bg-purple-500/70" />
        <div className="absolute bottom-[42px] left-[72px] right-[72px] h-px bg-purple-500/70" />
        <div className="absolute left-[42px] top-[72px] bottom-[72px] w-px bg-purple-500/70" />
        <div className="absolute right-[42px] top-[72px] bottom-[72px] w-px bg-purple-500/70" />
      </div>
    );
  }

  if (type === "mesh") {
    return (
      <div className="relative min-h-[280px] max-w-sm mx-auto">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10"><div className={node}>A</div></div>
        <div className="absolute top-24 left-6 z-10"><div className={node}>B</div></div>
        <div className="absolute top-24 right-6 z-10"><div className={node}>C</div></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"><div className={node}>D</div></div>
        <SvgLines />
      </div>
    );
  }

  return (
    <div className="relative min-h-[280px] max-w-md mx-auto">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10"><div className="w-24 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black shadow-lg shadow-orange-500/20">Core</div></div>
      <div className="absolute top-28 left-10 z-10"><div className="w-24 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold">Switch A</div></div>
      <div className="absolute top-28 right-10 z-10"><div className="w-24 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold">Switch B</div></div>
      <div className="absolute bottom-4 left-4 z-10"><div className={node}>PC1</div></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"><div className={node}>PC2</div></div>
      <div className="absolute bottom-4 right-4 z-10"><div className={node}>PC3</div></div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="none">
        <line x1="200" y1="55" x2="100" y2="120" stroke="rgb(71 85 105)" strokeWidth="2" />
        <line x1="200" y1="55" x2="300" y2="120" stroke="rgb(71 85 105)" strokeWidth="2" />
        <line x1="100" y1="150" x2="55" y2="235" stroke="rgb(71 85 105)" strokeWidth="2" />
        <line x1="100" y1="150" x2="200" y2="235" stroke="rgb(71 85 105)" strokeWidth="2" />
        <line x1="300" y1="150" x2="345" y2="235" stroke="rgb(71 85 105)" strokeWidth="2" />
        <line x1="300" y1="150" x2="200" y2="235" stroke="rgb(71 85 105)" strokeWidth="2" />
      </svg>
    </div>
  );
}

function SvgLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 280" preserveAspectRatio="none">
      <line x1="150" y1="35" x2="55" y2="120" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
      <line x1="150" y1="35" x2="245" y2="120" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
      <line x1="150" y1="35" x2="150" y2="245" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
      <line x1="55" y1="120" x2="245" y2="120" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
      <line x1="55" y1="120" x2="150" y2="245" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
      <line x1="245" y1="120" x2="150" y2="245" stroke="rgb(16 185 129 / 0.7)" strokeWidth="2" />
    </svg>
  );
}

function InfoBox({ title, value, icon, color }) {
  const c = colorClasses[color];
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start">
      <div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function ProsCons({ pros, cons }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
        <h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4>
        <ul className="space-y-3">
          {pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}
        </ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
        <h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4>
        <ul className="space-y-3">
          {cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function TerminalButton({ active, onClick, text }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${active ? "bg-green-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>
      {text}
    </button>
  );
}
