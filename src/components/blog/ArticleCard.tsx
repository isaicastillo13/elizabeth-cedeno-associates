'use client'
import Link from "next/link";
import React from "react";
type Props = {
  colRow?: string;
  imgSrc?: string;
  title?: string;
  description?: string;
  authorImgSrc?: string;
  authorName?: string;
  date?: string;
  slug?: string;
};
export default function ArticleCard({
  colRow = "row",
  imgSrc = "",
  title = "",
  description = "",
  authorImgSrc = "",
  authorName = "",
  date = "",
  slug
}: Props) {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <article className={`flex flex-${colRow} gap-8 p-10 border-b-2`}>
        {imgSrc && <img src={imgSrc} />}
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px]">
            {title}
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] text-secundario">
            {description}
          </p>
          <div className="flex items-center gap-4">
            {authorImgSrc && (
              <img
                src={authorImgSrc}
                alt={authorName}
                className="w-10 rounded-full"
              />
            )}
            <div>
              <h5 className="text-xs md:text-sm lg:text-[16px] font-semibol">
                {authorName}
              </h5>
              <time className="text-xs md:text-sm lg:text-[16px]">{date}</time>
            </div>
          </div>
        </div>
      </article>
      </Link>
    </>
  );
}
