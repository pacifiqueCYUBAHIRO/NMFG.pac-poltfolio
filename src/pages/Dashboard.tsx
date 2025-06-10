
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from '@/components/ThemeToggle';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Building Scalable React Applications',
      content: 'Full content of the blog post...',
      excerpt: 'Best practices and patterns for creating maintainable React applications that scale with your team and project requirements.',
      date: 'Dec 15, 2023',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'The Future of Web Development',
      content: 'Full content of the blog post...',
      excerpt: 'Exploring emerging trends and technologies that are shaping the future of web development and user experiences.',
      date: 'Dec 10, 2023',
      readTime: '7 min read'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    readTime: ''
  });

  const handleCreatePost = () => {
    setIsEditing(true);
    setEditingPost(null);
    setFormData({ title: '', content: '', excerpt: '', readTime: '' });
  };

  const handleEditPost = (post: BlogPost) => {
    setIsEditing(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      readTime: post.readTime
    });
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post deleted",
      description: "Blog post has been successfully deleted.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...formData }
          : post
      ));
      toast({
        title: "Post updated",
        description: "Blog post has been successfully updated.",
      });
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "Post created",
        description: "New blog post has been successfully created.",
      });
    }
    
    setIsEditing(false);
    setEditingPost(null);
    setFormData({ title: '', content: '', excerpt: '', readTime: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {!isEditing ? (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-portfolio-primary">{posts.length}</div>
                  <div className="text-sm text-muted-foreground">Total Posts</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-portfolio-primary">1,234</div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-portfolio-primary">89</div>
                  <div className="text-sm text-muted-foreground">Comments</div>
                </CardContent>
              </Card>
            </div>

            {/* Blog Management */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-bold">Blog Posts</h2>
                <Button 
                  onClick={handleCreatePost}
                  className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
                >
                  Create New Post
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-bold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditPost(post)}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          /* Edit/Create Form */
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <h2 className="text-2xl font-bold">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                
                <div>
                  <Label htmlFor="content">Content</Label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                
                <div>
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    placeholder="5 min read"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
                  >
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
