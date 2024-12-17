import { Library, Users } from 'lucide-react';
import { TabButton } from './TabButton';

type Tab = 'books' | 'authors';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <TabButton
        active={activeTab === 'books'}
        onClick={() => onTabChange('books')}
        icon={Library}
        label="Books"
      />
      <TabButton
        active={activeTab === 'authors'}
        onClick={() => onTabChange('authors')}
        icon={Users}
        label="Authors"
      />
    </div>
  );
}