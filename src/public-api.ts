export interface Item {
  id: string;
  title: string;
  subtitle: string;
  closed: boolean;
}

export const defaultItems: Item[] = [
  {
    id: '1',
    title: 'Title 1',
    subtitle: 'Task 1',
    closed: true
  },
  {
    id: '2',
    title: 'Title 2',
    subtitle: 'Task 2',
    closed: false
  },
  {
    id: '3',
    title: 'Title 3',
    subtitle: 'Task 3',
    closed: true
  },
  {
    id: '4',
    title: 'Title 4',
    subtitle: 'Task 4',
    closed: false
  }
];
