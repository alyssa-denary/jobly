import "./JobCard.css";

/** JobCard
 *
 * Props:
 * - job {title, salary, equity, companyName}
 * () = optional
 *
 * State none
 *
 * JobCardList --> JobCard
 */

function JobCard({ title, salary, equity, companyName }) {
  return (
    <div className="JobCard card card-body">
      <h4 className="card-title">{title}</h4>
      {companyName !== undefined && <p>{companyName}</p>}
      {salary !== undefined && <p><small>Salary: {salary}</small></p>}
      <p><small>Equity: {equity || 0}</small></p>
    </div>
  );
}

export default JobCard;