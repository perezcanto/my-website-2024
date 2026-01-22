import glob from 'fast-glob'
import path from 'path'

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: string
  }
}

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string
): Promise<Array<MDXEntry<T>>> {
  const files = await glob('*/page.mdx', {
    cwd: path.join(process.cwd(), 'src/app', directory),
  })

  const entries = await Promise.all(
    files.map(async (filename) => {
      const route = filename.replace(/\/page\.mdx$/, '')
      const mod = await import(`@/app/${directory}/${route}/page.mdx`)
      const metadata = mod[metaName] as T

      return {
        ...metadata,
        metadata,
        href: `/${directory}/${route}`,
      }
    })
  )

  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}
