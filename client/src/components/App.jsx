import React from 'react';
import $ from 'jquery';
import Superhost from './Superhost.jsx';
import GreatCheckin from './GreatCheckin.jsx';
import SparklingClean from './SparklingClean.jsx';
import GreatLocation from './GreatLocation.jsx';
import SelfCheckin from './SelfCheckin.jsx';
import Amenities from './Amenities.jsx';
import css from '../../dist/styles.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            listings: [],
            displaySpaceText: false
        }
        this.displaySpaceInfo = this.displaySpaceInfo.bind(this);
    }

    componentDidMount() {
        $.get({
            url: `/listings/${window.location.href.match(/id\s*=\s*(.*)/)[1]}`,
            success: (data) => {
                this.setState({listings: data});
            }
        });
    }
    displaySpaceInfo() {
        this.setState({
           displaySpaceText: !this.state.displaySpaceText
        })
    }
    render() {
        let svgIcon = <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{
            height:'10px',
            width:'10px',
            display:'block',
            fill:'#008489',
        }}
            ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>;
        let svgBed = <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{
            height: '24px',
            width: '24px',
            fill: '#484848'
        }}
        ><path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fillRule="evenodd"></path></svg>;

        let {title,city, hostImage, roomInfo, numberOfGuests, numberOfBedrooms,numberOfBaths,numberOfBeds,isSuperhost,isGreatCheckIn,isSparklingClean,isGreatLocation,isSelfCheckIn, description} = this.state.listings;
        
        return (
            <div className={css.main}>
                <div className={css['title-summary-div']}>
                    <div className={css['innercontent-div']}>
                        <div className={CSS.title}>
                            <h1><span>{title}</span></h1>
                        </div>
                        <div className={css['city-name']}>
                            {city}
                        </div>
                    </div>
                    <div className={css['host-image']}><img className={css['host-image']} src={hostImage}/>
                    </div>   
                </div>
                <div className={css.highlights}>
                    <div className={css['room-info']}>
                        <div className={css.icon}><i className="fas fa-home fa-xs"></i></div>
                        <div className={css['room-description']}>
                        <div className={css['room-title']}>
                            {roomInfo}
                        </div>
                        <div className = {css['guest-info-block']}>
                            <div className = {css['guest-info']}>{numberOfGuests} guests</div>
                            <div className = {css['guest-info']}>{numberOfBedrooms} {numberOfBedrooms === 1? 'bedroom':'bedrooms'}</div>
                            <div className = {css['guest-info']}>{numberOfBeds} {numberOfBeds === 1? 'bed':'beds'}</div>
                            <div className = {css['guest-info']}>{numberOfBaths} {numberOfBaths === 1? 'bath':'baths'}</div>
                        </div>
                        </div>
                    </div>

                    {isSuperhost && <Superhost/>}    
                    {isGreatCheckIn && <GreatCheckin/>}
                    {isSparklingClean && <SparklingClean/>}
                    {isGreatLocation && <GreatLocation/>}
                    {isSelfCheckIn && <SelfCheckin/>}
                </div>
                <hr/>
                <div className={css['space-intro']}>
                    <p>New renovated Garden Suite with separated entrance, private Living room, private Bathroom</p>
                </div>
                {/* {this.state.displaySpaceText ? ( */}
                    <div className={this.state.displaySpaceText ? `${css.space} ${css['space-visible']}` : css.space}>
                         <p><b>The Space</b></p>
                         <p>{description}</p>
                    </div>
                {/* ): null} */}
                <div className={css['space-onclick']} onClick={this.displaySpaceInfo}>
                    {this.state.displaySpaceText ? 'Hide' : 'Read more about the space'}
                    <div className={css['arrow-svg']}>
                        {svgIcon}
                    </div>
                </div>
                <br />
                <p className={css.host}>Contact host</p>
                <hr/>
                <div>
                    <Amenities />
                </div>
                <section className={css['sleeping-block']}>
                    <div className={css['sleeping-title']}>Sleeping Arrangements</div>
                    <div className={css['sleeping-border']}>
                        <div className={css['svg-bed']}>{svgBed}</div>
                        <div className={css['bedroom-num-sleeping']}>{numberOfBedrooms === 1? 'Bedroom':'Bedrooms'} {numberOfBedrooms}</div>
                    </div>
                    <hr />
               </section>
            </div>
        );
    }
}


export default App;