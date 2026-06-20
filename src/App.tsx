import profile from "./assets/profile.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import { SiPython, SiC } from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa";
function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
  className={`min-h-screen transition-all duration-500 ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-gray-100 text-slate-900"
  }`}
>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-500">
          PK
        </h1>
<div className="flex items-center gap-6">

  <ul
  className={`hidden md:flex gap-8 ${
    darkMode ? "text-slate-300" : "text-slate-700"
  }`}
>
    <li><a href="#about" className="hover:text-blue-400">About</a></li>
    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
    <li>
  <a href="#contact" className="hover:text-blue-400">
    Let's Connect
  </a>
</li>
  </ul>

  <div className="flex items-center gap-3">

  <span
    className={`text-sm font-medium ${
      darkMode ? "text-blue-400" : "text-slate-500"
    }`}
  >
    Dark
  </span>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="relative w-16 h-8 rounded-full bg-slate-700 p-1 transition-all"
  >
    <div
      className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
        darkMode ? "left-1" : "left-9"
      }`}
    />
  </button>

  <span
    className={`text-sm font-medium ${
      !darkMode ? "text-blue-500" : "text-slate-400"
    }`}
  >
    Light
  </span>

</div>
</div>

      </nav>
{/* Hero Section */}
<section className="relative flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-16 overflow-hidden">
<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `
      linear-gradient(#3b82f6 1px, transparent 1px),
      linear-gradient(90deg, #3b82f6 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
/>
  {/* Animated Background Hexagons */}
<motion.div
  className="absolute top-20 left-20 w-40 h-40 bg-cyan-400 opacity-40"
  style={{
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    boxShadow: "0 0 40px #22d3ee",
  }}
  animate={{
    rotate: 360,
    x: [0, 100, 0],
    y: [0, -50, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>
<motion.div
  className="absolute top-10 left-5 w-24 h-24 bg-cyan-400 opacity-40"
  style={{
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    boxShadow: "0 0 40px #22d3ee",
  }}
  animate={{
    rotate: 360,
    x: [0, 100, 0],
    y: [0, -50, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>
<motion.div
  className="absolute top-60 left-15 w-32 h-32 bg-cyan-400 opacity-40"
  style={{
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    boxShadow: "0 0 40px #22d3ee",
  }}
  animate={{
    rotate: 360,
    x: [0, 100, 0],
    y: [0, -50, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>
<motion.div
  className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 opacity-40"
  style={{
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    boxShadow: "0 0 40px #22d3ee",
  }}
  animate={{
    rotate: 360,
    x: [0, 100, 0],
    y: [0, -50, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>

<motion.div
  className="absolute w-70 h-20 border-2 border-blue-500 opacity-60"
  style={{
    boxShadow: "0 0 25px #3b82f6",
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    top: "35%",
    left: "15%",
  }}
  animate={{
    rotate: 360,
    x: [0, 50, 0],
    y: [0, -40, 0],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "linear",
  }}
/>
<motion.div
  className="absolute w-56 h-56 border-2 border-cyan-400 opacity-60"
  style={{
    boxShadow: "0 0 30px #22d3ee",
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    top: "40%",
    right: "20%",
  }}
  animate={{
    rotate: -360,
    x: [0, -80, 0],
    y: [0, 50, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
/>
<motion.div
  className="absolute w-32 h-32 border-2 border-blue-400 opacity-60"
  style={{
    boxShadow: "0 0 20px #60a5fa",
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    top: "25%",
    right: "35%",
  }}
  animate={{
    rotate: 360,
    x: [0, 40, 0],
    y: [0, 60, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>
  {/* Profile Image */}
  <motion.div
    className="relative z-10"
    initial={{ opacity: 0, x: -100 }}
    animate={{
      opacity: 1,
      x: 0,
      y: [0, -10, 0],
    }}
    transition={{
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 3,
      },
    }}
  >
    <div
  className="absolute -inset-6 rounded-full blur-3xl opacity-30"
  style={{
    background:
      "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
  }}
/>
    <img
      src={profile}
      alt="Profile"
      className="w-80 h-80 rounded-full border-4 border-blue-500 shadow-2xl"
      style={{
        objectFit: "cover",
        objectPosition: "center top",
      }}
    />
  </motion.div>

  {/* Text Section */}
  <motion.div
    className="relative z-10 max-w-xl"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <p className="text-blue-400 text-lg">
      Hello, I'm
    </p>
    <div className="relative inline-block">

  <div className="absolute inset-0 blur-3xl bg-blue-500 opacity-20"></div>


<div className="relative inline-block">

  {/* Star 1 */}
  <motion.div
    className="absolute -top-6 -left-6 text-yellow-400 text-xl"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.4, 1, 0.4],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
  >
    ✦
  </motion.div>

  {/* Star 2 */}
  <motion.div
    className="absolute top-2 -right-8 text-cyan-400 text-lg"
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  >
    ✦
  </motion.div>

  {/* Star 3 */}
  <motion.div
    className="absolute -bottom-2 left-20 text-blue-400 text-sm"
    animate={{
      scale: [1, 1.6, 1],
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
    }}
  >
    ✦
  </motion.div>

  <h1 className="text-5xl font-bold mt-2">
    Nemalapuri Pavan Kalyan
  </h1>

</div>

</div>
    <h2
     className={`text-2xl mt-4 ${
     darkMode ? "text-slate-300" : "text-slate-700"
    }`}
     >
      ECE | VLSI Specialization
    </h2>
      <p
      className={`mt-6 leading-7 ${
      darkMode ? "text-slate-400" : "text-slate-600"
      }`}
      >
     Building skills across Software Engineering, Problem Solving, FPGA Design, VLSI, Embedded Systems, and Modern Digital Systems.
    </p>
    <div className="flex gap-8 mt-8">

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-500">
      9.8
    </h3>
    <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
      CGPA
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-500">
      3+
    </h3>
    <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
      Projects
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-500">
      4+
    </h3>
    <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
      Certifications
    </p>
  </div>

   </div>
    <div className="flex gap-4 mt-8">
      <a
        href="/resume.pdf"
        download
        className="
        bg-blue-600
        hover:bg-blue-700
        hover:scale-110
        hover:-translate-y-1
        hover:shadow-xl
        transition-all
        duration-300
        px-6
        py-3
        rounded-lg
        font-semibold
      "
      >
        Download Resume
      </a>
      <a
        href="#projects"
        className="
border
border-blue-600
hover:bg-blue-600
hover:text-white
hover:scale-110
hover:-translate-y-1
hover:shadow-xl
transition-all
duration-300
px-6
py-3
rounded-lg
font-semibold
"
      >
        View Projects
      </a>
    </div>
  </motion.div>
</section>
      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-8 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
            darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-800"
           }`}
           >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Programming
            </h3>

            <ul
              className={`space-y-2 ${
              darkMode ? "text-slate-300" : "text-slate-700"
              }`}
              >
              <li className="flex items-center gap-2">
  <SiC /> C
</li>

   <li className="flex items-center gap-2">
  <FaJava /> Java
  </li>

  <li className="flex items-center gap-2">
  ⚡ Verilog HDL
  </li>
            </ul>
          </div>

          <div
           className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
           darkMode
           ? "bg-slate-900 text-white"
           : "bg-white text-slate-800"
           }`}
           >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Tools
            </h3>

            <ul className={`space-y-2 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}>
             <li className="flex items-center gap-2">
              ⚡ Vivado
             </li>

             <li className="flex items-center gap-2">
             🔧 Cadence
            </li>

            <li className="flex items-center gap-2">
            🔌 LTspice
            </li>

            <li className="flex items-center gap-2">
             🤖 Arduino IDE
            </li>
            </ul>
          </div>

          <div
          className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
          darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-800"
          }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Domains
            </h3>

            <ul className={`space-y-2 ${
              darkMode ? "text-slate-300" : "text-slate-700"
             }`}>
              <li>VLSI Design</li>
              <li>FPGA Development</li>
              <li>Embedded Systems</li>
              <li>IoT</li>
            </ul>
          </div>

        </div>
      </section>
{/* Projects Section */}
<section
  id="projects"
  className="py-20 px-8 max-w-6xl mx-auto"
>
  <h2 className="text-4xl font-bold text-center mb-12">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div
     className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
     darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
      }`}
      >
      <h3 className="text-2xl font-semibold text-blue-400">
        Smart Traffic Light Controller
      </h3>

      <p
       className={`mt-4 ${
       darkMode ? "text-slate-300" : "text-slate-700"
       }`}
       >
        Developed a Traffic Light Control System in Verilog HDL using FSM design principles and validated its functionality through simulation and FPGA implementation.
      </p>

      <div className="mt-4">
        <span
       className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
        darkMode
      ? "bg-slate-800 text-blue-400 border border-blue-500"
      : "bg-slate-100 text-slate-700 border border-slate-300"
      }`}
       >
       Verilog HDL
       </span>
      </div>
    </div>

    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
      darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
      }`}
     >
      <h3 className="text-2xl font-semibold text-blue-400">
        Automated Greenhouse Management System
      </h3>

      <p
      className={`mt-4 ${
      darkMode ? "text-slate-300" : "text-slate-700"
      }`}
      >
        Developed a smart greenhouse solution using ESP32 and sensor-based monitoring to automate irrigation and environmental control, improving resource efficiency through real-time IoT connectivity.
      </p>

      <div className="mt-4">
        <span
  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
    darkMode
      ? "bg-slate-800 text-blue-400 border border-blue-500"
      : "bg-slate-100 text-slate-700 border border-slate-300"
     }`}
     >
      ESP32
     </span>
      </div>
    </div>

    <div
    className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
    darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
     }`}
     >
      <h3 className="text-2xl font-semibold text-blue-400">
        Smart Parking System
      </h3>

      <p
       className={`mt-4 ${
       darkMode ? "text-slate-300" : "text-slate-700"
       }`}
     >
        Developed an ESP32-based Smart Parking Management System integrating IR sensors and servo motors for automated vehicle detection, access control, and efficient parking space utilization.
      </p>

      <div className="mt-4">
        <span
       className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
       darkMode
       ? "bg-slate-800 text-blue-400 border border-blue-500"
       : "bg-slate-100 text-slate-700 border border-slate-300"
       }`}
        >
       Verilog HDL
       </span>
      </div>
    </div>

  </div>
</section>
{/* Education Section */}
<section
  id="education"
  className="py-20 px-8 max-w-5xl mx-auto"
>
  <h2 className="text-4xl font-bold text-center mb-12">
    Education
  </h2>

  <div className="space-y-8">

    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
      darkMode
       ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
      }`}
      >
      <h3 className="text-2xl font-semibold text-blue-400">
        KL University
      </h3>

      <p
       className={`mt-2 ${
       darkMode ? "text-slate-300" : "text-slate-700"
       }`}
       >
        B.Tech in Electronics and Communication Engineering
      </p>

      <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
       VLSI Specialization
      </p>

      <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
        CGPA: 9.8
      </p>

      <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
        2023 - 2027
      </p>
    </div>

    <div
     className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
     darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
      }`}
      >
      <h3 className="text-2xl font-semibold text-blue-400">
        Intermediate
      </h3>

      <p
       className={`mt-2 ${
       darkMode ? "text-slate-300" : "text-slate-700"
       }`}
       >
        Percentage: 98.3%
      </p>
    </div>

    <div
     className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
     darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
      }`}
      >
      <h3 className="text-2xl font-semibold text-blue-400">
        SSC
      </h3>

      <p
       className={`mt-2 ${
       darkMode ? "text-slate-300" : "text-slate-700"
       }`}
       >
        Percentage: 97.5%
      </p>
    </div>

  </div>
</section>
{/* Contact Section */}
<div
  id="contact"
  className={`p-8 rounded-2xl shadow-xl text-center ${
    darkMode
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-800"
  }`}
>

  <h3 className="text-3xl font-bold text-blue-500 mb-4">
    Let's Connect
  </h3>

  <p className="mb-6">
    Open to internships, collaborations and VLSI opportunities.
  </p>

  <div className="flex justify-center gap-8">

    <a
      href="https://github.com/pavankalyannemalapuri-cell"
      target="_blank"
    >
      <FaGithub size={35} />
    </a>

    <a
      href="https://www.linkedin.com/in/pavan-kalyan-nemalapuri/"
      target="_blank"
    >
      <FaLinkedin size={35} />
    </a>

  </div>

 <div className="mt-6 space-y-3">

  <div className="flex justify-center items-center gap-2">
    <span>📧</span>
    <span>2300040115ece@gmail.com</span>
  </div>

  <div className="flex justify-center items-center gap-2">
    <span>📱</span>
    <span>+91 8897758735</span>
  </div>
  <div className="flex justify-center items-center gap-2">
  <span>📍</span>
  <span>Palasa, Andhra Pradesh, India</span>
</div>

</div>

</div>

<footer className="border-t border-slate-800 py-6 text-center text-slate-400">
  © 2026 Nemalapuri Pavan Kalyan
</footer>


    </div>
  );
}

export default App;
