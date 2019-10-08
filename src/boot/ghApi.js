import axios from "axios";

// const baseURL = `https://api.github.com/repos/thelearninghouse/marketing-forms`;
const ghToken = "7086a3e2461d6cc510120369ed1a5a1f5f583d2f";

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const ghApi = axios.create({
  baseURL: `https://api.github.com/repos/thelearninghouse/marketing-forms`,
  headers: { Authorization: "Bearer " + ghToken }
});
// NEWW 222
export default ({ Vue }) => {
  Vue.prototype.$ghApi = ghApi;
};

// Here we define a named export
// that we can later use inside .js files:
export { ghApi };
