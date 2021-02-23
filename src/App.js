import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';
import { connect } from 'react-redux';

const App = ({ posts, setPosts, changeRegion }) => {
  const { news } = posts;

  useEffect(() => {
    setPosts([]);
    axios.get('https://60343e5a843b150017932513.mockapi.io/posts').then(({ data }) => {
      setPosts(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <h3>Регионы</h3>
      <ul>
        <li><button onClick={() => changeRegion('YKT')}>Якутск</button></li>
      </ul>
      {
        news.length > 0 ?
        news.map(({title, description, image}) => {
          return <Post title={title} description={description} image={image} />
        }) : 
        <span>Loading...</span>
      }
    </div>
  );
}

const state = (props) => {
  return props;
}

const actions = (dispatch) => ({
  setPosts: (data) => dispatch({
    type: "SET_POSTS",
    payload: data 
  }),
  changeRegion: (name) => dispatch({
    type: "CHANGE_REGION",
    payload: name
  })
});

export default connect(state, actions)(App);
