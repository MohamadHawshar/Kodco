import React from 'react'

const Map = () => {
    return (
        <div>
            <iframe loading="lazy" title="map" id="gmap_canvas"
            className='w-[100%] md:h-96 h-60' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.136081324172!2d-73.76193401418998!3d45.56770199649702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc923e98bf332e7%3A0xc6e3d6bb43763217!2s201-2572%20Bd%20Daniel-Johnson%2C%20Laval%2C%20QC%20H7T%202R3!5e0!3m2!1sen!2sca!4v1764105317404!5m2!1sen!2sca"></iframe>
        </div>
    )
}
export default Map