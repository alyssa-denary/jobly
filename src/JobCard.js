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

function JobCard({ job }) {
  return (
    <div className="JobCard card card-body">
      <h4 className="card-title">{job.title}</h4>
      {job.companyName !== undefined && <p>{job.companyName}</p>}
      {job.salary !== undefined && <p><small>Salary: {job.salary}</small></p>}
      <p><small>Equity: {job?.equity || 0}</small></p>
    </div>
  );
}

export default JobCard;