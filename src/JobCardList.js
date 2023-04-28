import JobCard from "./JobCard";


/** JobCardList
 * maps over array of jobs and renders JobCard for each
 *
 * Props:
 * - jobs: [{ title, salary, equity, companyName}...]
 *
 * State none
 *
 * { JobsList, CompanyDetail } --> JobCardList --> JobCard
*/

function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(j => <JobCard
        title={j.title}
        salary={j.salary}
        equity={j.equity}
        companyName={j.companyName}
        key={j.id} />)}
    </div>
  );
}

export default JobCardList;