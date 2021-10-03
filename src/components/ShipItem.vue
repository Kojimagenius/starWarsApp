<template>
    <li>
    <router-link :to="`ship/${ ship.url.replace(/\D/g,'')}`">
    <span>
        <strong>{{id+1}}</strong>
        {{(ship.name)}}

    </span>
    </router-link>
    <button></button>
    </li>
</template>
<script>
export default{
    props:{
        id: Number,
        ship:{
        type: Object,
        required: true
        },
        url: String 
    },
    methods: {
        
    }
}
</script>
<style scoped>
li{
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
}

</style>
