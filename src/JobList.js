/** JobList
*
* Props none
*
* State
* -jobs {isLoading, data, errors}
* -filterText  : "anderson" 
*
* Effect:
* -fetchJobs
*
*
* RouteList --> JobList --> { SearchForm , JobCardList }
*
*/

import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

function JobList() {
  const initialJobsData = {
    isLoading: true,
    data: null,
    errors: null
  };
  const [jobs, setJobs] = useState(initialJobsData);
  const [filterText, setFilterText] = useState("");

  useEffect(function fetchJobsOnFilterTextChange() {
    async function fetchJobs() {
      try {
        const jobsResult = await JoblyApi.getJobs(filterText);
        setJobs({
          isLoading: false,
          data: jobsResult,
          errors: null
        });
      } catch (err) {
        setJobs({
          isLoading: false,
          data: null,
          errors: err
        });
      }
    }
    fetchJobs();
  }, [filterText]);

  function filter(data) {
      setFilterText(data.searchText);
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm filter={filter} />
      {jobs.isLoading && <p>Loading...</p>}
      {jobs.errors !== null && <p>Not Found!</p>}
      {jobs.data !== null && <JobCardList jobs={jobs.data} />}
    </div>
  );
}

export default JobList;