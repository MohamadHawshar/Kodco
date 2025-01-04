import React from 'react'

const Map = () => {
    return (
        <div>
            <iframe loading="lazy" title="map" id="gmap_canvas"
            className='w-[100%] md:h-96 h-60' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1396.2555814139732!2d-73.70875062125299!3d45.58026809488697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92185f6dda531%3A0x3dd736aed02ebb32!2s154%20Blvd.%20Saint-Martin%20O%2C%20Laval%2C%20QC%20H7M%203Y8!5e0!3m2!1sen!2sca!4v1732934591898!5m2!1sen!2sca"  
            ></iframe>
        </div>
    )
}
export default Map