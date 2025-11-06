import React, {useRef} from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({project}) {
  const ref = useRef();

  function handleMove(e){
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x-0.5)*12;
    const rotateX = (0.5-y)*12;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`;
  }
  function handleLeave() {
    ref.current.style.transform = '';
  }

  return (
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="bg-white rounded-2xl p-4 card-shadow preserve3d perspective" style={{transition:'transform 0.25s ease'}}>
        <div className="rounded-lg overflow-hidden">
          <div className="relative" style={{paddingTop:'56.25%'}}>
            <iframe src={project.video} title={project.title} frameBorder="0" allowFullScreen className="absolute inset-0 w-full h-full"/>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100">{t}</span>)}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <a href={project.live} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary">Live</a>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600">GitHub</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
