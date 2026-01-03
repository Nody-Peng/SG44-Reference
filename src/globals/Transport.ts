import { GlobalConfig, Block } from 'payload'

// 1. 定義【純文字積木】：用來寫前言、備註
const ContentBlock: Block = {
  slug: 'content', // 這是積木的代號
  labels: { singular: '文字區塊', plural: '文字區塊' },
  fields: [
    {
      name: 'richText',
      label: '內容',
      type: 'richText',
      required: true,
    },
  ],
}

// 2. 定義【地圖積木】：只要貼 Google Embed URL
const MapBlock: Block = {
  slug: 'googleMap',
  labels: { singular: 'Google 地圖', plural: 'Google 地圖' },
  fields: [
    {
      name: 'embedUrl',
      label: 'Google Map 嵌入連結 (Embed URL)',
      type: 'text',
      required: true,
      admin: {
        description: '請至 Google Maps -> 分享 -> 嵌入地圖 -> 複製 src 裡面的網址',
      },
    },
    {
      name: 'height',
      label: '地圖高度 (px)',
      type: 'number',
      defaultValue: 450,
    },
  ],
}

// 3. 定義【交通卡片網格】：這是最漂亮的部分，讓他們新增多個交通方式
const TransportMethodsBlock: Block = {
  slug: 'transportGrid',
  labels: { singular: '交通方式列表', plural: '交通方式列表' },
  fields: [
    {
      name: 'title',
      label: '區塊標題 (例如: 如何抵達)',
      type: 'text',
    },
    {
      name: 'methods',
      label: '交通方式卡片',
      type: 'array', // 可以在這個區塊裡新增無限多個卡片
      minRows: 1,
      fields: [
        {
          name: 'type',
          label: '類型',
          type: 'select',
          options: [
            { label: '捷運 (MRT)', value: 'mrt' },
            { label: '公車 (Bus)', value: 'bus' },
            { label: '開車 (Car)', value: 'car' },
            { label: '步行 (Walk)', value: 'walk' },
          ],
          required: true,
        },
        {
          name: 'title',
          label: '標題 (例如: 搭乘捷運)',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: '詳細說明',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}

// 4. 組合起來變成 Transport Global
export const Transport: GlobalConfig = {
  slug: 'transport',
  label: '交通資訊頁面',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pageTitle',
      label: '頁面大標題',
      type: 'text',
      defaultValue: '交通資訊',
      required: true,
    },
    {
      name: 'layout', // 這是最重要的欄位！
      label: '頁面內容 (自由排版區)',
      type: 'blocks', // 啟用 Blocks 功能
      blocks: [
        ContentBlock,
        MapBlock,
        TransportMethodsBlock,
      ],
    },
  ],
}