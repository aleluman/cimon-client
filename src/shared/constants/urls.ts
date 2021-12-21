const prod = {
  API_URL: "https://cimon.herokuapp.com",
};

const dev = {
  API_URL: "http://localhost:5000",
};

export const urls = process.env.NODE_ENV === "development" ? dev : prod;
