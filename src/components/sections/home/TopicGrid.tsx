"use client";
import { TOPICS_DATA } from "@/lib/constants";
import * as Icons from "lucide-react";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const TopicGrid: React.FC = () => {
  return (
    <section id="topics" className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="論文徵稿主題"
          subtitle="Exploring the Frontiers of Spatial Information & Surveying (10 Major Tracks)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOPICS_DATA.map((topic) => {
            const IconComponent = (Icons as any)[topic.iconName] || Icons.Map;

            return (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-sm border border-stone-100 shadow-sm hover:border-[#869D85] hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-[#F0F4F1] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#5F7161] transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#5F7161] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-[#5F7161] transition-colors leading-tight">
                  {topic.title}
                </h3>
                <p className="text-stone-500 leading-relaxed text-xs">
                  {topic.description}
                </p>
                <div className="mt-4 w-6 h-0.5 bg-stone-100 group-hover:w-full group-hover:bg-[#869D85] transition-all duration-500"></div>
              </div>
            );
          })}

          {/* 特別論壇 Placeholder */}
          <div className="bg-stone-50 p-6 rounded-sm border border-dashed border-stone-300 flex flex-col items-center justify-center text-center">
            <Icons.Sparkles className="w-8 h-8 text-stone-400 mb-2" />
            <h3 className="text-lg font-bold text-stone-400">特別論壇</h3>
            <p className="text-xs text-stone-400">徵稿中 / 主題籌備中</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicGrid;
