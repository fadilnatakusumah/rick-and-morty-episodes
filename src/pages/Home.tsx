import React, { useContext, useEffect } from 'react'
import { Store } from '../store'
import HTMLParser from 'react-html-parser'
import { fetchData, toggleFav } from '../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch);
  })

  const { episodes } = state;

  const isLiked = (id: number) => {
    const check = state.favorites.find((fav: any) => fav.id === id);
    if (check) { return true }
    return false
  };

  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'center' }}>Choose your favorite episodes</h3>
      {episodes.length > 0 &&
        episodes.map((episode: any) => (
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <img alt={episode.name} src={episode.image.original} width={330} style={{ borderRadius: '10px' }} />
              <span
                onClick={() => toggleFav(episode, state, dispatch)}
                style={{
                  color: isLiked(episode.id) ? 'red' : 'black',
                  position: 'absolute',
                  right: '40px',
                  bottom: '10px',
                  fontSize: '2em',
                  cursor: 'pointer'
                }}><FontAwesomeIcon icon={faHeart} /></span>
            </div>
            <div style={{ textAlign: 'left', padding: '5px 20px' }}>
              <span>
                <label style={{ fontSize: '2em' }}>{episode.name}</label>
                <a href={episode.url} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', marginLeft: '10px' }}>Look it up</a>
              </span>
              {HTMLParser(episode.summary)}
            </div>
          </div>
        ))
      }
    </React.Fragment >
  )
}

export default Home
