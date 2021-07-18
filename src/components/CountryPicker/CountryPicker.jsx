import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css"
import {fetchCountries} from "../../api";
import {useEffect, useState} from "react";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]); // Will run only when setFetchedCountries changed

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">All Countries</option>
        {fetchedCountries.map((country, index) =>
          <option value={country} key={index}>{country}</option>
        )}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
