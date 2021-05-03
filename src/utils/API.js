import axios from "axios";
// random user API
const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
