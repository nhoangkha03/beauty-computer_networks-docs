import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Cable,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Database,
  FileText,
  Globe2,
  HardDrive,
  Home,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Package,
  Printer,
  RadioTower,
  RefreshCcw,
  Router,
  Search,
  Server,
  Share2,
  ShieldCheck,
  Smartphone,
  Terminal,
  Tv,
  Wifi,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

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
              <h1 className="text-xl font-bold text-white tracking-tight">
                Khóa học Mạng Máy Tính
              </h1>
              <p className="text-xs text-slate-500">Nền tảng mạng cho người mới bắt đầu</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Bài 1.1
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <PostalAnalogy />
        <CoreConcepts />
        <HomeNetworkDiagram />
        <DataFlowSimulator />
        <PingLab />
        <HistoryTimeline />
        <Applications />
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
      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
            <BookOpen size={16} /> Phần 1: Nền tảng mạng máy tính
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Mạng máy tính là gì?
            <span className="block text-cyan-400">Lịch sử & ứng dụng</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Học cách các thiết bị như laptop, điện thoại, router, server kết nối với nhau để trao đổi dữ liệu, chia sẻ tài nguyên và tạo nên Internet hiện đại.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Tag icon={<Wifi size={16} />} text="WiFi" />
            <Tag icon={<Server size={16} />} text="Server" />
            <Tag icon={<Package size={16} />} text="Gói dữ liệu" />
            <Tag icon={<Globe2 size={16} />} text="Internet" />
          </div>
        </div>

        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <div className="grid grid-cols-3 gap-3">
            <DeviceTile icon={<Laptop />} label="Laptop" active />
            <DeviceTile icon={<Smartphone />} label="Phone" active />
            <DeviceTile icon={<Printer />} label="Printer" />
            <DeviceTile icon={<Router />} label="Router" highlight />
            <DeviceTile icon={<Server />} label="Server" active />
            <DeviceTile icon={<Tv />} label="Smart TV" />
          </div>
          <div className="mt-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-sm">
            <p className="text-slate-500">// Ý tưởng chính</p>
            <p className="text-cyan-300">Thiết bị + Kết nối + Quy tắc</p>
            <p className="text-slate-300">= Mạng máy tính</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu mạng máy tính là gì.",
    "Biết vì sao cần kết nối nhiều thiết bị lại với nhau.",
    "Phân biệt dữ liệu, tài nguyên, IP, router, server ở mức cơ bản.",
    "Nắm lịch sử phát triển từ máy riêng lẻ đến Internet và IoT.",
    "Tự đọc được một kết quả ping đơn giản.",
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

function PostalAnalogy() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Hiểu mạng qua ví dụ bưu điện" icon={<Mail />} />
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8">
        <p className="text-slate-300 mb-8 leading-relaxed">
          Khi gửi thư, bạn cần người gửi, người nhận, địa chỉ, đường vận chuyển và quy tắc gửi. Mạng máy tính cũng tương tự, chỉ khác là “lá thư” được biến thành dữ liệu số.
        </p>

        <div className="grid md:grid-cols-5 gap-4 items-stretch">
          <AnalogyCard icon="👤" title="Người gửi" desc="Máy gửi dữ liệu" />
          <FlowArrow />
          <AnalogyCard icon="📦" title="Lá thư" desc="Gói dữ liệu" highlight />
          <FlowArrow />
          <AnalogyCard icon="🏠" title="Người nhận" desc="Máy nhận dữ liệu" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <MappingCard left="Địa chỉ nhà" right="Địa chỉ IP" icon={<MapPin />} />
          <MappingCard left="Nhân viên bưu điện" right="Router / Switch" icon={<Router />} />
          <MappingCard left="Quy tắc gửi thư" right="Giao thức mạng" icon={<ShieldCheck />} />
          <MappingCard left="Đường vận chuyển" right="Cáp mạng / WiFi" icon={<Cable />} />
        </div>
      </div>
    </section>
  );
}

function CoreConcepts() {
  const [active, setActive] = useState("network");

  const concepts = {
    network: {
      icon: <Network />,
      title: "Mạng máy tính là gì?",
      short: "Nhiều thiết bị được kết nối để trao đổi dữ liệu và chia sẻ tài nguyên.",
      body: (
        <div className="space-y-5">
          <p>
            <strong className="text-white">Mạng máy tính</strong> là hệ thống gồm laptop, điện thoại, máy in, router, server… được kết nối với nhau để gửi nhận dữ liệu.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <MiniRole icon={<Laptop />} title="Laptop" desc="Gửi/nhận dữ liệu" />
            <MiniRole icon={<Router />} title="Router WiFi" desc="Chia mạng và ra Internet" />
            <MiniRole icon={<Printer />} title="Máy in" desc="Dùng chung trong văn phòng" />
            <MiniRole icon={<Server />} title="Server" desc="Cung cấp website, dữ liệu" />
          </div>
        </div>
      ),
    },
    data: {
      icon: <Database />,
      title: "Dữ liệu trong mạng là gì?",
      short: "Tin nhắn, ảnh, video, file, website đều được chuyển thành bit 0 và 1.",
      body: (
        <div className="space-y-5">
          <p>
            Trong mạng, thứ được truyền đi không phải “đồ vật”, mà là dữ liệu số. Ví dụ chữ <strong className="text-white">Hello</strong> được máy tính biểu diễn bằng bit.
          </p>
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 font-mono text-sm overflow-x-auto">
            <p className="text-slate-400">Hello</p>
            <p className="text-cyan-400">→ dữ liệu số</p>
            <p className="text-green-400">→ 01001000 01100101 01101100 01101100 01101111</p>
            <p className="text-slate-300">→ gửi qua mạng</p>
          </div>
        </div>
      ),
    },
    resource: {
      icon: <Share2 />,
      title: "Chia sẻ tài nguyên là gì?",
      short: "Nhiều thiết bị dùng chung máy in, file, Internet, ứng dụng hoặc server.",
      body: (
        <div className="space-y-5">
          <p>
            Một lý do rất quan trọng để tạo mạng là <strong className="text-white">chia sẻ tài nguyên</strong>. Ví dụ cả văn phòng dùng chung một máy in thay vì mỗi người mua một máy riêng.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <MiniRole icon={<Printer />} title="Máy in" desc="Nhiều nhân viên dùng chung" />
            <MiniRole icon={<FileText />} title="File" desc="Chia sẻ qua Drive / file server" />
            <MiniRole icon={<Wifi />} title="Internet" desc="Nhiều thiết bị dùng chung WiFi" />
            <MiniRole icon={<Cloud />} title="Ứng dụng" desc="Hệ thống bệnh viện, doanh nghiệp" />
          </div>
        </div>
      ),
    },
  };

  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="Khái niệm cốt lõi" icon={<Brain />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(concepts).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all ${active === key
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/10"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
            >
              <span className="shrink-0">{React.cloneElement(item.icon, { size: 22 })}</span>
              <span>
                <span className="block font-bold text-sm">{item.title}</span>
                <span className={`block text-xs mt-1 ${active === key ? "text-white/75" : "text-slate-500"}`}>{item.short}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 text-slate-300 leading-relaxed">
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
            {concepts[active].icon}
            {concepts[active].title}
          </h3>
          {concepts[active].body}
        </div>
      </div>
    </section>
  );
}

function HomeNetworkDiagram() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="orange" title="Sơ đồ mạng gia đình đơn giản" icon={<Home />} />
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col items-center gap-5">
          <NetworkNode icon={<Globe2 />} label="Internet" desc="Mạng toàn cầu" color="cyan" />
          <VerticalLine />
          <NetworkNode icon={<RadioTower />} label="Modem" desc="Kết nối nhà bạn với nhà mạng" color="blue" />
          <VerticalLine />
          <NetworkNode icon={<Router />} label="Router WiFi" desc="Chia mạng cho nhiều thiết bị" color="orange" large />

          <div className="w-full max-w-3xl relative pt-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-700" />
            <div className="absolute top-8 left-[12%] right-[12%] h-px bg-slate-700" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ChildDevice icon={<Laptop />} label="Laptop" />
              <ChildDevice icon={<Smartphone />} label="Phone" />
              <ChildDevice icon={<Tv />} label="Smart TV" />
              <ChildDevice icon={<Printer />} label="Printer" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 text-orange-100">
          <p className="font-semibold text-orange-300 mb-1">Ghi nhớ:</p>
          <p className="text-sm text-slate-300">
            Internet không “nằm trong router”. Router chỉ là thiết bị trung gian giúp các thiết bị trong nhà đi ra mạng Internet.
          </p>
        </div>
      </div>
    </section>
  );
}

function DataFlowSimulator() {
  const steps = [
    { title: "Máy bạn tạo yêu cầu", desc: "Tôi muốn truy cập example.com", icon: <Laptop /> },
    { title: "Gửi đến Router", desc: "Laptop → Router WiFi", icon: <Router /> },
    { title: "Ra Internet", desc: "Router → Nhà mạng → Internet", icon: <Globe2 /> },
    { title: "Đến Server", desc: "Internet → Server example.com", icon: <Server /> },
    { title: "Server phản hồi", desc: "Server gửi dữ liệu website ngược lại", icon: <RefreshCcw /> },
    { title: "Trình duyệt hiển thị", desc: "Dữ liệu → Trang web bạn nhìn thấy", icon: <MonitorSmartphone /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="purple" title="Mạng hoạt động như thế nào?" icon={<Activity />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[330px] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-5">
                {React.cloneElement(current.icon, { size: 32 })}
              </div>
              <p className="text-purple-300 text-sm font-bold mb-2">Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-400 leading-relaxed">{current.desc}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
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

          <div className="space-y-3">
            {steps.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setStep(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${step === index
                    ? "bg-purple-500/10 border-purple-500/40 text-white"
                    : index < step
                      ? "bg-green-500/5 border-green-500/20 text-slate-300"
                      : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                  }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step === index ? "bg-purple-500 text-white" : index < step ? "bg-green-500/20 text-green-400" : "bg-slate-900 text-slate-500"}`}>
                  {index < step ? <CheckCircle2 size={18} /> : index + 1}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs opacity-75 mt-1">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PingLab() {
  const [ran, setRan] = useState(false);

  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="green" title="Thực hành mini: lệnh ping" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm min-h-[320px]">
            <p>
              <span className="text-green-400">student@network</span>
              <span className="text-slate-400">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-400">$ </span>
              <span className="text-white">ping google.com</span>
            </p>

            {!ran ? (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setRan(true)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-colors"
                >
                  <Zap size={18} /> Chạy mô phỏng ping
                </button>
              </div>
            ) : (
              <div className="mt-5 space-y-2 animate-in fade-in slide-in-from-bottom-2">
                <p className="text-slate-400">PING google.com (142.250.190.14): 56 data bytes</p>
                <p className="text-green-400">Reply from 142.250.190.14: bytes=32 time=20ms TTL=117</p>
                <p className="text-green-400">Reply from 142.250.190.14: bytes=32 time=19ms TTL=117</p>
                <p className="text-green-400">Reply from 142.250.190.14: bytes=32 time=21ms TTL=117</p>
                <p className="text-slate-500 pt-3">--- google.com ping statistics ---</p>
                <p className="text-slate-300">3 packets transmitted, 3 received, 0% packet loss</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-green-300 mb-5 flex items-center gap-2">
            <Search size={22} /> Đọc kết quả ping
          </h3>
          <div className="space-y-3">
            <ExplainRow term="Reply from" desc="Có phản hồi từ máy đích" />
            <ExplainRow term="bytes=32" desc="Kích thước dữ liệu phản hồi" />
            <ExplainRow term="time=20ms" desc="Thời gian đi và về" />
            <ExplainRow term="TTL" desc="Số lần gói tin còn được phép đi qua router" />
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300">
            <strong className="text-green-300">Kết luận nhanh:</strong> Có phản hồi nghĩa là máy bạn có thể kết nối đến địa chỉ đó. Không phản hồi có thể do mất mạng, lỗi DNS, firewall hoặc máy đích không trả lời ping.
          </div>
        </div>
      </div>
    </section>
  );
}

function HistoryTimeline() {
  const items = [
    { period: "Ban đầu", title: "Máy tính hoạt động riêng lẻ", desc: "Muốn chuyển dữ liệu phải dùng băng từ, đĩa mềm hoặc thiết bị lưu trữ." },
    { period: "LAN", title: "Kết nối trong phạm vi nhỏ", desc: "Máy tính trong cùng phòng, tòa nhà hoặc văn phòng bắt đầu chia sẻ máy in, file, server." },
    { period: "ARPANET", title: "Nền móng của Internet", desc: "Dữ liệu được chia thành các gói nhỏ và truyền qua nhiều đường khác nhau." },
    { period: "Internet", title: "Mạng của các mạng", desc: "Nhiều mạng nhỏ kết nối với nhau tạo thành mạng khổng lồ toàn cầu." },
    { period: "Hiện đại", title: "Cloud & IoT", desc: "Điện thoại, camera, TV, đồng hồ, máy lạnh thông minh và server cloud đều tham gia mạng." },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="yellow" title="Lịch sử ngắn gọn của mạng máy tính" icon={<Clock3 />} />
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={item.title} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-yellow-500 text-slate-950 font-extrabold flex items-center justify-center z-10 shadow-lg shadow-yellow-500/20 text-xs">
                {index + 1}
              </div>
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-yellow-500/40 transition-colors ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">{item.period}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Applications() {
  const apps = [
    { icon: <MessageCircle />, title: "Giao tiếp", desc: "Zalo, Messenger, Email, Zoom, Teams" },
    { icon: <Search />, title: "Truy cập thông tin", desc: "Google, Wikipedia, YouTube, báo điện tử, ChatGPT" },
    { icon: <FileText />, title: "Chia sẻ file", desc: "Google Drive, OneDrive, Dropbox, file server công ty" },
    { icon: <HardDrive />, title: "Thương mại điện tử", desc: "Shopee, Lazada, Tiki, ngân hàng, ví điện tử" },
    { icon: <Server />, title: "Hệ thống doanh nghiệp", desc: "Quản lý bệnh nhân, giường bệnh, suất ăn, hồ sơ" },
    { icon: <MonitorSmartphone />, title: "Thiết bị thông minh", desc: "Camera, Smart TV, đồng hồ, máy lạnh IoT" },
  ];

  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="pink" title="Ứng dụng thực tế của mạng máy tính" icon={<Globe2 />} />
      <div className="grid md:grid-cols-3 gap-4">
        {apps.map((app) => (
          <div key={app.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-pink-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-300 flex items-center justify-center mb-4">
              {React.cloneElement(app.icon, { size: 24 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{app.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{app.desc}</p>
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
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
              Ghi nhớ nhanh
            </h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>MẠNG MÁY TÍNH = nhiều thiết bị kết nối</p>
              <p className="text-slate-300">→ trao đổi dữ liệu</p>
              <p className="text-slate-300">→ chia sẻ tài nguyên</p>
              <br />
              <p className="text-slate-500"># Thành phần thường gặp</p>
              <p className="text-slate-300">- Laptop / Phone / Printer</p>
              <p className="text-slate-300">- Router / Switch / Modem</p>
              <p className="text-slate-300">- Server / Internet</p>
              <br />
              <p className="text-slate-500"># Dữ liệu truyền đi</p>
              <p className="text-slate-300">- được chia thành gói nhỏ</p>
              <p className="text-slate-300">- đi qua nhiều thiết bị mạng</p>
              <p className="text-slate-300">- tới nơi rồi ghép lại</p>
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
    question: "Mạng máy tính dùng để làm gì?",
    options: [
      "Chỉ để chơi game",
      "Để kết nối thiết bị, trao đổi dữ liệu và chia sẻ tài nguyên",
      "Chỉ để sửa máy tính",
      "Chỉ để lưu file trong USB",
    ],
    correct: 1,
    explanation: "Mạng máy tính giúp các thiết bị kết nối với nhau, gửi nhận dữ liệu và dùng chung tài nguyên như Internet, máy in, file hoặc server.",
  },
  {
    question: "Trong mạng máy tính, địa chỉ IP giống với thứ gì trong đời sống?",
    options: ["Tên món ăn", "Địa chỉ nhà", "Màu sắc của máy tính", "Loại bàn phím"],
    correct: 1,
    explanation: "Địa chỉ IP giúp xác định thiết bị trong mạng, tương tự địa chỉ nhà giúp bưu điện biết thư cần gửi đến đâu.",
  },
  {
    question: "Khi bạn truy cập một website, luồng đi đơn giản thường là gì?",
    options: [
      "Máy bạn → Router → Internet → Server website",
      "Máy bạn → Máy in → Bàn phím → Server",
      "Router → Chuột → Màn hình → Website",
      "Server → USB → Máy bạn → Router",
    ],
    correct: 0,
    explanation: "Máy bạn gửi yêu cầu đến router, router chuyển ra Internet, sau đó yêu cầu đến server chứa website. Server phản hồi theo chiều ngược lại.",
  },
  {
    question: "Dữ liệu như ảnh, video, tin nhắn khi truyền qua mạng thường được biểu diễn dưới dạng gì?",
    options: ["Giấy in", "Âm thanh cơ học", "Bit 0 và 1", "Màu màn hình"],
    correct: 2,
    explanation: "Máy tính biểu diễn dữ liệu bằng bit 0 và 1. Nội dung lớn còn có thể được chia thành nhiều gói nhỏ để truyền qua mạng.",
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
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[360px]">
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
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[360px]">
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
      <p className="text-slate-400 mb-4">Sau khi hiểu “mạng là gì”, bước tiếp theo là phân loại các loại mạng.</p>
      <Link to="/phan-1-2" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 1.2 — LAN, MAN, WAN, PAN <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const colorMap = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    purple: "bg-purple-500/20 text-purple-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    pink: "bg-pink-500/20 text-pink-300",
  };

  return (
    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
      <span className={`${colorMap[color]} p-2 rounded-xl flex items-center gap-2`}>
        <span className="font-black">{number}</span>
        {React.cloneElement(icon, { size: 20 })}
      </span>
      {title}
    </h3>
  );
}

function Tag({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 rounded-full px-3 py-1 text-sm text-slate-300">
      {icon} {text}
    </span>
  );
}

function DeviceTile({ icon, label, active, highlight }) {
  return (
    <div className={`aspect-square rounded-2xl border p-3 flex flex-col items-center justify-center text-center transition-all ${highlight ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-300" : active ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-slate-900 border-slate-800 text-slate-400"}`}>
      {React.cloneElement(icon, { size: 28 })}
      <span className="text-xs font-bold mt-2">{label}</span>
    </div>
  );
}

function AnalogyCard({ icon, title, desc, highlight }) {
  return (
    <div className={`rounded-2xl p-5 border text-center ${highlight ? "bg-cyan-500/10 border-cyan-400/50 shadow-lg shadow-cyan-500/10" : "bg-slate-950 border-slate-800"}`}>
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-slate-600">
      <ArrowRight size={28} />
    </div>
  );
}

function MappingCard({ left, right, icon }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center">{icon}</div>
        <span className="font-semibold">{left}</span>
      </div>
      <ArrowRight className="text-slate-600 shrink-0" size={18} />
      <span className="font-bold text-cyan-300 text-right">{right}</span>
    </div>
  );
}

function MiniRole({ icon, title, desc }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-3 items-start">
      <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-300 flex items-center justify-center shrink-0">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div>
        <h4 className="font-bold text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function NetworkNode({ icon, label, desc, color, large }) {
  const colorMap = {
    cyan: "bg-cyan-500/10 border-cyan-400/40 text-cyan-300",
    blue: "bg-blue-500/10 border-blue-400/40 text-blue-300",
    orange: "bg-orange-500/10 border-orange-400/40 text-orange-300",
  };
  return (
    <div className={`${large ? "w-full max-w-md" : "w-full max-w-xs"} ${colorMap[color]} border rounded-3xl p-5 flex items-center gap-4 justify-center text-center md:text-left`}>
      <div className="w-12 h-12 rounded-2xl bg-slate-950/70 flex items-center justify-center shrink-0">
        {React.cloneElement(icon, { size: 26 })}
      </div>
      <div>
        <h4 className="font-extrabold text-white">{label}</h4>
        <p className="text-xs text-slate-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function VerticalLine() {
  return <div className="w-px h-8 bg-slate-700" />;
}

function ChildDevice({ icon, label }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-px h-6 bg-slate-700 mb-2" />
      <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center hover:border-orange-400/40 transition-colors">
        <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-300 flex items-center justify-center mx-auto mb-2">
          {React.cloneElement(icon, { size: 22 })}
        </div>
        <p className="text-sm font-bold text-white">{label}</p>
      </div>
    </div>
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
