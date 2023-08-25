import { MainMenuProps } from "@/interfaces/interface";
import HomeIcon from "@/components/atoms/icons/HomeIcon";
import CfIcon from "@/components/atoms/icons/CfIcon";
import ReportIcon from "@/components/atoms/icons/ReportIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import ButtonMainMenu from "@/components/molecules/ButtonMainMenu";

export default function MainMenu({ current }: MainMenuProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white grid grid-cols-4 divide-x text-xs text-center border-t">
      <ButtonMainMenu
        title={"ホーム"}
        href={"/"}
        icon={<HomeIcon />}
        isActive={current === "home"}
      />
      <ButtonMainMenu
        title={"入出金"}
        href={"/cf"}
        icon={<CfIcon />}
        isActive={current === "cf"}
      />
      <ButtonMainMenu
        title={"レポート"}
        href={"/report"}
        icon={<ReportIcon />}
        isActive={current === "report"}
      />
      <ButtonMainMenu
        title={"設定"}
        href={"/setting"}
        icon={<SettingIcon />}
        isActive={current === "setting"}
      />
    </nav>
  );
}
