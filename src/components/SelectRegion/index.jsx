import React from 'react'

import './SelectRegion.scss'

const SelectRegion = ({regions, initialCountries, setSearchedCountries}) => {
	const filterByRegion = (ev) => {
		if(ev.target.value !== ''){
			let filteredCountries = [...initialCountries];
			filteredCountries = filteredCountries.filter((country) => {
				return country.region === ev.target.value;
			})
			setSearchedCountries(filteredCountries);
		}else{
			setSearchedCountries(initialCountries);
		}
	}

	return (
		<div className="select-region">
			<select name="select-region-input" id="select-region-input" onChange={filterByRegion}>
			{
				regions && regions.map(reg => {
					return <option className='select-region-option' key={reg} value ={reg}>{reg}</option>
				})
			}
			</select>
		</div>
	)
}

export default SelectRegion;