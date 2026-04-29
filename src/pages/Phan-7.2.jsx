import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  FileJson,
  FileText,
  Globe2,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Mail,
  Network,
  Package,
  RefreshCw,
  Route,
  Search,
  Send,
  Server,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Timer,
  Unlock,
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

const methodRows = [
  ["GET", "Lấy dữ liệu", "Xem danh sách sản phẩm", "GET /products", "cyan"],
  ["POST", "Gửi/tạo dữ liệu mới", "Đăng ký tài khoản", "POST /users", "emerald"],
  ["PUT", "Cập nhật toàn bộ", "Sửa toàn bộ hồ sơ", "PUT /users/5", "orange"],
  ["PATCH", "Cập nhật một phần", "Đổi số điện thoại", "PATCH /users/5", "purple"],
  ["DELETE", "Xóa dữ liệu", "Xóa bài viết", "DELETE /posts/5", "red"],
];

const statusRows = [
  ["1xx", "Thông tin", "100 Continue", "blue"],
  ["2xx", "Thành công", "200 OK, 201 Created", "green"],
  ["3xx", "Chuyển hướng", "301, 302", "yellow"],
  ["4xx", "Lỗi phía client", "400, 401, 403, 404", "orange"],
  ["5xx", "Lỗi phía server", "500, 502, 503", "red"],
];

const commonStatus = [
  ["200", "OK", "Request thành công", "green"],
  ["201", "Created", "Đã tạo tài nguyên mới", "emerald"],
  ["301", "Moved Permanently", "Chuyển hướng vĩnh viễn", "yellow"],
  ["400", "Bad Request", "Request sai cú pháp/dữ liệu", "orange"],
  ["401", "Unauthorized", "Chưa đăng nhập/chưa xác thực", "orange"],
  ["403", "Forbidden", "Không có quyền truy cập", "red"],
  ["404", "Not Found", "Không tìm thấy tài nguyên", "red"],
  ["500", "Internal Server Error", "Lỗi phía server", "red"],
];

const comparisonRows = [
  ["Port mặc định", "80", "443"],
  ["Mã hóa", "Không", "Có, bằng TLS"],
  ["Dữ liệu có thể bị đọc lén?", "Có thể", "Khó hơn nhiều"],
  ["Xác thực server", "Không tốt", "Có chứng chỉ số"],
  ["Đăng nhập/thanh toán", "Không nên", "Nên dùng"],
  ["URL bắt đầu bằng", "http://", "https://"],
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-20">
      <header className="bg-slate-950/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Globe2 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Khóa học Mạng Máy Tính</h1>
              <p className="text-xs text-slate-500">Phần 7: Tầng Ứng Dụng — Application Layer</p>
            </div>
          </div>
          <div className="text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Bài 7.2</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <LearningGoals />
        <HttpDefinition />
        <HttpsDefinition />
        <HttpRisk />
        <TlsProtection />
        <RequestResponse />
        <MethodSection />
        <StatusCodeSection />
        <RestaurantAnalogy />
        <LayerModel />
        <HttpVsHttpsTable />
        <MessageStructure />
        <HttpProcess />
        <HttpsProcess />
        <CertificateSection />
        <HeaderBodySection />
        <CurlAndBrowserPractice />
        <TechnicalFlow />
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
            <Layers size={16} /> Application Layer — Web Protocols
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            HTTP & HTTPS
            <span className="block text-cyan-400">Trình duyệt nói chuyện với web server</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            HTTP là giao thức request/response giữa client và server. HTTPS là HTTP được bảo vệ bằng TLS để mã hóa, kiểm tra toàn vẹn và xác thực server.
          </p>
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-sm max-w-xl">
            <p className="text-slate-500">// Ghi nhớ nhanh</p>
            <p><span className="text-orange-300">HTTP</span> = web request/response, thường port 80.</p>
            <p><span className="text-emerald-300">HTTPS</span> = HTTP + TLS, thường port 443.</p>
            <p><span className="text-cyan-300">Request</span> → <span className="text-purple-300">Response</span>.</p>
          </div>
        </div>
        <div className="bg-slate-950/70 rounded-3xl border border-slate-800 p-5 shadow-inner">
          <HeroHttpVisual />
        </div>
      </div>
    </section>
  );
}

function LearningGoals() {
  const goals = [
    "Hiểu HTTP là gì và dùng để làm gì.",
    "Phân biệt HTTP và HTTPS.",
    "Biết browser và web server trao đổi dữ liệu theo request/response.",
    "Nắm method, status code, header và body.",
    "Hiểu HTTPS an toàn hơn nhờ TLS/SSL.",
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

function HttpDefinition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="2" color="blue" title="HTTP là gì?" icon={<Globe2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p><strong className="text-cyan-300">HTTP</strong> là viết tắt của <strong className="text-white">HyperText Transfer Protocol</strong>.</p>
            <p>Nói đơn giản, HTTP là bộ quy tắc để <strong className="text-blue-300">trình duyệt</strong> và <strong className="text-orange-300">web server</strong> nói chuyện với nhau.</p>
            <ConceptCard title="HTTP = ngôn ngữ giao tiếp web" icon={<Send />} color="blue" text="Client gửi request: cho tôi tài nguyên này. Server trả response: đây là HTML, CSS, JavaScript, JSON, ảnh hoặc file." code={`Browser ---- HTTP Request ----> Web Server
Browser <--- HTTP Response --- Web Server`} compact />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <RequestResponseVisual encrypted={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpsDefinition() {
  return (
    <section className="space-y-6">
      <SectionTitle number="3" color="emerald" title="HTTPS là gì?" icon={<Lock />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="HTTPS = HTTP + TLS" icon={<ShieldCheck />} color="emerald" text="HTTPS về cơ bản vẫn là HTTP, nhưng dữ liệu HTTP được đặt bên trong kênh mã hóa TLS." code={`HTTPS = HTTP + TLS Encryption
HTTP:  port 80
HTTPS: port 443`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
            <HttpsTunnelVisual />
            <div className="grid md:grid-cols-2 gap-3">
              <MiniCard title="HTTP" value="port 80, không mã hóa" color="orange" icon={<Unlock />} />
              <MiniCard title="HTTPS" value="port 443, có TLS" color="emerald" icon={<Lock />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpRisk() {
  return (
    <section className="space-y-6">
      <SectionTitle number="4" color="red" title="Vì sao HTTP không an toàn?" icon={<ShieldAlert />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="HTTP gửi plain text" icon={<Eye />} color="red" text="Nếu dữ liệu đi qua HTTP bị chặn trên đường truyền, người nghe lén có thể đọc hoặc sửa nội dung." code={`username=admin
password=123456`} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <div className="grid md:grid-cols-3 gap-3">
              <SecurityPillar title="Confidentiality" value="Không" desc="Có thể bị đọc" color="red" />
              <SecurityPillar title="Integrity" value="Không tốt" desc="Có thể bị sửa" color="orange" />
              <SecurityPillar title="Authentication" value="Không tốt" desc="Khó chắc server thật" color="yellow" />
            </div>
            <div className="mt-5 bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300">
              HTTP giống gửi thư không bỏ phong bì: ai chặn được đều có thể đọc nội dung.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TlsProtection() {
  const [selected, setSelected] = useState("encrypt");
  const data = {
    encrypt: ["Mã hóa dữ liệu", "Người ngoài không đọc được nội dung HTTP bên trong kênh TLS.", "Plain text → encrypted bytes", "emerald", <Lock />],
    integrity: ["Kiểm tra toàn vẹn", "TLS giúp phát hiện dữ liệu bị sửa trên đường truyền.", "Detect tampering", "cyan", <CheckCircle2 />],
    auth: ["Xác thực server", "Certificate giúp trình duyệt biết mình đang kết nối đúng website thật.", "Certificate + CA trust", "purple", <KeyRound />],
  }[selected];
  return (
    <section className="space-y-6">
      <SectionTitle number="5" color="emerald" title="HTTPS bảo vệ bằng cách nào?" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <ChoiceButton active={selected === "encrypt"} onClick={() => setSelected("encrypt")} color="emerald">Mã hóa</ChoiceButton>
              <ChoiceButton active={selected === "integrity"} onClick={() => setSelected("integrity")} color="cyan">Toàn vẹn</ChoiceButton>
              <ChoiceButton active={selected === "auth"} onClick={() => setSelected("auth")} color="purple">Xác thực</ChoiceButton>
            </div>
            <ConceptCard title={data[0]} icon={data[4]} color={data[3]} text={data[1]} code={data[2]} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <TlsProtectionVisual selected={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RequestResponse() {
  const [mode, setMode] = useState("request");
  return (
    <section className="space-y-6">
      <SectionTitle number="6" color="cyan" title="Request và Response" icon={<Send />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={mode === "request" ? "HTTP Request" : "HTTP Response"} icon={mode === "request" ? <Send /> : <Server />} color={mode === "request" ? "cyan" : "purple"} text={mode === "request" ? "Request là yêu cầu từ client gửi đến server. Client có thể là browser, app mobile, Postman hoặc curl." : "Response là phản hồi từ server gửi về client, gồm status code, headers và body."} code={mode === "request" ? `GET /index.html HTTP/1.1
Host:example.com
User-Agent: Chrome` : `HTTP/1.1 200 OK
Content-Type: text/html

<html>Hello</html>`} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "request"} onClick={() => setMode("request")} color="cyan">Request</ChoiceButton>
              <ChoiceButton active={mode === "response"} onClick={() => setMode("response")} color="purple">Response</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <HttpMessageBreakdown mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const [active, setActive] = useState("GET");
  const row = methodRows.find(([method]) => method === active) || methodRows[0];
  const [, meaning, example, api, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="7" color="orange" title="HTTP Method là gì?" icon={<Code2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {methodRows.map(([method, , , , c]) => <ChoiceButton key={method} active={active === method} onClick={() => setActive(method)} color={c}>{method}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${meaning}`} icon={<Code2 />} color={color} text={`Ví dụ thực tế: ${example}. Method cho server biết client muốn làm gì với tài nguyên.`} code={api} />
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm min-w-[720px]">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                <tr><th className="p-4">Method</th><th className="p-4">Ý nghĩa</th><th className="p-4">Ví dụ</th><th className="p-4">API</th></tr>
              </thead>
              <tbody>
                {methodRows.map(([method, text, ex, apiEx, c], i) => (
                  <tr key={method} onClick={() => setActive(method)} className={`${i === methodRows.length - 1 ? "" : "border-b border-slate-800"} cursor-pointer hover:bg-slate-900/70 ${active === method ? "bg-slate-900" : ""}`}>
                    <td className={`p-4 font-black ${colorClasses[c].text}`}>{method}</td>
                    <td className="p-4 text-white font-bold">{text}</td>
                    <td className="p-4 text-slate-300">{ex}</td>
                    <td className="p-4 text-green-300 font-mono">{apiEx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusCodeSection() {
  const [active, setActive] = useState("2xx");
  const row = statusRows.find(([group]) => group === active) || statusRows[1];
  const [, meaning, examples, color] = row;
  return (
    <section className="space-y-6">
      <SectionTitle number="8" color="green" title="Status Code là gì?" icon={<CheckCircle2 />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {statusRows.map(([group, , , c]) => <ChoiceButton key={group} active={active === group} onClick={() => setActive(group)} color={c}>{group}</ChoiceButton>)}
            </div>
            <ConceptCard title={`${active} — ${meaning}`} icon={<CheckCircle2 />} color={color} text="Status code là mã trạng thái server trả về để báo kết quả xử lý request." code={examples} />
          </div>
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400"><tr><th className="p-4">Code</th><th className="p-4">Tên</th><th className="p-4">Ý nghĩa</th></tr></thead>
                <tbody>
                  {commonStatus.map(([code, name, desc, c], i) => <tr key={code} className={`${i === commonStatus.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-900/70`}><td className={`p-4 font-black ${colorClasses[c].text}`}>{code}</td><td className="p-4 text-white font-bold">{name}</td><td className="p-4 text-slate-300">{desc}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RestaurantAnalogy() {
  return (
    <section className="space-y-6">
      <SectionTitle number="9" color="purple" title="Ví dụ đời thực: gọi món ở nhà hàng" icon={<ShoppingCart />} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ConceptCard title="HTTP giống gọi món" icon={<ShoppingCart />} color="purple" text="Khách hàng gửi yêu cầu gọi món. Nhà bếp xử lý và trả món ăn. Nếu món hết, nhà bếp trả trạng thái lỗi." code={`Khách hàng ---- Gọi món ----> Nhà bếp
Khách hàng <--- Món ăn ----- Nhà bếp`} />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <MappingCard left="Khách hàng" right="Client" color="cyan" />
            <MappingCard left="Nhà bếp" right="Server" color="orange" />
            <MappingCard left="Gọi món" right="Request" color="green" />
            <MappingCard left="Món trả ra" right="Response" color="purple" />
            <MappingCard left="Tên món" right="URL/path" color="blue" />
            <MappingCard left="Món còn/hết" right="Status Code" color="yellow" />
          </div>
          <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">GET /menu
            POST /orders
            DELETE /orders/5</div>
        </div>
      </div>
    </section>
  );
}

function LayerModel() {
  const [mode, setMode] = useState("https");
  return (
    <section className="space-y-6">
      <SectionTitle number="10" color="cyan" title="HTTP nằm ở đâu trong mô hình mạng?" icon={<Layers />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title="Application Layer" icon={<Layers />} color="cyan" text="HTTP/HTTPS là giao thức tầng ứng dụng. HTTP/HTTPS truyền thống chạy phía trên TCP và IP." code={`Application: HTTP / HTTPS
Transport:   TCP
Network:     IP`} />
            <div className="flex gap-2">
              <ChoiceButton active={mode === "http"} onClick={() => setMode("http")} color="orange">HTTP</ChoiceButton>
              <ChoiceButton active={mode === "https"} onClick={() => setMode("https")} color="emerald">HTTPS</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <LayerStack mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpVsHttpsTable() {
  return (
    <section className="space-y-6">
      <SectionTitle number="11" color="emerald" title="Bảng so sánh HTTP và HTTPS" icon={<ShieldCheck />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead className="bg-slate-950 border-b border-slate-800 text-sm text-slate-400"><tr><th className="p-4">Tiêu chí</th><th className="p-4 text-orange-300">HTTP</th><th className="p-4 text-emerald-300">HTTPS</th></tr></thead>
            <tbody className="text-sm">
              {comparisonRows.map(([criteria, http, https], i) => <tr key={criteria} className={`${i === comparisonRows.length - 1 ? "" : "border-b border-slate-800"} hover:bg-slate-800/40`}><td className="p-4 text-white font-bold">{criteria}</td><td className="p-4 text-slate-300">{http}</td><td className="p-4 text-slate-300">{https}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function MessageStructure() {
  const [type, setType] = useState("request");
  return (
    <section className="space-y-6">
      <SectionTitle number="12" color="blue" title="Cấu trúc HTTP Message" icon={<FileText />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="space-y-4">
            <ConceptCard title={type === "request" ? "Request Message" : "Response Message"} icon={<FileText />} color={type === "request" ? "blue" : "green"} text="Một HTTP message thường có dòng đầu, headers, dòng trống và body tùy chọn." code={type === "request" ? `Request Line
Headers

Body tùy chọn` : `Status Line
Headers

Body tùy chọn`} />
            <div className="flex gap-2">
              <ChoiceButton active={type === "request"} onClick={() => setType("request")} color="blue">Request</ChoiceButton>
              <ChoiceButton active={type === "response"} onClick={() => setType("response")} color="green">Response</ChoiceButton>
            </div>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <MessageStructureVisual type={type} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HttpProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Trình duyệt cần IP", text: "Người dùng nhập http://example.com. Browser cần biết IP của domain.", code: "example.com → ?", color: "cyan", icon: <Globe2 /> },
    { title: "DNS phân giải tên miền", text: "Browser dùng DNS để lấy IP của example.com.", code: "DNS lookup → server IP", color: "blue", icon: <Search /> },
    { title: "TCP đến port 80", text: "Browser tạo TCP connection đến web server port 80.", code: "Browser -- TCP:80 --> Server", color: "orange", icon: <Network /> },
    {
      title: "Gửi HTTP request plain text", text: "Request không được mã hóa, có thể đọc được nếu bị chặn.", code: `GET / HTTP/1.1
Host: example.com`, color: "red", icon: <Unlock /> },
    { title: "Server xử lý request", text: "Web server tìm tài nguyên, chạy logic backend nếu cần.", code: "Handle request", color: "purple", icon: <Server /> },
    {
      title: "Server trả response plain text", text: "Response cũng không được mã hóa.", code: `HTTP/1.1 200 OK
Content- Type: text / html`, color: "red", icon: <FileText /> },
    { title: "Browser hiển thị nội dung", text: "Trình duyệt nhận HTML/CSS/JS/ảnh và render giao diện.", code: "Render page", color: "green", icon: <CheckCircle2 /> },
  ];
  return <StepSection number="13" color="orange" title="Khi truy cập website HTTP" icon={<Unlock />} steps={steps} step={step} setStep={setStep} />;
}

function HttpsProcess() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "DNS tìm IP", text: "Browser phân giải example.com thành IP trước.", code: "DNS lookup example.com", color: "cyan", icon: <Search /> },
    { title: "TCP đến port 443", text: "Browser tạo TCP connection đến server port 443.", code: "Browser -- TCP:443 --> Server", color: "blue", icon: <Network /> },
    { title: "TLS handshake", text: "Browser và server bắt đầu thiết lập kênh mã hóa.", code: "ClientHello / ServerHello", color: "purple", icon: <KeyRound /> },
    { title: "Kiểm tra certificate", text: "Browser kiểm tra chứng chỉ có đúng domain, còn hạn, được CA tin cậy ký không.", code: "Certificate valid?", color: "emerald", icon: <ShieldCheck /> },
    { title: "Thống nhất khóa phiên", text: "Hai bên thống nhất khóa mã hóa cho phiên làm việc.", code: "Session keys established", color: "green", icon: <Lock /> },
    { title: "Gửi HTTP trong TLS", text: "HTTP request được mã hóa bên trong kênh TLS.", code: "Encrypted HTTP Request", color: "cyan", icon: <Send /> },
    { title: "Server xử lý và mã hóa response", text: "Server giải mã request, xử lý, rồi mã hóa response trước khi gửi lại.", code: "Encrypted HTTP Response", color: "orange", icon: <Server /> },
    { title: "Browser giải mã và hiển thị", text: "Browser nhận response, giải mã và render nội dung.", code: "Decrypt → Render", color: "green", icon: <CheckCircle2 /> },
  ];
  return <StepSection number="14" color="emerald" title="Khi truy cập website HTTPS" icon={<Lock />} steps={steps} step={step} setStep={setStep} />;
}

function CertificateSection() {
  const checks = [
    ["Còn hạn không?", "Certificate chưa hết hạn", "green", <Timer />],
    ["Đúng domain không?", "Certificate khớp example.com", "cyan", <Globe2 />],
    ["CA có tin cậy không?", "Được CA đáng tin cậy ký", "purple", <ShieldCheck />],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="15" color="purple" title="TLS Certificate là gì?" icon={<KeyRound />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <ConceptCard title="Certificate xác minh server" icon={<KeyRound />} color="purple" text="TLS Certificate, thường gọi là chứng chỉ SSL, giúp trình duyệt xác minh website có đáng tin không trước khi gửi dữ liệu nhạy cảm." code={`https://example.com
Server sends certificate
Browser verifies trust`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-3">
            {checks.map(([title, desc, color, icon]) => <MiniFlowNode key={title} title={title} desc={desc} color={color} icon={icon} />)}
            <div className="bg-red-500/10 border border-red-400/40 rounded-2xl p-4 text-sm text-red-300 mt-4">
              Nếu chứng chỉ lỗi, trình duyệt có thể cảnh báo: <strong>Your connection is not private</strong>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeaderBodySection() {
  return (
    <section className="space-y-6">
      <SectionTitle number="16" color="cyan" title="Header và Body" icon={<FileJson />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <ConceptCard title="Header mô tả, Body chứa dữ liệu" icon={<FileJson />} color="cyan" text="Header chứa metadata như Host, Content-Type, Authorization. Body chứa dữ liệu chính như JSON đăng nhập hoặc nội dung form." code={`Header = thông tin mô tả
Body   = nội dung chính`} />
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
            <AnnotatedLoginRequest />
          </div>
        </div>
      </div>
    </section>
  );
}

function CurlAndBrowserPractice() {
  const [tab, setTab] = useState("curl");
  const commands = [
    ["GET cơ bản", "curl http://example.com"],
    ["Xem cả header response", "curl -i http://example.com"],
    ["Gửi HTTPS", "curl -i https://example.com"],
    ["Gửi POST JSON", "curl -X POST https://api.example.com/login \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"username\":\"admin\",\"password\":\"123456\"}'"],
    ["Xem kết nối chi tiết", "curl -v https://example.com"],
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="17" color="green" title="Thử HTTP bằng công cụ thực tế" icon={<Terminal />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <ChoiceButton active={tab === "curl"} onClick={() => setTab("curl")} color="green">curl</ChoiceButton>
          <ChoiceButton active={tab === "browser"} onClick={() => setTab("browser")} color="blue">Browser DevTools</ChoiceButton>
        </div>
        {tab === "curl" ? (
          <div className="bg-green-500/10 border border-green-400/40 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-5"><div className="bg-green-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20"><Terminal size={24} /></div><h3 className="text-xl font-bold text-white">curl command</h3></div>
            <div className="grid lg:grid-cols-2 gap-3">
              {commands.map(([label, cmd]) => <div key={label} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"><p className="text-xs text-slate-500 font-bold uppercase mb-2">{label}</p><pre className="text-green-300 font-mono text-sm whitespace-pre-wrap break-all">{cmd}</pre></div>)}
            </div>
          </div>
        ) : (
          <div className="bg-blue-500/10 border border-blue-400/40 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-5"><div className="bg-blue-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20"><Globe2 size={24} /></div><h3 className="text-xl font-bold text-white">Chrome/Edge DevTools</h3></div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 mb-4">F12 → Network → Reload page</div>
            <div className="grid md:grid-cols-5 gap-3 text-sm">
              {[["Name", "Tài nguyên"], ["Status", "Status code"], ["Type", "Loại dữ liệu"], ["Method", "GET/POST"], ["Time", "Thời gian tải"]].map(([a, b]) => <div key={a} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"><p className="text-blue-300 font-black">{a}</p><p className="text-slate-400 mt-1">{b}</p></div>)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TechnicalFlow() {
  return (
    <section className="space-y-6">
      <SectionTitle number="18" color="cyan" title="Ví dụ kỹ thuật: mở website HTTPS" icon={<Route />} />
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <ConceptCard title="Bạn nhập URL" icon={<Globe2 />} color="cyan" text="Khi nhập https://example.com/products, browser phải đi qua DNS, TCP, TLS rồi mới gửi HTTP request." code="https://example.com/products" />
          <ConceptCard title="Thứ tự tổng quát" icon={<Route />} color="emerald" text="DNS tìm IP trước, TCP mở kết nối, TLS thiết lập mã hóa, HTTP trao đổi dữ liệu bên trong kênh đã mã hóa." code="DNS → TCP:443 → TLS → GET /products → encrypted response" />
        </div>
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-3xl p-5 font-mono text-sm text-green-300 overflow-x-auto space-y-2">
          <p>1. DNS tìm IP của example.com.</p>
          <p>2. TCP 3-Way Handshake đến server port 443.</p>
          <p>3. TLS handshake thiết lập mã hóa.</p>
          <p>4. Browser gửi HTTP request bên trong kênh HTTPS.</p>
          <p>5. Server trả HTTP response đã được mã hóa.</p>
          <p>6. Browser giải mã và hiển thị trang.</p>
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  const mistakes = [
    { title: "Nghĩ HTTPS là giao thức khác hoàn toàn HTTP", desc: "HTTPS vẫn là HTTP, nhưng HTTP chạy bên trong lớp bảo vệ TLS.", fix: "HTTPS = HTTP + TLS." },
    { title: "Nghĩ HTTPS che giấu mọi thứ", desc: "HTTPS mã hóa nội dung HTTP, nhưng người ngoài vẫn có thể thấy bạn kết nối đến một IP nào đó.", fix: "HTTPS bảo vệ nội dung, không phải ẩn toàn bộ metadata mạng." },
    { title: "Nhầm TCP handshake với TLS handshake", desc: "TCP handshake mở kết nối transport. TLS handshake thiết lập bảo mật bên trên TCP.", fix: "HTTPS thường cần TCP trước, TLS sau." },
    { title: "Nghĩ 404 là lỗi server", desc: "404 thuộc nhóm 4xx, nghĩa là lỗi phía client/request: tài nguyên không tìm thấy.", fix: "5xx mới là lỗi phía server." },
    { title: "Gửi password qua HTTP", desc: "HTTP plain text có thể bị đọc lén, đặc biệt trên mạng không tin cậy.", fix: "Login/thanh toán phải dùng HTTPS." },
  ];
  return (
    <section className="space-y-6">
      <SectionTitle number="19" color="yellow" title="Lỗi hiểu nhầm phổ biến" icon={<AlertTriangle />} />
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((m) => <div key={m.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-yellow-500/40 transition-colors"><div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-300 flex items-center justify-center mb-4"><AlertTriangle size={24} /></div><h3 className="text-white font-bold text-lg mb-3">{m.title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-4">{m.desc}</p><div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 text-sm text-green-300"><CheckCircle2 size={16} className="inline mr-1" /> {m.fix}</div></div>)}
      </div>
    </section>
  );
}

function SummaryAndQuiz() {
  return (
    <section className="space-y-6">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="bg-slate-950 p-6 border-b border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center gap-3"><span className="bg-cyan-500/20 text-cyan-300 p-2 rounded-xl">20</span>Tóm tắt & Kiểm tra cuối bài</h3>
        </div>
        <div className="p-6 md:p-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div>
            <h4 className="text-slate-400 font-semibold mb-4 uppercase text-sm tracking-wider">Ghi nhớ nhanh</h4>
            <div className="font-mono text-sm bg-slate-950 p-6 rounded-2xl text-green-400 border border-slate-800 shadow-inner space-y-2">
              <p>HTTP = HyperText Transfer Protocol.</p>
              <p>HTTP là giao thức request/response giữa client và server.</p>
              <p>HTTPS = HTTP + TLS Encryption.</p>
              <p>HTTP thường dùng port 80.</p>
              <p>HTTPS thường dùng port 443.</p>
              <p>HTTP gửi plain text, không phù hợp cho dữ liệu nhạy cảm.</p>
              <p>TLS giúp mã hóa, kiểm tra toàn vẹn và xác thực server.</p>
              <p>Request gồm method, path, version, headers, body tùy chọn.</p>
              <p>Response gồm status line, headers, body tùy chọn.</p>
              <p>GET lấy dữ liệu, POST gửi/tạo dữ liệu.</p>
              <p>2xx thành công, 3xx chuyển hướng, 4xx lỗi client, 5xx lỗi server.</p>
              <p>DNS xảy ra trước khi browser kết nối đến web server.</p>
            </div>
          </div>
          <InteractiveQuiz />
        </div>
      </div>
    </section>
  );
}

const questions = [
  { question: "HTTP và HTTPS khác nhau chính ở điểm nào?", options: ["HTTPS là HTTP được bảo vệ bằng TLS", "HTTP dùng DNS còn HTTPS không dùng DNS", "HTTPS không có request/response", "HTTP luôn nhanh hơn và an toàn hơn"], correct: 0, explanation: "HTTPS vẫn là HTTP, nhưng chạy trong kênh TLS để mã hóa, kiểm tra toàn vẹn và xác thực server." },
  { question: "HTTP thường dùng port nào và HTTPS thường dùng port nào?", options: ["HTTP 80, HTTPS 443", "HTTP 443, HTTPS 80", "HTTP 53, HTTPS 25", "HTTP 22, HTTPS 21"], correct: 0, explanation: "HTTP mặc định port 80; HTTPS mặc định port 443." },
  { question: "Trong request `POST /login HTTP/1.1`, method là gì?", options: ["POST", "/login", "HTTP/1.1", "Host"], correct: 0, explanation: "Method là hành động client muốn thực hiện. Trong request này, method là POST." },
  { question: "Status code 404 thuộc nhóm nào?", options: ["4xx — lỗi phía client/request", "2xx — thành công", "3xx — chuyển hướng", "5xx — lỗi server"], correct: 0, explanation: "404 Not Found thuộc nhóm 4xx, nghĩa là request trỏ đến tài nguyên không tìm thấy." },
  { question: "Khi nhập https://shop.example/products, thứ tự đúng là gì?", options: ["DNS → TCP 443 → TLS → HTTP GET → encrypted response", "TLS → DNS → HTTP GET → TCP", "HTTP GET → DNS → TCP 80", "DNS → UDP 53 → bỏ qua TCP/TLS"], correct: 0, explanation: "Browser cần DNS để tìm IP, sau đó TCP đến port 443, TLS handshake, rồi mới gửi HTTP request trong kênh mã hóa." },
  { question: "TLS Certificate giúp việc gì?", options: ["Xác minh server và hỗ trợ thiết lập kết nối an toàn", "Thay thế hoàn toàn DNS", "Xóa status code", "Biến POST thành GET"], correct: 0, explanation: "Certificate giúp browser kiểm tra domain, hạn dùng và CA ký chứng chỉ để xác minh server." },
];

function InteractiveQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const finished = currentQ === "finished";
  const q = !finished ? questions[currentQ] : null;
  const handleSelect = (index) => { if (showResult) return; setSelected(index); setShowResult(true); if (index === q.correct) setScore((s) => s + 1); };
  const handleNext = () => { if (currentQ < questions.length - 1) { setCurrentQ((c) => c + 1); setSelected(null); setShowResult(false); } else setCurrentQ("finished"); };
  const resetQuiz = () => { setCurrentQ(0); setSelected(null); setShowResult(false); setScore(0); };
  if (finished) return <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center items-center h-full min-h-[420px]"><div className="text-6xl mb-4">{score === questions.length ? "🏆" : "👏"}</div><h4 className="text-2xl font-bold text-white mb-2">Hoàn thành bài HTTP & HTTPS!</h4><p className="text-slate-400 mb-6">Bạn trả lời đúng <strong className="text-cyan-400">{score}/{questions.length}</strong> câu hỏi.</p><button onClick={resetQuiz} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700">Làm lại</button></div>;
  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col h-full min-h-[420px]">
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
      <p className="text-slate-400 mb-4">Bài tiếp theo chuyển sang FTP & SFTP — nhóm giao thức tầng ứng dụng chuyên dùng cho truyền file.</p>
      <Link to="/phan-7-3" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
        Bài tiếp theo: 7.3 — FTP & SFTP <ChevronRight size={20} />
      </Link>
    </div>
  );
}

function SectionTitle({ number, title, icon, color = "cyan" }) {
  const map = { cyan: "bg-cyan-500/20 text-cyan-300", blue: "bg-blue-500/20 text-blue-300", purple: "bg-purple-500/20 text-purple-300", emerald: "bg-emerald-500/20 text-emerald-300", orange: "bg-orange-500/20 text-orange-300", green: "bg-green-500/20 text-green-300", yellow: "bg-yellow-500/20 text-yellow-300", red: "bg-red-500/20 text-red-300" };
  return <h3 className="text-2xl font-bold text-white flex items-center gap-3"><span className={`${map[color]} p-2 rounded-xl flex items-center gap-2`}><span className="font-black">{number}</span>{React.cloneElement(icon, { size: 20 })}</span>{title}</h3>;
}

function ConceptCard({ title, icon, color, text, code, compact = false }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-3xl ${compact ? "p-5" : "p-6"}`}><div className={`${c.solid} text-white ${compact ? "w-12 h-12" : "w-14 h-14"} rounded-2xl flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(icon, { size: compact ? 24 : 28 })}</div><h3 className="text-xl font-bold text-white mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed mb-5">{text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{code}</div></div>;
}

function ChoiceButton({ active, onClick, color, children }) {
  const c = colorClasses[color] || colorClasses.cyan;
  return <button onClick={onClick} className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${active ? `${c.solid} text-white shadow-lg ${c.ring}` : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-600"}`}>{children}</button>;
}

function HeroHttpVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <MiniCard title="HTTP" value="port 80" color="orange" icon={<Unlock />} />
        <MiniCard title="HTTPS" value="port 443" color="emerald" icon={<Lock />} />
      </div>
      <RequestResponseVisual encrypted />
      <div className="grid grid-cols-3 gap-3">
        <MiniCard title="GET" value="read" color="cyan" icon={<Search />} />
        <MiniCard title="POST" value="create" color="green" icon={<Send />} />
        <MiniCard title="200" value="OK" color="purple" icon={<CheckCircle2 />} />
      </div>
    </div>
  );
}

function MiniCard({ title, value, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={`${c.text} flex justify-center mb-1`}>{React.cloneElement(icon, { size: 18 })}</div><p className={`${c.text} font-black text-sm`}>{title}</p><p className="text-[10px] text-slate-500 mt-1 break-all">{value}</p></div>;
}

function RequestResponseVisual({ encrypted = false }) {
  return (
    <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center text-center mb-4">
        <MiniNode label="Browser" color="cyan" icon={<Globe2 />} />
        <ArrowRight className="text-slate-500" />
        <MiniNode label="Server" color="orange" icon={<Server />} />
      </div>
      <p className={encrypted ? "text-emerald-300" : "text-cyan-300"}>Browser ---- {encrypted ? "Encrypted HTTP Request" : "HTTP Request"} ----&gt; Server</p>
      <p className={encrypted ? "text-emerald-300" : "text-purple-300"}>Browser &lt;--- {encrypted ? "Encrypted HTTP Response" : "HTTP Response"} --- Server</p>
      <p className="text-slate-500">{encrypted ? "HTTP runs inside TLS tunnel." : "Plain HTTP request/response."}</p>
    </div>
  );
}

function MiniNode({ label, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-3 text-center`}><div className={c.text}>{React.cloneElement(icon, { size: 20, className: "mx-auto" })}</div><p className="text-white font-bold text-xs mt-1">{label}</p></div>;
}

function HttpsTunnelVisual() {
  return <div className="space-y-3"><LayerBox title="HTTP" text="GET /products, headers, body" color="cyan" /><LayerBox title="TLS Tunnel" text="Encryption + integrity + authentication" color="emerald" /><LayerBox title="TCP" text="Reliable transport connection" color="blue" /><LayerBox title="IP" text="Routing across networks" color="orange" /></div>;
}

function LayerBox({ title, text, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className={`${c.text} font-black`}>{title}</p><p className="text-slate-400 text-sm mt-1">{text}</p></div>;
}

function SecurityPillar({ title, value, desc, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className="text-xs text-slate-500 font-bold uppercase">{title}</p><p className={`${c.text} font-black mt-2`}>{value}</p><p className="text-slate-400 text-sm mt-1">{desc}</p></div>;
}

function TlsProtectionVisual({ selected }) {
  const nodes = [
    ["encrypt", "Mã hóa", "Người ngoài không đọc được", "emerald", <Lock />],
    ["integrity", "Toàn vẹn", "Phát hiện sửa đổi", "cyan", <CheckCircle2 />],
    ["auth", "Xác thực", "Kiểm tra server thật", "purple", <KeyRound />],
  ];
  return <div className="space-y-3">{nodes.map(([id, title, desc, color, icon]) => { const c = colorClasses[color]; const active = selected === id; return <div key={id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${active ? `${c.bg} ${c.border}` : "bg-slate-900 border-slate-800"}`}><div className={`${active ? `${c.solid} text-white` : "bg-slate-950 text-slate-500"} w-12 h-12 rounded-2xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 24 })}</div><div><p className="text-white font-black">{title}</p><p className="text-slate-500 text-sm mt-1">{desc}</p></div></div>; })}</div>;
}

function HttpMessageBreakdown({ mode }) {
  if (mode === "request") {
    return <div className="space-y-3 font-mono text-sm"><AnnotatedLine color="cyan" label="Method + Path + Version" text="GET /index.html HTTP/1.1" /><AnnotatedLine color="purple" label="Header" text="Host: example.com" /><AnnotatedLine color="purple" label="Header" text="User-Agent: Chrome" /><AnnotatedLine color="slate" label="Body" text="Không có body trong GET này" /></div>;
  }
  return <div className="space-y-3 font-mono text-sm"><AnnotatedLine color="green" label="Status Line" text="HTTP/1.1 200 OK" /><AnnotatedLine color="purple" label="Header" text="Content-Type: text/html" /><AnnotatedLine color="orange" label="Body" text="<html><body>Hello</body></html>" /></div>;
}

function AnnotatedLine({ color, label, text }) {
  const c = colorClasses[color] || colorClasses.slate;
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className="text-xs text-slate-500 font-bold uppercase mb-2">{label}</p><p className={`${c.text} break-all`}>{text}</p></div>;
}

function MappingCard({ left, right, color }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4`}><p className="text-slate-400">{left}</p><p className={`${c.text} font-black mt-1`}>{right}</p></div>;
}

function LayerStack({ mode }) {
  const layers = mode === "http"
    ? [["Application Layer", "HTTP", "orange"], ["Transport Layer", "TCP", "blue"], ["Network Layer", "IP", "cyan"], ["Data Link", "Ethernet / WiFi", "purple"], ["Physical", "Cáp / Sóng", "slate"]]
    : [["Application Layer", "HTTP", "cyan"], ["Security Layer", "TLS", "emerald"], ["Transport Layer", "TCP", "blue"], ["Network Layer", "IP", "orange"], ["Data Link", "Ethernet / WiFi", "purple"]];
  return <div className="space-y-3">{layers.map(([name, protocol, color]) => <LayerBox key={name} title={`${name}: ${protocol}`} text={mode === "https" && protocol === "TLS" ? "HTTPS = HTTP chạy trong đường hầm TLS" : ""} color={color} />)}</div>;
}

function MessageStructureVisual({ type }) {
  const isReq = type === "request";
  return <div className="font-mono text-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"><AnnotatedLine color="cyan" label={isReq ? "Request Line" : "Status Line"} text={isReq ? "POST /login HTTP/1.1" : "HTTP/1.1 200 OK"} /><AnnotatedLine color="purple" label="Headers" text={isReq ? "Host: example.com\nContent-Type: application/json" : "Content-Type: application/json"} /><AnnotatedLine color="orange" label="Body" text={isReq ? '{ "username": "admin", "password": "123456" }' : '{ "token": "abcxyz" }'} /></div>;
}

function StepSection({ number, color, title, icon, steps, step, setStep }) {
  const current = steps[step];
  const c = colorClasses[current.color];
  return <section className="space-y-6"><SectionTitle number={number} color={color} title={title} icon={icon} /><div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div className={`${c.bg} ${c.border} border rounded-3xl p-6 min-h-[390px] flex flex-col justify-between`}><div><div className={`${c.solid} w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg ${c.ring} mb-5`}>{React.cloneElement(current.icon, { size: 32 })}</div><p className={`${c.text} text-sm font-black uppercase tracking-wider mb-2`}>Bước {step + 1}/{steps.length}</p><h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3><p className="text-slate-300 leading-relaxed mb-4">{current.text}</p><div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-sm text-green-300 whitespace-pre-wrap">{current.code}</div></div><div className="mt-6 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed">Quay lại</button><button onClick={() => setStep((s) => (s + 1) % steps.length)} className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold inline-flex items-center gap-2">{step === steps.length - 1 ? "Xem lại" : "Bước tiếp"}<ChevronRight size={18} /></button></div></div><div className="bg-slate-950 border border-slate-800 rounded-3xl p-5"><StepFlow steps={steps} active={step} setActive={setStep} color={current.color} /></div></div></div></section>;
}

function StepFlow({ steps, active, setActive, color }) {
  const c = colorClasses[color];
  return <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1">{steps.map((s, index) => <button key={s.title} onClick={() => setActive(index)} className={`w-full flex items-start gap-3 p-3 rounded-2xl border text-left transition-all ${active === index ? `${c.bg} ${c.border}` : index < active ? "bg-green-500/5 border-green-500/20" : "bg-slate-900 border-slate-800 hover:border-slate-700"}`}><div className={`${active === index ? `${c.solid} text-white` : index < active ? "bg-green-500/20 text-green-400" : "bg-slate-950 text-slate-500"} w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold`}>{index < active ? <CheckCircle2 size={16} /> : index + 1}</div><div><p className="text-sm text-white font-bold">{s.title}</p><p className="text-xs text-slate-500 mt-1 whitespace-pre-wrap">{s.code}</p></div></button>)}</div>;
}

function MiniFlowNode({ title, desc, color, icon }) {
  const c = colorClasses[color];
  return <div className={`${c.bg} ${c.border} border rounded-2xl p-4 flex items-center gap-4`}><div className={`${c.solid} text-white w-11 h-11 rounded-xl flex items-center justify-center`}>{React.cloneElement(icon, { size: 22 })}</div><div><p className="text-white font-black">{title}</p><p className={`${c.text} text-sm mt-1`}>{desc}</p></div></div>;
}

function AnnotatedLoginRequest() {
  return <div className="space-y-3 font-mono text-sm"><AnnotatedLine color="cyan" label="Method + Path" text="POST /login HTTP/1.1" /><AnnotatedLine color="purple" label="Host Header" text="Host: example.com" /><AnnotatedLine color="purple" label="Content-Type Header" text="Content-Type: application/json" /><AnnotatedLine color="purple" label="Authorization Header" text="Authorization: Bearer abcxyz" /><AnnotatedLine color="orange" label="Body" text={'{ "username": "admin", "password": "123456" }'} /></div>;
}
