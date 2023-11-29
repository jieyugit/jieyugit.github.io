var posts=["2023/11/29/20231129-OWASP-TOP10靶场/","2023/11/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };