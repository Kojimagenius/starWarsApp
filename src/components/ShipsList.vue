<template>
<div>
    <ul>
        
        <ShipItem
        v-for="(ship, ind) of ships"
        v-bind:id="ind"
        v-bind:ship="ship"
        v-bind:key="ind"
        />

    </ul>
</div>
</template>
<script>
    import ShipItem from '@/components/ShipItem.vue'
    export default {
    name: 'ShipsList',
    props:['ships'],
    components: {
        ShipItem
        },
        methods:{
            
        },
   
    

    }
    
</script>
<style scoped>
ul{
    list-style:none;
    margin:0;
    padding:0;
}
</style>