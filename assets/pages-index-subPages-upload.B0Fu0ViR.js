import{_ as r}from"./CodeBlock.C3t72IAG.js";import{s as g,a as o,w as a,b as s,f as x,g as l,i as y,u as t,j as c,k as e}from"./index-Bt5U6C3y.js";const p={};function m(h,_){const n=c,d=y,i=r,u=s("layout-default-uni"),f=s("global-ku-root");return x(),o(f,null,{default:a(()=>[l(u,null,{default:a(()=>[l(d,{class:"upload-page"},{default:a(()=>[l(d,{class:"theme-default-content content__default"},{default:a(()=>[l(n,{id:"upload-上传"},{default:a(()=>[l(n,{href:"upload.html#upload-上传",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" Upload 上传 ")]),_:1}),l(n,null,{default:a(()=>[e("该组件用于上传图片场景")]),_:1}),l(n,{id:"平台差异说明"},{default:a(()=>[l(n,{href:"upload.html#平台差异说明",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(n,{id:"基础用法"},{default:a(()=>[l(n,{href:"upload.html#基础用法",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 基础用法 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("可以通过设置"),t("code",null,"fileList"),e("参数(数组，元素为对象)，显示预置的图片。其中元素的"),t("code",null,"url"),e("属性为图片路径")]),_:1})]),_:1}),l(i,{code:`<template>
	<up-upload
		:fileList="fileList1"
		@afterRead="afterRead"
		@delete="deletePic"
		name="1"
		multiple
		:maxCount="10"
	>
	</up-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList1 = ref([]);

// 删除图片
const deletePic = (event) => {
  fileList1.value.splice(event.index, 1);
};

// 新增图片
const afterRead = async (event) => {
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  let fileListLen = fileList1.value.length;
  lists.map((item) => {
    fileList1.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = fileList1.value[fileListLen];
    fileList1.value.splice(fileListLen, 1, {
      ...item,
      status: 'success',
      message: '',
      url: result,
    });
    fileListLen++;
  }
};

const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    let text = uni.uploadFile({
      url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
      filePath: url,
      name: 'file',
      formData: {
        user: 'test',
      },
      success: (res) => {
        setTimeout(() => {
          resolve(res.data.data);
        }, 1000);
      },
    });
  });
};
<\/script>`,language:"vue",title:"基础用法"}),l(n,{id:"读取前处理程序"},{default:a(()=>[l(n,{href:"upload.html#读取前处理程序",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 读取前处理程序"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.20")]),_:1})]),_:1}),l(i,{code:`<up-upload
    :useBeforeRead="true"
    @beforeRead="beforeRead"
>
</up-upload>

<script setup>
const beforeRead = async (event) => {
    // 返回值为 true 时，会进行图片上传，返回 false 时，不进行上传
    // 可在此处添加业务逻辑，如图片大小限制、类型校验等
    return true
}
<\/script>`,language:"vue",title:"读取前处理程序"}),l(n,{id:"上传视频"},{default:a(()=>[l(n,{href:"upload.html#上传视频",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 上传视频 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("通过设置"),t("code",null,"accept='video'"),e("属性，将上传改为视频上传。")]),_:1})]),_:1}),l(i,{code:`<up-upload
    accept="video"
    :fileList="videoList"
    @afterRead="videoAfterRead"
>
</up-upload>`,language:"vue",title:"上传视频"}),l(n,{id:"文件预览"},{default:a(()=>[l(n,{href:"upload.html#文件预览",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 文件预览 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("通过设置"),t("code",null,':previewFullImage="true"'),e("属性，达到文件预览的目的。")]),_:1})]),_:1}),l(i,{code:`<up-upload
    :previewFullImage="true"
    :fileList="fileList"
    @click-preview="clickPreview"
>
</up-upload>`,language:"vue",title:"文件预览"}),l(n,{id:"隐藏上传按钮"},{default:a(()=>[l(n,{href:"upload.html#隐藏上传按钮",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 隐藏上传按钮 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("上传数量等于"),t("code",null,"maxCount"),e("所规定的数据时，隐藏上传按钮。")]),_:1})]),_:1}),l(i,{code:`<up-upload
    :fileList="fileList"
    :maxCount="3"
>
</up-upload>`,language:"vue",title:"隐藏上传按钮"}),l(n,{id:"限制上传数量"},{default:a(()=>[l(n,{href:"upload.html#限制上传数量",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 限制上传数量 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("同上，规定"),t("code",null,"maxCount"),e("的数据时。")]),_:1})]),_:1}),l(i,{code:`<up-upload
    :maxCount="5"
>
</up-upload>`,language:"vue",title:"限制上传数量"}),l(n,{id:"自定义上传样式"},{default:a(()=>[l(n,{href:"upload.html#自定义上传样式",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 自定义上传样式 ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("添加"),t("code",null,"image"),e("以自定义上传样式，达到身份证，银行卡等不同场景需求。")]),_:1})]),_:1}),l(i,{code:`<up-upload :image="idCardImg">
    <view slot="trigger">
        <image src="/static/idcard.png" mode="aspectFit" />
    </view>
</up-upload>`,language:"vue",title:"自定义上传样式"}),l(n,{id:"自动上传模式-服务器本机"},{default:a(()=>[l(n,{href:"upload.html#自动上传模式-服务器本机",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 自动上传模式(服务器本机) ")]),_:1}),l(d,null,{default:a(()=>[l(d,null,{default:a(()=>[e("自动上传可以大幅减少代码量，通过配置自动上传达到只写template很少的代码即可完成上传功能。")]),_:1}),l(d,null,{default:a(()=>[e("默认自动上传local模式要求后端返回格式为"),t("code",null,'{"code": 200, "data": {"url": "xxx"}}')]),_:1})]),_:1}),l(n,{id:"示例"},{default:a(()=>[l(n,{href:"upload.html#示例",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" 示例 ")]),_:1}),l(i,{code:`<up-upload
    :autoUpload="true"
    :fileList="fileList"
    name="file"
    :maxCount="5"
>
</up-upload>`,language:"vue",title:"自动上传模式"}),l(n,{id:"api"},{default:a(()=>[l(n,{href:"upload.html#api",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" API ")]),_:1}),l(n,{id:"props"},{default:a(()=>[l(n,{href:"upload.html#props",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," accept "),t("td",{style:{"text-align":"left"}},[e(" 接受的文件类型，"),t("code",null,"file"),e("只支持"),t("code",null,"H5"),e("（只有微信小程序才支持把accept配置为all、media） ")]),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," image "),t("td",{style:{"text-align":"left"}}," all | media | image | file | video ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," capture "),t("td",{style:{"text-align":"left"}}," 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 "),t("td",{style:{"text-align":"left"}}," String | Array "),t("td",{style:{"text-align":"left"}}," ['album', 'camera'] "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," compressed "),t("td",{style:{"text-align":"left"}}," 当accept为video时生效，是否压缩视频，默认为true "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," camera "),t("td",{style:{"text-align":"left"}}," 当accept为video时生效，可选值为back或front "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," back "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," maxDuration "),t("td",{style:{"text-align":"left"}}," 当accept为video时生效，拍摄视频最长拍摄时间，单位秒 "),t("td",{style:{"text-align":"left"}}," Number "),t("td",{style:{"text-align":"left"}}," 60 "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," uploadIcon "),t("td",{style:{"text-align":"left"}}," 上传区域的图标，只能内置图标 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," camera-fill "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," uploadIconColor "),t("td",{style:{"text-align":"left"}}," 上传区域的图标的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #D3D4D6 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," useBeforeRead "),t("td",{style:{"text-align":"left"}}," 是否启用上传事件@beforeRead "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," previewFullImage "),t("td",{style:{"text-align":"left"}}," previewFullImage "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," maxCount "),t("td",{style:{"text-align":"left"}}," 最大选择图片的数量 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 52 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," disabled "),t("td",{style:{"text-align":"left"}}," 是否启用(显示/隐藏)组件 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," imageMode "),t("td",{style:{"text-align":"left"}}," 预览上传的图片时的裁剪模式，和image组件mode属性一致 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," aspectFill "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," name "),t("td",{style:{"text-align":"left"}}," 标识符，可以在回调函数的第二项参数中获取 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," file "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," sizeType "),t("td",{style:{"text-align":"left"}}," original 原图，compressed 压缩图，默认二者都有，H5无效 "),t("td",{style:{"text-align":"left"}}," Array<String> "),t("td",{style:{"text-align":"left"}}," ['original', 'compressed'] "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," multiple "),t("td",{style:{"text-align":"left"}}," 是否开启图片多选，部分安卓机型不支持 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," deletable "),t("td",{style:{"text-align":"left"}}," 是否显示删除图片的按钮 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," maxSize "),t("td",{style:{"text-align":"left"}}," 选择单个文件的最大大小，单位B(byte)，默认不限制 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," Number.MAX_VALUE "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," fileList "),t("td",{style:{"text-align":"left"}}," 显示已上传的文件列表 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," uploadText "),t("td",{style:{"text-align":"left"}}," 上传区域的提示文字 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," width "),t("td",{style:{"text-align":"left"}},[e(" 内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者"),t("code",null,"auto")]),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 80 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," height "),t("td",{style:{"text-align":"left"}},[e(" 内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者"),t("code",null,"auto")]),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 80 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," previewImage "),t("td",{style:{"text-align":"left"}}," 是否在上传完成后展示预览图 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoDelete"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动删除无需手动@delete处理 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoUpload"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动上传无需@afterRead中处理 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoUploadApi"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动上传的接口 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoUploadDriver"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动上传驱动 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," local "),t("td",{style:{"text-align":"left"}}," oss，支持服务器本机和阿里云OSS上传 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoUploadAuthUrl"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动上传OSS模式下，授权接口 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," 阿里云OSS是前端上传方式，需后端提供授权签名接口。 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" autoUploadHeader"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自动上传模式下，携带的额外header，一般为比如Authorization等。 "),t("td",{style:{"text-align":"left"}}," Object "),t("td",{style:{"text-align":"left"}}," {} "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" getVideoThumb"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.6")]),_:1})]),t("td",{style:{"text-align":"left"}}," 视频上传后是否获取封面图(仅支持自动上传OSS模式) "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" customAfterAutoUpload"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.20")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自定义自动上传后处理逻辑配合@afterAutoUpload "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" videoPreviewObjectFit"),l(n,{class:"badge tip"},{default:a(()=>[e("3.4.46")]),_:1})]),t("td",{style:{"text-align":"left"}}," 视频预览object-fit "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," cover "),t("td",{style:{"text-align":"left"}}," contain ")])])]),l(n,{id:"methods"},{default:a(()=>[l(n,{href:"upload.html#methods",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" Methods ")]),_:1}),l(n,null,{default:a(()=>[e("此方法如要通过ref手动调用")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"afterRead"),t("td",null,"读取后的处理函数")]),t("tr",null,[t("td",null,"beforeRead"),t("td",null,"读取前的处理函数")]),t("tr",null,[t("td",null,"afterAutoUpload"),t("td",null,"自动上传后处理函数，注意调用callback参数")])])]),l(n,{id:"slot"},{default:a(()=>[l(n,{href:"upload.html#slot",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" Slot ")]),_:1}),l(n,null,{default:a(()=>[e("slot中您可以内置任何您所需要的样式。")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," -(default) "),t("td",{style:{"text-align":"left"}}," 自定义上传样式 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," -(trigger) "),t("td",{style:{"text-align":"left"}}," 自定义上传样式 ")])])]),l(n,{id:"events"},{default:a(()=>[l(n,{href:"upload.html#events",class:"header-anchor"},{default:a(()=>[e("#")]),_:1}),e(" Events ")]),_:1}),l(n,null,{default:a(()=>[e("回调参数中的"),t("code",null,"event"),e("参数，为当前删除元素的所有信息，"),t("code",null,"index"),e("为当前操作的图片的索引，"),t("code",null,"name"),e("为删除名称，"),t("code",null,"file"),e("包含删除的url信息")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," afterRead "),t("td",{style:{"text-align":"left"}}," 读取后的处理函数 "),t("td",{style:{"text-align":"left"}}," (file, lists, name)，错误信息 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," beforeRead "),t("td",{style:{"text-align":"left"}}," 读取前的处理函数 "),t("td",{style:{"text-align":"left"}}," (file, lists, name)，错误信息 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," oversize "),t("td",{style:{"text-align":"left"}}," 图片大小超出最大允许大小 "),t("td",{style:{"text-align":"left"}},[e(" (file, lists, name), name为通过"),t("code",null,"props"),e("传递的"),t("code",null,"index"),e("参数 ")])]),t("tr",null,[t("td",{style:{"text-align":"left"}}," clickPreview "),t("td",{style:{"text-align":"left"}}," 全屏预览图片时触发 "),t("td",{style:{"text-align":"left"}},[e(" (url, lists, name)，url为当前选中的图片地址，index为通过"),t("code",null,"props"),e("传递的"),t("code",null,"index"),e("参数 ")])]),t("tr",null,[t("td",{style:{"text-align":"left"}}," delete "),t("td",{style:{"text-align":"left"}}," 删除图片 "),t("td",{style:{"text-align":"left"}},[e(" 传递"),t("code",null,"index"),e(" 回调 event 参数 包含"),t("code",null,"index，file，name")])])])])]),_:1})]),_:1})]),_:1})]),_:1})}const L=g(p,[["render",m],["__scopeId","data-v-ab8e5b04"]]);export{L as default};
