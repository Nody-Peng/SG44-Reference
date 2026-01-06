'use client'
import SectionTitle from '@/components/ui/SectionTitle'
import { TIMELINE_DATA } from '@/lib/constants'
import React, { useEffect, useRef } from 'react'

const TimelineSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nearestEventIndex = TIMELINE_DATA.findIndex((event) => !event.isPast)

    if (scrollContainerRef.current && nearestEventIndex !== -1) {
      const container = scrollContainerRef.current
      const items = container.querySelectorAll('[data-timeline-item]')

      if (items[nearestEventIndex]) {
        const item = items[nearestEventIndex] as HTMLElement
        const containerWidth = container.offsetWidth
        const itemLeft = item.offsetLeft
        const itemWidth = item.offsetWidth

        const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        })
      }
    }
  }, [])

  // ✨ 處理標題換行的函數
  const formatTitle = (title: string) => {
    return title.split('及').map((part, index, array) => (
      <React.Fragment key={index}>
        {part}
        {index < array.length - 1 && (
          <>
            及
            <br />
          </>
        )}
      </React.Fragment>
    ))
  }

  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-32 bg-stone-50/40 -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="重要時程" subtitle="Important Deadlines & Milestones" />

        <div className="relative mt-20">
          {/* 電腦版時間軸 (Desktop) */}
          <div className="hidden md:block">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="relative inline-flex min-w-full px-20">
                <div className="absolute top-[72px] left-0 right-0 h-0.5 bg-stone-100"></div>

                <div className="relative z-10 flex gap-8">
                  {TIMELINE_DATA.map((event, index) => (
                    <div
                      key={index}
                      data-timeline-item
                      className="flex flex-col items-center flex-shrink-0 w-48"
                    >
                      <div
                        className={`mb-8 transition-all duration-300 ${
                          event.isPast ? 'opacity-40' : 'opacity-100'
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold tracking-widest text-stone-400 bg-white px-2 uppercase whitespace-nowrap">
                          {event.date}
                        </span>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center transition-all duration-500 ${
                          event.isPast
                            ? 'bg-stone-300'
                            : 'bg-[#5F7161] ring-2 ring-stone-100 scale-110'
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>

                      <div
                        className={`mt-8 px-2 text-center transition-all duration-300 ${
                          event.isPast ? 'opacity-40' : 'opacity-100'
                        }`}
                      >
                        <h4 className="text-sm font-bold text-stone-800 leading-tight">
                          {formatTitle(event.title)}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-xs text-stone-400 font-mono">← 左右滑動查看更多 →</p>
            </div>
          </div>

          {/* 手機版時間軸 (Mobile) */}
          <div className="md:hidden relative px-4">
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-stone-100 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-16">
              {TIMELINE_DATA.map((event, index) => (
                <div key={index} className="relative flex items-center group">
                  <div className="relative z-10 flex-shrink-0 w-12 flex justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-[6px] border-white shadow-md flex items-center justify-center transition-all duration-500 ${
                        event.isPast ? 'bg-stone-300' : 'bg-[#5F7161] ring-2 ring-stone-50'
                      }`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div
                    className={`ml-6 flex-1 transition-all duration-300 ${
                      event.isPast ? 'opacity-40' : 'opacity-100'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-[0.2em] mb-1 ${
                          event.isPast ? 'text-stone-400' : 'text-[#869D85]'
                        }`}
                      >
                        {event.date}
                      </span>
                      <h4
                        className={`text-lg font-black tracking-tight ${
                          event.isPast ? 'text-stone-500 font-bold' : 'text-stone-800'
                        }`}
                      >
                        {formatTitle(event.title)}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default TimelineSection
