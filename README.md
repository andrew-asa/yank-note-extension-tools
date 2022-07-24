# yank note 小工具

## 使用打开工具栏

## 选中要操作的文本进行操作
![img.png](https://raw.githubusercontent.com/andrew-asa/yank-note-extension-tools/master/resource/img.png)

### 使用已经编译好的插件
1. git clone 项目下来
2. 手动在插件目录建文件夹，参考其它插件目录把dist/文件夹下的两个文件拷贝过去


### 编译安装
1. 使用脚手架创建项目: yarn create yank-note-extension。包名建议以yank-note-extension- 开头。
2. 进入项目后，安装依赖: yarn install
3. 链接当前目录到 Yank Note 扩展目录: yarn run link-extension
4. 启动开发: yarn run dev
5. 刷新浏览器页面
6. 点击“工具” --> “扩展中心”，启用开发中的扩展
