<template>
  <div>
    page3
    <v-calendar :attributes="attrs"></v-calendar>
    <v-date-picker v-model="selectedDate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate:null,
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#ff8080",
          },
          dates: new Date(),
          popover: {
            label: "メッセージを表示できます",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>