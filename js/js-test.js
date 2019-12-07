

 backgroundImages =["url(images/tema1/burger-wallpaper.jpg)", "url(images/tema2/brik-wallpaper.png)", "url(images/tema3/avocado-wallpaper.png)", "url(images/tema4/lassagne-wallpaper.png)"]; 
 

 /*Index*/ 
 themeImages1 = ["images/tema1/forside.png", "images/tema2/forside.png" , "images/tema3/forside.png", "images/tema4/forside.png"];
 themeImages2 = ["images/tema1/forside-2.png", "images/tema2/forside-2.png", "images/tema3/forside-2.png", "images/tema4/forside-2.png"];
 themeImages3 = ["images/tema1/ide.png", "images/tema2/ide.png", "images/tema3/ide.png", "images/tema4/ide.png"];
 themeImages4 = ["images/tema1/opret.png", "images/tema2/opret.png", "images/tema3/opret.png", "images/tema4/opret.png"];
 themeImages5 = ["images/tema1/glad.png", "images/tema2/glad.png", "images/tema3/glad.png", "images/tema4/glad.png"];

/*#destinationHygge*/
themeImages6 = ["../images/tema1/header-1.png", "../images/tema2/header-1.png", "../images/tema3/header-1.png", "../images/tema4/header-1.png"];

 var ThemeIndex = 0;

 function changeImage() {
        ThemeIndex += 1;

     if (ThemeIndex > backgroundImages.length - 1) {
         ThemeIndex = 0; 
     }
     document.getElementById('citat-section').style.backgroundImage = backgroundImages[ThemeIndex];


     if(ThemeIndex > themeImages6.length - 1) {
         ThemeIndex = 0;
     }

    /*index*/ 
     document.getElementById('index-billede1').src = themeImages1[ThemeIndex]; 
     document.getElementById('index-billede2').src = themeImages2[ThemeIndex]; 
     document.getElementById('index-billede3').src = themeImages3[ThemeIndex]; 
     document.getElementById('index-billede4').src = themeImages4[ThemeIndex]; 
     document.getElementById('index-billede5').src = themeImages5[ThemeIndex]; 
     
     
     /*#destinationHygge*/
     document.getElementById('destinationhygge-billede1').src = themeImages6[ThemeIndex];
 }