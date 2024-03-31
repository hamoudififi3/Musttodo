<template>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ props }">
        <v-btn class="mb-2" color="primary" dark v-bind="props">Add List</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
  
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="4" sm="6">
                <v-text-field
                  v-model="editedItem.name.firstName"
                  label="First Name"
                  :rules="[name => !!name || 'First Name is required']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-text-field
                  v-model="editedItem.name.lastName"
                  label="Last Name"
                  :rules="[name => !!name || 'Last Name is required']"
                >
                  <template v-slot:error="{ input }">
                    <div class="error--text" v-if="!input.length">Name cannot be empty.</div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-select v-model="selectedTeacher" :items="formattedTeachers" label="Select Teacher"></v-select>
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-select v-model="SelectedStudents" :items="formattedTeachers" label="Select Student"></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" variant="text" @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" variant="text" :disabled="!validateForm()" @click="save">Save</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {  

    data() {
      return {
        dialog: false,
        formTitle: true,
        editedIndex: -1,
        selectedTeacher: null,
        SelectedStudents: null,
        teachers: [
        {
          firstName: "Mr",
          lastName: "Saci",
        },
        {
          firstName: "Mr",
          lastName: "Ramdani",
        },
        {
          firstName: "Mrs",
          lastName: "Malak",
        }
        ],
        students: [
        {
          firstName: "Kamel",
          lastName: "Mrabet"
        },
        {
          firstName: "Cristiano",
          lastName: "Ronaldo"
        },
        {
          firstName: "Myke",
          lastName: "Tyson"
        },
        ],
        editedItem: {
          name: {
            firstName: "",
            lastName: ""
          },
          teacher:"",
          student: "",
        },
        defaultItem: {
          name: {
            firstName: "",
            lastName: ""
          },
          teacher:"",
          student: "",
        }
      };
    },
    computed: {
    formattedTeachers() {
      return this.teachers.map(teacher => `${teacher.firstName} ${teacher.lastName}`);
    },
    formattedStudents() {
      return this.students.map(student => `${student.firstName} ${student.lastName}`);
    }
  },
    methods: {
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
          this.formTitle = true;
        });
      },
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.students[this.editedIndex], this.editedItem);
        } else if (this.validateForm() && this.students) {
          this.$emit("saveStudent", this.editedItem);
        } else {
          console.error("Error: Students array is not yet initialized");
        }
        this.close();
      },
      validateForm() {
        return (
          this.editedItem.name.firstName &&
          this.editedItem.name.lastName &&
          this.validatePhone(this.editedItem.number)
        );
      },
      validateEmail(teacher) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(teacher);
      },
      validatePhone(number) {  
        return (
          (number.length < 3 ) ||
          "There Have To Be Students"
        );
      },
      detailsItem(item) {
        this.$emit('showDialog', true); // Emit event to show student details dialog
      }
    }
  };
  </script>
  