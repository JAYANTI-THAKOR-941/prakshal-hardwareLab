type ArticleDetail={points:[string,string][];example:string;flow:string[];tip?:string}
export const ARTICLE_DETAILS:Record<string,ArticleDetail>={
  "1-1": {
    "points": [
      [
        "Data and information",
        "Raw marks data hain; total, average aur pass/fail meaningful information hai."
      ],
      [
        "Hardware and software",
        "Keyboard aur CPU hardware hain; calculator app software hai. Dono ek saath kaam karte hain."
      ]
    ],
    "example": "Student 45 aur 35 marks enter karta hai. Program 80 total display karta hai aur file mein save karta hai.",
    "flow": [
      "Input",
      "Process",
      "Output",
      "Storage"
    ]
  },
  "1-2": {
    "points": [
      [
        "Speed and accuracy",
        "Clock speed ek factor hai; architecture, memory aur workload bhi performance decide karte hain. Accuracy correct logic par depend karti hai."
      ],
      [
        "Automation and limitations",
        "Scheduled backup automatically chal sakta hai, par galat configuration ko machine khud zaroori nahi pehchane."
      ]
    ],
    "example": "Spreadsheet mein formula galat ho to hazaar rows ka result bhi galat ho sakta hai.",
    "flow": [
      "Data",
      "Instructions",
      "Result",
      "Verification"
    ]
  },
  "1-3": {
    "points": [
      [
        "Business and education",
        "Billing systems stock update karte hain; classroom LMS assignments aur marks manage karta hai."
      ],
      [
        "Healthcare and science",
        "Records aur analysis useful hain, lekin confidential data ke liye permissions aur backup required hain."
      ]
    ],
    "example": "Shop barcode scan karta hai, inventory update hoti hai aur bill print hota hai.",
    "flow": [
      "Scan",
      "Lookup",
      "Calculate",
      "Receipt"
    ]
  },
  "1-4": {
    "points": [
      [
        "Internal parts",
        "CPU processing, RAM working data, SSD persistent files aur motherboard interconnection provide karte hain."
      ],
      [
        "Software and users",
        "OS drivers ke through devices manage karta hai. User application ko instructions deta hai."
      ]
    ],
    "example": "Document open karne par storage se data RAM mein load hota hai aur CPU process karta hai.",
    "flow": [
      "SSD",
      "RAM",
      "CPU",
      "Display"
    ]
  },
  "1-5": {
    "points": [
      [
        "Input types",
        "Keyboard discrete key events bhejta hai; mouse movement report karta hai; microphone analog sound ko digital samples mein convert karta hai."
      ],
      [
        "Interface and driver",
        "USB ya Bluetooth communication use kar sakte hain; OS driver events application tak pahunchata hai."
      ]
    ],
    "example": "Scanner paper ke image ko digital file mein convert karta hai.",
    "flow": [
      "Physical action",
      "Sensor",
      "Driver",
      "Application"
    ]
  },
  "1-6": {
    "points": [
      [
        "Visual and audio",
        "Monitor pixels display karta hai; speakers electrical signal ko sound mein convert karte hain."
      ],
      [
        "Hard copy",
        "Printer paper par permanent output deta hai; resolution aur print technology quality affect karti hain."
      ]
    ],
    "example": "Presentation monitor par soft copy aur printer par hard copy hoti hai.",
    "flow": [
      "Application",
      "Driver",
      "Output device"
    ]
  },
  "1-7": {
    "points": [
      [
        "Instruction cycle",
        "Control unit instruction fetch aur decode karti hai; execution units operation perform karte hain."
      ],
      [
        "Registers and memory",
        "Registers immediate values hold karte hain, cache frequently accessed data ko paas rakhti hai; RAM larger working area hai."
      ]
    ],
    "example": "12 + 8 mein addition operation select hota hai, result 20 register se output tak jata hai.",
    "flow": [
      "Fetch",
      "Decode",
      "Execute",
      "Store"
    ]
  },
  "2-1": {
    "points": [
      [
        "Internal and external",
        "Internal components cabinet mein installed hote hain; peripherals external interfaces se attach hote hain."
      ],
      [
        "Compatibility",
        "Socket, memory generation, power connectors aur physical dimensions check karna essential hai."
      ]
    ],
    "example": "DDR5 RAM ko DDR4-only motherboard mein force nahi karna chahiye.",
    "flow": [
      "Power",
      "Board",
      "Components",
      "Peripherals"
    ]
  },
  "2-2": {
    "points": [
      [
        "Startup",
        "PSU stable power provide karta hai; firmware CPU aur memory initialize karke POST chalata hai."
      ],
      [
        "Operating system",
        "Bootloader kernel load karta hai; OS drivers aur services start karta hai."
      ]
    ],
    "example": "No boot device message ka matlab OS boot entry ya drive investigate karna hai, turant format nahi.",
    "flow": [
      "Power",
      "POST",
      "Bootloader",
      "OS"
    ]
  },
  "2-3": {
    "points": [
      [
        "Motherboard interfaces",
        "DIMM RAM ke liye, PCIe expansion ke liye, SATA drives ke liye aur M.2 supported modules ke liye use hota hai."
      ],
      [
        "Power and cooling",
        "ATX main power aur EPS CPU power alag hote hain. Cooler heat remove karta hai."
      ]
    ],
    "example": "NVMe SSD purchase se pehle M.2 slot ka protocol aur length support check karo.",
    "flow": [
      "CPU",
      "Motherboard",
      "Memory",
      "Storage"
    ]
  },
  "3-1": {
    "points": [
      [
        "Preparation",
        "Compatible parts aur case standoff layout manual se verify karo. ESD precautions aur disconnected power zaroori hain."
      ],
      [
        "Final inspection",
        "CPU cooler mount, RAM latch, GPU retention aur power cables check karo; loose screw remove karo."
      ]
    ],
    "example": "Motherboard test setup mein instructor ke saath POST verify karo, phir case assembly complete karo.",
    "flow": [
      "Plan",
      "Install",
      "Connect",
      "POST"
    ]
  },
  "3-2": {
    "points": [
      [
        "Safe removal",
        "Shutdown aur AC disconnect ke baad cable labels banao. Latches aur screws release karke parts edges se handle karo."
      ],
      [
        "Inventory",
        "Different screw sizes separately store karo, photos lo aur sealed PSU/UPS ko open na karo."
      ]
    ],
    "example": "RAM upgrade ke liye entire computer disassemble karne ki zarurat nahi.",
    "flow": [
      "Shutdown",
      "Label",
      "Remove",
      "Inventory"
    ]
  },
  "4-1": {
    "points": [
      [
        "Firmware settings",
        "Boot priority, detected storage aur hardware information inspect karo. Default settings board-specific hoti hain."
      ],
      [
        "Secure Boot and updates",
        "Secure Boot trusted boot signatures check karta hai. Firmware update sirf correct model aur stable power ke saath karo."
      ]
    ],
    "example": "USB installer ke liye temporary boot menu use karo; permanent boot order change optional hai.",
    "flow": [
      "Power",
      "Setup",
      "Inspect",
      "Exit"
    ]
  },
  "5-1": {
    "points": [
      [
        "Kernel and drivers",
        "Kernel memory, scheduling aur device resources manage karta hai; drivers hardware-specific interface provide karte hain."
      ],
      [
        "Files and users",
        "Filesystem files organize karta hai; user permissions access control provide karti hain."
      ]
    ],
    "example": "Browser file save karta hai to OS filesystem aur storage driver ko request deta hai.",
    "flow": [
      "Application",
      "OS",
      "Driver",
      "Hardware"
    ]
  },
  "5-2": {
    "points": [
      [
        "Image and architecture",
        "ISO installation media image hai. x64 ya ARM architecture device requirements se match karni chahiye."
      ],
      [
        "Trusted sources",
        "Vendor website, checksum aur license verify karo. Modified installers avoid karo."
      ]
    ],
    "example": "Ubuntu official ISO ka checksum compare karke corruption detect ki ja sakti hai.",
    "flow": [
      "Select",
      "Download",
      "Verify",
      "Use"
    ]
  },
  "5-3": {
    "points": [
      [
        "USB preparation",
        "Correct removable drive identify karo aur backup lo; writing process contents erase kar sakta hai."
      ],
      [
        "Firmware mode",
        "Target system ke UEFI/legacy requirements ke hisaab se tool settings choose karo."
      ]
    ],
    "example": "Disposable USB par official ISO write karke boot menu mein test karo.",
    "flow": [
      "Backup",
      "Select ISO",
      "Write",
      "Test"
    ]
  },
  "5-4": {
    "points": [
      [
        "Partition and install",
        "Target disk verify karo. Clean installation existing files remove kar sakti hai; VM mein practice karo."
      ],
      [
        "Post-install checklist",
        "Updates, drivers, activation aur network security settings verify karo."
      ]
    ],
    "example": "VM mein virtual disk select karke installation complete karo, host disk untouched rakho.",
    "flow": [
      "Boot",
      "Select disk",
      "Install",
      "Update"
    ]
  },
  "5-5": {
    "points": [
      [
        "Device identification",
        "Device Manager mein hardware IDs aur status se correct driver identify karo."
      ],
      [
        "Driver lifecycle",
        "Trusted vendor/OS update se install, reboot if needed, test aur rollback option inspect karo."
      ]
    ],
    "example": "Network adapter driver missing ho to correct model driver install karke connectivity test karo.",
    "flow": [
      "Identify",
      "Download",
      "Install",
      "Test"
    ]
  },
  "5-6": {
    "points": [
      [
        "Requirements and trust",
        "Installer publisher, storage, RAM, OS support aur license verify karo."
      ],
      [
        "Maintenance",
        "Updates apply karo; unused apps official uninstall mechanism se remove karo."
      ]
    ],
    "example": "VM mein trusted application install, launch aur uninstall test karo.",
    "flow": [
      "Verify",
      "Install",
      "Launch",
      "Update"
    ]
  },
  "5-7": {
    "points": [
      [
        "Virtual resources",
        "Hypervisor guest ko vCPU, virtual disk, RAM aur network interface provide karta hai."
      ],
      [
        "Isolation and snapshots",
        "Snapshots rollback mein useful hain, backup ka replacement nahi. Host resources reserve karo."
      ]
    ],
    "example": "Guest installation se pehle VM snapshot lo; test ke baad restore karo.",
    "flow": [
      "Host",
      "Hypervisor",
      "VM",
      "Guest OS"
    ]
  },
  "6-1": {
    "points": [
      [
        "Resolution and scaling",
        "Resolution pixels count hai; scaling UI size change karti hai. Native resolution usually sharp output deti hai."
      ],
      [
        "Refresh rate",
        "Hz per-second display updates measure karta hai. Supported mode cable aur monitor/GPU par depend karta hai."
      ]
    ],
    "example": "1920×1080 display par scaling badalne se physical pixel count nahi badalta.",
    "flow": [
      "GPU",
      "Signal",
      "Panel",
      "Image"
    ]
  },
  "6-2": {
    "points": [
      [
        "Analog and digital",
        "VGA analog hai; HDMI/DisplayPort digital hain. DVI variants aur USB-C video support device-specific hain."
      ],
      [
        "Bandwidth",
        "Higher resolution aur refresh rate ke liye compatible source, cable aur display capability chahiye."
      ]
    ],
    "example": "USB-C charging port hona video support ka proof nahi hai.",
    "flow": [
      "GPU",
      "Port",
      "Cable",
      "Monitor"
    ]
  },
  "6-3": {
    "points": [
      [
        "Settings categories",
        "Power, devices, networking, programs aur user accounts ke classic controls Windows version ke hisaab se available hain."
      ],
      [
        "Permissions",
        "System-wide changes authorized admin ke through karo; original configuration note rakho."
      ]
    ],
    "example": "Power Options mein sleep timeout inspect karo bina policy change kiye.",
    "flow": [
      "Search",
      "Open category",
      "Inspect",
      "Verify"
    ]
  },
  "7-1": {
    "points": [
      [
        "Inkjet and laser",
        "Inkjet droplets deposit karta hai; laser electrostatic image, toner aur fuser use karta hai."
      ],
      [
        "Thermal and impact",
        "Thermal media heat-sensitive ho sakta hai; dot matrix ribbon par pins impact karti hain."
      ]
    ],
    "example": "Receipt printer aur office laser printer ki consumables compare karo.",
    "flow": [
      "Page data",
      "Imaging",
      "Transfer",
      "Output"
    ]
  },
  "7-2": {
    "points": [
      [
        "Connection methods",
        "USB direct link hai; network printer Ethernet ya Wi-Fi se accessible hota hai."
      ],
      [
        "Driver and queue",
        "Compatible driver ya supported IPP setup ke baad queue status aur default paper size verify karo."
      ]
    ],
    "example": "Test page se connectivity aur print formatting dono check karo.",
    "flow": [
      "Connect",
      "Add printer",
      "Configure",
      "Test"
    ]
  },
  "7-3": {
    "points": [
      [
        "Local vs network",
        "Host-shared printer host availability aur permissions par depend karta hai; network printer directly reachable hota hai."
      ],
      [
        "Access control",
        "Authorized private network par appropriate users ko permission do, public sharing avoid karo."
      ]
    ],
    "example": "Client PC se lab printer add karke test page submit karo.",
    "flow": [
      "Host or printer",
      "LAN",
      "Client",
      "Queue"
    ]
  },
  "7-4": {
    "points": [
      [
        "Consumables",
        "Toner/ink level aur supported media check karo. Paper jams manufacturer procedure se clear karo."
      ],
      [
        "Maintenance safety",
        "Hot fuser aur moving parts se bachne ke liye device cool-down aur safe shutdown instructions follow karo."
      ]
    ],
    "example": "Inkjet utility mein nozzle check pattern print karke print quality assess karo.",
    "flow": [
      "Inspect",
      "Safe shutdown",
      "Maintain",
      "Test"
    ]
  },
  "8-1": {
    "points": [
      [
        "Wireless basics",
        "SSID network name hai; radio channels aur interference throughput affect karte hain."
      ],
      [
        "Authentication",
        "WPA2-AES/WPA3 compatible secure setup aur strong credentials use karo."
      ]
    ],
    "example": "Lab Wi-Fi se connected client ka signal aur IP configuration compare karo.",
    "flow": [
      "Scan",
      "Authenticate",
      "Associate",
      "DHCP"
    ]
  },
  "8-2": {
    "points": [
      [
        "Wi-Fi standards",
        "802.11n/ac/ax standards different capabilities support karte hain; exact band support product-specific hai."
      ],
      [
        "Devices",
        "AP wireless access provide karta hai; home router routing, switching aur AP combine kar sakta hai."
      ]
    ],
    "example": "Client aur router common supported band par connect hote hain.",
    "flow": [
      "Client",
      "Access point",
      "LAN",
      "Router"
    ]
  },
  "8-3": {
    "points": [
      [
        "Adapter setup",
        "Driver compatibility aur enabled radio verify karo; authorized SSID choose karo."
      ],
      [
        "Connection diagnosis",
        "IP address, subnet, gateway aur DNS inspect karo. Link hona Internet guarantee nahi hai."
      ]
    ],
    "example": "ipconfig /all se adapter details check karke gateway ping test karo.",
    "flow": [
      "Driver",
      "Connect",
      "IP address",
      "Test"
    ]
  },
  "9-1": {
    "points": [
      [
        "Malware categories",
        "Virus host files infect kar sakta hai; worms spread kar sakte hain; ransomware access block ya encrypt kar sakta hai."
      ],
      [
        "Layered prevention",
        "Updates, least privilege, trusted downloads aur backups antivirus ke saath use karo."
      ]
    ],
    "example": "Suspicious attachment open na karo; authorized security team ko report karo.",
    "flow": [
      "Prevent",
      "Detect",
      "Isolate",
      "Recover"
    ]
  },
  "9-2": {
    "points": [
      [
        "Detection methods",
        "Signatures known patterns detect karti hain; heuristics aur behavior monitoring suspicious actions identify karte hain."
      ],
      [
        "Product selection",
        "OS compatibility, update frequency, license aur organizational policy evaluate karo."
      ]
    ],
    "example": "Built-in security dashboard mein protection status aur last scan dekho.",
    "flow": [
      "File",
      "Scan engine",
      "Detection",
      "Action"
    ]
  },
  "9-3": {
    "points": [
      [
        "Trusted installation",
        "Official publisher se obtain karo aur existing security tools compatibility check karo."
      ],
      [
        "Scan and response",
        "Definitions update karo, protection verify karo, scan results policy ke according handle karo."
      ]
    ],
    "example": "Safe lab VM mein quick scan run karke report review karo.",
    "flow": [
      "Verify",
      "Install",
      "Update",
      "Scan"
    ]
  },
  "10-1": {
    "points": [
      [
        "Systematic diagnosis",
        "Symptoms collect karo aur recent changes note karo. Probable causes ko safe tests se isolate karo."
      ],
      [
        "Verification",
        "Solution ke baad full functionality retest karo aur changes document karo."
      ]
    ],
    "example": "No display case mein monitor input se start karo, phir power-disconnected hardware inspection.",
    "flow": [
      "Observe",
      "Hypothesis",
      "Test",
      "Verify"
    ]
  },
  "11-1": {
    "points": [
      [
        "Nodes and links",
        "Nodes devices hain; wired/wireless links data transfer karte hain; protocols rules define karte hain."
      ],
      [
        "Resource sharing",
        "Network files, printers aur services access allow karta hai with permissions."
      ]
    ],
    "example": "Two lab PCs switch se connect karke local communication diagram banao.",
    "flow": [
      "PC",
      "NIC",
      "Switch",
      "PC"
    ]
  },
  "11-2": {
    "points": [
      [
        "Coverage categories",
        "PAN personal devices, LAN local site, MAN metropolitan region aur WAN dispersed networks ko describe karte hain."
      ],
      [
        "Scope and ownership",
        "Network size aur administration use case ke according vary karte hain."
      ]
    ],
    "example": "Classroom LAN aur branch-office WAN compare karo.",
    "flow": [
      "PAN",
      "LAN",
      "MAN",
      "WAN"
    ]
  },
  "11-3": {
    "points": [
      [
        "Wired and wireless",
        "Wired Ethernet cable use karta hai; wireless RF signals use karta hai."
      ],
      [
        "Client-server vs peer-to-peer",
        "Central server services provide karta hai; peers directly share kar sakte hain."
      ]
    ],
    "example": "Browser web server se content request karta hai, local peer file share directly ho sakta hai.",
    "flow": [
      "Client",
      "Network",
      "Server",
      "Response"
    ]
  },
  "11-4": {
    "points": [
      [
        "Layered communication",
        "Application protocols service rules, TCP/UDP transport, IP addressing aur link layer local delivery handle karte hain."
      ],
      [
        "TCP and UDP",
        "TCP reliable ordered stream deta hai; UDP datagrams mein delivery guarantee built-in nahi hoti."
      ]
    ],
    "example": "DNS lookup ke baad browser destination se connection establish karta hai.",
    "flow": [
      "Application",
      "Transport",
      "IP",
      "Link"
    ]
  },
  "11-5": {
    "points": [
      [
        "Copper and fiber",
        "Copper twisted-pair electrical signals carry karta hai; fiber light use karta hai."
      ],
      [
        "Termination",
        "T568A/B wire mapping verify karo; straight-through mein same scheme dono ends par use hoti hai."
      ]
    ],
    "example": "Cable tester se continuity aur incorrect pair mapping detect karo.",
    "flow": [
      "Cable",
      "Connector",
      "Tester",
      "Result"
    ]
  },
  "11-6": {
    "points": [
      [
        "Physical arrangement",
        "Star central switch, bus shared backbone, ring loop aur mesh multiple paths use karte hain."
      ],
      [
        "Failure impact",
        "Star switch failure attached nodes affect karta hai; mesh alternate path design-dependent hota hai."
      ]
    ],
    "example": "Lab star topology draw karo aur central device identify karo.",
    "flow": [
      "PC 1",
      "Switch",
      "PC 2"
    ]
  },
  "11-7": {
    "points": [
      [
        "Switch and router",
        "Switch MAC-based Ethernet forwarding karta hai; router IP networks connect karta hai."
      ],
      [
        "AP and firewall",
        "Access point Wi-Fi connectivity deta hai; firewall configured traffic rules enforce karta hai."
      ]
    ],
    "example": "Home router mein AP aur Ethernet switch integrated ho sakte hain.",
    "flow": [
      "Client",
      "Switch or AP",
      "Router",
      "Internet"
    ]
  },
  "11-8": {
    "points": [
      [
        "Address and prefix",
        "IPv4 address 32 bits hai. Prefix /24 first 24 bits network portion define karta hai."
      ],
      [
        "Gateway and DNS",
        "Gateway off-network traffic route karta hai; DNS names resolve karta hai. Same subnet mein local delivery ke liye gateway required nahi."
      ]
    ],
    "example": "192.168.10.10/24 aur 192.168.10.11/24 same isolated LAN mein test karo.",
    "flow": [
      "IP address",
      "Subnet",
      "Gateway",
      "DNS"
    ]
  }
}
