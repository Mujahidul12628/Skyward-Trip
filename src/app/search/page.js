"use client";
import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem } from "@mui/material";

export default function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [classType, setClassType] = useState("Economy");

  const handleSearch = () => {
    const searchParams = {
      from,
      to,
      departureDate,
      returnDate,
      travelers,
      classType,
    };
    console.log(searchParams);
    // Handle the search logic here, like sending the data to an API
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ margin: "20px 0" }}
    >
      <Grid item xs={12} sm={3}>
        <TextField
          label="From"
          variant="outlined"
          fullWidth
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Hazrat Shahjalal Intl."
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="To"
          variant="outlined"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Country, city or airport"
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Depart"
          type="date"
          variant="outlined"
          fullWidth
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Return"
          type="date"
          variant="outlined"
          fullWidth
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Travelers"
          type="number"
          variant="outlined"
          fullWidth
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          label="Class"
          select
          variant="outlined"
          fullWidth
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="First Class">First Class</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
