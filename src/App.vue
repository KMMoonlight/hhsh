

<template>
  <div class="container">
    <div class="title-font">
      能不能好好说话?
    </div>
    <div class="desc-font">
      拼音首字母缩写释义
    </div>
    <div id="el">
      <textarea v-model="inputData" placeholder="输入含有首字母缩写的文字" class="edit-area"></textarea>
      <button class="btn-submit" @click="queryValue">查询</button>

      <div class="meaning-area">
        <div v-for="item in resultData" :key="item" class="meaning-item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue"
import axios from 'axios'

const inputData = ref('')
const resultData = ref<string[]>([])

const queryValue = () => {
  resultData.value = []
  axios.post('api/nbnhhsh/guess', {text: inputData.value}).then((res) => {
    const result = res.data[0]
    if (result.hasOwnProperty('trans')) {
      resultData.value = result.trans
    }else {
      resultData.value = []
    }
  })

}


</script>


<style scoped>
body {
  background-color: #EFEFEF;
}

.container {
  width: 600px;
  height: 400px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.title-font {
  font-weight: bold;
  font-size: 2.5em;
  text-align: center;
}

.desc-font {
  font-size: 0.5em;
  text-align: center;
  color: #999999;
  margin-top: 10px;
}


.edit-area {
  width: 100%;
  height: 200px;
  display: block;
  border: 0;
  width: calc( 100% - 28px );
  max-width: calc( 100% - 28px );
  min-width: calc( 100% - 28px );
  min-height: 200px;
  padding: 10px 14px;
  box-shadow: 0 0 0 2px #999 inset;
  resize: none;
  margin-top: 10px;
}

.meaning-area {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.meaning-item {
  color: #444444;
  font-size: 12px;
  min-width: 100px;
}


.btn-submit {
  margin-top: 10px;
  width: 100%;
  height: 36px;
  border: 1px solid;
  border-radius: 2px;
}

</style>