/** JobList
*
* Props none
*
* State
* -jobs {isLoading, data, errors}
* -filter  : "anderson"
*
* Effect:
* -fetchJobs
*
*
* RouteList --> JobList --> { SearchForm , JobCardList }
*
*/

import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

function JobList() {

  const fakeJobs = [{fakejob: null}];

    return (
      <div className="JobList">
        <SearchForm />
        <JobCardList jobs={fakeJobs} />
      </div>
    );
}

export default JobList;