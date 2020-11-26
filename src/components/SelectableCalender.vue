<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-info mt-3"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Launch modal2
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Calender</h5>
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
                <v-date-picker v-model="selectedDate" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-info" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-info">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>    
</template>