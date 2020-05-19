<div align="center">
  <img width="50px" src="frontend/public/felix_logo.png" >
</div>

<div align="center">
    <a href="http://app-felix.herokuapp.com/#/">Live site</a>
</div>

# Felix

Felix is a single-page app that provides curated selections of media to enjoy based on the selected emotion.

## Background and Overview

For the times when you want to boost your mood or want to feel the blues then Felix is here to help. Just choose the emotion that you want to experience and Felix will give you a selection of handpicked media to get you there!

## Dashboard

![DASH](https://felixgroupmern.s3.amazonaws.com/new-dash.png)

## Rendering media

```
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

## Favoriting and Unfavoriting

Create an account and tap the heart to save your favorites.

![FAVORITE](https://felixgroupmern.s3.amazonaws.com/new-fav.png)

```
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

## The Team

- [Eddy Flores - Team Lead](https://github.com/makaveddy)
- [Aimy Yu - Backend Lead, Fullstack](https://github.com/aimyaa)
- [Karl Fleener - Frontend Lead](https://github.com/karlfleener)
- [Vivienne Van Vliet - Frontend Flex](https://github.com/cleopatra2035)

