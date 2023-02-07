<script setup>
import Note from './Note.vue';


import {ref,computed} from 'vue'
let isActiveModal = ref(false);
let note = ref('');
let title = ref('')

let notes = ref([]);

const addNote = () =>{
  notes.value.push({
    id: Date.now(),
    title:title.value,
    text:note.value,

  })
  title.value = ""
  note.value = ""
 
  isActiveModal.value = !isActiveModal.value
}

const handleOpenModal = () =>{
  isActiveModal.value = !isActiveModal.value
}




</script>



<template>
  
  <div class="container__note">
   
  <div class="navbar__note">

   <div class="container__flex-navbar">
      <h2 v-if="!notes.value"> Add you first note </h2>
      <h2 v-else>Add new note</h2>
       <h1 @click="handleOpenModal" class="button-note"> + </h1>
   </div>

  </div>
  </div>



  <div :class="`modal__note ${isActiveModal ? 'active' : '' }`" >
   <div class="modal__container-items">
   
   <form class="modal__items" @submit.prevent="addNote"> 
      <h1> Add note </h1>
      <input type="text" v-model.trim="title" placeholder="Title ...." >
       <input type="text" v-model.trim="note" placeholder="Note ..." >


      <input type="submit" value="Send Note" >
   </form>


   </div>

  </div>

  <div class="notes__container">
   
   <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>


  


  




</template>



<style scoped>
*{
    margin: 0;
    padding: 0;
 
   


}
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

.modal__note{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width:  1500px;
  background-color: rgb(255, 253, 253);
  margin-top: 35px;
  z-index: 1000;
  transform: translateY(-1500px);
  opacity: 0.2;
  transition: 0.8s ease-out all;
  animation-delay: 0.3s ease-in-out;
  animation-duration: 0.5s;

}
.modal__note.active{
  transform: translateY(0px);
  opacity: 1;
}

.modal__container-items{

  height: 400px;
  width:  600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:7px;
  border: none;
  background-color: #fff;
    box-shadow: 1px 3px 5px 1px  rgb(233, 233, 233);
    

}

.modal__container-items h1{
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
}
.modal__container-items input[type="text"]{
  padding: 7px 35px 7px 35px ;
  border: none;
  border-bottom: 2px solid rgb(60, 59, 59);
  outline: none;
  background: transparent;
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  transition: 500ms all ease;

}
.modal__container-items input[type="text"]:hover{
  transform: translateY(-5px);
}

.modal__container-items input[type="submit"]{
  padding: 10px 35px 10px 35px;
  border-radius: 5px;
  border:none;
  margin-top:10px;
  background-color: rgb(50, 50, 52);
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-family: sans-serif;
  font-size: 15px;

}



.modal__container-items form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

}

.container__note{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
  width: 100%;
  background-color: #fff;
 
 
}

.navbar__note{
  display: flex;
  justify-content: flex-start;
  height: 35px;
  width: 100%;
  
}
.container__flex-navbar{
  margin-left: 35px;
  display: flex;
  gap: 35px;
}
.navbar__note div > h2{
  gap: 15px;
  font-size: 1.7rem;
  color: rgb(72, 69, 69);
  font-weight: 400;
  font-family: sans-serif;
}
.button-note{
  cursor:pointer;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  background-color: #3D3B3B;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-top: -10px;
  }

  /* .container__notes{
    margin-top: 35px;
    z-index: -1;
    height: 992px;
  } */

</style>