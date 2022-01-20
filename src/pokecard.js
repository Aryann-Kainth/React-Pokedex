import React,{Component} from 'react';
import './pokecard.css'
const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component{
    render(){
        let imgSrc=`${POKE_API}${this.props.id}.png`
        return (
            
            <div className='pokecard'>
                <h1 className='pokecard-title'>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className='pokecard-data'>Type :{this.props.type} </div>
                <div className='pokecard-data'>Experience :{this.props.exp} </div>
            </div>
        )
    }
}
export default Pokecard;