export const CONTACT = {
  email: "muhammadrizqifauzan@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammadrizqifauzan",
  github: "https://github.com/muhammadrizqifauzan",
  resume: "/resume",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const PROFILE_META = [
  { label: "Based in", value: "Surabaya, Indonesia" },
  { label: "Education", value: "Politeknik Elektronika Negeri Surabaya" },
  { label: "Degree", value: "Bachelor of Telecommunication Engineering" },
  { label: "GPA", value: "3.69 / 4.00" },
  { label: "Graduation", value: "2026" },
];

export const EXPERIENCE = [
  {
    no: "01",
    role: "Operasional & AI Engineer",
    org: "NechCode Startup Agency",
    year: "2026",
    body: "Co-founded and operated a digital technology startup delivering web, mobile, AI chatbot, and automation solutions while coordinating projects, teams, budgeting, and machine learning deployment.",
  },
  {
    no: "02",
    role: "BTS & Microwave Installer / OJT",
    org: "TechBros — PT. Teknologi Digital Nusantara",
    year: "2026",
    body: "Worked on BTS infrastructure installation and upgrades including RRU deployment, antenna systems, GPS antenna integration, feeder and RET cables, power systems, and acceptance testing.",
  },
  {
    no: "03",
    role: "Datacom Activation Junior Engineer Intern",
    org: "PT. PLN Indonesia Comnets Plus",
    year: "2025",
    body: "Supported SD-WAN backup migration for railway operations through network analysis, field surveys, connectivity testing, and technical documentation.",
  },
];

/* ------------------------------------------------------------------ */
/*  All projects from Drive, organised by domain                      */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
  // Network
  {
    no: "01",
    title: "2G vs 4G Drive Test Comparison",
    subtitle: "Radio measurement study",
    body: "Comparative drive test campaign measuring signal level and quality across 2G and 4G layers in the same corridor.",
    tech: "Drive Test · RF · RAN Analysis",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/15Aaql7jJNC0qHBATvSE1fSawdixcJ9jN?usp=sharing",
  },
  {
    no: "02",
    title: "FTTH Access Network Design",
    subtitle: "Fiber to the Home — Kenjeran",
    body: "End-to-end passive access network design with coverage planning, power budget, and distribution layout.",
    tech: "Fiber Optic · GPON · Link Budget",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1Gg1wIgjPILMnPEx31qgNCe7LbbYJPxmk?usp=sharing",
  },
  {
    no: "03",
    title: "Atoll RF Planning Project",
    subtitle: "Kepulauan Seribu coverage simulation",
    body: "RF planning and coverage simulation for Kepulauan Seribu region using Atoll platform.",
    tech: "Atoll · RF Planning · Coverage Simulation",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1LgZ7-5nuD0RjOhxASAS6kQX__9P_eebv?usp=sharing",
  },
  {
    no: "04",
    title: "SD-WAN Backup Service Migration",
    subtitle: "PT. KAI — East Java Region",
    body: "Migration support for railway backup connectivity: topology analysis, field survey, link testing, and documentation.",
    tech: "SD-WAN · IP Networking · Field Survey",
    year: "2025",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1OAg2WLbw6AIsz0EycherHPWNGKQteWeZ?usp=sharing",
  },
  {
    no: "05",
    title: "QC Documentation",
    subtitle: "Network installation quality control",
    body: "Quality control documentation for network infrastructure installation, including weekly monitoring and vendor validation.",
    tech: "QC · Documentation · Network Infrastructure",
    year: "2025",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1B6NfQHqKtw8dbpODGrONeakCpaqtlXn8?usp=sharing",
  },
  // AI
  {
    no: "06",
    title: "Machine Learning Random Forest Classifier",
    subtitle: "AI Engineer project development",
    body: "Supervised classification model trained on multi-sensor gas readings with hyperparameter tuning and curve analysis.",
    tech: "Random Forest · Scikit-learn · Python",
    year: "2025",
    domain: "ai",
    drive: "https://drive.google.com/drive/folders/1OAg2WLbw6AIsz0EycherHPWNGKQteWeZ?usp=sharing",
  },
  {
    no: "07",
    title: "AIRys",
    subtitle: "AI Voice Assistant System",
    body: "Voice-driven assistant handling speech recognition, intent parsing, and spoken responses for hands-free interaction.",
    tech: "Python · Speech Recognition · NLP",
    year: "2025",
    domain: "ai",
    drive: "https://drive.google.com/drive/folders/1S81Ouo0S53VSdk8rgYtuuVbaRPNJIMMR?usp=sharing",
  },
  {
    no: "08",
    title: "Dynamic Statistical Modelling",
    subtitle: "Statistical analysis project",
    body: "Dynamic statistical modelling for data analysis and prediction.",
    tech: "Statistics · Data Analysis · Modelling",
    year: "2023",
    domain: "ai",
    drive: "https://drive.google.com/drive/folders/1quiUr06a1ZNOlzRMeUU19kiXBibltz89?usp=sharing",
  },
  // Robot / Embedded
  {
    no: "09",
    title: "AERIS — Rescue Robot",
    subtitle: "Hazardous gas detection using AI",
    body: "A fullstack mobile rescue robot designed for hazardous gas detection in post-disaster environments, combining gas sensors, microcontroller-based control, wireless communication, and machine learning.",
    tech: "ESP32 · Raspberry Pi · IoT · Sensors",
    year: "2026",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1PPSa7zWbQIizz-zGD1dfAw1u2awig5Le?usp=sharing",
  },
  {
    no: "10",
    title: "Autonomous Obstacle Avoidance Robot",
    subtitle: "Embedded control",
    body: "Microcontroller-based mobile robot navigating unknown terrain using ranging sensors and reactive control logic.",
    tech: "Microcontroller · Sensors · C/C++",
    year: "2023",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1-Pex8ThaC0ZNZ7XDbfwF2Z6muqQwafLs?usp=sharing",
  },
  {
    no: "11",
    title: "FPV Wing Race Drone",
    subtitle: "Airframe & radio link",
    body: "Fixed-wing FPV racing platform covering airframe build, propulsion, radio link, and video telemetry tuning.",
    tech: "RF Link · Avionics · Telemetry",
    year: "2024",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1gXRJ-Nt8Je6I2MYQjtEK9Z9qc341pORb?usp=sharing",
  },
  {
    no: "12",
    title: "Bolic and Horn Antenna Dev",
    subtitle: "Antenna development project",
    body: "Development and testing of Bolic and Horn antenna for RF applications.",
    tech: "RF · Antenna Design · Telecommunication",
    year: "2024",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1gXRJ-Nt8Je6I2MYQjtEK9Z9qc341pORb?usp=sharing",
  },
  {
    no: "13",
    title: "Digital Electronic Kit",
    subtitle: "Electronics project",
    body: "Digital electronics kit project with team-based development.",
    tech: "Digital Electronics · Circuit Design",
    year: "2023",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1mEH07VlEoUUuzhQ9rNhEZLE6VirZ9WFO?usp=sharing",
  },
  {
    no: "14",
    title: "Digital to Analog Converter Kit",
    subtitle: "DAC project",
    body: "Digital to Analog Converter kit design and implementation using Proteus.",
    tech: "DAC · Proteus · Circuit Design",
    year: "2024",
    domain: "robot",
    drive: "https://drive.google.com/drive/folders/1Uig6xTKeAtyiz3-lZgQ-UsTtd_hxq5BU?usp=sharing",
  },
];

export const SKILLS = [
  { category: "Network", items: ["IP Networking", "TCP/IP", "SD-WAN", "Network Infrastructure", "RF Planning", "Fiber Optic / GPON", "Drive Test", "Atoll"] },
  { category: "Telecommunication", items: ["RF", "RAN", "Antenna Design", "BTS Installation", "Microwave", "QC Documentation"] },
  { category: "Engineering", items: ["IoT", "Embedded Systems", "Microcontrollers", "ESP32", "Raspberry Pi", "Circuit Design"] },
  {
    category: "AI & Data",
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Science", "Python", "Random Forest"],
  },
  {
    category: "Tools",
    items: ["C/C++", "Python", "MATLAB/Simulink", "Proteus", "Microsoft Office", "KMZ / GIS"],
  },
];

export const ACHIEVEMENTS = [
  { title: "Best GPA in Class", meta: "Semester 1" },
  { title: "Best Camp Participant", meta: "Mr. Bob Kampung Inggris" },
  { title: "Planning in Access Network Coverage", meta: "BNSP Certification" },
  { title: "Network Engineer", meta: "KOMDIGI Digitalent" },
  { title: "AI Engineering", meta: "ReWork Academy" },
  { title: "HCIA Certifications", meta: "Huawei" },
  { title: "Python / Gen AI / Data Science", meta: "Dicoding" },
];

export const LEADERSHIP = [
  {
    role: "Founder & Program Lead",
    org: "Asakarsa Community",
    body: "Founded and led a community program, defining direction and running end-to-end execution.",
  },
  {
    role: "Head of Research Team",
    org: "PENS Disaster Management Center",
    body: "Led research work on disaster response technology and coordinated the team's technical output.",
  },
  {
    role: "Researcher",
    org: "Research Group Laboratory — Mobile Network & Pervasive Computing",
    body: "Contributed to mobile network and pervasive computing research within the campus laboratory.",
  },
  {
    role: "Student Leadership Development",
    org: "Hima Telkom PENS",
    body: "Took part in departmental student leadership development and organisational programs.",
  },
  {
    role: "Supervising / Senior / Junior Engineer",
    org: "Dirgantara PENS",
    body: "Progressed through engineering roles in the aeromodelling team, later supervising junior members.",
  },
];
