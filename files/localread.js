function ieReadLocalFile(that,callback,encoding) {
        if(!that.value)return;
        if(that.value.length<=0)return;
        var request;
        if (window.XMLHttpRequest && false) {
           request=new XMLHttpRequest();
        }
        else {
          request=new ActiveXObject("Msxml2.XMLHTTP");
        }
        var fn=that.value;
        request.open('get', fn, true);
        request.onreadystatechange = function() 
        {
          if (request.readyState == 4 && (request.status == 200 || request.status==0)) {
              callback(request.responseText);
          }
        }
        request.send();
}
    
function readLocalFile(that,callback,encoding)
{   
    var reader = new FileReader();

    if(that.files && that.files[0]){
	     var reader = new FileReader();
	     reader.onload = function (e) {  
           callback(e.target.result);
	     };
       reader.readAsText(that.files[0],encoding);
    }
}

function loadTextFile(f,callback)
{
    var encoding=null;
    if(document && document.getElementById("txtEncoding")) {
        encoding=document.getElementById("txtEncoding").value;
    }
    (window.FileReader ? readLocalFile(f, callback, encoding) : ieReadLocalFile(f, callback, encoding));
}