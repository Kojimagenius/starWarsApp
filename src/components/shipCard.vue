<template>
<div>
<h1>HUI</h1>  
{{this.$route.params.id}}
{{this.shipName}}
</div>
</template>

<script>
export default {
    name: 'shipCard', 
    data(){
        return {
            shipName: '',
            crewNumber: 0,
            length: 0,
        }
    },
    mounted(){
        fetch(`https://swapi.dev/api/starships/${this.$route.params.id}`)
        .then(response => response.json())
        .then(json => {this.shipName = json.name
            this.crewNumber = json.crew
            this.length = json.length
        })
    }

}
</script>

<style>

</style>