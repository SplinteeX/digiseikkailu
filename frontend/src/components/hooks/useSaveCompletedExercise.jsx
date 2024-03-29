import Cookies from "js-cookie";
export const useSaveCompletedExercise = () => {
  const SaveCompletedExercise = async (
    id,
    exerciseIdentifier,
    exerciseCategory
  ) => {
    const Auth = Cookies.get("Authorization");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/exercises/save-exercise`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Auth,
          },
          body: JSON.stringify({ id, exerciseIdentifier, exerciseCategory }),
        }
      );
      console.log("Exercise saved");
      return response;
    } catch (error) {
      throw error;
    }
  };
  return { SaveCompletedExercise };
};
