webpackJsonp([1],{"3fN0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),o=a.n(i),r=a("F+jZ"),l={data:function(){return{validateFlag:!1,userName:sessionStorage.getItem("name"),token:sessionStorage.getItem("TOKEN"),tvList:[],total:0,page:1,pageSize:10,msg:"",msgVisible:!1,listLoading:!1,editFormVisible:!1,editLoading:!1,editFormRules:{mac:[{required:!0,message:"请输入mac",trigger:"blur"}],ip:[{required:!0,message:"请输入IP",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],equipmentNo:[{required:!0,message:"请输入设备号",trigger:"blur"}],doorplate:[{required:!0,message:"请输入门牌号",trigger:"blur"}]},editForm:{id:"",ip:"",mac:"",address:"",doorplate:"",equipmentNo:""},addFormVisible:!1,addLoading:!1,addFormRules:{mac:[{required:!0,message:"请输入mac",trigger:"blur"}],ip:[{required:!0,message:"请输入IP",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],equipmentNo:[{required:!0,message:"请输入设备号",trigger:"blur"}],doorplate:[{required:!0,message:"请输入门牌号",trigger:"blur"}]},addForm:{ip:"",mac:"",address:"",doorplate:"",equipmentNo:""},searchForm:{address:"",equipmentNo:"",pageSize:10,pageNum:1}}},mounted:function(){this.getTv()},methods:{handleCurrentChange:function(e){this.searchForm.pageNum=e,this.getTv()},handleDel:function(e,t){var a=this,i=this;this.$confirm("确认删除该记录吗?","提示",{type:"danger"}).then(function(){var e={id:t.id};a.$ajax({method:"post",headers:{TOKEN:a.token},params:e,url:"/hangMachine/delete"}).then(function(e){"0000"==e.data.key?(i.msgVisible=!0,i.msg=e.data.msg,i.getTv()):(i.msgVisible=!0,i.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,i)})}).catch(function(){})},getTv:function(){var e=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/hangMachine/page",params:this.searchForm}).then(function(t){e.total=t.data.totalCount,"0000"==t.data.key?(e.tvList=t.data.dataList,e.listLoading=!1):(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(r.a)(t,e)})},handleEdit:function(e,t){this.editForm.id=t.id,this.editFormVisible=!0,this.editForm=o()({},t)},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate(function(a){if(a){e.editLoading=!0;var i=o()({},e.editForm);e.$ajax({method:"post",headers:{TOKEN:e.token},params:i,url:"hangMachine/update"}).then(function(e){t.editLoading=!1,"0000"==e.data.key?(t.editFormVisible=!1,t.getTv()):(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){t.editLoading=!1,Object(r.a)(e,t)})}})},handleAdd:function(){this.addFormVisible=!0,this.validateFlag&&this.$refs.addForm.resetFields()},addSubmit:function(){var e=this,t=this;this.token=sessionStorage.getItem("TOKEN"),this.$refs.addForm.validate(function(a){if(a){t.validateFlag=!1,e.addLoading=!0;var i=o()({},e.addForm);t.$ajax({method:"post",headers:{TOKEN:e.token},params:i,url:"/hangMachine/add"}).then(function(e){t.validateFlag=!0,"0000"==e.data.key?(t.addLoading=!1,t.addFormVisible=!1,t.getTv()):(t.addLoading=!1,t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t),t.addLoading=!1})}else t.validateFlag=!0})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.searchForm}},[a("el-form-item",{attrs:{label:"设备号"}},[a("el-input",{model:{value:e.searchForm.equipmentNo,callback:function(t){e.$set(e.searchForm,"equipmentNo",t)},expression:"searchForm.equipmentNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.searchForm.address,callback:function(t){e.$set(e.searchForm,"address",t)},expression:"searchForm.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getTv}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tvList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"address",label:"挂放位置"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mac",label:"MAC地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"doorplate",label:"门牌号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"equipmentNo",label:"设备号"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"挂机编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"120px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"门牌号",prop:"doorplate"}},[a("el-input",{model:{value:e.editForm.doorplate,callback:function(t){e.$set(e.editForm,"doorplate",t)},expression:"editForm.doorplate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{model:{value:e.editForm.address,callback:function(t){e.$set(e.editForm,"address",t)},expression:"editForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"IP",prop:"ip"}},[a("el-input",{model:{value:e.editForm.ip,callback:function(t){e.$set(e.editForm,"ip",t)},expression:"editForm.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"MAC",prop:"mac"}},[a("el-input",{model:{value:e.editForm.mac,callback:function(t){e.$set(e.editForm,"mac",t)},expression:"editForm.mac"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备号",prop:"equipmentNo"}},[a("el-input",{model:{value:e.editForm.equipmentNo,callback:function(t){e.$set(e.editForm,"equipmentNo",t)},expression:"editForm.equipmentNo"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"挂机新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"120px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"门牌号",prop:"doorplate"}},[a("el-input",{model:{value:e.addForm.doorplate,callback:function(t){e.$set(e.addForm,"doorplate",t)},expression:"addForm.doorplate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{model:{value:e.addForm.address,callback:function(t){e.$set(e.addForm,"address",t)},expression:"addForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"IP",prop:"ip"}},[a("el-input",{model:{value:e.addForm.ip,callback:function(t){e.$set(e.addForm,"ip",t)},expression:"addForm.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"MAC",prop:"mac"}},[a("el-input",{model:{value:e.addForm.mac,callback:function(t){e.$set(e.addForm,"mac",t)},expression:"addForm.mac"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备号",prop:"equipmentNo"}},[a("el-input",{model:{value:e.addForm.equipmentNo,callback:function(t){e.$set(e.addForm,"equipmentNo",t)},expression:"addForm.equipmentNo"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit()}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.msgVisible,width:"30%"},on:{"update:visible":function(t){e.msgVisible=t}}},[a("span",[e._v(e._s(e.msg))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.msgVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]},d=a("VU/8")(l,s,!1,function(e){a("ciVU")},null,null);t.default=d.exports},"D/wp":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.el-button--mini{\n  padding: 3px 8px;\n  border: none;\n}\n",""])},ciVU:function(e,t,a){var i=a("D/wp");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("687a8d3b",i,!0)}});