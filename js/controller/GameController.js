class GameController{

    constructor(){
        this.initEvents();
        this.jogador = document.querySelector('.jogador');
        this.empate = document.querySelector('.empate');
        this.pc = document.querySelector('.pc');
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

    }

    
    resultGame(){

        switch (this.player) {
            case this.computer:
                return undefined;
            case 1:
                return this.computer == 2 ? true : false;
            case 2: 
                return this.computer == 3 ? true : false;
            default:
                return this.computer == 1 ? true : false
        }

    }

    displayUser(){

        let display = document.querySelector('.result-banner');

        switch (this.resultGame()) {
            case undefined:
                this.empate.innerHTML  = Number(this.empate.innerHTML) + 1;
                display.innerHTML = 'Empate';
                break;

            case true:
            this.pc.innerHTML  = Number(this.pc.innerHTML) + 1;
            display.innerHTML = 'O Computador venceu';
                break;
            
            case false:
            this.jogador.innerHTML  = Number(this.jogador.innerHTML) + 1;
            display.innerHTML = 'O Jogador venceu';
                break;

        }


        
    }





    


}