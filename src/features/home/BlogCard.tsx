import pin from '../../assets/flow1/icon-location.svg'
import type { BlogPost } from '../../mocks/blogs'
import './BlogCard.css'

/** One "Wild Blogs" card (Figma Insight). */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <div className="blog-card__body">
        <div className="blog-card__image">
          {post.images.map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
        </div>
        <div className="blog-card__contents">
          <div className="blog-card__text">
            <h3 className="blog-card__title t-body-medium">{post.title}</h3>
            <p className="blog-card__description t-body-sm">{post.description}</p>
          </div>
          <span className="blog-card__meta t-caption">
            <img src={pin} alt="" />
            {post.publishedAt}
          </span>
        </div>
      </div>
    </article>
  )
}
