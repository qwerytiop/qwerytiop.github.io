function setup(){
//posts.json retrieve
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
 
xmlhttp.onreadystatechange=function()
  {
  var supercat;
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    supercat=JSON.parse(xmlhttp.responseText);
	alert(data.posts);
	return loader(supercat);
    }
  }

xmlhttp.open("GET","json/posts.json",true);
xmlhttp.send();


}
