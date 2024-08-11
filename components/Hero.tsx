import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex items-center flex-col gap-10 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  bg-texture  ">
      
      <div className='  bg-white border-white rounded-lg container'   >
      <div className="overlay"></div>
      <p>
      <video autoPlay  muted loop className=' rounded-lg flex-wrap border-gray-30 '>
      <source src="/videos/ARTEMAOK.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
       </video>
       <a className=' relative    flex '> 
         <Button
         type="button" 
         title="3D Design" 
         icon="/play.svg"
         variant="btn_white_text" />
         <Button
         type="button" 
         title="Fullstack Web" 
         icon="/play.svg"
         variant="btn_white_text" />
         <Button
         type="button" 
         title="VR & AR" 
         icon="/play.svg"
         variant="btn_white_text" />
       </a>
       <video autoPlay muted loop className=' rounded-lg flex-center gap-20 border-gray-30 '>
      <source src="/videos/interior mushola.mp4" type="video/mp4" />
      Your browser does not support the video tag.
       </video> </p>
      </div>
      
      <div className='relative z- flex flex-2 flex-col justify-normal' >
        <h1 className="bold-52 lg:bold-50 text-white" >We Design Your Future</h1>
        <p className=" text-white font-semibold xl:max-w-[520px] ">
          Loka.Tech as a company has brought vision and mission for technology of software engineering and
          VR & AR integrated planning for building numerous projects with excellent leaps of
          the future
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={60}
                height={60}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-white">
            More than 10+ Projects With Great Reviews
            <span className="regular-16 lg:regular-20 ml-1"> in various sectors :</span>
          </p>
        </div>

        <div className=" container flex-wrap space-y-3 items-end flex-col w-full gap-3 sm:flex-row max-2xl:">
          <Button 
            type="button" 
            title="Infrastucture"
            icon="/play.svg" 
            variant="btn_white_text" 
          />
          <Button 
            type="button" 
            title="Governence" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
          <Button 
            type="button" 
            title="Business" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
          
          
          
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        
      </div>
    </section>
  )
}

export default Hero