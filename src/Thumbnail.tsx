export default function thumbnail({ thumbnail }: { thumbnail: string }) {
    return <div className="h-[60px] w-[60px] rounded-[12px] bg-cover bg-center bg-no-repeat" style={{
        'backgroundImage': `url(${thumbnail})`
    }}>
    </div>
}
