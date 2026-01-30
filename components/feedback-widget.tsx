'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeedbackWidgetProps {
  context: string; // e.g., "AI Design Suggestion", "Product Recommendation"
  itemId?: string; // Optional ID for the item being evaluated
  onFeedbackSubmit?: (helpful: boolean, context: string) => void;
}

export default function FeedbackWidget({ 
  context, 
  itemId,
  onFeedbackSubmit 
}: FeedbackWidgetProps) {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleFeedback = async (helpful: boolean) => {
    // Store feedback locally or send to API
    const feedback = {
      helpful,
      context,
      itemId,
      timestamp: new Date().toISOString(),
    };

    // In production, this would send to your API endpoint
    // For research prototype, store in localStorage
    try {
      const existingFeedback = localStorage.getItem('user_feedback');
      const feedbackArray = existingFeedback ? JSON.parse(existingFeedback) : [];
      feedbackArray.push(feedback);
      localStorage.setItem('user_feedback', JSON.stringify(feedbackArray));

      // Call optional callback
      if (onFeedbackSubmit) {
        onFeedbackSubmit(helpful, context);
      }

      setFeedbackGiven(true);

      // Auto-hide after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Error storing feedback:', error);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border-2 border-emerald-200 p-4 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close feedback widget"
        >
          <X className="h-4 w-4" />
        </button>

        {!feedbackGiven ? (
          <>
            <h4 className="font-semibold text-gray-900 mb-2">
              Was this helpful?
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              {context}
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => handleFeedback(true)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                size="sm"
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes
              </Button>
              <Button
                onClick={() => handleFeedback(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500"
                size="sm"
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Your feedback helps improve our recommendations
            </p>
          </>
        ) : (
          <div className="text-center py-2">
            <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-900 mb-1">
              Thank you!
            </p>
            <p className="text-sm text-gray-600">
              Your feedback has been recorded
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Usage example component for AI Design Tool
export function AIDesignFeedback({ designId }: { designId: string }) {
  return (
    <FeedbackWidget
      context="AI-generated design suggestion"
      itemId={designId}
      onFeedbackSubmit={(helpful, context) => {
        console.log(`Feedback received: ${helpful ? 'Helpful' : 'Not helpful'} for ${context}`);
      }}
    />
  );
}

// Usage example component for Product Recommendations
export function RecommendationFeedback({ productId }: { productId: string }) {
  return (
    <FeedbackWidget
      context="Product recommendation based on your browsing"
      itemId={productId}
    />
  );
}

// Inline feedback component (smaller, embedded version)
export function InlineFeedback({ 
  context, 
  itemId 
}: { 
  context: string; 
  itemId?: string;
}) {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [helpful, setHelpful] = useState<boolean | null>(null);

  const handleFeedback = (isHelpful: boolean) => {
    const feedback = {
      helpful: isHelpful,
      context,
      itemId,
      timestamp: new Date().toISOString(),
    };

    try {
      const existingFeedback = localStorage.getItem('user_feedback');
      const feedbackArray = existingFeedback ? JSON.parse(existingFeedback) : [];
      feedbackArray.push(feedback);
      localStorage.setItem('user_feedback', JSON.stringify(feedbackArray));

      setHelpful(isHelpful);
      setFeedbackGiven(true);
    } catch (error) {
      console.error('Error storing feedback:', error);
    }
  };

  if (feedbackGiven) {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-700">
        <CheckCircle className="h-4 w-4" />
        <span>Thank you for your feedback!</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-sm text-gray-600">
      <span>Was this helpful?</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleFeedback(true)}
          className="p-1 hover:bg-emerald-50 rounded transition-colors"
          aria-label="Yes, this was helpful"
        >
          <ThumbsUp className="h-4 w-4 text-emerald-600 hover:text-emerald-700" />
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="No, this was not helpful"
        >
          <ThumbsDown className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
}
