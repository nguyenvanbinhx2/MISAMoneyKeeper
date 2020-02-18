<template>
  <div class="home border shadow" @show="emitActive">
fffffffffffffffff
  </div>

</template>

<script>
// @ is an alias to /src
import {EventBus} from '../main.js'
export default {
  name: 'home',
  data(){
    return {
      isActive: true
    }
  },
  methods:{
    emitActive(){
      EventBus.$emit('emitActive',this.isActive)
    }
  }
  
}
</script>
<style scoped>
.home{
  width: 100%;
  border:1px solid black;
  height: 100%;
}

</style>