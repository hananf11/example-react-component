import type { PostAsset, User } from './App.tsx'
import StarRating from './StarRating.tsx'
import Thumbnail from './Thumbnail.tsx'

export default function Post({ user, body, assets, rating }: { user: User, body: string, assets: PostAsset[], rating: number }) {

    return (
        <div className="bg-neutral-1200 border-neutral-1000 border rounded-2xl flex flex-col p-5 gap-5 w-[323px]">
            <div className="flex gap-4 rounded-full font-semibold">
                <img src={user.profile} className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-base">{user.name}</span>
                    <div>
                        <StarRating rating={rating} />
                    </div>
                </div>
            </div>
            <div>
                {body}
            </div>
            <div className="h-[60px] flex gap-4">
                {assets.map((asset) => <Thumbnail key={asset.thumbnail} thumbnail={asset.thumbnail} video={asset.type === 'video'} />)}
            </div>
        </div>
    )
}
