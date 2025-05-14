const generatedBibEntries = {
   "VPN01": {
    "abstract": "The use of Virtual Private Networks (VPNs) has witnessed an outstanding rise as they aim to provide confidentiality and anonymity to communication. Despite this enormous and ubiquitous usage, VPNs come with 273 various security, misconfiguration, and performance related issues thereby hindering the users to take maximum advantage of this revolutionary technology. To address this concern, VPN users must choose the most secure and perfect VPN solution for the smooth functioning of daily life activities. Generally, no clear set of directions is available for assisting a common VPN user thereby accentuating the need to develop an elucidated and coherent checklist that thoroughly helps in evaluating any VPN based on its security, performance, auditing, and management function. This research comprehensively surveys VPN technologies, its features, working principles, and compliance principles that evolved over the last two decades. Based on it, this research presents a new methodology in the form of a feature-enriched template to comprehensively analyze a VPN solution. Each VPN feature is given its score against the potential damage it may cause in case of failure and the probability of occurrence of that failure. In this way, the corporate sector and individual users can quantitatively and qualitatively grade available options while choosing a VPN and use it effectively.",
    "author": "Abbas, H., Emmanuel, N., Amjad, M. F., Yaqoob, T., Atiquzzaman, M., Iqbal, Z., Shafqat, N., Shahid, W. B., Tanveer, A., & Ashfaq, U.",
    "doi": "https://doi.org/10.1145/3579162",
    "journal": "ACM Computing Surveys (ACM CSUR)",
    "keywords": "VPN, security assessment, survey, evaluation, vulnerabilities",
    "title": "Security Assessment and Evaluation of VPNs: A Comprehensive Survey",
    "type": "article",
    "url": "https://doi.org/10.1145/3579162",
    "volume": "55",
    "number": "13",
    "year": "2023"
  },
  "VPN03": {
    "abstract": "VPN adoption has seen steady growth over the past decade due to increased public awareness of privacy and surveillance threats. In response, certain governments are attempting to restrict VPN access by identifying connections using “dual use” DPI technology. To investigate the potential for VPN blocking, we develop mechanisms for accurately fingerprinting connections using OpenVPN, the most popular protocol for commercial VPN services. We identify three fingerprints based on protocol features such as byte pattern, packet size, and server response. Playing the role of an attacker who controls the network, we design a two-phase framework that performs passive fingerprinting and active probing in sequence. We evaluate our framework in partnership with a million-user ISP and find that we identify more than 85% of OpenVPN flows with only negligible false positives, suggesting that OpenVPN based services can be effectively blocked with little collateral damage. Although some commercial VPNs implement countermeasures to avoid detection, our framework successfully identified connections to 34 out of 41 “obfuscated” VPN configurations. We discuss the implications of the VPN fingerprintability for different threat models and propose short-term defenses. In the longer term, we urge commercial VPN providers to be more transparent about their obfuscation approaches and to adopt more principled detection countermeasures, such as those developed in censorship circumvention research.",
    "author": "Xue, D., Ramesh, R., Jain, A., Michaelis Kallitsis, J. Alex Halderman, Crandall, J. R., & Roya Ensafi.",
    "doi": "10.1145/3618117",
    "journal": "Communications of the ACM",
    "keywords": "VPN, Traffic Obfuscation, Anti-Detection",
    "title": "OpenVPN Is Open to VPN Fingerprinting",
    "type": "article",
    "url": "https://doi.org/10.1145/3618117",
    "volume": "68",
    "number": "1",
    "year": "2025"
  },
  "VPN10": {
    "abstract": "Virtual Private Networks (VPNs) provide confidentiality and hide the original IP address. Although many VPN providers promise not to record user activity, several media reports of data breaches show that this is often not true. Tor, on the other hand, allows anony- mous communication using onion routing and takes privacy and anonymity seriously, but at the cost of performance loss. What is missing is a sweet spot between VPNs and anonymization net- works that supports bulk downloads and video streaming but pro- vides countermeasures against untrusted VPN providers and Au- tonomous System (AS)-level attackers. In this paper, we present OnionVPN, an onion routing-based VPN tunnel, that provides better bulk transfer performance than Tor and offers additional security features over a VPN: (1) interme- diate VPN nodes see only encrypted traffic, (2) protection against AS-level attackers with a new path selection algorithm, and (3) onion services with a novel cryptographic NAT traversal algorithm using the Noise protocol framework. We analyze 118 VPN provi- ders, systematically compare them to our requirements and show that OnionVPN is currently possible with three VPN providers. An alternative to Tor for bulk traffic could relieve the Tor network and provide a better experience for other users who need higher privacy and anonymity features.",
    "author": "Pahl, S., Kaiser, D., Engel, T., & Adamsky, F. ",
    "doi": "https://doi.org/10.1145/3689943.3695043",
    "journal": "Proceedings of the 31st USENIX Security Symposium (USENIX Security 2022)",
    "keywords": "VPN perception, VPN marketing, Privacy, Risk, provider transparency, user trust",
    "title": "OnionVPN: Onion Routing-Based VPN-Tunnels with Onion Services",
    "type": "article",
    "url": "https://dl.acm.org/doi/10.1145/3689943.3695043",
    "year": "2023"
  },
  "VPN07": {
    "abstract": "Corporate Virtual Private Networks (VPNs) enable users to work from home or while traveling. At the same time, VPNs are tied to a company’s network infrastructure, forcing users to install proprietary clients for network compatibility rea- sons. VPN clients run with high privileges to encrypt and reroute network traffic. Thus, bugs in VPN clients pose a substantial risk to their users and in turn the corporate network. Cisco, the dominating vendor of enterprise network hardware, offers VPN connectivity with their AnyConnect client for desktop and mobile devices. While past security research primarily focused on the AnyConnect Windows client, we show that Linux and iOS are based on different architectures and have distinct security issues. Our reverse engineering as well as the follow-up design analysis and fuzzing reveal 13 new vulnerabilities. Seven of these are located in the Linux client. The root cause for privilege escalations on Linux is anchored so deep in the client’s architecture that it only got patched with a partial workaround. A similar analysis on iOS uncovers three AnyConnect-specific bugs as well as three general issues in iOS network extensions, which apply to all kinds of VPNs and are not restricted to AnyConnect.",
    "author": "Roitburd, G., Ortmann, M., Hollick, M., & Classen, J.",
    "doi": "https://doi.org/10.1109/CNS53000.2021.9705023",
    "keywords": "Virtual Private Network, Fuzzing, iOS, Linux",
    "title": "Very Pwnable Network: Cisco AnyConnect Security Analysis",
    "type": "article",
    "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9705023",
    "year": "2021"
  },
  "VPN02": {
    "abstract": "Internet Protocol Security (IPsec) is a widely used network layer security control for protecting communications. IPsec is a framework of open standards for ensuring private communications over Internet Protocol (IP) networks. IPsec configuration is usually performed using the Internet Key Exchange (IKE) protocol. This publication provides practical guidance to organizations on implementing security services based on IPsec so that they can mitigate the risks associated with transmitting sensitive information across networks. The document focuses on how IPsec provides network layer security services and how organizations can implement IPsec and IKE to provide security under different circumstances. It also describes alternatives to IPsec and discusses under what circumstances each alternative may be appropriate.",
    "author": "Barker, E., Dang, Q., Frankel, S., Scarfone, K., & Wouters, P.",
    "doi": "10.6028/nist.sp.800-77r1",
    "keywords": "VPN, IPsec, NIST, guidelines, security standard",
    "title": "Guide to IPsec VPNs (NIST SP 800-77)",
    "type": "article",
    "url": " https://doi.org/10.6028/NIST.SP.800-77r1",
    "year": "2020"
  },
  "VPN08": {
    "abstract": "Commercial Virtual Private Network (VPN) providers have steadily increased their presence in Internet culture. Their most advertised use cases are preserving the user’s privacy, or circumventing censorship. However, a number of VPN providers nowadays have added what they call a streaming unblocking service. In practice, such VPN providers allow their users to access streaming content that Video-on-Demand (VOD) providers do not provide in a specific geographical region. In this work, we investigate the mechanisms by which commercial VPN providers facilitate access to geo-restricted content, de-facto bypass- ing VPN-detection countermeasures by VOD providers (blocklists). We actively measure the geo-unblocking capabilities of 6 commercial VPN providers in 4 different geographical regions during two measurements periods of 7 and 4 months respectively. Our results identify two methods to circumvent the geo-restriction mechanisms. These methods consist of: (1) specialized ISPs/hosting providers which do not appear on the block- lists used by content providers to geo-restrict content and (2) the use of residential proxies, which due to their nature also do not appear in those blocklists. Our analysis shows that the ecosystem of the geo-unblocking VPN providers is highly dynamic, adapting their chosen geo-unblocking mechanisms not only over time, but also according to different geographi- cal regions.",
    "author": "Khan, E., et al.",
    "doi": "https://doi.org/10.1007/978-3-031-28486-1_3",
    "journal": "Lecture Notes in Computer Science (LNCS) – IFIP SEC 2023 Proceedings",
    "keywords": "VPN geo-unblocking, content restriction, residential proxy, circumvention, streaming access, VPN evasion",
    "title": "Stranger VPNs: Investigating the Geo-Unblocking Capabilities of Commercial VPN Providers",
    "type": "article",
    "url": "https://doi.org/10.1007/978-3-031-28486-1_3",
    "year": "2023"
  },
  "VPN05": {
    "abstract": "The use of Virtual Private Networks (VPN) as a mean to secure com- munication has become increasingly important with the growth in remote working. While vendor supplied VPN solutions are widely available, there is a growing trend to evaluate and implement solu- tions based on open-source software. In this study, we investigate three popular open-source VPN software (OpenVPN, OpenCon- nect and Wireguard) and compare their relative merits in terms of performance. Several studies have shown Wireguard’s superiority in performance over OpenVPN and other VPN software but nei- ther it nor OpenVPN has been benchmarked against OpenConnect. This study presents the performance differences between the three products across a range of client devices in selected typical deploy- ment scenarios. We also evaluate the performance differences of the software on desktop servers functioning as VPN gateways behind a router and Network Address Translator. Our study shows that VPN performance, besides the server side, is highly dependent on implementation of the client application. Even though Wireguard is ahead in performance in some operating environments, there are still cases where OpenVPN and OpenConnect come out on par.",
    "author": "Chua, C. H., & Ng, S. C. ",
    "doi": "https://doi.org/10.1145/3561877.3561882",
    "journal": "2022 the 5th International Conference on Information Science and Systems",
    "keywords": "VPN, network security, analysis",
    "title": "Open-Source VPN Software",
    "type": "article",
    "url": "https://doi.org/10.1145/3561877.3561882",
    "year": "2022"
  },
  "VPN04": {
    "abstract": "Global Internet users increasingly rely on virtual private network (VPN) services to preserve their privacy, circumvent censorship, and access geo-filtered content. Due to their own lack of technical sophistication and the opaque nature of VPN clients, however, the vast majority of users have limited means to verify a given VPN service’s claims along any of these dimensions. We design an active measurement system to test various infrastructural and privacy as- pects of VPN services and evaluate 62 commercial providers. Our results suggest that while commercial VPN services seem, on the whole, less likely to intercept or tamper with user traffic than other, previously studied forms of traffic proxying, many VPNs do leak user traffic—perhaps inadvertently—through a variety of means. We also find that a non-trivial fraction of VPN providers transparently proxy traffic, and many misrepresent the physical location of their vantage points: 5–30% of the vantage points, associated with 10% of the providers we study, appear to be hosted on servers located in countries other than those advertised to users.",
    "author": "Khan, M. T., DeBlasio, J., Voelker, G. M., Snoeren, A. C., Kanich, C., & Vallina-Rodriguez, N.",
    "doi": "10.1145/3278532.3278570",
    "journal": "Proceedings of the Internet Measurement Conference (IMC) 2018",
    "keywords": "VPN, commercial services, privacy, logging policy, transparency",
    "title": "An Empirical Analysis of the Commercial VPN Ecosystem",
    "type": "article",
    "url": "https://doi.org/10.1145/3278532.3278570",
    "year": "2018"
  },
  "VPN09": {
    "abstract": "Internet users increasingly rely on commercial virtual private net- work (VPN) services to protect their security and privacy. The VPN services route the client’s traffic over an encrypted tunnel to a VPN gateway in the cloud. Thus, they hide the client’s real IP address from online services, and they also shield the user’s connections from perceived threats in the access networks. In this paper, we study the security of such commercial VPN services. The focus is on how the client applications set up VPN tunnels, and how the service providers instruct users to configure generic client soft- ware. We analyze common VPN protocols and implementations on Windows, macOS and Ubuntu. We find that the VPN clients have various configuration flaws, which an attacker can exploit to strip off traffic encryption or to bypass authentication of the VPN gateway. In some cases, the attacker can also steal the VPN user’s username and password. We suggest ways to mitigate each of the discovered vulnerabilities.",
    "author": "Bui, T., Rao, S., Antikainen, M., & Aura, T.",
    "doi": "10.1007/978-3-030-35055-0_7",
    "journal": "Lecture Notes in Computer Science (LNCS) – NordSec 2019 Proceedings",
    "keywords": "VPN, Android, client-side vulnerability, mobile security, app analysis",
    "title": "Client-side Vulnerabilities in Commercial VPNs",
    "type": "article",
    "url": "https://doi.org/10.1007/978-3-030-35055-0_7",
    "year": "2019"
  },
  "VPN06": {
    "abstract": "Many systems today rely heavily on virtual private network (VPN) technology to connect networks and protect their services on the Internet. While prior studies compare the performance of different implementations, they do not consider adversarial settings. To address this gap, we evaluate the resilience of VPN implementations to flooding-based denial-of-service (DoS) attacks. We focus on a class of stateless flooding attacks, which are particularly threatening to real connections, as they can be carried out by an off-path attacker that operates stealthily by spoofing source IP addresses. We have implemented various at- tacks to evaluate DoS resilience for three major open-source VPN solutions, with surprising results: On high-performance hard- ware with a 40 Gb/s interface, data transfer over established WireGuard connections can be fully denied with 700 Mb/s of attack traffic. For strongSwan (IPsec), an adversary can block any legitimate connections from being established using only 75 Mb/s of attack traffic. OpenVPN can be overwhelmed with 100Mb/s of flood traffic, denying data transfer through the VPN connection as well as connection establishment completely. Further analysis has revealed implementation bugs and major inefficiencies in the implementations related to concurrency aspects. These findings demonstrate a need for more adversarial testing of VPN implementations with respect to DoS resilience.",
    "author": "Streun, F., Wanner, J., & Perrig, A.",
    "doi": "https://dx.doi.org/10.14722/ndss.2022.24043",
    "journal": "IEEE Transactions on Dependable and Secure Computing (TDSC)",
    "keywords": "VPN security, DoS attacks, adversarial testing, VPN protocol, WireGuard, OpenVPN, network availability",
    "title": "Evaluating Susceptibility of VPN Implementations to DoS Attacks Using Adversarial Testing",
    "type": "article",
    "url": "https://www.ndss-symposium.org/ndss-paper/auto-draft-191/",
    "year": "2022"
  }

};