import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api.js";


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

  const [companies, setCompanies] = useState(initialCompaniesData);
  const [filterText, setFilterText] = useState("");

  /** Makes axios request to API to get companies that contain search
   * text.
   */

  useEffect(function fetchCompaniesOnFilterTextChange() {
    async function fetchCompanies() {
      try {
        const companiesResult = await JoblyApi.getCompanies(filterText);
        setCompanies({
          isLoading: false,
          data: companiesResult,
          errors: null
        });
      } catch (err) {
        setCompanies({
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
    if (filterText !== data.searchText) {
      setFilterText(data.searchText);
    }
  }

  return (
    <div className="CompanyList">
      <SearchForm filter={filter} />
      {companies.isLoading && <p>Loading...</p>}
      {companies.errors !== null && <p>Not Found!</p>}
      {companies.data !== null && companies.data.map((c) => (
        <CompanyCard company={c} key={c.handle} />
      ))}
    </div>
  );
}

export default CompanyList;