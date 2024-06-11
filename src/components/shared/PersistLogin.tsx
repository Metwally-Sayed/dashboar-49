import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "@/lib/hooks/useRefreshToken";
import useAuth from "@/lib/hooks/useAuth";
import { LoaderCircle } from "lucide-react";

type Props = {};

const PersistLogin = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  console.log("auth", auth);

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        const response = await refresh();
        console.log("response from PersistLogin (refresh) ", response);
      } catch (error) {
        console.log("error from PersistLogin (refresh) ", error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <LoaderCircle className="animate-spin h-10 w-10" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
