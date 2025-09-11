import { auth, signOut } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <>
          <h2>현재 로그인한 유저</h2>
          <p>user email: {session?.user?.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">로그아웃</button>
          </form>
        </>
      ) : (
        <>
          <h2>현재 로그인한 유저가 없습니다.</h2>
          <Link href="/signin">로그인</Link>
        </>
      )}
    </div>
  );
}
