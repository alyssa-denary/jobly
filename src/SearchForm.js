import { useState } from "react";
import './SearchForm.css';

/** SearchForm
*
* Props
* -filter (callback function)
*
* State
* -formData {searchText}
*
* {CompanyList,  JobList} --> SearchForm
*/

function SearchForm({ filter }) {
  const [formData, setFormData] = useState({ searchText: "" });
  // Also could use string directly here

  /** handleSubmit calls parent filter callback */
  function handleSubmit(evt) {
    evt.preventDefault();
    // TODO: could clean up data here with trim() for empty entries
    filter(formData);
  }

  /** updates formData state for that input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value
    }));
  }

  return (
    <div className="SearchForm mb-4">
      <form className="SearchForm mb-4" onSubmit={handleSubmit}>
        <div
          className="row d-flex justify-content-center justify-content-lg-start gx-0"
        >
          <div className="col-8">
            <label htmlFor="SearchForm-input"></label>
            <input
              id="SearchForm-input"
              className="form-control form-control-lg"
              placeholder="Enter search term..."
              name="searchText"
              value={formData.searchText}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;