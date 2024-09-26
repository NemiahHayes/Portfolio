import Link from "next/link";
import { getCategoriseArticles } from "../../lib/articles";
import ArticleItemList from "../components/articlelistitem"

export default function Home() {
  const articles = getCategoriseArticles();

  console.log(articles);
  return (
    <main>
      <div className="min-h-screen mt-16">
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-24">
          {articles != null && Object.keys(articles).map(article => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
