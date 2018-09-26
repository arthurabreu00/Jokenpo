document.querySelector(".jogOne").addEventListener("click", () => {

    div = document.querySelectorAll(".hi2de");

    for (let i = 0; i < 3; i++) {
        div[i].addEventListener("click",()=>{

            console.log(div[i]);

        })
        
    }

});