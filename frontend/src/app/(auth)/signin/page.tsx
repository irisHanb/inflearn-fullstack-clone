"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">로그인</h1>
      <p className="text-gray-700">인프런 계정으로 로그인할 수 있어요</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 min-w-[300px]"
      >
        <label htmlFor="email">이메일</label>
        <input
          className="border-2 border-gray-3000 rounded-sm p-2"
          type="email"
          name="eamil"
          value={email}
          placeholder="example@inflab.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          className="border-2 border-gray-3000 rounded-sm p-2"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-500 text-white font-bold cursor-pointer rounded-sm p-2"
          type="submit"
        >
          로그인
        </button>
        <Link className="text-center" href="/signup">
          회원가입
        </Link>
      </form>
    </div>
  );
}
