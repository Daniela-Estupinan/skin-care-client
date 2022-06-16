<template>
    <div class="container" id="app">
  <div class="row ">
    <div class="col-md-4">
      <div class="filter">
        <label><input type="checkbox" v-model="selectedCategory" value="0"/> Todos</label>
        <label><input type="checkbox" v-model="selectedCategory" value="1" /> Piel Seca</label>
        <label><input type="checkbox" v-model="selectedCategory" value="2"/> Piel Mixta</label>
        <label><input type="checkbox" v-model="selectedCategory" value="3" /> Piel Grasa</label>
        <label><input type="checkbox" v-model="selectedCategory" value="4" /> Piel Normal</label>
      </div>
    </div>
  </div>
  <div class="col-md-8">
    <v-row>
    <v-col sm="4" class="pa-3" v-for="product in filteredProduct" :key="product._id">
       <v-card class="pa-1" :to="{ name:'product', params:{id:product._id}}" >
          <v-card-text class="py-0">
            {{product.category}}
          </v-card-text>
          <v-card-title class="headline">
            {{product.nombre}}
          </v-card-title>
          <v-card-text class="py-0" >
            <p>
              {{product.content.substring(0, 100)+"..."}}
            </p>
          </v-card-text>
        </v-card>
    </v-col>
    </v-row>
    </div>
  </div>

</template>
<script>
import API from "../api-admin.js"
export default{
    
  name:'AdvanceFilter',
  data () {
    return {
      products: [],
      
      selectedCategory: ["0"],
    }
  },
   async created(){        
        this.products = await API.getAllProducts();

      },

computed: {
    filteredProduct: function() {  
       const categorys = this.selectedCategory;

      if (categorys.includes("0")){
        return this.products;
     } else
        return this.products.filter(product =>
          categorys.includes(product.categoryN.toString())
        );
    }
  }
};
</script>

