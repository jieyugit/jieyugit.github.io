var posts=["2023/09/26/20230926-SEED-Labs-2.0-MD5-Hash-Collision/","2023/10/30/20231030-SEED-Labs-2.0-Cross-Site-Scripting-(XSS)-Attack-Lab/","2023/09/20/20230920-端口扫描工具/","2023/10/23/20231023-SEED-Labs-2.0-Shellcode-Development-Lab/","2023/11/06/20231106-SEED-Labs-2.0-SQL-Injection-Attack-Lab/","2023/11/29/20231129-OWASP-TOP10靶场/","2023/11/28/20231128-SEED-Labs-2.0-TCPIP-Attack-Lab/","2023/11/27/20231127-vulhub-DC/","2023/12/25/20231225-Golang-channel/","2024/01/02/20240102-网络空间安全技术/","2022/08/07/Eureka/","2024/01/30/20240130-JDK中isEqual为什么需要把每一位都进行比较/","2022/02/07/Java基础学习笔记/","2024/01/11/Nginx内存管理/","2022/08/07/Ribbon/","2022/08/08/OpenFeign/","2023/12/02/SCUCTF2023/","2023/11/13/SEED-Labs 2.0-Packet-Sniffing-and-Spoofing-Lab/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };