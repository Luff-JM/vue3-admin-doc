# 目录结构

```sh
vue3-admin                        
├─ cli                            # 命令行工具          
├─ dist                           # 构建产物                  
├─ mock                           # mock 相关              
├─ public                         # public              
├─ src                            
│  ├─ api                         # api
│  │  └─ system                   
│  │     ├─ dto                   
│  │     │  └─ user.d.ts          
│  │     └─ user.ts               
│  ├─ assets                      # 静态资源
│  │  └─ images                   
│  │     ├─ default-avatar.png    
│  │     └─ logo.svg              
│  ├─ components                  # 组件             
│  ├─ constants                   # 常量         
│  ├─ design                      # 样式            
│  ├─ enums                       # 枚举值             
│  ├─ hooks                       # hooks   
│  ├─ layouts                     # 布局相关              
│  ├─ router                      # vue router              
│  ├─ settings                    # 配置目录   
│  ├─ store                       # pinia             
│  ├─ types                       # ts 类型            
│  ├─ utils                       # 工具函数                 
│  ├─ views                       # 页面       
│  ├─ App.vue                     
│  ├─ main.ts    
├─ .env                           # 环境变量
├─ .env.development               # 开发环境变量
├─ .env.production                # 生产环境变量
├─ .eslintrc.cjs                  # eslint 配置
├─ .prettierrc                    # prettier 配置
├─ index.html                     
├─ package.json                   
├─ pnpm-lock.yaml                 
├─ postcss.config.js              # postcss 配置
├─ tailwind.config.js             # tailwindcss 配置
├─ tsconfig.json                  
├─ tsconfig.node.json             
└─ vite.config.ts                 
```