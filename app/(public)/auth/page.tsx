"use client";
import { useState } from "react";
import { VisibilityOffIcon } from "../../components/icons";
import { FacebookIcon, GoogleIcon } from "../../components/social-icons";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="relative flex min-h-screen w-full flex-col dark group/design-root">
      <div className="flex h-full grow flex-col">
        <div className="flex min-h-screen flex-1">
          <LeftPanel />
          <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="hidden lg:flex w-1/2 flex-col items-center justify-center bg-background-dark p-12">
      <div className="flex max-w-md flex-col items-start gap-8">
        <div className="flex items-center gap-3">
          <svg
            className="h-10 w-10 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
          </svg>
          <span className="text-2xl font-bold text-white">KYC Hub</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          The Secure Hub for Verified Betting Accounts.
        </h1>
        <p className="text-lg text-[#9da6b9]">
          Gain instant access to a marketplace of fully verified, ready-to-use
          accounts. Our platform ensures security, speed, and reliability for
          all your betting needs.
        </p>
      </div>
    </div>
  );
}

function RightPanel({ activeTab, setActiveTab }: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-background-light dark:bg-[#111318] p-6 lg:w-1/2">
      <div className="w-full max-w-md">
        <div className="pb-3">
          <div className="flex border-b border-[#3b4354] gap-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex flex-col items-center justify-center pb-[13px] pt-4 flex-1 ${
                activeTab === "login"
                  ? "border-b-[3px] border-b-primary text-white"
                  : "border-b-[3px] border-b-transparent text-[#9da6b9]"
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Login
              </p>
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex flex-col items-center justify-center pb-[13px] pt-4 flex-1 ${
                activeTab === "register"
                  ? "border-b-[3px] border-b-primary text-white"
                  : "border-b-[3px] border-b-transparent text-[#9da6b9]"
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Register
              </p>
            </button>
          </div>
        </div>
        {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col gap-4 py-6">
      <h1 className="text-white tracking-light text-[32px] font-bold leading-tight text-left pb-1">
        Welcome Back
      </h1>
      <p className="text-[#9da6b9] text-base font-normal leading-normal pb-3">
        Log in to access your secure hub for verified betting accounts.
      </p>
      <div className="flex w-full flex-wrap items-end gap-4">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Email Address
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-14 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal"
            placeholder="you@example.com"
            value=""
          />
        </label>
      </div>
      <div className="flex w-full flex-wrap items-end gap-4">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Password
          </p>
          <div className="relative flex w-full flex-1 items-stretch">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-14 placeholder:text-[#9da6b9] p-[15px] pr-12 text-base font-normal leading-normal"
              placeholder="Enter your password"
              type="password"
              value=""
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#9da6b9] hover:text-white">
              <VisibilityOffIcon />
            </button>
          </div>
        </label>
      </div>
      <div className="flex items-center justify-between py-2">
        <label className="flex items-center gap-2">
          <input
            className="form-checkbox h-4 w-4 rounded border-[#3b4354] bg-[#1c1f27] text-primary focus:ring-primary/50"
            type="checkbox"
          />
          <span className="text-sm text-[#9da6b9]">Remember Me</span>
        </label>
        <a
          className="text-sm font-medium text-primary hover:underline"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <button className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90">
        Log In
      </button>
      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-[#3b4354]"></div>
        <span className="mx-4 flex-shrink text-sm text-[#9da6b9]">
          Or continue with
        </span>
        <div className="flex-grow border-t border-[#3b4354]"></div>
      </div>
      <div className="flex gap-4">
        <button className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#3b4354] bg-[#1c1f27] px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#2a2d37]">
          <GoogleIcon />
          <span>Google</span>
        </button>
        <button className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#3b4354] bg-[#1c1f27] px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#2a2d37]">
          <FacebookIcon />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="flex flex-col gap-4 py-6">
      <h1 className="text-white tracking-light text-[32px] font-bold leading-tight text-left pb-1">
        Create an Account
      </h1>
      <p className="text-[#9da6b9] text-base font-normal leading-normal pb-3">
        Join our marketplace for instant access to verified betting accounts.
      </p>
      <div className="flex w-full flex-wrap items-end gap-4">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Email Address
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-14 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal"
            placeholder="you@example.com"
            type="email"
          />
        </label>
      </div>
      <div className="flex w-full flex-wrap items-end gap-4">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-normal leading-normal pb-2">
            Password
          </p>
          <div className="relative flex w-full flex-1 items-stretch">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-14 placeholder:text-[#9da6b9] p-[15px] pr-12 text-base font-normal leading-normal"
              placeholder="Create a strong password"
              type="password"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#9da6b9] hover:text-white">
              <VisibilityOffIcon />
            </button>
          </div>
        </label>
      </div>
      <div className="py-2">
        <p className="text-xs text-[#9da6b9]">
          By creating an account, you agree to our{" "}
          <a className="text-primary hover:underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-primary hover:underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <button className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90">
        Create Account
      </button>
      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-[#3b4354]"></div>
        <span className="mx-4 flex-shrink text-sm text-[#9da6b9]">
          Or continue with
        </span>
        <div className="flex-grow border-t border-[#3b4354]"></div>
      </div>
      <div className="flex gap-4">
        <button className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#3b4354] bg-[#1c1f27] px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#2a2d37]">
          <GoogleIcon />
          <span>Google</span>
        </button>
        <button className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#3b4354] bg-[#1c1f27] px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#2a2d37]">
          <FacebookIcon />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}
