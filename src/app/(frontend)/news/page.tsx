import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const revalidate = 60

export const metadata = {
  title: '最新消息 | SG44 測量及空間資訊研討會',
  description: 'SG44 研討會最新公告、徵稿資訊與議程更新。',
}

export default async function NewsIndexPage() {
  const payload = await getPayload({ config: configPromise })

  // 1. 撈取所有已發布的新聞
  const newsData = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    where: {
      _status: { equals: 'published' },
    },
  })

  const newsList = newsData.docs

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      {/* 標題區 */}
      <div className="bg-white border-b border-stone-200 mb-12">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2 tracking-tight">最新消息</h1>
          <p className="text-[#5F7161] text-lg font-medium">Latest News & Announcements</p>
          <div className="w-16 h-1 bg-[#5F7161] mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* 列表區 */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {newsList.length > 0 ? (
          newsList.map((item) => {
            const date = new Date(item.publishedDate)
            return (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="block bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-100 hover:shadow-md hover:border-[#869D85] transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* 日期 */}
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-center bg-stone-50 border border-stone-200 rounded-lg p-4 min-w-[90px] text-center">
                    <span className="text-3xl font-bold text-[#5F7161] leading-none">
                      {date.getDate()}
                    </span>
                    <span className="text-xs font-bold text-stone-500 uppercase mt-1">
                      {date.toLocaleString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xs text-stone-400 mt-1">{date.getFullYear()}</span>
                  </div>

                  {/* 內容 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-2.5 py-1 bg-[#F0F4F1] text-[#5F7161] text-xs font-bold rounded">
                        {item.category || '公告'}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-[#5F7161] transition-colors mb-3">
                      {item.title}
                    </h2>
                    <div className="flex items-center text-sm text-stone-400 font-medium group-hover:text-[#5F7161] mt-auto">
                      閱讀完整內容{' '}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        ) : (
          <div className="text-center py-20 text-stone-500">目前沒有最新消息</div>
        )}
      </div>
    </div>
  )
}
