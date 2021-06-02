import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
  relatedVideoReducer,
  searchVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
} from "./reducers/videoReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentListReducer } from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchVideos: searchVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
