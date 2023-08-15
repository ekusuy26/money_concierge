import { MainMenuProps } from "@/interfaces/interface";
import ButtonMainMenu from "@/components/molecules/ButtonMainMenu";

export default function MainMenu({ current }: MainMenuProps) {
  return (
    <nav className="mj-mainMenu fixed inset-x-0 bottom-0 bg-white z-nav text-xs">
      <div className="grid grid-cols-4 divide-x shadow-top h-16">
        <ButtonMainMenu
          title={"ホーム"}
          href={"/"}
          slug={"home"}
          isActive={current === "home"}
        />
        <ButtonMainMenu
          title={"入出金"}
          href={"/cf"}
          slug={"cf"}
          isActive={current === "cf"}
        />
        <ButtonMainMenu
          title={"レポート"}
          href={"/report"}
          slug={"report"}
          isActive={current === "report"}
        />
        <ButtonMainMenu
          title={"設定"}
          href={"/setting"}
          slug={"setting"}
          isActive={current === "setting"}
        />
      </div>
    </nav>
  );
}
