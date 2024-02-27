import { useState, useEffect, useRef } from 'react'
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Badge from 'react-bootstrap/Badge'
import classnames from 'classnames'

export default function Home() {
  const Socials = () => {
    return (
      <div className='mb-5'>
        <a href="https://github.com/EmmanuelCobian" target="_blank"><i className={classnames("bi-github fs-3", styles.socials)}></i></a>
        <a href="https://www.linkedin.com/in/emmanuel-cobian/" target="_blank"><i
          className={classnames("bi-linkedin fs-3 mx-3", styles.socials)}></i></a>
        <a href="mailto:ecobian12310@gmail.com" target="_blank"><i
          className={classnames("bi-envelope-at-fill fs-3", styles.socials)}></i></a>
      </div>
    )
  }

  const LargeNav = ({ visibilities }) => {
    let state
    if (visibilities[0]) {
      state = 0
    } else if (visibilities[1]) {
      state = 1
    } else if (visibilities[2]) {
      state = 2
    }

    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(state)

    const handleClick = (item) => {
      // setActive(item)
    }

    return (
      <div className='my-5'>
        <a href='#about' onClick={() => handleClick(0)} className={classnames('text-decoration-none text-black')}>
          <div className={classnames('row', active == 0 ? styles.active : styles.nav_itm)}>
            <div className='col-3'>
              <hr className={styles.hr} />
            </div>
            <div className='col-9'>
              <p>About</p>
            </div>
          </div>
        </a>

        <a href='#experience' onClick={() => handleClick(1)} className='text-decoration-none text-black'>
          <div className={classnames('row', active == 1 ? styles.active : styles.nav_itm)}>
            <div className='col-3'>
              <hr className={styles.hr} />
            </div>
            <div className='col-9'>
              <p>Experience</p>
            </div>
          </div>
        </a>

        <a href='#projects' onClick={() => handleClick(2)} className='text-decoration-none text-black'>
          <div className={classnames('row mb-5', active == 2 ? styles.active : styles.nav_itm)}>
            <div className='col-3'>
              <hr className={styles.hr} />
            </div>
            <div className='col-9'>
              <p>Projects</p>
            </div>
          </div>
        </a>
        <Socials />
      </div>
    )
  }

  const useIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [ref])

    return isIntersecting
  }

  const useWindowWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => { setWidth(window.innerWidth) }

    useEffect(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return width
  }

  const width = useWindowWidth()
  const isBreakpoint = width < 992
  const aboutRef = useRef()
  const expRef = useRef()
  const projRef = useRef()
  const aboutIsVisible = useIsVisible(aboutRef)
  const expIsVisible = useIsVisible(expRef)
  const projIsVisible = useIsVisible(projRef)

  return (
    <>
      <Head>
        <title>Emmanuel Cobian Duarte</title>
        <meta name="description" content="My personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="container pt-5">
          <div className="row">
            <div className={classnames("col-md-12 col-lg-6", styles.bio)} id="bio">
              <h3>Hi, my name is Emmanuel</h3>
              <h3>I'm a software developer</h3>
              <p className={styles.intro}>I'm a senior studying computer science at UC Berkeley and a software developer who builds web apps.</p>
              {isBreakpoint ? (<Socials />) : (<LargeNav visibilities={[aboutIsVisible, expIsVisible, projIsVisible]} />)}

            </div>
          </div>

          <div className={classnames("col-md-12 col-lg-6", styles.right)}>
            <div id="about" ref={aboutRef}>
              {isBreakpoint ? (<h4 className={styles.title}>About</h4>) : (<div>&nbsp;</div>)}
              <p>
                Back in 2015 as a rising senior in high school, I decided to sign up for a computer science course even
                though I had no idea of what the subject was about. Fast-forward to today, and I’ve had the privilege of
                attending one of the top computer science programs in the nation while building software for major
                departments on campus and creating a great network of people that care about me.
                During my free time, I’m usually playing 8-ball pool, hiking, gaming, hanging out with friends, or checking
                out new music.
              </p>
            </div>

            <div id="experience" className="pt-5" ref={expRef}>
              {isBreakpoint ? (<h4 className={styles.title}>Experience</h4>) : (<div>&nbsp;</div>)}

              <div className={styles.exp_itm}>
                <div className={styles.exp_date}>May 2023 - Present</div>
                <div className={styles.exp_desc}>
                  <p className={styles.exp_title}>
                    Software Development Fellow • UC Berkeley Haas School of
                    Business
                  </p>
                  <p>
                    Developed a web application using Next.js that efficiently
                    enables users to create personalized teams according to their
                    unique needs. Build an approximation algorithm to generate
                    optimally balanced teams based on user-defined priorities
                    accross team size, gender, experience levels, and work
                    history.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Next.js</Badge>
                  <Badge pill className={styles.text_bg_custom}>Javascript</Badge>
                  <Badge pill className={styles.text_bg_custom}>Algorithms</Badge>
                </div>
              </div>

              <div className={styles.exp_itm}>
                <div className={styles.exp_date}>Jun 2023 - Jul 2023</div>
                <div className={styles.exp_desc}>
                  <a className="text-decoration-none" href="https://www.thegreenjanitorial.com/" target="_blank">
                    <p className={classnames(styles.exp_title, styles.exp_share)}>Website Developer • The Green Janitorial Corporation <i
                      className="bi-arrow-up-right"></i></p>
                  </a>
                  <p>
                    Created and implemented a responsive website for The Green
                    Janitorial using Next.js and Bootstrap. Designed a fast,
                    SEO-friendly site for search engines and speed.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Vercel</Badge>
                  <Badge pill className={styles.text_bg_custom}>Bootstrap</Badge>
                  <Badge pill className={styles.text_bg_custom}>Next.js</Badge>
                </div>
              </div>

              <div className={styles.exp_itm}>
                <div className={styles.exp_date}>Sep 2021 - May 2023</div>
                <div className={styles.exp_desc}>
                  <p className={styles.exp_title}>Tech Fellow • UC Berkeley Career Center</p>
                  <p>
                    Designed and implemented a python script to scrape content
                    from over 1000 employer websites to search for DEI Employment
                    keywords. Also worked on updating employer contacts by
                    parsing, analyzing, and visualizing data sets with over
                    200,000 data points to provide tangible and understandable
                    solutions to an audience of team members with limited
                    technical knowledge.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Python</Badge>
                  <Badge pill className={styles.text_bg_custom}>Pandas</Badge>
                  <Badge pill className={styles.text_bg_custom}>Web Scraping</Badge>
                </div>
              </div>

              <div className={styles.exp_itm}>
                <div className={styles.exp_date}>Mar 2022 - Sep 2022</div>
                <div className={styles.exp_desc}>
                  <p className={styles.exp_title}>Data Challenge Finalist • Meta</p>
                  <p>
                    Explored, analyzed, and aggregated large data sets to provide
                    actionable information, and create intuitive visualizations to
                    convey those results to a broad audience. Also presented a
                    data-driven product pitch, which included data visualizations,
                    business strategy, and recommendations to Data Scientists and
                    Data Engineers.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Python</Badge>
                  <Badge pill className={styles.text_bg_custom}>Pandas</Badge>
                  <Badge pill className={styles.text_bg_custom}>Visualizations</Badge>
                  <Badge pill className={styles.text_bg_custom}>Data Science</Badge>
                </div>
              </div>

              <a className={styles.resume_link} href="/Resume_Cobian_Duarte_fa23.pdf">
                <p>
                  View Full Resume <i className="bi-arrow-right"></i></p>
              </a>
            </div>

            <div className="py-5" ref={projRef}>
              {isBreakpoint ? (<h4 id='projects' className={styles.title}>Projects</h4>) : (<div id='projects'>&nbsp;</div>)}

              <div className={styles.proj_itm}>
                <div className={styles.proj_desc}>
                  <a className="text-decoration-none" href="https://exposify.vercel.app/" target="_blank">
                    <p className={classnames(styles.exp_title, styles.exp_share)}>Exposify <i className="bi-arrow-up-right"></i></p>
                  </a>
                  <p>
                    A full-stack web application that connects to the Spotify API
                    and analyzes a user's top artists and playlists to provide
                    personalized music insights. Uses a backend using Next.js API
                    routes to call the Spotify API and process data to generate
                    musical profiles and analysis for logged-in users.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Vercel</Badge>
                  <Badge pill className={styles.text_bg_custom}>Next.js</Badge>
                  <Badge pill className={styles.text_bg_custom}>Spotify API</Badge>
                </div>
              </div>

              <div className={styles.proj_itm}>
                <div className={styles.proj_desc}>
                  <a className="text-decoration-none" href="https://github.com/EmmanuelCobian/rate-my-classes" target="_blank">
                    <p className={classnames(styles.exp_title, styles.exp_share)}>Rate My Classes <i className="bi-arrow-up-right"></i></p>
                  </a>
                  <p>
                    Built from the ground up using Next.js and MySQL, Rate My Classes is a web application that allows UC Berkeley students to rate and review their classes. The application uses an express.js server to handle API requests and a MySQL database to store user data such as login information, reviews, and ratings.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Next.js</Badge>
                  <Badge pill className={styles.text_bg_custom}>Styled Components</Badge>
                  <Badge pill className={styles.text_bg_custom}>Web Scraping</Badge>
                  <Badge pill className={styles.text_bg_custom}>SQL</Badge>
                  <Badge pill className={styles.text_bg_custom}>Databases</Badge>
                </div>
              </div>

              <div className={styles.proj_itm}>
                <div className={styles.proj_desc}>
                  <a className="text-decoration-none" href="https://github.com/EmmanuelCobian/face-api" target="_blank">
                    <p className={classnames(styles.exp_title, styles.exp_share)}>Facial Expressions Music Player <i className="bi-arrow-up-right"></i></p>
                  </a>
                  <p>
                    This web application uses facial recognition to detect a user's facial expressions and play music based on the emotion detected. The application uses the face-api.js library to detect facial expressions.
                  </p>
                  <Badge pill className={styles.text_bg_custom}>Javascript</Badge>
                  <Badge pill className={styles.text_bg_custom}>Web Sockets</Badge>
                  <Badge pill className={styles.text_bg_custom}>Facial Recognition</Badge>
                  <Badge pill className={styles.text_bg_custom}>MaxMSP</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >

      <footer className="container text-center py-4">
        <p>&copy; 2023 Emmanuel Cobian Duarte</p>
      </footer>
    </>
  );
}
