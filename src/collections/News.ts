import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', '_status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true, // 公開讀取
  },
  fields: [
    {
      name: 'title',
      label: '標題',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: '網址代稱 (Slug)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: '這會變成網址的一部分，例如 /news/2025-signup',
      },
    },
    {
      name: 'category',
      label: '分類標籤',
      type: 'select',
      options: [
        { label: '公告', value: '公告' },
        { label: '活動', value: '活動' },
        { label: '新聞', value: '新聞' },
      ],
      defaultValue: '公告',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      label: '發布日期',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      label: '詳細內容',
      type: 'richText', // 支援粗體、連結、列表的編輯器
      required: true,
    },
    // --- 以下是針對您 UI 中 "Google 表單" 按鈕設計的選填欄位 ---
    {
      name: 'actionLink',
      label: '行動呼籲連結 (例如: Google 表單網址)',
      type: 'text',
      admin: {
        description: '如果有填寫，文章底部會出現綠色的按鈕',
      },
    },
    {
      name: 'actionText',
      label: '按鈕文字',
      type: 'text',
      defaultValue: '前往填寫表單',
      admin: {
        condition: (data) => Boolean(data.actionLink), // 只有填了連結才顯示這個欄位
      },
    },
  ],
}