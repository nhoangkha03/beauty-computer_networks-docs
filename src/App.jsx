import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookCheck,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Circle,
  Compass,
  Home,
} from "lucide-react";
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Phần 1: Nền tảng mạng máy tính
import LessonIntro from "./pages/Phan-1.1.jsx";
import LessonNetworkTypes from "./pages/Phan-1.2.jsx";
import LessonTopology from "./pages/Phan-1.3.jsx";
import LessonDevices from "./pages/Phan-1.4.jsx";
import LessonMedia from "./pages/Phan-1.5.jsx";

// Phần 2: Mô hình mạng OSI và TCP/IP
import LessonOSI from "./pages/Phan-2.1.jsx";
import LessonOSILayers from "./pages/Phan-2.2.jsx";
import LessonTCPIP from "./pages/Phan-2.3.jsx";
import LessonOSIvsTCPIP from "./pages/Phan-2.4.jsx";
import LessonEncapsulation from "./pages/Phan-2.5.jsx";

// Phần 3: Tín hiệu và truyền dẫn
import LessonSignals from "./pages/Phan-3.1.jsx";
import LessonBandwidth from "./pages/Phan-3.2.jsx";
import LessonEncoding from "./pages/Phan-3.3.jsx";
import LessonMultiplexing from "./pages/Phan-3.4.jsx";
import LessonCableTypes from "./pages/Phan-3.5.jsx";

// Phần 4: Tầng Liên Kết Dữ Liệu
import LessonFraming from "./pages/Phan-4.1.jsx";
import LessonErrorControl from "./pages/Phan-4.2.jsx";
import LessonFlowControl from "./pages/Phan-4.3.jsx";
import LessonDataLinkProtocols from "./pages/Phan-4.4.jsx";
import LessonArp from "./pages/Phan-4.5.jsx";
import LessonEthernet from "./pages/Phan-4.6.jsx";
import LessonSwitchVlan from "./pages/Phan-4.7.jsx";

// Phần 5: Tầng Mạng (Network Layer)
import LessonIPv4 from "./pages/Phan-5.1.jsx";
import LessonSubnetting from "./pages/Phan-5.2.jsx";
import LessonIPv6 from "./pages/Phan-5.3.jsx";
import LessonIpIcmp from "./pages/Phan-5.4.jsx";
import LessonStaticRouting from "./pages/Phan-5.5.jsx";
import LessonDynamicRouting from "./pages/Phan-5.6.jsx";
import LessonNat from "./pages/Phan-5.7.jsx";
import LessonRouter from "./pages/Phan-5.8.jsx";

// Phần 6: Tầng Giao Vận (Transport Layer)
import LessonPort from "./pages/Phan-6.1.jsx";
import LessonTcp from "./pages/Phan-6.2.jsx";
import LessonHandshake from "./pages/Phan-6.3.jsx";
import LessonFlowCongestion from "./pages/Phan-6.4.jsx";
import LessonUdp from "./pages/Phan-6.5.jsx";
import LessonTcpUdp from "./pages/Phan-6.6.jsx";

// Phần 7: Tầng Ứng Dụng (Application Layer)
import LessonDns from "./pages/Phan-7.1.jsx";
import LessonHttp from "./pages/Phan-7.2.jsx";
import LessonFtp from "./pages/Phan-7.3.jsx";
import LessonEmail from "./pages/Phan-7.4.jsx";
import LessonDhcp from "./pages/Phan-7.5.jsx";
import LessonSsh from "./pages/Phan-7.6.jsx";
import LessonSnmp from "./pages/Phan-7.7.jsx";

// Phần 8: Mạng không dây (Wireless Networks)
import LessonWifiStandards from "./pages/Phan-8.1.jsx";
import LessonWifiHowItWorks from "./pages/Phan-8.2.jsx";
import LessonWifiSecurity from "./pages/Phan-8.3.jsx";
import LessonBluetoothZigbee from "./pages/Phan-8.4.jsx";
import LessonMobileNetworks from "./pages/Phan-8.5.jsx";

// Phần 9: Bảo mật mạng (Network Security)
import LessonNetworkThreats from "./pages/Phan-9.1.jsx";
import LessonEncryption from "./pages/Phan-9.2.jsx";
import LessonFirewall from "./pages/Phan-9.3.jsx";
import LessonVpn from "./pages/Phan-9.4.jsx";
import LessonIdsIps from "./pages/Phan-9.5.jsx";
import LessonDmzArchitecture from "./pages/Phan-9.6.jsx";

// Phần 10: Công cụ, thực hành và định hướng học tập
import LessonNetworkTools from "./pages/Phan-10.1.jsx";
import LessonCiscoCli from "./pages/Phan-10.2.jsx";
import LessonEnterpriseNetworks from "./pages/Phan-10.3.jsx";
import LessonCloudNetworking from "./pages/Phan-10.4.jsx";
import LessonReviewAndCerts from "./pages/Phan-10.5.jsx";

const lessons = [
  // ===== PHẦN 1: NỀN TẢNG MẠNG MÁY TÍNH =====
  {
    path: "/phan-1-1",
    code: "1.1",
    title: "Mạng máy tính là gì?",
    description:
      "Hiểu khái niệm mạng máy tính, lịch sử phát triển và ứng dụng thực tế trong cuộc sống.",
    bullets: [
      "Định nghĩa mạng máy tính và các thành phần cơ bản",
      "Lịch sử từ ARPANET đến Internet hiện đại",
      "Ứng dụng thực tế: giao tiếp, chia sẻ tài nguyên, IoT",
    ],
    Component: LessonIntro,
  },
  {
    path: "/phan-1-2",
    code: "1.2",
    title: "Phân loại mạng theo phạm vi",
    description:
      "Tìm hiểu các loại mạng PAN, LAN, MAN, WAN và cách phân biệt chúng trong thực tế.",
    bullets: [
      "PAN: Mạng cá nhân (Bluetooth, hotspot)",
      "LAN: Mạng cục bộ (WiFi gia đình, văn phòng)",
      "MAN: Mạng đô thị (camera thành phố, trường đại học)",
      "WAN: Mạng diện rộng (Internet, mạng ngân hàng)",
    ],
    Component: LessonNetworkTypes,
  },
  {
    path: "/phan-1-3",
    code: "1.3",
    title: "Topology mạng",
    description:
      "Học các kiểu cấu trúc mạng phổ biến: Bus, Star, Ring, Mesh và Hybrid.",
    bullets: [
      "Bus: Đường truyền chung (ít dùng)",
      "Star: Hình sao (phổ biến nhất)",
      "Ring: Vòng tròn (chuyên dụng)",
      "Mesh: Lưới (độ tin cậy cao)",
      "Hybrid: Kết hợp linh hoạt",
    ],
    Component: LessonTopology,
  },
  {
    path: "/phan-1-4",
    code: "1.4",
    title: "Thiết bị mạng cơ bản",
    description:
      "Phân biệt Hub, Switch, Router, Modem, Access Point và Firewall trong mạng.",
    bullets: [
      "Hub: Bộ chia thô sơ (gần như không dùng)",
      "Switch: Chuyển mạch LAN thông minh",
      "Router: Định tuyến giữa các mạng",
      "Modem: Kết nối với nhà mạng",
      "Access Point, Firewall và các thiết bị khác",
    ],
    Component: LessonDevices,
  },
  {
    path: "/phan-1-5",
    code: "1.5",
    title: "Phương tiện truyền dẫn",
    description:
      "Tìm hiểu các loại cáp và sóng dùng để truyền dữ liệu trong mạng.",
    bullets: [
      "Cáp đồng (Ethernet): Phổ biến trong LAN",
      "Cáp quang: Tốc độ cao, đường xa",
      "WiFi: Không dây linh hoạt",
      "Bluetooth: Kết nối cá nhân",
      "Cellular: 4G/5G di động",
    ],
    Component: LessonMedia,
  },

  // ===== PHẦN 2: MÔ HÌNH MẠNG OSI VÀ TCP/IP =====
  {
    path: "/phan-2-1",
    code: "2.1",
    title: "Mô hình OSI 7 tầng",
    description:
      "Hiểu mô hình OSI và vai trò của từng tầng trong truyền thông mạng.",
    bullets: [
      "7 tầng OSI: Application, Presentation, Session, Transport, Network, Data Link, Physical",
      "Chức năng và giao thức của từng tầng",
      "PDU: Data, Segment, Packet, Frame, Bit",
    ],
    Component: LessonOSI,
  },
  {
    path: "/phan-2-2",
    code: "2.2",
    title: "Chi tiết các tầng OSI",
    description:
      "Tìm hiểu sâu về từng tầng OSI, thiết bị và cách xử lý sự cố.",
    bullets: [
      "Physical: Bit, cáp, sóng, tín hiệu",
      "Data Link: MAC, Frame, Switch, ARP",
      "Network: IP, Router, Routing",
      "Transport: TCP, UDP, Port",
      "Application, Presentation, Session",
    ],
    Component: LessonOSILayers,
  },
  {
    path: "/phan-2-3",
    code: "2.3",
    title: "Mô hình TCP/IP 4 tầng",
    description:
      "Học mô hình TCP/IP thực tế được dùng trong Internet hiện đại.",
    bullets: [
      "4 tầng TCP/IP: Application, Transport, Internet, Network Access",
      "So sánh với OSI",
      "Giao thức quan trọng: HTTP, TCP, IP, Ethernet",
    ],
    Component: LessonTCPIP,
  },
  {
    path: "/phan-2-4",
    code: "2.4",
    title: "So sánh OSI vs TCP/IP",
    description:
      "Phân biệt hai mô hình, ưu nhược điểm và khi nào dùng mô hình nào.",
    bullets: [
      "OSI: Mô hình lý thuyết 7 tầng",
      "TCP/IP: Mô hình thực tế 4 tầng",
      "Mapping giữa hai mô hình",
      "Khi nào dùng OSI, khi nào dùng TCP/IP",
    ],
    Component: LessonOSIvsTCPIP,
  },
  {
    path: "/phan-2-5",
    code: "2.5",
    title: "Encapsulation và De-encapsulation",
    description:
      "Hiểu cách dữ liệu được đóng gói qua các tầng khi gửi và mở gói khi nhận.",
    bullets: [
      "Encapsulation: Data → Segment → Packet → Frame → Bit",
      "De-encapsulation: Bit → Frame → Packet → Segment → Data",
      "Header và Trailer của từng tầng",
      "Ví dụ thực tế: Gửi HTTP request",
    ],
    Component: LessonEncapsulation,
  },

  // ===== PHẦN 3: TÍN HIỆU VÀ TRUYỀN DẪN =====
  {
    path: "/phan-3-1",
    code: "3.1",
    title: "Tín hiệu Analog và Digital",
    description:
      "Phân biệt tín hiệu tương tự và tín hiệu số, cách chúng được truyền qua mạng.",
    bullets: [
      "Analog: Liên tục như sóng (giọng nói, sóng radio)",
      "Digital: Rời rạc theo mức (bit 0 và 1)",
      "Ưu nhược điểm của từng loại",
      "Ứng dụng trong mạng máy tính",
    ],
    Component: LessonSignals,
  },
  {
    path: "/phan-3-2",
    code: "3.2",
    title: "Băng thông, Throughput và Latency",
    description:
      "Hiểu các khái niệm đo lường hiệu năng mạng quan trọng.",
    bullets: [
      "Bandwidth: Đường truyền tối đa rộng bao nhiêu",
      "Throughput: Thực tế truyền được bao nhiêu",
      "Latency: Độ trễ thời gian",
      "Jitter và Packet Loss",
    ],
    Component: LessonBandwidth,
  },
  {
    path: "/phan-3-3",
    code: "3.3",
    title: "Mã hóa tín hiệu (Encoding)",
    description:
      "Học cách bit được mã hóa thành tín hiệu vật lý để truyền qua mạng.",
    bullets: [
      "NRZ: Non-Return-to-Zero",
      "Manchester Encoding",
      "Differential Manchester",
      "Ưu nhược điểm của từng phương pháp",
    ],
    Component: LessonEncoding,
  },
  {
    path: "/phan-3-4",
    code: "3.4",
    title: "Multiplexing - Ghép kênh",
    description:
      "Tìm hiểu cách nhiều luồng dữ liệu dùng chung một đường truyền.",
    bullets: [
      "FDM: Phân chia theo tần số",
      "TDM: Phân chia theo thời gian",
      "WDM: Phân chia theo bước sóng ánh sáng",
      "CDM: Phân chia theo mã",
    ],
    Component: LessonMultiplexing,
  },
  {
    path: "/phan-3-5",
    code: "3.5",
    title: "Các loại cáp mạng",
    description:
      "So sánh chi tiết cáp đồng trục, cáp xoắn đôi và cáp quang.",
    bullets: [
      "Coaxial: Cáp đồng trục (truyền hình cáp)",
      "Twisted Pair: Cáp xoắn đôi (Ethernet, Cat5e/Cat6)",
      "Fiber Optic: Cáp quang (tốc độ cao, đường xa)",
      "So sánh và lựa chọn phù hợp",
    ],
    Component: LessonCableTypes,
  },

  // ===== PHẦN 4: TẦNG LIÊN KẾT DỮ LIỆU =====
  {
    path: "/phan-4-1",
    code: "4.1",
    title: "Framing - Đóng khung dữ liệu",
    description:
      "Hiểu cách dữ liệu được đóng thành frame ở tầng Data Link.",
    bullets: [
      "Frame là gì và vì sao cần framing",
      "Cấu trúc frame: Header, Data, Trailer/FCS",
      "Kỹ thuật xác định ranh giới frame",
      "Character Count, Flag Bytes, Bit Stuffing",
    ],
    Component: LessonFraming,
  },
  {
    path: "/phan-4-2",
    code: "4.2",
    title: "Kiểm soát lỗi: Parity, Checksum, CRC",
    description:
      "Học các kỹ thuật phát hiện lỗi trong truyền dữ liệu mạng.",
    bullets: [
      "Parity bit: Kiểm tra đơn giản",
      "Checksum: Tính giá trị kiểm tra",
      "CRC/FCS: Mạnh nhất, dùng trong Ethernet",
      "Phân biệt phát hiện lỗi và sửa lỗi",
    ],
    Component: LessonErrorControl,
  },
  {
    path: "/phan-4-3",
    code: "4.3",
    title: "Kiểm soát luồng: Stop-and-Wait, Sliding Window",
    description:
      "Tìm hiểu cách điều chỉnh tốc độ gửi frame để máy nhận xử lý kịp.",
    bullets: [
      "Flow Control là gì và vì sao cần",
      "ACK - Acknowledgment",
      "Stop-and-Wait: Đơn giản nhưng chậm",
      "Sliding Window: Hiệu quả hơn",
    ],
    Component: LessonFlowControl,
  },
  {
    path: "/phan-4-4",
    code: "4.4",
    title: "Giao thức HDLC & PPP",
    description:
      "Học hai giao thức Data Link phổ biến: HDLC và PPP.",
    bullets: [
      "HDLC: Serial WAN, I/S/U frame",
      "PPP: Point-to-point, LCP/NCP",
      "PAP và CHAP authentication",
      "So sánh HDLC và PPP",
    ],
    Component: LessonDataLinkProtocols,
  },
  {
    path: "/phan-4-5",
    code: "4.5",
    title: "Địa chỉ MAC & ARP",
    description:
      "Hiểu địa chỉ MAC và cách ARP tìm MAC từ địa chỉ IP.",
    bullets: [
      "MAC address là gì (48 bit)",
      "Phân biệt MAC và IP",
      "ARP Request và ARP Reply",
      "ARP cache và ARP spoofing",
    ],
    Component: LessonArp,
  },
  {
    path: "/phan-4-6",
    code: "4.6",
    title: "Ethernet & IEEE 802.3",
    description:
      "Tìm hiểu công nghệ LAN có dây phổ biến nhất hiện nay.",
    bullets: [
      "Ethernet frame structure",
      "Các tốc độ: 10/100/1000 Mbps, 10 Gbps",
      "CSMA/CD và Switch full-duplex",
      "MTU, broadcast và so sánh với WiFi",
    ],
    Component: LessonEthernet,
  },
  {
    path: "/phan-4-7",
    code: "4.7",
    title: "Switch & VLAN",
    description:
      "Học cách Switch chuyển frame và VLAN chia mạng logic.",
    bullets: [
      "Switch vs Hub, MAC address table",
      "VLAN: Broadcast domain riêng",
      "Access port và Trunk port",
      "802.1Q tagging, Native VLAN",
    ],
    Component: LessonSwitchVlan,
  },

  // ===== PHẦN 5: TẦNG MẠNG (NETWORK LAYER) =====
  {
    path: "/phan-5-1",
    code: "5.1",
    title: "Địa chỉ IPv4: Cấu trúc & phân lớp",
    description:
      "Hiểu cấu trúc địa chỉ IPv4 32 bit và các lớp A, B, C, D, E.",
    bullets: [
      "IPv4: 32 bit, 4 octet, dạng thập phân có dấu chấm",
      "Phân lớp: Class A, B, C, D, E",
      "Private IP và Public IP",
      "Loopback, APIPA và địa chỉ đặc biệt",
    ],
    Component: LessonIPv4,
  },
  {
    path: "/phan-5-2",
    code: "5.2",
    title: "Subnetting & CIDR",
    description:
      "Học cách chia mạng lớn thành nhiều mạng con và ký hiệu CIDR.",
    bullets: [
      "Subnet mask: Phân biệt Network và Host",
      "Subnetting: Chia mạng thành subnet nhỏ hơn",
      "CIDR notation: /24, /16, /8",
      "Tính số host, số subnet và dải IP",
    ],
    Component: LessonSubnetting,
  },
  {
    path: "/phan-5-3",
    code: "5.3",
    title: "Địa chỉ IPv6: Cấu trúc & so sánh IPv4",
    description:
      "Tìm hiểu IPv6 128 bit, cấu trúc và lý do chuyển từ IPv4.",
    bullets: [
      "IPv6: 128 bit, 8 nhóm hex",
      "Rút gọn địa chỉ IPv6",
      "So sánh IPv6 và IPv4",
      "Dual stack, tunneling và chuyển đổi",
    ],
    Component: LessonIPv6,
  },
  {
    path: "/phan-5-4",
    code: "5.4",
    title: "Giao thức IP & ICMP",
    description:
      "Hiểu IP packet, TTL, fragmentation và ICMP (ping, traceroute).",
    bullets: [
      "IP packet structure: Header và Payload",
      "TTL: Time To Live",
      "ICMP: Internet Control Message Protocol",
      "Ping và Traceroute hoạt động ra sao",
    ],
    Component: LessonIpIcmp,
  },
  {
    path: "/phan-5-5",
    code: "5.5",
    title: "Định tuyến tĩnh (Static Routing)",
    description:
      "Học cách router chọn đường đi cho packet bằng bảng định tuyến tĩnh.",
    bullets: [
      "Routing table: Bảng định tuyến",
      "Static route: Cấu hình thủ công",
      "Default route: 0.0.0.0/0",
      "Ưu nhược điểm của static routing",
    ],
    Component: LessonStaticRouting,
  },
  {
    path: "/phan-5-6",
    code: "5.6",
    title: "Định tuyến động: RIP, OSPF, BGP",
    description:
      "Tìm hiểu các giao thức định tuyến động giúp router tự học đường đi.",
    bullets: [
      "Dynamic routing: Router tự học và cập nhật",
      "RIP: Distance vector, hop count",
      "OSPF: Link state, cost metric",
      "BGP: Định tuyến giữa các AS trên Internet",
    ],
    Component: LessonDynamicRouting,
  },
  {
    path: "/phan-5-7",
    code: "5.7",
    title: "NAT & PAT",
    description:
      "Hiểu cách NAT/PAT giúp private IP ra Internet bằng public IP.",
    bullets: [
      "NAT: Network Address Translation",
      "PAT: Port Address Translation (NAT overload)",
      "Static NAT và Dynamic NAT",
      "Vì sao cần NAT và hạn chế của NAT",
    ],
    Component: LessonNat,
  },
  {
    path: "/phan-5-8",
    code: "5.8",
    title: "Router: Nguyên lý hoạt động",
    description:
      "Tổng hợp cách router nhận packet, tra bảng định tuyến và chuyển tiếp.",
    bullets: [
      "Router hoạt động ở Layer 3",
      "Nhận packet, tra routing table",
      "Chọn best route và forward",
      "Giảm TTL, kiểm tra và gửi tiếp",
    ],
    Component: LessonRouter,
  },

  // ===== PHẦN 6: TẦNG GIAO VẬN (TRANSPORT LAYER) =====
  {
    path: "/phan-6-1",
    code: "6.1",
    title: "Cổng Port & Socket",
    description:
      "Hiểu port number, socket và cách phân biệt các ứng dụng trên cùng máy.",
    bullets: [
      "Port: Số cổng 16 bit (0-65535)",
      "Well-known ports: 0-1023",
      "Socket: IP + Port",
      "Phân biệt nhiều kết nối cùng lúc",
    ],
    Component: LessonPort,
  },
  {
    path: "/phan-6-2",
    code: "6.2",
    title: "Giao thức TCP: Kết nối đáng tin cậy",
    description:
      "Tìm hiểu TCP - giao thức truyền tải hướng kết nối và đáng tin cậy.",
    bullets: [
      "TCP: Transmission Control Protocol",
      "Connection-oriented: Thiết lập kết nối trước",
      "Reliable: Đảm bảo dữ liệu đến đúng thứ tự",
      "TCP segment structure",
    ],
    Component: LessonTcp,
  },
  {
    path: "/phan-6-3",
    code: "6.3",
    title: "Bắt tay 3 bước TCP (3-Way Handshake)",
    description:
      "Học cách TCP thiết lập kết nối bằng SYN, SYN-ACK, ACK.",
    bullets: [
      "SYN: Client yêu cầu kết nối",
      "SYN-ACK: Server chấp nhận",
      "ACK: Client xác nhận",
      "4-way handshake để đóng kết nối",
    ],
    Component: LessonHandshake,
  },
  {
    path: "/phan-6-4",
    code: "6.4",
    title: "Flow Control & Congestion Control",
    description:
      "Hiểu cách TCP điều chỉnh tốc độ gửi để tránh quá tải.",
    bullets: [
      "Flow Control: Sliding window, receiver window",
      "Congestion Control: Slow start, congestion avoidance",
      "Fast retransmit và fast recovery",
      "Tránh nghẽn mạng và buffer overflow",
    ],
    Component: LessonFlowCongestion,
  },
  {
    path: "/phan-6-5",
    code: "6.5",
    title: "Giao thức UDP: Nhanh & không kết nối",
    description:
      "Tìm hiểu UDP - giao thức truyền tải không kết nối, nhanh nhưng không đảm bảo.",
    bullets: [
      "UDP: User Datagram Protocol",
      "Connectionless: Không thiết lập kết nối",
      "Unreliable: Không đảm bảo gửi đến",
      "Dùng cho streaming, gaming, DNS, VoIP",
    ],
    Component: LessonUdp,
  },
  {
    path: "/phan-6-6",
    code: "6.6",
    title: "So sánh TCP và UDP",
    description:
      "Phân biệt TCP và UDP, khi nào dùng giao thức nào.",
    bullets: [
      "TCP: Đáng tin cậy, chậm hơn, có kết nối",
      "UDP: Nhanh, không đảm bảo, không kết nối",
      "Use cases: Web/Email dùng TCP, Video/Game dùng UDP",
      "Overhead và performance trade-offs",
    ],
    Component: LessonTcpUdp,
  },

  // ===== PHẦN 7: TẦNG ỨNG DỤNG (APPLICATION LAYER) =====
  {
    path: "/phan-7-1",
    code: "7.1",
    title: "DNS: Hệ thống phân giải tên miền",
    description:
      "Hiểu DNS giúp biến tên miền thành địa chỉ IP và cách DNS hoạt động.",
    bullets: [
      "DNS là gì và vì sao cần DNS",
      "Domain name, resolver, root, TLD, authoritative DNS",
      "Các record: A, AAAA, CNAME, MX, TXT, NS, PTR",
      "DNS cache và TTL",
      "DNS thường dùng UDP 53, có thể dùng TCP 53",
    ],
    Component: LessonDns,
  },
  {
    path: "/phan-7-2",
    code: "7.2",
    title: "HTTP & HTTPS: Giao thức web",
    description:
      "Tìm hiểu HTTP request/response và HTTPS bảo vệ bằng TLS.",
    bullets: [
      "HTTP là gì, request và response",
      "Method: GET, POST, PUT, PATCH, DELETE",
      "Status code: 2xx, 3xx, 4xx, 5xx",
      "HTTPS = HTTP + TLS, port 443",
      "Certificate, mã hóa và xác thực server",
    ],
    Component: LessonHttp,
  },
  {
    path: "/phan-7-3",
    code: "7.3",
    title: "FTP & SFTP: Truyền file qua mạng",
    description:
      "Học FTP truyền thống và SFTP an toàn qua SSH.",
    bullets: [
      "FTP: File Transfer Protocol, port 21/20",
      "Control connection và data connection",
      "Active Mode và Passive Mode",
      "SFTP: SSH File Transfer Protocol, port 22",
      "So sánh FTP, FTPS và SFTP",
    ],
    Component: LessonFtp,
  },
  {
    path: "/phan-7-4",
    code: "7.4",
    title: "SMTP, POP3, IMAP: Các giao thức Email",
    description:
      "Hiểu cách email được gửi và nhận qua SMTP, POP3, IMAP.",
    bullets: [
      "SMTP: Gửi email, port 25/587",
      "POP3: Tải email về máy, port 110/995",
      "IMAP: Đồng bộ email trên server, port 143/993",
      "So sánh POP3 và IMAP",
      "Email flow: gửi và nhận",
    ],
    Component: LessonEmail,
  },
  {
    path: "/phan-7-5",
    code: "7.5",
    title: "DHCP: Cấp phát địa chỉ IP động",
    description:
      "Tìm hiểu DHCP giúp máy tính tự động nhận IP, subnet mask, gateway và DNS.",
    bullets: [
      "DHCP là gì và vì sao cần DHCP",
      "DHCP Discover, Offer, Request, ACK",
      "DHCP server cấp IP, subnet mask, gateway, DNS",
      "DHCP lease time và renewal",
      "Static IP vs Dynamic IP",
    ],
    Component: LessonDhcp,
  },
  {
    path: "/phan-7-6",
    code: "7.6",
    title: "SSH & Telnet: Truy cập dòng lệnh từ xa",
    description:
      "Học SSH an toàn và Telnet không mã hóa để truy cập terminal từ xa.",
    bullets: [
      "SSH: Secure Shell, port 22, mã hóa",
      "Telnet: port 23, không mã hóa",
      "SSH key authentication",
      "SSH tunneling và port forwarding",
      "Vì sao nên dùng SSH thay vì Telnet",
    ],
    Component: LessonSsh,
  },
  {
    path: "/phan-7-7",
    code: "7.7",
    title: "SNMP: Quản lý và giám sát mạng",
    description:
      "Hiểu SNMP giúp quản lý và giám sát thiết bị mạng từ xa.",
    bullets: [
      "SNMP là gì và dùng để làm gì",
      "SNMP Manager và SNMP Agent",
      "MIB: Management Information Base",
      "SNMPv1, SNMPv2c, SNMPv3",
      "SNMP GET, SET, TRAP",
    ],
    Component: LessonSnmp,
  },

  // ===== PHẦN 8: MẠNG KHÔNG DÂY (WIRELESS NETWORKS) =====
  {
    path: "/phan-8-1",
    code: "8.1",
    title: "WiFi 802.11 và các chuẩn không dây",
    description:
      "Hiểu WiFi 802.11 là gì, vì sao có nhiều thế hệ và cách chọn băng tần phù hợp.",
    bullets: [
      "WiFi 802.11 là gì và vì sao có nhiều đời",
      "Các chuẩn a/b/g/n/ac/ax và tên gọi WiFi 4/5/6",
      "Băng tần 2.4GHz, 5GHz, 6GHz",
      "Tương thích giữa router mới và thiết bị cũ",
    ],
    Component: LessonWifiStandards,
  },
  {
    path: "/phan-8-2",
    code: "8.2",
    title: "Nguyên lý hoạt động của WiFi",
    description:
      "Tìm hiểu cách WiFi truyền dữ liệu, cách thiết bị kết nối AP và vì sao WiFi có thể chậm hoặc nhiễu.",
    bullets: [
      "WiFi dùng sóng radio và Access Point hoạt động ra sao",
      "SSID, channel, beacon frame, association",
      "DHCP sau khi kết nối WiFi",
      "CSMA/CA, RSSI và các nguyên nhân WiFi yếu/chậm",
    ],
    Component: LessonWifiHowItWorks,
  },
  {
    path: "/phan-8-3",
    code: "8.3",
    title: "Bảo mật WiFi: WEP, WPA, WPA2, WPA3",
    description:
      "Hiểu các chuẩn bảo mật WiFi, cách mật khẩu liên quan đến mã hóa và cấu hình khuyến nghị.",
    bullets: [
      "Vì sao WiFi cần bảo mật",
      "WEP, WPA, WPA2, WPA3 khác nhau thế nào",
      "Open WiFi vs WPA2/WPA3",
      "Guest Network, HTTPS và các lỗi cấu hình phổ biến",
    ],
    Component: LessonWifiSecurity,
  },
  {
    path: "/phan-8-4",
    code: "8.4",
    title: "Bluetooth & Zigbee",
    description:
      "Phân biệt Bluetooth và Zigbee, hiểu PAN, Zigbee Hub và mesh network trong IoT.",
    bullets: [
      "Bluetooth là gì và dùng cho thiết bị cá nhân",
      "PAN: Personal Area Network",
      "Zigbee, Zigbee Hub và nhà thông minh",
      "Mesh network và khi nào dùng Bluetooth, Zigbee hoặc WiFi",
    ],
    Component: LessonBluetoothZigbee,
  },
  {
    path: "/phan-8-5",
    code: "8.5",
    title: "Mạng di động 3G/4G LTE/5G",
    description:
      "Hiểu mạng di động hoạt động ra sao qua nhà mạng, BTS/cell tower, SIM và handover.",
    bullets: [
      "3G, 4G LTE, 5G là gì",
      "Cell, BTS/cell tower, SIM và APN",
      "Handover khi di chuyển giữa các trạm",
      "So sánh WiFi với mạng di động",
    ],
    Component: LessonMobileNetworks,
  },

  // ===== PHẦN 9: BẢO MẬT MẠNG (NETWORK SECURITY) =====
  {
    path: "/phan-9-1",
    code: "9.1",
    title: "Các loại tấn công mạng phổ biến",
    description:
      "Hiểu các kiểu tấn công mạng phổ biến, lỗ hổng bị khai thác và cách giảm rủi ro ban đầu.",
    bullets: [
      "Cyber attack, vulnerability và exploit là gì",
      "Các kiểu tấn công phổ biến trong thực tế",
      "Mục tiêu, tác hại và dấu hiệu thường gặp",
      "Tư duy phòng thủ cơ bản khi học security",
    ],
    Component: LessonNetworkThreats,
  },
  {
    path: "/phan-9-2",
    code: "9.2",
    title: "Mã hóa: Symmetric, Asymmetric, SSL/TLS",
    description:
      "Tìm hiểu mã hóa dữ liệu, khóa bí mật, khóa công khai và cách TLS bảo vệ kết nối HTTPS.",
    bullets: [
      "Plaintext, ciphertext và key",
      "Symmetric encryption và asymmetric encryption",
      "SSL/TLS hoạt động ra sao",
      "Vai trò của mã hóa trong bảo mật mạng",
    ],
    Component: LessonEncryption,
  },
  {
    path: "/phan-9-3",
    code: "9.3",
    title: "Firewall: Tường lửa",
    description:
      "Hiểu firewall kiểm soát lưu lượng bằng rule, port, protocol, direction và nguyên tắc default deny.",
    bullets: [
      "Firewall là gì và dùng để làm gì",
      "Rule firewall: source, destination, port, protocol, action",
      "Inbound, outbound, allow, deny",
      "Stateful firewall và default deny",
    ],
    Component: LessonFirewall,
  },
  {
    path: "/phan-9-4",
    code: "9.4",
    title: "VPN: Mạng riêng ảo",
    description:
      "Học cách VPN tạo đường hầm bảo mật qua Internet cho truy cập từ xa và kết nối giữa các site.",
    bullets: [
      "VPN là gì và vì sao cần VPN",
      "Tunnel, encryption và authentication",
      "Remote access VPN và site-to-site VPN",
      "VPN vẫn cần kết hợp MFA, firewall và phân quyền",
    ],
    Component: LessonVpn,
  },
  {
    path: "/phan-9-5",
    code: "9.5",
    title: "IDS & IPS",
    description:
      "Phân biệt hệ thống phát hiện và ngăn chặn xâm nhập, cách chúng quan sát, cảnh báo và chặn lưu lượng nguy hiểm.",
    bullets: [
      "IDS phát hiện và cảnh báo",
      "IPS phân tích và có thể chặn inline",
      "Signature, anomaly và false positive",
      "Vai trò của IDS/IPS bên cạnh firewall",
    ],
    Component: LessonIdsIps,
  },
  {
    path: "/phan-9-6",
    code: "9.6",
    title: "DMZ & kiến trúc mạng an toàn",
    description:
      "Hiểu DMZ, segmentation, least privilege và cách thiết kế kiến trúc mạng nhiều vùng an toàn hơn.",
    bullets: [
      "DMZ là gì và vì sao cần",
      "Network segmentation và zone-based design",
      "Principle of least privilege",
      "Kiến trúc nhiều vùng với firewall rule chặt",
    ],
    Component: LessonDmzArchitecture,
  },

  // ===== PHẦN 10: CÔNG CỤ, THỰC HÀNH VÀ ĐỊNH HƯỚNG =====
  {
    path: "/phan-10-1",
    code: "10.1",
    title: "Công cụ phân tích mạng: Ping, Traceroute, Wireshark",
    description:
      "Hiểu vai trò của các công cụ kiểm tra kết nối, theo dõi đường đi gói tin và quan sát packet thực tế.",
    bullets: [
      "Ping kiểm tra đích có phản hồi hay không",
      "Traceroute/Tracert xem từng hop trên đường đi",
      "Wireshark bắt và phân tích packet",
      "Quy trình dùng tool để xử lý lỗi mạng",
    ],
    Component: LessonNetworkTools,
  },
  {
    path: "/phan-10-2",
    code: "10.2",
    title: "Cisco CLI cơ bản",
    description:
      "Làm quen với CLI của router/switch Cisco, các mode lệnh và cấu hình cơ bản để kiểm tra kết nối.",
    bullets: [
      "Cisco IOS CLI và các mode lệnh",
      "Router và switch khác nhau thế nào",
      "Cấu hình hostname, IP, enable secret",
      "Lệnh show, ping và checklist xử lý lỗi",
    ],
    Component: LessonCiscoCli,
  },
  {
    path: "/phan-10-3",
    code: "10.3",
    title: "Thiết kế mạng doanh nghiệp cơ bản",
    description:
      "Tìm hiểu VLAN, subnet, firewall và cách tổ chức mạng doanh nghiệp theo vùng chức năng rõ ràng.",
    bullets: [
      "Vì sao doanh nghiệp không nên để chung một mạng",
      "VLAN, subnet và IP plan",
      "Phân vùng bảo mật và vai trò firewall",
      "Ví dụ thiết kế hoàn chỉnh cho công ty nhỏ",
    ],
    Component: LessonEnterpriseNetworks,
  },
  {
    path: "/phan-10-4",
    code: "10.4",
    title: "Cloud Networking và SDN",
    description:
      "Hiểu các khái niệm mạng trên cloud như VPC/VNet, subnet, security group, route table và SDN.",
    bullets: [
      "Cloud Networking là gì",
      "VPC/VNet, public subnet, private subnet",
      "Security group và route table",
      "SDN và Infrastructure as Code",
    ],
    Component: LessonCloudNetworking,
  },
  {
    path: "/phan-10-5",
    code: "10.5",
    title: "Ôn tập lộ trình học mạng và chứng chỉ",
    description:
      "Tổng kết toàn bộ kiến thức đã học, liên hệ với hướng ôn thi Network+, CCNA và kế hoạch thực hành tiếp theo.",
    bullets: [
      "Bản đồ lại toàn bộ kiến thức mạng đã học",
      "So sánh Network+ và CCNA",
      "Kế hoạch ôn tập, lab và checklist học tiếp",
      "Tư duy học chứng chỉ gắn với thực hành",
    ],
    Component: LessonReviewAndCerts,
  },

  // ===== PHẦN 11-12: ĐANG CẬP NHẬT =====
  // Các bài học tiếp theo sẽ được thêm vào sau khi hoàn thành nội dung
];

const LESSON_STATUS_KEY = "network-course-lesson-status";

function readLessonStatuses() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(LESSON_STATUS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function lessonStatusLabel(status) {
  if (status === "saved") return "Đang đánh dấu";
  if (status === "done") return "Đã hoàn thành";
  return "Chưa đánh dấu";
}

function lessonStatusClasses(status) {
  if (status === "saved") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  }

  if (status === "done") {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }

  return "border-slate-700 bg-slate-900 text-slate-400";
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function HomePage({ lessonStatuses, onToggleSaved, onToggleDone }) {
  const stats = useMemo(() => {
    const values = Object.values(lessonStatuses);
    const saved = values.filter((status) => status === "saved").length;
    const done = values.filter((status) => status === "done").length;
    const percent = lessons.length
      ? Math.round((done / lessons.length) * 100)
      : 0;

    return { saved, done, percent };
  }, [lessonStatuses]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.16),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <BookOpen size={16} />
            Khóa học Mạng Máy Tính
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.15fr),360px] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Trang mục lục
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Nền tảng Mạng Máy Tính
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl">
                Học từ cơ bản đến nâng cao về mạng máy tính, từ khái niệm đến thực hành.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Compass size={16} className="text-cyan-300" />
                Điều hướng
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>1. Chọn bài trong danh sách.</p>
                <p>2. App chuyển sang route riêng của bài học.</p>
                <p>3. Dùng nút quay lại hoặc về mục lục để tiếp tục học.</p>
              </div>
              <div className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-white">
                      Tiến độ khóa học
                    </div>
                    <div className="text-slate-400">
                      {stats.done}/{lessons.length} bài đã hoàn thành
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">
                    {stats.percent}%
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${stats.percent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="space-y-12">
          {/* Phần 1 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">
                Nền tảng mạng máy tính
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(0, 5).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 2 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">
                Mô hình mạng OSI và TCP/IP
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(5, 10).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 3 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 font-bold border border-orange-500/20">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tín hiệu và truyền dẫn
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(10, 15).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 4 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400 font-bold border border-green-500/20">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tầng Liên Kết Dữ Liệu
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(15, 22).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 5 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">
                5
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tầng Mạng (Network Layer)
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(22, 30).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 6 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20">
                6
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tầng Giao Vận (Transport Layer)
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(30, 36).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 7 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 font-bold border border-violet-500/20">
                7
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tầng Ứng Dụng (Application Layer)
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(36, 43).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 8 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20">
                8
              </div>
              <h2 className="text-2xl font-bold text-white">
                Mạng Không Dây (Wireless Networks)
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(43, 48).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 9 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">
                9
              </div>
              <h2 className="text-2xl font-bold text-white">
                Bảo Mật Mạng (Network Security)
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(48, 54).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Phần 10 */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                10
              </div>
              <h2 className="text-2xl font-bold text-white">
                Công Cụ, Thực Hành Và Định Hướng
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.slice(54, 59).map((lesson) => (
                <LessonCard
                  key={lesson.path}
                  lesson={lesson}
                  status={lessonStatuses[lesson.path]}
                  onToggleSaved={() => onToggleSaved(lesson.path)}
                  onToggleDone={() => onToggleDone(lesson.path)}
                />
              ))}
            </div>
          </section>

          {/* Thông báo các phần tiếp theo */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
            <div className="mx-auto max-w-md space-y-4">
              <div className="text-4xl">🚧</div>
              <h3 className="text-xl font-bold text-white">
                Các phần tiếp theo đang được cập nhật
              </h3>
              <p className="text-slate-400">
                Các bài còn lại từ phần 11 đến 12 sẽ được thêm sau khi hoàn thành tiếp nội dung về chủ đề nâng cao và phần tổng kết mở rộng.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function LessonCard({ lesson, status, onToggleSaved, onToggleDone }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <Link to={lesson.path} className="block">
        <div className="mb-3 flex items-center justify-between">
          <div className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-sm font-bold text-cyan-300 border border-cyan-500/20">
            {lesson.code}
          </div>
          <div className={`rounded-full border px-2 py-0.5 text-xs font-medium ${lessonStatusClasses(status)}`}>
            {status === "done" ? <CheckCircle2 size={12} className="inline mr-1" /> : <Circle size={12} className="inline mr-1" />}
            {lessonStatusLabel(status)}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
          {lesson.title}
        </h3>

        <p className="mb-4 text-sm text-slate-400 line-clamp-2">
          {lesson.description}
        </p>

        <ul className="space-y-1.5 text-xs text-slate-500">
          {lesson.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-cyan-500">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Link>

      <div className="mt-4 flex gap-2 border-t border-slate-800 pt-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleSaved();
          }}
          className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${status === "saved"
            ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
            : "border-slate-700 bg-slate-800 text-slate-400 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
            }`}
        >
          <BookMarked size={14} className="inline mr-1" />
          {status === "saved" ? "Đã đánh dấu" : "Đánh dấu"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleDone();
          }}
          className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${status === "done"
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
            : "border-slate-700 bg-slate-800 text-slate-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
            }`}
        >
          <BookCheck size={14} className="inline mr-1" />
          {status === "done" ? "Đã xong" : "Hoàn thành"}
        </button>
      </div>
    </div>
  );
}

function LessonPage({ lesson, lessonStatuses, onToggleSaved, onToggleDone }) {
  const status = lessonStatuses[lesson.path];
  const currentIndex = lessons.findIndex((l) => l.path === lesson.path);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Home size={16} />
            Về mục lục
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm font-bold text-cyan-300 border border-cyan-500/20">
              {lesson.code}
            </div>
            <button
              onClick={() => onToggleSaved(lesson.path)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${status === "saved"
                ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                : "border-slate-700 bg-slate-800 text-slate-400 hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
                }`}
            >
              <BookMarked size={14} className="inline mr-1" />
              {status === "saved" ? "Đã đánh dấu" : "Đánh dấu"}
            </button>
            <button
              onClick={() => onToggleDone(lesson.path)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${status === "done"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border-slate-700 bg-slate-800 text-slate-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
                }`}
            >
              <BookCheck size={14} className="inline mr-1" />
              {status === "done" ? "Đã xong" : "Hoàn thành"}
            </button>
          </div>
        </div>
      </nav>

      <lesson.Component />

      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {prevLesson ? (
              <Link
                to={prevLesson.path}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <ArrowLeft
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-400"
                />
                <div>
                  <div className="text-xs text-slate-500">Bài trước</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">
                    {prevLesson.code}: {prevLesson.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                to={nextLesson.path}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 sm:ml-auto"
              >
                <div className="text-right">
                  <div className="text-xs text-slate-500">Bài tiếp</div>
                  <div className="font-semibold text-white group-hover:text-cyan-300">
                    {nextLesson.code}: {nextLesson.title}
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-400"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [lessonStatuses, setLessonStatuses] = useState(readLessonStatuses);

  useEffect(() => {
    window.localStorage.setItem(
      LESSON_STATUS_KEY,
      JSON.stringify(lessonStatuses)
    );
  }, [lessonStatuses]);

  const toggleSaved = (path) => {
    setLessonStatuses((prev) => ({
      ...prev,
      [path]: prev[path] === "saved" ? undefined : "saved",
    }));
  };

  const toggleDone = (path) => {
    setLessonStatuses((prev) => ({
      ...prev,
      [path]: prev[path] === "done" ? undefined : "done",
    }));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              lessonStatuses={lessonStatuses}
              onToggleSaved={toggleSaved}
              onToggleDone={toggleDone}
            />
          }
        />
        {lessons.map((lesson) => (
          <Route
            key={lesson.path}
            path={lesson.path}
            element={
              <LessonPage
                lesson={lesson}
                lessonStatuses={lessonStatuses}
                onToggleSaved={toggleSaved}
                onToggleDone={toggleDone}
              />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
