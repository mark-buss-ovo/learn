"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[187],{4137:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,a,o=function(e,i){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var i=a.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},u=function(e){var i=c(e.components);return a.createElement(s.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},d=a.forwardRef((function(e,i){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return t?a.createElement(g,r(r({ref:i},u),{},{components:t})):a.createElement(g,r({ref:i},u))}));function m(e,i){var t=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var n=t.length,r=new Array(n);r[0]=d;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<n;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9530:(e,i,t)=>{t.d(i,{Z:()=>r});var a=t(7294);const o={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function n(e){let{question:i,answers:t,chosenAnswer:n}=e;const[r,l]=a.useState();return a.createElement("div",null,a.createElement("div",null,a.createElement("h3",null,i),a.createElement("div",{className:"radio"},t.map(((e,t)=>{const s=n===t;let c="#e5e5e5";return r===t&&(c="var(--ifm-color-content)"),s&&e.isCorrect?c="var(--ifm-color-success)":s&&!e.isCorrect&&(c="var(--ifm-color-danger)"),e.isCorrect&&void 0!==n&&(c="var(--ifm-color-success)"),a.createElement("label",{className:o.radio_btn__wrapper,style:{borderColor:c},key:t},a.createElement("input",{className:o.radio_btn,type:"radio",name:i,value:e.text,onChange:()=>l(t),required:!0}),e.text,s&&e.isCorrect&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},a.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),s&&!e.isCorrect&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},a.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function r(e){let{QuizList:i}=e;console.log(i);const[t,r]=a.useState([]);return a.createElement("section",{className:o.quizs},a.createElement("div",null,a.createElement("form",{className:o.form,onSubmit:e=>{e.preventDefault();const t=new FormData(e.currentTarget);i.forEach((e=>{const i=e.answers.findIndex((i=>i.text===t.get(e.question)));r((e=>[...e,i]))}))}},i.map(((e,i)=>a.createElement(n,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:t[i]}))),a.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},7953:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7462),o=(t(7294),t(4137)),n=t(9530);const r={sidebar_position:4},l="Efficienza Energetica",s={unversionedId:"energy-efficiency",id:"energy-efficiency",title:"Efficienza Energetica",description:"This translation is a community translation, it has limited support and might not be up to date with the latest version in English.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/energy-efficiency.mdx",sourceDirName:".",slug:"/energy-efficiency",permalink:"/it/energy-efficiency",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/energy-efficiency.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Efficienza del carbonio",permalink:"/it/carbon-efficiency"},next:{title:"Consapevolezza del carbonio",permalink:"/it/carbon-awareness"}},c={},u=[{value:"Introduzione",id:"introduzione",level:2},{value:"Concetti chiave",id:"concetti-chiave",level:2},{value:"Combustibili fossili e fonti di energia ad alto contenuto di carbonio",id:"combustibili-fossili-e-fonti-di-energia-ad-alto-contenuto-di-carbonio",level:3},{value:"Fonti di energia a basso contenuto di carbonio",id:"fonti-di-energia-a-basso-contenuto-di-carbonio",level:3},{value:"Misura dell&#39;energia",id:"misura-dellenergia",level:3},{value:"Come migliorare l&#39;efficienza energetica",id:"come-migliorare-lefficienza-energetica",level:2},{value:"Efficacia di utilizzo dell&#39;energia",id:"efficacia-di-utilizzo-dellenergia",level:3},{value:"Proporzionalit\xe0 (rapporto) dell&#39;energia",id:"proporzionalit\xe0-rapporto-dellenergia",level:3},{value:"Assorbimento statico di energia",id:"assorbimento-statico-di-energia",level:4},{value:"Sintesi",id:"sintesi",level:2},{value:"Quiz (in inglese)",id:"quiz-in-inglese",level:2}],p={toc:u};function d(e){let{components:i,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"efficienza-energetica"},"Efficienza Energetica"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"This translation is a community translation, it has limited support and might not be up to date with the latest version in English."),"\n",(0,o.kt)("em",{parentName:"p"},"Questa traduzione \xe8 una traduzione community, ha un supporto limitato e potrebbe non essere aggiornata con l'ultima versione in inglese."))),(0,o.kt)("admonition",{title:"Principio",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Utilizzare la minor quantit\xe0 di energia possibile."))),(0,o.kt)("h2",{id:"introduzione"},"Introduzione"),(0,o.kt)("p",null,"L'energia \xe8 la capacit\xe0 di compiere lavoro. Esistono diverse forme di energia, come quella termica, elettrica e chimica, e un tipo di energia pu\xf2 essere convertito in un altro. Ad esempio, l'energia chimica del carbone viene convertita in energia elettrica. In altre parole, l'elettricit\xe0 \xe8 energia secondaria convertita da un altro tipo di energia. In altre parole, l'elettricit\xe0 \xe8 un'energia secondaria convertita da un altro tipo di energia."),(0,o.kt)("p",null,"Tutti i software, dalle applicazioni in esecuzione sui telefoni cellulari all'addestramento dei modelli di Machine Learning in esecuzione nei data center, consumano elettricit\xe0. Uno dei modi migliori per ridurre il consumo di elettricit\xe0 e le conseguenti emissioni di carbonio prodotte dal software \xe8 quello di rendere le applicazioni pi\xf9 efficienti dal punto di vista energetico. Tuttavia, la nostra responsabilit\xe0 non finisce qui."),(0,o.kt)("p",null,"Chi si occupa di software ecologico si assume la responsabilit\xe0 dell'energia consumata dai propri prodotti e li progetta per consumarne il meno possibile. Dobbiamo assicurarci che, in ogni fase del processo, ci siano meno sprechi possibili e che la maggior parte dell'energia venga utilizzata per la fase successiva."),(0,o.kt)("p",null,"Il passo finale di questa catena \xe8 rappresentato dall'utente finale del prodotto, non dal prodotto finito stesso. Ci\xf2 significa che il nostro obiettivo non \xe8 semplicemente quello di realizzare il codice pi\xf9 efficiente dal punto di vista energetico o il software pi\xf9 \"verde\", ma di pensare all'utente finale e a come assicurarci che non crei emissioni inutili."),(0,o.kt)("p",null,"Ci\xf2 potrebbe significare raggruppare i lavori per sfruttare la distribuzione energetica o cambiare il modo in cui l'utente utilizza il software. Vediamo alcuni di questi concetti e alcuni modi per diventare pi\xf9 efficienti dal punto di vista energetico in ogni fase della catena, fino al consumatore finale."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:t(3752).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,o.kt)("h2",{id:"concetti-chiave"},"Concetti chiave"),(0,o.kt)("h3",{id:"combustibili-fossili-e-fonti-di-energia-ad-alto-contenuto-di-carbonio"},"Combustibili fossili e fonti di energia ad alto contenuto di carbonio"),(0,o.kt)("p",null,"La maggior parte dell'elettricit\xe0 viene prodotta bruciando combustibili fossili, ","[di solito carbone]"," (",(0,o.kt)("a",{parentName:"p",href:"https://ourworldindata.org/grapher/world-electricity-by-source"},"https://ourworldindata.org/grapher/world-electricity-by-source"),"). I combustibili fossili sono prodotti dalla decomposizione di piante e animali. Questi combustibili si trovano nella crosta terrestre e contengono carbonio e idrogeno, che possono essere bruciati per ottenere energia. Il carbone, il petrolio e il gas naturale sono esempi di combustibili fossili."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:t(7401).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,o.kt)("p",null,"La maggior parte delle persone pensa che l'elettricit\xe0 sia pulita. Le nostre mani non si sporcano quando attacchiamo una spina al muro e i nostri computer portatili non hanno bisogno di tubi di scarico. Tuttavia, poich\xe9 la maggior parte dell'elettricit\xe0 proviene dalla combustione di combustibili fossili e l'approvvigionamento energetico \xe8 la ",(0,o.kt)("a",{parentName:"p",href:"https://www.eea.europa.eu/data-and-maps/daviz/change-of-co2-eq-emissions-2#tab-chart_4"},"singola causa pi\xf9 significativa")," delle emissioni di carbonio; possiamo tracciare una linea diretta dall'elettricit\xe0 alle emissioni di carbonio. In questi termini, l'elettricit\xe0 pu\xf2 essere considerata una proxy del carbonio."),(0,o.kt)("p",null,"Se il nostro obiettivo \xe8 quello di essere efficienti dal punto di vista delle emissioni di carbonio, significa che il nostro obiettivo \xe8 anche quello di essere efficienti dal punto di vista energetico, dato che l'energia \xe8 un proxy del carbonio. Ci\xf2 significa utilizzare la minor quantit\xe0 di energia possibile per unit\xe0 di lavoro."),(0,o.kt)("h3",{id:"fonti-di-energia-a-basso-contenuto-di-carbonio"},"Fonti di energia a basso contenuto di carbonio"),(0,o.kt)("p",null,"L'energia pulita proviene da fonti rinnovabili a emissioni zero che non inquinano l'atmosfera quando vengono utilizzate e che consentono di risparmiare energia grazie a pratiche di efficienza energetica. Esistono sovrapposizioni tra energia pulita, verde e rinnovabile. Ecco come distinguerle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Energia pulita")," - non produce emissioni di carbonio, ad esempio il nucleare."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Energia verde")," - proviene dalla natura"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Energia rinnovabile")," - le fonti non si esauriscono, come ad esempio l'energia solare ed eolica.")),(0,o.kt)("h3",{id:"misura-dellenergia"},"Misura dell'energia"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L'energia si misura in joule (J), l'unit\xe0 di misura dell'energia secondo il sistema internazionale ",(0,o.kt)("a",{parentName:"li",href:"https://it.wikipedia.org/wiki/Sistema_internazionale_di_unit%C3%A0_di_misura"},"SI"),"."),(0,o.kt)("li",{parentName:"ul"},"La potenza si misura in watt, dove 1 watt (W) corrisponde a un joule al secondo."),(0,o.kt)("li",{parentName:"ul"},"Un chilowatt (kW) \xe8 quindi anche un tasso corrispondente a 1000 joule al secondo."),(0,o.kt)("li",{parentName:"ul"},"Un chilowattora (kWh) \xe8 una misura di energia (J) corrispondente a un chilowatt di potenza sostenuta per un'ora.")),(0,o.kt)("h2",{id:"come-migliorare-lefficienza-energetica"},"Come migliorare l'efficienza energetica"),(0,o.kt)("p",null,"Ora che sappiamo come viene prodotta l'energia e il costo associato in termini di emissioni, a seconda che si utilizzino fonti energetiche a basso o alto contenuto di carbonio, diamo un'occhiata ad alcuni modi in cui i professionisti del software verde possono migliorare l'efficienza energetica. Comprendere l'efficacia dell'utilizzo dell'energia e la proporzionalit\xe0 energetica significa poter prendere decisioni migliori in termini di utilizzo dell'energia nel modo pi\xf9 efficiente possibile e di minori sprechi."),(0,o.kt)("h3",{id:"efficacia-di-utilizzo-dellenergia"},"Efficacia di utilizzo dell'energia"),(0,o.kt)("p",null,"Il settore dei data center utilizza la metrica ",(0,o.kt)("a",{parentName:"p",href:"https://datacenters.lbl.gov/sites/default/files/WP49-PUE%20A%20Comprehensive%20Examination%20of%20the%20Metric_v6.pdf"},"efficacia dell'utilizzo di energia")," (PUE - Power Usage Effectiveness), sviluppata da Green Grid nel 2006, per ",(0,o.kt)("strong",{parentName:"p"},"misurare l'efficienza energetica dei data center"),". In particolare, si tratta della quantit\xe0 di energia utilizzata dalle apparecchiature informatiche rispetto al raffreddamento e alle altre spese generali per il supporto delle apparecchiature. Quando il PUE di un data center \xe8 prossimo a 1.0, l'elaborazione utilizza quasi tutta l'energia. Quando il PUE \xe8 pari a 2.0, significa che per raffreddare e distribuire l'energia alle apparecchiature informatiche \xe8 necessario un watt aggiuntivo per ogni watt di energia informatica utilizzata."),(0,o.kt)("p",null,"Un altro modo per pensare al PUE \xe8 come un moltiplicatore del consumo energetico dell'applicazione. Quindi, ad esempio, se la vostra applicazione consuma 10 kWh e il PUE del data center in cui \xe8 in esecuzione \xe8 1.5, il consumo effettivo dalla rete \xe8 di 15 kWh: 5kWh sono destinati all'overhead operativo del data center e 10 kWh sono destinati ai server che eseguono l'applicazione."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:t(6266).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,o.kt)("h3",{id:"proporzionalit\xe0-rapporto-dellenergia"},"Proporzionalit\xe0 (rapporto) dell'energia"),(0,o.kt)("p",null,"La ","[proporzionalit\xe0 energetica]"," (",(0,o.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub33387/"},"https://research.google/pubs/pub33387/"),"), proposta per la prima volta nel 2007 dagli ingegneri di Google, misura ",(0,o.kt)("strong",{parentName:"p"},"il rapporto tra l'energia consumata da un computer e la velocit\xe0 con cui viene svolto il lavoro utile")," (il suo utilizzo)."),(0,o.kt)("p",null,"L'utilizzo misura la quantit\xe0 di risorse utilizzate da un computer, solitamente espressa in percentuale. Un computer completamente utilizzato che funziona alla sua massima capacit\xe0 ha una percentuale elevata, mentre un computer inattivo senza utilizzo ha una percentuale pi\xf9 bassa."),(0,o.kt)("p",null,"La relazione tra potenza e utilizzo non \xe8 proporzionale. In termini matematici, la proporzionalit\xe0 tra due variabili significa che i loro rapporti sono equivalenti. Ad esempio, con un utilizzo pari allo 0%, un computer pu\xf2 consumare 100 W; con un utilizzo pari al 50%, consuma 180 W; e con un utilizzo pari al 100%, consuma 200 W. La relazione tra consumo energetico e utilizzo non \xe8 lineare e non attraversa l'origine."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:t(7071).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,o.kt)("p",null,"Per questo motivo, pi\xf9 utilizziamo un computer, pi\xf9 diventa efficiente nel convertire l'elettricit\xe0 in operazioni di calcolo pratiche. Un modo per migliorare l'efficienza dell'hardware \xe8 quello di eseguire il carico di lavoro sul minor numero possibile di server, con i server che funzionano al massimo tasso di utilizzo, massimizzando l'efficienza energetica."),(0,o.kt)("h4",{id:"assorbimento-statico-di-energia"},"Assorbimento statico di energia"),(0,o.kt)("p",null,"L'assorbimento statico di energia di un computer \xe8 ",(0,o.kt)("strong",{parentName:"p"},"la quantit\xe0 di elettricit\xe0 assorbita quando \xe8 inattivo"),". L'assorbimento di energia statica varia a seconda della configurazione e dei componenti hardware, ma tutti i componenti hanno un certo assorbimento di energia statica. Questo \xe8 uno dei motivi per cui i PC, i portatili e i dispositivi degli utenti finali dispongono di modalit\xe0 di risparmio energetico. Se il dispositivo \xe8 inattivo, si attiva una modalit\xe0 di ibernazione e si mettono a riposo il disco e lo schermo o si cambia la frequenza della CPU. Queste modalit\xe0 di risparmio energetico consentono di risparmiare energia elettrica, ma hanno altri svantaggi, come un riavvio pi\xf9 lento al risveglio del dispositivo."),(0,o.kt)("p",null,"I server di solito non sono configurati per un risparmio energetico aggressivo o addirittura minimo. Molti casi d'uso che si svolgono sui server richiedono la capacit\xe0 totale il pi\xf9 rapidamente possibile, perch\xe9 il server deve rispondere a richieste che cambiano rapidamente, il che porta a molti server in modalit\xe0 inattiva durante i periodi di bassa domanda. Un server inattivo ha un costo di carbonio sia per il carbonio incorporato che per il suo utilizzo inefficiente."),(0,o.kt)("h2",{id:"sintesi"},"Sintesi"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L'elettricit\xe0 \xe8 una proxy del carbonio, quindi costruire un'applicazione efficiente dal punto di vista energetico equivale a costruire un'applicazione efficiente dal punto di vista del carbonio."),(0,o.kt)("li",{parentName:"ul"},"Il software ecologico si assume la responsabilit\xe0 del proprio consumo di elettricit\xe0 ed \xe8 progettato per consumarne il meno possibile."),(0,o.kt)("li",{parentName:"ul"},"Quantificare il consumo energetico di un'applicazione \xe8 un passo nella giusta direzione per iniziare a pensare a come un'applicazione possa funzionare in modo pi\xf9 efficiente. Tuttavia, la comprensione del consumo energetico dell'applicazione non \xe8 l'unica cosa da sapere. L'hardware su cui gira il software utilizza parte dell'elettricit\xe0 per le spese generali di funzionamento. Questo aspetto \xe8 chiamato efficienza di utilizzo dell'energia (PUE) nello spazio cloud."),(0,o.kt)("li",{parentName:"ul"},"Il concetto di proporzionalit\xe0 energetica aggiunge un ulteriore livello di complessit\xe0, poich\xe9 l'hardware diventa pi\xf9 efficiente nel trasformare l'elettricit\xe0 in operazioni utili quanto pi\xf9 viene utilizzato."),(0,o.kt)("li",{parentName:"ul"},"La comprensione di questo aspetto consente ai professionisti del software verde di capire meglio come si comporta la loro applicazione rispetto al consumo di energia nel mondo reale.")),(0,o.kt)("h2",{id:"quiz-in-inglese"},"Quiz (in inglese)"),(0,o.kt)(n.Z,{QuizList:[{question:"Why do we sometimes say that electricity is a proxy for carbon?",answers:[{text:"Electricity is a form of energy and all kinds of energy produces carbon",isCorrect:!1},{text:"Using electricity produces carbon emissions",isCorrect:!1},{text:"Fossil fuels are burned to produce electricity",isCorrect:!0}]},{question:"What are some examples of fossil fuels?",answers:[{text:"Carbon and hydrogen",isCorrect:!1},{text:"Coal, oil and natural gas",isCorrect:!0},{text:"Both of the above",isCorrect:!1}]},{question:"What is clean energy?",answers:[{text:"Energy that comes from renewable sources",isCorrect:!1},{text:"Energy that doesn\u2019t produce carbon emissions",isCorrect:!0},{text:"Both the above",isCorrect:!1}]},{question:"What does PUE (power usage effectiveness) measure?",answers:[{text:"Data center energy efficiency",isCorrect:!0},{text:"Energy consumption of an application",isCorrect:!1},{text:"Amount of energy used in overheads combined with that consumed by servers",isCorrect:!1}]},{question:"Which of the following is something that is measured by energy proportionality?",answers:[{text:"Relationship between the energy used in overheads and what goes towards the servers running an application",isCorrect:!1},{text:"The percentage of a computers available resources that are being used",isCorrect:!1},{text:"Relationship between the power consumed by a computer and the rate at which useful work is done",isCorrect:!0}]},{question:"What is the SI unit of energy?",answers:[{text:"Watts",isCorrect:!1},{text:"Kilowatts",isCorrect:!1},{text:"Joules",isCorrect:!0}]},{question:"Which application consumes the most energy?",answers:[{text:"An application that consumes 20kWh in a data center with a PUE of 1",isCorrect:!0},{text:"An application that consumes 15kWh in a data center with a PUE of 1.2",isCorrect:!1},{text:"An application that consumes 10kWh in a data center with a PUE of 1.5",isCorrect:!1}]},{question:"What is static power draw?",answers:[{text:"The carbon cost of applications being left on standby",isCorrect:!1},{text:"The electricity being drawn by an application in an idle state",isCorrect:!0},{text:"The electricity used by an application in eco mode",isCorrect:!1}]}],mdxType:"Quiz"}))}d.isMDXComponent=!0},3752:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/03_efficienza_energetica-03e92280c8ededec125d1ca43d7f9fdd.png"},7401:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/04_sorgenti_ad_alto_carbonio-1f9312419d1f36f64a7e85075d356c78.png"},6266:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/05_utilizzo_energetico-1936d570ad2584643c7e34aa79365df0.png"},7071:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/06_rapporto_di_energia-e03220f8a65c100835771cb4f602d58e.png"}}]);