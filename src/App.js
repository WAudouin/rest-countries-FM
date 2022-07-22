import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import SelectRegion from './components/SelectRegion'
import CountriesList from './components/CountriesList'
import Header from './components/Header'

function App() {
	const [initialCountries, setInitialCountries] = useState([])
	const [searchedCountries, setSearchedCountries] = useState([])

	const regions = ['','Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/all`)
		.then(res => {
			const countries = res.data;
			setInitialCountries(countries);
			setSearchedCountries(countries);
		})
	}, [])

	// useEffect(() => {
	// 	const copy = [...searchedCountries];
	// 	copy.sort((a,b) => {
	// 		let copyA = a.translations.fra.common.toLowerCase(),
	// 				copyB = b.translations.fra.common.toLowerCase();

	// 		if (copyA < copyB) {
	// 				return -1;
	// 		}
	// 		if (copyA > copyB) {
	// 				return 1;
	// 		}
	// 		return 0;

	// 	})
	// 	setSearchedCountries(copy)
	// }, [searchedCountries])

	const filterCountries = (ev) => {
		if(ev.target.value !== ''){
			let filteredCountries = [...initialCountries];
			filteredCountries = filteredCountries.filter((country) => {
				return country.translations.fra.common.toLowerCase().includes(ev.target.value);
			})
			setSearchedCountries(filteredCountries);
		}else{
			setSearchedCountries(initialCountries);
		}	
	}

	

	
  return (
    <div className="Home">
			<Header/>
			<div className="main">
				<div className="filters">
					<div className="search-bar">
						<input type="text" name="search-country" id="search-country" onChange={filterCountries} placeholder='Search for a country...'/>
					</div>
					<SelectRegion regions={regions} initialCountries={initialCountries} setSearchedCountries={setSearchedCountries}/>
				</div>
				<CountriesList countries={searchedCountries}/>
			</div>
    </div>
  )
}

export default App
