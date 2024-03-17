
import Styles from './karpagam.module.css'

const Karpagam = () => {
    return <>
    <h1 className={Styles.heading}>Shapes</h1>  
        <ShapeHeadingCon text='Plus'>
            <Plus/>
        </ShapeHeadingCon>
        <ShapeHeadingCon text='Message'>
            <Message/>
        </ShapeHeadingCon>
        <ShapeHeadingCon text='RoundStar'>
            <RoundStar/>
        </ShapeHeadingCon>
    </>
}


const RoundStar = () =>{
    return <div style={{
        width: "400px",
        height: "400px",
        position:"relative",
        border:"2px solid #fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <div style={{
            width: "50px",
            height:"50px",
            borderRadius:"50%",
            backgroundColor:"yellow",
            position:"absolute",
            right: "200px",
            top:"210px"
        }}>

        </div>
        <div style={{
            width: "50px",
            height:"50px",
            borderRadius:"50%",
            backgroundColor:"yellow",
            position:"absolute",
            right: "200px"
        }}>

        </div>
        <div style={{
            width: "50px",
            height:"50px",
            borderRadius:"50%",
            backgroundColor:"yellow",
            position:"absolute",
            right: "170px",
        }}>

        </div>
        <div style={{
            width: "50px",
            height:"50px",
            borderRadius:"50%",
            backgroundColor:"yellow",
            position:"absolute",
            right: "170px",
            top:"210px"
        }}>

        </div>
    </div>
}

const Plus = () => {
    return <div style={{
        width: "400px",
        height: "400px",
        position:"relative",
        border:"2px solid #fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <div style={{
            width: "200px",
            height: "40px",
            background:'yellow',
        }}>
        </div>
        <div style={{
            width: "40px",
            height: "200px",
            background:'yellow',
            position:"absolute",

        }}>

        </div>
    </div>
}

const Message = () => {
    return <div style={{
        width: "400px",
        height: "400px",
        position:"relative",
        border:"2px solid #fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <div style={{
            width: '200px',
            height: '100px',
            borderRadius:"8px",
            backgroundColor:"grey"
        }}>

        </div>
    </div>
}



const ShapeHeadingCon = ({
    text,
    children
}:{
    text:string,
    children:React.ReactNode
}) => {
    return <div style={{
        width: "100%",
        height: "100%",
        display:'flex',
        flexFlow:"column nowrap",
    }}>
        <div className={Styles.ShapeHeading}>
        {
            text
        }
        </div>
        {
            children
        }
    </div>
}




export default Karpagam