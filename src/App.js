import './App.css';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function App() {
const details = [
  {
    subname : "FREE",
    cost : "$0",
    canget:["Single User","5GB Storage","Unlimited Public Projects",
    "Community Access"],
    cantget: ["Dedicated Phine Support","Free Subdomain","Monthly Status Reports",
    "Unlimites Private Projects"]
  },
  {
    subname : "PLUS",
    cost : "$9",
    canget:["5 Users","50GB Storage","Unlimited Public Projects",
    "Community Access","Unilimited Private Projects",
    "Dedicated Phone support","Free Subdomain"],
    cantget: ["Monthly Status Reports"]
  },
  {
    subname : "PRO",
    cost : "$40",
    canget:["Unlimited Users","150GB Storage",
    "Unlimites Public Projects","Community Access",
    "Unlimited Private Projects","Dedicated Phone Support",
    "Unlimited Free Subdomains","Monthly Status Reports"],
    cantget: []
  }
]


  return (
    <div className='Container'>
      {details.map(({subname,cost,canget,cantget}) =>(
        <div className='Price-tag'>
        <div className='price-part'>
           {subname}<br/>
         <p><b>{cost}</b>/month</p>
         </div>
         <hr/>
         <ul>
           {canget.map((value)=>(
             <li><DoneIcon/>{value}</li>
           ))}
           {cantget.map((value)=>(
             <li><CloseIcon/>{value}</li>
           ))}         
         </ul>
         <Button variant="contained" className = 'ButtonUI'>Button</Button>
      </div>
      ))}
    </div>
  );
  }

export default App;
