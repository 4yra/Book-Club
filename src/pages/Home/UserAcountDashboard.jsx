import Stack from "@mui/material/Stack"
import leval from '../../static/leval.png'
import user from '../../static/user.png'
export const UserAcountDashboard =() => {
    const userLevelBadge = {
        height: '100px',
        width: '100px',
    }
    const startBookClubBTN = {
        height: '40px',
        width: '100%',
        borderRadius: '20px',
    }

    return (
        <div  >
            <Stack spacing={2} style={{padding:"20px", position:"relative"}}> 
                <Stack direction='row' spacing={10} style={{display:"flex", alignItems:"center", margin:"0 auto"}}>
                    <div style={userLevelBadge}><img style={{borderRadius:"50%", width:"100px", height:"100px"}} src={user} alt="leval"/></div>
                    <h3>User Name</h3>
                </Stack>
                <button style={startBookClubBTN}>
                    Start a book club
                </button>
                <div  direction="row" style={{display:"flex", alignItems:"center", width:"calc(100% - 20px)", padding:"10px", border:"solid 1px black", overflowX:"scroll"}}>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"100px"}} src={leval} alt="leval"/></div>
                    <div style={{border:"solid 1px black", margin:"5px", borderRadius:"10px"}}><img style={{borderRadius:"10px", width:"100px", height:"50px"}} src={leval} alt="leval"/></div>
                </div>
                <div style={{border:"solid black 1px", height:"280px"}}>
                    <p>User Data</p>
                </div>
                <button style={startBookClubBTN}>
                    Ceep Reading
                </button>
            </Stack>
        </div>
    )
}