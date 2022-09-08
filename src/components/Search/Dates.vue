<template>
  <div class="search-area">
    <div
      class="search-filter cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/calendar.png" />
        <h4>When?</h4>
      </div>
      <h5 v-if="date && date.startDate && date.endDate">{{ formatDate }}</h5>
    </div>
    <div
      v-if="showDropdown"
      class="search-dropdown"
      v-click-outside="onClickOutside"
    >
      <h4>Select Date Range</h4>

      <v-row>
        <v-col cols="12">
          <date-range-picker
            ref="picker"
            :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
            :minDate="minDate"
            :showWeekNumbers="true"
            :showDropdowns="true"
            :autoApply="true"
            :linkedCalendars="true"
            v-model="dateRange"
          >
            <template v-slot:input="picker" style="min-width: 350px">
              {{ new Date(picker.startDate).toDateString() }} -
              {{ new Date(picker.endDate).toDateString() }}
            </template>
          </date-range-picker>
        </v-col>
      </v-row>

      <v-divider class="my-4" />
      <v-btn
        outlined
        color="info darken-4"
        depressed
        class="text-capitalize"
        @click="save"
        >Save</v-btn
      >
      <v-btn
        outlined
        color="info darken-4"
        depressed
        class="text-capitalize ml-3"
        @click="cancel"
        >Cancel</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.search-filter {
  background: white;
  border-radius: 8px 8px 0px 0px;
  padding: 10px;
  height: 55px;
  overflow: hidden;
}

.search-area {
  position: relative;
}

.search-dropdown {
  position: absolute;
  background: white;
  top: 70px;
  left: 0;
  z-index: 2;
  border-radius: 8px;
  padding: 10px;
  min-width: 350px;
  max-width: auto;
  height: auto;
  max-height: 450px;
}
</style>

<script>
import DateRangePicker from 'vue2-daterange-picker';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
export default {
  components: { DateRangePicker },
  computed: {
    formatDate() {
      if (this.dateRange.startDate && this.dateRange.endDate) {
        const start = new Date(this.dateRange.startDate);
        const end = new Date(this.dateRange.endDate);

        const sDay = start.getDate()
        const sMonth = start.getMonth() + 1;
        const sYear = start.getFullYear();

        const eDay = end.getDate();
        const eMonth = end.getMonth() + 1;
        const eYear = end.getFullYear();

        return `${sDay}/${sMonth}/${sYear} - ${eDay}/${eMonth}/${eYear}`;
      }
      return null;
    },
  },
  data() {
    return {
      showDropdown: false,
      date: null,
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
      },
      minDate: new Date(),
    };
  },
  methods: {
    onClickOutside() {
      this.showDropdown = false;
    },
    cancel() {
      this.showDropdown = false;
      this.date = null;
    },
    save() {
      this.showDropdown = false;
      this.date = { ...this.dateRange };
    },
  },
};
</script>
