export type Q={id:string;topic:string;q:string;opts:string[];ans:number;why:string}
const q=(id:string,topic:string,qq:string,opts:string[],ans:number,why:string):Q=>({id,topic,q:qq,opts,ans,why})
export const QUESTIONS:Q[]=[
q('m1','motherboard','Which component supplies regulated low voltage to the CPU?',['Chipset','VRM','BIOS chip','CMOS battery'],1,'VRM 12V ko CPU voltage (~1.0-1.4V) mein convert karta hai.'),
q('m2','motherboard','Standard power connector from SMPS to motherboard has how many pins?',['12','20','24','40'],2,'ATX main connector 24-pin (20+4) hota hai.'),
q('m3','motherboard','CMOS battery type commonly used is:',['AA','CR2032','9V','CR123A'],1,'CR2032 3V coin cell RTC aur BIOS settings ko save rakhta hai.'),
q('m4','motherboard','Which form factor is the smallest?',['ATX','Micro-ATX','Mini-ITX','E-ATX'],2,'Mini-ITX 170x170 mm hota hai.'),
q('m5','motherboard','The BIOS/UEFI firmware is stored in:',['RAM','SPI flash chip','HDD','CPU cache'],1,'Firmware non-volatile SPI flash mein hota hai.'),
q('m6','motherboard','Date/time resets after every power off. Most likely cause?',['Bad RAM','Dead CMOS battery','Loose SATA cable','GPU fault'],1,'CMOS battery weak hone par RTC reset hota hai.'),
q('c1','cpu','What does the "T" in TDP stand for?',['Time','Thermal','Transfer','Total'],1,'Thermal Design Power: cooler ko kitni heat handle karni hai.'),
q('c2','cpu','Order of CPU instruction cycle:',['Execute-Fetch-Decode','Fetch-Decode-Execute','Decode-Fetch-Execute','Fetch-Execute-Decode'],1,'Fetch, phir Decode, phir Execute.'),
q('c3','cpu','Which cache level is fastest and smallest?',['L1','L2','L3','L4'],0,'L1 sabse fast aur sabse chhota hai, core ke paas.'),
q('c4','cpu','AM5 socket belongs to:',['Intel','AMD','Nvidia','ARM'],1,'AM5 AMD Ryzen 7000+ ka LGA socket hai.'),
q('r1','ram','RAM is which type of memory?',['Non-volatile','Volatile','Optical','Magnetic'],1,'Power off hone par RAM ka data mit jata hai.'),
q('r2','ram','Laptops commonly use which RAM form factor?',['DIMM','SO-DIMM','SIMM','RIMM'],1,'Laptop mein chhota SO-DIMM use hota hai.'),
q('r3','ram','Why do DDR4 and DDR5 not fit in each other\'s slot?',['Different voltage only','Different notch position','Different colour','Different brand'],1,'Notch alag jagah hota hai taaki galat insertion na ho.'),
q('r4','ram','Dual-channel memory mainly improves:',['Capacity','Bandwidth','Storage','Graphics clock'],1,'Do channels se memory bandwidth double hoti hai.')]

QUESTIONS.push(...[
  {
    "id": "ext1",
    "topic": "motherboard",
    "q": "Which connector powers the CPU VRM?",
    "opts": [
      "EPS 4/8-pin",
      "SATA data",
      "USB header",
      "HD audio"
    ],
    "ans": 0,
    "why": "EPS supplies CPU power."
  },
  {
    "id": "ext2",
    "topic": "motherboard",
    "q": "What prevents the PCB contacting the cabinet?",
    "opts": [
      "DIMM clips",
      "Heat pipes",
      "Fan blades",
      "Standoffs"
    ],
    "ans": 3,
    "why": "Standoffs maintain clearance."
  },
  {
    "id": "ext3",
    "topic": "motherboard",
    "q": "Which slot typically holds a discrete GPU?",
    "opts": [
      "SATA",
      "USB header",
      "PCIe x16",
      "DIMM"
    ],
    "ans": 2,
    "why": "PCIe x16 is the usual GPU interface."
  },
  {
    "id": "ext4",
    "topic": "motherboard",
    "q": "What is POST?",
    "opts": [
      "Primary operating system table",
      "Power-on self-test",
      "Peripheral online storage transfer",
      "Power output signal test"
    ],
    "ans": 1,
    "why": "Firmware checks hardware before boot."
  },
  {
    "id": "ext5",
    "topic": "cpu",
    "q": "Which unit performs arithmetic and logic?",
    "opts": [
      "ALU",
      "RTC",
      "NIC",
      "PSU"
    ],
    "ans": 0,
    "why": "ALU performs arithmetic and logic operations."
  },
  {
    "id": "ext6",
    "topic": "cpu",
    "q": "What reduces heat transfer resistance between CPU and cooler?",
    "opts": [
      "Electrical tape",
      "SATA cable",
      "CMOS battery",
      "Thermal paste"
    ],
    "ans": 3,
    "why": "Paste fills microscopic air gaps."
  },
  {
    "id": "ext7",
    "topic": "cpu",
    "q": "What happens during thermal throttling?",
    "opts": [
      "Socket changes",
      "Disk is formatted",
      "Clock speed decreases",
      "RAM capacity doubles"
    ],
    "ans": 2,
    "why": "CPU reduces performance to manage temperature."
  },
  {
    "id": "ext8",
    "topic": "cpu",
    "q": "Which specification must match motherboard compatibility?",
    "opts": [
      "Keyboard layout",
      "Socket and firmware support",
      "Monitor size",
      "Disk capacity"
    ],
    "ans": 1,
    "why": "Socket and firmware determine CPU support."
  },
  {
    "id": "ext9",
    "topic": "ram",
    "q": "Which memory technology requires periodic refresh?",
    "opts": [
      "DRAM",
      "NAND flash",
      "ROM",
      "Magnetic disk"
    ],
    "ans": 0,
    "why": "DRAM stores charge that leaks over time."
  },
  {
    "id": "ext10",
    "topic": "ram",
    "q": "What does ECC memory help detect and correct?",
    "opts": [
      "Network congestion",
      "Disk fragmentation",
      "Display flicker",
      "Memory bit errors"
    ],
    "ans": 3,
    "why": "ECC detects and corrects supported memory errors."
  },
  {
    "id": "ext11",
    "topic": "ram",
    "q": "What does CL describe?",
    "opts": [
      "Cable length",
      "Cache location",
      "CAS latency",
      "CPU load"
    ],
    "ans": 2,
    "why": "CAS latency is specified in clock cycles."
  },
  {
    "id": "ext12",
    "topic": "ram",
    "q": "Which tool can test RAM integrity?",
    "opts": [
      "ipconfig",
      "MemTest86",
      "Disk Cleanup",
      "Print Spooler"
    ],
    "ans": 1,
    "why": "Memory tests detect read/write errors."
  },
  {
    "id": "ext13",
    "topic": "storage",
    "q": "Which drive contains spinning platters?",
    "opts": [
      "HDD",
      "NVMe SSD",
      "USB flash",
      "SATA SSD"
    ],
    "ans": 0,
    "why": "HDD uses magnetic rotating media."
  },
  {
    "id": "ext14",
    "topic": "storage",
    "q": "What does NVMe primarily use in a desktop?",
    "opts": [
      "VGA",
      "PS/2",
      "IDE ribbon",
      "PCIe"
    ],
    "ans": 3,
    "why": "NVMe commonly operates over PCIe."
  },
  {
    "id": "ext15",
    "topic": "storage",
    "q": "What does SMART report?",
    "opts": [
      "RAM timings",
      "Monitor resolution",
      "Drive health indicators",
      "CPU socket type"
    ],
    "ans": 2,
    "why": "SMART exposes drive health telemetry."
  },
  {
    "id": "ext16",
    "topic": "storage",
    "q": "Which command feature informs SSD of unused blocks?",
    "opts": [
      "PXE",
      "TRIM",
      "POST",
      "DHCP"
    ],
    "ans": 1,
    "why": "TRIM allows SSD to manage freed blocks."
  },
  {
    "id": "ext17",
    "topic": "storage",
    "q": "Does every M.2 slot support every M.2 SSD?",
    "opts": [
      "No, protocol and keying matter",
      "Yes, always",
      "Only if RAM is DDR5",
      "Only if monitor is HDMI"
    ],
    "ans": 0,
    "why": "M.2 is a form factor; protocol support varies."
  },
  {
    "id": "ext18",
    "topic": "storage",
    "q": "A drive starts clicking and disappearing. First priority?",
    "opts": [
      "Defragment repeatedly",
      "Format immediately",
      "Open the sealed drive",
      "Protect and back up readable data"
    ],
    "ans": 3,
    "why": "Avoid stressing a failing disk."
  },
  {
    "id": "ext19",
    "topic": "storage",
    "q": "Which cable provides data to a 2.5-inch SATA SSD?",
    "opts": [
      "VGA cable",
      "ATX 24-pin",
      "SATA data cable",
      "EPS cable"
    ],
    "ans": 2,
    "why": "Separate SATA data and power connections are typical."
  },
  {
    "id": "ext20",
    "topic": "power",
    "q": "What does an ATX PSU convert?",
    "opts": [
      "RAM to storage",
      "AC mains to regulated DC",
      "DC to Ethernet",
      "HDMI to VGA"
    ],
    "ans": 1,
    "why": "PSU supplies regulated DC rails."
  },
  {
    "id": "ext21",
    "topic": "power",
    "q": "What does 80 PLUS primarily rate?",
    "opts": [
      "Energy efficiency",
      "Maximum fan speed",
      "Cable length",
      "CPU compatibility"
    ],
    "ans": 0,
    "why": "It certifies efficiency at specified loads."
  },
  {
    "id": "ext22",
    "topic": "power",
    "q": "Which connector normally supplies a SATA drive?",
    "opts": [
      "RJ45",
      "EPS CPU",
      "HDMI",
      "SATA power"
    ],
    "ans": 3,
    "why": "SATA power supplies the drive."
  },
  {
    "id": "ext23",
    "topic": "power",
    "q": "Should a student open an unplugged PSU?",
    "opts": [
      "Yes, if fan is stopped",
      "Yes, if switch is off",
      "No, capacitors can retain hazardous voltage",
      "Yes, immediately"
    ],
    "ans": 2,
    "why": "PSU internals require qualified servicing."
  },
  {
    "id": "ext24",
    "topic": "power",
    "q": "Can modular PSU cables be mixed freely across models?",
    "opts": [
      "Only when wattage matches",
      "No, pinouts can differ",
      "Yes, always",
      "Only when colors match"
    ],
    "ans": 1,
    "why": "Incorrect pinouts may damage hardware."
  },
  {
    "id": "ext25",
    "topic": "gpu",
    "q": "What is dedicated GPU memory called?",
    "opts": [
      "VRAM",
      "CMOS",
      "EEPROM",
      "SRAM cache only"
    ],
    "ans": 0,
    "why": "VRAM holds graphics data."
  },
  {
    "id": "ext26",
    "topic": "gpu",
    "q": "Which port carries digital video and audio?",
    "opts": [
      "PS/2",
      "SATA",
      "RJ11",
      "HDMI"
    ],
    "ans": 3,
    "why": "HDMI supports digital video and audio."
  },
  {
    "id": "ext27",
    "topic": "gpu",
    "q": "What should be checked when a newly installed GPU has no display?",
    "opts": [
      "Keyboard language",
      "Disk partition size",
      "GPU seating, power and monitor input",
      "Printer toner"
    ],
    "ans": 2,
    "why": "Check physical connections before replacing hardware."
  },
  {
    "id": "ext28",
    "topic": "gpu",
    "q": "What does an integrated GPU usually share?",
    "opts": [
      "HDD platters",
      "System RAM",
      "Printer memory",
      "UPS battery"
    ],
    "ans": 1,
    "why": "Integrated graphics commonly shares system memory."
  },
  {
    "id": "ext29",
    "topic": "cooling",
    "q": "What is the purpose of a heatsink?",
    "opts": [
      "Increase heat transfer surface area",
      "Store firmware",
      "Regulate network traffic",
      "Increase disk capacity"
    ],
    "ans": 0,
    "why": "Fins increase area for heat dissipation."
  },
  {
    "id": "ext30",
    "topic": "cooling",
    "q": "What does PWM commonly control on a PC fan?",
    "opts": [
      "Disk format",
      "CPU socket",
      "Screen resolution",
      "Fan speed"
    ],
    "ans": 3,
    "why": "PWM adjusts fan speed."
  },
  {
    "id": "ext31",
    "topic": "cooling",
    "q": "What can obstruct airflow?",
    "opts": [
      "Clean intake filter",
      "Correct fan direction",
      "Dust buildup",
      "Proper cable routing"
    ],
    "ans": 2,
    "why": "Dust restricts airflow."
  },
  {
    "id": "ext32",
    "topic": "cooling",
    "q": "What moves coolant in an AIO cooler?",
    "opts": [
      "RTC",
      "Pump",
      "DIMM",
      "VRM"
    ],
    "ans": 1,
    "why": "Pump circulates coolant through the loop."
  },
  {
    "id": "ext33",
    "topic": "firmware",
    "q": "What does UEFI initialize before OS boot?",
    "opts": [
      "Hardware and boot services",
      "Browser tabs",
      "Printer documents",
      "User spreadsheets"
    ],
    "ans": 0,
    "why": "Firmware prepares the platform and selects boot entry."
  },
  {
    "id": "ext34",
    "topic": "firmware",
    "q": "What does Secure Boot verify?",
    "opts": [
      "RAM capacity",
      "Fan bearing quality",
      "Wi-Fi strength",
      "Trusted signatures in the boot chain"
    ],
    "ans": 3,
    "why": "Secure Boot checks authorized boot software signatures."
  },
  {
    "id": "ext35",
    "topic": "firmware",
    "q": "What setting selects which device boots first?",
    "opts": [
      "Display scaling",
      "Duplex",
      "Boot order",
      "CAS latency"
    ],
    "ans": 2,
    "why": "Boot priority determines boot selection."
  },
  {
    "id": "ext36",
    "topic": "firmware",
    "q": "What should be verified before updating firmware?",
    "opts": [
      "Printer page count",
      "Exact board model and vendor instructions",
      "Mouse color",
      "Desktop wallpaper"
    ],
    "ans": 1,
    "why": "Wrong firmware or interruption can cause failure."
  },
  {
    "id": "ext37",
    "topic": "networking",
    "q": "Which device forwards Ethernet frames using MAC addresses?",
    "opts": [
      "Switch",
      "UPS",
      "Monitor",
      "SSD"
    ],
    "ans": 0,
    "why": "A layer-2 switch learns MAC addresses."
  },
  {
    "id": "ext38",
    "topic": "networking",
    "q": "Which device routes packets between IP networks?",
    "opts": [
      "Keyboard",
      "Repeater only",
      "Power supply",
      "Router"
    ],
    "ans": 3,
    "why": "Routers forward packets between networks."
  },
  {
    "id": "ext39",
    "topic": "networking",
    "q": "What assigns IP configuration automatically?",
    "opts": [
      "SATA",
      "POST",
      "DHCP",
      "HDMI"
    ],
    "ans": 2,
    "why": "DHCP provides addressing configuration."
  },
  {
    "id": "ext40",
    "topic": "networking",
    "q": "What does DNS resolve?",
    "opts": [
      "Disk partitions",
      "Domain names to records such as IP addresses",
      "Voltage to current",
      "MAC to fan speed"
    ],
    "ans": 1,
    "why": "DNS maps names to resource records."
  },
  {
    "id": "ext41",
    "topic": "networking",
    "q": "Which address is IPv4 loopback?",
    "opts": [
      "127.0.0.1",
      "192.168.1.1",
      "255.255.255.0",
      "169.254.1.1"
    ],
    "ans": 0,
    "why": "127.0.0.1 refers to the local host."
  },
  {
    "id": "ext42",
    "topic": "networking",
    "q": "Which connector is commonly used for copper Ethernet?",
    "opts": [
      "HDMI",
      "USB-C only",
      "SATA",
      "8P8C (RJ45)"
    ],
    "ans": 3,
    "why": "Twisted-pair Ethernet commonly uses 8P8C."
  },
  {
    "id": "ext43",
    "topic": "networking",
    "q": "What does ping use for typical IPv4 echo tests?",
    "opts": [
      "FTP",
      "ARP only",
      "ICMP",
      "SMTP"
    ],
    "ans": 2,
    "why": "ICMP echo checks reachability when allowed."
  },
  {
    "id": "ext44",
    "topic": "peripherals",
    "q": "Which printer technology uses toner?",
    "opts": [
      "Dot matrix",
      "Laser",
      "Inkjet",
      "Thermal direct"
    ],
    "ans": 1,
    "why": "Laser printers use powdered toner."
  },
  {
    "id": "ext45",
    "topic": "peripherals",
    "q": "What does DPI describe for scanning?",
    "opts": [
      "Sampling density",
      "Network latency",
      "CPU voltage",
      "RAM frequency"
    ],
    "ans": 0,
    "why": "DPI describes spatial resolution."
  },
  {
    "id": "ext46",
    "topic": "peripherals",
    "q": "What does monitor refresh rate measure?",
    "opts": [
      "Storage transfers per second",
      "Print pages per minute",
      "CPU cores",
      "Screen refreshes per second"
    ],
    "ans": 3,
    "why": "Refresh rate is measured in Hz."
  },
  {
    "id": "ext47",
    "topic": "peripherals",
    "q": "Which device provides short-term backup power?",
    "opts": [
      "Scanner",
      "GPU",
      "UPS",
      "NIC"
    ],
    "ans": 2,
    "why": "UPS provides temporary power during outages."
  },
  {
    "id": "ext48",
    "topic": "peripherals",
    "q": "What should be checked first for a blank powered monitor?",
    "opts": [
      "RAM frequency",
      "Input selection and video cable",
      "SSD partition",
      "Printer driver"
    ],
    "ans": 1,
    "why": "Verify the display signal path."
  },
  {
    "id": "ext49",
    "topic": "laptop",
    "q": "Which memory form factor is common in upgradeable laptops?",
    "opts": [
      "SO-DIMM",
      "ATX",
      "PCIe x16",
      "3.5-inch SATA"
    ],
    "ans": 0,
    "why": "SO-DIMM is compact memory."
  },
  {
    "id": "ext50",
    "topic": "laptop",
    "q": "What should you do with a swollen laptop battery?",
    "opts": [
      "Puncture it",
      "Compress it",
      "Continue charging",
      "Stop using it and seek qualified replacement"
    ],
    "ans": 3,
    "why": "Swollen batteries can be hazardous."
  },
  {
    "id": "ext51",
    "topic": "laptop",
    "q": "Which component connects a laptop screen to its mainboard?",
    "opts": [
      "RJ11",
      "ATX 24-pin",
      "Display ribbon cable",
      "SATA desktop power cable"
    ],
    "ans": 2,
    "why": "Internal displays use a dedicated display cable."
  },
  {
    "id": "ext52",
    "topic": "laptop",
    "q": "Before servicing a laptop internally, what should be disconnected?",
    "opts": [
      "Only external monitor",
      "AC adapter and battery per manual",
      "Only Wi-Fi",
      "Only mouse"
    ],
    "ans": 1,
    "why": "Disconnect power to reduce short-circuit risk."
  },
  {
    "id": "ext53",
    "topic": "os",
    "q": "What partition scheme is typically used with modern UEFI Windows installations?",
    "opts": [
      "GPT",
      "FAT16 only",
      "MBR only",
      "ISO"
    ],
    "ans": 0,
    "why": "GPT is the usual UEFI system disk partition scheme."
  },
  {
    "id": "ext54",
    "topic": "os",
    "q": "What should happen before deleting partitions?",
    "opts": [
      "Disable keyboard",
      "Remove CPU",
      "Increase fan speed",
      "Back up and verify target disk"
    ],
    "ans": 3,
    "why": "Deleting partitions can destroy access to data."
  },
  {
    "id": "ext55",
    "topic": "os",
    "q": "Which Windows utility lists installed hardware and driver status?",
    "opts": [
      "Paint",
      "Calculator",
      "Device Manager",
      "Notepad"
    ],
    "ans": 2,
    "why": "Device Manager displays devices and drivers."
  },
  {
    "id": "ext56",
    "topic": "os",
    "q": "What does a device driver do?",
    "opts": [
      "Repairs cracked PCB",
      "Allows OS to communicate with hardware",
      "Changes physical socket",
      "Adds RAM chips"
    ],
    "ans": 1,
    "why": "Drivers provide software interfaces to devices."
  },
  {
    "id": "ext57",
    "topic": "os",
    "q": "What is a bootable USB used for?",
    "opts": [
      "Starting an installer or recovery environment",
      "Increasing RAM",
      "Cooling CPU",
      "Replacing GPU firmware automatically"
    ],
    "ans": 0,
    "why": "It contains bootable software."
  },
  {
    "id": "ext58",
    "topic": "safety",
    "q": "What does ESD stand for?",
    "opts": [
      "External storage device",
      "Electronic system driver",
      "Ethernet signal detection",
      "Electrostatic discharge"
    ],
    "ans": 3,
    "why": "Static discharge can damage electronics."
  },
  {
    "id": "ext59",
    "topic": "safety",
    "q": "How should a DIMM be handled?",
    "opts": [
      "By bending it",
      "By pressing chips",
      "By its edges",
      "By gold contacts"
    ],
    "ans": 2,
    "why": "Avoid touching contacts and components."
  },
  {
    "id": "ext60",
    "topic": "safety",
    "q": "What is the first step before reseating internal hardware?",
    "opts": [
      "Update drivers during removal",
      "Shut down and disconnect power",
      "Open PSU",
      "Run a stress test"
    ],
    "ans": 1,
    "why": "Power isolation reduces electrical and equipment risks."
  },
  {
    "id": "ext61",
    "topic": "safety",
    "q": "What should be recorded before troubleshooting?",
    "opts": [
      "Symptoms and recent changes",
      "Only cabinet color",
      "Only keyboard brand",
      "Only wallpaper"
    ],
    "ans": 0,
    "why": "Symptoms guide systematic diagnosis."
  },
  {
    "id": "ext62",
    "topic": "safety",
    "q": "After changing one component, what is useful?",
    "opts": [
      "Replace every remaining part",
      "Ignore new errors",
      "Delete user files",
      "Retest and document outcome"
    ],
    "ans": 3,
    "why": "One change at a time isolates causes."
  }
])
