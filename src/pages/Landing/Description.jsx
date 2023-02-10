import Stack from "@mui/material/Stack"

export const Description = () => {
    const descriptionStyle = {
        paddingTop: "10vh",
        textAlign: 'left',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: '0 auto',
        width: '90%',
        maxWidth: "800px",
        
    }
    return (
        <>
            <div style={descriptionStyle}>
                <Stack style={{textShadow: '4px 4px 5px #000000',}}>
                    <h2 >Knowledge, culture and good conversations is how communities grow.  </h2>
                    <br />
                    <h1 style={{fontSize: '3rem', margin:'50px 0 0 0'}}>Book Club</h1>
                    <ul style={{fontWeight: 'bold'}}>
                        <li>Hosting book clubs since 2023</li>
                        <li>Request early access - link</li>
                    </ul>
                </Stack>
            </div>
        </>
    )
}