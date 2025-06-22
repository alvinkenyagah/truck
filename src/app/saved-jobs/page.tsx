'use client';

import Header from '@/components/layout/header';
import JobList from '@/components/jobs/job-list';
import { useJobs } from '@/context/JobContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';

export default function SavedJobsPage() {
  const { savedJobs, handleSaveToggle, handleJobApply, handleJobPost } = useJobs();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onJobPost={handleJobPost} />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-headline">Saved Jobs</h1>
          <p className="text-muted-foreground">
            These are the jobs you've saved. You can apply or unsave them.
          </p>
        </div>
        {savedJobs.length > 0 ? (
          <JobList jobs={savedJobs} onSaveToggle={handleSaveToggle} onApply={handleJobApply} />
        ) : (
          <div className="text-center py-16 bg-card rounded-lg shadow-sm">
            <h2 className="text-2xl font-headline font-bold mb-2">No Saved Jobs Yet</h2>
            <p className="text-muted-foreground mb-4">
              Start by browsing for jobs and saving the ones that interest you.
            </p>
            <Button asChild>
                <Link href="/">Find Jobs</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
