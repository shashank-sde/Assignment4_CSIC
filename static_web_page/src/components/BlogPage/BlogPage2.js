import React from 'react'
import './BlogPage2.css'
import {
    
  Link,
} from "react-router-dom";

const BlogPage2 = () => {
  return (
    <div class="container">
      <div>
         <div class='tad'>
      <h1 class="blogtitle">A Teenage Love Story</h1>
      <p class="author">Author : Karlie Duke</p>
      <p class="date">Date Posted : 02/19/2017</p> 
      </div>
      <img class="blogpic" src='https://www.teenlife.ngo/wp-content/uploads/2017/02/BLOG-FEATURED-IMAGE-58.png' height="400px" width="70%" alt="yoga picture"></img>
      <div class="blogcontent">
      <p>Think about your favorite love stories…are they real? From movie scenes? Are they written by your favorite author?
        <br></br><br></br>

Teenage love stories are often awkwardly, impossibly romantic. The kind you find in sitcoms, books and blockbuster movies. Think awkward teen falling in love with a vampire who is 100 years older than her. Best friends finally realizing they love each other and living happily ever after. Imagine Inside Out’s picture of an imaginary boyfriend claiming, “I would die for Riley.”
<br></br><br></br>
In the midst of awkward imperfection comes perfect romance. We don’t watch movies or read books that end with a horrible breakup and no happy conclusion. We enjoy love stories that end with hope for a better future and hope that we could also one day find a love like that – a love that reads a notebook full of their love story every day, the kind of love that changes the beast into a man, a love that can even survive carbon-freezing in a galaxy far, far away.
<br></br><br></br>
But why don’t we put the same emphasis on the kind of love that is hard and real? Sometimes love hurts, it disappoints, it is jealous, it is almost always messy. When we have a view of love that is only good and sweet and always smells good, it is easy to walk away when it gets hard. Why would we settle for a love that doesn’t always bring joy? There must be something wrong with this person if I don’t always find them cute and charming like in the movies…
<br></br><br></br>
We do a disservice to teenagers when we encourage them to settle on surface-level, easy love. Because that’s what it is!
<br></br><br></br>
True love, faithful love is the kind of love that sticks it out when it isn’t easy. The kind of love you really want will be hard and difficult, but it is so worth it! That is what I want teenagers to hear.
<br></br><br></br>
Don’t settle for love that only comes around when your makeup is done or your shirt is clean – fall in love with the person who still kisses you when you have morning breath and a hole in your shirt. Don’t look for a love that completes your world – find someone who will make you better for the worl</p>
    </div>
    </div>
    <div class="navbar">
        <Link class="homelink" to="/">Home</Link>
    </div>
    </div>
  )
}

export default BlogPage2
