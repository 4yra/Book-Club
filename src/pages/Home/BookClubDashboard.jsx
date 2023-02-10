import Stack from "@mui/material/Stack"
import leval from '../../static/leval.png'
import book from '../../static/book.png'

export const BookClubDashboard =() => {
    const userLevelBadge = {
        border: 'solid 1px black',
        height: '100px',
        width: '100px',
        borderRadius: '10px'
    }

    return (
        <div >
            <Stack spacing={2} style={{padding:"20px", position:"relative"}}> 
                <Stack direction='row' spacing={6} style={{display:"flex", alignItems:"center", margin:"0 auto"}}>
                    <div style={userLevelBadge}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <h3 >Book Club Name</h3>
                </Stack>
                <div style={{border:"solid black 1px", height:"150px", padding:"10px"}}>
                    <p style={{margin:"0"}}>Desciption</p>
                    <p style={{textAlign:"left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo esse in sit nulla et quam sapiente eligendi eius beatae autem ea quos alias facere nam iste voluptatum, aut dolor quo.</p>
                </div>
                <div  direction="row" style={{display:"flex", alignItems:"center", width:"calc(100% - 20px)", padding:"10px", border:"solid 1px black", overflowX:"scroll"}}>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="book"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={book} alt="leval"/></div>
                </div>
                <div style={{border:"solid black 1px", height:"120px", padding:"20px", overflowY:"scroll"}}>
                    <Stack direction="row" style={{border:"solid black 1px", display:"flex", alignItems:"center", paddingLeft:"10px", marginTop:"5px"}}>
                        <img style={{borderRadius:"10px", width:"40px", height:"40px", }} src={leval} alt="leval"/>
                        <p>Member User Name 1</p>
                    </Stack>
                    <Stack direction="row" style={{border:"solid black 1px", display:"flex", alignItems:"center", paddingLeft:"10px", marginTop:"5px"}}>
                        <img style={{borderRadius:"10px", width:"40px", height:"40px", }} src={leval} alt="leval"/>
                        <p>Member User Name 2</p>
                    </Stack>
                    <Stack direction="row" style={{border:"solid black 1px", display:"flex", alignItems:"center", paddingLeft:"10px", marginTop:"5px"}}>
                        <img style={{borderRadius:"10px", width:"40px", height:"40px", }} src={leval} alt="leval"/>
                        <p>Member User Name 3</p>
                    </Stack>
                    <Stack direction="row" style={{border:"solid black 1px", display:"flex", alignItems:"center", paddingLeft:"10px", marginTop:"5px"}}>
                        <img style={{borderRadius:"10px", width:"40px", height:"40px", }} src={leval} alt="leval"/>
                        <p>Member User Name 4</p>
                    </Stack>

                </div>
            </Stack>
        </div>
    )
}