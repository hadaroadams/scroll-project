console.log('Hello World');
let menuButton= document.querySelector('.menu')
let navBar= document.querySelector('nav')
let list=document.querySelector('.links')
let links = document.querySelectorAll('li')
let page= document.querySelectorAll("section")
let exploreButton= document.querySelector("#explore")
let loader= document.querySelector(".loader")
let state=true
console.log(page[0].offsetTop)
// console.log(page[1].getBoundingClientRect())
//preloader
window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        loader.classList.remove("loader")
        loader.classList.add("exit")
    },5000)
})
//
window.addEventListener("scroll",()=>{
    // console.log(navBar.getBoundingClientRect())
    if(scrollY>=30){
        navBar.classList.add("back")
    }else if(scrollY<30){
        navBar.classList.remove('back')
    }
})
//Explore Tours Button

exploreButton.addEventListener("click",()=>{
console.log(page[0].getBoundingClientRect())
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
//menuButton
menuButton.addEventListener("click",()=>{
    console.log(state)
    state = !state
    console.log(state)
    if (state){
        navBar.classList.remove("rowDown")
        navBar.classList.add("rowUp")
        setTimeout(()=>{
            list.classList.add('clear')
        },900)
    }
    else{
        navBar.classList.remove("rowUp")
        navBar.classList.add("rowDown")
        list.classList.remove('clear')
    }
    //list.classList.toggle("clear")
})

links.forEach(item => {
    item.onclick=()=>{
        navBar.classList.add("rowUp")
        navBar.classList.remove('rowDown')
        state=!state
        if(item.id=="home"){
            console.log("home")
            window.scroll({
                top:0-67,
                left:0,
                behavior:"smooth"
            })
        }else if(item.id=="about"){
            console.log(page[0].getBoundingClientRect().top)
            position(0)
            console.log("about")
        }else if(item.id=="service"){
            console.log(page[1].getBoundingClientRect().y-67)
            position(1)
            console.log("service")
        }else if(item.id=="tour"){
            console.log(page[2].getBoundingClientRect().top)
            position(2)
            console.log("tour")
        }else{
            console.log("erro")
        }
    }
    
});

function position(pageNumber){
    return scroll({
        top:page[pageNumber].offsetTop-110,
        left:0,
        behavior:'smooth'
    })
}