import {useState} from 'react'
import {Link,useSearchParams} from 'react-router-dom'
import {TUTORIALS} from '../data/tutorials'
const all=TUTORIALS.flatMap(c=>c.topics.map(t=>({...t,chapter:c.title,chapterId:c.id})))
function readProgress():string[]{try{const v=JSON.parse(localStorage.getItem('hwlab-tutorials-v1')||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'&&all.some(t=>t.id===x)):[]}catch{return []}}
export default function Tutorials(){
 const [params,setParams]=useSearchParams()
 const [search,setSearch]=useState('')
 const [completed,setCompleted]=useState(readProgress)
 const [notice,setNotice]=useState('')
 const index=Math.max(0,all.findIndex(t=>t.id===params.get('topic')))
 const topic=all[index]
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
  <div className="grid items-start gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
   <aside className="card space-y-3 lg:sticky lg:top-24 lg:max-h-[75vh] lg:overflow-auto print:hidden">
    <label className="block text-sm font-semibold" htmlFor="tutorial-search">Course contents</label>
    <input id="tutorial-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search lessons..." className="w-full rounded-lg border px-3 py-2 text-sm dark:bg-slate-900"/>
    {filtered.length?filtered.map(c=><details key={c.id+':'+topic.chapterId+':'+Boolean(search)} open={Boolean(search)||c.id===topic.chapterId||undefined} className="rounded-lg border border-slate-200 p-2 dark:border-slate-700">
     <summary className="cursor-pointer text-sm font-medium">Chapter {c.id}: {c.title} <span className="text-xs text-slate-500">({c.topics.length})</span></summary>
     <div className="mt-2 space-y-1">{c.topics.map(t=><button key={t.id} onClick={()=>go(t.id)} aria-current={t.id===topic.id?'page':undefined} className={'block w-full rounded-md px-2 py-2 text-left text-xs '+(t.id===topic.id?'bg-brand text-white':'hover:bg-slate-100 dark:hover:bg-slate-800')}>{completed.includes(t.id)?'✓ ':''}{t.id.replace('-','.') } {t.title}</button>)}</div>
    </details>):<p className="text-sm text-slate-500">No matching lessons.</p>}
   </aside>
   <article key={topic.id} className="min-w-0 space-y-4">
    <section className="card space-y-3">
     <p className="text-xs font-semibold uppercase tracking-wide text-brand">Chapter {chapter.id} · {chapter.title}</p>
     <h2 className="text-2xl font-bold">{topic.id.replace('-','.')} {topic.title}</h2>
     <p className="text-sm text-slate-500">Lesson {index+1} of {all.length}</p>
     <div className="flex flex-wrap gap-2 print:hidden"><button className="btn" onClick={toggle}>{completed.includes(topic.id)?'✓ Completed — undo':'Mark as completed'}</button><button className="btn-o" onClick={()=>window.print()}>Print lesson</button></div>
     {notice&&<p role="status" className="text-sm text-amber-700">{notice}</p>}
    </section>
    <section className="card space-y-2"><h3 className="font-semibold text-brand">01 · Theory & concepts</h3><p className="whitespace-pre-line text-sm leading-relaxed">{topic.theory}</p></section>
    <section className="card space-y-2"><h3 className="font-semibold text-brand">02 · Working principle / steps</h3><p className="whitespace-pre-line text-sm leading-relaxed">{topic.working}</p></section>
    <section className="card space-y-2"><h3 className="font-semibold text-brand">03 · Classroom practical</h3><p className="text-sm leading-relaxed">{topic.practical}</p><p className="text-xs text-slate-500">Use authorized lab systems, follow instructor and manufacturer safety guidance, and protect existing data.</p></section>
    <section className="card space-y-2"><h3 className="font-semibold text-brand">04 · Viva / self-check</h3><p className="text-sm font-medium">{topic.question}</p><details className="rounded-lg border p-3 text-sm"><summary className="cursor-pointer font-medium">Reveal answer</summary><p className="mt-2 leading-relaxed">{topic.answer}</p></details></section>
    <section className="card flex flex-wrap gap-2 print:hidden"><Link to="/lab" className="btn-o">3D hardware lab</Link><Link to="/quiz" className="btn-o">Practice quiz</Link><Link to="/games" className="btn-o">Hardware games</Link></section>
    <nav aria-label="Lesson navigation" className="flex justify-between gap-2 print:hidden"><button className="btn-o disabled:opacity-40" disabled={index===0} onClick={()=>go(all[index-1].id)}>← Previous</button><button className="btn disabled:opacity-40" disabled={index===all.length-1} onClick={()=>go(all[index+1].id)}>Next lesson →</button></nav>
   </article>
  </div>
 </div>
}
