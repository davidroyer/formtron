<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
      bordered
      class="shadow-0"
    >
      <q-step
        :name="1"
        title="Form Templates To use"
        icon="settings"
        :done="step > 1"
      >
        <q-list>
          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check1"></q-checkbox>
            </q-item-section>

            <q-item-section>
              <q-item-label>Single Program Form</q-item-label>
              <q-item-label caption>
                Check this if you do <strong>not</strong> want to show a program
                list
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check2"></q-checkbox>
            </q-item-section>

            <q-item-section>
              <q-item-label>Step Form Layout</q-item-label>
              <q-item-label caption>
                Breaks the form into mutiple steps
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section side top>
              <q-checkbox v-model="check3"></q-checkbox>
            </q-item-section>

            <q-item-section>
              <q-item-label>Qualifier</q-item-label>
              <q-item-label caption>
                This form includes one or more qualifier programs
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue"></q-btn>
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish"></q-btn>
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      check1: true,
      check2: false,
      check3: false
    };
  }
};
</script>

<style>
.q-stepper {
  min-width: 600px;
}
</style>
