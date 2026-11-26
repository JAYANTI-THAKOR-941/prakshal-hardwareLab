import {useState} from 'react'; import {useSearchParams} from 'react-router-dom'; import {QUESTIONS} from '../data/questions'; import {useStore} from '../store'
export default function Quiz(){const [sp,setSp]=useSearchParams();const topic=sp.get('topic')??'';const add=useStore(s=>s.addResult)
const [i,setI]=useState(0);const [pick,setPick]=useState<number|null>(null);const [score,setScore]=useState(0);const [wrong,setWrong]=useState<string[]>([]);const [fin,setFin]=useState(false)
const qs=QUESTIONS.filter(q=>!topic||q.topic===topic);const reset=(t:string)=>{setSp(t?{topic:t}:{});setI(0);setPick(null);setScore(0);setWrong([]);setFin(false)}
const q=qs[i]
const next=()=>{if(i+1<qs.length){setI(i+1);setPick(null)}else{add({topic:topic||'all',score,total:qs.length,date:new Date().toISOString(),wrong});setFin(true)}}
const choose=(n:number)=>{if(pick!==null)return;setPick(n);if(n===q.ans)setScore(s=>s+1);else setWrong(w=>[...w,q.topic])}
return <div className="space-y-4"><h1 className="text-2xl font-semibold">Quiz</h1>
<div className="flex flex-wrap gap-2">{['','motherboard','cpu','ram'].map(t=><button key={t} onClick={()=>reset(t)} className={`btn-o capitalize ${topic===t?'!border-brand !text-brand':''}`}>{t||'All topics'}</button>)}</div>
{fin?<div className="card"><p className="text-lg font-semibold">Score: {score}/{qs.length}</p><p className="text-sm text-slate-500">Result dashboard mein save ho gaya.</p><button className="btn mt-3" onClick={()=>reset(topic)}>Retry</button></div>
:<div className="card space-y-3"><p className="text-xs text-slate-500">Question {i+1} of {qs.length}</p><p className="font-medium">{q.q}</p>
{q.opts.map((o,n)=><button key={o} onClick={()=>choose(n)} className={`block w-full rounded-lg border px-4 py-2 text-left text-sm ${pick===null?'hover:bg-slate-50 dark:hover:bg-slate-800':n===q.ans?'border-green-600 bg-green-50 dark:bg-green-950':n===pick?'border-red-500 bg-red-50 dark:bg-red-950':''}`}>{o}</button>)}
{pick!==null&&<><p className="text-sm"><b>{pick===q.ans?'Correct. ':'Incorrect. '}</b>{q.why}</p><button className="btn" onClick={next}>{i+1<qs.length?'Next':'Finish'}</button></>}</div>}</div>}
