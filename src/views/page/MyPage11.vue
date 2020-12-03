<template>
  <div>
    <h3>Elastic Search Example</h3>

    <div class="row">
      <h4>Search</h4>
      <button class="btn btn-secondary" @click="searchES">Count ES record</button>
      {{total_count}}
    </div>

    <div class="row">
      <h4>Result</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
      return{
          total_count:0
      }
  },
  methods: {
    searchES: async function () {
      console.log("start searchES...");
      try{
          //http://localhost:9200/my_index/mydata/_search
          const response = await axios.get('http://localhost:9200/my_index/_count')
          console.log(response)
          this.total_count = response.data.count
      } catch (e){
          console.log(e)
      }

    },
  },
};
</script>