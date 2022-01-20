
import React, { Component } from 'react';
import Pokedex from './pokedex';
class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let rand1 = Math.floor(Math.random() * hand2.length);
            let pok=hand2.splice(rand1,1)[0];
            hand1.push(pok);
        }
        let score1=0;
        let score2=0;
        for(let poki of hand1)
        {
            score1+=poki.base_experience;

        }
        for(let poki of hand2)
        {
            score2+=poki.base_experience;
        }
        let winner ;
        if(score1>score2)
        {
            winner ="First Player";
        }
        else
        {
            winner="Second Player";
        }
       // console.log(hand1);
       // console.log(hand2);
        return (
            <div>
                <h1>Pokegame</h1>
                <Pokedex pokemon={hand1}/>
                <p>Total Experience :{score1}</p>
                <Pokedex pokemon={hand2}/>
                <p>Total Experience :{score2}</p>
                <h3>Winner is :{winner}</h3>
            </div>
        )
    }
}
export default Pokegame;