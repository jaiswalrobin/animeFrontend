import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ROUTES } from "../middleware/routes"; // Path to your routes file
import useAuthStore from "@/stores/authStore";
import LoadingIcon from "./icons/Loading";
import { routeConfigs } from "../middleware/routeConfigs"; // Adjust the import as necessary

const withRouteGuard = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const RouteGuard = (props: any) => {
    const router = useRouter();
    const path = usePathname();
    const [authorized, setAuthorized] = useState(false);
    const { user, isLoading, _hasHydrated, setRedirectLink } = useAuthStore();

    useEffect(() => {
      console.log("login-use-effect-chala", _hasHydrated);
      if (!_hasHydrated) return;

      const matchedConfig = Object.values(routeConfigs).find((config) =>
        config.pattern.test(path)
      );

      if (!matchedConfig) {
        router.push(ROUTES.PUBLIC.HOME);
        return;
      }

      const { auth, verifiedEmail } = matchedConfig;

      const handleRedirects = () => {
        if (auth === "required") {
          if (!user?.id) {
            if (path !== ROUTES.AUTH.LOGIN) {
              setRedirectLink(path);
              router.push(ROUTES.AUTH.LOGIN);
            }
          } else if (verifiedEmail && !user.emailVerified) {
            router.push(ROUTES.AUTH.PENDING_VERIFICATION);
          } else {
            setAuthorized(true);
          }
        } else if (auth === "none") {
          if (user?.id) {
            router.push(`/user/${user.id}`);
          } else {
            setAuthorized(true);
          }
        } else if (auth === "optional") {
          setAuthorized(true);
        }
      };

      handleRedirects();
    }, [_hasHydrated, user, router, setRedirectLink, path]);

    if (!authorized || isLoading || !_hasHydrated) {
      return <LoadingIcon />;
    }

    return <WrappedComponent {...props} />;
  };

  return RouteGuard;
};

export default withRouteGuard;
