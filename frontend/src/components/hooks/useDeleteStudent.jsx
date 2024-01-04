import Cookies from "js-cookie";

export const useDeleteStudent = () => {
  const deleteStudent = async (id) => {
    try {
      const Auth = Cookies.get("Authorization");

      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/student/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${Auth}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      console.log("Student deleted successfully");
    } catch (error) {
      throw error;
    }
  };

  return deleteStudent;
};
