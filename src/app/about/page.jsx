import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" 
          fill={true} 
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>WebDev</h1>
          <h2 className={styles.imgDesc}>Unlocking the potential of the digital world with captivating web development solutions.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Welcome to PortFolio Chronicles, your gateway to an inspiring world of web development projects and insightful blog posts. We are a passionate team of web developers and designers, dedicated to showcasing our expertise and providing a platform for creative individuals like you to shine.
            <br/><br/>At PortFolio Chronicles, we believe that every website tells a unique story. Our mission is to help you bring your digital visions to life by combining cutting-edge technologies, elegant design, and seamless functionality. Whether you're an aspiring web developer, a seasoned professional, or a curious enthusiast, our platform is designed to inspire, educate, and foster a sense of community.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What is here for you?</h1>
          <p className={styles.desc}>On our website, you'll discover a meticulously curated collection of web development projects that highlight our creativity and technical prowess. From visually stunning websites and captivating user interfaces to dynamic web applications and engaging e-commerce platforms, our portfolio showcases the diversity and quality of our work. Each project represents our commitment to excellence and our passion for delivering exceptional digital experiences.
            <br/><br/>Thank you for visiting PortFolio Chronicles. We invite you to explore our showcase, dive into our blog posts, and embark on a thrilling adventure in the ever-evolving world of web development.
            <br/><br/>Contact us for Developing your Web Application at a minimal cost.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About