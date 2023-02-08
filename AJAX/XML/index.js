var p = document.querySelector("p");
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=178.149.82.77");
xmlhttp.send();
xmlhttp.onload = function(){
    if(xmlhttp.status === 200){
        xmlDoc = xmlhttp.responseXML;
        p.textContent = xmlDoc.querySelector("geoplugin_countryName").textContent;
    }
};
