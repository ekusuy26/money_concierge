import MainMenu from "@/components/organisms/MainMenu";
import Setting from "@/components/templates/Setting";

export default function Page() {
  return (
    <>
      <Setting />
      <MainMenu current={"setting"} />
    </>
  );
}
