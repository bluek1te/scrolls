<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
    <q-toolbar class="bg-blue text-white shadow-2 rounded-borders">
      <q-btn flat label="bluek1te" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
  </div>
    <div class="row">
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
    </div>
    <div class="row">
      <div v-for="tag in tags" :key="tag.item">
         <q-badge>
           {{ tag.item }}
         </q-badge>
      </div>
    </div>
    <div class="row">
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'LayoutDefault',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false,
      tags: [
         { item: 'linux', type: 'sys' },
         { item: 'windows', type: 'sys' },
         { item: 'wireshark', type: 'software' },
         { item: 'eagle', type: 'software' },
         { item: 'c++', type: 'language' },
         { item: 'c', type: 'language' },
         { item: 'bash', type: 'language' },
         { item: 'c#', type: 'language' },
         { item: 'javascript', type: 'language' },
         { item: 'bamboo' , type: 'software' },
         { item: 'python', type: 'language' },
         { item: 'vue', type: 'framework' },
         { item: 'flask', type: 'framework' },
         { item: 'sqlite', type: 'db' },
         { item: 'docker', type: 'sys' },
         { item: 'yocto', type: 'framework' },
         { item: 'postgresql', type: 'db' },
         { item: 'photoshop', type: 'software' },
         { item: 'git', type: 'git' },
         { item: 'gdb', type: 'software' },
         { item: 'valgrind', type: 'software' },
         { item: 'bitbucket', type: 'software' },
         { item: 'confluence', type: 'software' },
         { item: 'github', type: 'software' },
         { item: 'excel', type: 'software' },
      ]
    }
  }
}
</script>

<style>
</style>
