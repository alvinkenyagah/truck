import type { Job } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, MapPin, DollarSign, Briefcase, Route } from 'lucide-react';

type JobCardProps = {
  job: Job;
  onSaveToggle: (id: string) => void;
};

export default function JobCard({ job, onSaveToggle }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
            <div>
                <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                <CardDescription className="text-base">{job.company}</CardDescription>
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onSaveToggle(job.id)}
                aria-label={job.isSaved ? 'Unsave job' : 'Save job'}
                className="flex-shrink-0"
            >
                <Bookmark
                className={`h-6 w-6 transition-colors ${
                    job.isSaved ? 'text-accent fill-accent' : 'text-muted-foreground'
                }`}
                />
            </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary"/>
                <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary"/>
                <span>{`$${job.pay.toLocaleString()} / year`}</span>
            </div>
            <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary"/>
                <span>{job.type}</span>
            </div>
             <div className="flex items-center gap-2">
                <Route className="h-4 w-4 text-primary"/>
                <span>{job.route}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  );
}
