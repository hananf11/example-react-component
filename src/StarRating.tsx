const NUMBER_OF_STARS = 5
import clsx from "clsx"
import { MaterialSymbol } from "react-material-symbols"

function Star({ number, rating }: { number: number, rating: number }) {
    const full = number <= rating

    return <MaterialSymbol icon="star" fill size={24} className={clsx({ 'text-orange-500': full })} />
}

export default function StarRating({ rating }: { rating: number }) {
    return <div className="flex">
        {[...Array(NUMBER_OF_STARS).keys()].map((i) => <Star number={i + 1} rating={rating} />)}
        <span className="text-md font-medium text-neutral-500 ml-2">
            {rating.toFixed(1)}
        </span>
    </div>
}
