import san, {
  DataTypes
} from "san"

const MyApp = san.defineComponent({
  template: '\
        <div class="container">\
            <ul class="u_input">\
                <li><input type="text" placeholder="姓名" value="{= name =}" on-input="setName"/></li>\
                <li><input type="number" placeholder="年龄" value="{= age =}" on-input="setAge"/></li>\
                <li><input type="text" placeholder="简介" value="{= pro =}" on-input="setPro"/></li>\
            </ul>\
            <button type="button" on-click="rm">移除信息</button>\
            <ul class="u_span">\
                <li>姓名:<span>{{name}}</span></li>\
                <li>年龄:<span>{{age}}</span></li>\
                <li>简介:<span>{{pro}}</span></li>\
            </ul>\
        </div>\
        ',
  initData: function () {
    return {
      person: {
        name: undefined,
        age: undefined,
        pro: undefined
      }
    };
  },
  person: DataTypes.shape({
    name: DataTypes.string,
    age: DataTypes.number,
    pro: DataTypes.string
  }),
  rm: function () {
    this.data.set('name', '');
    this.data.set('age', '');
    this.data.set('pro', '');
  },
  setName: function () {
    this.data.set("person.name", this.data.get("name"));
  },
  setAge: function () {
    this.data.set("person.age", isNaN(parseInt(this.data.get("age"))) ? undefined : parseInt(this.data.get("age")));
  },
  setPro: function () {
    this.data.set("person.pro", this.data.get("pro"));
  }
});

const myApp = new MyApp();
myApp.attach(document.body);