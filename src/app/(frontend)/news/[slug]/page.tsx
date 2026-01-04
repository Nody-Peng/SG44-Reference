import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Calendar, FileText, Download, ExternalLink, Paperclip } from 'lucide-react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const revalidate = 60
export const dynamicParams = true

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'news',
    where: {
      slug: { equals: slug },
    },
  })

  if (!result.docs[0]) return notFound()
  const news = result.docs[0]

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/news"
          className="inline-flex items-center text-stone-500 hover:text-[#5F7161] mb-6 transition-colors font-medium"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          返回列表
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          {/* Header */}
          <div className="border-b border-stone-100 px-8 py-8 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-[#5F7161] bg-[#F0F4F1] px-2 py-1 rounded">
                {news.category}
              </span>
              <div className="flex items-center text-xs text-stone-400 font-mono">
                <Calendar size={12} className="mr-1" />
                {new Date(news.publishedDate).toLocaleDateString('zh-TW')}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
              {news.title}
            </h1>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="prose prose-stone prose-lg max-w-none text-stone-700">
              {news.content && <RichText data={news.content} />}
            </div>

            {/* 👇 新增：附件下載與相關連結區域 */}
            {news.relatedFiles && news.relatedFiles.length > 0 && (
              <div className="mt-12 p-6 bg-stone-50 rounded-xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <Paperclip size={20} className="text-[#5F7161]" />
                  相關附件與連結
                </h3>
                <ul className="space-y-3">
                  {news.relatedFiles.map((item, index) => {
                    // 判斷是檔案還是連結
                    if (item.type === 'file' && item.file && typeof item.file === 'object') {
                      // @ts-ignore: Payload type checking workaround
                      const fileUrl = item.file.url
                      return (
                        <li key={index}>
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200 hover:border-[#869D85] hover:shadow-sm transition-all group"
                          >
                            <div className="p-2 bg-[#F0F4F1] rounded text-[#5F7161]">
                              <Download size={18} />
                            </div>
                            <span className="font-medium text-stone-700 group-hover:text-[#5F7161] transition-colors">
                              {item.label}
                            </span>
                          </a>
                        </li>
                      )
                    } else if (item.type === 'link' && item.url) {
                      return (
                        <li key={index}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200 hover:border-[#869D85] hover:shadow-sm transition-all group"
                          >
                            <div className="p-2 bg-blue-50 rounded text-blue-600">
                              <ExternalLink size={18} />
                            </div>
                            <span className="font-medium text-stone-700 group-hover:text-blue-700 transition-colors">
                              {item.label}
                            </span>
                          </a>
                        </li>
                      )
                    }
                    return null
                  })}
                </ul>
              </div>
            )}

            {/* 底部大按鈕 (Action Button) */}
            {news.actionLink && (
              <div className="mt-10 pt-8 border-t border-stone-100 flex justify-center md:justify-start">
                <a
                  href={news.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5F7161] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4a584b] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <FileText size={20} />
                  {news.actionText || '前往查看'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
