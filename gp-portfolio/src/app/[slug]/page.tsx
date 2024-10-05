import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "../../../lib/articles"

const Article = async ({ params }: { params: { slug: string } }) => {
    const articleData = await getArticleData(params.slug)

    return (
        <section className="my-24 mx-32 ">
            <div className="flex justify-center">
                <Link href={"/"} className="flex flex-row gap-5 mx-2 place-items-center">
                    < ArrowLeftIcon width={20} />
                    <p>Return</p>
                </Link>
            </div>
            <div className="text-3xl flex flex-col t-12 mt-6 mb-3">
                <center>
                    <h1>{articleData.title}</h1>
                    <p className="mx-12 text-sm">{articleData.date.toString()}</p>
                </center>
            </div>
            <article className="flex flex-col gap-3 text-m text-left pl-96 mt-6 tracking-wide " dangerouslySetInnerHTML={{__html: articleData.contentHTML }} />
        </section>
    )
}

export default Article;