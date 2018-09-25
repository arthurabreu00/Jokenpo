document.querySelector("body").addEventListener("click",selecionar);

function selecionar(){
    document.querySelectorAll(".hide").forEach((div)=>{
        div.addEventListener("click",()=>{

            console.log(div.innerHTML);
            return div.innerHTML
            
        })
            
    })

}