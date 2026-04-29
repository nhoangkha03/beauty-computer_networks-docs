import React, { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Award,
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Code2,
    Database,
    Eye,
    FileKey,
    Globe2,
    KeyRound,
    Laptop,
    Layers,
    Lock,
    Mail,
    Network,
    RefreshCw,
    Search,
    Send,
    Server,
    ShieldAlert,
    ShieldCheck,
    Terminal,
    Unlock,
    UserRound,
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

const conceptRows = [
    ["Plaintext", "Dữ liệu gốc, đọc được", "matkhau123", "cyan"],
    ["Ciphertext", "Dữ liệu đã mã hóa, khó đọc", "X8a!29Zq...", "purple"],
    ["Key", "Khóa dùng để mã hóa/giải mã", "KhoaBiMat@2026", "orange"],
];

const compareRows = [
    ["Số khóa", "1 khóa chung", "2 khóa: public/private"],
    ["Tốc độ", "Nhanh", "Chậm hơn"],
    ["Mã hóa dữ liệu lớn", "Phù hợp", "Không tối ưu"],
    ["Trao đổi khóa ban đầu", "Khó hơn", "Tốt hơn"],
    ["Ví dụ thuật toán", "AES, ChaCha20", "RSA, ECC"],
    ["Ứng dụng", "Mã hóa dữ liệu phiên", "Trao đổi khóa, chữ ký số, xác thực"],
];

const certCheckRows = [
    ["Tên miền", "Chứng chỉ có đúng cho domain này không?", "cyan"],
    ["Thời hạn", "Chứng chỉ còn hạn không?", "orange"],
    ["CA", "Chứng chỉ có được CA tin cậy ký không?", "purple"],
    ["Chữ ký", "Chứng chỉ có bị sửa đổi không?", "green"],
    ["Thu hồi", "Chứng chỉ có bị thu hồi không?", "red"],
];

const tlsBenefits = [
    [
        "Confidentiality",
        "Tính bí mật",
        "Người ngoài khó đọc nội dung dữ liệu như mật khẩu, cookie, token, nội dung chat.",
        "cyan",
    ],
    [
        "Integrity",
        "Tính toàn vẹn",
        "Dữ liệu khó bị sửa giữa đường mà không bị phát hiện.",
        "green",
    ],
    [
        "Authentication",
        "Xác thực",
        "Trình duyệt kiểm tra website có đúng là website thật không thông qua certificate.",
        "purple",
    ],
];

const httpsLimits = [
    ["Website là đạo đức/tốt", "Website lừa đảo vẫn có thể dùng HTTPS", "red"],
    [
        "Máy bạn không nhiễm malware",
        "Keylogger vẫn có thể ghi mật khẩu trước khi mã hóa",
        "orange",
    ],
    ["Bạn không bị phishing", "Link giả vẫn có thể có ổ khóa HTTPS", "yellow"],
    [
        "Server không bị hack",
        "Dữ liệu sau khi đến server vẫn có thể bị lộ",
        "purple",
    ],
    ["Mật khẩu đủ mạnh", "HTTPS không cứu được mật khẩu 123456", "cyan"],
];

const tlsErrors = [
    [
        "NET::ERR_CERT_DATE_INVALID",
        "Chứng chỉ hết hạn hoặc thời gian máy bạn bị sai",
        "orange",
    ],
    [
        "NET::ERR_CERT_AUTHORITY_INVALID",
        "Chứng chỉ không được CA tin cậy ký hoặc là self-signed",
        "red",
    ],
    ["Domain mismatch", "Tên miền truy cập không khớp chứng chỉ", "purple"],
    ["Mixed Content", "Trang HTTPS nhưng tải script/image bằng HTTP", "yellow"],
];

const commandTabs = {
    certificate: {
        title: "Kiểm tra certificate",
        color: "cyan",
        icon: <Terminal />,
        commands: [
            [
                "OpenSSL s_client",
                "openssl s_client -connect example.com:443 -servername example.com",
            ],
            [
                "Ý nghĩa",
                "Kết nối đến cổng 443 và hiển thị thông tin TLS certificate/server.",
            ],
        ],
    },
    expiry: {
        title: "Xem ngày hết hạn",
        color: "orange",
        icon: <Search />,
        commands: [
            [
                "OpenSSL x509 dates",
                "echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates",
            ],
            [
                "Ví dụ kết quả",
                "notBefore=Apr 1 00:00:00 2026 GMT\nnotAfter=Jun 30 23:59:59 2026 GMT",
            ],
        ],
    },
    headers: {
        title: "Kiểm tra HTTP header",
        color: "green",
        icon: <Code2 />,
        commands: [
            ["curl headers", "curl -I https://example.com"],
            [
                "HSTS",
                "HTTP/2 200\ncontent-type: text/html\nstrict-transport-security: max-age=31536000",
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
                            <Lock className="text-cyan-400" size={24} />
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
                        Bài 9.2
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                <HeroSection />
                <LearningGoals />
                <EncryptionIntro />
                <PlainCipherKeySection />
                <SymmetricSection />
                <AsymmetricSection />
                <HybridSection />
                <SslTlsSection />
                <RealWorldExamples />
                <BasicEncryptionDiagram />
                <SymmetricVsAsymmetricTable />
                <AsymmetricDiagram />
                <HttpsTlsDiagram />
                <TlsHandshakeProcess />
                <CertificateSection />
                <TlsBenefitsSection />
                <HttpsLimitsSection />
                <TlsErrorsSection />
                <CommandPractice />
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
                        <Layers size={16} /> Network Security — Encryption
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Mã hóa
                        <span className="block text-cyan-400">
                            Symmetric, Asymmetric, SSL/TLS
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        Mã hóa biến dữ liệu dễ đọc thành dữ liệu khó hiểu. TLS
                        kết hợp asymmetric và symmetric encryption để tạo kết
                        nối HTTPS an toàn khi truyền dữ liệu qua mạng.
                    </p>
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
                        <p className="text-slate-500">// Ghi nhớ nhanh</p>
                        <p>
                            <span className="text-cyan-300">Plaintext</span> +{" "}
                            <span className="text-orange-300">Key</span> →
                            Encryption →{" "}
                            <span className="text-purple-300">Ciphertext</span>.
                        </p>
                        <p>
                            <span className="text-green-300">Symmetric</span> =
                            cùng một khóa, nhanh.
                        </p>
                        <p>
                            <span className="text-blue-300">Asymmetric</span> =
                            public/private key, tốt cho trao đổi khóa/xác thực.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <HeroCryptoVisual />
                </div>
            </div>
        </section>
    );
}

function LearningGoals() {
    const goals = [
        "Hiểu mã hóa là gì và vì sao quan trọng trong bảo mật mạng.",
        "Phân biệt mã hóa đối xứng và mã hóa bất đối xứng.",
        "Nắm vai trò public key, private key và session key.",
        "Hiểu SSL/TLS là gì và vì sao HTTPS dùng TLS.",
        "Biết cách trình duyệt và website thiết lập kết nối bảo mật khi truy cập https://.",
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

function EncryptionIntro() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="2"
                color="blue"
                title="Mã hóa là gì?"
                icon={<Lock />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div className="space-y-5 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-cyan-300">Mã hóa</strong> là
                            quá trình biến dữ liệu dễ đọc thành dữ liệu khó hiểu
                            để người ngoài không đọc được nội dung thật.
                        </p>
                        <ConceptCard
                            title="Giống bỏ thư vào két sắt"
                            icon={<FileKey />}
                            color="blue"
                            text="Người ngoài có thể thấy két, cầm két, thậm chí chặn được két trên đường đi, nhưng không đọc được thư bên trong nếu không có chìa khóa."
                            code="Plaintext:  Xin chào Hoàng Kha
Ciphertext: A9x#2kL!pQz77@v"
                            compact
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <EncryptionVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlainCipherKeySection() {
    const [active, setActive] = useState("Plaintext");
    const row = conceptRows.find(([name]) => name === active) || conceptRows[0];
    const [, meaning, example, color] = row;
    return (
        <section className="space-y-6">
            <SectionTitle
                number="3"
                color="purple"
                title="Plaintext, Ciphertext và Key"
                icon={<KeyRound />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                            {conceptRows.map(([name, , , c]) => (
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
                            icon={active === "Key" ? <KeyRound /> : <FileKey />}
                            color={color}
                            text={meaning}
                            code={example}
                        />
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th className="p-4">Khái niệm</th>
                                    <th className="p-4">Nghĩa đơn giản</th>
                                    <th className="p-4">Ví dụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {conceptRows.map(([name, m, ex, c], i) => (
                                    <tr
                                        key={name}
                                        onClick={() => setActive(name)}
                                        className={`${i === conceptRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === name ? "bg-slate-900" : ""}`}
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
                    Plaintext + Key → Encryption → Ciphertext Ciphertext + Key →
                    Decryption → Plaintext
                </div>
            </div>
        </section>
    );
}

function SymmetricSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="4"
                color="green"
                title="Mã hóa đối xứng — Symmetric Encryption"
                icon={<KeyRound />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Một khóa chung"
                    icon={<KeyRound />}
                    color="green"
                    text="Mã hóa đối xứng dùng cùng một khóa để mã hóa và giải mã. Nó rất nhanh, phù hợp mã hóa lượng dữ liệu lớn, nhưng khó ở chỗ chia sẻ khóa chung an toàn."
                    code="Người gửi dùng Key A để mã hóa
Người nhận dùng Key A để giải mã

Ví dụ thuật toán: AES, ChaCha20"
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <SymmetricVisual />
                    <div className="mt-5 bg-green-500/10 border border-green-400/40 rounded-2xl p-4 text-sm text-green-300">
                        Ví dụ đời sống: hai người dùng chung một chìa khóa để
                        khóa và mở cùng một chiếc hộp.
                    </div>
                </div>
            </div>
        </section>
    );
}

function AsymmetricSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="5"
                color="blue"
                title="Mã hóa bất đối xứng — Asymmetric Encryption"
                icon={<FileKey />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="Public Key và Private Key"
                        icon={<FileKey />}
                        color="blue"
                        text="Asymmetric encryption dùng một cặp khóa: public key có thể công khai, private key phải giữ bí mật. Dữ liệu mã hóa bằng public key chỉ private key tương ứng mới giải mã được."
                        code="Public Key  → đưa cho mọi người
Private Key → giữ bí mật tuyệt đối

Plaintext + Public Key → Ciphertext
Ciphertext + Private Key → Plaintext"
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                        <AsymmetricVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function HybridSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="6"
                color="emerald"
                title="Vì sao TLS kết hợp cả hai?"
                icon={<RefreshCw />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Asymmetric để bắt đầu, symmetric để truyền dữ liệu"
                    icon={<RefreshCw />}
                    color="emerald"
                    text="TLS thường dùng asymmetric để xác thực và trao đổi thông tin ban đầu, sau đó tạo session key, rồi dùng symmetric encryption với session key để mã hóa dữ liệu chính."
                    code="1. Dùng asymmetric để xác thực/trao đổi khóa
2. Tạo session key
3. Dùng symmetric + session key để mã hóa HTTP data"
                />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <HybridVisual />
                    <div className="mt-5 bg-emerald-500/10 border border-emerald-400/40 rounded-2xl p-4 text-sm text-emerald-300">
                        Session key là khóa tạm thời dùng cho một phiên kết nối;
                        kết thúc phiên thì khóa đó không còn dùng nữa.
                    </div>
                </div>
            </div>
        </section>
    );
}

function SslTlsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="7"
                color="cyan"
                title="SSL/TLS là gì?"
                icon={<ShieldCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <ConceptCard
                        title="TLS bảo vệ dữ liệu khi truyền qua mạng"
                        icon={<ShieldCheck />}
                        color="cyan"
                        text="SSL là Secure Sockets Layer. TLS là Transport Layer Security. Hiện nay khi nói SSL trong đời thường, nhiều người thực ra đang nói đến TLS, vì SSL đã cũ và TLS là chuẩn hiện đại hơn."
                        code="HTTP  = không có lớp mã hóa TLS
HTTPS = HTTP chạy trên TLS

https:// = trình duyệt dùng HTTP qua kết nối TLS"
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 grid md:grid-cols-2 gap-3">
                        <MiniFlowNode
                            title="HTTP"
                            desc="không có TLS"
                            color="red"
                            icon={<Unlock />}
                        />
                        <MiniFlowNode
                            title="HTTPS"
                            desc="HTTP over TLS"
                            color="green"
                            icon={<Lock />}
                        />
                        <MiniFlowNode
                            title="TLS"
                            desc="mã hóa + xác thực"
                            color="cyan"
                            icon={<ShieldCheck />}
                        />
                        <MiniFlowNode
                            title="Certificate"
                            desc="chứng minh domain"
                            color="purple"
                            icon={<BadgeCheck />}
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
                number="8"
                color="green"
                title="Ví dụ đời sống"
                icon={<BookOpen />}
            />
            <div className="grid lg:grid-cols-2 gap-6">
                <ConceptCard
                    title="Hộp thư và ổ khóa"
                    icon={<Mail />}
                    color="green"
                    text="Đối xứng: hai người dùng chung một chìa khóa. Bất đối xứng: người nhận đưa ổ khóa công khai, ai cũng khóa được hộp, nhưng chỉ người nhận có chìa riêng mới mở được."
                    code="Symmetric: chung chìa A
Asymmetric: public lock + private key"
                />
                <ConceptCard
                    title="Nói chuyện trong phòng đông người"
                    icon={<UsersIcon />}
                    color="purple"
                    text="Nếu nói bình thường, ai cũng nghe được. Nếu mã hóa, người ngoài vẫn nghe/nhìn thấy dữ liệu truyền qua mạng nhưng không hiểu nội dung thật."
                    code="Plain: Mật khẩu là Kha123
Encrypted: X7@pL!q9"
                />
            </div>
        </section>
    );
}

function BasicEncryptionDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="9"
                color="blue"
                title="Sơ đồ mã hóa cơ bản"
                icon={<Lock />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <BasicCryptoFlow />
            </div>
        </section>
    );
}

function SymmetricVsAsymmetricTable() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="10"
                color="purple"
                title="Bảng so sánh symmetric và asymmetric"
                icon={<Database />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[760px] text-sm">
                        <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                            <tr>
                                <th className="p-4">Tiêu chí</th>
                                <th className="p-4 text-green-300">
                                    Symmetric Encryption
                                </th>
                                <th className="p-4 text-blue-300">
                                    Asymmetric Encryption
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map(([criteria, sym, asym], i) => (
                                <tr
                                    key={criteria}
                                    className={`${i === compareRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}
                                >
                                    <td className="p-4 text-white font-bold">
                                        {criteria}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {sym}
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {asym}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function AsymmetricDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="11"
                color="blue"
                title="Sơ đồ asymmetric encryption"
                icon={<FileKey />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <AsymmetricDiagramVisual />
            </div>
        </section>
    );
}

function HttpsTlsDiagram() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="12"
                color="cyan"
                title="Sơ đồ HTTPS/TLS đơn giản"
                icon={<Globe2 />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <TlsDiagramVisual />
            </div>
        </section>
    );
}

function TlsHandshakeProcess() {
    const [step, setStep] = useState(0);
    const steps = [
        {
            title: "Client Hello",
            text: "Trình duyệt nói với server: tôi muốn kết nối bảo mật, tôi hỗ trợ các phiên bản TLS và cipher suite này, đây là random của tôi.",
            code: `Browser → Server
Client Hello
Supported TLS versions
Supported cipher suites
Client random`,
            color: "cyan",
            icon: <Send />,
        },
        {
            title: "Server Hello",
            text: "Server chọn phiên bản TLS/cipher suite phù hợp và gửi dữ liệu ngẫu nhiên của server.",
            code: `Server → Browser
Server Hello
Chosen TLS version
Chosen cipher suite
Server random`,
            color: "blue",
            icon: <Server />,
        },
        {
            title: "Server Certificate",
            text: "Server gửi digital certificate để chứng minh domain và public key thuộc về website đó.",
            code: `Certificate:
Domain: example.com
Public Key
Signed by CA`,
            color: "purple",
            icon: <BadgeCheck />,
        },
        {
            title: "Browser kiểm tra certificate",
            text: "Trình duyệt kiểm tra domain, thời hạn, CA, chữ ký và trạng thái thu hồi.",
            code: `Domain match?
Not expired?
Trusted CA?
Signature valid?
Revoked?`,
            color: "orange",
            icon: <Search />,
        },
        {
            title: "Tạo session key",
            text: "Sau khi xác thực, hai bên tạo session key để mã hóa dữ liệu trong phiên kết nối.",
            code: `Session key = khóa đối xứng tạm thời
Dùng cho phiên HTTPS hiện tại`,
            color: "green",
            icon: <KeyRound />,
        },
        {
            title: "HTTP data được mã hóa bằng TLS",
            text: "Dữ liệu thật như request, cookie, token, response HTML/API được mã hóa trước khi đi qua Internet.",
            code: `GET /account HTTP/1.1
Cookie: session_id=abc123
→ encrypted TLS records`,
            color: "emerald",
            icon: <Lock />,
        },
        {
            title: "Server response cũng được mã hóa",
            text: "Server mã hóa phản hồi trước khi gửi về trình duyệt; trình duyệt giải mã và hiển thị website.",
            code: "Server → TLS encrypt response → Internet → Browser decrypt",
            color: "cyan",
            icon: <Globe2 />,
        },
    ];
    return (
        <StepSection
            number="13"
            color="cyan"
            title="Cơ chế hoạt động của SSL/TLS"
            icon={<ShieldCheck />}
            steps={steps}
            step={step}
            setStep={setStep}
        />
    );
}

function CertificateSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="14"
                color="purple"
                title="Certificate và CA là gì?"
                icon={<BadgeCheck />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                    <ConceptCard
                        title="Certificate chứng minh website"
                        icon={<BadgeCheck />}
                        color="purple"
                        text="Digital certificate giúp trình duyệt kiểm tra website có thật sự là domain đang truy cập không, public key có thuộc domain đó không và certificate có được CA đáng tin cậy ký không."
                        code={`Certificate chứng minh:
Website này là example.com
Public key này thuộc về example.com
Chứng chỉ được CA tin cậy ký

CA: DigiCert, GlobalSign, Let's Encrypt, Sectigo`}
                    />
                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th className="p-4">Kiểm tra</th>
                                    <th className="p-4">Ý nghĩa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certCheckRows.map(
                                    ([name, meaning, color], i) => (
                                        <tr
                                            key={name}
                                            className={`${i === certCheckRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}
                                        >
                                            <td
                                                className={`p-4 font-black ${colorClasses[color].text}`}
                                            >
                                                {name}
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

function TlsBenefitsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="15"
                color="emerald"
                title="SSL/TLS bảo vệ được những gì?"
                icon={<ShieldCheck />}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {tlsBenefits.map(([name, vi, desc, color]) => (
                    <div
                        key={name}
                        className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-6`}
                    >
                        <div
                            className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-white font-black mb-1">{name}</h3>
                        <p
                            className={`${colorClasses[color].text} text-sm font-bold mb-3`}
                        >
                            {vi}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function HttpsLimitsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="16"
                color="red"
                title="HTTPS có phải an toàn tuyệt đối không?"
                icon={<AlertTriangle />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                    Không. HTTPS/TLS rất quan trọng, nhưng nó chủ yếu bảo vệ dữ
                    liệu trên đường truyền. Nó không tự đảm bảo website đạo đức,
                    máy bạn sạch malware, hay bạn không bị phishing.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {httpsLimits.map(([title, example, color]) => (
                        <div
                            key={title}
                            className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}
                        >
                            <div
                                className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                            >
                                <XCircle size={24} />
                            </div>
                            <h3 className="text-white font-black mb-2">
                                HTTPS không đảm bảo
                            </h3>
                            <p
                                className={`${colorClasses[color].text} text-sm font-bold mb-2`}
                            >
                                {title}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {example}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-red-500/10 border border-red-400/40 rounded-2xl p-4 font-mono text-sm text-red-300">
                    https://vietcombank-login-secure.example.com Có HTTPS không
                    có nghĩa là website đó là ngân hàng thật. Luôn kiểm tra
                    domain chính xác.
                </div>
            </div>
        </section>
    );
}

function TlsErrorsSection() {
    return (
        <section className="space-y-6">
            <SectionTitle
                number="17"
                color="yellow"
                title="Một số lỗi thường gặp về SSL/TLS"
                icon={<AlertTriangle />}
            />
            <div className="grid md:grid-cols-2 gap-4">
                {tlsErrors.map(([err, desc, color]) => (
                    <div
                        key={err}
                        className={`${colorClasses[color].bg} ${colorClasses[color].border} border rounded-3xl p-5`}
                    >
                        <div
                            className={`${colorClasses[color].solid} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}
                        >
                            <AlertTriangle size={24} />
                        </div>
                        <h3
                            className={`${colorClasses[color].text} font-mono font-black mb-2`}
                        >
                            {err}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-3xl p-6 text-yellow-300 text-sm">
                Không nên bỏ qua cảnh báo chứng chỉ khi đăng nhập, thanh toán
                hoặc nhập dữ liệu nhạy cảm.
            </div>
        </section>
    );
}

function CommandPractice() {
    const [tab, setTab] = useState("certificate");
    const data = commandTabs[tab];
    const c = colorClasses[data.color];
    return (
        <section className="space-y-6">
            <SectionTitle
                number="18"
                color="green"
                title="Lệnh kiểm tra SSL/TLS"
                icon={<Terminal />}
            />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <ChoiceButton
                        active={tab === "certificate"}
                        onClick={() => setTab("certificate")}
                        color="cyan"
                    >
                        Certificate
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "expiry"}
                        onClick={() => setTab("expiry")}
                        color="orange"
                    >
                        Expiry
                    </ChoiceButton>
                    <ChoiceButton
                        active={tab === "headers"}
                        onClick={() => setTab("headers")}
                        color="green"
                    >
                        Headers
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

function CommonMistakes() {
    const mistakes = [
        {
            title: "Nghĩ HTTPS nghĩa là website chắc chắn tốt",
            desc: "Website lừa đảo vẫn có thể có HTTPS. TLS bảo vệ kết nối, không bảo đảm đạo đức của website.",
            fix: "Luôn kiểm tra domain chính xác.",
        },
        {
            title: "Nhầm SSL và TLS",
            desc: "Trong đời thường nhiều người nói SSL nhưng thực tế các hệ thống hiện đại dùng TLS.",
            fix: "Hiểu SSL là tên cũ, TLS là chuẩn hiện đại hơn.",
        },
        {
            title: "Dùng asymmetric để mã hóa toàn bộ dữ liệu lớn",
            desc: "Asymmetric chậm hơn, không tối ưu cho dữ liệu web lớn như ảnh, video, API response.",
            fix: "TLS dùng asymmetric ban đầu, sau đó dùng session key đối xứng.",
        },
        {
            title: "Bỏ qua cảnh báo certificate",
            desc: "Cảnh báo chứng chỉ có thể báo domain sai, chứng chỉ hết hạn hoặc CA không đáng tin.",
            fix: "Không bỏ qua khi đăng nhập/thanh toán.",
        },
        {
            title: "Tưởng TLS bảo vệ máy đã nhiễm malware",
            desc: "Keylogger trên máy có thể ghi mật khẩu trước khi dữ liệu được TLS mã hóa.",
            fix: "TLS là một lớp bảo vệ; vẫn cần bảo vệ endpoint.",
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
                                Encryption biến dữ liệu dễ đọc thành dữ liệu khó
                                hiểu.
                            </p>
                            <p>
                                Plaintext là dữ liệu gốc; ciphertext là dữ liệu
                                đã mã hóa; key là chìa khóa.
                            </p>
                            <p>
                                Symmetric encryption dùng một khóa chung, nhanh,
                                phù hợp dữ liệu lớn.
                            </p>
                            <p>
                                Asymmetric encryption dùng public/private key,
                                tốt cho xác thực và trao đổi khóa.
                            </p>
                            <p>
                                Session key là khóa đối xứng tạm thời cho một
                                phiên kết nối.
                            </p>
                            <p>
                                TLS kết hợp asymmetric để bắt đầu an toàn và
                                symmetric để truyền dữ liệu nhanh.
                            </p>
                            <p>SSL là tên cũ; TLS là chuẩn hiện đại hơn.</p>
                            <p>HTTPS = HTTP chạy trên TLS.</p>
                            <p>
                                Certificate giúp trình duyệt kiểm tra danh tính
                                website.
                            </p>
                            <p>CA là tổ chức cấp/ký chứng chỉ số.</p>
                            <p>
                                TLS bảo vệ confidentiality, integrity,
                                authentication.
                            </p>
                            <p>
                                HTTPS bảo vệ kết nối, không tự chống phishing,
                                malware hoặc server bị hack.
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
        question: "Trong mã hóa đối xứng, hai bên dùng gì?",
        options: [
            "Cùng một khóa bí mật",
            "Hai private key khác nhau",
            "Một public key và một private key",
            "Không cần khóa",
        ],
        correct: 0,
        explanation:
            "Symmetric encryption dùng cùng một khóa để mã hóa và giải mã.",
    },
    {
        question: "Vì sao TLS thường kết hợp asymmetric và symmetric?",
        options: [
            "Asymmetric tốt cho xác thực/trao đổi khóa, symmetric nhanh để mã hóa dữ liệu chính",
            "Vì symmetric luôn không an toàn",
            "Vì asymmetric nhanh hơn symmetric",
            "Vì TLS không dùng session key",
        ],
        correct: 0,
        explanation:
            "TLS dùng asymmetric cho giai đoạn bắt tay và xác thực, sau đó dùng session key đối xứng để truyền dữ liệu nhanh.",
    },
    {
        question: "Public key và private key khác nhau thế nào?",
        options: [
            "Public key có thể công khai; private key phải giữ bí mật",
            "Public key là mật khẩu WiFi",
            "Private key đưa cho mọi người",
            "Hai khóa luôn giống nhau",
        ],
        correct: 0,
        explanation:
            "Trong asymmetric encryption, public key có thể chia sẻ, còn private key phải được bảo vệ tuyệt đối.",
    },
    {
        question: "HTTPS là gì?",
        options: [
            "HTTP chạy trên kết nối được bảo vệ bằng TLS",
            "Một loại WiFi",
            "Một kiểu DNS record",
            "Một thuật toán nén ảnh",
        ],
        correct: 0,
        explanation:
            "HTTPS = HTTP over TLS. TLS mã hóa và xác thực kết nối giữa browser và web server.",
    },
    {
        question: "Certificate giúp trình duyệt làm gì?",
        options: [
            "Kiểm tra danh tính website và public key thuộc về domain đó",
            "Tăng tốc CPU",
            "Thay thế mật khẩu người dùng",
            "Chặn mọi malware trên máy",
        ],
        correct: 0,
        explanation:
            "Certificate chứng minh domain, public key và chữ ký từ CA đáng tin cậy.",
    },
    {
        question:
            "Website lừa đảo vẫn có HTTPS. HTTPS trong trường hợp đó bảo vệ được gì và không bảo vệ được gì?",
        options: [
            "Bảo vệ kết nối đến website đó, nhưng không chứng minh đó là website thật của ngân hàng",
            "Bảo vệ khỏi mọi phishing",
            "Bảo vệ khỏi keylogger trên máy",
            "Bảo đảm server không bị hack",
        ],
        correct: 0,
        explanation:
            "HTTPS bảo vệ dữ liệu trên đường truyền đến domain đang truy cập. Người dùng vẫn phải kiểm tra domain thật và tránh phishing.",
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
                    Hoàn thành bài mã hóa & TLS!
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
                Bài tiếp theo học về Firewall — tường lửa kiểm soát luồng mạng
                vào/ra hệ thống.
            </p>
            <Link
                to="/phan-9-3"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Bài tiếp theo: 9.3 — Firewall: Tường lửa{" "}
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

function UsersIcon() {
    return <UserRound />;
}

function HeroCryptoVisual() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Plaintext"
                    value="readable"
                    color="cyan"
                    icon={<FileKey />}
                />
                <MiniCard
                    title="Key"
                    value="secret"
                    color="orange"
                    icon={<KeyRound />}
                />
                <MiniCard
                    title="Ciphertext"
                    value="encrypted"
                    color="purple"
                    icon={<Lock />}
                />
            </div>
            <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                <p className="text-cyan-300">
                    Browser --- Client Hello ---&gt; Server
                </p>
                <p className="text-purple-300">
                    Browser &lt;-- Certificate/Public Key --- Server
                </p>
                <p className="text-green-300">
                    === Session Key established ===
                </p>
                <p className="text-emerald-300">HTTP data encrypted with TLS</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <MiniCard
                    title="Symmetric"
                    value="fast"
                    color="green"
                    icon={<Zap />}
                />
                <MiniCard
                    title="Asymmetric"
                    value="public/private"
                    color="blue"
                    icon={<FileKey />}
                />
                <MiniCard
                    title="TLS"
                    value="HTTPS"
                    color="cyan"
                    icon={<ShieldCheck />}
                />
            </div>
        </div>
    );
}

function EncryptionVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Dữ liệu gốc"
                desc="Xin chào Hoàng Kha"
                color="cyan"
                icon={<FileKey />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Encryption + Key"
                desc="KhoaBiMat"
                color="orange"
                icon={<KeyRound />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Dữ liệu đã mã hóa"
                desc="A9x#2kL!pQz77@v"
                color="purple"
                icon={<Lock />}
            />
        </div>
    );
}

function SymmetricVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Người gửi"
                desc="Key A: mã hóa"
                color="green"
                icon={<UserRound />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Ciphertext"
                desc="gửi qua mạng"
                color="purple"
                icon={<Lock />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Người nhận"
                desc="Key A: giải mã"
                color="green"
                icon={<UserRound />}
            />
        </div>
    );
}

function AsymmetricVisual() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
                <MiniCard
                    title="Public Key"
                    value="công khai"
                    color="blue"
                    icon={<Unlock />}
                />
                <MiniCard
                    title="Private Key"
                    value="giữ bí mật"
                    color="red"
                    icon={<Lock />}
                />
            </div>
            <MiniFlowNode
                title="Người gửi"
                desc="Plaintext + Public Key"
                color="cyan"
                icon={<Send />}
            />
            <ArrowRight className="mx-auto text-slate-500 rotate-90" />
            <MiniFlowNode
                title="Người nhận"
                desc="Ciphertext + Private Key"
                color="green"
                icon={<KeyRound />}
            />
        </div>
    );
}

function HybridVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="1. Asymmetric"
                desc="xác thực và trao đổi khóa ban đầu"
                color="blue"
                icon={<FileKey />}
            />
            <MiniFlowNode
                title="2. Session Key"
                desc="khóa tạm thời cho phiên"
                color="orange"
                icon={<KeyRound />}
            />
            <MiniFlowNode
                title="3. Symmetric"
                desc="mã hóa dữ liệu chính nhanh"
                color="green"
                icon={<Zap />}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300">
                HTTPS = an toàn ban đầu + truyền dữ liệu nhanh
            </div>
        </div>
    );
}

function BasicCryptoFlow() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <MiniFlowNode
                    title="Plaintext"
                    desc="Tôi chuyển 5 triệu"
                    color="cyan"
                    icon={<FileKey />}
                />
                <ArrowRight className="text-slate-500 mx-auto" />
                <MiniFlowNode
                    title="Ciphertext"
                    desc="9xA@pLz#1Q..."
                    color="purple"
                    icon={<Lock />}
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">
                Plaintext + Key → Encryption → Ciphertext Ciphertext + Key →
                Decryption → Plaintext
            </div>
        </div>
    );
}

function AsymmetricDiagramVisual() {
    return (
        <div className="space-y-4">
            <MiniFlowNode
                title="Người nhận tạo cặp khóa"
                desc="Public Key + Private Key"
                color="blue"
                icon={<FileKey />}
            />
            <MiniFlowNode
                title="Public Key"
                desc="đưa cho mọi người"
                color="cyan"
                icon={<Unlock />}
            />
            <MiniFlowNode
                title="Private Key"
                desc="giữ bí mật"
                color="red"
                icon={<Lock />}
            />
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">
                Người gửi: Plaintext + Public Key → Ciphertext Người nhận:
                Ciphertext + Private Key → Plaintext
            </div>
        </div>
    );
}

function TlsDiagramVisual() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
                <MiniFlowNode
                    title="Browser"
                    desc="client"
                    color="cyan"
                    icon={<Laptop />}
                />
                <MiniFlowNode
                    title="Web Server"
                    desc="example.com"
                    color="green"
                    icon={<Server />}
                />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-300 whitespace-pre-wrap">
                [Browser] [Web Server] | ----------- Client Hello
                ----------------&gt; | | &lt;---------- Certificate/Public Key
                -------- | | ----------- Key Exchange ----------------&gt; | |
                === Tạo Session Key chung an toàn === | | &lt;====== Dữ liệu
                HTTP đã mã hóa TLS ======&gt; |
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
