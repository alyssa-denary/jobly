import "./JobCard.css";

/** JobCard
 *
 * Props:
 * - job {id, title, salary, equity, (companyHandle), (companyName)}
 * () = optional
 *
 * State none
 *
 * JobCardList --> JobCard
 */

function JobCard({ job }){
  return (
    <div className="JobCard">
      <h4>{job.title}</h4>
      {job.companyName !== undefined && <p>{job.companyName}</p>}
      {job.salary !== undefined && <p><small>Salary: {job.salary}</small></p>}
      <p><small>Equity: {job?.equity || 0}</small></p>
    </div>
  );
}

export default JobCard;