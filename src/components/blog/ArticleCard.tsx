import React from 'react'
type Props = {
    imgSrc?: string;
    title?: string;
    description?: string;
    authorImgSrc?: string;
    authorName?: string;
    date?: string;
}
export default function ArticleCard({
    imgSrc = '',
    title = '',
    description = '',
    authorImgSrc = '',
    authorName = '',
    date = ''
    }: Props) {
  return (
    <>
        <article>
            {imgSrc && <img src={imgSrc} alt={title} />}
            <div>
                <div>
                <h2>{title}</h2>
                <img src="" alt="" />
                </div>
                <p>{description}</p>
                <div>
                    {authorImgSrc && <img src={authorImgSrc} alt={authorName} />}
                    <div>
                        <h5>{authorName}</h5>
                        <time>{date}</time>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}
