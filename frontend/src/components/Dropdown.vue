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
      this.$http.get(`/culture/category`).then((response) => {
        this.dropdownItem = response.data;
      });
    }
    console.log(this.data);
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
        console.log("지역");
        // this.dropdownItem.splice(0);
        // let data = this.$store.state.cultureList;

        // if (index == 0) {
        //   this.dropdownItem = this.$store.state.cultureList.slice();
        //   this.pageList = this.dropdownItem.slice(0, 9);
        // } else {
        //   for (let i = 0; i < data.length; i++) {
        //     if (
        //       this.$store.state.cultureList[i].borough == this.area[index].name
        //     ) {
        //       this.dropdownItem.push(this.$store.state.cultureList[i]);
        //       this.pageList = this.dropdownItem.slice(0, 9);
        //     }
        //   }
        // }
        // this.selectLocate = this.area[index].name;
        this.selectData = this.dropdownItem[index].name;
      } else if (this.data == "category") {
        console.log("카테고리");

        this.selectData = this.dropdownItem[index].name;

        // let category = this.dropdownItem[index].listCategory;

        // this.$http.get(`/culture/category/${category}`).then((response) => {
        //   this.$store.state.cultureList = response.data;
        //   this.searchResult = this.$store.state.cultureList;
        // });

        // this.$router.push({
        //   name: "categoryList",
        //   params: {
        //     category: this.dropdownItem[index].listCategory,
        //     filter: this.dropdownItem[index].name,
        //   },
        // });
      }
    },
  },
};
</script>

<style>
</style>