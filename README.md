<div align="center">
  <img width="50px" src="frontend/public/felix_logo.png" alt="logo">
</div>

<div align="center">
    <a href="http://app-felix.herokuapp.com/#/">Live site</a>
</div>

# Felix

Felix is a single-page app that provides curated selections of media to enjoy based on the selected emotion.

## Table of Contents

- [Background and Overview](#background-and-overview)
- [Technologies](#technologies)
- [Languages](#languages)
- [Features](#features)
  * [User Authentication](#user-authentication)
  * [Dashboard](#dashboard)
  * [Media Content](#media-content)
  * [Favorites](#favorites)
- [Code Highlights](#code-highlights)
  *  [Rendering media](#rendering-media)
  *  [Favoriting and unfavoriting](#favoriting-and-unfavoriting)
- [The Team](#the-team)

## Background and Overview

For the times when you want to boost your mood or want to feel the blues then Felix is here to help. Just choose the emotion that you want to experience and Felix will give you a selection of handpicked media to get you there!

## Technologies

- Node.js as runtime environment
- Express.js as backend server
- MongoDB as backend database
- React for user interface
- Redux for state management
- Git for version control

## Languages 

- JavaScript
- HTML5
- CSS3

## Features 

### User Authentication

- Visitors are prompted to sign up or log in to access content.
- Site utilizes BCrypt for password security.
</br></br>

### Dashboard
- The dashboard displays emotions to choose from.
</br></br>

### Media Content
- Each emotion has its own associated media.
</br></br>

### Favorites
- Users can save their favorite media items to their profile. 
</br></br>

## Code Highlights

### Rendering media

- Each media item renders a ReactPlayer component with the option to be favorited.
```JavaScript
// media_item.js

render () {
  if (!this.props.favorites) {
    return null;
  }
  
  const { id } = this.props.media;
  let contentIds = [];

  if (this.props.favorites) {
  Object.values(this.props.favorites).forEach(favorite => {
    contentIds.push(favorite.contentId);
  })};

  let favoriteButton;
  if (contentIds.includes(id)) {
    favoriteButton = 'red';
  } else {
    favoriteButton = '';
  }

  return (
    <div className="media-item-container">
      <div className="media-item-preview">
        <ReactPlayer
          url={this.props.media.url}
          width="100%"
          height="100%"
          controls
          volume={1}
        />
      </div>

      <div className='media-item-info'>
        <div div className="media-item-title">{this.props.media.title}</div>
        <i onClick={this.handleFavorite} className={`far fa-heart ${favoriteButton}`}></i>
      </div>
    </div>
  );
}
```
</br>

### Favoriting and unfavoriting
- Tap the heart to add a favorite and untap to remove it.


```JavaScript
// media_item.js 

handleFavorite(e) {
  e.preventDefault();
  const {id, title, url, emotion} = this.props.media;
  const userId = this.props.userId;
  const contentId = id;
  const contentTitle = title;
  const contentUrl = url;
  const contentEmotion = emotion;
  
  let contentIds = [];
  let favoriteIds = [];

  Object.values(this.props.favorites).forEach(favorite => {
    contentIds.push(favorite.contentId);
    favoriteIds.push(favorite._id);
  });
  
  if (contentIds.includes(contentId)) {
    const index = contentIds.indexOf(contentId);
    this.props.removeFavorite(favoriteIds[index]);
  } else {
    this.props.createFavorite({ userId, contentId, contentTitle, contentEmotion, contentUrl});
  };

  e.target.classList.toggle("red");
}
```

## The Team

- [Eddy Flores - Team Lead](https://github.com/makaveddy)
- [Aimy Yu - Backend Lead, Fullstack](https://github.com/aimyaa)
- [Karl Fleener - Frontend Lead](https://github.com/karlfleener)
- [Vivienne Van Vliet - Frontend Flex](https://github.com/cleopatra2035)



