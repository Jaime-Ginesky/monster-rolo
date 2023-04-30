import { Component } from 'react';

import './card-list.styles.css';
import CardContainer from '../card-container/CardContainer';

class CardList extends Component {
    render() {
      const { monsters } = this.props;
       
      return (
        // Card image, name and email
        <div className='card-list'>
           {monsters.map((monster) => {
        
            return (
            <CardContainer monster={monster} />
            );
       })}
    </div>   
   )
  }
}

export default CardList;