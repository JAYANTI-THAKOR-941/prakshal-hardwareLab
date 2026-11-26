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
