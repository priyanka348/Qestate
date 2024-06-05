import React from 'react'
const locations = ['Sintra', 'Amper', 'Swinna', 'Hanji']
const prices = ['0-300000','300001-600000', '600001-1000000'];

export default function CheckboxFilter({handlePriceRangeFilterChange, handleLocationFilterChange,
    priceRangeFilter, locationFilter}) {
  return (
    <div className='checkbox-filter-container'>
      {/* LOCATION BASED FILETRS */}
       <div className='filter'>
        <h2>Location</h2>
        {locations.map((location,index)=>(
            <div key={index}>
             <label>
             <input
              type='checkbox'
              value={location}
              checked={locationFilter.includes(location)}
              onChange={handleLocationFilterChange}
             />
             {location}
             </label>
            </div>
        ))}
       </div>
      {/* PRICE BASED FILETRS */}
      <div className='filter'>
        <h2>Price Range</h2>
        {prices.map((price,index)=>(
            <div key={index}>
             <label>
             <input
              type='checkbox'
              value={price}
              checked={priceRangeFilter.includes(price)}
              onChange={handlePriceRangeFilterChange}
             />
             {price}
             </label>
            </div>
        ))}
       </div>
    </div>
  )
}
