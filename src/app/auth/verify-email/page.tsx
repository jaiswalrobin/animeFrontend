"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuthStore from "@/stores/authStore";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || '';
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { verifyEmail } = useAuthStore();
  const router = useRouter()

  useEffect(() => {
    async function handleEmailVerification() {
      if (!isLoading) {
        try {
          setIsLoading(true);
          console.log("calling....");
          await verifyEmail(token);
          setIsVerified(true);
          router.push('/auth/login')
        } catch (error) {
          setIsVerified(false);
        } finally {
          setIsLoading(false);
        }
      }
    }

    if (token) {
      handleEmailVerification();
    }

  }, [token, verifyEmail]);

  return (
    <>
      {isLoading ? (
        <div>Verifying your email...</div>
      ) : isVerified ? (
        <div>
          Email verified. Redirecting to login...
        </div>
      ) : (
        <div>Not able to verify the email</div>
      )}
    </>
  );
}
