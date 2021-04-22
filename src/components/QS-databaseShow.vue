<!-- v-model="requiredItem[item.num]" -->
<<template>
  <div id="app">
    <div id="database">
      <el-table
        :data="tableDatabase"
        border
        style="width: 100%;text-align:center;">
        <el-table-column
          prop="name"
          label="数据库名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="introduction"
          label="简介"
          width="300">
        </el-table-column>
        <el-table-column
          prop="open"
          label="是否公开"
          width="300">
        </el-table-column>
        <el-table-column
          label="操作"
          width="300">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>      
    </div>
  <!-- 数据库列表 -->
<!--     <mu-table :fixedHeader="true" :showCheckbox="false" >
        <mu-thead>
          <mu-tr>
            <mu-th>电影海报</mu-th>
            <mu-th>电影名称</mu-th>
            <mu-th>简介</mu-th>
            <mu-th>评分</mu-th>
            <mu-th>操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="movie of movies">
            <mu-td><img class="movie-poster" :src="movie.poster"></mu-td>
            <mu-td><h3>{{ movie.title }}</h3></mu-td>
            <mu-td>
              <p class="movie-introduction">{{ movie.introduction }}</p></mu-td>
            <mu-td class="movie-rating">{{ movie.rating }}</mu-td>
            <mu-td>
              <mu-raised-button @click="showDetail(movie.title)" label="详细" primary/>
              <mu-raised-button @click="openEditMovieModal(movie)" label="修改" primary/>
              <mu-raised-button @click="removeMovie(movie)" label="删除" secondary/>
            </mu-td>
          </mu-tr>
        </mu-tbody>
    </mu-table> -->
    <!-- 添加电影按钮 -->
    <!-- 添加电影表单 -->
<!--     <vodal :show="addMovieModal" animation="slideDown" :width="500" :height="480" :closeButton="false">
      <mu-text-field v-model="title" fullWidth icon="movie" label="电影名称" labelFloat/><br/>
      <mu-text-field v-model="poster" fullWidth icon="picture_in_picture" label="海报地址" labelFloat/><br/>
      <mu-text-field v-model="introduction"
      multiLine :rows="2" :rowsMax="6"
      fullWidth icon="description" label="简介" labelFloat/><br/>
      <mu-text-field v-model="rating" fullWidth icon="star" label="评分" labelFloat/><br/>
      <mu-raised-button @click="closeModal" label="取消" icon="undo"  />
      <mu-raised-button @click="addMovie" label="确定" icon="check" primary/>
    </vodal>
    编辑电影表单
    <vodal :show="editMovieModal" animation="slideDown" :width="500" :height="480" :closeButton="false">
      <mu-text-field v-model="title" fullWidth icon="movie" label="电影名称" labelFloat/><br/>
      <mu-text-field v-model="poster" fullWidth icon="picture_in_picture" label="海报地址" labelFloat/><br/>
      <mu-text-field v-model="introduction"
      multiLine :rows="2" :rowsMax="6"
      fullWidth icon="description" label="简介" labelFloat/><br/>
      <mu-text-field v-model="rating" fullWidth icon="star" label="评分" labelFloat/><br/>
      <mu-raised-button @click="closeModal" label="取消" icon="undo"  />
      <mu-raised-button @click="editMovie" label="确定" icon="check" primary/>
    </vodal> -->
  </div>
</template>

<script>

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: 'qsDatabaseShow',
  // created() {
  //   this.getMovies()
  //   document.title = this.$route.name
  // },
  created() {
    this.getDataList()
  },
  components: {},

  data() {
    return {
        tableDatabase: [],
    }
  },

  methods: {
    // 获取所有电影的方法
    getDataList() {
      let that = this
        $.ajax({  
            type:"get",//type可以为post也可以为get  
            url: "/css/databaseList",  
            data: {},//这行不能省略，如果没有数据向后台提交也要写成data:{}的形式  
            contentType: 'application/json; charset=UTF-8',
            dataType:"json",//这里要注意如果后台返回的数据不是json格式，那么就会进入到error:function(data){}中  
            async: false,
            success:function(value){               
              console.log(value)
              that.tableDatabase = value;

            },  
            error:function(value){ 
                alert("数据库查询出现了错误！");  
            } 
        });  
    },
  }
}
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #database {
    text-align: center;
    margin: 30px auto;
    border-radius: 8px;
    padding-left: 30px;
    padding-right: 30px;
    width: 1201px;
  }
  .el-table--border td:first-child .cell, .el-table--border th:first-child .cell, .el-table .cell, .el-table th div {
      padding-left: 10px;
      text-align: center;
  }
  .el-table th>.cell{
    font-weight: bolder;
    color: #222222;
    font-size: larger;
  }
/*.mu-th{
  text-align: center !important;
}
.mu-td{
  text-align: center !important;
}
  .movie-poster{
    width: 80px;
    padding: 4px 0;
  }
  .movie-introduction{
    white-space: normal;
    padding:4px 4px;
    letter-spacing: 1px;
    font-size: 14px;
    text-align: left;
    text-indent: 2em;
  }*/
</style>





<!-- <template>
  <div id="app">
  <el-container id="outside">
    <el-main style="margin-top: 18px;background-color: #EFEFEF;">
      <div id="introduce">
        <div id="txt1">平台数据库概览</div>
          <el-row>
            <el-col :span="8">
              <div class="left">
                
              </div>
            </el-col>
            <el-col :span="8">
              <div class="center">
                
              </div>
            </el-col>
            <el-col :span="8">
              <div class="right">
                
              </div>
            </el-col>
          </el-row>
      </div>

    </el-main>

  </el-container>    
  </div>
</template>

<script>
export default {
  name: 'qsDatabaseShow',
  data() {
    return {
      databaseList:[],
      
    }
  },
  methods:{

  }
};
</script> -->

<!-- <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #outside {
    margin-left: 200px;
    margin-right: 200px;
  }
  #txt1 {
    text-align: left;
    color: black;
    border-bottom-style: solid;
    border-color: #DEDEDE;
    border-width: 1px;
    padding-bottom: 25px;
    margin-bottom: 25px;
    padding-top: 25px;
    font-weight: bold;
    font-size: 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  #introduce {
    background-color: white;
    border-radius: 8px;
    padding-left: 30px;
    padding-right: 30px;
  }
  #feedback {
    border-radius: 8px;
    background-color: white;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  #txt3{
    text-align: left;
    margin-top: 20px;
    color: #666666;
    font-size: 15px;
  }

  #txt4 {
    font-size: 17px;
    color: #409EFF;
    padding: 20px 10px 20px 10px;
    text-align: center;
  }
  a:link{
    color: #409EFF;
    text-decoration: none;
  }  
  a:visited{
    color: #409EFF;
    text-decoration: none;
  }  
  a:hover{
    color: #409EFF;
    text-decoration: none;
  }
</style> -->

