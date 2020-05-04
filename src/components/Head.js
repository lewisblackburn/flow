import React from 'react'

export default function Head(props) {
  return (
    <div className="Navigation">
      <a href="https://www.themoviedb.org" target="_blank">
        <img alt="" src="logo.svg" style={{ width: '80px', padding: '30px' }} />
      </a>
      <input
        onChange={props.searchChangeHandler}
        placeholder="search movies..."
      />
    </div>
  )
}
