import {Link,useParams} from 'react-router-dom'; import {Bookmark,CheckCircle2,Box} from 'lucide-react'; import {MODULES} from '../data/modules'; import {useStore} from '../store'
const S=({t,children}:{t:string;children:React.ReactNode})=><section className="card"><h2 className="mb-2 font-semibold text-brand">{t}</h2>{children}</section>
const L=({items}:{items:string[]})=><ul className="list-disc space-y-1 pl-5 text-sm">{items.map(i=><li key={i}>{i}</li>)}</ul>
export default function ModulePage(){const {id}=useParams();const m=MODULES.find(x=>x.id===id);const {done,marks,toggleDone,toggleMark}=useStore()
if(!m)return <div className="card">Module not found. <Link className="text-brand underline" to="/library">Back to library</Link></div>
return <div className="space-y-4"><div className="flex flex-wrap items-center gap-2"><h1 className="mr-auto text-2xl font-semibold">{m.title}</h1>
{m.id==='motherboard'&&<Link className="btn" to="/lab"><Box size={16}/>Open in 3D Lab</Link>}
<button className="btn-o" onClick={()=>toggleMark(m.id)}><Bookmark size={16} fill={marks.includes(m.id)?'currentColor':'none'}/>{marks.includes(m.id)?'Bookmarked':'Bookmark'}</button>
<button className="btn-o" onClick={()=>toggleDone(m.id)}><CheckCircle2 size={16}/>{done.includes(m.id)?'Completed':'Mark complete'}</button></div>
<S t="Introduction"><p className="text-sm leading-relaxed">{m.intro}</p></S><S t="Working principle"><p className="text-sm leading-relaxed">{m.working}</p></S>
<S t="Technical specifications"><dl className="grid gap-2 text-sm sm:grid-cols-2">{m.specs.map(([k,v])=><div key={k} className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800"><dt className="text-slate-500">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl></S>
<S t="Component identification"><L items={m.identify}/></S><S t="Installation and maintenance"><L items={m.maintain}/></S>
<S t="Troubleshooting"><div className="space-y-2 text-sm">{m.trouble.map(t=><p key={t.p}><b>{t.p}:</b> {t.s}</p>)}</div></S>
<S t="Important questions"><L items={m.important}/></S><S t="Practical exercises"><L items={m.practical}/></S>
<Link className="btn" to={`/quiz?topic=${m.id}`}>Practice quiz on {m.title}</Link></div>}
