// src/globals/Contact.ts
import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: '聯絡資訊',
  access: {
    read: () => true, // 允許所有人讀取 API
  },
  fields: [
    {
      name: 'title',
      label: '頁面標題',
      type: 'text',
      required: true,
      defaultValue: '聯絡秘書處',
    },
    {
      name: 'email',
      label: '電子郵件',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      label: '聯絡電話',
      type: 'text',
    },
    {
      name: 'address',
      label: '通訊地址',
      type: 'text',
    },
    {
      name: 'googleMapUrl',
      label: 'Google Map 地圖連結',
      type: 'text',
    },
  ],
}