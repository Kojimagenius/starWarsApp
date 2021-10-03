<template>
<span>
    <input id="search-text" type="search" placeholder = "Jokes search" v-on:input='search'>
   
</span>
</template>
<script>
export default {
    props:{},
    methods:{
        search(){
            const text = document.getElementById('search-text').value
            this.$emit('search', text);
            
        }
    }
}
</script>
