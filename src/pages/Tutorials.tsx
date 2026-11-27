import {useState} from 'react'
import {Link,useSearchParams} from 'react-router-dom'
import {TUTORIALS} from '../data/tutorials'
import {ARTICLE_DETAILS} from '../data/articleDetails'
const all=TUTORIALS.flatMap(c=>c.topics.map(t=>({...t,chapter:c.title,chapterId:c.id})))
function readProgress():string[]{try{const v=JSON.parse(localStorage.getItem('hwlab-tutorials-v1')||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'&&all.some(t=>t.id===x)):[]}catch{return []}}
export default function Tutorials(){
 const [params,setParams]=useSearchParams()
 const [search,setSearch]=useState('')
 const [completed,setCompleted]=useState(readProgress)
 const [notice,setNotice]=useState('')
 const index=Math.max(0,all.findIndex(t=>t.id===params.get('topic')))
 const topic=all[index]
 const detail=ARTICLE_DETAILS[topic.id]
 const sections=[['concept','Introduction'],['working','How it works'],['details','Key concepts'],['example','Example & application'],['practical','Practical exercise'],['viva','Frequently asked question']]
 const chapter=TUTORIALS.find(c=>c.id===topic.chapterId)!
 const filtered=TUTORIALS.map(c=>({...c,topics:c.topics.filter(t=>(c.title+' '+t.title+' '+t.theory).toLowerCase().includes(search.toLowerCase()))})).filter(c=>c.topics.length)
 const go=(id:string)=>{setParams({topic:id});window.scrollTo({top:0,behavior:'instant'})}
 const toggle=()=>{const next=completed.includes(topic.id)?completed.filter(id=>id!==topic.id):[...completed,topic.id];setCompleted(next);try{localStorage.setItem('hwlab-tutorials-v1',JSON.stringify(next));setNotice('')}catch{setNotice('Progress could not be saved on this device.')}}
 return <div className="space-y-5">
  <header className="rounded-2xl bg-slate-900 p-6 text-white">
   <p className="text-xs font-semibold uppercase tracking-widest text-green-300">Prakshal IT Academy · A+ Hardware</p>
   <h1 className="mt-2 text-3xl font-bold">Hardware Tutorials</h1>
   <p className="mt-2 text-sm text-slate-300">New logsheet syllabus · 11 chapters · 42 lessons · Hinglish · 60 course hours</p>
   <div className="mt-4 flex items-center justify-between text-sm"><span>Your learning progress</span><strong>{completed.length}/{all.length} topics</strong></div>
   <div className="mt-2 h-2 overflow-hidden rounded bg-slate-700"><div className="h-full rounded bg-green-400" style={{width:completed.length/all.length*100+'%'}}/></div>
  </header>
  <div className="grid items-start gap-4 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_150px]">
   <aside className="card space-y-3 lg:sticky lg:top-24 lg:max-h-[75vh] lg:overflow-auto print:hidden">
    <label className="block text-sm font-semibold" htmlFor="tutorial-search">Course contents</label>
    <input id="tutorial-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search lessons..." className="w-full rounded-lg border px-3 py-2 text-sm dark:bg-slate-900"/>
    {filtered.length?filtered.map(c=><details key={c.id+':'+topic.chapterId+':'+Boolean(search)} open={Boolean(search)||c.id===topic.chapterId||undefined} className="rounded-lg border border-slate-200 p-2 dark:border-slate-700">
     <summary className="cursor-pointer text-sm font-medium">Chapter {c.id}: {c.title} <span className="text-xs text-slate-500">({c.topics.length})</span></summary>
     <div className="mt-2 space-y-1">{c.topics.map(t=><button key={t.id} onClick={()=>go(t.id)} aria-current={t.id===topic.id?'page':undefined} className={'block w-full rounded-md px-2 py-2 text-left text-xs '+(t.id===topic.id?'bg-brand text-white':'hover:bg-slate-100 dark:hover:bg-slate-800')}>{completed.includes(t.id)?'✓ ':''}{t.id.replace('-','.') } {t.title}</button>)}</div>
    </details>):<p className="text-sm text-slate-500">No matching lessons.</p>}
   </aside>
   <article key={topic.id} className="min-w-0 rounded-xl border border-slate-200 bg-white px-5 py-6 dark:border-slate-800 dark:bg-slate-900 md:px-8">
    <header className="space-y-4 border-b pb-5">
     <p className="text-xs font-medium text-brand">A+ Hardware / Chapter {chapter.id} / {chapter.title}</p>
     <h2 className="text-3xl font-bold leading-tight">{topic.title}</h2>
     <p className="text-xs text-slate-500">Hinglish tutorial · Lesson {index+1} of {all.length} · Beginner friendly</p>
     <div className="flex flex-wrap gap-2 print:hidden"><button className="btn-o" onClick={toggle}>{completed.includes(topic.id)?'✓ Completed — undo':'Mark as completed'}</button><button className="btn-o" onClick={()=>window.print()}>Print article</button></div>
     {notice&&<p role="status" className="text-sm text-amber-700">{notice}</p>}
     <nav aria-label="Article contents" className="flex flex-wrap gap-x-3 gap-y-1 text-sm xl:hidden">{sections.map(([id,label])=><a className="text-brand underline" key={id} href={'#'+id}>{label}</a>)}</nav>
    </header>
    <section id="concept" className="scroll-mt-24 space-y-3 py-6"><h3 className="text-xl font-bold">Introduction</h3><p className="text-base leading-8">{topic.theory}</p></section>
    <section id="working" className="scroll-mt-24 space-y-3 border-t py-6"><h3 className="text-xl font-bold">How it works</h3><p className="whitespace-pre-line text-base leading-8">{topic.working}</p>{detail?.flow&&<figure className="rounded-lg border bg-slate-50 p-4 dark:bg-slate-800"><div className="flex flex-wrap items-center justify-center gap-2">{detail.flow.map((step,i)=><div key={i} className="flex items-center gap-2">{i>0&&<span aria-hidden="true" className="text-brand">→</span>}<span className="rounded border border-green-300 bg-green-50 px-3 py-2 text-center text-sm font-medium text-green-900">{step}</span></div>)}</div><figcaption className="mt-3 text-center text-xs text-slate-500">Conceptual process diagram</figcaption></figure>}</section>
    <section id="details" className="scroll-mt-24 space-y-4 border-t py-6"><h3 className="text-xl font-bold">Key concepts</h3>{detail?.points.map(p=><div key={p[0]}><h4 className="mb-1 text-lg font-semibold">{p[0]}</h4><p className="text-base leading-8">{p[1]}</p></div>)}</section>
    <section id="example" className="scroll-mt-24 space-y-3 border-t py-6"><h3 className="text-xl font-bold">Example & application</h3><div className="border-l-4 border-brand bg-green-50 p-4 text-base leading-7 text-slate-800 dark:bg-slate-800 dark:text-slate-100">{detail?.example}</div>{detail?.tip&&<p className="text-sm leading-7"><strong>Remember:</strong> {detail.tip}</p>}</section>
    <section id="practical" className="scroll-mt-24 space-y-3 border-t py-6"><h3 className="text-xl font-bold">Practical exercise</h3><p className="text-base leading-8">{topic.practical}</p><p className="text-sm text-slate-500">Use authorized lab systems and protect existing data.</p></section>
    <section id="viva" className="scroll-mt-24 space-y-3 border-t py-6"><h3 className="text-xl font-bold">Frequently asked question</h3><details className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">{topic.question}</summary><p className="mt-3 leading-7">{topic.answer}</p></details></section>
    <section className="card flex flex-wrap gap-2 print:hidden"><Link to="/lab" className="btn-o">3D hardware lab</Link><Link to="/quiz" className="btn-o">Practice quiz</Link><Link to="/games" className="btn-o">Hardware games</Link></section>
    <nav aria-label="Lesson navigation" className="flex justify-between gap-2 print:hidden"><button className="btn-o disabled:opacity-40" disabled={index===0} onClick={()=>go(all[index-1].id)}>← Previous</button><button className="btn disabled:opacity-40" disabled={index===all.length-1} onClick={()=>go(all[index+1].id)}>Next lesson →</button></nav>
   </article>
   <aside className="hidden xl:block sticky top-24 print:hidden"><h3 className="mb-3 text-sm font-semibold">On this page</h3><nav className="space-y-3 border-l pl-3">{sections.map(([id,label])=><a key={id} href={'#'+id} className="block text-xs leading-5 text-slate-500 hover:text-brand">{label}</a>)}</nav></aside>
  </div>
 </div>
}
