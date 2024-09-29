import Link from "next/link"
import type { ArticleItem } from "../../types"

interface Props {
    category: string,
    articles: ArticleItem[]
}

const navButton = "bg-cBrown text-fWhite p-4 w-64 h-16 flex items-center justify-center rounded-lg hover:bg-vdBrown transition";

const ArticleItemList = ({category, articles}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <center><h2 className="text-3xl">{category}</h2></center>
            <div className="flex flex-col gap-2.5 text-lg">
                { articles.map((article, id) => (
                    <Link href={`/${article.id}`} className={navButton}>
                        {article.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList