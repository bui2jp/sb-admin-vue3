<template>
  <div>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        data-backdrop="static"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >Address</span
                  >
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Nagoya"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-info" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-info" data-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SelectableCalender></SelectableCalender>

  </div>
</template>

<script>
// @ is an alias to /src
import SelectableCalender from '@/components/SelectableCalender.vue'

export default {
  components:{
    SelectableCalender
  },
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