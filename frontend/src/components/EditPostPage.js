import React from 'react';
import NavBar from './NavBar.js';

export default function EditPostPage() {
  const isLoggedin = true;
  if (isLoggedin) {
  return (
    <div>   
      <NavBar />
      Edit Post Page
    </div>
  );
  }
}
