/**  CompanyList
 * 
 * Props: none
 * 
 * State: 
 * -companies :{isLoading, data, errors}
 * -filter: "anderson"
 * 
 * Effect
 * -fetchCompanies
 * 
 * RouteList --> CompanyList --> {SearchForm, CompanyCard}
*/

function CompanyList() {
    return (
        <div className="CompanyList">
            <SearchForm />
            <CompanyCard />
            <CompanyCard />
        </div>
    )
}

export default CompanyList;