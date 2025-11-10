import StatsCard from '../StatsCard';
import { Users } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <StatsCard
        title="Total Bookings"
        value={127}
        icon={Users}
        description="+12% from last month"
      />
    </div>
  );
}
