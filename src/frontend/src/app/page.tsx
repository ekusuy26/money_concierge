import MainMenu from "@/components/organisms/MainMenu";
import Home from "@/components/templates/Home";

export default function Page() {
  return (
    <>
      <Home />
      <MainMenu current={"home"} />
    </>
  );
}
