<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="q-electron-drag" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <img alt="Quasar logo" src="~assets/rate_review-24px.svg" />

          <span class="q-ml-sm">Wiley Forms Admin</span>
        </q-toolbar-title>

        <q-space />

        <div>
          <q-tabs shrink stretch>
            <q-route-tab label="Programs" to="/programs" exact />
            <q-route-tab label="Groups" to="/program-groups" exact />
            <q-route-tab label="Form Builder" to="/forms" exact />
            <q-route-tab label="Github" to="/github" exact />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition name="slide-fade" mode="out-in">
        <router-view class="view" />
      </transition>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs no-caps active-color="primary" indicator-color="transparent">
        <q-route-tab icon="help" to="/faq" label="FAQ" exact />
        <q-route-tab icon="settings" label="Settings" to="/settings" exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
// eslint-disable-next-line no-undef

export default {
  name: "AppLayout",

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
      return this.ghData.filter(
        item =>
          item.type === "dir" &&
          !item.name.startsWith(".") &&
          !item.name !== "node_modules"
      );
    }
  },

  methods: {
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

<style lang="scss">
.page-left-enter-active,
.page-left-leave-active,
.page-right-enter-active,
.page-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.page-left-enter,
.page-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.page-left-leave-active,
.page-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
