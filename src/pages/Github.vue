<template>
  <q-page padding>
    <p>Github Directories & Actions</p>
    <div class="row">
      <div class="col-12 col-md-4">
        <q-btn @click="getGithubFile" label="Get Github File"></q-btn>
        <q-btn @click="createGithubFile" label="Create New File"></q-btn>
        <div class="q-pa-md" style="max-width: 400px">
          <q-list bordered separator>
            <q-item
              @click="getDirectoryContent(link)"
              v-for="link in ghList"
              :key="link.path"
              v-ripple
              clickable
            >
              <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <pre>{{ directoryContents }}</pre>
      </div>
    </div>
  </q-page>
</template>

<script>
const fileContent = `# FROM GITHUB PAGE ROUTE - WORKING WITH ASYNC

Demo Admin App for Wiley Forms

## Install the dependencies
`;
export default {
  data: () => ({
    ghRepoContents: [],
    activeDirectory: {},
    directoryContents: {}
  }),

  async created() {
    this.ghRepoContents = await this.getGithubData();
  },

  computed: {
    ghList() {
      return this.ghRepoContents.filter(
        item =>
          item.type === "dir" &&
          !item.name.startsWith(".") &&
          !item.name !== "node_modules"
      );
    }
  },

  methods: {
    async getDirectoryContent(link) {
      this.activeDirectory = link;
      this.directoryContents = await this.getGithubData(link.path);
    },

    async getGithubData(path = "") {
      const { data } = await this.$ghApi.get(`/contents/${path}`);
      return data;
    },

    async createGithubFile() {
      const response = await this.$ghApi.put("/contents/TestFile2.md", {
        message: "Testing API",
        content: btoa(fileContent)
      });
      console.log("create response", response);
    },

    async getGithubFile() {
      const { data } = await this.$ghApi.get("/contents/Notes.md");
      console.log("create data", data);
      console.log("File Content", atob(data.content));
    }
  }
};
</script>
