import { Book, Author } from '../types';
import { TabButton } from './TabButton';
import { CheckCircle, XCircle } from 'lucide-react';

interface AvailabilityTabsProps {
  activeTab: 'available' | 'unavailable';
  onTabChange: (tab: 'available' | 'unavailable') => void;
}

export function AvailabilityTabs({ activeTab, onTabChange }: AvailabilityTabsProps) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <TabButton
        active={activeTab === 'available'}
        onClick={() => onTabChange('available')}
        icon={CheckCircle}
        label="Available"
      />
      <TabButton
        active={activeTab === 'unavailable'}
        onClick={() => onTabChange('unavailable')}
        icon={XCircle}
        label="Unavailable"
      />
    </div>
  );
}