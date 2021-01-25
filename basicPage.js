function pageLoad(title, pageTitle){
  document.write('<li><a href='+title+' target="_self">'+pageTitle+'</a></li>');
};

function showPageList(self){
  pageLoad("(g)idle_lion.html", '(여자)아이들 - lion');
  pageLoad("yooa_bonvoyage.html", "유아 - 숲의 아이");
  pageLoad("redvelvet_peekaboo.html", "레드벨벳 - 피카부");
};
