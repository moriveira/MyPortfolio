import './subtitle-text.style.css'

export function SubtitleText( { children } ) {
    return (
        <p className='subtitle-text'>
            { children }
        </p>
    )
}