import { useState } from "react";
import ListTitle from "../atoms/ListTitle";
import ListContent from "../molecules/ListContent";

export default function List({ callback }) {
  const [item, setItem] = useState(0);

  const clickedContent = () => {
    console.log("clicked");
    callback();
  };

  return (
    <>
      <ListTitle title={"2023年8月2日(火)"} />
      {[...Array(10)].map((_, i) => (
        <ListContent key={i} clickedContent={() => clickedContent()} />
      ))}
    </>
  );
}
