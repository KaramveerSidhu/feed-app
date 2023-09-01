import Button from "@components/shared/button";
import styles from "./PostCard.module.scss";
import Image from "next/image";

type PostCardProps = {
  post?: any;
  type?: "create" | "view";
  onClick?: () => void;
};

const defaultMessage = "How are you feeling today?";

const PostCard = (props: PostCardProps) => {
  const { post = {}, type = "view", onClick = () => undefined } = props;

  const isCreate = type === "create";

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.cardHeader}>
        {isCreate ? (
          <text className={styles.createTitle}>Create Post</text>
        ) : (
          <>
            <div className={styles.user}>
              <Image
                src={post.profileImgUrl}
                width={44}
                height={44}
                alt={post.userName}
                className={styles.userImg}
              />
              <div className={styles.userInfo}>
                <text className={styles.userName}> {post.userName} </text>
                <text className={styles.postTime}> {post.createdAt} </text>
              </div>
            </div>
            <Image
              src="/icons/dots-horizontal.svg"
              width={20}
              height={20}
              alt="Edit Post"
            />
          </>
        )}
      </div>

      <div className={`${styles.cardContent} ${isCreate ? styles.center : ""}`}>
        <div className={styles.emojiContainer}>
          <div className={styles.emoji}> {post.moodEmoji || "💬"} </div>
        </div>
        <div className={styles.postContent}>
          {post.content || defaultMessage}
        </div>
      </div>

      {isCreate ? (
        <Button className={styles.postBtn}> Post </Button>
      ) : (
        <div className={styles.comments}>
          <Image
            src="/icons/chat.svg"
            width={20}
            height={20}
            alt={"Comments"}
          />
          <text className={styles.commentsCount}>
            {post.commentsCount} comments
          </text>
        </div>
      )}
    </div>
  );
};

export default PostCard;
