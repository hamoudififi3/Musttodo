<template>
    <v-dialog v-model="isDialogOpen" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Table Details</v-card-title>
          <v-card-text>
            <p><strong>Name:</strong> {{ student.name.firstName }} {{ student.name.lastName }}</p>
            <p><strong>Teacher:</strong> {{ student.teacher }}</p>
            <p><strong>Students:</strong> {{ student.student }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" variant="text" @click="closeDialog">Close</v-btn>
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
        },
        showDialog: {
          type: Boolean,
          required: true
        }
      },
      computed: {
        isDialogOpen: {
          get() {
            return this.showDialog;
          },
          set(value) {
            if (!value) {
              this.closeDialog();
            }
          }
        },
        },
      methods: {
        closeDialog() {
          this.$emit('update:showDialog', false);
        }
      }
    };
    </script>