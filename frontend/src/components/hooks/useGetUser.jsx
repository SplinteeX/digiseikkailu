import cookie from "js-cookie";
export const useGetUser = () => {
  const GetUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${cookie.get("Authorization")}`,
        },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized");
      }
    }
  };
  return { GetUser };
};
