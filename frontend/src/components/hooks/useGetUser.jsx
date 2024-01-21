import cookie from "js-cookie";
export const useGetUser = () => {
  const GetUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/getUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${cookie.get("Authorization")}`,
          },
        }
      );
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
