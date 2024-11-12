<template>
  <div class="high-performance-container">
    <view class="node-content">
      <Tree v-model="state.currentNodeKey" @change="onChange" />
    </view>
    <view class="view-content">
      <view v-if="state.fileList.length" class="view-box" :class="{ column: state.fileList.length === 1 }">
        <el-image class="image-content" v-for="(file, index) in state.fileList" :src="file.url" :preview-src-list="state.previewList" :initial-index="index" fit="fill" />
        <div v-if="state.textData.length" class="test-info">
          <div v-for="text in state.textData">{{ text }}</div>
        </div>
      </view>
      <view v-if="state.fileList.length" class="view-btn">
        <el-button type="primary" :icon="Download" :loading="state.btnLoading" @click="downloadZip">获取数据源</el-button>
      </view>
      <el-empty v-if="state.fileList.length === 0" description="请选择资源" />
    </view>
  </div>
</template>
<script setup>
import { Download } from '@element-plus/icons-vue';
import Tree from './components/Tree.vue';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { parseTime } from '@/utils/index.js';

const state = reactive({
  currentNodeKey: '', //选中的节点key
  currentNode: null, //选中的节点数据
  fileList: [], //资源数据
  previewList: [], //预览地址集合
  textData: [], //描述数据
  btnLoading: false, //加载
});

// 判断地址是否为网络地址
function isValidUrl(string) {
  const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(string);
}

// 格式化文件地址
const formatedFilePath = files => {
  return files.map(file => {
    return {
      ...file,
      url: isValidUrl(file.url) ? file.url : import.meta.env.VITE_PUBLIC_PATH + 'assets/file' + file.url,
    };
  });
};

// 选中节点变化
const onChange = data => {
  state.currentNode = data;
  state.fileList = formatedFilePath(data.file);
  state.previewList = state.fileList.map(v => v.url);
  state.textData = data.textInfo;
};

// 下载资源
const downloadZip = async () => {
  state.btnLoading = true;
  const zip = new JSZip();
  const zipName = state.currentNode.label + '-' + parseTime(new Date(), '{y}{m}{d}{h}{i}{s}') + '.zip';
  // 为每个文件添加一个条目
  for (const file of state.fileList) {
    if (file.url) {
      let fileName = file.name || file.url.split('/').pop();
      try {
        let response = await axios.get(file.url, { responseType: 'blob' });
        zip.file(fileName, response.data);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    }
  }
  // 生成压缩包
  const content = await zip.generateAsync({ type: 'blob' });

  // 保存压缩包到本地
  saveAs(content, zipName);
  state.btnLoading = false;
};
</script>
<style lang="scss" scoped>
.high-performance-container {
  width: 100%;
  padding: 30px 10%;
  box-sizing: border-box;
  background: #ebf7ff;
  display: flex;
  overflow: auto;
}
.node-content {
  width: 320px;
  min-height: 750x;
  margin-right: 30px;
  flex-shrink: 0;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 30px 0;
  box-sizing: border-box;
}
.view-content {
  min-width: 400px;
  min-height: 750px;
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.view-box {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  &.column {
    grid-template-columns: 100%;
  }
  .image-content {
    width: 100%;
    height: 100%;
    border: 1px solid #cbeaff;
    padding: 5px;
    box-sizing: border-box;
  }
  .test-info {
    font-size: 14px;
    color: #333333;
    line-height: 19px;
  }
}
.view-btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  .el-button {
    color: #fff;
  }
}

@media only screen and (max-width: 1300px) {
  .node-content {
    width: 250px;
  }
  .view-box {
    grid-template-columns: 100%;
  }
}
</style>
