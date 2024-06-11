import axios from "../apis";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const access = localStorage.getItem("accessToken");
    console.log(`${access}  before updating`);

    const response = await axios.post("/auth/refresh/token", {
      refreshToken: refreshToken,
    });
    const accessToken = response.data.data.accessToken;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setAuth((prev: any) => {
      console.log("accessToken" + accessToken);
      console.log(`${accessToken}  after updating`);

      return { ...prev, accessToken: accessToken };
    });
    return accessToken;
  };

  return refresh;
};

export default useRefreshToken;
