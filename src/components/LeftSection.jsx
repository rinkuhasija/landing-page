import './leftSection.css'
import hotstar from '../assets/hotstart_logo.png'
import google from '../assets/google.png'

function LeftSection() {
    return (
        <div className='leftSectionContainer'>
            <h1> FIRST IN THE FAMILY </h1>
            <p id='firstP'> They are global  citizens of tomorrow. Start your journey study abroad journey today. </p>

            <div className='middle'>
                <a href="">Live on</a>
                <img style={{ width: '60px', height: '60px', margin: '10px', borderRadius: '10px' }} src={hotstar} alt="hotstar_logo" />
            </div>

            <button className='btn1'><span>  Get Your Shortlist for FREE </span></button>
            <button className='btn2'> <span> Talk to an Expert </span> </button>

            <p className='para'>95% of our  students get an admit in less than 4 weeks </p>

            <div>
                <p className='para'>Our students finished university to work at global offices of : </p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default LeftSection