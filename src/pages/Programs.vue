<template>
  <q-page class="flex flex-center">
    <ProgramsTable />
  </q-page>
</template>

<script>
import DataTable from "components/DataTable";
import ProgramsTable from "components/ProgramsTable";

export default {
  name: "PagePrograms",
  // eslint-disable-next-line vue/no-unused-components
  components: { DataTable, ProgramsTable }
};
</script>
