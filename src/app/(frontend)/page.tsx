export const revalidate = 20

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/home/Hero'
import NewsSection from '@/components/sections/home/NewsSection'
import TimelineSection from '@/components/sections/home/TimelineSection'

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TimelineSection />
        <NewsSection />
        {/* <TopicGrid /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
