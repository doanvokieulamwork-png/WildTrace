import { StatusBar } from '../../components/StatusBar'
import { wildBlogs } from '../../mocks/blogs'
import { newInDex } from '../../mocks/dex'
import { BlogCard } from './BlogCard'
import { BottomTabBar } from './BottomTabBar'
import { DexCard } from './DexCard'
import { DiscoveryBanner } from './DiscoveryBanner'
import { HomeHeader } from './HomeHeader'
import { JourneyCard } from './JourneyCard'
import { SectionHeader } from './SectionHeader'
import './HomePage.css'

/** Home (shared by Flow 1–3). Figma 4022:17937. */
export function HomePage() {
  return (
    <div className="home">
      <div className="home__scroll">
        <StatusBar tone="dark" className="home__status-bar" />
        <HomeHeader />
        <main className="home__body">
          <div className="home__featured">
            <JourneyCard />
            <DiscoveryBanner />
          </div>
          <section className="home__section">
            <SectionHeader title="New in your dex" />
            <div className="home__slider">
              {newInDex.map((entry) => (
                <DexCard key={entry.id} entry={entry} />
              ))}
            </div>
          </section>
          <section className="home__section home__section--blogs">
            <SectionHeader title="Wild Blogs" />
            <div className="home__slider">
              {wildBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <div className="home__tab-bar">
        <BottomTabBar />
      </div>
    </div>
  )
}
