export type Mod={id:string;title:string;blurb:string;intro:string;working:string;specs:[string,string][];identify:string[];maintain:string[];trouble:{p:string;s:string}[];important:string[];practical:string[]}
export const MODULES:Mod[]=[
{id:'motherboard',title:'Motherboard',blurb:'Computer ka main circuit board jo sabhi components ko jodta hai.',
intro:'Motherboard (mainboard) ek multilayer PCB hai jis par CPU, RAM, storage, GPU aur baaki devices connect hote hain. Ye data aur power dono ka rasta hai. Form factors: ATX (305x244 mm), Micro-ATX (244x244 mm), Mini-ITX (170x170 mm).',
working:'Power SMPS se 24-pin connector ke through aata hai. VRM CPU ke liye voltage convert karta hai. CPU buses/PCIe lanes ke through chipset aur RAM se baat karta hai. Power on par BIOS/UEFI POST chalata hai, hardware check karta hai aur phir bootloader ko control deta hai.',
specs:[['Form factor','ATX / mATX / Mini-ITX'],['Socket','LGA1700, AM4, AM5 etc.'],['RAM','DDR4 / DDR5, 2-4 slots'],['Expansion','PCIe x16, x4, x1'],['Storage','SATA III, M.2 NVMe'],['Power','24-pin ATX + 4/8-pin EPS']],
identify:['CPU socket: bada square, metal retention arm','RAM slots: lambe, dono side clips','PCIe slots: lambe, x16 sabse bada','Chipset: heatsink ke neeche','CMOS battery: silver coin cell','Rear I/O: USB, LAN, audio, display ports'],
maintain:['Power off karke cable nikalo, anti-static strap pehno','Compressed air ya soft brush se dust saaf karo','Standoffs sahi jagah lagao taaki board short na ho','BIOS update sirf zarurat par aur stable power mein karo'],
trouble:[{p:'PC on nahi hota',s:'24-pin aur 8-pin CPU power, front panel POWER SW header aur SMPS switch check karo.'},{p:'Power hai par display nahi',s:'RAM reseat karo, monitor cable GPU port mein lagao, CMOS clear karo.'},{p:'Date/time reset ho jata hai',s:'CMOS battery (CR2032) badlo.'},{p:'Random restarts',s:'Overheating, bulged capacitors ya weak SMPS check karo.'}],
important:['Motherboard kya hai? Uske main components likho.','ATX, mATX aur Mini-ITX ka difference batao.','Chipset ka function samjhao.','VRM kya karta hai?','CMOS battery ka kaam likho.'],
practical:['Diagram par 10 components label karo.','Motherboard manual se RAM population order dhundho.','Front panel headers (PWR, RST, HDD LED) ko sahi pin par lagane ki practice karo.']},
{id:'cpu',title:'CPU (Processor)',blurb:'Computer ka dimaag jo instructions execute karta hai.',
intro:'CPU (Central Processing Unit) program instructions ko fetch, decode aur execute karta hai. Isme cores, cache (L1/L2/L3), ALU, control unit aur registers hote hain.',
working:'Fetch-Decode-Execute cycle: CPU RAM se instruction laata hai, control unit use decode karta hai, ALU execute karta hai aur result register ya memory mein store hota hai. Clock speed (GHz) batati hai ki cycle kitni tezi se chalti hai; zyada cores parallel kaam karte hain.',
specs:[['Cores/Threads','e.g. 6C/12T'],['Base/Boost clock','e.g. 3.5/4.8 GHz'],['Cache','L1, L2, L3 (MB)'],['TDP','65W / 125W'],['Socket','LGA1700 / AM5'],['Process','Intel 7, TSMC 5nm etc.']],
identify:['Chauras (square) chip, metal IHS (heat spreader)','Ek corner par triangle marker','Intel LGA: neeche contact pads; AMD AM4: neeche pins'],
maintain:['Thermal paste matar ke daane jitni lagao','Cooler ko cross pattern mein tight karo','CPU temperature HWMonitor se dekho (idle 30-45C)'],
trouble:[{p:'High temperature / throttling',s:'Cooler seating, thermal paste aur fan speed check karo.'},{p:'No POST after CPU change',s:'BIOS version CPU support karta hai? Update karo.'},{p:'Bent pins (AM4)',s:'Soft tip se dhire seedha karo, ya service centre jao.'}],
important:['CPU ke parts likho.','Fetch-decode-execute cycle samjhao.','Core aur thread mein kya antar hai?','Cache memory kya hai?','TDP ka matlab batao.'],
practical:['Task Manager mein cores/threads dekho.','Thermal paste lagane ki sahi vidhi likho.','Do CPUs ke specs compare karo.']},
{id:'ram',title:'RAM',blurb:'Fast temporary memory jisme chalte programs ka data rehta hai.',
intro:'RAM (Random Access Memory) volatile memory hai: power off hote hi data mit jata hai. CPU ke liye active programs aur data yahin rakhe jaate hain. Types: DDR3, DDR4, DDR5 (desktop DIMM, laptop SO-DIMM).',
working:'CPU memory controller ke through RAM cells ko address karta hai. DRAM cells capacitor mein charge ke roop mein bits store karte hain aur unhe baar-baar refresh karna padta hai. Dual-channel mode mein bandwidth double ho jati hai.',
specs:[['Type','DDR4 / DDR5'],['Capacity','8 / 16 / 32 GB'],['Speed','3200 / 5600 MT/s'],['Voltage','DDR4 1.2V, DDR5 1.1V'],['Pins','288 (DIMM), 260/262 (SO-DIMM)'],['Latency','CL16, CL36 etc.']],
identify:['Label par DDR generation aur speed likhi hoti hai','Notch ki position generation batati hai','Gold contacts neeche'],
maintain:['Sirf edges se pakdo','Dono clips click hone tak dabao','Mismatched speed avoid karo','MemTest86 se test karo'],
trouble:[{p:'Long beeps / no display',s:'RAM nikalkar reseat karo, ek stick ek slot mein test karo.'},{p:'Blue screen (memory errors)',s:'MemTest86 chalao, faulty stick badlo.'},{p:'Sirf aadhi RAM dikh rahi hai',s:'Slots mein properly baitha hai? BIOS update aur 32/64-bit OS check karo.'}],
important:['RAM aur ROM mein difference likho.','DDR4 aur DDR5 compare karo.','Dual channel kya hai?','Volatile memory ka matlab batao.'],
practical:['Task Manager mein RAM speed/slots dekho.','Ek PC mein RAM install karke POST check karo.']}]

MODULES.push(...[
  {
    "id": "storage",
    "title": "Storage Devices",
    "blurb": "Permanent data storage",
    "intro": "HDD magnetic platters par data store karta hai; SSD NAND flash use karta hai. SATA aur NVMe interfaces alag hain.",
    "working": "Controller logical blocks ko physical media se map karta hai. SSD wear leveling aur garbage collection use karta hai.",
    "specs": [
      [
        "SATA",
        "6 Gbps interface"
      ],
      [
        "NVMe",
        "PCIe protocol"
      ],
      [
        "Form factor",
        "2.5-inch, 3.5-inch, M.2"
      ]
    ],
    "identify": [
      "SATA data/power connectors",
      "M.2 edge connector and mounting screw",
      "HDD sealed chassis"
    ],
    "maintain": [
      "Backup regularly",
      "Check SMART health",
      "Never open a sealed HDD"
    ],
    "trouble": [
      {
        "p": "Drive not detected",
        "s": "Power off; check cable, slot compatibility and firmware detection. If failing, prioritize backup."
      }
    ],
    "important": [
      "Compare HDD and SSD."
    ],
    "practical": [
      "Identify storage interface and check health using a read-only diagnostic tool."
    ]
  },
  {
    "id": "power",
    "title": "SMPS & Power Supply",
    "blurb": "AC to DC power conversion",
    "intro": "SMPS mains AC ko regulated DC rails mein convert karta hai. Wattage ke saath connector support aur quality bhi important hai.",
    "working": "Switching circuitry aur feedback regulation stable outputs provide karte hain.",
    "specs": [
      [
        "ATX main",
        "24-pin"
      ],
      [
        "CPU",
        "EPS 4/8-pin"
      ],
      [
        "Drive",
        "SATA power"
      ]
    ],
    "identify": [
      "Wattage label",
      "IEC inlet",
      "ATX and EPS cables"
    ],
    "maintain": [
      "Never open PSU",
      "Use only compatible modular cables",
      "Disconnect mains before servicing PC"
    ],
    "trouble": [
      {
        "p": "PC does not power on",
        "s": "Check external socket, power cord, rear switch and motherboard connections with power disconnected."
      }
    ],
    "important": [
      "Explain SMPS and its connectors."
    ],
    "practical": [
      "Identify connectors on a disconnected PSU without opening its enclosure."
    ]
  },
  {
    "id": "gpu",
    "title": "Graphics Cards",
    "blurb": "Graphics processing and display",
    "intro": "GPU parallel processing se images, video aur compute workloads handle karta hai. Discrete cards mein dedicated VRAM hoti hai.",
    "working": "GPU commands process karta hai, memory se assets read karta hai aur display engine output generate karta hai.",
    "specs": [
      [
        "Interface",
        "PCIe"
      ],
      [
        "Memory",
        "GDDR (varies)"
      ],
      [
        "Outputs",
        "HDMI / DisplayPort"
      ]
    ],
    "identify": [
      "PCIe edge",
      "Fans and heatsink",
      "Display connectors"
    ],
    "maintain": [
      "Disconnect power before reseating",
      "Support heavy cards",
      "Keep airflow clear"
    ],
    "trouble": [
      {
        "p": "No display after GPU installation",
        "s": "Check monitor input, GPU seating and required power connectors; consult vendor manual."
      }
    ],
    "important": [
      "Integrated vs discrete GPU?"
    ],
    "practical": [
      "Identify GPU ports and view adapter details in Device Manager."
    ]
  },
  {
    "id": "cooling",
    "title": "Cooling Systems",
    "blurb": "Heat transfer and airflow",
    "intro": "CPU aur GPU operation mein heat generate karte hain. Cooler thermal paste, heatsink, fan ya liquid loop se heat remove karta hai.",
    "working": "Conduction heat ko heatsink tak transfer karti hai; airflow convection se heat surroundings mein release karta hai.",
    "specs": [
      [
        "Fan",
        "PWM or DC"
      ],
      [
        "Cooler",
        "Air / AIO"
      ],
      [
        "Monitoring",
        "Temperature and RPM"
      ]
    ],
    "identify": [
      "Heat pipes",
      "Fan blades",
      "Radiator"
    ],
    "maintain": [
      "Keep filters clean",
      "Follow paste and mounting instructions",
      "Do not run CPU without cooler"
    ],
    "trouble": [
      {
        "p": "High CPU temperature",
        "s": "Stop heavy workload; check fan RPM, dust, mounting and thermal paste per vendor guidance."
      }
    ],
    "important": [
      "Why is thermal paste used?"
    ],
    "practical": [
      "Observe idle and moderate workload temperatures; compare with vendor limits."
    ]
  },
  {
    "id": "firmware",
    "title": "BIOS & UEFI",
    "blurb": "Firmware and startup",
    "intro": "BIOS/UEFI platform firmware hai jo startup par hardware initialize karta hai. UEFI boot entries aur security features support kar sakta hai.",
    "working": "POST ke baad firmware configured boot entry se OS bootloader start karta hai.",
    "specs": [
      [
        "Storage",
        "Nonvolatile flash"
      ],
      [
        "Boot",
        "UEFI / legacy"
      ],
      [
        "Security",
        "Secure Boot / TPM support varies"
      ]
    ],
    "identify": [
      "Firmware setup screen",
      "Boot menu",
      "Board firmware chip"
    ],
    "maintain": [
      "Do not change unknown settings",
      "Record original settings",
      "Use exact vendor firmware"
    ],
    "trouble": [
      {
        "p": "Boot device not found",
        "s": "Check whether drive appears in firmware and whether boot entry matches installed OS; avoid deleting data."
      }
    ],
    "important": [
      "What is POST?"
    ],
    "practical": [
      "Inspect boot order in a lab PC without saving changes."
    ]
  },
  {
    "id": "networking",
    "title": "Basic Networking",
    "blurb": "Network devices and addressing",
    "intro": "Network data exchange enable karta hai. NIC local connectivity, switch LAN forwarding aur router networks ke beech forwarding provide karta hai.",
    "working": "Ethernet frames MAC addresses use karte hain; IP packets routing ke liye IP addresses use karte hain.",
    "specs": [
      [
        "Ethernet",
        "Copper or fiber"
      ],
      [
        "IPv4",
        "32-bit address"
      ],
      [
        "Services",
        "DHCP / DNS"
      ]
    ],
    "identify": [
      "RJ45 port",
      "Link LEDs",
      "Router WAN and LAN ports"
    ],
    "maintain": [
      "Label cables",
      "Keep firmware updated",
      "Use authorized lab networks"
    ],
    "trouble": [
      {
        "p": "No network connection",
        "s": "Check link LEDs, cable, adapter status, IP configuration and gateway reachability."
      }
    ],
    "important": [
      "Switch vs router?"
    ],
    "practical": [
      "Connect two lab PCs and inspect IP configuration and ping."
    ]
  },
  {
    "id": "peripherals",
    "title": "Peripheral Devices",
    "blurb": "Input, output and backup power",
    "intro": "Keyboard aur mouse input devices hain; monitor aur printer output devices hain. Scanner documents digitize karta hai aur UPS temporary backup power provide karta hai.",
    "working": "USB, display links aur device drivers peripherals ko operating system se connect karte hain.",
    "specs": [
      [
        "Display",
        "Resolution and refresh rate"
      ],
      [
        "Printer",
        "Inkjet / laser"
      ],
      [
        "Scanner",
        "Optical resolution"
      ]
    ],
    "identify": [
      "USB connector",
      "HDMI port",
      "Printer paper tray"
    ],
    "maintain": [
      "Use correct adapters",
      "Keep vents clear",
      "Follow printer and UPS safety instructions"
    ],
    "trouble": [
      {
        "p": "Printer offline",
        "s": "Verify power, cable/network, selected printer and queue; print a test page."
      }
    ],
    "important": [
      "What is a UPS?"
    ],
    "practical": [
      "Identify input/output devices and print a test page."
    ]
  },
  {
    "id": "laptop",
    "title": "Laptop Hardware",
    "blurb": "Portable computer components",
    "intro": "Laptop compact motherboard, battery, display, cooling, memory aur storage integrate karta hai. Kuch components soldered ho sakte hain.",
    "working": "Adapter power management circuitry ko supply deta hai; battery mobile operation enable karti hai.",
    "specs": [
      [
        "Memory",
        "SO-DIMM or soldered"
      ],
      [
        "Storage",
        "M.2 or SATA"
      ],
      [
        "Power",
        "Vendor-rated adapter"
      ]
    ],
    "identify": [
      "Battery connector",
      "Display ribbon",
      "Cooling assembly"
    ],
    "maintain": [
      "Disconnect battery per service manual",
      "Do not puncture or compress battery",
      "Use correct charger"
    ],
    "trouble": [
      {
        "p": "Laptop not charging",
        "s": "Check approved adapter, cable, socket and battery diagnostics; swollen battery requires qualified service."
      }
    ],
    "important": [
      "Desktop vs laptop hardware?"
    ],
    "practical": [
      "Identify laptop specifications without disassembly."
    ]
  },
  {
    "id": "os",
    "title": "OS Installation & Drivers",
    "blurb": "Boot media, partitions and drivers",
    "intro": "Operating system hardware resources manage karta hai. Installation ke liye compatible boot media aur target disk chahiye.",
    "working": "Firmware installer boot karta hai; installer selected disk par OS files configure karta hai; drivers devices enable karte hain.",
    "specs": [
      [
        "Partition",
        "GPT / MBR"
      ],
      [
        "Boot media",
        "USB"
      ],
      [
        "Windows tool",
        "Device Manager"
      ]
    ],
    "identify": [
      "Boot menu",
      "Disk selection screen",
      "Driver status"
    ],
    "maintain": [
      "Back up before partition changes",
      "Use official installation media",
      "Verify target disk"
    ],
    "trouble": [
      {
        "p": "Device driver missing",
        "s": "Identify hardware ID and install compatible driver from vendor or OS update."
      }
    ],
    "important": [
      "Explain GPT and MBR."
    ],
    "practical": [
      "Install an OS in a disposable virtual machine."
    ]
  },
  {
    "id": "safety",
    "title": "Hardware Safety & Diagnostics",
    "blurb": "Safe troubleshooting workflow",
    "intro": "ESD aur electrical risks se components damage ho sakte hain. Systematic diagnosis symptoms se start hota hai aur one change at a time test karta hai.",
    "working": "Record symptoms, isolate power, inspect, test known-good compatible components and document outcome.",
    "specs": [
      [
        "ESD",
        "Antistatic precautions"
      ],
      [
        "Diagnostics",
        "POST / SMART / memory test"
      ],
      [
        "Method",
        "Observe, test, verify"
      ]
    ],
    "identify": [
      "Antistatic mat",
      "Diagnostic LEDs",
      "Cable labels"
    ],
    "maintain": [
      "Disconnect power before internal work",
      "Never open PSU or UPS",
      "Protect data before repairs"
    ],
    "trouble": [
      {
        "p": "Intermittent restart",
        "s": "Record event logs, check temperatures and power connections, then test memory and storage safely."
      }
    ],
    "important": [
      "Why use ESD precautions?"
    ],
    "practical": [
      "Prepare a diagnostic checklist for a no-display case."
    ]
  }
])
export const MODEL_ANSWERS:Record<string,{q:string;a:string}[]>={
  "storage": [
    {
      "q": "Compare HDD and SSD.",
      "a": "HDD mein moving parts hote hain; SSD flash based hai, generally lower latency aur shock resistance deta hai."
    }
  ],
  "power": [
    {
      "q": "Explain SMPS and its connectors.",
      "a": "SMPS regulated DC deta hai; ATX main board, EPS CPU aur SATA power drives ke liye hote hain."
    }
  ],
  "gpu": [
    {
      "q": "Integrated vs discrete GPU?",
      "a": "Integrated GPU normally system RAM share karta hai; discrete GPU separate card aur often dedicated VRAM use karta hai."
    }
  ],
  "cooling": [
    {
      "q": "Why is thermal paste used?",
      "a": "Microscopic air gaps fill karke thermal contact improve karta hai."
    }
  ],
  "firmware": [
    {
      "q": "What is POST?",
      "a": "Power-on self-test startup hardware checks ka process hai."
    }
  ],
  "networking": [
    {
      "q": "Switch vs router?",
      "a": "Switch LAN frames forward karta hai; router different IP networks ke beech packets forward karta hai."
    }
  ],
  "peripherals": [
    {
      "q": "What is a UPS?",
      "a": "UPS outage ke dauran limited backup power provide karta hai."
    }
  ],
  "laptop": [
    {
      "q": "Desktop vs laptop hardware?",
      "a": "Laptop compact aur power-efficient design use karta hai, upgradeability model dependent hoti hai."
    }
  ],
  "os": [
    {
      "q": "Explain GPT and MBR.",
      "a": "Dono disk partition schemes hain; GPT modern UEFI systems mein generally preferred hai."
    }
  ],
  "safety": [
    {
      "q": "Why use ESD precautions?",
      "a": "Static discharge sensitive electronic circuits damage kar sakta hai."
    }
  ]
}
