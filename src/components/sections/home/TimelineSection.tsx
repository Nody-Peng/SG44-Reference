"use client";
import { TIMELINE_DATA } from "@/lib/constants";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden">
      {/* 背景裝飾線 */}
      <div className="absolute top-1/2 left-0 w-full h-32 bg-stone-50/40 -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="重要時程"
          subtitle="Important Deadlines & Milestones"
        />

        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* 電腦版時間軸 (Desktop) */}
          <div className="hidden md:block">
            <div className="relative mb-20">
              {/* 背景長線 */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2"></div>

              <div className="relative z-10 grid grid-cols-5 gap-4">
                {TIMELINE_DATA.map((event, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`mb-8 transition-all duration-300 ${
                        event.isPast ? "opacity-40" : "opacity-100"
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold tracking-widest text-stone-400 bg-white px-2 uppercase">
                        {event.date}
                      </span>
                    </div>

                    {/* 雙圈節點設計 */}
                    <div
                      className={`w-8 h-8 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center transition-all duration-500 ${
                        event.isPast
                          ? "bg-stone-300"
                          : "bg-[#5F7161] ring-2 ring-stone-100"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    <div
                      className={`mt-8 px-2 text-center transition-all duration-300 ${
                        event.isPast ? "opacity-40" : "opacity-100"
                      }`}
                    >
                      <h4 className="text-sm font-bold text-stone-800 leading-tight">
                        {event.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 手機版時間軸 (Mobile) - 修正排版過歪的問題 */}
          <div className="md:hidden relative px-4">
            {/* 垂直背景線 - 固定在節點中心下方 */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-stone-100 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-16">
              {TIMELINE_DATA.map((event, index) => (
                <div key={index} className="relative flex items-center group">
                  {/* 左側節點: 參考圖示的雙圈設計 */}
                  <div className="relative z-10 flex-shrink-0 w-12 flex justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-[6px] border-white shadow-md flex items-center justify-center transition-all duration-500 ${
                        event.isPast
                          ? "bg-stone-300"
                          : "bg-[#5F7161] ring-2 ring-stone-50"
                      }`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* 右側內容 */}
                  <div
                    className={`ml-6 flex-1 transition-all duration-300 ${
                      event.isPast ? "opacity-40" : "opacity-100"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-[0.2em] mb-1 ${
                          event.isPast ? "text-stone-400" : "text-[#869D85]"
                        }`}
                      >
                        {event.date}
                      </span>
                      <h4
                        className={`text-lg font-black tracking-tight ${
                          event.isPast
                            ? "text-stone-500 font-bold"
                            : "text-stone-800"
                        }`}
                      >
                        {event.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
