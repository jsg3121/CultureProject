<template>
  <div class="droudown_container">
    <div class="select_box" @click="dropdown">
      <p>
        {{ selectData }}
      </p>
      <ul class="select_option">
        <li
          class="option"
          v-for="(item, index) in dropdownItem"
          :key="item.id"
          @click="selectItem(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      dropdownItem: [],
      selectData: "전체",
    };
  },
  created() {
    if (this.data == "area") {
      this.$http.get(`/culture/area`).then((response) => {
        this.dropdownItem = response.data;
      });
    } else {
      this.selectData = this.$store.state.selectCategory;
      this.$http.get(`/culture/category`).then((response) => {
        this.dropdownItem = response.data;
      });

      if (this.$route.params.searchName !== undefined) {
        this.selectData = this.$route.params.searchName;
      }
    }
  },
  methods: {
    dropdown: function (event) {
      let drop = event.target;
      let selectBox = document.querySelectorAll(".select_box");

      if (drop.classList.contains("select")) {
        drop.classList.remove("select");
      } else {
        for (let i = 0; i < selectBox.length; i++) {
          if (selectBox[i].classList.contains("select")) {
            selectBox[i].classList.remove("select");
          }
        }
        drop.classList.add("select");
      }
    },
    selectItem: function (index) {
      if (this.data == "area") {
        this.$store.state.selectLocate = this.dropdownItem[index].name;
        this.selectData = this.$store.state.selectLocate;

        this.$emit("selectArea", this.selectData);
      } else if (this.data == "category") {
        this.$store.state.selectCategory = this.dropdownItem[index].name;
        this.selectData = this.$store.state.selectCategory;

        this.$emit("selectCategory", this.dropdownItem[index]);
      }
    },
  },
};
</script>

<style>
</style>