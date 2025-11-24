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
        <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg overflow-hidden hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
          <div className="relative h-64 bg-gradient-to-br from-primary-purple to-purple-900 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-serif text-white/10">
              {title.charAt(0)}
            </div>
            <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
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
