import { http } from "@/services/HttpService";

const getCategories = () => {
  return http.get("/categories");
};

export default { getCategories };
