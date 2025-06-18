import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const DescriptionAndReviews = ({ productId, description, user }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
  });
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    fetchReviews(productId);
  }, [productId]);

  const fetchReviews = async (productId) => {
    try {
      const response = await axios.get(`/api/products/${productId}/reviews`);
      setReviews(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      setReviews([]);
      toast.error('Failed to fetch reviews');
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please log in to submit a review');
      return;
    }
    try {
      if (editingReview) {
        await axios.put(`/api/products/${productId}/reviews/${editingReview._id}`, {
          rating: newReview.rating,
          comment: newReview.comment,
        });
        toast.success('Review updated successfully');
      } else {
        await axios.post(`/api/products/${productId}/reviews`, {
          rating: newReview.rating,
          comment: newReview.comment,
        });
        toast.success('Review added successfully');
      }
      fetchReviews(productId);
      setNewReview({ rating: 5, comment: '' });
      setEditingReview(null);
    } catch (error) {
      console.error('Review submission error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit review');
    }
  };

  const handleEditReview = (review) => {
    if (!user || user._id !== review.user?._id) {
      toast.error('You can only edit your own reviews');
      return;
    }
    setEditingReview(review);
    setNewReview({
      rating: review.rating,
      comment: review.comment,
    });
  };

  const handleDeleteReview = async (reviewId) => {
    if (!user) {
      toast.error('Please log in to delete a review');
      return;
    }
    try {
      await axios.delete(`/api/products/${productId}/reviews/${reviewId}`);
      toast.success('Review deleted successfully');
      fetchReviews(productId);
    } catch (error) {
      console.error('Review deletion error:', error);
      toast.error(error.response?.data?.message || 'Failed to delete review');
    }
  };

  return (
    <div>
      <div className="flex gap-6 border-b border-gray-200">
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'description'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'reviews'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className="mt-6 text-sm leading-relaxed text-gray-600">
        {activeTab === 'description' ? (
          <div>
            <p>{description}</p>
            <p className="mt-4">
              E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="text-2xl focus:outline-none"
                    >
                      {star <= newReview.rating ? '★' : '☆'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Review</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  rows={4}
                  required
                  placeholder="Write your review here..."
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {editingReview ? 'Update Review' : 'Submit Review'}
                </button>
                {editingReview && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingReview(null);
                      setNewReview({ rating: 5, comment: '' });
                    }}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            <div className="space-y-6">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review._id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {review.user?.name || 'Anonymous'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      {user && user._id === review.user?._id && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditReview(review)}
                            className="text-sm text-indigo-600 hover:text-indigo-900 focus:outline-none"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteReview(review._id)}
                            className="text-sm text-red-600 hover:text-red-900 focus:outline-none"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No reviews yet. Be the first to share your feedback!</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionAndReviews;