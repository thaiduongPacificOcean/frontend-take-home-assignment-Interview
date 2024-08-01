import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
type FilterValue = 'all' | 'pending' | 'completed'

interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterValue>>;
  currentFilter: FilterValue; // đang chọn 
}
const Index = () => {
  const [filter, setFilter] = useState<FilterValue>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10 font-sans">
          Todo App
        </h1>
        <Filter setFilter={setFilter} currentFilter={filter} />
        <div className="pt-10">
          <TodoList filter={filter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}
const Filter = ({ setFilter, currentFilter }: FilterProps) => {

  const handleFilterChange = (value: string) => {
    const newFilter: FilterValue = value as FilterValue;
    setFilter(newFilter);
  };

  return (
    <Tabs.Root defaultValue="all" onValueChange={handleFilterChange}>
      <Tabs.List className='flex justify-start'>
        <Tabs.Trigger
          className={`flex items-center justify-center h-9 p-5 rounded-full mr-2 font-sans ${currentFilter === 'all' ? 'bg-gray-700 text-white' : 'border border-gray-200 text-gray-700'}`}
          value="all"
        >
          <p className='text-sm'>All</p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`flex items-center justify-center h-9 p-5 rounded-full mr-2 font-sans ${currentFilter === 'pending' ? 'bg-gray-700 text-white' : 'border border-gray-200 text-gray-700'}`}
          value="pending"
        >
          <p className='text-sm'>Pending</p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className={`flex items-center justify-center h-9 p-5 rounded-full mr-2 font-sans ${currentFilter === 'completed' ? 'bg-gray-700 text-white' : 'border border-gray-200 text-gray-700'}`}
          value="completed"
        >
          <p className='text-sm'>Completed</p>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
export default Index
