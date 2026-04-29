import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    Boxes,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Cloud,
    Code2,
    Cpu,
    Database,
    Eye,
    FileCode2,
    FileText,
    Filter,
    Globe2,
    HardDrive,
    KeyRound,
    Layers,
    ListChecks,
    Lock,
    Map,
    Monitor,
    Network,
    Package,
    RadioTower,
    RefreshCw,
    Router,
    Route,
    Search,
    Server,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    Shuffle,
    SplitSquareHorizontal,
    Terminal,
    TrafficCone,
    Users,
    Wifi,
    Wrench,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Tunnel = Route;

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

const cloudComponents = [
    ["VPC/VNet", "Mạng riêng ảo trên cloud", "cyan", <Cloud />],
    ["Subnet", "Chia nhỏ mạng cloud", "blue", <SplitSquareHorizontal />],
    ["Route Table", "Bảng chỉ đường", "purple", <Route />],
    ["Security Group", "Firewall ảo cho tài nguyên", "red", <Shield />],
    ["NAT Gateway", "Private subnet đi ra Internet", "orange", <Shuffle />],
    ["Load Balancer", "Phân phối traffic", "emerald", <Shuffle />],
    ["VPN Gateway", "Nối cloud với văn phòng", "yellow", <Tunnel />],
    ["Virtual Machine", "Server ảo chạy app", "green", <Server />],
];

const subnetRows = [
    [
        "Public Subnet",
        "10.0.1.0/24",
        "Load Balancer, Bastion, NAT Gateway",
        "Có route ra Internet Gateway",
        "cyan",
        <Globe2 />,
    ],
    [
        "Private App Subnet",
        "10.0.2.0/24",
        "Application Server, Backend API",
        "Không nhận truy cập Internet trực tiếp",
        "purple",
        <Server />,
    ],
    [
        "Private DB Subnet",
        "10.0.3.0/24",
        "Database, Storage backend",
        "Chỉ App Server được truy cập",
        "emerald",
        <Database />,
    ],
];

const securityRules = [
    [
        "Inbound",
        "TCP",
        "443",
        "0.0.0.0/0",
        "Cho user truy cập HTTPS vào Load Balancer",
        "green",
    ],
    ["Inbound", "TCP", "22", "IP admin", "Chỉ admin được SSH", "yellow"],
    [
        "Inbound",
        "TCP",
        "3306",
        "App Security Group",
        "Chỉ app được vào database",
        "emerald",
    ],
    ["Outbound", "Any", "Any", "0.0.0.0/0", "Cho phép đi ra ngoài", "blue"],
];

const routeRows = [
    ["10.0.0.0/16", "local", "Đi trong nội bộ VPC", "green"],
    ["0.0.0.0/0", "Internet Gateway", "Đi ra Internet", "cyan"],
    ["192.168.1.0/24", "VPN Gateway", "Đi về mạng văn phòng qua VPN", "yellow"],
];

const compareRows = [
    [
        "Thiết bị",
        "Router/Switch vật lý",
        "Router/Switch ảo, dịch vụ cloud",
        "Thiết bị + controller",
    ],
    [
        "Cấu hình",
        "Cấu hình từng thiết bị",
        "Console/API/IaC",
        "Controller điều khiển",
    ],
    [
        "Mở rộng",
        "Cần mua/lắp thiết bị",
        "Tạo thêm tài nguyên nhanh",
        "Điều phối linh hoạt",
    ],
    [
        "Bảo mật",
        "Firewall vật lý/VLAN/ACL",
        "Security Group/NACL/Firewall cloud",
        "Policy tập trung",
    ],
    [
        "Tự động hóa",
        "Khó hơn",
        "Dễ hơn với API/Terraform",
        "Rất phù hợp tự động hóa",
    ],
    ["Chi phí ban đầu", "Cao", "Thấp hơn ban đầu", "Tùy kiến trúc"],
];

const cloudMistakes = [
    [
        "Đặt database trong public subnet",
        "Rất nguy hiểm, dễ bị tấn công trực tiếp",
        "Đặt DB trong private DB subnet, chỉ cho App SG truy cập",
        "red",
        <Database />,
    ],
    [
        "Mở SSH 0.0.0.0/0",
        "Ai trên Internet cũng có thể thử dò mật khẩu",
        "Giới hạn IP admin hoặc quản trị qua VPN/bastion",
        "orange",
        <Terminal />,
    ],
    [
        "Không có NAT cho private subnet",
        "Server private khó update/cài package",
        "Dùng NAT Gateway trong public subnet",
        "yellow",
        <Shuffle />,
    ],
    [
        "Route Table sai",
        "Máy không ra Internet hoặc không tới mạng nội bộ",
        "Kiểm tra destination/target theo từng subnet",
        "purple",
        <Route />,
    ],
    [
        "VPC CIDR trùng mạng văn phòng",
        "VPN routing bị lỗi hoặc khó định tuyến",
        "Chọn CIDR không trùng office/VPN/cloud khác",
        "blue",
        <Tunnel />,
    ],
    [
        "Không ghi flow log",
        "Khó điều tra sự cố bảo mật",
        "Bật VPC Flow Logs/cloud logging",
        "emerald",
        <Eye />,
    ],
    [
        "Không dùng IaC",
        "Hạ tầng khó tái tạo và khó kiểm soát thay đổi",
        "Mô tả VPC/subnet/rule bằng Terraform/IaC",
        "cyan",
        <FileCode2 />,
    ],
];

const quizQuestions = [
    {
        question: "VPC/VNet dùng để làm gì?",
        options: [
            "Lưu file người dùng",
            "Tạo mạng riêng ảo trên cloud",
            "Mã hóa mật khẩu",
            "Thay thế hệ điều hành",
        ],
        correct: 1,
        explanation:
            "VPC/VNet là mạng riêng ảo lớn nhất của bạn trên cloud, nơi bạn chia subnet, route, security rule và đặt tài nguyên.",
    },
    {
        question: "Vì sao database nên đặt trong Private Subnet?",
        options: [
            "Để không bị Internet truy cập trực tiếp",
            "Để database nhanh hơn mọi trường hợp",
            "Để không cần backup",
            "Để bỏ Security Group",
        ],
        correct: 0,
        explanation:
            "Database không nên public Internet. Nó nên nằm trong private subnet và chỉ cho app server/security group phù hợp truy cập.",
    },
    {
        question: "Security Group giống thành phần nào nhất?",
        options: [
            "Ổ cứng ảo",
            "Tường lửa ảo gắn vào tài nguyên",
            "Dịch vụ DNS công cộng",
            "Phần mềm soạn code",
        ],
        correct: 1,
        explanation:
            "Security Group kiểm soát inbound/outbound traffic theo protocol, port và nguồn/đích.",
    },
    {
        question: "NAT Gateway giúp private server làm gì?",
        options: [
            "Đi ra Internet để update/gọi API nhưng không bị Internet truy cập chủ động ngược vào",
            "Mở database ra Internet",
            "Thay thế Load Balancer",
            "Xóa route table",
        ],
        correct: 0,
        explanation:
            "NAT Gateway cho phép kết nối outbound từ private subnet ra Internet, nhưng không cho Internet chủ động kết nối vào server private.",
    },
    {
        question: "SDN tách phần nào khỏi thiết bị vật lý?",
        options: [
            "Control Plane khỏi Data Plane",
            "Ổ cứng khỏi RAM",
            "HTTP khỏi HTTPS",
            "DNS khỏi IP",
        ],
        correct: 0,
        explanation:
            "SDN đưa logic điều khiển lên controller trung tâm, còn switch/router chủ yếu thực thi forwarding ở data plane.",
    },
    {
        question: "Infrastructure as Code giúp gì trong cloud?",
        options: [
            "Mô tả hạ tầng bằng code để lặp lại, review, khôi phục và giảm lỗi tay",
            "Tự động tăng tốc CPU vật lý",
            "Thay thế hoàn toàn bảo mật",
            "Bỏ cần subnet",
        ],
        correct: 0,
        explanation:
            "IaC như Terraform giúp tạo hạ tầng cloud bằng file cấu hình, dễ kiểm soát thay đổi và dựng lại môi trường.",
    },
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 shrink-0">
                            <Cloud className="text-cyan-400" size={24} />
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
                        Bài 10.4
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatIsCloudNetworking />
                <VpcVnetSection />
                <SubnetSection />
                <SecurityGroupSection />
                <RouteTableSection />
                <SdnSection />
                <RealWorldExamples />
                <CloudTopologySection />
                <ComparisonTable />
                <CloudMechanismSection />
                <SdnMechanismSection />
                <WebAppDesignSection />
                <IacSection />
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
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <Cloud size={16} /> Cloud Networking — SDN — IaC
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Cloud Networking
                        <span className="block text-cyan-400">& SDN</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bài này giúp bạn hiểu mạng trên cloud, VPC/VNet,
                        public/private subnet, route table, security group, NAT
                        Gateway, Load Balancer, VPN và tư duy SDN.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl space-y-1">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">VPC/VNet</span> =
                            mạng riêng ảo trên cloud.
                        </p>
                        <p>
                            <span className="text-emerald-300">
                                Security Group
                            </span>{" "}
                            = firewall ảo cho tài nguyên.
                        </p>
                        <p>
                            <span className="text-purple-300">SDN</span> =
                            controller điều khiển mạng bằng phần mềm.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroCloudVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        [
            "Cloud Networking",
            "Hiểu cloud networking là gì và khác mạng truyền thống thế nào.",
            <Cloud />,
        ],
        [
            "Thành phần cloud",
            "Nắm VPC/VNet, subnet, route table, SG, NAT, LB, VPN.",
            <Boxes />,
        ],
        ["SDN", "Hiểu Software-Defined Networking là gì.", <Cpu />],
        [
            "Control/Data",
            "Biết vì sao SDN tách control plane khỏi thiết bị vật lý.",
            <Layers />,
        ],
        [
            "Thiết kế web app",
            "Hình dung mạng cloud đơn giản cho ứng dụng web.",
            <Globe2 />,
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

function WhatIsCloudNetworking() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Cloud Networking là gì?"
                icon={<Cloud />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
                    <ConceptCard
                        title="Xây mạng bằng tài nguyên ảo"
                        icon={<Cloud />}
                        color="blue"
                        text="Cloud Networking là mạng máy tính được xây dựng trên nền tảng cloud như AWS, Azure, Google Cloud. Thay vì mua router/switch/firewall vật lý, bạn tạo các thành phần mạng bằng phần mềm."
                        code={`Truyền thống:\nRouter thật, Switch thật, Firewall thật, dây mạng thật\n\nCloud:\nVPC/VNet, Subnet, Route Table, Security Group, NAT Gateway, Load Balancer, VM`}
                    />
                    <div className="grid md:grid-cols-2 gap-3">
                        {cloudComponents.map(([title, desc, color, icon]) => (
                            <MiniFlowNode
                                key={title}
                                title={title}
                                desc={desc}
                                color={color}
                                icon={icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function VpcVnetSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="cyan"
                title="VPC / VNet là gì?"
                icon={<Cloud />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Mạng riêng ảo lớn nhất của bạn trên cloud"
                    icon={<Cloud />}
                    color="cyan"
                    text="VPC là Virtual Private Cloud. Trong Azure, khái niệm tương đương thường gọi là VNet. Nó giống như một mạng công ty riêng nằm trên cloud."
                    code={`Company Cloud Network\nCIDR: 10.0.0.0/16\n\nPublic Subnet:      10.0.1.0/24\nPrivate App Subnet: 10.0.2.0/24\nPrivate DB Subnet:  10.0.3.0/24`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <VpcVisual />
                    <div className="mt-5 bg-cyan-500/10 border border-cyan-400/40 rounded-2xl p-4 text-sm text-cyan-300">
                        Nếu mạng doanh nghiệp là tòa nhà công ty, thì VPC là khu
                        đất riêng của công ty trên cloud.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SubnetSection() {
    const [active, setActive] = useState(0);
    const row = subnetRows[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Public Subnet và Private Subnet"
                icon={<SplitSquareHorizontal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <ConceptCard
                        title="Sảnh lễ tân và phòng nội bộ"
                        icon={<SplitSquareHorizontal />}
                        color="purple"
                        text="Public Subnet tiếp xúc Internet, thường đặt Load Balancer, Bastion hoặc NAT Gateway. Private Subnet chứa app, database, internal API và không cho Internet truy cập trực tiếp."
                        code={`Public Subnet = sảnh lễ tân\nPrivate Subnet = phòng làm việc nội bộ\n\nUser Internet → Load Balancer\nLoad Balancer → App Server\nApp Server → Database`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <div className="grid gap-3 mb-5">
                            {subnetRows.map(
                                (
                                    [name, cidr, place, note, color, icon],
                                    idx,
                                ) => (
                                    <button
                                        key={name}
                                        onClick={() => setActive(idx)}
                                        className={`w-full text-left rounded-2xl border p-4 transition-all ${active === idx ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-900 border-slate-800 hover:border-slate-600"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`${active === idx ? colorClasses[color].solid : "bg-slate-950"} text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
                                            >
                                                {React.cloneElement(icon, {
                                                    size: 20,
                                                })}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-white font-black">
                                                    {name}
                                                </p>
                                                <p
                                                    className={`${colorClasses[color].text} font-mono text-xs break-all`}
                                                >
                                                    {cidr}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                ),
                            )}
                        </div>
                        <div
                            className={`${colorClasses[row[4]].bg} ${colorClasses[row[4]].border} border rounded-3xl p-5`}
                        >
                            <h3 className="text-white text-xl font-bold mb-3">
                                {row[0]}
                            </h3>
                            <div className="grid md:grid-cols-3 gap-3">
                                <MiniMetric
                                    label="CIDR"
                                    value={row[1]}
                                    color={row[4]}
                                />
                                <MiniMetric
                                    label="Thường đặt"
                                    value={row[2]}
                                    color="green"
                                />
                                <MiniMetric
                                    label="Đặc điểm"
                                    value={row[3]}
                                    color="cyan"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SecurityGroupSection() {
    const [active, setActive] = useState(0);
    const row = securityRules[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="red"
                title="Security Group là gì?"
                icon={<Shield />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                    <ConceptCard
                        title="Bảo vệ trước từng tài nguyên"
                        icon={<Shield />}
                        color="red"
                        text="Security Group là tường lửa ảo gắn vào máy chủ hoặc dịch vụ cloud. Nó quy định ai được vào, vào port nào, từ IP nào và dùng giao thức gì."
                        code={`Inbound TCP 443 từ 0.0.0.0/0 → HTTPS\nInbound TCP 22 từ IP admin → SSH\nInbound TCP 3306 từ App Subnet → Database\nOutbound Any → Internet`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <div className="grid md:grid-cols-2 gap-2 mb-5">
                            {securityRules.map(
                                (
                                    [type, proto, port, source, meaning, color],
                                    idx,
                                ) => (
                                    <button
                                        key={`${type}-${port}-${source}`}
                                        onClick={() => setActive(idx)}
                                        className={`rounded-xl p-3 text-left border transition-all ${active === idx ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-900 border-slate-800 hover:border-slate-600"}`}
                                    >
                                        <p className="text-white font-bold text-sm">
                                            {type} {proto}/{port}
                                        </p>
                                        <p className="text-slate-500 text-xs font-mono">
                                            from {source}
                                        </p>
                                    </button>
                                ),
                            )}
                        </div>
                        <div
                            className={`${colorClasses[row[5]].bg} ${colorClasses[row[5]].border} border rounded-3xl p-5`}
                        >
                            <div
                                className={`${colorClasses[row[5]].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                            >
                                <Shield size={24} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">
                                {row[0]} rule
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                <MiniMetric
                                    label="Protocol"
                                    value={row[1]}
                                    color={row[5]}
                                />
                                <MiniMetric
                                    label="Port"
                                    value={row[2]}
                                    color="cyan"
                                />
                                <MiniMetric
                                    label="Nguồn"
                                    value={row[3]}
                                    color="purple"
                                />
                                <MiniMetric
                                    label="Ý nghĩa"
                                    value={row[4]}
                                    color="green"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RouteTableSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Route Table là gì?"
                icon={<Route />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Bảng chỉ đường cho gói tin"
                    icon={<Route />}
                    color="orange"
                    text="Route Table trả lời câu hỏi: muốn đi tới mạng X thì đi qua đâu? Trong cloud, mỗi subnet thường liên kết với một route table."
                    code={`Destination     Target\n10.0.0.0/16     local\n0.0.0.0/0       Internet Gateway\n192.168.1.0/24  VPN Gateway`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[560px] text-sm">
                            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th className="p-4">Destination</th>
                                    <th className="p-4">Target</th>
                                    <th className="p-4">Ý nghĩa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routeRows.map(
                                    ([dest, target, meaning, color], idx) => (
                                        <tr
                                            key={dest}
                                            className={`${idx === routeRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                        >
                                            <td
                                                className={`${colorClasses[color].text} p-4 font-mono font-black`}
                                            >
                                                {dest}
                                            </td>
                                            <td className="p-4 text-white font-bold">
                                                {target}
                                            </td>
                                            <td className="p-4 text-slate-300">
                                                {meaning}
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SdnSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="purple"
                title="SDN là gì?"
                icon={<Cpu />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Mạng định nghĩa bằng phần mềm"
                        icon={<Cpu />}
                        color="purple"
                        text="SDN — Software-Defined Networking — là cách quản lý mạng bằng phần mềm, tập trung điều khiển thay vì cấu hình rời rạc từng router/switch."
                        code={`Mạng truyền thống:\nRouter/Switch tự có logic điều khiển riêng.\n\nSDN:\nController quyết định chính sách.\nSwitch/Router thực thi chuyển tiếp gói tin.`}
                    />
                    <SdnVisual />
                </div>
            </div>
        </section>
    );
}

function RealWorldExamples() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="blue"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Văn phòng thật và văn phòng ảo"
                    icon={<Cloud />}
                    color="cyan"
                    text="Mạng truyền thống giống thuê tòa nhà thật: mua switch, router, kéo dây, đặt firewall. Cloud networking giống thuê văn phòng ảo: tạo VPC, subnet, route table, firewall rule, server ảo bằng phần mềm."
                    code={`Truyền thống: mua/lắp/bảo trì thiết bị\nCloud: tạo tài nguyên ảo qua console/API/IaC`}
                />
                <ConceptCard
                    title="Điều phối giao thông thành phố"
                    icon={<TrafficCone />}
                    color="purple"
                    text="Mạng truyền thống giống mỗi ngã tư tự hoạt động riêng. SDN giống có trung tâm điều phối giao thông nhìn toàn cảnh và đẩy chính sách xuống từng ngã tư."
                    code={`SDN Controller nhìn toàn mạng\nController đẩy policy xuống switch/router\nData Plane chuyển tiếp theo rule`}
                />
            </div>
        </section>
    );
}

function CloudTopologySection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="cyan"
                title="Sơ đồ Cloud Networking cơ bản"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <CloudTopologyVisual />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <OfficeCloudVpnVisual />
            </div>
        </section>
    );
}

function ComparisonTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="emerald"
                title="So sánh mạng truyền thống, Cloud Networking và SDN"
                icon={<BarChart3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[900px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tiêu chí</th>
                                <th className="p-4 text-orange-300">
                                    Mạng truyền thống
                                </th>
                                <th className="p-4 text-cyan-300">
                                    Cloud Networking
                                </th>
                                <th className="p-4 text-purple-300">SDN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map(
                                ([criteria, traditional, cloud, sdn], idx) => (
                                    <tr
                                        key={criteria}
                                        className={`${idx === compareRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td className="p-4 text-white font-bold">
                                            {criteria}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {traditional}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {cloud}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {sdn}
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

function CloudMechanismSection() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Tạo VPC",
            text: "VPC là mạng riêng tổng. Ví dụ 10.0.0.0/16 đủ lớn để chia nhiều subnet.",
            code: "VPC: 10.0.0.0/16",
            color: "cyan",
            icon: <Cloud />,
        },
        {
            title: "Chia subnet",
            text: "Tách public subnet, private app subnet và private database subnet theo vai trò.",
            code: "Public Subnet:      10.0.1.0/24\nPrivate App Subnet: 10.0.2.0/24\nPrivate DB Subnet:  10.0.3.0/24",
            color: "purple",
            icon: <SplitSquareHorizontal />,
        },
        {
            title: "Tạo Internet Gateway",
            text: "Internet Gateway là cổng ra/vào Internet cho VPC. Public subnet cần default route ra IGW.",
            code: "Destination     Target\n10.0.0.0/16     local\n0.0.0.0/0       Internet Gateway",
            color: "blue",
            icon: <Globe2 />,
        },
        {
            title: "Tạo NAT Gateway",
            text: "NAT Gateway cho private server đi ra Internet để update/cài package, nhưng Internet không chủ động vào ngược được.",
            code: "Private Server → NAT Gateway → Internet: Được\nInternet → NAT Gateway → Private Server: Không chủ động",
            color: "orange",
            icon: <Shuffle />,
        },
        {
            title: "Tạo Security Group",
            text: "Định nghĩa rule cho Load Balancer, App Server và Database theo nguyên tắc chỉ mở đúng thứ cần thiết.",
            code: "LB: TCP 443 từ Internet\nApp: TCP 80 từ LB SG\nDB: TCP 3306 từ App SG",
            color: "red",
            icon: <Shield />,
        },
        {
            title: "Kết nối cloud về văn phòng bằng VPN",
            text: "Site-to-Site VPN nối Office LAN với Cloud VPC. Hai bên cần route đúng CIDR của nhau.",
            code: "Office LAN 192.168.1.0/24 ↔ VPN Tunnel ↔ Cloud VPC 10.0.0.0/16",
            color: "yellow",
            icon: <Tunnel />,
        },
    ];
    return (
        <StepSection
            number="11"
            color="cyan"
            title="Cloud Networking hoạt động như thế nào?"
            icon={<Wrench />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function SdnMechanismSection() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Application Plane yêu cầu chính sách",
            text: "Ứng dụng hoặc hệ thống quản trị yêu cầu một policy mạng cụ thể.",
            code: "Ứng dụng bảo mật yêu cầu:\nChặn VLAN Guest truy cập Server VLAN.",
            color: "cyan",
            icon: <FileText />,
        },
        {
            title: "SDN Controller xử lý",
            text: "Controller biến yêu cầu cấp cao thành rule cụ thể.",
            code: "Nếu nguồn = Guest\nvà đích = Server\n→ deny",
            color: "purple",
            icon: <Cpu />,
        },
        {
            title: "Controller đẩy rule xuống thiết bị",
            text: "Switch/router nhận flow rule hoặc policy từ controller.",
            code: "Switch 1 nhận rule\nSwitch 2 nhận rule\nRouter nhận rule",
            color: "blue",
            icon: <Network />,
        },
        {
            title: "Data Plane thực thi",
            text: "Thiết bị chuyển tiếp hoặc chặn gói theo rule đã nhận.",
            code: "Guest → Server: bị chặn\nEmployee → Server: được phép theo policy\nIT → Server: được phép nhiều hơn",
            color: "emerald",
            icon: <Zap />,
        },
    ];
    return (
        <StepSection
            number="12"
            color="purple"
            title="SDN hoạt động như thế nào?"
            icon={<Cpu />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function WebAppDesignSection() {
    const [tab, setTab] = useState("Thiết kế");
    const tabs = {
        "Thiết kế": `VPC: 10.10.0.0/16\n\nPublic Subnet:\n10.10.1.0/24\n- Load Balancer\n- NAT Gateway\n\nPrivate App Subnet:\n10.10.2.0/24\n- App Server 1\n- App Server 2\n\nPrivate DB Subnet:\n10.10.3.0/24\n- Database\n\nVPN:\nOffice LAN 192.168.1.0/24 ↔ VPC 10.10.0.0/16`,
        "Luồng truy cập": `User ngoài Internet\n→ chỉ vào được Load Balancer port 443\n→ Load Balancer chuyển tới App Server\n→ App Server truy cập Database\n→ Database không mở trực tiếp ra Internet`,
        "Security Rule": `Internet → Load Balancer: TCP 443 Allow\nInternet → App Server: Any Deny\nInternet → Database: Any Deny\nLoad Balancer → App Server: TCP 80/443 Allow\nApp Server → Database: TCP 3306/5432 Allow\nOffice VPN → App Server: 22/3389 Allow cho admin`,
        "Route chính": `Public Route Table:\n10.10.0.0/16 → local\n0.0.0.0/0 → Internet Gateway\n\nPrivate Route Table:\n10.10.0.0/16 → local\n0.0.0.0/0 → NAT Gateway\n192.168.1.0/24 → VPN Gateway`,
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="emerald"
                title="Ví dụ thiết kế hoàn chỉnh: Web App trên Cloud"
                icon={<Globe2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                    <ConceptCard
                        title="Yêu cầu"
                        icon={<Globe2 />}
                        color="emerald"
                        text="Công ty muốn triển khai app bán hàng: người dùng truy cập qua HTTPS, app server không public trực tiếp, database tuyệt đối không public Internet, admin quản trị qua VPN."
                        code={`Người dùng → HTTPS\nApp server không public trực tiếp\nDatabase không public Internet\nAdmin quản trị qua VPN`}
                    />
                    <WebAppCloudVisual />
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                    {Object.keys(tabs).map((name) => (
                        <button
                            key={name}
                            onClick={() => setTab(name)}
                            className={`px-4 py-3 rounded-xl font-bold transition-all ${tab === name ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
                        <Terminal size={18} className="text-emerald-300" />
                        <p className="text-white font-black">{tab}</p>
                    </div>
                    <pre className="p-5 overflow-x-auto text-sm text-green-300 font-mono whitespace-pre-wrap">
                        {tabs[tab]}
                    </pre>
                </div>
            </div>
        </section>
    );
}

function IacSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="blue"
                title="Infrastructure as Code — IaC"
                icon={<FileCode2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Hạ tầng được mô tả bằng code"
                        icon={<FileCode2 />}
                        color="blue"
                        text="Trong cloud, người ta thường không click tạo từng thứ mãi mãi. Infrastructure as Code cho phép mô tả VPC, subnet, route, security group bằng file cấu hình."
                        code={`Thay vì click tạo VPC/subnet bằng tay,\nta viết file cấu hình rồi cho công cụ tự tạo.`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
                            <FileCode2 size={18} className="text-blue-300" />
                            <p className="text-white font-black">
                                Terraform ý tưởng
                            </p>
                        </div>
                        <pre className="p-5 overflow-x-auto text-sm text-green-300 font-mono whitespace-pre-wrap">{`resource "aws_vpc" "main" {
  cidr_block = "10.10.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.10.1.0/24"
}

resource "aws_subnet" "private_app" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.10.2.0/24"
}`}</pre>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <MiniFlowNode
                    title="Lặp lại được"
                    desc="dev/test/prod giống nhau"
                    color="cyan"
                    icon={<RefreshCw />}
                />
                <MiniFlowNode
                    title="Dễ kiểm tra"
                    desc="review code trước khi áp dụng"
                    color="green"
                    icon={<Eye />}
                />
                <MiniFlowNode
                    title="Dễ khôi phục"
                    desc="dựng lại hạ tầng từ code"
                    color="emerald"
                    icon={<HardDrive />}
                />
                <MiniFlowNode
                    title="Ít lỗi tay"
                    desc="giảm click nhầm"
                    color="orange"
                    icon={<CheckCircle2 />}
                />
            </div>
        </section>
    );
}

function CommonMistakes() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="yellow"
                title="Lỗi phổ biến khi thiết kế mạng cloud"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cloudMistakes.map(([title, desc, fix, color, icon]) => (
                    <div
                        key={title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors"
                    >
                        <div
                            className={`${colorClasses[color].bg} ${colorClasses[color].text} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {desc}
                        </p>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300">
                            <CheckCircle2 size={16} className="inline mr-1" />{" "}
                            {fix}
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
                number="16"
                color="emerald"
                title="Bài này liên quan đến phần nào đã học?"
                icon={<Layers />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <MiniFlowNode
                    title="5.1/5.2 IPv4/Subnet"
                    desc="VPC/subnet cần CIDR"
                    color="cyan"
                    icon={<Database />}
                />
                <MiniFlowNode
                    title="5.5 Static Routing"
                    desc="Route Table là tư duy định tuyến"
                    color="purple"
                    icon={<Route />}
                />
                <MiniFlowNode
                    title="5.7 NAT & PAT"
                    desc="NAT Gateway"
                    color="orange"
                    icon={<Shuffle />}
                />
                <MiniFlowNode
                    title="7.2 HTTP/HTTPS"
                    desc="Load Balancer nhận web traffic"
                    color="green"
                    icon={<Globe2 />}
                />
                <MiniFlowNode
                    title="9.3 Firewall"
                    desc="Security Group/NACL"
                    color="red"
                    icon={<Shield />}
                />
                <MiniFlowNode
                    title="9.4 VPN"
                    desc="Site-to-Site VPN"
                    color="blue"
                    icon={<Tunnel />}
                />
                <MiniFlowNode
                    title="10.3 Enterprise Design"
                    desc="cloud là phần mở rộng"
                    color="emerald"
                    icon={<Cloud />}
                />
                <MiniFlowNode
                    title="Automation"
                    desc="IaC/API/Terraform"
                    color="yellow"
                    icon={<FileCode2 />}
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
                            17
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
                            <p>VPC/VNet → mạng riêng ảo trên cloud.</p>
                            <p>Subnet → chia nhỏ mạng cloud.</p>
                            <p>
                                Public Subnet → tiếp xúc Internet qua Internet
                                Gateway.
                            </p>
                            <p>
                                Private Subnet → chứa app/database cần bảo vệ.
                            </p>
                            <p>Route Table → bảng chỉ đường.</p>
                            <p>Security Group → firewall ảo cho tài nguyên.</p>
                            <p>NAT Gateway → private subnet đi ra Internet.</p>
                            <p>Load Balancer → phân phối traffic.</p>
                            <p>VPN Gateway → nối cloud với văn phòng.</p>
                            <p>
                                SDN → controller điều khiển mạng bằng phần mềm.
                            </p>
                            <p>IaC → mô tả hạ tầng bằng code.</p>
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
        } else setCurrentQ("finished");
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
                    Hoàn thành bài Cloud Networking & SDN!
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
                Bạn đã học xong Bài 10.4. Bài tiếp theo là bài tổng kết và lộ
                trình chứng chỉ.
            </p>
            <Link
                to="/phan-10-5"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 10.5 — Ôn tập & Lộ trình chứng chỉ{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function HeroCloudVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="VPC"
                    value="10.0.0.0/16"
                    color="cyan"
                    icon={<Cloud />}
                />
                <MiniCard
                    title="Subnet"
                    value="public/private"
                    color="purple"
                    icon={<SplitSquareHorizontal />}
                />
                <MiniCard
                    title="SG"
                    value="firewall"
                    color="red"
                    icon={<Shield />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">Internet → IGW → Public Subnet</p>
                <p className="text-green-300">LB → Private App Subnet</p>
                <p className="text-emerald-300">App → Private DB Subnet</p>
                <p className="text-orange-300">Private → NAT → Internet</p>
                <p className="text-purple-300">
                    Controller → Flow Rules → Data Plane
                </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="NAT"
                    value="outbound"
                    color="orange"
                    icon={<Shuffle />}
                />
                <MiniCard
                    title="VPN"
                    value="office"
                    color="yellow"
                    icon={<Tunnel />}
                />
                <MiniCard
                    title="IaC"
                    value="Terraform"
                    color="blue"
                    icon={<FileCode2 />}
                />
            </div>
        </div>
    );
}

function VpcVisual() {
    return (
        <div className="border border-cyan-400/40 bg-cyan-500/5 rounded-3xl p-5">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Cloud size={24} />
                </div>
                <div>
                    <p className="text-white font-black">VPC / VNet</p>
                    <p className="text-cyan-300 font-mono text-sm">
                        CIDR: 10.0.0.0/16
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                {subnetRows.map(([name, cidr, place, note, color, icon]) => (
                    <MiniCard
                        key={name}
                        title={name}
                        value={cidr}
                        color={color}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    );
}

function SdnVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode
                title="SDN Controller"
                desc="Control Plane — tính toán/chỉ đạo"
                color="purple"
                icon={<Cpu />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <div className="bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-center text-purple-300 font-mono text-sm">
                Chính sách / Flow Rules
            </div>
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="Switch 1"
                    value="Data Plane"
                    color="cyan"
                    icon={<Network />}
                />
                <MiniCard
                    title="Switch 2"
                    value="Data Plane"
                    color="blue"
                    icon={<Network />}
                />
                <MiniCard
                    title="Router"
                    value="Data Plane"
                    color="emerald"
                    icon={<Router />}
                />
            </div>
        </div>
    );
}

function CloudTopologyVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="người dùng bên ngoài"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Internet Gateway"
                desc="cổng Internet của VPC"
                color="blue"
                icon={<Router />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Public Subnet"
                desc="Load Balancer / NAT Gateway"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <div className="grid md:grid-cols-2 gap-3">
                <MiniFlowNode
                    title="Private App Subnet A"
                    desc="App Server 1"
                    color="purple"
                    icon={<Server />}
                />
                <MiniFlowNode
                    title="Private App Subnet B"
                    desc="App Server 2"
                    color="purple"
                    icon={<Server />}
                />
            </div>
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Private DB Subnet"
                desc="Database không public"
                color="emerald"
                icon={<Database />}
            />
        </div>
    );
}

function OfficeCloudVpnVisual() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <ZoneCard
                    title="Office LAN"
                    desc="192.168.1.0/24"
                    color="orange"
                    icon={<Monitor />}
                />
                <div className="hidden md:flex flex-col items-center gap-2 text-yellow-300">
                    <Tunnel size={28} />
                    <span className="font-mono text-xs">VPN Tunnel</span>
                </div>
                <ZoneCard
                    title="Cloud VPC"
                    desc="10.0.0.0/16"
                    color="cyan"
                    icon={<Cloud />}
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm space-y-1">
                <p className="text-yellow-300">
                    Cloud route: 192.168.1.0/24 → VPN Gateway
                </p>
                <p className="text-cyan-300">
                    Office route: 10.0.0.0/16 → VPN Tunnel
                </p>
            </div>
        </div>
    );
}

function WebAppCloudVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 space-y-4">
            <MiniFlowNode
                title="Users"
                desc="HTTPS 443"
                color="cyan"
                icon={<Users />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Load Balancer"
                desc="Public Subnet 10.10.1.0/24"
                color="green"
                icon={<Shuffle />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <div className="grid md:grid-cols-2 gap-3">
                <MiniFlowNode
                    title="App Server 1"
                    desc="Private App 10.10.2.0/24"
                    color="purple"
                    icon={<Server />}
                />
                <MiniFlowNode
                    title="App Server 2"
                    desc="Private App 10.10.2.0/24"
                    color="purple"
                    icon={<Server />}
                />
            </div>
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Database"
                desc="Private DB 10.10.3.0/24"
                color="emerald"
                icon={<Database />}
            />
            <MiniFlowNode
                title="Office VPN"
                desc="192.168.1.0/24 ↔ 10.10.0.0/16"
                color="yellow"
                icon={<Tunnel />}
            />
        </div>
    );
}

function ZoneCard({ title, desc, color, icon }) {
    const c = colorClasses[color];
    return (
        <div
            className={`${c.bg} ${c.border} border rounded-3xl p-5 text-center`}
        >
            <div
                className={`${c.solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <p className="text-white font-black">{title}</p>
            <p className={`${c.text} text-sm font-mono mt-2`}>{desc}</p>
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
                        className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[420px] flex flex-col justify-between`}
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
                            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">
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
        <div className="space-y-3 max-h-[760px] overflow-y-auto pr-1">
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
                    <div className="min-w-0">
                        <p className="text-sm text-white font-bold">
                            {s.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap font-mono break-all">
                            {s.code}
                        </p>
                    </div>
                </button>
            ))}
        </div>
    );
}

function MiniMetric({ label, value, color }) {
    const c = colorClasses[color];
    return (
        <div className={`${c.bg} ${c.border} border rounded-2xl p-3`}>
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">
                {label}
            </p>
            <p className={`${c.text} font-mono text-sm break-all`}>{value}</p>
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
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap overflow-x-auto">
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
