import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from './components/ProjectCard';
import Background3D from "./components/Background3D";


// ======================
// 🎬 بيانات المشاريع (الفيديوهات)
// ======================
const projects = [
  {
    id: 1,
    title: "Erenity Skincare",
    description: "If i had a brand, this will be my site.",
    video: `${process.env.PUBLIC_URL}/videos/erenity-skincare.mp4`,
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Mealify Restaurant",
    description: "A modern website showcasing the restaurant’s menu and vibe.",
    video: `${process.env.PUBLIC_URL}/videos/reasturant.mp4`,
    tags: ["Next.js", "CSS", "UI Design"],
  },
  {
    id: 3,
    title: "Land of flowers",
    description: "Bring your floral dreams to life in 3D.",
    video: `${process.env.PUBLIC_URL}/videos/land-of-flowers.mp4`,
    tags: ["React", "Animation", "Framer Motion", "3D"],
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Designs, ideas, and projects in one place.",
    video: `${process.env.PUBLIC_URL}/videos/portfolio.mp4`,
    tags: ["React", "CSS", "Bootstrab"],
  },
  {
    id: 5,
    title: "Bookmarker",
    description: "One click away from your go-to websites.",
    video: `${process.env.PUBLIC_URL}/videos/pookmark.mp4`,
    tags: ["React", "CSS", "Bootstrab"],
  },
];

// ======================
// 🎥 مكوّن عرض الفيديوهات (Portfolio)
// ======================
function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-transform"
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelected(project)}
        >
          <video
             src={project.video}
             muted
             loop
             className="w-full h-60 object-cover"
             poster={`${process.env.PUBLIC_URL}/images/${project.id}.png`}

          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-500 text-sm">{project.description}</p>
          </div>
        </motion.div>
      ))}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-black rounded-2xl overflow-hidden w-11/12 md:w-3/4 lg:w-1/2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selected.video}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ======================
// 🌟 التطبيق الرئيسي (App)
// ======================
const isMobile = window.innerWidth < 768;
export default function App() {
  return (
    // ↓↓↓ ضيفنا هنا الـ relative + overflow-hidden علشان الخلفية تفضل جوه الصفحة
    <div className="min-h-screen relative overflow-hidden">
      {/* ← الخلفية ثلاثية الأبعاد */}
      <Background3D />
  {/* Gradient overlay animated */}
  <motion.div
    className="absolute inset-0 -z-10"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    style={{
      backgroundImage:
        "linear-gradient(120deg, rgba(255, 0, 242, 0.15), rgba(0, 200, 255, 0.15), rgba(255, 255, 255, 0.1))",
      backgroundSize: "200% 200%",
    }}
  />

      {/* ===== Navbar ===== */}
      <nav className="fixed w-full z-40 top-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3 sm:gap-0">
          <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2">
            <span className="font-semibold">Ereny Wagih</span>
            <span className="ml-2 text-xs text-slate-500">Frontend Developer</span>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <a href="#projects" className="text-sm">Projects</a>
            <a href="#about" className="text-sm">About</a>
            <a href="#contact" className="text-sm">Contact</a>
          </div>
          <div className="flex md:hidden w-full justify-center mt-2 gap-4">
            <a href="#projects" className="text-sm">Projects</a>
            <a href="#about" className="text-sm">About</a>
           <a href="#contact" className="text-sm">Contact</a>
        </div>
        </div>
      </nav>
      {/* ===== Hero Section ===== */}
      <header className="pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm text-slate-500">Hi — I’m</p>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">Ereny Wagih</h1>
              <p className="mt-4 text-lg text-slate-600">
               Frontend Developer passionate about crafting modern, responsive, and visually engaging web experiences — blending design, technology, and 3D interactivity to bring ideas to life with elegance and precision.              </p>
           <motion.div
           className="absolute inset-0 -z-10 overflow-hidden"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{
             backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255, 0, 242, 0.2) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(0,200,255,0.2) 0%, transparent 60%)",
              backgroundSize: "200% 200%",
  }}
/>

              <div className="mt-6 flex gap-3">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  See projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact me
                </motion.a>
              </div>

              <div className="mt-6 flex items-center gap-5 text-2xl text-black ml-8">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-300 hover:text-purple-700"
  >
    <i className="fa-brands fa-github"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/ereny-wagih-a9b452226"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-300 hover:text-purple-700"
  >
    <i className="fa-brands fa-linkedin"></i>
  </a>

  <a
    href="mailto:erenywagih70@gmail.com"
    className="hover:scale-110 transition-transform duration-300 hover:text-purple-700"
  >
    <i className="fa-solid fa-envelope"></i>
  </a>
</div>

            </motion.div>

            <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="w-full flex justify-center"
>
 <motion.img
  src={`${process.env.PUBLIC_URL}/images/my-photo.jpg`}
  alt="Ereny Wagih"
  className="rounded-3xl w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] object-cover shadow-2xl transition-all duration-700 ease-out"
  style={{
    imageRendering: "high-quality",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    WebkitFontSmoothing: "antialiased",
  }}
  whileHover={{
    scale: 1.07,
    opacity: 0.95,
    filter:
      "brightness(1.2) saturate(1.1) drop-shadow(0 0 25px rgba(255, 255, 255, 0.6))",
    transition: { duration: 0.6, ease: "easeOut" },
  }}
  whileTap={{
    scale: 1.07,
    opacity: 0.95,
    filter:
      "brightness(1.2) saturate(1.1) drop-shadow(0 0 25px rgba(255, 255, 255, 0.6))",
    transition: { duration: 0.3, ease: "easeOut" },
  }}
  viewport={{ once: true }}
/>



</motion.div>

          </div>
        </div>
      </header>
<br />

      {/* ===== About Section ===== */}
      <section id="about" className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-slate-600">
              I’m a Frontend Developer who enjoys transforming ideas into meaningful digital experiences.
With a strong eye for design and detail, I focus on creating clean, responsive, and interactive user interfaces that feel intuitive and visually refined.
I’m constantly exploring new tools and technologies to bring motion, 3D, and creativity into every project I build.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="mt-4 flex gap-4 flex-wrap justify-center md:justify-start">
                {["Html", "CSS", "Javascript", "Bootstrap", "React", "3D", "Tailwind","Framer Motion", "React Three Fiber", "Vite"].map(skill => (
                  <motion.div
  key={skill}
  whileHover={{ rotateY: 360 }}
  whileTap={{ scale: 1.1, rotateY: 180 }} // 🟣 للموبايل (لمسة)
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="w-24 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-center"
>
  {skill}
</motion.div>

                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold"
          >
            Projects
          </motion.h2>

          {/* عرض الفيديوهات هنا */}
          <Portfolio />
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-600">Send me a message or connect on social platforms.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white card-shadow">
                <h3 className="font-semibold">Contact form</h3>
                <form
                  className="mt-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    const name = data.get("name");
                    const email = data.get("email");
                    const message = data.get("message");
                    const subject = encodeURIComponent(`Portfolio message from ${name}`);
                    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
                    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
                  }}
                >
                  <label className="block text-xs text-slate-600">Name</label>
                  <input name="name" required className="mt-1 block w-full rounded-md border px-3 py-2" />
                  <label className="block text-xs text-slate-600 mt-3">Email</label>
                  <input name="email" type="email" required className="mt-1 block w-full rounded-md border px-3 py-2" />
                  <label className="block text-xs text-slate-600 mt-3">Message</label>
                  <textarea name="message" rows="4" required className="mt-1 block w-full rounded-md border px-3 py-2" />
                  <button className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-indigo-500 text-white">
                    Send message
                  </button>
                </form>
              </div>

              <div className="p-6 rounded-xl bg-white card-shadow">
  <h3 className="font-semibold text-lg mb-4 text-black">Connect</h3>
  <ul className="space-y-4 text-sm text-black">

    {/* Github */}
    <li className="flex items-center gap-3">
      <i className="fa-brands fa-github text-xl text-black flex-shrink-0"></i>
      <a
        href="https://github.com/ErenyWagih"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-transparent transition-all duration-300 hover:animate-[customShake_0.4s_ease-in-out]"
      >
        Ereny Wagih - Github
      </a>
    </li>

    {/* Linkedin */}
    <li className="flex items-center gap-3">
      <i className="fa-brands fa-linkedin text-xl text-black flex-shrink-0"></i>
      <a
        href="https://www.linkedin.com/in/ereny-wagih-a9b452226"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-transparent transition-all duration-300 hover:animate-[customShake_0.4s_ease-in-out]"
      >
        Ereny Wagih - Linkedin
      </a>
    </li>

    {/* Gmail */}
    <li className="flex items-center gap-3">
      <i className="fa-solid fa-envelope text-xl text-black flex-shrink-0"></i>
      <a
        href="mailto:erenywagih70@gmail.com"
        className="underline decoration-transparent transition-all duration-300 hover:animate-[customShake_0.4s_ease-in-out]"
      >
        Ereny Wagih - Gmail
      </a>
    </li>

    {/* WhatsApp */}
    <li className="flex items-center gap-3">
      <i className="fa-brands fa-whatsapp text-xl text-black-500 flex-shrink-0"></i>
      <a
        href="https://wa.me/201220523236" // ضع رقمك بعد 20 بدون صفر البداية
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-transparent transition-all duration-300 hover:animate-[customShake_0.4s_ease-in-out]"
      >
        Chat on WhatsApp
      </a>
    </li>

    {/* Logo Card */}
    <li className="flex items-center justify-center mt-4">
      <img
  src={`${process.env.PUBLIC_URL}/images/logo.png`}
  alt="Ereny Logo"
  className="h-24 w-auto rounded-md mt-6"
/>

    </li>

  </ul>
</div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ereny Wagih · PEACE
        </div>
      </footer>
    </div>
  );
}
