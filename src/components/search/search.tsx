import { useCallback, useEffect, useState } from 'react';
import config from '../../apis/config'
import { ReactComponent as SearchIcon } from '../../assets/search-line.svg';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch } from 'react-redux';
import { ReactComponent as Youtube } from '../../assets/YouTube-Logo.svg';
import './search.css'

function Search() {
    const [searchText, setSearchText] = useState('')
    const [show, setShow] = useState(false)
    const [progress, setProgress] = useState(0)
    const dispatch = useDispatch();

    const searchVideos = useCallback(() => {
        config.get(`/search?&q=${searchText}`,
            {
                onDownloadProgress: progressEvent => {
                    let progress = Math.round((progressEvent.loaded / 1) * 100);
                    setProgress(progress)
                }
            }
        ).then(res => {
            dispatch(
                {
                    type: 'ADD',
                    videos: res.data.items
                }
            )
        })
    }, [dispatch, searchText])


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            searchVideos();
        }, 1500);
        return () => clearTimeout(delayDebounceFn)
    }, [searchText, searchVideos])

    function enterKeyPressed(e: any) {
        if (e.key === 'Enter') {
            searchVideos();
        }
    }

    function showSearchInput() {
        setShow(true)
    }

    return (
        <>
            {/* <ProgressBar className='progress-bar' now={60} /> */}
            <Youtube style={{ width: "5rem", height: "5rem" }} />
            <input className={show ? 'input-text-show' : 'input-text-hide'}
                onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => enterKeyPressed(e)} />
            <SearchIcon className='search-icon' onClick={() => showSearchInput()} />
        </>
    )
}
export default Search;