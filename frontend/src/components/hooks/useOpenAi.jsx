import { useState } from "react";
import Cookies from "js-cookie";
import { useAuthContext } from "./useAuthContext";

export const useOpenAi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const parsedUser = user ? JSON.parse(user) : null;

  const openAi = async (message) => {
    setIsLoading(true);

    try {
      const Auth = Cookies.get("Authorization");
      if (!message) {
        setIsLoading(false);
        console.log("Please enter text!");
        return "Please enter text!";
      }

      if (parsedUser) {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/openai`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${Auth}`,
            },
            body: JSON.stringify({
              message,
              role: parsedUser.role,
              username: parsedUser.userName,
            }),
          }
        );

        const json = await response.json();

        if (!response.ok) {
          console.error(json);
          setIsLoading(false);
          throw new Error("Failed to fetch");
        }

        setIsLoading(false);
        return json.response;
      } else {
        setIsLoading(false);
        return "Chatbotin käyttäminen edellyttää kirjautumista. Kirjaudu sisään sivun oikeasta yläkulmasta.";
      }
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return { openAi, isLoading };
};
