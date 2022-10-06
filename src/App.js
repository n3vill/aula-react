import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./Tabela";

function Button(props) {
  return (
    <a href={props.destino} className="btn btn-primary">
      {props.children}
    </a>
  );
}

export default function App() {
  let estilo = {
    
    backgroundColor: 'red',
    color: 'white',
  };

  let titulo = "Identifique-se";

  return (
    <div>
      <h1 className="text-center">{titulo}</h1>
      
      <hr/>

      <form>
        <input className="form" placeholder="Email"/>
        <input className="form" placeholder="Senha"/>
       <button className="form" style={estilo}>Entrar</button>

       <Button destino='https://www.google.com'>Cadastro</Button>
       <Button>Listar</Button>
       <Button>Teste</Button>

      </form>

    <Tabela/>
    </div>
  );
}

