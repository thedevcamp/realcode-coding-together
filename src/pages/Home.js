import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Home = () => {
        const [roomID,setRoomID]= useState('');
        const [username,setUsername]= useState('');
        const navigate = useNavigate();

    const createNewRoom=(e)=>{
           e.preventDefault();
           const id=uuidv4(); 
      
           setRoomID(id);

           toast.success('Room Created', {
            duration: 4000,
            position: 'top-center',
           
            // Custom Icon
            icon: '✌️'
          });
    }
    const joinRoom=()=>{
        if(!roomID || !username){
            toast.error('ROOMID & USERNAME Required!!')
            return;
        }

        //Redirect
        navigate(`/editor/${roomID}`,{
            state: {
                username,
            }
        })
    }

    const handleInputEnter=(e)=>{
        if(e.code ==='Enter'){
            joinRoom();
        }
    }
  return (
    <div className='homePageWrapper'> 
    <div className='formWrapper'>
        <img className='homelogo' src='/logo.png'></img>
        <h4 className='mainLabel'>Paste invite ROOM ID here</h4>
        <div className='inputGroup'>
            <input
                type="text" 
                className='inputBox'
                placeholder='ROOM ID'
                onChange={(e)=>setRoomID(e.target.value)}
                value={roomID}
                onKeyUp={handleInputEnter}
            />
            <input
            type="text"
            className='inputBox'
            placeholder='USERNAME'
            onChange={(e)=>setUsername(e.target.value)}
                
                value={username}
                onKeyUp={handleInputEnter}
            />
            <button className='btn joinBtn'onClick={joinRoom}>Join</button>
            <span className='createID'>
                If you don't have one, then create &nbsp;
                <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>

            </span>
        </div>
    </div>
    <footer>
        <h4>Built with 💟 by <a target="_blank" href='https://github.com/thedevcamp'>thedevcamp</a></h4>
    </footer>
    </div>
  )
}

export default Home