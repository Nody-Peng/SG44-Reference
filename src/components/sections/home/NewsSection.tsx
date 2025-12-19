"use client";
import { NEWS_DATA } from "@/lib/constants";
import { NewsItem } from "@/lib/types";
import { ChevronRight, FileText, Mail, Phone, X } from "lucide-react";
import React, { useState } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="最新消息" subtitle="News & Announcements" />

        <div className="space-y-4">
          {NEWS_DATA.map((news) => (
            <button
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between bg-white border border-stone-200 p-6 rounded-sm hover:border-[#869D85] hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase text-[#5F7161] bg-[#F0F4F1] px-2 py-0.5 rounded tracking-widest">
                    {news.category}
                  </span>
                  <span className="text-xs text-stone-400 font-mono tracking-tighter">
                    {news.date}
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
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Popup Overlay */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-stone-100 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#5F7161] bg-[#F0F4F1] px-2 py-1 rounded">
                  {selectedNews.category}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  {selectedNews.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-1 hover:bg-stone-100 rounded-full text-stone-400 hover:text-stone-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 border-b pb-4">
                {selectedNews.title}
              </h2>

              <div className="prose prose-stone max-w-none">
                <div className="whitespace-pre-wrap text-stone-700 leading-relaxed text-sm md:text-base">
                  {selectedNews.content}
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-10 p-6 bg-[#F8FAF9] rounded-lg border border-[#E2E8E4] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#5F7161] rounded text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-800">
                      籌備會報名表單
                    </p>
                    <p className="text-xs text-stone-500">
                      請於 12/26 (五) 中午 12:00 前完成
                    </p>
                  </div>
                </div>
                <a
                  href="https://forms.gle/b5ZzPh7sxNj1S5G67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5F7161] text-white px-8 py-2.5 rounded shadow-sm hover:bg-[#4a584b] transition-colors font-bold text-sm"
                >
                  前往填寫 Google 表單
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-50 px-8 py-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <Mail size={14} className="text-[#869D85]" />
                <span>sg44@nccu.edu.tw</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <Phone size={14} className="text-[#869D85]" />
                <span>02-29393091 分機 50641</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
