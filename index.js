setInterval(() => {

  let imgs = document.querySelectorAll("img");
  imgs.forEach((a, i) => {
    a.src =
      "https://pbs.twimg.com/media/FXXmyjrUIAUfXu1?format=jpg&name=large";
  });
  
}, 500);
