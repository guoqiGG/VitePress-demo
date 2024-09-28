<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import dayjs from 'dayjs'
const defaultAuthor = '郭琦'
const author = ref(defaultAuthor)
const { frontmatter, page } = useData()
const publishedTime = frontmatter.value?.date

if (frontmatter.value?.author)
  author.value = frontmatter.value?.author

const lastUpdatedDate = computed(() => dayjs(page.value.lastUpdated!).format('YYYY-MM-DD HH:mm:ss'))

</script>

<template>
  <div class="container">
    <div class="author">作者：{{author}}</div>
    <div class="update-time">更新时间：{{lastUpdatedDate}}</div>
  </div>
</template>
<style lang="scss">
.container{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  .author,.update-time{
    font-weight: 400;
    font-size: 14px;
    color: #101010;
  }
  .update-time{
    margin-left: 10px;
  }

}
</style>