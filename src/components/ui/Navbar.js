import React, { useState } from "react";

export const Navbar = () => {
    
    const [ isClicked, setClicked ] = useState( false );

    const handleToggle = ()=>{
        setClicked(!isClicked)
        console.log(isClicked);
    };
  
    return (
        <div>

            <p id='info__banner' className='w-100'>Envios a todo el país -- Todos los medios de pago</p>
            
            <nav className="navbar navbar-expand-sm navbar-light p-0">
                <div className="container-fluid p-0">

                    <div id="navbar__content">

                        <div id="up__nav" className="row-md">

                            <div className="col-2">

                                <button className="btn__navbar pointer">

                                    <i className="fas fa-mobile-alt"></i>
                                    +5491152629878

                                </button>

                                <button className="btn__navbar pointer">

                                    <i className="far fa-envelope"></i>
                                    nmfitness@gmail.com

                                </button>
                            </div>

                            <div className="col-2 justify-content-end">

                                <button className="btn__navbar pointer">Contacto</button>

                                <button className="btn__navbar pointer">

                                    <i className="fas fa-user me-1"></i>Mi Cuenta

                                </button>

                                <button className="btn__navbar pointer">

                                    Carrito
                                    <i className="fas fa-shopping-cart me-1"></i>
                                    
                                </button>
                            </div>
                        </div>

                        <div id="down__nav" className="row-md navbar-nav">
                            <div className="col-5 mt-4 ms-2 navbar-brand">
                                <img
                                    src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/29/292371429/logo-2021090218094180200.png"
                                    alt="NM Fitness Store"
                                />
                            </div>

                            <div id="list__items" className="col-5 d-flex">

                                <ul className="navbar-nav">

                                    <li className="nav-item dropdown">

                                        <a className="nav__item dropdown" role="button" data-bs-toggle="dropdown">

                                            ACCESORIOS
                                            
                                        </a>
                                        
                                        <ul className="nav__item-dropdown dropdown-menu">

                                            <li><a role='button' className="nav__dropdown-item">Arm Blaster</a></li>
                                            <li><a role='button' className="nav__dropdown-item">Wraps</a></li>
                                            <li><a role='button' className="nav__dropdown-item">Vendas</a></li>
                                            <li><a role='button' className="nav__dropdown-item">Ver Todo</a></li>

                                        </ul>
                                    
                                    </li>

                                    <li className="nav-item dropdown">
                                        
                                        <a className="nav__item" role="button" data-bs-toggle="dropdown">
                                            
                                            INDUMENTARIA


                                        </a>
                                        
                                        <ul id="indumentaria__dropdown" className="nav__item-dropdown dropdown-menu pb-0">

                                            <li><a role='button' className="nav__dropdown-item">Remeras</a></li>
                                            <li><a role='button' className="nav__dropdown-item">Ver Todo</a></li>

                                        </ul>

                                    </li>

                                    <li className="nav-item">
                                        <a className="nav__item" role="button">
                                    
                                            SOBRE NOSOTROS
                                            
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav__item" role="button" >
                                        
                                            CONTACTO
                                        
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav__item" role="button" >

                                            PREGUNTAS FRECUENTES
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <p>
                                    <a role='button'
                                        className="btn__navbar"
                                        onClick={ handleToggle }
                                    >   
                                        <i className="fas fa-search"></i>Search
                                    </a>
                                </p>
                                <form>
                                    {
                                    isClicked 
                                        
                                        ? <div>
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                            <button className="btn btn-dark" type="submit">Search</button> 
                                            </div>
                                        
                                        : null
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

  );
};
