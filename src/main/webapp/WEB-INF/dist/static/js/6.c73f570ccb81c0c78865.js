webpackJsonp([6],{TGMe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("woOf"),i=a.n(o),r=a("F+jZ"),l={data:function(){return{editStuFormVisible:!1,stuFormVisible:!1,validateFlag:!1,userName:sessionStorage.getItem("name"),token:sessionStorage.getItem("TOKEN"),allTest:[],facultyList:[],total:0,stuTotal:0,page:1,pageSize:10,msg:"",msgVisible:!1,listLoading:!1,editFormVisible:!1,editLoading:!1,editFormRules:{subLaboratoryCode:[{required:!0,message:"请输入子实验室编号",trigger:"blur"}],subLaboratoryName:[{required:!0,message:"请输入子实验室名称",trigger:"blur"}],laboratoryCode:[{required:!0,message:"请输入总实验室编号",trigger:"blur"}],doorplate:[{required:!0,message:"请输入子实验室门牌号",trigger:"blur"}]},editForm:{id:"",subLaboratoryCode:"",subLaboratoryName:"",managerIdList:"",laboratoryCode:"",doorplate:"",remark:""},addFormVisible:!1,addLoading:!1,addFormRules:{subLaboratoryCode:[{required:!0,message:"请输入子实验室编号",trigger:"blur"}],subLaboratoryName:[{required:!0,message:"请输入子实验室名称",trigger:"blur"}],laboratoryCode:[{required:!0,message:"请输入总实验室编号",trigger:"blur"}],doorplate:[{required:!0,message:"请输入子实验室门牌号",trigger:"blur"}]},addForm:{subLaboratoryCode:"",subLaboratoryName:"",managerIdList:"",laboratoryCode:"",doorplate:"",remark:""},stuList:[],tvList:[],subTvList:[],tvFormVisible:!1,deleteTvFormVisible:!1,tvTotal:0,tvSearchForm:{address:"",equipmentNo:"",pageSize:10,pageNum:1},tvForm:{hangMachineId:"",subLaboratoryCode:""},deleteTvForm:{hangMachineId:"",subLaboratoryCode:""},checked:"",stuSearch:{pageSize:5,pageNum:1,name:"",sno:"",temporaryCard:""},editUserGroup:[],userGroup:[],newGroup:[],checkList:[],editCheckList:[],userObj:{},concatFlag:!1,selectList:[],managerIdListArr:[],typeFlag:""}},mounted:function(){this.getFaculty(),this.getAllTest(),this.queryStu()},methods:{getIdList:function(t){var e=this,a=t.target.value,o=t.target.getAttribute("dataName");console.log(o);t.target.checked?this.editUserGroup.push({id:a,name:o}):this.editUserGroup.map(function(t,o){t.id==a&&e.editUserGroup.splice(o,1)}),console.log(e.editUserGroup)},initCheck:function(){var t=this,e=$(".editModal .userCheck");$(e).removeAttr("checked"),e.map(function(e,a){t.editUserGroup.map(function(t){t.id==$(a).val()&&(console.log($(a)),console.log($(a).val()),$(a).prop("checked","true"))})})},editConfirm:function(){this.editCheckList=[];var t=this;this.editStuFormVisible=!1,this.editUserGroup.map(function(e){t.editCheckList.push(e.id)}),console.log(this.editCheckList)},handleSelectionChange:function(t){console.log(t),t.length>=0&&(this.userObj[this.stuSearch.pageNum]=t),console.log(this.userObj)},confirmUser:function(){this.stuSearch.pageNum=1,this.userGroup=[],this.checkList=[];var t=this;for(var e in this.userObj)this.userObj[e].map(function(e){t.userGroup.push(e)});console.log(this.userGroup),this.userGroup.map(function(e){t.checkList.push(e.id)}),console.log(this.checkList),this.stuFormVisible=!1},toggleSelection:function(t){var e=this;console.log(t);t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},showStu:function(t){"add"==t?(this.typeFlag="add",this.stuFormVisible=!0):"edit"==t&&(this.typeFlag="edit",this.editStuFormVisible=!0),this.stuSearch.pageNum=1,this.queryStu(t)},queryStu:function(t){console.log(this.userGroup),this.selectList=[];var e=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"user/page",params:this.stuSearch}).then(function(a){e.stuTotal=a.data.totalCount,"0000"==a.data.key?(e.stuList=a.data.dataList,e.listLoading=!1,console.log(e.selectList),"add"==t?(e.stuList.map(function(t,a){e.userGroup.map(function(o){o.id==t.id&&e.selectList.push(e.stuList[a])})}),setTimeout(function(){e.toggleSelection(e.selectList)},100)):(t="edit")&&setTimeout(function(){e.initCheck()},100)):(e.msgVisible=!0,e.msg=a.data.msg)}).catch(function(t){Object(r.a)(t,e)})},stuCurrentChange:function(t){"add"==this.typeFlag?this.queryStu("add"):"edit"==this.typeFlag&&this.queryStu("edit"),this.stuSearch.pageNum=t},testChange:function(t){var e=void 0;return this.allTest.map(function(a){a.laboratoryCode==t.laboratoryCode&&(e=a.laboratoryName)}),e},timeFormat:function(t,e){return Object(r.b)(t.createTime)},handleCurrentChange:function(t){this.page=t,this.getFaculty()},getAllTest:function(){var t=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/lab/listAll"}).then(function(e){"0000"==e.data.key?t.allTest=e.data.dataList:(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t)})},getFaculty:function(){var t=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"subLab/listWithManager?pageNum="+this.page+"&pageSize="+this.pageSize}).then(function(e){t.total=e.data.totalCount,"0000"==e.data.key?(t.facultyList=e.data.dataList,t.listLoading=!1):(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t)})},handleDel:function(t,e){var a=this,o=this;this.$confirm("确认删除该记录吗?","提示",{type:"danger"}).then(function(){a.$ajax({method:"post",headers:{TOKEN:a.token},url:"/subLab/delete?code="+e.subLaboratoryCode}).then(function(t){"0000"==t.data.key?(o.msgVisible=!0,o.msg="删除成功",o.getFaculty()):(o.msgVisible=!0,o.msg=t.data.msg)}).catch(function(t){Object(r.a)(t,o)})}).catch(function(){})},handleEdit:function(t,e){this.editForm=i()({},e),delete this.editForm.createTime,delete this.editForm.status,this.editFormVisible=!0,this.editUserGroup=[],this.editForm.id=e.id;for(var a in e.userMap)this.editUserGroup.push({id:a,name:e.userMap[a]});console.log(this.userGroup)},editSubmit:function(){var t=this,e=this;this.editForm.managerIdList=this.editCheckList.join(","),this.$refs.editForm.validate(function(a){if(a){t.editLoading=!0;var o=i()({},t.editForm);t.$ajax({method:"post",headers:{TOKEN:t.token},params:o,url:"/subLab/update"}).then(function(t){e.editLoading=!1,"0000"==t.data.key?(e.editFormVisible=!1,e.getFaculty()):(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){e.editLoading=!1,Object(r.a)(t,e)})}})},handleAdd:function(){this.userGroup=[],this.checkList=[],this.userObj={},this.addForm.remark="",this.addFormVisible=!0,this.validateFlag&&this.$refs.addForm.resetFields()},addSubmit:function(){var t=this,e=this;console.log(this.checkList),this.addForm.managerIdList=this.checkList.join(","),this.token=sessionStorage.getItem("TOKEN"),this.$refs.addForm.validate(function(a){if(a){e.validateFlag=!1,t.addLoading=!0;var o=i()({},t.addForm);e.$ajax({method:"post",headers:{TOKEN:t.token},params:o,url:"/subLab/add"}).then(function(t){e.validateFlag=!0,"0000"==t.data.key?(e.addLoading=!1,e.addFormVisible=!1,e.getFaculty()):(e.addLoading=!1,e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(r.a)(t,e),e.addLoading=!1})}else e.validateFlag=!0})},getRow:function(t){t&&(this.checked=t.id,this.tvForm.hangMachineId=t.id)},bindTvModal:function(t,e){this.tvFormVisible=!0,this.checked="",this.tvForm.subLaboratoryCode=e.subLaboratoryCode,this.getTv()},tvHandleCurrentChange:function(t){this.tvSearchForm.pageNum=t,this.getTv()},bindTv:function(){if(""==this.tvForm.hangMachineId)return this.msgVisible=!0,void(this.msg="请先选择壁挂机");var t=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/subLaboratoryToHangMachine/add",params:this.tvForm}).then(function(e){"0000"==e.data.key?(t.tvFormVisible=!1,t.getFaculty()):(t.tvFormVisible=!1,t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t)})},deleteTvModal:function(t,e){this.deleteTvFormVisible=!0,this.deleteTvForm.hangMachineId="",this.deleteTvForm.subLaboratoryCode=e.subLaboratoryCode,this.getTvBySubId(e.subLaboratoryCode)},deleteTv:function(){if(""==this.deleteTvForm.hangMachineId)return this.msgVisible=!0,void(this.msg="请先选择需要取消的挂机");var t=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/subLaboratoryToHangMachine/delete",params:this.deleteTvForm}).then(function(e){t.deleteTvFormVisible=!1,"0000"==e.data.key?t.getFaculty():(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t)})},getTvBySubId:function(t){var e=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/subLaboratoryToHangMachine/list",params:this.deleteTvForm}).then(function(t){"0000"==t.data.key?e.subTvList=t.data.ext:(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(r.a)(t,e)})},getTv:function(){var t=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/hangMachine/page",params:this.tvSearchForm}).then(function(e){t.tvTotal=e.data.totalCount,"0000"==e.data.key?(t.tvList=e.data.dataList,t.listLoading=!1):(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(r.a)(e,t)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.facultyList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"subLaboratoryCode",label:"子实验室编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subLaboratoryName",label:"子实验室名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"laboratoryCode",formatter:t.testChange,label:"总实验室"}}),t._v(" "),a("el-table-column",{attrs:{prop:"doorplate",label:"门牌号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:t.timeFormat}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDel(e.$index,e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.bindTvModal(e.$index,e.row)}}},[t._v("绑挂机")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.deleteTvModal(e.$index,e.row)}}},[t._v("删挂机")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"子实验室编辑",visible:t.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.editFormVisible=e}}},[a("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"120px",rules:t.editFormRules}},[a("el-form-item",{attrs:{label:"子实验室编号",prop:"subLaboratoryCode"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.subLaboratoryCode,callback:function(e){t.$set(t.editForm,"subLaboratoryCode",e)},expression:"editForm.subLaboratoryCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"子实验室名称",prop:"subLaboratoryName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.subLaboratoryName,callback:function(e){t.$set(t.editForm,"subLaboratoryName",e)},expression:"editForm.subLaboratoryName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"总实验室编号",prop:"laboratoryCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.editForm.laboratoryCode,callback:function(e){t.$set(t.editForm,"laboratoryCode",e)},expression:"editForm.laboratoryCode"}},t._l(t.allTest,function(t){return a("el-option",{key:t.laboratoryCode,attrs:{label:t.laboratoryName,value:t.laboratoryCode}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"管理员"}},[a("el-button",{nativeOn:{click:function(e){t.showStu("edit")}}},[t._v("查询")]),t._v(" "),a("div",t._l(t.editUserGroup,function(e){return a("el-button",{key:"item.id",attrs:{size:"mini",type:"text",disabled:"",label:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"门牌号",prop:"doorplate"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.doorplate,callback:function(e){t.$set(t.editForm,"doorplate",e)},expression:"editForm.doorplate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.editForm.remark,callback:function(e){t.$set(t.editForm,"remark",e)},expression:"editForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.editFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){t.editSubmit(e)}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"子实验室新增",visible:t.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.addFormVisible=e}}},[a("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":"120px",rules:t.addFormRules}},[a("el-form-item",{attrs:{label:"子实验室编号",prop:"subLaboratoryCode"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.subLaboratoryCode,callback:function(e){t.$set(t.addForm,"subLaboratoryCode",e)},expression:"addForm.subLaboratoryCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"子实验室名称",prop:"subLaboratoryName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.subLaboratoryName,callback:function(e){t.$set(t.addForm,"subLaboratoryName",e)},expression:"addForm.subLaboratoryName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"总实验室",prop:"laboratoryCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.addForm.laboratoryCode,callback:function(e){t.$set(t.addForm,"laboratoryCode",e)},expression:"addForm.laboratoryCode"}},t._l(t.allTest,function(t){return a("el-option",{key:t.laboratoryCode,attrs:{label:t.laboratoryName,value:t.laboratoryCode}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"管理员"}},[a("el-button",{nativeOn:{click:function(e){t.showStu("add")}}},[t._v("查询")]),t._v(" "),a("div",t._l(t.userGroup,function(e){return a("el-button",{key:"item.id",attrs:{size:"mini",type:"primary",disabled:"",label:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"门牌号",prop:"doorplate"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.doorplate,callback:function(e){t.$set(t.addForm,"doorplate",e)},expression:"addForm.doorplate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.addFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){t.addSubmit()}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"学生列表",visible:t.stuFormVisible,width:"70%","close-on-click-modal":!1},on:{"update:visible":function(e){t.stuFormVisible=e}}},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.stuSearch}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.stuSearch.name,callback:function(e){t.$set(t.stuSearch,"name",e)},expression:"stuSearch.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:t.stuSearch.sno,callback:function(e){t.$set(t.stuSearch,"sno",e)},expression:"stuSearch.sno"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"卡号"}},[a("el-input",{model:{value:t.stuSearch.temporaryCard,callback:function(e){t.$set(t.stuSearch,"temporaryCard",e)},expression:"stuSearch.temporaryCard"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.queryStu("add")}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.stuList},on:{select:t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sno",label:"学号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"facultyName",label:"系名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"入学年份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"classes",label:"班级"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话"}}),t._v(" "),a("el-table-column",{attrs:{prop:"temporaryCard",label:"卡号",width:"250px"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","current-page":t.stuSearch.pageNum,"page-size":t.stuSearch.pageSize,total:t.stuTotal},on:{"current-change":t.stuCurrentChange}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.confirmUser(e)}}},[t._v("确认")])],1)],1),t._v(" "),a("el-dialog",{staticClass:"editModal",attrs:{title:"学生列表编辑",visible:t.editStuFormVisible,width:"70%","close-on-click-modal":!1},on:{"update:visible":function(e){t.editStuFormVisible=e}}},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.stuSearch}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.stuSearch.name,callback:function(e){t.$set(t.stuSearch,"name",e)},expression:"stuSearch.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:t.stuSearch.sno,callback:function(e){t.$set(t.stuSearch,"sno",e)},expression:"stuSearch.sno"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"卡号"}},[a("el-input",{model:{value:t.stuSearch.temporaryCard,callback:function(e){t.$set(t.stuSearch,"temporaryCard",e)},expression:"stuSearch.temporaryCard"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.queryStu("edit")}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.stuList}},[a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("input",{staticClass:"userCheck",attrs:{type:"checkbox",dataName:e.row.name},domProps:{value:e.row.id},on:{change:t.getIdList}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sno",label:"学号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"facultyName",label:"系名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"入学年份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"classes",label:"班级"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话"}}),t._v(" "),a("el-table-column",{attrs:{prop:"temporaryCard",label:"卡号",width:"250px"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","current-page":t.stuSearch.pageNum,"page-size":t.stuSearch.pageSize,total:t.stuTotal},on:{"current-change":t.stuCurrentChange}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.editConfirm(e)}}},[t._v("确认")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"绑定壁挂机",visible:t.tvFormVisible,width:"70%","close-on-click-modal":!1},on:{"update:visible":function(e){t.tvFormVisible=e}}},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.tvSearchForm}},[a("el-form-item",{attrs:{label:"设备号"}},[a("el-input",{model:{value:t.tvSearchForm.equipmentNo,callback:function(e){t.$set(t.tvSearchForm,"equipmentNo",e)},expression:"tvSearchForm.equipmentNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:t.tvSearchForm.address,callback:function(e){t.$set(t.tvSearchForm,"address",e)},expression:"tvSearchForm.address"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getTv}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"bindTvForm",staticStyle:{width:"100%"},attrs:{data:t.tvList,"highlight-current-row":""},on:{"current-change":t.getRow}},[a("el-table-column",{attrs:{label:"选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox",{model:{value:e.row.id==t.checked,callback:function(a){t.$set(e.row,"id==checked",a)},expression:"scope.row.id==checked"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"挂放位置"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mac",label:"MAC地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"doorplate",label:"门牌号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"equipmentNo",label:"设备号"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":t.tvSearchForm.pageSize,total:t.tvTotal},on:{"current-change":t.tvHandleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.bindTv(e)}}},[t._v("确认")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"删除壁挂机",visible:t.deleteTvFormVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(e){t.deleteTvFormVisible=e}}},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("p",[a("strong",[t._v("此实验室下已有的壁挂机，选中删除：")])]),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-radio-group",{model:{value:t.deleteTvForm.hangMachineId,callback:function(e){t.$set(t.deleteTvForm,"hangMachineId",e)},expression:"deleteTvForm.hangMachineId"}},t._l(t.subTvList,function(e){return a("el-radio",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.address))])}))],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.deleteTv(e)}}},[t._v("确认")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.msgVisible,width:"30%"},on:{"update:visible":function(e){t.msgVisible=e}}},[a("span",[t._v(t._s(t.msg))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.msgVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]},n=a("VU/8")(l,s,!1,function(t){a("TX8N")},null,null);e.default=n.exports},TX8N:function(t,e,a){var o=a("pOqM");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("649d21c7",o,!0)},pOqM:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.el-button--mini{\n  padding: 3px 8px;\n  border: none;\n}\n",""])}});