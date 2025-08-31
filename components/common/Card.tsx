import React from "react";

type CardProps = {
  image: string[];
  title: string;
  location: string;
  price: string;
  navigation: string;
  rating: string;
  icon0: string;
  icon1: string;
  icon2: string;
  icon3: string;
  number0: string;
  number1: string;
  number2: string;
  number3: string;
};

const Card: React.FC<CardProps> = ({ image, title, location, price, navigation, rating, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full rounded h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
      	<div className= "grid gird-cols-3">
		<nav>
			<ul>{navigation}</ul>
		</nav>
	</div>
	 <div className= "grid grid-cols-2 flex">
        	<h2 className="text-xl font-bold mb-2">{title}</h2>
		<p className="text-black-600">{location}</p>
		<p className= "text-black-600" >{number0}</p>
		<img className= "w-full object-cover" src={icon0} alt="rating"/>
	</div>
	<div className="flex">
	    <image className="mt-2 p-4" src={icon1}/>
	    <p className= "text-black-600" >{number1}</p>
	    <image className="mt-2 p-4" src={icon2}/>
            <p className= "text-black-600" >{number2}</p>
	    <image className="mt-2 p-4" src={icon2}/>
            <p className= "text-black-600" >{number2}</p>

	    <p className="text-black-600 font-bold">{price}</p>
	</div>
      </div>
    </div>
  );
};

export default Card;
