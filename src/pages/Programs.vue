<template>
  <q-page class="flex flex-center">
    <DataTable />
    <!-- <q-btn color="primary" icon="check" label="OK" @click="onClick" /> -->
  </q-page>
</template>

<script>
import DataTable from "components/DataTable";
export default {
  name: "PagePrograms",
  components: { DataTable },
  methods: {
    onClick() {
      alert("Clicked!");
    }
  }
};
</script>
