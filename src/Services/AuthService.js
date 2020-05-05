import axios from "axios";

// this is the link that will be used to fetch data from server side
// this link must always be prefixed with process.env.REACT_APP_INSERT_LINK
const baseURL = process.env.REACT_APP_SERVER_POINT;

// this pretty much says only authorized users have access to data from backend
const service = axios.create({
  baseURL,
  withCredentials: true,
});

const AUTH_SERVICE = {
  signup(userData) {
    // console.log("I'm line 17", userData);

    // const { username, email, password } = req.body; = userData
    //post must always have a 2nd argument. Make empty object if necessary
    return service.post("/api/signup", userData);
  },
  login(userData) {
    return service.post("/api/login", userData);
  },
  logout() {
    return service.post("/api/logout", {});
  },
  // this is the only get route. Get routes never have 2nd argument so empty onject is required.
  getUser() {
    // console.log("hellooooo");
    return service.get("/api/isLoggedIn");
  },
};

export default AUTH_SERVICE;
