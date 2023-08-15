import { Finance, ListProps } from "@/interfaces/interface";
import SwipeToDelete from "@/components/molecules/SwipeToDelete";
import { useState } from "react";

export default function List({ finances, onListClick, onDelete }: ListProps) {
  const [activeSwipeToDelete, setActiveSwipeToDelete] =
    useState<Finance | null>(null);

  const handleSwipeStart = (finance: Finance) => {
    setActiveSwipeToDelete(finance);
  };

  const handleSwipeEnd = (finance: Finance) => {
    onListClick(finance);
    setActiveSwipeToDelete(null);
  };
  return (
    <div className="overflow-hidden">
      {finances.map((finance, i) => (
        <SwipeToDelete
          key={finance.id}
          finance={finance}
          date={finances[i - 1]?.formatDate !== finance.formatDate}
          isActive={activeSwipeToDelete === finance}
          onStart={() => handleSwipeStart(finance)}
          onEnd={() => handleSwipeEnd(finance)}
          callback={onDelete}
        />
      ))}
    </div>
  );
}
