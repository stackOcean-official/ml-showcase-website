interface PostTileProps {
  post: any;
}

export default function PostTile({ post }: PostTileProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="relative flex-shrink-0">
        <img
          className="object-cover w-full h-48"
          src={post.feature_image}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          {/*   <p className="text-sm font-medium text-ocean-600">
            {usecase.category.name}
          </p> */}

          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
          <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
        </div>
      </div>
      <a
        href={`/kiverstehen/${post.slug}`}
        className="absolute w-full h-full"
      />
    </div>
  );
}
