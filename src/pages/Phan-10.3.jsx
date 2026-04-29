import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BarChart3,
    Building2,
    Camera,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Cloud,
    Code2,
    Database,
    Eye,
    FileCheck2,
    FileText,
    Globe2,
    HardDrive,
    Home,
    KeyRound,
    Layers,
    ListChecks,
    Lock,
    Map,
    Monitor,
    Network,
    Plug,
    Printer,
    RadioTower,
    Router,
    Save,
    Search,
    Server,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    Smartphone,
    Terminal,
    Users,
    Wifi,
    Wrench,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Firewall = Shield;

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

const enterpriseComponents = [
    ["Máy nhân viên", "PC/laptop người dùng", "cyan", <Monitor />],
    ["Server nội bộ", "File, app, AD, DNS, DHCP", "emerald", <Server />],
    ["Máy in", "Thiết bị dùng chung", "orange", <Printer />],
    ["Camera", "Camera IP/NVR", "yellow", <Camera />],
    ["WiFi nhân viên", "SSID nội bộ", "blue", <Wifi />],
    ["WiFi khách", "SSID Guest tách riêng", "purple", <Smartphone />],
    ["Router/Firewall", "Ra Internet, policy, VPN", "red", <Shield />],
    ["Switch", "Chia kết nối LAN/VLAN", "green", <Network />],
];

const vlanPlan = [
    [
        10,
        "ACCOUNTING",
        "192.168.10.0/24",
        "192.168.10.1",
        ".50 - .200",
        "Kế toán",
        "cyan",
        <FileText />,
    ],
    [
        20,
        "HR",
        "192.168.20.0/24",
        "192.168.20.1",
        ".50 - .200",
        "Nhân sự",
        "blue",
        <Users />,
    ],
    [
        30,
        "IT",
        "192.168.30.0/24",
        "192.168.30.1",
        ".50 - .200",
        "IT",
        "purple",
        <Terminal />,
    ],
    [
        40,
        "GUEST",
        "192.168.40.0/24",
        "192.168.40.1",
        ".50 - .230",
        "WiFi khách",
        "orange",
        <Wifi />,
    ],
    [
        50,
        "SERVER",
        "192.168.50.0/24",
        "192.168.50.1",
        "Tĩnh",
        "Server",
        "emerald",
        <Server />,
    ],
    [
        60,
        "CAMERA",
        "192.168.60.0/24",
        "192.168.60.1",
        ".50 - .200",
        "Camera IP",
        "yellow",
        <Camera />,
    ],
    [
        99,
        "MGMT",
        "192.168.99.0/24",
        "192.168.99.1",
        "Tĩnh",
        "Quản trị",
        "red",
        <ShieldCheck />,
    ],
];

const firewallRules = [
    ["Guest WiFi", "Internet", "HTTP/HTTPS", "Allow", "green"],
    ["Guest WiFi", "Internal VLANs", "Any", "Deny", "red"],
    [
        "Employee VLAN",
        "Server VLAN",
        "Selected ports",
        "Allow có chọn lọc",
        "yellow",
    ],
    ["Employee VLAN", "Management VLAN", "Any", "Deny", "red"],
    ["IT VLAN", "Server VLAN", "SSH/RDP/Admin", "Allow", "green"],
    ["IT VLAN", "Network Devices", "SSH/HTTPS", "Allow", "green"],
    ["Camera VLAN", "NVR/Server", "Video stream", "Allow", "green"],
    ["Camera VLAN", "Internet", "Any", "Deny", "red"],
];

const threeTierRows = [
    [
        "Access Layer",
        "Lớp truy cập",
        "Nơi PC, máy in, AP, camera cắm vào",
        "cyan",
    ],
    [
        "Distribution Layer",
        "Lớp phân phối",
        "Gom access switch, áp chính sách VLAN/routing",
        "purple",
    ],
    ["Core Layer", "Lớp lõi", "Xương sống tốc độ cao của mạng", "emerald"],
];

const mistakes = [
    [
        "Tất cả thiết bị chung một VLAN",
        "Kém bảo mật, broadcast nhiều",
        "Chia VLAN theo phòng ban/vai trò",
        "red",
        <Layers />,
    ],
    [
        "Guest WiFi chung mạng nội bộ",
        "Khách có thể dò quét tài nguyên công ty",
        "Tách Guest VLAN và chặn Internal",
        "orange",
        <Wifi />,
    ],
    [
        "Không có IP Plan",
        "IP rối, khó tìm lỗi, khó mở rộng",
        "Đặt subnet theo số VLAN và ghi tài liệu",
        "yellow",
        <Map />,
    ],
    [
        "Không ghi chú sơ đồ mạng",
        "Người khác không bảo trì được",
        "Lưu sơ đồ topology, VLAN, IP, firewall rule",
        "blue",
        <FileText />,
    ],
    [
        "Không backup cấu hình",
        "Hỏng thiết bị là mất cấu hình",
        "Backup config định kỳ",
        "purple",
        <Save />,
    ],
    [
        "Không tách Management VLAN",
        "Thiết bị mạng dễ bị truy cập trái phép",
        "Chỉ IT admin được vào VLAN quản trị",
        "emerald",
        <ShieldCheck />,
    ],
];

const quizQuestions = [
    {
        question: "VLAN dùng để làm gì?",
        options: [
            "Tăng dung lượng ổ cứng",
            "Chia mạng LAN thành nhiều mạng logic",
            "Mã hóa toàn bộ dữ liệu",
            "Thay thế dây mạng",
        ],
        correct: 1,
        explanation:
            "VLAN chia một mạng/switch vật lý thành nhiều mạng logic để dễ quản lý, tăng bảo mật và giảm phạm vi broadcast.",
    },
    {
        question:
            "Vì sao Guest WiFi không nên chung mạng với máy nhân viên và server?",
        options: [
            "Vì khách có thể dò quét hoặc truy cập tài nguyên nội bộ",
            "Vì WiFi khách không cần Internet",
            "Vì VLAN chỉ dùng cho camera",
            "Vì server không dùng IP",
        ],
        correct: 0,
        explanation:
            "Guest WiFi phải được tách riêng và chỉ cho ra Internet. Không nên cho khách nhìn thấy mạng nhân viên, server hoặc thiết bị quản trị.",
    },
    {
        question: "IP Plan tốt nên có đặc điểm nào?",
        options: [
            "Đặt IP ngẫu nhiên cho nhanh",
            "Theo số VLAN, dễ nhớ, có dự phòng, không trùng VPN/cloud/chi nhánh",
            "Tất cả dùng chung 192.168.1.0/24",
            "Không cần gateway",
        ],
        correct: 1,
        explanation:
            "IP Plan tốt giúp vận hành, tìm lỗi và mở rộng dễ hơn. Ví dụ VLAN 10 dùng 192.168.10.0/24.",
    },
    {
        question: "Management VLAN dùng để làm gì?",
        options: [
            "Cho khách truy cập Internet",
            "Quản trị switch, router, AP, firewall",
            "Lưu video camera",
            "In tài liệu",
        ],
        correct: 1,
        explanation:
            "Management VLAN là vùng riêng để quản trị thiết bị mạng. Chỉ admin IT nên truy cập được vùng này.",
    },
    {
        question: "Access port khác trunk port ở điểm nào?",
        options: [
            "Access port chở một VLAN, trunk port chở nhiều VLAN",
            "Access port chỉ dùng Internet, trunk port chỉ dùng WiFi",
            "Trunk port không dùng switch",
            "Access port không cần dây",
        ],
        correct: 0,
        explanation:
            "PC/camera thường cắm vào access port thuộc một VLAN. Kết nối switch-router/core thường là trunk port để mang nhiều VLAN.",
    },
    {
        question: "Single Point of Failure nghĩa là gì?",
        options: [
            "Một điểm hỏng có thể làm toàn hệ thống tê liệt",
            "Một kiểu VLAN cho khách",
            "Một địa chỉ broadcast",
            "Một rule firewall cho HTTPS",
        ],
        correct: 0,
        explanation:
            "Nếu toàn mạng phụ thuộc vào một thiết bị duy nhất, thiết bị đó hỏng có thể làm toàn công ty mất mạng.",
    },
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 shrink-0">
                            <Building2 className="text-cyan-400" size={24} />
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
                        Bài 10.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatIsEnterpriseNetwork />
                <WhyNotOneNetwork />
                <VlanSection />
                <IpPlanSection />
                <FirewallSection />
                <RealWorldExamples />
                <TopologySection />
                <ThreeTierSection />
                <DesignProcessSection />
                <SmallCompanyDesign />
                <CiscoLogicConfig />
                <DesignChecklist />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <Layers size={16} /> Enterprise Network Design
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Thiết kế mạng
                        <span className="block text-cyan-400">
                            doanh nghiệp
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Bài này giúp bạn tư duy thiết kế mạng công ty theo VLAN,
                        subnet, gateway, firewall, IP plan, dự phòng và khả năng
                        mở rộng.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl space-y-1">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">VLAN</span> = chia
                            mạng theo vùng/phòng ban.
                        </p>
                        <p>
                            <span className="text-emerald-300">IP Plan</span> =
                            đặt IP có trật tự.
                        </p>
                        <p>
                            <span className="text-red-300">Firewall</span> =
                            kiểm soát ai được vào đâu.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroEnterpriseVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        [
            "Khu vực mạng",
            "Biết mạng doanh nghiệp thường được chia thành những vùng nào.",
            <Building2 />,
        ],
        [
            "VLAN/Subnet",
            "Hiểu vì sao cần VLAN, subnet, gateway, firewall.",
            <Layers />,
        ],
        ["Sơ đồ", "Biết thiết kế sơ đồ mạng cơ bản cho công ty.", <Map />],
        ["IP Plan", "Biết phân chia IP theo phòng ban/vai trò.", <Database />],
        [
            "Tư duy",
            "Thiết kế theo hướng dễ quản lý, bảo mật và mở rộng.",
            <ShieldCheck />,
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

function WhatIsEnterpriseNetwork() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Mạng doanh nghiệp là gì?"
                icon={<Building2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
                    <ConceptCard
                        title="Không chỉ là vài máy tính nối WiFi"
                        icon={<Building2 />}
                        color="blue"
                        text="Mạng doanh nghiệp là hệ thống mạng dùng trong công ty, trường học, bệnh viện, ngân hàng, nhà máy hoặc tổ chức. Nó cần nhiều vùng, nhiều thiết bị và chính sách bảo mật rõ ràng."
                        code={`Internet\n   |\nRouter/Firewall\n   |\nCore Switch\n   |\nKế toán | Nhân sự | IT | WiFi | Server`}
                    />
                    <div className="grid md:grid-cols-2 gap-3">
                        {enterpriseComponents.map(
                            ([title, desc, color, icon]) => (
                                <MiniFlowNode
                                    key={title}
                                    title={title}
                                    desc={desc}
                                    color={color}
                                    icon={icon}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyNotOneNetwork() {
    const problems = [
        [
            "Khó quản lý",
            "Không biết IP nào thuộc phòng nào",
            "orange",
            <Search />,
        ],
        [
            "Kém bảo mật",
            "Máy khách có thể nhìn thấy máy kế toán",
            "red",
            <ShieldAlert />,
        ],
        [
            "Broadcast nhiều",
            "Thông báo lan rộng trong toàn mạng",
            "yellow",
            <RadioTower />,
        ],
        [
            "Khó giới hạn quyền",
            "Không dễ chặn phòng ban này truy cập phòng ban kia",
            "purple",
            <Lock />,
        ],
        [
            "Khó mở rộng",
            "Thêm chi nhánh/phòng ban dễ rối IP",
            "blue",
            <BarChart3 />,
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="red"
                title="Vì sao không nên để toàn bộ công ty chung một mạng?"
                icon={<AlertTriangle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Một mạng 192.168.1.0/24 cho tất cả là rất rủi ro"
                        icon={<XCircle />}
                        color="red"
                        text="Ban đầu có vẻ đơn giản, nhưng khi công ty lớn lên, mạng chung gây khó quản lý, kém bảo mật, nhiều broadcast và khó mở rộng."
                        code={`Khách dùng WiFi Guest\n→ cùng mạng với máy chủ kế toán\n→ có thể dò quét IP nội bộ\n\nĐây là thiết kế không an toàn.`}
                    />
                    <div className="grid md:grid-cols-2 gap-3">
                        {problems.map(([title, desc, color, icon]) => (
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

function VlanSection() {
    const [active, setActive] = useState(0);
    const row = vlanPlan[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="VLAN trong mạng doanh nghiệp"
                icon={<Layers />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div className="space-y-4">
                        <ConceptCard
                            title="Switch vật lý, nhiều mạng logic"
                            icon={<Layers />}
                            color="purple"
                            text="VLAN là Virtual Local Area Network. Nó giúp chia một switch vật lý thành nhiều mạng logic theo phòng ban hoặc mục đích sử dụng."
                            code={`Không có VLAN:\nTất cả thiết bị chung một mạng.\n\nCó VLAN:\nKế toán, Nhân sự, IT, Guest, Server ở mạng riêng.`}
                        />
                        <div className="grid grid-cols-2 gap-2">
                            {vlanPlan.map(
                                (
                                    [
                                        vlan,
                                        name,
                                        subnet,
                                        gateway,
                                        dhcp,
                                        purpose,
                                        color,
                                    ],
                                    idx,
                                ) => (
                                    <button
                                        key={vlan}
                                        onClick={() => setActive(idx)}
                                        className={`rounded-xl px-3 py-2 text-left border transition-all ${active === idx ? `${colorClasses[color].solid} text-white border-white/20` : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`}
                                    >
                                        <p className="font-black">
                                            VLAN {vlan}
                                        </p>
                                        <p className="text-xs font-mono opacity-80">
                                            {name}
                                        </p>
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <div
                            className={`${colorClasses[row[6]].bg} ${colorClasses[row[6]].border} border rounded-3xl p-5 mb-5`}
                        >
                            <div
                                className={`${colorClasses[row[6]].solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}
                            >
                                {React.cloneElement(row[7], { size: 28 })}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                VLAN {row[0]} — {row[1]}
                            </h3>
                            <p
                                className={`${colorClasses[row[6]].text} font-mono text-sm mb-4`}
                            >
                                {row[5]}
                            </p>
                            <div className="grid md:grid-cols-3 gap-3">
                                <MiniMetric
                                    label="Subnet"
                                    value={row[2]}
                                    color={row[6]}
                                />
                                <MiniMetric
                                    label="Gateway"
                                    value={row[3]}
                                    color="green"
                                />
                                <MiniMetric
                                    label="DHCP"
                                    value={row[4]}
                                    color="cyan"
                                />
                            </div>
                        </div>
                        <VlanBuildingVisual
                            active={active}
                            setActive={setActive}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function IpPlanSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="emerald"
                title="Subnet và IP Plan"
                icon={<Database />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="IP Plan là kế hoạch phân chia địa chỉ IP"
                    icon={<Database />}
                    color="emerald"
                    text="Doanh nghiệp không nên đặt IP tùy tiện. Một IP Plan tốt nên dễ nhớ, theo số VLAN, có khoảng dự phòng và không trùng VPN/cloud/chi nhánh khác."
                    code={`VLAN 10 → 192.168.10.0/24\nVLAN 20 → 192.168.20.0/24\nVLAN 30 → 192.168.30.0/24\n\nQuy tắc dễ nhớ: số VLAN khớp octet thứ 3.`}
                />
                <ConceptCard
                    title="Ví dụ VLAN 10"
                    icon={<FileCheck2 />}
                    color="cyan"
                    text="Trong mỗi subnet, cần xác định network, gateway, DHCP range, reserved IP và broadcast."
                    code={`Network:     192.168.10.0/24\nGateway:     192.168.10.1\nDHCP range:  192.168.10.50 - 192.168.10.200\nReserved IP: 192.168.10.2 - 192.168.10.49\nBroadcast:   192.168.10.255`}
                />
            </div>
            <VlanTable />
        </section>
    );
}

function FirewallSection() {
    const [active, setActive] = useState(0);
    const current = firewallRules[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="red"
                title="Firewall và phân vùng bảo mật"
                icon={<Shield />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                    <ConceptCard
                        title="Ai được phép truy cập vào đâu?"
                        icon={<Shield />}
                        color="red"
                        text="Firewall kiểm soát lưu lượng giữa các vùng mạng. Nó quyết định nguồn nào được truy cập đích nào, dùng dịch vụ gì, và có được phép hay không."
                        code={`Guest → Internet: Allow\nGuest → Internal: Deny\nUser → Server: Allow có chọn lọc\nIT → Network Devices: Allow\nCamera → Internet: Deny`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                        <div className="grid md:grid-cols-2 gap-2 mb-5">
                            {firewallRules.map(
                                ([src, dst, service, action, color], idx) => (
                                    <button
                                        key={`${src}-${dst}`}
                                        onClick={() => setActive(idx)}
                                        className={`rounded-xl p-3 text-left border transition-all ${active === idx ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-900 border-slate-800 hover:border-slate-600"}`}
                                    >
                                        <p className="text-white font-bold text-sm">
                                            {src}
                                        </p>
                                        <p className="text-slate-500 text-xs">
                                            → {dst}
                                        </p>
                                    </button>
                                ),
                            )}
                        </div>
                        <div
                            className={`${colorClasses[current[4]].bg} ${colorClasses[current[4]].border} border rounded-3xl p-5`}
                        >
                            <div
                                className={`${colorClasses[current[4]].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                            >
                                {current[3].includes("Deny") ? (
                                    <XCircle />
                                ) : (
                                    <CheckCircle2 />
                                )}
                            </div>
                            <p className="text-slate-400 text-sm uppercase tracking-wider font-black">
                                Firewall rule
                            </p>
                            <h3 className="text-white text-xl font-bold mt-1 mb-4">
                                {current[0]} → {current[1]}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                <MiniMetric
                                    label="Dịch vụ"
                                    value={current[2]}
                                    color="cyan"
                                />
                                <MiniMetric
                                    label="Quyết định"
                                    value={current[3]}
                                    color={current[4]}
                                />
                            </div>
                        </div>
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
                number="7"
                color="orange"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Công ty giống như một tòa nhà"
                    icon={<Building2 />}
                    color="orange"
                    text="Bạn sẽ không để khách tự do đi vào phòng kế toán hoặc phòng server. VLAN là phòng riêng, firewall là bảo vệ kiểm tra thẻ, router/core switch là hành lang chính."
                    code={`Khách → chỉ được Internet\nNhân viên → hệ thống nội bộ\nIT → quản trị server/router/switch\nKế toán → phần mềm kế toán`}
                />
                <ConceptCard
                    title="Khu chung cư"
                    icon={<Home />}
                    color="blue"
                    text="Chung cư có tầng cư dân, khu kỹ thuật, hầm xe, lễ tân và khách vãng lai. Không ai thiết kế để khách vào được phòng kỹ thuật điện. Mạng cũng vậy."
                    code={`Guest WiFi không vào Server VLAN.\nCamera không truy cập máy kế toán.\nNhân viên thường không SSH vào router.`}
                />
            </div>
        </section>
    );
}

function TopologySection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Sơ đồ mạng doanh nghiệp cơ bản"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <EnterpriseTopologyVisual />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <SecurityZoneVisual />
            </div>
        </section>
    );
}

function ThreeTierSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="purple"
                title="Mô hình 3 lớp trong thiết kế mạng"
                icon={<Layers />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {threeTierRows.map(([eng, vi, role, color]) => (
                    <div
                        key={eng}
                        className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-6`}
                    >
                        <div
                            className={`${colorClasses[color].solid} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}
                        >
                            <Layers size={28} />
                        </div>
                        <p
                            className={`${colorClasses[color].text} font-mono text-sm mb-2`}
                        >
                            {eng}
                        </p>
                        <h3 className="text-xl text-white font-bold mb-3">
                            {vi}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {role}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-3xl p-6 text-yellow-300 text-sm">
                Với công ty nhỏ, có thể gộp lại thành Router/Firewall + Core
                Switch + Access Switch. Với công ty lớn, nên tách rõ từng lớp để
                dễ mở rộng và vận hành.
            </div>
        </section>
    );
}

function DesignProcessSection() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Khảo sát nhu cầu",
            text: "Trước khi vẽ sơ đồ, cần biết công ty có bao nhiêu người, phòng ban, server, camera, WiFi khách, chi nhánh, VPN và yêu cầu bảo mật.",
            code: "60 nhân viên\n5 phòng ban\n1 phòng server\n20 camera\nWiFi nhân viên + WiFi khách\nCó VPN cho remote user",
            color: "cyan",
            icon: <Search />,
        },
        {
            title: "Chia vùng mạng",
            text: "Chia thành User VLAN, Server VLAN, Guest VLAN, Camera VLAN và Management VLAN.",
            code: "User VLAN\nServer VLAN\nGuest VLAN\nCamera VLAN\nManagement VLAN",
            color: "purple",
            icon: <Layers />,
        },
        {
            title: "Lập IP Plan",
            text: "Đặt subnet theo VLAN, có gateway, DHCP range, IP tĩnh và khoảng dự phòng rõ ràng.",
            code: "VLAN 10 → 192.168.10.0/24\nGateway → 192.168.10.1\nDHCP → .50 - .200",
            color: "emerald",
            icon: <Database />,
        },
        {
            title: "Chọn thiết bị",
            text: "Tùy quy mô chọn firewall, router, core switch, access switch, AP, server, UPS và đường Internet dự phòng.",
            code: "Công ty nhỏ:\nFirewall + Layer 3 Switch + Access Switch + AP\n\nRất nhỏ:\nRouter/Firewall + 1 Switch + 1-2 AP",
            color: "blue",
            icon: <HardDrive />,
        },
        {
            title: "Thiết kế luồng truy cập",
            text: "Không phải cứ cùng công ty là được truy cập mọi thứ. Cần xác định nguồn nào được vào đích nào.",
            code: "Guest → Internet: Allow\nGuest → Internal: Deny\nIT → Management: Allow\nCamera → Internet: Deny",
            color: "red",
            icon: <Shield />,
        },
        {
            title: "Thiết kế dự phòng",
            text: "Tránh Single Point of Failure. Tùy ngân sách, dùng UPS, backup config, Internet dự phòng, firewall/core dự phòng.",
            code: "Core Switch 1 + Core Switch 2\nFirewall chính + Firewall dự phòng\n2 đường Internet\nUPS cho thiết bị mạng",
            color: "orange",
            icon: <Zap />,
        },
        {
            title: "Giám sát và ghi log",
            text: "Sau khi triển khai cần theo dõi thiết bị down, interface lỗi, nghẽn băng thông, đăng nhập bất thường và lưu lượng lạ.",
            code: "Ping/Traceroute\nWireshark\nSNMP\nSyslog\nNetFlow\nNMS",
            color: "green",
            icon: <Eye />,
        },
    ];
    return (
        <StepSection
            number="10"
            color="emerald"
            title="Cơ chế hoạt động — Thiết kế mạng doanh nghiệp"
            icon={<Wrench />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function SmallCompanyDesign() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Ví dụ thiết kế hoàn chỉnh cho công ty nhỏ"
                icon={<Building2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 items-start">
                    <ConceptCard
                        title="Yêu cầu công ty ABC"
                        icon={<Users />}
                        color="blue"
                        text="Công ty có 30 nhân viên văn phòng, 5 nhân viên IT, 10 camera IP, 1 server nội bộ, WiFi khách, 1 đường Internet, 1 router/firewall, 2 switch và 3 access point."
                        code={`30 nhân viên văn phòng\n5 nhân viên IT\n10 camera IP\n1 máy chủ nội bộ\nWiFi khách\n1 router/firewall\n2 switch\n3 access point`}
                    />
                    <SmallCompanyVisual />
                </div>
            </div>
            <VlanTable compact />
        </section>
    );
}

function CiscoLogicConfig() {
    const [tab, setTab] = useState("VLAN");
    const configs = {
        VLAN: `enable\nconfigure terminal\n\nvlan 10\nname EMPLOYEE\nexit\n\nvlan 20\nname IT\nexit\n\nvlan 30\nname CAMERA\nexit\n\nvlan 40\nname SERVER\nexit\n\nvlan 50\nname GUEST\nexit\n\nvlan 99\nname MANAGEMENT\nexit`,
        "Access Port": `interface fastEthernet 0/1\nswitchport mode access\nswitchport access vlan 10\nno shutdown\nexit\n\ninterface fastEthernet 0/10\nswitchport mode access\nswitchport access vlan 30\nno shutdown\nexit`,
        Trunk: `interface gigabitEthernet 0/1\nswitchport mode trunk\nno shutdown\nexit\n\nAccess port = một VLAN\nTrunk port  = nhiều VLAN`,
        "Router-on-a-stick": `interface gigabitEthernet 0/0\nno shutdown\nexit\n\ninterface gigabitEthernet 0/0.10\nencapsulation dot1Q 10\nip address 192.168.10.1 255.255.255.0\nexit\n\ninterface gigabitEthernet 0/0.20\nencapsulation dot1Q 20\nip address 192.168.20.1 255.255.255.0\nexit\n\ninterface gigabitEthernet 0/0.30\nencapsulation dot1Q 30\nip address 192.168.30.1 255.255.255.0\nexit`,
    };
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="orange"
                title="Ví dụ cấu hình logic trên Cisco"
                icon={<Code2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                    {Object.keys(configs).map((name) => (
                        <button
                            key={name}
                            onClick={() => setTab(name)}
                            className={`px-4 py-3 rounded-xl font-bold transition-all ${tab === name ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
                        <Terminal size={18} className="text-orange-300" />
                        <p className="text-white font-black">{tab}</p>
                    </div>
                    <pre className="p-5 overflow-x-auto text-sm text-green-300 font-mono whitespace-pre-wrap">
                        {configs[tab]}
                    </pre>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <ConceptCard
                    title="Access port"
                    icon={<Plug />}
                    color="cyan"
                    text="Cổng access thường dành cho PC, camera, máy in. Nó thuộc một VLAN cụ thể."
                    code={`PC cắm vào switch → access port\nswitchport mode access\nswitchport access vlan 10`}
                />
                <ConceptCard
                    title="Trunk port"
                    icon={<Layers />}
                    color="purple"
                    text="Cổng trunk thường dùng giữa switch-router hoặc switch-core. Nó mang nhiều VLAN qua cùng một đường kết nối."
                    code={`Switch nối Router/Core → trunk port\nswitchport mode trunk`}
                />
            </div>
        </section>
    );
}

function DesignChecklist() {
    const [checked, setChecked] = useState({});
    const items = [
        "Đã liệt kê phòng ban và số thiết bị chưa?",
        "Đã chia VLAN chưa?",
        "Đã lập IP Plan chưa?",
        "Đã xác định gateway từng VLAN chưa?",
        "Đã có firewall policy chưa?",
        "Guest WiFi đã tách khỏi mạng nội bộ chưa?",
        "Server đã đặt trong VLAN riêng chưa?",
        "Thiết bị quản trị có Management VLAN chưa?",
        "Đã có backup cấu hình chưa?",
        "Đã có phương án giám sát chưa?",
        "Đã nghĩ tới mở rộng trong 1-3 năm tới chưa?",
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="green"
                title="Checklist thiết kế mạng doanh nghiệp"
                icon={<ListChecks />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-3">
                    {items.map((item, idx) => {
                        const done = checked[idx];
                        return (
                            <button
                                key={item}
                                onClick={() =>
                                    setChecked((s) => ({
                                        ...s,
                                        [idx]: !s[idx],
                                    }))
                                }
                                className={`text-left rounded-2xl border p-4 transition-all ${done ? "bg-green-500/10 border-green-400/40" : "bg-slate-950 border-slate-800 hover:border-slate-600"}`}
                            >
                                <div className="flex gap-3 items-start">
                                    <div
                                        className={`${done ? "bg-green-500 text-white" : "bg-slate-900 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0`}
                                    >
                                        {done ? (
                                            <CheckCircle2 size={18} />
                                        ) : (
                                            idx + 1
                                        )}
                                    </div>
                                    <p
                                        className={`${done ? "text-green-300" : "text-slate-300"} text-sm font-semibold leading-relaxed`}
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
                number="14"
                color="yellow"
                title="Những lỗi thiết kế phổ biến"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mistakes.map(([title, desc, fix, color, icon]) => (
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
                number="15"
                color="emerald"
                title="Bài này liên quan đến phần nào đã học?"
                icon={<Layers />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <MiniFlowNode
                    title="4.7 Switch & VLAN"
                    desc="chia mạng theo VLAN"
                    color="purple"
                    icon={<Layers />}
                />
                <MiniFlowNode
                    title="5.1/5.2 IPv4/Subnet"
                    desc="lập IP Plan"
                    color="cyan"
                    icon={<Database />}
                />
                <MiniFlowNode
                    title="5.5/5.6 Routing"
                    desc="định tuyến giữa mạng"
                    color="orange"
                    icon={<Router />}
                />
                <MiniFlowNode
                    title="7.5 DHCP"
                    desc="cấp IP theo VLAN"
                    color="green"
                    icon={<Settings />}
                />
                <MiniFlowNode
                    title="9.3 Firewall"
                    desc="policy bảo mật"
                    color="red"
                    icon={<Shield />}
                />
                <MiniFlowNode
                    title="9.4 VPN"
                    desc="remote access"
                    color="blue"
                    icon={<KeyRound />}
                />
                <MiniFlowNode
                    title="10.1 Tools"
                    desc="ping/traceroute/wireshark"
                    color="emerald"
                    icon={<Search />}
                />
                <MiniFlowNode
                    title="10.2 Cisco CLI"
                    desc="cấu hình thật"
                    color="yellow"
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
                            <p>
                                Mạng doanh nghiệp gồm nhiều thiết bị, phòng ban
                                và chính sách bảo mật.
                            </p>
                            <p>Không nên để toàn bộ công ty chung một mạng.</p>
                            <p>VLAN giúp chia mạng theo vùng/phòng ban.</p>
                            <p>
                                IP Plan giúp đặt địa chỉ có trật tự và dễ mở
                                rộng.
                            </p>
                            <p>
                                Gateway là địa chỉ để thiết bị trong VLAN đi ra
                                mạng khác.
                            </p>
                            <p>Firewall kiểm soát ai được truy cập vào đâu.</p>
                            <p>Guest WiFi phải tách khỏi mạng nội bộ.</p>
                            <p>
                                Management VLAN dùng để quản trị thiết bị mạng.
                            </p>
                            <p>
                                Access port chở một VLAN, trunk port chở nhiều
                                VLAN.
                            </p>
                            <p>
                                Thiết kế tốt cần tính backup, giám sát và mở
                                rộng.
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
                    Hoàn thành bài thiết kế mạng doanh nghiệp!
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
                Bạn đã học xong Bài 10.3. Bài tiếp theo chuyển sang mạng hiện
                đại trên cloud và SDN.
            </p>
            <Link
                to="/phan-10-4"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 10.4 — Cloud Networking & SDN{" "}
                <ChevronRight size={20} />
            </Link>
        </div>
    );
}

function HeroEnterpriseVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="VLAN"
                    value="segment"
                    color="cyan"
                    icon={<Layers />}
                />
                <MiniCard
                    title="Subnet"
                    value="IP plan"
                    color="emerald"
                    icon={<Database />}
                />
                <MiniCard
                    title="Firewall"
                    value="policy"
                    color="red"
                    icon={<Shield />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">VLAN 10 → 192.168.10.0/24</p>
                <p className="text-blue-300">VLAN 20 → 192.168.20.0/24</p>
                <p className="text-purple-300">VLAN 30 → 192.168.30.0/24</p>
                <p className="text-orange-300">Guest → Internet: Allow</p>
                <p className="text-red-300">Guest → Internal: Deny</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Core"
                    value="backbone"
                    color="purple"
                    icon={<Network />}
                />
                <MiniCard
                    title="Access"
                    value="PC/AP"
                    color="green"
                    icon={<Plug />}
                />
                <MiniCard
                    title="Monitor"
                    value="NMS/log"
                    color="yellow"
                    icon={<Eye />}
                />
            </div>
        </div>
    );
}

function VlanTable({ compact = false }) {
    const rows = compact
        ? [
              [
                  10,
                  "EMPLOYEE",
                  "192.168.10.0/24",
                  "192.168.10.1",
                  "Nhân viên",
                  "cyan",
              ],
              [20, "IT", "192.168.20.0/24", "192.168.20.1", "IT", "purple"],
              [
                  30,
                  "CAMERA",
                  "192.168.30.0/24",
                  "192.168.30.1",
                  "Camera",
                  "yellow",
              ],
              [
                  40,
                  "SERVER",
                  "192.168.40.0/24",
                  "192.168.40.1",
                  "Server",
                  "emerald",
              ],
              [
                  50,
                  "GUEST",
                  "192.168.50.0/24",
                  "192.168.50.1",
                  "Guest WiFi",
                  "orange",
              ],
              [
                  99,
                  "MGMT",
                  "192.168.99.0/24",
                  "192.168.99.1",
                  "Management",
                  "red",
              ],
          ]
        : vlanPlan.map(
              ([vlan, name, subnet, gateway, dhcp, purpose, color]) => [
                  vlan,
                  name,
                  subnet,
                  gateway,
                  purpose,
                  color,
              ],
          );
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[780px] text-sm">
                    <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                        <tr>
                            <th className="p-4">VLAN</th>
                            <th className="p-4">Tên</th>
                            <th className="p-4">Subnet</th>
                            <th className="p-4">Gateway</th>
                            <th className="p-4">Mục đích</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(
                            (
                                [vlan, name, subnet, gateway, purpose, color],
                                idx,
                            ) => (
                                <tr
                                    key={vlan}
                                    className={`${idx === rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                >
                                    <td
                                        className={`${colorClasses[color].text} p-4 font-black`}
                                    >
                                        VLAN {vlan}
                                    </td>
                                    <td className="p-4 text-white font-bold">
                                        {name}
                                    </td>
                                    <td className="p-4 text-slate-300 font-mono">
                                        {subnet}
                                    </td>
                                    <td className="p-4 text-slate-300 font-mono">
                                        {gateway}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {purpose}
                                    </td>
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function VlanBuildingVisual({ active, setActive }) {
    return (
        <div className="grid grid-cols-1 gap-2">
            {vlanPlan.map(
                (
                    [vlan, name, subnet, gateway, dhcp, purpose, color, icon],
                    idx,
                ) => (
                    <button
                        key={vlan}
                        onClick={() => setActive(idx)}
                        className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all ${active === idx ? `${colorClasses[color].bg} ${colorClasses[color].border}` : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}
                    >
                        <div
                            className={`${active === idx ? colorClasses[color].solid : "bg-slate-950"} text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
                        >
                            {React.cloneElement(icon, { size: 20 })}
                        </div>
                        <div className="min-w-0">
                            <p className="text-white font-bold">
                                VLAN {vlan} — {purpose}
                            </p>
                            <p
                                className={`${colorClasses[color].text} font-mono text-xs break-all`}
                            >
                                {subnet}
                            </p>
                        </div>
                    </button>
                ),
            )}
        </div>
    );
}

function EnterpriseTopologyVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="WAN/ISP"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Router/Firewall"
                desc="NAT, VPN, policy, security"
                color="red"
                icon={<Shield />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Core Switch"
                desc="backbone, VLAN routing nếu L3"
                color="purple"
                icon={<Network />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniFlowNode
                    title="Access SW1"
                    desc="VLAN 10,20 — Accounting, HR"
                    color="cyan"
                    icon={<Plug />}
                />
                <MiniFlowNode
                    title="Access SW2"
                    desc="VLAN 30,40 — IT, Guest"
                    color="orange"
                    icon={<Plug />}
                />
                <MiniFlowNode
                    title="Server SW"
                    desc="VLAN 50 — Server"
                    color="emerald"
                    icon={<Server />}
                />
            </div>
        </div>
    );
}

function SecurityZoneVisual() {
    return (
        <div className="space-y-4">
            <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/40 text-red-300 font-bold">
                    <Shield size={18} /> Phân vùng bảo mật
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
                <ZoneCard
                    title="VLAN User"
                    desc="10/20/30 — Nhân viên"
                    color="cyan"
                    icon={<Users />}
                />
                <ArrowRight className="hidden md:block text-slate-500" />
                <ZoneCard
                    title="VLAN Server"
                    desc="50 — Server nội bộ"
                    color="emerald"
                    icon={<Server />}
                />
                <ArrowRight className="hidden md:block text-slate-500" />
                <ZoneCard
                    title="VLAN Guest"
                    desc="40 — Khách WiFi"
                    color="orange"
                    icon={<Wifi />}
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm space-y-1">
                <p className="text-green-300">Guest → Internet: Cho phép</p>
                <p className="text-red-300">Guest → Internal: Chặn</p>
                <p className="text-yellow-300">
                    User → Server: Cho phép có chọn lọc
                </p>
                <p className="text-cyan-300">IT → Network Devices: Cho phép</p>
            </div>
        </div>
    );
}

function SmallCompanyVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="1 đường chính"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Router/Firewall"
                desc="gateway + firewall policy"
                color="red"
                icon={<Shield />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Core Switch"
                desc="trunk port, VLAN"
                color="purple"
                icon={<Network />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="Access SW1"
                    value="PCs, APs"
                    color="cyan"
                    icon={<Plug />}
                />
                <MiniCard
                    title="Access SW2"
                    value="Camera, PCs"
                    color="orange"
                    icon={<Camera />}
                />
                <MiniCard
                    title="Server"
                    value="internal app"
                    color="emerald"
                    icon={<Server />}
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
