import React from 'react'
import './BlogPage.css'

import {
    
  Link,
} from "react-router-dom";

const BlogPage = () => {
  return (
    
    <div class="container">
      <div>
         <div class='tad'>
      <h1 class="blogtitle">Top 10 Benefits of Yoga for Your Health</h1>
      <p class="author">Author : Orthopaedic Hospital of Wisconsin</p>
      <p class="date">Date Posted : 08/04/2022</p> 
      </div>
      <img class="blogpic" src='https://www.ohow.com/wp-content/uploads/2022/08/Yoga-1-450x400.png' height="600px" width="70%" alt="yoga picture"></img>
      <div class="blogcontent">
      <p>Yoga, a practice known for its health and relaxation benefits, has become an everyday exercise among all age groups. If you’ve never tried yoga, you may be intimidated by popular photos online of people practicing acro yoga. However, most yoga practices offer health benefits for people at all stages of flexibility, athletic ability, and stamina. You might even be prescribed movements derived from yoga by your physical therapist as you recover from orthopedic surgery or treat an orthopedic condition.
      </p>
      <br></br>
      <p>
      At Orthopaedic Hospital of Wisconsin, we want you to feel your best and lead a healthy lifestyle. Part of this includes staying active and mobile. Whether you need a low-impact exercise recommended by your physical therapist or are just looking for a new exercise program, yoga can offer many worthwhile health perks. Below we describe the top 10 benefits that yoga can bring into your life.
      </p>
      
      <br>
      </br>
      <h2>Range of Motion in Joints.</h2>
      <p>
      If you struggle with moving certain areas of your body, yoga is a great way to improve your range of motion. Perhaps your hips are tight, or your shoulders don’t allow you to reach as far as you would like. Yoga pose staples, like a downward-facing dog, require you to exhibit an average or above average range of motion in the shoulders, hips, and ankles. If you can’t do the post correctly, yoga offers a great way to set a range of motion goal. You can begin by trying pose modifications and work your way up to the correct pose as your range of motion improves with each yoga practice.
      </p>
      <br></br>
      <h2>Flexibility in Muscles</h2>
      <p>Similar to improving range of motion, yoga improves your muscle flexibility. As you hit different yoga poses, your muscles bend and stretch to achieve the proper form. Over time, you’ll be able to move your muscles more and more as they get used to the movements. Yoga poses target the flexibility of different muscle groups, so you can pick and choose what movements might be more beneficial for your body. </p>
      <br></br>
      <h2>Balance</h2>
      <p>Many yoga poses focus on creating a stable base for your body and improving your balance. Many poses will focus on grounding firmly through your feet and legs. They also often focus on maintaining an active core and stabilizing your body to achieve various movements. This focus on grounding and stabilization will improve your balance over time which easily translates to simple, everyday balancing. Improving your balance benefits your orthopedic health as it allows you to coordinate your movements. Balancing helps you to move and decreases the chance of falling over and injuring yourself.</p>
      <br></br>
    </div>
    </div>
    <div class="navbar">
        <Link class="homelink" to="/">Home</Link>
    </div>
    
    </div>
    
  )
}

export default BlogPage
