import React from 'react'
import './BlogBody.css'
import {
    
    Link,
  } from "react-router-dom";

const BlogBody = () => {

  return (
    <div>
      <div class="container">
        <div class="left-cont">
            <div class="post1">
                <Link class="blogbodytitle" to="/post1"><h1>Top 10 Benefits of Yoga for Your Health</h1></Link>
                <p class="outer">Author : Orthopaedic Hospital of Wisconsin</p>
                <p class="outer">Date Posted : 08/04/2022</p>
                <img class="blogbodyimg" src='https://www.ohow.com/wp-content/uploads/2022/08/Yoga-1-450x400.png' height="250px" width="500px" alt="yoga picture"></img>
                <p class="blogbodydesc">Yoga, a practice known for its health and relaxation benefits, has become an everyday exercise among all age groups. If you’ve never tried yoga, you may be intimidated by popular photos online of people practicing...</p>
            </div>
            <div class="post2">
                <Link class="blogbodytitle" to="/post2"><h1>A Teenage Love Story</h1></Link>
                <p class="outer">Author : Karlie Duke</p>
                <p class="outer">Date Posted : 02/19/2017</p>
                <img class="blogbodyimg" src='https://www.teenlife.ngo/wp-content/uploads/2017/02/BLOG-FEATURED-IMAGE-58.png' height="250px" width="500px" alt="love picture"></img>
                <p class="blogbodydesc">Teenage love stories are often awkwardly, impossibly romantic. The kind you find in sitcoms, books and blockbuster movies. Think awkward teen falling in love with a vampire who is 100 years older than her. Best friends finally realizing they love each other and living happily ever after. Imagine Inside Out’s picture of an...</p>
            </div>
            <div class="post3">
                <Link class="blogbodytitle" to="/post3"><h1>How to Create Quality Time with Your Spouse</h1></Link>
                <p class="outer">Author : Darcie Fuqua</p>
                <p class="outer">Date Posted : 05/03/2022</p>
                <img class="blogbodyimg" src='https://i.swncdn.com/media/700w/via/5895-couple-coffee-date-gettyimages-peopleimages.webp' height="250px" width="500px" alt="a couple's picture"></img>
                <p class="blogbodydesc"> How is your marriage Life Going on? <br></br>
                Even if your answer is great, you know it takes a concerted effort, time, and prayer to keep your marriage strong, engaged, and healthy. Staying in love requires communication and sacrifice by....</p>
            </div>
            <br></br>
            <br></br>
        </div>            
        <div class="right-cont">
            <div>
              <br></br><br></br><br></br>
              <Link class="homelink" to="/">Home</Link>
              <br></br><br></br><br></br>
              <Link class="apilink" to="/apirefresh">Api's page</Link>
            </div>
            
        </div>
    </div>
    </div> 
  )
}

export default BlogBody
