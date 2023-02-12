import { useState } from "react"

import Stack from "@mui/material/Stack"
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
export const SearchProjectGutenberg = () => {
    const SearchResultsDiv = {
        textAlign:'left', 
        padding:'20px', 
        margin:'20px auto', 
        width: '90%', 
        borderRadius:'5px',
        maxHeight:'200px', 
        overflowY:'scroll',
        backgroundColor: 'rgba(20, 20, 20, 0.8)',
        boxShadow: '0px 0px 7px 0px rgba(96, 96, 96, 0.8)',
        backdropFilter: 'blur(10px)',
    }
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(null)

    const Search = (e) => {
        e.preventDefault()
        const searchSTR = `https://gutendex.com/books?search=${search}`
        fetch(searchSTR)
            .then(response => response.json())
            .then(data => {
                setResult(data.results)
                console.log(data.results[0].formats)
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <Stack>
                <h4>
                   <a href="https://www.gutenberg.org/" style={{color:'white'}}><i>Project Gutenberg</i></a>  is a library of over 60,000 free eBooks
                </h4>
                <form onSubmit={Search}>
                <Stack direction='row' style={{margin:'0 auto', width:'350px', justifyContent:'center'}}>
                    <input
                        style={{width: '60%', height: '30px', borderTopLeftRadius:'10px', border:'solid red 3px', borderBottomLeftRadius:'10px', padding:'0 0 0 10px'}}
                        type="text"
                        id="text"
                        placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit"  style={{color:'white',backgroundColor:'transparent', margin:'0 0 0 2px', width: 'fit-content',border:'solid red 3px' , height: '36px', borderTopRightRadius:'10px', borderBottomRightRadius:'10px', padding:'4px'}}>
                    <SearchIcon/>
                    </button>
                </Stack>
                </form>
                <div style={SearchResultsDiv} >
                    {result && result.map(item => <Stack direction='row' style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}} key={item.id}>
                        <a style={{color:'white', textDecoration:'none'}} href={item.formats['application/epub+zip']}>
                            <div style={{textAlign:'center', border:'solid red 1px', margin:'2px 5px 2px 2px', padding:'2px 0 2px 0', borderRadius:'5px'}}>
                                <DownloadIcon />
                                <p style={{fontSize:'0.4rem', margin:'2px'}}>DOWNLOAD</p>
                            </div>
                        </a>
                            {item.title}

                    </Stack>)}
                </div>
            </Stack>
        </div>
    )
}