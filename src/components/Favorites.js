import { connect } from "react-redux";
import '../assets/css/favourites.css'
import React, { Component } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { addCity, removeCity } from '../store/reducers/citiesReducer';
import { AiOutlineClose } from "react-icons/ai";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            active: false,
            isFavourite: false,
            listOfCities: []
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    togglefavourite() {
        const currentState = this.state.isFavourite;
        this.setState({ isFavourite: !currentState });
    };

    addCityReducer = () => {
        this.props.addCity(this.props.city);
    };

    removeCityReducer = (index) => {
        this.props.removeCity(index);
    };

    componentDidMount = () => {
        this.setState({ cities: this.props.cities, id: this.props.cities.length + 1});
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city)
            this.setState({ isFavourite: false });

        this.props.cities.cities.forEach(city => {  
            if(nextProps.city == city && this.state.isFavourite == false)
                this.setState({ isFavourite: true });   
        });

    }

    render() {
        return (
            <div className='favourites-container'>
                <div className='favourites-icon'>
                    <span className="favourites-icon__add">
                        {this.state.isFavourite ? 
                            <MdFavorite onClick={() => {
                                this.removeCityReducer(this.state.id);
                                this.togglefavourite();
                                }
                            }/>
                        :
                            <MdOutlineFavoriteBorder onClick={() => {
                                this.addCityReducer();
                                this.togglefavourite();
                                }
                            }/>
                        }
                        
                    </span>
                    <span className='favourites-icon__list' onClick={() => this.toggleClass()}>
                        <IoMdArrowDropup className={this.state.active ? 'arrow-icon active': 'arrow-icon'} />
                    </span>
                </div>
                <div className={this.state.active ? 'favourites-list active': 'favourites-list'}>
                    {this.props.cities.cities.map((city, index) => {
                        return (
                        <div key={index} className="favourite-list__container">
                            <p className="favourite-list__name">
                                <button onClick={(e) => this.props.setCitySearch(e.target.textContent)}>{city}</button>
                            </p>
                            <button onClick={() => {
                                this.setState({ isFavourite: false });
                                this.removeCityReducer(index);
                                }
                            }
                             className="favourite-list__delete-icon">
                                <AiOutlineClose />
                            </button>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addCity: (city) => dispatch(addCity(city)),
        removeCity: (city) => dispatch(removeCity(city)),
    }
};

const mapStateToProps = state => {
    return {
        cities:  state.cities
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
