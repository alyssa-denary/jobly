
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
      <h4>Conservator, furniture</h4>
      <p>Watson-Davis</p>
      <small>salary: 110,000</small>
      <small>Equity: 0</small>
    </div>
  );
}

export default JobCard;