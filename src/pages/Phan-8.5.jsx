import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Database,
    Gauge,
    Globe2,
    Home,
    KeyRound,
    Laptop,
    Layers,
    MapPin,
    Network,
    Radio,
    RefreshCw,
    Router,
    Search,
    Send,
    Server,
    Settings,
    ShieldCheck,
    Signal,
    Smartphone,
    Tablet,
    TowerControl,
    Users,
    Wifi,
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

const generationRows = [
    [
        "3G",
        "Gen 3",
        "Thấp đến trung bình",
        "Cao hơn",
        "Web, email, gọi video cơ bản",
        "Cũ, chậm hơn",
        "orange",
    ],
    [
        "4G LTE",
        "Gen 4",
        "Cao",
        "Thấp hơn 3G",
        "Video HD, game, livestream, app hiện đại",
        "Phổ biến, ổn định",
        "cyan",
    ],
    [
        "5G",
        "Gen 5",
        "Rất cao",
        "Rất thấp",
        "AR/VR, IoT lớn, xe kết nối, công nghiệp thông minh",
        "Mới hơn, cần vùng phủ và thiết bị hỗ trợ",
        "emerald",
    ],
];

const wifiMobileRows = [
    ["Phạm vi", "Nhà, quán, văn phòng", "Rộng: đường phố, thành phố, quốc gia"],
    ["Đơn vị quản lý", "Chủ nhà/quán/công ty", "Nhà mạng"],
    ["Cần SIM không?", "Không", "Có, thường cần SIM/eSIM"],
    ["Tính di động", "Thấp đến trung bình", "Rất cao"],
    ["Chi phí", "Thường theo Internet cố định", "Theo gói data di động"],
    ["Thiết bị phát", "Router/AP", "BTS/cell tower"],
    [
        "Tốc độ",
        "Cao nếu gần router",
        "Cao nhưng phụ thuộc vùng phủ và tải mạng",
    ],
];

const wirelessRows = [
    [
        "WiFi",
        "Nhà/văn phòng",
        "Cao",
        "Trung bình/cao",
        "Internet tốc độ cao",
        "cyan",
    ],
    [
        "Bluetooth",
        "Cá nhân, gần",
        "Thấp/trung bình",
        "Thấp",
        "Tai nghe, chuột, loa",
        "blue",
    ],
    [
        "Zigbee",
        "Nhà thông minh",
        "Thấp",
        "Rất thấp",
        "Cảm biến, IoT",
        "emerald",
    ],
    [
        "4G/5G",
        "Diện rộng",
        "Cao/rất cao",
        "Trung bình/cao",
        "Internet di động",
        "purple",
    ],
];

const slowFactors = [
    [
        "Xa trạm phát sóng",
        "Càng xa BTS, tín hiệu thường càng yếu; tầng hầm có thể rất kém.",
        "orange",
        <TowerControl />,
    ],
    [
        "Vật cản",
        "Tường bê tông, tòa nhà cao tầng, thang máy, núi hoặc địa hình phức tạp làm suy giảm sóng.",
        "red",
        <Home />,
    ],
    [
        "Đông người dùng",
        "Sân vận động, concert, lễ hội hoặc trung tâm thương mại có thể làm trạm quá tải.",
        "purple",
        <Users />,
    ],
    [
        "Băng tần",
        "Tần số thấp phủ xa hơn; tần số cao nhanh hơn nhưng dễ suy giảm hơn.",
        "cyan",
        <Radio />,
    ],
    [
        "Thiết bị đầu cuối",
        "Điện thoại mới thường có modem, anten và băng tần hỗ trợ tốt hơn.",
        "green",
        <Smartphone />,
    ],
    [
        "Gói cước/chính sách",
        "Dùng hết dung lượng tốc độ cao có thể bị hạ băng thông.",
        "yellow",
        <Database />,
    ],
    [
        "APN/DNS/cấu hình",
        "APN sai có thể có sóng nhưng không vào Internet; DNS cũng có thể gây chậm truy cập web.",
        "blue",
        <Settings />,
    ],
];

const symbols = [
    ["3G", "Mạng thế hệ 3", "orange"],
    ["H/H+", "Nâng cấp của 3G, nhanh hơn 3G cơ bản", "yellow"],
    ["4G", "Mạng thế hệ 4", "cyan"],
    ["LTE", "Long Term Evolution, công nghệ chính của 4G", "blue"],
    ["5G", "Mạng thế hệ 5", "emerald"],
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
            <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <Signal className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                Khóa học Mạng Máy Tính
                            </h1>
                            <p className="text-xs text-slate-500">
                                Phần 8: Mạng không dây — Wireless
                            </p>
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        Bài 8.5
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <WhatIsMobileNetwork />
                <CellSection />
                <BtsSection />
                <SimSection />
                <HandoverSection />
                <GenerationsIntro />
                <RealWorldExamples />
                <TechnicalExample />
                <MobileArchitecture />
                <GenerationTable />
                <WifiVsMobile />
                <WirelessComparison />
                <MobileProcess />
                <GenerationDetails />
                <SlowFactorsSection />
                <HotspotSection />
                <ApnSection />
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
                        <Layers size={16} /> Wireless — Cellular Network
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Mạng di động
                        <span className="block text-cyan-400">
                            3G, 4G LTE, 5G
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Mạng di động giúp điện thoại, tablet, modem và thiết bị
                        IoT truy cập Internet ở phạm vi rộng thông qua nhà mạng,
                        BTS/cell tower và mạng lõi.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">4G/5G</span> =
                            Internet qua nhà mạng, không cần WiFi.
                        </p>
                        <p>
                            <span className="text-orange-300">BTS/cell</span> =
                            trạm và vùng phủ sóng.
                        </p>
                        <p>
                            <span className="text-emerald-300">Handover</span> =
                            chuyển trạm khi di chuyển.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroMobileVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu mạng di động là gì và khác gì với WiFi.",
        "Hiểu ý nghĩa của 3G, 4G LTE và 5G.",
        "Biết vì sao 4G/5G truy cập Internet được khi không dùng WiFi.",
        "Nắm cell, BTS, SIM, handover, latency, bandwidth.",
        "So sánh WiFi, Bluetooth, Zigbee và mạng di động trong thực tế.",
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

function WhatIsMobileNetwork() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Mạng di động là gì?"
                icon={<Smartphone />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-cyan-300">
                                Mạng di động
                            </strong>{" "}
                            là hệ thống mạng không dây do nhà mạng triển khai để
                            thiết bị có thể kết nối Internet ở phạm vi rộng.
                        </p>
                        <ConceptCard
                            title="Khi tắt WiFi mà vẫn vào mạng"
                            icon={<Signal />}
                            color="blue"
                            text="Nếu bạn tắt WiFi nhưng vẫn xem YouTube, gửi Zalo, dùng Google Maps, tức là đang dùng mạng di động qua nhà mạng."
                            code={`Điện thoại ~~~ sóng di động ~~~ BTS --- Mạng nhà mạng --- Internet

Ví dụ nhà mạng: Viettel, VinaPhone, MobiFone, Vietnamobile`}
                            compact
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <MobileSimpleVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CellSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="purple"
                title="Cell là gì?"
                icon={<MapPin />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Vùng phủ sóng nhỏ"
                    icon={<MapPin />}
                    color="purple"
                    text="Trong mạng di động, khu vực phủ sóng được chia thành nhiều vùng nhỏ gọi là cell. Mỗi cell thường được phục vụ bởi một trạm phát sóng gần đó."
                    code={`Cell A → BTS A
Cell B → BTS B
Cell C → BTS C`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <CellsVisual />
                    <div className="mt-5 bg-purple-500/10 border border-purple-400/40 rounded-2xl p-4 text-sm text-purple-300">
                        Cell giống phường/xã trong thành phố: chia vùng lớn
                        thành nhiều vùng nhỏ để dễ phục vụ và quản lý.
                    </div>
                </div>
            </div>
        </section>
    );
}

function BtsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="orange"
                title="BTS là gì?"
                icon={<TowerControl />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Base Transceiver Station"
                        icon={<TowerControl />}
                        color="orange"
                        text="BTS là trạm thu phát sóng gốc, thường được hiểu đơn giản là cột/trạm phát sóng giúp điện thoại kết nối vào mạng di động."
                        code={`Điện thoại ~~~ sóng radio ~~~ BTS

BTS phát sóng, nhận tín hiệu, chuyển dữ liệu vào mạng nhà mạng.`}
                    />
                    <div className="grid md:grid-cols-2 gap-3">
                        <MiniFlowNode
                            title="Phát sóng di động"
                            desc="3G/4G/5G"
                            color="orange"
                            icon={<Radio />}
                        />
                        <MiniFlowNode
                            title="Nhận tín hiệu"
                            desc="từ điện thoại"
                            color="cyan"
                            icon={<Smartphone />}
                        />
                        <MiniFlowNode
                            title="Chuyển dữ liệu"
                            desc="vào mạng lõi"
                            color="purple"
                            icon={<Network />}
                        />
                        <MiniFlowNode
                            title="Hỗ trợ dịch vụ"
                            desc="gọi, SMS, Internet"
                            color="green"
                            icon={<Send />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SimSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="green"
                title="SIM dùng để làm gì?"
                icon={<KeyRound />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Danh tính thuê bao di động"
                    icon={<KeyRound />}
                    color="green"
                    text="SIM/eSIM giúp nhà mạng biết bạn là thuê bao nào, có được phép truy cập mạng không, dùng gói cước nào và thuộc nhà mạng nào."
                    code={`Bạn là thuê bao nào?
Bạn có quyền truy cập mạng không?
Bạn dùng gói cước nào?
Bạn thuộc nhà mạng nào?`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <SimVisual />
                    <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
                        Không có SIM/eSIM hợp lệ, điện thoại thường không dùng
                        được dữ liệu di động của nhà mạng, trừ một số trường hợp
                        gọi khẩn cấp.
                    </div>
                </div>
            </div>
        </section>
    );
}

function HandoverSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Handover là gì?"
                icon={<RefreshCw />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                    <ConceptCard
                        title="Chuyển trạm khi di chuyển"
                        icon={<RefreshCw />}
                        color="emerald"
                        text="Handover là quá trình chuyển kết nối từ trạm này sang trạm khác khi bạn di chuyển, ví dụ đang gọi điện trên xe từ Quận A sang Quận B."
                        code={`BTS A → BTS B → BTS C

Nếu handover tốt: cuộc gọi/video không bị gián đoạn.
Nếu kém: rớt cuộc gọi, lag game, đứng video.`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <HandoverVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function GenerationsIntro() {
    const [active, setActive] = useState("4G LTE");
    const row = generationRows.find(([g]) => g === active) || generationRows[1];
    const [, gen, speed, latency, app, experience, color] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="cyan"
                title="3G, 4G LTE, 5G là gì?"
                icon={<Signal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                            {generationRows.map(([name, , , , , , c]) => (
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
                            title={`${active} — ${gen}`}
                            icon={<Signal />}
                            color={color}
                            text={`Tốc độ: ${speed}. Độ trễ: ${latency}. Phù hợp: ${app}.`}
                            code={experience}
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <GenerationVisual active={active} />
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
                number="8"
                color="blue"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="WiFi như xe riêng trong sân nhà"
                    icon={<Wifi />}
                    color="cyan"
                    text="WiFi dùng tốt trong phạm vi nhà/quán/công ty. Khi ra ngoài, vùng phủ WiFi thường không theo bạn."
                    code="WiFi = mạng trong nhà/quán/công ty"
                />
                <ConceptCard
                    title="4G/5G như taxi phủ toàn thành phố"
                    icon={<Signal />}
                    color="purple"
                    text="Mạng di động do nhà mạng phủ diện rộng. Bạn di chuyển ngoài đường, trên xe, ngoài trời vẫn có Internet nếu có vùng phủ sóng."
                    code="4G/5G = mạng phủ rộng ngoài đường, trên xe, ngoài trời"
                />
            </div>
        </section>
    );
}

function TechnicalExample() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="emerald"
                title="Ví dụ kỹ thuật: điện thoại dùng 4G LTE"
                icon={<Smartphone />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                    <ConceptCard
                        title="Luồng dữ liệu đến YouTube"
                        icon={<Globe2 />}
                        color="emerald"
                        text="Khi mở YouTube bằng 4G LTE, dữ liệu đi từ điện thoại qua sóng di động đến BTS/eNodeB, qua mạng lõi nhà mạng, ra Internet và tới server YouTube."
                        code={`Điện thoại: 10.x.x.x hoặc 100.64.x.x
Mạng truy cập: 4G LTE
Nhà mạng: Viettel
Dịch vụ: YouTube`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <TechnicalFlowVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MobileArchitecture() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Sơ đồ tổng quan mạng di động"
                icon={<Network />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <ArchitectureVisual />
            </div>
        </section>
    );
}

function GenerationTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="cyan"
                title="Bảng so sánh 3G, 4G LTE, 5G"
                icon={<BarChart3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[880px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tiêu chí</th>
                                <th className="p-4 text-orange-300">3G</th>
                                <th className="p-4 text-cyan-300">4G LTE</th>
                                <th className="p-4 text-emerald-300">5G</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Thế hệ",
                                "Tốc độ",
                                "Độ trễ",
                                "Ứng dụng phù hợp",
                                "Trải nghiệm hiện nay",
                            ].map((label, idx) => (
                                <tr
                                    key={label}
                                    className={`${idx === 4 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                >
                                    <td className="p-4 text-white font-bold">
                                        {label}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {generationRows[0][idx + 1]}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {generationRows[1][idx + 1]}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {generationRows[2][idx + 1]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-3xl p-6 text-yellow-300 text-sm">
                Tốc độ thực tế phụ thuộc nhà mạng, gói cước, khoảng cách đến
                trạm, số người cùng dùng, băng tần, vật cản và thiết bị.
            </div>
        </section>
    );
}

function WifiVsMobile() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="blue"
                title="WiFi và mạng di động khác nhau thế nào?"
                icon={<Wifi />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[760px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tiêu chí</th>
                                <th className="p-4 text-cyan-300">WiFi</th>
                                <th className="p-4 text-purple-300">
                                    Mạng di động 3G/4G/5G
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wifiMobileRows.map(
                                ([criteria, wifi, mobile], i) => (
                                    <tr
                                        key={criteria}
                                        className={`${i === wifiMobileRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td className="p-4 text-white font-bold">
                                            {criteria}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {wifi}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {mobile}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-400/40 rounded-3xl p-6 text-cyan-300 font-mono text-sm">
                WiFi tốt cho khu vực cố định; mạng di động tốt khi cần kết nối
                khi di chuyển.
            </div>
        </section>
    );
}

function WirelessComparison() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="13"
                color="emerald"
                title="So sánh WiFi, Bluetooth, Zigbee, 4G/5G"
                icon={<Layers />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Công nghệ</th>
                                <th className="p-4">Phạm vi chính</th>
                                <th className="p-4">Tốc độ</th>
                                <th className="p-4">Tiêu thụ pin</th>
                                <th className="p-4">Ứng dụng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wirelessRows.map(
                                (
                                    [tech, range, speed, battery, app, color],
                                    i,
                                ) => (
                                    <tr
                                        key={tech}
                                        className={`${i === wirelessRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                    >
                                        <td
                                            className={`p-4 font-black ${colorClasses[color].text}`}
                                        >
                                            {tech}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {range}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {speed}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {battery}
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            {app}
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

function MobileProcess() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Điện thoại tìm sóng nhà mạng",
            text: "Khi bật điện thoại, thiết bị quét các sóng di động xung quanh.",
            code: `Viettel 4G
VinaPhone 4G
MobiFone 4G`,
            color: "cyan",
            icon: <Search />,
        },
        {
            title: "Xác thực bằng SIM/eSIM",
            text: "Điện thoại dùng thông tin trong SIM/eSIM để chứng minh thuê bao hợp lệ với nhà mạng.",
            code: `Tôi là thuê bao hợp lệ
Tôi có quyền truy cập mạng
Tôi đang dùng gói dịch vụ này`,
            color: "green",
            icon: <KeyRound />,
        },
        {
            title: "Kết nối trạm phù hợp",
            text: "Thiết bị không nhất thiết chọn trạm gần nhất tuyệt đối, mà chọn trạm có điều kiện phù hợp.",
            code: "Dựa trên: cường độ tín hiệu, chất lượng tín hiệu, tải trạm, băng tần, chính sách nhà mạng",
            color: "orange",
            icon: <TowerControl />,
        },
        {
            title: "Được cấp kết nối dữ liệu",
            text: "Điện thoại hiển thị 3G, H+, 4G, LTE hoặc 5G tùy mạng đang dùng.",
            code: "3G / H+ / 4G / LTE / 5G",
            color: "blue",
            icon: <Signal />,
        },
        {
            title: "Dữ liệu đi qua mạng lõi nhà mạng",
            text: "Khi mở website, dữ liệu đi qua BTS, mạng truyền dẫn, mạng lõi nhà mạng rồi ra Internet.",
            code: "Điện thoại → sóng 4G/5G → BTS → mạng lõi nhà mạng → Internet → server Google",
            color: "purple",
            icon: <Network />,
        },
        {
            title: "Di chuyển thì handover",
            text: "Điện thoại liên tục đo tín hiệu. Khi trạm khác tốt hơn, mạng chuyển kết nối sang trạm mới.",
            code: `Trước: Phone ~~~ BTS A
Sau:   Phone ~~~ BTS B`,
            color: "emerald",
            icon: <RefreshCw />,
        },
    ];
    return (
        <StepSection
            number="14"
            color="cyan"
            title="Cơ chế hoạt động của mạng di động"
            icon={<Signal />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function GenerationDetails() {
    const [active, setActive] = useState("5G");
    const details = {
        "3G": [
            "3G",
            "Đủ cho nhu cầu cơ bản nhưng hiện đã cũ",
            "Duyệt web cơ bản, email, nhắn tin app, gọi video chất lượng thấp/trung bình",
            "Tốc độ thấp hơn 4G/5G, độ trễ cao hơn, không tối ưu cho video HD/game thời gian thực",
            "orange",
            <Signal />,
        ],
        "4G LTE": [
            "4G LTE",
            "Mạng di động tốc độ cao phổ biến",
            "YouTube HD, livestream, gọi video, học online, game mobile, hotspot cho laptop",
            "Phủ rộng, thiết bị hỗ trợ phổ biến, độ trễ thấp hơn 3G",
            "cyan",
            <Zap />,
        ],
        "5G": [
            "5G",
            "Nhanh hơn, độ trễ thấp hơn, hỗ trợ nhiều thiết bị hơn",
            "Video rất cao, cloud gaming, AR/VR, IoT lớn, xe kết nối, công nghiệp thông minh",
            "Cần điện thoại, SIM/gói cước, vùng phủ và băng tần hỗ trợ",
            "emerald",
            <Gauge />,
        ],
    }[active];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="purple"
                title="3G, 4G LTE, 5G khác nhau như thế nào?"
                icon={<BarChart3 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
                    <div className="space-y-4">
                        <ConceptCard
                            title={details[0]}
                            icon={details[5]}
                            color={details[4]}
                            text={details[1]}
                            code={`Phù hợp:
${details[2]}

Lưu ý:
${details[3]}`}
                        />
                        <div className="grid grid-cols-3 gap-2">
                            {Object.keys({ "3G": 1, "4G LTE": 1, "5G": 1 }).map(
                                (g) => (
                                    <ChoiceButton
                                        key={g}
                                        active={active === g}
                                        onClick={() => setActive(g)}
                                        color={
                                            g === "3G"
                                                ? "orange"
                                                : g === "4G LTE"
                                                  ? "cyan"
                                                  : "emerald"
                                        }
                                    >
                                        {g}
                                    </ChoiceButton>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <SymbolsVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SlowFactorsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="16"
                color="red"
                title="Vì sao mạng di động nhanh hoặc chậm?"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {slowFactors.map(([title, desc, color, icon]) => (
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

function HotspotSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="17"
                color="green"
                title="Hotspot 4G/5G là gì?"
                icon={<Wifi />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Điện thoại biến thành điểm phát WiFi"
                        icon={<Smartphone />}
                        color="green"
                        text="Hotspot là tính năng biến điện thoại thành điểm phát WiFi dùng mạng di động. Laptop kết nối WiFi vào điện thoại, còn điện thoại dùng 4G/5G ra Internet."
                        code={`Laptop → WiFi → Điện thoại → 4G/5G → Internet

Lưu ý: tốn pin, tốn data, nóng máy, phụ thuộc sóng di động, nên đặt mật khẩu mạnh.`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <HotspotVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ApnSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="18"
                color="orange"
                title="APN là gì?"
                icon={<Settings />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Access Point Name"
                    icon={<Settings />}
                    color="orange"
                    text="APN là cấu hình giúp điện thoại biết cách đi vào mạng dữ liệu của nhà mạng. Nếu APN sai, điện thoại có thể có sóng nhưng không vào được Internet."
                    code={`APN: v-internet
APN: m-wap
APN: internet

APN giống cổng vào Internet của nhà mạng dành cho dữ liệu di động.`}
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <div className="grid md:grid-cols-2 gap-3">
                        <MiniFlowNode
                            title="Network Type"
                            desc="3G, 4G, LTE, 5G"
                            color="cyan"
                            icon={<Signal />}
                        />
                        <MiniFlowNode
                            title="Signal Strength"
                            desc="độ mạnh tín hiệu"
                            color="green"
                            icon={<Gauge />}
                        />
                        <MiniFlowNode
                            title="Carrier"
                            desc="nhà mạng"
                            color="purple"
                            icon={<TowerControl />}
                        />
                        <MiniFlowNode
                            title="Data Roaming"
                            desc="chuyển vùng dữ liệu"
                            color="orange"
                            icon={<RefreshCw />}
                        />
                        <MiniFlowNode
                            title="APN"
                            desc="cổng dữ liệu nhà mạng"
                            color="blue"
                            icon={<Settings />}
                        />
                        <MiniFlowNode
                            title="SIM/eSIM"
                            desc="danh tính thuê bao"
                            color="emerald"
                            icon={<KeyRound />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommonMistakes() {
    const mistakes = [
        {
            title: "Nghĩ đầy vạch sóng là chắc chắn nhanh",
            desc: "Đầy sóng không đảm bảo tốc độ cao; trạm có thể đông người, gói cước bị giới hạn, DNS/app/server chậm hoặc thiết bị yếu.",
            fix: "Phải xét cả chất lượng tín hiệu, tải trạm, gói cước và thiết bị.",
        },
        {
            title: "Nhầm WiFi với mạng di động",
            desc: "WiFi do router/AP phát trong phạm vi hẹp; 4G/5G do nhà mạng phủ diện rộng và thường cần SIM/eSIM.",
            fix: "WiFi = cục bộ; 4G/5G = diện rộng qua nhà mạng.",
        },
        {
            title: "Nghĩ 5G ở đâu cũng nhanh hơn 4G",
            desc: "5G phụ thuộc vùng phủ, băng tần, tải mạng, thiết bị, SIM/gói cước và vật cản.",
            fix: "5G cần đủ điều kiện để phát huy ưu điểm.",
        },
        {
            title: "Không hiểu handover",
            desc: "Khi di chuyển, điện thoại phải chuyển giữa các trạm. Handover kém có thể gây lag, mất mạng hoặc rớt cuộc gọi.",
            fix: "Handover giữ kết nối khi bạn di chuyển.",
        },
        {
            title: "Bỏ qua APN",
            desc: "APN sai có thể làm điện thoại có sóng nhưng không vào được Internet di động.",
            fix: "Kiểm tra APN khi có sóng nhưng không có data.",
        },
    ];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="19"
                color="yellow"
                title="Lỗi hiểu nhầm phổ biến"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                    <div
                        key={m.title}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4">
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
                                Mạng di động là mạng không dây diện rộng do nhà
                                mạng triển khai.
                            </p>
                            <p>
                                4G/5G giúp truy cập Internet khi không dùng
                                WiFi.
                            </p>
                            <p>Cell là vùng phủ sóng nhỏ trong mạng di động.</p>
                            <p>
                                BTS là trạm thu phát sóng giúp điện thoại vào
                                mạng di động.
                            </p>
                            <p>
                                SIM/eSIM là danh tính thuê bao trong mạng di
                                động.
                            </p>
                            <p>
                                Handover là chuyển kết nối giữa các trạm khi di
                                chuyển.
                            </p>
                            <p>3G là đời cũ, đủ cho nhu cầu cơ bản.</p>
                            <p>4G LTE là mạng tốc độ cao phổ biến.</p>
                            <p>
                                5G nhanh hơn, độ trễ thấp hơn và hỗ trợ nhiều
                                thiết bị hơn.
                            </p>
                            <p>
                                Hotspot biến điện thoại thành điểm phát WiFi
                                dùng mạng 4G/5G.
                            </p>
                            <p>
                                APN là cổng/cấu hình dữ liệu di động của nhà
                                mạng.
                            </p>
                            <p>
                                Mạng chậm có thể do xa trạm, vật cản, đông
                                người, gói cước, thiết bị, APN hoặc chính sách
                                nhà mạng.
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
        question: "Mạng di động 4G/5G khác WiFi ở điểm quan trọng nào?",
        options: [
            "4G/5G do nhà mạng triển khai và phủ sóng diện rộng",
            "4G/5G chỉ dùng trong nhà",
            "WiFi luôn cần SIM",
            "Bluetooth là một loại 5G",
        ],
        correct: 0,
        explanation:
            "WiFi thường do router/AP trong nhà/quán/công ty phát; 4G/5G do nhà mạng triển khai, phủ diện rộng và thường cần SIM/eSIM.",
    },
    {
        question: "BTS là gì?",
        options: [
            "Trạm thu phát sóng giúp điện thoại kết nối vào mạng di động",
            "Tên của mật khẩu WiFi",
            "Một loại thiết bị Bluetooth",
            "Một kiểu DNS record",
        ],
        correct: 0,
        explanation:
            "BTS = Base Transceiver Station, trạm thu phát sóng gốc trong mạng di động.",
    },
    {
        question: "SIM/eSIM có vai trò gì trong mạng di động?",
        options: [
            "Định danh thuê bao và giúp nhà mạng xác thực quyền truy cập",
            "Tăng tốc WiFi",
            "Thay thế router nhà",
            "Làm Zigbee Hub",
        ],
        correct: 0,
        explanation:
            "SIM/eSIM chứa thông tin thuê bao để nhà mạng biết bạn là ai, có quyền truy cập không và dùng gói dịch vụ nào.",
    },
    {
        question: "Handover là gì?",
        options: [
            "Quá trình chuyển kết nối từ trạm này sang trạm khác khi thiết bị di chuyển",
            "Quá trình đổi mật khẩu WiFi",
            "Quá trình pair tai nghe Bluetooth",
            "Quá trình cấp IP bởi DHCP",
        ],
        correct: 0,
        explanation:
            "Handover giúp bạn đi qua nhiều cell/BTS mà vẫn giữ cuộc gọi, video hoặc kết nối dữ liệu.",
    },
    {
        question: "Vì sao 4G đầy sóng nhưng Internet vẫn chậm?",
        options: [
            "Có thể do trạm quá tải, gói cước bị giới hạn, APN/DNS, thiết bị hoặc server/app chậm",
            "Vì đầy sóng luôn đồng nghĩa với tốc độ cao",
            "Vì WiFi đang bật",
            "Vì không có Bluetooth",
        ],
        correct: 0,
        explanation:
            "Vạch sóng chủ yếu phản ánh tín hiệu, không đảm bảo băng thông. Tốc độ còn phụ thuộc tải trạm, gói cước, thiết bị, cấu hình và dịch vụ đích.",
    },
    {
        question: "Hotspot 4G/5G là gì?",
        options: [
            "Điện thoại phát WiFi cho thiết bị khác dùng Internet qua mạng di động",
            "Một kiểu trạm BTS",
            "Một chuẩn Zigbee",
            "Một giao thức email",
        ],
        correct: 0,
        explanation:
            "Hotspot biến điện thoại thành điểm phát WiFi. Laptop kết nối WiFi vào điện thoại, còn điện thoại ra Internet bằng 4G/5G.",
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
                    Hoàn thành bài mạng di động!
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
                Bạn đã học xong Phần 8: Mạng không dây. Bài tiếp theo chuyển
                sang an ninh mạng: các loại tấn công mạng phổ biến.
            </p>
            <Link
                to="/phan-9-1"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 9.1 — Các loại tấn công mạng phổ biến{" "}
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

function HeroMobileVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="3G"
                    value="basic"
                    color="orange"
                    icon={<Signal />}
                />
                <MiniCard
                    title="4G LTE"
                    value="popular"
                    color="cyan"
                    icon={<Zap />}
                />
                <MiniCard
                    title="5G"
                    value="low latency"
                    color="emerald"
                    icon={<Gauge />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">Phone ~~~ 4G/5G ~~~ BTS</p>
                <p className="text-purple-300">
                    BTS --- Core Network --- Internet
                </p>
                <p className="text-green-300">SIM/eSIM → subscriber identity</p>
                <p className="text-orange-300">Move: BTS A → BTS B → BTS C</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Cell"
                    value="coverage"
                    color="purple"
                    icon={<MapPin />}
                />
                <MiniCard
                    title="BTS"
                    value="tower"
                    color="orange"
                    icon={<TowerControl />}
                />
                <MiniCard
                    title="APN"
                    value="data gate"
                    color="blue"
                    icon={<Settings />}
                />
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

function MobileSimpleVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Điện thoại"
                desc="4G/5G modem + SIM"
                color="cyan"
                icon={<Smartphone />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Trạm BTS"
                desc="thu/phát sóng di động"
                color="orange"
                icon={<TowerControl />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Mạng nhà mạng"
                desc="core network"
                color="purple"
                icon={<Network />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Internet"
                desc="website/app/server"
                color="green"
                icon={<Globe2 />}
            />
        </div>
    );
}

function CellsVisual() {
    return (
        <div className="grid md:grid-cols-3 gap-3">
            {[
                ["Cell A", "BTS A", "orange"],
                ["Cell B", "BTS B", "cyan"],
                ["Cell C", "BTS C", "emerald"],
            ].map(([cell, bts, color]) => (
                <div
                    key={cell}
                    className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5 text-center`}
                >
                    <TowerControl
                        className={`${colorClasses[color].text} mx-auto mb-2`}
                        size={34}
                    />
                    <p className="text-white font-black">{cell}</p>
                    <p
                        className={`${colorClasses[color].text} font-mono text-sm mt-1`}
                    >
                        {bts}
                    </p>
                </div>
            ))}
        </div>
    );
}

function SimVisual() {
    return (
        <div className="space-y-3">
            <MiniFlowNode
                title="SIM/eSIM"
                desc="danh tính thuê bao"
                color="green"
                icon={<KeyRound />}
            />
            <MiniFlowNode
                title="Nhà mạng"
                desc="xác thực quyền truy cập"
                color="cyan"
                icon={<Server />}
            />
            <MiniFlowNode
                title="Gói cước"
                desc="data, thoại, SMS"
                color="purple"
                icon={<Database />}
            />
            <MiniFlowNode
                title="Cho phép vào mạng"
                desc="nếu hợp lệ"
                color="emerald"
                icon={<CheckCircle2 />}
            />
        </div>
    );
}

function HandoverVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="BTS A"
                    value="Quận A"
                    color="orange"
                    icon={<TowerControl />}
                />
                <MiniCard
                    title="BTS B"
                    value="Quận B"
                    color="cyan"
                    icon={<TowerControl />}
                />
                <MiniCard
                    title="BTS C"
                    value="Quận C"
                    color="emerald"
                    icon={<TowerControl />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-orange-300">Phone on bus → BTS A</p>
                <p className="text-cyan-300">
                    Move forward → handover to BTS B
                </p>
                <p className="text-emerald-300">
                    Move again → handover to BTS C
                </p>
            </div>
            <MiniFlowNode
                title="Kết nối liên tục"
                desc="gọi/video/game ít gián đoạn nếu handover tốt"
                color="green"
                icon={<RefreshCw />}
            />
        </div>
    );
}

function GenerationVisual({ active }) {
    const map = {
        "3G": ["Duyệt web/email", "orange"],
        "4G LTE": ["Video HD/game/app hiện đại", "cyan"],
        "5G": ["AR/VR/IoT lớn/low latency", "emerald"],
    };
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title={active}
                desc={map[active][0]}
                color={map[active][1]}
                icon={<Signal />}
            />
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Speed"
                    value={
                        active === "3G"
                            ? "basic"
                            : active === "4G LTE"
                              ? "high"
                              : "very high"
                    }
                    color={map[active][1]}
                    icon={<Zap />}
                />
                <MiniCard
                    title="Latency"
                    value={
                        active === "3G"
                            ? "higher"
                            : active === "4G LTE"
                              ? "lower"
                              : "very low"
                    }
                    color={map[active][1]}
                    icon={<Gauge />}
                />
                <MiniCard
                    title="Coverage"
                    value="depends"
                    color="purple"
                    icon={<MapPin />}
                />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-400 text-sm">
                Càng mới thường càng nhanh và tối ưu hơn, nhưng thực tế phụ
                thuộc thiết bị, vùng phủ, băng tần, gói cước và tải mạng.
            </div>
        </div>
    );
}

function TechnicalFlowVisual() {
    return (
        <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <p className="text-cyan-300">
                +-------------+ 4G LTE +------------+ Core Network +----------+
            </p>
            <p className="text-cyan-300">
                | Điện thoại | ~~~~~~~~~~~~~~~~~~&gt; | Trạm BTS |
                ----------------------&gt; | Internet |
            </p>
            <p className="text-green-300">
                | YouTube app | &lt;~~~~~~~~~~~~~~~~~~ | eNodeB |
                &lt;---------------------- | Server |
            </p>
            <p className="text-cyan-300">
                +-------------+ +------------+ +----------+
            </p>
        </div>
    );
}

function ArchitectureVisual() {
    return (
        <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 text-center">
                <Globe2 className="mx-auto text-cyan-300 mb-2" size={36} />
                <p className="text-white font-black">Internet</p>
            </div>
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Mạng lõi nhà mạng"
                desc="core network"
                color="purple"
                icon={<Network />}
            />
            <div className="grid md:grid-cols-3 gap-3">
                <MiniCard
                    title="BTS"
                    value="Cell A"
                    color="orange"
                    icon={<TowerControl />}
                />
                <MiniCard
                    title="BTS"
                    value="Cell B"
                    color="cyan"
                    icon={<TowerControl />}
                />
                <MiniCard
                    title="BTS"
                    value="Cell C"
                    color="emerald"
                    icon={<TowerControl />}
                />
            </div>
            <MiniFlowNode
                title="Điện thoại"
                desc="kết nối vào cell phù hợp"
                color="green"
                icon={<Smartphone />}
            />
        </div>
    );
}

function SymbolsVisual() {
    return (
        <div className="space-y-3">
            {symbols.map(([s, meaning, color]) => (
                <div
                    key={s}
                    className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-2xl p-4 flex items-center gap-4`}
                >
                    <div
                        className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-xl flex items-center justify-center font-black`}
                    >
                        {s}
                    </div>
                    <div>
                        <p className="text-white font-black">{s}</p>
                        <p className="text-slate-400 text-sm">{meaning}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function HotspotVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Internet"
                desc="qua nhà mạng"
                color="cyan"
                icon={<Globe2 />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Mạng 4G/5G"
                desc="cellular data"
                color="purple"
                icon={<Signal />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Điện thoại"
                desc="phát WiFi hotspot"
                color="green"
                icon={<Smartphone />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Laptop"
                desc="kết nối WiFi vào điện thoại"
                color="blue"
                icon={<Laptop />}
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
