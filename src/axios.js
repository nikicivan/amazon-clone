import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c9dd8.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-c9dd8/us-central1/api",
} //THE API (cloud function) Url
);

export default instance;
