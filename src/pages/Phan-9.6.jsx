import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BadgeCheck,
    BookOpen,
    Building2,
    Camera,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Cloud,
    Code2,
    Database,
    DoorOpen,
    Eye,
    Filter,
    Globe2,
    HardDrive,
    Home,
    KeyRound,
    Laptop,
    Layers,
    Lock,
    Map,
    Network,
    PlugZap,
    Radar,
    RefreshCw,
    Route,
    Router,
    Search,
    Server,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    Split,
    Terminal,
    TrafficCone,
    UserCheck,
    Users,
    Wifi,
    XCircle,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const FileServer = Server;
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

const zoneRows = [
    [
        "Internet",
        "Mạng công cộng",
        "Người dùng ngoài, attacker",
        "Không tin cậy",
        "red",
    ],
    [
        "DMZ",
        "Dịch vụ public",
        "Web, Mail, DNS, Reverse Proxy",
        "Tin cậy thấp",
        "orange",
    ],
    [
        "User LAN",
        "Thiết bị nhân viên",
        "PC, laptop, máy in",
        "Trung bình",
        "cyan",
    ],
    [
        "Server Zone",
        "Server nội bộ",
        "App server, file server",
        "Cao hơn",
        "blue",
    ],
    [
        "Database Zone",
        "Dữ liệu nhạy cảm",
        "MySQL, PostgreSQL, SQL Server",
        "Rất cao",
        "purple",
    ],
    [
        "Management Zone",
        "Quản trị hệ thống",
        "Admin PC, jump server",
        "Rất cao",
        "green",
    ],
    [
        "Guest WiFi",
        "Khách truy cập Internet",
        "Điện thoại/laptop khách",
        "Thấp",
        "yellow",
    ],
    ["IoT Zone", "Thiết bị IoT", "Camera, cảm biến, TV", "Thấp", "emerald"],
];

const firewallRules = [
    [
        "1",
        "Internet",
        "DMZ Web Server",
        "TCP 443",
        "Allow",
        "Cho truy cập website HTTPS",
        "green",
    ],
    [
        "2",
        "Internet",
        "DMZ Web Server",
        "TCP 80",
        "Allow/Redirect",
        "Cho HTTP hoặc redirect sang HTTPS",
        "yellow",
    ],
    [
        "3",
        "Internet",
        "LAN",
        "Any",
        "Deny",
        "Chặn truy cập trực tiếp LAN",
        "red",
    ],
    [
        "4",
        "Internet",
        "Database Zone",
        "Any",
        "Deny",
        "Không mở database ra Internet",
        "red",
    ],
    [
        "5",
        "DMZ Web",
        "App Server",
        "TCP 8080",
        "Allow",
        "Web gọi app backend",
        "green",
    ],
    [
        "6",
        "App Server",
        "Database",
        "TCP 3306",
        "Allow",
        "App truy cập database",
        "green",
    ],
    ["7", "DMZ", "LAN User", "Any", "Deny", "DMZ không được quét LAN", "red"],
    [
        "8",
        "Guest WiFi",
        "Internet",
        "TCP 80,443, UDP/TCP 53",
        "Allow",
        "Khách được web/DNS",
        "green",
    ],
    [
        "9",
        "Guest WiFi",
        "LAN/Server",
        "Any",
        "Deny",
        "Khách không vào nội bộ",
        "red",
    ],
    ["10", "Any", "Any", "Any", "Deny", "Chặn mặc định", "red"],
];

const modelRows = [
    [
        "Single Firewall DMZ",
        "Một firewall có nhiều interface",
        "Dễ triển khai, chi phí thấp",
        "Firewall là điểm tập trung rất quan trọng",
        "cyan",
    ],
    [
        "Dual Firewall DMZ",
        "DMZ nằm giữa hai firewall",
        "Tách lớp bảo vệ rõ hơn",
        "Chi phí và quản trị phức tạp hơn",
        "purple",
    ],
    [
        "Cloud DMZ",
        "Public/private subnet, SG/NACL, LB, WAF",
        "Phù hợp cloud, tự động hóa tốt",
        "Cần hiểu dịch vụ cloud và rule kỹ",
        "green",
    ],
];

const components = [
    ["DMZ", "Vùng trung gian cho dịch vụ public", "orange"],
    ["Firewall", "Kiểm soát luồng giữa các vùng", "cyan"],
    ["VPN", "Truy cập từ xa an toàn", "green"],
    ["IDS", "Phát hiện dấu hiệu tấn công", "purple"],
    ["IPS", "Chặn traffic nguy hiểm", "red"],
    ["WAF", "Bảo vệ ứng dụng web", "blue"],
    ["VLAN", "Tách mạng logic", "yellow"],
    ["SIEM", "Gom log và phân tích sự kiện", "emerald"],
];

const commandTabs = {
    route: {
        title: "Kiểm tra route",
        color: "cyan",
        icon: <Route />,
        commands: [
            ["Windows", "route print"],
            ["Linux/macOS", "ip route\nnetstat -rn"],
        ],
    },
    port: {
        title: "Kiểm tra port",
        color: "green",
        icon: <TrafficCone />,
        commands: [
            ["Netcat", "nc -vz company.com 443"],
            ["Telnet", "telnet company.com 443"],
            ["Kết quả", "Connection succeeded\nConnection timed out / refused"],
        ],
    },
    firewall: {
        title: "Kiểm tra firewall Linux",
        color: "orange",
        icon: <Shield />,
        commands: [
            ["UFW", "sudo ufw status verbose"],
            ["iptables", "sudo iptables -L -n -v"],
            ["nftables", "sudo nft list ruleset"],
        ],
    },
    vlan: {
        title: "Kiểm tra VLAN Cisco",
        color: "purple",
        icon: <Split />,
        commands: [
            ["VLAN", "show vlan brief"],
            ["Trunk", "show interfaces trunk"],
            [
                "Interface config",
                "show running-config interface gigabitEthernet 0/1",
            ],
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
                            <Split className="text-cyan-400" size={24} />
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
                        Bài 9.6
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatIsDmz />
                <WhyDmz />
                <SecureArchitecture />
                <NetworkSegmentation />
                <LeastPrivilege />
                <RealWorldExamples />
                <TechnicalExample />
                <BasicDmzDiagram />
                <MultiZoneDiagram />
                <ZoneTable />
                <FirewallRuleTable />
                <ArchitectureProcess />
                <DmzModels />
                <SmallCompanyDesign />
                <CommonArchitectureMistakes />
                <DmzDoesNotReplace />
                <CommandPractice />
                <MonitoringSection />
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
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-cyan-300">
                        <Layers size={16} /> Network Security — Secure
                        Architecture
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        DMZ & kiến trúc mạng
                        <span className="block text-cyan-400">an toàn</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        DMZ là vùng đệm cho dịch vụ public. Kiến trúc mạng an
                        toàn chia hệ thống thành vùng rõ ràng, áp firewall rule
                        chặt, quản trị qua VPN/MFA và giám sát bằng log/IDS/IPS.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-orange-300">DMZ</span> = vùng
                            trung gian cho dịch vụ public.
                        </p>
                        <p>
                            <span className="text-cyan-300">Segmentation</span>{" "}
                            = chia mạng thành vùng.
                        </p>
                        <p>
                            <span className="text-green-300">
                                Least privilege
                            </span>{" "}
                            = chỉ mở đúng quyền cần dùng.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroDmzVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu DMZ là gì và vì sao cần DMZ trong thiết kế mạng an toàn.",
        "Phân biệt Internet, DMZ, LAN nội bộ và Server Zone.",
        "Hiểu vì sao không nên đặt web server, mail server, database chung một vùng mạng.",
        "Biết dùng firewall, VLAN, IDS/IPS, VPN để chia vùng và kiểm soát truy cập.",
        "Biết đọc sơ đồ kiến trúc mạng an toàn ở mức cơ bản.",
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

function WhatIsDmz() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="orange"
                title="DMZ là gì?"
                icon={<Split />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-orange-300">DMZ</strong> là
                            viết tắt của <strong>Demilitarized Zone</strong>.
                            Trong mạng máy tính, DMZ là vùng mạng trung gian nằm
                            giữa Internet và mạng nội bộ LAN.
                        </p>
                        <ConceptCard
                            title="Khu vực đệm cho dịch vụ public"
                            icon={<DoorOpen />}
                            color="orange"
                            text="DMZ dùng để đặt các máy chủ cần cho người ngoài truy cập, nhưng vẫn tách khỏi mạng nội bộ quan trọng."
                            code="Web Server
Mail Server
DNS Server public
Reverse Proxy
VPN Gateway
Load Balancer"
                            compact
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <DmzSimpleVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyDmz() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="red"
                title="Vì sao cần DMZ?"
                icon={<ShieldAlert />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Không có DMZ"
                    icon={<XCircle />}
                    color="red"
                    text="Nếu web server public nằm chung mạng với máy nhân viên, file server và database, khi web server bị hack, attacker có thể dễ đi sâu vào mạng nội bộ."
                    code="Internet → Web Server nằm chung LAN với máy nhân viên và database

Web Server bị hack
→ attacker quét LAN
→ tấn công database/file server/máy nhân viên"
                />
                <ConceptCard
                    title="Có DMZ"
                    icon={<ShieldCheck />}
                    color="green"
                    text="Internet được vào DMZ Web Server theo port cần thiết. DMZ vào LAN/Database bị kiểm soát rất chặt. Nếu server public bị tấn công, thiệt hại được giới hạn hơn."
                    code="Internet → DMZ Web Server
DMZ Web Server → chỉ được truy cập rất hạn chế vào App/Database
Internet → LAN/Database: Deny"
                />
            </div>
        </section>
    );
}

function SecureArchitecture() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="purple"
                title="Kiến trúc mạng an toàn là gì?"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Thiết kế theo vùng, quyền và rủi ro"
                        icon={<Network />}
                        color="purple"
                        text="Kiến trúc mạng an toàn là cách thiết kế mạng sao cho các vùng tách biệt rõ, mỗi vùng chỉ được truy cập đúng mức cần thiết, dữ liệu quan trọng không đặt trực tiếp ra Internet và có giám sát/log."
                        code="Internet
DMZ
LAN User
Server Zone
Database Zone
Management Zone
Guest WiFi
IoT Zone"
                    />
                    <SecureArchitectureVisual />
                </div>
            </div>
        </section>
    );
}

function NetworkSegmentation() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="cyan"
                title="Network Segmentation là gì?"
                icon={<Split />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Chia mạng lớn thành nhiều vùng nhỏ"
                    icon={<Split />}
                    color="cyan"
                    text="Thay vì để tất cả trong một mạng duy nhất, ta chia thành nhiều subnet/VLAN để kiểm soát truy cập và giảm rủi ro lan truyền."
                    code="LAN User:        10.0.10.0/24
Server Zone:     10.0.20.0/24
Database Zone:   10.0.30.0/24
Guest WiFi:      10.0.40.0/24
Management:      10.0.50.0/24
DMZ:             10.0.100.0/24"
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
                    <MiniFlowNode
                        title="Dễ kiểm soát truy cập"
                        desc="rule rõ theo vùng"
                        color="cyan"
                        icon={<Shield />}
                    />
                    <MiniFlowNode
                        title="Giảm lan truyền malware"
                        desc="không đi tự do toàn mạng"
                        color="red"
                        icon={<ShieldAlert />}
                    />
                    <MiniFlowNode
                        title="Giới hạn broadcast"
                        desc="mạng gọn hơn"
                        color="purple"
                        icon={<Network />}
                    />
                    <MiniFlowNode
                        title="Dễ giám sát sự cố"
                        desc="log theo vùng"
                        color="green"
                        icon={<Eye />}
                    />
                </div>
            </div>
        </section>
    );
}

function LeastPrivilege() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="green"
                title="Principle of Least Privilege"
                icon={<KeyRound />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Đặc quyền tối thiểu"
                        icon={<KeyRound />}
                        color="green"
                        text="Ai cần gì thì chỉ được quyền đúng phần đó, không hơn. Trong mạng, rule phải cụ thể theo source, destination, port, action."
                        code="Web Server chỉ được truy cập Database đúng port cần thiết.
Nhân viên kế toán chỉ được vào server kế toán.
Guest WiFi chỉ được ra Internet, không được vào LAN.
Admin chỉ SSH/RDP qua VPN hoặc Management Zone."
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                        <MiniFlowNode
                            title="Không tốt"
                            desc="Any → Any → Allow"
                            color="red"
                            icon={<XCircle />}
                        />
                        <MiniFlowNode
                            title="Tốt hơn"
                            desc="Internet → Web TCP 443: Allow"
                            color="green"
                            icon={<CheckCircle2 />}
                        />
                        <MiniFlowNode
                            title="Tốt hơn"
                            desc="Web → DB TCP 3306: Allow"
                            color="green"
                            icon={<CheckCircle2 />}
                        />
                        <MiniFlowNode
                            title="Mặc định"
                            desc="Any → Any: Deny"
                            color="orange"
                            icon={<ShieldAlert />}
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
                number="7"
                color="blue"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Công ty có quầy lễ tân"
                    icon={<Building2 />}
                    color="blue"
                    text="Internet giống người ngoài đường. DMZ giống quầy lễ tân. LAN là khu làm việc của nhân viên. Database Zone là phòng hồ sơ mật. Khách được vào lễ tân nhưng không tự vào phòng nhân viên."
                    code="Internet → người ngoài đường
DMZ → quầy lễ tân
LAN → khu nhân viên
Database Zone → phòng hồ sơ mật
Management Zone → phòng kỹ thuật"
                />
                <ConceptCard
                    title="Nhà hàng có khu khách và khu bếp"
                    icon={<Home />}
                    color="orange"
                    text="Khách ngồi khu ăn uống, nhân viên mới vào bếp, kho thực phẩm chỉ quản lý vào. Web public không nên chung vùng với database; Guest WiFi không nên thấy máy kế toán."
                    code="Khu khách ≈ DMZ/public
Khu bếp ≈ Server Zone
Kho/két tiền ≈ Database Zone
Nhân viên quản lý ≈ Management Zone"
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
                title="Ví dụ kỹ thuật: website bán hàng"
                icon={<Server />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Luồng hợp lệ và không hợp lệ"
                        icon={<Settings />}
                        color="cyan"
                        text="Website bán hàng nên tách web public, app backend, database, admin và user/guest thành các vùng khác nhau."
                        code="Web Server:      10.0.100.10  DMZ
App Server:      10.0.20.10   Server Zone
Database Server: 10.0.30.10   Database Zone
Admin PC:        10.0.50.10   Management Zone
User LAN:        10.0.10.0/24
Guest WiFi:      10.0.40.0/24

Hợp lệ:
Internet → Web TCP 443
Web → App TCP 8080
App → Database TCP 3306
Admin → Server qua VPN/SSH/RDP

Không hợp lệ:
Internet → Database
Guest WiFi → LAN
User LAN → Database trực tiếp
Web Server → toàn bộ LAN"
                    />
                    <EcommerceVisual />
                </div>
            </div>
        </section>
    );
}

function BasicDmzDiagram() {
    return (
        <DiagramSection
            number="9"
            color="orange"
            title="Sơ đồ DMZ cơ bản"
            icon={<Split />}
            diagram={<BasicDmzVisual />}
            note="Internet được vào DMZ theo port cần thiết. Internet không được vào LAN trực tiếp. DMZ vào LAN rất hạn chế. LAN ra Internet theo chính sách."
        />
    );
}

function MultiZoneDiagram() {
    return (
        <DiagramSection
            number="10"
            color="purple"
            title="Sơ đồ kiến trúc nhiều vùng an toàn hơn"
            icon={<Network />}
            diagram={<MultiZoneVisual />}
            note="Kiến trúc nhiều vùng giúp giới hạn thiệt hại nếu một vùng bị chiếm, đồng thời làm rule firewall và logging rõ ràng hơn."
        />
    );
}

function DiagramSection({ number, color, title, icon, diagram, note }) {
    return (
        <section className="space-y-6">
            <SectionTitle
                number={number}
                color={color}
                title={title}
                icon={icon}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                {diagram}
                <div
                    className={`mt-6 ${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 text-sm ${colorClasses[color].text}`}
                >
                    {note}
                </div>
            </div>
        </section>
    );
}

function ZoneTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="green"
                title="Bảng phân vùng mạng"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[880px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Vùng mạng</th>
                                <th className="p-4">Mục đích</th>
                                <th className="p-4">Ví dụ thiết bị</th>
                                <th className="p-4">Mức độ tin cậy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zoneRows.map(
                                (
                                    [zone, purpose, examples, trust, color],
                                    i,
                                ) => (
                                    <tr
                                        key={zone}
                                        className={`${i === zoneRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td
                                            className={`p-4 font-black ${colorClasses[color].text}`}
                                        >
                                            {zone}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {purpose}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {examples}
                                        </td>
                                        <td className="p-4 text-green-300">
                                            {trust}
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

function FirewallRuleTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="cyan"
                title="Bảng rule firewall mẫu"
                icon={<Shield />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[920px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="p-4">Source</th>
                                <th className="p-4">Destination</th>
                                <th className="p-4">Port/Protocol</th>
                                <th className="p-4">Action</th>
                                <th className="p-4">Ý nghĩa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {firewallRules.map(
                                (
                                    [n, src, dst, port, action, meaning, color],
                                    i,
                                ) => (
                                    <tr
                                        key={n}
                                        className={`${i === firewallRules.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
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
                                            {port}
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

function ArchitectureProcess() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Chia hệ thống thành các vùng",
            text: "Xác định nhóm tài nguyên theo mức độ rủi ro và mục đích sử dụng. Không để mọi thứ chung một mạng.",
            code: `Public services → DMZ
Máy nhân viên → User LAN
Database → Database Zone
Thiết bị quản trị → Management Zone
Khách → Guest WiFi
Camera/TV/IoT → IoT Zone`,
            color: "cyan",
            icon: <Split />,
        },
        {
            title: "Gán subnet hoặc VLAN",
            text: "Subnet/VLAN giúp tách mạng logic trên cùng hệ thống switch và dễ áp rule firewall.",
            code: `VLAN 10 - User LAN       - 10.0.10.0/24
VLAN 20 - Server Zone    - 10.0.20.0/24
VLAN 30 - Database Zone  - 10.0.30.0/24
VLAN 40 - Guest WiFi     - 10.0.40.0/24
VLAN 50 - Management     - 10.0.50.0/24
VLAN 100 - DMZ           - 10.0.100.0/24`,
            color: "purple",
            icon: <Network />,
        },
        {
            title: "Đặt firewall giữa các vùng",
            text: "Firewall kiểm soát traffic đi giữa Internet, DMZ, Server Zone, Database Zone, User LAN, Guest WiFi và Management Zone.",
            code: `Internet ↔ DMZ
DMZ ↔ Server Zone
Server Zone ↔ Database Zone
User LAN ↔ Server Zone
Guest WiFi ↔ Internet
Management Zone ↔ Server`,
            color: "orange",
            icon: <Shield />,
        },
        {
            title: "Chỉ mở luồng cần thiết",
            text: "Hỏi: luồng này có thật sự cần cho nghiệp vụ không? Nếu không cần, chặn.",
            code: `Cần:
Internet → Web Server TCP 443
Web Server → App Server TCP 8080
App Server → Database TCP 3306

Không cần:
Internet → Database
Web Server → User LAN
Guest WiFi → Server Zone`,
            color: "green",
            icon: <CheckCircle2 />,
        },
        {
            title: "Thêm VPN cho quản trị từ xa",
            text: "Admin không nên SSH/RDP trực tiếp từ Internet vào server. Tốt hơn là VPN + MFA → Management Zone → Jump Server → Server.",
            code: `Admin Laptop
    |
  VPN + MFA
    |
[VPN Gateway]
    |
Management Zone
    |
Jump Server
    |
Server nội bộ`,
            color: "blue",
            icon: <Route />,
        },
        {
            title: "Đặt IDS/IPS/WAF phù hợp",
            text: "Firewall kiểm soát rule; WAF bảo vệ web app; IDS phát hiện; IPS chặn; SIEM gom log và phân tích tập trung.",
            code: `Internet → Firewall → WAF/IPS → DMZ Web Server
DMZ → IDS/IPS → Server Zone
Server Zone → IDS/IPS → Database Zone`,
            color: "red",
            icon: <Radar />,
        },
        {
            title: "Ghi log và giám sát",
            text: "Kiến trúc an toàn không chỉ chặn, mà còn phải nhìn thấy chuyện gì đang xảy ra.",
            code: `Firewall allow/deny logs
VPN login logs
IDS/IPS alerts
Web server access logs
Database audit logs
Authentication logs
Endpoint security logs
DNS logs`,
            color: "emerald",
            icon: <Eye />,
        },
    ];
    return (
        <StepSection
            number="13"
            color="cyan"
            title="Cơ chế thiết kế kiến trúc mạng an toàn"
            icon={<Settings />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function DmzModels() {
    const [active, setActive] = useState("Single Firewall DMZ");
    const row = modelRows.find(([name]) => name === active) || modelRows[0];
    const [, desc, pros, cons, color] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="purple"
                title="Các mô hình DMZ phổ biến"
                icon={<Layers />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                            {modelRows.map(([name, , , , c]) => (
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
                            icon={
                                active.includes("Cloud") ? (
                                    <Cloud />
                                ) : (
                                    <Shield />
                                )
                            }
                            color={color}
                            text={desc}
                            code={`Ưu điểm: ${pros}
Nhược điểm: ${cons}`}
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        {active.includes("Single") ? (
                            <SingleFirewallVisual />
                        ) : active.includes("Dual") ? (
                            <DualFirewallVisual />
                        ) : (
                            <CloudDmzVisual />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SmallCompanyDesign() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="green"
                title="Ví dụ kiến trúc an toàn cho công ty nhỏ"
                icon={<Building2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 items-start">
                    <ConceptCard
                        title="Công ty có website, database, nhân viên, WiFi khách, camera, admin IT"
                        icon={<Building2 />}
                        color="green"
                        text="Công ty nhỏ cũng nên tách ít nhất: LAN, Guest, Server/DMZ, Management và IoT nếu có."
                        code={`Internet
   |
[Firewall/Router]
   |
   +--- DMZ VLAN 100: Web Server / Reverse Proxy
   +--- LAN VLAN 10: Máy nhân viên
   +--- Server VLAN 20: File Server / App Server
   +--- DB VLAN 30: Database
   +--- Guest VLAN 40: WiFi khách
   +--- IoT VLAN 60: Camera / TV / IoT
   +--- Mgmt VLAN 50: Admin PC / Switch / AP management`}
                    />
                    <SmallCompanyVisual />
                </div>
            </div>
        </section>
    );
}

function CommonArchitectureMistakes() {
    const mistakes = [
        {
            title: "Đặt database trực tiếp ra Internet",
            desc: "Không nên mở Internet → Database TCP 3306/5432. Database chỉ nên nhận kết nối từ app server được phép.",
            fix: "Internet → Web/App → Database.",
        },
        {
            title: "Guest WiFi chung mạng với LAN",
            desc: "Nếu khách thấy được máy in, NAS, máy kế toán, file server thì thiết kế chưa an toàn.",
            fix: "Guest WiFi VLAN riêng, chỉ ra Internet, chặn vào LAN/Server.",
        },
        {
            title: "Camera/IoT chung mạng với server quan trọng",
            desc: "Thiết bị IoT thường bảo mật yếu hơn. Nếu chung mạng với server quan trọng, rủi ro tăng.",
            fix: "IoT VLAN riêng, chặn vào LAN/DB/Management.",
        },
        {
            title: "Mở SSH/RDP trực tiếp ra Internet",
            desc: "0.0.0.0/0 → Server TCP 22/3389 dễ bị scan, brute force và khai thác lỗ hổng.",
            fix: "Admin → VPN + MFA → Jump Server → Server.",
        },
        {
            title: "Rule firewall quá rộng",
            desc: "Any → Any → Allow, LAN → Server Zone → Any, DMZ → LAN → Any đều rất nguy hiểm.",
            fix: "Source cụ thể, destination cụ thể, port cụ thể, action cụ thể.",
        },
        {
            title: "Không có logging/monitoring",
            desc: "Không có log thì khó biết attacker vào từ đâu, đi qua rule nào, máy nào bị ảnh hưởng.",
            fix: "Bật log firewall, VPN, IDS/IPS, web, database, auth, DNS.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="16"
                color="red"
                title="Những lỗi kiến trúc mạng thường gặp"
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

function DmzDoesNotReplace() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="17"
                color="orange"
                title="DMZ có thay thế firewall, VPN, IDS/IPS không?"
                icon={<CircleHelp />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    Không. DMZ là mô hình phân vùng mạng, còn
                    firewall/VPN/IDS/IPS/WAF/VLAN/SIEM là các công cụ và lớp
                    kiểm soát đi cùng.
                </p>
                <div className="grid md:grid-cols-4 gap-3">
                    {components.map(([name, role, color]) => (
                        <MiniFlowNode
                            key={name}
                            title={name}
                            desc={role}
                            color={color}
                            icon={getComponentIcon(name)}
                        />
                    ))}
                </div>
                <div className="mt-6 bg-orange-500/10 border border-orange-400/40 rounded-2xl p-4 text-orange-300 font-mono text-sm">
                    DMZ cần đi cùng firewall rule, segmentation, monitoring và
                    phân quyền thì mới hiệu quả.
                </div>
            </div>
        </section>
    );
}

function CommandPractice() {
    const [tab, setTab] = useState("route");
    const data = commandTabs[tab];
    const c = colorClasses[data.color];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="18"
                color="green"
                title="Một số lệnh / kiểm tra thực tế"
                icon={<Terminal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <ChoiceButton
                        active={tab === "route"}
                        onClick={() => setTab("route")}
                        color="cyan"
                    >
                        Route
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "port"}
                        onClick={() => setTab("port")}
                        color="green"
                    >
                        Port
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "firewall"}
                        onClick={() => setTab("firewall")}
                        color="orange"
                    >
                        Firewall
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "vlan"}
                        onClick={() => setTab("vlan")}
                        color="purple"
                    >
                        VLAN
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

function MonitoringSection() {
    const events = [
        [
            "Port scan DMZ",
            "Một IP ngoài Internet quét nhiều port DMZ",
            "orange",
            <Search />,
        ],
        [
            "DMZ cố vào LAN",
            "Web Server DMZ cố kết nối sang nhiều máy LAN",
            "red",
            <ShieldAlert />,
        ],
        [
            "VPN lạ",
            "Tài khoản VPN đăng nhập từ quốc gia lạ",
            "purple",
            <Route />,
        ],
        [
            "Database bất thường",
            "Database có nhiều truy vấn bất thường",
            "cyan",
            <Database />,
        ],
        [
            "Guest cố vào Server",
            "Guest WiFi cố truy cập Server Zone",
            "yellow",
            <Wifi />,
        ],
        [
            "IoT gọi ra ngoài",
            "Camera gửi dữ liệu đến IP lạ",
            "green",
            <Camera />,
        ],
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="19"
                color="blue"
                title="Ghi log và giám sát sự cố"
                icon={<Eye />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map(([title, desc, color, icon]) => (
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
                                DMZ là vùng mạng trung gian cho dịch vụ public.
                            </p>
                            <p>
                                DMZ giúp giảm rủi ro cho LAN nếu server public
                                bị tấn công.
                            </p>
                            <p>
                                Network Segmentation là chia mạng thành nhiều
                                vùng để kiểm soát và giảm rủi ro.
                            </p>
                            <p>
                                Least Privilege là chỉ mở đúng quyền cần dùng,
                                còn lại chặn.
                            </p>
                            <p>
                                Internet không được vào LAN/Database trực tiếp.
                            </p>
                            <p>
                                Web public nên ở DMZ; database nên ở Database
                                Zone riêng.
                            </p>
                            <p>
                                Guest WiFi và IoT nên tách khỏi
                                LAN/Server/Management.
                            </p>
                            <p>
                                Admin nên vào qua VPN + MFA + Jump
                                Server/Management Zone.
                            </p>
                            <p>
                                Single Firewall DMZ dễ triển khai; Dual Firewall
                                DMZ tách lớp rõ hơn.
                            </p>
                            <p>
                                Cloud DMZ dùng public/private subnet, security
                                group, NACL, load balancer, WAF.
                            </p>
                            <p>
                                DMZ không thay thế firewall, VPN, IDS/IPS, WAF,
                                VLAN hoặc SIEM.
                            </p>
                            <p>Kiến trúc an toàn cần logging và monitoring.</p>
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
        question: "DMZ trong mạng máy tính dùng để làm gì?",
        options: [
            "Là vùng trung gian để đặt dịch vụ public, tách khỏi LAN nội bộ",
            "Cấp IP tự động cho máy khách",
            "Thay thế hoàn toàn firewall",
            "Mã hóa dữ liệu HTTPS",
        ],
        correct: 0,
        explanation:
            "DMZ là vùng đệm cho dịch vụ public như web/mail/DNS, giúp không đặt chúng chung trực tiếp với LAN quan trọng.",
    },
    {
        question:
            "Vì sao không nên đặt Web Server public và Database Server chung vùng mở ra Internet?",
        options: [
            "Nếu web bị hack, attacker có thể dễ tiếp cận database; database không nên public",
            "Vì database chỉ chạy trên WiFi",
            "Vì web server không dùng TCP",
            "Vì DMZ làm database chạy chậm",
        ],
        correct: 0,
        explanation:
            "Web public có rủi ro bị tấn công cao. Database chứa dữ liệu nhạy cảm nên phải tách vùng và chỉ nhận kết nối từ app/web được phép.",
    },
    {
        question: "Network Segmentation là gì?",
        options: [
            "Chia mạng lớn thành nhiều vùng/subnet/VLAN nhỏ để kiểm soát truy cập",
            "Tắt toàn bộ firewall",
            "Đổi tên WiFi",
            "Gộp mọi thiết bị vào một subnet",
        ],
        correct: 0,
        explanation:
            "Segmentation giúp áp rule theo vùng, giảm lan truyền malware và dễ giám sát sự cố.",
    },
    {
        question: "Guest WiFi nên được cấu hình thế nào?",
        options: [
            "VLAN riêng, chỉ ra Internet, chặn vào LAN/Server/Database/Management",
            "Chung subnet với máy kế toán",
            "Được vào database để tiện dùng",
            "Không cần firewall rule",
        ],
        correct: 0,
        explanation:
            "Guest là vùng tin cậy thấp, nên tách khỏi nội bộ và chỉ cho các luồng Internet cần thiết.",
    },
    {
        question:
            "Admin IT làm việc từ xa nên quản trị server theo mô hình nào an toàn hơn?",
        options: [
            "Admin → VPN + MFA → Management Zone/Jump Server → Server",
            "Mở SSH/RDP 0.0.0.0/0 ra Internet",
            "Dùng Guest WiFi vào thẳng database",
            "Tắt logging để nhanh hơn",
        ],
        correct: 0,
        explanation:
            "Quản trị từ xa nên qua VPN/MFA, vùng management và jump server để kiểm soát, phân quyền và ghi log.",
    },
    {
        question: "DMZ có thay thế firewall/VPN/IDS/IPS không?",
        options: [
            "Không, DMZ là mô hình phân vùng; vẫn cần firewall rule, VPN, IDS/IPS, WAF, VLAN, SIEM",
            "Có, chỉ cần DMZ là đủ",
            "Có, DMZ tự mã hóa mọi traffic",
            "Có, DMZ tự phát hiện mọi tấn công",
        ],
        correct: 0,
        explanation:
            "DMZ chỉ là vùng đệm. Hiệu quả bảo mật đến từ thiết kế phân vùng cộng với rule, giám sát, VPN/MFA và các lớp kiểm soát khác.",
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
                    Hoàn thành Phần 9: Bảo mật mạng!
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
                Bạn đã hoàn tất Phần 9: Bảo mật mạng. Bài tiếp theo chuyển sang
                công cụ phân tích mạng.
            </p>
            <Link
                to="/phan-10-1"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 10.1 — Wireshark, Ping, Traceroute{" "}
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

function HeroDmzVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Internet"
                    value="untrusted"
                    color="red"
                    icon={<Globe2 />}
                />
                <MiniCard
                    title="DMZ"
                    value="public services"
                    color="orange"
                    icon={<Split />}
                />
                <MiniCard
                    title="LAN"
                    value="internal"
                    color="cyan"
                    icon={<Users />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-green-300">
                    Allow Internet → DMZ Web TCP 443
                </p>
                <p className="text-red-300">Deny Internet → LAN/Database Any</p>
                <p className="text-green-300">Allow App → DB TCP 3306</p>
                <p className="text-orange-300">Any → Any → Deny by default</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="VLAN"
                    value="segmentation"
                    color="purple"
                    icon={<Network />}
                />
                <MiniCard
                    title="VPN+MFA"
                    value="admin"
                    color="green"
                    icon={<Route />}
                />
                <MiniCard
                    title="IDS/IPS"
                    value="monitor"
                    color="blue"
                    icon={<Radar />}
                />
            </div>
        </div>
    );
}

function DmzSimpleVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="người dùng ngoài / attacker"
                color="red"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Firewall"
                desc="rule kiểm soát"
                color="cyan"
                icon={<Shield />}
            />
            <div className="grid md:grid-cols-2 gap-3">
                <MiniFlowNode
                    title="DMZ"
                    desc="Web/Mail/DNS public"
                    color="orange"
                    icon={<Server />}
                />
                <MiniFlowNode
                    title="LAN nội bộ"
                    desc="PC/File/DB quan trọng"
                    color="green"
                    icon={<Users />}
                />
            </div>
        </div>
    );
}

function SecureArchitectureVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
                <MiniCard
                    title="Internet"
                    value="không tin cậy"
                    color="red"
                    icon={<Globe2 />}
                />
                <MiniCard
                    title="DMZ"
                    value="public"
                    color="orange"
                    icon={<Split />}
                />
                <MiniCard
                    title="User LAN"
                    value="nhân viên"
                    color="cyan"
                    icon={<Users />}
                />
                <MiniCard
                    title="Server Zone"
                    value="app/file"
                    color="blue"
                    icon={<Server />}
                />
                <MiniCard
                    title="Database"
                    value="dữ liệu"
                    color="purple"
                    icon={<Database />}
                />
                <MiniCard
                    title="Management"
                    value="admin"
                    color="green"
                    icon={<KeyRound />}
                />
                <MiniCard
                    title="Guest WiFi"
                    value="khách"
                    color="yellow"
                    icon={<Wifi />}
                />
                <MiniCard
                    title="IoT Zone"
                    value="camera/TV"
                    color="emerald"
                    icon={<Camera />}
                />
            </div>
        </div>
    );
}

function EcommerceVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="người mua hàng"
                color="red"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="DMZ Web Server"
                desc="10.0.100.10 / TCP 443"
                color="orange"
                icon={<Server />}
            />
            <MiniFlowNode
                title="App Server Zone"
                desc="10.0.20.10 / TCP 8080"
                color="blue"
                icon={<HardDrive />}
            />
            <MiniFlowNode
                title="Database Zone"
                desc="10.0.30.10 / TCP 3306"
                color="purple"
                icon={<Database />}
            />
            <MiniFlowNode
                title="Management Zone"
                desc="Admin qua VPN"
                color="green"
                icon={<Route />}
            />
        </div>
    );
}

function BasicDmzVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="mạng công cộng"
                color="red"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Edge Firewall"
                desc="kiểm soát vào/ra"
                color="cyan"
                icon={<Shield />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-500/10 border border-orange-400/40 rounded-3xl p-5">
                    <h4 className="text-orange-300 font-black mb-3">DMZ</h4>
                    <MiniCard
                        title="Web Server"
                        value="public"
                        color="orange"
                        icon={<Server />}
                    />
                    <MiniCard
                        title="Mail Server"
                        value="public"
                        color="orange"
                        icon={<Server />}
                    />
                    <MiniCard
                        title="Public DNS"
                        value="public"
                        color="orange"
                        icon={<Globe2 />}
                    />
                </div>
                <div className="bg-green-500/10 border border-green-400/40 rounded-3xl p-5">
                    <h4 className="text-green-300 font-black mb-3">LAN</h4>
                    <MiniCard
                        title="User PCs"
                        value="internal"
                        color="green"
                        icon={<Laptop />}
                    />
                    <MiniCard
                        title="File Server"
                        value="internal"
                        color="green"
                        icon={<HardDrive />}
                    />
                    <MiniCard
                        title="Internal App"
                        value="internal"
                        color="green"
                        icon={<Server />}
                    />
                </div>
            </div>
        </div>
    );
}

function MultiZoneVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="public"
                color="red"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="Firewall / Router"
                desc="routing + security policy"
                color="cyan"
                icon={<Router />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="DMZ"
                    value="Web Server"
                    color="orange"
                    icon={<Server />}
                />
                <MiniCard
                    title="User LAN"
                    value="PC nhân viên"
                    color="cyan"
                    icon={<Users />}
                />
                <MiniCard
                    title="Guest WiFi"
                    value="Khách"
                    color="yellow"
                    icon={<Wifi />}
                />
            </div>
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="App Server Zone"
                desc="backend"
                color="blue"
                icon={<HardDrive />}
            />
            <MiniFlowNode
                title="Database Zone"
                desc="dữ liệu nhạy cảm"
                color="purple"
                icon={<Database />}
            />
            <MiniFlowNode
                title="Management Zone"
                desc="Admin qua VPN/SSH/RDP có kiểm soát"
                color="green"
                icon={<KeyRound />}
            />
        </div>
    );
}

function SingleFirewallVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="outside"
                color="red"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="Firewall"
                desc="nhiều interface"
                color="cyan"
                icon={<Shield />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="DMZ"
                    value="public"
                    color="orange"
                    icon={<Server />}
                />
                <MiniCard
                    title="LAN"
                    value="users"
                    color="green"
                    icon={<Users />}
                />
                <MiniCard
                    title="Server Zone"
                    value="internal"
                    color="blue"
                    icon={<HardDrive />}
                />
            </div>
        </div>
    );
}

function DualFirewallVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="outside"
                color="red"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="Firewall ngoài"
                desc="outside → DMZ"
                color="orange"
                icon={<Shield />}
            />
            <MiniFlowNode
                title="DMZ"
                desc="public services"
                color="purple"
                icon={<Server />}
            />
            <MiniFlowNode
                title="Firewall trong"
                desc="DMZ → LAN"
                color="cyan"
                icon={<ShieldCheck />}
            />
            <MiniFlowNode
                title="LAN / Server Zone"
                desc="internal"
                color="green"
                icon={<Network />}
            />
        </div>
    );
}

function CloudDmzVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="public"
                color="red"
                icon={<Globe2 />}
            />
            <MiniFlowNode
                title="Cloud Load Balancer / WAF"
                desc="public entry"
                color="purple"
                icon={<Cloud />}
            />
            <MiniFlowNode
                title="Public Subnet"
                desc="Reverse Proxy / Bastion"
                color="orange"
                icon={<Server />}
            />
            <MiniFlowNode
                title="Private Subnet"
                desc="App Server"
                color="blue"
                icon={<HardDrive />}
            />
            <MiniFlowNode
                title="Private Database Subnet"
                desc="Database"
                color="green"
                icon={<Database />}
            />
        </div>
    );
}

function SmallCompanyVisual() {
    return (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <MiniFlowNode
                title="Firewall/Router"
                desc="trung tâm policy"
                color="cyan"
                icon={<Router />}
            />
            <div className="grid md:grid-cols-2 gap-3">
                <MiniCard
                    title="DMZ VLAN 100"
                    value="Web/Reverse Proxy"
                    color="orange"
                    icon={<Server />}
                />
                <MiniCard
                    title="LAN VLAN 10"
                    value="máy nhân viên"
                    color="cyan"
                    icon={<Users />}
                />
                <MiniCard
                    title="Server VLAN 20"
                    value="File/App"
                    color="blue"
                    icon={<HardDrive />}
                />
                <MiniCard
                    title="DB VLAN 30"
                    value="Database"
                    color="purple"
                    icon={<Database />}
                />
                <MiniCard
                    title="Guest VLAN 40"
                    value="WiFi khách"
                    color="yellow"
                    icon={<Wifi />}
                />
                <MiniCard
                    title="IoT VLAN 60"
                    value="Camera/TV"
                    color="emerald"
                    icon={<Camera />}
                />
                <MiniCard
                    title="Mgmt VLAN 50"
                    value="Admin/Switch/AP"
                    color="green"
                    icon={<KeyRound />}
                />
            </div>
        </div>
    );
}

function getComponentIcon(name) {
    if (name === "DMZ") return <Split />;
    if (name === "Firewall") return <Shield />;
    if (name === "VPN") return <Route />;
    if (name === "IDS") return <Radar />;
    if (name === "IPS") return <ShieldAlert />;
    if (name === "WAF") return <Filter />;
    if (name === "VLAN") return <Network />;
    return <Database />;
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
