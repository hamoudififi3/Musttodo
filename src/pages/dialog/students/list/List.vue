<template>
  <v-data-table :headers="headers" :items="students" :sort-by="[{ key: 'email', order: 'asc' }]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <Comp @saveStudent="handleNewStudent" />
      </v-toolbar>
    </template>

    <template te v-slot:item.name="{ item }">
      <span>{{ item.name.firstName }} {{ item.name.lastName }}</span>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
      <v-icon size="small" @click="detailsItem(item)">mdi-details</v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>

  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
        <v-btn color="blue darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <Détails
    :student="editedItem"
    :showDialog="dialogDetails"
    @update:showDialog="updateDialogDetails"
  />
  <Edit :student="editedItem" @save="saveEditedStudent" ref="editItemDialog" />
</template>

<script>
import Comp from "../list/Add/Add.vue";
import Détails from "../list/Détails/Détails.vue";
import Edit from "../list/Edit/Edit.vue";
export default {
  components: {
    Comp,
    Détails,
    Edit
  },

  data() {
    return {
      students: [],
      dialogDelete: false,
      editedItem: {},
      dialogDetails: false,
      headers: [
        {
          title: "Students",
          align: "start",
          sortable: false,
          value: "name"
        },
        { title: "Email", value: "email" },
        { title: "Phone", value: "phone" },
        { title: "Age", value: "age" },
        { title: "Actions", value: "actions", sortable: false }
      ]
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students = [
        {
          name: {
            firstName: "Kamel",
            lastName: "Mrabet"
          },
          email: "kamelmrabet@gmail.com",
          phone: "0545120854",
          age: 19
        },
        {
          name: {
            firstName: "Cristiano",
            lastName: "Ronaldo"
          },
          email: "cristianoronaldo@gmail.com",
          phone: "0698547122",
          age: 24
        },
        {
          name: {
            firstName: "Mike",
            lastName: "Tyson"
          },
          email: "miketyson@gmail.com",
          phone: "0632589614",
          age: 26
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$nextTick(() => {
        this.$refs.editItemDialog.openDialog();
      });
    },

    deleteItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    detailsItem(item) {
      this.editedItem = Object.assign({}, item); // Set editedItem to the selected item
      this.dialogDetails = true;
    },

    closeDetails() {
      this.dialogDetails = false;
    },

    updateDialogDetails(value) {
      this.dialogDetails = value;
    },

    handleNewStudent(studentData) {
      if (studentData) {
        this.students.push(studentData);
      } else {
        console.error("Error: Student data not received from NewItemCom.vue");
      }
    }
  }
};
</script>
