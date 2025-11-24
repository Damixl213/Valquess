import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  'brand-authenticity-2025': {
    title: 'The Power of Brand Authenticity in 2025',
    category: 'Branding',
    author: 'Alexandra Chen',
    date: 'Jan 15, 2025',
    content: `In today's saturated marketplace, authenticity isn't just a buzzword—it's a business imperative. Consumers are increasingly savvy, able to detect insincerity from miles away. They crave genuine connections with brands that share their values and speak their language.

Brand authenticity starts with knowing who you are. It means having a clear understanding of your mission, values, and the unique perspective you bring to your industry. This self-awareness forms the foundation of everything you communicate.

But authenticity isn't just about what you say—it's about consistency between your words and actions. Every touchpoint, from your website to your customer service, should reflect your brand's true character. This consistency builds trust, and trust is the currency of modern business.

The brands that will thrive in 2025 and beyond are those that dare to be genuine, even when it's not the easiest path. They're willing to take stands, show vulnerability, and prioritize meaningful connections over mass appeal.`,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </SectionReveal>

          <SectionReveal delay={75}>
            <div className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </SectionReveal>

          <SectionReveal delay={225}>
            <div className="flex items-center space-x-6 text-gray-400 text-sm mb-8">
              <span className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={300}>
            <div className="h-96 bg-gradient-to-br from-primary-purple to-purple-900 rounded-lg mb-12 flex items-center justify-center">
              <div className="text-8xl font-serif text-white/20">{post.title.charAt(0)}</div>
            </div>
          </SectionReveal>

          <SectionReveal delay={375}>
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={450}>
            <div className="mt-12 pt-8 border-t border-gold/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Written by</p>
                  <p className="text-xl font-serif font-semibold text-white">{post.author}</p>
                </div>
                <Link href="/contact">
                  <VButton variant="outline">Get In Touch</VButton>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
