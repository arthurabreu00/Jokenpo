class GameController{

    constructor(){
        this.initEvents();
    }

    
    initEvents(){

        let buttons = document.querySelectorAll(".btn-game");
        buttons.forEach(btn =>{
            btn.addEventListener('click',()=>{

            buttons.forEach(e =>{
                    e.querySelector('.img-game').className = 'img-game';
                }); // Limpar todos os botões da classe ativado.

                let btnsComputer = document.querySelectorAll(".btn-game-2"); // Selecionando botões da parte inferior.

                this.computer = Math.floor(Math.random() * 3) + 1; // Atribuindo o número do item.
        
                btnsComputer.forEach(e =>{

                    e.querySelector('.img-game-2').className = 'img-game-2';

                }); // Limpar todos os botões da classe ativado.

        
                
                btnsComputer[this.computer - 1].querySelector(".img-game-2").className = 'img-game-2 ativado'; // Adicionando a classe ativado.

                this.player = Number(btn.querySelector(".img-game").dataset.item); // Atribuindo o número do item.
                
                btn.querySelector(".img-game").className = 'img-game ativado'; // Adicionando a classe ativado.

                this.displayUser();

            });

        



        });


        console.log(this.player,this.computer,this.resultGame());
    }

    
    resultGame(){

        if(this.player == this.computer){
            return undefined;
        }

        else if (this.player == 1){
            return this.computer == 2 ? true : false;
        }

        else if (this.player == 2){
            return this.computer == 3 ? true : false;
        }

        else {
            return this.computer == 1 ? true : false;
        }
    }

    displayUser(){

        let display = document.querySelector('.result-banner');

        switch (this.resultGame()) {
            case undefined:
                display.innerHTML = 'Empate';
                break;

            case true:
            display.innerHTML = 'O Jogador venceu';
                break;
            
            case false:
            display.innerHTML = 'O Computador venceu';
                break;

        }
    }





    


}