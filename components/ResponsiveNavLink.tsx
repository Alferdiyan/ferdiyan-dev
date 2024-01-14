import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ResponsiveNavLink({ href, children }: Props) {
  return (
    <a href={href} className="px-4 py-2 text-sm hover:bg-gray-200 text-gray-700 hover:text-black block">
      {children}
    </a>
  );
}
