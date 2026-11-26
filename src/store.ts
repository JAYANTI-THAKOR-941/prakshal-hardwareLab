import {create} from 'zustand'; import {persist} from 'zustand/middleware'
export type Result={topic:string;score:number;total:number;date:string;wrong:string[]}
type S={dark:boolean;toggleDark:()=>void;done:string[];toggleDone:(id:string)=>void;marks:string[];toggleMark:(id:string)=>void;results:Result[];addResult:(r:Result)=>void}
const tg=(a:string[],id:string)=>a.includes(id)?a.filter(x=>x!==id):[...a,id]
export const useStore=create<S>()(persist((set)=>({dark:false,toggleDark:()=>set(s=>({dark:!s.dark})),done:[],toggleDone:id=>set(s=>({done:tg(s.done,id)})),marks:[],toggleMark:id=>set(s=>({marks:tg(s.marks,id)})),results:[],addResult:r=>set(s=>({results:[r,...s.results]}))}),{name:'hwlab-store'}))
