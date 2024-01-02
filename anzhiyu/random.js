var posts=["2023/12/25/20231225-Golang-channel/","2022/08/07/Eureka/","2022/08/08/OpenFeign/","2022/08/07/Ribbon/","2023/11/27/20231127-vulhub-DC/","2023/11/29/20231129-OWASP-TOP10靶场/","2024/01/02/20240102-网络空间安全技术/","2022/02/07/Java基础学习笔记/","2023/09/04/20231129-SEED-Labs-2.0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };