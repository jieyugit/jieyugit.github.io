var posts=["2023/11/27/20231127-vulhub-DC/","2023/11/29/20231129-OWASP-TOP10靶场/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };