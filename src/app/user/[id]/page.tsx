"use client";

import LoadingIcon from "@/components/icons/Loading";
import useAuthStore from "@/stores/authStore";
import useUserStore from "@/stores/userStore";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNotification } from "@/context/NotificationContext";
import withRouteGuard from "@/components/RouteGuard";

const UserProfile = ({ params }: { params: any }) => {

  const fetchUserData = async () => {
    const response = await fetch('/api/anime');
    const data = await response.json();
    console.log(data);
  };
  console.log(params, "aparamsafjisdifb");
  const { user, _hasHydrated } = useAuthStore();
  const { getUser, userProfile } = useUserStore();
  // const router = useRouter()

  console.log(userProfile, 'userProfile')
  const [loading, setLoading] = useState(false)

  const showNotification = useNotification();

  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    const userId = params?.id;
    const getUserData = async () => {
      try {
        setLoading(true)
        await getUser(userId);
      } catch (error) {
        const err = error as AxiosError;
        if (err?.response?.status === 400) {
          showNotification(
            err.response.data?.message || "Bad Request",
            "error"
          );
        }
      } finally {
        setLoading(false)
      }
    };
    getUserData();
  }, [getUser, params, showNotification]);

  return (
    <div>
      {_hasHydrated && !loading && user?.emailVerified ? (
        <div>
          <h1>
            Hey User {user?.firstName} {user?.lastName}
          </h1>
          {userProfile ? <div>{userProfile?.firstName}</div> : null}
          <div>Welcome to AnimePix</div>
        </div>
      ) : (
        <div>
          <LoadingIcon />
        </div>
      )}
    </div>
  );
};

export default withRouteGuard(UserProfile)