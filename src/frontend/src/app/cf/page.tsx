import MainMenu from "@/components/organisms/MainMenu";
import CashFlow from "@/components/templates/CashFlow";

export default function Page() {
  return (
    <>
      <CashFlow />
      <MainMenu current={"cf"} />
    </>
  );
}
