import { MaterialSymbol } from 'react-material-symbols';

export default function thumbnail({ thumbnail, video }: { thumbnail: string, video: boolean }) {
    return <div className="h-[60px] w-[60px] rounded-[12px] bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{
        'backgroundImage': `url(${thumbnail})`
    }}>
        {video && <div className="w-8 h-8 bg-black rounded-full bg-opacity-[38%] flex justify-center items-center">
            <MaterialSymbol icon="play_arrow" size={24} fill />
        </div>}
    </div>
}
