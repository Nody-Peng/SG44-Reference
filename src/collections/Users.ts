import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // --- 新增以下這段 ---
    {
      name: 'name',
      type: 'text',
      label: '顯示名稱', // 您可以在後台看到的欄位名稱
    },
    {
      name: 'role',
      type: 'select', // 通常角色是用選單，如果您的舊資料是純文字，也可以改成 'text'
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user', // 設定預設值
      // 如果您的資料庫裡原本的 role 欄位是純文字，
      // 請將上面的 type 改為 'text'，並拿掉 options
    },
    // ------------------
  ],
}