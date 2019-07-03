import React, { Component, PureComponent } from 'react'
import GoogleMapReact from 'google-map-react'
import '../css/components/Map.css'
import * as mapColors from '../assets/mapColors'

import LocationDetails from './LocationDetails'

class Map extends Component {
  constructor () {
    super()

    this.key = 'AIzaSyDTU84muGvyMf0JCKoR6Ks4KY2LPVO9tTs'
    this.center = {
      lat: 28.595582,
      lng: -81.352317
    }
    this.zoom = 17

    this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? mapColors.dark
      : mapColors.light
  }

  createMapOptions = (maps) => {
    return {
      fullscreenControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: maps.ControlPosition.TOP_LEFT
      },
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      clickableIcons: false,
      styles: this.colorScheme
    }
  }

  render () {
    return (
      <section className='map'>
        <div id='map' className='mapbox' tabIndex={-1}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: this.key }}
            defaultCenter={this.center}
            defaultZoom={this.zoom}
            options={this.createMapOptions}
          >
            <Marker lat={this.center.lat} lng={this.center.lng} />
          </GoogleMapReact>
        </div>
        <LocationDetails />
      </section>
    )
  }
}

export default Map

class Marker extends PureComponent {
  render () {
    return (
      <div className='marker'>
        <div className='marker-icon' />
      </div>
    )
  }
}
