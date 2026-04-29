import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    Brain,
    Briefcase,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    ClipboardCheck,
    Code2,
    Database,
    FileText,
    Flame,
    Globe2,
    GraduationCap,
    HardDrive,
    KeyRound,
    Layers,
    ListChecks,
    Map,
    Medal,
    Monitor,
    Network,
    Route,
    Router,
    Search,
    Server,
    Shield,
    ShieldCheck,
    Shuffle,
    SplitSquareHorizontal,
    Star,
    Target,
    Terminal,
    Timer,
    Trophy,
    Users,
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

const knowledgeGroups = [
    [
        "Thiết bị",
        "Hub, Switch, Router, Modem, Access Point, Firewall",
        "cyan",
        <Network />,
    ],
    [
        "Giao thức",
        "Ethernet, IP, ICMP, TCP, UDP, DNS, DHCP, HTTP, HTTPS",
        "purple",
        <Layers />,
    ],
    [
        "Địa chỉ",
        "MAC, IPv4, IPv6, subnet mask, gateway, port",
        "emerald",
        <Database />,
    ],
    [
        "Vận hành",
        "Ping, Traceroute, Wireshark, Cisco CLI, VLAN, VPN",
        "orange",
        <Wrench />,
    ],
];

const courseMap = [
    [
        "Phần 1",
        "Nền tảng",
        "Mạng là gì, LAN/WAN, thiết bị",
        "cyan",
        <Network />,
    ],
    ["Phần 2", "OSI/TCP-IP", "Mô hình phân tầng", "blue", <Layers />],
    ["Phần 3", "Physical Layer", "Cáp, tín hiệu, băng thông", "slate", <Zap />],
    [
        "Phần 4",
        "Data Link Layer",
        "MAC, Ethernet, Switch, VLAN",
        "purple",
        <SplitSquareHorizontal />,
    ],
    [
        "Phần 5",
        "Network Layer",
        "IP, Subnetting, Routing, NAT",
        "emerald",
        <Route />,
    ],
    ["Phần 6", "Transport Layer", "TCP, UDP, Port", "orange", <Shuffle />],
    [
        "Phần 7",
        "Application Layer",
        "DNS, DHCP, HTTP/HTTPS",
        "green",
        <Globe2 />,
    ],
    ["Phần 8", "Wireless", "WiFi, Bluetooth, 4G/5G", "yellow", <Wifi />],
    ["Phần 9", "Security", "Firewall, VPN, IDS/IPS, DMZ", "red", <Shield />],
    [
        "Phần 10",
        "Thực hành & Nâng cao",
        "Wireshark, Cisco CLI, Enterprise, Cloud",
        "cyan",
        <Terminal />,
    ],
];

const osiReview = [
    [
        "Physical",
        "Tín hiệu, cáp, băng thông",
        "Cáp đồng, cáp quang, WiFi signal",
        "slate",
    ],
    ["Data Link", "MAC, Frame, Switch, VLAN", "Ethernet, ARP, VLAN", "purple"],
    ["Network", "IP, Router, Routing", "IPv4, IPv6, ICMP, OSPF", "emerald"],
    ["Transport", "Port, TCP, UDP", "TCP 443, UDP 53", "orange"],
    ["Application", "Dịch vụ mạng", "DNS, HTTP, DHCP, SMTP", "green"],
];

const certCompare = [
    ["Định hướng", "Nền tảng mạng tổng quát", "Kỹ sư mạng Cisco"],
    ["Phạm vi", "Rộng, vendor-neutral", "Sâu hơn về routing/switching"],
    ["Thực hành CLI", "Ít hơn", "Nhiều hơn"],
    [
        "Phù hợp",
        "IT Support, Helpdesk, nền tảng ban đầu",
        "Network Engineer, Network Admin",
    ],
    ["Độ khó", "Dễ tiếp cận hơn", "Khó hơn, cần lab nhiều"],
    [
        "Tiếp theo",
        "Security+, Linux+, Cloud+",
        "CCNP, Security, Enterprise, Cloud",
    ],
];

const commonPorts = [
    ["FTP", "21", "orange"],
    ["SSH", "22", "green"],
    ["Telnet", "23", "red"],
    ["DNS", "53", "cyan"],
    ["DHCP", "67/68", "blue"],
    ["HTTP", "80", "purple"],
    ["HTTPS", "443", "emerald"],
    ["SMTP", "25", "yellow"],
    ["POP3", "110", "slate"],
    ["IMAP", "143", "orange"],
    ["RDP", "3389", "red"],
];

const labs = [
    {
        title: "Lab 1: Mạng cơ bản",
        color: "cyan",
        icon: <Network />,
        topology: "PC1 --- Switch --- Router --- Internet giả lập",
        tasks: [
            "Đặt IP cho PC",
            "Đặt IP cho Router interface",
            "Ping PC tới Router",
            "Kiểm tra bằng show ip interface brief",
        ],
    },
    {
        title: "Lab 2: VLAN",
        color: "purple",
        icon: <Layers />,
        topology: "PC Kế toán / PC Nhân sự / PC IT --- Switch --- Router",
        tasks: [
            "Tạo VLAN 10/20/30",
            "Gán port access",
            "Tạo trunk",
            "Cấu hình router-on-a-stick",
            "Ping giữa các VLAN",
        ],
    },
    {
        title: "Lab 3: DHCP + NAT",
        color: "emerald",
        icon: <Shuffle />,
        topology: "PC nhận IP tự động --- Router NAT/PAT --- Internet giả lập",
        tasks: [
            "Cấu hình DHCP",
            "Đặt default gateway",
            "Cấu hình NAT/PAT",
            "Kiểm tra routing",
        ],
    },
    {
        title: "Lab 4: Firewall/ACL cơ bản",
        color: "red",
        icon: <Shield />,
        topology: "Guest VLAN / IT VLAN / Server VLAN qua Router/Firewall",
        tasks: [
            "Guest đi Internet",
            "Guest không vào Server",
            "IT SSH vào Router/Switch",
            "Áp dụng nguyên tắc tối thiểu quyền",
        ],
    },
];

const mistakes = [
    [
        "Chỉ xem video, không lab",
        "Hiểu mơ hồ, dễ quên",
        "Mỗi chủ đề nên có ít nhất một lab nhỏ",
        "red",
        <Monitor />,
    ],
    [
        "Bỏ qua subnetting",
        "Rất khó học routing/VLAN",
        "Luyện /24, /25, /26, /30 hằng ngày",
        "orange",
        <Database />,
    ],
    [
        "Học thuộc port nhưng không hiểu dịch vụ",
        "Dễ nhầm khi troubleshooting",
        "Gắn port với luồng hoạt động thật",
        "yellow",
        <Globe2 />,
    ],
    [
        "Không dùng Wireshark",
        "Không nhìn được mạng hoạt động thật",
        "Bắt gói DNS, ICMP, TCP, HTTP/TLS",
        "cyan",
        <Search />,
    ],
    [
        "Không đọc show command",
        "Không biết thiết bị đang lỗi ở đâu",
        "Luyện show ip interface brief, show vlan, show run",
        "purple",
        <Terminal />,
    ],
    [
        "Học CCNA nhưng không dùng Packet Tracer/GNS3",
        "Thiếu kỹ năng cấu hình",
        "Làm lab routing/switching đều đặn",
        "emerald",
        <Router />,
    ],
    [
        "Học quá nhiều tài liệu cùng lúc",
        "Loạn, không có tiến độ",
        "Chọn một lộ trình chính và theo tới cuối",
        "blue",
        <Map />,
    ],
    [
        "Không ghi lại lỗi sai",
        "Sai lặp lại nhiều lần",
        "Tạo sổ lỗi sai: câu sai, lý do sai, cách sửa",
        "green",
        <FileText />,
    ],
];

const quizQuestions = [
    {
        question:
            "Nếu mới bắt đầu học mạng và muốn nền tảng tổng quan, chứng chỉ nào thường dễ tiếp cận hơn?",
        options: [
            "CCNP",
            "CompTIA Network+",
            "CISSP",
            "AWS Professional Networking",
        ],
        correct: 1,
        explanation:
            "Network+ thiên về nền tảng rộng, vendor-neutral và thường dễ tiếp cận hơn với người mới.",
    },
    {
        question: "CCNA phù hợp nhất với mục tiêu nào?",
        options: [
            "Chỉ học tin học văn phòng",
            "Muốn làm Network Engineer/Network Admin và cấu hình Router/Switch",
            "Chỉ học thiết kế đồ họa",
            "Chỉ học frontend web",
        ],
        correct: 1,
        explanation:
            "CCNA tập trung nhiều vào routing, switching, VLAN, subnetting và Cisco CLI, phù hợp hướng kỹ sư mạng.",
    },
    {
        question: "Vì sao chứng chỉ không thay thế thực hành?",
        options: [
            "Vì lab giúp biến lý thuyết thành kỹ năng xử lý lỗi thật",
            "Vì lab không cần thiết",
            "Vì subnetting chỉ cần học thuộc",
            "Vì Wireshark không dùng trong thực tế",
        ],
        correct: 0,
        explanation:
            "Mạng là kỹ năng vận hành. Không lab thì dễ hiểu trên giấy nhưng không biết cấu hình, kiểm tra và sửa lỗi.",
    },
    {
        question: "Access port và trunk port khác nhau thế nào?",
        options: [
            "Access port thường thuộc một VLAN, trunk port chở nhiều VLAN",
            "Access port chỉ dùng wireless",
            "Trunk port chỉ dùng cho máy in",
            "Hai loại hoàn toàn giống nhau",
        ],
        correct: 0,
        explanation:
            "Access port dành cho thiết bị cuối, thường thuộc một VLAN. Trunk port nối switch-router hoặc switch-switch để chở nhiều VLAN.",
    },
    {
        question:
            "Quy trình troubleshooting hợp lý khi không vào được web là gì?",
        options: [
            "Kiểm tra IP → ping gateway → ping IP Internet → ping tên miền → traceroute/Wireshark",
            "Cài lại hệ điều hành ngay",
            "Đổi dây màn hình",
            "Chỉ reset máy in",
        ],
        correct: 0,
        explanation:
            "Đi từ gần đến xa: IP máy mình, gateway, Internet IP, DNS/tên miền, route, rồi phân tích gói nếu cần.",
    },
    {
        question:
            "Nếu tick được khoảng bao nhiêu checklist nền tảng thì có thể bắt đầu luyện chứng chỉ nghiêm túc?",
        options: ["10%", "30%", "70%", "100% mới được bắt đầu"],
        correct: 2,
        explanation:
            "Khoảng 70% checklist nền tảng là mức hợp lý để bắt đầu luyện chứng chỉ nghiêm túc, sau đó tiếp tục bù điểm yếu.",
    },
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 shrink-0">
                            <GraduationCap
                                className="text-cyan-400"
                                size={24}
                            />
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-xl font-bold text-white tracking-tight truncate">
                                Khóa học Mạng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500 truncate">
                                Phần 10: Thực hành & Nâng cao — Bài tổng kết
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 whitespace-nowrap">
                        Bài 10.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatToReview />
                <NetworkPlusSection />
                <CcnaSection />
                <ChooseCertificate />
                <PracticeWarning />
                <RealWorldExamples />
                <KnowledgeMapSection />
                <OsiReviewTable />
                <CertCompareTable />
                <ReviewStepsSection />
                <CertificationRoadmaps />
                <FinalLabs />
                <ThirtyDayPlan />
                <CertificateChecklist />
                <CommonMistakes />
                <ConnectionSection />
                <SummaryAndQuiz />
                <FinishSection />
            </main>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12 shadow-2xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <Trophy size={16} /> Final Review — CCNA — CompTIA
                        Network+
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Ôn tập & Lộ trình
                        <span className="block text-cyan-400">
                            chứng chỉ mạng
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bài cuối tổng kết toàn bộ lộ trình 10 phần, 53 bài học
                        nhỏ; giúp bạn chọn hướng Network+ hoặc CCNA và có kế
                        hoạch ôn tập, lab, luyện thi rõ ràng.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl space-y-1">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">Network+</span> =
                            nền tảng rộng, vendor-neutral.
                        </p>
                        <p>
                            <span className="text-purple-300">CCNA</span> =
                            routing/switching + Cisco CLI.
                        </p>
                        <p>
                            <span className="text-emerald-300">
                                Muốn giỏi mạng
                            </span>{" "}
                            = lý thuyết + subnetting + lab + troubleshooting.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroReviewVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        [
            "Tổng kết",
            "Hiểu toàn bộ lộ trình Mạng Máy Tính đã học gồm những mảng nào.",
            <Map />,
        ],
        [
            "Network+ vs CCNA",
            "Phân biệt được hai chứng chỉ phổ biến.",
            <Medal />,
        ],
        [
            "Chọn hướng",
            "Biết nên chọn chứng chỉ nào theo mục tiêu nghề nghiệp.",
            <Target />,
        ],
        ["Ôn tập", "Biết cách ôn từ cơ bản đến thực hành.", <ListChecks />],
        [
            "Học tiếp",
            "Có lộ trình học sau khi hoàn thành 53 bài.",
            <GraduationCap />,
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

function WhatToReview() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Ôn tập mạng máy tính là ôn cái gì?"
                icon={<Brain />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Không chỉ học thuộc tên giao thức"
                        icon={<Brain />}
                        color="blue"
                        text="Ôn tập mạng là nối lại toàn bộ kiến thức từ thiết bị, giao thức, địa chỉ, định tuyến đến bảo mật và thực hành vận hành."
                        code={`1. Thiết bị mạng\n2. Giao thức mạng\n3. Địa chỉ và định tuyến\n4. Bảo mật và vận hành`}
                    />
                    <div className="grid md:grid-cols-2 gap-3">
                        {knowledgeGroups.map(([title, desc, color, icon]) => (
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

function NetworkPlusSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="green"
                title="CompTIA Network+ là gì?"
                icon={<Medal />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Bằng nền móng mạng máy tính"
                    icon={<Medal />}
                    color="green"
                    text="Network+ là chứng chỉ mạng nền tảng, vendor-neutral, phù hợp với người muốn hiểu tổng quan về mạng máy tính và làm IT Support, Helpdesk hoặc SysAdmin Junior."
                    code={`Tập trung vào:\n- OSI/TCP-IP\n- Thiết bị mạng\n- IP, subnetting cơ bản\n- WiFi\n- Bảo mật mạng cơ bản\n- Công cụ xử lý sự cố`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <div className="grid gap-3">
                        <MiniFlowNode
                            title="Phù hợp người mới"
                            desc="nền tảng rộng, dễ tiếp cận"
                            color="green"
                            icon={<Users />}
                        />
                        <MiniFlowNode
                            title="Vendor-neutral"
                            desc="không phụ thuộc hãng cụ thể"
                            color="cyan"
                            icon={<Globe2 />}
                        />
                        <MiniFlowNode
                            title="Hướng nghề"
                            desc="IT Support, Helpdesk, Junior SysAdmin"
                            color="emerald"
                            icon={<Briefcase />}
                        />
                        <MiniFlowNode
                            title="Nền trước khi học sâu"
                            desc="Security+, Cloud+, Linux+, CCNA"
                            color="blue"
                            icon={<GraduationCap />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CcnaSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="CCNA là gì?"
                icon={<Trophy />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Học lái xe thật trên dòng Cisco"
                    icon={<Trophy />}
                    color="purple"
                    text="CCNA là Cisco Certified Network Associate, tập trung nhiều vào routing, switching, VLAN, subnetting, OSPF, NAT, ACL, security cơ bản, wireless cơ bản, automation cơ bản và Cisco CLI."
                    code={`Phù hợp nếu bạn muốn:\n- Làm Network Engineer\n- Cấu hình Router/Switch\n- Đi sâu hạ tầng doanh nghiệp\n- Học tiếp CCNP, Security, Cloud Networking`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <div className="grid gap-3">
                        <MiniFlowNode
                            title="Routing"
                            desc="static, default, OSPF"
                            color="purple"
                            icon={<Route />}
                        />
                        <MiniFlowNode
                            title="Switching"
                            desc="MAC table, VLAN, trunk"
                            color="cyan"
                            icon={<Network />}
                        />
                        <MiniFlowNode
                            title="Cisco CLI"
                            desc="show, configure, troubleshoot"
                            color="orange"
                            icon={<Terminal />}
                        />
                        <MiniFlowNode
                            title="Security & Automation"
                            desc="ACL, NAT, wireless, automation cơ bản"
                            color="red"
                            icon={<Shield />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChooseCertificate() {
    const [goal, setGoal] = useState("Mới bắt đầu hoàn toàn");
    const options = {
        "Mới bắt đầu hoàn toàn": [
            "Network+ trước",
            "Nền tảng rộng, dễ tiếp cận, ít phụ thuộc vào thiết bị Cisco.",
            "green",
            <Medal />,
        ],
        "IT Support / Helpdesk": [
            "Network+",
            "Phù hợp để hiểu mạng tổng quan và xử lý lỗi cơ bản trong môi trường IT.",
            "cyan",
            <Briefcase />,
        ],
        "Network Engineer": [
            "CCNA",
            "Cần routing/switching, VLAN, subnetting và Cisco CLI nhiều hơn.",
            "purple",
            <Router />,
        ],
        "Cấu hình Router/Switch Cisco": [
            "CCNA",
            "CCNA đi sâu hơn vào lab và command-line trên thiết bị Cisco.",
            "orange",
            <Terminal />,
        ],
        "Cloud / Security / DevOps": [
            "Network+ hoặc CCNA đều được",
            "Network+ cho nền rộng; CCNA cho nền routing/switching chắc hơn.",
            "blue",
            <CloudIcon />,
        ],
    };
    const current = options[goal];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="orange"
                title="Nên học Network+ hay CCNA?"
                icon={<Target />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div className="space-y-3">
                        {Object.keys(options).map((name) => (
                            <button
                                key={name}
                                onClick={() => setGoal(name)}
                                className={`w-full text-left rounded-2xl border p-4 transition-all ${goal === name ? `${colorClasses[options[name][2]].bg} ${colorClasses[options[name][2]].border}` : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}
                            >
                                <p className="text-white font-black">{name}</p>
                                <p className="text-slate-500 text-xs mt-1">
                                    Bấm để xem gợi ý
                                </p>
                            </button>
                        ))}
                    </div>
                    <div
                        className={`${colorClasses[current[2]].bg} ${colorClasses[current[2]].border} border rounded-3xl p-6 min-h-[320px] flex flex-col justify-center`}
                    >
                        <div
                            className={`${colorClasses[current[2]].solid} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg ${colorClasses[current[2]].ring}`}
                        >
                            {React.cloneElement(current[3], { size: 32 })}
                        </div>
                        <p
                            className={`${colorClasses[current[2]].text} font-black uppercase text-sm tracking-wider mb-2`}
                        >
                            Gợi ý chọn
                        </p>
                        <h3 className="text-3xl font-extrabold text-white mb-4">
                            {current[0]}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {current[1]}
                        </p>
                        <div className="mt-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">
                            Network+ = học rộng, nền tảng, tổng quan.
                            <br />
                            CCNA = học sâu hơn về routing/switching và Cisco
                            CLI.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PracticeWarning() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="red"
                title="Chứng chỉ không thay thế thực hành"
                icon={<AlertTriangle />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Đọc sách không làm bạn bơi giỏi"
                    icon={<AlertTriangle />}
                    color="red"
                    text="Bạn có thể có chứng chỉ nhưng vẫn yếu nếu không thực hành. Học mạng giống học bơi: lý thuyết cần thiết, nhưng muốn bơi được phải xuống nước."
                    code={`Subnetting phải chia IP thật.\nVLAN phải cấu hình thử.\nTroubleshooting phải dùng ping/show/Wireshark.\n\nKhông lab = rất dễ quên.`}
                />
                <ConceptCard
                    title="Ví dụ lab VLAN nhỏ"
                    icon={<Terminal />}
                    color="purple"
                    text="Đọc về VLAN chưa đủ. Bạn nên tự tạo VLAN, gán port, trunk, router-on-a-stick rồi ping kiểm tra."
                    code={`vlan 10\nname ACCOUNTING\n\ninterface fa0/1\nswitchport mode access\nswitchport access vlan 10`}
                />
            </div>
        </section>
    );
}

function RealWorldExamples() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="blue"
                title="Ví dụ đời sống và kỹ thuật"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                <ConceptCard
                    title="Học lái xe"
                    icon={<Target />}
                    color="blue"
                    text="Network+ giống học luật giao thông. CCNA giống học lái xe thật và sửa xe cơ bản."
                    code={`Network+ → hiểu mạng hoạt động thế nào.\nCCNA → hiểu và cấu hình mạng hoạt động được.`}
                />
                <ConceptCard
                    title="Xây nhà"
                    icon={<HardDrive />}
                    color="orange"
                    text="Lộ trình 53 bài giống xây nhà: nền móng, khung nhà, điện nước, bảo vệ và vận hành."
                    code={`Nền móng → mạng cơ bản\nKhung nhà → OSI/TCP-IP\nĐiện nước → TCP/UDP/DNS/DHCP\nBảo vệ → Firewall/VPN\nVận hành → Ping/Wireshark/CLI`}
                />
                <ConceptCard
                    title="Thiết kế mạng công ty nhỏ"
                    icon={<Network />}
                    color="emerald"
                    text="Một nhiệm vụ thật sẽ cần nhiều mảng kiến thức: VLAN, IPv4, Subnetting, Router, NAT, Firewall, DHCP, Ping, Wireshark và Cisco CLI."
                    code={`30 nhân viên\n1 server nội bộ\nWiFi khách\nCamera IP\nRouter/Firewall\nSwitch Cisco`}
                />
            </div>
        </section>
    );
}

function KnowledgeMapSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Bản đồ toàn bộ kiến thức đã học"
                icon={<Map />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="space-y-3">
                    {courseMap.map(
                        ([part, title, desc, color, icon], index) => (
                            <React.Fragment key={part}>
                                <div
                                    className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex items-center gap-4`}
                                >
                                    <div
                                        className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
                                    >
                                        {React.cloneElement(icon, { size: 24 })}
                                    </div>
                                    <div className="min-w-0">
                                        <p
                                            className={`${colorClasses[color].text} font-black text-sm`}
                                        >
                                            {part}
                                        </p>
                                        <h3 className="text-white font-bold text-lg">
                                            {title}
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                                {index < courseMap.length - 1 && (
                                    <ArrowRight className="mx-auto text-slate-500 rotate-90" />
                                )}
                            </React.Fragment>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

function OsiReviewTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="purple"
                title="Bảng ôn tập theo tầng OSI/TCP-IP"
                icon={<Layers />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[760px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tầng</th>
                                <th className="p-4">Cần nhớ</th>
                                <th className="p-4">Ví dụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {osiReview.map(
                                ([layer, remember, example, color], idx) => (
                                    <tr
                                        key={layer}
                                        className={`${idx === osiReview.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td
                                            className={`${colorClasses[color].text} p-4 font-black`}
                                        >
                                            {layer}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {remember}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {example}
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

function CertCompareTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="emerald"
                title="Bảng so sánh Network+ và CCNA"
                icon={<BarChart3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[850px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tiêu chí</th>
                                <th className="p-4 text-green-300">
                                    CompTIA Network+
                                </th>
                                <th className="p-4 text-purple-300">CCNA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certCompare.map(
                                ([criteria, networkPlus, ccna], idx) => (
                                    <tr
                                        key={criteria}
                                        className={`${idx === certCompare.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td className="p-4 text-white font-bold">
                                            {criteria}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {networkPlus}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {ccna}
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

function ReviewStepsSection() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Ôn lại nền tảng",
            text: "Cần chắc mạng là gì, LAN/WAN, Switch/Router, Modem/Router, IP/MAC.",
            code: "Mạng máy tính là gì?\nLAN, WAN, MAN, PAN khác nhau thế nào?\nSwitch khác Router thế nào?\nModem khác Router thế nào?\nIP khác MAC thế nào?",
            color: "cyan",
            icon: <Network />,
        },
        {
            title: "Ôn OSI và TCP/IP",
            text: "Nhớ luồng dữ liệu khi mở website: Application → Transport → Network → Data Link → Physical.",
            code: "HTTP/HTTPS → TCP → IP → Ethernet/WiFi → tín hiệu điện/sóng",
            color: "purple",
            icon: <Layers />,
        },
        {
            title: "Ôn IPv4 và Subnetting",
            text: "Đây là phần cực kỳ quan trọng, đặc biệt nếu học CCNA.",
            code: "Network address\nBroadcast address\nUsable host range\nSố host trong subnet\nCIDR /24, /26, /30",
            color: "emerald",
            icon: <Database />,
        },
        {
            title: "Ôn Switching và VLAN",
            text: "Hiểu MAC table, frame, VLAN, access port, trunk port và inter-VLAN routing.",
            code: "vlan 10\nname SALES\n\ninterface fa0/1\nswitchport mode access\nswitchport access vlan 10\n\ninterface g0/1\nswitchport mode trunk",
            color: "blue",
            icon: <SplitSquareHorizontal />,
        },
        {
            title: "Ôn Routing",
            text: "Hiểu router dùng bảng định tuyến, default route, static route và dynamic routing.",
            code: "ip route 192.168.2.0 255.255.255.0 10.0.0.2\n\nip route 0.0.0.0 0.0.0.0 192.168.1.1",
            color: "orange",
            icon: <Route />,
        },
        {
            title: "Ôn TCP/UDP và Port",
            text: "TCP tin cậy, có kết nối; UDP nhanh, ít overhead. Cần nhớ port phổ biến.",
            code: "TCP 443 = HTTPS\nUDP 53 = DNS\nTCP 22 = SSH\nUDP 67/68 = DHCP",
            color: "green",
            icon: <Shuffle />,
        },
        {
            title: "Ôn DNS, DHCP, HTTP/HTTPS",
            text: "Hiểu luồng DNS query, DHCP DORA và khác biệt HTTP/HTTPS.",
            code: "DNS: tên miền → IP\nDHCP: Discover → Offer → Request → ACK\nHTTP 80, HTTPS 443 + TLS",
            color: "yellow",
            icon: <Globe2 />,
        },
        {
            title: "Ôn bảo mật mạng",
            text: "Hiểu firewall, VPN, IDS/IPS, DMZ, TLS và chính sách tối thiểu quyền.",
            code: "Guest WiFi → Internal LAN: Deny\nUser VLAN → Internet HTTP/HTTPS: Allow\nIT VLAN → Server VLAN SSH/RDP: Allow",
            color: "red",
            icon: <Shield />,
        },
        {
            title: "Ôn thực hành xử lý lỗi",
            text: "Troubleshooting nên đi từ gần đến xa, từ IP/gateway tới Internet/DNS/route/packet.",
            code: "1. Kiểm tra IP máy mình\n2. Ping default gateway\n3. Ping 8.8.8.8\n4. Ping google.com\n5. Traceroute\n6. Wireshark nếu cần",
            color: "cyan",
            icon: <Wrench />,
        },
    ];
    return (
        <StepSection
            number="11"
            color="cyan"
            title="Cơ chế học và ôn tập theo từng bước"
            icon={<ListChecks />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function CertificationRoadmaps() {
    const [track, setTrack] = useState("Network+");
    const roadmaps = {
        "Network+": [
            [
                "Giai đoạn 1",
                "Nền tảng mạng",
                "LAN/WAN, OSI/TCP-IP, thiết bị mạng, cáp/WiFi",
                "green",
            ],
            [
                "Giai đoạn 2",
                "IP và dịch vụ mạng",
                "IPv4/IPv6, subnetting cơ bản, DNS, DHCP, HTTP/HTTPS, TCP/UDP",
                "cyan",
            ],
            [
                "Giai đoạn 3",
                "Vận hành và bảo mật",
                "Firewall, VPN, Wireless security, troubleshooting, Ping/Traceroute/Wireshark",
                "emerald",
            ],
            [
                "Giai đoạn 4",
                "Luyện câu hỏi",
                "Làm quiz từng phần, ghi câu sai, ôn khái niệm yếu",
                "yellow",
            ],
        ],
        CCNA: [
            [
                "Giai đoạn 1",
                "Nền móng",
                "OSI/TCP-IP, Ethernet, IPv4/IPv6, subnetting thật chắc",
                "purple",
            ],
            [
                "Giai đoạn 2",
                "Switching",
                "MAC table, VLAN, trunk, STP cơ bản, EtherChannel cơ bản",
                "cyan",
            ],
            [
                "Giai đoạn 3",
                "Routing",
                "Static route, default route, OSPF, Inter-VLAN, router-on-a-stick",
                "orange",
            ],
            [
                "Giai đoạn 4",
                "Network services",
                "DHCP, DNS, NAT/PAT, NTP, SNMP, Syslog",
                "green",
            ],
            [
                "Giai đoạn 5",
                "Security và Wireless",
                "ACL, Port Security, WPA2/WPA3, VPN khái niệm",
                "red",
            ],
            [
                "Giai đoạn 6",
                "Automation và lab",
                "Cisco CLI, Packet Tracer, show command, sửa lỗi cấu hình",
                "blue",
            ],
        ],
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="purple"
                title="Lộ trình ôn thi đề xuất"
                icon={<Map />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                    {Object.keys(roadmaps).map((name) => (
                        <button
                            key={name}
                            onClick={() => setTrack(name)}
                            className={`px-4 py-3 rounded-xl font-bold transition-all ${track === name ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="space-y-3">
                    {roadmaps[track].map(([phase, title, desc, color], idx) => (
                        <div
                            key={`${phase}-${title}`}
                            className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex gap-4 items-start`}
                        >
                            <div
                                className={`${colorClasses[color].solid} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0`}
                            >
                                {idx + 1}
                            </div>
                            <div>
                                <p
                                    className={`${colorClasses[color].text} font-black text-sm`}
                                >
                                    {phase}
                                </p>
                                <h3 className="text-white font-bold text-lg">
                                    {title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalLabs() {
    const [active, setActive] = useState(0);
    const lab = labs[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="emerald"
                title="Lab thực hành tổng kết"
                icon={<Wrench />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div className="space-y-3">
                        {labs.map((l, idx) => (
                            <button
                                key={l.title}
                                onClick={() => setActive(idx)}
                                className={`w-full text-left rounded-2xl border p-4 transition-all ${active === idx ? `${colorClasses[l.color].bg} ${colorClasses[l.color].border}` : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`${active === idx ? colorClasses[l.color].solid : "bg-slate-900"} text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}
                                    >
                                        {React.cloneElement(l.icon, {
                                            size: 22,
                                        })}
                                    </div>
                                    <div>
                                        <p className="text-white font-black">
                                            {l.title}
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Bấm để xem yêu cầu
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div
                        className={`${colorClasses[lab.color].bg} ${colorClasses[lab.color].border} border rounded-3xl p-6`}
                    >
                        <div
                            className={`${colorClasses[lab.color].solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}
                        >
                            {React.cloneElement(lab.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {lab.title}
                        </h3>
                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 mb-5 whitespace-pre-wrap">
                            {lab.topology}
                        </div>
                        <div className="space-y-2">
                            {lab.tasks.map((task, idx) => (
                                <div
                                    key={task}
                                    className="flex items-start gap-3 bg-slate-950/50 border border-slate-800 rounded-xl p-3"
                                >
                                    <CheckCircle2
                                        className="text-green-300 shrink-0 mt-0.5"
                                        size={18}
                                    />
                                    <p className="text-slate-300 text-sm">
                                        {task}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ThirtyDayPlan() {
    const [week, setWeek] = useState("Tuần 1");
    const plan = {
        "Tuần 1": [
            [1, "LAN/WAN, thiết bị mạng"],
            [2, "OSI và TCP/IP"],
            [3, "Ethernet, MAC, ARP"],
            [4, "IPv4"],
            [5, "Subnetting"],
            [6, "TCP/UDP, port"],
            [7, "Ôn + quiz"],
        ],
        "Tuần 2": [
            [8, "DNS"],
            [9, "DHCP"],
            [10, "HTTP/HTTPS"],
            [11, "Switch, MAC table"],
            [12, "VLAN"],
            [13, "Trunk, Inter-VLAN"],
            [14, "Lab tổng hợp"],
        ],
        "Tuần 3": [
            [15, "Static route"],
            [16, "Dynamic routing overview"],
            [17, "OSPF cơ bản"],
            [18, "NAT/PAT"],
            [19, "Firewall/ACL"],
            [20, "VPN, DMZ"],
            [21, "Lab routing + security"],
        ],
        "Tuần 4": [
            [22, "Ping, Traceroute"],
            [23, "Wireshark"],
            [24, "Cisco CLI show commands"],
            [25, "Lab VLAN + routing"],
            [26, "Lab DHCP + NAT"],
            [27, "Làm đề/quiz"],
            [28, "Chữa câu sai"],
            [29, "Ôn điểm yếu"],
            [30, "Tổng ôn"],
        ],
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="blue"
                title="Kế hoạch học 30 ngày"
                icon={<CalendarDays />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                    {Object.keys(plan).map((w) => (
                        <button
                            key={w}
                            onClick={() => setWeek(w)}
                            className={`px-4 py-3 rounded-xl font-bold transition-all ${week === w ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
                        >
                            {w}
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {plan[week].map(([day, content]) => (
                        <div
                            key={day}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                        >
                            <p className="text-blue-300 font-black text-sm mb-1">
                                Ngày {day}
                            </p>
                            <p className="text-white font-semibold">
                                {content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificateChecklist() {
    const [checked, setChecked] = useState({});
    const items = [
        "Tôi phân biệt được Switch và Router.",
        "Tôi hiểu OSI và TCP/IP.",
        "Tôi biết IP, subnet mask, gateway là gì.",
        "Tôi chia được subnet /24, /25, /26, /30.",
        "Tôi hiểu MAC và ARP.",
        "Tôi hiểu TCP và UDP.",
        "Tôi nhớ các port phổ biến.",
        "Tôi hiểu DNS và DHCP.",
        "Tôi biết VLAN và trunk.",
        "Tôi biết static route và default route.",
        "Tôi hiểu NAT/PAT.",
        "Tôi biết firewall, VPN, DMZ.",
        "Tôi dùng được ping, traceroute, Wireshark cơ bản.",
        "Tôi biết đọc cấu hình Cisco CLI cơ bản.",
        "Tôi đã làm ít nhất vài lab trên Packet Tracer.",
    ];
    const done = Object.values(checked).filter(Boolean).length;
    const percent = Math.round((done / items.length) * 100);
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="green"
                title="Checklist trước khi học chứng chỉ"
                icon={<ClipboardCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="mb-5 bg-slate-950 border border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-white font-black">
                            Tiến độ checklist
                        </p>
                        <p className="text-green-300 font-mono">
                            {done}/{items.length} — {percent}%
                        </p>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500 transition-all"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                    <p className="text-slate-500 text-sm mt-3">
                        Nếu tick được khoảng 70%, bạn có thể bắt đầu luyện chứng
                        chỉ nghiêm túc.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    {items.map((item, idx) => {
                        const isDone = checked[idx];
                        return (
                            <button
                                key={item}
                                onClick={() =>
                                    setChecked((s) => ({
                                        ...s,
                                        [idx]: !s[idx],
                                    }))
                                }
                                className={`text-left rounded-2xl border p-4 transition-all ${isDone ? "bg-green-500/10 border-green-400/40" : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}
                            >
                                <div className="flex gap-3 items-start">
                                    <div
                                        className={`${isDone ? "bg-green-500 text-white" : "bg-slate-900 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0`}
                                    >
                                        {isDone ? (
                                            <CheckCircle2 size={18} />
                                        ) : (
                                            idx + 1
                                        )}
                                    </div>
                                    <p
                                        className={`${isDone ? "text-green-300" : "text-slate-300"} text-sm font-semibold leading-relaxed`}
                                    >
                                        {item}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="16"
                color="yellow"
                title="Sai lầm phổ biến khi ôn thi mạng"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mistakes.map(([title, desc, fix, color, icon]) => (
                    <div
                        key={title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-yellow-500/40 transition-colors"
                    >
                        <div
                            className={`${colorClasses[color].bg} ${colorClasses[color].text} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-bold text-base mb-3">
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
                number="17"
                color="emerald"
                title="Bài 10.5 kết nối toàn bộ lộ trình"
                icon={<Layers />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                <MiniFlowNode
                    title="Phần 1–2"
                    desc="nền tảng và mô hình mạng"
                    color="cyan"
                    icon={<Network />}
                />
                <MiniFlowNode
                    title="Phần 3–7"
                    desc="Physical đến Application"
                    color="purple"
                    icon={<Layers />}
                />
                <MiniFlowNode
                    title="Phần 8"
                    desc="mạng không dây"
                    color="yellow"
                    icon={<Wifi />}
                />
                <MiniFlowNode
                    title="Phần 9"
                    desc="bảo mật mạng"
                    color="red"
                    icon={<Shield />}
                />
                <MiniFlowNode
                    title="Phần 10"
                    desc="thực hành, CLI, enterprise, cloud"
                    color="emerald"
                    icon={<Terminal />}
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
                            18
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
                            <p>Network+ = nền tảng rộng, vendor-neutral.</p>
                            <p>
                                CCNA = routing/switching sâu hơn, nhiều Cisco
                                CLI.
                            </p>
                            <p>
                                Mạng cần học theo hệ thống: thiết bị → giao thức
                                → địa chỉ → routing → bảo mật → vận hành.
                            </p>
                            <p>
                                Subnetting là nền tảng quan trọng cho
                                VLAN/routing.
                            </p>
                            <p>Lab giúp biến lý thuyết thành kỹ năng.</p>
                            <p>
                                Ping/Traceroute/Wireshark giúp tự kiểm tra và
                                sửa lỗi.
                            </p>
                            <p>
                                Packet Tracer/GNS3 rất quan trọng nếu theo CCNA.
                            </p>
                            <p>Ghi lại lỗi sai để không sai lặp lại.</p>
                            <p>
                                Tick được khoảng 70% checklist thì có thể luyện
                                chứng chỉ nghiêm túc.
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
                    Hoàn thành toàn bộ lộ trình!
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

function FinishSection() {
    return (
        <div className="text-center pt-8 border-t border-slate-800">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 mb-5 shadow-lg shadow-cyan-500/10">
                <Trophy size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-3">
                Bạn đã hoàn thành Phần 10 và toàn bộ lộ trình Mạng Máy Tính
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                Hướng tiếp theo: ôn tóm tắt phần 1–10, làm quiz theo phần, luyện
                lab Packet Tracer/GNS3, rồi chọn Network+ nếu cần nền rộng hoặc
                CCNA nếu muốn đi hướng Network Engineer.
            </p>
            <Link
                to="/"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Quay về mục lục khóa học <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function CloudIcon() {
    return <Globe2 />;
}

function HeroReviewVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="10 phần"
                    value="full path"
                    color="cyan"
                    icon={<Map />}
                />
                <MiniCard
                    title="53 bài"
                    value="lessons"
                    color="purple"
                    icon={<BookOpen />}
                />
                <MiniCard
                    title="Cert"
                    value="N+ / CCNA"
                    color="yellow"
                    icon={<Medal />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">Foundation → OSI/TCP-IP</p>
                <p className="text-purple-300">Ethernet → VLAN → Routing</p>
                <p className="text-emerald-300">TCP/UDP → DNS/DHCP/HTTP</p>
                <p className="text-red-300">Firewall → VPN → Security</p>
                <p className="text-yellow-300">Wireshark → Cisco CLI → Cloud</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Subnet"
                    value="daily"
                    color="emerald"
                    icon={<Database />}
                />
                <MiniCard
                    title="Lab"
                    value="practice"
                    color="orange"
                    icon={<Wrench />}
                />
                <MiniCard
                    title="Quiz"
                    value="review"
                    color="green"
                    icon={<CheckCircle2 />}
                />
            </div>
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
