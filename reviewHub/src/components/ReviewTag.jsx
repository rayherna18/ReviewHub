import React from 'react'

const ReviewTag = ({flag}) => {
    const tagColor = flag === 'Rant' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
    const tagText = flag === 'Rant' ? 'Rant' : 'Rave'
    return (
        <div className={`${tagColor} absolute top-2 left-2 px-3 py-1 text-white text-sm font-semibold rounded-md`}>
            <p>{tagText}</p>
        </div>
    )
}

export default ReviewTag