const buttons=document.querySelectorAll(".button");
buttons.forEach((button)=>{
    document.addEventListener('click',(e)=>{
        const color=e.target.id;
        document.body.style.backgroundColor=color;
    })
})