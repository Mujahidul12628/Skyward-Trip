"use client";
import { useState, useEffect } from "react";

export default function LocationSelector() {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch("/DivisionDistrict.json")
      .then((response) => response.json())
      .then((data) => {
        setDivisions(data.divisions); // Store divisions from JSON
      })
      .catch((error) => console.error("Error fetching division data:", error));
  }, []);

  // Handle division selection
  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setSelectedDivision(divisionId);

    // Find the corresponding division and update districts
    const selectedDiv = divisions.find((div) => div.id == divisionId);
    setDistricts(selectedDiv ? selectedDiv.districts : []);
    setSelectedDistrict(""); // Reset district when division changes
  };

  // Handle district selection
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div className="location-selector">
      <h1>Select Your Location</h1>

      {/* Division Dropdown */}
      <label htmlFor="division">Select Division:</label>
      <select
        id="division"
        value={selectedDivision}
        onChange={handleDivisionChange}
      >
        <option value="">-- Select Division --</option>
        {divisions.map((division) => (
          <option key={division.id} value={division.id}>
            {division.name}
          </option>
        ))}
      </select>

      {/* District Dropdown */}
      <label htmlFor="district">Select District:</label>
      <select
        id="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!districts.length}
      >
        <option value="">-- Select District --</option>
        {districts.map((district) => (
          <option key={district.id} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>

      {/* Debugging Selected Values */}
      {selectedDivision && selectedDistrict && (
        <div>
          <p>You selected:</p>
          <p>Division: {selectedDivision}</p>
          <p>District: {selectedDistrict}</p>
        </div>
      )}
    </div>
  );
}
