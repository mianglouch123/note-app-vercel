

<template>
  <div class="notes">
    <h2> {{note.title}} </h2>
    <p> {{note.text}} </p>
    <button>Delete Note</button>
   </div>

</template>

<script setup>
import {defineProps} from 'vue';

const {note} = defineProps(['note']);

</script>

<style scoped>

.notes__container{
 height: 100vh;
 width: 100%;
 background-color: rgb(252, 252, 252);
 min-height: 900px;
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 flex-wrap: wrap;
 gap: 35px;
}
.notes{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 250px;
  overflow: hidden;
  background-color: white;
  margin-top: 35px;
  margin-left: 35px;
  gap: 35px;
  border-radius: 10px;
  box-shadow: 5px 2px 5px 2px rgb(232, 231, 231);
 
}
.notes h2,p{
  font-family: sans-serif;
}
.notes h2{
  font-weight: 500;
  font-size: 1.6rem;
  
}


</style>