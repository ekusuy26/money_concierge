import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Setting() {
  const { data: session, status } = useSession();
  const user = session?.user;
  return (
    <>
      {user && (
        <>
          <p>{`${user.name} さん`}</p>
        </>
      )}
      <p>this is setting page</p>
      <div className="m-5">
        <button
          className="block rounded-md w-full py-3 bg-red-500 text-white"
          onClick={() => signOut()}
        >
          ログアウト
        </button>
      </div>
    </>
  );
}
