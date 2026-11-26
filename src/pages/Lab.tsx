import {useEffect,useRef,useState} from 'react'
import {Canvas,useFrame,useThree} from '@react-three/fiber'; import {OrbitControls,Environment,Lightformer,ContactShadows} from '@react-three/drei'
import * as THREE from 'three'; import {Maximize,Eye,Layers} from 'lucide-react'; import {BOARD,type Part} from '../data/hardware'
type Goal={pos:THREE.Vector3;target:THREE.Vector3}
const VIEWS:Record<string,[number,number,number]>={Iso:[0,3.4,3.6],Top:[0,5.2,0.01],Front:[0,0.9,5],Back:[0,0.9,-5],Side:[5,0.9,0]}
function Rig({goal}:{goal:Goal|null}){const {camera,controls}=useThree() as any;const on=useRef(false);useEffect(()=>{on.current=!!goal},[goal])
useFrame(()=>{if(!goal||!on.current||!controls)return;camera.position.lerp(goal.pos,0.08);controls.target.lerp(goal.target,0.08);controls.update();if(camera.position.distanceTo(goal.pos)<0.01)on.current=false});return null}
function PartMesh({p,sel,dim,xray,pick}:{p:Part;sel:boolean;dim:boolean;xray:boolean;pick:(id:string)=>void}){const [h,setH]=useState(false)
return <>{(p.repeat??[[0,0,0]]).map((o,i)=><mesh key={i} castShadow position={[p.pos[0]+o[0],0.04+p.size[1]/2+o[1],p.pos[1]+o[2]]} onClick={e=>{e.stopPropagation();pick(p.id)}} onPointerOver={e=>{e.stopPropagation();setH(true);document.body.style.cursor='pointer'}} onPointerOut={()=>{setH(false);document.body.style.cursor=''}}>
{p.shape==='cyl'?<cylinderGeometry args={[p.size[0]/2,p.size[0]/2,p.size[1],32]}/>:<boxGeometry args={p.size}/>}
<meshStandardMaterial color={p.color} metalness={p.metal??0.2} roughness={p.rough??0.55} transparent={dim||xray} opacity={dim?0.12:xray?0.45:1} emissive={sel||h?'#8CC63F':'#000'} emissiveIntensity={sel?0.7:h?0.35:0}/></mesh>)}</>}
function Trace({points,color='#176d45'}:{points:[number,number][];color?:string}){return <>{points.slice(0,-1).map(([x,z],i)=>{const [nx,nz]=points[i+1];const dx=nx-x,dz=nz-z;return <mesh key={i} position={[(x+nx)/2,0.044,(z+nz)/2]} rotation-y={-Math.atan2(dz,dx)}><boxGeometry args={[Math.hypot(dx,dz),0.003,0.009]}/><meshStandardMaterial color={color} roughness={0.65}/></mesh>})}</>}
function BoardDetails(){const holes=[[-1.32,-1.32],[1.32,-1.32],[-1.32,1.32],[1.32,1.32],[-1.32,0],[1.32,0],[0,-1.32],[0,1.32]];const slots=[0.4,1.1]
return <group>
<Trace points={[[-1.22,-1.2],[-1.02,-1.2],[-0.86,-1.04],[-0.86,-0.94]]}/><Trace points={[[-0.7,-0.25],[-0.56,-0.1],[-0.48,0.08],[-0.33,0.15]]}/>
<Trace points={[[0.12,-0.42],[0.34,-0.42],[0.44,-0.5]]}/><Trace points={[[0.1,-0.34],[0.25,-0.12],[0.44,0.05]]}/>
<Trace points={[[0.08,0.18],[0.16,0.38],[0.26,0.55],[0.28,0.72]]}/><Trace points={[[0.04,0.2],[-0.08,0.42],[-0.12,0.8]]}/>
<Trace points={[[0.5,0.12],[0.78,0.12],[1.08,0.34],[1.16,0.55]]}/><Trace points={[[0.45,0.64],[0.73,0.72],[0.96,0.9]]}/>
{holes.map(([x,z],i)=><group key={i} position={[x,0.045,z]}><mesh rotation-x={Math.PI/2}><torusGeometry args={[0.042,0.008,8,24]}/><meshStandardMaterial color="#a6b0a7" metalness={0.7} roughness={0.35}/></mesh><mesh position={[0,-0.004,0]}><cylinderGeometry args={[0.025,0.025,0.003,20]}/><meshStandardMaterial color="#07130e" roughness={0.8}/></mesh></group>)}
{[[-0.72,-0.94],[-0.9,-0.14],[0.18,-0.82],[0.36,-0.22],[0.4,0.18],[0.66,0.48],[0.88,0.68],[1.12,-0.05],[-0.08,0.95],[-0.82,1.12]].map(([x,z],i)=><mesh key={`via-${i}`} position={[x,0.047,z]}><cylinderGeometry args={[0.018,0.018,0.006,12]}/><meshStandardMaterial color="#c5a45e" metalness={0.8} roughness={0.3}/></mesh>)}
{/* Socket retention frame and exposed contact field */}
{[[-0.25,-0.91,0.8,0.035],[-0.25,-0.09,0.8,0.035],[-0.66,-0.5,0.035,0.8],[0.16,-0.5,0.035,0.8]].map(([x,z,sx,sz],i)=><mesh key={`socket-frame-${i}`} position={[x,0.146,z]}><boxGeometry args={[sx,0.018,sz]}/><meshStandardMaterial color="#d1d5db" metalness={0.78} roughness={0.28}/></mesh>)}
{Array.from({length:64},(_,i)=><mesh key={`contact-${i}`} position={[-0.52+(i%8)*0.065,0.148,-0.77+Math.floor(i/8)*0.065]}><cylinderGeometry args={[0.009,0.009,0.004,8]}/><meshStandardMaterial color="#c6a45a" metalness={0.85} roughness={0.25}/></mesh>)}
<mesh position={[0.2,0.15,-0.48]} rotation-z={-0.18}><boxGeometry args={[0.035,0.024,0.58]}/><meshStandardMaterial color="#aeb4bb" metalness={0.8} roughness={0.3}/></mesh>
{/* VRM heatsink fins */}
{Array.from({length:9},(_,i)=><mesh key={`vrm-fin-${i}`} position={[-1.13,0.16,-1.02+i*0.13]}><boxGeometry args={[0.24,0.16,0.025]}/><meshStandardMaterial color="#737b83" metalness={0.72} roughness={0.32}/></mesh>)}
{/* DIMM latches and PCIe contact fingers */}
{Array.from({length:4},(_,i)=>[-1,1].map((end,j)=><mesh key={`dimm-clip-${i}-${j}`} position={[0.55+i*0.14,0.13,-0.5+end*0.75]}><boxGeometry args={[0.12,0.1,0.08]}/><meshStandardMaterial color="#aeb4bb" metalness={0.55} roughness={0.38}/></mesh>))}
{slots.map((z,s)=><group key={`pcie-row-${s}`}>{Array.from({length:28},(_,i)=><mesh key={`pcie-contact-${s}-${i}`} position={[-1.18+i*0.044,0.163,z]}><boxGeometry args={[0.021,0.006,0.018]}/><meshStandardMaterial color="#c6a45a" metalness={0.85} roughness={0.25}/></mesh>)}</group>)}
{/* Rear I/O port housings */}
{Array.from({length:9},(_,i)=><group key={`io-${i}`} position={[-1.05+i*0.25,0.12,-1.39]}>
<mesh><boxGeometry args={[0.19,0.16,0.12]}/><meshStandardMaterial color={i===2||i===3?'#2563a6':'#aab0b5'} metalness={0.68} roughness={0.32}/></mesh>
<mesh position={[0,0,-0.063]}><boxGeometry args={[0.12,0.075,0.006]}/><meshStandardMaterial color="#111827" metalness={0.35} roughness={0.45}/></mesh>
</group>)}
{/* M.2 screw and chipset heatsink detailing */}
<mesh position={[-0.05,0.11,0.15]}><cylinderGeometry args={[0.025,0.025,0.025,16]}/><meshStandardMaterial color="#c5c9cc" metalness={0.85} roughness={0.25}/></mesh>
{Array.from({length:5},(_,i)=><mesh key={`pch-rib-${i}`} position={[0.53+i*0.07,0.12,0.85]}><boxGeometry args={[0.018,0.025,0.34]}/><meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.35}/></mesh>)}
{/* SATA sockets */}
{Array.from({length:4},(_,i)=><mesh key={`sata-port-${i}`} position={[1.2,0.14,0.62+i*0.12]}><boxGeometry args={[0.31,0.14,0.1]}/><meshStandardMaterial color="#202833" metalness={0.3} roughness={0.55}/></mesh>)}
</group>}
export default function Lab(){const [sel,setSel]=useState<string|null>(null);const [iso,setIso]=useState(false);const [xray,setXray]=useState(false);const [goal,setGoal]=useState<Goal|null>(null);const box=useRef<HTMLDivElement>(null)
const part=BOARD.find(p=>p.id===sel)
const view=(v:string)=>setGoal({pos:new THREE.Vector3(...VIEWS[v]),target:new THREE.Vector3(0,0,0)})
const pick=(id:string)=>{setSel(id);const p=BOARD.find(x=>x.id===id)!;const t=new THREE.Vector3(p.pos[0],0.1,p.pos[1]);setGoal({pos:t.clone().add(new THREE.Vector3(0.7,1.1,1.3)),target:t})}
return <div className="space-y-3"><div className="flex flex-wrap items-center gap-2"><h1 className="mr-auto text-2xl font-semibold">3D Motherboard Explorer</h1>
{Object.keys(VIEWS).map(v=><button key={v} className="btn-o" onClick={()=>view(v)}>{v}</button>)}
<button className={`btn-o ${iso?'!border-brand':''}`} onClick={()=>setIso(!iso)}><Eye size={16}/>Isolate</button><button className={`btn-o ${xray?'!border-brand':''}`} onClick={()=>setXray(!xray)}><Layers size={16}/>Transparent</button>
<button className="btn-o" aria-label="Fullscreen" onClick={()=>box.current?.requestFullscreen?.()}><Maximize size={16}/></button></div>
<p className="text-xs text-slate-500">Educational replica: procedurally modelled ATX board with PBR materials. It is not a scan of a specific retail product.</p>
<div className="grid gap-4 lg:grid-cols-[1fr_320px]"><div ref={box} className="h-[520px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
<Canvas shadows camera={{position:VIEWS.Iso,fov:40}} onPointerMissed={()=>setSel(null)}>
<ambientLight intensity={0.35}/><directionalLight castShadow position={[3,5,3]} intensity={1.6} shadow-mapSize={[1024,1024]}/>
<Environment resolution={256}><Lightformer form="rect" intensity={3} position={[0,5,2]} scale={[8,4,1]} rotation-x={Math.PI/2}/><Lightformer form="rect" intensity={1.5} position={[-5,2,0]} scale={[6,3,1]} rotation-y={Math.PI/2}/></Environment>
<mesh receiveShadow castShadow position={[0,0,0]}><boxGeometry args={[3,0.08,3]}/><meshStandardMaterial color="#0b442e" roughness={0.48} metalness={0.14} transparent={xray} opacity={xray?0.6:1}/></mesh>
<BoardDetails/>
{BOARD.map(p=><PartMesh key={p.id} p={p} sel={sel===p.id} dim={iso&&!!sel&&sel!==p.id} xray={xray} pick={pick}/>)}
<ContactShadows position={[0,-0.05,0]} opacity={0.4} blur={2.5} scale={8}/><OrbitControls makeDefault enableDamping minDistance={1} maxDistance={9} onStart={()=>setGoal(null)}/><Rig goal={goal}/></Canvas></div>
<aside className="card space-y-3 text-sm"><h2 className="font-semibold text-brand">{part?part.name:'Components'}</h2>
{part?<><p>{part.what}</p><p><b>Specs:</b> {part.spec}</p><p><b>Troubleshooting:</b> {part.fault}</p></>:<p className="text-slate-500">3D model par click karo ya list se component chuno.</p>}
<div className="flex flex-wrap gap-1.5">{BOARD.map(p=><button key={p.id} onClick={()=>pick(p.id)} className={`rounded-full border px-2.5 py-1 text-xs ${sel===p.id?'border-brand bg-brand text-white':'border-slate-300 dark:border-slate-700'}`}>{p.name}</button>)}</div></aside></div></div>}
