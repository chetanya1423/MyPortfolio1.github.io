const manuBtn = document.querySelector(".navbar")
document.querySelector(".menu").addEventListener("click",function(){
    manuBtn.classList.add("active");
    document.querySelector(".menu").style.display="none";
    document.querySelector(".closebtn").style.display="block";
})
document.querySelector(".closebtn").addEventListener("click",function(){
    manuBtn.classList.remove("active");
    document.querySelector(".menu").style.display="block";
    document.querySelector(".closebtn").style.display="none";
})
window.onscroll = () =>{
    manuBtn.classList.remove("active");
    document.querySelector(".menu").style.display="block";
    document.querySelector(".closebtn").style.display="none";
}
const typed = new Typed(".runname",{
    strings:["Web Developer.","Coder."],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})
document.getElementsByClassName("pro-name").onmouseover = function(){
    mouseOver()
};
document.getElementsByClassName("pro-name").onmouseout = function(){
    mouseOut();
}
function mouseOver(){
    alert("hsdkfhbksd");
}

function mouseOut(){
    alert("kjdkfjsd");
}