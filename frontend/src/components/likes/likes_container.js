import { connect } from "react-redux";
import Like from "./likes";
import {
  createLike,
  deleteLike,
  getUserLikes,
} from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.user,
    media: "",
    title: "",
    likes: "",
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    createLike = data => dispatch(createLike(data)),
    deleteLike = likeId => dispatch(deleteLike(likeId)),
    getUserLikes = userId => dispatch(getUserLikes(userId))
  };
};
