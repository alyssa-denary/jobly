import JobCard from "./JobCard";


/** JobCardList
 * maps over array of jobs and renders JobCard for each
 *
 * Props:
 * - jobs: [{id, title, salary, equity, (companyHandle), (companyName)}...]
 *
 * State none
 *
 * { JobsList, CompanyDetail } --> JobCardList --> JobCard
*/

function JobCardList({ jobs }) {

  const fakeJob = { fakejob: null };
  return (
    <div className="JobCardList">
      {/* TODO: turn this into map over JobCard */}
      <JobCard job={fakeJob} />
    </div>
  );
}

export default JobCardList;