'use client';

import type { Job } from '@/lib/types';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import PostJobDialog from '@/components/jobs/post-job-dialog';
import UserNav from './user-nav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type HeaderProps = {
  onJobPost: (newJob: Omit<Job, 'id' | 'isSaved'>) => void;
};

const navLinks = [
  { href: '/', label: 'Find Jobs' },
  { href: '/saved-jobs', label: 'Saved Jobs' },
];

export default function Header({ onJobPost }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              <h1 className="text-xl md:text-2xl font-bold font-headline text-primary shrink-0">
                TruckRoute Finder
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <PostJobDialog onJobPost={onJobPost} />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}
