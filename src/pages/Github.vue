<template>
  <q-page padding>
    <p>Github Directories & Actions</p>
    <div class="row">
      <div class="col-12 col-md-4">
        <!-- <q-btn @click="getGithubFile" label="Get Github File"></q-btn>
        <q-btn @click="createGithubFile" label="Create New File"></q-btn> -->

        <q-input
          v-model="newCollection.directoryName"
          type="text"
          label="Directory Name"
        />
        <q-btn
          color="primary"
          icon="add"
          @click="createCollectionDirectory"
          label="Create Form Collection"
        ></q-btn>
        <div class="q-pa-md" style="max-width: 400px">
          <q-list bordered separator>
            <q-item
              @click="getFormStarterContents(formStarter)"
              v-for="formStarter in formStarterTemplates"
              :key="formStarter.path"
              v-ripple
              clickable
            >
              <q-item-section>
                <q-item-label>{{ formStarter.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <pre>{{ selected }}</pre>
      </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  data: () => ({
    ghRepoContents: [],
    activeDirectory: {},
    directoryContents: {},
    formStarterTemplates: [],
    selected: {},
    newCollection: {
      directoryName: "",
      files: []
    }
  }),

  async created() {
    this.ghRepoContents = await this.getGithubData();
    this.getformTemplates();
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
    async createCollectionDirectory() {
      const formName = `${this.newCollection.directoryName}`;
      const file1 = this.newCollection.files[0];
      const file2 = this.newCollection.files[1];
      await this.createGithubFile(`${formName}/${file1.name}`, file1.content);
      await this.createGithubFile(`${formName}/${file2.name}`, file2.content);
      alert("Added!");
    },

    async getFormStarterContents(dir) {
      this.selected = dir;
      const files = await this.getGithubData(dir.path);
      files.forEach(async file => {
        const { name, content } = await this.getGithubData(file.path);
        this.newCollection.files.push({ name, content });
      });
    },

    async getformTemplates() {
      this.formStarterTemplates = await this.getGithubData(".TEMPLATES");
    },

    async createNewFormTemplate() {
      this.formStarterTemplates = await this.getGithubData(".TEMPLATES");
    },

    async getDirectoryContent(link) {
      this.activeDirectory = link;
      this.directoryContents = await this.getGithubData(link.path);
    },

    async getGithubData(path = "") {
      const { data } = await this.$ghApi.get(`/contents/${path}`);
      return data;
    },

    async createGithubFile(path = "", content) {
      console.log("TCL: createGithubFile -> path", path);
      console.log("TCL: createGithubFile -> content", content);
      // await Promise.resolve();
      await this.$ghApi.put(`/contents/${path}`, {
        content,
        message: "New Form Template File"
      });
      // console.log("create response", response);
    },

    async getGithubFile() {
      const { data } = await this.$ghApi.get("/contents/Notes.md");
      console.log("create data", data);
      console.log("File Content", atob(data.content));
    }
  }
};
</script>
