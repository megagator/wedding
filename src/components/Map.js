import React, { Component, PureComponent } from 'react'
import GoogleMapReact from 'google-map-react'
import '../css/components/Map.css'

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
  }

  createMapOptions (maps) {
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
      styles: [
        {
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#ebe3cd'
            }
          ]
        },
        {
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#523735'
            }
          ]
        },
        {
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#f5f1e6'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#c9b2a6'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#dcd2be'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#ae9e90'
            }
          ]
        },
        {
          'featureType': 'administrative.neighborhood',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dfd2ae'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dfd2ae'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#93817c'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#a5b076'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#447530'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#f5f1e6'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#fdfcf8'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#f8c967'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#e9bc62'
            }
          ]
        },
        {
          'featureType': 'road.highway.controlled_access',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#e98d58'
            }
          ]
        },
        {
          'featureType': 'road.highway.controlled_access',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#db8555'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#806b63'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dfd2ae'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#8f7d77'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#ebe3cd'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dfd2ae'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#b9d3c2'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#92998d'
            }
          ]
        }
      ]
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
