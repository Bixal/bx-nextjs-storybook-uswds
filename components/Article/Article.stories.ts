import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Article } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Example/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
    author: { control: 'text' },
    date: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {
    title: 'Example Article Component',
    link: 'https://github.com/Bixal/bx-nextjs-storybook-uswds',
    author: 'First Last',
    date: '09/22/2025',
    children: 'This is the content of the article. Use plain text here.',
  },
};

export const NoMeta: Story = {
  args: {
    title: 'Example Article Without Meta',
    link: 'https://github.com/Bixal/bx-nextjs-storybook-uswds',
    children: 'This article does not have author or date information.',
  },
};
