export const siteConfig = {
  name: "Chaoran Wu",
  title: "CS × Interaction Design Student @ ShanghaiTech University",
  description: "Portfolio website of Chaoran Wu",
  accentColor: "#1d4ed8",
  social: {
    email: "wuchr2023@shanghaitech.edu.cn",
    linkedin: "https://www.linkedin.com/in/%E8%B6%85%E7%84%B6-%E5%90%B4-76ba2438b/",
    instagram: "https://www.instagram.com/detach_t/",
    github: "https://github.com/DetachWu",
  },
  aboutMe:
    "I'm a Junior undergraduate student from ViSeer Lab directed by Professor Quan Li at ShanghaiTech University. I work at the intersection of Computer Science and Interaction Design, exploring how AI can become a collaborative partner in human thinking. I am interested in designing creativity support systems and critical design installations that investigate new paradigms of human–AI collaboration. I am also interested in AI for education and gamified learning experiences. Currently, I am seeking PhD opportunities in human–AI interaction, AI-supported creativity, and AI for education.",
  skills: ["Python", "C++", "Processing", "Node.js", "React", "Arduino", "Unity", "Figma", "TouchDesigner", "Blender", "Fusion 360", "MR/VR"],
  projects: [
    {
      name: "Neural Tide",
      description:
        "An immersive installation presented at the Ars Electronica Festival 2025. By merging EEG signals with AI, the work probes a reciprocal relationship between human consciousness and intelligent systems.",
      link: "https://ars.electronica.art/panic/en/view/neural-tide-20e38ddb450c81dd877fd3e8ab9b9173/",
      image: "/images/neural-tide.jpg",
      skills: ["Processing", "EEG", "Supervised Learning"],
    },
    {
      name: "Kiwi Plus",
      description:
        "Participated in the NYU Shanghai 2024 Digital Innovation Competition, developing a programming-assisted learning system co-maintained by instructors and students, based on the Problem-Based Learning (PBL) approach.",
      image: "/images/kiwi-plus.png",
      link: "https://www.notion.so/Kiwi-Plus-33e47ffe671280808fdddb96a356d5e0?source=copy_link",
      skills: ["Node.js", "Python"],
    },
    {
      name: "Mana Mingle",
      description:
        "A networked multiplayer magic battle game where players explore the environment to collect and learn spells, fight against friends, and compete to claim trophies.",
      link: "https://www.bilibili.com/video/BV16t8ceBEbo/?spm_id_from=333.337.search-card.all.click&vd_source=9c3ff8c00b77348aff67ac7851f23964",
      image: "/images/mana-mingle.png",
      skills: ["Unity", "Pixel Asset"],
    },
    
  ],
  experience: [
    {
      title:
        "WordCraft: Scaffolding the Keyword Method for L2 Vocabulary Learning with Multimodal LLMs (CHI 26')",
      authors:
        "Yuheng Shao, Junjie Xiong, <strong>Chaoran Wu</strong>, Xiyuan Wang, Ziyu Zhou, Yang Ouyang, Qinyi Tao, Quan Li",
      link: "https://arxiv.org/abs/2602.00762",
      image: "/images/Wordcraft.png",
    },
    {
      title:
        "Ideaverse: Structuring and Steering Design Brainstorming with a Multi-Agent LLM System (UIST 26')",
      authors:
        "<strong>Chaoran Wu*</strong>, Shenghan Gao*, Linjia Liu, Ziyu Zhou, Yang Ouyang, Shizhen Zhang, Yuheng Shao, Yanjun Zhou, Quan Li",
      link: "/papers/Ideaverse-Poster.pdf",
      image: "/images/Ideaverse.png",
    },
  ],
  education: [
    {
      school: "ShanghaiTech University",
      degree:
        "B.Eng. in Computer Science and Technology (Major), Minor in Interaction Design",
      dateRange: "2023 - Present",
      achievements: [
        "Currently a junior undergraduate student",
        "GPA: 3.6/4.0, ranked in the top 30%",
        "Teaching Assistant for Design Thinking and VR Studio courses",
        "Undergraduate researcher at ViSeer Lab",
      ],
    },
    {
      school: "University of California, Berkeley",
      degree: "Exchange Student",
      dateRange: "Fall 2025",
      achievements: [
        "GPA: 4.0/4.0",
        "Participated in research at the Berkeley Morphing Matter Lab",
      ],
    },
  ],
};
