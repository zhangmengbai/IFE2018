import san from "san"

var MyApp = san.defineComponent({
  template: ''
      +'<div>'
      + '<button on-click="add">添加</button>'
      + '<table>'
      +   '<tr>'
      +     '<th>姓名</th>'
      +     '<th>审核状态</th>'
      +     '<th>操作</th>'
      +   '</tr>'
      +   '<tr san-for="p, index in persons">'
      +     '<td>{{p.name}}</td>'
      +     '<td>{{p.state}}</td>'
      +     '<td>'
      +       '<button on-click="change(index)" san-if="p.state=合格">{{p.operation}}</button>'
      +       '<button on-click="change(index)"san-elif="p.state=不合格">{{p.operation}}</button>'
      +       '<button on-click="change(index)" san-else="p.state=待审核">{{p.operation}}</button>'
      +     '</td>'
      +   '</tr>'
      + '</table>'
      +'<div>',
  initData: function () {
    return {
      persons: [
        {name: '张三', state: '合格', operation: '删除'},
        {name: '李四', state: '不合格', operation: '删除'},
        {name: '王五', state: '待审核', operation: '审核'},
        {name: '赵六', state: '待审核', operation: '审核'},              
        {name: '孙七', state: '待审核', operation: '审核'}
      ]
    };
  },
  change (index) {
    let sValue = this.data.get("persons[" + index + "].state");
    console.log(sValue);
    if(sValue === '合格'||sValue === '不合格'){
      this.data.removeAt("persons", index);
      console.log(sValue);
    }
    else if(sValue === '待审核'){
      this.data.set("persons[" + index + "].state", "合格");
      this.data.set("persons[" + index + "].operation", "删除");
    }
  },
  add () {
    this.data.push("persons",{name: '吃瓜群众', state: '不合格', operation: '删除'});
  }
});
var myApp = new MyApp();
myApp.attach(document.body);