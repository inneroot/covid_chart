(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(n,o,t){var map={"./af":186,"./af.js":186,"./ar":187,"./ar-dz":188,"./ar-dz.js":188,"./ar-kw":189,"./ar-kw.js":189,"./ar-ly":190,"./ar-ly.js":190,"./ar-ma":191,"./ar-ma.js":191,"./ar-sa":192,"./ar-sa.js":192,"./ar-tn":193,"./ar-tn.js":193,"./ar.js":187,"./az":194,"./az.js":194,"./be":195,"./be.js":195,"./bg":196,"./bg.js":196,"./bm":197,"./bm.js":197,"./bn":198,"./bn.js":198,"./bo":199,"./bo.js":199,"./br":200,"./br.js":200,"./bs":201,"./bs.js":201,"./ca":202,"./ca.js":202,"./cs":203,"./cs.js":203,"./cv":204,"./cv.js":204,"./cy":205,"./cy.js":205,"./da":206,"./da.js":206,"./de":207,"./de-at":208,"./de-at.js":208,"./de-ch":209,"./de-ch.js":209,"./de.js":207,"./dv":210,"./dv.js":210,"./el":211,"./el.js":211,"./en-au":212,"./en-au.js":212,"./en-ca":213,"./en-ca.js":213,"./en-gb":214,"./en-gb.js":214,"./en-ie":215,"./en-ie.js":215,"./en-il":216,"./en-il.js":216,"./en-in":217,"./en-in.js":217,"./en-nz":218,"./en-nz.js":218,"./en-sg":219,"./en-sg.js":219,"./eo":220,"./eo.js":220,"./es":221,"./es-do":222,"./es-do.js":222,"./es-us":223,"./es-us.js":223,"./es.js":221,"./et":224,"./et.js":224,"./eu":225,"./eu.js":225,"./fa":226,"./fa.js":226,"./fi":227,"./fi.js":227,"./fil":228,"./fil.js":228,"./fo":229,"./fo.js":229,"./fr":230,"./fr-ca":231,"./fr-ca.js":231,"./fr-ch":232,"./fr-ch.js":232,"./fr.js":230,"./fy":233,"./fy.js":233,"./ga":234,"./ga.js":234,"./gd":235,"./gd.js":235,"./gl":236,"./gl.js":236,"./gom-deva":237,"./gom-deva.js":237,"./gom-latn":238,"./gom-latn.js":238,"./gu":239,"./gu.js":239,"./he":240,"./he.js":240,"./hi":241,"./hi.js":241,"./hr":242,"./hr.js":242,"./hu":243,"./hu.js":243,"./hy-am":244,"./hy-am.js":244,"./id":245,"./id.js":245,"./is":246,"./is.js":246,"./it":247,"./it-ch":248,"./it-ch.js":248,"./it.js":247,"./ja":249,"./ja.js":249,"./jv":250,"./jv.js":250,"./ka":251,"./ka.js":251,"./kk":252,"./kk.js":252,"./km":253,"./km.js":253,"./kn":254,"./kn.js":254,"./ko":255,"./ko.js":255,"./ku":256,"./ku.js":256,"./ky":257,"./ky.js":257,"./lb":258,"./lb.js":258,"./lo":259,"./lo.js":259,"./lt":260,"./lt.js":260,"./lv":261,"./lv.js":261,"./me":262,"./me.js":262,"./mi":263,"./mi.js":263,"./mk":264,"./mk.js":264,"./ml":265,"./ml.js":265,"./mn":266,"./mn.js":266,"./mr":267,"./mr.js":267,"./ms":268,"./ms-my":269,"./ms-my.js":269,"./ms.js":268,"./mt":270,"./mt.js":270,"./my":271,"./my.js":271,"./nb":272,"./nb.js":272,"./ne":273,"./ne.js":273,"./nl":274,"./nl-be":275,"./nl-be.js":275,"./nl.js":274,"./nn":276,"./nn.js":276,"./oc-lnc":277,"./oc-lnc.js":277,"./pa-in":278,"./pa-in.js":278,"./pl":279,"./pl.js":279,"./pt":280,"./pt-br":281,"./pt-br.js":281,"./pt.js":280,"./ro":282,"./ro.js":282,"./ru":283,"./ru.js":283,"./sd":284,"./sd.js":284,"./se":285,"./se.js":285,"./si":286,"./si.js":286,"./sk":287,"./sk.js":287,"./sl":288,"./sl.js":288,"./sq":289,"./sq.js":289,"./sr":290,"./sr-cyrl":291,"./sr-cyrl.js":291,"./sr.js":290,"./ss":292,"./ss.js":292,"./sv":293,"./sv.js":293,"./sw":294,"./sw.js":294,"./ta":295,"./ta.js":295,"./te":296,"./te.js":296,"./tet":297,"./tet.js":297,"./tg":298,"./tg.js":298,"./th":299,"./th.js":299,"./tl-ph":300,"./tl-ph.js":300,"./tlh":301,"./tlh.js":301,"./tr":302,"./tr.js":302,"./tzl":303,"./tzl.js":303,"./tzm":304,"./tzm-latn":305,"./tzm-latn.js":305,"./tzm.js":304,"./ug-cn":306,"./ug-cn.js":306,"./uk":307,"./uk.js":307,"./ur":308,"./ur.js":308,"./uz":309,"./uz-latn":310,"./uz-latn.js":310,"./uz.js":309,"./vi":311,"./vi.js":311,"./x-pseudo":312,"./x-pseudo.js":312,"./yo":313,"./yo.js":313,"./zh-cn":314,"./zh-cn.js":314,"./zh-hk":315,"./zh-hk.js":315,"./zh-mo":316,"./zh-mo.js":316,"./zh-tw":317,"./zh-tw.js":317};function l(n){var o=r(n);return t(o)}function r(n){if(!t.o(map,n)){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}return map[n]}l.keys=function(){return Object.keys(map)},l.resolve=r,n.exports=l,l.id=332},335:function(n,o,t){"use strict";t.r(o);t(16);var l=t(2),r=(t(325),t(329)),e=t(333),y=e.b.reactiveProp,C={extends:e.a,mixins:[y],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},S=[{Country:"ALA Aland Islands",Slug:"ala-aland-islands",Population:null},{Country:"Afghanistan",Slug:"afghanistan",Population:38928},{Country:"Albania",Slug:"albania",Population:2878},{Country:"Algeria",Slug:"algeria",Population:43851},{Country:"American Samoa",Slug:"american-samoa",Population:55},{Country:"Andorra",Slug:"andorra",Population:77},{Country:"Angola",Slug:"angola",Population:32866},{Country:"Anguilla",Slug:"anguilla",Population:15},{Country:"Antarctica",Slug:"antarctica",Population:null},{Country:"Antigua and Barbuda",Slug:"antigua-and-barbuda",Population:98},{Country:"Argentina",Slug:"argentina",Population:45196},{Country:"Armenia",Slug:"armenia",Population:2963},{Country:"Aruba",Slug:"aruba",Population:107},{Country:"Australia",Slug:"australia",Population:25500},{Country:"Austria",Slug:"austria",Population:9006},{Country:"Azerbaijan",Slug:"azerbaijan",Population:10139},{Country:"Bahamas",Slug:"bahamas",Population:393},{Country:"Bahrain",Slug:"bahrain",Population:1702},{Country:"Bangladesh",Slug:"bangladesh",Population:164689},{Country:"Barbados",Slug:"barbados",Population:287},{Country:"Belarus",Slug:"belarus",Population:9449},{Country:"Belgium",Slug:"belgium",Population:11590},{Country:"Belize",Slug:"belize",Population:398},{Country:"Benin",Slug:"benin",Population:12123},{Country:"Bermuda",Slug:"bermuda",Population:62},{Country:"Bhutan",Slug:"bhutan",Population:772},{Country:"Bolivia",Slug:"bolivia",Population:11673},{Country:"Bosnia and Herzegovina",Slug:"bosnia-and-herzegovina",Population:3281},{Country:"Botswana",Slug:"botswana",Population:2352},{Country:"Bouvet Island",Slug:"bouvet-island",Population:null},{Country:"Brazil",Slug:"brazil",Population:212559},{Country:"British Indian Ocean Territory",Slug:"british-indian-ocean-territory",Population:null},{Country:"British Virgin Islands",Slug:"british-virgin-islands",Population:30},{Country:"Brunei Darussalam",Slug:"brunei",Population:437},{Country:"Bulgaria",Slug:"bulgaria",Population:6948},{Country:"Burkina Faso",Slug:"burkina-faso",Population:20903},{Country:"Burundi",Slug:"burundi",Population:11891},{Country:"Cambodia",Slug:"cambodia",Population:16719},{Country:"Cameroon",Slug:"cameroon",Population:26546},{Country:"Canada",Slug:"canada",Population:37742},{Country:"Cape Verde",Slug:"cape-verde",Population:556},{Country:"Cayman Islands",Slug:"cayman-islands",Population:66},{Country:"Central African Republic",Slug:"central-african-republic",Population:4830},{Country:"Chad",Slug:"chad",Population:16426},{Country:"Chile",Slug:"chile",Population:19116},{Country:"China",Slug:"china",Population:1439324},{Country:"Christmas Island",Slug:"christmas-island",Population:null},{Country:"Cocos (Keeling) Islands",Slug:"cocos-keeling-islands",Population:null},{Country:"Colombia",Slug:"colombia",Population:50883},{Country:"Comoros",Slug:"comoros",Population:870},{Country:"Congo (Brazzaville)",Slug:"congo-brazzaville",Population:5518},{Country:"Congo (Kinshasa)",Slug:"congo-kinshasa",Population:5518},{Country:"Cook Islands",Slug:"cook-islands",Population:18},{Country:"Costa Rica",Slug:"costa-rica",Population:5094},{Country:"Croatia",Slug:"croatia",Population:4105},{Country:"Cuba",Slug:"cuba",Population:11327},{Country:"Cyprus",Slug:"cyprus",Population:1207},{Country:"Czech Republic",Slug:"czech-republic",Population:10709},{Country:"Côte d'Ivoire",Slug:"cote-divoire",Population:26378},{Country:"Denmark",Slug:"denmark",Population:5792},{Country:"Djibouti",Slug:"djibouti",Population:988},{Country:"Dominica",Slug:"dominica",Population:72},{Country:"Dominican Republic",Slug:"dominican-republic",Population:10848},{Country:"Ecuador",Slug:"ecuador",Population:17643},{Country:"Egypt",Slug:"egypt",Population:102334},{Country:"El Salvador",Slug:"el-salvador",Population:6486},{Country:"Equatorial Guinea",Slug:"equatorial-guinea",Population:1403},{Country:"Eritrea",Slug:"eritrea",Population:3546},{Country:"Estonia",Slug:"estonia",Population:1327},{Country:"Ethiopia",Slug:"ethiopia",Population:114964},{Country:"Falkland Islands (Malvinas)",Slug:"falkland-islands-malvinas",Population:3},{Country:"Faroe Islands",Slug:"faroe-islands",Population:49},{Country:"Fiji",Slug:"fiji",Population:896},{Country:"Finland",Slug:"finland",Population:5541},{Country:"France",Slug:"france",Population:65274},{Country:"French Guiana",Slug:"french-guiana",Population:299},{Country:"French Polynesia",Slug:"french-polynesia",Population:281},{Country:"French Southern Territories",Slug:"french-southern-territories",Population:null},{Country:"Gabon",Slug:"gabon",Population:2226},{Country:"Gambia",Slug:"gambia",Population:2417},{Country:"Georgia",Slug:"georgia",Population:3989},{Country:"Germany",Slug:"germany",Population:83784},{Country:"Ghana",Slug:"ghana",Population:31073},{Country:"Gibraltar",Slug:"gibraltar",Population:34},{Country:"Greece",Slug:"greece",Population:10423},{Country:"Greenland",Slug:"greenland",Population:57},{Country:"Grenada",Slug:"grenada",Population:113},{Country:"Guadeloupe",Slug:"guadeloupe",Population:400},{Country:"Guam",Slug:"guam",Population:169},{Country:"Guatemala",Slug:"guatemala",Population:17916},{Country:"Guernsey",Slug:"guernsey",Population:null},{Country:"Guinea",Slug:"guinea",Population:13133},{Country:"Guinea-Bissau",Slug:"guinea-bissau",Population:1968},{Country:"Guyana",Slug:"guyana",Population:787},{Country:"Haiti",Slug:"haiti",Population:11403},{Country:"Heard and Mcdonald Islands",Slug:"heard-and-mcdonald-islands",Population:null},{Country:"Holy See (Vatican City State)",Slug:"holy-see-vatican-city-state",Population:null},{Country:"Honduras",Slug:"honduras",Population:9905},{Country:"Hong Kong, SAR China",Slug:"hong-kong-sar-china",Population:7497},{Country:"Hungary",Slug:"hungary",Population:9660},{Country:"Iceland",Slug:"iceland",Population:341},{Country:"India",Slug:"india",Population:1380004},{Country:"Indonesia",Slug:"indonesia",Population:273524},{Country:"Iran, Islamic Republic of",Slug:"iran",Population:83993},{Country:"Iraq",Slug:"iraq",Population:40223},{Country:"Ireland",Slug:"ireland",Population:4938},{Country:"Isle of Man",Slug:"isle-of-man",Population:85},{Country:"Israel",Slug:"israel",Population:8656},{Country:"Italy",Slug:"italy",Population:60462},{Country:"Jamaica",Slug:"jamaica",Population:2961},{Country:"Japan",Slug:"japan",Population:126476},{Country:"Jersey",Slug:"jersey",Population:null},{Country:"Jordan",Slug:"jordan",Population:10203},{Country:"Kazakhstan",Slug:"kazakhstan",Population:18777},{Country:"Kenya",Slug:"kenya",Population:53771},{Country:"Kiribati",Slug:"kiribati",Population:119},{Country:"Korea (North)",Slug:"korea-north",Population:25779},{Country:"Korea (South)",Slug:"korea-south",Population:51269},{Country:"Kuwait",Slug:"kuwait",Population:4271},{Country:"Kyrgyzstan",Slug:"kyrgyzstan",Population:6524},{Country:"Lao PDR",Slug:"lao-pdr",Population:7276},{Country:"Latvia",Slug:"latvia",Population:1886},{Country:"Lebanon",Slug:"lebanon",Population:6825},{Country:"Lesotho",Slug:"lesotho",Population:2142},{Country:"Liberia",Slug:"liberia",Population:5058},{Country:"Libya",Slug:"libya",Population:6871},{Country:"Liechtenstein",Slug:"liechtenstein",Population:38},{Country:"Lithuania",Slug:"lithuania",Population:2722},{Country:"Luxembourg",Slug:"luxembourg",Population:626},{Country:"Macao, SAR China",Slug:"macao-sar-china",Population:649},{Country:"Macedonia, Republic of",Slug:"macedonia",Population:2083},{Country:"Madagascar",Slug:"madagascar",Population:27691},{Country:"Malawi",Slug:"malawi",Population:19130},{Country:"Malaysia",Slug:"malaysia",Population:32366},{Country:"Maldives",Slug:"maldives",Population:541},{Country:"Mali",Slug:"mali",Population:20251},{Country:"Malta",Slug:"malta",Population:442},{Country:"Marshall Islands",Slug:"marshall-islands",Population:59},{Country:"Martinique",Slug:"martinique",Population:375},{Country:"Mauritania",Slug:"mauritania",Population:4650},{Country:"Mauritius",Slug:"mauritius",Population:1272},{Country:"Mayotte",Slug:"mayotte",Population:273},{Country:"Mexico",Slug:"mexico",Population:128933},{Country:"Micronesia, Federated States of",Slug:"micronesia",Population:null},{Country:"Moldova",Slug:"moldova",Population:4034},{Country:"Monaco",Slug:"monaco",Population:39},{Country:"Mongolia",Slug:"mongolia",Population:3278},{Country:"Montenegro",Slug:"montenegro",Population:628},{Country:"Montserrat",Slug:"montserrat",Population:5},{Country:"Morocco",Slug:"morocco",Population:36911},{Country:"Mozambique",Slug:"mozambique",Population:31255},{Country:"Myanmar",Slug:"myanmar",Population:54410},{Country:"Namibia",Slug:"namibia",Population:2541},{Country:"Nauru",Slug:"nauru",Population:11},{Country:"Nepal",Slug:"nepal",Population:29137},{Country:"Netherlands",Slug:"netherlands",Population:17135},{Country:"Netherlands Antilles",Slug:"netherlands-antilles",Population:17135},{Country:"New Caledonia",Slug:"new-caledonia",Population:285},{Country:"New Zealand",Slug:"new-zealand",Population:4822},{Country:"Nicaragua",Slug:"nicaragua",Population:6625},{Country:"Niger",Slug:"niger",Population:24207},{Country:"Nigeria",Slug:"nigeria",Population:206140},{Country:"Niue",Slug:"niue",Population:2},{Country:"Norfolk Island",Slug:"norfolk-island",Population:null},{Country:"Northern Mariana Islands",Slug:"northern-mariana-islands",Population:58},{Country:"Norway",Slug:"norway",Population:5421},{Country:"Oman",Slug:"oman",Population:5107},{Country:"Pakistan",Slug:"pakistan",Population:220892},{Country:"Palau",Slug:"palau",Population:18},{Country:"Palestinian Territory",Slug:"palestine",Population:5101},{Country:"Panama",Slug:"panama",Population:4315},{Country:"Papua New Guinea",Slug:"papua-new-guinea",Population:8947},{Country:"Paraguay",Slug:"paraguay",Population:7133},{Country:"Peru",Slug:"peru",Population:32972},{Country:"Philippines",Slug:"philippines",Population:109581},{Country:"Pitcairn",Slug:"pitcairn",Population:null},{Country:"Poland",Slug:"poland",Population:37847},{Country:"Portugal",Slug:"portugal",Population:10197},{Country:"Puerto Rico",Slug:"puerto-rico",Population:2861},{Country:"Qatar",Slug:"qatar",Population:2881},{Country:"Republic of Kosovo",Slug:"kosovo",Population:null},{Country:"Romania",Slug:"romania",Population:19238},{Country:"Russian Federation",Slug:"russia",Population:145934},{Country:"Rwanda",Slug:"rwanda",Population:12952},{Country:"Réunion",Slug:"réunion",Population:895},{Country:"Saint Helena",Slug:"saint-helena",Population:6},{Country:"Saint Kitts and Nevis",Slug:"saint-kitts-and-nevis",Population:53},{Country:"Saint Lucia",Slug:"saint-lucia",Population:184},{Country:"Saint Pierre and Miquelon",Slug:"saint-pierre-and-miquelon",Population:6},{Country:"Saint Vincent and Grenadines",Slug:"saint-vincent-and-the-grenadines",Population:111},{Country:"Saint-Barthélemy",Slug:"saint-barthélemy",Population:10},{Country:"Saint-Martin (French part)",Slug:"saint-martin-french-part",Population:null},{Country:"Samoa",Slug:"samoa",Population:198},{Country:"San Marino",Slug:"san-marino",Population:34},{Country:"Sao Tome and Principe",Slug:"sao-tome-and-principe",Population:219},{Country:"Saudi Arabia",Slug:"saudi-arabia",Population:34814},{Country:"Senegal",Slug:"senegal",Population:16744},{Country:"Serbia",Slug:"serbia",Population:8737},{Country:"Seychelles",Slug:"seychelles",Population:98},{Country:"Sierra Leone",Slug:"sierra-leone",Population:7977},{Country:"Singapore",Slug:"singapore",Population:5850},{Country:"Slovakia",Slug:"slovakia",Population:5460},{Country:"Slovenia",Slug:"slovenia",Population:2079},{Country:"Solomon Islands",Slug:"solomon-islands",Population:687},{Country:"Somalia",Slug:"somalia",Population:15893},{Country:"South Africa",Slug:"south-africa",Population:59309},{Country:"South Georgia and the South Sandwich Islands",Slug:"south-georgia-and-the-south-sandwich-islands",Population:null},{Country:"South Sudan",Slug:"south-sudan",Population:11194},{Country:"Spain",Slug:"spain",Population:46755},{Country:"Sri Lanka",Slug:"sri-lanka",Population:21413},{Country:"Sudan",Slug:"sudan",Population:43849},{Country:"Suriname",Slug:"suriname",Population:587},{Country:"Svalbard and Jan Mayen Islands",Slug:"svalbard-and-jan-mayen-islands",Population:null},{Country:"Swaziland",Slug:"swaziland",Population:8655},{Country:"Sweden",Slug:"sweden",Population:10099},{Country:"Switzerland",Slug:"switzerland",Population:8655},{Country:"Syrian Arab Republic (Syria)",Slug:"syria",Population:17501},{Country:"Taiwan, Republic of China",Slug:"taiwan",Population:23817},{Country:"Tajikistan",Slug:"tajikistan",Population:9538},{Country:"Tanzania, United Republic of",Slug:"tanzania",Population:59734},{Country:"Thailand",Slug:"thailand",Population:69800},{Country:"Timor-Leste",Slug:"timor-leste",Population:1318},{Country:"Togo",Slug:"togo",Population:8279},{Country:"Tokelau",Slug:"tokelau",Population:1},{Country:"Tonga",Slug:"tonga",Population:106},{Country:"Trinidad and Tobago",Slug:"trinidad-and-tobago",Population:1399},{Country:"Tunisia",Slug:"tunisia",Population:11819},{Country:"Turkey",Slug:"turkey",Population:84339},{Country:"Turkmenistan",Slug:"turkmenistan",Population:6031},{Country:"Turks and Caicos Islands",Slug:"turks-and-caicos-islands",Population:39},{Country:"Tuvalu",Slug:"tuvalu",Population:12},{Country:"US Minor Outlying Islands",Slug:"us-minor-outlying-islands",Population:null},{Country:"Uganda",Slug:"uganda",Population:45741},{Country:"Ukraine",Slug:"ukraine",Population:43734},{Country:"United Arab Emirates",Slug:"united-arab-emirates",Population:9890},{Country:"United Kingdom",Slug:"united-kingdom",Population:67886},{Country:"United States of America",Slug:"united-states",Population:331003},{Country:"Uruguay",Slug:"uruguay",Population:3474},{Country:"Uzbekistan",Slug:"uzbekistan",Population:33469},{Country:"Vanuatu",Slug:"vanuatu",Population:307},{Country:"Venezuela (Bolivarian Republic)",Slug:"venezuela",Population:28436},{Country:"Viet Nam",Slug:"vietnam",Population:97339},{Country:"Virgin Islands, US",Slug:"virgin-islands",Population:null},{Country:"Wallis and Futuna Islands",Slug:"wallis-and-futuna-islands",Population:11},{Country:"Western Sahara",Slug:"western-sahara",Population:597},{Country:"Yemen",Slug:"yemen",Population:29826},{Country:"Zambia",Slug:"zambia",Population:18384},{Country:"Zimbabwe",Slug:"zimbabwe",Population:14863}],d={name:"LineChartContainer",components:{DynamicSelect:r.a,LineChart:C},data:function(){return{message:"Loading data ...",rangeValue:30,rangeMax:5,rangeMin:2,optionsObjArr:[],selectedObject:null,loaded:!1,chartOptions:{maintainAspectRatio:!1,responsive:!0,title:{display:!0,text:"Covid19 Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Thousands of people"}}]}}}},computed:{},mounted:function(){this.loaded=!1,this.message="Loading data ...",this.optionsObjArr=S,localStorage.Country?this.selectedObject=this.optionsObjArr.find((function(element){return element.Country===localStorage.Country})):this.randomCountry(),localStorage.Range&&(this.rangeValue=parseInt(localStorage.Range)),this.updateInfo()},methods:{updateInfo:function(){var n=this;return Object(l.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n.loaded=!1,n.$store.dispatch("setCountry",n.selectedObject),n.$store.dispatch("setRange",n.rangeValue),o.next=5,n.$store.dispatch("fetchAPI");case 5:n.rangeMax=n.$store.getters.getMaxRange,n.rangeValue>n.rangeMax&&(n.rangeValue=localStorage.Range=n.rangeMax,n.$store.dispatch("setRange",n.rangeValue)),n.rangeValue<2&&(n.rangeValue=localStorage.Range=2,n.$store.dispatch("setRange",n.rangeValue)),n.$store.getters.collectionForChart?n.loaded=!0:n.message="No data for this country!";case 9:case"end":return o.stop()}}),o)})))()},randomCountry:function(){var n=0;do{var o=Math.round(this.optionsObjArr.length*Math.random());this.selectedObject=this.optionsObjArr[o-1],n++}while(this.selectedObject.Population<100||n>100)},onChangeInput:function(){localStorage.Range=this.rangeValue,localStorage.Country=this.selectedObject.Country,this.updateInfo()}}},P=t(15),c={components:{LineChartContainer:Object(P.a)(d,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"ChartWrapper"},[t("div",{staticClass:"card shadow"},[t("div",{staticClass:"select_from"},[t("div",{staticClass:"select_input"},[t("dynamic-select",{attrs:{options:n.optionsObjArr,"option-value":"Slug","option-text":"Country",placeholder:"Select Country"},on:{input:n.onChangeInput},model:{value:n.selectedObject,callback:function(o){n.selectedObject=o},expression:"selectedObject"}})],1)])]),n._v(" "),t("div",{staticClass:"chart_container card shadow"},[n.loaded?t("LineChart",{attrs:{"chart-data":this.$store.getters.collectionForChart,options:n.chartOptions}}):t("p",[n._v(n._s(this.message))])],1),n._v(" "),n.loaded?t("div",{staticClass:"daysrange card shadow"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.rangeValue,expression:"rangeValue"}],attrs:{id:"daysrange",type:"range",min:n.rangeMin,max:n.rangeMax},domProps:{value:n.rangeValue},on:{change:n.onChangeInput,__r:function(o){n.rangeValue=o.target.value}}}),n._v(" "),t("label",{attrs:{for:"daysrange"}},[n._v(n._s(n.rangeValue)+" days chart")])]):n._e()])}),[],!1,null,null,null).exports},head:function(){return{title:"Covid19 Chart",meta:[{hid:"Covid19 Chart on Nuxt.js with Chart.js",name:"Covid19 Chart",content:"Covid19 Chart"}],noscript:[{innerHTML:"This site require JavaScript",body:!0}]}}},h=Object(P.a)(c,(function(){var n=this.$createElement,o=this._self._c||n;return o("div",{staticClass:"page-container"},[o("LineChartContainer")],1)}),[],!1,null,null,null);o.default=h.exports}}]);