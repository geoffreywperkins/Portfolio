import React from 'react';
import Button from './Button';

const Card = ({name, repo, url}) => {
  return (
    <div className="card">
      <img
        className="card-img hover"
        src={require(`../assets/${name.toLowerCase().split(' ').join('-')}.png`)}  // Image filenames are based on the name in projects.json
      />
      <div className="card-content">
        <h3 className="card-title">
          {name.toUpperCase()}
        </h3>
        <Button
          text="GITHUB"
          link={repo}
        />
        {url && (
          <Button
            text="WEBSITE"
            link={url}
          />
        )}
      </div>
    </div>
  )
}

export default Card;