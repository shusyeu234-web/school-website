const DEFAULT_DATA={
 hero:{title:"مدرسة العقال البحري الثانوية المشتركة",text:"مرحبًا بكم في الموقع التعريفي لمدرستنا، حيث يجتمع العلم والطموح والإبداع لصناعة مستقبل أفضل.",address:"العقال البحري - محافظة أسيوط - جمهورية مصر العربية"},
 manager:{name:"الأستاذة / ليلى البدري",text:"نرحب بجميع زوار موقع مدرستنا، ونسعى دائمًا إلى توفير بيئة تعليمية متميزة تُنمّي قدرات الطلاب، وترسّخ قيم الأخلاق والتميز والإبداع.",image:"https://i.postimg.cc/bNfqSfvK/1.png"},
 officials:[
  {name:"محمد عبد اللطيف",role:"وزير التربية والتعليم",image:"https://i.postimg.cc/Pry0XgvD/2.png",bio:"نسعى إلى تطوير العملية التعليمية وبناء جيل قادر على الإبداع والابتكار."},
  {name:"محمد إبراهيم",role:"وكيل الوزارة",image:"https://i.postimg.cc/rmMDKvP0/3.png",bio:"دعم المدارس وتوفير بيئة تعليمية متميزة لجميع الطلاب."}
 ],
 phrases:[
  {icon:"fa-user-graduate",text:"طلابنا متفوقون"},
  {icon:"fa-chalkboard-teacher",text:"معلمونا متميزون"},
  {icon:"fa-school",text:"فصولنا نظيفة"},
  {icon:"fa-award",text:"إنجازاتنا عظيمة"}
 ],
 teachers:[
  ["نادي محمد","رياضيات","https://i.postimg.cc/brDdyx39/4.png","نسأل الله له دوام التوفيق والنجاح."],
  ["مراد سباق","رياضيات","https://i.postimg.cc/3JGZ86S6/5.png","نسأل الله له دوام التوفيق والنجاح."],
  ["حمادة ..","رياضيات","https://i.postimg.cc/RFJvCGM7/6.png","نسأل الله له دوام التوفيق والنجاح."],
  ["جمال محروص","لغة عربية","https://i.postimg.cc/fWxhHVyq/7.png","نسأل الله له دوام التوفيق والنجاح."],
  [".. ..","لغة عربية","https://i.postimg.cc/FK9ZQnVn/32.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علم ..","لغة عربية","https://i.postimg.cc/h48HLNZ3/8.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نبيلة هاشم","لغة عربية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["عبدالحكيم","لغة عربية","https://i.postimg.cc/sxTPqdT3/dhkr.png","نسأل الله له دوام التوفيق والنجاح."],
  ["محمد ابراهيم","فرنساوي","https://i.postimg.cc/k4Rtrxz8/20.png","نسأل الله له دوام التوفيق والنجاح."],
  ["همام ..","فرنساوي","https://i.postimg.cc/4x0M4GnF/9.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نجلاء عبدلفتاح","فيزياء","https://i.postimg.cc/MZ1skRyg/Chat-GPT-Image-5-aktwbr-2026-10-15-07-m.png","نسأل الله له دوام التوفيق والنجاح."],
  [".. ..","فيزياء","https://i.postimg.cc/DyHd8wdf/13.png","نسأل الله له دوام التوفيق والنجاح."],
  ["خلاف صبيح","لغة إنجليزية","https://i.postimg.cc/5NNkwyCG/11.png","نسأل الله له دوام التوفيق والنجاح."],
  ["مايز ...","لغة إنجليزية","https://i.postimg.cc/rybt9Ydv/16.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نهاد عبدالحميد","لغة إنجليزية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  [".. ..","لغة إنجليزية","https://i.postimg.cc/52tydBFV/22.png","نسأل الله له دوام التوفيق والنجاح."],
  ["وحيد حسين","لغة إنجليزية","https://i.postimg.cc/PxX1BphW/14.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علي حسين","لغة إنجليزية","https://i.postimg.cc/NjRJtXqg/30.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","كيمياء","https://i.postimg.cc/RF4T4p17/12.png","نسأل الله له دوام التوفيق والنجاح."],
  ["بخيت حبيب","كيمياء","https://i.postimg.cc/RhfftcTf/19.png","نسأل الله له دوام التوفيق والنجاح."],
  ["باسم بخيت","تاريخ","https://i.postimg.cc/8crdH8Tk/33.png","نسأل الله له دوام التوفيق والنجاح."],
  ["نهلة ...","تاريخ","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","نشاط ..","https://i.postimg.cc/WbBgsfTp/15.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علام بعزق","نشاط مكتبة","https://i.postimg.cc/ht4z4FNR/21.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","نشاط ..","https://i.postimg.cc/wTqTLX22/23.png","نسأل الله له دوام التوفيق والنجاح."],
  ["سيف ...","نشاط ..","https://i.postimg.cc/fL7D0y01/24.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","تربية فنية","https://i.postimg.cc/N0h37YtS/27.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","اقتصاد منزلي","https://i.postimg.cc/mk6qcW8s/28.png","نسأل الله له دوام التوفيق والنجاح."],
  ["عاطف اسماعيل","تربية رياضية","https://i.postimg.cc/wTLcRdWP/18.png","نسأل الله له دوام التوفيق والنجاح."],
  ["غادة عثمان","تربية رياضية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["علاء ..","أخصائي اجتماعي","https://i.postimg.cc/tC4pYXRc/25.png","نسأل الله له دوام التوفيق والنجاح."],
  ["هويدا ..","أخصائي اجتماعي","https://i.postimg.cc/nrR8vDcf/26.png","نسأل الله له دوام التوفيق والنجاح."],
  ["بكر ..","أخصائي اجتماعي","https://i.postimg.cc/j5M39rVK/29.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...","زراعة","https://i.postimg.cc/WzQ8LN5r/31.png","نسأل الله له دوام التوفيق والنجاح."],
  ["... ...",".. ..","https://i.postimg.cc/cCY9JtgR/34.png","نسأل الله له دوام التوفيق والنجاح."],
  ["سمحاء ...","ثقافة مالية","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["هناء ...","علوم متكاملة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["شيماء نعمان","برمجة","https://i.postimg.cc/nzt1Q1XP/anthy.png","نسأل الله له دوام التوفيق والنجاح."],
  ["محمد حسين","برمجة","https://i.postimg.cc/xC8cvKn7/17.png","نسأل الله له دوام التوفيق والنجاح."]
 ],
 gallery:[
  "https://i.postimg.cc/wjL2xPvx/IMG-20261005-WA0027.jpg","https://i.postimg.cc/RhW1kpyr/IMG-20261005-WA0028.jpg","https://i.postimg.cc/PqqMbqyJ/IMG-20261005-WA0030.jpg","https://i.postimg.cc/Zn6PYvYS/IMG-20261005-WA0056.jpg","https://i.postimg.cc/CLVHP7JY/IMG-20261005-WA0055.jpg","https://i.postimg.cc/Jzr3mh96/IMG-20261005-WA0031.jpg","https://i.postimg.cc/BnmTv031/IMG-20261005-WA0032.jpg","https://i.postimg.cc/cHnwTtnt/IMG-20261005-WA0034.jpg","https://i.postimg.cc/XqWG8HWx/IMG-20261005-WA0058.jpg"
 ],
 activities:[
  ["الرياضة","fa-futbol"],["الإذاعة","fa-microphone"],["المسرح","fa-masks-theater"],["الصحافة","fa-newspaper"],["الدوري الرياضي المدرسي","fa-trophy"]
 ],
 schedule:[
  ["6:45 صباحًا","الطابور","بداية اليوم المدرسي"],
  ["7:00 صباحًا","بداية الحصص","بدء الحصص الدراسية"],
  ["10:00 صباحًا","الفسحة","استراحة"],
  ["حسب السنة الدراسية","نهاية اليوم","وفق الجدول المعتمد"]
 ],
 vision:{title:"رؤيتنا",text:"إعداد جيل واعٍ قادر على التفكير والإبداع والمنافسة، يمتلك المهارات العلمية والأخلاقية التي تؤهله لبناء مستقبل أفضل."},
 mission:{title:"رسالتنا",text:"توفير بيئة تعليمية آمنة ومحفزة تعتمد على الجودة والابتكار، وتنمية شخصية الطالب علميًا وأخلاقيًا واجتماعيًا."},
 values:["الاحترام","الانضباط","التعاون","الإبداع","المسؤولية","التميز"],
 faq:[
  ["ما مواعيد الدراسة؟","تبدأ الدراسة من الساعة 7:00 صباحًا."],
  ["هل يوجد أنشطة؟","نعم، توجد أنشطة رياضية وثقافية وفنية، بالإضافة إلى الدوري الرياضي المدرسي."],
  ["هل يوجد معمل حاسب؟","نعم، يوجد معمل حاسب مجهز."]
 ],
 news:[
  ["بدء التسجيل للعام الدراسي الجديد.","مستجدات المدرسة"],
  ["إقامة معرض الأنشطة المدرسية.","أنشطة"],
  ["تنظيم فعاليات رياضية وثقافية.","فعاليات"]
 ],
 contact:{title:"مدرسة العقال البحري الثانوية المشتركة",address:"العقال البحري - محافظة أسيوط - جمهورية مصر العربية"}
};

let data=loadData(), admin=false, password=localStorage.getItem("schoolAdminPassword")||"KAREZMATIK2026";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function loadData(){try{return JSON.parse(localStorage.getItem("schoolSiteData"))||structuredClone(DEFAULT_DATA)}catch{return structuredClone(DEFAULT_DATA)}}
function saveData(){localStorage.setItem("schoolSiteData",JSON.stringify(data));renderAll();toast("تم حفظ التعديل");}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function adminTools(type,index=null){if(!admin)return "";return `<div class="inline-admin"><button onclick="openEditor('${type}',${index===null?"null":index})" title="تعديل">✏️</button><button onclick="deleteItem('${type}',${index===null?"null":index})" title="حذف">🗑️</button></div>`}
function renderAll(){
 document.body.classList.toggle("admin-mode",admin);
 const teacherAdminBar=$("#teacherAdminBar"); if(teacherAdminBar) teacherAdminBar.hidden=!admin;
 $("#heroTitle").innerHTML=esc(data.hero.title).replace("الثانوية المشتركة","<strong>الثانوية المشتركة</strong>");
 $("#heroText").textContent=data.hero.text; $("#heroAddress").textContent=data.hero.address;
 $("#managerImage").src=data.manager.image;$("#managerName").textContent=data.manager.name;$("#managerText").textContent=data.manager.text;
 $("#contactTitle").textContent=data.contact.title;$("#contactAddress").textContent=data.contact.address;
 $("#visionTitle").textContent=data.vision.title;$("#visionText").textContent=data.vision.text;$("#missionTitle").textContent=data.mission.title;$("#missionText").textContent=data.mission.text;
 renderOfficials();renderPhrases();renderTeachers();renderGallery();renderActivities();renderSchedule();renderValues();renderFaq();renderNews();attachAdminControls();
}
function renderOfficials(){$("#officialsGrid").innerHTML=data.officials.map((x,i)=>`<article class="leadership-card editable" data-editable>${adminTools("official",i)}<img src="${esc(x.image)}" alt=""><div><span class="role">${esc(x.role)}</span><h3>${esc(x.name)}</h3><p>${esc(x.bio)}</p></div></article>`).join("")}
function renderPhrases(){$("#phrasesGrid").innerHTML=data.phrases.map((x,i)=>`<div class="phrase editable" data-editable>${adminTools("phrase",i)}<i class="fa-solid ${esc(x.icon)}"></i><h3>${esc(x.text)}</h3></div>`).join("")}
function renderTeachers(){
 const q=($("#teacherSearch")?.value||"").toLowerCase(), active=$(".filter-row button.active")?.dataset.filter||"all";
 const filtered=data.teachers.map((x,i)=>({x,i})).filter(({x})=>(active==="all"||x[1]===active)&&(!q||x.join(" ").toLowerCase().includes(q)));
 $("#teachersGrid").innerHTML=filtered.map(({x,i})=>`<article class="teacher-card editable" data-editable>${adminTools("teacher",i)}<img src="${esc(x[2])}" alt=""><h3>${esc(x[0])}</h3><span class="subject">${esc(x[1])}</span><p>${esc(x[3])}</p></article>`).join("")||`<p>لا توجد نتائج.</p>`;
 const subjects=["الكل",...new Set(data.teachers.map(x=>x[1]))];
 $("#subjectFilters").innerHTML=subjects.map(s=>`<button data-filter="${esc(s)}" class="${active===s||(!active&&s==="الكل")?"active":""}">${esc(s)}</button>`).join("");
 $$("#subjectFilters button").forEach(b=>b.onclick=()=>{$$("#subjectFilters button").forEach(z=>z.classList.remove("active"));b.classList.add("active");renderTeachers()});
}
function renderGallery(){$("#galleryGrid").innerHTML=data.gallery.map((x,i)=>`<div class="gallery-item editable" data-editable>${adminTools("gallery",i)}<img src="${esc(x)}" alt="صورة من المدرسة" onclick="openLightbox('${esc(x)}')"></div>`).join("")}
function renderActivities(){$("#activitiesGrid").innerHTML=data.activities.map((x,i)=>`<article class="activity-card editable" data-editable>${adminTools("activity",i)}<i class="fa-solid ${esc(x[1])}"></i><h3>${esc(x[0])}</h3></article>`).join("")}
function renderSchedule(){$("#scheduleGrid").innerHTML=data.schedule.map((x,i)=>`<div class="schedule-item editable" data-editable>${adminTools("schedule",i)}<div class="schedule-time">${esc(x[0])}</div><div><div class="schedule-label">${esc(x[1])}</div><div class="schedule-note">${esc(x[2])}</div></div></div>`).join("")}
function renderValues(){$("#valuesGrid").innerHTML=data.values.map((x,i)=>`<div class="value editable" data-editable>${adminTools("value",i)}${esc(x)}</div>`).join("")}
function renderFaq(){$("#faqList").innerHTML=data.faq.map((x,i)=>`<div class="faq-item editable" data-editable>${adminTools("faq",i)}<button class="faq-q">${esc(x[0])}<i class="fa-solid fa-plus"></i></button><div class="faq-a">${esc(x[1])}</div></div>`).join("");$$(".faq-q").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("open"))}
function renderNews(){$("#newsGrid").innerHTML=data.news.map((x,i)=>`<article class="news-card editable" data-editable>${adminTools("news",i)}<span class="date">${esc(x[1])}</span><h3>${esc(x[0])}</h3><p>يمكن للمشرف تعديل هذا الخبر أو حذفه وإضافة خبر جديد من داخل الموقع.</p></article>`).join("")}
function attachAdminControls(){
 if(!admin)return;
 const sections=[["hero","home"],["manager","manager"],["official","leadership"],["teacher","teachers"],["gallery","gallery"],["activity","activities"],["schedule","activities"],["value","values"],["faq","faq"],["news","news"],["contact","contact"]];
 sections.forEach(([type,id])=>{const el=$("#"+id);if(el&&!el.querySelector(":scope > .inline-admin")){el.classList.add("editable");el.insertAdjacentHTML("afterbegin",adminTools(type));}});
}
function openLightbox(src){
 $("#lightboxImage").src=src;
 $("#lightboxCaption").textContent="صورة من مدرسة العقال البحري الثانوية المشتركة";
 $("#lightbox").classList.add("show");
}
$("#lightboxClose").onclick=()=>$("#lightbox").classList.remove("show");
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),2200)}
function openAdmin(){ $("#adminModal").classList.add("show"); $("#adminLogin").hidden=admin;$("#adminPanel").hidden=!admin}
$("#adminOpen").onclick=openAdmin;$$("[data-close-admin]").forEach(b=>b.onclick=()=>$("#adminModal").classList.remove("show"));
$("#loginBtn").onclick=()=>{if($("#adminPassword").value===password){admin=true;$("#adminModal").classList.remove("show");renderAll();toast("تم تسجيل دخول المشرف")}else toast("كلمة المرور غير صحيحة")};
$("#logoutBtn").onclick=()=>{admin=false;renderAll();$("#adminModal").classList.remove("show");toast("تم تسجيل الخروج")};
$("#changePassword").onclick=()=>{const p=prompt("اكتب كلمة المرور الجديدة:");if(p&&p.length>=6){password=p;localStorage.setItem("schoolAdminPassword",p);toast("تم تغيير كلمة المرور")}else if(p)toast("كلمة المرور يجب أن تكون 6 أحرف على الأقل")};
$("#resetData").onclick=()=>{if(confirm("استعادة البيانات الأصلية؟ ستُحذف كل التعديلات المحلية.")){data=structuredClone(DEFAULT_DATA);saveData()}};
$("#teacherSearch").oninput=renderTeachers;
function form(title,fields,save){
 $("#editorContent").innerHTML=`<span class="eyebrow">تحرير المحتوى</span><h2>${esc(title)}</h2><div class="editor-form">${fields.map(f=>`<label>${esc(f.label)}<input id="ef_${f.key}" value="${esc(f.value)}"></label>`).join("")}<button class="save">حفظ</button></div>`;
 $("#editorModal").classList.add("show");$(".editor-form .save").onclick=()=>{save(Object.fromEntries(fields.map(f=>[f.key,$("#ef_"+f.key).value])));$("#editorModal").classList.remove("show");saveData()};
}
function openEditor(type,index=null){
 let x;
 if(type==="hero")return form("الرئيسية",[{key:"title",label:"العنوان",value:data.hero.title},{key:"text",label:"الوصف",value:data.hero.text},{key:"address",label:"العنوان",value:data.hero.address}],v=>data.hero=v);
 if(type==="manager")return form("كلمة المديرة",[{key:"name",label:"الاسم",value:data.manager.name},{key:"text",label:"الكلمة",value:data.manager.text},{key:"image",label:"رابط الصورة",value:data.manager.image}],v=>data.manager=v);
 if(type==="contact")return form("بيانات التواصل",[{key:"title",label:"العنوان الرئيسي",value:data.contact.title},{key:"address",label:"عنوان المدرسة",value:data.contact.address}],v=>data.contact=v);
 if(type==="official") {x=data.officials[index];return form("قيادة",[{key:"name",label:"الاسم",value:x.name},{key:"role",label:"المنصب",value:x.role},{key:"image",label:"رابط الصورة",value:x.image},{key:"bio",label:"النبذة",value:x.bio}],v=>data.officials[index]=v)}
 if(type==="teacher"){x=data.teachers[index];return form("معلم",[{key:"name",label:"الاسم",value:x[0]},{key:"subject",label:"المادة",value:x[1]},{key:"image",label:"رابط الصورة",value:x[2]},{key:"bio",label:"النبذة",value:x[3]}],v=>data.teachers[index]=[v.name,v.subject,v.image,v.bio])}
 if(type==="gallery"){return form("صورة المعرض",[{key:"url",label:"رابط الصورة",value:data.gallery[index]}],v=>data.gallery[index]=v.url)}
 if(type==="activity"){x=data.activities[index];return form("نشاط",[{key:"name",label:"اسم النشاط",value:x[0]},{key:"icon",label:"أيقونة Font Awesome",value:x[1]}],v=>data.activities[index]=[v.name,v.icon])}
 if(type==="schedule"){x=data.schedule[index];return form("موعد",[{key:"time",label:"الوقت",value:x[0]},{key:"name",label:"الحدث",value:x[1]},{key:"note",label:"ملاحظة",value:x[2]}],v=>data.schedule[index]=[v.time,v.name,v.note])}
 if(type==="value"){return form("قيمة",[{key:"text",label:"النص",value:data.values[index]}],v=>data.values[index]=v.text)}
 if(type==="faq"){x=data.faq[index];return form("سؤال شائع",[{key:"q",label:"السؤال",value:x[0]},{key:"a",label:"الإجابة",value:x[1]}],v=>data.faq[index]=[v.q,v.a])}
 if(type==="news"){x=data.news[index];return form("خبر",[{key:"title",label:"الخبر",value:x[0]},{key:"category",label:"التصنيف",value:x[1]}],v=>data.news[index]=[v.title,v.category])}
 if(type==="phrase"){x=data.phrases[index];return form("عبارة",[{key:"text",label:"العبارة",value:x.text},{key:"icon",label:"أيقونة Font Awesome",value:x.icon}],v=>data.phrases[index]=v)}
}
function deleteItem(type,index){
 if(index===null)return;
 if(!confirm("هل تريد حذف هذا العنصر؟"))return;
 const map={official:"officials",teacher:"teachers",gallery:"gallery",activity:"activities",schedule:"schedule",value:"values",faq:"faq",news:"news",phrase:"phrases"};
 if(map[type])data[map[type]].splice(index,1);saveData();
}
function addItem(type){
 const defaults={
  official:["اسم جديد","المنصب","https://i.postimg.cc/zGrDmCMz/manager.png","نبذة جديدة"],
  teacher:["معلم جديد","المادة","https://i.postimg.cc/XNwQcPm3/t1.png","نبذة المعلم"],
  gallery:["https://i.postimg.cc/cLnqRWq9/g1.jpg"],activity:["نشاط جديد","fa-star"],schedule:["7:00 صباحًا","حدث جديد","ملاحظة"],value:["قيمة جديدة"],faq:["سؤال جديد","إجابة جديدة"],news:["خبر جديد","أخبار"],phrase:{text:"عبارة جديدة",icon:"fa-star"}
 };
 const d=defaults[type];
 if(type==="official")return form("إضافة قيادة",[{key:"name",label:"الاسم",value:d[0]},{key:"role",label:"المنصب",value:d[1]},{key:"image",label:"رابط الصورة",value:d[2]},{key:"bio",label:"النبذة",value:d[3]}],v=>data.officials.push(v));
 if(type==="teacher")return form("إضافة معلم",[{key:"name",label:"الاسم",value:d[0]},{key:"subject",label:"المادة",value:d[1]},{key:"image",label:"رابط الصورة",value:d[2]},{key:"bio",label:"النبذة",value:d[3]}],v=>data.teachers.push([v.name,v.subject,v.image,v.bio]));
 if(type==="gallery")return form("إضافة صورة",[{key:"url",label:"رابط الصورة",value:d[0]}],v=>data.gallery.push(v.url));
 if(type==="activity")return form("إضافة نشاط",[{key:"name",label:"النشاط",value:d[0]},{key:"icon",label:"أيقونة Font Awesome",value:d[1]}],v=>data.activities.push([v.name,v.icon]));
 if(type==="schedule")return form("إضافة موعد",[{key:"time",label:"الوقت",value:d[0]},{key:"name",label:"الحدث",value:d[1]},{key:"note",label:"ملاحظة",value:d[2]}],v=>data.schedule.push([v.time,v.name,v.note]));
 if(type==="value")return form("إضافة قيمة",[{key:"text",label:"النص",value:d[0]}],v=>data.values.push(v.text));
 if(type==="faq")return form("إضافة سؤال",[{key:"q",label:"السؤال",value:d[0]},{key:"a",label:"الإجابة",value:d[1]}],v=>data.faq.push([v.q,v.a]));
 if(type==="news")return form("إضافة خبر",[{key:"title",label:"الخبر",value:d[0]},{key:"category",label:"التصنيف",value:d[1]}],v=>data.news.push([v.title,v.category]));
 if(type==="phrase")return form("إضافة عبارة",[{key:"text",label:"العبارة",value:d.text},{key:"icon",label:"أيقونة Font Awesome",value:d.icon}],v=>data.phrases.push(v));
}
$$("[data-admin-action]").forEach(b=>b.onclick=()=>openEditor(b.dataset.adminAction));
$$("[data-close-editor]").forEach(b=>b.onclick=()=>$("#editorModal").classList.remove("show"));
$("#adminModal").addEventListener("click",e=>{if(e.target.id==="adminModal")$("#adminModal").classList.remove("show")});
$("#editorModal").addEventListener("click",e=>{if(e.target.id==="editorModal")$("#editorModal").classList.remove("show")});
$("#menuBtn").onclick=()=>$("#mainNav").classList.toggle("open");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("darkMode",document.body.classList.contains("dark"))};
if(localStorage.getItem("darkMode")!=="false")document.body.classList.add("dark");
window.addEventListener("scroll",()=>{$(".site-header").classList.toggle("scrolled",scrollY>40);$("#topBtn").classList.toggle("show",scrollY>500)});
$("#topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});$$(".reveal").forEach(x=>observer.observe(x));
window.addEventListener("load",()=>{setTimeout(()=>$("#cinematic-loader").classList.add("hide"),700);renderAll()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$$("#lightbox,.modal-backdrop").forEach(x=>x.classList.remove("show"))}});

function shareSite(type){const url=window.location.href,title="مدرسة العقال البحري الثانوية المشتركة";if(type==="facebook")window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url),"_blank");else if(type==="whatsapp")window.open("https://wa.me/?text="+encodeURIComponent(title+" "+url),"_blank");else if(type==="telegram")window.open("https://t.me/share/url?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(title),"_blank");else if(navigator.clipboard)navigator.clipboard.writeText(url).then(()=>toast("تم نسخ رابط الموقع"));else{const ta=document.createElement("textarea");ta.value=url;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();toast("تم نسخ رابط الموقع")}}
window.shareSite=shareSite;
window.openEditor=openEditor;window.deleteItem=deleteItem;window.addItem=addItem;window.openLightbox=openLightbox;
