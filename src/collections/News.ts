import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: { singular: '最新消息', plural: '最新消息列表' },
  admin: {
    group: '最新消息',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'showOnHomepage', '_status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
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
        description: '這會變成網址的一部分,例如 /news/call-for-papers',
      },
    },
    // ✨ 新增:首頁顯示開關
    {
      name: 'showOnHomepage',
      label: '顯示在首頁',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: '勾選後會顯示在首頁最新消息區(最多3則)',
      },
    },
    {
      name: 'category',
      label: '分類標籤',
      type: 'select',
      options: [
        { label: '重要公告', value: '重要公告' },
        { label: '徵稿資訊', value: '徵稿資訊' },
        { label: '會議議程', value: '會議議程' },
        { label: '註冊報名', value: '註冊報名' },
        { label: '榮譽榜單', value: '榮譽榜單' },
        { label: '一般消息', value: '一般消息' },
      ],
      defaultValue: '重要公告',
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
      type: 'richText',
      required: true,
    },
    {
      name: 'relatedFiles',
      label: '相關附件與連結',
      type: 'array',
      admin: {
        description: '可在此上傳 PDF、Word 檔或加入相關連結',
      },
      fields: [
        {
          name: 'type',
          label: '類型',
          type: 'select',
          options: [
            { label: '檔案下載 (PDF/Word)', value: 'file' },
            { label: '外部連結 (Link)', value: 'link' },
          ],
          defaultValue: 'file',
        },
        {
          name: 'label',
          label: '顯示名稱 (例如: 議程下載)',
          type: 'text',
          required: true,
        },
        {
          name: 'file',
          label: '上傳檔案',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'file',
          },
        },
        {
          name: 'url',
          label: '連結網址',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'link',
          },
        },
      ],
    },
    {
      name: 'actionLink',
      label: '底部大按鈕連結 (選填)',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: '適合放最重要的行動呼籲,如「前往報名表單」',
      },
    },
    {
      name: 'actionText',
      label: '按鈕文字',
      type: 'text',
      defaultValue: '前往查看',
      admin: {
        position: 'sidebar',
        condition: (data) => Boolean(data.actionLink),
      },
    },
  ],
}
