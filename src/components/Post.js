const Post = ({title, description}) => {

  return (
    <div className="post">
      <div className="post__image">
        <img src="" alt="img" />
      </div>
      <div className="post__info">
        <h2 className="post__title">{title}</h2>
        <p className="post_description">{description}</p>
      </div>
    </div>
  );
}

export default Post;