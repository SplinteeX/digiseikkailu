import Cookies from "js-cookie";

export const useCreateStudent = () => {
  const createStudent = async (name, username) => {
    const Auth = Cookies.get("Authorization");

    try {
      const response = await fetch("http://localhost:8080/api/student/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Auth,
        },
        body: JSON.stringify({ name, username }),
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      throw error;
    }
  };

  return { createStudent };
};
