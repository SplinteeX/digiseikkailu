export const useOpenAi = () => {
  const openAi = async (message) => {
    try {
      if (message == "") {
        console.log("Please enter text!");
        return "Please enter text!";
      } else if (!message) {
        console.log("Please enter text!");
        return "Please enter text!";
      }
      const response = await fetch(`http://localhost:8080/api/openai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      return json.response;
    } catch (error) {
      throw error;
    }
  };
  return openAi;
};
