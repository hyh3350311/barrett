webpackJsonp([4],{"18Ki":function(t,e,a){var r=a("hxH8");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7ffc414e",r,!0)},FRf3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("F+jZ"),o={name:"app",data:function(){return{sno:"",subLaboratoryCode:"",userName:"",pageNum:1,pageSize:10,listGroup:[],totalCount:0,token:sessionStorage.getItem("TOKEN"),subLaboratoryList:[]}},created:function(){this.queryList(),this.queryListTree()},methods:{queryList:function(t){var e=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/discipline/page",params:{sno:this.sno,subLaboratoryCode:this.subLaboratoryCode,userName:this.userName,pageNum:this.pageNum,pageSize:this.pageSize},contentType:"application/x-www-form-urlencode"}).then(function(t){e.listGroup=t.data.dataList,e.totalCount=t.data.totalCount}).catch(function(t){Object(r.a)(t,e)})},queryListTree:function(t){var e=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/lab/listTree?type=byLabName",contentType:"application/x-www-form-urlencode"}).then(function(t){if(t.data.key="0000"){var a=t.data.ext;for(var r in a)for(var o=0;o<a[r].length;o++)e.subLaboratoryList.push(a[r][o])}else e.$message({message:t.data.msg,type:"warning",showClose:!0})}).catch(function(t){Object(r.a)(t,e)})},handleCurrentChange:function(t){this.pageNum=t,this.queryList()}},filters:{formatTime:r.b}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blacklist"}},[a("el-form",[a("div",{staticStyle:{float:"left",width:"300px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"300px"}},[a("el-form-item",{attrs:{label:"学工号"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.sno,callback:function(e){t.sno=e},expression:"sno"}})],1)],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"300px",height:"40px",overflow:"hidden"}},[a("el-form-item",{attrs:{label:"所有子实验室"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择活动区域"},model:{value:t.subLaboratoryCode,callback:function(e){t.subLaboratoryCode=e},expression:"subLaboratoryCode"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),t._l(t.subLaboratoryList,function(t){return a("el-option",{key:t.subLaboratoryCode,attrs:{label:t.subLaboratoryName,value:t.subLaboratoryCode}})})],2)],1)],1),t._v(" "),a("div",{staticStyle:{float:"left",width:"200px"}},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.queryList}},[t._v("查询")])],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%","min-height":"600px"},attrs:{data:t.listGroup,stripe:""}},[a("el-table-column",{attrs:{prop:"sno",label:"学工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subLaboratoryName",label:"实验室名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{ref:"popover1",attrs:{placement:"left",title:"描述：",width:"200",trigger:"hover",content:e.row.remark}}),t._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{type:"text",size:"small"}},[t._v("查看")])]}}])})],1),t._v(" "),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[a("div",{staticClass:"block",staticStyle:{padding:"20px"}},[a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[10],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)])],1)},staticRenderFns:[]},n=a("VU/8")(o,l,!1,function(t){a("18Ki")},"data-v-983fb2f6",null);e.default=n.exports},hxH8:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#blacklist .el-button--text[data-v-983fb2f6] {\r\n    border-color: transparent;\r\n    color: #409eff;\r\n    background: transparent;\r\n    padding-left: 0;\r\n    padding-right: 0;\n}\n#blacklist table tbody tr td button.el-button.el-button--primary.is-plain[data-v-983fb2f6] {\r\n    color: #909399;\r\n    background: #f4f4f5;\r\n    border-color: #d3d4d6;\n}\n#blacklist table tbody tr td button.el-button.el-button--primary.is-plain[data-v-983fb2f6]:hover,\r\n#blacklist table tbody tr td button.el-button.el-button--primary.is-plain[data-v-983fb2f6]:focus\r\n{\r\n    color: #fff;\r\n    background: #409EFF;\r\n    border-color: #d3d4d6;\n}\r\n",""])}});