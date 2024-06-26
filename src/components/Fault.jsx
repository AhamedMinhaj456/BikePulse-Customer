import React, { useState, useEffect } from 'react';

import './Fault.css';

const Fault = () => {
  
  // State for storing dropdown options
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const [companyDropdownOptions, setCompanyDropdownOptions] = useState([]);
  const [companySelectedOption, setCompanySelectedOption] = useState('');

  const [bikeModelDropdownOptions, setBikeModelDropdownOptions] = useState([]);
  const [bikeModelSelectedOption, setBikeModelSelectedOption] = useState('');

  const [SectionDropdownOptions, setSectionDropdownOptions] = useState([]);
  const [SectionSelectedOption, setSectionSelectedOption] = useState('');

  
  // Function to handle dropdown change
  
  const handleCompanyDropdownChange = (e) => {
    setCompanySelectedOption(e.target.value);
  };

  const handleBikeModelDropdownChange = (e) => {
    setBikeModelSelectedOption(e.target.value);
  };

  const handleSectionDropdownChange = (e) => {
    setSectionSelectedOption(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };



  // Function to save data to the database
  
  const saveData = async () => {
    try {
      const response = await fetch('http://localhost:8095/admin/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adminName: selectedOption, // Assuming adminName should be selectedOption
          // adminEmail: selectedDate.toISOString(), // Assuming adminEmail should be selectedDate
          // adminPassword: selectedOption, // Assuming adminPassword should be selectedOption
          adminRole: selectedOption, // Assuming adminRole should be selectedOption
        }),
      });
      const data = await response.json();
      console.log('Data saved successfully:', data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  

  
  // Fetch dropdown options from the database
  {

  useEffect(() => {
    const fetchBikeCompanyDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8096/company/company');
        const data = await response.json();
        const dropdownOptions = data.map((company) => company.bikeCompany);
        setCompanyDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchBikeCompanyDropdownOptions();
  }, []);

  useEffect(() => {
    const fetchBikeModelDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8096/bikeModel/bikeModel');
        const data = await response.json();
        const dropdownOptions = data.map((bikeModel) => bikeModel.bikeModel);
        setBikeModelDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchBikeModelDropdownOptions();
  }, []);
  

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8096/company/company');
        const data = await response.json();
        const dropdownOptions = data.map((company) => company.bikeCompany);
        setDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchDropdownOptions();
  }, []);

  useEffect(() => {
    const fetchSectionDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8096/company/company');
        const data = await response.json();
        const dropdownOptions = data.map((company) => company.bikeCompany);
        setDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchSectionDropdownOptions();
  }, []);
  }

  // useEffect(() => {
  //   const fetchSectionDropdownOptions = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8096/company/company');
  //       const data = await response.json();
  //       const dropdownOptions = data.map((company) => company.bikeCompany);
  //       setDropdownOptions(dropdownOptions);
  //     } catch (error) {
  //       console.error('Error fetching dropdown options:', error);
  //     }
  //   };

  //   fetchSectionDropdownOptions();
  // }, []);
  // }


  return (
    <div className="datetime-picker-container">
      <h2 className="datetime-picker-header">Select Date and Time</h2>


     
      {/* Dropdown Company */}
     <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={companySelectedOption}
          onChange={handleCompanyDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select Company</option>
          {companyDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
     
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Company: {companySelectedOption}</p>
      </div>

       {/* Dropdown Bike Model */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={bikeModelSelectedOption}
          onChange={handleBikeModelDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select Bike Model</option>
          {bikeModelDropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

      </div>
      <div className="datetime-picker-selected">
       <p>Selected Bike Model: {bikeModelSelectedOption}</p>
      </div>
       



       {/* Dropdown */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
     
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>

       {/* Dropdown */}
       <div className="datetime-picker-dropdown">
        <label>Dropdown:</label>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Save button */}
      <button onClick={saveData}>Save Data</button>
      {/* Display selected date, time, and dropdown value */}
      <div className="datetime-picker-selected">
       
        <p>Selected Dropdown Value: {selectedOption}</p>
      </div>
    </div>
  );
};

export default Fault;
