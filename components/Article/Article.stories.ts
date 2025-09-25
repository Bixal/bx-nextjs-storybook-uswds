import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Article } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Example/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
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
    author: 'First Last',
    date: '09/22/2025',
    children: 'This is the content of the article. You can use **Markdown** or plain text here.',
  },
};

export const NoMeta: Story = {
  args: {
    title: 'Example Article Without Meta',
    children: 'This article does not have author or date information.',
  },
};
