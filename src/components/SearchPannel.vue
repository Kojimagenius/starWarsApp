<template>
<span>
    <input id="search-text" type="search" placeholder = "Ships search" v-on:input='search' v-bind:value="this.searchText">
   
</span>
</template>
<script>
export default {
    props:['searchText'],
    methods:{
        search(){
            const text = document.getElementById('search-text').value
            this.$emit('search', text);
            
        }
    }
}
</script>
