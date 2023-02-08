<script setup> 
import {ref} from 'vue'
let firstValue = ref(0);
let secondValue = ref(0);
let operation = ref('+');
let result = ref(0);
const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const fetchData = await fetch('https://prueba-vercel-henna.vercel.app/calculate/',{
        method:'POST',
        headers:{
           "Content-type":"application/json",
        },
        body:JSON.stringify({
              firstValue: firstValue.value ,
              secondValue: secondValue.value,
              operation: String(operation.value),
                
          })
    });
    const res = await fetchData.json();
    result.value = res.result;
    
    
    
    
}
const onValue = (e)=>{
     firstValue.value = e.target.value
}
const onSecondValue = (e)=>{
    secondValue.value = e.target.value
}
const onOperation = (e)=>{
    operation.value = e.target.value
}
</script>


<template>
      <div class="container-form">
  
    <form action="" @submit="handleSubmit">
      <input type="number" @input="onValue" name="firstvalue" placeholder="first value" :value="firstValue">
      <select name="operation" @input="onOperation" value:="operation" >
        <option name="sum" value="+" id="">+</option>
        <option name="res" value="-" id="">-</option>
        <option name="mul" value="*" id="">*</option> 
        <option name="div" value="/" id="">/</option>
      </select>
     <input type="number" @input="onSecondValue" name="secondvalue" placeholder="second value" :value="secondValue">
     
     <input type="submit" value="send" v-on:click="handleSubmit">

     
    
    </form>
      
      <div class="calculate-details">
        <strong>firstValue : <span class="value-op">{{firstValue}}</span> </strong>
        <strong>secondValue : <span class="value-op">{{secondValue}}</span></strong>
        <strong>operation : <span class="value-op">{{operation}}</span></strong>
        <strong>result : <span class="value-op" name="result" :value="result">{{result}}</span></strong>
     </div>
      </div>
    
    


</template>

<style>
.container-form{
    height: 525px;
    width:  725px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px 2px rgb(237, 237, 237);
    flex-direction: column;
    gap: 15px;
}
form{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
    margin-left: 35px;
    background-color: rgb(237, 237, 237);
    
}
input{
    padding: 15px 25px 15px 25px;
    outline: 2px solid rgb(218, 218, 218);
}
input[type="submit"]{
    padding:5px 25px 5px 25px;
    font-weight: 400;
    border-radius: 5px;
    background-color: rgb(158, 174, 239);
    color: white;
    margin-left: 5px;
    border: none;
    cursor: pointer;
}
select{
    padding: 3px 18px 3px 18px;
}
.calculate-details{
    display: flex;
    gap: 25px;
    margin-top: 35px;
    font-size: 1.2rem;
    font-weight: 500;
}
.value-op{
    font-weight: 700;
}
</style>