这是一个基于 Next.js 的 web 应用，可供用户查询并操作自己的联系人列表。主要包含下列几项功能：

- 展示联系人列表；
- 搜索联系人；
- 搜索联系人结果列表；
- 联系人详情；

## 快速开始

### 本地运行

开始前请先确保你的本地环境中安装了 [Nodejs](https://nodejs.org)(v16.14.2+) 运行环境。

clone 仓库代码到本地：

```bash
git clone git@github.com:cyzhao183/my-contacts.git
```

安装 npm 依赖

```bash
cd my-contacts && pnpm i
```

依赖安装完成后，运行下面的命令来在本地运行此项目(建议使用 pnpm)：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

然后打开浏览器访问 [http://localhost:3000](http://localhost:3000)，即可看到项目在本地运行的情况。

### 通过 Vercel 访问

你也可以通过在 Vercel 部署的地址：[https://my-contacts-eyo5.vercel.app/contact](https://my-contacts-eyo5.vercel.app/contact)来访问本项目的在线实例。

## 项目说明

本项目主要包含 web 端和 h5 端,

- API 接口层采用 mockjs 生成 mock 数据；
- 通过 px2rem 插件和计算 dpr 相关逻辑支持高分屏下的正常显示;

### web 端

页面布局为左右布局
左侧包含搜索框、联系人列表，搜索结果（有输入搜索内容时）
右侧显示已选择的用户信息

### h5 端

页面包含搜索框、联系人列表，搜索结果（有输入搜索内容时）以及用户信息页

## 代码结构

本项目代码结构主要分为三层：

### View 层

- 包含 pages 和 components 两部分；
- 负责处理用户的输入，进行校验并展示逻辑处理后的内容；
- 负责处理页面交互逻辑，例如页面跳转、显示弹窗、滚动加载等；

### 业务逻辑层

- 包含 modules 目录下的所有 .class 文件中的业务类；
- 负责处理项目中的业务逻辑，包括 Google 实例初始化、用户身份校验等；
- 负责处理 View 层获取到的用户输入数据，将其转化后提交给 API 层与后端进行交互；
- 负责对后端接口返回的数据进行处理，转换为符合前端逻辑的数据格式，并做好数据封装之后提供给 View 层使用；

### API 层

- 包含 modules 目录下的所有 .api 文件中的接口函数；
- 定义后端接口请求参数和返回值的字段类型；
- 与后端接口进行交互，对获取到的数据进行预处理，并将预处理后的数据提交给业务逻辑层进行进一步的业务处理；

## 未来可优化的点

- 虚拟列表
- 支持暗黑模式
- 定义一套完善的 css token 用于不同尺寸屏幕和场景下的样式替换
