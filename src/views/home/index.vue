<template>
  <div class="home-container">
    <div class="introduce">
      <img class="logo" src="@/assets/images/logo-color.png" alt="logo" />
      <div class="title">{{ $t('introduce.title') }}</div>
      <div class="content">{{ $t('introduce.content') }}</div>
      <el-button class="btn" type="warning" @click="handClick({ path: 'https://github.com/ALSparse/ALSparse' })">{{ $t('button.get_it_now') }}</el-button>
    </div>
    <div class="apply">
      <div class="apply-card" v-for="(item, index) in apply" :key="index">
        <img class="apply-card-img" :src="item.img" alt="应用图标" />
        <div class="apply-card-title">{{ $t(item.title) }}</div>
        <div class="apply-card-content">{{ $t(item.content) }}</div>
        <el-button class="apply-card-btn" type="warning" @click="handClick(item)">{{ $t(item.button) }}</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t, locale } = useI18n();
import { ElMessage } from 'element-plus';

const apply = reactive([
  {
    // 高性能
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/gxn.png',
    title: 'apply.title1',
    content: 'apply.content1',
    button: 'button.get_it_now',
  },
  {
    // 跨平台
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/kpt.png',
    title: 'apply.title2',
    content: 'apply.content2',
    button: 'button.get_it_now',
  },
  {
    // 开源
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/ky.png',
    title: 'apply.title3',
    content: 'apply.content3',
    button: 'button.get_it_now',
    path: 'https://github.com/ALSparse/ALSparse/blob/master/LICENSE',
  },
  {
    // 用户手册
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/yhsc.png',
    title: 'apply.title4',
    content: 'apply.content4',
    button: 'button.get_it_now',
    path: 'https://alsparse.github.io/ALSparse',
  },
  {
    // 可扩展性
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/ktzx.png',
    title: 'apply.title5',
    content: 'apply.content5',
    button: 'button.get_it_now',
    path: 'https://github.com/ALSparse/ALSparse/wiki/Customize:Formats',
  },
  {
    // 集思广益
    img: import.meta.env.VITE_PUBLIC_PATH + 'assets/images/jsgy.png',
    title: 'apply.title6',
    content: 'apply.content6',
    button: 'button.participate_now',
    path: 'https://github.com/ALSparse/ALSparse/issues',
  },
]);

// 跳转
function handClick(row) {
  // 判断是否为移动端
  const ua = navigator.userAgent;
  let flag = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  if (row.path) {
    window.open(row.path, flag ? '_self' : '_blank');
  } else {
    ElMessage({
      message: '功能建设中...',
      type: 'warning',
    });
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  .introduce {
    width: 100%;
    background: url('@/assets/images/introduce-bg.png') no-repeat center/cover;
    padding: 70px 15% 64px;
    .logo {
      height: 152px;
    }
    .title {
      margin-top: 34px;
      font-size: 24px;
      line-height: 32px;
    }
    .content {
      margin-top: 20px;
      font-size: 18px;
      line-height: 30px;
    }
    .btn {
      margin-top: 20px;
    }
  }
  .apply {
    padding: 50px 10%;
    display: grid;
    // 定义每一列的列宽
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    // 属性定义每一行的行高
    // grid-template-rows: 100px 100px 100px;
    // 设置行与行的间隔（行间距）
    grid-row-gap: 50px;
    // 设置列与列的间隔（列间距）
    grid-column-gap: 19px;
  }
}
.apply-card {
  // min-height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10% 30px;
  position: relative;
  text-align: center;
  &::after {
    content: '';
    width: 100%;
    height: calc(100% - 75px);
    background: linear-gradient(180deg, #e6f4ff 0%, #ffffff 100%);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  .apply-card-img {
    width: 150px;
    height: 150px;
  }
  .apply-card-title {
    margin-top: 39px;
    font-weight: bold;
    font-size: 24px;
    color: #333333;
    line-height: 32px;
  }
  .apply-card-content {
    flex: 1;
    min-height: 60px;
    margin-top: 10px;
    font-size: 18px;
    color: #666666;
    line-height: 30px;
  }
  .apply-card-btn {
    margin-top: 16px;
  }
}
@media only screen and (max-width: 750px) {
  .home-container {
    .introduce {
      padding: 20px 15% 20px;
      .logo {
        height: 30px;
      }
      .title {
        margin-top: 10px;
        font-size: 16px;
        line-height: 20px;
      }
      .content {
        margin-top: 10px;
        font-size: 14px;
        line-height: 18px;
      }
      .btn {
        margin-top: 10px;
      }
    }
    .apply {
      padding: 20px 10%;
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
    }
  }
  .apply-card {
    padding: 0 10% 20px;
    &::after {
      height: calc(100% - 40px);
    }
    .apply-card-img {
      width: 80px;
      height: 80px;
    }
    .apply-card-title {
      margin-top: 10px;
      font-size: 20px;
      line-height: 25px;
    }
    .apply-card-content {
      min-height: 40px;
      margin-top: 5px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
