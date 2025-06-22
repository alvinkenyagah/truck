"use client";

import { useState } from 'react';
import type { Job } from '@/lib/types';
import Header from '@/components/layout/header';
import JobSearchFilters from '@/components/jobs/job-search-filters';
import JobList from '@/components/jobs/job-list';
import { useToast } from "@/hooks/use-toast"


const initialJobs: Job[] = [
  {
    id: '1',
    title: 'Long Haul Truck Driver',
    company: 'Swift Transportation',
    location: 'Phoenix, AZ',
    pay: 75000,
    type: 'Full-time',
    route: 'Cross-country',
    description: 'Seeking experienced long haul drivers for cross-country routes. Modern fleet and great benefits.',
    isSaved: false,
  },
  {
    id: '2',
    title: 'Local Delivery Driver',
    company: 'Prime Inc.',
    location: 'Springfield, MO',
    pay: 55000,
    type: 'Full-time',
    route: 'Local',
    description: 'Join our team of local delivery drivers. Home every night. Requires a clean driving record.',
    isSaved: true,
  },
  {
    id: '3',
    title: 'Regional Route Operator',
    company: 'Schneider',
    location: 'Green Bay, WI',
    pay: 65000,
    type: 'Part-time',
    route: 'Regional',
    description: 'Part-time regional routes available. Flexible schedule and competitive pay per mile.',
    isSaved: false,
  },
  {
    id: '4',
    title: 'Owner Operator',
    company: 'Landstar System',
    location: 'Jacksonville, FL',
    pay: 150000,
    type: 'Contract',
    route: 'Varies',
    description: 'Be your own boss. We provide the freight, you provide the truck. High earning potential.',
    isSaved: false,
  },
  {
    id: '5',
    title: 'Team Driver Position',
    company: 'CRST International',
    location: 'Cedar Rapids, IA',
    pay: 85000,
    type: 'Full-time',
    route: 'Cross-country',
    description: 'Hiring driving teams for expedited cross-country freight. Earn more with a partner.',
    isSaved: false,
  },
  {
    id: '6',
    title: 'Flatbed Specialist',
    company: 'Werner Enterprises',
    location: 'Omaha, NE',
    pay: 80000,
    type: 'Full-time',
    route: 'Regional',
    description: 'Specialized flatbed division is hiring. Experience with securing loads is a must.',
    isSaved: false,
  },
];

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    location: '',
    type: 'all',
    minPay: 30000,
  });

  const handleSaveToggle = (id: string) => {
    let jobTitle = '';
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        jobTitle = job.title;
        return { ...job, isSaved: !job.isSaved };
      }
      return job;
    });
    setJobs(updatedJobs);
    
    const job = updatedJobs.find(j => j.id === id);
    if(job) {
      toast({
        title: job.isSaved ? "Job Saved!" : "Job Unsaved",
        description: `${jobTitle} has been ${job.isSaved ? 'added to' : 'removed from'} your saved jobs.`,
      })
    }
  };
  
  const handleJobPost = (newJob: Omit<Job, 'id' | 'isSaved'>) => {
    const jobWithId: Job = {
      ...newJob,
      id: (jobs.length + 1).toString(),
      isSaved: false,
    };
    setJobs([jobWithId, ...jobs]);
     toast({
        title: "Job Posted!",
        description: `${newJob.title} has been successfully posted.`,
      })
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === 'all' || job.type === filters.type) &&
      job.pay >= filters.minPay
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onJobPost={handleJobPost} />
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4 xl:col-span-3">
            <JobSearchFilters filters={filters} onFilterChange={setFilters} />
          </aside>
          <div className="lg:col-span-8 xl:col-span-9">
            <JobList jobs={filteredJobs} onSaveToggle={handleSaveToggle} />
          </div>
        </div>
      </main>
    </div>
  );
}
