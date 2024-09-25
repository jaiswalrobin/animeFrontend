// src/app/auth/verify-email/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosClient from "@/services/http";
import Link from "next/link";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axiosClient
        .get(`http://localhost:3003/auth/verify-email?token=${token}`)
        .then((res) => {
          console.log("Verification success:", res);
          setIsVerified(true);
          setIsLoading(false);
        })
        .catch((err) => console.error("Verification failed:", err));
    }
  }, [token]);

  return (
    <>
      {isLoading ? (
        <div>Verifying your email...</div>
      ) : isVerified ? (
        <div>
          Email verified. please
          <Link style={{textDecoration: 'underline', color: 'blue'}} href="/auth/login">
            Login
          </Link>
        </div>
      ) : (
        <div>Not able to verify the email</div>
      )}
    </>
  );
}
