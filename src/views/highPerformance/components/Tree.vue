<template>
  <div class="tree-container">
    <el-tree ref="treeRef" node-key="id" :data="state.data" :props="defaultProps" default-expand-all highlight-current :current-node-key="state.currentNodeKey" @node-click="handleNodeClick" />
  </div>
</template>
<script setup>
import TreeData from '@/utils/high-performance.js';
import { nextTick, onMounted, reactive, watch } from 'vue';

const props = defineProps({
  // 选中的节点key
  modelValue: {
    type: String,
  },
});

const defaultProps = {
  children: 'children',
  label: 'label',
};

const treeRef = ref(null);

const emit = defineEmits(['update:modelValue', 'change']);

const state = reactive({
  data: [], //节点数据
  currentNodeKey: '', //当前选中的节点
});

watch(
  () => props.modelValue,
  (nv, ov) => {
    if (nv) {
      nextTick(() => {
        state.currentNodeKey = nv;
      });
    }
  },
  { deep: true, immediate: true }
);

// 点击节点
const handleNodeClick = (data, node) => {
  if (data?.file?.length) {
    node.isCurrent = true;
    // state.currentNodeKey = data.id;
    emit('update:modelValue', data.id);
    emit('change', data);
  } else {
    node.isCurrent = false;
  }
  nextTick(() => {
    treeRef.value.setCurrentKey(state.currentNodeKey, true);
  });
};

// 为树结构赋值唯一id
function addIdToTree(nodes, parentId = null) {
  let idCounter = 1;
  return nodes.map(node => {
    const newNode = { ...node, id: parentId ? `${parentId}.${idCounter}` : idCounter.toString() };
    if (node.children && node.children.length > 0) {
      const children = addIdToTree(node.children, newNode.id);
      newNode.children = children;
    }
    idCounter++;
    return newNode;
  });
}

onMounted(() => {
  state.data = addIdToTree(TreeData);
});
</script>
<style lang="scss" scoped>
.tree-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
