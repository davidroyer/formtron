<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header
      elevated
      class="q-electron-drag bg-white text-grey-8"
      height-hint="64"
    >
      <q-toolbar class="GNL__toolbar">
        <q-btn
          v-if="$q.screen.lt.lg"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <!-- <img
            src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
          /> -->
          <span class="q-ml-sm">FormTron</span>
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GNL__toolbar-input"
          outlined
          dense
          v-model="search"
          color="bg-grey-7 shadow-1"
          placeholder="Search for topics, locations & sources"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
          <template v-slot:append>
            <q-btn flat dense round aria-label="Menu" icon="arrow_drop_down">
              <q-menu anchor="bottom right" self="top right">
                <div class="q-pa-md" style="width: 400px">
                  <div class="text-body2 text-grey q-mb-md">
                    Narrow your search results
                  </div>

                  <div class="row items-center">
                    <div class="col-3 text-subtitle2 text-grey">
                      Exact phrase
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="exactPhrase" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Has words
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="hasWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Exclude words
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="excludeWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Website
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="byWebsite" />
                    </div>

                    <div class="col-12 q-pt-lg row justify-end">
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px;"
                        label="Search"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px;"
                        @click="onClear"
                        label="Clear"
                        v-close-popup
                      />
                    </div>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
          >
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-item-label class="q-mt-sm" header>Main Functionality</q-item-label>
        <q-list class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account Settings"
            caption="David Royer"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="settings" label="Settings">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="school"
            label="Schools"
            header-class="text-purple"
          >
            <q-card>
              <q-card-section>
                <q-item
                  :header-inset-level="1"
                  class="GNL__drawer-item"
                  v-ripple
                  v-for="link in schoolList"
                  :key="link.text"
                  clickable
                >
                  <q-item-section>
                    <q-item-label>{{ link.text }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />
        </q-list>

        <q-item-label class="q-mt-sm" header>Other Items</q-item-label>
        <q-list class="rounded-borders">
          <q-expansion-item expand-separator icon="help" label="FAQ">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="build" label="Form Builder">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="dynamic_feed"
            label="Program Groups"
          >
            <q-card>
              <q-card-section>
                <q-item
                  :header-inset-level="1"
                  class="GNL__drawer-item"
                  v-ripple
                  v-for="link in schoolList"
                  :key="link.text"
                  clickable
                >
                  <q-item-section>
                    <q-item-label>{{ link.text }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="folder"
            label="Github Directories"
          >
            <q-card>
              <q-card-section>
                <q-item
                  :header-inset-level="1"
                  class="GNL__drawer-item"
                  v-ripple
                  v-for="link in ghDirectories"
                  :key="link.path"
                  clickable
                >
                  <q-item-section>
                    <q-item-label>{{ link.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "GoogleNewsLayout",

  data() {
    return {
      ghData: [],
      leftDrawerOpen: false,
      search: "",
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: "",
      hasWords: "",
      excludeWords: "",
      byWebsite: "",
      byDate: "Any time",
      schoolList: [
        { text: "Alvernia" },
        { text: "CSP" }
        // { icon: "web", text: "Top stories" },
        // { icon: "person", text: "For you" },
        // { icon: "star_border", text: "Favourites" },
        // { icon: "search", text: "Saved searches" }
      ],
      links2: [
        { icon: "school", text: "Canada" },
        { icon: "fas fa-globe-americas", text: "World" },
        { icon: "place", text: "Local" },
        { icon: "domain", text: "Business" },
        { icon: "memory", text: "Technology" },
        { icon: "local_movies", text: "Entertainment" },
        { icon: "directions_bike", text: "Sports" },
        { icon: "fas fa-flask", text: "Science" },
        { icon: "fitness_center", text: "Health " }
      ],
      links3: [
        { icon: "", text: "Language & region" },
        { icon: "", text: "Settings" },
        { icon: "open_in_new", text: "Get the Android app" },
        { icon: "open_in_new", text: "Get the iOS app" },
        { icon: "", text: "Send feedback" },
        { icon: "open_in_new", text: "Help" }
      ]
    };
  },

  computed: {
    ghDirectories() {
      return this.ghData.filter(item => item.type === "dir");
      // return this.ghData(item => item.type === "dir");
    }
  },

  async created() {
    await this.getGithubData();
  },

  methods: {
    async getGithubData() {
      // const ghDirectory = "fdu";
      // const { data } = await this.$ghApi.get(`/contents/${ghDirectory}`);
      const { data } = await this.$ghApi.get(`/contents`);
      this.ghData = data;
    },
    onClear() {
      this.exactPhrase = "";
      this.hasWords = "";
      this.excludeWords = "";
      this.byWebsite = "";
      this.byDate = "Any time";
    },

    changeDate(option) {
      this.byDate = option;
      this.showDateOptions = false;
    }
  }
};
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
