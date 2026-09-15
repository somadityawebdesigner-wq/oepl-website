'use client';
import { useState } from 'react';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, image }),
    });

    setLoading(false);
    if (res.ok) {
      alert('Blog Published Successfully!');
      setTitle('');
      setContent('');
      setImage('');
    } else {
      alert('Failed to publish blog');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Custom CMS - Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Blog Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-red-700"
        />
        <input 
          type="text" 
          placeholder="Featured Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-red-700"
        />
        <textarea 
          placeholder="Write your blog content here..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
          className="w-full p-3 border rounded-lg focus:outline-red-700"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition"
        >
          {loading ? 'Publishing...' : 'Publish Blog'}
        </button>
      </form>
    </div>
  );
}