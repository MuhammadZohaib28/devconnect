"use client";
import { useState } from "react";
import AuthCard from "@/components/AuthCard";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/LoadingButton";

export default function UserLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login logic (e.g., API call)
    setTimeout(() => {
      router.push("/dashboard/user");
    }, 1000);
  };

  return (
    <AuthCard
      title="User Login"
      subtitle="Access your client account"
      footerText={
        <>
          Don't have an account?{" "}
          <Link
            href="/auth/user/signup"
            className="text-indigo-600 hover:underline"
          >
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="user@example.com"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/auth/forgot-password"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <LoadingButton type="submit" loading={loading}>
          User Login
        </LoadingButton>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
      </div>
    </AuthCard>
  );
}
