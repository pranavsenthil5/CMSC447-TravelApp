import React, { useState } from 'react';
import {
  Avatar,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import { Edit, Delete, AddComment } from '@mui/icons-material';

const CommentBox = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      userName: 'John Doe',
      profilePicture: 'url-to-profile-picture-1',
      content: 'This is the first comment.',
      postDate: 'December 1, 2023',
      likeCount: 5,
    },
    {
      id: 2,
      userName: 'Jane Doe',
      profilePicture: 'url-to-profile-picture-2',
      content: 'This is the second comment.',
      postDate: 'December 2, 2023',
      likeCount: 10,
    },
    // Add other comments as needed
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleEdit = (commentId) => {
    setIsEditing(true);
    // Find the comment to edit based on the commentId
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    setEditedContent(commentToEdit.content);
    setEditingCommentId(commentId);
  };

  const handleSaveEdit = () => {
    // Implement logic to save edited content
    const updatedComments = comments.map((comment) => {
      if (comment.id === editingCommentId) {
        return { ...comment, content: editedContent };
      }
      return comment;
    });

    setComments(updatedComments);
    setEditedContent('');
    setEditingCommentId(null);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedContent('');
    setEditingCommentId(null);
    setIsEditing(false);
  };

  const handleDelete = (commentId) => {
    // Implement logic to delete the comment
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    setIsAddingComment(true);
  };

  const handleSaveComment = () => {
    const newCommentObject = {
      id: comments.length + 1,
      userName: 'New User', // You can replace this with the actual user data
      profilePicture: 'url-to-profile-picture', // You can replace this with the actual user's profile picture
      content: newComment,
      postDate: new Date().toLocaleDateString(), // You can format the date as needed
      likeCount: 0,
    };

    setComments((prevComments) => [...prevComments, newCommentObject]);
    setNewComment('');
    setIsAddingComment(false);
  };

  const handleCancelComment = () => {
    setNewComment('');
    setIsAddingComment(false);
  };

  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardHeader
            avatar={<Avatar alt={comment.userName} src={comment.profilePicture} />}
            title={comment.userName}
            subheader={comment.postDate}
          />
          <CardContent>
            {isEditing && comment.id === editingCommentId ? (
              <TextField
                multiline
                fullWidth
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            ) : (
              <Typography variant="body1">{comment.content}</Typography>
            )}
          </CardContent>
          <CardActions>
            <IconButton onClick={() => handleEdit(comment.id)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDelete(comment.id)}>
              <Delete />
            </IconButton>
            {comment.id === editingCommentId && (
            <>
              <Button onClick={handleSaveEdit} color="primary">
                Save
              </Button>
              <Button onClick={handleCancelEdit} color="primary">
                Cancel
              </Button>
            </>
          )}
            <Typography>{comment.likeCount} Likes</Typography>
          </CardActions>
        </Card>
      ))}

      {/* Add Comment Button */}
      <CardActions>
        <IconButton onClick={handleAddComment}>
          <AddComment />
        </IconButton>
      </CardActions>

      {/* Add Comment Dialog */}
      <Dialog open={isAddingComment} onClose={handleCancelComment}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelComment} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveComment} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentBox;