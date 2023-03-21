"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[804],{4137:(e,i,a)=>{a.d(i,{Zo:()=>d,kt:()=>p});var t=a(7294);function n(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function o(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?o(Object(a),!0).forEach((function(i){n(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function l(e,i){if(null==e)return{};var a,t,n=function(e,i){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],i.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var i=t.useContext(s),a=i;return e&&(a="function"==typeof e?e(i):r(r({},i),e)),a},d=function(e){var i=c(e.components);return t.createElement(s.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return a?t.createElement(b,r(r({ref:i},d),{},{components:a})):t.createElement(b,r({ref:i},d))}));function p(e,i){var a=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9530:(e,i,a)=>{a.d(i,{Z:()=>r});var t=a(7294);const n={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function o(e){let{question:i,answers:a,chosenAnswer:o}=e;const[r,l]=t.useState();return t.createElement("div",null,t.createElement("div",null,t.createElement("h3",null,i),t.createElement("div",{className:"radio"},a.map(((e,a)=>{const s=o===a;let c="#e5e5e5";return r===a&&(c="var(--ifm-color-content)"),s&&e.isCorrect?c="var(--ifm-color-success)":s&&!e.isCorrect&&(c="var(--ifm-color-danger)"),e.isCorrect&&void 0!==o&&(c="var(--ifm-color-success)"),t.createElement("label",{className:n.radio_btn__wrapper,style:{borderColor:c},key:a},t.createElement("input",{className:n.radio_btn,type:"radio",name:i,value:e.text,onChange:()=>l(a),required:!0}),e.text,s&&e.isCorrect&&t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},t.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),s&&!e.isCorrect&&t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},t.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function r(e){let{QuizList:i}=e;console.log(i);const[a,r]=t.useState([]);return t.createElement("section",{className:n.quizs},t.createElement("div",null,t.createElement("form",{className:n.form,onSubmit:e=>{e.preventDefault();const a=new FormData(e.currentTarget);i.forEach((e=>{const i=e.answers.findIndex((i=>i.text===a.get(e.question)));r((e=>[...e,i]))}))}},i.map(((e,i)=>t.createElement(o,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:a[i]}))),t.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},7088:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(7462),n=(a(7294),a(4137)),o=a(9530);const r={sidebar_position:5},l="Consapevolezza del carbonio",s={unversionedId:"carbon-awareness",id:"carbon-awareness",title:"Consapevolezza del carbonio",description:"This translation is a community translation, it has limited support and might not be up to date with the latest version in English.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/carbon-awareness.mdx",sourceDirName:".",slug:"/carbon-awareness",permalink:"/it/carbon-awareness",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/carbon-awareness.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Efficienza Energetica",permalink:"/it/energy-efficiency"},next:{title:"Efficienza dell'hardware",permalink:"/it/hardware-efficiency"}},c={},d=[{value:"Introduzione",id:"introduzione",level:2},{value:"Concetti chiave",id:"concetti-chiave",level:2},{value:"Intensit\xe0 di carbonio (CI)",id:"intensit\xe0-di-carbonio-ci",level:3},{value:"Variabilit\xe0 dell&#39;intensit\xe0 di carbonio",id:"variabilit\xe0-dellintensit\xe0-di-carbonio",level:3},{value:"Dispacciabilit\xe0 e decurtazione (curtailment)",id:"dispacciabilit\xe0-e-decurtazione-curtailment",level:3},{value:"Intensit\xe0 marginale di carbonio",id:"intensit\xe0-marginale-di-carbonio",level:3},{value:"Mercati dell&#39;energia",id:"mercati-dellenergia",level:3},{value:"Come essere pi\xf9 consapevoli delle emissioni di carbonio",id:"come-essere-pi\xf9-consapevoli-delle-emissioni-di-carbonio",level:2},{value:"Slittamento della domanda",id:"slittamento-della-domanda",level:3},{value:"Slittamento spaziale",id:"slittamento-spaziale",level:4},{value:"Slittamento temporale",id:"slittamento-temporale",level:4},{value:"Modellamento della domanda",id:"modellamento-della-domanda",level:3},{value:"Sintesi",id:"sintesi",level:2},{value:"Quiz (in inglese)",id:"quiz-in-inglese",level:2}],m={toc:d};function u(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"consapevolezza-del-carbonio"},"Consapevolezza del carbonio"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"This translation is a community translation, it has limited support and might not be up to date with the latest version in English."),"\n",(0,n.kt)("em",{parentName:"p"},"Questa traduzione \xe8 una traduzione community, ha un supporto limitato e potrebbe non essere aggiornata con l'ultima versione in inglese."))),(0,n.kt)("admonition",{title:"Principio",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Fare di pi\xf9 quando l'elettricit\xe0 \xe8 pi\xf9 pulita e fare di meno quando l'elettricit\xe0 \xe8 pi\xf9 sporca."))),(0,n.kt)("h2",{id:"introduzione"},"Introduzione"),(0,n.kt)("p",null,"Non tutta l'elettricit\xe0 viene prodotta nello stesso modo. In luoghi e tempi diversi, l'elettricit\xe0 viene generata utilizzando una variet\xe0 di fonti con emissioni di carbonio variabili. Alcune fonti, come l'eolico, il solare o l'idroelettrico, sono fonti pulite e rinnovabili che emettono poche emissioni di carbonio. D'altro canto, le fonti di combustibili fossili emettono carbonio in misura variabile per produrre elettricit\xe0. Ad esempio, sia il gas che il carbone emettono pi\xf9 carbonio delle fonti rinnovabili, ma le centrali elettriche a gas emettono meno carbonio di quelle a carbone."),(0,n.kt)("p",null,"La consapevolezza del carbonio \xe8 l'idea di fare di pi\xf9 quando pi\xf9 energia proviene da fonti a basso contenuto di carbonio e di fare di meno quando pi\xf9 energia proviene da fonti ad alto contenuto di carbonio."),(0,n.kt)("h2",{id:"concetti-chiave"},"Concetti chiave"),(0,n.kt)("h3",{id:"intensit\xe0-di-carbonio-ci"},"Intensit\xe0 di carbonio (CI)"),(0,n.kt)("p",null,"L'intensit\xe0 di carbonio misura la quantit\xe0 di carbonio (CO2e) emessa per ogni chilowattora (KWh) di elettricit\xe0 consumata. L'unit\xe0 standard dell'intensit\xe0 di carbonio \xe8 gCO2eq/kWh, ovvero grammi di carbonio per kilowattora."),(0,n.kt)("p",null,"Se il vostro computer fosse collegato direttamente a un parco eolico, la sua elettricit\xe0 avrebbe un'intensit\xe0 di carbonio pari a 0 gCO2eq/kWh, poich\xe9 un parco eolico non emette carbonio per produrre quell'elettricit\xe0. Tuttavia, la maggior parte delle persone non pu\xf2 collegarsi direttamente a parchi eolici, ma si collega a reti elettriche alimentate con elettricit\xe0 proveniente da varie fonti."),(0,n.kt)("p",null,"Una volta in rete, non \xe8 possibile controllare quali fonti forniscono l'elettricit\xe0 che si sta utilizzando; si ottiene semplicemente un mix di tutto. Pertanto, l'intensit\xe0 di carbonio sar\xe0 un mix di tutte le fonti di energia presenti in una rete, sia quelle a bassa emissione di carbonio che quelle a pi\xf9 alta emissione."),(0,n.kt)("h3",{id:"variabilit\xe0-dellintensit\xe0-di-carbonio"},"Variabilit\xe0 dell'intensit\xe0 di carbonio"),(0,n.kt)("p",null,"L'intensit\xe0 di carbonio varia a seconda della localit\xe0, poich\xe9 alcune regioni hanno un mix energetico che contiene pi\xf9 fonti di energia pulita di altre."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(9562).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,n.kt)("p",null,"L'intensit\xe0 di carbonio cambia anche nel tempo a causa della variabilit\xe0 intrinseca dell'energia rinnovabile dovuta all'imprevedibilit\xe0 delle condizioni meteorologiche. Ad esempio, quando \xe8 nuvoloso o non soffia il vento, l'intensit\xe0 di carbonio aumenta perch\xe9 una parte maggiore dell'elettricit\xe0 nel vostro mix proviene da fonti che emettono carbonio."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(3496).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,n.kt)("h3",{id:"dispacciabilit\xe0-e-decurtazione-curtailment"},"Dispacciabilit\xe0 e decurtazione (curtailment)"),(0,n.kt)("p",null,"La domanda di elettricit\xe0 varia durante il giorno e l'offerta deve sempre essere in grado di soddisfare tale domanda. Un brownout (un calo del livello di tensione della linea elettrica) si verifica se un'azienda elettrica non produce abbastanza elettricit\xe0 per soddisfare la domanda. Al contrario, se un'azienda elettrica produce pi\xf9 elettricit\xe0 del necessario, per evitare che le infrastrutture si brucino, gli interruttori scattano e si verifica un blackout."),(0,n.kt)("p",null,"\xc8 necessario che vi sia sempre un equilibrio tra la domanda e l'offerta di energia elettrica e la responsabilit\xe0 di ci\xf2 ricade solitamente sul fornitore di servizi."),(0,n.kt)("p",null,"Nel caso dei combustibili fossili, come il carbone, \xe8 pi\xf9 facile controllare l'energia prodotta per questa fornitura; questo \xe8 chiamato ",(0,n.kt)("strong",{parentName:"p"},"dispacciamento"),". Tuttavia, nel caso di fonti di energia rinnovabili come i parchi eolici, la potenza prodotta non pu\xf2 essere facilmente controllata (non possiamo controllare quanto soffia il vento). Se la fonte di energia produce pi\xf9 elettricit\xe0 di quanta ne sia necessaria, quell'elettricit\xe0 viene buttata via; questo si chiama ",(0,n.kt)("strong",{parentName:"p"},"curtailment"),"."),(0,n.kt)("h3",{id:"intensit\xe0-marginale-di-carbonio"},"Intensit\xe0 marginale di carbonio"),(0,n.kt)("p",null,"Se improvvisamente si ha bisogno di accedere a una maggiore quantit\xe0 di energia, ad esempio per accendere una luce, l'energia proviene dalla centrale elettrica marginale. La centrale elettrica marginale \xe8 dispacciabile, il che significa che le centrali elettriche marginali sono spesso alimentate da combustibili fossili."),(0,n.kt)("p",null,"L'intensit\xe0 di carbonio marginale \xe8 l'intensit\xe0 di carbonio della centrale elettrica che dovrebbe essere impiegata per soddisfare una nuova domanda."),(0,n.kt)("p",null,"Le centrali elettriche a combustibili fossili raramente scalano fino a 0. Hanno una soglia minima di funzionamento e alcune non scalano; sono considerate un carico di base costante e sempre attivo. Per questo motivo, a volte si verifica uno scenario in cui si riduce (si butta via) l'energia rinnovabile mentre si continua a consumare energia dalle centrali a combustibili fossili."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(3083).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"In queste situazioni, l'intensit\xe0 marginale di carbonio sar\xe0 pari a 0 gCO2eq/kWh, poich\xe9 sappiamo che qualsiasi nuova domanda corrisponder\xe0 all'energia rinnovabile che stiamo riducendo."),(0,n.kt)("h3",{id:"mercati-dellenergia"},"Mercati dell'energia"),(0,n.kt)("p",null,"Il modello di mercato esatto varia in tutto il mondo, ma in linea di massima segue lo stesso modello."),(0,n.kt)("p",null,"Quando la domanda di elettricit\xe0 diminuisce, le societ\xe0 di servizi devono ",(0,n.kt)("strong",{parentName:"p"},"ridurre")," l'offerta per bilanciare la domanda e l'offerta. Possono farlo in due modi:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Acquistare meno energia dalle centrali a combustibili fossili."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(5113).Z,title:"image_tooltip",width:"1920",height:"1081"}),"\nL'energia proveniente dalle centrali a combustibili fossili \xe8 di solito la pi\xf9 costosa, quindi \xe8 il metodo preferito. Ci\xf2 si traduce direttamente in un minor consumo di combustibili fossili."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Acquistare meno energia da fonti rinnovabili"),".\nLe fonti rinnovabili sono le pi\xf9 economiche, quindi preferiscono non farlo. Se una fonte rinnovabile non riesce a vendere tutta la sua elettricit\xe0, deve buttare via il resto.")),(0,n.kt)("p",null,"Ridurre la quantit\xe0 di elettricit\xe0 consumata nelle vostre applicazioni pu\xf2 contribuire a diminuire l'intensit\xe0 di carbonio dell'energia, dato che la prima cosa da ridurre sono i combustibili fossili."),(0,n.kt)("p",null,"Quando la domanda di elettricit\xe0 aumenta, le societ\xe0 di servizi devono aumentare l'offerta per bilanciare la domanda e l'offerta. Possono farlo in due modi:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Acquistare pi\xf9 energia da fonti rinnovabili che al momento vengono ridotte"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(6386).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"Se si sta riducendo l'energia, significa che si dispone di energia in eccesso che potrebbe essere dispacciata. L'energia rinnovabile \xe8 gi\xe0 la pi\xf9 economica, quindi l'energia rinnovabile ridotta sar\xe0 la fonte di energia dispacciabile pi\xf9 economica. Gli impianti rinnovabili venderanno quindi l'energia che avrebbero dovuto ridurre."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Acquistare pi\xf9 energia dalle centrali a combustibili fossili"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8997).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"I combustibili fossili sono intrinsecamente dispacciabili; possono aumentare rapidamente la produzione di energia bruciando di pi\xf9. Tuttavia, il carbone costa, quindi questa \xe8 la soluzione meno preferita."),(0,n.kt)("p",null,"I mercati dell'energia sono tra i pi\xf9 complessi al mondo, quindi la spiegazione di cui sopra \xe8 una semplificazione. Ma ci\xf2 che \xe8 importante capire \xe8 che il nostro obiettivo \xe8 aumentare gli investimenti in fonti energetiche a bassa emissione di carbonio, come le energie rinnovabili, e diminuire quelli in fonti ad alta emissione di carbonio, come il carbone. Il modo migliore per garantire che il denaro fluisca nella giusta direzione \xe8 assicurarsi di utilizzare l'elettricit\xe0 con la minore intensit\xe0 di carbonio."),(0,n.kt)("h2",{id:"come-essere-pi\xf9-consapevoli-delle-emissioni-di-carbonio"},"Come essere pi\xf9 consapevoli delle emissioni di carbonio"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Utilizzare l'elettricit\xe0 quando l'intensit\xe0 di carbonio \xe8 bassa \xe8 il modo migliore per garantire che gli investimenti vadano verso gli impianti a bassa emissione di carbonio e lontano dagli impianti ad alta emissione di carbonio."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(3405).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,n.kt)("p",null,"\xc8 in corso una trasformazione globale. In tutto il mondo, le reti elettriche stanno passando dalla combustione di combustibili fossili all'approvvigionamento di energia da fonti a bassa emissione di carbonio come l'energia eolica e solare. Questa \xe8 una delle nostre migliori speranze per raggiungere gli obiettivi di riduzione globale. Come professionisti del software verde, vediamo alcuni dei modi in cui possiamo contribuire ad accelerare questa transizione."),(0,n.kt)("p",null,"Il motore principale della transizione \xe8 l'economia, pi\xf9 che gli obiettivi di sostenibilit\xe0. Le energie rinnovabili sono vincenti perch\xe9 sono meno costose e diventano sempre pi\xf9 accessibili nel tempo. Per accelerare la transizione, quindi, dobbiamo rendere pi\xf9 redditizi gli impianti a fonti rinnovabili e meno redditizi quelli a combustibili fossili. Il modo migliore per farlo \xe8 utilizzare pi\xf9 elettricit\xe0 quando proviene da fonti a basso contenuto di carbonio come le rinnovabili e meno elettricit\xe0 quando proviene da fonti a pi\xf9 alto contenuto di carbonio."),(0,n.kt)("p",null,"L'intensit\xe0 di carbonio \xe8 minore quando l'energia proviene da fonti a basso contenuto di carbonio e maggiore quando proviene da fonti a pi\xf9 alto contenuto di carbonio."),(0,n.kt)("h3",{id:"slittamento-della-domanda"},"Slittamento della domanda"),(0,n.kt)("p",null,"Essere consapevoli delle emissioni di carbonio significa rispondere alle variazioni dell'intensit\xe0 di carbonio aumentando o diminuendo la propria domanda. Se il vostro lavoro vi permette di essere flessibili con i tempi e i luoghi di esecuzione dei carichi di lavoro, potete slittarlo di conseguenza, consumando elettricit\xe0 quando l'intensit\xe0 di carbonio \xe8 minore e sospendendo la produzione quando \xe8 maggiore. Ad esempio, addestrando un modello di Machine Learning in un momento o in una regione diversa con un'intensit\xe0 di carbonio molto pi\xf9 bassa."),(0,n.kt)("p",null,"[Studi]"," (",(0,n.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/6128960"},"https://ieeexplore.ieee.org/document/6128960"),") dimostrano che queste azioni possono portare a una riduzione delle emissioni di carbonio dal 45% al 99%, a seconda del numero di energie rinnovabili che alimentano la rete."),(0,n.kt)("p",null,"Lo spostamento della domanda pu\xf2 essere ulteriormente suddiviso in slittamento spaziale e temporale."),(0,n.kt)("h4",{id:"slittamento-spaziale"},"Slittamento spaziale"),(0,n.kt)("p",null,"Lo slittamento spaziale significa spostare i calcoli in un altro luogo fisico in cui l'intensit\xe0 di carbonio attuale \xe8 inferiore. Potrebbe trattarsi di una regione che dispone naturalmente di fonti energetiche a pi\xf9 basso contenuto di carbonio. Ad esempio, spostarsi in emisferi diversi a seconda della stagione per avere pi\xf9 ore di luce solare."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(9845).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("h4",{id:"slittamento-temporale"},"Slittamento temporale"),(0,n.kt)("p",null,"Se non \xe8 possibile spostare il calcolo spazialmente in un'altra regione, un'altra opzione \xe8 quella di spostarsi in un altro momento. Magari pi\xf9 tardi nel giorno o nella notte, quando c'\xe8 pi\xf9 sole o pi\xf9 vento e, quindi, l'intensit\xe0 di carbonio \xe8 minore. Questo si chiama spostamento temporale della domanda. Grazie ai progressi delle previsioni meteorologiche, possiamo prevedere in modo ragionevole l'intensit\xe0 di carbonio futura."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(2940).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"Alcune delle pi\xf9 grandi aziende tecnologiche hanno riconosciuto l'importanza della consapevolezza delle emissioni di carbonio e stanno utilizzando tecniche di modellazione avanzate per implementare il trasferimento della domanda."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Google Carbon Aware Data Centers")," - Google ha lanciato un progetto per ",(0,n.kt)("a",{parentName:"li",href:"https://blog.google/outreach-initiatives/sustainability/carbon-aware-computing-location/"},"rendere alcuni dei carichi di lavoro del cloud consapevoli delle emissioni di anidride carbonica"),". Ha creato modelli per prevedere l'intensit\xe0 di carbonio e il carico di lavoro di domani. Hanno quindi modellato i carichi di lavoro su larga scala in modo che avvengano di pi\xf9 quando e dove l'intensit\xe0 di carbonio \xe8 pi\xf9 bassa, ma in modo tale da poter comunque gestire il carico previsto."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Microsoft Carbon Aware Windows")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.techradar.com/news/windows-11-is-getting-an-eco-friendly-update-but-could-microsoft-do-more"},"Microsoft ha annunciato un progetto per rendere Windows 11 pi\xf9 sostenibile"),". Inizialmente, ci\xf2 significa eseguire gli aggiornamenti di Windows quando l'intensit\xe0 di carbonio \xe8 minore.")),(0,n.kt)("h3",{id:"modellamento-della-domanda"},"Modellamento della domanda"),(0,n.kt)("p",null,"Il demand shifting \xe8 una strategia che consiste nello spostare i calcoli in regioni o momenti in cui l'intensit\xe0 di carbonio \xe8 pi\xf9 bassa. Il demand shaping \xe8 una strategia simile. Tuttavia, invece di spostare la domanda in una regione o in un momento diverso, modelliamo i nostri calcoli in modo che corrispondano all'offerta esistente."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(5033).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se l'intensit\xe0 di carbonio \xe8 bassa, aumentate la domanda; fate di pi\xf9 nelle vostre applicazioni."),(0,n.kt)("li",{parentName:"ul"},"Se l'intensit\xe0 di carbonio \xe8 alta, diminuite la domanda; fate di meno nella applicazioni.")),(0,n.kt)("p",null,"Il demand shaping per le applicazioni carbon-aware riguarda l'offerta di carbonio. Quando il costo del carbonio per l'esecuzione della vostra applicazione diventa elevato, modellate la domanda in modo che corrisponda all'offerta di carbonio. Questo pu\xf2 avvenire automaticamente, oppure l'utente pu\xf2 fare una scelta."),(0,n.kt)("p",null,"La modalit\xe0 Eco \xe8 un esempio di spostamento della domanda. Le modalit\xe0 Eco sono presenti negli elettrodomestici di uso quotidiano, come le automobili o le lavatrici. Quando vengono attivate, si sacrificano alcune prestazioni per consumare meno risorse (gas o elettricit\xe0). Poich\xe9 esiste un compromesso con le prestazioni, le modalit\xe0 ecologiche sono sempre presentate all'utente come una scelta."),(0,n.kt)("p",null,"Anche le applicazioni software possono avere modalit\xe0 ecologiche che possono, automaticamente o con il consenso dell'utente, prendere decisioni per ridurre le emissioni di carbonio."),(0,n.kt)("p",null,"Un esempio \xe8 il software per videoconferenze che regola automaticamente la qualit\xe0 dello streaming. Invece di trasmettere sempre alla massima qualit\xe0 possibile, riduce la qualit\xe0 video per dare priorit\xe0 all'audio quando la larghezza di banda \xe8 bassa."),(0,n.kt)("p",null,"Un altro esempio \xe8 il TCP/IP. La velocit\xe0 di trasferimento aumenta in risposta alla quantit\xe0 di dati trasmessi sul filo."),(0,n.kt)("p",null,"Un terzo esempio \xe8 il miglioramento progressivo del web. L'esperienza web migliora in base alle risorse e alla larghezza di banda disponibili sul dispositivo dell'utente finale."),(0,n.kt)("p",null,"Il demand shaping \xe8 legato a un concetto pi\xf9 ampio di sostenibilit\xe0, ovvero la riduzione dei consumi. Possiamo ottenere molto diventando pi\xf9 efficienti con le risorse, ma a un certo punto dobbiamo anche consumare meno."),(0,n.kt)("p",null,"Come professionisti del software verde, prenderemmo in considerazione dapprima l'annullamento di un processo quando l'intensit\xe0 di carbonio \xe8 elevata invece di spostare la domanda, riducendo le richieste della nostra applicazione e le aspettative dei nostri utenti finali."),(0,n.kt)("h2",{id:"sintesi"},"Sintesi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Essere consapevoli delle emissioni di carbonio significa capire che l'energia consumata non ha sempre lo stesso impatto in termini di intensit\xe0 di carbonio."),(0,n.kt)("li",{parentName:"ul"},"L'intensit\xe0 di carbonio varia a seconda del momento e del luogo in cui viene consumata."),(0,n.kt)("li",{parentName:"ul"},"La natura dei combustibili fossili e delle fonti di energia rinnovabili fa s\xec che il consumo di energia quando l'intensit\xe0 di carbonio \xe8 bassa aumenti la domanda di fonti di energia rinnovabili e aumenti la percentuale di energia rinnovabile nell'offerta."),(0,n.kt)("li",{parentName:"ul"},"Spostare la domanda significa spostare il consumo di energia in luoghi o momenti della giornata in cui l'intensit\xe0 di carbonio \xe8 minore."),(0,n.kt)("li",{parentName:"ul"},"Demand shaping significa adattare il consumo di energia alla variabilit\xe0 dell'intensit\xe0 di carbonio, in modo da consumare di pi\xf9 nei periodi di bassa intensit\xe0 e di meno nei periodi di alta intensit\xe0.")),(0,n.kt)("h2",{id:"quiz-in-inglese"},"Quiz (in inglese)"),(0,n.kt)(o.Z,{QuizList:[{question:"What is carbon intensity?",answers:[{text:"The amount of carbon produced using clean energy sources",isCorrect:!1},{text:"The amount of carbon produced per kilowatt hour",isCorrect:!0},{text:"0gCO2eq/kWh",isCorrect:!1}]},{question:"What is the standard unit of carbon intensity?",answers:[{text:"gCO2eq/kWh",isCorrect:!1},{text:"gCO2e/kWh",isCorrect:!1},{text:"Either of the above",isCorrect:!0}]},{question:"What two variables affect carbon intensity?",answers:[{text:"Location and time",isCorrect:!0},{text:"Supply and demand",isCorrect:!1},{text:"Time and demand",isCorrect:!1}]},{question:"Which of the following is not true about marginal power plants?",answers:[{text:"They are dispatchable",isCorrect:!1},{text:"They usually burn fossil fuels",isCorrect:!1},{text:"They are located in places where clean energy sources are not available",isCorrect:!0}]},{question:"What is curtailment?",answers:[{text:"Surplus energy supply",isCorrect:!1},{text:"Energy that is thrown away due to oversupply",isCorrect:!0},{text:"Reducing supply to match demand",isCorrect:!1}]},{question:"Which of the following is not an example of carbon aware computing?",answers:[{text:"Consuming more electricity when the carbon intensity is lower",isCorrect:!1},{text:"Switching to renewable energy",isCorrect:!0},{text:"Pausing production when carbon intensity is higher",isCorrect:!1}]},{question:"What are the two types of demand shifting?",answers:[{text:"Temporal and permanent",isCorrect:!1},{text:"Spatial and temporal",isCorrect:!0},{text:"Curtailment and dispatchability",isCorrect:!1}]},{question:"What is demand shaping?",answers:[{text:"Do more when carbon intensity is low, do less when carbon intensity is high",isCorrect:!0},{text:"Do more when carbon intensity is high, do less when carbon intensity is low",isCorrect:!1},{text:"Do more when costs are low, do less when costs are high",isCorrect:!1}]},{question:"Which of the following is an example of carbon awareness?",answers:[{text:"Creating a piece of software that produces very low emissions",isCorrect:!1},{text:"Canceling a process when you know carbon intensity is high",isCorrect:!0},{text:"Using cloud servers instead of in-house servers",isCorrect:!1}]}],mdxType:"Quiz"}))}u.isMDXComponent=!0},9562:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/07_distribuzione_CI-e668c8603e185333287616fc16dc89fa.png"},3496:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/08_distribuzione_CI-3882c8e61de4c379e4ede70056db7459.png"},3083:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/09_CI_marginale-4ec186b12980204af5c325bdf6c4d8ac.png"},5113:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/10_CI_marginale-d20e68b17a8c04915f33ed854b29a094.png"},6386:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/11_CI_marginale-192a35fa424f6625fe8da7545102d077.png"},8997:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/12_CI_marginale-0caa3b0d99eff0bc77015f07b8304c4e.png"},3405:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/13_consapevolezza_del_carbonio-c0db7cfa248d923e2c9d2aa219a59ad8.png"},9845:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/14_slittamento_spaziale-056814cf17cb82246a8428c7a95d93a9.png"},2940:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/15_slittamento_temporale-09b06d6414a2ab3a2784fc38bf9bdbde.png"},5033:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/16_adattamento_della_domanda-5715ad25c6db9c1228370ce4e8917901.png"}}]);