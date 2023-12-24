import Cookies from "js-cookie";
export const useSaveCompletedExercise = () => {
  const SaveCompletedExercise = async (
    id,
    exerciseIdentifier,
    exerciseCategory
  ) => {
    const Auth = Cookies.get("Authorization");
    console.log(id);
    console.log(exerciseIdentifier);
    console.log(exerciseCategory);
    try {
      const response = await fetch(
        "http://localhost:8080/api/user/save-exercise",
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
