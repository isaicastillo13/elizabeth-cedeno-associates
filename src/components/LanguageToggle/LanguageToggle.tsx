"use client";
import { useState } from "react";
import Image from "next/image";

const flag = [
  { icon: "/assets/icons/flag_es.png", lang: "es" },
  { icon: "/assets/icons/flag_en.png", lang: "en" },
];

export default function LanguageToggle({onChange,} : {onChange: (lang: string) => void;}) {
  const [index, setIndex] = useState(0);
  const handclick = () => {
    const nextIndex = (index + 1) % flag.length;
    setIndex(nextIndex);
    if (onChange) onChange(flag[nextIndex].lang);
  };

  return (
    <button id="language-toggle" onClick={handclick} className="w-6 h-6">
      <Image
        src={flag[index].icon}
        alt={`Change Language to ${flag[index].lang}`}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
}
