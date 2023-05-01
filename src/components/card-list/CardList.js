

import './card-list.styles.css';
import CardContainer from '../card-container/CardContainer';

const CardList = ({ monsters }) => {
       
        // Card image, name and email
        <div className='card-list'>
           {monsters.map((monster) => {
            return (
            <CardContainer monster={monster} />
            );
       })}
    </div>   
  }

export default CardList;