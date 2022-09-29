import React from 'react'

const Map = () => {
    return (
        <div>
            <iframe  id="gmap_canvas"
            className='w-[100%] md:h-96 h-60' 
            src="https://maps.google.com/maps?q=Groupe%20Khoder,%202300%20Boul%20Saint-Martin%20Est,%20Laval,%20QC%20H7E%205P3&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            ></iframe>
        </div>
    )
}

export default Map
