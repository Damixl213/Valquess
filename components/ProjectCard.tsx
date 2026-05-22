'use client';

import Link from 'next/link';
import { SectionReveal } from './SectionReveal';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  tags: string[];
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  slug,
  tags,
  delay = 0,
}: ProjectCardProps) {
  return (
    <SectionReveal delay={delay}>
      <Link href={`/projects/${slug}`} className="block group">
        <div className="backdrop-blur-sm border border-white/40 rounded-lg overflow-hidden hover:border-white/50 hover:-translate-y-1 transition-all duration-300 h-full bg-gradient-to-br from-[#0A0A1E] via-[#0A0A1E] to-[#2F175D]">
          <div className="relative h-64 bg-gradient-to-br from-primary-purple to-purple-900 overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-serif text-[#0A0A1E40]">
                {title.charAt(0)}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 bg-white/50 text-black px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-serif font-semibold text-white ">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary-purple/20 text-gold text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </SectionReveal>
  );
}
