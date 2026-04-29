import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BadgeCheck,
    BarChart3,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Code2,
    Database,
    DoorOpen,
    Eye,
    FileCode2,
    Filter,
    Globe2,
    HardDrive,
    KeyRound,
    Laptop,
    Layers,
    Lock,
    Network,
    Route,
    Router,
    Search,
    Server,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    Terminal,
    TrafficCone,
    UserCheck,
    Users,
    Wifi,
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

const ruleParts = [
    ["Source", "Nguồn gửi", "192.168.1.10", "cyan"],
    ["Destination", "Đích nhận", "192.168.1.100", "blue"],
    ["Protocol", "Giao thức", "TCP, UDP, ICMP", "purple"],
    ["Port", "Cổng dịch vụ", "80, 443, 22", "orange"],
    ["Action", "Hành động", "Allow hoặc Deny", "green"],
];

const portRows = [
    ["22", "SSH", "TCP", "Quản trị server từ xa", "orange"],
    ["53", "DNS", "UDP/TCP", "Phân giải tên miền", "purple"],
    ["80", "HTTP", "TCP", "Web không TLS", "blue"],
    ["443", "HTTPS", "TCP", "Web có TLS", "green"],
    ["3389", "Remote Desktop", "TCP", "Điều khiển Windows từ xa", "red"],
    ["3306", "MySQL", "TCP", "Database MySQL", "cyan"],
    ["5432", "PostgreSQL", "TCP", "Database PostgreSQL", "emerald"],
];

const basicRules = [
    [
        "1",
        "Internet",
        "Web Server",
        "TCP 443",
        "Allow",
        "Cho phép truy cập website HTTPS",
        "green",
    ],
    [
        "2",
        "Internet",
        "Database",
        "TCP 3306",
        "Deny",
        "Chặn truy cập MySQL từ Internet",
        "red",
    ],
    [
        "3",
        "LAN",
        "Internet",
        "TCP 80,443",
        "Allow",
        "Cho nhân viên duyệt web",
        "green",
    ],
    ["4", "LAN", "Internet", "UDP 53", "Allow", "Cho phép DNS", "green"],
    ["5", "Any", "Any", "Any", "Deny", "Chặn mọi thứ còn lại", "red"],
];

const firewallTypes = [
    [
        "Packet Filtering",
        "Lọc theo IP, protocol, port",
        "Nhanh, dễ hiểu, lọc cơ bản",
        "Không hiểu sâu nội dung ứng dụng",
        "cyan",
        <Filter />,
    ],
    [
        "Stateful Firewall",
        "Theo dõi trạng thái kết nối",
        "An toàn hơn lọc stateless",
        "Tốn tài nguyên hơn",
        "green",
        <Route />,
    ],
    [
        "Application Firewall / WAF",
        "Hiểu tầng ứng dụng",
        "Phát hiện SQLi, XSS, HTTP bất thường",
        "Cần hiểu ứng dụng, có thể false positive",
        "purple",
        <FileCode2 />,
    ],
    [
        "NGFW",
        "Firewall thế hệ mới",
        "App awareness, user policy, IDS/IPS, URL filtering",
        "Phức tạp và chi phí cao hơn",
        "orange",
        <ShieldCheck />,
    ],
];

const placementRows = [
    [
        "Host-based firewall",
        "Chạy trên từng máy",
        "Windows Defender Firewall, ufw, iptables, macOS Application Firewall",
        "blue",
    ],
    [
        "Network firewall",
        "Đặt ở ranh giới/vùng mạng",
        "Internet → Firewall → LAN/DMZ/Server Zone",
        "cyan",
    ],
    [
        "Cloud firewall",
        "Rule trong cloud",
        "Security Group, Network ACL, Cloud Firewall, WAF",
        "purple",
    ],
];

const sampleRules = {
    web: {
        title: "Máy chủ web public",
        color: "cyan",
        icon: <Globe2 />,
        rows: [
            ["Any", "Web Server", "TCP 443", "Allow"],
            ["Admin IP", "Web Server", "TCP 22", "Allow"],
            ["Any", "Web Server", "TCP 22", "Deny"],
            ["Any", "Web Server", "Any", "Deny"],
        ],
    },
    db: {
        title: "Database nội bộ",
        color: "purple",
        icon: <Database />,
        rows: [
            ["Web Server", "Database", "TCP 3306", "Allow"],
            ["Any", "Database", "TCP 3306", "Deny"],
            ["Any", "Database", "Any", "Deny"],
        ],
    },
    lan: {
        title: "Mạng nhân viên",
        color: "green",
        icon: <Users />,
        rows: [
            ["LAN Users", "Internet", "TCP 80,443", "Allow"],
            ["LAN Users", "DNS Server", "UDP/TCP 53", "Allow"],
            ["LAN Users", "Database", "TCP 3306,5432", "Deny"],
            ["LAN Users", "Any", "Any", "Deny/Restrict"],
        ],
    },
};

const commandTabs = {
    windows: {
        title: "Windows PowerShell",
        color: "blue",
        icon: <Terminal />,
        commands: [
            ["Xem trạng thái firewall", "Get-NetFirewallProfile"],
            ["Liệt kê rule firewall", "Get-NetFirewallRule"],
            [
                "Kiểm tra port có mở không",
                "Test-NetConnection example.com -Port 443",
            ],
        ],
    },
    ufw: {
        title: "Linux ufw",
        color: "green",
        icon: <Terminal />,
        commands: [
            ["Xem trạng thái", "sudo ufw status verbose"],
            ["Cho phép SSH", "sudo ufw allow 22/tcp"],
            ["Cho phép HTTPS", "sudo ufw allow 443/tcp"],
            ["Chặn một IP", "sudo ufw deny from 203.0.113.50"],
            ["Bật firewall", "sudo ufw enable"],
        ],
    },
    iptables: {
        title: "Linux iptables/nftables",
        color: "purple",
        icon: <Code2 />,
        commands: [
            ["Xem rule iptables", "sudo iptables -L -n -v"],
            [
                "Cho phép SSH từ Admin IP",
                "sudo iptables -A INPUT -p tcp -s 203.0.113.10 --dport 22 -j ACCEPT",
            ],
            [
                "Chặn SSH từ nơi khác",
                "sudo iptables -A INPUT -p tcp --dport 22 -j DROP",
            ],
            ["Xem ruleset nftables", "sudo nft list ruleset"],
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
                            <Shield className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Mạng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 9: Bảo mật mạng — Network Security
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 9.3
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatIsFirewall />
                <RuleSection />
                <AllowDenySection />
                <InboundOutboundSection />
                <PortProtocolSection />
                <RealWorldExamples />
                <TechnicalExample />
                <FirewallDiagram />
                <RuleTableSection />
                <DefaultDenySection />
                <FirewallProcess />
                <StatefulSection />
                <FirewallTypesSection />
                <PlacementSection />
                <SampleConfigsSection />
                <CommandPractice />
                <ImportantNotes />
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
                        <Layers size={16} /> Network Security — Firewall
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Firewall
                        <span className="block text-cyan-400">Tường lửa</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Firewall kiểm soát lưu lượng mạng đi vào và đi ra dựa
                        trên rule: source, destination, protocol, port và
                        action. Mục tiêu là chỉ cho phép kết nối cần thiết, chặn
                        phần còn lại.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">Firewall</span> =
                            kiểm soát lưu lượng theo rule.
                        </p>
                        <p>
                            <span className="text-green-300">Allow</span> = cho
                            qua; <span className="text-red-300">Deny/Drop</span>{" "}
                            = chặn.
                        </p>
                        <p>
                            <span className="text-orange-300">
                                Default deny
                            </span>{" "}
                            = chỉ mở thứ cần, còn lại đóng.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroFirewallVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu firewall là gì và vì sao mạng cần firewall.",
        "Biết firewall kiểm soát lưu lượng dựa trên tiêu chí nào.",
        "Phân biệt packet filtering, stateful firewall, application firewall và NGFW.",
        "Nắm rule, allow, deny, inbound, outbound, port, protocol.",
        "Biết đọc và hiểu một số rule firewall cơ bản.",
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
                {goals.map((goal, index) => (
                    <div
                        key={goal}
                        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                            {index + 1}
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {goal}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function WhatIsFirewall() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Firewall là gì?"
                icon={<Shield />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-cyan-300">Firewall</strong>,
                            tiếng Việt là tường lửa, là hệ thống dùng để kiểm
                            soát lưu lượng mạng đi vào và đi ra dựa trên các
                            luật được cấu hình trước.
                        </p>
                        <ConceptCard
                            title="Bảo vệ ở cổng mạng"
                            icon={<DoorOpen />}
                            color="blue"
                            text="Firewall giống bảo vệ ở cổng ra vào: ai được vào, ai không được vào, ai được đi ra, đi bằng cửa nào đều phải theo quy định."
                            code="Internet
   |
[Firewall]
   |
[Mạng nội bộ công ty]"
                            compact
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <SimpleFirewallVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function RuleSection() {
    const [active, setActive] = useState("Port");
    const row = ruleParts.find(([name]) => name === active) || ruleParts[3];
    const [, meaning, example, color] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="purple"
                title="Rule firewall là gì?"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {ruleParts.map(([name, , , c]) => (
                                <ChoiceButton
                                    key={name}
                                    active={active === name}
                                    onClick={() => setActive(name)}
                                    color={c}
                                >
                                    {name}
                                </ChoiceButton>
                            ))}
                        </div>
                        <ConceptCard
                            title={active}
                            icon={<Settings />}
                            color={color}
                            text={meaning}
                            code={example}
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th className="p-4">Thành phần</th>
                                    <th className="p-4">Ý nghĩa</th>
                                    <th className="p-4">Ví dụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ruleParts.map(([name, m, ex, c], i) => (
                                    <tr
                                        key={name}
                                        onClick={() => setActive(name)}
                                        className={`${i === ruleParts.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}
                                    >
                                        <td
                                            className={`p-4 font-black ${colorClasses[c].text}`}
                                        >
                                            {name}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {m}
                                        </td>
                                        <td className="p-4 text-green-300 font-mono">
                                            {ex}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">
                    Allow TCP từ mạng LAN đến Internet qua port 443 → Máy trong
                    mạng nội bộ được truy cập website HTTPS bên ngoài.
                </div>
            </div>
        </section>
    );
}

function AllowDenySection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="green"
                title="Allow và Deny"
                icon={<CheckCircle2 />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Allow / Permit"
                    icon={<CheckCircle2 />}
                    color="green"
                    text="Cho phép lưu lượng đi qua firewall nếu gói tin/kết nối khớp rule."
                    code="Allow TCP 192.168.1.0/24 → Internet port 443
→ LAN được truy cập HTTPS"
                />
                <ConceptCard
                    title="Deny / Block / Drop"
                    icon={<XCircle />}
                    color="red"
                    text="Chặn lưu lượng. Drop thường bỏ gói tin im lặng; Reject có thể gửi phản hồi từ chối."
                    code="Deny TCP Internet → 192.168.1.50 port 3389
→ Internet không được Remote Desktop vào máy này"
                />
            </div>
        </section>
    );
}

function InboundOutboundSection() {
    const [mode, setMode] = useState("inbound");
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Inbound và Outbound"
                icon={<Route />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                    <div className="space-y-4">
                        <ConceptCard
                            title={
                                mode === "inbound"
                                    ? "Inbound traffic"
                                    : "Outbound traffic"
                            }
                            icon={<Route />}
                            color={mode === "inbound" ? "orange" : "cyan"}
                            text={
                                mode === "inbound"
                                    ? "Inbound là lưu lượng đi vào hệ thống, mạng hoặc máy chủ. Ví dụ người ngoài truy cập website công ty hoặc hacker quét port máy chủ."
                                    : "Outbound là lưu lượng đi ra khỏi hệ thống, mạng hoặc máy chủ. Ví dụ nhân viên mở Google hoặc server gửi log ra cloud."
                            }
                            code={
                                mode === "inbound"
                                    ? "Internet → Công ty = Inbound"
                                    : "Công ty → Internet = Outbound"
                            }
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <ChoiceButton
                                active={mode === "inbound"}
                                onClick={() => setMode("inbound")}
                                color="orange"
                            >
                                Inbound
                            </ChoiceButton>
                            <ChoiceButton
                                active={mode === "outbound"}
                                onClick={() => setMode("outbound")}
                                color="cyan"
                            >
                                Outbound
                            </ChoiceButton>
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <InboundOutboundVisual active={mode} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PortProtocolSection() {
    const [active, setActive] = useState("443");
    const row = portRows.find(([port]) => port === active) || portRows[3];
    const [, service, proto, desc, color] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="orange"
                title="Port và Protocol trong firewall"
                icon={<TrafficCone />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <ConceptCard
                            title={`Port ${active} — ${service}`}
                            icon={<TrafficCone />}
                            color={color}
                            text={`Protocol thường dùng: ${proto}. Ý nghĩa: ${desc}.`}
                            code={`Allow TCP port ${active}
Deny TCP port ${active} from Internet`}
                        />
                        <div className="grid grid-cols-4 gap-2">
                            {portRows.map(([port, , , , c]) => (
                                <ChoiceButton
                                    key={port}
                                    active={active === port}
                                    onClick={() => setActive(port)}
                                    color={c}
                                >
                                    {port}
                                </ChoiceButton>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[720px] text-sm">
                                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                    <tr>
                                        <th className="p-4">Port</th>
                                        <th className="p-4">Dịch vụ</th>
                                        <th className="p-4">Protocol</th>
                                        <th className="p-4">Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {portRows.map(([port, svc, p, d, c], i) => (
                                        <tr
                                            key={port}
                                            onClick={() => setActive(port)}
                                            className={`${i === portRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === port ? "bg-slate-900" : ""}`}
                                        >
                                            <td
                                                className={`p-4 font-black ${colorClasses[c].text}`}
                                            >
                                                {port}
                                            </td>
                                            <td className="p-4 text-white font-bold">
                                                {svc}
                                            </td>
                                            <td className="p-4 text-green-300 font-mono">
                                                {p}
                                            </td>
                                            <td className="p-4 text-slate-300">
                                                {d}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                color="green"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Bảo vệ ở cổng công ty"
                    icon={<UserCheck />}
                    color="green"
                    text="Bảo vệ kiểm tra ai đến, đến gặp ai, có thẻ không, có lịch hẹn không, được vào khu nào. Firewall cũng kiểm tra IP nguồn, IP đích, port, protocol và rule."
                    code="Ai đến? → Source IP
Đến gặp ai? → Destination
Cửa nào? → Port
Có thẻ không? → Rule Allow/Deny"
                />
                <ConceptCard
                    title="Sân bay"
                    icon={<TrafficCone />}
                    color="orange"
                    text="Sân bay chia cửa nội địa, quốc tế, khu nhân viên, kiểm tra an ninh. Firewall cũng chia luồng: web, database, VPN, LAN, DMZ, guest network."
                    code="Web mở 443
Database không mở Internet
Nhân viên vào nội bộ qua VPN
Guest network tách khỏi server"
                />
            </div>
        </section>
    );
}

function TechnicalExample() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="8"
                color="cyan"
                title="Ví dụ kỹ thuật: công ty có web và database"
                icon={<Server />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                    <ConceptCard
                        title="Rule hợp lý"
                        icon={<Settings />}
                        color="cyan"
                        text="Người ngoài chỉ được vào web qua HTTPS. Database không mở trực tiếp ra Internet. Chỉ web server được kết nối database."
                        code="Web Server: 10.0.1.10
Database Server: 10.0.2.20
LAN User: 10.0.3.0/24

Allow Internet → Web Server TCP 443
Deny Internet → Database Server TCP 3306
Allow Web Server → Database Server TCP 3306
Allow LAN User → Internet TCP 80,443
Deny All khác"
                    />
                    <CompanyNetworkVisual />
                </div>
            </div>
        </section>
    );
}

function FirewallDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Sơ đồ firewall giữa Internet và mạng nội bộ"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <FirewallTopologyVisual />
            </div>
        </section>
    );
}

function RuleTableSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Bảng ví dụ rule firewall"
                icon={<BarChart3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[850px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="p-4">Source</th>
                                <th className="p-4">Destination</th>
                                <th className="p-4">Protocol/Port</th>
                                <th className="p-4">Action</th>
                                <th className="p-4">Ý nghĩa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basicRules.map(
                                (
                                    [n, src, dst, pp, action, meaning, color],
                                    i,
                                ) => (
                                    <tr
                                        key={n}
                                        className={`${i === basicRules.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td className="p-4 text-slate-500 font-mono">
                                            {n}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {src}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {dst}
                                        </td>
                                        <td className="p-4 text-green-300 font-mono">
                                            {pp}
                                        </td>
                                        <td
                                            className={`p-4 font-black ${colorClasses[color].text}`}
                                        >
                                            {action}
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
        </section>
    );
}

function DefaultDenySection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="red"
                title="Nguyên tắc Default Deny"
                icon={<ShieldAlert />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Chỉ mở những gì cần"
                    icon={<ShieldAlert />}
                    color="red"
                    text="Default deny nghĩa là chặn tất cả theo mặc định, sau đó chỉ cho phép những lưu lượng thật sự cần dùng. Đây là nguyên tắc quan trọng để giảm bề mặt tấn công."
                    code={`Rule 1: Allow traffic cần thiết
Rule 2: Allow traffic hợp lệ khác
Rule 3: Deny everything else`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                    <MiniFlowNode
                        title="Bước 1"
                        desc="Mở HTTPS cho Web Server"
                        color="green"
                        icon={<CheckCircle2 />}
                    />
                    <MiniFlowNode
                        title="Bước 2"
                        desc="Mở SSH chỉ từ Admin IP"
                        color="cyan"
                        icon={<KeyRound />}
                    />
                    <MiniFlowNode
                        title="Bước 3"
                        desc="Deny Any Any"
                        color="red"
                        icon={<XCircle />}
                    />
                    <div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300">
                        Rule thứ tự rất quan trọng: nếu Deny Any Any đứng trên
                        Allow 443, rule Allow 443 sẽ không bao giờ có tác dụng.
                    </div>
                </div>
            </div>
        </section>
    );
}

function FirewallProcess() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Gói tin đi đến firewall",
            text: "Ví dụ người dùng ngoài Internet truy cập https://company.com. Gói tin đến firewall trước khi vào web server.",
            code: "Client Internet → Firewall → Web Server",
            color: "cyan",
            icon: <Network />,
        },
        {
            title: "Firewall đọc thông tin",
            text: "Firewall kiểm tra source IP, destination IP, protocol, port và direction.",
            code: `Source IP: 203.0.113.50
Destination IP: 10.0.1.10
Protocol: TCP
Destination Port: 443
Direction: Inbound`,
            color: "blue",
            icon: <Search />,
        },
        {
            title: "So khớp rule từ trên xuống",
            text: "Firewall đọc rule theo thứ tự. Rule đầu tiên khớp thường quyết định action.",
            code: `Rule 1: Allow Internet → Web Server TCP 443
Rule 2: Deny Internet → LAN Any
Rule 3: Deny Any → Any`,
            color: "purple",
            icon: <Settings />,
        },
        {
            title: "Thực hiện action",
            text: "Nếu Allow thì cho qua. Nếu Deny/Drop thì chặn. Có thể log hoặc alert tùy cấu hình.",
            code: `Allow → forward packet
Deny/Drop → block packet
Log → ghi sự kiện
Alert → cảnh báo admin`,
            color: "green",
            icon: <CheckCircle2 />,
        },
        {
            title: "Stateful firewall nhớ kết nối",
            text: "Firewall hiện đại còn nhớ trạng thái kết nối để phân biệt phản hồi hợp lệ với truy cập lạ từ ngoài vào.",
            code: `LAN PC → Website TCP 443: allowed outbound
Website → LAN PC response: allowed because established`,
            color: "emerald",
            icon: <Route />,
        },
    ];
    return (
        <StepSection
            number="12"
            color="cyan"
            title="Cơ chế hoạt động của firewall"
            icon={<Shield />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function StatefulSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="green"
                title="Stateful firewall nhớ trạng thái kết nối"
                icon={<Route />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Phân biệt response hợp lệ và truy cập lạ"
                        icon={<Route />}
                        color="green"
                        text="Stateful firewall không chỉ nhìn từng gói tin riêng lẻ, mà còn nhớ kết nối do ai khởi tạo. Nếu LAN mở kết nối ra Internet, response quay lại được xem là hợp lệ."
                        code={`1. LAN PC ---------- request ----------> Website
2. LAN PC <--------- response ---------- Website

Firewall nhớ: kết nối này do LAN khởi tạo.`}
                    />
                    <StatefulVisual />
                </div>
            </div>
        </section>
    );
}

function FirewallTypesSection() {
    const [active, setActive] = useState("Stateful Firewall");
    const row =
        firewallTypes.find(([name]) => name === active) || firewallTypes[1];
    const [, desc, good, bad, color, icon] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="orange"
                title="Các loại firewall phổ biến"
                icon={<Layers />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                            {firewallTypes.map(([name, , , , c]) => (
                                <ChoiceButton
                                    key={name}
                                    active={active === name}
                                    onClick={() => setActive(name)}
                                    color={c}
                                >
                                    {name}
                                </ChoiceButton>
                            ))}
                        </div>
                        <ConceptCard
                            title={active}
                            icon={icon}
                            color={color}
                            text={desc}
                            code={`Ưu điểm: ${good}
Hạn chế: ${bad}`}
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[850px] text-sm">
                                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                    <tr>
                                        <th className="p-4">Loại</th>
                                        <th className="p-4">Cách kiểm soát</th>
                                        <th className="p-4">Ưu điểm</th>
                                        <th className="p-4">Hạn chế</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firewallTypes.map(
                                        ([name, d, g, b, c], i) => (
                                            <tr
                                                key={name}
                                                onClick={() => setActive(name)}
                                                className={`${i === firewallTypes.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}
                                            >
                                                <td
                                                    className={`p-4 font-black ${colorClasses[c].text}`}
                                                >
                                                    {name}
                                                </td>
                                                <td className="p-4 text-slate-300">
                                                    {d}
                                                </td>
                                                <td className="p-4 text-slate-300">
                                                    {g}
                                                </td>
                                                <td className="p-4 text-slate-300">
                                                    {b}
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlacementSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="blue"
                title="Firewall nằm ở đâu trong hệ thống?"
                icon={<MapIcon />}
            />
            <div className="grid lg:grid-cols-3 gap-4">
                {placementRows.map(([name, desc, ex, color]) => (
                    <ConceptCard
                        key={name}
                        title={name}
                        icon={
                            name.includes("Host") ? (
                                <Laptop />
                            ) : name.includes("Network") ? (
                                <Network />
                            ) : (
                                <Globe2 />
                            )
                        }
                        color={color}
                        text={desc}
                        code={ex}
                    />
                ))}
            </div>
        </section>
    );
}

function SampleConfigsSection() {
    const [tab, setTab] = useState("web");
    const data = sampleRules[tab];
    const c = colorClasses[data.color];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="16"
                color="emerald"
                title="Một số cấu hình firewall mẫu"
                icon={<Settings />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <ChoiceButton
                        active={tab === "web"}
                        onClick={() => setTab("web")}
                        color="cyan"
                    >
                        Web public
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "db"}
                        onClick={() => setTab("db")}
                        color="purple"
                    >
                        Database
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "lan"}
                        onClick={() => setTab("lan")}
                        color="green"
                    >
                        LAN Users
                    </ChoiceButton>
                </div>
                <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
                    <div className="flex items-center gap-3 mb-5">
                        <div
                            className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring}`}
                        >
                            {React.cloneElement(data.icon, { size: 24 })}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {data.title}
                        </h3>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th className="p-4">Source</th>
                                    <th className="p-4">Destination</th>
                                    <th className="p-4">Port</th>
                                    <th className="p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.rows.map(
                                    ([src, dst, port, action], i) => (
                                        <tr
                                            key={`${src}-${dst}-${port}`}
                                            className={`${i === data.rows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}
                                        >
                                            <td className="p-4 text-slate-300">
                                                {src}
                                            </td>
                                            <td className="p-4 text-slate-300">
                                                {dst}
                                            </td>
                                            <td className="p-4 text-green-300 font-mono">
                                                {port}
                                            </td>
                                            <td
                                                className={`p-4 font-black ${action.includes("Allow") ? "text-green-300" : "text-red-300"}`}
                                            >
                                                {action}
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

function CommandPractice() {
    const [tab, setTab] = useState("windows");
    const data = commandTabs[tab];
    const c = colorClasses[data.color];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="17"
                color="green"
                title="Lệnh kiểm tra firewall cơ bản"
                icon={<Terminal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <ChoiceButton
                        active={tab === "windows"}
                        onClick={() => setTab("windows")}
                        color="blue"
                    >
                        Windows
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "ufw"}
                        onClick={() => setTab("ufw")}
                        color="green"
                    >
                        ufw
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "iptables"}
                        onClick={() => setTab("iptables")}
                        color="purple"
                    >
                        iptables/nft
                    </ChoiceButton>
                </div>
                <div className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
                    <div className="flex items-center gap-3 mb-5">
                        <div
                            className={`${c.solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${c.ring}`}
                        >
                            {React.cloneElement(data.icon, { size: 24 })}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {data.title}
                        </h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-3">
                        {data.commands.map(([label, cmd]) => (
                            <div
                                key={label}
                                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"
                            >
                                <p className="text-xs text-slate-500 font-bold uppercase mb-2">
                                    {label}
                                </p>
                                <pre className="text-green-300 font-mono text-sm whitespace-pre-wrap break-all">
                                    {cmd}
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImportantNotes() {
    const notes = [
        [
            "Firewall không thay thế mã hóa",
            "Firewall kiểm soát đường đi; TLS/mã hóa bảo vệ nội dung.",
            "cyan",
            <Lock />,
        ],
        [
            "Firewall không sửa được app viết lỗi",
            "SQL Injection vẫn cần sửa code, prepared statement, WAF và kiểm thử bảo mật.",
            "purple",
            <FileCode2 />,
        ],
        [
            "Mở port càng nhiều, rủi ro càng lớn",
            "22, 3389, 3306, 5432, 6379, 9200 không nên mở bừa ra Internet.",
            "red",
            <DoorOpen />,
        ],
        [
            "Rule thứ tự rất quan trọng",
            "Deny Any Any đặt trên Allow 443 có thể làm Allow 443 vô tác dụng.",
            "orange",
            <Layers />,
        ],
        [
            "Default deny là nguyên tắc tốt",
            "Chặn mặc định, chỉ mở thứ thật sự cần, giới hạn source IP nếu có thể.",
            "green",
            <ShieldCheck />,
        ],
        [
            "Ghi log và theo dõi",
            "Rule quan trọng nên có logging/alert để điều tra sự cố.",
            "blue",
            <Eye />,
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="18"
                color="yellow"
                title="Lưu ý quan trọng khi dùng firewall"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map(([title, desc, color, icon]) => (
                    <div
                        key={title}
                        className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}
                    >
                        <div
                            className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            {React.cloneElement(icon, { size: 24 })}
                        </div>
                        <h3 className="text-white font-black mb-2">{title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            title: "Nghĩ firewall tự mã hóa dữ liệu",
            desc: "Firewall kiểm soát lưu lượng, nhưng bản thân nó không làm HTTP thành HTTPS. TLS mới bảo vệ nội dung HTTPS.",
            fix: "Firewall kiểm soát đường đi; mã hóa bảo vệ nội dung.",
        },
        {
            title: "Mở database trực tiếp ra Internet",
            desc: "MySQL/PostgreSQL/Redis/Elasticsearch mở public là rủi ro lớn nếu không có kiểm soát rất chặt.",
            fix: "Chỉ cho app server/VPN/Admin IP cần thiết truy cập.",
        },
        {
            title: "Đặt Deny Any Any lên đầu",
            desc: "Nếu firewall đọc rule từ trên xuống, rule Allow phía dưới có thể không bao giờ chạy.",
            fix: "Đặt rule cụ thể cần Allow trước, default deny cuối.",
        },
        {
            title: "Không giới hạn source IP cho SSH/RDP",
            desc: "SSH/RDP mở cho toàn Internet dễ bị brute force và scan liên tục.",
            fix: "Chỉ allow Admin IP hoặc truy cập qua VPN/bastion.",
        },
        {
            title: "Tưởng firewall truyền thống chặn được mọi tấn công web",
            desc: "Packet/stateful firewall không hiểu payload HTTP sâu như WAF, nên có thể không chặn SQLi/XSS.",
            fix: "Dùng WAF và sửa code an toàn.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="19"
                color="red"
                title="Lỗi hiểu nhầm phổ biến"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                    <div
                        key={m.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-red-500/40 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-300 flex items-center justify-center mb-4">
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

function SummaryAndQuiz() {
    return (
        <section className="space-y-6">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-950 p-6 border-b border-slate-800">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">
                            20
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
                                Firewall kiểm soát lưu lượng mạng đi vào và đi
                                ra dựa trên rule.
                            </p>
                            <p>
                                Rule thường gồm source, destination, protocol,
                                port và action.
                            </p>
                            <p>
                                Allow/Permit là cho qua; Deny/Block/Drop là chặn
                                lại.
                            </p>
                            <p>
                                Inbound là lưu lượng đi vào; outbound là lưu
                                lượng đi ra.
                            </p>
                            <p>
                                Port giúp nhận biết dịch vụ: 22 SSH, 80 HTTP,
                                443 HTTPS, 3389 RDP, 3306 MySQL.
                            </p>
                            <p>Packet filtering lọc theo IP/port/protocol.</p>
                            <p>Stateful firewall nhớ trạng thái kết nối.</p>
                            <p>
                                Application firewall/WAF hiểu lưu lượng ứng dụng
                                như HTTP.
                            </p>
                            <p>
                                NGFW có application awareness, user policy,
                                IDS/IPS, URL filtering, threat intelligence.
                            </p>
                            <p>Default deny: chặn mặc định, chỉ mở thứ cần.</p>
                            <p>Rule thứ tự rất quan trọng.</p>
                            <p>
                                Firewall kiểm soát đường đi; mã hóa/TLS bảo vệ
                                nội dung.
                            </p>
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
        question: "Firewall dùng để làm gì?",
        options: [
            "Kiểm soát lưu lượng mạng theo rule",
            "Cấp địa chỉ IP tự động",
            "Mã hóa toàn bộ dữ liệu web",
            "Phân giải tên miền thành IP",
        ],
        correct: 0,
        explanation:
            "Firewall kiểm tra lưu lượng theo source, destination, protocol, port, direction và action để cho phép hoặc chặn.",
    },
    {
        question: "Inbound traffic là gì?",
        options: [
            "Lưu lượng đi vào hệ thống/mạng/máy chủ",
            "Lưu lượng đi ra khỏi mạng",
            "Mã hóa dữ liệu",
            "Tên miền website",
        ],
        correct: 0,
        explanation:
            "Inbound là traffic từ ngoài đi vào, ví dụ Internet truy cập Web Server công ty.",
    },
    {
        question: "Stateful firewall khác packet filtering cơ bản ở điểm nào?",
        options: [
            "Nó nhớ trạng thái kết nối để nhận biết response hợp lệ",
            "Nó chỉ chạy trên trình duyệt",
            "Nó không dùng rule",
            "Nó thay thế TLS",
        ],
        correct: 0,
        explanation:
            "Stateful firewall lưu trạng thái phiên/kết nối, nên biết gói quay lại có thuộc kết nối đã được cho phép hay không.",
    },
    {
        question: "Rule nào nên đứng cuối trong mô hình bảo mật tốt?",
        options: [
            "Deny Any Any",
            "Allow Any Any",
            "Allow Database from Internet",
            "Disable logging",
        ],
        correct: 0,
        explanation:
            "Default deny thường được đặt cuối để chặn mọi thứ chưa được allow rõ ràng.",
    },
    {
        question: "Port 443 thường dùng cho dịch vụ nào?",
        options: ["HTTPS", "SSH", "MySQL", "Remote Desktop"],
        correct: 0,
        explanation: "Port TCP 443 thường dùng cho HTTPS — HTTP chạy trên TLS.",
    },
    {
        question:
            "Database Server chỉ nên cho ai truy cập trong ví dụ công ty?",
        options: [
            "Web Server qua port database cần thiết, không mở trực tiếp Internet",
            "Bất kỳ ai từ Internet",
            "Toàn bộ guest WiFi",
            "Chỉ trình duyệt người dùng cuối",
        ],
        correct: 0,
        explanation:
            "Database nên nằm nội bộ; Web Server có thể truy cập MySQL/PostgreSQL nếu cần, còn Internet nên bị deny.",
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
        } else setCurrentQ("finished");
    };
    const resetQuiz = () => {
        setCurrentQ(0);
        setSelected(null);
        setShowResult(false);
        setScore(0);
    };
    if (finished)
        return (
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]">
                <div className="text-6xl mb-4">
                    {score === questions.length ? "🏆" : "👏"}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                    Hoàn thành bài Firewall!
                </h4>
                <p className="text-slate-400 mb-6">
                    Bạn trả lời đúng{" "}
                    <strong className="text-cyan-400">
                        {score}/{questions.length}
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
    return (
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[420px]">
            <div className="flex justify-between items-center mb-4 text-sm font-medium">
                <span className="text-cyan-400">
                    Câu hỏi {currentQ + 1}/{questions.length}
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
                        {currentQ < questions.length - 1
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
                Bài tiếp theo học về VPN — mạng riêng ảo và đường hầm bảo mật
                qua Internet.
            </p>
            <Link
                to="/phan-9-4"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 9.4 — VPN: Mạng riêng ảo{" "}
                <ChevronRight size={20} />
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

function ConceptCard({ title, icon, color, text, code, compact = false }) {
    const c = colorClasses[color];
    return (
        <div
            className={`${c.bg} ${c.border} border rounded-3xl ${compact ? "p-5" : "p-6"}`}
        >
            <div
                className={`${c.solid} text-white ${compact ? "w-12 h-12" : "w-14 h-14"} rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}
            >
                {React.cloneElement(icon, { size: compact ? 24 : 28 })}
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

function ChoiceButton({ active, onClick, color, children }) {
    const c = colorClasses[color] || colorClasses.cyan;
    return (
        <button
            onClick={onClick}
            className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${active ? `${c.solid} text-white shadow-lg ${c.ring}` : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}
        >
            {children}
        </button>
    );
}

function MiniFlowNode({ title, desc, color, icon }) {
    const c = colorClasses[color];
    return (
        <div
            className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}
        >
            <div
                className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}
            >
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <div>
                <p className="text-white font-black">{title}</p>
                <p className={`${c.text} text-sm mt-1 font-mono break-all`}>
                    {desc}
                </p>
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

function MapIcon() {
    return <Network />;
}

function HeroFirewallVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Source"
                    value="IP nguồn"
                    color="cyan"
                    icon={<Laptop />}
                />
                <MiniCard
                    title="Port"
                    value="443"
                    color="orange"
                    icon={<TrafficCone />}
                />
                <MiniCard
                    title="Action"
                    value="Allow/Deny"
                    color="green"
                    icon={<ShieldCheck />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">
                    Internet ---&gt; [Firewall] ---&gt; LAN
                </p>
                <p className="text-green-300">Allow TCP 443 to Web Server</p>
                <p className="text-red-300">Deny TCP 3306 from Internet</p>
                <p className="text-orange-300">Deny Any Any at the end</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Packet"
                    value="IP/Port"
                    color="cyan"
                    icon={<Filter />}
                />
                <MiniCard
                    title="Stateful"
                    value="session"
                    color="green"
                    icon={<Route />}
                />
                <MiniCard
                    title="WAF/NGFW"
                    value="app aware"
                    color="purple"
                    icon={<FileCode2 />}
                />
            </div>
        </div>
    );
}

function SimpleFirewallVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="lưu lượng bên ngoài"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Firewall"
                desc="kiểm tra rule"
                color="orange"
                icon={<Shield />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Mạng nội bộ"
                desc="LAN / Server / Database"
                color="green"
                icon={<Network />}
            />
        </div>
    );
}

function InboundOutboundVisual({ active }) {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="bên ngoài"
                color="cyan"
                icon={<Globe2 />}
            />
            {active === "inbound" ? (
                <ArrowRight className="mx-auto text-orange-300 rotate-90" />
            ) : (
                <ArrowRight className="mx-auto text-cyan-300 -rotate-90" />
            )}
            <MiniFlowNode
                title="Firewall"
                desc="điểm kiểm soát"
                color="orange"
                icon={<Shield />}
            />
            {active === "inbound" ? (
                <ArrowRight className="mx-auto text-orange-300 rotate-90" />
            ) : (
                <ArrowRight className="mx-auto text-cyan-300 -rotate-90" />
            )}
            <MiniFlowNode
                title="LAN / Server"
                desc={active === "inbound" ? "đích nhận" : "nguồn gửi"}
                color="green"
                icon={<Server />}
            />
            <div
                className={`${active === "inbound" ? colorClasses.orange.bg + " " + colorClasses.orange.border + " text-orange-300" : colorClasses.cyan.bg + " " + colorClasses.cyan.border + " text-cyan-300"} border rounded-2xl p-4 text-sm font-mono`}
            >
                {active === "inbound"
                    ? "Inbound: Internet → Firewall → LAN/Server"
                    : "Outbound: LAN/Server → Firewall → Internet"}
            </div>
        </div>
    );
}

function CompanyNetworkVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="chỉ HTTPS vào web"
                color="cyan"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="Firewall"
                desc="rule kiểm soát"
                color="orange"
                icon={<Shield />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="Web Server"
                    value="10.0.1.10"
                    color="green"
                    icon={<Server />}
                />
                <MiniCard
                    title="Database"
                    value="10.0.2.20"
                    color="purple"
                    icon={<Database />}
                />
                <MiniCard
                    title="LAN Users"
                    value="10.0.3.0/24"
                    color="blue"
                    icon={<Users />}
                />
            </div>
        </div>
    );
}

function FirewallTopologyVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="lưu lượng vào/ra"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Firewall"
                desc="điểm kiểm soát giữa các vùng mạng"
                color="orange"
                icon={<Shield />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="Web Server"
                    value="DMZ/Public service"
                    color="green"
                    icon={<Server />}
                />
                <MiniCard
                    title="LAN"
                    value="máy nhân viên"
                    color="blue"
                    icon={<Laptop />}
                />
                <MiniCard
                    title="Database"
                    value="nội bộ"
                    color="purple"
                    icon={<Database />}
                />
            </div>
        </div>
    );
}

function StatefulVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode
                title="1. LAN PC gửi request"
                desc="outbound TCP 443"
                color="cyan"
                icon={<Laptop />}
            />
            <MiniFlowNode
                title="2. Firewall ghi trạng thái"
                desc="connection established"
                color="green"
                icon={<Database />}
            />
            <MiniFlowNode
                title="3. Website trả response"
                desc="được phép quay lại"
                color="emerald"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="4. Internet tự mở vào LAN"
                desc="bị chặn nếu không có rule"
                color="red"
                icon={<XCircle />}
            />
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
