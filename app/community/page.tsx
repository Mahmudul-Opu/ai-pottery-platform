'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Heart, Flag, Users, Sparkles, TrendingUp } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

interface Post {
  id: number;
  author: string;
  role: 'artisan' | 'customer';
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
}

export default function CommunityPage() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'রহিম কারিগর (Rahim)',
      role: 'artisan',
      content: '🏺 I just sold my first vase through this platform! Thank you to everyone who supported me. Special thanks to the AI marketing tool - it helped me write better product descriptions!',
      likes: 24,
      replies: 5,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Sarah Ahmed',
      role: 'customer',
      content: 'Question: How long does shipping usually take for pottery items? I want to order a set for my parents.',
      likes: 8,
      replies: 3,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      author: 'করিম মৃৎশিল্পী (Karim)',
      role: 'artisan',
      content: '✨ Success story: Using the photo tips from the learning section, my product views increased by 50%! Natural lighting really makes a difference.',
      likes: 31,
      replies: 12,
      timestamp: '1 day ago'
    }
  ]);

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post: Post = {
      id: posts.length + 1,
      author: 'You',
      role: 'artisan',
      content: newPost,
      likes: 0,
      replies: 0,
      timestamp: 'Just now'
    };
    
    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            🤝 Artisan Community Forum
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Connect with fellow artisans and customers. Share experiences, ask questions, and learn together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">248</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Members</p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">1,243</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Posts</p>
                </div>
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">3,892</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Replies</p>
                </div>
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">89%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  Share with Community
                </CardTitle>
                <CardDescription>
                  Ask questions, share success stories, or give feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="What's on your mind? Share your pottery journey..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  rows={4}
                  className="mb-3"
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-500">Be respectful and supportive</p>
                  <Button onClick={handlePost} disabled={!newPost.trim()}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white font-semibold">
                      {post.author[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{post.author}</span>
                        <Badge variant={post.role === 'artisan' ? 'default' : 'secondary'}>
                          {post.role === 'artisan' ? '🏺 Artisan' : '👤 Customer'}
                        </Badge>
                        <span className="text-xs text-slate-500">{post.timestamp}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4 whitespace-pre-line">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies} Replies
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                          <Flag className="w-4 h-4" />
                          Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📋 Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <span>✅</span>
                  <p>Be respectful and supportive</p>
                </div>
                <div className="flex gap-2">
                  <span>✅</span>
                  <p>Share helpful experiences</p>
                </div>
                <div className="flex gap-2">
                  <span>✅</span>
                  <p>Ask questions freely</p>
                </div>
                <div className="flex gap-2">
                  <span>❌</span>
                  <p>No spam or advertising</p>
                </div>
                <div className="flex gap-2">
                  <span>❌</span>
                  <p>No offensive language</p>
                </div>
                <div className="flex gap-2">
                  <span>❌</span>
                  <p>No false information</p>
                </div>
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔥 Popular Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  #ProductPhotography
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  #PricingTips
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  #SuccessStories
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  #ShippingHelp
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  #AITools
                </Button>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">🌟 Join the Community!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Connect with 200+ artisans and learn from each other's experiences.
                </p>
                <Button className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Become a Member
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
