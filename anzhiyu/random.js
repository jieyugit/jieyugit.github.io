var posts=["2023/11/27/20231127-vulhub-DC/","2023/11/29/20231129-OWASP-TOP10靶场/","2023/09/04/20231129-SEED-Labs-2.0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };