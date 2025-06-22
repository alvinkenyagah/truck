"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Filter, Search, X } from 'lucide-react';

type Filters = {
  location: string;
  type: string;
  minPay: number;
};

type JobSearchFiltersProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};

export default function JobSearchFilters({
  filters,
  onFilterChange,
}: JobSearchFiltersProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    onFilterChange({ ...filters, type: value });
  };

  const handleSliderChange = (value: number[]) => {
    onFilterChange({ ...filters, minPay: value[0] });
  };
  
  const clearFilters = () => {
    onFilterChange({ location: '', type: 'all', minPay: 30000 });
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <span>Filter Jobs</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              name="location"
              placeholder="City or State"
              value={filters.location}
              onChange={handleInputChange}
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Job Type</Label>
          <Select value={filters.type} onValueChange={handleSelectChange}>
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="minPay">Minimum Annual Pay</Label>
          <p className="text-lg font-semibold text-primary">
            ${filters.minPay.toLocaleString()}
          </p>
          <Slider
            id="minPay"
            min={30000}
            max={200000}
            step={5000}
            value={[filters.minPay]}
            onValueChange={handleSliderChange}
          />
           <div className="flex justify-between text-xs text-muted-foreground">
            <span>$30k</span>
            <span>$200k+</span>
          </div>
        </div>
         <Button onClick={clearFilters} variant="outline" className="w-full">
            <X className="mr-2 h-4 w-4" />
            Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}
