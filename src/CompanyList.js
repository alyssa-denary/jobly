import {useState, useEffect} from "react";
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
  }

    const [companies, setCompanies] = useState(initialCompaniesData);
    const [filterText, setFilterText] = useState("");

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

    return (
      <div className="CompanyList">
        <SearchForm />
        {companies.isLoading && <p>Loading...</p>}
        {companies.errors !== null && <p>Not Found!</p>}
        {companies.data !==null && companies.data.map((c) => (
          <CompanyCard company={c}/>
        ))}
      </div>
    );
}

export default CompanyList;