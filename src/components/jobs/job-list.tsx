import type { Job } from '@/lib/types';
import JobCard from './job-card';
import type { ApplicationFormValues } from './apply-job-dialog';

type JobListProps = {
  jobs: Job[];
  onSaveToggle: (id: string) => void;
  onApply: (jobId: string, application: ApplicationFormValues) => void;
};

export default function JobList({ jobs, onSaveToggle, onApply }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16 bg-card rounded-lg shadow-sm">
        <h2 className="text-2xl font-headline font-bold mb-2">No Jobs Found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search filters to find more opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onSaveToggle={onSaveToggle} onApply={onApply} />
      ))}
    </div>
  );
}
