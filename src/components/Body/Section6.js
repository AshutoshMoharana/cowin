import aarogya from '../../fonts/aarogya.png';
import digilocker from '../../fonts/digilocker.png';
import umang from '../../fonts/umang.png';
import csc from '../../fonts/csc.jpeg';
import undp from '../../fonts/undp.png';




export default function Section6() {
  return (
    <>
    <div className='s6'>
      <h1 className="S6heading">Our Partners</h1>
      <br/>
      <div className='s6container'>
       <li><img className="s6first" src={aarogya} alt="error" /></li>
       <li><img className="s6second" src={digilocker} alt="error" /></li>
       <li><img className="s6third" src={umang} alt="error" /></li>
       <li><img className="s6fourth" src={csc} alt="error" /></li>
       <li><img className="s6fifth" src={undp} alt="error" /></li>
      </div>
      </div>
    </>
  );
}
