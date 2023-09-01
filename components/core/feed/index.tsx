import LoginForm from "@components/core/login/login-form";
import SignUpForm from "@components/core/signup-form";
import Modal from "@components/shared/modal";
import { POSTS as posts } from "@constants/posts";
import { useState } from "react";
import styles from "./Feed.module.scss";
import Intro from "./intro";
import PostCard from "./post-card";

const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <div className={styles.container}>
      <Intro userName="Jane" />

      <section className={styles.posts}>
        <PostCard type="create" onClick={() => setIsModalOpen(true)} />

        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => setIsModalOpen(true)}
            />
          );
        })}
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isLoginModal ? (
          <LoginForm
            onClose={() => setIsModalOpen(false)}
            onFollowUpClick={() => setIsLoginModal(false)}
          />
        ) : (
          <SignUpForm
            onClose={() => setIsModalOpen(false)}
            onFollowUpClick={() => setIsLoginModal(true)}
          />
        )}
      </Modal>
    </div>
  );
};

export default Feed;
