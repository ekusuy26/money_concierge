import MainMenu from "@/components/organisms/MainMenu";
import Report from "@/components/templates/Report";

export default function Page() {
  return (
    <>
      <Report />
      <MainMenu current={"report"} />
    </>
  );
}
