<template>
  <div>
    <input type="file" @change="importExcel">

    <el-button @click="exportEXcel">导出Excel</el-button>

    <table id="table"></table>

    <el-table :data="computeData">
      <el-table-column
        prop="student_id"
        label="student_id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="student_name"
        label="student_name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="room_text"
        label="room_text">
      </el-table-column>
      <el-table-column
        prop="grade_name"
        label="grade_name">
      </el-table-column>
      <el-table-column
        prop="subject_text"
        label="subject_text">
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data.length">
    </el-pagination>
  </div>
</template>


<script>
import request from '@/utils/request.js';
import XLSX from 'xlsx';

export default {
  data(){
    return {
      currentPage: 1,
      pageSize: 10,
      data: []
    }
  },
  computed: {
    computeData(){
      return this.data.slice((this.currentPage-1)*this.pageSize, this.currentPage*this.pageSize);
    }
  },
  methods: {
    handleSizeChange(e){
      this.pageSize = e;
    },
    importExcel(e){
      let file = e.target.files[0];

      var reader = new FileReader();
      reader.onload = (e)=>{
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        console.log('workbook...', workbook);

        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var json = XLSX.utils.sheet_to_json(worksheet);


        var container = document.getElementById('table');
        container.innerHTML = XLSX.utils.sheet_to_html(worksheet);

        console.log('json...', json);
        this.data = json;
        /* DO SOMETHING WITH workbook HERE */
      };
      reader.readAsArrayBuffer(file);
    },
    exportEXcel(){
      var wb = XLSX.utils.book_new();;
      console.log(this.data, 'keys...', Object.keys(this.data[0]))
      // 创建worksheet
      var ws = XLSX.utils.json_to_sheet(this.data, {header: Object.keys(this.data[0])});
      console.log('ws...', ws);
      // 通过worksheet生成workbooks
      XLSX.utils.book_append_sheet(wb, ws, 'student1')
      XLSX.utils.book_append_sheet(wb, ws, 'student2')
      XLSX.utils.book_append_sheet(wb, ws, 'student3')

      // 把workbook生成excel
      XLSX.writeFile(wb, '');
    }
  },
  async created(){
    // let res = await request('/manger/student');
    // console.log('res...', res);
    // this.data = res.data;
  }
}
</script>
