<template>
    <div class="modal-container">
    </div>
</template>


<script>
export default {
    name:'welcome',
    props: ['currentBlock'],
    methods:{
        updateBlock(){
            this.$emit('updateBlock',2);
        
        }
    }

}
</script>

<style scoped>
.modal-container{
    width: 100%;
}
</style>
