import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className='flex text-4xl text-center text-cyan-800'>Post not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-200 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">Location: {post.location}</p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 object-cover mb-6 rounded-lg"
          />
        )}
        <div className="prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
