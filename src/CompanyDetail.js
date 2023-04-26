/** CompanyDetail 
* 
* Props none
* 
* State 
* -company

* Effect 
-fetchCompanyOnMount 
    { handle, name, description, numEmployees, logoUrl, jobs } 
    where jobs is [{ id, title, salary, equity }, ...]
*
* RouteList --> CompanyDetail --> JobCardList
*/

function CompanyDetail() {
    return (
        <div className="CompanyDetail">
            <JobCardList/>
        </div>
    )
}

export default CompanyDetail;