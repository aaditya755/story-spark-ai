import React from "react";
import { Post } from "../../models/post";
import { useNavigate } from "react-router-dom";

interface IRelatedStoriesComponentProps {
  posts: Post[],
  currentPostId: string;
}

const RelatedStoriesComponent: React.FC<IRelatedStoriesComponentProps> = ({
  posts,currentPostId,
}) => {
  const navigate = useNavigate();
  const filteredPosts=posts.filter((post)=>post._id!==currentPostId)
  return (
    <div className="grid grid-cols-2 gap-6">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: Post) => (
          <div
            onClick={() => navigate(`/post/${post._id}`)}
            key={post._id}
            className="cursor-pointer bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col h-full"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.imageURL}
                alt="Related Story"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 pointer-events-none"></div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h4 className="font-bold text-lg mb-2 text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                {post?.content.slice(0, 120)}...
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-500 col-span-2 py-8">No related stories found.</p>
      )}
    </div>
  );
};

export default RelatedStoriesComponent;

// ─── IStories interface ───────────────────────────────────────────────────────
export interface IStories {
  uuid: string;
  title: string;
  content: string;
  tag: string;
  imageURL: string;
}

// ─── StoriesViewComponent ─────────────────────────────────────────────────────
interface IStoriesViewComponentProps {
  stories: IStories[];
  isLogin: boolean;
  setStories: React.Dispatch<React.SetStateAction<IStories[]>>;
  onPublishSuccess: () => void;
  isLoading: boolean;
}

const StoriesViewComponent: React.FC<IStoriesViewComponentProps> = ({
  stories,
  isLoading,
}) => {
  if (isLoading || stories.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0 mt-8 pb-16">
      {stories.map((story) => (
        <div
          key={story.uuid}
          className="bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-6 mb-6"
        >
          {story.title && (
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {story.title}
            </h2>
          )}
          {/* FIX for issue #2022: max-h + overflow-y-auto makes this scrollable on mobile */}
          <div className="max-h-[60vh] overflow-y-auto overscroll-contain pr-1">
            <p className="text-slate-700 dark:text-gray-300 whitespace-pre-wrap break-words leading-relaxed">
              {story.content}
            </p>
          </div>
          {story.tag && (
            <span className="inline-block mt-4 px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {story.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoriesViewComponent;
