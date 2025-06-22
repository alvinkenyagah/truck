"use client";

import { useState } from 'react';
import { useJobs } from '@/context/JobContext';
import Header from '@/components/layout/header';
import JobSearchFilters from '@/components/jobs/job-search-filters';
import JobList from '@/components/jobs/job-list';

export default function Home() {
  const { jobs, handleSaveToggle, handleJobPost, handleJobApply } = useJobs();
  const [filters, setFilters] = useState({
    location: '',
    type: 'all',
    minPay: 30000,
  });

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
            <JobList jobs={filteredJobs} onSaveToggle={handleSaveToggle} onApply={handleJobApply} />
          </div>
        </div>
      </main>
    </div>
  );
}
