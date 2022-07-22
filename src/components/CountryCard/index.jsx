import React from 'react'
import { useNavigate } from 'react-router-dom';

import './CountryCard.scss'

const CountryCard = ({country}) => {

	const navigate = useNavigate();

	const formatPopulation = (population) => {
		return population.toLocaleString('en-US');
	}
	
	return (
		<article className="country" onClick={() => navigate(`/${country.cca2}`)}>
			<div className="flag-container">
				<img src={country.flags.png} alt="" className="flag"/>	
			</div>
			<div className="details">
				<h3 className='country-name'><b>{country.translations.fra.common}</b></h3>
				<p className="population"><b>Population: </b>{formatPopulation(country.population)}</p>
				<p className="region"><b>Region: </b>{country.region}</p>
				<p className="capital"><b>Capitale: </b>{country.capital}</p>
			</div>
		</article>
	)
}

export default CountryCard