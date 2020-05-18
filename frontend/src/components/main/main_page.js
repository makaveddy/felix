import React from "react";
import './emotion_index.css'
import EmotionIndexItem from './emotion_index_item'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEmotions();
  }

  render() {
    if (typeof this.props.emotions.data === 'undefined' ) {
      return null
    } 

    const allEmotions = Object.values(this.props.emotions.data).map(emotion => (
      <EmotionIndexItem key={emotion._id} emotion={emotion} />
    ))

    return (
      <div className="emotion-container">
        <h1 className='main-header'>How would you like to feel today?</h1>
        <div className="emotion">
          {allEmotions}
        </div>
      </div>
    );
  }
}

export default MainPage;
