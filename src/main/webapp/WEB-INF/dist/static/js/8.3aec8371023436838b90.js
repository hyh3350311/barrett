webpackJsonp([8],{DfcI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),l=a.n(i),o=a("F+jZ"),r={data:function(){return{validateFlag:!1,userName:sessionStorage.getItem("name"),token:sessionStorage.getItem("TOKEN"),facultyList:[],total:0,page:1,pageSize:10,msg:"",msgVisible:!1,listLoading:!1,editFormVisible:!1,editLoading:!1,editFormRules:{facultyCode:[{required:!0,message:"请输入系别编号",trigger:"blur"}],facultyName:[{required:!0,message:"请输入系别名称",trigger:"blur"}],facultySecretary:[{required:!0,message:"请输入系秘书",trigger:"blur"}]},editForm:{id:"",facultyCode:"",facultyName:"",facultySecretary:"",remark:""},addFormVisible:!1,addLoading:!1,addFormRules:{facultyCode:[{required:!0,message:"请输入系别编号",trigger:"blur"}],facultyName:[{required:!0,message:"请输入系别名称",trigger:"blur"}],facultySecretary:[{required:!0,message:"请输入系秘书",trigger:"blur"}]},addForm:{facultyCode:"",facultyName:"",facultySecretary:"",remark:""}}},mounted:function(){this.getFaculty()},methods:{timeFormat:function(t,e){return Object(o.b)(t.createTime)},handleCurrentChange:function(t){this.page=t,this.getFaculty()},getFaculty:function(){var t=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/faculty/list?pageNum="+this.page+"&pageSize="+this.pageSize}).then(function(e){t.total=e.data.totalCount,"0000"==e.data.key?(t.facultyList=e.data.dataList,t.listLoading=!1):(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(o.a)(e,t)})},handleDel:function(t,e){var a=this,i=this;this.$confirm("确认删除该记录吗?","提示",{type:"danger"}).then(function(){a.$ajax({method:"post",headers:{TOKEN:a.token},url:"/faculty/delete?id="+e.id}).then(function(t){"0000"==t.data.key?(i.msgVisible=!0,i.msg="删除成功",i.getFaculty()):(i.msgVisible=!0,i.msg=t.data.msg)}).catch(function(t){Object(o.a)(t,i)})}).catch(function(){})},handleEdit:function(t,e){this.editForm.id=e.id,this.editFormVisible=!0,this.editForm=l()({},e),delete this.editForm.createTime,delete this.editForm.status},editSubmit:function(){var t=this,e=this;this.$refs.editForm.validate(function(a){if(a){t.editLoading=!0;var i=l()({},t.editForm);t.$ajax({method:"post",headers:{TOKEN:t.token},params:i,url:"faculty/update"}).then(function(t){e.editLoading=!1,"0000"==t.data.key?(e.editFormVisible=!1,e.getFaculty()):(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){e.editLoading=!1,Object(o.a)(t,e)})}})},handleAdd:function(){this.addFormVisible=!0,this.validateFlag&&this.$refs.addForm.resetFields()},addSubmit:function(){var t=this,e=this;this.token=sessionStorage.getItem("TOKEN"),this.$refs.addForm.validate(function(a){if(a){e.validateFlag=!1,t.addLoading=!0;var i=l()({},t.addForm);e.$ajax({method:"post",headers:{TOKEN:t.token},params:i,url:"/faculty/add"}).then(function(t){e.validateFlag=!0,"0000"==t.data.key?(e.addLoading=!1,e.addFormVisible=!1,e.getFaculty()):(e.addLoading=!1,e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(o.a)(t,e),e.addLoading=!1})}else e.validateFlag=!0})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.facultyList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"facultyCode",label:"系别编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"facultyName",label:"系别名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"facultySecretary",label:"管理员"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:t.timeFormat}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"系别编辑",visible:t.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.editFormVisible=e}}},[a("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"120px",rules:t.editFormRules}},[a("el-form-item",{attrs:{label:"系别编号",prop:"facultyCode"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.facultyCode,callback:function(e){t.$set(t.editForm,"facultyCode",e)},expression:"editForm.facultyCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"系别名称",prop:"facultyName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.facultyName,callback:function(e){t.$set(t.editForm,"facultyName",e)},expression:"editForm.facultyName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"系秘书",prop:"facultySecretary"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.facultySecretary,callback:function(e){t.$set(t.editForm,"facultySecretary",e)},expression:"editForm.facultySecretary"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.editForm.remark,callback:function(e){t.$set(t.editForm,"remark",e)},expression:"editForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.editFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){t.editSubmit(e)}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"系别新增",visible:t.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.addFormVisible=e}}},[a("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":"120px",rules:t.addFormRules}},[a("el-form-item",{attrs:{label:"系别编号",prop:"facultyCode"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.facultyCode,callback:function(e){t.$set(t.addForm,"facultyCode",e)},expression:"addForm.facultyCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"系别名称",prop:"facultyName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.facultyName,callback:function(e){t.$set(t.addForm,"facultyName",e)},expression:"addForm.facultyName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"系秘书",prop:"facultySecretary"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.facultySecretary,callback:function(e){t.$set(t.addForm,"facultySecretary",e)},expression:"addForm.facultySecretary"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.addFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){t.addSubmit()}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.msgVisible,width:"30%"},on:{"update:visible":function(e){t.msgVisible=e}}},[a("span",[t._v(t._s(t.msg))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.msgVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]},d=a("VU/8")(r,s,!1,function(t){a("dwCB")},null,null);e.default=d.exports},Se05:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.el-button--mini{\n  padding: 3px 8px;\n  border: none;\n}\n",""])},dwCB:function(t,e,a){var i=a("Se05");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("66034978",i,!0)}});