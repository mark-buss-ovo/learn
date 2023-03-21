"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[799],{4137:(e,i,a)=>{a.d(i,{Zo:()=>d,kt:()=>p});var o=a(7294);function n(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function t(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(i){n(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function l(e,i){if(null==e)return{};var a,o,n=function(e,i){if(null==e)return{};var a,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],i.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var i=o.useContext(s),a=i;return e&&(a="function"==typeof e?e(i):r(r({},i),e)),a},d=function(e){var i=c(e.components);return o.createElement(s.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return o.createElement(o.Fragment,{},i)}},u=o.forwardRef((function(e,i){var a=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||t;return a?o.createElement(g,r(r({ref:i},d),{},{components:a})):o.createElement(g,r({ref:i},d))}));function p(e,i){var a=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var t=a.length,r=new Array(t);r[0]=u;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<t;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9530:(e,i,a)=>{a.d(i,{Z:()=>r});var o=a(7294);const n={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function t(e){let{question:i,answers:a,chosenAnswer:t}=e;const[r,l]=o.useState();return o.createElement("div",null,o.createElement("div",null,o.createElement("h3",null,i),o.createElement("div",{className:"radio"},a.map(((e,a)=>{const s=t===a;let c="#e5e5e5";return r===a&&(c="var(--ifm-color-content)"),s&&e.isCorrect?c="var(--ifm-color-success)":s&&!e.isCorrect&&(c="var(--ifm-color-danger)"),e.isCorrect&&void 0!==t&&(c="var(--ifm-color-success)"),o.createElement("label",{className:n.radio_btn__wrapper,style:{borderColor:c},key:a},o.createElement("input",{className:n.radio_btn,type:"radio",name:i,value:e.text,onChange:()=>l(a),required:!0}),e.text,s&&e.isCorrect&&o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},o.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),s&&!e.isCorrect&&o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},o.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function r(e){let{QuizList:i}=e;console.log(i);const[a,r]=o.useState([]);return o.createElement("section",{className:n.quizs},o.createElement("div",null,o.createElement("form",{className:n.form,onSubmit:e=>{e.preventDefault();const a=new FormData(e.currentTarget);i.forEach((e=>{const i=e.answers.findIndex((i=>i.text===a.get(e.question)));r((e=>[...e,i]))}))}},i.map(((e,i)=>o.createElement(t,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:a[i]}))),o.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},1537:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(4137)),t=a(9530);const r={sidebar_position:8},l="Impegni climatici",s={unversionedId:"climate-commitments",id:"climate-commitments",title:"Impegni climatici",description:"This translation is a community translation, it has limited support and might not be up to date with the latest version in English.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/climate-commitments.mdx",sourceDirName:".",slug:"/climate-commitments",permalink:"/it/climate-commitments",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/climate-commitments.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Misurazione",permalink:"/it/measurement"},next:{title:"Glossario",permalink:"/it/glossary"}},c={},d=[{value:"Introduzione",id:"introduzione",level:2},{value:"Metodologie di riduzione delle emissioni di carbonio",id:"metodologie-di-riduzione-delle-emissioni-di-carbonio",level:2},{value:"Abbattimento / Eliminazione del carbonio",id:"abbattimento--eliminazione-del-carbonio",level:3},{value:"Offsets (Compensazioni)",id:"offsets-compensazioni",level:3},{value:"SCI e offset",id:"sci-e-offset",level:4},{value:"Compensazione/Astensione dal carbonio",id:"compensazioneastensione-dal-carbonio",level:3},{value:"Neutralizzazione / Rimozione del carbonio",id:"neutralizzazione--rimozione-del-carbonio",level:3},{value:"Impegni per il clima",id:"impegni-per-il-clima",level:2},{value:"Carbon Neutral",id:"carbon-neutral",level:3},{value:"Net Zero",id:"net-zero",level:3},{value:"SCI come parte di una strategia Net-Zero",id:"sci-come-parte-di-una-strategia-net-zero",level:4},{value:"100% rinnovabile",id:"100-rinnovabile",level:3},{value:"Certificati di energia rinnovabile (REC)",id:"certificati-di-energia-rinnovabile-rec",level:4},{value:"PPA",id:"ppa",level:4},{value:"Corrispondenza oraria 24/7",id:"corrispondenza-oraria-247",level:3},{value:"Corrispondenza giornaliera e oraria",id:"corrispondenza-giornaliera-e-oraria",level:4},{value:"Energia priva di carbonio (CFE)",id:"energia-priva-di-carbonio-cfe",level:4},{value:"Carbon Awareness come parte di una strategia di abbinamento orario 24/7",id:"carbon-awareness-come-parte-di-una-strategia-di-abbinamento-orario-247",level:4},{value:"Sintesi",id:"sintesi",level:2},{value:"Quiz (in inglese)",id:"quiz-in-inglese",level:2}],m={toc:d};function u(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"impegni-climatici"},"Impegni climatici"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"This translation is a community translation, it has limited support and might not be up to date with the latest version in English."),"\n",(0,n.kt)("em",{parentName:"p"},"Questa traduzione \xe8 una traduzione community, ha un supporto limitato e potrebbe non essere aggiornata con l'ultima versione in inglese."))),(0,n.kt)("admonition",{title:"Principio",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Comprendere l'esatto meccanismo di riduzione del carbonio."))),(0,n.kt)("h2",{id:"introduzione"},"Introduzione"),(0,n.kt)("p",null,"Negli ultimi anni, molti attori economici hanno cercato di raggiungere diversi obiettivi climatici assumendo vari impegni."),(0,n.kt)("p",null,'I termini "net zero", "carbon neutral", "carbon negative" e "climate neutral" sono stati usati in modo intercambiabile con l\'obiettivo primario di eliminare, ridurre e prevenire le emissioni di carbonio. Con la crescita dell\'interesse per questi obiettivi, \xe8 essenziale avere una comprensione comune del loro significato e di come raggiungerli attraverso le strategie e le procedure di misurazione che abbiamo imparato.'),(0,n.kt)("h2",{id:"metodologie-di-riduzione-delle-emissioni-di-carbonio"},"Metodologie di riduzione delle emissioni di carbonio"),(0,n.kt)("p",null,"Esistono molti modi per ridurre le emissioni, ma \xe8 importante capire l'esatto meccanismo di riduzione quando si pensa agli obiettivi di riduzione."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(680).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("h3",{id:"abbattimento--eliminazione-del-carbonio"},"Abbattimento / Eliminazione del carbonio"),(0,n.kt)("p",null,"La ",(0,n.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/"},"Science Based Targets Initiative")," fa riferimento a un meccanismo chiamato ",(0,n.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/resources/legacy/2020/09/foundations-for-net-zero-executive-summary.pdf"},"abbattimento"),", che significa eliminare le fonti di emissioni di CO2 associate alle operazioni e alla ",(0,n.kt)("a",{parentName:"p",href:"https://www.cisl.cam.ac.uk/education/graduate-study/pgcerts/value-chain-defs"},"catena del valore")," di un'azienda in modo che non entrino nell'atmosfera. La catena del valore descrive l'intera gamma di attivit\xe0 necessarie per creare un prodotto o un servizio, dalla concezione alla distribuzione. Ci\xf2 include l'aumento dell'efficienza energetica per eliminare alcune delle emissioni associate alla produzione di energia."),(0,n.kt)("p",null,"L'abbattimento non \xe8 sufficiente da solo, poich\xe9 ci saranno sempre delle emissioni che non potranno essere eliminate a causa di vincoli tecnologici o economici, ma deve costituire il fulcro della strategia di ogni organizzazione, poich\xe9 \xe8 un'area in cui quasi tutte le aziende possono migliorare."),(0,n.kt)("p",null,"Per bilanciare queste emissioni residue, dobbiamo considerare altri meccanismi come le compensazioni, gli indennizzi o le neutralizzazioni."),(0,n.kt)("h3",{id:"offsets-compensazioni"},"Offsets (Compensazioni)"),(0,n.kt)("p",null,"Le ",(0,n.kt)("a",{parentName:"p",href:"https://www.offsetguide.org/understanding-carbon-offsets/what-is-a-carbon-offset/"},"compensazioni")," sono investimenti diretti in progetti di riduzione delle emissioni attraverso l'acquisto di crediti di carbonio sul mercato volontario del carbonio (VCM). Il VCM \xe8 un mercato decentralizzato in cui attori privati acquistano e vendono volontariamente crediti di carbonio che rappresentano rimozioni o riduzioni certificate di gas serra dall'atmosfera."),(0,n.kt)("p",null,"Per compensare le emissioni, \xe8 necessario acquistare un volume equivalente di crediti di carbonio per compensare quelle emesse, dove 1 credito di carbonio corrisponde a 1 tonnellata di CO2 assorbita o ridotta."),(0,n.kt)("p",null,"Da questi progetti possono derivare diversi benefici, dalla protezione dell'ecosistema al rafforzamento delle comunit\xe0 locali. Tuttavia, per garantire che questi programmi siano implementati correttamente e abbiano l'effetto desiderato sull'ambiente e sull'obiettivo di raggiungere il ",(0,n.kt)("em",{parentName:"p"},"world net zero"),", esistono standard globali che devono essere rispettati, come il Verified Carbon Standard (VCS) e il Gold Standard (GS)."),(0,n.kt)("h4",{id:"sci-e-offset"},"SCI e offset"),(0,n.kt)("p",null,"Le compensazioni di carbonio presentano alcune limitazioni e per questo motivo non vengono considerate nel punteggio SCI di un'organizzazione. Ad esempio, immaginiamo due applicazioni, entrambe in esecuzione su una piattaforma cloud che \xe8 compensata al 100% con le emissioni di anidride carbonica e alimentata al 100% da energia rinnovabile. L'applicazione A ha investito molto tempo e risorse per assicurarsi di utilizzare le risorse in modo efficiente, mentre l'applicazione B utilizza le risorse in modo molto inefficiente. Affinch\xe9 lo SCI sia una metrica utile, l'applicazione A deve ottenere un punteggio migliore rispetto all'applicazione B."),(0,n.kt)("p",null,"Se lo SCI considerasse le compensazioni, entrambe le applicazioni otterrebbero un punteggio pari a 0. Questo non ci direbbe nulla sull'efficienza dell'uso delle risorse. Sebbene l'applicazione B stia emettendo pi\xf9 molecole di carbonio nell'atmosfera, dato che il suo punteggio \xe8 0 e il punteggio pi\xf9 basso \xe8 0, perch\xe9 dovrebbe investire ulteriormente per migliorare la sua efficienza in termini di carbonio?"),(0,n.kt)("p",null,"Le organizzazioni devono avere dei piani per eliminare e neutralizzare le emissioni e lo SCI le aiuta ad eliminare le emissioni dovute al software. Questo rende lo SCI un componente essenziale di qualsiasi strategia net-zero."),(0,n.kt)("h3",{id:"compensazioneastensione-dal-carbonio"},"Compensazione/Astensione dal carbonio"),(0,n.kt)("p",null,"Le ","[compensazioni]"," (",(0,n.kt)("a",{parentName:"p",href:"https://www.abatable.com/blog/carbon-removal-vs-carbon-avoidance-projects"},"https://www.abatable.com/blog/carbon-removal-vs-carbon-avoidance-projects"),") sono azioni che le aziende intraprendono per aiutare la societ\xe0 a evitare o ridurre le emissioni al di fuori della loro catena del valore. Si tratta essenzialmente di investire in progetti di abbattimento di altre organizzazioni."),(0,n.kt)("p",null,"Questo include azioni quali:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conservazione")," - I crediti vengono creati in base al carbonio non rilasciato attraverso la protezione di vecchi alberi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Progetti comunitari")," - Questi progetti aiutano le comunit\xe0 di tutto il mondo, soprattutto quelle non sviluppate, introducendo metodi di vita sostenibili."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spreco di energia")," - Questi progetti catturano il metano/gas di discarica nei villaggi pi\xf9 piccoli, i rifiuti umani o agricoli e li convertono in elettricit\xe0.")),(0,n.kt)("h3",{id:"neutralizzazione--rimozione-del-carbonio"},"Neutralizzazione / Rimozione del carbonio"),(0,n.kt)("p",null,"Le ",(0,n.kt)("a",{parentName:"p",href:"https://www.abatable.com/blog/carbon-removal-vs-carbon-avoidance-projects"},"Neutralizzazioni")," sono azioni che le aziende intraprendono per rimuovere il carbonio dall'atmosfera all'interno o all'esterno della loro catena del valore. Le neutralizzazioni si riferiscono alla rimozione e allo stoccaggio permanente del carbonio atmosferico per controbilanciare l'effetto del rilascio di CO2 nell'atmosfera. Ci\xf2 include azioni quali:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Aumentare i pozzi di carbonio naturali")," che rimuovono la CO2 dall'atmosfera. Ad esempio, il ripristino delle foreste, poich\xe9 la fotosintesi rimuove naturalmente la CO2. L'espansione delle foreste comporta delle sfide, in quanto \xe8 essenziale non avere un impatto sulle dinamiche dei terreni agricoli e dell'approvvigionamento alimentare altrove. I moderni metodi di coltivazione possono anche prolungare il tempo in cui il carbonio rimane immagazzinato nel suolo."),(0,n.kt)("li",{parentName:"ul"},"La ",(0,n.kt)("strong",{parentName:"li"},"cattura diretta dell'aria")," \xe8 il processo di cattura della CO2 dall'aria e di stoccaggio permanente, nel sottosuolo o in prodotti a lunga durata come il cemento.")),(0,n.kt)("p",null,"L'efficacia di questi metodi viene solitamente misurata in base alla capacit\xe0 di rimuovere il carbonio alla scala e alla velocit\xe0 necessarie."),(0,n.kt)("p",null,"Quando si tratta di progetti di rimozione del carbonio, la durata \xe8 un fattore critico. La durata di un progetto descrive quanto a lungo l'anidride carbonica sar\xe0 tenuta lontana dall'atmosfera."),(0,n.kt)("p",null,"La durata a breve termine \xe8 fino a 100 anni, quella a medio termine \xe8 da 100 a 1.000 anni e quella a lungo termine \xe8 superiore a 1.000 anni."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Le soluzioni che si basano sul ciclo naturale del carbonio della Terra hanno una durata a breve termine misurata in decenni. Ad esempio, i progetti forestali hanno una durata compresa tra 40 e 100 anni."),(0,n.kt)("li",{parentName:"ul"},"Le soluzioni ingegnerizzate, come la cattura diretta dell'aria, hanno spesso una durata a lungo termine che si misura in millenni. Ad esempio, la cattura diretta dell'aria ha una durata di 10.000 anni."),(0,n.kt)("li",{parentName:"ul"},"I progetti a lungo termine sono in genere ordini di grandezza pi\xf9 costosi di quelli a breve termine. Una volta emesso, il carbonio rimane nell'atmosfera per 5.000 anni. Per essere considerato net-zero, il carbonio emesso deve essere eliminato in modo permanente.")),(0,n.kt)("p",null,"Un progetto di rimozione del carbonio a breve termine lo rimuover\xe0 solo per 100 anni, dopodich\xe9 torner\xe0 nell'atmosfera a riscaldare il nostro pianeta. Questo \xe8 uno dei motivi per cui l'abbattimento \xe8 preferibile alla neutralizzazione. Non rilasciare mai il carbonio \xe8 molto meglio che rilasciarlo e poi cercare di tenerlo fuori dall'atmosfera per 5.000 anni."),(0,n.kt)("h2",{id:"impegni-per-il-clima"},"Impegni per il clima"),(0,n.kt)("p",null,"Esistono diverse strategie di impegni per il clima che un'organizzazione pu\xf2 intraprendere, dalla neutralit\xe0 del carbonio alla riduzione a zero. Comprendere i diversi significati e le implicazioni di ciascuna di esse pu\xf2 aiutarvi a decidere la strategia giusta per la vostra organizzazione."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(4739).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("h3",{id:"carbon-neutral"},"Carbon Neutral"),(0,n.kt)("p",null,"Per raggiungere il pareggio del carbonio, un'organizzazione deve misurare le proprie emissioni, quindi abbinare il totale alle emissioni compensate attraverso progetti di riduzione del carbonio. Ci\xf2 pu\xf2 includere progetti di rimozione delle emissioni di carbonio (neutralizzazione) e progetti di astensione dalle emissioni di carbonio (compensazione)."),(0,n.kt)("p",null,"Il pareggio del carbonio \xe8 definita da uno standard riconosciuto a livello internazionale: ","[PAS 2060]"," (",(0,n.kt)("a",{parentName:"p",href:"https://info.eco-act.com/hubfs/0%20-%20Downloads/PAS%202060/PAS%202060%20factsheet%20EN.pdf"},"https://info.eco-act.com/hubfs/0%20-%20Downloads/PAS%202060/PAS%202060%20factsheet%20EN.pdf"),"). Sebbene questo standard raccomandi a un'organizzazione di fissare obiettivi di abbattimento, non richiede la riduzione delle emissioni. Quindi, per essere considerata neutrale, un'organizzazione pu\xf2 limitarsi a misurare e compensare senza investire risorse nell'eliminazione delle proprie emissioni di carbonio."),(0,n.kt)("p",null,"Per essere carbon neutral, \xe8 necessario coprire le emissioni dirette (ambito 1 e 2). L'aspettativa generale \xe8 che le organizzazioni misurino e compensino i loro ambiti 1 e 2 e i viaggi di lavoro dall'ambito 3. Tuttavia, non esiste un requisito specifico per misurare e compensare le emissioni. Tuttavia, non esiste un requisito specifico per includerlo."),(0,n.kt)("p",null,"La neutralit\xe0 rispetto al carbonio \xe8 un primo passo significativo per qualsiasi organizzazione, poich\xe9 incoraggia la misurazione. Tuttavia, non ci sono abbastanza compensazioni di carbonio nel mondo per compensare le emissioni di tutte le organizzazioni. Pertanto, qualsiasi strategia che non preveda l'abbattimento delle emissioni non sar\xe0 in grado di raggiungere l'obiettivo di 1,5 gradi fissato dall'Accordo sul clima di Parigi. \xc8 qui che entra in gioco il net zero."),(0,n.kt)("h3",{id:"net-zero"},"Net Zero"),(0,n.kt)("p",null,"Net zero significa ridurre le emissioni secondo i pi\xf9 recenti dati scientifici sul clima e bilanciare le emissioni residue attraverso l'eliminazione del carbonio (neutralizzazione). Il Net Zero, per definizione, richiede una riduzione delle emissioni in linea sul percorso dei 1.5\xb0C. Tutte le aziende devono farlo per ottenere emissioni globali net zero entro il 2050."),(0,n.kt)("p",null,"L'elemento critico che differenzia l'obiettivo net zero da quello neutro \xe8 l'attenzione all'abbattimento delle emissioni piuttosto che alle neutralizzazioni e alle compensazioni. Un obiettivo net zero mira a eliminare le emissioni e a utilizzare la compensazione solo per le emissioni residue che non \xe8 possibile eliminare."),(0,n.kt)("p",null,"Lo ",(0,n.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/resources/files/foundations-for-net-zero-full-paper.pdf"},"standard per il net zero")," \xe8 stato sviluppato dalla ",(0,n.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/"},"Science Based Targets initiative")," (SBTi). Secondo i loro calcoli, c'\xe8 una probabilit\xe0 del 66% di limitare il riscaldamento globale a 1,5\xb0C se raggiungiamo un livello di abbattimento di circa il 90% di tutte le emissioni di gas serra entro la met\xe0 del secolo. Quindi, per raggiungere l'obiettivo del net zero, un'organizzazione deve eliminare il 90% delle proprie emissioni entro il 2050. Le emissioni rimanenti possono essere compensate solo utilizzando neutralizzazioni e rimozioni permanenti di carbonio."),(0,n.kt)("p",null,"Una strategia a zero emissioni significa che la quantit\xe0 effettiva di carbonio nell'atmosfera rimane costante."),(0,n.kt)("p",null,"Inoltre, per essere un obiettivo net zero, \xe8 necessario coprire le emissioni dirette e indirette, cio\xe8 quelle della catena di approvvigionamento (ambiti 1, 2 e 3). Pertanto, l'intera catena del valore deve essere inclusa nell'ambito del vostro obiettivo net zero. Si tratta di un aspetto significativo, poich\xe9 l'ambito 3 spesso rappresenta la maggior parte delle emissioni."),(0,n.kt)("h4",{id:"sci-come-parte-di-una-strategia-net-zero"},"SCI come parte di una strategia Net-Zero"),(0,n.kt)("p",null,"L'SCI \xe8 una metrica specificamente progettata per favorire l'eliminazione delle emissioni. L'unico modo per ridurre il punteggio \xe8 investire tempo e risorse in azioni che eliminino le emissioni. Le uniche attivit\xe0 che SCI riconosce come azioni di eliminazione sono quelle di rendere l'applicazione pi\xf9 efficiente dal punto di vista energetico, pi\xf9 efficiente dal punto di vista dell'hardware o di consumare fonti energetiche a pi\xf9 basso contenuto di carbonio. Le compensazioni sono una componente essenziale di qualsiasi strategia climatica; tuttavia, le compensazioni non sono azioni di eliminazione e quindi non sono incluse nella metrica dello SCI."),(0,n.kt)("p",null,"Qualsiasi strategia net-zero deve prevedere piani per eliminare e neutralizzare le emissioni. SCI aiuta le organizzazioni ad eliminare le emissioni dovute al software. Questo rende SCI un componente essenziale di qualsiasi strategia net-zero."),(0,n.kt)("h3",{id:"100-rinnovabile"},"100% rinnovabile"),(0,n.kt)("p",null,"Quando le organizzazioni si pongono l'obiettivo del 100% di energia rinnovabile, possono distinguere tra essere ",(0,n.kt)("strong",{parentName:"p"},"abbinati")," e ",(0,n.kt)("strong",{parentName:"p"},"alimentati")," da fonti rinnovabili."),(0,n.kt)("p",null,"Con ",(0,n.kt)("strong",{parentName:"p"},"alimentato da")," si intende alimentato direttamente da una fonte di energia rinnovabile, ad esempio una diga idroelettrica. In questo scenario, gli elettroni che confluiscono nel dispositivo possono provenire solo da quella fonte, per cui si pu\xf2 affermare con certezza di essere alimentati al 100% da fonti rinnovabili."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(3741).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"Per la maggior parte delle persone, viviamo in una rete interconnessa, con molti produttori che immettono elettricit\xe0 e molti consumatori che la prelevano. Ci\xf2 significa che gli elettroni che entrano nel dispositivo sono una miscela di tutti gli elettroni che entrano nella rete. Ad esempio, supponiamo che la rete abbia solo il 5% di energia eolica. Il dispositivo riceve il 5% di elettroni generati dal vento e il 95% di elettroni generati da combustibili fossili."),(0,n.kt)("p",null,"Non \xe8 possibile tracciare i singoli elettroni. Una volta che gli elettroni di un parco eolico sono sulla rete, si mescolano tutti con gli elettroni di un impianto a combustibile fossile. Non c'\xe8 quindi modo per un consumatore di insistere che gli elettroni che utilizza provengano solo da fonti rinnovabili."),(0,n.kt)("h4",{id:"certificati-di-energia-rinnovabile-rec"},"Certificati di energia rinnovabile (REC)"),(0,n.kt)("p",null,"Per risolvere questo problema, un impianto rinnovabile vende due cose. Il primo \xe8 la sua elettricit\xe0, che vende alla rete. Il secondo \xe8 un REC, un ","[Renewable Energy Certificates]"," (",(0,n.kt)("a",{parentName:"p",href:"https://www.epa.gov/green-power-markets/renewable-energy-certificates-recs"},"https://www.epa.gov/green-power-markets/renewable-energy-certificates-recs"),"). 1 REC equivale a 1kWh di energia."),(0,n.kt)("p",null,"Se si vuole essere alimentati al 100% da energia rinnovabile e si \xe8 in rete, la soluzione \xe8 acquistare un numero di REC sufficiente a coprire la quantit\xe0 di elettricit\xe0 consumata. Ad esempio, se si consumano 100 kWh di elettricit\xe0 al giorno, per essere abbinati al 100% alle energie rinnovabili si devono acquistare 100 REC."),(0,n.kt)("p",null,"Quando le organizzazioni si prefiggono obiettivi 100% rinnovabili, l'acquisto di REC sul mercato \xe8 la soluzione che spesso adottano per rispettare i loro impegni."),(0,n.kt)("h4",{id:"ppa"},"PPA"),(0,n.kt)("p",null,"Accanto ai REC si pu\xf2 anche sentire il termine PPA. Un PPA \xe8 un ","[Power Purchase Agreement]"," (",(0,n.kt)("a",{parentName:"p",href:"https://ppp.worldbank.org/public-private-partnership/sector/energy/energy-power-agreements/power-purchase-agreements"},"https://ppp.worldbank.org/public-private-partnership/sector/energy/energy-power-agreements/power-purchase-agreements"),"), un altro modo per acquistare REC. Se si stima di aver bisogno di 500MWh di elettricit\xe0 all'anno per un determinato centro dati, si potrebbe firmare un PPA per acquistare 500MWh all'anno da un impianto rinnovabile. In questo modo si otterrebbero tutti i REC associati a questa centrale."),(0,n.kt)("p",null,"I PPA sono in genere contratti a lungo termine. Un impianto rinnovabile pu\xf2 trovare finanziamenti con uno di questi accordi, poich\xe9 ha gi\xe0 un acquirente per la sua elettricit\xe0 per molti anni."),(0,n.kt)("p",null,"I PPA incoraggiano una cosa chiamata ",(0,n.kt)("strong",{parentName:"p"},"addizionalit\xe0"),". L'acquisto di un PPA stimola la creazione di nuovi impianti rinnovabili. I PPA sono una soluzione che ci porta verso un futuro in cui tutti hanno accesso al 100% di energia rinnovabile."),(0,n.kt)("h3",{id:"corrispondenza-oraria-247"},"Corrispondenza oraria 24/7"),(0,n.kt)("p",null,"Quando si parla di 100% di energia rinnovabile, la domanda cruciale \xe8: qual \xe8 la granularit\xe0 della corrispondenza? Si sommano e si mettono in rete i dati annuali, mensili, settimanali, giornalieri o orari? Questa domanda \xe8 essenziale perch\xe9, per una vera transizione verso le energie rinnovabili, \xe8 necessario che il 100% dell'energia provenga da fonti energetiche a basso contenuto di carbonio, come le energie rinnovabili, per il 100% del tempo. Questa corrispondenza a grana fine \xe8 spesso chiamata ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://www.epa.gov/green-power-markets/247-hourly-matching-electricity"},"24/7 hourly matching")),"."),(0,n.kt)("p",null,"La corrispondenza oraria 24/7 \xe8 una delle tante strategie che dobbiamo adottare per accelerare la transizione verso una rete al 100% alimentata da fonti rinnovabili. Ad esempio, ",(0,n.kt)("a",{parentName:"p",href:"https://sustainability.google/progress/energy/"},"Google")," e ",(0,n.kt)("a",{parentName:"p",href:"https://blogs.microsoft.com/blog/2021/07/14/made-to-measure-sustainability-commitment-progress-and-updates/"},"Microsoft")," si sono entrambe impegnate a realizzare la corrispondenza oraria 24/7 entro il 2030."),(0,n.kt)("h4",{id:"corrispondenza-giornaliera-e-oraria"},"Corrispondenza giornaliera e oraria"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(4856).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("p",null,"Immaginate che un'organizzazione abbia una curva di domanda come questa, ogni quadrato blu rappresenta 1kWh:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(5608).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,n.kt)("p",null,"Hanno acquistato REC da un parco eolico che ha generato elettricit\xe0 con una curva, quindi ogni quadrato verde rappresenta 1 REC. La corrispondenza per giorno significa che l'organizzazione ha consumato 18 kWh e ha acquistato 18 REC. Di conseguenza, la compensazione \xe8 pari a zero. Quindi possono dire di essere ",(0,n.kt)("strong",{parentName:"p"},"abbinati al 100% con energia rinnovabile ogni giorno"),"."),(0,n.kt)("p",null,"Tuttavia, se si considera il dato in termini di ore (ogni quadrato \xe8 di 2 ore), la situazione appare un po' diversa:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(3856).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,n.kt)("p",null,"La quantit\xe0 totale di energia consumata \xe8 ancora di 18kWh. Tuttavia, ci sono solo alcune ore del giorno in cui l'energia rinnovabile \xe8 al 100% per quell'ora. Quindi, per alcune ore, abbiamo molta pi\xf9 energia rinnovabile di quella necessaria. Al contrario, per la maggior parte delle ore abbiamo una quantit\xe0 di energia rinnovabile inferiore al fabbisogno."),(0,n.kt)("p",null,"Nell'esempio di cui sopra, sono ",(0,n.kt)("strong",{parentName:"p"},"soddisfatti al 100% dall'energia rinnovabile su base oraria solo per 6 ore al giorno"),"."),(0,n.kt)("h4",{id:"energia-priva-di-carbonio-cfe"},"Energia priva di carbonio (CFE)"),(0,n.kt)("p",null,"Il numero che utilizziamo per descrivere il successo dell'abbinamento orario 24/7 \xe8 la percentuale di energia priva di carbonio."),(0,n.kt)("p",null,"L'energia priva di carbonio \xe8 definita come ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/sustainability/region-carbon#understanding"},"la percentuale media di energia priva di carbonio consumata in una particolare localit\xe0 su base oraria"),"."),(0,n.kt)("p",null,"Quindi, per l'esempio precedente, se misurato utilizzando la corrispondenza giornaliera, siamo al 100% di energia rinnovabile. Tuttavia, siamo solo al 33,1% se la misurazione avviene su base oraria. ",(0,n.kt)("strong",{parentName:"p"},"La percentuale di CFE \xe8 quindi del 33,1%"),"."),(0,n.kt)("h4",{id:"carbon-awareness-come-parte-di-una-strategia-di-abbinamento-orario-247"},"Carbon Awareness come parte di una strategia di abbinamento orario 24/7"),(0,n.kt)("p",null,"L'informatica consapevole delle emissioni di carbonio consiste nel rispondere ai segnali di intensit\xe0 di carbonio elettrico e nel modificare il ",(0,n.kt)("strong",{parentName:"p"},"comportamento")," del software, in modo che emetta meno anidride carbonica. La consapevolezza del carbonio aiuta anche un'organizzazione a raggiungere l'obiettivo di corrispondenza oraria 24/7 e ad aumentare la percentuale di CFE."),(0,n.kt)("p",null,"Un esempio di modifica del comportamento \xe8 lo spostamento dell'elaborazione in un momento in cui \xe8 disponibile pi\xf9 energia rinnovabile. Ad esempio, ritardare l'avvio di un'esecuzione di addestramento di un modello di apprendimento automatico, o anche ritardare la ricarica di un computer portatile, in un momento in cui l'intensit\xe0 di carbonio dell'elettricit\xe0 \xe8 inferiore e l'offerta di energia rinnovabile \xe8 maggiore."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(8012).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"L'informatica consapevole delle emissioni di carbonio aiuta le organizzazioni ad aumentare la loro percentuale di CFE.")),(0,n.kt)("h2",{id:"sintesi"},"Sintesi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Esistono diverse metodologie comunemente applicate per contribuire alla lotta globale contro il cambiamento climatico. Queste rientrano nelle categorie generali di eliminazione delle emissioni di carbonio (note anche come "abbattimento"), astensione dalle emissioni di carbonio (note anche come "compensazione") o rimozione delle emissioni di carbonio (note anche come "neutralizzazione").'),(0,n.kt)("li",{parentName:"ul"},"L'abbattimento comprende l'aumento dell'efficienza energetica per eliminare alcune delle emissioni associate alla produzione di energia. L'abbattimento \xe8 il modo pi\xf9 efficace per combattere il cambiamento climatico, anche se la completa eliminazione del carbonio non \xe8 possibile."),(0,n.kt)("li",{parentName:"ul"},"La compensazione comprende l'adozione di fonti di energia rinnovabili, pratiche di vita sostenibili, riciclaggio, piantagione di alberi, ecc."),(0,n.kt)("li",{parentName:"ul"},"Le neutralizzazioni si riferiscono alla rimozione e allo stoccaggio permanente del carbonio atmosferico per controbilanciare l'effetto del rilascio di CO2 nell'atmosfera. Le neutralizzazioni tendono a rimuovere il carbonio dall'atmosfera nel breve e medio termine."),(0,n.kt)("li",{parentName:"ul"},"Un'organizzazione pu\xf2 definirsi Carbon Neutral quando le sue emissioni totali corrispondono al totale delle emissioni compensate attraverso progetti di riduzione del carbonio."),(0,n.kt)("li",{parentName:"ul"},"L'obiettivo di Net Zero \xe8 eliminare le emissioni e compensare solo le emissioni residue che non \xe8 possibile eliminare per raggiungere l'obiettivo di 1.5\xb0C stabilito dall'Accordo sul clima di Parigi."),(0,n.kt)("li",{parentName:"ul"},"SCI \xe8 accuratamente progettato in modo che l'eliminazione delle emissioni, attraverso l'efficienza energetica, l'efficienza hardware e la consapevolezza delle emissioni di carbonio sia l'unico modo per ridurre il punteggio. Insieme a una strategia di neutralizzazione separata, pu\xf2 costituire la base di una strategia net-zero per un'organizzazione."),(0,n.kt)("li",{parentName:"ul"},'Quando le organizzazioni si pongono l\'obiettivo del 100% di energia rinnovabile, possono essere "abbinate a" o "alimentate da" fonti rinnovabili, dove "alimentate da" significa che gli elettroni che fluiscono nel dispositivo possono provenire solo da fonti rinnovabili. Questo pu\xf2 essere ottenuto acquistando REC come parte di un PPA.'),(0,n.kt)("li",{parentName:"ul"},"L'abbinamento orario 24/7 \xe8 una delle tante strategie che dobbiamo adottare per accelerare la transizione verso una rete al 100% alimentata da fonti rinnovabili.")),(0,n.kt)("h2",{id:"quiz-in-inglese"},"Quiz (in inglese)"),(0,n.kt)(t.Z,{QuizList:[{question:"What are neutralisations?",answers:[{text:"Actions that remove carbon from the atmosphere",isCorrect:!0},{text:"Actions that reduce carbon emissions",isCorrect:!1},{text:"Actions that support climate initiatives",isCorrect:!1}]},{question:"What is a critical consideration for neutralizations?",answers:[{text:"Volume of neutralization",isCorrect:!1},{text:"Durability of neutralization",isCorrect:!0},{text:"Cost of neutralization",isCorrect:!1}]},{question:"What approach can you take to neutralize carbon emissions from energy consumption?",answers:[{text:"Enhance natural carbon sinks",isCorrect:!1},{text:"Direct air capture",isCorrect:!1},{text:"Both of the above",isCorrect:!0}]},{question:"What is responsible for setting the standard for net zero?",answers:[{text:"SBTi",isCorrect:!0},{text:"STBi",isCorrect:!1},{text:"STIB",isCorrect:!1}]},{question:"What is the net-zero global target?",answers:[{text:"Eliminate 100% of emissions by 2050",isCorrect:!1},{text:"Eliminate 90% of emissions by 2050",isCorrect:!0},{text:"Eliminate 80% of emissions by 2050",isCorrect:!1}]},{question:"What is the primary goal with abatement/elimination?",answers:[{text:"Offset your carbon emissions using a financial contract",isCorrect:!1},{text:"Not emitting carbon into the atmosphere in the first place",isCorrect:!0},{text:"Reduce emissions related to a company\u2019s operations by improving energy efficiency",isCorrect:!1}]},{question:"Which measurement protocol or method incorporates offsets?",answers:[{text:"GHG protocol",isCorrect:!0},{text:"SCI",isCorrect:!1}]},{question:"What is the minimum criteria for being carbon neutral?",answers:[{text:"Emissions from scopes 1-3 must be offset by neutralizations or compensations",isCorrect:!1},{text:"Emissions from scopes 1 and 2 must be offset by neutralizations or compensations",isCorrect:!0},{text:"Emissions from scopes 1-2 and business travel from scope 3 must be offset by neutralizations or compensations",isCorrect:!1}]}],mdxType:"Quiz"}))}u.isMDXComponent=!0},680:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/24_riduzione_del_carbonio-50e7b032d9bcfa37f8dd0b7d232fe45d.png"},4739:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/25_impegni_climatici-efacd1da2077aebba3b4f5559f386f8a.png"},3741:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/26-27_100_rinnovabili-3248b509f6eb7fc7f8bd4a6d8fe924c3.png"},4856:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/28_giornaliero_vs_orario-56f167b18ab952769419cf4a9da8f404.png"},5608:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/29_consumo_giornaliero-1aef3a99adad41a8e84576e385f7b286.png"},3856:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/30_abbinamento_orario-eca7c6f75d622e897e61daaaa4189e37.png"},8012:(e,i,a)=>{a.d(i,{Z:()=>o});const o=a.p+"assets/images/31_consapevolezza_del_carbonio-e300228e1bf24c67edfea695c7527a82.png"}}]);