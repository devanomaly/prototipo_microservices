import React from 'react'

export default ({comments} ) => {

  
  const renderedComments = comments.map(comment => {
    let content
    switch (comment.status) {
      case 'approved':
        content = comment.content
        break;
      case 'rejected':
        content = "This comment was rejected"
        break
    
      default:
        content = "This comment is awaiting for moderation. Thanks for engaging!"
        break;
    }
    return <li key={comment.id}>{content}</li>
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )

}