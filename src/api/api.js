import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class JoblyApi {
  // Token for interacting with the API will be stored here
  static token = null;

  /** Request function that bundles actions needed for all requests */

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get a list of companies filtered by search bar input */

  static async getCompanies(filter) {
    let res;
    if (filter.length > 0) {
      res = await this.request('companies/', { nameLike: filter });
    } else {
      res = await this.request('companies/');
    }
    return res.companies;
  }

  /** Get a list of jobs filtered by search bar input */

  static async getJobs(filter) {
    let res;
    if (filter.length > 0) {
      res = await this.request('jobs/', { title: filter });
    } else {
      res = await this.request('jobs/');
    }
    return res.jobs;
  }

  /** Get a list of jobs filtered by search bar input */

  static async login(username, password) {
    const data = { username: username, password: password };
    const res = await this.request('auth/token', data, "POST");
    JoblyApi.token = res.token;
    console.log('res.token: ', res.token)
    return res.token;
  }

  /** Get a user's info by username & token */

  static async getUser(username, token) {
    JoblyApi.token = token;
    const res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Register new user for site */

  static async registerUser(username, password, firstName, lastName, email) {
    const data = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    const res = await this.request('auth/register', data, 'POST');
    JoblyApi.token = res.token;
    return res.token;
    }

}

export default JoblyApi;