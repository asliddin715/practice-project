import React from 'react';

const Sidebar = ({ product, setFilters }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked ? [...prevFilters[name], value] : prevFilters[name].filter((v) => v !== value),
    }));
  };

  const handlePriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: e.target.value,
    }));
  };

  return (
    <div className="sidebar" style={{ width: "200px", marginTop: "100px" }}>
      <h2>Product Categories</h2>
      {["QuietTunes", "ProSound", "CityAudio", "QuietComfort", "GameAudio", "EliteSound", "SafeKids", "SoundMax", "AudioTech", "SportSound","WirelessPro",].map((category) => (
        <div key={category}>
          <label>
            <input type="checkbox" name="categories" value={category} onChange={handleCheckboxChange} />
            {category}
          </label>
        </div>
      ))}
      <h2>Filter by Price</h2>
      <input
        type="range"
        min="0"
        max="2000"
        name="price"
        
        onChange={handlePriceChange}
      />
      <h2>Filter by Color</h2>
      {['Red', 'Blue', 'Orange', 'Black', 'Green', 'Yellow'].map((color) => (
        <div key={color}>
          <label>
            <input type="checkbox" name="colors" value={color} onChange={handleCheckboxChange} />
            {color}
          </label>
        </div>
      ))}
      <h2>Filter by Size</h2>
      {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
        <div key={size}>
          <label>
            <input type="checkbox" name="sizes" value={size} onChange={handleCheckboxChange} />
            {size}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
