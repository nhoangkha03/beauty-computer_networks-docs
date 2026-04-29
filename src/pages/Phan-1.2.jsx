import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  Bluetooth,
  Building2,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cloud,
  Compass,
  Globe2,
  Home,
  Info,
  Laptop,
  Map,
  MapPin,
  Network,
  RadioTower,
  RefreshCcw,
  Router,
  Server,
  Smartphone,
  TableProperties,
  Terminal,
  TreePine,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const networkTypes = [
  {
    id: "pan",
    label: "PAN",
    fullName: "Personal Area Network",
    viName: "Mạng cá nhân",
    scope: "Vài mét đến vài chục mét",
    place: "Quanh một cá nhân",
    examples: ["Tai nghe Bluetooth", "Chuột Bluetooth", "Smart Watch", "Hotspot cá nhân"],
    manager: "Cá nhân",
    speed: "Thấp đến trung bình",
    icon: <Bluetooth />,
    color: "violet",
    summary: "PAN là mạng cá nhân, phạm vi rất nhỏ, thường dùng Bluetooth hoặc hotspot.",
  },
  {
    id: "lan",
    label: "LAN",
    fullName: "Local Area Network",
    viName: "Mạng cục bộ",
    scope: "Nhà, lớp học, văn phòng, tòa nhà",
    place: "Không gian nhỏ, nội bộ",
    examples: ["WiFi gia đình", "Mạng công ty", "Phòng máy tính", "Máy in mạng"],
    manager: "Gia đình / công ty",
    speed: "Thường cao",
    icon: <Home />,
    color: "cyan",
    summary: "LAN là mạng cục bộ trong phạm vi nhỏ như nhà, lớp học, văn phòng hoặc tòa nhà.",
  },
  {
    id: "man",
    label: "MAN",
    fullName: "Metropolitan Area Network",
    viName: "Mạng đô thị",
    scope: "Thành phố, khu đô thị, khu công nghiệp",
    place: "Nhiều LAN trong cùng đô thị",
    examples: ["Camera giao thông thành phố", "Mạng trường đại học nhiều cơ sở", "Mạng cơ quan trong thành phố"],
    manager: "Nhà mạng / tổ chức lớn",
    speed: "Trung bình đến cao",
    icon: <Building2 />,
    color: "orange",
    summary: "MAN kết nối nhiều LAN trong phạm vi một thành phố hoặc khu đô thị.",
  },
  {
    id: "wan",
    label: "WAN",
    fullName: "Wide Area Network",
    viName: "Mạng diện rộng",
    scope: "Quốc gia, châu lục, toàn cầu",
    place: "Khoảng cách rất xa",
    examples: ["Internet", "Mạng riêng ngân hàng toàn quốc", "Kết nối chi nhánh quốc tế"],
    manager: "Nhà mạng / tổ chức quốc tế / doanh nghiệp lớn",
    speed: "Phụ thuộc đường truyền",
    icon: <Globe2 />,
    color: "emerald",
    summary: "WAN là mạng diện rộng; Internet là ví dụ WAN công cộng lớn nhất.",
  },
];

const colorClasses = {
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/40",
    solid: "bg-violet-500",
    ring: "shadow-violet-500/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/40",
    solid: "bg-cyan-500",
    ring: "shadow-cyan-500/20",
  },
  orange: {
    text: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-400/40",
    solid: "bg-orange-500",
    ring: "shadow-orange-500/20",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/40",
    solid: "bg-emerald-500",
    ring: "shadow-emerald-500/20",
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
            Bài 1.2
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <ScopeScale />
        <TypeExplorer />
        <ComparisonTable />
        <RealWorldExamples />
        <DataPathSimulator />
        <TracerouteLab />
        <Misunderstandings />
        <SummaryAndQuiz />
        <NextLesson />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/50 p-8 md:p-12 shadow-2xl">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <Compass size={16} /> Phân loại theo phạm vi địa lý
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            PAN, LAN, MAN, WAN
            <span className="block text-cyan-400">khác nhau thế nào?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Sau khi biết mạng máy tính là gì, bài này giúp bạn phân biệt mạng quanh người, mạng trong nhà, mạng trong thành phố và mạng toàn cầu.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Từ nhỏ đến lớn</p>
            <p>
              <span className="text-violet-300">PAN</span>
              <span className="text-slate-600"> → </span>
              <span className="text-cyan-300">LAN</span>
              <span className="text-slate-600"> → </span>
              <span className="text-orange-300">MAN</span>
              <span className="text-slate-600"> → </span>
              <span className="text-emerald-300">WAN</span>
            </p>
          </div>
        </div>

        <div className="relative bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <div className="grid gap-3">
            {networkTypes.map((type, index) => (
              <div key={type.id} className={`${colorClasses[type.color].bg} ${colorClasses[type.color].border} border rounded-2xl p-4 flex items-center gap-4`}>
                <div className={`${colorClasses[type.color].solid} w-11 h-11 rounded-xl flex items-center justify-center text-white font-black shadow-lg ${colorClasses[type.color].ring}`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-extrabold ${colorClasses[type.color].text}`}>{type.label}</span>
                    <span className="text-slate-600">—</span>
                    <span className="text-white font-bold">{type.viName}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{type.scope}</p>
                </div>
                <div className={`${colorClasses[type.color].text}`}>{React.cloneElement(type.icon, { size: 24 })}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu LAN, MAN, WAN, PAN là gì.",
    "Biết cách phân biệt theo phạm vi kết nối.",
    "Nhận diện ví dụ thực tế của từng loại mạng.",
    "Biết mạng nào thường dùng trong gia đình, công ty, thành phố và Internet.",
    "Hiểu cách các loại mạng phối hợp khi truy cập website.",
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

function ScopeScale() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="violet" title="Ý tưởng chính: phân loại theo độ rộng" icon={<Map />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <p className="text-slate-300 leading-relaxed mb-8">
          Cách phân loại phổ biến nhất là hỏi: <strong className="text-white">mạng này rộng đến đâu?</strong> Quanh một cá nhân là PAN, trong nhà hoặc văn phòng là LAN, trong thành phố là MAN, còn liên tỉnh/liên quốc gia/toàn cầu là WAN.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {networkTypes.map((type, index) => (
            <ScopeCard key={type.id} type={type} index={index} />
          ))}
        </div>

        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm md:text-base font-bold">
            <ScalePill color="violet" text="PAN = quanh người bạn" />
            <ArrowRight className="text-slate-600 hidden md:block" />
            <ScalePill color="cyan" text="LAN = trong nhà/công ty" />
            <ArrowRight className="text-slate-600 hidden md:block" />
            <ScalePill color="orange" text="MAN = trong thành phố" />
            <ArrowRight className="text-slate-600 hidden md:block" />
            <ScalePill color="emerald" text="WAN = toàn cầu" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TypeExplorer() {
  const [activeId, setActiveId] = useState("pan");
  const active = networkTypes.find((item) => item.id === activeId);
  const color = colorClasses[active.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="blue" title="Khám phá từng loại mạng" icon={<CircleHelp />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {networkTypes.map((type) => {
            const isActive = activeId === type.id;
            const c = colorClasses[type.color];
            return (
              <button
                key={type.id}
                onClick={() => setActiveId(type.id)}
                className={`rounded-2xl p-4 text-left border transition-all ${isActive ? `${c.bg} ${c.border} ${c.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"
                  }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {React.cloneElement(type.icon, { size: 20 })}
                  <span className="font-black text-lg">{type.label}</span>
                </div>
                <p className="text-xs opacity-80">{type.viName}</p>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className={`${color.bg} ${color.border} border rounded-3xl p-6`}>
            <div className={`w-16 h-16 rounded-2xl ${color.solid} text-white flex items-center justify-center shadow-lg ${color.ring} mb-5`}>
              {React.cloneElement(active.icon, { size: 34 })}
            </div>
            <p className={`${color.text} font-black text-sm uppercase tracking-wider`}>{active.fullName}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.label} — {active.viName}</h3>
            <p className="text-slate-300 leading-relaxed">{active.summary}</p>
          </div>

          <div className="space-y-4">
            <InfoGrid label="Phạm vi" value={active.scope} icon={<MapPin />} color={active.color} />
            <InfoGrid label="Không gian thường gặp" value={active.place} icon={<Building2 />} color={active.color} />
            <InfoGrid label="Tốc độ thường gặp" value={active.speed} icon={<Zap />} color={active.color} />
            <InfoGrid label="Ai quản lý?" value={active.manager} icon={<Info />} color={active.color} />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-3">Ví dụ thực tế</h4>
              <div className="flex flex-wrap gap-2">
                {active.examples.map((item) => (
                  <span key={item} className={`${color.bg} ${color.border} ${color.text} border rounded-full px-3 py-1 text-sm font-medium`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Bảng so sánh nhanh" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[850px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr>
                <th className="p-4 font-semibold">Tiêu chí</th>
                {networkTypes.map((type) => (
                  <th key={type.id} className={`p-4 font-black ${colorClasses[type.color].text}`}>{type.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <TableRow title="Tên đầy đủ" values={networkTypes.map((t) => t.fullName)} />
              <TableRow title="Dịch nghĩa" values={networkTypes.map((t) => t.viName)} />
              <TableRow title="Phạm vi" values={networkTypes.map((t) => t.scope)} />
              <TableRow title="Ví dụ" values={networkTypes.map((t) => t.examples[0])} />
              <TableRow title="Tốc độ" values={networkTypes.map((t) => t.speed)} />
              <TableRow title="Quản lý" values={networkTypes.map((t) => t.manager)} last />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [scenario, setScenario] = useState("travel");

  const scenarios = {
    travel: {
      title: "So sánh với phạm vi đi lại",
      icon: <Compass />,
      cards: [
        { type: "PAN", text: "Bạn đứng trong phòng, tai nghe kết nối với điện thoại" },
        { type: "LAN", text: "Các phòng trong một căn nhà hoặc văn phòng" },
        { type: "MAN", text: "Nhiều quận trong một thành phố" },
        { type: "WAN", text: "Nhiều tỉnh, nhiều quốc gia, nhiều châu lục" },
      ],
    },
    traffic: {
      title: "So sánh với hệ thống giao thông",
      icon: <TreePine />,
      cards: [
        { type: "PAN", text: "Đường rất ngắn quanh nhà hoặc trong phòng" },
        { type: "LAN", text: "Đường nội bộ trong khu dân cư / tòa nhà" },
        { type: "MAN", text: "Đường trong thành phố" },
        { type: "WAN", text: "Quốc lộ, đường bay quốc tế, tuyến xuyên quốc gia" },
      ],
    },
    youtube: {
      title: "Ví dụ kỹ thuật: mở YouTube ở nhà",
      icon: <Smartphone />,
      cards: [
        { type: "PAN", text: "Điện thoại kết nối tai nghe Bluetooth" },
        { type: "LAN", text: "Điện thoại kết nối WiFi nhà bạn" },
        { type: "MAN", text: "Nhà mạng kết nối nhiều khu vực trong thành phố" },
        { type: "WAN", text: "Truy cập server YouTube qua Internet toàn cầu" },
      ],
    },
  };

  const current = scenarios[scenario];

  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="orange" title="Ví dụ thực tế dễ nhớ" icon={<Compass />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(scenarios).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setScenario(key)}
              className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${scenario === key ? "bg-orange-500 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
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
          <div className="grid md:grid-cols-4 gap-4">
            {current.cards.map((card) => {
              const type = networkTypes.find((t) => t.label === card.type);
              const c = colorClasses[type.color];
              return (
                <div key={card.type} className={`${c.bg} ${c.border} border rounded-2xl p-5`}>
                  <div className={`${c.text} flex items-center gap-2 mb-3 font-black text-lg`}>
                    {React.cloneElement(type.icon, { size: 22 })} {card.type}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DataPathSimulator() {
  const steps = [
    {
      title: "Laptop kết nối WiFi trong nhà",
      network: "LAN",
      desc: "Laptop → Router WiFi. Các thiết bị đang ở trong mạng cục bộ gia đình.",
      icon: <Laptop />,
      color: "cyan",
    },
    {
      title: "Router gửi dữ liệu đến nhà mạng",
      network: "Rời khỏi LAN",
      desc: "Router WiFi → Modem / thiết bị của nhà cung cấp Internet.",
      icon: <Router />,
      color: "orange",
    },
    {
      title: "Dữ liệu đi qua mạng ISP",
      network: "MAN / ISP đô thị",
      desc: "Trong phạm vi thành phố, hạ tầng nhà mạng có thể gần với mô hình MAN.",
      icon: <RadioTower />,
      color: "orange",
    },
    {
      title: "Dữ liệu ra Internet toàn cầu",
      network: "WAN",
      desc: "Nếu server ở nước ngoài, dữ liệu có thể đi qua tuyến cáp quang quốc tế.",
      icon: <Globe2 />,
      color: "emerald",
    },
    {
      title: "Server phản hồi ngược lại",
      network: "WAN → MAN/ISP → LAN",
      desc: "Server gửi dữ liệu về router nhà bạn, rồi router chuyển đến laptop.",
      icon: <Server />,
      color: "emerald",
    },
  ];

  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="purple" title="Các loại mạng phối hợp như thế nào?" icon={<Cable />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[330px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>
                {React.cloneElement(current.icon, { size: 32 })}
              </div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length} — {current.network}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed">{current.desc}</p>
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
                onClick={() => setStep((s) => (s + 1) % steps.length)}
                className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold transition-colors inline-flex items-center gap-2"
              >
                {step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
            <div className="space-y-3">
              {steps.map((item, index) => {
                const itemColor = colorClasses[item.color];
                return (
                  <button
                    key={item.title}
                    onClick={() => setStep(index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${step === index ? `${itemColor.bg} ${itemColor.border}` : index < step ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? `${itemColor.solid} text-white` : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"}`}>
                      {index < step ? <CheckCircle2 size={18} /> : index + 1}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{item.title}</p>
                      <p className={`${step === index ? itemColor.text : "text-slate-500"} text-xs font-semibold mt-1`}>{item.network}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TracerouteLab() {
  const [os, setOs] = useState("windows");
  const command = os === "windows" ? "tracert google.com" : "traceroute google.com";

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="green" title="Thực hành mini: tracert / traceroute" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">network terminal</span>
          </div>

          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button onClick={() => setOs("windows")} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${os === "windows" ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>
                Windows
              </button>
              <button onClick={() => setOs("linux")} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${os === "linux" ? "bg-orange-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>
                macOS / Linux
              </button>
            </div>

            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto">
              <p>
                <span className="text-green-400">student@network</span>
                <span className="text-slate-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-400">$ </span>
                <span className="text-white">{command}</span>
              </p>
              <div className="mt-5 space-y-2">
                <p><span className="text-slate-500">1</span> <span className="text-cyan-300">192.168.1.1</span> <span className="text-slate-500">router nhà bạn</span></p>
                <p><span className="text-slate-500">2</span> <span className="text-orange-300">10.20.0.1</span> <span className="text-slate-500">hạ tầng nhà mạng</span></p>
                <p><span className="text-slate-500">3</span> <span className="text-orange-300">203.113.x.x</span> <span className="text-slate-500">ISP / MAN</span></p>
                <p><span className="text-slate-500">4</span> <span className="text-emerald-300">72.14.x.x</span> <span className="text-slate-500">Internet / WAN</span></p>
                <p><span className="text-slate-500">5</span> <span className="text-emerald-300">google.com</span> <span className="text-slate-500">server đích</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2">
            <Info size={22} /> Cách hiểu kết quả
          </h3>
          <div className="space-y-3">
            <ExplainRow term="Dòng 1" desc="Router WiFi nhà bạn, thuộc LAN." />
            <ExplainRow term="Dòng 2-3" desc="Hạ tầng của nhà cung cấp Internet, có thể thuộc mạng ISP/MAN." />
            <ExplainRow term="Dòng 4-5" desc="Internet/WAN và server đích." />
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300">
            <strong className="text-green-300">Lưu ý:</strong> Kết quả có thể hiện dấu <code className="bg-slate-900 px-1 rounded">*</code> nếu router hoặc server chặn phản hồi. Điều đó không nhất thiết nghĩa là mạng bị hỏng.
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    {
      wrong: "WiFi có phải Internet không?",
      answer: "Không hẳn. WiFi là công nghệ kết nối không dây trong phạm vi gần, thường thuộc LAN. Bạn vẫn có thể bắt WiFi nhưng router bị mất Internet.",
      good: "WiFi = cách kết nối vào mạng cục bộ. Internet = mạng diện rộng toàn cầu.",
      icon: <Wifi />,
    },
    {
      wrong: "LAN có cần Internet không?",
      answer: "Không bắt buộc. Máy tính trong cùng văn phòng vẫn có thể gửi file, in tài liệu hoặc chơi game LAN dù không nối ra Internet.",
      good: "LAN vẫn có thể hoạt động nội bộ mà không cần Internet.",
      icon: <Home />,
    },
    {
      wrong: "Internet và WAN có giống nhau không?",
      answer: "Internet là một ví dụ của WAN, nhưng không phải mọi WAN đều là Internet. Doanh nghiệp có thể có WAN riêng để kết nối các chi nhánh.",
      good: "Internet là WAN công cộng lớn nhất; vẫn tồn tại các WAN riêng.",
      icon: <Globe2 />,
    },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<Info />} />
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.wrong} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{item.wrong}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.answer}</p>
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
            <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">9</span>
            Tóm tắt & Kiểm tra cuối bài
          </h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p><span className="text-violet-300">PAN</span> = quanh người bạn</p>
              <p><span className="text-cyan-300">LAN</span> = trong nhà / lớp / công ty</p>
              <p><span className="text-orange-300">MAN</span> = trong thành phố / đô thị</p>
              <p><span className="text-emerald-300">WAN</span> = liên tỉnh / quốc gia / toàn cầu</p>
              <br />
              <p className="text-slate-500"># Công thức hỏi nhanh</p>
              <p className="text-slate-300">Mạng này rộng đến đâu?</p>
              <br />
              <p className="text-slate-500"># Ví dụ quan trọng</p>
              <p className="text-slate-300">WiFi nhà bạn thường là LAN.</p>
              <p className="text-slate-300">Internet là WAN công cộng lớn nhất.</p>
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
    question: "Mạng nào có phạm vi nhỏ nhất?",
    options: ["WAN", "LAN", "MAN", "PAN"],
    correct: 3,
    explanation: "PAN là Personal Area Network, mạng cá nhân quanh một người, thường chỉ vài mét đến vài chục mét.",
  },
  {
    question: "Mạng WiFi trong nhà thường thuộc loại nào?",
    options: ["PAN", "LAN", "MAN", "WAN"],
    correct: 1,
    explanation: "WiFi trong nhà kết nối các thiết bị trong phạm vi nhỏ như nhà hoặc căn hộ, nên thường là LAN.",
  },
  {
    question: "Một công ty có chi nhánh ở TP.HCM, Hà Nội và Singapore. Mạng trong từng chi nhánh là gì?",
    options: ["PAN", "LAN", "MAN", "WAN"],
    correct: 1,
    explanation: "Mỗi chi nhánh có mạng nội bộ riêng, thường trong văn phòng hoặc tòa nhà, nên đó là LAN.",
  },
  {
    question: "Mạng kết nối nhiều chi nhánh ở nhiều thành phố/quốc gia với nhau thường là gì?",
    options: ["PAN", "LAN", "MAN", "WAN"],
    correct: 3,
    explanation: "Khi kết nối ở khoảng cách rất xa như liên tỉnh hoặc liên quốc gia, đó là WAN.",
  },
  {
    question: "Phát biểu nào đúng nhất?",
    options: [
      "WiFi luôn luôn là Internet",
      "LAN bắt buộc phải có Internet mới hoạt động",
      "Internet là một ví dụ lớn của WAN",
      "PAN rộng hơn WAN",
    ],
    correct: 2,
    explanation: "Internet là mạng diện rộng toàn cầu, vì vậy nó là ví dụ lớn nhất và phổ biến nhất của WAN công cộng.",
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
      <p className="text-slate-400 mb-4">Sau khi biết mạng rộng hay hẹp, bài tiếp theo sẽ học cách các thiết bị được sắp xếp trong mạng.</p>
      <Link to="/phan-1-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 1.3 — Topology mạng <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    violet: "bg-violet-500/20 text-violet-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    purple: "bg-purple-500/20 text-purple-300",
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

function ScopeCard({ type, index }) {
  const c = colorClasses[type.color];
  return (
    <div className={`${c.bg} ${c.border} border rounded-3xl p-5 relative overflow-hidden group hover:-translate-y-1 transition-all`}>
      <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/5 group-hover:scale-125 transition-transform" />
      <div className={`${c.solid} w-11 h-11 rounded-2xl text-white flex items-center justify-center font-black shadow-lg ${c.ring} mb-4 relative z-10`}>
        {index + 1}
      </div>
      <div className={`${c.text} mb-2 flex items-center gap-2 font-black text-xl relative z-10`}>
        {React.cloneElement(type.icon, { size: 22 })} {type.label}
      </div>
      <p className="text-white font-bold relative z-10">{type.viName}</p>
      <p className="text-sm text-slate-400 mt-2 leading-relaxed relative z-10">{type.scope}</p>
    </div>
  );
}

function ScalePill({ color, text }) {
  const c = colorClasses[color];
  return <span className={`${c.bg} ${c.border} ${c.text} border rounded-full px-4 py-2`}>{text}</span>;
}

function InfoGrid({ label, value, icon, color }) {
  const c = colorClasses[color];
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start">
      <div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function TableRow({ title, values, last }) {
  return (
    <tr className={`${last ? "" : "border-b border-slate-800"} hover:bg-slate-800/40 transition-colors`}>
      <td className="p-4 font-bold text-slate-300">{title}</td>
      {values.map((value, index) => (
        <td key={`${title}-${index}`} className="p-4 text-slate-400 leading-relaxed">{value}</td>
      ))}
    </tr>
  );
}

function ExplainRow({ term, desc }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
      <p className="font-mono text-green-300 text-sm font-bold">{term}</p>
      <p className="text-slate-400 text-sm mt-1">{desc}</p>
    </div>
  );
}
