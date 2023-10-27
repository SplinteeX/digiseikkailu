import Cookies from "js-cookie";

export const useDeleteStudent = () => {
  const deleteStudent = async (id) => {
    console.log(id);
    try {
      const Auth = Cookies.get("Authorization"); // Get the token from Cookies

      const response = await fetch(
        `http://localhost:8080/api/student/delete/${id}`,
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
