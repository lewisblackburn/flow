import React from 'react'

class MovieRow extends React.Component {
  render() {
    return (
      <table key={this.props.movie.id} style={{ padding: '20px' }}>
        <tbody>
          <tr>
            <td>
              <a
                href={`https://www.themoviedb.org/movie/${this.props.movie.id}`}
                target="_blank"
              >
                <img
                  alt="poster"
                  width="120"
                  src={this.props.movie.poster}
                  style={{ borderRadius: '10px' }}
                />
              </a>
            </td>
            <td width="10"></td>
            <td>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {this.props.movie.title}
              </span>
              <br />
              <span>{this.props.movie.overview}</span>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MovieRow
