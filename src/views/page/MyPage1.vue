<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <!-- Basic Card Example -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Card</h6>
          </div>
          <div class="card-body mx-auto">
            <img v-bind:src="myImage" style="height: 250px" />
            <p>Index:{{ myImageIndex }}</p>
            <p>Error: {{ apiErrMsg }}</p>
            <div>
              <a href="#" class="btn btn-info" @click="buttonClick">GET</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <MyCarousel />
  </div>
</template>

<script>
import axios from "axios";

import MyCarousel from "@/components/Carousel.vue";

export default {
  components: {
    MyCarousel
  },
  data() {
    return {
      myImage: null,
      myImageIndex: 0,
      apiErrMsg: "",
    };
  },
  methods: {
    buttonClick: function () {
      console.log("buttonClick");

      //このループを直列でAPIをコールするように変更する
      //非同期処理なので、storeのActionに変更して対応できるはず

      this.getImageFromAPI();
    },
    async getImageFromAPI() {
      console.log("getImageFromAPI : " + process.env.VUE_APP_API_URL_GETIMAGE);
      for (let step = 0; step < 5; step++) {
        console.log("start getImageFromAPI step :" + step);
        try {
          let index = step % 4;
          const response = await axios.get(
            process.env.VUE_APP_API_URL_GETIMAGE + index
          );
          //const response = await axios.get("http://192.168.0.6:8081/api/image/" + index)
          this.myImage = "data:image/png;base64," + response.data;
          this.myImageIndex = step;
        } catch (e) {
          console.log("getImageFromAPI fail :" + e);
          this.apiErrMsg = e;
          break;
        }
        console.log("end getImageFromAPI step :" + step);
      }
    },
  },
  computed: {
    image() {
      return "data:image/png;base64," + this.$store.state.image;
    },
  },
};
</script>