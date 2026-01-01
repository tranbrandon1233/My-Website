import "clsx";
import { y as attr, w as attr_class, G as clsx, F as slot, z as bind_props, x as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
function Step($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let step = $$props["step"];
    $$renderer2.push(`<a${attr("href", step.href)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${attr_class(clsx(step.icon))}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape_html(step.name)}</h3> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--> <div class="flex-1 flex justify-betweeen gap-4 items-end"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`);
    bind_props($$props, { step });
  });
}
function Main($$renderer) {
  let steps = [
    {
      name: "LeetClone Website",
      icon: "fa-brands fa-dev",
      description: "A full-stack website based on LeetCode that displays coding problems and allows users to log in, reset the password, select questions to answer, create and test code, and like, dislike, and favorite questions.",
      href: "https://leetclone.vercel.app"
    },
    {
      name: "Virtual Reality Physical Therapy With Gemini LLM Assistant",
      icon: "fa-solid fa-vr-cardboard",
      description: "A virtual reality physical therapy system that uses a Gemini LLM assistant to guide users through physical therapy exercises.",
      href: "https://github.com/tranbrandon1233/VR-Physical-Therapy-Project/tree/main"
    },
    {
      name: "Talking Terry: Hands-Free LLM Phone Assistant",
      icon: "fa-solid fa-mobile-android",
      description: "A hands-free phone that can answer any question powered by GPT-4, LangChain, and APIs from SerpAPI, Yelp, Twilio, and more!",
      href: "https://github.com/tranbrandon1233/TalkingTerry"
    },
    {
      name: "Chatemis: RAG-based Conversational AI Agent",
      icon: "fa-solid fa-robot",
      description: "A RAG-based conversational AI agent that utilizes a low-latency LLM implementation on Nvidia Jetson Orin with ollama, retrieval-augmented generation with LangChain, speech-to-text with OpenAI Whisper, and text-to-speech with pyttsx for verbal question-answering robot",
      href: "https://github.com/TheNewRobot/chatemis"
    },
    {
      name: "SafeAlert Mobile App",
      icon: "fa-solid fa-mobile-android",
      description: "A mobile app created with Flutter and Firebase that allows users to quickly and discreetly alert trusted contacts and/or emergency services if they are in danger.",
      href: "https://github.com/tranbrandon1233/SafeAlert"
    },
    {
      name: "RF-DETR Automated Image Labeling Pipeline",
      icon: "fa-solid fa-image",
      description: "An automated image labeling system using RF-DETR establishing a fine-tuning pipeline with Google Colab to label images to be used for training YOLO computer vision model of UCLA RoMeLa's ARTEMIS robot for the 2025 RoboCup competition",
      href: "hhttps://colab.research.google.com/drive/1EO1Eoo9OUITF5HlGXkAp_hta9Ip-3xAe?usp=sharing",
      href: "https://colab.research.google.com/drive/1EO1Eoo9OUITF5HlGXkAp_hta9Ip-3xAe?usp=sharing"
    },
    {
      name: "Natural Language Processing Tone Detector",
      icon: "fa-solid fa-diagram-project",
      description: "A Natural Language Processing (NLP) model that detects tone in text using a dataset of positive and negative IMDB movie reviews.",
      href: "https://colab.research.google.com/drive/1aJKxvTSta6jLYvpwoXHevKpeXM70A6-T?usp=sharing"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "an expert developer",
      description: "I have been learning programming since I was 12 and have not stopped since then because I absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include front-end frameworks like React, Flutter, and Svelte (which this website is programmed in!), backend programming with Firebase, Supabase, and MongoDB, design with UI/UX, cloud services like Amazon Web Services and Microsoft Azure, and much much more."
    },
    {
      name: "a product design & UX fanatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences. From websites like this one to mobile apps like SafeAlert, I have all the skills to create a appealing designs that users will love and enjoy using."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team. As the leader of research papers and many projects, I have learned to communicate effectively and efficiently with my team members to ensure that we are all on the same page and that we are all working towards the same goal."
    }
  ];
  $$renderer.push(`<main class="flex flex-col flex-1 p-4 overflow-hidden"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 w-screen md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl w-full sm:text-5xl md:text-6xl">Hi! I'm <span class="poppins text-violet-400">Brandon Tran</span> <br/>Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes
                JavaScript (React or NEXT.JS), Flutter, SvelteKit,<br/> TailwindCSS, Node.js + Express.js &amp; PostgreSQL, Supabase, or <br/> Firebase!</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><a href="#contact" class="duration-200 hover:text-violet-400"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></button></div> <div class="relative shadow-2xl grid place-items-center"><img src="images/profile.jpg" alt="This is what I look like!" class="object-cover z-[2] max-h-[70vh]"/></div></section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">`);
  Step($$renderer, {
    step: steps[0],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A full-stack clone of the LeetCode website created with <strong class="text-violet-400">TypeScript, Tailwinds CSS, React Icons, Toastify, Recoil, Split, CodeMirror, Next.js, and Firebase</strong> that displays coding problems and allows users to log in, reset the password, select questions to answer, create and test code, and like, dislike, and favorite questions.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[1],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A virtual reality physical therapy system that uses a Gemini LLM assistant to guide users through physical therapy exercises created with <strong class="text-violet-400">Python, OpenAI, and PyTorch</strong> that allows users to select exercises and track their progress.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[2],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A hands-free phone that can answer any question powered by <strong class="text-violet-400">GPT-4, LangChain, and APIs from SerpAPI, Yelp, Twilio</strong>, and more!</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[3],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A RAG-based conversational AI agent that utilizes a low-latency LLM implementation on Nvidia Jetson Orin with <strong class="text-violet-400">ollama</strong>, retrieval-augmented generation with <strong class="text-violet-400">LangChain</strong>, speech-to-text with <strong class="text-violet-400">OpenAI Whisper</strong>, and text-to-speech with <strong class="text-violet-400">pyttsx</strong> for verbal question-answering robots.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[4],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A mobile app created with <strong class="text-violet-400">Flutter and Firebase</strong> that allows users to quickly and discreetly alert trusted contacts and/or emergency services if they are in danger.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[5],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>An automated image labeling system using <strong class="text-violet-400">RF-DETR</strong> establishing a fine-tuning pipeline with Google Colab to label images to be used for training <strong class="text-violet-400">YOLO</strong> computer vision model of UCLA RoMeLa's ARTEMIS robot for the 2025 RoboCup competition created with <strong class="text-violet-400">Python, PyTorch, and Google Colab</strong>.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Step($$renderer, {
    step: steps[6],
    children: ($$renderer2) => {
      $$renderer2.push(`<p>A Natural Language Processing (NLP) model that detects tone in text using a dataset of positive and negative IMDB movie reviews using <strong class="text-violet-400">PyTorch, Pandas, and Scikit-learn</strong>.</p>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]"><!--[-->`);
  const each_array = ensure_array_like(benefits);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let benefit = each_array[index];
    $$renderer.push(`<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape_html(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape_html(benefit.name)}</h3> <p>${escape_html(benefit.description)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <h5 class=" text-2xl sm:text-3xl font-semibold text-center poppins ">The <span class="text-violet-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200  "><tr><th></th><th class="whitespace-nowrap p-2 px-4">Candidate #1</th><th class="whitespace-nowrap p-2 px-4">Candidate #2</th><th class="whitespace-nowrap p-2 px-4">Candidate #3</th><th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead><tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Ability</td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50"><p>Scroll to see more →</p></div> <p class="mx-auto">So why not invest?</p></section></main>`);
}
function _page($$renderer) {
  Main($$renderer);
}
export {
  _page as default
};
