import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Bus, Car, MapPin, Train, Footprints } from 'lucide-react' // 需要安裝 lucide-react

// --- 這裡定義各個積木的 UI 元件 (實際專案建議拆分到 components 資料夾) ---

// 1. 文字積木元件
const ContentBlock = ({ data }: { data: any }) => (
  <div className="prose prose-stone max-w-none mb-12">
    <RichText data={data.richText} />
  </div>
)

// 2. 地圖積木元件
const MapBlock = ({ data }: { data: any }) => (
  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-stone-200 mb-12 bg-stone-100">
    <iframe
      src={data.embedUrl}
      width="100%"
      height={data.height || 450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
)

// 3. 交通卡片網格元件 (這裡負責變漂亮！)
const TransportGridBlock = ({ data }: { data: any }) => {
  // 根據類型對應 icon
  const getIcon = (type: string) => {
    switch (type) {
      case 'mrt': return <Train className="w-8 h-8 text-white" />
      case 'bus': return <Bus className="w-8 h-8 text-white" />
      case 'car': return <Car className="w-8 h-8 text-white" />
      case 'walk': return <Footprints className="w-8 h-8 text-white" />
      default: return <MapPin className="w-8 h-8 text-white" />
    }
  }

  return (
    <div className="mb-12">
      {data.title && (
        <h2 className="text-2xl font-bold text-stone-800 mb-6 border-l-4 border-[#5F7161] pl-4">
          {data.title}
        </h2>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.methods?.map((item: any, index: number) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 hover:shadow-md hover:border-[#869D85] transition-all duration-300">
            <div className="w-14 h-14 bg-[#5F7161] rounded-full flex items-center justify-center mb-4 shadow-sm">
              {getIcon(item.type)}
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- 主頁面 ---

export default async function TransportPage() {
  const payload = await getPayload({ config: configPromise })

  // 抓取 Global 資料
  const transportData = await payload.findGlobal({
    slug: 'transport',
  })

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* 頁面大標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">
            {transportData.pageTitle}
          </h1>
          <div className="w-24 h-1 bg-[#5F7161] mx-auto rounded-full"></div>
        </div>

        {/* 核心邏輯：遍歷 layout 陣列，渲染對應的積木 */}
        {transportData.layout?.map((block: any, index: number) => {
          // block.blockType 是 Payload 自動產生的欄位，對應我们在 Config 寫的 slug
          switch (block.blockType) {
            case 'content':
              return <ContentBlock key={index} data={block} />
            case 'googleMap':
              return <MapBlock key={index} data={block} />
            case 'transportGrid':
              return <TransportGridBlock key={index} data={block} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}