import chevron from '../../assets/flow1/icon-chevron-right.svg'
import './SectionHeader.css'

/** Section title with a "View detail" link (New in your dex / Wild Blogs). */
export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title t-h4">{title}</h2>
      <button type="button" className="section-header__link t-caption">
        View detail
        <img src={chevron} alt="" />
      </button>
    </div>
  )
}
