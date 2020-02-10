### 腾讯新冠肺炎病毒传播H5

- 技术架构
    - react
    - typescript
    - axios+jsonp
    - bizcharts
    - highchart map

- 功能拆分
    - [x] 头部整体数据
    - [x] 地图显示全国疫情分布
    - [x] 图表显示疫情发展趋势
    - [x] 疫情最新进展
    - [x] 各个省份疫情最新消息
    - [x] 定点医院查找
    - [x] 消息辟谣
    - [x] 防护知识
    - [ ] Canvas合成图片
    - [ ] 微信和其他APP内的分享传播
    - [x] 打包上线

- 打包上线
    - 代理的切换，三种跨域情况上线处理
        - CORS和JSONP都不用处理，只需要把测试环境地址改成线上环境地址
        - Proxy在线上不能使用，需要服务端做反向代理(nginx，appache，tomcat)等专业服务器
    - 配置打包后资源的加载路径，修改package.json里面的homepage（/1704B/[your name]/txxg）为部署在服务器上的相对根目录的路径即可
    - 使用XFTP工具，把打包后的静态资源传到项目目录即可