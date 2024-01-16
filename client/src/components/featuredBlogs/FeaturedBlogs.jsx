import React from 'react'
import classes from './featuredBlogs.module.css'
import medalImg from '../../assets/medal.jpg'
import literatureImg from '../../assets/literature.jpeg'
import sportsImg from '../../assets/sports.png'

import mountainImg2 from '../../assets/mountain2.jpg'
import clgImg from '../../assets/clg.jpeg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Newsletters</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={sportsImg} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>events</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>KLETU EVENTS</h4>
                <p className={classes.blogDesc}>
                "All work and no play make Jack a dull boy" We at KLE Tech University understand the importance of this saying very well.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Villy</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={medalImg} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Clubs</h4>
                <p className={classes.desc}>
                The Defence Club is a group of KLE Tech students and NCC cadets passionate about pursuing a career in the Indian Defence Forces.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Villy</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={clgImg} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Events</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, hic inventore? Atque?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Villy</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs