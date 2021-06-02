import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCzuZKKtfShMrp8a9rokWEztxN0HqyQOI4",
  },
});

export default request;
