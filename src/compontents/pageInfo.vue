<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime); // 相对时间
dayjs.locale('zh-cn'); // 使用本地化语言
const defaultAuthor = '郭琦'
const author = ref(defaultAuthor)
const { frontmatter, page } = useData()
if (frontmatter.value?.author)
  author.value = frontmatter.value?.author
const lastUpdatedDate = computed(() =>  dayjs(page.value.lastUpdated!).fromNow().replace(' ', ''))
</script>

<template>
  <div class="container">
    <div class="author"><font-awesome-icon class="fa" icon="user-circle" />作者：{{ author }}</div>
    <div class="update-time"><font-awesome-icon class="fa" icon="refresh" />更新时间：{{ lastUpdatedDate }}</div>
  </div>
</template>
<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .author,
  .update-time {
    font-weight: 400;
    font-size: 14px;
    .fa{
      margin-right: 10px;
    }
  }

  .update-time {
    margin-left: 10px;
  }

}
</style>