


   var data = '';  
   var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
               data = JSON.parse(xhttp.responseText);
           }
       }
   

 
 ThemeIndex = 0; 

 
       function changeImageIndex() {
            ThemeIndex += 1;
    
         if (ThemeIndex > 4 - 1) {
             ThemeIndex = 0; 
         }
         document.getElementById('index-billede1').src = data.index[ThemeIndex].billede1;
         document.getElementById('index-billede2').src = data.index[ThemeIndex].billede2;
         document.getElementById('index-billede3').src = data.index[ThemeIndex].billede3;
         document.getElementById('index-billede4').src = data.index[ThemeIndex].billede4;
         document.getElementById('index-billede5').src = data.index[ThemeIndex].billede5;
         document.getElementById('citat-section').style.backgroundImage = data.index[ThemeIndex].bg;
    
        }

        function changeImageDesHygge() {
            ThemeIndex += 1;

        if (ThemeIndex > 4 - 1) {
            ThemeIndex = 0; 
        }
         document.getElementById('destinationhygge-billede1').src = data.deshygge[ThemeIndex].billede1;
         document.getElementById('citat-section').style.backgroundImage = data.deshygge[ThemeIndex].bg;
}


        function changeImageGuides() {
            ThemeIndex += 1;

        if (ThemeIndex > 4 - 1) {
            ThemeIndex = 0; 
        }
        document.getElementById('guides-billede1').src = data.guides[ThemeIndex].billede1;
        document.getElementById('citat-section').style.backgroundImage = data.guides[ThemeIndex].bg;

    }


    function changeImageCom() {
        ThemeIndex += 1;

    if (ThemeIndex > 4 - 1) {
        ThemeIndex = 0; 
    }
    document.getElementById('community-billede1').src = data.community[ThemeIndex].billede1;
    document.getElementById('citat-section').style.backgroundImage = data.community[ThemeIndex].bg;

}

    xhttp.open("GET", "../tema.json", true);
    xhttp.send();