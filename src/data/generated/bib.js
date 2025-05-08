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
    "abstract": "As more users adopt VPNs for a variety of reasons, it is impor- tant to develop empirical knowledge of their needs and mental models of what a VPN offers. Moreover, studying VPN users alone is not enough because, by using a VPN, a user essen- tially transfers trust, say from their network provider, onto the VPN provider. To that end, we are the first to study the VPN ecosystem from both the users’ and the providers’ per- spectives. In this paper, we conduct a quantitative survey of 1,252 VPN users in the U.S. and qualitative interviews of nine providers to answer several research questions regarding the motivations, needs, threat model, and mental model of users, and the key challenges and insights from VPN providers. We create novel insights by augmenting our multi-perspective results, and highlight cases where the user and provider per- spectives are misaligned. Alarmingly, we find that users rely on and trust VPN review sites, but VPN providers shed light on how these sites are mostly motivated by money. Worry- ingly, we find that users have flawed mental models about the protection VPNs provide, and about data collected by VPNs. We present actionable recommendations for technologists and security and privacy advocates by identifying potential areas on which to focus efforts and improve the VPN ecosystem.",
    "author": "Ramesh, R., Vyas, A., & Ensafi, R.",
    "doi": "https://doi.org/10.48550/arXiv.2208.03505",
    "journal": "Proceedings of the 31st USENIX Security Symposium (USENIX Security 2022)",
    "keywords": "VPN perception, VPN marketing, user awareness, provider transparency, user trust, qualitative survey",
    "title": "“All of them claim to be the best”: Multi-perspective study of VPN users and VPN providers",
    "type": "article",
    "url": "https://arxiv.org/abs/2208.03505",
    "year": "2022"
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
    "type": "techreport",
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
    "abstract": "Virtual Private Network (VPN) solutions are used to connect private networks securely over the Internet. Besides their benefits in cor- porate environments, VPNs are also marketed to privacy-minded users to preserve their privacy, and to bypass geolocation-based content blocking and censorship. This has created a market for turnkey VPN services offering a multitude of vantage points all over the world for a monthly price. While VPN providers are heavily using privacy and security benefits in their marketing, such claims are generally hard to measure and substantiate. While there exist some studies on the VPN ecosystem, all prior works omit a critical part in their analyses: How well do the providers configure and secure their own network infrastructure? and How well are they protecting their customers from other customers? To answer these questions, we have developed an automated measurement system with which we conduct a large-scale analysis of VPN providers and their thousands of VPN endpoints. Considering the fact that VPNs work internally using non-Internet-routable IP addresses, they might enable access to otherwise inaccessible networks. If not properly secured, this can inadvertently expose internal networks of these providers, or worse, even other clients connected to their services. Our results indicate a widespread lack of traffic filtering towards internally routable networks on the majority of tested VPN service providers, even in cases where no other VPN customers were directly exposed. We have disclosed our findings to the affected providers and other stakeholders, and offered guidance to improve the situation.",
    "author": "Rytilahti, T., & Holz, T.",
    "doi": "https://doi.org/10.48550/arXiv.2410.08737",
    "journal": "Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security (CCS 2023)",
    "keywords": "VPN, network security, analysis",
    "title": "Bad Neighbors: On Understanding VPN Provider Networks",
    "type": "article",
    "url": "https://doi.org/10.31763/iota.v3i3.613",
    "year": "2024"
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
    "year": "2021"
  }

};