import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Award,
  Binary,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Cpu,
  EthernetPort,
  Eye,
  FileWarning,
  Gauge,
  Layers,
  ListChecks,
  Package,
  PackageCheck,
  PackageX,
  Radar,
  RotateCcw,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sigma,
  TableProperties,
  Terminal,
  Truck,
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

const techniques = [
  {
    id: "parity",
    name: "Parity",
    full: "Parity Bit",
    idea: "Thêm 1 bit để tổng số bit 1 là chẵn hoặc lẻ theo quy ước.",
    strength: "Thấp",
    pros: ["Rất đơn giản", "Tính nhanh", "Dễ minh họa", "Phát hiện tốt lỗi 1 bit"],
    cons: ["Không phát hiện tốt lỗi nhiều bit", "Không sửa được lỗi", "Hai bit cùng lỗi có thể bị bỏ sót"],
    color: "cyan",
    icon: <Binary />,
  },
  {
    id: "checksum",
    name: "Checksum",
    full: "Checksum",
    idea: "Tính một giá trị kiểm tra từ dữ liệu, gửi kèm để máy nhận tính lại và so sánh.",
    strength: "Trung bình",
    pros: ["Dễ triển khai", "Phổ biến ở nhiều giao thức", "Mạnh hơn parity đơn giản trong nhiều trường hợp"],
    cons: ["Vẫn có thể bỏ sót một số lỗi", "Phụ thuộc cách tính checksum", "Không phải cơ chế sửa lỗi"],
    color: "emerald",
    icon: <Sigma />,
  },
  {
    id: "crc",
    name: "CRC",
    full: "Cyclic Redundancy Check",
    idea: "Xem dữ liệu như chuỗi bit dài, chia theo generator polynomial và lấy phần dư làm giá trị kiểm tra.",
    strength: "Cao",
    pros: ["Phát hiện lỗi rất tốt", "Tốt với lỗi nhiều bit/lỗi theo cụm", "Dùng trong Ethernet FCS", "Phù hợp Data Link Layer"],
    cons: ["Phức tạp hơn parity/checksum", "Cần thống nhất generator", "Chủ yếu phát hiện lỗi, không tự sửa lỗi"],
    color: "purple",
    icon: <ShieldCheck />,
  },
];

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
              <p className="text-xs text-slate-500">Phần 4: Tầng Liên Kết Dữ Liệu — Data Link Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 4.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <WhyErrorControl />
        <DetectionVsCorrection />
        <TechniqueExplorer />
        <ParitySimulator />
        <ChecksumSimulator />
        <CrcSimulator />
        <GeneralFlow />
        <EthernetFcsSection />
        <ComparisonTable />
        <RealWorldExamples />
        <WiresharkLab />
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
            <ShieldAlert size={16} /> Làm sao biết frame bị lỗi?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Kiểm soát lỗi:
            <span className="block text-cyan-400">Parity, Checksum, CRC</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Dữ liệu có thể bị đổi bit khi truyền qua cáp, WiFi hoặc thiết bị mạng. Bài này giúp bạn hiểu cách máy nhận phát hiện frame có bị hỏng hay không.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-cyan-300">Parity</span> = đơn giản, kiểm số bit 1.</p>
            <p><span className="text-emerald-300">Checksum</span> = tính giá trị kiểm tra.</p>
            <p><span className="text-purple-300">CRC/FCS</span> = mạnh, phổ biến trong Ethernet.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroErrorPreview />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu vì sao khi truyền dữ liệu cần kiểm soát lỗi.",
    "Biết Parity bit là gì và cách phát hiện lỗi đơn giản.",
    "Hiểu Checksum là gì và ý tưởng tính lại để so sánh.",
    "Hiểu CRC là gì và vì sao mạnh hơn parity/checksum đơn giản.",
    "Phân biệt phát hiện lỗi và sửa lỗi.",
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

function WhyErrorControl() {
  const causes = [
    ["Nhiễu điện", "Dây cáp kém hoặc môi trường nhiều nhiễu."],
    ["WiFi yếu", "Sóng yếu, vật cản, nhiễu kênh."],
    ["Thiết bị quá tải", "Buffer/queue đầy, xử lý không kịp."],
    ["Suy hao tín hiệu", "Truyền xa làm tín hiệu yếu dần."],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="Vì sao cần kiểm soát lỗi?" icon={<CircleHelp />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>Khi dữ liệu đi qua mạng, nó không phải lúc nào cũng đến nơi nguyên vẹn. Một bit có thể bị đổi từ <strong className="text-white">1</strong> thành <strong className="text-white">0</strong>, hoặc ngược lại.</p>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm">
              <p><span className="text-green-300">Máy A gửi:</span> 10110010</p>
              <p><span className="text-red-300">Máy B nhận:</span> 10100010</p>
              <p className="text-slate-500 mt-2">// Bit thứ 4 đã bị đổi.</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-sm">
              <p className="text-blue-300 font-bold mb-2">Cực ngắn:</p>
              <p>Kiểm soát lỗi giúp máy nhận phát hiện dữ liệu có bị hỏng trong quá trình truyền hay không.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {causes.map(([title, text]) => <CauseCard key={title} title={title} text={text} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetectionVsCorrection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="orange" title="Phát hiện lỗi và sửa lỗi khác nhau thế nào?" icon={<TableProperties />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="Error Detection" icon={<Eye />} color="orange" text="Phát hiện dữ liệu có lỗi hay không. Nếu lỗi, frame thường bị loại bỏ hoặc yêu cầu gửi lại bởi cơ chế khác." code="Biết sai ≠ tự sửa được" />
        <ConceptCard title="Error Correction" icon={<WrenchIcon />} color="green" text="Tự khôi phục dữ liệu đúng từ dữ liệu lỗi. Việc này cần thêm nhiều thông tin dư thừa hơn và phức tạp hơn." code="Biết sai + khôi phục đúng" />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-4">
          <TextExample title="Phát hiện lỗi" text="Tôi đi hc hôm nay → Có vẻ sai" color="orange" />
          <TextExample title="Sửa lỗi" text="Tôi đi hc hôm nay → Tôi đi học hôm nay" color="green" />
        </div>
      </div>
    </section>
  );
}

function TechniqueExplorer() {
  const [activeId, setActiveId] = useState("crc");
  const active = techniques.find((t) => t.id === activeId);
  const c = colorClasses[active.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="emerald" title="Ba kỹ thuật phát hiện lỗi chính" icon={<ListChecks />} />
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {techniques.map((tech) => {
            const tc = colorClasses[tech.color];
            const activeTab = activeId === tech.id;
            return <button key={tech.id} onClick={() => setActiveId(tech.id)} className={`rounded-2xl p-4 text-left border transition-all ${activeTab ? `${tc.bg} ${tc.border} ${tc.text}` : "bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}><div className="flex items-center gap-2 mb-2">{React.cloneElement(tech.icon, { size: 20 })}<span className="font-black text-lg">{tech.name}</span></div><p className="text-xs opacity-80">{tech.full}</p></button>;
          })}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(active.icon, { size: 34 })}</div>
            <p className={`${c.text} font-black text-sm uppercase tracking-wider`}>{active.full}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">{active.name}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{active.idea}</p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-sm"><span className={c.text + " font-black"}>Mức độ mạnh:</span> <span className="text-slate-300">{active.strength}</span></div>
          </div>
          <ProsCons pros={active.pros} cons={active.cons} />
        </div>
      </div>
    </section>
  );
}

function ParitySimulator() {
  const [data, setData] = useState("1011001");
  const [mode, setMode] = useState("even");
  const [flipIndex, setFlipIndex] = useState(null);
  const clean = cleanBits(data).slice(0, 12) || "1011001";
  const ones = countOnes(clean);
  const parityBit = mode === "even" ? (ones % 2 === 0 ? "0" : "1") : (ones % 2 === 0 ? "1" : "0");
  const sent = clean + parityBit;
  const received = flipIndex === null ? sent : flipBit(sent, flipIndex);
  const receivedOnes = countOnes(received);
  const valid = mode === "even" ? receivedOnes % 2 === 0 : receivedOnes % 2 === 1;
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="cyan" title="Mô phỏng Parity Bit" icon={<Binary />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Dữ liệu gốc</label>
              <input value={data} onChange={(e) => { setData(e.target.value); setFlipIndex(null); }} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-cyan-400" />
              <div className="mt-4 flex gap-2">
                <button onClick={() => { setMode("even"); setFlipIndex(null); }} className={`px-4 py-2 rounded-xl font-bold text-sm ${mode === "even" ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Even parity</button>
                <button onClick={() => { setMode("odd"); setFlipIndex(null); }} className={`px-4 py-2 rounded-xl font-bold text-sm ${mode === "odd" ? "bg-cyan-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400"}`}>Odd parity</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBox title="Số bit 1" value={ones} color="cyan" />
              <StatBox title="Parity bit" value={parityBit} color="orange" />
            </div>
            <button onClick={() => setFlipIndex(null)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-bold transition-colors inline-flex items-center justify-center gap-2"><RotateCcw size={18} /> Reset lỗi</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-bold mb-4">Click vào bit để mô phỏng lỗi</h3>
            <BitRow bits={sent} label="Frame gửi" parityIndex={sent.length - 1} onClick={(i) => setFlipIndex(i)} />
            <BitRow bits={received} label="Frame nhận" parityIndex={sent.length - 1} changedIndex={flipIndex} />
            <div className={`mt-5 rounded-2xl border p-4 text-sm ${valid ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>
              {valid ? "Parity hợp lệ: không phát hiện lỗi." : "Parity không hợp lệ: phát hiện có lỗi."}
            </div>
            <p className="text-slate-500 text-xs mt-4">Lưu ý: nếu bạn tự tạo lỗi 2 bit, parity có thể không phát hiện được. Đây là điểm yếu quan trọng của parity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecksumSimulator() {
  const [values, setValues] = useState("10, 20, 30");
  const [corrupt, setCorrupt] = useState(false);
  const nums = parseNums(values);
  const sentChecksum = nums.reduce((a, b) => a + b, 0);
  const receivedNums = corrupt && nums.length > 1 ? nums.map((n, i) => i === 1 ? n + 5 : n) : nums;
  const receivedChecksum = receivedNums.reduce((a, b) => a + b, 0);
  const ok = sentChecksum === receivedChecksum;
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="emerald" title="Mô phỏng Checksum" icon={<Sigma />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6">
              <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Dữ liệu dạng số</label>
              <input value={values} onChange={(e) => { setValues(e.target.value); setCorrupt(false); }} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-emerald-400" />
              <p className="text-xs text-slate-500 mt-2">Nhập các số cách nhau bằng dấu phẩy.</p>
              <button onClick={() => setCorrupt(!corrupt)} className={`mt-5 w-full px-4 py-3 rounded-xl font-bold transition-colors ${corrupt ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`}>{corrupt ? "Đang mô phỏng dữ liệu bị sai" : "Mô phỏng sai dữ liệu"}</button>
            </div>
            <InfoBox title="Ý tưởng" value="Máy gửi tính checksum và gửi kèm dữ liệu. Máy nhận tính lại checksum từ dữ liệu nhận được rồi so sánh." icon={<Calculator />} color="emerald" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <CalcLine label="Dữ liệu gửi" value={nums.join(", ") || "—"} color="cyan" />
            <CalcLine label="Checksum gửi" value={sentChecksum} color="emerald" />
            <CalcLine label="Dữ liệu nhận" value={receivedNums.join(", ") || "—"} color={corrupt ? "red" : "cyan"} />
            <CalcLine label="Checksum tính lại" value={receivedChecksum} color={ok ? "emerald" : "red"} />
            <div className={`rounded-2xl border p-4 text-sm ${ok ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>{ok ? "Trùng nhau → dữ liệu có vẻ hợp lệ." : "Khác nhau → phát hiện lỗi."}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrcSimulator() {
  const [data, setData] = useState("1101011011");
  const [generator, setGenerator] = useState("10011");
  const [corrupt, setCorrupt] = useState(false);
  const cleanData = cleanBits(data).slice(0, 16) || "1101011011";
  const cleanGen = normalizeGenerator(generator);
  const crc = computeCrc(cleanData, cleanGen);
  const frame = cleanData + crc;
  const received = corrupt ? flipBit(frame, Math.min(3, frame.length - 1)) : frame;
  const remainder = computeCrcCheck(received, cleanGen);
  const ok = /^0+$/.test(remainder);
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="purple" title="Mô phỏng CRC đơn giản" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6 space-y-4">
              <div>
                <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Dữ liệu bit</label>
                <input value={data} onChange={(e) => { setData(e.target.value); setCorrupt(false); }} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-green-300 font-mono outline-none focus:border-purple-400" />
              </div>
              <div>
                <label className="text-xs text-slate-500 font-bold uppercase tracking-wider">Generator</label>
                <input value={generator} onChange={(e) => { setGenerator(e.target.value); setCorrupt(false); }} className="mt-2 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-purple-300 font-mono outline-none focus:border-purple-400" />
              </div>
              <button onClick={() => setCorrupt(!corrupt)} className={`w-full px-4 py-3 rounded-xl font-bold transition-colors ${corrupt ? "bg-red-500 text-white" : "bg-purple-500 text-white"}`}>{corrupt ? "Đang mô phỏng lỗi 1 bit" : "Mô phỏng lỗi 1 bit"}</button>
            </div>
            <InfoBox title="Nhập môn" value="CRC thực tế dùng phép chia nhị phân/XOR với đa thức sinh. Mô phỏng này minh họa ý tưởng phần dư, không nhằm thay thế chuẩn CRC Ethernet thật." icon={<Code2 />} color="purple" />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 font-mono text-sm">
            <CalcLine label="Data" value={cleanData} color="cyan" />
            <CalcLine label="Generator" value={cleanGen} color="purple" />
            <CalcLine label="CRC/FCS" value={crc} color="orange" />
            <CalcLine label="Frame gửi" value={frame} color="green" />
            <CalcLine label="Frame nhận" value={received} color={corrupt ? "red" : "green"} />
            <CalcLine label="Remainder kiểm tra" value={remainder} color={ok ? "green" : "red"} />
            <div className={`rounded-2xl border p-4 text-sm ${ok ? "bg-green-500/10 border-green-400/40 text-green-300" : "bg-red-500/10 border-red-400/40 text-red-300"}`}>{ok ? "Remainder = 0 → frame hợp lệ." : "Remainder khác 0 → phát hiện lỗi."}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GeneralFlow() {
  const steps = [
    { title: "Máy gửi có dữ liệu", text: "Dữ liệu chuẩn bị được đóng vào frame.", code: "Data / Payload", color: "cyan", icon: <Package /> },
    { title: "Tính mã kiểm tra", text: "Máy gửi tính Parity, Checksum hoặc CRC từ dữ liệu/frame.", code: "check = f(data)", color: "purple", icon: <Calculator /> },
    { title: "Gắn vào frame", text: "Giá trị kiểm tra được gửi kèm trong frame, thường ở trailer/FCS.", code: "Frame = Header + Data + FCS", color: "emerald", icon: <PackageCheck /> },
    { title: "Truyền qua mạng", text: "Frame đi qua cáp, WiFi hoặc thiết bị mạng, có thể bị nhiễu/lỗi.", code: "Frame → tín hiệu → đường truyền", color: "orange", icon: <Wifi /> },
    { title: "Máy nhận tính lại", text: "Máy nhận tính lại giá trị kiểm tra từ dữ liệu nhận được.", code: "check' = f(received data)", color: "blue", icon: <Cpu /> },
    { title: "So sánh", text: "Nếu trùng thì chấp nhận; nếu khác thì loại bỏ frame.", code: "check == check' ? Accept : Drop", color: "green", icon: <ShieldCheck /> },
  ];
  const [step, setStep] = useState(0);
  const current = steps[step];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Luồng kiểm soát lỗi tổng quát" icon={<Zap />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[350px] flex flex-col justify-between`}>
            <div>
              <div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div>
              <p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{current.text}</p>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">Quay lại</button>
              <button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div>
        </div>
      </div>
    </section>
  );
}

function EthernetFcsSection() {
  const [bad, setBad] = useState(false);
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="orange" title="Ethernet FCS dùng CRC để phát hiện lỗi" icon={<EthernetPort />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className={`${bad ? "bg-red-500/10 border-red-500/30" : "bg-green-500/10 border-green-500/30"} border rounded-3xl p-6`}>
            <div className={`${bad ? "bg-red-500" : "bg-green-500"} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-5`}>{bad ? <PackageX size={32} /> : <PackageCheck size={32} />}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{bad ? "CRC tính lại ≠ FCS" : "CRC tính lại = FCS"}</h3>
            <p className="text-slate-300 leading-relaxed mb-5">{bad ? "Máy nhận xem frame là bị lỗi và loại bỏ." : "Frame được xem là hợp lệ và payload được xử lý tiếp."}</p>
            <button onClick={() => setBad(!bad)} className={`px-5 py-2 rounded-xl font-bold transition-colors ${bad ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}>{bad ? "Chuyển sang hợp lệ" : "Mô phỏng lỗi FCS"}</button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
            <div className="min-w-[760px] font-mono text-sm">
              <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_1.5fr_0.9fr] gap-2 mb-2 text-center text-slate-500">
                <span>MAC Đích</span><span>MAC Nguồn</span><span>Type</span><span>Payload</span><span>FCS</span>
              </div>
              <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_1.5fr_0.9fr] gap-2">
                <FrameCell text="BB:BB..." color="purple" />
                <FrameCell text="AA:AA..." color="blue" />
                <FrameCell text="IPv4" color="cyan" />
                <FrameCell text="Data" color="emerald" />
                <FrameCell text={bad ? "Sai" : "Đúng"} color={bad ? "red" : "orange"} />
              </div>
            </div>
            <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm text-slate-400">
              FCS — Frame Check Sequence — là phần kiểm tra lỗi cuối frame Ethernet, thường dựa trên CRC.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["Ý tưởng", "Thêm 1 bit để kiểm số bit 1", "Tính giá trị tổng kiểm tra", "Chia bit theo đa thức sinh, lấy phần dư"],
    ["Ưu điểm", "Rất đơn giản, nhanh", "Dễ triển khai, phổ biến", "Phát hiện lỗi rất tốt"],
    ["Nhược điểm", "Yếu với lỗi nhiều bit", "Có thể bỏ sót lỗi", "Phức tạp hơn"],
    ["Mức độ mạnh", "Thấp", "Trung bình", "Cao"],
    ["Thường gặp", "Minh họa/cơ chế đơn giản", "Một số giao thức mạng", "Data Link, Ethernet FCS"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="orange" title="So sánh Parity, Checksum, CRC" icon={<TableProperties />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400">
              <tr><th className="p-4">Tiêu chí</th><th className="p-4 text-cyan-300">Parity</th><th className="p-4 text-emerald-300">Checksum</th><th className="p-4 text-purple-300">CRC</th></tr>
            </thead>
            <tbody className="text-sm">
              {rows.map(([criteria, parity, checksum, crc], i) => <tr key={criteria} className={`${i === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{parity}</td><td className="p-4 text-slate-300">{checksum}</td><td className="p-4 text-slate-300">{crc}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RealWorldExamples() {
  const [mode, setMode] = useState("shipping");
  const examples = {
    shipping: { title: "Số kiểm tra trên mã vận đơn", icon: <Truck />, color: "orange", text: "Mã vận đơn có thể có chữ số kiểm tra để phát hiện nhập sai. Parity, Checksum và CRC cũng giống mã kiểm tra đi kèm dữ liệu.", code: "VN123456789\nNhập sai: VN123456798\n→ hệ thống có thể phát hiện không hợp lệ" },
    phone: { title: "Gọi điện nghe không rõ", icon: <Radar />, color: "cyan", text: "Nếu tín hiệu kém làm nghe nhầm B205 thành B208, bạn có thể nhắc lại để người nghe kiểm tra. Error control cung cấp thông tin kiểm tra tương tự.", code: "B205\nTôi nhắc lại: B hai không năm" },
    fruit: { title: "Danh sách trái cây", icon: <ListChecks />, color: "emerald", text: "Checksum giống việc gửi thêm tổng số trái cây. Người nhận cộng lại để xem dữ liệu có khớp không.", code: "Táo: 3\nCam: 2\nChuối: 5\nTổng: 10" },
  };
  const current = examples[mode];
  const c = colorClasses[current.color];
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="purple" title="Ví dụ đời thường" icon={<Search />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="flex overflow-x-auto gap-2 p-2 bg-slate-950/60 border-b border-slate-800">
          {Object.entries(examples).map(([key, item]) => <button key={key} onClick={() => setMode(key)} className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${mode === key ? `${colorClasses[item.color].solid} text-white` : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}>{React.cloneElement(item.icon, { size: 16 })} {item.title}</button>)}
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 28 })}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
            <p className="text-slate-300 leading-relaxed">{current.text}</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div>
        </div>
      </div>
    </section>
  );
}

function WiresharkLab() {
  const [tab, setTab] = useState("ping");
  const commands = {
    ping: { title: "Tạo dữ liệu mạng", cmd: "ping 8.8.8.8", output: "Reply from 8.8.8.8: bytes=32 time=25ms TTL=117", note: "Dùng ping để tạo ICMP traffic, sau đó mở Wireshark để quan sát frame." },
    filter: { title: "Lọc ICMP trong Wireshark", cmd: "icmp", output: "Frame\nEthernet II\nInternet Protocol Version 4\nInternet Control Message Protocol", note: "Bạn sẽ thấy Ethernet frame chứa IP packet, IP packet chứa ICMP message." },
    fcs: { title: "Quan sát FCS/CRC", cmd: "Ethernet II\nFrame Check Sequence", output: "Một số card mạng xử lý FCS ở phần cứng\n→ Wireshark có thể không hiển thị FCS trực tiếp", note: "Điều cần nhớ: Ethernet frame có cơ chế kiểm tra lỗi bằng FCS/CRC dù capture có thể không hiện rõ FCS." },
  };
  const current = commands[tab];
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="CLI / Wireshark: quan sát kiểm soát lỗi" icon={<Terminal />} />
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-500 font-mono">error control lab</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {Object.entries(commands).map(([key]) => <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${tab === key ? "bg-blue-500 text-white" : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"}`}>{key}</button>)}
            </div>
            <div className="font-mono text-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto min-h-[260px] whitespace-pre-wrap">
              <p className="text-slate-500 mb-3"># {current.title}</p>
              <p><span className="text-green-400">student@datalink</span><span className="text-slate-400">$ </span><span className="text-white">{current.cmd}</span></p>
              <div className="mt-5 text-green-400">{current.output}</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-5 flex items-center gap-2"><Search size={22} /> Cách đọc</h3>
          <p className="text-slate-300 leading-relaxed">{current.note}</p>
          <div className="mt-6 grid gap-3 text-sm">
            <ExplainRow term="Frame" desc="Đơn vị tầng Data Link." />
            <ExplainRow term="FCS" desc="Frame Check Sequence ở cuối frame." />
            <ExplainRow term="CRC" desc="Kỹ thuật thường dùng để tính FCS." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Misunderstandings() {
  const items = [
    { title: "Phát hiện lỗi nghĩa là tự sửa lỗi?", desc: "Không. Phát hiện lỗi chỉ biết dữ liệu sai; sửa lỗi là khôi phục dữ liệu đúng, phức tạp hơn.", good: "Detection ≠ Correction.", icon: <Eye /> },
    { title: "Parity phát hiện mọi lỗi?", desc: "Không. Parity có thể bỏ sót lỗi nếu số bit bị lật là chẵn, ví dụ 2 bit cùng lỗi.", good: "Parity đơn giản nhưng yếu.", icon: <Binary /> },
    { title: "Checksum không bao giờ bỏ sót lỗi?", desc: "Không. Checksum mạnh hơn parity trong nhiều tình huống nhưng vẫn có thể có các lỗi làm checksum trùng.", good: "Checksum là kiểm tra, không phải bảo đảm tuyệt đối.", icon: <Sigma /> },
    { title: "CRC là mã hóa bảo mật?", desc: "Không. CRC phát hiện lỗi truyền dữ liệu, không bảo mật dữ liệu khỏi người xem hoặc sửa có chủ đích.", good: "CRC ≠ encryption.", icon: <ShieldCheck /> },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="13" color="yellow" title="Một số hiểu nhầm thường gặp" icon={<AlertTriangle />} />
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
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">14</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>Dữ liệu truyền qua mạng có thể bị lỗi.</p>
              <p><span className="text-cyan-300">Parity</span> = thêm 1 bit kiểm số bit 1 chẵn/lẻ.</p>
              <p><span className="text-emerald-300">Checksum</span> = tính giá trị kiểm tra từ dữ liệu.</p>
              <p><span className="text-purple-300">CRC</span> = mạnh hơn, dùng trong Ethernet FCS.</p>
              <br />
              <p className="text-slate-500"># Quan trọng</p>
              <p>Error Detection = phát hiện lỗi.</p>
              <p>Error Correction = tự sửa lỗi.</p>
              <p>Ethernet thường phát hiện lỗi và bỏ frame sai.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "Parity bit dùng để làm gì?", options: ["Mã hóa dữ liệu để bảo mật", "Phát hiện lỗi đơn giản bằng cách kiểm tra số bit 1", "Định tuyến gói tin qua Internet", "Cấp phát địa chỉ IP"], correct: 1, explanation: "Parity thêm 1 bit để tổng số bit 1 là chẵn hoặc lẻ theo quy ước, qua đó phát hiện một số lỗi đơn giản." },
  { question: "Khi máy gửi tính checksum và gửi kèm dữ liệu, máy nhận sẽ làm gì?", options: ["Bỏ qua checksum", "Tính lại checksum từ dữ liệu nhận được rồi so sánh", "Dùng checksum làm địa chỉ MAC", "Dùng checksum để chọn router"], correct: 1, explanation: "Máy nhận tính lại checksum từ dữ liệu nhận được và so sánh với checksum gửi kèm." },
  { question: "Vì sao CRC thường mạnh hơn parity?", options: ["Vì CRC là địa chỉ IP", "Vì CRC dùng phép kiểm tra theo chuỗi bit/đa thức, phát hiện tốt hơn lỗi nhiều bit hoặc lỗi theo cụm", "Vì CRC không cần dữ liệu", "Vì CRC là mật khẩu"], correct: 1, explanation: "CRC dùng phép chia nhị phân theo generator polynomial nên phát hiện lỗi nhiều bit/lỗi theo cụm tốt hơn parity đơn giản." },
  { question: "Trong Ethernet frame, FCS thường dùng kỹ thuật nào?", options: ["CRC", "DNS", "DHCP", "NAT"], correct: 0, explanation: "FCS — Frame Check Sequence — ở Ethernet thường dựa trên CRC để phát hiện lỗi frame." },
  { question: "Phát hiện lỗi khác sửa lỗi ở điểm nào?", options: ["Phát hiện lỗi biết có sai; sửa lỗi khôi phục dữ liệu đúng", "Hai khái niệm hoàn toàn giống nhau", "Phát hiện lỗi là định tuyến", "Sửa lỗi là cấp IP"], correct: 0, explanation: "Error Detection chỉ cho biết có lỗi; Error Correction tự khôi phục dữ liệu đúng nếu đủ thông tin." },
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
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[380px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
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
      <p className="text-slate-400 mb-4">Sau khi biết frame có thể bị lỗi, bài tiếp theo sẽ học cách điều phối tốc độ gửi để máy nhận không bị quá tải.</p>
      <Link to="/phan-4-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 4.3 — Kiểm soát luồng: Stop-and-Wait, Sliding Window <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function HeroErrorPreview() { return <div className="space-y-4"><BitCompare sent="10110010" received="10100010" /><div className="grid grid-cols-3 gap-3">{techniques.map((t) => <MiniTechnique key={t.id} item={t} />)}</div></div>; }
function BitCompare({ sent, received }) { return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-sm"><p className="text-green-300">Send: {sent}</p><p className="text-red-300 mt-2">Recv: {received}</p><p className="text-slate-500 mt-2">// 1 bit đã bị đổi khi truyền</p></div>; }
function MiniTechnique({ item }) { const c = colorClasses[item.color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(item.icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{item.name}</p><p className="text-[10px] text-slate-500 mt-1">{item.strength}</p></div>; }
function CauseCard({ title, text }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5"><div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-300 flex items-center justify-center mb-3"><AlertTriangle size={20} /></div><h4 className="text-white font-bold mb-2">{title}</h4><p className="text-sm text-slate-400 leading-relaxed">{text}</p></div>; }
function ConceptCard({ title, icon, color, text, code }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}><div className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>; }
function WrenchIcon() { return <RotateCcw />; }
function TextExample({ title, text, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-5`}><h4 className={`${c.text} font-black mb-3`}>{title}</h4><p className="font-mono text-sm text-slate-200">{text}</p></div>; }
function ProsCons({ pros, cons }) { return <div className="grid md:grid-cols-2 gap-4"><div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5"><h4 className="text-green-300 font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Ưu điểm</h4><ul className="space-y-3">{pros.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div><div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5"><h4 className="text-red-300 font-bold mb-4 flex items-center gap-2"><XCircle size={18} /> Nhược điểm</h4><ul className="space-y-3">{cons.map((item) => <li key={item} className="text-sm text-slate-300 flex gap-2"><XCircle className="text-red-400 shrink-0 mt-0.5" size={16} /> {item}</li>)}</ul></div></div>; }
function InfoBox({ title, value, icon, color }) { const c = colorClasses[color]; return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex gap-4 items-start"><div className={`${c.bg} ${c.text} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>{React.cloneElement(icon, { size: 20 })}</div><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p><p className="text-sm text-slate-300 mt-1 leading-relaxed whitespace-pre-wrap">{value}</p></div></div>; }
function StatBox({ title, value, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 text-center`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} text-3xl font-black mt-2`}>{value}</p></div>; }
function BitRow({ bits, label, parityIndex, changedIndex, onClick }) { return <div className="mb-4"><p className="text-sm text-slate-400 mb-2">{label}</p><div className="flex flex-wrap gap-2">{bits.split("").map((b, i) => <button key={i} onClick={() => onClick && onClick(i)} className={`w-11 h-11 rounded-xl border font-mono font-black transition-colors ${changedIndex === i ? "bg-red-500/20 border-red-400 text-red-300" : i === parityIndex ? "bg-orange-500/10 border-orange-400/40 text-orange-300" : "bg-slate-900 border-slate-700 text-slate-200 hover:border-cyan-400"}`}>{b}</button>)}</div></div>; }
function CalcLine({ label, value, color }) { const c = colorClasses[color]; return <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex justify-between gap-4"><span className="text-slate-400">{label}</span><span className={`${c.text} font-black break-all text-right`}>{String(value)}</span></div>; }
function FrameCell({ text, color }) { const c = colorClasses[color]; return <div className={`${c.bg} ${c.border} ${c.text} border rounded-2xl p-4 text-center font-bold`}>{text}</div>; }
function StepFlow({ steps, active, setActive, color }) { const c = colorClasses[color]; return <div className="space-y-3">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>; }
function ExplainRow({ term, desc }) { return <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4"><p className="font-mono text-blue-300 text-sm font-bold">{term}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>; }

function cleanBits(s) { return (s || "").replace(/[^01]/g, ""); }
function countOnes(s) { return (s.match(/1/g) || []).length; }
function flipBit(s, i) { if (i < 0 || i >= s.length) return s; return s.slice(0, i) + (s[i] === "1" ? "0" : "1") + s.slice(i + 1); }
function parseNums(s) { return (s || "").split(",").map(x => Number(x.trim())).filter(n => Number.isFinite(n)); }
function normalizeGenerator(g) { const clean = cleanBits(g); if (clean.length < 2) return "10011"; if (clean[0] !== "1") return "1" + clean.slice(1); return clean; }
function xorBits(a, b) { let out = ""; for (let i = 0; i < b.length; i++) out += a[i] === b[i] ? "0" : "1"; return out; }
function computeCrc(data, gen) { const degree = gen.length - 1; let work = data + "0".repeat(degree); for (let i = 0; i <= work.length - gen.length; i++) { if (work[i] === "1") { const x = xorBits(work.slice(i, i + gen.length), gen); work = work.slice(0, i) + x + work.slice(i + gen.length); } } return work.slice(-degree) || "0"; }
function computeCrcCheck(frame, gen) { let work = frame; for (let i = 0; i <= work.length - gen.length; i++) { if (work[i] === "1") { const x = xorBits(work.slice(i, i + gen.length), gen); work = work.slice(0, i) + x + work.slice(i + gen.length); } } return work.slice(-(gen.length - 1)) || "0"; }
