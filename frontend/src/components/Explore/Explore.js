import React, { useState, useEffect} from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import config from '../../config';
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import SortingFilter from '../SortingFilter/SortingFilter';
import ListingsTableView from '../ListingsTableView/ListingsTableView';
import './Explore.css';
export default function Explore() {
    
    // STATES:
    const [listingsData, setListingsData] = useState([]);
    const [locationFilter, setLocationFilter] = useState([]);
    const [priceRangeFilter, setPriceRangeFilter] = useState([]);
    const [sortBy, setSortBy] = useState("");

    async function fetchListings() {
        try {
          const response = await axios.get(
            `${config.backendEndpoint}/real-estate-data`
          );
          setListingsData(response.data.listings);
        } catch (err) {
          console.log(err);
        }
      }

    //FILTER HANDLERS:
    const handleLocationFilterChange = (event) => {
      const isChecked = event.target.checked;
      // If a location filter is checked,then add it to locationFilter state
      if(isChecked){
       setLocationFilter((prevState)=>[...prevState, event.target.value]);
      }
      // If a location filter is not checked,then remove it from the locationFilter state
      else{
        setLocationFilter((prevState)=>
          prevState.filter((item) => item !== event.target.value)
        );
      }
    }

    const handlePriceRangeFilterChange = (event) => {
    const isChecked = event.target.checked;
      if(isChecked)
       setPriceRangeFilter((prevState) => [...prevState,event.target.value]);
      else{
        setPriceRangeFilter((prevState) =>
         prevState.filter((item) => item !== event.target.value)
        )
      }
    }
    const handleSortByChange = (event) => {
       setSortBy(event.target.value);
    }
    //USEEFECTS:
      useEffect(() => {
        fetchListings();
      }, []);
  return (
    <>
      <Header onPage="explore"/>
      <div className='property-listings-view'>
         {/* CheckboxFilters */}
        <CheckboxFilter 
         locationFilter={locationFilter}
         priceRangeFilter={priceRangeFilter}
         handlePriceRangeFilterChange={handlePriceRangeFilterChange}
         handleLocationFilterChange={handleLocationFilterChange}
        />

        {/*SortingFilters*/}
        <SortingFilter sortBy={sortBy} handleSortByChange={handleSortByChange}/>
        {/* ListingsTableView */}
        <ListingsTableView
          listingsData={listingsData}
          locationFilter={locationFilter}
          priceRangeFilter={priceRangeFilter}
          sortBy={sortBy}
        />
       
      </div>
    </>
  )
}
