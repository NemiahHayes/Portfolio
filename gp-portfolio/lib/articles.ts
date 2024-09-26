import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "../types"

const articleDirectory = path.join(process.cwd(), "articles")

const getSortedArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articleDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(articleDirectory, fileName)
        console.log(fullPath)

        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            category: matterResult.data.category,
            date: matterResult.data.date,
        }
    })

    return allArticlesData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if (dateOne.isBefore(dateTwo)) {
            return -1
        } else if (dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getCategoriseArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach(article => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = []
        }
        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articleDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHTML = processedContent.toString()

    return {
        id,
        contentHTML,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM DD YYYY")
    }
}