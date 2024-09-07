import Tags from '~/components/homepage/Tags'
import { BlogListLayout } from '~/layouts/BlogListLayout'
import type { BlogFrontMatter, TagsCount } from '~/types'

const Blog = ({ posts, tags }: { posts: BlogFrontMatter[]; tags: TagsCount }) => {
  return (
    <>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        The storage archives my work and blog posts in{' '}
        <span className="text-primary-700 dark:text-primary-300">
          developer relation, low-level engineering, algorithm design and life in general
        </span>{' '}
        <span>Use the tags or search below to filter content.</span>
      </p>
      {/* <Tags tags={tags} /> */}
      <BlogListLayout posts={posts} title="" />
    </>
  )
}

export default Blog
