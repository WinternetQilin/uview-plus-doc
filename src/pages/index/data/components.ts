export interface ComponentItem {
  name: string
  path: string
  title: string
}

export interface ComponentGroup {
  title: string
  items: ComponentItem[]
}

export const componentGroups: ComponentGroup[] = [
  {
    title: '新增组件',
    items: [
      { name: 'cateTab', path: 'cateTab.html', title: 'CateTab 垂直TAB' },
      { name: 'qrcode', path: 'qrcode.html', title: 'Qrcode 二维码' },
      { name: 'table', path: 'table.html', title: 'Table 表格' },
      { name: 'table2', path: 'table2.html', title: 'Table 表格2' },
      { name: 'pagination', path: 'pagination.html', title: 'Pagination 分页器' },
      { name: 'tree', path: 'tree.html', title: 'Tree 树形组件' },
      { name: 'cityLocate', path: 'cityLocate.html', title: 'CityLocate 城市定位选择' },
      { name: 'title', path: 'title.html', title: 'Title 标题' },
      { name: 'dragsort', path: 'dragsort.html', title: 'Dragsort 拖拽排序' },
      { name: 'pullRefresh', path: 'pullRefresh.html', title: 'PullRefresh 下拉刷新' },
      { name: 'virtualList', path: 'virtualList.html', title: 'VirtualList 虚拟列表' },
      { name: 'barcode', path: 'barcode.html', title: 'Barcode 条形码' },
      { name: 'cropper', path: 'cropper.html', title: 'Cropper 图片裁剪' },
      { name: 'signature', path: 'signature.html', title: 'Signature 签名' },
      { name: 'markdown', path: 'markdown.html', title: 'Markdown 文本解析' },
      { name: 'poster', path: 'poster.html', title: 'Poster 海报生成' },
      { name: 'shortVideo', path: 'shortVideo.html', title: 'ShortVideo 短视频' },
      { name: 'colorPicker', path: 'colorPicker.html', title: 'ColorPicker 颜色选择器' },
      { name: 'coupon', path: 'coupon.html', title: 'Coupon 优惠券' },
      { name: 'popover', path: 'popover.html', title: 'Popover 弹窗提示' },
      { name: 'pdfReader', path: 'pdfReader.html', title: 'PDF阅读器' },
      { name: 'goodsSku', path: 'goodsSku.html', title: 'GoodsSku 商品规格选择' },
      { name: 'cascader', path: 'cascader.html', title: 'Cascader 级联选择器' },
      { name: 'choose', path: 'choose.html', title: 'Choose 选择器' },
    ],
  },
  {
    title: '基础组件',
    items: [
      { name: 'color', path: 'color.html', title: 'Color 色彩' },
      { name: 'icon', path: 'icon.html', title: 'Icon 图标' },
      { name: 'image', path: 'image.html', title: 'Image 图片' },
      { name: 'button', path: 'button.html', title: 'Button 按钮' },
      { name: 'text', path: 'text.html', title: 'Text 文本' },
      { name: 'layout', path: 'layout.html', title: 'Layout 布局' },
      { name: 'cell', path: 'cell.html', title: 'Cell 单元格' },
      { name: 'badge', path: 'badge.html', title: 'Badge 徽标数' },
      { name: 'tag', path: 'tag.html', title: 'Tag 标签' },
      { name: 'loadingIcon', path: 'loadingIcon.html', title: 'LoadingIcon 加载动画' },
      { name: 'loadingPage', path: 'loadingPage.html', title: 'LoadingPage 加载页' },
    ],
  },
  {
    title: '表单组件',
    items: [
      { name: 'form', path: 'form.html', title: 'Form 表单' },
      { name: 'calendar', path: 'calendar.html', title: 'Calendar 日历' },
      { name: 'keyboard', path: 'keyboard.html', title: 'Keyboard 键盘' },
      { name: 'select', path: 'select.html', title: 'Select 经典下拉框' },
      { name: 'picker', path: 'picker.html', title: 'Picker 选择器' },
      { name: 'datetimePicker', path: 'datetimePicker.html', title: 'DatetimePicker 选择器' },
      { name: 'rate', path: 'rate.html', title: 'Rate 评分' },
      { name: 'search', path: 'search.html', title: 'Search 搜索' },
      { name: 'numberBox', path: 'numberBox.html', title: 'NumberBox 步进器' },
      { name: 'upload', path: 'upload.html', title: 'Upload 上传' },
      { name: 'code', path: 'code.html', title: 'Code 验证码输入框' },
      { name: 'input', path: 'input.html', title: 'Input 输入框' },
      { name: 'textarea', path: 'textarea.html', title: 'Textarea 文本域' },
      { name: 'checkbox', path: 'checkbox.html', title: 'Checkbox 复选框' },
      { name: 'radio', path: 'radio.html', title: 'Radio 单选框' },
      { name: 'switch', path: 'switch.html', title: 'Switch 开关选择器' },
      { name: 'slider', path: 'slider.html', title: 'Slider 滑动选择器' },
      { name: 'album', path: 'album.html', title: 'Album 相册' },
    ],
  },
  {
    title: '数据组件',
    items: [
      { name: 'list', path: 'list.html', title: 'List 列表' },
      { name: 'virtualList', path: 'virtualList.html', title: 'VirtualList 虚拟列表' },
      { name: 'lineProgress', path: 'lineProgress.html', title: 'LineProgress 线形进度条' },
      { name: 'countDown', path: 'countDown.html', title: 'CountDown 倒计时' },
      { name: 'countTo', path: 'countTo.html', title: 'CountTo 数字滚动' },
    ],
  },
  {
    title: '反馈组件',
    items: [
      { name: 'tooltip', path: 'tooltip.html', title: 'Tooltip 长按提示' },
      { name: 'popover', path: 'popover.html', title: 'Popover 弹窗提示' },
      { name: 'actionSheet', path: 'actionSheet.html', title: 'ActionSheet 操作菜单' },
      { name: 'alert', path: 'alert.html', title: 'Alert 警告提示' },
      { name: 'toast', path: 'toast.html', title: 'Toast 消息提示' },
      { name: 'noticeBar', path: 'noticeBar.html', title: 'NoticeBar 滚动通知' },
      { name: 'notify', path: 'notify.html', title: 'Notify 消息提示' },
      { name: 'swipeAction', path: 'swipeAction.html', title: 'SwipeAction 滑动单元格' },
      { name: 'collapse', path: 'collapse.html', title: 'Collapse 折叠面板' },
      { name: 'popup', path: 'popup.html', title: 'Popup 弹出层' },
      { name: 'modal', path: 'modal.html', title: 'Modal 模态框' },
      { name: 'copy', path: 'copy.html', title: 'Copy 复制' },
    ],
  },
  {
    title: '布局组件',
    items: [
      { name: 'scrollList', path: 'scrollList.html', title: 'ScrollList 横向滚动列表' },
      { name: 'line', path: 'line.html', title: 'Line 线条' },
      { name: 'card', path: 'card.html', title: 'Card 卡片' },
      { name: 'overlay', path: 'overlay.html', title: 'Overlay 遮罩层' },
      { name: 'noNetwork', path: 'noNetwork.html', title: 'NoNetwork 无网络提示' },
      { name: 'grid', path: 'grid.html', title: 'Grid 宫格布局' },
      { name: 'swiper', path: 'swiper.html', title: 'Swiper 轮播图' },
      { name: 'skeleton', path: 'skeleton.html', title: 'Skeleton 骨架屏' },
      { name: 'sticky', path: 'sticky.html', title: 'Sticky 吸顶' },
      { name: 'waterfall', path: 'waterfall.html', title: 'Waterfall 瀑布流' },
      { name: 'box', path: 'box.html', title: 'Box 盒子' },
      { name: 'divider', path: 'divider.html', title: 'Divider 分割线' },
    ],
  },
  {
    title: '导航组件',
    items: [
      { name: 'dropdown', path: 'dropdown.html', title: 'Dropdown 下拉菜单' },
      { name: 'tabbar', path: 'tabbar.html', title: 'Tabbar 底部导航栏' },
      { name: 'backTop', path: 'backTop.html', title: 'BackTop 返回顶部' },
      { name: 'navbar', path: 'navbar.html', title: 'Navbar 自定义导航栏' },
      { name: 'navbarMini', path: 'navbarMini.html', title: 'NavbarMini 迷你导航栏' },
      { name: 'tabs', path: 'tabs.html', title: 'Tabs 标签' },
      { name: 'subsection', path: 'subsection.html', title: 'Subsection 分段器' },
      { name: 'indexList', path: 'indexList.html', title: 'IndexList 索引列表' },
      { name: 'steps', path: 'steps.html', title: 'Steps 步骤条' },
      { name: 'empty', path: 'empty.html', title: 'Empty 内容为空' },
    ],
  },
  {
    title: '其他组件',
    items: [
      { name: 'parse', path: 'parse.html', title: 'Parse 富文本解析器' },
      { name: 'codeInput', path: 'codeInput.html', title: 'CodeInput 验证码输入' },
      { name: 'loadMore', path: 'loadMore.html', title: 'LoadMore 加载更多' },
      { name: 'readMore', path: 'readMore.html', title: 'ReadMore 展开阅读更多' },
      { name: 'lazyLoad', path: 'lazyLoad.html', title: 'LazyLoad 图片懒加载' },
      { name: 'gap', path: 'gap.html', title: 'Gap 间隔槽' },
      { name: 'avatar', path: 'avatar.html', title: 'Avatar 头像' },
      { name: 'link', path: 'link.html', title: 'Link 超链接' },
      { name: 'transition', path: 'transition.html', title: 'Transition 动画' },
    ],
  },
]

export const guideItems: ComponentItem[] = [
  { name: 'intro', path: 'intro.html', title: '介绍' },
  { name: 'install', path: 'install.html', title: '安装' },
  { name: 'setting', path: 'setting.html', title: '配置' },
  { name: 'quickstart', path: 'quickstart.html', title: '快速上手' },
  { name: 'common', path: 'common.html', title: '内置样式' },
  { name: 'feature', path: 'feature.html', title: '注意事项' },
  { name: 'diff1.x', path: 'diff1.x.html', title: '对比1.X' },
  { name: 'changelog', path: 'changelog.html', title: '更新日志' },
  { name: 'changeGuide', path: 'changeGuide.html', title: '升级指南' },
]

export const allComponents: ComponentItem[] = componentGroups.flatMap(group => group.items)
