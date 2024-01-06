import Cookies from "js-cookie";
export const useRetrieveExercises = () => {
  const RetrieveExercises = async (id) => {
    const Auth = Cookies.get("Authorization");
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/exercises/retrieve-exercises`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Auth,
          },
          body: JSON.stringify({ id }),
        }
      );
      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  };
  return { RetrieveExercises };
};
