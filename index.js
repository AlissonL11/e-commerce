const form = document.querySelector("#form");                       //pegando as mensagens de erro pelo id
const erroNome = document.getElementById("erroNome");               //               //
const erroPassword = document.getElementById("erroPassword");       //
const sucess = document.getElementById("sucess");                   //pegando as mensagens de erro pelo id


const nome = document.getElementById("name");               //pegando os inputs pelo id
                
const senha = document.getElementById("password");          //pegando os inputs pelo id

const erroMsg = "*Campo Obrigatório*"               //mensagem de erro a ser exibida

form.addEventListener('submit', function(event){        //adicionando um "escutador" ao botao submit
    event.preventDefault();         //evitando que a pagina se atualize.


    //inicio da condicional (se o input estiver vazio, que apareça a mensagem de erro; do contrário, esconda a mensagem de erro)
    if(nome.value===''){
        erroNome.style.visibility = 'visible';
        erroNome.style.fontFamily = 'Raleway';
        erroNome.textContent = erroMsg;
        nome.style.border = "2px solid red";
    }else{
        erroNome.style.visibility = 'hidden'
        nome.style.border = "2px solid #7A7A7A";
    };

    if(senha.value===''){
        erroPassword.style.visibility = 'visible'
        erroPassword.style.fontFamily = 'Raleway'
        erroPassword.textContent = erroMsg
        senha.style.border = "2px solid red";
    }else{
        erroPassword.style.visibility = 'hidden'
        senha.style.border = "2px solid #7A7A7A";
    }; 

    //abaixo a condicional da mensagem de sucesso (se todos os inputs estiverem com algum valor, mostre a mensagem de sucesso e oculte os erros, do contrário, oculte a mensagem de sucesso.)

    if(nome.value!='' && senha.value!= ''){
        sucess.textContent = "Sucesso!"             //alterando o texto exibido dentro do span de sucesso (em caso de tudo estar preenchido)
        sucess.style.color = "green"              //alterando a cor a ser exibida para o texto.
        sucess.style.fontFamily = 'Raleway'

        sucess.style.visibility = 'visible'
        erroNome.style.visibility = 'hidden'
        erroPassword.style.visibility = 'hidden'

    }else{
        sucess.style.fontFamily = 'Raleway';
        sucess.textContent= "Campos obrigatórios não registrados.";         //alterando o texto exibido dentro do span de sucesso, caso esteja algo vazio.
        sucess.style.color = "red";                                         ////alterando a cor a ser exibida para o texto.
        sucess.style.visibility = 'visible';
        

    };
}
)