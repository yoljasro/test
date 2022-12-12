// a=document.querySelector(".woman-man5");
// if(a=="w")
// {
//     document.querySelector(".circle2").style.backgroundImage="url(img/woman.jpg)";
// }
// else if(a=="m")
// {
//     document.querySelector(".circle2").style.backgroundImage="url(img/man.jpg)";
// }
// else
// {
//     document.querySelector(".circle2").style.backgroundImage="url(img/kimdir.png)";
// }


// b1=prompt("Ismingiz:");
// b2=prompt("Familyangiz:");
// document.querySelector(".name-surname").innerHTML=b1+" "+b2;



// c1=prompt("Manzilingiz:");
// document.querySelector(".manzil").innerHTML="Manzil:  "+c1;
// c2=prompt("Email:");
// document.querySelector(".email").innerHTML="Email:  "+c2;
// c3=prompt("Instagram manzilingiz:");
// document.querySelector(".instagram").innerHTML="Instagram:  "+c3;
// c4=prompt("Telefon raqam:");
// document.querySelector(".telefon").innerHTML="Telefon raqam:  "+c4;


// d1=prompt("Ingiliz tilini bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(d1=="30%")
// {
//     document.querySelector(".english").style.width="30%";
// }
// else if(d1=="50%"){
//     document.querySelector(".english").style.width="50%";
// }
// else if(d1=="100%"){
//     document.querySelector(".english").style.width="100%";
// }
// else
// {
//     document.querySelector(".english").style.width="10%";
// }

// d2=prompt("O'zbek tilini bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(d2=="30%")
// {
//     document.querySelector(".uzbek").style.width="30%";
// }
// else if(d2=="50%"){
//     document.querySelector(".uzbek").style.width="50%";
// }
// else if(d2=="100%"){
//     document.querySelector(".uzbek").style.width="100%";
// }
// else
// {
//     document.querySelector(".uzbek").style.width="10%";
// }

// d3=prompt("Rus  tilini bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(d3=="30%")
// {
//     document.querySelector(".russian").style.width="30%";
// }
// else if(d3=="50%"){
//     document.querySelector(".russian").style.width="50%";
// }
// else if(d3=="100%"){
//     document.querySelector(".russian").style.width="100%";
// }
// else
// {
//     document.querySelector(".russian").style.width="10%";
// }




// e1=prompt("HTML ni bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(e1=="30%")
// {
//     document.querySelector(".html").style.width="30%";
// }
// else if(e1=="50%"){
//     document.querySelector(".html").style.width="50%";
// }
// else if(e1=="100%"){
//     document.querySelector(".html").style.width="100%";
// }
// else
// {
//     document.querySelector(".html").style.width="10%";
// }

// e2=prompt("CSS ni bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(e2=="30%")
// {
//     document.querySelector(".css").style.width="30%";
// }
// else if(e2=="50%"){
//     document.querySelector(".css").style.width="50%";
// }
// else if(e2=="100%"){
//     document.querySelector(".css").style.width="100%";
// }
// else
// {
//     document.querySelector(".css").style.width="10%";
// }

// e3=prompt("JS ni bilish darajangiz:(shu 3 tasidan birini tanlang--> 30%  50%  100%)");
// if(e3=="30%")
// {
//     document.querySelector(".js").style.width="30%";
// }
// else if(e3=="50%"){
//     document.querySelector(".js").style.width="50%";
// }
// else if(e3=="100%"){
//     document.querySelector(".js").style.width="100%";
// }
// else
// {
//     document.querySelector(".js").style.width="10%";
// }


// f4=prompt("Hobbilaringiz haqida yozing:");
// document.querySelector(".hobbi").innerHTML=f4;

// f1=prompt("Xarakteringiz haqida yozing:");
// document.querySelector(".harakter").innerHTML=f1;
// f2=prompt("Yutuqlaringiz haqida yozing:");
// document.querySelector(".yutuq").innerHTML=f2;
// f3=prompt("O'qigan joylaringiz haqida yozing:");
// document.querySelector(".talim").innerHTML=f3;

// function validateForm() {
//     let a = document.forms["myForm"]["fname"].value;
//     if(a=="w")
//     {
//         document.querySelector(".circle2").style.backgroundImage="url(img/woman.jpg)";
//     }
//     else if(a=="m")
//     {
//         document.querySelector(".circle2").style.backgroundImage="url(img/man.jpg)";
//     }
//     else
//     {
//         document.querySelector(".circle2").style.backgroundImage="url(img/kimdir.png)";
//     }
//   }

//  function clickfunction(){
//     document.querySelector(".container").style.display="block";
//     document.querySelector(".formcontainer").style.display="none";
//  } 

// const a = document.getElementById("input").value
// let b = document.forms["myForm"]["fname"].value;





function handleScroll() {
    const val = document.querySelector("#input").value;
    if (val == "w") {
        document.querySelector(".circle2").style.backgroundImage = "url(img/woman.jpg)";
    }
    else if (val == "m") {
        document.querySelector(".circle2").style.backgroundImage = "url(img/man.jpg)";
    }
    else {
        document.querySelector(".circle2").style.backgroundImage = "url(img/kimdir.png)";
    }
}


function handleScroll1() {
    const val1 = document.querySelector(".ism5").value;
    document.querySelector(".name-surname").innerHTML = val1;
}


function handleScroll3() {
    const val3 = document.querySelector(".manzil5").value;
    document.querySelector(".manzil").innerHTML = "Manzil: " + val3;
}

function handleScroll4() {
    const val4 = document.querySelector(".email5").value;
    document.querySelector(".email").innerHTML = "Email: " + val4;
}

function handleScroll5() {
    const val5 = document.querySelector(".instagram5").value;
    document.querySelector(".instagram").innerHTML = val5;
}

function handleScroll6() {
    const val6 = document.querySelector(".telefon5").value;
    document.querySelector(".telefon").innerHTML = val6;
}



function handleScroll7() {
    const val7 = document.querySelector(".ingiliz5").value;
    document.querySelector(".english").style.width = val7;
}

function handleScroll8() {
    const val8 = document.querySelector(".ozbek5").value;
    document.querySelector(".uzbek").style.width = val8;
}

function handleScroll9() {
    const val9 = document.querySelector(".rus5").value;
    document.querySelector(".russian").style.width = val9;
}

function handleScroll10() {
    const val10 = document.querySelector(".html5").value;
    document.querySelector(".html").style.width = val10;
}

function handleScroll11() {
    const val11 = document.querySelector(".css5").value;
    document.querySelector(".css").style.width = val11;
}

function handleScroll12() {
    const val12 = document.querySelector(".js5").value;
    document.querySelector(".js").style.width = val12;
}

function handleScroll13() {
    const val13 = document.querySelector(".hobbi5").value;
    document.querySelector(".hobbi").innerHTML = val13;
}

function handleScroll14() {
    const val14 = document.querySelector(".xarakter5").value;
    document.querySelector(".harakter").innerHTML = val14;
}

function handleScroll15() {
    const val15 = document.querySelector(".yutuq5").value;
    document.querySelector(".yutuq").innerHTML = val15;
}
 
function handleScroll16() {
    const val16 = document.querySelector(".talim5").value;
    document.querySelector(".talim").innerHTML = val16;
}

