export const CONTACT = {
  email: "rizqyfauzan28@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-rizqi-fauzan-856458286/",
  github: "https://github.com/muhammadrizqifauzan",
  resume: "/resume",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const PROFILE_META = [
  { label: "Based in", value: "Surabaya, Indonesia" },
  { label: "Education", value: "PENS — Telecommunication Engineering" },
  { label: "Degree", value: "Bachelor of Telecommunication Engineering, GPA 3.69" },
  { label: "Graduation", value: "2026" },
];

export const STATS = [
  { number: "3+", label: "Years Experience" },
  { number: "14+", label: "Projects Completed" },
  { number: "18+", label: "Certifications" },
  { number: "3", label: "Business Ventures" },
];

export const SERVICES = [
  {
    no: "01",
    title: "Network Engineering",
    subtitle: "Infrastructure & Connectivity",
    description:
      "SD-WAN migration, BTS infrastructure, fiber optic deployment, RF planning, and drive test campaigns. From RAN optimization to passive access network design.",
    highlights: ["SD-WAN", "FTTH/GPON", "Atoll", "Drive Test", "BTS/RAN"],
  },
  {
    no: "02",
    title: "Artificial Intelligence",
    subtitle: "Intelligent Systems",
    description:
      "Machine learning models, voice assistants, NLP pipelines, and edge inference. Building systems that transform sensor data and voice into actionable intelligence.",
    highlights: ["ML/DL", "NLP", "Python", "Random Forest", "Edge AI"],
  },
  {
    no: "03",
    title: "IoT & Robotics",
    subtitle: "Embedded & Physical Computing",
    description:
      "Microcontroller-based systems, sensor integration, wireless telemetry, and reactive control logic. From rescue robots to FPV drones — systems that sense and act.",
    highlights: ["ESP32", "Raspberry Pi", "C/C++", "Sensors", "Control Logic"],
  },
];

export const EXPERIENCE = [
  {
    no: "01",
    role: "Operasional & AI Engineer",
    org: "NechCode Startup Agency",
    year: "2026",
    body: "Co-founded and operated a digital technology startup delivering web, mobile, AI chatbot, and automation solutions. Coordinated projects, teams, budgeting, and machine learning deployment for client engagements.",
  },
  {
    no: "02",
    role: "BTS & Microwave Installer",
    org: "TechBros — PT. Teknologi Digital Nusantara",
    year: "2026",
    body: "BTS infrastructure installation and upgrades including RRU deployment, antenna systems, GPS antenna integration, feeder and RET cables, power systems, and acceptance testing.",
  },
  {
    no: "03",
    role: "Datacom Activation Junior Engineer Intern",
    org: "PT. PLN Indonesia Comnets Plus",
    year: "2025",
    body: "Supported SD-WAN backup migration for railway operations through network analysis, field surveys, connectivity testing, and technical documentation.",
  },
];

export const PROJECTS = [
  {
    slug: "aeris-rescue-robot",
    no: "01",
    title: "AERIS — Rescue Robot",
    subtitle: "Hazardous Gas Detection",
    body: "Fullstack mobile rescue robot for post-disaster environments combining gas sensors, microcontroller control, wireless communication, and machine learning.",
    tech: "ESP32 · Raspberry Pi · IoT",
    year: "2026",
    domain: "iot",
    drive: "https://drive.google.com/drive/folders/1PPSa7zWbQIizz-zGD1dfAw1u2awig5Le?usp=sharing",
    client: "PENS — Final Project",
    role: "Lead Developer & System Architect",
    timeline: "Jan – May 2026",
    team: ["Rizqi Fauzan", "2 Team Members"],
    deliverables: ["Robot Hardware", "ML Model", "Mobile App", "Documentation"],
    metrics: [
      { label: "Gas Detection Accuracy", value: "94%" },
      { label: "Response Time", value: "< 3s" },
    ],
  },
  {
    slug: "sdwan-backup-migration",
    no: "02",
    title: "SD-WAN Backup Service Migration",
    subtitle: "Railway Operations",
    body: "Migration support for critical backup connectivity: topology analysis, field survey, link testing, and documentation.",
    tech: "SD-WAN · IP Networking",
    year: "2025",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1OAg2WLbw6AIsz0EycherHPWNGKQteWeZ?usp=sharing",
    client: "PT. KAI — East Java Region",
    role: "Datacom Activation Junior Engineer",
    timeline: "Jun – Aug 2025",
    team: ["Rizqi Fauzan", "Network Team"],
    deliverables: ["Topology Design", "Survey Report", "Migration Plan", "Documentation"],
  },
  {
    slug: "airys-voice-assistant",
    no: "03",
    title: "AIRys — AI Voice Assistant",
    subtitle: "Speech Recognition System",
    body: "Voice-driven assistant handling speech recognition, intent parsing, and spoken responses for hands-free interaction.",
    tech: "Python · NLP · Speech",
    year: "2025",
    domain: "ai",
    drive: "https://drive.google.com/drive/folders/1S81Ouo0S53VSdk8rgYtuuVbaRPNJIMMR?usp=sharing",
    client: "PENS — AI Research Lab",
    role: "AI Engineer",
    timeline: "Mar – Jun 2025",
    team: ["Rizqi Fauzan"],
    deliverables: ["Speech Recognition Model", "Intent Parser", "Voice Response System", "Demo App"],
    metrics: [
      { label: "Recognition Accuracy", value: "89%" },
      { label: "Languages Supported", value: "2" },
    ],
  },
  {
    slug: "ftth-access-network",
    no: "04",
    title: "FTTH Access Network Design",
    subtitle: "Fiber to the Home",
    body: "End-to-end passive access network design with coverage planning, power budget, and distribution layout.",
    tech: "Fiber Optic · GPON",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1Gg1wIgjPILMnPEx31qgNCe7LbbYJPxmk?usp=sharing",
    client: "PENS — Telecommunication Lab",
    role: "Network Designer",
    timeline: "Sep – Dec 2024",
    team: ["Rizqi Fauzan"],
    deliverables: ["Coverage Plan", "Power Budget", "Distribution Layout", "BOM"],
  },
  {
    slug: "atoll-rf-planning",
    no: "05",
    title: "Atoll RF Planning",
    subtitle: "Coverage Simulation",
    body: "RF planning and coverage simulation for Kepulauan Seribu region using Atoll platform.",
    tech: "Atoll · RF Planning",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/1LgZ7-5nuD0RjOhxASAS6kQX__9P_eebv?usp=sharing",
    client: "PENS — RF Planning Lab",
    role: "RF Planning Engineer",
    timeline: "Feb – May 2024",
    team: ["Rizqi Fauzan", "Lab Assistant"],
    deliverables: ["Coverage Maps", "Simulation Report", "Parameter Recommendations"],
  },
  {
    slug: "ml-gas-classifier",
    no: "06",
    title: "ML Random Forest Classifier",
    subtitle: "Gas Detection Model",
    body: "Supervised classification model trained on multi-sensor gas readings with hyperparameter tuning and curve analysis.",
    tech: "Python · Scikit-learn",
    year: "2025",
    domain: "ai",
    drive: "https://drive.google.com/drive/folders/1OAg2WLbw6AIsz0EycherHPWNGKQteWeZ?usp=sharing",
    client: "PENS — AI Research Lab",
    role: "Machine Learning Engineer",
    timeline: "Jan – Mar 2025",
    team: ["Rizqi Fauzan"],
    deliverables: ["Trained Model", "Analysis Report", "Visualization Dashboard"],
    metrics: [
      { label: "Model Accuracy", value: "96%" },
      { label: "Gas Types Detected", value: "5" },
    ],
  },
  {
    slug: "2g-4g-drive-test",
    no: "07",
    title: "2G vs 4G Drive Test",
    subtitle: "Radio Measurement Study",
    body: "Comparative drive test campaign measuring signal level and quality across 2G and 4G layers in the same corridor.",
    tech: "Drive Test · RF · RAN",
    year: "2024",
    domain: "network",
    drive: "https://drive.google.com/drive/folders/15Aaql7jJNC0qHBATvSE1fSawdixcJ9jN?usp=sharing",
    client: "PENS — Telecommunication Lab",
    role: "Drive Test Engineer",
    timeline: "Apr – May 2024",
    team: ["Rizqi Fauzan", "2 Lab Partners"],
    deliverables: ["Measurement Data", "Comparative Analysis", "Technical Report"],
  },
  {
    slug: "obstacle-avoidance-robot",
    no: "08",
    title: "Autonomous Obstacle Avoidance Robot",
    subtitle: "Embedded Control",
    body: "Microcontroller-based mobile robot navigating unknown terrain using ranging sensors and reactive control logic.",
    tech: "C/C++ · Microcontroller",
    year: "2023",
    domain: "iot",
    drive: "https://drive.google.com/drive/folders/1-Pex8ThaC0ZNZ7XDbfwF2Z6muqQwafLs?usp=sharing",
    client: "PENS — Embedded Systems Lab",
    role: "Embedded Systems Developer",
    timeline: "Sep – Dec 2023",
    team: ["Rizqi Fauzan"],
    deliverables: ["Robot Prototype", "Control Firmware", "Test Results"],
    metrics: [
      { label: "Navigation Success", value: "92%" },
      { label: "Sensor Response", value: "< 1s" },
    ],
  },
];

export const SKILLS = [
  {
    category: "Network",
    items: ["SD-WAN", "IP Networking", "GPON", "RF Planning", "Drive Test", "Atoll"],
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "Deep Learning", "NLP", "Python", "Scikit-learn", "TensorFlow"],
  },
  {
    category: "Embedded & IoT",
    items: ["ESP32", "Raspberry Pi", "C/C++", "Sensors", "Control Logic", "PCB Design"],
  },
  {
    category: "Business",
    items: ["Project Management", "Team Leadership", "Budgeting", "Client Relations", "Strategy"],
  },
];

export const CAPABILITIES = [
  {
    title: "Network Infrastructure",
    description: "End-to-end network design, deployment, and optimization from RAN to core.",
  },
  {
    title: "AI/ML Systems",
    description: "Building intelligent systems that learn from data and make autonomous decisions.",
  },
  {
    title: "IoT & Embedded",
    description: "Connected devices and autonomous systems bridging digital and physical worlds.",
  },
  {
    title: "Technology Business",
    description: "Strategic planning, team building, and execution for tech-driven ventures.",
  },
];

export const CERTIFICATIONS = [
  {
    category: "Telecommunication & Network",
    items: [
      {
        title: "Planning in Access Network Coverage",
        org: "BNSP (Badan Nasional Sertifikasi Profesi)",
        year: "2025",
        expires: "2028",
        description: "National professional certification for access network planning and coverage design.",
      },
      {
        title: "Network Engineer",
        org: "KOMDIGI Digitalent",
        year: "2026",
        description: "Government-funded training and certification for network engineering competencies.",
      },
      {
        title: "RAN Installer Trainee",
        org: "TechBros (PT. TDN)",
        year: "2026",
        description: "Hands-on training for RAN infrastructure installation and BTS deployment.",
      },
      {
        title: "HCIA Datacom Course",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "Huawei Certified ICT Associate — Datacom, covering routing, switching, and network security.",
      },
      {
        title: "HCIA IoT Course",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "Huawei Certified ICT Associate — Internet of Things, covering IoT protocols and platforms.",
      },
    ],
  },
  {
    category: "Cloud & Computing",
    items: [
      {
        title: "HCIA Cloud Service Course",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "Huawei Certified ICT Associate — Cloud Service, covering cloud fundamentals and Huawei Cloud.",
      },
      {
        title: "HCIA Cloud Computing Course",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "Huawei Certified ICT Associate — Cloud Computing, covering virtualization and cloud infrastructure.",
      },
      {
        title: "HCIA Cloud Service Course (Colombia Training Program)",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "International training program for cloud service deployment and management.",
      },
    ],
  },
  {
    category: "Artificial Intelligence & Data Science",
    items: [
      {
        title: "AI Engineering",
        org: "ReWork Academy",
        year: "2026",
        description: "Comprehensive AI engineering program covering ML, DL, and production deployment.",
      },
      {
        title: "HCIA AI Course",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "Huawei Certified ICT Associate — Artificial Intelligence, covering AI fundamentals and frameworks.",
      },
      {
        title: "HCIA AI Course (Colombia Training Program)",
        org: "Huawei ICT Academy",
        year: "2025",
        description: "International training program for AI technologies and applications.",
      },
      {
        title: "Data Science & AI Machine Learning",
        org: "Dibimbing",
        year: "2026",
        description: "Intensive training in data science, machine learning, and AI applications.",
      },
      {
        title: "Belajar Penerapan Data Science dengan Microsoft Azure",
        org: "Dicoding Indonesia",
        year: "2026",
        expires: "2029",
        description: "Data science implementation using Microsoft Azure cloud platform.",
      },
      {
        title: "Microsoft Fabric",
        org: "Dicoding Indonesia",
        year: "2026",
        expires: "2029",
        description: "Data analytics and business intelligence with Microsoft Fabric platform.",
      },
      {
        title: "Membangun Aplikasi Gen AI",
        org: "Dicoding Indonesia",
        year: "2026",
        expires: "2029",
        description: "Building Generative AI applications using modern frameworks and tools.",
      },
    ],
  },
  {
    category: "Programming & Software Development",
    items: [
      {
        title: "Memulai Pemrograman dengan Python",
        org: "Dicoding Indonesia",
        year: "2026",
        expires: "2029",
        description: "Fundamental programming with Python, covering syntax, data structures, and OOP.",
      },
      {
        title: "Discover AI Virtual Conference",
        org: "Snowflake",
        year: "2026",
        description: "Virtual conference on AI and data cloud technologies by Snowflake.",
      },
    ],
  },
  {
    category: "Professional Experience",
    items: [
      {
        title: "Internship Certificate",
        org: "PT. PLN ICON Plus",
        year: "2025",
        description: "Internship completion certificate for Datacom Activation Junior Engineer role.",
      },
    ],
  },
];
