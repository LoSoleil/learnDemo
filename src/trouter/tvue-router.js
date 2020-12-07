let Vue
class tVueRouter{
    constructor(options){
       this.$options = options
       console.log(this.$options);
       this.routerMap = {}
       options.routes.forEach(item => {
          this.routerMap[item.path] = item;
       })
    }
}
tVueRouter.install = function (_vue){
   Vue = _vue
   Vue.mixin({
     beforeCreate(){
      
     }
   })
}

export default tVueRouter