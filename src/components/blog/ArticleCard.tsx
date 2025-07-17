import React from "react";
type Props = {
  colRow?: string;
  imgSrc?: string;
  title?: string;
  description?: string;
  authorImgSrc?: string;
  authorName?: string;
  date?: string;
};
export default function ArticleCard({
  colRow = "row",
  imgSrc = "",
  title = "",
  description = "",
  authorImgSrc = "",
  authorName = "",
  date = "",
}: Props) {
  return (
    <>
      <article className={`flex flex-${colRow} gap-8 p-4`}>
        {imgSrc && <img src={imgSrc}/>}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">{title}</h2>
            <img src="" alt="" />
          </div>
          <p className="text-base md:text-lg lg:text-xl text-secundario">{description}</p>
          <div className="flex items-center gap-4">
            {authorImgSrc && <img src={authorImgSrc} alt={authorName} className="w-10 rounded-full"/>}
            <div>
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibol">{authorName}</h5>
              <time>{date}</time>
            </div>
          </div>
        </div>
      </article>
         <hr className="w-full my-4 border-gray-300 border-t-1" />

    </>
  );
}
