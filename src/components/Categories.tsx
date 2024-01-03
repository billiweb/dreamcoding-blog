import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="flex gap-5 pt-8 pb-5 justify-center">
      <h2></h2>
      {categories.map((category) => (
        <p
          className={`cursor-pointer hover:text-green-500 ${
            category === selected && "text-green-600"
          }`}
          key={category}
          onClick={() => onClick(category)}
        >
          {category}
        </p>
      ))}
    </section>
  );
}
