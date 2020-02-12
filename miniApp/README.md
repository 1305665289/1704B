### 原生小程序

### 作业：实现一个简单的日期计算器
需要用到组件：picker mode=data

### 小程序路由

#### 跳转方式
- switchTab 切换底部或者顶部tab的唯一方法
- reLaunch 重新加载当前小程序的唯一方法
- navigateTo 跳转页面，相当于push，前一个页面不动，当前页面进栈
- redirectTo 跳转页面，相当于replace，前一个页面出栈，当前页面进栈
- navigateBack 返回上一页，当前页面出栈

#### 触发的生命周期
- 进栈时触发 onLoad, onReady, onShow
- 出栈时触发 onHide, onUnload
- 如果没有进出栈，页面显示触发 onShow
- 如果没有进出栈，页面隐藏触发 onHide