import React, { Component } from 'react';
import './style.css';

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          textFrase: ''
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.frases = ['O homem comum fala, o sábio escuta, o tolo discute.',
                       'A dúvida é o princípio da sabedoria', 
                       'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
                       'Ser feliz sem motivo é a mais autêntica forma de felicidade.', 
                       'Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes.',
                       'Pessimismo leva à fraqueza, otimismo ao poder.'];
    }
    
    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textFrase = '"'+this.frases[numeroAleatorio]+'"';
        this.setState(state);
    }

    render(){
      return(
        <div className="container">
            <img src={require('./assets/biscoito.png')}/>
            <Botao name="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
            <h3 className="textFrase">{this.state.textFrase}</h3>
        </div>
      );
    }
}

//Classe Botão
class Botao extends Component{
    render(){
      return(
        <button onClick={this.props.acaoBtn}>{this.props.name}</button>
      );
    }
}
export default App;