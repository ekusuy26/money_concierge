import { useState } from "react";
import { ListProps } from "@/interfaces/interface";
import ListTitle from "@/components/atoms/ListTitle";
import ListContent from "@/components/molecules/ListContent";

export default function List({ callback }: ListProps) {
  const [item, setItem] = useState(0);

  const clickedContent = () => {
    console.log("clicked");
    callback();
  };

  return (
    <>
      <ListTitle title={"2023年8月2日(火)"} />
      {[...Array(10)].map((_, i) => (
        <ListContent key={i} callback={() => clickedContent()} />
      ))}
    </>
  );
}
