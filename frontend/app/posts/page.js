'use client';
import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../api/api';
import Link from 'next/link';
import { Trash2, Eye, PlusCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des posts:', error);
      setError('Échec de la récupération des posts. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirmation(id);
  };

  const confirmDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
      setDeleteConfirmation(null);
    } catch (error) {
      console.error('Erreur lors de la suppression du post:', error);
      setError('Échec de la suppression du post. Veuillez réessayer.');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <div className="space-x-2">
          <Link
            href="/posts/create"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Créer un Nouveau Post
          </Link>
          <button
            onClick={fetchPosts}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Rafraîchir
          </button>
        </div>
      </motion.div>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center py-10"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Chargement des posts...</p>
        </motion.div>
      )}

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Erreur!</strong>
            <span className="block sm:inline"> {error}</span>
            <button
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setError(null)}
            >
              <AlertCircle className="h-6 w-6 text-red-500" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && !error && posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10"
        >
          <p className="text-gray-600">Aucun post trouvé. Créez votre premier post!</p>
        </motion.div>
      )}

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            layout
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.slice(0, 100)}...</p>
              <div className="flex justify-end space-x-2">
                <Link
                  href={`/posts/${post.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir/Modifier
                </Link>

                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer
                </button>
              </div>
            </div>
            {deleteConfirmation === post.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-red-100 p-4"
              >
                <p className="text-red-800 mb-2">Êtes-vous sûr de vouloir supprimer ce post?</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => confirmDelete(post.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  >
                    Oui
                  </button>
                  <button
                    onClick={() => setDeleteConfirmation(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded"
                  >
                    Non
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
