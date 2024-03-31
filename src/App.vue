<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4" color="grey-lighten-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>
        <div>john@google.com</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list>
        <!-- Display list items dynamically based on the current route -->
        <v-list-item v-for="Link in Links" :key="Link.text" link :to="Link.to">
          <v-list-item-title>{{ Link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
        <!-- This will render the component for the current route -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    Links: [
      {
        text: "Home",
        to: "/home"
      },
      {
        text: "About",
        to: "/about"
      },
      {
        text: "Students",
        to: "/students"
      },
      {
        text: "Teachers",
        to: "/teacher"
      },
      {
        text: "Training",
        to: "/training"
      },
    ]
  })
};
</script>


<script setup>
//
</script>
