
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
      <p>I'm a job card</p>
    </div>
  );
}

export default JobCard;