import { connect } from "react-redux";
import Like from "./favorites";
import {
  createLike,
  deleteLike,
  getUserLikes,
} from "../../actions/favorite_actions";

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
