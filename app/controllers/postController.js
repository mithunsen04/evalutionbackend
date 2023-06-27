

const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, body, device } = req.body;
    const userId = req.userId;
    const post = new Post({ title, body, device, author: userId });
    await post.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const userId = req.userId;
    const deviceFilter = req.query.device;
    let posts;
    if (deviceFilter) {
      posts = await Post.find({ device: deviceFilter, author: userId });
    } else {
      posts = await Post.find({ author: userId });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, body, device } = req.body;
    const userId = req.userId;
    const post = await Post.findOneAndUpdate(
      { _id: postId, author: userId },
      { title, body, device },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: 'Post not found or unauthorized' });
    }
    res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;
    const post = await Post.findOneAndDelete({ _id: postId, author: userId });
    if (!post) {
      return res.status(404).json({ error: 'Post not found or unauthorized' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
