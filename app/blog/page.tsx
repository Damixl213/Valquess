'use client';

import { SectionReveal } from '@/components/SectionReveal';
import { BlogCard } from '@/components/BlogCard';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Strategy', 'Design', 'Branding', 'Trends'];

const posts = [
  {
    id: '1',
    title: 'The Power of Brand Authenticity in 2025',
    excerpt: 'Discover why authentic storytelling is more crucial than ever for building lasting connections with your audience',
    content: '',
    category: 'Branding',
    author: 'Alexandra Chen',
    date: 'Jan 15, 2025',
    image: '',
    slug: 'brand-authenticity-2025',
  },
  {
    id: '2',
    title: 'Minimalism vs. Maximalism: Finding Your Brand Voice',
    excerpt: 'Exploring the design spectrum and how to choose the aesthetic that best represents your brand values',
    content: '',
    category: 'Design',
    author: 'Sophia Williams',
    date: 'Jan 10, 2025',
    image: '',
    slug: 'minimalism-vs-maximalism',
  },
  {
    id: '3',
    title: '5 Strategic Steps to a Successful Rebrand',
    excerpt: 'A comprehensive guide to navigating the complexities of brand transformation without losing your essence',
    content: '',
    category: 'Strategy',
    author: 'Marcus Rodriguez',
    date: 'Jan 5, 2025',
    image: '',
    slug: 'successful-rebrand-steps',
  },
  {
    id: '4',
    title: 'Color Psychology in Brand Identity',
    excerpt: 'Understanding how color choices influence perception and drive emotional connections with your audience',
    content: '',
    category: 'Design',
    author: 'Sophia Williams',
    date: 'Dec 28, 2024',
    image: '',
    slug: 'color-psychology-brand',
  },
  {
    id: '5',
    title: 'The Future of Luxury Branding',
    excerpt: 'Emerging trends reshaping how premium brands connect with discerning consumers in the digital age',
    content: '',
    category: 'Trends',
    author: 'Alexandra Chen',
    date: 'Dec 20, 2024',
    image: '',
    slug: 'future-luxury-branding',
  },
  {
    id: '6',
    title: 'Building Brand Consistency Across Channels',
    excerpt: 'Strategies for maintaining a cohesive brand presence from social media to physical touchpoints',
    content: '',
    category: 'Strategy',
    author: 'Marcus Rodriguez',
    date: 'Dec 15, 2024',
    image: '',
    slug: 'brand-consistency-channels',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              Our <span className="text-gold">Blog</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights, strategies, and inspiration from the world of premium branding and design
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-6 py-2 rounded-full font-medium transition-all duration-200',
                    selectedCategory === category
                      ? 'bg-gold text-black'
                      : 'bg-black/40 text-gray-300 border border-gold/30 hover:border-gold hover:text-gold'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} delay={index * 75} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No posts found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
