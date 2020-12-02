<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <input
          class="form-control mb-2"
          id="myInput"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <ul class="list-group border" id="myList">
          <li
            class="list-group-item py-1 list-group-item-action"
            v-for="(item, index) in myListData"
            :key="item.myName"
            @click="selectList1(index)"
          >
            {{ index }} : {{ item.myName }}
          </li>
          <!-- <li class="list-group-item list-group-item-action">First item</li>
          <li class="list-group-item list-group-item-action">Second item</li>
          <li class="list-group-item list-group-item-action">Third item</li>
          <li class="list-group-item list-group-item-action">Fourth</li> -->
        </ul>
      </div>
      <div class="col-1"></div>
      <div class="col">
        <ul class="list-group border" id="myList2">
          <li
            class="list-group-item py-1 list-group-item-action"
            v-for="(item, index) in myListData2"
            :key="item.myName"
            @click="selectList2(index)"
          >
            {{ index }} : {{ item.myName }}
          </li>
          <!-- <li class="list-group-item list-group-item-action">First item</li>  -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      myListData: [
        { id: 0, myName: "1st" },
        { id: 1, myName: "2nd" },
        { id: 2, myName: "3rd" },
        { id: 3, myName: "4th" },
        { id: 4, myName: "5th" },
        { id: 5, myName: "6th" },
        { id: 6, myName: "7th" },
        { id: 7, myName: "8th" },
      ],
      myListData2: [],
    };
  },
  mounted: function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  },
  methods: {
    selectList1: function (index) {
      console.log(index);
      //リスト２へ写す
      let value = this.myListData[index];
      this.myListData.splice(index, 1);

      console.log("value:" + value);
      this.myListData2.push(value);
      this.myListData2.sort((a, b) => {
        return a.id - b.id;
      });
    },
    selectList2: function (index) {
      console.log(index);
      //リスト２へ写す
      let value = this.myListData2[index];
      this.myListData2.splice(index, 1);

      console.log("value:" + value);

      this.myListData.push(value);
      this.myListData.sort((a, b) => {
        return a.id - b.id;
      });
    },
  },
};
</script>

<style scoped>
.list-group {
  height: 250px;
  overflow-y: scroll;
}
</style>>