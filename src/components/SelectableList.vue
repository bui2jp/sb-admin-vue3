<template>
  <div class="container">
    <h2>Filterable List</h2>
    <p>
      Type something in the input field to search the list for specific items:
    </p>
    <input
      class="form-control mb-2"
      id="myInput"
      type="text"
      placeholder="Search.."
    />
    <ul class="list-group" id="myList">
      <li class="list-group-item list-group-item-action">First item</li>
      <li class="list-group-item list-group-item-action">Second item</li>
      <li class="list-group-item list-group-item-action">Third item</li>
      <li class="list-group-item list-group-item-action">Fourth</li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted: function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  },
};
</script>