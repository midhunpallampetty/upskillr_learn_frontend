import React from 'react';
export default function Footer() {
  return (
    <footer className="p-4 border-t text-sm text-center">
      © {new Date().getFullYear()} Upskillr
    </footer>
  );
}
