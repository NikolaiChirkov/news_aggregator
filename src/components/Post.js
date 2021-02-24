const Post = ({ title = "some title", text = 'some description', image = '', key = '1' }) => {

  return (
    <div className="post" key={key}>
      <div className="post__image">
        <img src={image} alt="img" />
      </div>
      <div className="post__info">
        <h2 className="post__title">{title}</h2>
        <p className="post_description">{text}</p>
      </div>
    </div>
  );
}

export default Post;