<template>
  <view class="upload-page">
    <view class="theme-default-content content__default">
      <text id="upload-上传">
        <text href="upload.html#upload-上传" class="header-anchor">#</text>
        Upload 上传
      </text>

      <text>该组件用于上传图片场景</text>

      <text id="平台差异说明">
        <text href="upload.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>

      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>

      <text id="基础用法">
        <text href="upload.html#基础用法" class="header-anchor">#</text>
        基础用法
      </text>

      <view>
        <view>可以通过设置<code>fileList</code>参数(数组，元素为对象)，显示预置的图片。其中元素的<code>url</code>属性为图片路径</view>
      </view>

      <CodeBlock
        code="<template>
	<up-upload
		:fileList=&quot;fileList1&quot;
		@afterRead=&quot;afterRead&quot;
		@delete=&quot;deletePic&quot;
		name=&quot;1&quot;
		multiple
		:maxCount=&quot;10&quot;
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
</script>"
        language="vue"
        title="基础用法"
      />

      <text id="读取前处理程序">
        <text href="upload.html#读取前处理程序" class="header-anchor">#</text>
        读取前处理程序<text class="badge tip">3.4.20</text>
      </text>

      <CodeBlock
        code="<up-upload
    :useBeforeRead=&quot;true&quot;
    @beforeRead=&quot;beforeRead&quot;
>
</up-upload>

<script setup>
const beforeRead = async (event) => {
    // 返回值为 true 时，会进行图片上传，返回 false 时，不进行上传
    // 可在此处添加业务逻辑，如图片大小限制、类型校验等
    return true
}
</script>"
        language="vue"
        title="读取前处理程序"
      />

      <text id="上传视频">
        <text href="upload.html#上传视频" class="header-anchor">#</text>
        上传视频
      </text>

      <view>
        <view>通过设置<code>accept='video'</code>属性，将上传改为视频上传。</view>
      </view>

      <CodeBlock
        code="<up-upload
    accept=&quot;video&quot;
    :fileList=&quot;videoList&quot;
    @afterRead=&quot;videoAfterRead&quot;
>
</up-upload>"
        language="vue"
        title="上传视频"
      />

      <text id="文件预览">
        <text href="upload.html#文件预览" class="header-anchor">#</text>
        文件预览
      </text>

      <view>
        <view>通过设置<code>:previewFullImage=&quot;true&quot;</code>属性，达到文件预览的目的。</view>
      </view>

      <CodeBlock
        code="<up-upload
    :previewFullImage=&quot;true&quot;
    :fileList=&quot;fileList&quot;
    @click-preview=&quot;clickPreview&quot;
>
</up-upload>"
        language="vue"
        title="文件预览"
      />

      <text id="隐藏上传按钮">
        <text href="upload.html#隐藏上传按钮" class="header-anchor">#</text>
        隐藏上传按钮
      </text>

      <view>
        <view>上传数量等于<code>maxCount</code>所规定的数据时，隐藏上传按钮。</view>
      </view>

      <CodeBlock
        code="<up-upload
    :fileList=&quot;fileList&quot;
    :maxCount=&quot;3&quot;
>
</up-upload>"
        language="vue"
        title="隐藏上传按钮"
      />

      <text id="限制上传数量">
        <text href="upload.html#限制上传数量" class="header-anchor">#</text>
        限制上传数量
      </text>

      <view>
        <view>同上，规定<code>maxCount</code>的数据时。</view>
      </view>

      <CodeBlock
        code="<up-upload
    :maxCount=&quot;5&quot;
>
</up-upload>"
        language="vue"
        title="限制上传数量"
      />

      <text id="自定义上传样式">
        <text href="upload.html#自定义上传样式" class="header-anchor">#</text>
        自定义上传样式
      </text>

      <view>
        <view>添加<code>image</code>以自定义上传样式，达到身份证，银行卡等不同场景需求。</view>
      </view>

      <CodeBlock
        code="<up-upload :image=&quot;idCardImg&quot;>
    <view slot=&quot;trigger&quot;>
        <image src=&quot;/static/idcard.png&quot; mode=&quot;aspectFit&quot; />
    </view>
</up-upload>"
        language="vue"
        title="自定义上传样式"
      />

      <text id="自动上传模式-服务器本机">
        <text href="upload.html#自动上传模式-服务器本机" class="header-anchor">#</text>
        自动上传模式(服务器本机)
      </text>

      <view>
        <view>自动上传可以大幅减少代码量，通过配置自动上传达到只写template很少的代码即可完成上传功能。</view>
        <view>默认自动上传local模式要求后端返回格式为<code>{"code": 200, "data": {"url": "xxx"}}</code></view>
      </view>

      <text id="示例">
        <text href="upload.html#示例" class="header-anchor">#</text>
        示例
      </text>

      <CodeBlock
        code="<up-upload
    :autoUpload=&quot;true&quot;
    :fileList=&quot;fileList&quot;
    name=&quot;file&quot;
    :maxCount=&quot;5&quot;
>
</up-upload>"
        language="vue"
        title="自动上传模式"
      />

      <text id="api">
        <text href="upload.html#api" class="header-anchor">#</text>
        API
      </text>

      <text id="props">
        <text href="upload.html#props" class="header-anchor">#</text>
        Props
      </text>

      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              参数
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              类型
            </th>
            <th style="text-align:left;">
              默认值
            </th>
            <th style="text-align:left;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              accept
            </td>
            <td style="text-align:left;">
              接受的文件类型，<code>file</code>只支持<code>H5</code>（只有微信小程序才支持把accept配置为all、media）
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              image
            </td>
            <td style="text-align:left;">
              all | media | image | file | video
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              capture
            </td>
            <td style="text-align:left;">
              图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
            </td>
            <td style="text-align:left;">
              String | Array
            </td>
            <td style="text-align:left;">
              ['album', 'camera']
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              compressed
            </td>
            <td style="text-align:left;">
              当accept为video时生效，是否压缩视频，默认为true
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              camera
            </td>
            <td style="text-align:left;">
              当accept为video时生效，可选值为back或front
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              back
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              maxDuration
            </td>
            <td style="text-align:left;">
              当accept为video时生效，拍摄视频最长拍摄时间，单位秒
            </td>
            <td style="text-align:left;">
              Number
            </td>
            <td style="text-align:left;">
              60
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              uploadIcon
            </td>
            <td style="text-align:left;">
              上传区域的图标，只能内置图标
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              camera-fill
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              uploadIconColor
            </td>
            <td style="text-align:left;">
              上传区域的图标的颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              #D3D4D6
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              useBeforeRead
            </td>
            <td style="text-align:left;">
              是否启用上传事件@beforeRead
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              previewFullImage
            </td>
            <td style="text-align:left;">
              previewFullImage
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              maxCount
            </td>
            <td style="text-align:left;">
              最大选择图片的数量
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              52
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              disabled
            </td>
            <td style="text-align:left;">
              是否启用(显示/隐藏)组件
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              imageMode
            </td>
            <td style="text-align:left;">
              预览上传的图片时的裁剪模式，和image组件mode属性一致
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              aspectFill
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              name
            </td>
            <td style="text-align:left;">
              标识符，可以在回调函数的第二项参数中获取
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              file
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              sizeType
            </td>
            <td style="text-align:left;">
              original 原图，compressed 压缩图，默认二者都有，H5无效
            </td>
            <td style="text-align:left;">
              Array&lt;String&gt;
            </td>
            <td style="text-align:left;">
              ['original', 'compressed']
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              multiple
            </td>
            <td style="text-align:left;">
              是否开启图片多选，部分安卓机型不支持
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              deletable
            </td>
            <td style="text-align:left;">
              是否显示删除图片的按钮
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              maxSize
            </td>
            <td style="text-align:left;">
              选择单个文件的最大大小，单位B(byte)，默认不限制
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              Number.MAX_VALUE
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              fileList
            </td>
            <td style="text-align:left;">
              显示已上传的文件列表
            </td>
            <td style="text-align:left;">
              Array
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              uploadText
            </td>
            <td style="text-align:left;">
              上传区域的提示文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              width
            </td>
            <td style="text-align:left;">
              内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者<code>auto</code>
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              80
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              height
            </td>
            <td style="text-align:left;">
              内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者<code>auto</code>
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              80
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              previewImage
            </td>
            <td style="text-align:left;">
              是否在上传完成后展示预览图
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              autoDelete<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动删除无需手动@delete处理
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              autoUpload<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动上传无需@afterRead中处理
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              autoUploadApi<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动上传的接口
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;" />
          </tr>
          <tr>
            <td style="text-align:left;">
              autoUploadDriver<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动上传驱动
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              local
            </td>
            <td style="text-align:left;">
              oss，支持服务器本机和阿里云OSS上传
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              autoUploadAuthUrl<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动上传OSS模式下，授权接口
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              阿里云OSS是前端上传方式，需后端提供授权签名接口。
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              autoUploadHeader<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              自动上传模式下，携带的额外header，一般为比如Authorization等。
            </td>
            <td style="text-align:left;">
              Object
            </td>
            <td style="text-align:left;">
              {}
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              getVideoThumb<text class="badge tip">3.4.6</text>
            </td>
            <td style="text-align:left;">
              视频上传后是否获取封面图(仅支持自动上传OSS模式)
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              customAfterAutoUpload<text class="badge tip">3.4.20</text>
            </td>
            <td style="text-align:left;">
              自定义自动上传后处理逻辑配合@afterAutoUpload
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              videoPreviewObjectFit<text class="badge tip">3.4.46</text>
            </td>
            <td style="text-align:left;">
              视频预览object-fit
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              cover
            </td>
            <td style="text-align:left;">
              contain
            </td>
          </tr>
        </tbody>
      </table>

      <text id="methods">
        <text href="upload.html#methods" class="header-anchor">#</text>
        Methods
      </text>

      <text>此方法如要通过ref手动调用</text>

      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>afterRead</td>
            <td>读取后的处理函数</td>
          </tr>
          <tr>
            <td>beforeRead</td>
            <td>读取前的处理函数</td>
          </tr>
          <tr>
            <td>afterAutoUpload</td>
            <td>自动上传后处理函数，注意调用callback参数</td>
          </tr>
        </tbody>
      </table>

      <text id="slot">
        <text href="upload.html#slot" class="header-anchor">#</text>
        Slot
      </text>

      <text>slot中您可以内置任何您所需要的样式。</text>

      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              名称
            </th>
            <th style="text-align:left;">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              -(default)
            </td>
            <td style="text-align:left;">
              自定义上传样式
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              -(trigger)
            </td>
            <td style="text-align:left;">
              自定义上传样式
            </td>
          </tr>
        </tbody>
      </table>

      <text id="events">
        <text href="upload.html#events" class="header-anchor">#</text>
        Events
      </text>

      <text>回调参数中的<code>event</code>参数，为当前删除元素的所有信息，<code>index</code>为当前操作的图片的索引，<code>name</code>为删除名称，<code>file</code>包含删除的url信息</text>

      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              事件名
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              afterRead
            </td>
            <td style="text-align:left;">
              读取后的处理函数
            </td>
            <td style="text-align:left;">
              (file, lists, name)，错误信息
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              beforeRead
            </td>
            <td style="text-align:left;">
              读取前的处理函数
            </td>
            <td style="text-align:left;">
              (file, lists, name)，错误信息
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              oversize
            </td>
            <td style="text-align:left;">
              图片大小超出最大允许大小
            </td>
            <td style="text-align:left;">
              (file, lists, name), name为通过<code>props</code>传递的<code>index</code>参数
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              clickPreview
            </td>
            <td style="text-align:left;">
              全屏预览图片时触发
            </td>
            <td style="text-align:left;">
              (url, lists, name)，url为当前选中的图片地址，index为通过<code>props</code>传递的<code>index</code>参数
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              delete
            </td>
            <td style="text-align:left;">
              删除图片
            </td>
            <td style="text-align:left;">
              传递<code>index</code> 回调 event 参数 包含<code>index，file，name</code>
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.upload-page {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 10px;
    border: 1px solid #ebeef5;
  }

  th {
    background-color: #f5f7fa;
    font-weight: 600;
  }
}

code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.badge.tip {
  background-color: #67c23a;
  color: #fff;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

view {
  padding-left: 20px;

  view {
    margin: 8px 0;
  }
}

text,
text,
text {
  margin-top: 24px;
  margin-bottom: 16px;
}
</style>
