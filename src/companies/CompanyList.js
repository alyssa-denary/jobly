import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../api.js";


/**  CompanyList
 *
 * Props: none
 *
 * State:
 * -companies :{isLoading, data, errors}
 *      -data like: [{ handle, name, description, numEmployees, logoUrl},...]
 *
 * -filterText: "anderson"
 *
 * Effect
 * -fetchCompanies
 *
 * RouteList --> CompanyList --> {SearchForm, CompanyCard}
*/

function CompanyList() {
  const initialCompaniesData = {
    isLoading: true,
    data: null,
    errors: null
  };


  const [companiesApiData, setCompaniesApiData] = useState(initialCompaniesData);
  const [filterText, setFilterText] = useState("");

  /** Makes axios request to API to get companies that contain search
   * text.
   */

  useEffect(function fetchCompaniesOnFilterTextChange() {
    async function fetchCompanies() {
      try {
        const companiesResult = await JoblyApi.getCompanies(filterText);
        setCompaniesApiData({
          isLoading: false,
          data: companiesResult,
          errors: null
        });
      } catch (err) {
        setCompaniesApiData({
          isLoading: false,
          data: null,
          errors: err
        });
      }
    }
    fetchCompanies();
  }, [filterText]);

  /** Sets filterText on search bar submit if input has changed */

  function filter(data) {
    setFilterText(data.searchText.trim());
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm filter={filter} />
      {companiesApiData.isLoading && <p>Loading...</p>}
      {(companiesApiData.errors !== null || companiesApiData.data?.length === 0)
        && <p>Not Found!</p>}
      <div className="CompanyList-list">
        {companiesApiData.data !== null && companiesApiData.data.map((c) => (
          <CompanyCard
            name={c.name}
            handle={c.handle}
            description={c.description}
            logoUrl={c.logoUrl}
            key={c.handle} />
        ))}
      </div>
    </div>
  );
}

export default CompanyList;