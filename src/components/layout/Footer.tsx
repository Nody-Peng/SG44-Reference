"use client";
import { CONFERENCE_INFO } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#485649] text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Brand Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#869D85] text-white flex items-center justify-center rounded-sm">
                <span className="font-bold text-xl">SG</span>
              </div>
              <h3 className="text-white text-2xl font-black tracking-tight leading-none uppercase">
                SG44 測量及空間資訊研討會
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md">
              第44屆測量及空間資訊研討會將匯聚專家學者，共同探討空間資訊在智測國土與韌性未來中的關鍵技術與應用創新。
            </p>
            <div className="pt-4 space-y-2 border-l-2 border-[#5F7161] pl-4">
              <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">
                主辦單位
              </p>
              <p className="text-sm text-stone-200">
                {CONFERENCE_INFO.organizer}
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">
              聯絡秘書處
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#869D85] shrink-0" />
                <div>
                  <span className="block text-stone-400 text-xs uppercase font-bold mb-1">
                    電子郵件
                  </span>
                  <a
                    href="mailto:sg44@nccu.edu.tw"
                    className="text-sm text-stone-200 hover:text-white transition-colors"
                  >
                    sg44@nccu.edu.tw
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#869D85] shrink-0" />
                <div>
                  <span className="block text-stone-400 text-xs uppercase font-bold mb-1">
                    聯絡電話
                  </span>
                  <span className="block text-sm text-stone-200">
                    02-2939-3091 分機 50641
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#869D85] shrink-0" />
                <div>
                  <span className="block text-stone-400 text-xs uppercase font-bold mb-1">
                    通訊地址
                  </span>
                  <span className="block text-sm text-stone-200">
                    116 台北市文山區指南路二段64號 (綜合院館)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5F7161] mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
          <p>© 2025 SG44 測量及空間資訊研討會 籌備委員會.</p>
          <div className="flex gap-6">
            <span className="cursor-not-allowed">隱私政策</span>
            <span className="cursor-not-allowed">網站聲明</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
