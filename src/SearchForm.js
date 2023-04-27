import {useState} from "react";

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

function SearchForm({filter}) {
  const [formData, setFormData] = useState({searchText: ""});

  /** handleSubmit calls parent filter callback */
  function handleSubmit(evt) {
    evt.preventDefault();
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
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="SearchForm-input"></label>
      <input
        id="SearchForm-input"
        className="form-control"
        placeholder="Enter search term..."
        name="searchText"
        value={formData.searchText}
        onChange={handleChange}
      />
      </div>
      <button className="btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;