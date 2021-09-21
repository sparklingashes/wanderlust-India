import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <>
     <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" Style='list-style-type:none;'>
          <li>
          <CardItem 
          src="image/image andaman.jpg"
          text="ANDAMAN & NICOBAR: Blue seas, virgin islands and colonial past"
          label='Adreline'
          path='/services'
          />
          <CardItem 
          src="image/image coorg.jpg"
          text="COORG: The Scotland of India"
          label='Mystry'
          path='/services'
          />
          <CardItem 
          src="image/image goa.jpg"
          text="GOA: Beaches, Sunsets and Crazy Nights"
          label='Adventure'
          path='/services'
          />
          <CardItem 
          src="image/image JAIPUR.jpg"
          text="JAIPUR: The Pink City"
          label='Luxury'
          path='/services'
          />
          <CardItem 
          src="image/image sikkim.jpg"
          text="GANGTOK: The Gateway to Sikkim"
          label='Peaks'
          path='/services'
          />
          <CardItem 
          src="image/image UDAIPUR.jpg"
          text="UDAIPUR: The city of Lakes"
          label='Royality'
          path='/services'
          />
          <CardItem 
          src="image/imageVARKALA kerla.jpg"
          text="VARKALA: The hidden treasure of Kerala"
          label='Peaceful'
          path='/services'
          />
          <CardItem 
          src="image/LADAKH.jpg"
          text="LADAKH: India's Own Moonland"
          label='Adreline'
          path='/services'
          />
          <CardItem 
          src="image/mountain-manali.jpg"
          text="MANALI: Lover's Paradise - India's Honeymoon capital"
          label='Adventure'
          path='/services'
          />
          <CardItem 
          src="image/DARJEELING.jpg"
          text="DARJEELING: Queen of The Himalayas"
          label='Adventure'
          path='/services'
          />
          </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cards;

