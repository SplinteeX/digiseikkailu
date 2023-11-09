import { useState } from "react";
import Cookies from "js-cookie";

export const useOpenAi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const openAi = async (message) => {
    setIsLoading(true);

    try {
      const Auth = Cookies.get("Authorization");
      if (message === "" || !message) {
        console.log("Please enter text!");
        setIsLoading(false);
        return "Please enter text!";
      }

      const response = await fetch(`http://localhost:8080/api/openai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${Auth}`,
        },
        body: JSON.stringify({ message }),
      });
      if (response.status === 401) {
        return "You need to login first!";
      }

      const json = await response.json();

      if (!response.ok) {
        setError("An error occurred");
      }

      setIsLoading(false);
      return json.response;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return { openAi, isLoading };
};
