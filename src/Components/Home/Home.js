import React from 'react';
import { Button } from '@material-ui/core';
import {Card } from 'react-bootstrap';
import './Home.css'
import  child from '../../images/childSupport.png';
import  refuge from '../../images/refuseShelter.png';
import  food from '../../images/foodCharity.png';

import  cloth from '../../images/clothSwap.png';
import  river from '../../images/riverClean.png';
import  water from '../../images/cleanWater.png';
import  education from '../../images/goodEducation.png';
import  book from '../../images/newBooks.png';
import  group from '../../images/studyGroup.png';
import  birdHouse from '../../images/birdHouse.png';
import  library from '../../images/libraryBooks.png';
import  drive from '../../images/driveSafety.png';
import  music from '../../images/musicLessons.png';
import  register from '../../images/voteRegister.png';
import  clean from '../../images/clearnPark.png';
import  it from '../../images/ITHelp.png';
import  animal from '../../images/animalShelter.png';
import  hello from '../../images/babySit.png';
import  stuffedAnimal from '../../images/stuffedAnimals.png';
import  school from '../../images/schoolSuffiles.png';
import { Link, useHistory } from 'react-router-dom';







const Home = () => {

    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/register');
    }
    return (
        <div>
            <div className="App">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input type="text" placeholder="search"/>
                <Button color="primary">Search</Button>
                <br/>
           </div>
           <div  className="Card">
                <div className="flex-container">


                <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={child} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Child Support</button>
                            </Card.Body>
                    </Card>     
                </div>
                <br/><br/>
                <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={refuge} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Refuge shelter</button>
                            </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{width:'23rem' }}>
                        
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={food} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Food Charity</button>
                            </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={cloth} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Host a clothing swap</button>
                            </Card.Body>
                    </Card>
                </div>
                <br/>
                <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={river} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Host a river clean-ap</button>
                            </Card.Body>
                    </Card>
                </div>
                <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={water} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Clean water for children</button>
                            </Card.Body>
                    </Card>
                   </div>
                    <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={education} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Good education</button>
                            </Card.Body>
                    </Card>
                    </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={book} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">New books for children</button>
                            </Card.Body>
                    </Card>
                   </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={group} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Host a study group</button>
                            </Card.Body>
                    </Card>
                   </div>
                 <div>
                 <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={birdHouse} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Build birdhouses for your neighbors</button>
                            </Card.Body>
                    </Card>
                 </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={library} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Organize books at the library</button>
                            </Card.Body>
                    </Card>
                   </div>
                  <div>
                  <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={drive} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Give a seminar on driving safety</button>
                            </Card.Body>
                    </Card>
                  </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={music} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Give free music lessons</button>
                            </Card.Body>
                    </Card>
                   </div>
                    <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={register} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Teach people how to register to vote</button>
                            </Card.Body>
                    </Card>
                    </div>
                    <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={clean} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Clean up your local park</button>
                            </Card.Body>
                    </Card>
                    </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={it} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Give IT help to local adults</button>
                            </Card.Body>
                    </Card>
                   </div>
                    <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={animal} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Foster a shelter animal</button>
                            </Card.Body>
                    </Card>
                    </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={hello} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Babysit during PTA meetings</button>
                            </Card.Body>
                    </Card>
                   </div>
                   <div>
                   <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={stuffedAnimal} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Collect stuffed animals</button>
                            </Card.Body>
                    </Card>
                   </div>
                   <div>
                    <Card style={{width:'23rem' }}>
                            <Card.Img onClick={handleProceedCheckout} variant="top" src={school} />
                            <Card.Body>
                                <button onClick={handleProceedCheckout} className="btn btn-primary">Collect school supplies</button>
                            </Card.Body>
                    </Card>
                  </div>


                </div>
             </div>
           
        </div>
    );
};

export default Home;