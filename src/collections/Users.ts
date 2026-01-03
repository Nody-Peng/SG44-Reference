import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'], // 建議加上 role 方便管理
  },
  // 🔒 安全設定：這段很重要，請務必加上！
  access: {
    // 1. 只有 Admin 可以進入後台面板
    admin: ({ req: { user } }) => user?.role === 'admin',
    // 2. 任何人都可以註冊
    create: () => true,
    // 3. 一般人只能看/改自己的資料
    read: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      if (user) return { id: { equals: user.id } }
      return false
    },
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      if (user) return { id: { equals: user.id } }
      return false
    },
    // 4. 只有 Admin 能刪除用戶
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: '顯示名稱',
    },
    {
      name: 'role',
      type: 'select',
      // 👇 修正重點：把 Reviewer 加回來，不然 TypeScript 會報錯
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Reviewer', value: 'reviewer' }, 
      ],
      defaultValue: 'user',
      required: true,
      // 🔒 只有 Admin 可以修改角色 (防止用戶自己把自己升級)
      access: {
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
  ],
}