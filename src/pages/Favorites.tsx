import React, { useContext } from 'react'
import { Store } from '../store';
import { IState } from '../store/interfaces';
import { toggleFav } from '../store/actions';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HtmlParser from 'react-html-parser';

function Favorites() {
  const { state, dispatch } = useContext(Store);

  const { favorites } = state;

  const isLiked = (id: number) => {
    const check = state.favorites.find((fav: any) => fav.id === id);
    if (check) { return true }
    return false
  };

  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'center' }}>Your favorite episodes</h3>
      {favorites.length === 0 &&
        <div style={{
          width: '300px',
          height: '400px',
          textAlign: 'center',
          margin: ' auto',
          display: 'flex',
          alignItems: 'center'
        }}>
          <p>You don't have any favorite episode :(</p>
        </div>
      }
      {
        favorites.length > 0 &&
        favorites.map((episode: any) => (
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
              {HtmlParser(episode.summary)}
            </div>
          </div>
        ))
      }
    </React.Fragment >
  )

}

export default Favorites
