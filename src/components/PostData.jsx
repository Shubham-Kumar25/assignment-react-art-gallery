import React from "react";
import Post from "./Post";
import profile1 from "../assets/profile1.png";
import post1 from "../assets/post1.png";
import profile2 from "../assets/profile2.png";
import post2 from "../assets/post2.png";

const postData = [
  {
    id: 1,
    profileImage: profile1,
    name: "Lara Leones",
    username: "thewallart",
    postText:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
    postImage: post1,
    likes: "29.8k",
    comments: "8.6k",
    shares: "7.2k",
  },
  {
    id: 2,
    profileImage: profile2,
    name: "Thomas J.",
    username: "thecustomcreator",
    postText:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    postImage: post2,
    likes: "68.9k",
    comments: "32.3k",
    shares: "16.8k",
  },
];

const PostData = () => (
  <div className="w-160 h-[720px] overflow-y-scroll">
    {postData.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default PostData;
