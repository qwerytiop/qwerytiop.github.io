function setup(){
data = new Object();
//posts.json retrieve
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
 
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    data.posts=JSON.parse("("+xmlhttp.responseText+")");
    }
  }

xmlhttp.open("GET","posts.json",true);
xmlhttp.send();

return loader();
}
