<template>
  <div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <button class="btn btn-info" @click="showAlart">show alert</button>
    <button
      type="button"
      class="btn btn-danger"
      data-toggle="popover"
      title="Popover title xxx"
      data-content="And here's some amazing content. It's very engaging. Right?"
    >
      Click to toggle popover
    </button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>    
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showAlart: function () {
      //$('#myalert').alert()
      if ($(".alert").hasClass("show")) {
        console.log("show alart close");
        $(".alert").alert("close");
      } else {
        console.log("show alart ");
        $(".alert").alert();
      }

      this.isShow = !this.isShow;
    },
  },
  updated: function(){
      //$('[data-toggle="tooltip"]').tooltip();
  }
};
</script>