<template>
  <div class="q-pa-md table-wrapper">
    <q-table
      title="UWA Programs"
      :data="tableData"
      :columns="columns"
      row-key="id"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import uwaData from "../data/uwa.json";
export default {
  // name: 'ComponentName',
  data() {
    return {
      filter: "",

      columns: [
        {
          name: "name",
          label: "Program Name",
          field: "name",
          sortable: true,
          align: "left"
        },
        {
          name: "level",
          label: "Level",
          field: "level",
          sortable: true,
          align: "left"
        },
        { name: "id", label: "ID", field: "id", align: "left" }
      ],
      tableData: uwaData
    };
  }
};
</script>

<style>
.q-table__container {
  /* max-width: 85%; */
  margin-left: auto;
  margin-right: auto;
}
.table-wrapper {
  width: 100%;
  max-width: 1250px;
}
</style>
