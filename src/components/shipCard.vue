<template>
<div>
<h1>{{this.shipName}}</h1>  
<p>Manefactered by: {{this.manufacturer}}</p>
<p>Cost of the ship: {{this.costInCredits}}</p>
<p>Maximum speed: {{this.maxSpeed}}</p>
<p>Available number of passangers on the ship: {{this.passangersCapacity}}</p>
<p>Cargo: {{this.cargoCapacity}}</p>
<p>consumables: {{this.consumables}}</p>
<p>Hyper rating: {{this.hyperDriveRating}}</p>
<p>MGLT: {{this.mglt}}</p>
<p>Starship class: {{this.starshipClass}}</p>
<p>Crew: {{this.crewNumber}}</p>
<p>Length of ship: {{this.length}}</p>
</div>
</template>

<script>
export default {
    name: 'shipCard', 
    data(){
        return {
            json:'',
            shipName: '',
            manufacturer: '',
            costInCredits:'',
            maxSpeed:0,
            passangersCapacity:0,
            cargoCapacity:0,
            consumables: '',
            hyperDriveRating:'',
            mglt:0,
            starshipClass:'',
            crewNumber: 0,
            length: 0,
        }
    },
    mounted(){
        fetch(`https://swapi.dev/api/starships/${this.$route.params.id}`)
        .then(response => response.json())
        .then(json => {this.shipName = json.name
            this.costInCredits = json.cost_in_credits
            this.crewNumber = json.crew
            this.length = json.length
            this.manufacturer = json.manufacturer
            this.maxSpeed = json.max_atmosphering_speed,
            this.crewNumber = json.crew
            this.passangersCapacity = json.passengers
            this.cargoCapacity = json.cargo_capacity
            this.consumables = json.consumables
            this.hyperDriveRating = json.hyperdrive_rating
            this.mglt = json.MGLT
            this.starshipClass = json.starship_class
           

        })
        
        


    }

}
</script>

<style>

</style>