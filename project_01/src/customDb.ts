export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    publicationYear: 1997,
  },
  {
    id: 2,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    publicationYear: 1937,
  },
  {
    id: 3,
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    publicationYear: 1989,
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    publicationYear: 2018,
  },
  {
    id: 5,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    publicationYear: 2011,
  },
  {
    id: 6,
    title: 'Start with Why',
    author: 'Simon Sinek',
    publicationYear: 2009,
  },
  {
    id: 7,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    publicationYear: 1997,
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    publicationYear: 2016,
  },
];