(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QIC2:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),i=e("mrSG"),s=e("ZZ/e"),o=e("/MHU");class c{constructor(n,t,e,l,i,s){this.navCtrl=n,this.bluetoothle=t,this.plt=e,this.alertCtrl=l,this.loadingCtrl=i,this.actionSheetCtrl=s,this.imgBluetooth="assets/images/icon-bluetooth.png",this.clickable=!1,this.scanResults=[],this.scanAddresses={},this.buttons=[{text:"\ub2eb\uae30",icon:"close",role:"cancel",handler:()=>console.log("Cancel clicked")}],this.addressMap={}}ngOnInit(){}ionViewDidEnter(){this.plt.ready().then(n=>{this.ble$=this.bluetoothle.initialize().subscribe(n=>i.b(this,void 0,void 0,(function*(){this.clickable="enabled"===n.status.toLowerCase(),this.clickable||(yield this.alertBLE())})))})}alertBLE(){return i.b(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Bluetooth unavailable",subHeader:"User action required",message:"Please enable bluetooth and try again.",buttons:["OK"]});yield n.present()}))}ionViewWillLeave(){return i.b(this,void 0,void 0,(function*(){this.ble$&&this.ble$.unsubscribe(),this.startScan$&&this.startScan$.unsubscribe(),(yield this.bluetoothle.isScanning())&&(yield this.bluetoothle.stopScan())}))}tryPairing(){return i.b(this,void 0,void 0,(function*(){if(!this.clickable)return void(yield this.alertBLE());this.scanResults=[],this.startScan$&&this.startScan$.unsubscribe(),this.startScan$=this.bluetoothle.startScan({}).subscribe(n=>{"scanResult"!==n.status||this.scanAddresses[n.address]||(this.scanResults.push(n),this.scanAddresses[n.address]=!0)});const n=yield this.loadingCtrl.create({message:"Scanning for BLE devices"});if(yield n.present(),this.startScan$&&this.startScan$.unsubscribe(),(yield this.bluetoothle.isScanning())&&(yield this.bluetoothle.stopScan(),this.scanResults=this.scanResults.filter(n=>n.name&&n.name.toLowerCase().indexOf("uart")>-1),this.scanResults.map(n=>({text:n.name,address:n.address,icon:"bluetooth",handler:()=>{this.navCtrl.navigateRoot(`/home/${n.address}`)}})).forEach(n=>{this.addressMap[n.address]||(this.addressMap[n.address]=!0,this.buttons.push(n))}),this.buttons.length>1)){this.loadingCtrl.dismiss();const n=yield this.actionSheetCtrl.create({header:"BLE Devices",buttons:this.buttons});yield n.present()}}))}bypass(){this.navCtrl.navigateRoot("/home/x")}}class a{}var r=e("pMnS"),u=e("oBZk"),b=l.qb({encapsulation:0,styles:[[".bg-image[_ngcontent-%COMP%]{background:url(color-bg.54de25f5a3d4cb4db641.jpg) center center/cover no-repeat fixed}.no-scroll[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{overflow:hidden}.flex-center[_ngcontent-%COMP%], .full-width[_ngcontent-%COMP%], .full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%], .full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.full-width[_ngcontent-%COMP%]{width:100vw;height:100vh}.full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{width:187px;height:59px;border-radius:29px;background-color:#fff;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:59px;height:59px}.full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{width:47px;height:47px;border-radius:50%;background-color:#81caec}.full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:33px;height:33px}.full-width[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;color:#81caec;font-size:15px;padding-left:8px}"]],data:{}});function h(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,8,"ion-content",[],null,null,null,u.f,u.b)),l.rb(1,49152,null,0,s.t,[l.h,l.k,l.y],null,null),(n()(),l.sb(2,0,null,0,6,"div",[["class","bg-image no-scroll full-width"]],null,null,null,null,null)),(n()(),l.sb(3,0,null,null,5,"div",[["class","button-container"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.bypass()&&l),l}),null,null)),(n()(),l.sb(4,0,null,null,2,"div",[["class","icon-container"]],null,null,null,null,null)),(n()(),l.sb(5,0,null,null,1,"div",[["class","inner"]],null,null,null,null,null)),(n()(),l.sb(6,0,null,null,0,"img",[["class","icon"]],[[8,"src",4]],null,null,null,null)),(n()(),l.sb(7,0,null,null,1,"div",[["class","text-container"]],null,null,null,null,null)),(n()(),l.Jb(-1,null,[" \ube14\ub8e8\ud22c\uc2a4 \ud398\uc5b4\ub9c1 "]))],null,(function(n,t){n(t,6,0,t.component.imgBluetooth)}))}function d(n){return l.Kb(0,[(n()(),l.sb(0,0,null,null,1,"app-bluetooth",[],null,null,null,h,b)),l.rb(1,114688,null,0,c,[s.Hb,o.a,s.Ib,s.b,s.Fb,s.a],null,null)],(function(n,t){n(t,1,0)}),null)}var g=l.ob("app-bluetooth",c,d,{},{},[]),C=e("SVse"),p=e("s7LF"),f=e("iInd");e.d(t,"BluetoothPageModuleNgFactory",(function(){return w}));var w=l.pb(a,[],(function(n){return l.Bb([l.Cb(512,l.j,l.ab,[[8,[r.a,g]],[3,l.j],l.w]),l.Cb(4608,C.l,C.k,[l.t,[2,C.y]]),l.Cb(4608,p.f,p.f,[]),l.Cb(4608,s.c,s.c,[l.y,l.g]),l.Cb(4608,s.Gb,s.Gb,[s.c,l.j,l.q]),l.Cb(4608,s.Jb,s.Jb,[s.c,l.j,l.q]),l.Cb(1073742336,C.b,C.b,[]),l.Cb(1073742336,p.e,p.e,[]),l.Cb(1073742336,p.a,p.a,[]),l.Cb(1073742336,s.Db,s.Db,[]),l.Cb(1073742336,f.n,f.n,[[2,f.s],[2,f.m]]),l.Cb(1073742336,a,a,[]),l.Cb(1024,f.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);