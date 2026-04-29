import React, { useMemo, useState } from "react";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    Award,
    Binary,
    BookOpen,
    Bug,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Clock3,
    Code2,
    Cpu,
    Database,
    Eye,
    FileSearch,
    Filter,
    Gauge,
    Globe2,
    Home,
    Info,
    Layers,
    LifeBuoy,
    ListChecks,
    Map,
    Monitor,
    Network,
    PackageSearch,
    RadioTower,
    RefreshCw,
    Router,
    Search,
    Send,
    Server,
    ShieldAlert,
    Terminal,
    Timer,
    Wifi,
    Wrench,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const colorClasses = {
    cyan: {
        text: "text-cyan-300",
        bg: "bg-cyan-500/10",
        border: "border-cyan-400/40",
        solid: "bg-cyan-500",
        ring: "shadow-cyan-500/20",
    },
    blue: {
        text: "text-blue-300",
        bg: "bg-blue-500/10",
        border: "border-blue-400/40",
        solid: "bg-blue-500",
        ring: "shadow-blue-500/20",
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
    yellow: {
        text: "text-yellow-300",
        bg: "bg-yellow-500/10",
        border: "border-yellow-400/40",
        solid: "bg-yellow-500",
        ring: "shadow-yellow-500/20",
    },
    green: {
        text: "text-green-300",
        bg: "bg-green-500/10",
        border: "border-green-400/40",
        solid: "bg-green-500",
        ring: "shadow-green-500/20",
    },
    red: {
        text: "text-red-300",
        bg: "bg-red-500/10",
        border: "border-red-400/40",
        solid: "bg-red-500",
        ring: "shadow-red-500/20",
    },
    slate: {
        text: "text-slate-300",
        bg: "bg-slate-500/10",
        border: "border-slate-400/40",
        solid: "bg-slate-600",
        ring: "shadow-slate-500/20",
    },
};

const toolRows = [
    [
        "Ping",
        "Kiểm tra máy đích có phản hồi không",
        "Thấp",
        "Khi muốn biết mạng có thông không",
        "cyan",
    ],
    [
        "Traceroute/Tracert",
        "Xem gói tin đi qua router nào",
        "Trung bình",
        "Khi muốn biết nghẽn/lỗi ở đoạn nào",
        "purple",
    ],
    [
        "Wireshark",
        "Bắt và phân tích từng gói tin",
        "Cao",
        "Khi cần điều tra sâu DNS, TCP, HTTP, TLS",
        "emerald",
    ],
];

const pingOutputParts = [
    ["Reply from 8.8.8.8", "Máy đích có phản hồi", "green"],
    ["bytes=32", "Kích thước gói tin", "cyan"],
    ["time=20ms", "Thời gian đi và về", "yellow"],
    ["TTL=117", "Số lần gói tin còn được phép đi qua router", "purple"],
];

const filterRows = [
    ["dns", "Chỉ xem gói DNS", "blue"],
    ["icmp", "Chỉ xem gói Ping", "cyan"],
    ["tcp", "Chỉ xem gói TCP", "purple"],
    ["udp", "Chỉ xem gói UDP", "orange"],
    ["ip.addr == 8.8.8.8", "Xem gói liên quan IP 8.8.8.8", "green"],
    ["tcp.port == 443", "Xem gói HTTPS", "emerald"],
    ["http", "Xem HTTP không mã hóa", "yellow"],
];

const troubleshootingRows = [
    ["Không vào được mạng", "Ping gateway", "Lỗi WiFi/router", "cyan"],
    [
        "Vào IP được nhưng không vào tên miền",
        "Ping + nslookup + Wireshark DNS",
        "Lỗi DNS",
        "blue",
    ],
    ["Mạng chậm", "Ping + Traceroute", "Độ trễ cao, mất gói", "yellow"],
    [
        "Website lúc được lúc không",
        "Wireshark",
        "TCP retransmission, DNS chậm",
        "orange",
    ],
    [
        "Game lag",
        "Ping + Traceroute",
        "Ping cao, route xa, packet loss",
        "purple",
    ],
    [
        "App không kết nối server",
        "Wireshark",
        "Sai port, firewall, TLS lỗi",
        "red",
    ],
];

const commonMistakes = [
    {
        title: "Thấy * * * là kết luận mạng hỏng ngay",
        desc: "Dấu * * * trong traceroute có thể chỉ là router không trả lời ICMP/UDP timeout hoặc bị firewall chặn.",
        fix: "Xem hop trước/sau và thử thêm ping, pathping hoặc mtr nếu cần.",
        color: "yellow",
    },
    {
        title: "Ping được IP nhưng tưởng DNS vẫn ổn",
        desc: "Ping 8.8.8.8 thành công chỉ chứng minh đường ra Internet còn hoạt động ở mức IP.",
        fix: "Ping tên miền hoặc dùng nslookup/dig để kiểm tra DNS.",
        color: "blue",
    },
    {
        title: "Wireshark thấy nhiều gói là nghĩ bị hack",
        desc: "Mạng bình thường cũng có rất nhiều gói DNS, ARP, TCP, TLS, multicast và broadcast.",
        fix: "Phải lọc đúng IP, protocol, port và đối chiếu hành vi ứng dụng.",
        color: "emerald",
    },
    {
        title: "Chỉ dùng một công cụ để kết luận",
        desc: "Ping, traceroute và Wireshark trả lời các câu hỏi khác nhau.",
        fix: "Đi từ kiểm tra kết nối → kiểm tra DNS → kiểm tra route → bắt gói sâu.",
        color: "purple",
    },
];

const quizQuestions = [
    {
        question: "Ping dùng để làm gì?",
        options: [
            "Bắt toàn bộ gói tin trong mạng",
            "Kiểm tra máy đích có phản hồi không",
            "Cấu hình router",
            "Mã hóa dữ liệu",
        ],
        correct: 1,
        explanation:
            "Ping gửi gói kiểm tra và chờ phản hồi để biết máy đích có liên lạc được hay không.",
    },
    {
        question:
            "Nếu ping 8.8.8.8 thành công nhưng ping google.com thất bại, khả năng cao lỗi nằm ở đâu?",
        options: ["DNS", "Card màn hình", "Dây nguồn màn hình", "Bluetooth"],
        correct: 0,
        explanation:
            "IP vẫn đi được nhưng tên miền không phân giải được, nên điểm nghi ngờ chính là DNS.",
    },
    {
        question: "Traceroute biết từng router trung gian nhờ cơ chế nào?",
        options: [
            "ARP cache",
            "TTL giảm dần qua từng router",
            "Đổi DNS server",
            "Quét port TCP 443",
        ],
        correct: 1,
        explanation:
            "Traceroute gửi gói với TTL tăng dần. Khi TTL hết, router báo về, nhờ vậy máy nguồn nhận diện từng hop.",
    },
    {
        question: "Wireshark dùng để làm gì?",
        options: [
            "Bắt và phân tích packet thật",
            "Tăng tốc WiFi",
            "Thay modem",
            "Tự sửa DNS",
        ],
        correct: 0,
        explanation:
            "Wireshark quan sát packet đi qua card mạng, giúp phân tích DNS, TCP, UDP, TLS, HTTP và nhiều giao thức khác.",
    },
    {
        question: "Filter nào dùng để chỉ xem gói Ping trong Wireshark?",
        options: ["dns", "icmp", "tcp.port == 443", "http"],
        correct: 1,
        explanation:
            "Ping thường dùng ICMP Echo Request/Reply, nên filter cơ bản là icmp.",
    },
    {
        question: "Dấu * * * trong traceroute luôn có nghĩa là mạng hỏng?",
        options: [
            "Đúng",
            "Sai",
            "Chỉ đúng trên Windows",
            "Chỉ đúng khi dùng WiFi",
        ],
        correct: 1,
        explanation:
            "* * * có thể do router không phản hồi, firewall chặn hoặc timeout. Cần xem toàn bộ đường đi trước khi kết luận.",
    },
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 shrink-0">
                            <PackageSearch
                                className="text-cyan-400"
                                size={24}
                            />
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-xl font-bold text-white tracking-tight truncate">
                                Khóa học Mạng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500 truncate">
                                Phần 10: Thực hành & Nâng cao
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 whitespace-nowrap">
                        Bài 10.1
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <ToolOverview />
                <PingSection />
                <TracerouteSection />
                <WiresharkSection />
                <RealWorldExamples />
                <PacketPathSection />
                <ComparisonTable />
                <MechanismSection />
                <WiresharkLab />
                <TroubleshootingWizard />
                <TroubleshootingTable />
                <CommandCheatSheet />
                <CommonMistakes />
                <ConnectionSection />
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
            <div className="relative grid md:grid-cols-[1.03fr_0.97fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <Terminal size={16} /> Practice — Network Diagnostics
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Công cụ phân tích mạng
                        <span className="block text-cyan-400">
                            Ping, Traceroute, Wireshark
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bài này giúp bạn biết cách kiểm tra kết nối, tìm đường
                        đi của gói tin và bắt packet thật để phân tích lỗi mạng
                        một cách có hệ thống.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl space-y-1">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">Ping</span> = Có tới
                            được đích không?
                        </p>
                        <p>
                            <span className="text-purple-300">Traceroute</span>{" "}
                            = Đi qua router nào?
                        </p>
                        <p>
                            <span className="text-emerald-300">Wireshark</span>{" "}
                            = Packet thật đang làm gì?
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroDiagnosticVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        ["Ping", "Kiểm tra máy đích có liên lạc được không.", <Activity />],
        ["Traceroute", "Xem đường đi của gói tin qua các router.", <Map />],
        ["Wireshark", "Bắt và phân tích gói tin thật đang chạy.", <Eye />],
        [
            "Chọn công cụ",
            "Biết dùng công cụ nào khi xử lý lỗi mạng.",
            <Wrench />,
        ],
        [
            "Lệnh cơ bản",
            "Biết lệnh trên Windows, Linux và macOS.",
            <Terminal />,
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="1"
                color="cyan"
                title="Mục tiêu bài học"
                icon={<Award />}
            />
            <div className="grid md:grid-cols-5 gap-3">
                {goals.map(([title, text, icon], index) => (
                    <div
                        key={title}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            {React.cloneElement(icon, { size: 20 })}
                        </div>
                        <p className="text-white font-black mb-2">
                            {index + 1}. {title}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ToolOverview() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Ba công cụ trả lời ba câu hỏi khác nhau"
                icon={<CircleHelp />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                <ConceptCard
                    title="Ping"
                    icon={<Activity />}
                    color="cyan"
                    text="Ping kiểm tra xem máy bạn có nhận được phản hồi từ máy đích hay không."
                    code={`Câu hỏi:\nĐích có trả lời không?\n\nLệnh:\nping google.com`}
                />
                <ConceptCard
                    title="Traceroute / Tracert"
                    icon={<Map />}
                    color="purple"
                    text="Traceroute cho biết gói tin đi qua các router/hop nào trên đường tới đích."
                    code={`Câu hỏi:\nGói tin đi đường nào?\n\nWindows:\ntracert google.com\n\nLinux/macOS:\ntraceroute google.com`}
                />
                <ConceptCard
                    title="Wireshark"
                    icon={<PackageSearch />}
                    color="emerald"
                    text="Wireshark bắt packet thật để bạn nhìn thấy source IP, destination IP, protocol, port và hành vi gói tin."
                    code={`Câu hỏi:\nBên trong mạng đang có gói gì?\n\nFilter:\ndns\nicmp\ntcp.port == 443`}
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <ThreeQuestionVisual />
            </div>
        </section>
    );
}

function PingSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="cyan"
                title="Ping là gì?"
                icon={<Activity />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
                    <ConceptCard
                        title="Alo, có ai ở đó không?"
                        icon={<Send />}
                        color="cyan"
                        text="Ping là công cụ kiểm tra xem máy của bạn có thể liên lạc tới máy khác qua mạng hay không. Ping thường dùng ICMP Echo Request và ICMP Echo Reply."
                        code={`ping google.com\nping 8.8.8.8\n\nReply from 8.8.8.8: bytes=32 time=20ms TTL=117`}
                    />
                    <div className="space-y-4">
                        <PingPongVisual />
                        <div className="grid md:grid-cols-2 gap-3">
                            {pingOutputParts.map(([part, meaning, color]) => (
                                <MiniFlowNode
                                    key={part}
                                    title={part}
                                    desc={meaning}
                                    color={color}
                                    icon={
                                        part.includes("TTL") ? (
                                            <Timer />
                                        ) : part.includes("time") ? (
                                            <Clock3 />
                                        ) : part.includes("bytes") ? (
                                            <Binary />
                                        ) : (
                                            <CheckCircle2 />
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TracerouteSection() {
    const [ttl, setTtl] = useState(1);
    const routes = [
        "Router nhà",
        "Router ISP",
        "Router trung gian",
        "Server đích",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Traceroute / Tracert là gì?"
                icon={<Map />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 items-center">
                    <div className="space-y-4">
                        <ConceptCard
                            title="Xem từng hop trên đường đi"
                            icon={<Map />}
                            color="purple"
                            text="Traceroute cho biết gói tin đi qua những router nào để tới đích. Trên Windows lệnh là tracert; trên Linux/macOS thường là traceroute."
                            code={`Windows:\ntracert google.com\n\nLinux/macOS:\ntraceroute google.com\n\nMỗi dòng kết quả = một hop`}
                        />
                        <div className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
                            Ping chỉ nói “có tới được không”; Traceroute nói “đi
                            qua những router nào để tới đó”.
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div className="flex items-center justify-between gap-3 mb-5">
                            <div>
                                <p className="text-white font-black">
                                    Mô phỏng TTL
                                </p>
                                <p className="text-sm text-slate-500">
                                    Bấm để xem TTL chết ở hop nào.
                                </p>
                            </div>
                            <div className="text-purple-300 font-mono bg-purple-500/10 border border-purple-400/30 rounded-xl px-3 py-2">
                                TTL = {ttl}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mb-5">
                            {[1, 2, 3, 4].map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setTtl(n)}
                                    className={`rounded-xl px-3 py-2 font-bold border transition-all ${ttl === n ? "bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/20" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600"}`}
                                >
                                    TTL {n}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            {routes.map((name, idx) => {
                                const reached = idx + 1 <= ttl;
                                const current = idx + 1 === ttl;
                                return (
                                    <div
                                        key={name}
                                        className={`flex items-center gap-3 p-4 rounded-2xl border ${reached ? (current ? "bg-purple-500/10 border-purple-400/40" : "bg-green-500/10 border-green-400/30") : "bg-slate-900 border-slate-800 opacity-60"}`}
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${reached ? (current ? "bg-purple-500 text-white" : "bg-green-500 text-white") : "bg-slate-800 text-slate-500"}`}
                                        >
                                            {current &&
                                            idx < routes.length - 1 ? (
                                                <XCircle size={20} />
                                            ) : reached ? (
                                                <CheckCircle2 size={20} />
                                            ) : idx === routes.length - 1 ? (
                                                <Server size={20} />
                                            ) : (
                                                <Router size={20} />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-bold">
                                                Hop {idx + 1}: {name}
                                            </p>
                                            <p className="text-xs text-slate-500 font-mono">
                                                {current &&
                                                idx < routes.length - 1
                                                    ? "TTL hết tại đây → router báo về"
                                                    : reached
                                                      ? "đã đi qua"
                                                      : "chưa tới"}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WiresharkSection() {
    const [filter, setFilter] = useState("dns");
    const packets = {
        dns: [
            ["10.0.0.5", "8.8.8.8", "DNS", "Query A google.com"],
            ["8.8.8.8", "10.0.0.5", "DNS", "Response A 142.250.x.x"],
        ],
        icmp: [
            ["10.0.0.5", "8.8.8.8", "ICMP", "Echo request"],
            ["8.8.8.8", "10.0.0.5", "ICMP", "Echo reply"],
        ],
        "tcp.port == 443": [
            ["10.0.0.5", "142.250.x.x", "TCP", "SYN to 443"],
            ["142.250.x.x", "10.0.0.5", "TCP", "SYN, ACK"],
            ["10.0.0.5", "142.250.x.x", "TLS", "Client Hello"],
        ],
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Wireshark là gì?"
                icon={<PackageSearch />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Camera giao thông trên đường mạng"
                        icon={<Eye />}
                        color="emerald"
                        text="Wireshark bắt gói tin đi qua card mạng. Nó không tự sửa lỗi, nhưng giúp bạn nhìn thấy packet đang chạy, đi từ đâu tới đâu, dùng giao thức gì."
                        code={`Khi mở website có thể thấy:\nDNS query/response\nTCP handshake\nTLS/HTTPS\nHTTP nếu không mã hóa`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {Object.keys(packets).map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-3 py-2 rounded-xl text-sm font-mono border transition-all ${filter === f ? "bg-emerald-500 text-white border-emerald-400" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <WiresharkWindow
                            filter={filter}
                            packets={packets[filter]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function RealWorldExamples() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Gửi bưu phẩm"
                    icon={<PackageSearch />}
                    color="orange"
                    text="Ping hỏi bưu phẩm có tới công ty không. Traceroute xem bưu phẩm đi qua bưu cục nào. Wireshark giống như mở từng kiện để xem nhãn, địa chỉ, loại hàng và thời điểm."
                    code={`Máy bạn → Router nhà → ISP → Router trung gian → Server đích`}
                />
                <ConceptCard
                    title="Đi đường bằng xe máy"
                    icon={<Map />}
                    color="blue"
                    text="Ping giống gọi điện hỏi trường còn mở cửa không. Traceroute giống Google Maps hiển thị từng đoạn đường. Wireshark giống camera hành trình ghi lại từng xe và biển báo."
                    code={`Ping = có tới được không?\nTraceroute = đi đường nào?\nWireshark = từng gói đang chạy ra sao?`}
                />
            </div>
        </section>
    );
}

function PacketPathSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="cyan"
                title="Sơ đồ đường đi của gói tin"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <PacketPathVisual />
            </div>
        </section>
    );
}

function ComparisonTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="purple"
                title="Bảng so sánh Ping, Traceroute, Wireshark"
                icon={<ListChecks />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[780px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Công cụ</th>
                                <th className="p-4">Dùng để làm gì?</th>
                                <th className="p-4">Mức độ chi tiết</th>
                                <th className="p-4">Khi nào dùng?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toolRows.map(
                                ([tool, use, level, when, color], i) => (
                                    <tr
                                        key={tool}
                                        className={`${i === toolRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td
                                            className={`p-4 font-black ${colorClasses[color].text}`}
                                        >
                                            {tool}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {use}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {level}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {when}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function MechanismSection() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Ping gửi ICMP Echo Request",
            text: "Máy bạn gửi gói hỏi tới máy đích.",
            code: "PC → ICMP Echo Request → 8.8.8.8",
            color: "cyan",
            icon: <Send />,
        },
        {
            title: "Máy đích gửi Echo Reply",
            text: "Nếu đích nhận được và cho phép phản hồi, nó gửi gói trả lời.",
            code: "8.8.8.8 → ICMP Echo Reply → PC",
            color: "green",
            icon: <CheckCircle2 />,
        },
        {
            title: "Traceroute tăng TTL",
            text: "Traceroute gửi nhiều gói với TTL = 1, 2, 3... để phát hiện từng hop.",
            code: "TTL=1 → Router 1 báo về\nTTL=2 → Router 2 báo về",
            color: "purple",
            icon: <Timer />,
        },
        {
            title: "Wireshark bắt packet",
            text: "Wireshark ghi lại packet đi qua card WiFi/Ethernet để phân tích.",
            code: "No | Time | Source | Destination | Protocol | Info",
            color: "emerald",
            icon: <PackageSearch />,
        },
        {
            title: "Dùng filter để nhìn đúng vấn đề",
            text: "Filter giúp giảm nhiễu, ví dụ chỉ xem DNS, ICMP hoặc HTTPS.",
            code: "dns\nicmp\ntcp.port == 443\nip.addr == 8.8.8.8",
            color: "blue",
            icon: <Filter />,
        },
    ];
    return (
        <StepSection
            number="9"
            color="cyan"
            title="Cơ chế hoạt động"
            icon={<Cpu />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function WiresharkLab() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="emerald"
                title="Thực hành: nhìn thấy Ping bằng Wireshark"
                icon={<Bug />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <ConceptCard
                        title="Bài lab nhỏ"
                        icon={<Activity />}
                        color="emerald"
                        text="Mục tiêu là chạy ping ngoài Terminal/CMD, đồng thời dùng Wireshark lọc ICMP để thấy Echo request và Echo reply."
                        code={`1. Mở Wireshark\n2. Chọn card WiFi/Ethernet\n3. Filter: icmp\n4. Chạy: ping 8.8.8.8\n5. Quan sát Echo request / Echo reply`}
                    />
                    <div className="space-y-3">
                        <MiniFlowNode
                            title="Chọn interface"
                            desc="WiFi hoặc Ethernet"
                            color="cyan"
                            icon={<Wifi />}
                        />
                        <MiniFlowNode
                            title="Start capture"
                            desc="bắt packet thật"
                            color="green"
                            icon={<Eye />}
                        />
                        <MiniFlowNode
                            title="Nhập filter"
                            desc="icmp"
                            color="emerald"
                            icon={<Filter />}
                        />
                        <MiniFlowNode
                            title="Chạy lệnh"
                            desc="ping 8.8.8.8"
                            color="purple"
                            icon={<Terminal />}
                        />
                        <MiniFlowNode
                            title="Quan sát"
                            desc="Echo request / Echo reply"
                            color="orange"
                            icon={<Search />}
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {filterRows.map(([filter, meaning, color]) => (
                    <div
                        key={filter}
                        className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4`}
                    >
                        <p
                            className={`${colorClasses[color].text} font-mono font-black text-sm mb-2 break-all`}
                        >
                            {filter}
                        </p>
                        <p className="text-slate-400 text-sm">{meaning}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TroubleshootingWizard() {
    const scenarios = [
        {
            name: "Không vào được website",
            color: "cyan",
            icon: <Globe2 />,
            steps: [
                ["ping 8.8.8.8", "Kiểm tra Internet ở mức IP"],
                ["ping example.com", "Kiểm tra DNS/tên miền"],
                ["tracert example.com", "Xem đường đi bị dừng ở đâu"],
                [
                    "Wireshark: dns / tcp.port == 443",
                    "Phân tích sâu DNS, TCP, TLS",
                ],
            ],
        },
        {
            name: "Game lag / call giật",
            color: "yellow",
            icon: <Gauge />,
            steps: [
                ["ping server", "Xem độ trễ và packet loss"],
                ["tracert server", "Kiểm tra route có vòng xa không"],
                ["Wireshark", "Tìm retransmission hoặc gói bị lặp"],
                [
                    "Đổi mạng / kiểm tra WiFi",
                    "Loại trừ sóng yếu hoặc router quá tải",
                ],
            ],
        },
        {
            name: "Có mạng nhưng app không kết nối",
            color: "red",
            icon: <ShieldAlert />,
            steps: [
                ["ping IP server", "Kiểm tra đường tới server"],
                ["nslookup domain", "Kiểm tra tên miền app"],
                ["Wireshark: tcp.port", "Xem port có bị chặn không"],
                ["Wireshark: TLS", "Xem lỗi handshake/chứng chỉ nếu có"],
            ],
        },
    ];
    const [active, setActive] = useState(0);
    const current = scenarios[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="orange"
                title="Quy trình xử lý lỗi mạng thực tế"
                icon={<LifeBuoy />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                    <div className="space-y-3">
                        {scenarios.map((s, idx) => (
                            <button
                                key={s.name}
                                onClick={() => setActive(idx)}
                                className={`w-full text-left rounded-2xl border p-4 transition-all ${active === idx ? `${colorClasses[s.color].bg} ${colorClasses[s.color].border}` : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`${active === idx ? colorClasses[s.color].solid : "bg-slate-900"} text-white w-11 h-11 rounded-xl flex items-center justify-center`}
                                    >
                                        {React.cloneElement(s.icon, {
                                            size: 22,
                                        })}
                                    </div>
                                    <div>
                                        <p className="text-white font-black">
                                            {s.name}
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Bấm để xem quy trình
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className={`${colorClasses[current.color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center`}
                            >
                                {React.cloneElement(current.icon, { size: 24 })}
                            </div>
                            <div>
                                <p className="text-white font-black text-lg">
                                    {current.name}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Thứ tự kiểm tra đề xuất
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {current.steps.map(([cmd, desc], idx) => (
                                <div
                                    key={cmd}
                                    className={`${colorClasses[current.color].bg} ${colorClasses[current.color].border} border rounded-2xl p-4 flex gap-3`}
                                >
                                    <div
                                        className={`${colorClasses[current.color].solid} text-white w-8 h-8 rounded-xl flex items-center justify-center font-black shrink-0`}
                                    >
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <p
                                            className={`${colorClasses[current.color].text} font-mono text-sm break-all`}
                                        >
                                            {cmd}
                                        </p>
                                        <p className="text-slate-400 text-sm mt-1">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TroubleshootingTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="red"
                title="Một số lỗi thường gặp"
                icon={<AlertTriangle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[850px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Hiện tượng</th>
                                <th className="p-4">Công cụ nên dùng</th>
                                <th className="p-4">Khả năng lỗi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {troubleshootingRows.map(
                                ([symptom, tool, cause, color], i) => (
                                    <tr
                                        key={symptom}
                                        className={`${i === troubleshootingRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td className="p-4 text-white font-bold">
                                            {symptom}
                                        </td>
                                        <td
                                            className={`p-4 font-semibold ${colorClasses[color].text}`}
                                        >
                                            {tool}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {cause}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function CommandCheatSheet() {
    const [os, setOs] = useState("Windows");
    const commands = {
        Windows: [
            ["ping google.com", "Ping tên miền"],
            ["ping -n 4 google.com", "Gửi 4 gói ping"],
            ["tracert google.com", "Xem đường đi"],
            ["nslookup google.com", "Kiểm tra DNS"],
        ],
        "Linux/macOS": [
            ["ping google.com", "Ping liên tục"],
            ["ping -c 4 google.com", "Gửi 4 gói ping"],
            ["traceroute google.com", "Xem đường đi"],
            ["dig google.com", "Kiểm tra DNS chi tiết"],
        ],
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="blue"
                title="Cheat sheet lệnh cơ bản"
                icon={<Terminal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                    {Object.keys(commands).map((name) => (
                        <button
                            key={name}
                            onClick={() => setOs(name)}
                            className={`px-4 py-3 rounded-xl font-bold transition-all ${os === name ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    {commands[os].map(([cmd, desc]) => (
                        <div
                            key={cmd}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <p className="font-mono text-blue-300 break-all">
                                {cmd}
                            </p>
                            <p className="text-sm text-slate-500 mt-2">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="yellow"
                title="Lỗi hiểu nhầm phổ biến"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                {commonMistakes.map((m) => (
                    <div
                        key={m.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors"
                    >
                        <div
                            className={`${colorClasses[m.color].bg} ${colorClasses[m.color].text} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3">
                            {m.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {m.desc}
                        </p>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300">
                            <CheckCircle2 size={16} className="inline mr-1" />{" "}
                            {m.fix}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ConnectionSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="emerald"
                title="Bài này liên quan đến phần nào đã học?"
                icon={<Layers />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <MiniFlowNode
                    title="5.4 IP & ICMP"
                    desc="Ping dùng ICMP"
                    color="cyan"
                    icon={<Activity />}
                />
                <MiniFlowNode
                    title="5.8 Router"
                    desc="Traceroute đi qua router"
                    color="purple"
                    icon={<Router />}
                />
                <MiniFlowNode
                    title="6.2 TCP / 6.5 UDP"
                    desc="Wireshark phân tích TCP/UDP"
                    color="orange"
                    icon={<Network />}
                />
                <MiniFlowNode
                    title="7.1 DNS / 7.2 HTTPS"
                    desc="bắt DNS, HTTP, TLS"
                    color="emerald"
                    icon={<Globe2 />}
                />
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
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
                            16
                        </span>
                        Tóm tắt & Kiểm tra cuối bài
                    </h3>
                </div>
                <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                    <div>
                        <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">
                            Ghi nhớ nhanh
                        </h4>
                        <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
                            <p>Ping → Có tới được máy đích không?</p>
                            <p>Traceroute → Đi qua những router nào?</p>
                            <p>Wireshark → Gói tin thật đang như thế nào?</p>
                            <p>Ping thường dùng ICMP Echo Request/Reply.</p>
                            <p>
                                Traceroute dựa vào TTL tăng dần để phát hiện
                                từng hop.
                            </p>
                            <p>
                                Wireshark cần chọn đúng interface và dùng filter
                                để giảm nhiễu.
                            </p>
                            <p>
                                Ping IP được nhưng ping tên miền lỗi → nghi DNS.
                            </p>
                            <p>
                                * * * trong traceroute chưa chắc là mạng hỏng.
                            </p>
                            <p>
                                Quy trình tốt: kết nối → DNS → route → packet.
                            </p>
                        </div>
                    </div>
                    <InteractiveQuiz />
                </div>
            </div>
        </section>
    );
}

function InteractiveQuiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const finished = currentQ === "finished";
    const q = !finished ? quizQuestions[currentQ] : null;

    const handleSelect = (index) => {
        if (showResult) return;
        setSelected(index);
        setShowResult(true);
        if (index === q.correct) setScore((s) => s + 1);
    };

    const handleNext = () => {
        if (currentQ < quizQuestions.length - 1) {
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
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[430px]">
                <div className="text-6xl mb-4">
                    {score === quizQuestions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành bài công cụ phân tích mạng!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-cyan-400">
                        {score}/{quizQuestions.length}
                    </strong>{" "}
                    câu hỏi.
                </p>
                <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700"
                >
                    Làm lại
                </button>
            </div>
        );
    }

    return (
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[430px]">
            <div className="flex justify-between items-center mb-4 text-sm font-medium">
                <span className="text-cyan-400">
                    Câu hỏi {currentQ + 1}/{quizQuestions.length}
                </span>
                <span className="text-slate-500">Điểm: {score}</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-6 leading-snug">
                {q.question}
            </h4>
            <div className="space-y-3 flex-grow">
                {q.options.map((opt, idx) => {
                    let btnClass =
                        "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                    if (!showResult)
                        btnClass +=
                            "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300";
                    else if (idx === q.correct)
                        btnClass +=
                            "border-green-500 bg-green-500/10 text-green-400";
                    else if (idx === selected)
                        btnClass += "border-red-500 bg-red-500/10 text-red-400";
                    else
                        btnClass +=
                            "border-slate-900 bg-slate-900/50 text-slate-600 opacity-60";
                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
            {showResult && (
                <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2">
                    <div
                        className={`p-4 rounded-xl text-sm mb-4 ${selected === q.correct ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"}`}
                    >
                        <strong>Giải thích:</strong> {q.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors"
                    >
                        {currentQ < quizQuestions.length - 1
                            ? "Câu tiếp theo"
                            : "Xem kết quả"}
                    </button>
                </div>
            )}
        </div>
    );
}

function NextLesson() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">
                Bạn đã học xong Bài 10.1. Bài tiếp theo chuyển sang cấu hình
                thiết bị mạng thật.
            </p>
            <Link
                to="/phan-10-2"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 10.2 — Cấu hình Router/Switch cơ bản{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function HeroDiagnosticVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Ping"
                    value="reachability"
                    color="cyan"
                    icon={<Activity />}
                />
                <MiniCard
                    title="Trace"
                    value="path"
                    color="purple"
                    icon={<Map />}
                />
                <MiniCard
                    title="Packet"
                    value="deep view"
                    color="emerald"
                    icon={<PackageSearch />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">PC → ICMP Echo → Server</p>
                <p className="text-purple-300">TTL=1,2,3 → discover hops</p>
                <p className="text-emerald-300">Capture → Filter → Analyze</p>
                <p className="text-orange-300">DNS → TCP → TLS → HTTP</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="DNS"
                    value="name → IP"
                    color="blue"
                    icon={<Database />}
                />
                <MiniCard
                    title="TCP"
                    value="handshake"
                    color="orange"
                    icon={<Network />}
                />
                <MiniCard
                    title="TLS"
                    value="encrypted"
                    color="green"
                    icon={<ShieldAlert />}
                />
            </div>
        </div>
    );
}

function ThreeQuestionVisual() {
    return (
        <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
            <MiniFlowNode
                title="Ping"
                desc="Đích có trả lời không?"
                color="cyan"
                icon={<Activity />}
            />
            <ArrowRight className="hidden lg:block text-slate-500" />
            <MiniFlowNode
                title="Traceroute"
                desc="Đường đi qua đâu?"
                color="purple"
                icon={<Map />}
            />
            <ArrowRight className="hidden lg:block text-slate-500" />
            <MiniFlowNode
                title="Wireshark"
                desc="Packet bên trong ra sao?"
                color="emerald"
                icon={<PackageSearch />}
            />
        </div>
    );
}

function PingPongVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-3">
                        <Monitor size={30} />
                    </div>
                    <p className="text-white font-black">Máy bạn</p>
                </div>
                <div className="space-y-3 text-center font-mono text-xs md:text-sm">
                    <div className="text-cyan-300">Echo Request →</div>
                    <div className="text-green-300">← Echo Reply</div>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 border border-green-400/40 flex items-center justify-center text-green-300 mb-3">
                        <Server size={30} />
                    </div>
                    <p className="text-white font-black">Máy đích</p>
                </div>
            </div>
        </div>
    );
}

function WiresharkWindow({ filter, packets }) {
    return (
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="bg-slate-950 border-b border-slate-800 p-3 flex items-center gap-3">
                <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="font-mono text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-lg px-2 py-1">
                    Display filter: {filter}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[540px] text-xs md:text-sm">
                    <thead className="text-slate-500 border-b border-slate-800">
                        <tr>
                            <th className="p-3">No.</th>
                            <th className="p-3">Source</th>
                            <th className="p-3">Destination</th>
                            <th className="p-3">Protocol</th>
                            <th className="p-3">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packets.map(([src, dst, proto, info], idx) => (
                            <tr
                                key={`${src}-${dst}-${info}`}
                                className="border-b border-slate-800/70 hover:bg-slate-800/60"
                            >
                                <td className="p-3 text-slate-500">
                                    {idx + 1}
                                </td>
                                <td className="p-3 text-cyan-300 font-mono">
                                    {src}
                                </td>
                                <td className="p-3 text-purple-300 font-mono">
                                    {dst}
                                </td>
                                <td className="p-3 text-emerald-300 font-black">
                                    {proto}
                                </td>
                                <td className="p-3 text-slate-300">{info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid md:grid-cols-2 border-t border-slate-800">
                <div className="p-4 border-b md:border-b-0 md:border-r border-slate-800">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                        Packet details
                    </p>
                    <p className="font-mono text-sm text-slate-300">
                        Ethernet II / IP / TCP|UDP|ICMP / Payload
                    </p>
                </div>
                <div className="p-4">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                        Bytes
                    </p>
                    <p className="font-mono text-sm text-slate-500">
                        45 00 00 3c 1c 46 40 00 ...
                    </p>
                </div>
            </div>
        </div>
    );
}

function PacketPathVisual() {
    const nodes = [
        ["Máy bạn", "ping / traceroute / TCP", "cyan", <Monitor />],
        ["Router WiFi nhà", "gateway nội bộ", "blue", <Wifi />],
        ["Nhà mạng ISP", "mạng truy cập", "purple", <RadioTower />],
        ["Router trung gian", "hop trên Internet", "orange", <Router />],
        ["Server đích", "google.com / example.com", "emerald", <Server />],
    ];
    return (
        <div className="space-y-3">
            {nodes.map(([title, desc, color, icon], idx) => (
                <React.Fragment key={title}>
                    <MiniFlowNode
                        title={title}
                        desc={desc}
                        color={color}
                        icon={icon}
                    />
                    {idx < nodes.length - 1 && (
                        <ArrowRight className="mx-auto text-slate-500 rotate-90" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

function StepSection({ number, color, title, icon, steps, step, setStep }) {
    const current = steps[step];
    const c = colorClasses[current.color];
    return (
        <section className="space-y-6">
            <SectionTitle
                number={number}
                color={color}
                title={title}
                icon={icon}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div
                        className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[390px] flex flex-col justify-between`}
                    >
                        <div>
                            <div
                                className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}
                            >
                                {React.cloneElement(current.icon, { size: 32 })}
                            </div>
                            <p
                                className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}
                            >
                                Bước {step + 1}/{steps.length}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {current.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                {current.text}
                            </p>
                            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">
                                {current.code}
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() =>
                                    setStep((s) => Math.max(0, s - 1))
                                }
                                disabled={step === 0}
                                className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={() =>
                                    setStep((s) => (s + 1) % steps.length)
                                }
                                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold inline-flex items-center gap-2"
                            >
                                {step === steps.length - 1
                                    ? "Xem lại"
                                    : "Bước tiếp"}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <StepFlow
                            steps={steps}
                            active={step}
                            setActive={setStep}
                            color={current.color}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepFlow({ steps, active, setActive, color }) {
    const c = colorClasses[color];
    return (
        <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1">
            {steps.map((s, index) => (
                <button
                    key={s.title}
                    onClick={() => setActive(index)}
                    className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}
                >
                    <div
                        className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}
                    >
                        {index < active ? (
                            <CheckCircle2 size={16} />
                        ) : (
                            index + 1
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-white font-bold">
                            {s.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">
                            {s.code}
                        </p>
                    </div>
                </button>
            ))}
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
    return (
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span
                className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}
            >
                <span className="font-black">{number}</span>
                {React.cloneElement(icon, { size: 20 })}
            </span>
            {title}
        </h3>
    );
}

function ConceptCard({ title, icon, color, text, code }) {
    const c = colorClasses[color];
    return (
        <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
            <div
                className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {text}
            </p>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">
                {code}
            </div>
        </div>
    );
}

function MiniCard({ title, value, color, icon }) {
    const c = colorClasses[color];
    return (
        <div
            className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}
        >
            <div className={`${c.text} flex justify-center mb-1`}>
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <p className={`${c.text} font-black text-sm`}>{title}</p>
            <p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p>
        </div>
    );
}

function MiniFlowNode({ title, desc, color, icon }) {
    const c = colorClasses[color];
    return (
        <div
            className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}
        >
            <div
                className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}
            >
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <div className="min-w-0">
                <p className="text-white font-black">{title}</p>
                <p className={`${c.text} text-sm mt-1 font-mono break-all`}>
                    {desc}
                </p>
            </div>
        </div>
    );
}
