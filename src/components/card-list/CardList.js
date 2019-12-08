import React from 'react';
import './CardList.css';
import {Card} from '../card';

const CardList = ({monsters}) =>{
    return(<div className= 'card-list'>
        {
        monsters? monsters.map(monster => {
        return<Card key = {monster.id} monster = {monster} />
        }) : null
      }
    </div>)
}

export default CardList;