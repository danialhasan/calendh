<script>
export default {
  data() {
    return {
      createCollectionValue: "",
      createDocumentValue: "",
      readCollectionValue: "",
      readDocumentValue: "",
      updateCollectionValue: "",
      updateDocumentValue: "",
      updateDataValue: {},
    };
  },
  props: [],
  methods: {
    async firestoreCreate() {
      console.log(this.createCollectionValue, this.createDocumentValue);
      if (
        this.createCollectionValue === "" ||
        this.createDocumentValue === ""
      ) {
        console.error("Collection and document field must not be empty.");
        return;
      }
      try {
        const docRef = this.$fire.firestore
          .collection(this.createCollectionValue)
          .doc(this.createDocumentValue);

        await docRef.set({
          name: "test name",
          occupation: "plumber",
        });
      } catch (error) {
        console.error(error);
        return;
      }
    },
    async firestoreRead() {
      console.log("Reading from database...");

      const snapshot = await this.$fire.firestore
        .collection(this.readCollectionValue)
        .get();
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    },
    async firestoreDelete() {
      console.log("Clearing firestore...");
      // get all collections, then delete them.
      try {
        const collections = await this.$fire.firestore.listCollections();
        console.log(collections);
      } catch (error) {
        console.log(error);
        return;
      }
    },
    async firestoreUpdate() {
      console.log("Updating firestore collection...");
      try {
        const docRef = this.$fire.firestore
          .collection(this.updateCollectionValue)
          .doc(this.updateDocumentValue);

        const response = await docRef.set({ test: "test", testing: "testing" });
        console.log(response);
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
  mounted() {
    this.createCollectionValue = "Create Collection Test Data";
    this.createDocumentValue = "Create Document Test Data";
    this.readCollectionValue = "Create Collection Test Data";
    this.$fire.firestore
      ? console.log("Firestore working")
      : console.log("Firestore disabled");
  },
};
</script>
<template>
  <div class="w-full">
    <div
      class="
        max-w-screen-sm
        min-h-[640px]
        mx-auto
        bg-gray-100
        border border-gray-800
        pt-4
        rounded-md
        pl-6
      "
    >
      <h2 class="font-bold text-3xl pb-2">Create Collection</h2>
      <form class="flex flex-wrap w-1/2" @submit.prevent="firestoreCreate">
        <label for="collection">Collection name</label>
        <input
          type="text"
          v-model="createCollectionValue"
          name="collection"
          placeholder="Collection name..."
          class="w-full"
        />
        <label for="document">Document name</label>
        <input
          type="text"
          v-model="createDocumentValue"
          placeholder="Document name..."
          name="document"
          class="w-full"
        />
        <button
          type="submit"
          class="
            justify-self-end
            px-4
            py-3
            bg-green-500
            text-white
            rounded-xl
            mt-3
          "
        >
          Create collection
        </button>
      </form>
      <h2 class="font-bold text-3xl mt-4 pb-2">Read Collection</h2>
      <form class="flex flex-wrap w-1/2" @submit.prevent="firestoreRead">
        <label for="readCollection">Collection name</label>
        <input
          type="text"
          v-model="readCollectionValue"
          name="collection"
          placeholder="Collection name..."
          class="w-full"
        />
        <label for="document">Document name</label>
        <input
          type="text"
          v-model="readDocumentValue"
          placeholder="Document name..."
          name="document"
          class="w-full"
        />
        <button
          type="submit"
          class="
            justify-self-end
            px-4
            py-3
            bg-blue-500
            text-white
            rounded-xl
            mt-3
          "
        >
          Get collection
        </button>
      </form>

      <h2 class="font-bold text-3xl mt-4 pb-2">Add to Collection</h2>
      <form class="flex flex-wrap w-1/2" @submit.prevent="firestoreUpdate">
        <label for="readCollection">Collection name</label>
        <input
          type="text"
          v-model="updateCollectionValue"
          name="collection"
          placeholder="Collection name..."
          class="w-full"
        />
        <label for="document">Document name</label>
        <input
          type="text"
          v-model="updateDocumentValue"
          placeholder="Document name..."
          name="document"
          class="w-full"
        />

        <label for="data">Data</label>
        <input
          type="text"
          v-model="updateDataValue"
          placeholder="Data..."
          name="data"
          class="w-full"
        />

        <button
          type="submit"
          class="justify-self-end px-4 py-3 bg-black text-white rounded-xl mt-3"
        >
          Update collection
        </button>
      </form>
      <h2 class="font-bold text-3xl mt-4 pb-2">Delete Collections</h2>
      <form class="mb-4 flex flex-wrap w-1/2" @submit.prevent="firestoreDelete">
        <!-- <label for="readCollection">Collection name</label>
        <input
          type="text"
          v-model="readCollectionValue"
          name="collection"
          placeholder="Collection name..."
          class="w-full"
        />
        <label for="document">Document name</label>
        <input
          type="text"
          v-model="readDocumentValue"
          placeholder="Document name..."
          name="document"
          class="w-full"
        /> -->
        <button
          type="submit"
          class="
            justify-self-end
            px-4
            py-3
            bg-red-500
            text-white
            rounded-xl
            mt-3
          "
        >
          Delete collection
        </button>
      </form>
    </div>
  </div>
</template>