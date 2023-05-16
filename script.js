console.log('Hello World');
let menuButton= document.querySelector('.menu')
let navBar= document.querySelector('nav')
let list=document.querySelector('.links')
let links = document.querySelectorAll('li')
let state=true

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
        if(item.id=="home"){
            console.log("home")
            window.scroll({
                top:1100,
                left:0,
                behavior:"smooth"
            })
        }else if(item.id=="about"){
            console.log("about")
        }else if(item.id=="service"){
            console.log("service")
        }else if(item.id=="tour"){
            console.log("tour")
        }else{
            console.log("erro")
        }
    }
    
});