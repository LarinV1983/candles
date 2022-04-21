import React from 'react';
import AppContext from '../context';

const Infomation = ({image, title, description}) => {
	const {setCartOpened} = React.useContext(AppContext);

	return (
		<div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" width={120} heidth={120} src={image} alt=""/>
     <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick = {() => setCartOpened(false)} className="greenButton">
        <img width={14} heidth={14} src="img/angle-left.svg" alt="Arrow"/>
        Вернутся назад
      </button>
    </div>
	);
};

export default Infomation;