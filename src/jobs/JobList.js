import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../api/api";

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


function JobList() {
  const initialJobsData = {
    isLoading: true,
    data: null,
    errors: null
  };
  const [jobsApiData, setJobsApiData] = useState(initialJobsData);
  const [filterText, setFilterText] = useState("");

  useEffect(function fetchJobsOnFilterTextChange() {
    async function fetchJobs() {
      try {
        const jobsResult = await JoblyApi.getJobs(filterText);
        setJobsApiData({
          isLoading: false,
          data: jobsResult,
          errors: null
        });
      } catch (err) {
        setJobsApiData({
          isLoading: false,
          data: null,
          errors: err
        });
      }
    }
    fetchJobs();
  }, [filterText]);

  function filter(data) {
    setFilterText(data.searchText.trim());
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm filter={filter} />
      {jobsApiData.isLoading && <p>Loading...</p>}
      {(jobsApiData.errors !== null || jobsApiData.data?.length === 0)
        && <p>Not Found!</p>}
      {jobsApiData.data !== null && <JobCardList jobs={jobsApiData.data} />}
    </div>
  );
}

export default JobList;