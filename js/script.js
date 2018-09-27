document.querySelector(".jogOne").addEventListener("click", () => {

    div = document.querySelectorAll(".hi2de");
    var result = [0,0,0]
    for (let i = 0; i < 3; i++) {
        div[i].addEventListener("click",()=>{
            var str = div[i]
            result[i] = str.replace('<img src="imagens/papelPB.png" class="hi2de" alt=',"")
            console.log(result[i]) 
        })
        
    }

});
