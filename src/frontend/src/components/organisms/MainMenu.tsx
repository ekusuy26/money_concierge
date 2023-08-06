import { MainMenuProps } from "@/interfaces/interface";
import Svg from "@/components/atoms/Svg";
// import { useSession } from "next-auth/react";

export default function MainMenu({ callback }: MainMenuProps) {
  // const { data: session, status } = useSession();
  // const userEmail = session?.user?.email;
  // console.log(session, status, userEmail);

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white z-nav text-xs">
      <div className="grid grid-cols-4 divide-x shadow-top h-16">
        <button onClick={() => callback("home")}>
          <div className="h-7 w-7 mx-auto mb-1">
            <Svg slug="home" />
          </div>
          ホーム
        </button>
        <button onClick={() => callback("history")}>
          <div className="h-7 w-7 mx-auto mb-1">
            <Svg slug="history" />
          </div>
          入出金
        </button>
        <button onClick={() => callback("report")}>
          <div className="h-7 w-7 mx-auto mb-1">
            <Svg slug="report" />
          </div>
          レポート
        </button>
        <button onClick={() => callback("setting")}>
          <div className="h-7 w-7 mx-auto mb-1">
            <Svg slug="setting" />
          </div>
          設定
        </button>
      </div>
    </nav>
  );
}
