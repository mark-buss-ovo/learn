"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[117],{4137:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9530:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const i={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function r(e){let{question:t,answers:n,chosenAnswer:r}=e;const[o,s]=a.useState();return a.createElement("div",null,a.createElement("div",null,a.createElement("h3",null,t),a.createElement("div",{className:"radio"},n.map(((e,n)=>{const l=r===n;let c="#e5e5e5";return o===n&&(c="var(--ifm-color-content)"),l&&e.isCorrect?c="var(--ifm-color-success)":l&&!e.isCorrect&&(c="var(--ifm-color-danger)"),e.isCorrect&&void 0!==r&&(c="var(--ifm-color-success)"),a.createElement("label",{className:i.radio_btn__wrapper,style:{borderColor:c},key:n},a.createElement("input",{className:i.radio_btn,type:"radio",name:t,value:e.text,onChange:()=>s(n),required:!0}),e.text,l&&e.isCorrect&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},a.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),l&&!e.isCorrect&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},a.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function o(e){let{QuizList:t}=e;console.log(t);const[n,o]=a.useState([]);return a.createElement("section",{className:i.quizs},a.createElement("div",null,a.createElement("form",{className:i.form,onSubmit:e=>{e.preventDefault();const n=new FormData(e.currentTarget);t.forEach((e=>{const t=e.answers.findIndex((t=>t.text===n.get(e.question)));o((e=>[...e,t]))}))}},t.map(((e,t)=>a.createElement(r,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:n[t]}))),a.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},3597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(7462),i=(n(7294),n(4137)),r=n(9530);const o={sidebar_position:5},s="Carbon Awareness",l={unversionedId:"carbon-awareness",id:"carbon-awareness",title:"Carbon Awareness",description:"Do more when the electricity is cleaner and do less when the electricity is dirtier.",source:"@site/docs/carbon-awareness.mdx",sourceDirName:".",slug:"/carbon-awareness",permalink:"/carbon-awareness",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/carbon-awareness.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Energy Efficiency",permalink:"/energy-efficiency"},next:{title:"Hardware Efficiency",permalink:"/hardware-efficiency"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Key concepts",id:"key-concepts",level:2},{value:"Carbon intensity",id:"carbon-intensity",level:3},{value:"Variability of carbon intensity",id:"variability-of-carbon-intensity",level:3},{value:"Dispatchability &amp; curtailment",id:"dispatchability--curtailment",level:3},{value:"Marginal carbon intensity",id:"marginal-carbon-intensity",level:3},{value:"Energy markets",id:"energy-markets",level:3},{value:"How to be more carbon aware",id:"how-to-be-more-carbon-aware",level:2},{value:"Demand shifting",id:"demand-shifting",level:3},{value:"Spatial shifting",id:"spatial-shifting",level:4},{value:"Temporal shifting",id:"temporal-shifting",level:4},{value:"Demand shaping",id:"demand-shaping",level:3},{value:"Summary",id:"summary",level:2},{value:"Quiz",id:"quiz",level:2}],d={toc:h};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"carbon-awareness"},"Carbon Awareness"),(0,i.kt)("admonition",{title:"Principle",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Do more when the electricity is cleaner and do less when the electricity is dirtier."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Not all electricity is produced in the same way. In different locations and times, electricity is generated using a variety of sources with varying carbon emissions. Some sources, such as wind, solar, or hydroelectric, are clean, renewable sources that emit little carbon. On the other hand, fossil fuel sources emit carbon at varying degrees to produce electricity. For example, both gas and coal emit more carbon than renewable sources, but gas-burning power plants emit less carbon than coal-burning power plants."),(0,i.kt)("p",null,"Carbon awareness is the idea of doing more when more energy comes from low carbon sources and doing less when more energy comes from high carbon sources."),(0,i.kt)("h2",{id:"key-concepts"},"Key concepts"),(0,i.kt)("h3",{id:"carbon-intensity"},"Carbon intensity"),(0,i.kt)("p",null,"Carbon intensity measures how much carbon (CO2e) is emitted per kilowatt-hour (KWh) of electricity consumed. The standard unit of carbon intensity is gCO2eq/kWh, or grams of carbon per kilowatt hour."),(0,i.kt)("p",null,"If your computer is plugged directly into a wind farm, its electricity would have a carbon intensity of 0 gCO2eq/kWh since a wind farm emits no carbon to produce that electricity. However, most people can't plug directly into wind farms; instead, they plug into power grids supplied with electricity from various sources."),(0,i.kt)("p",null,"Once on a grid, you can't control which sources supply the electricity you are using; you simply get a mix of everything. So, your carbon intensity will be a mix of all the current power sources in a grid, both the lower- and the higher-carbon sources."),(0,i.kt)("h3",{id:"variability-of-carbon-intensity"},"Variability of carbon intensity"),(0,i.kt)("p",null,"Carbon intensity varies by location since some regions have an energy mix containing more clean energy sources than others."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(1606).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,i.kt)("p",null,"Carbon intensity also changes over time due to the inherent variability of renewable energy caused by the unpredictability of weather conditions. For example, when it's cloudy or the wind isn't blowing, carbon intensity increases since more of the electricity in your mix comes from sources that emit carbon."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(6772).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,i.kt)("h3",{id:"dispatchability--curtailment"},"Dispatchability & curtailment"),(0,i.kt)("p",null,"Electricity demand varies during the day, and supply always needs to be able to meet that demand. A brownout (a dip in the voltage level of the power line) occurs if a utility doesn't produce enough electricity to meet demand. Conversely, if a utility produces more electricity than is required, then to stop infrastructure burning out, breakers trip and we have blackouts."),(0,i.kt)("p",null,"There needs to be a balance between the demand and supply of electricity at all times and the responsibility for this usually falls to the utility provider."),(0,i.kt)("p",null,"In the case of fossil fuels such as coal, it is easier to control the power produced for this supply; this is called ",(0,i.kt)("strong",{parentName:"p"},"dispatchability"),". However, in the case of renewable power sources such as wind farms, the power produced cannot easily be controlled (we can't control how much the wind blows). If the power source produces more electricity than is needed, that electricity is thrown away; this is called ",(0,i.kt)("strong",{parentName:"p"},"curtailment"),"."),(0,i.kt)("h3",{id:"marginal-carbon-intensity"},"Marginal carbon intensity"),(0,i.kt)("p",null,"If you suddenly need to access more power - for example, you need to turn on a light - that energy comes from the marginal power plant. The marginal power plant is dispatchable, which means marginal power plants are often powered by fossil fuels."),(0,i.kt)("p",null,"Marginal carbon intensity is the carbon intensity of the power plant that would have to be employed to meet any new demand."),(0,i.kt)("p",null,"Fossil-fueled power plants rarely scale down to 0. They have a minimum functioning threshold, and some don't scale; they are considered a consistent, always-on baseload. Because of this, we sometimes have the scenario where we curtail (throw away) renewable energy while still consuming energy from fossil fuel power plants."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(945).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("p",null,"In these situations, the marginal carbon intensity will be 0 gCO2eq/kWh since we know that any new demand will match the renewable energy we are curtailing."),(0,i.kt)("h3",{id:"energy-markets"},"Energy markets"),(0,i.kt)("p",null,"The exact market model varies around the world but broadly follows the same model."),(0,i.kt)("p",null,"When the demand for electricity goes down, utilities need to ",(0,i.kt)("strong",{parentName:"p"},"reduce")," the supply to balance supply and demand. They can do this in one of two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Buy less energy from fossil fuel plants."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(1356).Z,title:"image_tooltip",width:"1920",height:"1081"}),"\nEnergy from fossil fuel plants is usually the most expensive so this is the preferred method. This directly translates to burning fewer fossil fuels."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Buy less energy from renewable sources"),".\nRenewable sources are the cheapest, so they prefer not to do this. If a renewable source doesn't manage to sell all of its electricity, it has to throw the rest away.")),(0,i.kt)("p",null,"Reducing the amount of electricity consumed in your applications can help decrease the energy's carbon intensity seeing as the first thing to be scaled back are fossil fuels."),(0,i.kt)("p",null,"When the demand for electricity goes up, utilities need to increase the supply to balance supply and demand. They can do this in one of two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Buy more energy from renewable sources that are currently being curtailed"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(1199).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("p",null,"If you are curtailing, it means you have excess energy you could dispatch. Renewable energy is already the cheapest, so curtailed renewable energy will be the cheapest dispatchable energy source. Renewable plants will then sell the energy they would have had to curtail."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Buy more energy from fossil fuel plants"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(2809).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("p",null,"Fossil fuels are inherently dispatchable; they can quickly increase energy production by burning more. However, coal costs money, so this is the least preferred solution."),(0,i.kt)("p",null,"Energy markets are some of the most complex markets in the world so the above explanation is a simplification. But what's important to understand is that our goal is to increase investment into lower carbon energy sources, like renewables, and decrease investment into higher carbon sources, like coal. The best way to ensure money flows in the right direction is to make sure you use electricity with the least carbon intensity."),(0,i.kt)("h2",{id:"how-to-be-more-carbon-aware"},"How to be more carbon aware"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Using electricity when the carbon intensity is low is the best way to ensure investment flows towards low-carbon emitting plants and away from high-carbon emitting plants.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(7269).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,i.kt)("p",null,"There is a global transformation happening right now. All around the world, electricity grids are changing from primarily burning fossil fuels to sourcing energy from lower carbon sources like wind and solar. This is one of our best hopes for meeting our global reduction targets. As green software practitioners, let's see some of the ways we can help accelerate that transition."),(0,i.kt)("p",null,"The primary driver for the transition is economic rather than any sustainability target. Renewables are winning because they are cheaper and getting even more affordable over time. So, to help accelerate the transition, we need to make renewable plants more profitable and fossil fuel plants less profitable. The best way to do that is to use more electricity when it's coming from lower-carbon sources like renewables and less electricity when it's coming from higher-carbon sources."),(0,i.kt)("p",null,"Carbon intensity is lower when more energy comes from lower-carbon sources and higher when it comes from higher-carbon sources."),(0,i.kt)("h3",{id:"demand-shifting"},"Demand shifting"),(0,i.kt)("p",null,"Being carbon aware means responding to shifts in carbon intensity by increasing or decreasing your demand. If your work allows you to be flexible with when and where you run workloads, you can shift accordingly - consuming electricity when the carbon intensity is lower and pausing production when it is higher. For example, training a Machine Learning model at a different time or region with much lower carbon intensity."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/6128960"},"Studies")," show these actions can result in 45% to 99% carbon reductions depending on the number of renewables powering the grid."),(0,i.kt)("p",null,"Demand shifting can be further broken down into spatial and temporal shifting."),(0,i.kt)("h4",{id:"spatial-shifting"},"Spatial shifting"),(0,i.kt)("p",null,"Spatial shifting means moving your computation to another physical location where the current carbon intensity is lower. It might be a region that naturally has lower carbon sources of energy. For example, moving to different hemispheres depending on the season for more sunlight hours."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(2734).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("h4",{id:"temporal-shifting"},"Temporal shifting"),(0,i.kt)("p",null,"If you can't shift your computation spatially to another region, another option you have is to shift to another time. Perhaps later in the day or night when it's sunnier or windier and, therefore, the carbon intensity is lower. This is called temporal demand shifting. We can predict future carbon intensity reasonably well through advances in weather forecasting."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(995).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("p",null,"Some of the biggest technology companies have recognised the importance of carbon awareness and are using advanced modeling techniques to implement demand shifting."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Google Carbon Aware Data Centers")," - Google launched a project to ",(0,i.kt)("a",{parentName:"li",href:"https://blog.google/outreach-initiatives/sustainability/carbon-aware-computing-location/"},"make some of the cloud workloads carbon aware"),". They created models to predict tomorrow's carbon intensity and workload. They then shaped large-scale workloads so more would happen when and where the carbon intensity is lowest, but in such a way that they could still handle the expected load."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Microsoft Carbon Aware Windows")," - ",(0,i.kt)("a",{parentName:"li",href:"https://www.techradar.com/news/windows-11-is-getting-an-eco-friendly-update-but-could-microsoft-do-more"},"Microsoft announced a project to make Windows 11 more sustainable"),". Initially, this means running Windows updates when the carbon intensity is lower.")),(0,i.kt)("h3",{id:"demand-shaping"},"Demand shaping"),(0,i.kt)("p",null,"Demand shifting is the strategy of moving computation to regions or times when the carbon intensity is lowest. Demand shaping is a similar strategy. However, instead of moving demand to a different region or time, we shape our computation to match the existing supply."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(451).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If carbon intensity is low, increase the demand; do more in your applications."),(0,i.kt)("li",{parentName:"ul"},"If carbon intensity is high, decrease demand; do less in your applications.")),(0,i.kt)("p",null,"Demand shaping for carbon-aware applications is all about the supply of carbon. When the carbon cost of running your application becomes high, shape the demand to match the supply of carbon. This can happen automatically, or the user can make a choice."),(0,i.kt)("p",null,"Eco mode is an example of demand shifting. Eco modes are found in everyday appliances like cars or washing machines. When activated, some amount of performance is sacrificed in order to consume fewer resources (gas or electricity). Because there is this trade-off with performance, eco modes are always presented to a user as a choice."),(0,i.kt)("p",null,"Software applications can also have eco modes that can - either automatically or with user consent - make decisions to reduce carbon emissions."),(0,i.kt)("p",null,"One example of this is video conferencing software that adjusts streaming quality automatically. Rather than streaming at the highest quality possible at all times, it reduces the video quality to prioritize audio when the bandwidth is low."),(0,i.kt)("p",null,"Another example is TCP/IP. The transfer speed increases in response to how much data is broadcast over the wire."),(0,i.kt)("p",null,"A third example is progressive enhancement with the web. The web experience improves depending on the resources and bandwidth available on the end user\u2019s device."),(0,i.kt)("p",null,"Demand shaping is related to a broader concept in sustainability, which is to reduce consumption. We can achieve a lot by becoming more efficient with resources, but we also need to consume less at some point."),(0,i.kt)("p",null,"As Green Software practitioners, we would consider canceling a process when the carbon intensity is high instead of demand shifting - reducing the demands of our application and the expectations of our end users."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon awareness means understanding that the energy you consume does not always have the same impact in terms of carbon intensity."),(0,i.kt)("li",{parentName:"ul"},"Carbon intensity varies depending on the time and place it is consumed."),(0,i.kt)("li",{parentName:"ul"},"The nature of fossil fuels and renewable energy sources means that consuming energy when carbon intensity is low increases the demand for renewable energy sources and increases the percentage of renewable energy in the supply."),(0,i.kt)("li",{parentName:"ul"},"Demand shifting means moving your energy consumption to different locations or times of days where the carbon intensity is lower."),(0,i.kt)("li",{parentName:"ul"},"Demand shaping means adapting your energy consumption around carbon intensity variability in order to consume more in periods of low intensity and less in periods of high intensity.")),(0,i.kt)("h2",{id:"quiz"},"Quiz"),(0,i.kt)(r.Z,{QuizList:[{question:"What is carbon intensity?",answers:[{text:"The amount of carbon produced using clean energy sources",isCorrect:!1},{text:"The amount of carbon produced per kilowatt hour",isCorrect:!0},{text:"0gCO2eq/kWh",isCorrect:!1}]},{question:"What is the standard unit of carbon intensity?",answers:[{text:"gCO2eq/kWh",isCorrect:!1},{text:"gCO2e/kWh",isCorrect:!1},{text:"Either of the above",isCorrect:!0}]},{question:"What two variables affect carbon intensity?",answers:[{text:"Location and time",isCorrect:!0},{text:"Supply and demand",isCorrect:!1},{text:"Time and demand",isCorrect:!1}]},{question:"Which of the following is not true about marginal power plants?",answers:[{text:"They are dispatchable",isCorrect:!1},{text:"They usually burn fossil fuels",isCorrect:!1},{text:"They are located in places where clean energy sources are not available",isCorrect:!0}]},{question:"What is curtailment?",answers:[{text:"Surplus energy supply",isCorrect:!1},{text:"Energy that is thrown away due to oversupply",isCorrect:!0},{text:"Reducing supply to match demand",isCorrect:!1}]},{question:"Which of the following is not an example of carbon aware computing?",answers:[{text:"Consuming more electricity when the carbon intensity is lower",isCorrect:!1},{text:"Switching to renewable energy",isCorrect:!0},{text:"Pausing production when carbon intensity is higher",isCorrect:!1}]},{question:"What are the two types of demand shifting?",answers:[{text:"Temporal and permanent",isCorrect:!1},{text:"Spatial and temporal",isCorrect:!0},{text:"Curtailment and dispatchability",isCorrect:!1}]},{question:"What is demand shaping?",answers:[{text:"Do more when carbon intensity is low, do less when carbon intensity is high",isCorrect:!0},{text:"Do more when carbon intensity is high, do less when carbon intensity is low",isCorrect:!1},{text:"Do more when costs are low, do less when costs are high",isCorrect:!1}]},{question:"Which of the following is an example of carbon awareness?",answers:[{text:"Creating a piece of software that produces very low emissions",isCorrect:!1},{text:"Canceling a process when you know carbon intensity is high",isCorrect:!0},{text:"Using cloud servers instead of in-house servers",isCorrect:!1}]}],mdxType:"Quiz"}))}u.isMDXComponent=!0},1606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07_variability_CI-7435d76aabeeecd5e276367c2003f018.png"},6772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08_variability_CI-f14dcd8660f96d9c22f8eeab43a9378e.png"},945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09_marginal_CI-6378f6863af85491188380d14cb148b0.png"},1356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10_marginal_CI-4a8054216a2deb20451468e29865383e.png"},1199:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/11_marginal_CI-f1b16c73b93bd675842f0cadfe63ea4f.png"},2809:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/12_marginal_CI-26b1896bea0312908eee06b7be4cc8da.png"},7269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/13_carbon_aware-27e52c7a529e6ee67c456f8556d0f30a.png"},2734:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14_spatial_shifting-4949d342f2ff430edea67874a9eaad52.png"},995:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/15_temporal_shifting-8130f69c4ca6ced119b5dedfb58f745a.png"},451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/16_demand_shaping-4d2d1021da9740ea3cd15a383874f4ed.png"}}]);