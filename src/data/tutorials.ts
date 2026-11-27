export type TutorialTopic={id:string;title:string;theory:string;working:string;practical:string;question:string;answer:string}
export type TutorialChapter={id:number;title:string;topics:TutorialTopic[]}
export const TUTORIALS:TutorialChapter[]=[
  {
    "id": 1,
    "title": "Fundamentals of Computer",
    "topics": [
      {
        "id": "1-1",
        "title": "What is Computer?",
        "theory": "Computer ek programmable electronic device hai jo input leta hai, instructions ke according data process karta hai, result output karta hai aur zarurat par data store karta hai. Hardware physical parts hain; software instructions ka collection hai. Data raw facts hain, information processed meaningful result hai.",
        "working": "Input → Processing → Output → Storage. Keyboard se marks enter karna input hai, CPU se total calculate hona processing hai aur screen par result output hai.",
        "practical": "School result system mein 5 marks enter karke total aur average nikalo.",
        "question": "Computer ko programmable device kyun kehte hain?",
        "answer": "Kyunki software instructions badal kar wahi machine alag kaam kar sakti hai."
      },
      {
        "id": "1-2",
        "title": "Characteristics of Computer",
        "theory": "Speed, accuracy, automation, storage, consistency aur versatility computer ki main characteristics hain. Accuracy correct input aur program par depend karti hai; wrong input se wrong result mil sakta hai (GIGO). Computer khud se human judgement nahi rakhta.",
        "working": "CPU instructions quickly execute karta hai; storage data retain karta hai; automation repeat tasks ko simplify karta hai.",
        "practical": "Calculator se 20 numbers ka sum verify karo aur manual calculation compare karo.",
        "question": "GIGO ka meaning?",
        "answer": "Garbage In, Garbage Out: galat input ya logic se galat output."
      },
      {
        "id": "1-3",
        "title": "Basic Application of Computer",
        "theory": "Education mein LMS aur exams, banking mein transactions, hospitals mein records, business mein inventory, science mein analysis aur communication mein email/video calls use hote hain. Har application mein data privacy aur access control important hai.",
        "working": "Application software user ke specific kaam ko perform karta hai; system software hardware manage karta hai.",
        "practical": "School, hospital aur shop ke liye ek-ek input, processing aur output example likho.",
        "question": "Computer ka business use example?",
        "answer": "Inventory aur billing system."
      },
      {
        "id": "1-4",
        "title": "Components of Computer Systems",
        "theory": "Computer system mein hardware, software, data, users aur procedures hote hain. Hardware mein motherboard, CPU, RAM, storage, power supply aur peripherals aate hain. CPU processing karta hai, RAM temporary working data rakhti hai aur SSD/HDD permanent storage deta hai.",
        "working": "Motherboard components connect karta hai; power supply regulated DC power provide karti hai; OS hardware resources manage karta hai.",
        "practical": "3D Lab mein motherboard, CPU, RAM aur storage identify karo.",
        "question": "RAM aur SSD mein difference?",
        "answer": "RAM volatile working memory hai; SSD nonvolatile storage hai."
      },
      {
        "id": "1-5",
        "title": "Input Devices",
        "theory": "Input device user ya environment se data computer ko bhejta hai. Keyboard text, mouse pointer, scanner documents, microphone sound, webcam video aur barcode reader coded data capture karte hain.",
        "working": "Sensor ya switches physical action ko electrical/digital signal mein convert karte hain; driver OS ko input events deta hai.",
        "practical": "Notepad mein keyboard test karo, mouse pointer settings dekho aur scanner available ho to test scan karo.",
        "question": "Touchscreen input device hai?",
        "answer": "Haan; touch input leta hai aur display output bhi deta hai."
      },
      {
        "id": "1-6",
        "title": "Output Devices",
        "theory": "Output devices processed information ko user tak pahunchate hain. Monitor soft copy, printer hard copy, speakers audio aur projector large-screen visuals provide karte hain.",
        "working": "GPU display signal generate karta hai; printer driver page data ko printer-compatible instructions mein convert karta hai.",
        "practical": "Display aur printer settings identify karo; ek document ka print preview dekho.",
        "question": "Soft copy aur hard copy?",
        "answer": "Screen/file digital soft copy hai; printed paper hard copy hai."
      },
      {
        "id": "1-7",
        "title": "Process",
        "theory": "Processing ka matlab instructions ke according data par calculation, comparison, sorting ya transformation karna hai. CPU ka control unit instruction decode karta hai, ALU arithmetic/logical operations karta hai aur registers immediate data hold karte hain.",
        "working": "Fetch → Decode → Execute; result register, memory ya output tak jata hai.",
        "practical": "Calculator mein 12 + 8 enter karo aur input/process/output stages diagram mein likho.",
        "question": "ALU ka function?",
        "answer": "Arithmetic aur logical operations."
      }
    ]
  },
  {
    "id": 2,
    "title": "Introduction of Hardware Parts",
    "topics": [
      {
        "id": "2-1",
        "title": "Introduction of Hardware Parts (Introduction)",
        "theory": "Hardware computer ke physical components hain. Internal parts motherboard, CPU, RAM, storage, GPU, cooler, SMPS; external parts monitor, keyboard, mouse aur printer hain. Form factor aur interface compatibility zaroori hai.",
        "working": "Motherboard buses aur connectors ke through data exchange hota hai; PSU power distribute karta hai.",
        "practical": "3D Lab se 10 parts identify karke name aur function note karo.",
        "question": "Hardware aur software?",
        "answer": "Hardware physical hai; software executable instructions hai."
      },
      {
        "id": "2-2",
        "title": "How Computer Works",
        "theory": "Power button motherboard ko startup signal deta hai; PSU stable power supply karta hai. Firmware POST karke CPU, memory aur essential devices initialize karta hai. Bootloader OS start karta hai; OS applications ko hardware access deta hai.",
        "working": "Power → firmware/POST → bootloader → OS → application. CPU instructions execute karta hai; RAM active data aur storage persistent data rakhta hai.",
        "practical": "PC start hote waqt logo, boot screen aur login sequence observe karo.",
        "question": "POST ka purpose?",
        "answer": "Startup hardware initialization aur basic checks."
      },
      {
        "id": "2-3",
        "title": "Hardware Parts",
        "theory": "Motherboard par CPU socket, DIMM slots, PCIe expansion, SATA/M.2, chipset, power headers aur rear I/O hote hain. CPU socket match hona chahiye; RAM generation compatible ho; storage protocol slot support kare; cooler aur PSU build requirements ke according hon.",
        "working": "CPU memory controller RAM se communicate karta hai; PCIe expansion cards aur NVMe connect kar sakta hai; SATA drives separate data/power cables use karte hain.",
        "practical": "Powered-off lab PC ya 3D model mein connectors identify karo; PSU enclosure kabhi open mat karo.",
        "question": "M.2 aur NVMe same hain?",
        "answer": "Nahi. M.2 form factor hai; NVMe storage protocol hai."
      }
    ]
  },
  {
    "id": 3,
    "title": "Assembling of Computer",
    "topics": [
      {
        "id": "3-1",
        "title": "Assembling of Computer",
        "theory": "Assembly se pehle compatible CPU, board, RAM, case, cooler, PSU aur storage select karo. Work surface dry aur antistatic ho. Power cable disconnect rakho. Manufacturer manual ke according CPU alignment, RAM slot selection aur mounting check karo.",
        "working": "1. CPU socket align karo. 2. Thermal material/cooler fit karo. 3. RAM aur M.2 install karo. 4. Case standoffs verify karo. 5. Board, PSU aur drives mount karo. 6. ATX/EPS, front panel, fans aur storage cables connect karo. 7. GPU fit karo. 8. Final inspection ke baad POST test karo.",
        "practical": "Instructor supervision mein spare PC ya Games Zone PC Build Challenge complete karo; real hardware par force mat lagao.",
        "question": "Standoff kyun chahiye?",
        "answer": "PCB ko cabinet se short hone se bachata hai."
      },
      {
        "id": "3-2",
        "title": "Disassembling of Computer",
        "theory": "Disassembly diagnosis, cleaning ya upgrade ke liye hoti hai. Data backup, shutdown, AC disconnect aur manufacturer safety procedure follow karo. Cable photos aur labels maintain karo; screws alag containers mein rakho.",
        "working": "External cables remove karo; case panel kholo; GPU power/latch release karo; storage aur RAM remove karo; cooler/CPU sirf zarurat par manual ke according remove karo; PSU ko sealed unit ke roop mein remove karo.",
        "practical": "Instructor ke saath powered-off spare system ka component inventory banao; PSU ya UPS enclosure open na karo.",
        "question": "Cable labeling ka benefit?",
        "answer": "Reassembly errors kam hote hain."
      }
    ]
  },
  {
    "id": 4,
    "title": "BIOS Settings",
    "topics": [
      {
        "id": "4-1",
        "title": "BIOS Setup & Configuration",
        "theory": "BIOS/UEFI motherboard firmware hai. Startup par hardware initialize karta hai, POST karta hai aur boot entry choose karta hai. Setup key model-specific hoti hai (often Del/F2). Boot order, date/time, storage detection, fan status aur virtualization options dekhe ja sakte hain.",
        "working": "Restart → vendor setup key → information tab → boot settings inspect → required authorized changes → save/exit. Unknown voltage settings change na karo; firmware update exact model aur stable power ke saath hi.",
        "practical": "Lab PC/VM mein BIOS screen identify karo, boot order note karo aur bina unnecessary changes exit karo.",
        "question": "UEFI ka role?",
        "answer": "Hardware initialize karke OS bootloader start karna."
      }
    ]
  },
  {
    "id": 5,
    "title": "Installation of Operating System",
    "topics": [
      {
        "id": "5-1",
        "title": "What is Operating System?",
        "theory": "Operating system (OS) system software hai jo CPU, memory, files, storage, devices, users aur applications manage karta hai. Windows, Linux, macOS examples hain. Kernel resources manage karta hai; UI user interaction provide karti hai.",
        "working": "Application system calls ke through OS se resources request karti hai; drivers hardware communication handle karte hain.",
        "practical": "Task Manager ya Linux system monitor mein CPU/RAM usage observe karo.",
        "question": "Kernel kya hai?",
        "answer": "OS ka core jo system resources manage karta hai."
      },
      {
        "id": "5-2",
        "title": "Download ISO Image & Platforms",
        "theory": "ISO disk image file hai jisme installation media ka content hota hai. OS image official vendor/distribution website se download karo. Edition, architecture, system requirements aur license verify karo. Available official checksum/signature compare karo.",
        "working": "Download → file integrity verify → bootable USB ya VM attach. Unofficial modified images malware risk badhati hain.",
        "practical": "Official Microsoft Windows ya Ubuntu download page identify karo; image size aur architecture note karo.",
        "question": "Checksum kyun verify karte hain?",
        "answer": "Download integrity confirm karne ke liye."
      },
      {
        "id": "5-3",
        "title": "How to Create Bootable Pendrive",
        "theory": "Bootable USB firmware se startup karne layak installation media hai. Rufus, official Media Creation Tool ya distribution-recommended tool use ho sakta hai. USB ka data backup karo; creation process drive erase kar sakta hai.",
        "working": "Correct USB select karo → trusted ISO choose karo → target firmware ke compatible partition scheme select karo → write/verify → boot menu se test karo.",
        "practical": "Empty lab USB par instructor ke saath create karo; target drive capacity confirm karo.",
        "question": "GPT kab use hota hai?",
        "answer": "Modern UEFI Windows installation mein normally GPT use hota hai."
      },
      {
        "id": "5-4",
        "title": "Installation of Operating System",
        "theory": "OS install se pehle backup, hardware compatibility, license aur recovery plan check karo. Clean installation partition delete kar sakti hai. Production PC ke bajay disposable VM mein practice safe hai.",
        "working": "Installer boot → language/keyboard → edition/license → target virtual disk verify → partition/install → restart → user setup → updates → drivers → validation.",
        "practical": "Virtual machine mein Windows ya Linux install karo; host disk ko select mat karo.",
        "question": "Clean installation se kya risk hai?",
        "answer": "Target disk ka existing data erase ho sakta hai."
      },
      {
        "id": "5-5",
        "title": "Installation of Drivers",
        "theory": "Driver OS aur hardware ke beech software interface hai. Chipset, graphics, audio, network aur printer drivers vendor/model/OS architecture ke compatible hone chahiye.",
        "working": "Device Manager mein status dekho → vendor/OS update se driver obtain karo → install → restart if required → device test. Unknown driver pack avoid karo.",
        "practical": "Device Manager mein network adapter aur graphics driver version note karo.",
        "question": "Yellow warning icon kya indicate kar sakta hai?",
        "answer": "Device configuration, driver ya hardware problem."
      },
      {
        "id": "5-6",
        "title": "Installation of Softwares",
        "theory": "Application software specific tasks perform karta hai. Install se pehle publisher, requirements, license aur download source check karo. Unwanted bundled apps aur pirated installers avoid karo.",
        "working": "Official installer run → requested permissions review → install options choose → finish → launch/test → updates configure. Uninstall OS settings se karo.",
        "practical": "Trusted free application ko VM mein install aur uninstall karo.",
        "question": "Admin permission kab deni chahiye?",
        "answer": "Sirf trusted software ko jab necessary ho."
      },
      {
        "id": "5-7",
        "title": "Using Virtualization",
        "theory": "Virtualization ek physical host par isolated guest operating systems run karne ki technology hai. Hypervisor virtual CPU, RAM, disk aur NIC allocate karta hai. VM snapshots rollback mein useful hain, lekin independent backup nahi hain.",
        "working": "Hypervisor install → guest profile create → resources allocate → ISO attach → install → snapshot. Host ke liye sufficient memory/storage reserve karo.",
        "practical": "Disposable VM create karo, OS ISO attach karo aur snapshot/restore practice karo.",
        "question": "Host aur guest difference?",
        "answer": "Host physical system hai; guest VM mein running OS hai."
      }
    ]
  },
  {
    "id": 6,
    "title": "Display & Control Panel Settings",
    "topics": [
      {
        "id": "6-1",
        "title": "Understanding Display Types and Settings",
        "theory": "LCD, LED-backlit LCD aur OLED common display technologies hain. Resolution pixels ki count hai; refresh rate Hz mein updates per second; brightness, scaling aur orientation viewing experience affect karte hain.",
        "working": "GPU display signal send karta hai; OS supported modes detect karta hai. Native resolution generally sharp output deti hai.",
        "practical": "Settings > System > Display mein resolution, scale aur refresh rate observe karo; unsupported changes avoid karo.",
        "question": "Refresh rate kya measure karta hai?",
        "answer": "Display updates per second."
      },
      {
        "id": "6-2",
        "title": "Understanding Video Standards and Technology",
        "theory": "VGA analog video, DVI variants digital/analog video, HDMI digital video/audio aur DisplayPort digital display interface hain. USB-C connector video tabhi support karta hai jab device appropriate alternate mode ya protocol support kare.",
        "working": "Source GPU signal → compatible cable/adapter → monitor input. Resolution aur refresh rate bandwidth, device aur cable capability par depend karte hain.",
        "practical": "Lab monitor aur PC ke ports identify karo aur correct input select karo.",
        "question": "HDMI audio carry karta hai?",
        "answer": "Haan, compatible devices par digital audio aur video."
      },
      {
        "id": "6-3",
        "title": "Control Panel Settings",
        "theory": "Windows Control Panel classic configuration interface hai; modern Windows mein Settings app bhi use hoti hai. Devices and Printers, Programs, Network, Power Options aur User Accounts common areas hain; availability version-dependent hai.",
        "working": "Search se Control Panel open karo → category ya icon view choose karo → settings inspect karo. System-wide settings ke liye authorization chahiye.",
        "practical": "Power Options, installed programs aur printer list inspect karo; policy changes na karo.",
        "question": "Control Panel ka purpose?",
        "answer": "System configuration aur administration."
      }
    ]
  },
  {
    "id": 7,
    "title": "Installing and Configuring Printers",
    "topics": [
      {
        "id": "7-1",
        "title": "Understanding Print Technologies and Imaging Processes",
        "theory": "Inkjet liquid ink droplets use karta hai; laser printer toner, drum aur fuser process use karta hai; thermal printer heat-sensitive media ya ribbon use kar sakta hai; dot matrix impact pins/ribbon use karta hai.",
        "working": "Laser imaging: charging → exposure → developing → transfer → fusing → cleaning. Inkjet nozzles controlled ink droplets paper par deposit karte hain.",
        "practical": "Printer type, cartridge/toner label aur supported paper sizes identify karo.",
        "question": "Laser printer toner kya hai?",
        "answer": "Powder-based printing material."
      },
      {
        "id": "7-2",
        "title": "Installing and Configuring Printers",
        "theory": "Printer USB, Ethernet ya Wi-Fi se connect ho sakta hai. Driver/IPP support, correct paper size, duplex aur print quality settings verify karo.",
        "working": "Printer power on → connect → OS printer settings → add device → compatible driver → test page. Network printer ke liye authorized network aur address confirm karo.",
        "practical": "Lab printer add karke test page print karo.",
        "question": "Test page kyun?",
        "answer": "Driver aur connection verify karne ke liye."
      },
      {
        "id": "7-3",
        "title": "Installing and Sharing Local and Network Printers",
        "theory": "Local printer directly computer se connected hota hai; network printer apni network connectivity se accessible hota hai. Shared local printer host PC aur permissions par depend karta hai.",
        "working": "Authorized private lab network mein host sharing enable karo → printer properties sharing → appropriate permissions → client se add printer → test print.",
        "practical": "Instructor ke authorized LAN mein shared printer add karo; public network par broad sharing avoid karo.",
        "question": "Network printer aur shared local printer difference?",
        "answer": "Network printer directly network par; shared local printer host PC ke through accessible."
      },
      {
        "id": "7-4",
        "title": "Performing Printer Maintenance",
        "theory": "Paper jams, low consumables, clogged inkjet nozzles aur dirty rollers common issues hain. Model-specific cleaning instructions follow karo; laser fuser hot ho sakta hai.",
        "working": "Print queue check → paper path inspect after safe shutdown → approved cleaning/maintenance cycle → consumables check → test page. Force se jammed paper mat kheecho.",
        "practical": "Printer status page aur maintenance utility inspect karo.",
        "question": "Fuser safety?",
        "answer": "Hot surface se burn risk; vendor cooling procedure follow karo."
      }
    ]
  },
  {
    "id": 8,
    "title": "Wireless and SOHO Network",
    "topics": [
      {
        "id": "8-1",
        "title": "Understanding Wireless Networking",
        "theory": "Wireless LAN radio signals se devices connect karta hai. Access point Wi-Fi clients ko LAN access deta hai; SOHO small office/home office network hai. SSID network name hai; channels, interference aur signal strength performance affect karte hain.",
        "working": "Client SSID scan karta hai → authentication/association → DHCP se IP configuration → local/Internet traffic. WPA2-AES ya WPA3 support ke according use karo.",
        "practical": "Authorized Wi-Fi par signal strength aur connection properties observe karo.",
        "question": "SSID kya hai?",
        "answer": "Wireless network ka name."
      },
      {
        "id": "8-2",
        "title": "802.11 Devices",
        "theory": "IEEE 802.11 Wi-Fi standards ka family hai. Common generations 802.11n/ac/ax hain; newer standards aur supported bands device-dependent hain. AP, wireless router, client NIC aur repeater wireless infrastructure parts hain.",
        "working": "Compatible AP/client common band aur supported mode negotiate karte hain; walls/interference real throughput affect karte hain.",
        "practical": "Router aur client adapter ki supported Wi-Fi modes note karo.",
        "question": "Advertised link speed aur actual speed same?",
        "answer": "Nahi; overhead, signal aur interference actual throughput affect karte hain."
      },
      {
        "id": "8-3",
        "title": "Configuring a Wireless NIC",
        "theory": "Wireless NIC Wi-Fi connectivity provide karta hai. USB/PCIe/internal adapters ho sakte hain. Compatible driver, enabled radio aur network credentials required hain.",
        "working": "Driver status verify → Wi-Fi enable → authorized SSID select → correct password → IP configuration verify → gateway connectivity test.",
        "practical": "Lab Wi-Fi connect karo, Windows ipconfig se IPv4/gateway dekho.",
        "question": "Wi-Fi connected but no Internet?",
        "answer": "IP, gateway, DNS aur upstream connection systematically check karo."
      }
    ]
  },
  {
    "id": 9,
    "title": "Virus and Antivirus",
    "topics": [
      {
        "id": "9-1",
        "title": "Introduction",
        "theory": "Malware harmful software ka broad term hai. Virus files/programs infect kar sakta hai; worm self-propagate kar sakta hai; trojan legitimate-looking software mein disguise ho sakta hai; ransomware access encrypt/block kar sakta hai. Prevention layered honi chahiye.",
        "working": "Trusted downloads, updates, least privilege, backups aur security scanning risk reduce karte hain. Suspicious system ko network se isolate karke authorized support lo.",
        "practical": "Safe lab VM mein security status aur update status check karo; live malware use na karo.",
        "question": "Virus aur malware difference?",
        "answer": "Virus malware ka ek type hai."
      },
      {
        "id": "9-2",
        "title": "List of Antivirus Software",
        "theory": "Examples: Microsoft Defender Antivirus, Bitdefender, ESET, Avast aur Malwarebytes security products. Features aur licensing edition-dependent hain. Multiple real-time engines conflict kar sakte hain; organization policy follow karo.",
        "working": "Signatures, heuristics aur behavior monitoring suspicious activity detect kar sakte hain. Detection guaranteed nahi hoti.",
        "practical": "Installed security product ka status, update aur scan options inspect karo.",
        "question": "Antivirus ke saath backup kyun?",
        "answer": "Antivirus har threat stop nahi karta; backups recovery support karte hain."
      },
      {
        "id": "9-3",
        "title": "Download and Installation",
        "theory": "Antivirus official publisher ya trusted OS security interface se obtain karo. License, OS compatibility aur existing security software check karo. Fake security alerts par software download mat karo.",
        "working": "Trusted installer verify → authorized install → definitions update → real-time protection check → initial scan → review results. Quarantine decisions policy ke according lo.",
        "practical": "VM mein built-in security protection aur quick scan verify karo.",
        "question": "Definitions update ka purpose?",
        "answer": "New known threats ki detection improve karna."
      }
    ]
  },
  {
    "id": 10,
    "title": "Troubleshooting",
    "topics": [
      {
        "id": "10-1",
        "title": "Troubleshooting",
        "theory": "Troubleshooting systematic process hai: problem identify karo, probable cause establish karo, safe test plan banao, solution implement karo, full functionality verify karo aur document karo. Data backup aur authorization first priority hain.",
        "working": "No power: external supply/cable check. No display: monitor input/cable then RAM/GPU safely inspect. Slow PC: resource usage/storage health. No network: link, IP, gateway, DNS. Ek time par ek change karo.",
        "practical": "Games Zone Repair Technician complete karo; symptom, hypothesis, test, result aur next action ka report banao.",
        "question": "One change at a time kyun?",
        "answer": "Cause isolate karne aur changes reverse karne mein help milti hai."
      }
    ]
  },
  {
    "id": 11,
    "title": "Networking",
    "topics": [
      {
        "id": "11-1",
        "title": "Introduction of Network",
        "theory": "Network connected devices ka system hai jo data aur resources share karta hai. Nodes, links, protocols aur services basic elements hain. Example: lab PCs switch se connected hain aur router Internet access provide karta hai.",
        "working": "Sender data packets/frames create karta hai; network interfaces links par transfer karte hain; destination protocol data interpret karta hai.",
        "practical": "Lab network ka simple diagram banao.",
        "question": "Network ka benefit?",
        "answer": "Communication aur resource sharing."
      },
      {
        "id": "11-2",
        "title": "Network Categories",
        "theory": "Geographic coverage ke basis par PAN personal area, LAN local area, MAN metropolitan area aur WAN wide area categories hain. Coverage practical design par depend karti hai.",
        "working": "Bluetooth accessories PAN, classroom Ethernet LAN aur branch-office connections WAN examples hain.",
        "practical": "Apne lab, Bluetooth headset aur multiple branches ko category assign karo.",
        "question": "LAN aur WAN difference?",
        "answer": "LAN limited local area; WAN larger geographic networks connect karta hai."
      },
      {
        "id": "11-3",
        "title": "Types of Network",
        "theory": "Wired network physical cables use karta hai; wireless radio communication. Peer-to-peer mein devices resources directly share kar sakte hain; client-server mein centralized server services deta hai. Ye classification coverage categories se alag hai.",
        "working": "Client request server ko bhejta hai, server response return karta hai; peer-to-peer peers direct service share kar sakte hain.",
        "practical": "Client-server aur peer-to-peer ka comparison diagram banao.",
        "question": "Client-server example?",
        "answer": "Browser web server se page request karta hai."
      },
      {
        "id": "11-4",
        "title": "Introduction to TCP / IP Networks",
        "theory": "TCP/IP protocol suite network communication ka foundation hai. IP addressing/routing handle karta hai; TCP reliable ordered byte stream deta hai; UDP connectionless datagrams deta hai; DNS names resolve aur DHCP configuration provide karta hai.",
        "working": "Application data transport layer segment/datagram mein; IP packet mein; link layer frame mein encapsulate hota hai. Receiver reverse process karta hai.",
        "practical": "Authorized network par ipconfig aur ping use karo; DNS resolution observe karo.",
        "question": "TCP vs UDP?",
        "answer": "TCP reliability/order provide karta hai; UDP lower-overhead datagrams without built-in delivery guarantee."
      },
      {
        "id": "11-5",
        "title": "Network Cables",
        "theory": "Twisted-pair Ethernet cables (Cat5e/Cat6 etc.) copper pairs use karte hain; fiber optic light signals use karta hai; coaxial cable kuch specific applications mein use hota hai. Copper Ethernet mein 8P8C connector commonly RJ45 kaha jata hai.",
        "working": "Correct cable category, length, termination aur device port verify karo. T568A/B termination schemes hain; straight-through cable mein dono ends same scheme hote hain.",
        "practical": "Instructor supervision mein patch cable tester se wire map verify karo.",
        "question": "Fiber ka advantage?",
        "answer": "Long-distance/high-bandwidth links aur electrical interference resistance."
      },
      {
        "id": "11-6",
        "title": "Network Topologies",
        "theory": "Topology devices aur links ki arrangement hai. Star mein central switch, bus mein shared backbone, ring mein loop aur mesh mein multiple paths hote hain. Physical aur logical topology different ho sakti hain.",
        "working": "Modern Ethernet LAN commonly physical star topology use karta hai. Central switch fail hone par attached devices connectivity lose kar sakte hain.",
        "practical": "Star, bus, ring aur mesh ke labeled diagrams draw karo.",
        "question": "Star topology mein central device?",
        "answer": "Typically switch."
      },
      {
        "id": "11-7",
        "title": "Network Components",
        "theory": "NIC device ko network se connect karta hai; switch Ethernet frames forward karta hai; router IP networks connect karta hai; AP wireless access deta hai; modem/ONT access technology interface provide karta hai. Firewall traffic policy enforce karta hai.",
        "working": "PC → NIC → switch/AP → router → upstream network. Device roles overlap ho sakte hain, jaise home router mein switch aur AP integrated hote hain.",
        "practical": "Lab router, switch, NIC aur cables identify karo.",
        "question": "Switch aur router difference?",
        "answer": "Switch local frames forward karta hai; router IP networks ke beech packets route karta hai."
      },
      {
        "id": "11-8",
        "title": "IP Address & Configuration",
        "theory": "IPv4 32-bit address hota hai, dotted decimal notation mein. Subnet mask/prefix network portion define karta hai; default gateway external networks tak route deta hai; DNS names resolve karta hai. Static IP manually set hota hai, DHCP automatically allocate karta hai.",
        "working": "Isolated lab example: PC1 192.168.10.10/24, PC2 192.168.10.11/24, same switch. Gateway tabhi required hai jab off-subnet traffic chahiye. Address conflict avoid karo.",
        "practical": "Windows ipconfig /all se current settings note karo. Authorized isolated lab mein unique static IP set karo, peer ping test karo aur original configuration restore karo.",
        "question": "Same /24 mein 192.168.10.10 aur .11 communicate kar sakte hain?",
        "answer": "Haan, compatible local link aur firewall policy ke saath; gateway local communication ke liye zaroori nahi."
      }
    ]
  }
]
