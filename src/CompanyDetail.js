import JobCardList from "./JobCardList";

/** CompanyDetail
*
* Props none
*
* State
* -company
* Effect
* -fetchCompanyOnMount
*   { handle, name, description, numEmployees, logoUrl, jobs }
*   where jobs is [{ id, title, salary, equity }, ...]
*
* RouteList --> CompanyDetail --> JobCardList
*/

function CompanyDetail() {

  const fakeJobs = [{fakejob: null}];

    return (
        <div className="CompanyDetail">
            <JobCardList jobs={fakeJobs}/>
        </div>
    )
}

export default CompanyDetail;