import React from 'react'
import CountryCard from '../CountryCard'

import './CountriesList.scss';

const CountriesList = ({countries}) => {
	return (
		<section className="listing">
			{
				countries && countries.map((country) => {
					return <CountryCard country={country}/>
				})
			}
		</section>
	)
}

export default CountriesList