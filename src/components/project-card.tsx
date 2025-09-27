"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { projects as TProjects } from '@/app/data';

type ProjectCardProps = {
  project: (typeof TProjects)[0];
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image
        src={project.image.imageUrl}
        alt={project.title}
        width={600}
        height={338}
        className="object-cover w-full h-full"
        data-ai-hint={project.image.imageHint}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
      </div>
      <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <Github className="h-6 w-6 text-white" />
        </Link>
      </div>
    </motion.div>
  );
}
