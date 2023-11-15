import type { User } from './App.tsx'

export default function Post({ user, body }: { user: User, body: string}) {

    return (
        <div className="bg-neutral-1200 border-neutral-1000 border rounded-2xl flex flex-col p-5 gap-5 w-[323px]">
            <div className="flex gap-4 rounded-full font-semibold">
                <img src={user.profile} className="w-10 h-10" />
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-base">{user.name}</span>
                    <div>
                        {/* stars go here */}
                    </div>
                </div>
            </div>
            <div>
                {body}
            </div>
            <div></div>
        </div>
    )
}
