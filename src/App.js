import {useEffect} from 'react'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import { Robot } from './components/Robot';
import baffle from 'baffle'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <section className='title1' style={{ color: '#cdcbca', fontSize: '2em', }}>REDEFINE</section>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">real estate</button>
        <button className="navbar-button">Pricing</button>
        <button className="navbar-button">Demo</button>
        {/* Add more buttons as needed */}
      </div>
    </nav>
  );
};
function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░R░e░d░e░f░i░n░e░',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })

  return (
    <>

      <color attach="background" args={['#333333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />
       <ScrollControls pages={1} damping={0.1}>
      <Scroll>
              
      </Scroll>
      <Scroll html style={{width: '100%'}}>
      <Navbar style={{ position: 'absolute', top: `5vh`,left: '50%', transform: `translate(-50%,-50%)` }}></Navbar>

      </Scroll>
    </ScrollControls>
      <ScrollControls pages={6} damping={0.1}>
      
        <Robot scale={0.8}/>
        <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring>
        </Float>              

        <Scroll>
                
        </Scroll>
        <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>REDEFINE</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>10x Sales</h2>
            <p style={{ maxWidth: '400px' }}>Redefine AI-Analytics helps to think better through clear and simple dashboards</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>7 Tools for everyone</h2>
              <p style={{ maxWidth: '440px' }}>Simple-Modern-Fast  RealEstate Apps</p>                
              <p style={{ maxWidth: '440px' }}>   <div className='col' >
              <div style={{ maxWidth: "440px" }}>1.Marketing Module</div>
              <div style={{ maxWidth: "440px" }}>2.Sales module</div>          
              <div style={{ maxWidth: "440px" }}>3.CRM module</div>  
              <div style={{ maxWidth: "440px" }}>4.Construction App</div>  
              <div style={{ maxWidth: "440px" }}>5.Legal Module</div>  
              <div style={{ maxWidth: "440px" }}>6.HR Module</div>  
              <div style={{ maxWidth: "440px" }}>7.ADMIN Module</div>  
           
            </div></p>                
             
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)`, textAlign: 'center' }}>Data Controlled by you secured by us</h2>              
     
          <div className='row' style={{ position: 'absolute', top: `450vh`}}>
            <div className='col' style={{ position: 'absolute',  width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>1.Marketing Module</h2>
              <h2 style={{ maxWidth: "440px" }}>2.Sales module</h2>          
              <h2 style={{ maxWidth: "440px" }}>3.CRM module</h2>  
              <h2 style={{ maxWidth: "440px" }}>4.CONSTRUCTION App</h2>  
           
            </div>
          </div>
          <div className='row' style={{ position: 'absolute', top: `450vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
            <h2 style={{ maxWidth: "440px" }}>5.Legal Module</h2>
              <h2 style={{ maxWidth: "440px" }}>6.Sales module</h2>          
              <h2 style={{ maxWidth: "440px" }}>7.CRM module</h2>  
              <h2 style={{ maxWidth: "440px" }}>8.CONSTRUCTION App</h2>  
            </div>
          </div>
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
