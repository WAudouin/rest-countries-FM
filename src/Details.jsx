import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './components/Header';

import './Details.scss';

const Details = () => {
	let { CCA } = useParams();

	const [currentCountry, setCurrentCountry] = useState();

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/alpha/${CCA}`)
		.then(res => {
			const country = res.data[0];
			setCurrentCountry(country);
		})
	}, [CCA])

	const formatCurrencies = (currencies) => {
		let str = '';
		Object.keys(currencies).forEach(key => {
			str += currencies[key].name + ', ';
		});
		return str.substring(0, str.length-2);
	}

	const formatLanguages = (languages) => {
		let str = '';
		Object.keys(languages).forEach(key => {
			str += languages[key] + ', ';
		});
		return str.substring(0, str.length-2);
	}

	console.log(currentCountry)

  return (
    <div className="Details">
			<Header/>
			<div className="main">
				<Link className='back-button' to={`/`}>
					<i class="ri-arrow-left-line"/>
					{`Back`}
				</Link>
				{
					currentCountry && 
					<div className="details-container">
						<div className="flag">
							<img src={currentCountry.flags.png} alt="" className="flag"/>
						</div>
						<div className="details-panel">
							<div className="country-name">{currentCountry.name.common}</div>
							<div className="left-side">
								<p>Native name: {currentCountry.name.official}</p>
								<p>Population: {currentCountry.population}</p>
								<p>Region: {currentCountry.region}</p>
								<p>Sub region: {currentCountry.subregion}</p>
								<p>Capital: {currentCountry.capital[0]}</p>
							</div>
							<div className="right-side">
								<p>Top level domain: {currentCountry.tld[0]}</p>
								<p>Currencies: {formatCurrencies(currentCountry.currencies)}</p>
								<p>Languages: {formatLanguages(currentCountry.languages)}</p>
							</div>
							<div className="border-countries">
							Border countries: {currentCountry.borders && currentCountry.borders.map((cty) => {
								return <Link to={`/country/${cty}`}>{`${cty}`}</Link>
							})}
							{!currentCountry.borders && 
								<p>None</p>
							}
							</div>
						</div>
					</div>
				}
			</div>
    </div>
  );
}

export default Details