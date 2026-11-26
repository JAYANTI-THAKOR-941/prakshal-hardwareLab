import {lazy,Suspense,useEffect,useState} from 'react'
import {Routes,Route,NavLink,Link,useLocation,useNavigate} from 'react-router-dom'
import {Home as HomeI,BookOpen,Box,ClipboardCheck,LayoutDashboard,Moon,Sun,Menu,Search,ChevronRight} from 'lucide-react'
import {useStore} from './store'; import {MODULES} from './data/modules'
import Home from './pages/Home'; import Library from './pages/Library'; import ModulePage from './pages/ModulePage'; import Quiz from './pages/Quiz'; import Dashboard from './pages/Dashboard'
const Revision=lazy(()=>import('./pages/Revision'))
const Lab=lazy(()=>import('./pages/AdvancedLab'))
const nav=[['/',HomeI,'Home'],['/library',BookOpen,'Hardware Library'],['/lab',Box,'3D Lab'],['/quiz',ClipboardCheck,'Quiz'],['/revision',BookOpen,'Revision Centre'],['/dashboard',LayoutDashboard,'Dashboard']] as const
function Crumbs(){const p=useLocation().pathname.split('/').filter(Boolean);return <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-slate-500"><Link to="/">Home</Link>{p.map((s,i)=><span key={i} className="flex items-center gap-1"><ChevronRight size={12}/><span className="capitalize">{MODULES.find(m=>m.id===s)?.title??s}</span></span>)}</nav>}
function SearchBox(){const [q,setQ]=useState('');const go=useNavigate();const r=q.trim()?MODULES.filter(m=>(m.title+m.blurb+m.intro).toLowerCase().includes(q.toLowerCase())):[]
return <div className="relative w-full max-w-sm"><Search size={16} className="absolute left-3 top-2.5 text-slate-400"/><input aria-label="Search modules" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search hardware..." className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900"/>
{q.trim()&&<div className="absolute z-20 mt-1 w-full rounded-lg border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">{r.length?r.map(m=><button key={m.id} onClick={()=>{go('/library/'+m.id);setQ('')}} className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800">{m.title}</button>):<p className="px-3 py-2 text-sm text-slate-500">No results</p>}</div>}</div>}
export default function App(){const {dark,toggleDark}=useStore();const [open,setOpen]=useState(true)
useEffect(()=>{document.documentElement.classList.toggle('dark',dark)},[dark])
return <div className="flex min-h-screen">
<aside className={`sticky top-0 h-screen shrink-0 border-r border-slate-200 bg-white p-3 transition-all dark:border-slate-800 dark:bg-slate-900 ${open?'w-60':'w-16'}`}>
<Link to="/" className="mb-6 flex items-center gap-2 px-1"><img src="/logo.svg" alt="Prakshal logo" className="h-9 w-9"/>{open&&<div className="leading-tight"><div className="text-sm font-semibold text-brand">Prakshal</div><div className="text-xs">HardwareLab</div></div>}</Link>
{nav.map(([to,I,l])=><NavLink key={to} to={to} end={to==='/'} title={l} className={({isActive})=>`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive?'bg-brand text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`}><I size={18}/>{open&&l}</NavLink>)}</aside>
<div className="min-w-0 flex-1"><header className="sticky top-0 z-10 flex items-center gap-3 border-b border-slate-200 bg-paper/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
<button className="btn-o" aria-label="Toggle sidebar" onClick={()=>setOpen(!open)}><Menu size={16}/></button><SearchBox/><div className="ml-auto"><button className="btn-o" aria-label="Toggle theme" onClick={toggleDark}>{dark?<Sun size={16}/>:<Moon size={16}/>}</button></div></header>
<main className="mx-auto max-w-6xl space-y-4 p-4 md:p-6"><Crumbs/><Suspense fallback={<p className="p-8 text-sm text-slate-500">Loading 3D lab...</p>}>
<Routes><Route path="/" element={<Home/>}/><Route path="/library" element={<Library/>}/><Route path="/library/:id" element={<ModulePage/>}/><Route path="/lab" element={<Lab/>}/><Route path="/quiz" element={<Quiz/>}/><Route path="/revision" element={<Revision/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="*" element={<p>Page not found. <Link className="text-brand underline" to="/">Go home</Link></p>}/></Routes></Suspense></main></div></div>}
