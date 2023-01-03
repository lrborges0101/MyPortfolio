import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import styles from '../../styles/Component.module.scss'
import {Section, SectionTitle, SectionDivider} from '../../styles/GlobalComponents'



const Projects = () => {
  const [currentText, setCorrentText] = useState(0)

  const prevText = () =>{
    setCorrentText(currentText === 0 ? 2 : (prev)=> prev -1);
    
}

const nextText = () =>{
    setCorrentText(currentText === 2 ? 0 : (prev)=> prev +1);
    
}


const data = [
    'Hard Disk',
    "Hello and welcome to our e-commerce app!Our app is built using React.js, a popular JavaScript library for building user interfaces.",
    " We use commerce.js as our back-end API to handle all of the behind-the-scenes functionality of the app, such as processing orders and managing inventory.",
    "Our app is designed to provide a seamless and convenient shopping experience for our customers. With a wide range of products to choose from and easy-to-use features like a shopping cart and search function, it's never been easier to shop online."

]
const data1 = [
    "Barbecue Calculator",
    "That's a barbecue calculator, mades with javascript.",
    "This is capable to calculate how much food e drinks your barbecue gonna needs"
]

const data2 = [
  "To Do List",
  "Welcome everyone! Today, I'd like to introduce you to my To Do List app, which was built using Node.js. With this app, you can manage your tasks and stay organized in a simple and convenient way.",

  "Features:",
  
  "Create and manage multiple lists",
  "Set deadlines and reminders for tasks",
 " Mark tasks as complete when they're finished",
  "Search for tasks by keyword.",
]


console.log({currentText})
   
    
  return (
    <>
    <div id='projects'>
      
      
    <div className={styles.projectContainer} style={{ justifyContent:'space-around', position:'relative', width:'100vw', }}>
      <SectionTitle main>Projects</SectionTitle>
    
      <div className={styles.projectShow} >
        <div className={styles.texts} style={{transform: `translateY(-${currentText * 100}vh)`}} >
          <div className={styles.text}  >
            <Typography  variant='h3'  > &nbsp;{data[0]}</Typography>
                    <br/><br/>
                    <Typography  variant='p' >
                    &nbsp;{data[1]}<br/><br/>

                    &nbsp;{data[2]}<br/><br/>

                    &nbsp;{data[3]}<br/><br/>
                    </Typography>
          </div>
         
         
          <div className={styles.text}  >
            <Typography  variant='h4'  > &nbsp;{data2[0]}</Typography>
                    <br/><br/>
                    <Typography s variant='p' >
                    &nbsp;{data2[1]}<br/><br/>

                    &nbsp;{data2[2]}<br/><br/>
                            <ul>
                              <li>{data2[3]}<br/></li>
                             <li>{data2[4]}<br/></li>
                             <li>{data2[5]}<br/></li>
                            
                             
                           
                            </ul>
                           
                    </Typography>
          </div>
            <div className={ `${styles.text} ${styles.text1}` }  >
            <Typography  variant='h4'  > &nbsp;{data1[0]}</Typography>
                    <br/><br/>
                    <Typography s variant='p' >
                    &nbsp;{data1[1]}<br/><br/>

                    &nbsp;{data1[2]}<br/><br/>
                            
                           
                    </Typography>
          </div>

        </div>
        
     </div> 
       <div className={styles.swit}  >
             <div className={styles.cardGroups} style={{position:'absolute',right:'15%', transform: `translateX(-${currentText * 100}vw)`}}>
             <div className={styles.cardMono} >
              <div className={styles.cardGroup} data-index="0" data-status="active" >
            
                <div className={`${styles.littleCard} ${styles.card}`}  ></div> 
            <div className={`${styles.bigCard} ${styles.card}`}></div>
                <div className={`${styles.littleCard} ${styles.card}`}  ></div>
            <div className={`${styles.bigCard} ${styles.card}`}></div>
                <div className={`${styles.littleCard} ${styles.card}`}  ></div>
            <div className={`${styles.bigCard} ${styles.card}`}></div>
                <div className={`${styles.littleCard} ${styles.card}`}  ></div>
            <div className={`${styles.bigCard} ${styles.card}`}></div>
            
            
    </div>
             </div>
                
    <div className={styles.cardMono} >
       <div className={styles.cardGroup} data-index="1" data-status="unknown" >
                            <div className={`${styles.littleCard} ${styles.card}`}></div> 
                    <div className={`${styles.bigCard} ${styles.card}`}></div>
                            <div className={`${styles.littleCard} ${styles.card}`}></div>
                        <div className={`${styles.bigCard} ${styles.card}`}></div>
                            <div className={`${styles.littleCard} ${styles.card}`}></div>
                        <div className={`${styles.bigCard} ${styles.card}`}></div>
                            <div className={`${styles.littleCard} ${styles.card}`}></div>
                        <div className={`${styles.bigCard} ${styles.card}`}></div>
                       
                  
                </div>
    </div>
           
                <div className={styles.cardMono} >
                   <div className={styles.cardGroup} data-index="2" data-status="unknown" >
                                <div className={`${styles.littleCard} ${styles.card}`}></div> 
                        <div className={`${styles.bigCard} ${styles.card}`}></div>
                                <div className={`${styles.littleCard} ${styles.card}`}></div>
                            <div className={`${styles.bigCard} ${styles.card}`}></div>
                                <div className={`${styles.littleCard} ${styles.card}`}></div>
                            <div className={`${styles.bigCard} ${styles.card}`}></div>
                                <div className={`${styles.littleCard} ${styles.card}`}></div>
                            <div className={`${styles.bigCard} ${styles.card}`}></div>
                            
                      
                    </div>
                </div>
                 
 
           </div>
          
        <div className={styles.icons}>
        <div className={styles.icon} >
            <ArrowBackIosIcon style={{color:'white'}}  onClick={prevText}/>
            
        </div>
        
        <div className={styles.icon} >
            <ArrowForwardIosIcon  onClick={nextText} />
            
        </div>
    </div>
      

    
  

    
   
    </div> 

     
            
        
       

    
    </div>
    </div>
    
    
    
   
      
    </>
  )
}

export default Projects
