
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/home/home","pages/tabbar/vip/vip","pages/tabbar/add/add","pages/tabbar/order/order","pages/tabbar/my/my","pages/add-detial/add-handSelect/add-handSelect","pages/add-detial/add-intelligenceSelect/add-intelligenceSelect","pages/add-detial/add-help/add-help","pages/shop/shop","components/cart-icon/cart-icon","pages/login/login","pages/register/register","pages/introduce/introduce","pages/team/team","pages/coupon/coupon","pages/editNickname/editNickname","pages/editPassword/editPassword","pages/agreement/agreement","pages/privacyPolicy/privacyPolicy"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff","backgroundColor":"#f6f6f6"},"tabBar":{"borderStyle":"black","backgroundColor":"#f6e1b9","color":"#8F8F94","selectedColor":"#f33e54","list":[{"pagePath":"pages/tabbar/home/home","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeactive.png","text":"首页"},{"pagePath":"pages/tabbar/vip/vip","iconPath":"static/img/tabbar/vip.png","selectedIconPath":"static/img/tabbar/vipactive.png","text":"会员"},{"pagePath":"pages/tabbar/add/add","iconPath":"static/img/tabbar/add.png","selectedIconPath":"static/img/tabbar/addactive.png"},{"pagePath":"pages/tabbar/order/order","iconPath":"static/img/tabbar/order.png","selectedIconPath":"static/img/tabbar/orderactive.png","text":"订单"},{"pagePath":"pages/tabbar/my/my","iconPath":"static/img/tabbar/me.png","selectedIconPath":"static/img/tabbar/meactive.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"graduationProject","compilerVersion":"2.6.1","entryPagePath":"pages/tabbar/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/vip/vip","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/add/add","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/add-detial/add-handSelect/add-handSelect","meta":{},"window":{"navigationBarTitleText":"选座"}},{"path":"/pages/add-detial/add-intelligenceSelect/add-intelligenceSelect","meta":{},"window":{}},{"path":"/pages/add-detial/add-help/add-help","meta":{},"window":{}},{"path":"/pages/shop/shop","meta":{},"window":{}},{"path":"/components/cart-icon/cart-icon","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/register/register","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/introduce/introduce","meta":{},"window":{}},{"path":"/pages/team/team","meta":{},"window":{}},{"path":"/pages/coupon/coupon","meta":{},"window":{}},{"path":"/pages/editNickname/editNickname","meta":{},"window":{}},{"path":"/pages/editPassword/editPassword","meta":{},"window":{}},{"path":"/pages/agreement/agreement","meta":{},"window":{}},{"path":"/pages/privacyPolicy/privacyPolicy","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
