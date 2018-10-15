class GameController{

    constructor(){

        // Selecionando os elementos do úsuario;
        this.papelOne = document.querySelector("#paper-one");
        this.rockOne = document.querySelector("#rock-one");
        this.sheerOne = document.querySelector("#scissors-one");

        // Determinando um valor para a jogada;
        this.val = 0;
        this.click = false;

        // Selecionando os elementos do computador;
        this.papelTwo = document.querySelector("#paper-two");
        this.rockTwo = document.querySelector("#rock-two");
        this.sheerTwo = document.querySelector("#scissors-two");

        this.initEvent();


    }

    initEvent(){
        // this.mouseOverTrue();
        if(!this.click){

            this.papelOneExe();
            this.rockOneExe();
            this.sheerOneExe();

        }
  

    }

    
    /* capitalize(txt){

        let str = txt.toLowerCase();

        let rtn = str.charAt(0).toUpperCase() + str.slice(1);
        return rtn
    } */


    blockButtons(){
        this.papelOne.style.cursor= 'no-drop';
        this.rockOne.style.cursor= 'no-drop';
        this.sheerOne.style.cursor= 'no-drop';

        this.click = true;
    }

    desBlockButtons(){
        this.papelOne.style.cursor= 'pointer';
        this.rockOne.style.cursor= 'pointer';
        this.sheerOne.style.cursor= 'pointer';

        this.click = false;
    }


    papelOneExe(){

        this.papelOne.addEventListener('click', ()=>{

            this.val = 2;
            this.blockButtons();
            this.papelOne.innerHTML =   
            `
            <h2>Papel</h2>
            <img src="img/papelColor.png">
            `;
            this.click = true;
        
        });

        
    }

    rockOneExe(){
   

        this.rockOne.addEventListener('click', ()=>{
            this.val = 1;
            this.blockButtons();
    
            this.rockOne.innerHTML = 
            `
            <h2>Pedra</h2>
            <img src="img/pedraColor.png">
            `;
            this.click = true;
    
            });
        
    }

    sheerOneExe(){

        this.sheerOne.addEventListener('click', ()=>{
        this.val = 3;
        this.blockButtons();

        this.sheerOne.innerHTML = 
        `
        <h2>Tesoura</h2>
        <img src="img/tesouraColor.png">
        `;
        this.click = true;
        });
    
       
    }


}