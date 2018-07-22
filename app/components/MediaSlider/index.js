import React from 'react';
import { map } from 'ramda';

import { Carousel } from 'react-responsive-carousel';

export default class MediaSlider extends React.Component {
    componentWillMount() {
        function importAll(r) {
          let images = [];
          map(item => { 
            const fileName = item.replace('./', '');
            images.push({
                name: fileName,
                file: r(item),
            });
          }, r.keys());
        
          return images;
        }
        // Temporary solution till s3 bucket is created 
        // Not in coverage
        const images = importAll(require.context('../../images/photagraphy/headshots', false, /\.(png|jpe?g|svg)$/));
        this.setState({ gallary: images });
    }
    
    render() {
        return <Carousel autoPlay>
            {
                map(item => {
                    return <div key={item.name}>
                    <img src={item.file} />
                    <p className="legend">{item.name}</p>
                </div>
            }, this.state.gallary)
          }
        </Carousel>;
    }
}
