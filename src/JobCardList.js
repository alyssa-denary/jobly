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

// TODO: destructure here instead of in jobCard
function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(j => <JobCard job={j} key={j.id} />)}
    </div>
  );
}

export default JobCardList;