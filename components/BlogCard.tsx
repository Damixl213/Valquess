'use client';

import Link from 'next/link';
import { SectionReveal } from './SectionReveal';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  delay?: number;
}

export function BlogCard({
  title,
  excerpt,
  category,
  author,
  date,
  slug,
  delay = 0,
}: BlogCardProps) {
  return (
    <SectionReveal delay={delay}>
      <Link href={`/blog/${slug}`} className="block group">
        <article className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg overflow-hidden hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
          <div className="relative h-48 bg-gradient-to-br from-purple-900 to-primary-purple overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-serif text-white/10">{title.charAt(0)}</div>
            </div>
            <div className="absolute top-4 left-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{author}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{date}</span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </SectionReveal>
  );
}
