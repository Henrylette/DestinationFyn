var data = '';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhttp.responseText);
    }
}


ThemeIndex = 0;


if (ThemeIndex > 0) {
    sessionStorage.setItem("Index", ThemeIndex);
    console.log(sessionStorage.getItem("Index"));
}


function getThemeIndex(page) {
    if (parseInt(sessionStorage.getItem("Index")) > 0) {
        ThemeIndex = parseInt(sessionStorage.getItem("Index") - 1);
        if (page == 'index') {
            changeImageIndex();
        }

        if (page == 'desHygge') {
            changeImageDesHygge();
        }

        if (page == 'guide') {
            changeImageGuides();
        }

        if (page == 'com') {
            changeImageCom();
        }
    }
}



function changeImageIndex() {
    ThemeIndex += 1;

    if (ThemeIndex > 4 - 1) {
        ThemeIndex = 0;
    }

    sessionStorage.setItem("Index", ThemeIndex);

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


    sessionStorage.setItem("Index", ThemeIndex);
    document.getElementById('destinationhygge-billede1').src = data.deshygge[ThemeIndex].billede1;
    document.getElementById('destinationhygge-billede2').src = data.deshygge[ThemeIndex].billede2;
    document.getElementById('citat-section').style.backgroundImage = data.deshygge[ThemeIndex].bg;
}


function changeImageGuides() {
    ThemeIndex += 1;

    if (ThemeIndex > 4 - 1) {
        ThemeIndex = 0;
    }

    sessionStorage.setItem("Index", ThemeIndex);
    document.getElementById('guides-billede1').src = data.guides[ThemeIndex].billede1;
    document.getElementById('guides-billede2').src = data.guides[ThemeIndex].billede2;
    document.getElementById('citat-section').style.backgroundImage = data.guides[ThemeIndex].bg;

}


function changeImageCom() {
    ThemeIndex += 1;

    if (ThemeIndex > 4 - 1) {
        ThemeIndex = 0;
    }

    sessionStorage.setItem("Index", ThemeIndex);
    document.getElementById('community-billede1').src = data.community[ThemeIndex].billede1;
    document.getElementById('community-billede2').src = data.community[ThemeIndex].billede2;
    document.getElementById('citat-section').style.backgroundImage = data.community[ThemeIndex].bg;


}


xhttp.open("GET", "../tema.json", true);
xhttp.send();





function burger() {

    var x = document.getElementById('nav');

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

function ShowNav() {
    var a = window.innerWidth;
    if (a > 700) {
        document.getElementById('nav').style.display = "block";
    } else {
        document.getElementById('nav').style.display = "none";
    }
}