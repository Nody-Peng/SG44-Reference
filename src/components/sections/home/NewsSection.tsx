import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import SectionTitle from '@/components/ui/SectionTitle'

export default async function NewsSection() {
  // 1. 初始化 Payload
  const payload = await getPayload({ config: configPromise })

  // 2. 抓取 News 資料 (只抓已發布的，按日期排序)
  const newsData = await payload.find({
    collection: 'news',
    limit: 5, 
    sort: '-publishedDate',
    where: {
      _status: { equals: 'published' },
    },
  })

  return (
    <section id="news" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="最新消息" subtitle="News & Announcements" />

        <div className="space-y-4">
          {/* 如果沒有資料的顯示 */}
          {newsData.docs.length === 0 && (
             <p className="text-center text-stone-500">目前沒有最新消息。</p>
          )}

          {newsData.docs.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.slug}`} // <--- 關鍵：跳轉到內頁
              className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between bg-white border border-stone-200 p-6 rounded-sm hover:border-[#869D85] hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase text-[#5F7161] bg-[#F0F4F1] px-2 py-0.5 rounded tracking-widest">
                    {news.category || '公告'}
                  </span>
                  <span className="text-xs text-stone-400 font-mono tracking-tighter">
                    {/* 格式化日期 */}
                    {new Date(news.publishedDate).toLocaleDateString('zh-TW')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-[#5F7161] transition-colors">
                  {news.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 flex items-center text-[#5F7161] text-sm font-semibold md:opacity-0 group-hover:opacity-100 transition-opacity">
                查看詳情
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* 移除了原本的 Modal 程式碼，因為現在是跳轉頁面 */}
    </section>
  )
}