const prod = {
  API_URL: "http://localhost:8000",
};

const dev = {
  API_URL: "http://localhost:8000",
};

export const urls = process.env.NODE_ENV === "development" ? dev : prod;