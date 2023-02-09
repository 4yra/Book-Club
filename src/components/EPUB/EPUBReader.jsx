import React, { useState, useRef } from 'react'
import { ReactReader } from 'react-reader'

import './epubStyle.css'

export const EPUBReader = () => {
  // And your own state logic to persist state
  const [page, setPage] = useState('')
  const [location, setLocation] = useState(null)
  const [firstRenderDone, setFirstRenderDone] = useState(false)
  const renditionRef = useRef(null)
  const tocRef = useRef(null)

  const locationChanged = epubcifi => {


    if (!firstRenderDone) {
      setLocation(localStorage.getItem('book-progress')) 
      setFirstRenderDone(true)
      return
    }
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start
      const chapter = tocRef.current.find(item => item.href === href)

      const stringSplit = epubcifi.split(/\[|\]/)
      console.log(`1: ${epubcifi}`)
      // console.log(`1: ${stringSplit[1]}`)
      setPage(
        `Page ${displayed.page} of ${displayed.total} in chapter ${
          chapter ? chapter.label : stringSplit[1]
        }`
      )
    }

    localStorage.setItem('book-progress', epubcifi)

    setLocation(epubcifi)
  }


  return (
    <>
      <div className='epubView'>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://firebasestorage.googleapis.com/v0/b/db-test-406b4.appspot.com/o/books%2FThe%20Tao%20Teh%20King.epub?alt=media&token=51d4ac26-fe83-46e8-93f7-ec54958c041b"
          getRendition={rendition => (renditionRef.current = rendition)}
          tocChanged={toc => (tocRef.current = toc)}
          showToc={true}
        />
      </div>
      <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '1rem',
            left: '1rem',
            textAlign: 'center',
            zIndex: 1
          }}
        >
          {page}
        </div>

    </>
  )
}
