import React from 'react';
import Modal from 'react-modal';
import css from '../../dist/styles.css';

const customStyles = {
    content : {
      top : '0',
      left : '0',
      right : '0',
      bottom : '0',
    }
  };

class Amenities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.onAllAmenitiesClick = this.onAllAmenitiesClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.iconContent = {
            wifi: 'Continuous access in the listing',
            'laptop friendly workspace': 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
            essentials: 'Towels, bed sheets, soap, and toilet paper',
            heating: 'Central heating or a heater in the listing',
            kitchen: 'Space where guests can cook their own meals',
            bedlinens: 'Extra pillows and blankets',
            'Laptop friendly workspace': 'A table or desk with space for a laptop and a chair that’s comfortable to work in'
          }
    }
    componentWillMount() {
        Modal.setAppElement('body');
    }
    onAllAmenitiesClick() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    
    render() {
        let svgKitchen = <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" 
        style={{
            height: '19px',
            width: '19px',
            fill: '#484848'
        }}
            ><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd"></path></svg>
        let svgTv = <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{
            height: '19px',
            width: '19px',
            fill: '#484848'
        }}
            ><path d="m21.5 6h-9.07l3.49-5.22a.5.5 0 1 0 -.83-.55l-3.86 5.77h-2.46l-3.85-5.78a.5.5 0 0 0 -.83.55l3.48 5.23h-5.07a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-6.49-12.5h-11.02a2.49 2.49 0 0 0 -2.49 2.49v7.02a2.5 2.5 0 0 0 2.49 2.49h11.02a2.49 2.49 0 0 0 2.49-2.49v-7.02a2.5 2.5 0 0 0 -2.49-2.49zm1.49 9.51c0 .82-.67 1.49-1.49 1.49h-11.02c-.82 0-1.49-.67-1.49-1.49v-7.02c0-.82.67-1.49 1.49-1.49h11.02c.82 0 1.49.67 1.49 1.49zm4-8.51a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd"></path></svg>
        let svgWifi = <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{
            height: '19px', 
            width: '19px',
            fill: '#484848'
        }}
            ><path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fillRule="evenodd"></path></svg>
        let svgLaptop = <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" 
        style={{
            height: '19px', 
            width: '19px', 
            fill: '#484848'
        }}
        ><path d="m5.5 5h-.5v8h14v-8zm12.5 7h-12v-6h12zm5.9 6.69-.04-.05-.11-.14-.4-.51-1.2-1.55-1.15-1.47v-10.97a1 1 0 0 0 -.99-1h-16.02c-.55 0-.99.45-.99 1v10.95l-.19.24c-.6.76-1.2 1.53-1.76 2.26l-.16.21c-.29.37-.55.72-.79 1.04l-.1.13v.17c0 1.35.65 2 2 2h20c1.17 0 2-.71 2-2v-.17l-.11-.14zm-19.9-14.69h16.01c-.01 0-.01 7.92-.01 10h-16zm18 16h-20c-.73 0-.96-.2-.99-.85.21-.28.43-.56.66-.87l.16-.21a229.93 229.93 0 0 1 2.33-2.98l.07-.09h15.51l1.6 2.06 1.2 1.55a4708182.18 4708182.18 0 0 1 .42.54c-.05.59-.38.86-.98.86zm-7.52-3.62a.5.5 0 0 0 -.48-.38h-4a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h5a .5.5 0 0 0 .49-.62l-.5-2zm-4.34 1.62.25-1h3.22l.25 1z" fillRule="evenodd"></path></svg>

        let svgButton = <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" 
        style= {{
            height: '16px',
            width: '16px',
            display: 'block', 
            fill: 'rgb(118, 118, 118)'
        }}
        ><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>

        return (
            <section className={css['amenities-main']}>
             <br/>
             Amenities
             
             <div className={css['amenities-icon']}>
                <div className={css['two-svg1']}>
                    <div className={css.icon1}>
                        <div className={css['kitchen-icon']}>{svgKitchen}</div>
                        <div className={css.kitchen}>Kitchen</div>
                    </div>
                    <div className={css.icon2}>
                        <div className={css['tv-icon']}>{svgTv}</div>
                        <div className={css['tv']}>TV</div>
                    </div>
                </div>
                <div className={css['two-svg2']}>
                    <div className={css.icon3}>
                        <div className={css['wifi-icon']}>{svgWifi}</div>
                        <div className={css['wifi']}>Wifi</div>
                    </div>
                    <div className={css.icon4}>
                        <div className={css['laptop-icon']}>{svgLaptop}</div>
                        <div className={css['laptop-space']}>Laptop friendly workspace</div>
                    </div>
                </div>
                <div>

                </div>
             </div>
             <div className={css['all-amenities']} onClick={this.onAllAmenitiesClick}>Show all 6 amenities</div>
             <hr/>
             <Modal style={customStyles}
                isOpen={this.state.showModal}
                contentLabel="Amenities"
                >
                <button className={css['close-button']} onClick={this.handleCloseModal}>{svgButton}</button>
                <div className={css['all-amenities-main']}>
                    <div className={css['amenities-title']}>Amenities</div>
                    <section>
                        <div className={css['basic-title']}>Basic</div>
                            <div className={css['wifi-amenity']}>Wifi</div>
                            <div className={css['wifi-content']}>{this.iconContent.wifi}</div>
                            <hr />
                            <div className={css['laptop-amenity']}>Laptop friendly workspace</div>
                            <div className={css['laptop-content']}>{this.iconContent["Laptop friendly workspace"]}</div>
                            <hr />
                            <div className={css['essentials-amenity']}>Essentials</div>
                            <div className={css['essentials-content']}>{this.iconContent.essentials}</div>
                            <hr />
                            <div className={css['heating-amenity']}>Heating</div>
                            <div className={css['heating-content']}>{this.iconContent.heating}</div>
                            <hr />
                        <div className={css['dining-title']}>Dining</div>
                            <div className={css['kitchen-amenity']}>Kitchen</div>
                            <div className={css['kitchen-content']}>{this.iconContent.kitchen}</div>
                            <hr />
                        <div className={css['bed-title']}>Bed and bath</div>
                            <div className={css['bed-amenity']}>Bed linens</div>    
                            <div className={css['bed-content']}>{this.iconContent.bedlinens}</div>
                    </section>
                </div>
            </Modal>
            </section>
        ); 
    }
}

export default Amenities;