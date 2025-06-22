
import type { Job } from '@/lib/types';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import PostJobDialog from '@/components/jobs/post-job-dialog';
import UserNav from './user-nav';


type HeaderProps = {
  onJobPost: (newJob: Omit<Job, 'id' | 'isSaved'>) => void;
};

export default function Header({ onJobPost }: HeaderProps) {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-primary">
              TruckRoute Finder
            </h1>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <PostJobDialog onJobPost={onJobPost} />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
