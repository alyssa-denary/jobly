import {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

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
            const companiesResult = await getCompanies(filterText);
            setCompanies({
                isLoading: false,
                data: companiesResults,
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
        {/* TODO: turn this into map over CompanyCard */}
        <CompanyCard company={fakeCompany}/>
      </div>
    );
}

export default CompanyList;