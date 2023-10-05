"use client";

import { SimplePost } from "@/model/post";
import Aavatar from "./Aavatar";
import Image from "next/image";

import { CommentForm } from "./CommentForm";
import Actionbar from "./Actionbar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

const PostListCard = ({ post, priority = false }: Props) => {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Aavatar image={userImage} highlight size="medium" />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <Actionbar
        likes={likes}
        username={username}
        createdAt={createdAt}
        text={text}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <p>포스트 상세 페이지</p>
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
};

export default PostListCard;
