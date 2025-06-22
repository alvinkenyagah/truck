
import type { Job } from '@/lib/types';
import { Truck, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import PostJobDialog from '@/components/jobs/post-job-dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


type HeaderProps = {
  onJobPost: (newJob: Omit<Job, 'id' | 'isSaved'>) => void;
};

export default function Header({ onJobPost }: HeaderProps) {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-primary">
              TruckRoute Finder
            </h1>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <PostJobDialog onJobPost={onJobPost} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-transparent hover:border-primary transition-colors">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="User profile" data-ai-hint="person portrait" />
                    <AvatarFallback>
                      <UserIcon />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
