

/*let mainObj = {};
let showObj = function(){
    for (let prop in mainObj){
        console.log(prop)
        console.log(mainObj[prop]);
    };
}

var data = '';  
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			data = JSON.parse(xhttp.responseText);
            console.log(data);
           mainObj = data; 
            showObj(); 
		}
    }

    xhttp.open("GET", "../JSON/tema.json", true);
    xhttp.send();

    */



   var data = '';  
   var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
               data = JSON.parse(xhttp.responseText);
               console.log(data);
           }
       }
   
       xhttp.open("GET", "../JSON/tema.json", true);
       xhttp.send();
   