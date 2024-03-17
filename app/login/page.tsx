
import Image from "next/image"
import BackImage from "../../../public/i7py.png"
import Styles from "./login.module.css"
const Login = () => {
    return <div style={{
        width: "100%",
        height: "100vh",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    }}>
        <div style={{
            width:"100%",
            height:"100%",
            position:"absolute",
            zIndex:"-1"
        }}>
            <Image
                src={BackImage}
                layout="fill"
                objectFit="cover"
                alt="BackgroundImage"
                quality={50}
                placeholder={"blur"}
                loading={"lazy"}
            />
        </div>
        <div style={{
            width:"50%",
            height:"500px",
            display:"flex",
            flexFlow:"column nowrap",
            borderRadius:"8px",
            backgroundColor: "rgba(237, 240, 243, 0.261)",
            zIndex:"3",
            backdropFilter:"blur(10px)"
        }}>
            <div style={{
                width:"100%",
                height: "100px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginBottom:"20px"
            }}>
                <div style={{
                    width: "200px",
                    height:"200px",
                    position:"relative",
                    borderRadius:"50%",
                    backgroundColor:"black"
                }}>
                    <Image
                        src={BackImage}
                        layout="fill"
                        objectFit="cover"
                        alt="BackgroundImage"
                        quality={50}
                        placeholder={"blur"}
                        loading={"lazy"}
                        style={{
                            overflow:"hidden",
                            borderRadius:"50%"
                        }}
                    />
                </div>
            </div>
            <div style={{
                    width: "100%",
                    height: "80px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <input style={{
                        width:"80%",
                        height:"60px",
                        borderRadius:"6px",
                        outline:"none",
                        backgroundColor: "rgba(237, 240, 243, 0.261)",
                        borderLeft:"1px solid #fff",
                        borderTop:"1px solid #fff",
                        backdropFilter:"blur(10px)",
                        marginTop:"60px",
                        color:"blue",
                        paddingLeft:"10px",
                    }}
                    className={Styles.Input}
                    placeholder="Enter your email..."
                    type="text"
                    />
            </div>
            <div style={{
                    width: "100%",
                    height: "80px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <input style={{
                        width:"80%",
                        height:"60px",
                        borderRadius:"6px",
                        outline:"none",
                        backgroundColor: "rgba(237, 240, 243, 0.261)",
                        borderLeft:"1px solid #fff",
                        borderTop:"1px solid #fff",
                        backdropFilter:"blur(10px)",
                        marginTop:"60px",
                        color:"blue",
                        paddingLeft:"10px",
                    }}
                    className={Styles.Input}
                    placeholder="Enter your password..."
                    type="password"
                    />
            </div>
            <div style={{
                width: "100%",
                height: "80px",
                display:"flex",
                paddingLeft:"78px",
                flexFlow:"row nowrap",
                marginTop:"30px"
            }}>
                <input type="checkbox" style={{
                    width: "30px",
                    height:"30px",
                    color:"blue",
                    borderRadius:"4px",
                    outline:"none"
                }}>
                    
                </input>
                <div style={{
                    color:"white",
                    fontFamily:"Tahoma",
                    marginTop:"5px",
                    marginLeft:"10px"
                }}>
                    Remember me.
                </div>
            </div>
            <div style={{
                width: "100%",
                display:"flex",
                paddingLeft:"78px",
                alignItems:"center",
                
                
            }}>
                <button style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "rgba(237, 240, 243, 0.261)",
                    borderLeft:"1px solid #fff",
                    borderTop:"1px solid #fff",
                    backdropFilter:"blur(10px)",
                    borderRadius:"6px",
                    marginTop:"40px",
                    color:"#fff"
                }}>
                Submit
                </button>
            </div>
            
        </div>      
    </div>
}


export default Login