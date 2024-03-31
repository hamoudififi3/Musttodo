<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Edit Student</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedStudent.name.firstName" label="First Name"></v-text-field>
        <v-text-field v-model="editedStudent.name.lastName" label="Last Name"></v-text-field>
        <v-text-field v-model="editedStudent.teacher" label="Email"></v-text-field>
        <v-text-field v-model="editedStudent.phone" label="Phone"></v-text-field>
        <v-text-field v-model="editedStudent.status" label="Status"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" @click="saveChanges">Save</v-btn>
        <v-btn color="blue darken-1" @click="closeDialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      editedStudent: {}
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
      this.editedStudent = { ...this.student };
    },
    saveChanges() {
      this.$emit('save-changes', this.editedStudent);
      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>
