# 项目 UI 组件系统更新

## 更改摘要

本次更新将项目从直接使用 Radix UI 组件转换为使用标准的 shadcn/ui 组件系统。

### 主要变更

1. **依赖包更新**
   - 移除了所有不必要的 Radix UI 直接依赖
   - 保留了 `@radix-ui/react-slot` (shadcn/ui 需要)
   - 更新了 framer-motion 到最新版本

2. **组件系统**
   - 创建了标准的 shadcn/ui 组件：
     - `Button` - 按钮组件
     - `Card` - 卡片组件（带 Header, Content, Footer, Title, Description）
     - `Input` - 输入框组件
     - `Textarea` - 文本域组件
     - `Badge` - 徽章组件

3. **组件配置**
   - 添加了 `components.json` 配置文件
   - 更新了 CSS 变量以支持 shadcn/ui 主题系统
   - 创建了组件索引文件 `components/ui/index.ts`

4. **代码更新**
   - 更新了 `Hero` 组件使用新的 Button 和 Card 组件
   - 更新了成本计算器页面使用新的 UI 组件
   - 修复了所有 TypeScript 类型错误

### 新的 UI 组件特性

- **一致的设计系统**: 所有组件现在遵循统一的设计规范
- **主题支持**: 完整的深色/浅色主题支持
- **可访问性**: 内置的无障碍功能
- **类型安全**: 完整的 TypeScript 支持
- **可定制性**: 通过 CSS 变量和 Tailwind CSS 类进行样式定制

### 使用方法

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';

// 使用 Button 组件
<Button variant="default" size="lg">
  Get Started
</Button>

// 使用 Card 组件
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>

// 使用 Input 组件
<Input 
  type="email" 
  placeholder="Enter your email" 
  className="w-full"
/>
```

### 后续工作

建议在其他页面和组件中也逐步采用这些新的 UI 组件，以保持整个项目的一致性。所有现有的样式和功能都得到了保留，同时提供了更好的开发体验和维护性。
