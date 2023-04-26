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
 * -filter: "anderson"
 *
 * Effect
 * -fetchCompanies
 *
 * RouteList --> CompanyList --> {SearchForm, CompanyCard}
*/

function CompanyList() {
  const fakeCompany = {id: "dlkj", handle: "anderson"};

    return (
      <div className="CompanyList">
        <SearchForm />
        {/* TODO: turn this into map over CompanyCard */}
        <CompanyCard company={fakeCompany}/>
      </div>
    );
}

export default CompanyList;