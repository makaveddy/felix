import React from "react";
import './emotion_index.css'
import EmotionIndexItem from './emotion_index_item'

class MainPage extends React.Component {
  render() {

    // const allEmotions = emotions.map(emotion => (
    //   <EmotionIndexItem key={emotion.id} emotion={emotion} />
    // ))

    return (
      <div className="emotion-container">
        <h1 className='main-header'>How would you like to feel today?</h1>
        <div className="emotion">
          {/* {AllEmotions} */}
          <EmotionIndexItem />
          <EmotionIndexItem />
          <EmotionIndexItem />
          <EmotionIndexItem />
          <EmotionIndexItem />
        </div>
      </div>
    );
  }
}

export default MainPage;
